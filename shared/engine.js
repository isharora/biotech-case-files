/* Case Files engine: renders a case (registered with registerCase) into an interactive long-form page.
   Content lives in cases/<id>.js; this file only knows how to draw section types. See GUIDE.md. */
(function () {
  const W = window;
  W.CASES = W.CASES || {};
  W.registerCase = c => { W.CASES[c.id] = c; };

  // ---------- helpers ----------
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
  const fmt = (n, d = 0) => (n == null || isNaN(n)) ? '–' : Number(n).toLocaleString('en-US', {maximumFractionDigits: d, minimumFractionDigits: d});
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const store = {
    get: (k, d) => { try { const v = localStorage.getItem('cf:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: (k, v) => { try { localStorage.setItem('cf:' + k, JSON.stringify(v)); } catch (e) {} },
  };
  const color = i => `var(--s${((i ?? 0) % 8) + 1})`;
  W.CF = {esc, fmt, store, color};

  // ---------- theme ----------
  const QS = new URLSearchParams(location.search);
  const theme = QS.get('theme') || store.get('theme', null);
  if (theme) document.documentElement.dataset.theme = theme;
  else if (matchMedia('(prefers-color-scheme: dark)').matches) document.documentElement.dataset.theme = 'dark';
  function toggleTheme() {
    const d = document.documentElement, next = d.dataset.theme === 'dark' ? 'light' : 'dark';
    d.dataset.theme = next; store.set('theme', next);
  }

  // ---------- glossary terms: [[term]] or [[term|shown text]] ----------
  let GLOSS = {};
  const missingTerms = new Set();
  function terms(html) {
    return String(html ?? '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (m, key, shown) => {
      const k = key.trim().toLowerCase();
      if (!GLOSS[k]) { missingTerms.add(key.trim()); return shown || key; }
      return `<span class="term" data-term="${esc(k)}">${shown || key}</span>`;
    });
  }

  // ---------- tooltip ----------
  let tip;
  function showTip(e, html) {
    tip.innerHTML = html; tip.style.display = 'block';
    const r = tip.getBoundingClientRect();
    let x = e.clientX + 14, y = e.clientY + 16;
    if (x + r.width > innerWidth - 10) x = e.clientX - r.width - 14;
    if (y + r.height > innerHeight - 10) y = e.clientY - r.height - 14;
    tip.style.left = Math.max(8, x) + 'px'; tip.style.top = Math.max(8, y) + 'px';
  }
  function hideTip() { tip.style.display = 'none'; }
  function wireTips() {
    tip = el('div'); tip.id = 'tip'; document.body.appendChild(tip);
    document.addEventListener('mousemove', e => {
      const t = e.target.closest && e.target.closest('.term, [data-tip]');
      if (!t) return hideTip();
      if (t.classList.contains('term')) { const g = GLOSS[t.dataset.term]; showTip(e, `<b>${esc(g.term)}</b><br>${g.def}`); }
      else showTip(e, t.dataset.tip);
    });
    document.addEventListener('scroll', hideTip, {passive: true});
  }

  // ---------- charts ----------
  function niceTicks(max, n = 5) {
    if (!(max > 0)) return [0, 1];
    const raw = max / n, p = 10 ** Math.floor(Math.log10(raw));
    const step = [1, 2, 2.5, 5, 10].map(k => k * p).find(k => k >= raw);
    const out = []; for (let v = 0; v <= max + step * 0.001; v += step) out.push(+v.toFixed(10));
    if (out[out.length - 1] < max) out.push(+(out[out.length - 1] + step).toFixed(10));
    return out;
  }
  const dp = v => v % 1 === 0 ? 0 : Math.abs(v) < 10 ? (Math.abs(Math.round(v * 10) - v * 10) < 1e-9 ? 1 : 2) : 1;
  const tickFmt = (v, u = '') => ['$B', '$M', '%'].includes(u) ? unitFmt(v, u) : fmt(v, dp(v));   // word units only on value labels, not ticks
  const unitFmt = (v, u = '') => u === '$B' ? '$' + fmt(v, dp(v)) + 'B' : u === '$M' ? '$' + fmt(v, dp(v)) + 'M' : u === '%' ? fmt(v, dp(v)) + '%' : fmt(v, dp(v)) + (u ? ' ' + u : '');
  function legendHtml(series, line) {
    if (series.length < 2) return '';
    return `<div class="legend">${series.map((s, i) => `<span><span class="${line ? 'ln' : 'sw'}" style="background:${color(s.color != null ? s.color - 1 : i)}"></span>${esc(s.name)}</span>`).join('')}</div>`;
  }
  function chartFrame(spec, inner) {
    return `<div class="chartbox">${spec.title ? `<h4>${esc(spec.title)}</h4>` : ''}${spec.subtitle ? `<div class="sub">${terms(spec.subtitle)}</div>` : ''}${inner}${spec.note ? `<div class="caption">${terms(spec.note)}</div>` : ''}</div>`;
  }

  // line + km (step) charts share an x/y frame with a hover crosshair
  function xyChart(spec, step) {
    const Wd = 720, H = spec.height || 300, R = spec.rightPad || 24, T = 16, B = 40; let L = 54;
    const series = spec.series || [];
    const xs = series.flatMap(s => s.points.map(p => p[0]));
    const xMin = spec.xMin ?? Math.min(...xs), xMax = spec.xMax ?? Math.max(...xs);
    const yMaxData = Math.max(...series.flatMap(s => s.points.map(p => p[1])));
    const yT = spec.yTicks || niceTicks(spec.yMax ?? yMaxData), yMax = yT[yT.length - 1];
    L = Math.max(54, 14 + 7 * Math.max(...yT.map(v => tickFmt(v, spec.unit).length)));   // room for the longest tick label
    const X = x => L + (Wd - L - R) * (x - xMin) / ((xMax - xMin) || 1), Y = y => T + (H - T - B) * (1 - Math.min(y, yMax) / yMax);   // clamp at the top
    let s = `<svg class="chart" viewBox="0 0 ${Wd} ${H}" width="100%" role="img" aria-label="${esc(spec.title || 'chart')}">`;
    yT.forEach(v => s += `<line class="grid" x1="${L}" x2="${Wd - R}" y1="${Y(v)}" y2="${Y(v)}"/><text x="${L - 8}" y="${Y(v) + 4}" text-anchor="end">${tickFmt(v, spec.unit)}</text>`);
    const xT = spec.xTicks || (() => { const t = niceTicks(xMax - xMin, 7).map(v => v + xMin); return t.filter(v => v <= xMax); })();
    xT.forEach(v => s += `<text x="${X(v)}" y="${H - B + 18}" text-anchor="middle">${spec.xFmt ? spec.xFmt(v) : v}</text>`);
    if (spec.xLabel) s += `<text x="${(L + Wd - R) / 2}" y="${H - 4}" text-anchor="middle">${esc(spec.xLabel)}</text>`;
    (spec.annotations || []).forEach(a => {
      s += `<line x1="${X(a.x)}" x2="${X(a.x)}" y1="${T}" y2="${H - B}" class="axis" stroke-dasharray="4 4"/>`;
      const nearRight = X(a.x) > Wd - R - 150;
      s += `<text x="${X(a.x) + (nearRight ? -5 : 5)}" y="${T + 12 + (a.dy || 0)}" class="lbl" text-anchor="${nearRight ? 'end' : 'start'}">${esc(a.label)}</text>`;
    });
    series.forEach((se, i) => {
      const c = color(se.color != null ? se.color - 1 : i), pts = se.points.slice().sort((a, b) => a[0] - b[0]);
      let d = '';
      pts.forEach((p, j) => {
        if (!j) d += `M${X(p[0])},${Y(p[1])}`;
        else d += step ? `H${X(p[0])}V${Y(p[1])}` : `L${X(p[0])},${Y(p[1])}`;
      });
      if (step && spec.xMax != null && pts[pts.length - 1][0] < spec.xMax && se.extend !== false) d += `H${X(Math.min(spec.xMax, se.extendTo ?? spec.xMax))}`;
      s += `<path d="${d}" fill="none" stroke="${c}" stroke-width="2.25" stroke-linejoin="round" ${se.dashed ? 'stroke-dasharray="6 5"' : ''}/>`;
      if (!step && pts.length <= 40) pts.forEach(p => s += `<circle cx="${X(p[0])}" cy="${Y(p[1])}" r="3" fill="${c}" stroke="var(--panel)" stroke-width="1.5"/>`);
      if (se.label !== false && series.length > 1 && series.length <= 4) { const lp = pts[pts.length - 1]; s += `<text class="val" x="${Math.min(X(lp[0]) + 6, Wd - R - 2)}" y="${Y(lp[1]) + 4 + (se.labelDy || 0)}" text-anchor="${X(lp[0]) + 60 > Wd - R ? 'end' : 'start'}">${esc(se.short || se.name)}</text>`; }
    });
    (spec.markers || []).forEach(m => {
      const c = color(m.series ?? 0);
      s += `<line x1="${X(m.x)}" x2="${X(m.x)}" y1="${Y(m.y ?? 50)}" y2="${H - B}" stroke="${c}" stroke-dasharray="3 3"/><circle cx="${X(m.x)}" cy="${Y(m.y ?? 50)}" r="4" fill="${c}"/>`;
      if (m.label) s += `<text class="val" x="${X(m.x) + 6}" y="${Y(m.y ?? 50) - 6 + (m.dy || 0)}">${esc(m.label)}</text>`;
    });
    s += `<line class="axis" x1="${L}" x2="${Wd - R}" y1="${Y(0)}" y2="${Y(0)}"/>`;
    s += `<line class="cross hidden" x1="0" x2="0" y1="${T}" y2="${H - B}"/><rect class="hit" x="${L}" y="${T}" width="${Wd - L - R}" height="${H - T - B}"/></svg>`;
    const valueAt = (se, x) => {
      const pts = se.points.slice().sort((a, b) => a[0] - b[0]);
      if (step) { let v = null; for (const p of pts) { if (p[0] <= x + 1e-9) v = p[1]; else break; } return x > (se.extendTo ?? spec.xMax ?? Infinity) ? null : v; }
      let best = null, bd = Infinity; pts.forEach(p => { const d = Math.abs(p[0] - x); if (d < bd) { bd = d; best = p; } });
      return best && bd <= (spec.snap ?? (xMax - xMin) / 20) ? best[1] : null;
    };
    const html = chartFrame(spec, legendHtml(series, true) + s);
    return {html, wire(root) {
      const svg = $('svg.chart', root), hit = $('.hit', svg), cross = $('.cross', svg);
      hit.addEventListener('mousemove', e => {
        const r = svg.getBoundingClientRect(), px = (e.clientX - r.left) * Wd / r.width;
        let x = xMin + (px - L) / (Wd - L - R) * (xMax - xMin);
        if (!step) { const all = [...new Set(xs)].sort((a, b) => a - b); x = all.reduce((a, b) => Math.abs(b - x) < Math.abs(a - x) ? b : a, all[0]); }
        cross.classList.remove('hidden'); cross.setAttribute('x1', X(x)); cross.setAttribute('x2', X(x));
        const rows = series.map((se, i) => { const v = valueAt(se, x); return v == null ? '' : `<br><span class="sw" style="background:${color(se.color != null ? se.color - 1 : i)}"></span>${esc(se.name)}: <b>${unitFmt(+v.toFixed(2), spec.unit)}</b>`; }).join('');
        showTip(e, `<b>${spec.xFmt ? spec.xFmt(x) : (step ? (spec.xLabel ? esc(spec.xLabel) + ' ' : '') + fmt(x, 0) : x)}</b>${rows}${spec.tipNote ? `<br><span class="m">${esc(spec.tipNote)}</span>` : ''}`);
      });
      hit.addEventListener('mouseleave', () => { cross.classList.add('hidden'); hideTip(); });
    }};
  }

  function barChart(spec) {
    // supports negative values: bars grow from zero in either direction
    const cats = spec.categories, series = spec.series, horiz = spec.horizontal;
    const vals = series.flatMap(s => s.values).filter(v => v != null);
    const maxV = spec.yMax ?? Math.max(0, ...vals), minV = spec.yMin ?? Math.min(0, ...vals);
    const base = niceTicks(Math.max(maxV, -minV)), step = base[1] - base[0];
    const lo = minV < 0 ? Math.floor(minV / step - 1e-9) * step : 0, hi = maxV > 0 ? Math.ceil(maxV / step - 1e-9) * step : 0;
    const ticks = []; for (let v = lo; v <= hi + step * 1e-6; v += step) ticks.push(+v.toFixed(10));
    const span = (hi - lo) || 1;
    const tipFor = (c, se, v, i) => esc(`<b>${esc(c)}</b>${series.length > 1 ? ' · ' + esc(se.name) : ''}<br>${unitFmt(v, spec.unit)}${se.notes && se.notes[i] ? '<br><span class=m>' + esc(se.notes[i]) + '</span>' : ''}`);
    let s;
    if (horiz) {
      const Wd = 720, L = spec.labelWidth || Math.min(320, Math.max(110, 16 + 7 * Math.max(...cats.map(c => String(c).length)))), R = 70,   /* label area fits the longest category */ bh = spec.barHeight || (series.length > 1 ? 16 : 24), gh = bh * series.length + 14, H = cats.length * gh + 24;
      const Xv = v => L + 10 + (Wd - L - 10 - R) * (v - lo) / span, X0 = Xv(0);
      s = `<svg class="chart" viewBox="0 0 ${Wd} ${H}" width="100%" role="img" aria-label="${esc(spec.title || 'chart')}">`;
      ticks.forEach(v => s += `<line class="grid" x1="${Xv(v)}" x2="${Xv(v)}" y1="0" y2="${H - 20}"/><text x="${Xv(v)}" y="${H - 4}" text-anchor="middle">${tickFmt(v, spec.unit)}</text>`);
      cats.forEach((c, i) => {
        const y0 = i * gh + 6;
        s += `<text class="lbl" x="${L - 4}" y="${y0 + (bh * series.length) / 2 + 4}" text-anchor="end">${esc(c)}</text>`;
        series.forEach((se, j) => {
          const v = se.values[i]; if (v == null) return;
          const y = y0 + j * bh, x1 = Xv(v), neg = v < 0, w = Math.max(1, Math.abs(x1 - X0)), c2 = color(se.color != null ? se.color - 1 : (spec.colorByCategory ? i : j)), r = Math.min(4, (bh - 2) / 2, w);
          s += neg ? `<path d="M${X0},${y + 1}H${x1 + r}Q${x1},${y + 1} ${x1},${y + 1 + r}V${y + bh - 1 - r}Q${x1},${y + bh - 1} ${x1 + r},${y + bh - 1}H${X0}Z" fill="${c2}"/>`
                   : `<path d="M${X0},${y + 1}H${X0 + w - r}Q${X0 + w},${y + 1} ${X0 + w},${y + 1 + r}V${y + bh - 1 - r}Q${X0 + w},${y + bh - 1} ${X0 + w - r},${y + bh - 1}H${X0}Z" fill="${c2}"/>`;
          s += `<text class="val" x="${neg ? X0 + 6 : X0 + w + 6}" y="${y + bh / 2 + 4}" text-anchor="start">${unitFmt(v, spec.unit)}</text>`;
          s += `<rect class="hit" x="${L}" y="${y}" width="${Wd - L - R}" height="${bh}" data-tip="${tipFor(c, se, v, i)}"/>`;
        });
      });
      s += `<line class="axis" x1="${X0}" x2="${X0}" y1="0" y2="${H - 20}"/></svg>`;
    } else {
      const Wd = 720, H = spec.height || 300, R = 16, T = 20, B = 58, L = Math.max(54, 14 + 7 * Math.max(...ticks.map(v => tickFmt(v, spec.unit).length)));
      const gw = (Wd - L - R) / cats.length, bw = Math.min(56, (gw * 0.72) / series.length), Yv = v => T + (H - T - B) * (hi - v) / span, Y0 = Yv(0);
      s = `<svg class="chart" viewBox="0 0 ${Wd} ${H}" width="100%" role="img" aria-label="${esc(spec.title || 'chart')}">`;
      ticks.forEach(v => s += `<line class="grid" x1="${L}" x2="${Wd - R}" y1="${Yv(v)}" y2="${Yv(v)}"/><text x="${L - 8}" y="${Yv(v) + 4}" text-anchor="end">${tickFmt(v, spec.unit)}</text>`);
      cats.forEach((c, i) => {
        const gx = L + i * gw + (gw - bw * series.length - 2 * (series.length - 1)) / 2;
        series.forEach((se, j) => {
          const v = se.values[i]; if (v == null) return;
          const x = gx + j * (bw + 2), y = Yv(v), neg = v < 0, h = Math.abs(Y0 - y), c2 = color(se.color != null ? se.color - 1 : (spec.colorByCategory ? i : j)), r = Math.min(4, bw / 2, h);
          s += neg ? `<path d="M${x},${Y0}V${y - r}Q${x},${y} ${x + r},${y}H${x + bw - r}Q${x + bw},${y} ${x + bw},${y - r}V${Y0}Z" fill="${c2}"/>`
                   : `<path d="M${x},${Y0}V${y + r}Q${x},${y} ${x + r},${y}H${x + bw - r}Q${x + bw},${y} ${x + bw},${y + r}V${Y0}Z" fill="${c2}"/>`;
          s += `<text class="val" x="${x + bw / 2}" y="${neg ? y + 15 : y - 6}" text-anchor="middle">${unitFmt(v, spec.unit)}</text>`;
          s += `<rect class="hit" x="${x - 2}" y="${T}" width="${bw + 4}" height="${H - T - B}" data-tip="${tipFor(c, se, v, i)}"/>`;
        });
        const words = String(c).split(' '), lines = []; const maxc = Math.max(10, Math.floor(gw / 7)); words.forEach(w => { if (lines.length && (lines[lines.length - 1] + ' ' + w).length <= maxc) lines[lines.length - 1] += ' ' + w; else lines.push(w); });
        lines.slice(0, 3).forEach((ln, k) => s += `<text x="${L + i * gw + gw / 2}" y="${H - B + 17 + k * 14}" text-anchor="middle" class="lbl">${esc(ln)}</text>`);
      });
      s += `<line class="axis" x1="${L}" x2="${Wd - R}" y1="${Y0}" y2="${Y0}"/></svg>`;
    }
    return {html: chartFrame(spec, legendHtml(series) + s), wire() {}};
  }
  function chart(spec) { return spec.kind === 'bar' ? barChart(spec) : xyChart(spec, spec.kind === 'km' || spec.kind === 'step'); }
  function mountChart(target, spec) { const c = chart(spec); target.innerHTML = c.html; c.wire(target); return target; }

  // ---------- trial design diagram ----------
  function trialDiagram(d) {
    const arms = d.arms || [], Wd = 900, armH = 84, gap = 12, H = Math.max(170, arms.length * (armH + gap) + 40);
    const midY = H / 2, box = (x, y, w, h, cls, lines, sub) => {
      let t = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="${cls}"/>`;
      lines.forEach((ln, i) => t += `<text x="${x + 14}" y="${y + 21 + i * 17}" class="${i ? 'il-text-2' : 'il-text'}">${esc(ln)}</text>`);
      if (sub) t += `<text x="${x + 14}" y="${y + h - 9}" class="il-small">${esc(sub)}</text>`;
      return t;
    };
    const wrap = (s, n) => { const w = String(s || '').split(' '), out = ['']; w.forEach(x => { if ((out[out.length - 1] + ' ' + x).trim().length > n) out.push(x); else out[out.length - 1] = (out[out.length - 1] + ' ' + x).trim(); }); return out; };
    let s = `<svg viewBox="0 0 ${Wd} ${H}" role="img" aria-label="Trial design">`;
    const pop = wrap(d.population, 26).slice(0, 4);
    s += box(10, midY - 60, 230, 120, 'il-paper il-line', ['Who was enrolled', ...pop], d.n ? `${fmt(d.n)} patients` : '');
    s += `<path d="M240,${midY} H300" class="il-line il-none"/>`;
    s += `<g transform="translate(330 ${midY})"><rect x="-30" y="-30" width="60" height="60" transform="rotate(45)" class="il-4s il-line"/><text y="-2" text-anchor="middle" class="il-small">${d.randomization ? 'random' : 'single'}</text><text y="12" text-anchor="middle" class="il-small">${esc(d.randomization || 'arm')}</text></g>`;
    const top = midY - (arms.length * (armH + gap) - gap) / 2;
    arms.forEach((a, i) => {
      const y = top + i * (armH + gap), cls = a.control ? 'il-8s il-line' : `il-${(i % 3) + 1}s il-line`;
      s += `<path d="M372,${midY} C420,${midY} 420,${y + armH / 2} 460,${y + armH / 2}" class="il-line il-none"/>`;
      s += box(460, y, 250, armH, cls, [a.name, ...wrap(a.desc, 36).slice(0, 2)], a.n ? `n = ${fmt(a.n)}` : '');
      s += `<path d="M710,${y + armH / 2} C740,${y + armH / 2} 740,${midY} 770,${midY}" class="il-line il-none"/>`;
    });
    const ep = wrap(d.endpoint, 15).slice(0, 5);
    s += box(770, midY - 58, 124, 116, 'il-paper il-line', ['Measured', ...ep]);
    return s + '</svg>';
  }

  // ---------- section renderers ----------
  const R = {};
  R.story = (sec, body) => { body.appendChild(el('div', 'prose', terms(sec.html))); };
  R.figure = (sec, body) => {
    const wrap = el('div', 'fig wide');
    wrap.innerHTML = `<div class="canvas">${sec.svg}</div>${sec.caption ? `<div class="caption">${terms(sec.caption)}</div>` : ''}`;
    body.appendChild(wrap);
    const hs = sec.hotspots || {};
    if (Object.keys(hs).length) {
      const info = el('div', 'hotinfo', `<span class="hint">${sec.hint || 'Tap or hover a labeled part of the diagram, or pick one below.'}</span>`);
      const list = el('div', 'hotlist');
      const show = k => { info.innerHTML = `<div class="h">${esc(hs[k].title)}</div>${terms(hs[k].text)}`; $$('button', list).forEach(b => b.setAttribute('aria-pressed', b.dataset.k === k));
        $$('[data-part]', wrap).forEach(p => p.classList.toggle('focus', p.dataset.part === k)); };
      Object.keys(hs).forEach(k => { const b = el('button', '', esc(hs[k].title)); b.dataset.k = k; b.onclick = () => show(k); list.appendChild(b); });
      $$('[data-part]', wrap).forEach(p => { if (hs[p.dataset.part]) { p.classList.add('hot'); p.addEventListener('click', () => show(p.dataset.part)); p.addEventListener('mouseenter', () => show(p.dataset.part)); } });
      wrap.appendChild(info); wrap.appendChild(list);
    }
  };
  R.mechanism = (sec, body) => {
    const box = el('div', 'mech wide');
    box.innerHTML = `<div class="stage">${sec.svg}</div><div class="panel"><div class="stepno"></div><h3></h3><div class="txt"></div>
      <div class="ctrl"><button class="btn" data-a="prev">← Back</button><div class="dots">${sec.steps.map((_, i) => `<button aria-label="Step ${i + 1}" data-i="${i}"></button>`).join('')}</div><button class="btn primary" data-a="next">Next →</button></div>
      <div class="kbd">Use the ← → keys when this diagram is on screen. <button class="btn" data-a="play" style="padding:2px 8px;font-size:12px">▶ Play all</button></div></div>`;
    body.appendChild(box);
    const parts = $$('[data-part]', box), steps = sec.steps; let i = 0, timer = null;
    const go = k => {
      i = Math.max(0, Math.min(steps.length - 1, k)); const st = steps[i];
      const show = st.show ? new Set(st.show) : null, dim = new Set(st.dim || []), focus = new Set(st.focus || []), move = st.move || {};
      parts.forEach(p => {
        const n = p.dataset.part;
        p.classList.toggle('gone', !!show && !show.has(n) && !dim.has(n));
        p.classList.toggle('ghost', dim.has(n));
        p.classList.toggle('focus', focus.has(n));
        p.classList.toggle('pulse', (st.pulse || []).includes(n));
        p.style.transform = move[n] || '';
      });
      $('.stepno', box).textContent = `Step ${i + 1} of ${steps.length}`;
      $('h3', box).textContent = st.title; $('.txt', box).innerHTML = terms(st.text);
      $$('.dots button', box).forEach((b, j) => b.classList.toggle('on', j === i));
      $('[data-a=prev]', box).disabled = i === 0; $('[data-a=next]', box).textContent = i === steps.length - 1 ? 'Start over ↺' : 'Next →';
    };
    box.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      if (b.dataset.i) { stop(); go(+b.dataset.i); }
      if (b.dataset.a === 'prev') { stop(); go(i - 1); }
      if (b.dataset.a === 'next') { stop(); go(i === steps.length - 1 ? 0 : i + 1); }
      if (b.dataset.a === 'play') { if (timer) stop(); else { b.textContent = '❚❚ Pause'; go(0); timer = setInterval(() => { if (i >= steps.length - 1) stop(); else go(i + 1); }, sec.interval || 4200); } }
    });
    const stop = () => { clearInterval(timer); timer = null; const p = $('[data-a=play]', box); if (p) p.textContent = '▶ Play all'; };
    let visible = false; new IntersectionObserver(es => es.forEach(x => visible = x.isIntersecting), {threshold: 0.4}).observe(box);
    document.addEventListener('keydown', e => { if (!visible || e.target.closest('input,textarea')) return; if (e.key === 'ArrowRight') { stop(); go(i + 1); } if (e.key === 'ArrowLeft') { stop(); go(i - 1); } });
    go(Math.min(steps.length - 1, Math.max(0, (+QS.get('mstep') || 1) - 1)));   // mstep=N: open mechanisms at step N (headless review)
  };
  const TL_KINDS = {science: ['Science', 0], clinical: ['Clinical trials', 2], regulatory: ['Regulatory', 6], business: ['Business & money', 3], setback: ['Setbacks', 7], people: ['People & patients', 4]};
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const showDate = e => { const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(e.date || ''); return m ? `${MON[+m[1] - 1]} ${+m[2]}, ${m[3]}` : (e.date || Math.floor(e.year)); };   // US numeric dates read better as "Jul 11, 2014"
  R.timeline = (sec, body) => {
    // chronological: by year, then by the parsed date text ("Mar 2015", "March 13, 2006"); undated events keep their order
    const when = e => { const d = e.date || ''; if (!/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\b|^\d{1,2}\/\d{1,2}\/\d{4}$|^\d{4}-\d{2}/i.test(d)) return null; const t = Date.parse(d); return isNaN(t) ? null : t; };   // only real dates; "Late 2006" keeps its year position
    const evs = sec.events.map((e, i) => ({...e, _i: i})).sort((a, b) => (Math.floor(a.year) - Math.floor(b.year)) || ((when(a) ?? a.year * 1e12) - (when(b) ?? b.year * 1e12)) || (a.year - b.year) || (a._i - b._i));
    const kinds = [...new Set(evs.map(e => e.kind))].filter(k => TL_KINDS[k]);
    const on = new Set(kinds);
    const wrap = el('div', 'wide');
    const y0 = Math.min(...evs.map(e => e.year)), y1 = Math.max(...evs.map(e => e.year)), pos = y => 2 + 96 * (y - y0) / ((y1 - y0) || 1);
    const years = niceTicks(y1 - y0, 8).map(v => Math.round(v + y0)).filter(v => v <= y1);
    wrap.innerHTML = `<div class="tl-filters">${kinds.map(k => `<button data-k="${k}" aria-pressed="true"><span class="sw" style="background:${color(TL_KINDS[k][1])}"></span>${TL_KINDS[k][0]}</button>`).join('')}</div>
      <div class="tl-strip"><div class="axis"></div>${years.map(y => `<span class="yr" style="left:${pos(y)}%">${y}</span>`).join('')}
      ${evs.map((e, i) => `<span class="pin" data-i="${i}" data-k="${e.kind}" style="left:${pos(e.year)}%;background:${color((TL_KINDS[e.kind] || [0, 0])[1])}" data-tip="${esc(`<b>${esc(showDate(e))}</b> · ${esc(e.title)}`)}"></span>`).join('')}</div>
      <div class="tl">${evs.map((e, i) => `<div class="ev" data-i="${i}" data-k="${e.kind}" style="--c:${color((TL_KINDS[e.kind] || [0, 0])[1])}"><div class="when">${esc(showDate(e))} · ${(TL_KINDS[e.kind] || [e.kind])[0]}</div><div class="what">${terms(e.title)}</div>${e.text ? `<div class="more">${terms(e.text)}</div>` : ''}</div>`).join('')}</div>`;
    body.appendChild(wrap);
    $('.tl-filters', wrap).onclick = e => { const b = e.target.closest('button'); if (!b) return; const k = b.dataset.k;
      if (on.has(k) && on.size > 1) on.delete(k); else on.add(k); b.setAttribute('aria-pressed', on.has(k));
      $$('.tl-filters button', wrap).forEach(x => x.setAttribute('aria-pressed', on.has(x.dataset.k)));
      $$('[data-k]', wrap).forEach(x => { if (!x.closest('.tl-filters')) x.classList.toggle('hidden', !on.has(x.dataset.k)); }); };
    $('.tl-strip', wrap).onclick = e => { const p = e.target.closest('.pin'); if (!p) return; const ev = $(`.ev[data-i="${p.dataset.i}"]`, wrap);
      ev.scrollIntoView({behavior: 'smooth', block: 'center'}); ev.classList.remove('flash'); void ev.offsetWidth; ev.classList.add('flash'); };
  };
  // options are shuffled with a fixed seed (question + options), so the right answer isn't always in the same slot but the order is stable
  const seeded = str => { let h = 2166136261; for (const ch of str) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return () => ((h = Math.imul(h ^ (h >>> 15), 2246822507) ^ Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296; };
  function predictBlock(p0, onDone) {
    const r = seeded(String(p0.q) + p0.options.join('|')), idx = p0.options.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
    const p = {...p0, options: idx.map(i => p0.options[i]), answer: idx.indexOf(p0.answer)};
    const b = el('div', 'predict');
    b.innerHTML = `<div class="q">${terms(p.q)}</div><div class="opts">${p.options.map((o, i) => `<button data-i="${i}">${terms(o)}</button>`).join('')}</div><div class="explain hidden"></div>`;
    $('.opts', b).onclick = e => {
      const btn = e.target.closest('button'); if (!btn || btn.disabled) return; const k = +btn.dataset.i;
      $$('.opts button', b).forEach((x, j) => { x.disabled = true; if (j === p.answer) x.classList.add('right'); else if (j === k) x.classList.add('wrong'); });
      const ex = $('.explain', b); ex.classList.remove('hidden');
      ex.innerHTML = `<span class="verdict" style="color:${k === p.answer ? 'var(--good)' : 'var(--bad)'}">${k === p.answer ? 'Right.' : 'Not quite.'}</span>${terms(p.explain)}`;
      onDone && onDone(k === p.answer);
    };
    return b;
  }
  R.trial = (sec, body) => {
    const d = sec.design || {};
    const wrap = el('div', 'wide');
    wrap.innerHTML = `<div class="card"><div style="display:flex;flex-wrap:wrap;gap:8px 18px;align-items:baseline;margin-bottom:10px">
        <b style="font-size:18px">${esc(d.name || '')}</b>${d.phase ? `<span class="chip">${esc(d.phase)}</span>` : ''}${d.blinding ? `<span class="chip">${esc(d.blinding)}</span>` : ''}${d.years ? `<span class="chip">${esc(d.years)}</span>` : ''}</div>
        <div class="trial-design">${trialDiagram(d)}</div>
        ${d.details ? `<dl class="kv" style="margin-top:12px">${Object.entries(d.details).map(([k, v]) => `<dt>${esc(k)}</dt><dd>${terms(v)}</dd>`).join('')}</dl>` : ''}</div>`;
    body.appendChild(wrap);
    const res = el('div', 'wide'); res.style.marginTop = '16px';
    (sec.results || []).forEach(spec => { const c = el('div'); c.style.marginBottom = '14px'; mountChart(c, spec); res.appendChild(c); });
    if (sec.takeaway) res.appendChild(el('div', 'takeaway', terms(sec.takeaway)));
    if (sec.predict && !QS.get('reveal')) {
      const lock = el('div', 'locked'); lock.appendChild(res);
      const veil = el('div', 'veil', `<button class="btn primary">Answer the question above to see the results</button>`); lock.appendChild(veil);
      veil.querySelector('button').onclick = () => veil.remove();
      body.appendChild(predictBlock(sec.predict, () => veil.remove()));
      body.appendChild(lock);
    } else { if (sec.predict) body.appendChild(predictBlock(sec.predict)); body.appendChild(res); }
  };
  R.chart = (sec, body) => { const c = el('div', 'wide'); mountChart(c, sec.chart); body.appendChild(c); if (sec.takeaway) body.appendChild(el('div', 'takeaway prose', terms(sec.takeaway))); };
  const CALLOUT = {lesson: ['✦', 'Key idea'], product: ['▣', 'Product lens'], misconception: ['!', 'Common misconception'], numbers: ['#', 'By the numbers'], whatif: ['?', 'What if']};
  R.callout = (sec, body) => {
    const [ic, lab] = CALLOUT[sec.variant] || CALLOUT.lesson;
    body.appendChild(el('div', `callout ${sec.variant || 'lesson'}`, `<div class="ch"><i>${ic}</i>${sec.label || lab}</div>${sec.heading ? `<h3>${terms(sec.heading)}</h3>` : ''}<div class="body">${terms(sec.html)}</div>`));
  };
  R.decision = (sec, body) => {
    const b = el('div', 'decision');
    b.innerHTML = `${sec.role ? `<div class="role">${esc(sec.role)}</div>` : ''}<div class="scen">${terms(sec.scenario)}</div><div class="opts">${sec.options.map((o, i) => `<button data-i="${i}">${terms(o.label)}</button>`).join('')}</div><div class="out hidden"></div>`;
    $('.opts', b).onclick = e => {
      const btn = e.target.closest('button'); if (!btn) return; const o = sec.options[+btn.dataset.i];
      $$('.opts button', b).forEach(x => { x.classList.remove('right', 'wrong'); x.style.outline = ''; });
      btn.style.outline = '2px solid var(--accent)';
      const out = $('.out', b); out.classList.remove('hidden');
      out.innerHTML = `${terms(o.outcome)}${sec.reality ? `<div class="real"><b>What actually happened.</b> ${terms(sec.reality)}</div>` : ''}`;
    };
    body.appendChild(b);
  };
  R.table = (sec, body) => {
    body.appendChild(el('div', 'tbl-wrap wide', `<table class="tbl"><thead><tr>${sec.columns.map(c => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${sec.rows.map(r => `<tr>${r.map(c => `<td>${terms(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`));
    if (sec.caption) body.appendChild(el('div', 'caption', terms(sec.caption)));
  };
  R.explorer = (sec, body) => {
    const b = el('div', 'explorer wide');
    b.innerHTML = sec.inputs.map(x => `<label><span>${terms(x.label)}</span><input type="range" min="${x.min}" max="${x.max}" step="${x.step || 1}" value="${x.value}" data-id="${x.id}"><span class="out" data-o="${x.id}"></span></label>`).join('') + '<div class="result"></div>';
    body.appendChild(b);
    const upd = () => {
      const v = {}; $$('input', b).forEach(i => v[i.dataset.id] = +i.value);
      sec.inputs.forEach(x => $(`[data-o="${x.id}"]`, b).textContent = x.fmt ? x.fmt(v[x.id]) : v[x.id]);
      const r = $('.result', b), out = sec.compute(v, API, r); if (typeof out === 'string') r.innerHTML = terms(out);
    };
    b.addEventListener('input', upd); upd();
  };
  R.custom = (sec, body) => { const b = el('div', sec.wide === false ? '' : 'wide', terms(sec.html || '')); body.appendChild(b); if (sec.init) sec.init(b, API); };
  R.quiz = (sec, body, c) => {
    const box = el('div', 'quiz'); const answered = {}; let right = 0;
    const score = el('div', 'score hidden');
    sec.questions.forEach((q, qi) => {
      const card = el('div', 'qcard', `<div class="qn">Question ${qi + 1} of ${sec.questions.length}</div><div class="q">${terms(q.q)}</div>`);
      card.appendChild(predictBlock({q: '', options: q.options, answer: q.answer, explain: q.explain}, ok => {
        answered[qi] = ok; if (ok) right++;
        if (Object.keys(answered).length === sec.questions.length) {
          score.classList.remove('hidden'); score.textContent = `You got ${right} of ${sec.questions.length}.`;
          store.set('quiz:' + c.id, {right, total: sec.questions.length, at: Date.now()});
          const a = $(`.toc a[href="#${sec._anchor}"]`); if (a) a.classList.add('done');
        }
      }));
      $('.predict', card).style.cssText = 'margin:0;border:0;padding:0;background:none';
      $('.predict .q', card).remove();
      box.appendChild(card);
    });
    const prev = store.get('quiz:' + c.id, null);
    if (prev) { score.classList.remove('hidden'); score.textContent = `Last time: ${prev.right} of ${prev.total}. Try again below.`; }
    body.appendChild(score); body.appendChild(box);
  };
  R.lessons = (sec, body) => {
    const idx = W.CASE_INDEX || [];
    body.appendChild(el('div', 'lessons wide', sec.items.map((x, i) => `<div class="lesson-card"><div class="n">${i + 1}</div><h3>${terms(x.title)}</h3><p>${terms(x.text)}</p>
      ${x.links && x.links.length ? `<div class="links">${x.links.map(id => { const m = idx.find(k => k.id === id); return m ? `<a href="case.html?id=${id}">See: ${esc(m.brand)}</a>` : ''; }).join('')}</div>` : ''}</div>`).join('')));
  };
  R.sources = (sec, body) => {
    body.appendChild(el('div', 'sources', `<ol>${sec.items.map(s => `<li>${s.url ? `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.text)}</a>` : esc(s.text)}</li>`).join('')}</ol>`));
  };

  const API = {esc, fmt, terms, chart, mountChart, showTip, hideTip, store, color, unitFmt, el, $, $$};
  W.CF.API = API;

  // ---------- page ----------
  const KIND_LABEL = {success: 'Landmark', failure: 'Cautionary tale', frontier: 'Frontier'}, KIND_BADGE = {success: 'Landmark drug', failure: 'Cautionary tale', frontier: 'Frontier'};
  function renderCase(c) {
    GLOSS = {};
    Object.entries(W.GLOSSARY || {}).concat(Object.entries(c.glossary || {})).forEach(([k, v]) => GLOSS[k.toLowerCase()] = {term: k, def: v});
    document.title = `${c.brand} · Case Files`;
    const idx = W.CASE_INDEX || [], pos = idx.findIndex(k => k.id === c.id);
    document.body.innerHTML = `<div class="topbar"><a class="home" href="index.html">Case Files</a><span class="crumb">${KIND_LABEL[c.kind] || 'Landmark'} · ${esc(c.brand)}</span><span class="spacer"></span><button class="btn" id="themeBtn">◐ Theme</button><div class="progress"></div></div>
      <div class="layout"><nav class="toc"><div class="toc-h">In this case</div></nav><main></main></div>`;
    $('#themeBtn').onclick = toggleTheme;
    const main = $('main'), toc = $('.toc');
    const hero = el('header', 'hero');
    hero.innerHTML = `<div><span class="badge ${c.kind}">${KIND_BADGE[c.kind] || 'Landmark drug'}</span>
      <h1>${esc(c.brand)}</h1><div class="generic">${esc(c.generic || '')}${c.company ? ' · ' + esc(c.company) : ''}</div>
      <p class="tagline">${terms(c.tagline)}</p>
      <div class="chips">${(c.chips || []).map(([k, v]) => `<span class="chip">${esc(k)}: <b>${terms(v)}</b></span>`).join('')}</div>
      ${c.readingTime ? `<div class="readtime">About ${c.readingTime} minutes · ${c.sections.filter(s => ['mechanism', 'trial', 'decision', 'explorer', 'quiz', 'custom', 'timeline'].includes(s.type) || (s.type === 'figure' && s.hotspots)).length} interactive pieces</div>` : ''}</div>
      <div class="emblem">${c.emblem || ''}</div>`;
    main.appendChild(hero);
    if (c.stats) main.appendChild(el('div', 'stats', c.stats.map(s => `<div class="stat"><div class="v">${esc(s.v)}</div><div class="l">${terms(s.l)}</div>${s.n ? `<div class="n">${terms(s.n)}</div>` : ''}</div>`).join('')));
    c.sections.forEach((sec, i) => {
      const id = sec.anchor || ('s' + i); sec._anchor = id;
      const box = el('section', 'sec'); box.id = id;
      if (sec.kicker) box.appendChild(el('div', 'kicker', esc(sec.kicker)));
      if (sec.title) box.appendChild(el('h2', '', terms(sec.title)));
      if (sec.intro) box.appendChild(el('p', 'intro', terms(sec.intro)));
      try { (R[sec.type] || (() => { throw new Error('unknown section type ' + sec.type); }))(sec, box, c); }
      catch (e) { console.error('section', i, sec.type, e); box.appendChild(el('div', 'callout misconception', `<b>Render error in section ${i} (${esc(sec.type)}):</b> ${esc(e.message)}`)); }
      if (sec.type === 'callout' && !sec.title) box.style.paddingTop = '20px';
      main.appendChild(box);
      if (sec.title && sec.toc !== false) { const a = el('a', '', `<span class="dot"></span><span>${terms(sec.tocTitle || sec.title).replace(/<[^>]+>/g, '')}</span>`); a.href = '#' + id; toc.appendChild(a); }
    });
    const np = el('div', 'nextprev');
    const prev = idx[pos - 1], next = idx[pos + 1];
    np.innerHTML = (prev ? `<a href="case.html?id=${prev.id}"><div class="d">← Previous</div><div class="t">${esc(prev.brand)}</div></a>` : '<span></span>') +
      (next ? `<a class="r" href="case.html?id=${next.id}"><div class="d">Next →</div><div class="t">${esc(next.brand)}</div></a>` : `<a class="r" href="index.html"><div class="d">Done</div><div class="t">Back to all cases</div></a>`);
    main.appendChild(np);
    // progress, toc state
    const bar = $('.progress'), links = $$('.toc a');
    const seen = new Set(store.get('seen:' + c.id, []));
    links.forEach(a => { if (seen.has(a.getAttribute('href').slice(1))) a.classList.add('seen'); });
    if (store.get('quiz:' + c.id, null)) { const q = c.sections.find(s => s.type === 'quiz'); if (q) { const a = $(`.toc a[href="#${q._anchor}"]`); if (a) a.classList.add('done'); } }
    const io = new IntersectionObserver(es => es.forEach(x => {
      if (!x.isIntersecting) return; const id = x.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      const a = links.find(a => a.getAttribute('href') === '#' + id); if (a) a.classList.add('seen');
      seen.add(id); store.set('seen:' + c.id, [...seen]);
      const done = links.filter(a => a.classList.contains('seen')).length / Math.max(1, links.length);
      store.set('progress:' + c.id, Math.round(100 * done));
    }), {rootMargin: '-40% 0px -55% 0px'});
    $$('section.sec').forEach(s => io.observe(s));
    addEventListener('scroll', () => { const h = document.documentElement; bar.style.width = (100 * h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)) + '%'; }, {passive: true});
    if (location.hash) setTimeout(() => { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }, 50);
    if (missingTerms.size) console.warn('CF_MISSING_TERMS ' + [...missingTerms].join(' | '));
    const words = (main.innerText.match(/\S+/g) || []).length, types = {}; c.sections.forEach(s => types[s.type] = (types[s.type] || 0) + 1);
    const svgs = document.querySelectorAll('main svg').length;
    console.log('CF_STATS ' + JSON.stringify({id: c.id, words, readMin: Math.round(words / 230), sections: c.sections.length, types, svgs, sources: (c.sections.find(s => s.type === 'sources') || {items: []}).items.length}));
    if (QS.get('goto')) { const k = c.sections.findIndex(s => s.type === QS.get('goto')); const t = k >= 0 && document.getElementById(c.sections[k]._anchor); if (t) { const y = t.getBoundingClientRect().top + scrollY - 70; document.body.style.transform = `translateY(-${y}px)`; $('.topbar').style.position = 'relative'; } }   // headless review: jump to a section type
    if (QS.get('scroll')) { const y = +QS.get('scroll'); document.body.style.transform = `translateY(-${y}px)`; $('.topbar').style.position = 'relative'; $('.toc').style.position = 'relative'; }   // for headless screenshots (scrolled views don't paint there)
    console.log('CF_HEIGHT ' + document.documentElement.scrollHeight);
    W.__caseReady = true;
  }

  function boot() {
    wireTips();
    const id = new URLSearchParams(location.search).get('id');
    if (!id) { document.body.innerHTML = '<p style="padding:40px">No case id. <a href="index.html">All cases</a></p>'; return; }
    const sc = document.createElement('script'); sc.src = `cases/${id}.js`;
    sc.onload = () => W.CASES[id] ? renderCase(W.CASES[id]) : (document.body.innerHTML = `<p style="padding:40px">cases/${esc(id)}.js loaded but did not register case "${esc(id)}".</p>`);
    sc.onerror = () => { document.body.innerHTML = `<p style="padding:40px">Could not load cases/${esc(id)}.js. <a href="index.html">All cases</a></p>`; };
    document.head.appendChild(sc);
  }
  W.CF.renderCase = renderCase; W.CF.wireTips = wireTips; W.CF.toggleTheme = toggleTheme; W.CF.boot = boot;
})();
