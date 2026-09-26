// Comirnaty (BNT162b2): BioNTech and Pfizer's mRNA COVID-19 vaccine. See GUIDE.md for the contract.
(() => {
  // ---------- small drawing helpers (all colors via il-* / st-* classes) ----------
  const rng = seed => { let s = seed; return () => (s = (s * 16807) % 2147483647) / 2147483647; };
  const spikeAt = (x, y, s = 1, rot = 0, cls = 'il-2') =>
    `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><path d="M0 0 V-9" class="st-2" stroke-width="3" stroke-linecap="round"/><path d="M-6 -8 Q-7.5 -19 0 -21 Q7.5 -19 6 -8 Z" class="${cls}"/></g>`;
  const Y = (x, y, s = 1, rot = 0, cls = 'st-3') =>
    `<g transform="translate(${x} ${y}) rotate(${rot}) scale(${s})"><path d="M0 0 V-10 M0 -10 L-7 -18 M0 -10 L7 -18" class="il-none ${cls}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></g>`;
  const wave = (x, y, len, amp = 5, per = 16) => {
    let d = `M${x} ${y}`, k = 0;
    for (let i = 0; i < len; i += per / 2, k++) d += ` q${per / 4} ${k % 2 ? 2 * amp : -2 * amp} ${per / 2} 0`;
    return d;
  };
  const virus = (cx, cy, r, n = 12, s = 1) => {
    let out = '';
    for (let i = 0; i < n; i++) out += `<g transform="translate(${cx} ${cy}) rotate(${i * 360 / n}) translate(0 ${-r + 2})">${spikeAt(0, 0, s)}</g>`;
    return out + `<circle cx="${cx}" cy="${cy}" r="${r}" class="il-2s st-2" stroke-width="2"/>`;
  };
  const lnpIcon = (cx, cy, r) => {
    let out = `<circle cx="${cx}" cy="${cy}" r="${r}" class="il-paper il-line"/>`;
    for (let i = 0; i < 14; i++) { const a = i * Math.PI * 2 / 14; out += `<circle cx="${(cx + r * Math.cos(a)).toFixed(1)}" cy="${(cy + r * Math.sin(a)).toFixed(1)}" r="2.6" class="il-8"/>`; }
    return out + `<path d="${wave(cx - r * 0.6, cy, r * 1.2, 2.5, 8)}" class="il-none st-1" stroke-width="2"/>`;
  };

  // ---------- emblem ----------
  const emblem = (() => {
    let s = `<svg viewBox="0 0 300 300"><circle cx="150" cy="150" r="138" class="il-1s"/>`;
    s += `<circle cx="136" cy="168" r="80" class="il-paper"/>`;
    for (let i = 0; i < 30; i++) { const a = i * Math.PI * 2 / 30; s += `<circle cx="${(136 + 80 * Math.cos(a)).toFixed(1)}" cy="${(168 + 80 * Math.sin(a)).toFixed(1)}" r="7" class="${i % 6 === 0 ? 'il-6' : 'il-8'}"/>`; }
    s += `<path d="${wave(82, 150, 110, 7, 22)}" class="il-none st-1" stroke-width="6" stroke-linecap="round"/>`;
    s += `<path d="${wave(92, 190, 90, 6, 20)}" class="il-none st-1" stroke-width="6" stroke-linecap="round"/>`;
    s += `<g transform="translate(228 104)">${spikeAt(0, 0, 3.1, 18)}</g>`;
    s += Y(236, 262, 2.4, -20) + Y(262, 214, 2.0, 30);
    return s + `</svg>`;
  })();

  // ---------- figure: the immune cast ----------
  const figImmune = (() => {
    let s = `<svg viewBox="0 0 900 430">`;
    s += `<path d="M160 190 C200 150 230 125 262 115" class="il-none il-line flow"/>`;
    s += `<path d="M300 152 V280" class="il-none il-line flow"/>`;
    s += `<path d="M338 300 C430 280 540 220 598 160" class="il-none il-line flow"/>`;
    s += `<path d="M660 110 C700 96 740 96 780 108" class="il-none il-line flow"/>`;
    s += `<g data-part="virus">${virus(100, 215, 46, 14, 1.1)}<text x="100" y="220" text-anchor="middle" class="il-text">virus</text><text x="40" y="302" class="il-text">SARS-CoV-2</text><text x="40" y="319" class="il-text-2">a coronavirus</text></g>`;
    s += `<g data-part="spike"><g transform="translate(100 158)">${spikeAt(0, 0, 2.2)}</g><path d="M92 118 L70 78" class="il-none il-line"/><text x="20" y="54" class="il-text">spike protein</text><text x="20" y="71" class="il-text-2">the key it uses to enter cells</text></g>`;
    s += `<g data-part="innate"><path d="M300 68 L320 93 L360 88 L330 113 L350 143 L305 126 L275 148 L280 116 L245 98 L285 94 Z" class="il-3s st-3" stroke-width="2" stroke-linejoin="round"/><circle cx="303" cy="110" r="10" class="il-3"/><text x="370" y="92" class="il-text">dendritic cell</text><text x="370" y="109" class="il-text-2">innate sentry: raises the alarm,</text><text x="370" y="125" class="il-text-2">shows pieces to T cells</text></g>`;
    s += `<g data-part="tcell"><circle cx="300" cy="315" r="34" class="il-3s st-3" stroke-width="2"/><circle cx="300" cy="315" r="15" class="il-3"/><text x="300" y="370" text-anchor="middle" class="il-text">helper T cell</text>`;
    s += `<rect x="430" y="300" width="110" height="80" rx="26" class="il-5s il-line"/><circle cx="468" cy="340" r="9" class="il-2s st-2"/><circle cx="495" cy="330" r="7" class="il-2s st-2"/><text x="485" y="400" text-anchor="middle" class="il-text-2">infected cell</text>`;
    s += `<circle cx="590" cy="335" r="28" class="il-3s st-3" stroke-width="2"/><circle cx="590" cy="335" r="12" class="il-3"/><path d="M562 336 L542 338" class="st-7" stroke-width="3" stroke-linecap="round"/><text x="590" y="384" text-anchor="middle" class="il-text">killer T cell</text></g>`;
    s += `<g data-part="bcell"><circle cx="625" cy="120" r="38" class="il-3s st-3" stroke-width="2"/><circle cx="625" cy="120" r="16" class="il-3"/><text x="625" y="180" text-anchor="middle" class="il-text">B cell</text><text x="625" y="197" text-anchor="middle" class="il-text-2">makes antibodies</text></g>`;
    let ab = '';
    [[690, 80, -60], [705, 150, -120], [735, 70, -70], [748, 146, -110]].forEach(([x, y, r]) => ab += Y(x, y, 1.2, r));
    s += `<g data-part="antibodies">${ab}${virus(830, 118, 26, 10, 0.8)}`;
    [[830, 77, 180], [871, 118, -90], [830, 159, 0], [789, 118, 90], [858, 88, -140]].forEach(([x, y, r]) => s += Y(x, y, 1.1, r));
    s += `<text x="885" y="200" text-anchor="end" class="il-text">antibodies</text><text x="885" y="217" text-anchor="end" class="il-text-2">coat the spikes so the</text><text x="885" y="233" text-anchor="end" class="il-text-2">virus cannot get in</text></g>`;
    s += `<g data-part="memory"><circle cx="760" cy="325" r="16" class="il-3s st-3" stroke-width="2"/><circle cx="760" cy="325" r="22" class="il-none st-3 il-dash"/><circle cx="812" cy="345" r="16" class="il-3s st-3" stroke-width="2"/><circle cx="812" cy="345" r="22" class="il-none st-3 il-dash"/><text x="740" y="395" class="il-text">memory cells</text><text x="740" y="412" class="il-text-2">remember the spike</text></g>`;
    return s + `</svg>`;
  })();

  // ---------- figure: anatomy of the vaccine mRNA ----------
  const figRNA = (() => {
    let s = `<svg viewBox="0 70 900 220">`;
    s += `<g data-part="cap"><circle cx="64" cy="140" r="17" class="il-4"/><text x="64" y="145" text-anchor="middle" class="il-text">cap</text><text x="30" y="96" class="il-text-2">5′ cap</text></g>`;
    s += `<g data-part="utr5"><rect x="84" y="124" width="92" height="32" rx="6" class="il-8s il-line"/><text x="130" y="96" text-anchor="middle" class="il-text-2">5′ UTR</text></g>`;
    s += `<g data-part="cds"><rect x="176" y="120" width="460" height="40" rx="6" class="il-1s st-1" stroke-width="2"/><text x="406" y="96" text-anchor="middle" class="il-text">coding sequence: the full-length spike recipe</text><text x="190" y="145" class="il-text">AUG</text><text x="228" y="145" class="il-text-2">…read three letters (one codon) at a time…</text><rect x="520" y="126" width="62" height="28" rx="5" class="il-2s st-2"/><text x="551" y="145" text-anchor="middle" class="il-text">2P</text></g>`;
    s += `<g data-part="utr3"><rect x="636" y="124" width="92" height="32" rx="6" class="il-8s il-line"/><text x="682" y="96" text-anchor="middle" class="il-text-2">3′ UTR</text></g>`;
    s += `<g data-part="polya"><rect x="728" y="124" width="140" height="32" rx="6" class="il-4s il-line"/><text x="798" y="145" text-anchor="middle" class="il-text">AAAAAA…</text><text x="798" y="96" text-anchor="middle" class="il-text-2">poly(A) tail</text></g>`;
    let m = '';
    for (let x = 200; x <= 500; x += 30) m += `<path d="M${x} 176 l6 8 l-6 8 l-6 -8 Z" class="il-6"/>`;
    s += `<g data-part="m1psi">${m}<path d="M200 204 V214 H500 V204" class="il-none il-line"/><text x="350" y="236" text-anchor="middle" class="il-text">Ψ: every U is swapped for N1-methylpseudouridine</text></g>`;
    s += `<text x="30" y="275" class="il-text-2">Schematic, not to scale. Read left (5′) to right (3′).</text>`;
    return s + `</svg>`;
  })();

  // ---------- figure: lipid nanoparticle ----------
  const figLNP = (() => {
    const r = rng(7); let s = `<svg viewBox="0 0 900 430">`;
    const cx = 250, cy = 215, R0 = 175;
    s += `<circle cx="${cx}" cy="${cy}" r="${R0 - 8}" class="il-1s"/>`;
    // shell: DSPC heads with occasional PEG-lipids
    let dspc = '', peg = '', chol = '', ion = '', rna = '';
    for (let i = 0; i < 64; i++) {
      const a = i * Math.PI * 2 / 64, x = cx + R0 * Math.cos(a), y = cy + R0 * Math.sin(a);
      if (i % 8 === 3) {
        const x2 = cx + (R0 + 26) * Math.cos(a), y2 = cy + (R0 + 26) * Math.sin(a), xm = cx + (R0 + 13) * Math.cos(a + 0.05), ym = cy + (R0 + 13) * Math.sin(a + 0.05);
        peg += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} Q${xm.toFixed(1)} ${ym.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" class="il-none st-6" stroke-width="3" stroke-linecap="round"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" class="il-6"/>`;
      } else dspc += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6" class="il-8"/>`;
    }
    for (let i = 0; i < 26; i++) { const a = r() * Math.PI * 2, d = 40 + r() * 110; chol += `<rect x="${(cx + d * Math.cos(a) - 6).toFixed(1)}" y="${(cy + d * Math.sin(a) - 3.5).toFixed(1)}" width="12" height="7" rx="3" class="il-4"/>`; }
    for (let i = 0; i < 44; i++) { const a = r() * Math.PI * 2, d = 20 + r() * 130; ion += `<circle cx="${(cx + d * Math.cos(a)).toFixed(1)}" cy="${(cy + d * Math.sin(a)).toFixed(1)}" r="5" class="il-5"/>`; }
    rna += `<path d="${wave(150, 180, 150, 6, 18)}" class="il-none st-1" stroke-width="4" stroke-linecap="round"/>`;
    rna += `<path d="${wave(170, 250, 140, 6, 18)}" class="il-none st-1" stroke-width="4" stroke-linecap="round"/>`;
    s += `<g data-part="ionizable">${ion}<path d="M320 150 L560 70" class="il-none il-line"/><text x="566" y="66" class="il-text">ionizable lipid (ALC-0315)</text><text x="566" y="83" class="il-text-2">neutral in blood, positive inside the cell</text></g>`;
    s += `<g data-part="mrna">${rna}<path d="M300 180 L560 150" class="il-none il-line"/><text x="566" y="146" class="il-text">mRNA</text><text x="566" y="163" class="il-text-2">the spike recipe, packed in the core</text></g>`;
    s += `<g data-part="chol">${chol}<path d="M330 290 L560 230" class="il-none il-line"/><text x="566" y="226" class="il-text">cholesterol</text><text x="566" y="243" class="il-text-2">fills gaps, stiffens the particle</text></g>`;
    s += `<g data-part="dspc">${dspc}<path d="M${cx + R0 * 0.94} ${cy + R0 * 0.34} L560 305" class="il-none il-line"/><text x="566" y="304" class="il-text">helper phospholipid (DSPC)</text><text x="566" y="321" class="il-text-2">structural, like a cell membrane</text></g>`;
    s += `<g data-part="peg">${peg}<path d="M${cx + (R0 + 20) * 0.7} ${cy + (R0 + 20) * 0.72} L560 380" class="il-none il-line"/><text x="566" y="380" class="il-text">PEG-lipid (ALC-0159)</text><text x="566" y="397" class="il-text-2">a fuzzy coat that keeps particles apart</text></g>`;
    return s + `</svg>`;
  })();

  // ---------- figure: the spike and the 2P trick ----------
  const figSpike = (() => {
    let s = `<svg viewBox="0 0 900 420">`;
    s += `<rect x="40" y="350" width="820" height="16" rx="8" class="il-2s"/><path d="M40 350 H860 M40 366 H860" class="il-line"/><text x="46" y="392" class="il-text-2">virus membrane</text>`;
    // prefusion spike (compact trimer)
    s += `<g data-part="prefusion"><path d="M190 350 V285" class="st-2" stroke-width="10" stroke-linecap="round"/><path d="M150 290 Q125 210 160 150 Q190 120 220 150 Q255 210 230 290 Z" class="il-2 st-2" stroke-width="2"/><path d="M190 290 Q185 220 190 160" class="il-none il-line" /><text x="100" y="60" class="il-title">Prefusion spike</text><text x="100" y="80" class="il-text-2">the shape the virus shows before it attacks</text></g>`;
    s += `<g data-part="rbd"><circle cx="165" cy="150" r="16" class="il-7"/><circle cx="215" cy="150" r="16" class="il-7"/><path d="M231 142 L290 118" class="il-none il-line"/><text x="295" y="115" class="il-text">receptor-binding domain</text><text x="295" y="132" class="il-text-2">grabs ACE2 on our cells</text></g>`;
    s += `<g data-part="hinge"><circle cx="175" cy="240" r="9" class="il-4 il-line"/><circle cx="205" cy="240" r="9" class="il-4 il-line"/><text x="175" y="245" text-anchor="middle" class="il-text">P</text><text x="205" y="245" text-anchor="middle" class="il-text">P</text><path d="M216 240 L290 225" class="il-none il-line"/><text x="295" y="222" class="il-text">2P: two prolines</text><text x="295" y="239" class="il-text-2">clamp the hinge shut</text></g>`;
    s += `<g data-part="abs">${Y(120, 150, 1.4, 60)}${Y(262, 165, 1.4, -60)}${Y(190, 108, 1.4, 180)}<text x="40" y="190" class="il-text-2">antibodies</text><text x="40" y="206" class="il-text-2">bind the tip</text></g>`;
    // arrow
    s += `<path d="M470 250 C520 230 560 230 600 250" class="il-none il-line2 il-dash"/><path d="M596 242 L604 252 L592 256" class="il-none il-line2"/><text x="470" y="290" class="il-text-2">without the clamp, the</text><text x="470" y="306" class="il-text-2">spring can snap open</text>`;
    // postfusion
    s += `<g data-part="postfusion"><path d="M720 350 V60" class="st-2" stroke-width="16" stroke-linecap="round"/><path d="M720 340 V70" class="il-none il-line"/><circle cx="720" cy="56" r="8" class="il-2s st-2"/><text x="745" y="120" class="il-title">Postfusion</text><text x="745" y="140" class="il-text-2">a long needle that</text><text x="745" y="156" class="il-text-2">harpoons the cell;</text><text x="745" y="172" class="il-text-2">many prime antibody</text><text x="745" y="188" class="il-text-2">targets have vanished</text></g>`;
    return s + `</svg>`;
  })();

  // ---------- figure: manufacturing line ----------
  const figMfg = (() => {
    let s = `<svg viewBox="0 44 900 316">`;
    const st = [
      ['dna', 'DNA template', 'bacteria grow the', 'spike gene; cut to', 'a linear strand'],
      ['ivt', 'In vitro', 'transcription', 'an enzyme copies', 'DNA into mRNA'],
      ['purify', 'Purify', 'remove DNA, the', 'enzyme and stray', 'RNA scraps'],
      ['lnp', 'Form LNPs', 'lipids in ethanol', 'meet mRNA in', 'acidic buffer'],
      ['fill', 'Fill and freeze', 'add sugar, sterile-', 'filter, fill vials,', 'freeze'],
      ['ship', 'Ship cold', 'dry-ice shippers', 'with GPS and', 'temperature logs'],
    ];
    st.forEach((d, i) => {
      const x = 14 + i * 147, w = 132;
      s += `<g data-part="${d[0]}"><rect x="${x}" y="60" width="${w}" height="200" rx="16" class="${['il-3s', 'il-1s', 'il-8s', 'il-6s', 'il-4s', 'il-2s'][i]} il-line"/>`;
      s += `<text x="${x + 12}" y="88" class="il-title">${d[1]}</text>`;
      if (i === 1) s += `<text x="${x + 12}" y="106" class="il-title">${d[2]}</text>`;
      const icons = [
        `<circle cx="${x + 66}" cy="150" r="30" class="il-none st-3" stroke-width="5"/><path d="M${x + 44} 150 h44" class="st-3" stroke-width="3" stroke-dasharray="3 4"/>`,
        `<path d="M${x + 20} 136 h40 M${x + 20} 150 h40" class="il-line2"/><path d="M${x + 26} 136 v14 M${x + 36} 136 v14 M${x + 46} 136 v14 M${x + 56} 136 v14" class="il-line"/><path d="${wave(x + 70, 150, 44, 4, 12)}" class="il-none st-1" stroke-width="3"/><circle cx="${x + 66}" cy="143" r="4" class="il-4"/>`,
        `<path d="M${x + 36} 122 H${x + 96} L${x + 74} 158 V178 H${x + 58} V158 Z" class="il-paper il-line2"/><circle cx="${x + 56}" cy="132" r="3" class="il-7"/><circle cx="${x + 76}" cy="136" r="3" class="il-8"/>`,
        `<path d="M${x + 22} 130 H${x + 66} M${x + 22} 170 H${x + 66} M${x + 66} 130 V170 M${x + 66} 150 H${x + 110}" class="il-none st-6" stroke-width="7" stroke-linecap="round"/><circle cx="${x + 100}" cy="150" r="7" class="il-paper il-line"/>`,
        `<rect x="${x + 38}" y="124" width="18" height="44" rx="4" class="il-paper il-line2"/><rect x="${x + 66}" y="124" width="18" height="44" rx="4" class="il-paper il-line2"/><path d="M${x + 102} 128 v36 M${x + 86} 146 h32 M${x + 91} 134 l22 24 M${x + 113} 134 l-22 24" class="il-none st-1" stroke-width="2.5"/>`,
        `<rect x="${x + 30}" y="126" width="72" height="50" rx="6" class="il-paper il-line2"/><path d="M${x + 30} 142 h72" class="il-line"/><circle cx="${x + 92}" cy="118" r="6" class="il-7"/>`,
      ][i];
      s += icons;
      s += `<text x="${x + 12}" y="212" class="il-text-2">${d[i === 1 ? 3 : 2]}</text><text x="${x + 12}" y="229" class="il-text-2">${d[i === 1 ? 4 : 3]}</text>${i === 1 ? '' : `<text x="${x + 12}" y="246" class="il-text-2">${d[4]}</text>`}</g>`;
      if (i < 5) s += `<path d="M${x + w + 1} 160 H${x + 146}" class="il-none il-line2 flow"/>`;
    });
    s += `<text x="14" y="296" class="il-text">Drug substance (the mRNA): Andover, Massachusetts; Mainz, Germany (and a partner site)</text>`;
    s += `<text x="14" y="318" class="il-text">Finished vials released from Puurs, Belgium, and Mainz; Kalamazoo, Michigan, also in the network</text>`;
    s += `<text x="14" y="344" class="il-text-2">Sites as described by the EMA assessment report (Dec 2020) and Pfizer (Nov 2020); the network grew during 2021.</text>`;
    return s + `</svg>`;
  })();

  // ---------- mechanism SVG ----------
  const mechSVG = (() => {
    let s = `<svg viewBox="0 0 760 440">`;
    s += `<g data-part="cell"><rect x="170" y="110" width="380" height="300" rx="60" class="il-5s il-line2"/><rect x="177" y="117" width="366" height="286" rx="54" class="il-none il-line"/><circle cx="478" cy="340" r="52" class="il-bg il-line"/><text x="478" y="338" text-anchor="middle" class="il-text" style="font-size:18px">nucleus</text><text x="478" y="355" text-anchor="middle" class="il-text-2" style="font-size:16px">DNA untouched</text><text x="196" y="392" class="il-text-2" style="font-size:16px">a cell near the injection site</text></g>`;
    s += `<g data-part="syringe"><rect x="22" y="30" width="96" height="24" rx="5" class="il-paper il-line2"/><path d="M8 42 H22 M118 42 H186" class="il-line2"/><path d="M4 30 V54" class="il-line2"/><rect x="60" y="34" width="54" height="16" rx="3" class="il-1s"/><text x="14" y="84" class="il-text" style="font-size:18px">shot into arm muscle</text><text x="14" y="104" class="il-text-2" style="font-size:16px">in lipid nanoparticles</text></g>`;
    s += `<g data-part="endosome"><circle cx="258" cy="205" r="44" class="il-bg il-line il-dash"/><text x="196" y="274" class="il-text-2" style="font-size:16px">endosome (acidic bubble)</text></g>`;
    s += `<g data-part="lnp">${lnpIcon(216, 48, 13)}${lnpIcon(248, 66, 13)}${lnpIcon(222, 88, 13)}</g>`;
    s += `<g data-part="mrna"><path d="${wave(214, 300, 190, 5, 16)}" class="il-none st-1" stroke-width="3.5" stroke-linecap="round"/><text x="214" y="332" class="il-text-2" style="font-size:16px">free mRNA recipe</text></g>`;
    s += `<g data-part="degraded"><path d="M214 300 h24 M250 296 h18 M282 303 h22 M318 298 h14 M346 302 h20 M378 299 h16" class="il-none st-1 il-dash" stroke-width="3" stroke-linecap="round"/><text x="214" y="332" class="il-text-2" style="font-size:16px">mRNA broken down</text></g>`;
    s += `<g data-part="ribosome"><ellipse cx="330" cy="309" rx="24" ry="13" class="il-5"/><ellipse cx="330" cy="290" rx="17" ry="10" class="il-5"/><text x="362" y="283" class="il-text-2" style="font-size:16px">ribosome</text></g>`;
    s += `<g data-part="newspike"><path d="M330 280 C335 250 345 230 360 214" class="il-none st-2" stroke-width="3" stroke-dasharray="2 5" stroke-linecap="round"/><g transform="translate(366 212)">${spikeAt(0, 0, 1.2, 20, 'il-2s')}</g><text x="382" y="232" class="il-text-2" style="font-size:16px">spike protein</text><text x="382" y="248" class="il-text-2" style="font-size:16px">being built</text></g>`;
    s += `<g data-part="surface">${spikeAt(300, 112, 1.5)}${spikeAt(380, 112, 1.5)}${spikeAt(460, 112, 1.5)}<text x="286" y="66" class="il-text" style="font-size:18px">spike shown on the cell surface</text></g>`;
    s += `<g data-part="fragments"><rect x="546" y="182" width="16" height="10" rx="3" class="il-3s il-line"/><circle cx="568" cy="187" r="4" class="il-2"/><rect x="546" y="222" width="16" height="10" rx="3" class="il-3s il-line"/><circle cx="568" cy="227" r="4" class="il-2"/><text x="536" y="165" text-anchor="end" class="il-text-2" style="font-size:16px">spike fragments</text><text x="536" y="181" text-anchor="end" class="il-text-2" style="font-size:16px">on display</text></g>`;
    s += `<g data-part="arrows"><path d="M470 88 C540 60 590 70 620 92" class="il-none il-line2 flow"/><path d="M576 208 C600 215 615 225 630 238" class="il-none il-line2 flow"/></g>`;
    s += `<g data-part="bcell"><circle cx="660" cy="118" r="30" class="il-3s st-3" stroke-width="2"/><circle cx="660" cy="118" r="12" class="il-3"/><text x="660" y="168" text-anchor="middle" class="il-text" style="font-size:18px">B cell</text></g>`;
    s += `<g data-part="antibodies">${Y(610, 40, 1.2, -40)}${Y(648, 26, 1.2, 10)}${Y(700, 34, 1.2, 50)}${Y(726, 80, 1.2, 80)}${Y(716, 128, 1.2, 110)}<text x="598" y="30" text-anchor="end" class="il-text-2" style="font-size:16px">antibodies</text></g>`;
    s += `<g data-part="tcell"><circle cx="664" cy="258" r="28" class="il-3s st-3" stroke-width="2"/><circle cx="664" cy="258" r="11" class="il-3"/><text x="664" y="305" text-anchor="middle" class="il-text" style="font-size:18px">T cells</text></g>`;
    s += `<g data-part="memory"><circle cx="612" cy="362" r="13" class="il-3s st-3" stroke-width="2"/><circle cx="612" cy="362" r="19" class="il-none st-3 il-dash"/><circle cx="660" cy="378" r="13" class="il-3s st-3" stroke-width="2"/><circle cx="660" cy="378" r="19" class="il-none st-3 il-dash"/><circle cx="708" cy="362" r="13" class="il-3s st-3" stroke-width="2"/><circle cx="708" cy="362" r="19" class="il-none st-3 il-dash"/><text x="580" y="424" class="il-text" style="font-size:18px">memory B and T cells</text></g>`;
    s += `<g data-part="virus">${virus(88, 300, 28, 12, 0.9)}${Y(88, 252, 1.1, 180)}${Y(136, 300, 1.1, -90)}${Y(88, 348, 1.1, 0)}${Y(40, 300, 1.1, 90)}<text x="14" y="386" class="il-text" style="font-size:18px">later: the real virus</text><text x="14" y="403" class="il-text-2" style="font-size:16px">is met by ready antibodies</text></g>`;
    return s + `</svg>`;
  })();

  // ---------- math for the trial simulator ----------
  const lgamma = z => { const g = 7, c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - lgamma(1 - z);
    z -= 1; let x = c[0]; for (let i = 1; i < g + 2; i++) x += c[i] / (z + i); const t = z + g + 0.5; return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x); };
  const betacf = (a, b, x) => { let qab = a + b, qap = a + 1, qam = a - 1, c = 1, d = 1 - qab * x / qap; if (Math.abs(d) < 1e-30) d = 1e-30; d = 1 / d; let h = d;
    for (let m = 1; m <= 300; m++) { const m2 = 2 * m; let aa = m * (b - m) * x / ((qam + m2) * (a + m2)); d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30; c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30; d = 1 / d; h *= d * c;
      aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2)); d = 1 + aa * d; if (Math.abs(d) < 1e-30) d = 1e-30; c = 1 + aa / c; if (Math.abs(c) < 1e-30) c = 1e-30; d = 1 / d; const del = d * c; h *= del; if (Math.abs(del - 1) < 3e-12) break; }
    return h; };
  const betai = (a, b, x) => { if (x <= 0) return 0; if (x >= 1) return 1; const bt = Math.exp(lgamma(a + b) - lgamma(a) - lgamma(b) + a * Math.log(x) + b * Math.log(1 - x));
    return x < (a + 1) / (a + b + 2) ? bt * betacf(a, b, x) / a : 1 - bt * betacf(b, a, 1 - x) / b; };
  // Pr(VE > 30% | v vaccine cases, p placebo cases), beta-binomial with the protocol prior Beta(0.700102, 1), equal surveillance time assumed
  const prSuccess = (v, p) => betai(0.700102 + v, 1 + p, 0.7 / 1.7);

  registerCase({
    id: 'comirnaty', kind: 'success',
    brand: 'Comirnaty', generic: 'tozinameran (BNT162b2), the Pfizer-BioNTech COVID-19 vaccine', company: 'BioNTech and Pfizer',
    tagline: 'Three decades of unfashionable science on [[mRNA]], fat bubbles and protein shapes, then a vaccine designed, tested and authorized in about eleven months.',
    chips: [['Disease', '[[COVID-19]]'], ['Modality', '[[mRNA]] [[vaccine]] in [[lipid nanoparticle|lipid nanoparticles]]'], ['Target', '[[spike protein]] of [[SARS-CoV-2]]'], ['Authorized', 'Dec 2020 (UK, US); full US approval Aug 2021']],
    readingTime: 40,
    stats: [
      {v: '95%', l: '[[vaccine efficacy]] in the phase 3 trial: 8 cases vs 162 on placebo', n: 'Polack et al., NEJM 2020'},
      {v: '310 days', l: 'From the launch of Project Lightspeed (Jan 27, 2020) to the first authorization (UK, Dec 2)', n: 'BioNTech; Pfizer-BioNTech release'},
      {v: '43,548', l: 'People randomized in the phase 3 trial, across 152 sites in six countries', n: 'Polack et al., NEJM 2020'},
      {v: '3 billion+', l: 'Doses manufactured in 2021', n: 'Pfizer full-year 2021 results'},
      {v: '$37.8B', l: 'Pfizer\'s peak Comirnaty revenue (2022); it fell to $4.4B by 2025', n: 'Pfizer 8-K filings'},
    ],
    emblem,
    facts: {start: 2020, firstHuman: 2020, approval: 2021, end: null, peakSalesB: 37.8, pivotalN: 43548,
      area: 'infectious', modality: 'mRNA vaccine', target: 'SARS-CoV-2 spike protein'},
    themes: ['platform', 'speed', 'manufacturing', 'safety'],
    glossary: {
      'COVID-19': 'The disease caused by the coronavirus SARS-CoV-2, first identified in Wuhan, China, at the end of 2019.',
      'SARS-CoV-2': 'The coronavirus that causes COVID-19. Its genetic sequence was posted publicly on January 10, 2020.',
      'spike protein': 'The protein that studs the surface of a coronavirus. It latches onto a human cell and fuses the virus with it. Antibodies that block the spike block infection.',
      'MERS': 'Middle East respiratory syndrome, caused by a related coronavirus first identified in 2012. Vaccine work on MERS produced the 2P trick used in COVID-19 vaccines.',
      'ACE2': 'A protein on the surface of human cells in the airways and elsewhere. The coronavirus spike grabs it like a doorknob to get in.',
      'receptor-binding domain': 'The tip of the spike protein that actually touches ACE2. Often shortened to RBD.',
      'ribosome': 'The cell\'s protein-making machine. It reads an mRNA three letters at a time and strings together the matching amino acids.',
      'amino acid': 'One of 20 building blocks that proteins are made from. A protein is a chain of hundreds to thousands of them, folded into a shape.',
      'codon': 'A three-letter "word" in DNA or RNA that stands for one amino acid (or for start or stop).',
      'innate immune system': 'The body\'s fast, generic defenses. Sensors recognize broad signs of infection, such as foreign RNA, and trigger inflammation within hours.',
      'adaptive immune system': 'The slower, specific defenses: B cells and T cells that learn one exact target and keep memory of it.',
      'dendritic cell': 'An immune sentry cell. It samples its surroundings, raises the alarm and shows pieces of invaders to T cells.',
      'neutralizing antibody': 'An antibody that stops a virus from infecting cells, usually by blocking the protein it uses to get in.',
      'memory cell': 'A long-lived B or T cell that remembers a target, so a second encounter gets a faster, stronger response.',
      'Toll-like receptor': 'A family of innate immune sensors. Some of them detect RNA and set off inflammation, which is why unmodified lab-made mRNA provoked the immune system.',
      'nucleoside': 'One building block of RNA or DNA: a base (A, U, G or C in RNA) attached to a sugar.',
      'uridine': 'The "U" building block of RNA. It is the one Karikó and Weissman swapped for modified versions.',
      'pseudouridine': 'A naturally occurring, chemically rearranged form of uridine found in human RNA. Putting it into lab-made mRNA calmed the immune reaction.',
      'N1-methylpseudouridine': 'A further-modified pseudouridine that works even better. Comirnaty uses it in place of every uridine.',
      'untranslated region': 'Stretches at either end of an mRNA that are not turned into protein but control how well and how long the message is read.',
      'poly(A) tail': 'A long run of A letters at the end of an mRNA. It protects the message and helps the ribosome read it.',
      '5′ cap': 'A chemical cap on the front end of an mRNA that tells the ribosome where to start and protects the message.',
      'in vitro transcription': 'Making RNA in a test tube: an enzyme copies a DNA template into RNA, with no living cells involved.',
      'plasmid': 'A small ring of DNA that bacteria copy as they grow. Factories use it to mass-produce the DNA template for mRNA.',
      'siRNA': 'Small interfering RNA: short double strands that switch off a specific gene. They needed lipid nanoparticles first, which is where the delivery technology matured.',
      'ionizable lipid': 'A fat-like molecule that is uncharged at the body\'s normal pH but becomes positively charged in acid. It grips RNA during manufacture and helps release it inside cells.',
      'PEG-lipid': 'A lipid with a polyethylene glycol chain attached. It controls particle size and stops particles clumping.',
      'phospholipid': 'The main type of fat in cell membranes, with a water-loving head and two oily tails.',
      'endosome': 'A bubble of membrane a cell uses to swallow things from outside. It turns acidic as it matures.',
      'prefusion': 'The shape a viral fusion protein has before it attacks a cell. Antibodies against this shape are the best at blocking infection.',
      '2P mutation': 'Two amino acids in the spike swapped for proline, a rigid amino acid, which locks the spike in its prefusion shape. Designed by McLellan, Graham, Ward and colleagues.',
      'proline': 'An unusually rigid amino acid. Placed at a hinge, it stops a protein from bending into a new shape.',
      'cryo-electron microscopy': 'A way of imaging frozen proteins with electrons to work out their 3D shape. Used to solve the coronavirus spike structures.',
      'self-amplifying RNA': 'An mRNA that also carries the recipe for copying itself inside the cell, so a smaller dose can make more protein.',
      'viral vector': 'A harmless virus engineered to carry a gene from another pathogen into cells, as in some Ebola and COVID-19 vaccines.',
      'subunit vaccine': 'A vaccine made of one purified piece of a pathogen, usually a protein, such as the hepatitis B vaccine.',
      'reactogenicity': 'The short-term side effects a vaccine provokes: sore arm, fever, chills, fatigue, headache.',
      'event-driven trial': 'A trial that runs until a pre-set number of events (here, COVID-19 cases) has occurred, rather than until a fixed date.',
      'vaccine efficacy': 'The percentage reduction in the rate of disease among vaccinated people compared with placebo in a trial: 1 minus the ratio of the two rates.',
      'attack rate': 'The share of a group that catches the disease over a period of time.',
      'person-years': 'The total time people were followed, added up. 1,000 people watched for a year, or 2,000 for six months, both make 1,000 person-years.',
      'posterior probability': 'In Bayesian statistics, how likely something is after seeing the data. Pfizer\'s bar: over 98.6% probability that true efficacy exceeded 30%.',
      'credible interval': 'The Bayesian version of a confidence interval: the range the true value most plausibly lies in, given the data.',
      'number needed to vaccinate': 'How many people must be vaccinated to prevent one case over a given period. It depends heavily on how much disease is circulating.',
      'VRBPAC': 'The Vaccines and Related Biological Products Advisory Committee: outside experts who advise the FDA on vaccines in public meetings.',
      'MHRA': 'The Medicines and Healthcare products Regulatory Agency, the UK\'s drug regulator.',
      'conditional marketing authorization': 'An EU approval for urgent medicines granted on less complete data, with obligations to supply more. It is a real license, renewed yearly.',
      'rolling review': 'A regulator reviewing data package by package as it arrives, instead of waiting for a complete file.',
      'Operation Warp Speed': 'The US government\'s 2020 program to speed COVID-19 vaccines and treatments through funding, purchase agreements and logistics.',
      'advance purchase agreement': 'A government contract to buy a product before it is approved, paid on delivery if it succeeds.',
      'Fast Track': 'An FDA designation for drugs addressing serious unmet needs. It allows more frequent meetings with the FDA and rolling submission.',
      'myocarditis': 'Inflammation of the heart muscle. After mRNA vaccines it was rare, mostly in young males within days of the second dose, and usually resolved quickly.',
      'pericarditis': 'Inflammation of the sac around the heart.',
      'anaphylaxis': 'A sudden, severe allergic reaction. It is why vaccinated people were watched for 15 minutes after the shot.',
      'VAERS': 'The US Vaccine Adverse Event Reporting System, where anyone can report a health problem after vaccination. Reports are signals, not proof of cause.',
      'booster': 'An extra dose given after the first series to restore protection that has faded or to match a new variant.',
      'variant': 'A version of the virus with mutations that change how it behaves, such as Delta or Omicron.',
      'cold chain': 'The unbroken chain of temperature-controlled storage and transport from the factory to the arm.',
      'thermal shipper': 'An insulated box, packed with dry ice, that kept Comirnaty vials at about -70°C in transit.',
      'dsRNA': 'Double-stranded RNA. A by-product of making mRNA in a test tube that strongly triggers the innate immune system, so it has to be purified out.',
      'gross profit split': 'A deal structure where partners share the profit left after the cost of making the product, here 50:50 between Pfizer and BioNTech.',
      'inter partes review': 'A US Patent Office proceeding where a company can challenge a competitor\'s patent as invalid, without going to court.',
      'European Patent Office': 'The body that grants European patents. Rivals can file an "opposition" there to have a patent revoked.',
      'neoantigen': 'A protein fragment found only on a person\'s tumor, created by the tumor\'s own mutations. A target for personalized cancer vaccines.',
      'relative risk reduction': 'How much a treatment cuts the risk compared with the control group, as a percentage. Vaccine efficacy is a relative risk reduction.',
      'absolute risk reduction': 'The simple difference in risk between two groups over a period, such as 0.9% minus 0.04%.',
      'Regulation 174': 'A UK rule letting the regulator temporarily authorize supply of an unlicensed medicine in response to a public-health threat.',
      'CureVac': 'A German mRNA company founded in 2000. It sued BioNTech over patents and was later acquired by BioNTech in 2025.',
    },
    sections: [

      // ================= COLD OPEN =================
      {type: 'story', kicker: 'Cold open', title: 'Sunday, November 8, 2020', tocTitle: 'Cold open', html: `
<p>The people who knew the answer were not allowed to work for Pfizer. On Sunday, November 8, 2020, a small independent [[data monitoring committee]] met to look at something no one inside the company had seen: which arm of the trial each COVID-19 case had come from. There were 94 cases so far. The trial had enrolled 43,538 people, and 38,955 of them had already received their second shot of either the vaccine or a saltwater [[placebo]].</p>
<p>The rule had been fixed months earlier, before any case occurred. If the split of cases was lopsided enough, meaning that it gave overwhelming evidence that the vaccine cut the rate of disease by more than 30%, the committee could declare success early. If not, the trial would run on to 164 cases, and the world would keep waiting. At that point in the pandemic, as Pfizer's chief executive Albert Bourla put it a week later, "hundreds of thousands of people around the globe" were being infected every day.</p>
<p>The split was not close. On Monday morning Pfizer and BioNTech announced that their [[vaccine]] candidate, a string of synthetic [[mRNA]] wrapped in microscopic fat bubbles, appeared to be more than 90% effective. Ten days later the final analysis came in: 170 cases, 162 of them in the placebo group and 8 in the vaccine group. For the scientists behind the technology, several of whom had spent twenty or thirty years on ideas that grant committees and journals had found unconvincing, it was a vindication.</p>
<p>On December 8, 2020, in Coventry, England, a 90-year-old woman named Margaret Keenan rolled up her sleeve and a nurse named May Parsons gave her the first dose of the Pfizer-BioNTech vaccine outside a trial. Fewer than eleven months had passed since the virus's genetic sequence appeared on the internet. The average vaccine, one study of the industry found, takes more than ten years to get from the lab to the market.</p>
<p>This case is about how that happened: a molecule most of the field had written off, the few people who kept working on it, and then trial design, factories, freezers, fast regulators, a great deal of money, and the harder problem of keeping people's trust.</p>`},

      // ================= BIOLOGY FROM ZERO =================
      {type: 'story', kicker: 'The biology from zero', title: 'How a vaccine teaches the immune system', tocTitle: 'Vaccines from zero', html: `
<p>Your immune system has two layers, and a vaccine needs both.</p>
<p>The first is the <strong>[[innate immune system]]</strong>: fast, blunt and generic. Its sensors don't know which virus they are looking at; they recognize broad danger signs, such as the kind of genetic material viruses carry or the debris of damaged cells. When they trip, they sound an alarm within hours. Blood vessels leak, the area swells and heats up, signaling molecules called [[cytokine|cytokines]] spread the word. That is [[inflammation]]. Sentry cells called [[dendritic cell|dendritic cells]] gather samples of whatever set off the alarm and carry them to the lymph nodes.</p>
<p>The second is the <strong>[[adaptive immune system]]</strong>: slow, precise and able to remember. In the lymph nodes, dendritic cells show those samples to two kinds of white blood cell. [[B cell|B cells]] that happen to fit the sample multiply and pour out [[antibody|antibodies]], Y-shaped proteins that stick to one exact shape. [[T cell|T cells]] come in two main types: helpers, which coordinate the response, and killers, which destroy the body's own cells once they are infected. A first encounter with a new invader takes one to two weeks to reach full strength. Afterwards, long-lived [[memory cell|memory cells]] stay behind, so the next encounter is met in days instead of weeks.</p>
<p>A vaccine is a rehearsal. It shows the adaptive immune system a harmless version of the invader, so that the real one meets a trained army. The hard part is deciding what to show. The classic answers were a weakened live virus (measles, yellow fever) or a killed one (polio, hepatitis A). Later came <strong>[[subunit vaccine|subunit vaccines]]</strong>, which contain a single purified viral protein (hepatitis B in 1986, HPV in 2006), and <strong>[[viral vector]]</strong> vaccines, where a harmless virus carries a gene from the dangerous one (the first was licensed for Ebola in 2019). All of them are grown in living cells or eggs, in large, slow, specialized factories.</p>
<h3>The target: a key called spike</h3>
<p>[[SARS-CoV-2]], the coronavirus that causes [[COVID-19]], is a ball of fatty membrane wrapped around a single long strand of [[RNA]]: its genome, about 30,000 letters long. Sticking out of the membrane are dozens of copies of the <strong>[[spike protein]]</strong>. The spike is the virus's key. Its tip, the [[receptor-binding domain]], grabs a protein called [[ACE2]] on the surface of cells lining the airways. Then the spike changes shape violently, like a spring being released, and fuses the virus's membrane with the cell's, dumping the viral RNA inside.</p>
<p>Earlier work on the SARS and MERS coronaviruses had shown that antibodies against the spike can block that entry. Those are called <strong>[[neutralizing antibody|neutralizing antibodies]]</strong>, and they became the thing every COVID-19 vaccine tried to provoke. The question was how to get the immune system to see the spike, fast, safely and in billions of people.</p>`},

      {type: 'figure', title: 'The cast of characters', intro: 'Hover or tap each part to see what it does. The same colors are used for the rest of this case: orange for the virus and its spike, aqua for the immune system.',
        svg: figImmune,
        hotspots: {
          virus: {title: 'SARS-CoV-2', text: 'A coronavirus: an oily membrane around an RNA genome of roughly 30,000 letters. Inside a cell it hijacks the machinery to make copies of itself.'},
          spike: {title: 'Spike protein', text: 'Dozens of spikes stud each virus. The spike binds [[ACE2]] on human cells and then refolds to fuse the virus with the cell. It is the target of every major COVID-19 vaccine.'},
          innate: {title: 'Dendritic cell (innate immunity)', text: 'A sentry of the [[innate immune system]]. It senses danger signals, including foreign RNA, triggers [[inflammation]] and carries fragments of the invader to the lymph nodes to brief T cells.'},
          tcell: {title: 'T cells', text: 'Helper T cells coordinate the response and help B cells mature. Killer T cells recognize spike fragments displayed on infected cells and destroy those cells before they release new virus.'},
          bcell: {title: 'B cell', text: 'Each B cell carries one antibody design. The rare ones that fit the spike multiply, refine their fit and become antibody factories.'},
          antibodies: {title: 'Neutralizing antibodies', text: 'Antibodies that coat the spike, especially its tip, stop it from grabbing ACE2. The virus cannot get in. This is the protection vaccine trials were built to produce.'},
          memory: {title: 'Memory cells', text: 'After the response winds down, memory B and T cells remain. They are why a vaccinated person can respond quickly to a later infection, even after antibody levels in the blood fall.'},
        },
        caption: 'Schematic. A real response involves many more cell types and takes one to two weeks to peak after a first exposure.'},

      {type: 'story', kicker: 'The idea', title: 'mRNA: sending the recipe instead of the dish', tocTitle: 'What mRNA is', html: `
<p>Every cell in your body keeps a master cookbook in its nucleus: your [[DNA]], about three billion letters long, containing roughly 20,000 [[gene|genes]]. Each gene is a recipe for a [[protein]]. The cookbook never leaves the nucleus. When a cell needs a protein, it makes a temporary photocopy of just that one recipe, in a similar molecule called [[RNA]]. This copy is <strong>messenger RNA</strong>, or [[mRNA]]. It travels out to the cell's kitchens, the [[ribosome|ribosomes]], which read it three letters at a time (each three-letter word is a [[codon]]) and string together the matching [[amino acid|amino acids]]. The chain folds itself into a working protein.</p>
<p>Then the cell shreds the recipe. mRNA is built to be disposable: most messages last minutes to hours. That is a feature. A cell that could not throw away old instructions could not change what it makes.</p>
<p>The idea behind an mRNA vaccine follows directly. Instead of growing the spike protein in a factory and injecting it, inject the recipe for the spike. The body's own cells read it, build spike protein, and display it; the immune system learns to recognize it; the recipe is destroyed. The advantages were obvious as early as 1990, when Philip Felgner and colleagues showed that mRNA injected into mouse muscle produced protein:</p>
<ul>
<li><strong>No living factory.</strong> mRNA can be made in a test tube by [[in vitro transcription]]: an [[enzyme]] copies a DNA template into RNA. No cells, no eggs.</li>
<li><strong>Swap the recipe, keep the kitchen.</strong> The chemistry is the same whatever protein the message encodes. Change the sequence and you have a new vaccine, in principle made on the same equipment.</li>
<li><strong>It cannot rewrite your genes.</strong> mRNA works in the cell's outer compartment and never needs to enter the nucleus. It cannot integrate into DNA.</li>
</ul>
<h3>Why almost everyone gave up on it</h3>
<p>For fifteen years after Felgner's experiment, mRNA looked beautiful on a whiteboard and hopeless in a body. Three problems, each fatal on its own:</p>
<p><strong>It is fragile.</strong> Enzymes that chew up RNA are everywhere: on skin, in blood, in the air of the lab. Naked mRNA injected into tissue is largely destroyed before it reaches a cell.</p>
<p><strong>It is inflammatory.</strong> Viruses are, to a cell, mostly bundles of foreign RNA. The innate immune system has sensors, including the [[Toll-like receptor|Toll-like receptors]], that are exquisitely tuned to detect RNA that doesn't look like the body's own. Lab-made mRNA tripped every alarm. The result was inflammation and, worse, a defensive response inside the cell that shuts down protein production, so the recipe was barely read.</p>
<p><strong>It can't get in.</strong> mRNA molecules are huge by drug standards, thousands of letters long, and carry a strong negative electrical charge. Cell membranes are oily barriers that repel both. The obvious fix, wrapping the RNA in positively charged fats, worked in a dish but those fats tore membranes apart and were toxic in animals.</p>
<p>So most of the field moved to DNA, which is sturdier, or to engineered viruses. mRNA became a niche for a few stubborn academics and three small companies: CureVac (founded 2000), BioNTech (2008) and Moderna (2010).</p>`},

      {type: 'figure', title: 'Anatomy of the Comirnaty mRNA', intro: 'Each part of the molecule is engineered. Hover or tap the segments.',
        svg: figRNA,
        hotspots: {
          cap: {title: '5′ cap', text: 'A chemical cap at the front end. Ribosomes look for it to start reading, and it shields the message from enzymes that nibble RNA from the end. The EMA describes the product as a "5′-capped" mRNA.'},
          utr5: {title: '5′ untranslated region', text: 'A short lead-in that is not turned into protein. Its sequence influences how efficiently ribosomes load onto the message.'},
          cds: {title: 'Coding sequence', text: 'The recipe itself: the full-length [[spike protein]] of the original Wuhan-Hu-1 virus, starting with the universal start codon AUG. Two amino acids are changed to proline (the "2P" change) to hold the spike in its [[prefusion]] shape.'},
          utr3: {title: '3′ untranslated region', text: 'A tail-end segment that is not translated. Its sequence affects how long the message survives in the cell and therefore how much protein it makes.'},
          polya: {title: 'Poly(A) tail', text: 'A long run of A letters. Regulators flagged its length as important for stability and translation, and asked for it to be tested on every batch.'},
          m1psi: {title: 'Modified uridine', text: 'Comirnaty contains no ordinary uridine at all. Every U is replaced by [[N1-methylpseudouridine]], a descendant of Karikó and Weissman\'s discovery, which lets the message slip past innate immune sensors and be read more efficiently.'},
        },
        caption: 'Composition as described in the EMA public assessment report (December 2020). Lengths are schematic.'},

      {type: 'callout', variant: 'product', heading: 'mRNA is a deployable config file, and the body is not a sandbox', html: `<p>If you have shipped software, the appeal of mRNA is familiar: separate the runtime from the payload. The cell's ribosomes are a universal runtime; the mRNA is a config file telling it what to build. Change the file, keep the infrastructure, redeploy. That is why BioNTech and Moderna called themselves [[platform]] companies long before they had a product.</p><p>Where it breaks: in software the runtime doesn't fight your config. Here the host treats foreign code as an attack, and the delivery vehicle (the lipid packaging) causes its own reactions. You also can't hot-patch a dose once it is in someone's arm, and every new "deployment" into people still needs its own evidence. The platform shortens the build; it doesn't remove the test cycle.</p>`},

      // ================= KEY INSIGHTS =================
      {type: 'story', kicker: 'The key insights', title: 'Three unglamorous breakthroughs', tocTitle: 'Three breakthroughs', html: `
<p>By 2019 the three problems had been solved, separately, by people who were mostly not trying to make a coronavirus vaccine. Each fix took a decade or more.</p>
<h3>1. Karikó and Weissman: disguising the message</h3>
<p>Katalin Karikó, a Hungarian biochemist, came to the United States for research posts at Temple University and in Bethesda, and by the early 1990s was an assistant professor at the University of Pennsylvania, applying for grants to develop mRNA as a medicine and mostly being turned down. In 1995, she later recalled, the university gave her a choice between leaving and accepting a demotion and a pay cut. She stayed.</p>
<p>In 1997 an immunologist named Drew Weissman arrived at Penn. He had trained with Anthony Fauci at the National Institutes of Health and was interested in dendritic cells and vaccines. The two started working together in the late 1990s. They noticed that dendritic cells treated lab-made mRNA as an enemy, releasing inflammatory signals, while RNA taken from mammalian cells did not provoke the same reaction. What was the difference?</p>
<p>They knew that the RNA in our cells is often chemically decorated: some of its building blocks, the [[nucleoside|nucleosides]], carry small modifications. Lab-made mRNA has none. Perhaps the immune system uses those decorations to tell "self" from "virus". They made batches of mRNA with different modified nucleosides and tested them on dendritic cells. The result, published in 2005 in the journal <em>Immunity</em>, was stark: when [[uridine]] was replaced with a natural variant called [[pseudouridine]], the inflammatory response largely disappeared. The paper had been rejected by <em>Nature</em> and <em>Science</em> first.</p>
<p>In 2008 they showed the second half of the benefit: pseudouridine mRNA made much more protein in cells and in mice, because the cell no longer switched off translation in self-defense. Other groups later found that a further-modified version, [[N1-methylpseudouridine]], worked better still. Karikó and colleagues also showed that stray [[dsRNA|double-stranded RNA]] left over from manufacturing was a potent alarm trigger and could be purified away. Karikó later joined BioNTech, where by 2020 she was a senior vice president. In October 2023 she and Weissman shared the Nobel Prize in Physiology or Medicine "for their discoveries concerning nucleoside base modifications that enabled the development of effective mRNA vaccines against COVID-19."</p>
<h3>2. Cullis and the lipid nanoparticle: getting in</h3>
<p>At the University of British Columbia, Pieter Cullis had spent the 1980s building liposomes, hollow fat bubbles that carry cancer drugs. By the late 1990s he and colleagues at the Vancouver companies Inex Pharmaceuticals and its spin-off Protiva were attacking the harder job of carrying genetic material. "There are no cationic lipids in nature," Cullis told <em>C&amp;EN</em> in 2021, "and we knew we couldn't use permanently positively charged lipids because they are so damn toxic."</p>
<p>The answer was the <strong>[[ionizable lipid]]</strong>: a molecule with no charge at the body's normal pH but a positive charge in acid. Mix it with RNA in an acidic solution and it grabs the negatively charged RNA and packs around it. Inject the particle and, in the neutral blood, it goes quiet and less toxic. Once a cell swallows it into an acidic bubble called an [[endosome]], the lipid switches back on, disrupts the bubble and lets the RNA escape. The team also developed a manufacturing trick, rapidly mixing a stream of lipids dissolved in ethanol with a stream of RNA in acidic buffer, so that dense particles form by themselves in milliseconds.</p>
<p>Much of the optimization was driven by a different technology, [[siRNA]], which silences genes. Working with Alnylam Pharmaceuticals, the groups made more than 300 ionizable lipids. In 2018 Alnylam's Onpattro became the first approved drug delivered in a [[lipid nanoparticle]]. Acuitas Therapeutics, founded in 2009 by Thomas Madden, Cullis and Michael Hope, went on to supply lipids for mRNA. The ionizable lipid in Comirnaty, ALC-0315, came from Acuitas under a license to BioNTech.</p>
<h3>3. McLellan, Graham and Ward: freezing the spike's shape</h3>
<p>The third fix was about what the recipe should encode. At the NIH's Vaccine Research Center, Barney Graham and a young structural biologist, Jason McLellan, had been haunted by a 1960s disaster: an experimental vaccine against RSV, a childhood respiratory virus, that made disease worse. About 80% of vaccinated infants who later caught RSV were hospitalized, compared with 5% of controls, and two died. The explanation, which they helped work out, was shape: the virus's spring-loaded fusion protein had been displayed in its sprung, "postfusion" form, and the antibodies it raised were poor at blocking the real virus. In 2013 they published an RSV protein engineered to stay in its [[prefusion]] shape. It raised ten times the neutralizing antibody of the old form in monkeys.</p>
<p>Coronavirus spikes were too big and floppy to image until Andrew Ward's lab at Scripps Research used [[cryo-electron microscopy]] to solve the structure of a common-cold coronavirus spike in 2016. Studying it, McLellan found a hinge near the top where two coiled segments are held together by a small loop. "It is like a spring bent in half," he told <em>C&amp;EN</em>. Swapping two amino acids in that loop for [[proline]], the most rigid amino acid, clamped the spring shut. The [[2P mutation|2P]] design stabilized the spike of the [[MERS]] coronavirus, published in 2017 by Jesper Pallesen and colleagues. Graham's lab began a MERS mRNA vaccine with Moderna the same year.</p>
<p>When the SARS-CoV-2 sequence was posted on January 10, 2020, the 2P recipe could be applied within days. McLellan's lab, working with Graham's, solved the structure of the stabilized SARS-CoV-2 spike and published it in <em>Science</em> in February 2020. The spike encoded by Comirnaty carries those two prolines.</p>
<blockquote class="pull">"The RSV work showed that the protein sequence is not nearly as important as the protein conformation."<cite>Barney Graham, speaking to C&amp;EN, 2020</cite></blockquote>`},

      {type: 'custom', title: 'Switch off a breakthrough', intro: 'Each of the three fixes solved a different failure. Turn them on and off to see what a vaccine without each one would have faced. The meters are qualitative, not measured values.',
        html: `<div class="card"><div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:14px" class="cf-sw"></div><div class="cf-meters"></div><div class="cf-verdict" style="margin-top:12px;font:400 16.5px/1.6 var(--serif)"></div></div>`,
        init(root) {
          const st = {mod: true, lnp: true, p2: true};
          const labels = {mod: 'Modified nucleosides (Karikó and Weissman)', lnp: 'Lipid nanoparticle delivery (Cullis and others)', p2: 'Prefusion-stabilized 2P spike (McLellan, Graham, Ward)'};
          const sw = root.querySelector('.cf-sw');
          Object.keys(st).forEach(k => { const b = document.createElement('button'); b.className = 'btn'; b.dataset.k = k; b.onclick = () => { st[k] = !st[k]; draw(); }; sw.appendChild(b); });
          const meter = (name, lvl, good, note) => {
            const pct = [6, 34, 66, 100][lvl], col = good ? 'var(--il-3)' : 'var(--il-7)';
            return `<div style="display:grid;grid-template-columns:210px 1fr;gap:12px;align-items:center;margin:8px 0"><div style="font-size:15px">${name}</div><div><div style="height:14px;border-radius:7px;background:var(--panel-2);border:1px solid var(--rule);overflow:hidden"><div style="height:100%;width:${pct}%;background:${col};transition:width .4s"></div></div><div style="font-size:13px;color:var(--ink-3);margin-top:3px">${note}</div></div></div>`;
          };
          const draw = () => {
            sw.querySelectorAll('button').forEach(b => { const on = st[b.dataset.k]; b.textContent = (on ? 'ON: ' : 'OFF: ') + labels[b.dataset.k]; b.className = on ? 'btn primary' : 'btn'; b.setAttribute('aria-pressed', on); });
            let prot, infl, qual, verdict;
            if (!st.lnp) {
              prot = 0; infl = st.mod ? 1 : 1; qual = 0;
              verdict = '<b>Almost nothing reaches the cells.</b> Unprotected mRNA is destroyed by enzymes in the tissue, and what survives cannot cross the oily cell membrane. This was the state of the art for most of the 1990s.';
            } else if (!st.mod) {
              prot = 1; infl = 3; qual = st.p2 ? 1 : 0;
              verdict = '<b>The message gets in, but the cell treats it as a virus.</b> Innate sensors such as [[Toll-like receptor|Toll-like receptors]] detect unmodified RNA, inflammation flares and the cell throttles protein production. BioNTech did test an unmodified-uridine candidate (BNT162a1) in 2020 but did not advance it; CureVac, which used unmodified RNA, withdrew its first-generation vaccine application in October 2021.';
            } else {
              prot = 3; infl = 1; qual = st.p2 ? 3 : 1;
              verdict = st.p2 ? '<b>All three fixes on: the Comirnaty design.</b> The message gets in, is read efficiently, and the spike it makes holds the shape the virus shows before it attacks. Some inflammation remains, partly from the lipid particles themselves, which is one reason for sore arms and fevers.'
                : '<b>Plenty of spike, but some of it in the wrong shape.</b> Without the proline clamp, spikes can spring into their postfusion form, and antibodies raised against that shape block infection less well. Note that the 2P change was a best guess in early 2020; its value in people was never tested head to head in a large trial.';
            }
            root.querySelector('.cf-meters').innerHTML =
              meter('Spike protein made', prot, true, ['essentially none', 'low', 'moderate', 'high'][prot]) +
              meter('Unwanted inflammation', infl, false, ['none', 'modest', 'moderate', 'strong'][infl]) +
              meter('Antibodies that block the real virus', qual, true, ['none expected', 'weaker', 'moderate', 'strong'][qual]);
            root.querySelector('.cf-verdict').innerHTML = api.terms(verdict);
          };
          const api = window.CF.API; draw();
        }},

      {type: 'figure', title: 'Inside a lipid nanoparticle', intro: 'Four fats, each with a job, wrapped around a few strands of mRNA. The particle is far smaller than a cell. Hover or tap each ingredient.',
        svg: figLNP,
        hotspots: {
          ionizable: {title: 'Ionizable lipid: ALC-0315', text: 'The key ingredient, licensed from Acuitas. Positively charged in the acidic mixing buffer, so it grips the negatively charged RNA; neutral in the blood, which reduces toxicity; positive again in the acidic [[endosome]], which helps the RNA break out into the cell.'},
          mrna: {title: 'mRNA', text: 'The payload. Unlike the short [[siRNA]] strands these particles were first optimized for, mRNA is thousands of letters long and folds into complex shapes, which changes how the particle behaves.'},
          chol: {title: 'Cholesterol', text: 'The same molecule found in your cell membranes. It fills gaps between the other lipids and makes the particle more stable.'},
          dspc: {title: 'Helper phospholipid: DSPC', text: 'A standard membrane [[phospholipid]] that gives the particle structure. Moderna\'s vaccine uses the same one.'},
          peg: {title: 'PEG-lipid: ALC-0159', text: 'A lipid with a polyethylene glycol chain. The EMA assessment explains that it controls particle size and uniformity during manufacturing and storage, and regulates how blood proteins stick to the surface. Scientists have hypothesized that antibodies to PEG could explain some rare allergic reactions.'},
        },
        caption: 'Ingredients from the EMA public assessment report (Dec 2020). Positions are schematic; real particles are dense and roughly spherical.'},

      {type: 'figure', title: 'Why the spike needed a clamp', intro: 'The spike is spring-loaded. The best antibodies recognize its compact prefusion shape. Hover or tap the parts.',
        svg: figSpike,
        hotspots: {
          prefusion: {title: 'Prefusion spike', text: 'Three copies of the spike protein twisted together. This compact shape is what the immune system needs to learn, because it is what the virus presents before it infects.'},
          rbd: {title: 'Receptor-binding domain', text: 'The tip that grabs [[ACE2]]. Many of the most potent neutralizing antibodies bind here. BioNTech\'s other lead candidate, BNT162b1, encoded only this piece.'},
          hinge: {title: 'The 2P clamp', text: 'Two amino acids (at positions 986 and 987) swapped for proline, a rigid amino acid. The change keeps the hinge from springing open, so cells make spike in its prefusion shape. The trick came from MERS work published in 2017.'},
          abs: {title: 'Antibodies at the tip', text: 'Neutralizing antibodies stick to the exposed top of the prefusion spike and block it from binding cells.'},
          postfusion: {title: 'Postfusion spike', text: 'After triggering, the spike stretches into a long needle that harpoons the cell and pulls the membranes together. The RSV disaster of the 1960s showed that vaccines displaying a sprung, postfusion-like protein can raise antibodies that fail to protect.'},
        },
        caption: 'Schematic, based on the structural work described by McLellan and Graham (C&EN, 2020) and Pallesen et al. (PNAS, 2017).'},

      // ================= MECHANISM =================
      {type: 'mechanism', title: 'How it works: from a shot to immunity', intro: 'Step through the seven stages. Use the arrow keys, or press Play.',
        svg: mechSVG,
        steps: [
          {title: 'A shot of fat bubbles', text: 'Each 0.3 mL dose holds 30 micrograms of mRNA packed into [[lipid nanoparticle|lipid nanoparticles]]. It is injected into the upper-arm muscle, where muscle cells and passing immune cells, including [[dendritic cell|dendritic cells]], can take the particles up.', show: ['cell', 'syringe', 'lnp'], focus: ['lnp']},
          {title: 'Swallowed by a cell', text: 'Cells engulf the particles into a membrane bubble, the [[endosome]]. On its own, the mRNA would be trapped here and then digested.', show: ['cell', 'lnp', 'endosome'], move: {lnp: 'translate(34px, 136px) scale(0.8)'}, focus: ['endosome']},
          {title: 'Escape into the cell', text: 'The endosome turns acidic. That flips the [[ionizable lipid|ionizable lipids]] to a positive charge, the particle disrupts the endosome membrane, and the mRNA is released into the cell\'s interior. It never goes into the nucleus, where the DNA is.', show: ['cell', 'endosome', 'mrna'], dim: ['lnp'], move: {lnp: 'translate(34px, 136px) scale(0.8)'}, focus: ['mrna']},
          {title: 'A ribosome reads the recipe', text: '[[ribosome|Ribosomes]] latch onto the capped end and read the message three letters at a time, stringing together the [[amino acid|amino acids]] of the spike, more than a thousand of them. Because every uridine is [[N1-methylpseudouridine]], the cell\'s RNA alarms stay mostly quiet and translation keeps going.', show: ['cell', 'mrna', 'ribosome', 'newspike'], pulse: ['ribosome'], focus: ['newspike']},
          {title: 'Spike on display; the recipe is shredded', text: 'Finished spikes move to the cell surface, held in their prefusion shape by the two prolines. The cell also chops some spike into fragments and displays them for [[T cell|T cells]]. Within days the mRNA itself is broken down, like any other message.', show: ['cell', 'surface', 'fragments', 'degraded'], dim: ['ribosome'], focus: ['surface', 'fragments']},
          {title: 'The adaptive immune system learns', text: 'Over one to two weeks, [[B cell|B cells]] that fit the spike multiply and release antibodies, and T cells that recognize spike fragments expand. The second dose, 21 days after the first, boosts both. In the trial, protection was clearly visible from about 12 days after dose 1.', show: ['cell', 'surface', 'fragments', 'arrows', 'bcell', 'antibodies', 'tcell'], pulse: ['arrows'], focus: ['bcell', 'tcell']},
          {title: 'Memory, then the real thing', text: 'Antibody levels fall over the following months, but [[memory cell|memory cells]] remain. When the real virus arrives, antibodies block the spike and memory cells respond fast. Protection against any infection faded with time and new [[variant|variants]]; protection against severe disease held up better, which is why [[booster|boosters]] followed.', show: ['memory', 'virus'], dim: ['cell', 'bcell', 'tcell', 'antibodies'], focus: ['virus', 'memory']},
        ]},

      {type: 'callout', variant: 'misconception', heading: '"mRNA vaccines change your DNA"', html: `<p>They can't. DNA lives inside the nucleus; the vaccine's mRNA works outside it, in the cell's cytoplasm, and there is no machinery in the process that writes RNA back into DNA. The Nobel committee's scientific background notes this as one of mRNA's safety advantages over DNA-based approaches: the delivered nucleic acid cannot integrate into the genome. The message is also short-lived: cells break it down within days, as they do their own mRNA. What lasts is the immune memory, not the molecule.</p>`},

      // ================= BIONTECH & LIGHTSPEED =================
      {type: 'story', kicker: 'The company', title: 'Mainz, January 2020: Project Lightspeed', tocTitle: 'Project Lightspeed', html: `
<p>BioNTech was not a vaccine company, at least not an infectious-disease one. It was founded in 2008 in Mainz, Germany, by Uğur Şahin and Özlem Türeci, a married couple of physician-scientists, together with the oncologist Christoph Huber. Şahin and Türeci had worked since the 1990s on turning the immune system against cancer, and their bet was personalized cancer vaccines: sequence a patient's tumor, find the mutations unique to it, write them into mRNA, and inject the result so the immune system hunts the cancer. To do that, BioNTech had built several mRNA formats, including unmodified-uridine mRNA, nucleoside-modified mRNA and [[self-amplifying RNA]], along with its own manufacturing. It went public on Nasdaq in October 2019. Its total revenue in 2020, the year the vaccine was invented, was €482 million.</p>
<p>On January 24, 2020, Şahin read a paper in <em>The Lancet</em> describing a cluster of pneumonia cases from a new coronavirus in Wuhan. On January 27 BioNTech's leadership met and launched what they named Project Lightspeed: turn the cancer platform on the virus, immediately. By early February its scientists had designed 20 vaccine candidates.</p>
<p>BioNTech also had a big-pharma partner already in the building. In 2018 BioNTech had signed a deal with Pfizer to develop an mRNA flu vaccine. On March 17, 2020, the two companies announced they would co-develop a COVID-19 vaccine; on April 9 they set the terms. BioNTech received $185 million up front, including an equity investment of about $113 million, plus up to $563 million in [[milestone payment|milestones]]. The partners would split development costs equally and share the gross profit from sales 50:50, with Pfizer commercializing in most of the world. (Fosun Pharma held the rights in China.)</p>
<p>Instead of choosing one candidate on paper, they tested four in people at once. Dosing began in Germany on April 23, 2020, and in the United States on May 5, at NYU Grossman School of Medicine and the University of Maryland School of Medicine. It was a single continuous study that escalated doses in younger adults first, then in adults aged 65 to 85.</p>`},

      {type: 'table', title: 'The four candidates that reached people', intro: 'BioNTech varied two things at once: the mRNA format, and how much of the spike to encode.',
        columns: ['Candidate', 'mRNA format', 'What it encodes', 'Schedule', 'Fate'],
        rows: [
          ['BNT162a1', 'Unmodified-uridine mRNA', '[[receptor-binding domain]] only', 'Prime and boost', 'Not advanced to phase 3'],
          ['BNT162b1', 'Nucleoside-modified mRNA', 'Receptor-binding domain, secreted as a trimer', 'Prime and boost', 'First with published human data; not chosen'],
          ['<b>BNT162b2</b>', '<b>Nucleoside-modified mRNA</b>', '<b>Full-length spike with the 2P change</b>', '<b>Two doses, 21 days apart</b>', '<b>Chosen July 27, 2020; became Comirnaty</b>'],
          ['BNT162c2', '[[self-amplifying RNA]]', 'Full-length spike with 2P', 'Single injection', 'Not advanced to phase 3'],
        ],
        caption: 'Source: BioNTech 2020 annual report (Form 20-F); Pfizer-BioNTech releases of April 29 and July 27, 2020.'},

      {type: 'decision', title: 'Which candidate goes into phase 3?', role: 'You run the joint Pfizer-BioNTech program, July 2020',
        scenario: `Your phase 3 trial of about 30,000 people (it would grow to 44,000) must start this month to have any chance of results before winter. You can only afford to put one candidate in it. <b>BNT162b1</b>, which encodes just the spike's tip, was the first to produce published human data and it raises strong neutralizing antibodies. <b>BNT162b2</b>, the full-length stabilized spike, started a little later. The latest numbers show both raise similar antibody levels. In adults aged 65 to 85, b1 caused noticeably more fever and chills after the second dose; b2 was milder. Older adults are the people most likely to die of COVID-19.`,
        options: [
          {label: 'Go with b1. It has the longer track record and the published data; switching now looks like second-guessing yourself.', outcome: 'A defensible choice on the evidence of June. But you would be asking the people at highest risk, older adults, to accept more side effects for no gain in antibodies. In a mass campaign, heavier [[reactogenicity]] also means more people skip their second dose, and a harder sell for the trial\'s volunteers, who might guess which arm they are in from how they feel.'},
          {label: 'Go with b2. Similar antibodies, milder in older adults, and it shows the immune system the whole spike rather than one piece.', outcome: 'This is what the partners did. Tolerability in the elderly was the tiebreaker, and the full spike offers the immune system more targets (in principle making it harder for a few mutations in the tip to escape). The cost was betting the program on the candidate with less data.'},
          {label: 'Put both into phase 3 and let the data decide.', outcome: 'It feels scientifically safe, but it splits the cases between arms. An [[event-driven trial]] needs a fixed number of cases per comparison, so testing two candidates against placebo would need far more participants or far more time, and manufacturing would have to scale two products at once. In a pandemic, time was the scarcest input.'},
        ],
        reality: 'On July 27, 2020, Pfizer and BioNTech announced that BNT162b2, at 30 micrograms in two doses, would advance into the pivotal phase 2/3 study, which started that day. The published phase 1 comparison (Walsh et al., NEJM, October 2020) cited b2\'s "milder systemic reactogenicity profile, … particularly in older adults" with similar neutralizing antibody levels.'},

      // ================= TIMELINE =================
      {type: 'timeline', title: 'Timeline: thirty years, then eleven months', intro: 'Filter by type. Notice how much of the science happened long before anyone had heard of SARS-CoV-2.',
        events: [
          {year: 1990, title: 'Injected mRNA makes protein in mouse muscle', kind: 'science', text: 'Philip Felgner and colleagues show the concept can work in a living animal.'},
          {year: 1995, title: 'Karikó demoted at Penn', kind: 'setback', text: 'After repeated grant rejections, she is offered a choice between leaving and a demotion with a pay cut. She stays.'},
          {year: 2005, title: 'Modified nucleosides silence the alarm', kind: 'science', text: 'Karikó, Weissman and colleagues publish in <em>Immunity</em>: replacing uridine with pseudouridine stops dendritic cells treating mRNA as a threat.'},
          {year: 2008, title: 'BioNTech founded in Mainz', kind: 'business', text: 'Uğur Şahin, Özlem Türeci and Christoph Huber set out to build personalized mRNA cancer vaccines. The same year, Karikó\'s team shows pseudouridine mRNA also makes more protein.'},
          {year: 2009, title: 'Acuitas Therapeutics founded', kind: 'business', text: 'Thomas Madden, Pieter Cullis and Michael Hope start the lipid company whose ALC-0315 ends up in Comirnaty.'},
          {year: 2013, title: 'A vaccine protein locked in shape', kind: 'science', text: 'McLellan and Graham publish a prefusion-stabilized RSV protein. The lesson: shape matters as much as sequence.'},
          {year: 2017, title: 'The 2P clamp works on MERS', kind: 'science', text: 'Pallesen, McLellan, Ward, Graham and colleagues stabilize the MERS spike with two prolines (PNAS).'},
          {year: 2018, title: 'First lipid nanoparticle drug approved; Pfizer and BioNTech team up on flu', kind: 'business', text: 'Alnylam\'s Onpattro proves LNPs can be licensed medicines. Separately, Pfizer and BioNTech agree to develop an mRNA influenza vaccine.'},
          {year: 2020.027, date: 'Jan 10, 2020', title: 'SARS-CoV-2 sequence posted online', kind: 'science', text: 'Chinese scientists upload the genome to GenBank. At the NIH, Barney Graham starts work on it that Saturday.'},
          {year: 2020.073, date: 'Jan 27, 2020', title: 'Project Lightspeed launched', kind: 'people', text: 'Three days after Şahin reads a Lancet paper on the Wuhan cluster, BioNTech commits the company to a COVID-19 vaccine. Twenty candidates are designed by early February.'},
          {year: 2020.212, date: 'Mar 17, 2020', title: 'Pfizer and BioNTech join forces', kind: 'business', text: 'Terms follow on April 9: $185M up front, up to $563M in milestones, costs and gross profit split 50:50.'},
          {year: 2020.312, date: 'Apr 23, 2020', title: 'First people dosed, in Germany', kind: 'clinical', text: 'US dosing follows on May 5. Four candidates are tested side by side.'},
          {year: 2020.559, date: 'Jul 22, 2020', title: 'US agrees to buy 100 million doses for $1.95 billion', kind: 'business', text: 'Payment only on delivery after FDA authorization. Pfizer takes no government money for development.'},
          {year: 2020.573, date: 'Jul 27, 2020', title: 'BNT162b2 chosen; phase 2/3 begins', kind: 'clinical', text: 'The trial grows to about 44,000 people at 152 sites in six countries.'},
          {year: 2020.858, date: 'Nov 9, 2020', title: '"More than 90% effective" at the first look', kind: 'clinical', text: 'The independent monitoring committee finds the split of the first 94 cases overwhelming.'},
          {year: 2020.882, date: 'Nov 18, 2020', title: 'Final analysis: 95%; supply forecast halved', kind: 'setback', text: '162 placebo cases vs 8 vaccine cases. The same release cuts the 2020 production forecast from up to 100 million doses (July) to up to 50 million.'},
          {year: 2020.922, date: 'Dec 2, 2020', title: 'UK authorizes first', kind: 'regulatory', text: 'The MHRA grants temporary authorization under Regulation 174. Margaret Keenan is vaccinated on December 8.'},
          {year: 2020.946, date: 'Dec 11, 2020', title: 'FDA emergency use authorization', kind: 'regulatory', text: 'The day after its advisory committee votes 17 to 4, with one abstention, that benefits outweigh risks for people 16 and older. The EU follows on December 21.'},
          {year: 2021.151, date: 'Feb 25, 2021', title: 'FDA relaxes the ultra-cold rule', kind: 'regulatory', text: 'Frozen vials may be kept for up to two weeks at ordinary pharmaceutical-freezer temperatures.'},
          {year: 2021.645, date: 'Aug 23, 2021', title: 'Full approval as Comirnaty', kind: 'regulatory', text: 'The first COVID-19 vaccine to receive a full US license, for ages 16 and up, with required studies of myocarditis risk.'},
          {year: 2021.99, date: '2021', title: 'More than 3 billion doses made', kind: 'business', text: 'Pfizer reports $36.8 billion of Comirnaty revenue for the year; BioNTech\'s net profit is €10.3 billion.'},
          {year: 2022.624, date: 'Aug 2022', title: 'Moderna sues Pfizer and BioNTech', kind: 'setback', text: 'Patent suits follow in the US, Germany, the UK, the Netherlands, Ireland and Belgium.'},
          {year: 2023.755, date: 'Oct 2, 2023', title: 'Nobel Prize for Karikó and Weissman', kind: 'people', text: 'Eighteen years after the 2005 paper that top journals had turned down.'},
          {year: 2023.99, date: '2023', title: 'Demand collapses', kind: 'setback', text: 'Pfizer\'s Comirnaty revenue falls 70% to $11.2 billion. By 2025 it is $4.4 billion.'},
          {year: 2025.957, date: 'Dec 2025', title: 'BioNTech buys CureVac', kind: 'business', text: 'Ending one patent war by acquiring the opponent. Settlements with the NIH ($791.5M, Dec 2024) and Penn (up to $467M, Mar 2025) resolve royalty disputes.'},
        ]},

      {type: 'custom', title: 'How eleven months compares with a decade', intro: 'The average vaccine takes about 10.7 years from the start of preclinical work to market, with each stage waiting for the last. Comirnaty ran stages on top of each other. Switch views.',
        html: `<div class="card"><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px"><button class="btn primary" data-v="years">Same scale (years)</button><button class="btn" data-v="months">Zoom into 2020 (months)</button></div><div class="cf-gantt"></div><div class="caption cf-gnote"></div></div>`,
        init(root) {
          const typical = [['Preclinical research', 0, 2.5, 3], ['Phase 1', 2.5, 4, 1], ['Phase 2', 4, 6, 1], ['Phase 3', 6, 8.9, 1], ['Manufacturing scale-up', 7.5, 10.7, 6], ['Regulatory review', 8.9, 10.7, 7]];
          const m = (mo, d) => (mo - 1) + (d - 1) / 30.4;
          const comir = [['Design and preclinical', m(1, 27), m(4, 23), 3], ['Phase 1/2 (four candidates)', m(4, 23), m(7, 27), 1], ['Phase 2/3 to final analysis', m(7, 27), m(11, 18), 1], ['Manufacturing at risk', m(4, 9), 12, 6], ['FDA emergency review', m(11, 20), m(12, 11), 7]];
          const marks = [['Sequence posted', m(1, 10)], ['UK authorizes', m(12, 2)], ['US EUA', m(12, 11)]];
          const draw = v => {
            root.querySelectorAll('[data-v]').forEach(b => b.className = b.dataset.v === v ? 'btn primary' : 'btn');
            const W = 860, L = 210, R = 20, rowH = 30;
            let rows, xMax, ticks, fmt;
            if (v === 'years') { rows = [['h', 'Typical vaccine (schematic)'], ...typical.map(r => ['r', ...r]), ['h', 'Comirnaty, 2020'], ...comir.map(r => ['r', r[0], r[1] / 12, r[2] / 12, r[3]])]; xMax = 11; ticks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; fmt = t => t + ' y'; }
            else { rows = [['h', 'Comirnaty, 2020'], ...comir.map(r => ['r', ...r])]; xMax = 12; ticks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; fmt = t => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''][t]; }
            const H = rows.length * rowH + 60, X = x => L + (W - L - R) * x / xMax;
            let s = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block">`;
            ticks.forEach(t => s += `<line x1="${X(t)}" x2="${X(t)}" y1="10" y2="${H - 36}" class="il-line" style="opacity:.25"/><text x="${v === 'months' ? X(t) + (W - L - R) / 24 : X(t)}" y="${H - 16}" text-anchor="middle" class="il-text-2">${fmt(t)}</text>`);
            rows.forEach((r, i) => {
              const y = 14 + i * rowH;
              if (r[0] === 'h') { s += `<text x="8" y="${y + 18}" class="il-title">${r[1]}</text>`; return; }
              s += `<text x="20" y="${y + 18}" class="il-text">${r[1]}</text><rect x="${X(r[2])}" y="${y + 5}" width="${Math.max(3, X(r[3]) - X(r[2]))}" height="18" rx="5" class="il-${r[4]}"/>`;
            });
            if (v === 'months') marks.forEach(([t, x], k) => s += `<line x1="${X(x)}" x2="${X(x)}" y1="10" y2="${H - 36}" class="st-7 il-dash" stroke-width="1.5"/><text x="${X(x) + (k === 0 ? 4 : -4)}" y="${H - 44 - k * 14}" text-anchor="${k === 0 ? 'start' : 'end'}" class="il-text-2">${t}</text>`);
            root.querySelector('.cf-gantt').innerHTML = s + '</svg>';
            root.querySelector('.cf-gnote').innerHTML = v === 'years' ? 'Typical row: the 10.7-year average from Pronker et al. (PLoS One, 2013), split into phases for illustration only; real programs vary widely, and only about 6% of vaccine candidates entering preclinical work reach the market. Comirnaty dates from company releases.' : 'Dates from Pfizer and BioNTech releases and the FDA. Manufacturing "at risk" began in spring 2020 (the April 9 deal already covered scale-up) and continued through the end of the year. The phase 2/3 trial kept running after the final analysis to collect longer safety data.';
          };
          root.querySelectorAll('[data-v]').forEach(b => b.onclick = () => draw(b.dataset.v));
          draw('years');
        }},

      {type: 'callout', variant: 'lesson', heading: 'Speed came from overlap, not from skipping steps', html: `<p>Every normal stage happened: animal studies, a dose-finding phase 1, a large placebo-controlled phase 3, an independent safety committee, a public advisory meeting, a full regulatory review. What changed was that the stages ran in parallel instead of in series, and that money absorbed the risk that normally forces them into series. Companies usually wait for phase 2 before building a factory because a failed drug makes the factory worthless. Here they built it anyway. The phase 3 trial also finished fast because the virus was everywhere, so cases piled up quickly.</p>`},

      // ================= WARP SPEED =================
      {type: 'story', kicker: 'The money behind the speed', title: 'Operation Warp Speed, and the money Pfizer turned down', tocTitle: 'Warp Speed', html: `
<p>In 2020 the US government launched [[Operation Warp Speed]] to accelerate COVID-19 vaccines. Its funding was increased to about $18 billion by October 2020. It worked through two main tools: paying for research, development and manufacturing up front, and [[advance purchase agreement|advance purchase agreements]], which promise to buy doses if they are authorized. Moderna, for example, took federal development money.</p>
<p>Pfizer made a different choice. On July 22, 2020, Pfizer and BioNTech announced that the US government would buy 100 million doses for $1.95 billion, about $19.50 a dose, with an option for up to 500 million more. The money was payable only "upon the receipt of the first 100 million doses, following FDA authorization or approval." If the vaccine failed, Washington would pay nothing. "We made the early decision to begin clinical work and large-scale manufacturing at our own risk," the companies said. When the German government later granted BioNTech up to €375 million to expand development and manufacturing in Germany, BioNTech's announcement stated that Pfizer would "continue to independently fund its share of development costs for BNT162 without use of this or other government funding."</p>
<p>Why turn down free money? Bourla later explained that he wanted to spare his scientists the bureaucracy and reporting that come with government funding. There was arguably also a reputational logic in a politically charged US election year: it would be harder to claim the vaccine had been rushed out on a government timetable. The risk was real. A large pharmaceutical company can survive a write-off of a few billion dollars, but it is still a write-off. The partnership also stood to capture all the upside if the vaccine worked, and it did.</p>
`},

      {type: 'decision', title: 'Take the government\'s development money?', role: 'You are Pfizer\'s leadership team, mid-2020',
        scenario: `Operation Warp Speed is offering to fund development and manufacturing for promising vaccines, as it is doing for rivals. Your alternative is a purchase-only deal: the US pays about $19.50 a dose, but only after the FDA authorizes the vaccine. Taking the development money would cover a large share of the cost if the vaccine fails. It would also bring government reporting requirements, oversight of your manufacturing plans, and the perception that you are working to Washington's timetable, weeks before a bitterly contested presidential election.`,
        options: [
          {label: 'Take the development money. Hedge the downside; every other front-runner is doing it, and a failure would cost billions.', outcome: 'Financially the safer choice, and it would have been a perfectly normal one. You would owe the government regular reports, coordinate plans with its officials, and share credit. If things went well, some would argue that taxpayers deserved lower prices or a share of the profits.'},
          {label: 'Purchase agreement only. Fund development yourselves and keep control.', outcome: 'This is what Pfizer did. It kept decisions inside the partnership, avoided reporting overhead, and later let Pfizer say the vaccine was developed without federal R&D money. The price: Pfizer and BioNTech carried the development and at-risk manufacturing costs themselves until the vaccine was authorized.'},
          {label: 'No US deal at all until you have phase 3 data; negotiate then, from strength.', outcome: 'You would probably win a higher price per dose, but you would lose the demand guarantee that justifies building capacity early, and you would face a government that had spent 2020 funding your competitors. Pfizer judged the guaranteed order worth more.'},
        ],
        reality: 'Pfizer signed the $1.95 billion purchase-on-delivery agreement on July 22, 2020, and did not take Warp Speed development funding. BioNTech accepted up to €375 million from Germany\'s research ministry. Both companies began large-scale manufacturing before they had efficacy data.'},

      {type: 'callout', variant: 'product', heading: 'Bootstrapping versus taking the strategic investor\'s check', html: `<p>This is the founder's dilemma in a new setting: take money from a strategic partner and accept its governance, or fund yourself and keep control. Pfizer was the rare company rich enough to bootstrap a multibillion-dollar bet, and it treated the government like a launch customer with a signed purchase order rather than an investor.</p><p>Where the analogy breaks: the "customer" here was also the regulator's parent, the distributor and the public-health authority. A purchase agreement is still a government contract with political strings. And unlike a software launch, the product could not ship early in beta to a friendly segment: nothing could be sold until the evidence met a regulator's bar.</p>`},

      // ================= TRIAL DESIGN =================
      {type: 'story', kicker: 'The trial', title: 'Designing a trial that ends on cases, not on a date', tocTitle: 'Trial design', html: `
<p>The phase 2/3 trial, known by its protocol number C4591001, was conceptually simple. Healthy volunteers aged 16 and older were randomly assigned, one to one, to two 30-microgram shots of BNT162b2 or two shots of saltwater [[placebo]], 21 days apart. Neither the volunteers nor the staff giving the shots knew who got what (it was [[double-blind]]). Everyone reported symptoms. Anyone with symptoms that could be COVID-19 was tested with a PCR swab. The [[primary endpoint]] was confirmed, symptomatic COVID-19 starting at least seven days after the second dose.</p>
<h3>Why cases, not calendar time</h3>
<p>A vaccine trial only learns something when a participant gets sick, and most won't, vaccinated or not. Its statistical power depends on how many cases occur, not on how many people enroll. So it was an <strong>[[event-driven trial]]</strong>: it would read out when enough cases had accumulated. The protocol set the final analysis at 164 confirmed cases, with planned [[interim analysis|interim looks]] at 32, 62, 92 and 120. (After discussions with the FDA, the companies dropped the 32-case look, and by the time those talks concluded, 94 cases had accrued.)</p>
<p>That is why the trial enrolled 43,548 people and chose sites where the virus was spreading: 130 in the United States plus sites in Argentina, Brazil, South Africa, Germany and Turkey. More infections meant more cases, and an answer sooner.</p>
<h3>What "95% efficacy" means</h3>
<p><strong>[[vaccine efficacy|Vaccine efficacy]]</strong> is a [[relative risk reduction]]: one minus the ratio of the disease rate in the vaccine group to the rate in the placebo group. Because the two groups were almost the same size and were followed for almost the same total time (about 2,214 and 2,222 [[person-years]] respectively), it comes down to comparing case counts. With 8 vaccine cases and 162 placebo cases, efficacy is 1 minus 8/162, or about 95%.</p>
<p>It does <em>not</em> mean that 5% of vaccinated people get COVID-19, or that the vaccine works in 95% of people. Over that short trial window, about 0.9% of the placebo group developed confirmed COVID-19, compared with about 0.04% of the vaccine group. The [[absolute risk reduction]] in a few months was under one percentage point, simply because most people in either group were never exposed during that time. With more exposure, the absolute benefit grows; relative efficacy is the number that travels between settings.</p>
<h3>A Bayesian bar set in advance</h3>
<p>Unusually for a pivotal trial, Pfizer used a Bayesian success rule. Success meant a [[posterior probability]] above 98.6% at the final analysis (above 99.5% at an interim look) that true efficacy exceeded 30%. That 30% floor is low by design: the trial was not trying to prove 95%, only to rule out a weak vaccine with near-certainty. The interim thresholds were calibrated to keep the overall chance of a false-positive result at 2.5%. The trial could also stop for futility if success looked hopeless.</p>
<h3>What could have gone wrong</h3>
<ul>
<li><strong>Too few cases.</strong> Had summer lockdowns or a lull suppressed transmission at trial sites, the answer could have slipped into 2021.</li>
<li><strong>Unblinding by side effects.</strong> A vaccine that causes fever and sore arms can reveal itself to participants, who may then behave differently. The placebo group reported far fewer reactions.</li>
<li><strong>Enhanced disease.</strong> The RSV disaster of the 1960s was in everyone's mind. A vaccine that raised poorly matched antibodies could, in theory, make infection worse. Severe cases were watched closely; they turned out to be 9 in the placebo group and 1 in the vaccine group.</li>
<li><strong>Too little safety follow-up.</strong> Rare side effects often appear only after millions of doses. The FDA required a median of two months of follow-up after the second dose before it would consider emergency use; the companies said they reached that milestone in the third week of November.</li>
</ul>`},

      {type: 'custom', title: 'Run an event-driven trial', intro: 'Two equal groups of about 18,000 people each. Every dot is a confirmed COVID-19 case, blue if it happened in the vaccine group, orange if in the placebo group. Watch cases arrive, see when the pre-set Bayesian bar is crossed at each planned look, then guess the true efficacy.',
        html: `<div class="card">
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px"><button class="btn primary" data-m="mystery">Mystery vaccine</button><button class="btn" data-m="real">Replay the real trial</button></div>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px"><button class="btn" data-a="1">+1 case</button><button class="btn" data-a="10">+10 cases</button><button class="btn" data-a="look">Run to next planned look</button><button class="btn" data-a="reset">Start over</button></div>
<div class="cf-dots"></div>
<div class="cf-stats" style="font-size:15px;margin-top:10px;line-height:1.6"></div>
<div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--rule)"><label style="display:grid;grid-template-columns:200px 1fr 70px;gap:12px;align-items:center;font-size:15px"><span>Your guess of true efficacy</span><input type="range" min="0" max="99" value="60" class="cf-guess" style="accent-color:var(--accent)"><b class="cf-gv">60%</b></label><button class="btn primary cf-reveal" style="margin-top:10px">Reveal the true efficacy</button><div class="cf-out" style="margin-top:10px;font:400 16px/1.6 var(--serif)"></div></div>
</div>`,
        init(root, api) {
          const looks = [62, 92, 120, 164], N = 170;
          let mode = 'mystery', cases = [], trueVE = 0, seq = null;
          const rand = Math.random;
          const setup = () => {
            cases = []; root.querySelector('.cf-out').innerHTML = '';
            if (mode === 'real') { trueVE = 1 - 8 / 162; seq = Array(162).fill(0).concat(Array(8).fill(1)); for (let i = seq.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [seq[i], seq[j]] = [seq[j], seq[i]]; } }
            else { trueVE = [0.25, 0.4, 0.55, 0.7, 0.8, 0.9, 0.95][Math.floor(rand() * 7)]; seq = null; }
            root.querySelectorAll('[data-m]').forEach(b => b.className = b.dataset.m === mode ? 'btn primary' : 'btn');
            draw();
          };
          const add = k => { for (let i = 0; i < k && cases.length < N; i++) { if (seq) cases.push(seq[cases.length]); else { const th = (1 - trueVE) / (2 - trueVE); cases.push(rand() < th ? 1 : 0); } } draw(); };
          const draw = () => {
            const v = cases.filter(c => c === 1).length, p = cases.length - v, cols = 34, r = 7, gap = 19;
            let s = `<svg viewBox="0 0 ${cols * gap + 10} ${Math.ceil(N / cols) * gap + 36}" style="width:100%;height:auto;display:block">`;
            for (let i = 0; i < N; i++) { const x = 12 + (i % cols) * gap, y = 12 + Math.floor(i / cols) * gap; const c = cases[i];
              s += `<circle cx="${x}" cy="${y}" r="${r}" class="${c == null ? 'il-bg il-line' : c === 1 ? 'il-1' : 'il-2'}"/>`;
              if (looks.includes(i + 1)) s += `<path d="M${x + 9.5} ${y - 9} v18" class="st-7" stroke-width="2"/>`; }
            s += `<text x="12" y="${Math.ceil(N / cols) * gap + 26}" class="il-text-2">Red ticks mark the planned looks at 62, 92, 120 and 164 cases.</text></svg>`;
            root.querySelector('.cf-dots').innerHTML = s;
            const n = cases.length, obs = p ? 1 - v / p : null, pr = n ? prSuccess(v, p) : null;
            const passed = looks.filter(L => L <= n).map(L => { const vv = cases.slice(0, L).filter(c => c === 1).length, pp = L - vv, q = prSuccess(vv, pp), bar = L === 164 ? 0.986 : 0.995; return `${L}: ${q > bar ? '<b style="color:var(--good)">bar crossed</b>' : 'not yet'} (${(q * 100).toFixed(q > 0.999 ? 2 : 1)}%)`; });
            root.querySelector('.cf-stats').innerHTML = `Cases so far: <b>${n}</b> &nbsp;·&nbsp; <span style="color:var(--il-1)">●</span> vaccine <b>${v}</b> &nbsp;·&nbsp; <span style="color:var(--il-2)">●</span> placebo <b>${p}</b> &nbsp;·&nbsp; observed efficacy <b>${obs == null ? '–' : (Math.max(-1, obs) * 100).toFixed(0) + '%'}</b><br>Probability true efficacy exceeds 30%: <b>${pr == null ? '–' : (pr * 100).toFixed(pr > 0.999 ? 2 : 1) + '%'}</b> ${passed.length ? '<br>Planned looks: ' + passed.join(' &nbsp;·&nbsp; ') : ''}`;
          };
          root.querySelectorAll('[data-m]').forEach(b => b.onclick = () => { mode = b.dataset.m; setup(); });
          root.querySelectorAll('[data-a]').forEach(b => b.onclick = () => { const a = b.dataset.a; if (a === 'reset') setup(); else if (a === 'look') { const nx = looks.find(L => L > cases.length) || N; add(nx - cases.length); } else add(+a); });
          const g = root.querySelector('.cf-guess'); g.oninput = () => root.querySelector('.cf-gv').textContent = g.value + '%';
          root.querySelector('.cf-reveal').onclick = () => {
            const tv = Math.round(trueVE * 100), diff = Math.abs(tv - +g.value);
            root.querySelector('.cf-out').innerHTML = `True efficacy: <b>${tv}%</b>. You were ${diff <= 5 ? 'within 5 points. ' : diff + ' points off. '}${cases.length < 60 ? 'With so few cases, a wide range of true values fits the data; that is why the protocol waited for at least 62 cases before its first formal look. ' : ''}${mode === 'real' ? 'In the real trial the split at 170 cases was 8 to 162, and the 95% credible interval for efficacy ran from 90.3% to 97.6%.' : 'Try the real trial, or a few more mystery vaccines: notice how a 40% vaccine can take all 164 cases to clear a 30% bar, while a 90% vaccine clears it at the first look.'}`;
          };
          setup();
        }},

      {type: 'trial', title: 'The pivotal trial: C4591001', intro: 'The design, as published in the New England Journal of Medicine on December 10, 2020. Make your prediction before you look at the results.',
        design: {name: 'C4591001 (phase 2/3 portion)', phase: 'Phase 2/3', blinding: 'Observer-blind, placebo-controlled', years: 'Jul 2020 onward (final efficacy analysis Nov 2020)', n: 43548,
          population: 'People aged 16 and older, healthy or with stable chronic conditions, at 152 sites in six countries', randomization: '1:1',
          arms: [{name: 'BNT162b2', n: 21720, desc: 'Two 30 µg injections, 21 days apart'}, {name: 'Placebo', n: 21728, desc: 'Two saline injections, 21 days apart', control: true}],
          endpoint: 'Confirmed symptomatic COVID-19 from 7 days after dose 2',
          details: {
            'Numbers': '43,548 randomized; 43,448 received injections (arm sizes shown). Efficacy analyzed in 36,523 people without prior infection: 18,198 vaccine, 18,325 placebo.',
            'Primary endpoint': 'PCR-confirmed, symptomatic COVID-19 with onset at least 7 days after the second dose, in people without evidence of prior infection.',
            'Success rule': '[[posterior probability]] above 98.6% (final) that true efficacy exceeds 30%; interim looks planned at 62, 92 and 120 cases.',
            'Safety': 'Reactions recorded in e-diaries for a subset; all serious [[adverse event|adverse events]] tracked; independent [[data monitoring committee]].',
            'Population mix': '42% of participants were over 55; about 42% of global participants had racially and ethnically diverse backgrounds.'}},
        predict: {q: 'Out of 170 confirmed cases, how do you think they split between the vaccine and placebo groups?', options: ['About 60 vaccine, 110 placebo (roughly 45% efficacy, a flu-shot-like result)', 'About 30 vaccine, 140 placebo (roughly 80% efficacy)', 'About 8 vaccine, 162 placebo (roughly 95% efficacy)', 'No meaningful difference; mRNA had never worked before'], answer: 2,
          explain: 'The split was 8 to 162, far better than the 30% floor the trial needed to clear. Efficacy was similar across age, sex, race and ethnicity, and over 94% in people over 65. Between the two doses, efficacy was already about 52%.'},
        results: [
          {kind: 'bar', title: 'Confirmed COVID-19 cases from 7 days after dose 2', subtitle: 'People without evidence of prior infection. Vaccine efficacy 95.0% (95% credible interval 90.3% to 97.6%).', unit: '', categories: ['BNT162b2 (18,198 people)', 'Placebo (18,325 people)'], series: [{name: 'Cases', values: [8, 162]}], colorByCategory: true, note: 'Polack et al., NEJM 2020.'},
          {kind: 'bar', title: 'Severe COVID-19 cases after the first dose', unit: '', categories: ['BNT162b2', 'Placebo'], series: [{name: 'Severe cases', values: [1, 9]}], colorByCategory: true, note: 'Too few severe cases for a precise estimate, but the direction matched. Polack et al., NEJM 2020; Pfizer-BioNTech release, Nov 18, 2020.'},
        ],
        takeaway: 'The trial answered its question within four months of starting, because it was powered on cases and ran where the virus was spreading. Safety looked like other vaccines: sore arms, fatigue, headache and fever, worse after the second dose and in younger people; swollen lymph nodes in 64 vaccinated people versus 6 on placebo; no serious safety concern flagged in two months of follow-up. What the trial could not see were rarer effects, which needed millions of doses to appear.'},

      {type: 'explorer', title: 'Do the efficacy math yourself', intro: 'Efficacy compares rates in two equal groups. How many people you must vaccinate to prevent one case depends on how much virus is around. Move the sliders.',
        inputs: [
          {id: 'v', label: 'Cases in the vaccine group', min: 0, max: 120, value: 8},
          {id: 'p', label: 'Cases in the placebo group', min: 1, max: 300, value: 162},
          {id: 'ar', label: '[[attack rate|Attack rate]] if unvaccinated, per season', min: 1, max: 200, value: 50, fmt: v => (v / 10).toFixed(1) + '%'},
        ],
        compute: v => {
          const ve = 1 - v.v / v.p, ar = v.ar / 1000, nnv = ve > 0 ? 1 / (ar * ve) : null;
          const bar = (w, c) => `<span style="display:inline-block;height:12px;width:${Math.max(1, w)}%;background:${c};border-radius:6px;vertical-align:middle"></span>`;
          return `<div style="display:grid;grid-template-columns:130px 1fr;gap:6px 12px;align-items:center;font:400 15px var(--sans)"><span>Vaccine: ${v.v}</span><span>${bar(100 * v.v / Math.max(v.v, v.p), 'var(--il-1)')}</span><span>Placebo: ${v.p}</span><span>${bar(100 * v.p / Math.max(v.v, v.p), 'var(--il-2)')}</span></div>
<p style="margin:12px 0 4px">Efficacy = 1 − ${v.v}/${v.p} = <b>${(ve * 100).toFixed(1)}%</b>${ve < 0 ? ' (negative: more cases on vaccine)' : ''}.</p>
<p style="margin:4px 0">If ${(ar * 100).toFixed(1)}% of unvaccinated people would catch it this season, vaccinating 1,000 people prevents about <b>${ve > 0 ? (1000 * ar * ve).toFixed(1) : 0}</b> cases, so the [[number needed to vaccinate]] is about <b>${nnv ? Math.round(nnv).toLocaleString('en-US') : 'n/a'}</b>.</p>
<p style="margin:4px 0;color:var(--ink-3);font-size:15px">Assumes equal group sizes and follow-up, as in the trial (where they were within 1%). The trial's placebo group had about 0.9% confirmed cases over its short follow-up; a heavy pandemic season can mean far more.</p>`;
        }},

      {type: 'callout', variant: 'numbers', heading: 'The phase 3 trial by the numbers', html: `<p><b>43,548</b> people randomized, about as many as a sold-out baseball stadium. <b>152</b> sites in <b>6</b> countries. <b>170</b> confirmed cases in the primary analysis: <b>162</b> on placebo, <b>8</b> on vaccine. <b>95.0%</b> efficacy, credible interval <b>90.3–97.6%</b>. <b>10</b> severe cases after dose 1: <b>9</b> placebo, <b>1</b> vaccine. <b>105 days</b> from the first phase 3 injection (July 27) to the first-look announcement (November 9). About <b>0.9%</b> of the placebo group had confirmed COVID-19 during the analysis window, versus about <b>0.04%</b> of the vaccine group.</p>`},

      // ================= REGULATORS =================
      {type: 'story', kicker: 'The regulators', title: 'Three regulators, three legal routes, one month', tocTitle: 'Regulators', html: `
<p>Once the data existed, the companies filed nearly everywhere at once. They had been sending data to several agencies on a [[rolling review|rolling]] basis for weeks, and on November 20, 2020, they formally asked the FDA for an [[emergency use authorization]].</p>
<p><strong>The UK went first.</strong> On December 2, 2020, the [[MHRA]] authorized temporary supply under [[Regulation 174]], a provision for unlicensed medicines in a public-health emergency. It was the first authorization in the world following a phase 3 trial. The UK had ordered 40 million doses. Six days later, Margaret Keenan got hers.</p>
<p><strong>The US did it in public.</strong> On December 10, the FDA's vaccine advisory committee, [[VRBPAC]], spent a day reviewing the data in a public meeting. The question was whether, based on the evidence, the benefits outweighed the risks for people aged 16 and older. The vote was 17 in favor, 4 against, with 1 abstention. The FDA issued the emergency use authorization the next day, December 11. US vaccinations began on December 14; the first person vaccinated in the United States was Sandra Lindsay, in New York.</p>
<p>An emergency use authorization is not an approval. It lets the FDA allow an unapproved product during a declared emergency when the known and potential benefits outweigh the known and potential risks, on a lower evidence bar than a full license. In practice the biggest difference was the shorter safety follow-up behind it: a median of two months after the second dose.</p>
<p><strong>The EU chose a real license, with conditions.</strong> The European Medicines Agency recommended a [[conditional marketing authorization]] on December 21, 2020, after inspections of the manufacturing sites.</p>
<p><strong>Full approval came eight months later.</strong> The companies began a [[BLA|Biologics License Application]] in May 2021 and asked for [[priority review]]. On August 23, 2021, the FDA approved the vaccine, now branded Comirnaty, for people aged 16 and older. The FDA reviewed data on about 20,000 vaccine and 20,000 placebo recipients, with 91% efficacy over up to six months of follow-up, and about 12,000 vaccinated participants followed for at least six months. The approval came with a list of required post-marketing studies of [[myocarditis]] and [[pericarditis]]. Adolescents aged 12 to 15 had already been added under the emergency authorization on May 10, 2021, after a trial of 2,260 teenagers with 18 cases on placebo and none on vaccine.</p>`},

      {type: 'table', title: 'The approval paths compared', columns: ['Regulator', 'Route', 'Date', 'What it meant'],
        rows: [
          ['UK [[MHRA]]', 'Temporary authorization of supply ([[Regulation 174]])', 'Dec 2, 2020', 'First authorization anywhere after a phase 3 trial. An emergency permission, not a license.'],
          ['US [[FDA]]', '[[emergency use authorization]], ages 16+', 'Dec 11, 2020', 'Followed a public [[advisory committee]] vote (17–4–1). Lower bar than approval; could be revoked when the emergency ended.'],
          ['EU [[EMA]]', '[[conditional marketing authorization]]', 'Dec 21, 2020', 'A real license on less complete data, renewed yearly, with obligations to supply more manufacturing and clinical data.'],
          ['US FDA', 'EUA extended to ages 12–15', 'May 10, 2021', 'Based on 18 placebo cases vs 0 vaccine cases among 2,260 adolescents.'],
          ['US FDA', 'Full approval ([[BLA]]) as Comirnaty, ages 16+', 'Aug 23, 2021', 'Six-month data, full manufacturing review, and required myocarditis studies on the [[label]].'],
        ],
        caption: 'Sources: Pfizer-BioNTech releases; FDA announcements and approval letter; EMA assessment report EMA/707383/2020.'},

      // ================= MANUFACTURING =================
      {type: 'story', kicker: 'Building it', title: 'From a test tube to three billion doses', tocTitle: 'Manufacturing', html: `
<p>Making mRNA is simple chemistry. Making billions of identical doses in months, on a process never run at scale, was the hardest engineering problem in the case.</p>
<p>The EMA's assessment lays out the steps. First, a DNA template: bacteria (<em>E. coli</em>) are grown with a [[plasmid]], a small ring of DNA carrying the spike gene; the DNA is extracted and cut into a linear strand. Next, [[in vitro transcription]]: in a reactor, an enzyme reads the template and strings together RNA letters, including [[N1-methylpseudouridine]] in place of every U, and the molecule is capped. Then purification: the DNA template is digested away, and the enzymes and stray [[dsRNA]] fragments are removed. That is the "drug substance". It was made at Pfizer's plant in Andover, Massachusetts, and at BioNTech in Mainz, Germany, with a partner site.</p>
<p>The second half turns naked mRNA into a vaccine. The mRNA, in an acidic buffer, meets the four lipids dissolved in ethanol; the streams mix rapidly and [[lipid nanoparticle|nanoparticles]] form. The product then goes through buffer exchange, concentration, filtration, the addition of sucrose to protect it during freezing, sterile filtration, aseptic filling into glass vials, inspection, labeling and freezing. Finished vials were released from Pfizer's plant in Puurs, Belgium, and from Mainz, with Kalamazoo, Michigan, as a major US site.</p>
<h3>The problems regulators saw</h3>
<p>Scaling changed the product in small ways that mattered. The clinical trial batches had been made with a DNA template produced by PCR ("Process 1"); commercial batches used plasmid DNA ("Process 2"). Early Process 2 batches contained a lower share of full-length, intact mRNA, with more fragments that had a cap but no tail. The companies traced it to the reaction running short of two of the RNA building blocks and increased them, bringing integrity back toward trial levels; the EMA asked for more characterization and tighter specifications. Some finished batches had lipid-related impurities traced to batches of ALC-0315. This is what regulators mean by [[CMC]], chemistry, manufacturing and controls, and it is why "we have a working molecule" is not the same as "we have a product".</p>
<p>Raw materials were the other constraint. Specialty lipids had never been needed in these quantities; <em>C&amp;EN</em> reported in 2021 that producing them was a limiting factor. In its November 18, 2020 announcement, the partnership cut its 2020 forecast to up to 50 million doses, from up to 100 million in July. It then scaled fast: BioNTech took over the Marburg plant, with about 300 staff, and repurposed it for mRNA. In 2021 Pfizer said the partnership had manufactured more than 3 billion doses. BioNTech reported 2.6 billion delivered to more than 165 countries and regions, including more than a billion to low- and middle-income countries.</p>`},

      {type: 'figure', title: 'The production line', intro: 'Six stages, from bacteria to a frozen vial. Hover or tap a stage.',
        svg: figMfg,
        hotspots: {
          dna: {title: 'DNA template', text: 'Bacteria carrying a [[plasmid]] with the spike gene are grown in fermenters; the DNA is purified and cut into a linear template. It is not in the final product, but it defines the mRNA\'s sequence, so regulators asked for more detail on how it is made and controlled.'},
          ivt: {title: 'In vitro transcription', text: 'An RNA-copying enzyme reads the template in a cell-free reactor, using nucleotides including N1-methylpseudouridine. Getting the ratio of building blocks right determined how much full-length mRNA came out.'},
          purify: {title: 'Purification', text: 'DNase digests the template; purification removes enzymes and [[dsRNA]], which triggers innate immune alarms. Every batch is tested for identity, integrity, cap, poly(A) tail, residual DNA and dsRNA.'},
          lnp: {title: 'LNP formation', text: 'mRNA in acidic buffer meets lipids in ethanol; rapid mixing makes the particles self-assemble. Particle size and uniformity have to be the same batch after batch.'},
          fill: {title: 'Fill, finish and freeze', text: 'Buffer exchange, concentration, sucrose as a cryoprotectant, sterile filtration and aseptic filling into 2 mL vials, each with five doses after dilution. A pack held 195 vials. Then freezing.'},
          ship: {title: 'Ship cold', text: 'Pfizer designed dry-ice [[thermal shipper|thermal shippers]] that held about -70°C, each with a GPS-enabled temperature sensor.'},
        },
        caption: 'Process steps from the EMA public assessment report (Dec 2020). Icons are schematic.'},

      {type: 'decision', title: 'Build the factory before you know it works?', role: 'You are the manufacturing leads at Pfizer and BioNTech, spring 2020',
        scenario: `Phase 1 has barely started. You don't yet know which of four candidates will be chosen, or whether any will work. Normally you would wait for phase 2 results before committing to commercial-scale equipment, lipid supply contracts and hundreds of staff. If you wait, the earliest you could have large volumes is well into 2021. If you build now and the vaccine fails, or the wrong candidate is chosen, much of the spend could be lost.`,
        options: [
          {label: 'Wait for phase 2 data. Discipline is what keeps pharma solvent; most candidates fail.', outcome: 'This is the normal practice and usually the right one, since most candidates entering human trials never reach the market. Here it would have meant a vaccine that worked in November with nothing to ship until months later, during the deadliest winter of the pandemic.'},
          {label: 'Build now, at risk, for all the steps that are common to every candidate.', outcome: 'This is what the partners did. The mRNA platform made it less crazy than it sounds: the lipids, the transcription reactors and the fill lines were the same whichever candidate won, so only the DNA template really depended on the choice. The companies said they began large-scale manufacturing at their own risk, and they had doses ready to ship within hours of authorization.'},
          {label: 'Build a small pilot line now and license the big factories to contract manufacturers later.', outcome: 'It limits your exposure, but outsourcing a brand-new process under time pressure brings its own risks: technology transfer takes months, and regulators scrutinize every change of site. The partners did add external suppliers and fill-finish partners later, once the process was stable.'},
        ],
        reality: 'Pfizer and BioNTech committed to manufacturing at scale in spring 2020, before phase 2/3 began. Even so, supply was the binding constraint through early 2021, and the 2020 forecast was halved in November. The at-risk bet worked because the platform made most of the factory candidate-agnostic.'},

      {type: 'story', kicker: 'The last mile', title: 'The -70°C problem', tocTitle: 'Cold chain', html: `
<p>Comirnaty launched with unusually demanding storage rules. The frozen vials had to be stored between -80°C and -60°C, far colder than the freezers most pharmacies and clinics own. Once thawed, a vial could sit in a normal refrigerator for five days. Once diluted with saline for injection, its five doses had to be used within six hours.</p>
<p>Why so cold? mRNA and the lipid particles slowly degrade: the long RNA chain breaks, and the particles change. At launch, the companies had stability data mainly for ultra-cold storage, and a regulator only allows the storage conditions that data support. The label is a statement about evidence, not necessarily about what the molecule can tolerate.</p>
<p>Pfizer's answer was the suitcase-sized [[thermal shipper]]: an insulated box packed with dry ice that held -70°C, plus or minus 10 degrees, for up to 10 days unopened. A vaccination site could use it as a temporary freezer for up to 30 days if it was re-iced every five days, and each box carried a GPS temperature tracker. As more stability data came in, the rules relaxed. In February 2021 the FDA allowed frozen vials to be kept for up to two weeks in an ordinary pharmaceutical freezer, and that spring the companies submitted data to extend refrigerated storage to four weeks.</p>
<p>Try running a small clinic with the original December 2020 rules below.</p>`},

      {type: 'custom', title: 'Run a clinic on the December 2020 rules', intro: 'One tray arrives in a dry-ice shipper: 195 vials, 975 doses. Set how long it spends in transit, how many people come each day, and whether your staff re-ice the box. The simulator plays out 40 days.',
        html: `<div class="explorer" style="padding:18px 20px">
<label><span>Days in transit (box unopened)</span><input type="range" min="1" max="12" value="3" data-k="transit"><span class="out" data-o="transit"></span></label>
<label><span>People vaccinated per day</span><input type="range" min="10" max="200" step="1" value="42" data-k="demand"><span class="out" data-o="demand"></span></label>
<div style="display:flex;flex-wrap:wrap;gap:16px;margin:10px 0;font-size:15px"><label style="display:flex;gap:8px;align-items:center;margin:0"><input type="checkbox" data-k="reice"> Re-ice the shipper every 5 days</label><label style="display:flex;gap:8px;align-items:center;margin:0"><input type="checkbox" data-k="freezer"> Apply the Feb 2021 rule (2 weeks in an ordinary freezer)</label></div>
<div class="cf-cc"></div><div class="cf-ccout result"></div></div>`,
        init(root) {
          const get = () => { const o = {}; root.querySelectorAll('[data-k]').forEach(i => o[i.dataset.k] = i.type === 'checkbox' ? i.checked : +i.value); return o; };
          const run = () => {
            const o = get();
            root.querySelector('[data-o=transit]').textContent = o.transit + ' d'; root.querySelector('[data-o=demand]').textContent = o.demand;
            let vials = 195, given = 0, wastedPart = 0, wastedExp = 0, lostShip = 0, days = [], fridge = [], freezerUntil = null;
            const perDay = Math.ceil(o.demand / 5);
            // shipper limit after arrival: 30 days with re-icing, 5 days without (our assumption), counted from opening
            const shipperOK = o.transit <= 10, shipLimit = o.reice ? 30 : 5;
            if (!shipperOK) { lostShip = 975; vials = 0; }
            for (let d = 1; d <= 40; d++) {
              let g = 0, w = 0;
              // move vials out of the shipper when it is about to fail
              if (vials > 0 && d > shipLimit) {
                if (o.freezer && freezerUntil == null) freezerUntil = d + 14;
                if (!o.freezer || d > freezerUntil) { fridge.push({n: vials, exp: d + 5}); vials = 0; }
              }
              // thaw what today needs
              const need = perDay - fridge.reduce((a, b) => a + b.n, 0);
              if (need > 0 && vials > 0) { const t = Math.min(need, vials); vials -= t; fridge.push({n: t, exp: d + 5}); }
              // use vials, oldest first
              let toUse = perDay;
              fridge.sort((a, b) => a.exp - b.exp);
              for (const f of fridge) { const u = Math.min(f.n, toUse); f.n -= u; toUse -= u; if (!toUse) break; }
              const used = perDay - toUse;
              if (used > 0) { const doses = used * 5; g = Math.min(o.demand, doses); w = doses - g; }
              // expire
              fridge.forEach(f => { if (f.exp <= d && f.n) { wastedExp += f.n * 5; w += f.n * 5; f.n = 0; } });
              fridge = fridge.filter(f => f.n > 0);
              given += g; wastedPart += (used > 0 ? used * 5 - g : 0);
              days.push([g, w]);
              if (!vials && !fridge.length) { break; }
            }
            const W = 820, H = 150, n = Math.max(days.length, 10), bw = (W - 40) / 40;
            const mx = Math.max(10, ...days.map(x => x[0] + x[1]));
            let s = `<svg viewBox="0 0 ${W} ${H + 40}" style="width:100%;height:auto;display:block;margin-top:8px">`;
            days.forEach(([g, w], i) => { const x = 30 + i * bw, hg = H * g / mx, hw = H * w / mx;
              s += `<rect x="${x}" y="${10 + H - hg}" width="${bw - 3}" height="${hg}" class="il-1"/><rect x="${x}" y="${10 + H - hg - hw}" width="${bw - 3}" height="${hw}" class="il-7"/>`; });
            s += `<line x1="30" x2="${W - 10}" y1="${10 + H}" y2="${10 + H}" class="il-line"/><text x="30" y="${H + 32}" class="il-text-2">day 1</text><text x="${30 + 39 * bw}" y="${H + 32}" class="il-text-2" text-anchor="middle">day 40</text>`;
            s += `<rect x="${W - 250}" y="12" width="12" height="12" class="il-1"/><text x="${W - 232}" y="23" class="il-text-2">doses given</text><rect x="${W - 140}" y="12" width="12" height="12" class="il-7"/><text x="${W - 122}" y="23" class="il-text-2">doses wasted</text></svg>`;
            root.querySelector('.cf-cc').innerHTML = shipperOK ? s : '';
            const wasted = 975 - given;
            root.querySelector('.cf-ccout').innerHTML = !shipperOK ? `<b>The whole tray is lost.</b> An unopened shipper was rated for 10 days; after ${o.transit} days in transit it has warmed past its limit and all 975 doses must be discarded. Temperature trackers existed to catch exactly this.` :
              `<b>${given.toLocaleString('en-US')}</b> doses given, <b style="color:var(--il-7)">${wasted.toLocaleString('en-US')}</b> wasted (${Math.round(100 * wasted / 975)}%)${wastedPart ? `, including ${wastedPart} left in opened vials at the end of sessions (a vial holds 5 doses and diluted vaccine lasts 6 hours)` : ''}${wastedExp ? `, and ${wastedExp} from thawed vials that passed their 5-day fridge limit` : ''}. ${!o.reice && o.demand * 10 < 975 ? 'Without re-icing, the box had to be emptied into the fridge early, and the clinic could not use it all in five days. ' : ''}${o.freezer && !o.reice ? 'The February 2021 rule bought two more weeks in an ordinary freezer. ' : ''}<span style="color:var(--ink-3);font-size:15px">Simplified: one session a day, no appointments shared with other sites; we assume a shipper that is not re-iced fails five days after opening. Rules from Pfizer-BioNTech (Dec 2020) and the FDA (Feb 2021).</span>`;
          };
          root.addEventListener('input', run); run();
        }},

      {type: 'callout', variant: 'product', heading: 'The cold chain was the deployment pipeline', html: `<p>Engineers know the feeling: the feature works in staging, and then production has constraints nobody modeled. Comirnaty's "production environment" was every clinic, pharmacy and rural health post on Earth, and its main constraint was a freezer spec most of them couldn't meet. Pfizer effectively shipped its own infrastructure with the product (the thermal shipper with telemetry), then relaxed the requirements release by release as stability data accumulated.</p><p>Where it breaks: you can't patch physics with a config change. Each relaxation needed months of real-time stability data and a regulator's sign-off, and doses that warmed up had to be thrown away, not rolled back.</p>`},

      // ================= MONEY =================
      {type: 'story', kicker: 'The money', title: 'A windfall, and then the cliff', tocTitle: 'The money', html: `
<p>For two years the money was enormous. Pfizer reported $36.8 billion of Comirnaty revenue in 2021 and $37.8 billion in 2022. Its total revenue in 2022, including its COVID-19 pill Paxlovid, was a record $100.3 billion.</p>
<p>The deal structure explains how the money moved. Pfizer sold the vaccine in most of the world and booked those sales as its revenue. Under the [[gross profit split]], it paid BioNTech half of the profit left after the cost of making the product. BioNTech booked its half as revenue, along with its own direct sales in Germany and Turkey. In 2021 BioNTech, a company with €482 million of revenue the year before, reported €19.0 billion of revenue and €10.3 billion of net profit; in 2022, €17.3 billion and €9.4 billion.</p>
<p>Prices were negotiated with governments, not set in a normal market. The first US contract works out at about $19.50 a dose; most later contract prices were not made public. Critics argued that prices should reflect decades of public funding for the underlying science; the companies argued that they carried the development risk and scaled manufacturing no one else could. Both sides pointed to the same facts.</p>
<p>Then the pandemic ended as a buying emergency. Governments had bought ahead, many people had immunity from infection or earlier doses, and fewer came back for updated shots. In 2023 Pfizer's Comirnaty revenue fell 70% to $11.2 billion, and it kept falling: $5.4 billion in 2024 and $4.4 billion in 2025. BioNTech's revenue fell to €3.8 billion in 2023 and it swung to net losses of €665 million in 2024 and €1.1 billion in 2025, as it spent heavily on cancer research. This was not a [[patent cliff]]; no cheaper copies arrived. It was a demand cliff.</p>`},

      {type: 'chart', title: 'Pfizer\'s Comirnaty revenue', chart: {kind: 'line', title: 'Comirnaty revenue reported by Pfizer, worldwide', subtitle: 'US dollars, billions, by calendar year. Includes direct sales and alliance revenue.', unit: '$B',
        series: [{name: 'Comirnaty (Pfizer)', points: [[2020, 0.154], [2021, 36.781], [2022, 37.806], [2023, 11.220], [2024, 5.353], [2025, 4.367]]}],
        annotations: [{x: 2022.5, label: 'Emergency buying ends'}], xTicks: [2020, 2021, 2022, 2023, 2024, 2025],
        note: 'Source: Pfizer full-year results (8-K filings) for 2021, 2022, 2023, 2024 and 2025. Does not include BioNTech\'s share, which BioNTech reports separately in euros.'},
        takeaway: 'Two years of about $37 billion a year, then a 70% drop in one year. Pfizer\'s 2020 figure, $154 million, reflects only the first few weeks of shipments.'},

      {type: 'table', title: 'BioNTech\'s rise and return', intro: 'The smaller partner felt the swing hardest. Figures in euros, as reported under IFRS.',
        columns: ['Year', 'Total revenue', 'Net profit (loss)', 'What was going on'],
        rows: [
          ['2020', '€0.48B', '€0.02B', 'Vaccine authorized in December; almost no sales yet'],
          ['2021', '€18.98B', '€10.29B', '2.6 billion doses delivered to over 165 countries and regions'],
          ['2022', '€17.31B', '€9.43B', 'Variant-adapted boosters; still pandemic demand'],
          ['2023', '€3.82B', '€0.93B', 'Governments stop buying at scale'],
          ['2024', '€2.75B', '(€0.67B)', 'Heavy spending on oncology; NIH settlement'],
          ['2025', '€2.87B', '(€1.14B)', 'Acquires CureVac; COVID-19 vaccine revenue €2.0B'],
        ],
        caption: 'Source: BioNTech annual reports (Form 20-F) for 2022 and 2025. Revenue includes BioNTech\'s share of gross profit on Pfizer\'s sales.'},

      {type: 'explorer', title: 'Split the profit', intro: 'A toy model of the 50:50 gross profit split. Choose the volume, price and manufacturing cost; see what each partner books. None of these defaults are real contract figures.',
        inputs: [
          {id: 'doses', label: 'Doses sold by Pfizer (millions)', min: 100, max: 3000, step: 50, value: 1500, fmt: v => v.toLocaleString('en-US') + 'M'},
          {id: 'price', label: 'Average price per dose', min: 5, max: 40, value: 20, fmt: v => '$' + v},
          {id: 'cogs', label: 'Cost to make one dose (assumed)', min: 1, max: 15, value: 4, fmt: v => '$' + v},
        ],
        compute: v => {
          const rev = v.doses * v.price / 1000, gp = v.doses * (v.price - v.cogs) / 1000, half = gp / 2;
          return `<p style="margin:0 0 6px">Pfizer books <b>$${rev.toFixed(1)}B</b> of sales. Gross profit after manufacturing cost: <b>$${gp.toFixed(1)}B</b>.</p><p style="margin:0 0 6px">BioNTech's half: <b>$${half.toFixed(1)}B</b>, which it reports as revenue. Pfizer keeps <b>$${half.toFixed(1)}B</b> of gross profit, before its own selling, distribution and other costs.</p><p style="margin:0;color:var(--ink-3);font-size:15px">The two companies also split development costs equally. Reality check: in 2021 Pfizer reported $36.8B of Comirnaty revenue and BioNTech reported €19.0B of total revenue, including its own direct sales. Actual per-dose prices and costs varied by country and were largely confidential.</p>`;
        }},

      {type: 'callout', variant: 'product', heading: 'A pandemic product has a built-in demand cliff', html: `<p>Software companies that boomed in 2020, from video calls to home fitness, learned that a surge driven by an emergency is not a growth curve. Comirnaty is the extreme case: the customer was a set of governments buying for everyone at once, the purchase was one-off, and success (fewer severe cases, more immunity) reduced the urgency of the next purchase. BioNTech's response was to treat the windfall as a funding round for its original mission, cancer, and to buy assets and settle legal risks while it had cash.</p><p>Where it breaks: a software company can cut prices and find new segments. A vaccine's addressable demand depends on public-health recommendations, insurance coverage and public trust, which the company does not control.</p>`},

      // ================= PATENTS =================
      {type: 'story', kicker: 'What came next: the lawyers', title: 'Who owns the idea?', tocTitle: 'Patent wars', html: `
<p>When a product earns tens of billions, everyone who contributed to its science looks at their patents.</p>
<p><strong>Moderna.</strong> In October 2020 Moderna publicly pledged not to enforce its COVID-19 patents against companies making vaccines during the pandemic. In August 2022 it sued Pfizer and BioNTech in the US and Germany, and then in the UK, the Netherlands, Ireland and Belgium, arguing that Comirnaty used mRNA vaccine inventions it had patented. The results have split by country. In the UK, the High Court ruled in July 2024 that one Moderna patent (EP'949) was valid and infringed and another invalid; it also found that Moderna's pledge amounted to consent until March 2022, but not afterwards. The Court of Appeal upheld the ruling in August 2025, and the Supreme Court refused a further appeal in December 2025. A German court found infringement in March 2025, which BioNTech and Pfizer are appealing. A Dutch court found the same patent invalid in December 2023. In the US, the Patent Office's appeal board, in an [[inter partes review]], found the challenged claims of two Moderna patents unpatentable in March 2025; Moderna appealed. The [[European Patent Office]] has upheld the key patent in amended form, and an appeal hearing was scheduled for September 2026. As of BioNTech's early-2026 annual report, Moderna had not yet moved to enforce any of the rulings.</p>
<p><strong>The lipid lineage.</strong> Arbutus Biopharma and Genevant Sciences (a firm with origins in Protiva, part of the Vancouver lipid story) sued Pfizer and BioNTech in 2023 in the US over lipid nanoparticle patents; the case was pending in 2026. GSK has also sued.</p>
<p><strong>CureVac.</strong> The German mRNA pioneer sued BioNTech in 2022. BioNTech ended that dispute the direct way: it acquired [[CureVac]], closing the deal in December 2025.</p>
<p><strong>The public institutions.</strong> The modified-nucleoside work was done at the University of Pennsylvania, which has a licensing and research alliance with BioNTech. In March 2025 BioNTech agreed to pay Penn up to $467 million, including $400 million in [[royalty|royalties]] for 2020 to 2023, to settle a royalty dispute. In December 2024 it agreed to pay the US National Institutes of Health $791.5 million to settle its own royalty claims. The science was public; the returns flowed back to it only through licensing and, eventually, lawsuits.</p>`},

      {type: 'table', title: 'The main disputes', columns: ['Opponent', 'What was claimed', 'Status (per BioNTech, early 2026)'],
        rows: [
          ['Moderna', 'mRNA vaccine patents, in six countries', 'UK: valid and infringed, final. Germany: infringement found, on appeal. Netherlands: patent invalid, on appeal. US: challenged claims ruled unpatentable, on appeal. EPO appeal pending.'],
          ['Arbutus and Genevant', 'Lipid nanoparticle patents (US)', 'Pending'],
          ['GSK', 'mRNA-related patents (US, Ireland and European Unified Patent Court)', 'Pending'],
          ['CureVac', 'mRNA patents (Germany)', 'Resolved: BioNTech acquired CureVac (Dec 2025)'],
          ['University of Pennsylvania', 'Royalties on licensed modified-nucleoside patents', 'Settled Mar 2025: up to $467M'],
          ['US National Institutes of Health', 'Royalties and related amounts', 'Settled Dec 2024: $791.5M'],
        ],
        caption: 'Source: BioNTech Annual Report on Form 20-F for 2025 (filed March 2026). Litigation is ongoing and outcomes may change.'},

      // ================= SAFETY & TRUST =================
      {type: 'story', kicker: 'Safety and trust', title: 'The rare signal, and the harder problem of trust', tocTitle: 'Safety and trust', html: `
<p>A trial of 40,000 people can spot side effects affecting around one person in a thousand. Rarer ones appear only after millions of doses, through [[pharmacovigilance]] systems such as the US [[VAERS]] database, where anyone can report a problem after vaccination.</p>
<p><strong>Anaphylaxis.</strong> Within weeks of launch, a handful of severe allergic reactions were reported. A US analysis cited by the European regulator in January 2021 estimated the rate of [[anaphylaxis]] at about 11 cases per million doses. Nearly all happened within minutes of the shot, which is why vaccination sites asked people to wait 15 minutes, with treatment on hand.</p>
<p><strong>Myocarditis.</strong> The more important signal emerged in spring 2021: [[myocarditis]], inflammation of the heart muscle, in young men, usually a few days after the second dose. A CDC analysis of US reports from December 2020 to August 2021, published in <em>JAMA</em> in 2022, found 1,626 confirmed cases among 192 million people who had received mRNA vaccines. The median age was 21, 82% were male, and the highest reporting rate was about 106 per million second doses of Comirnaty in males aged 16 and 17, roughly one in 9,400. Most cases were mild: among patients under 30 with detailed records, 98% had been discharged from hospital and most treated with anti-inflammatory drugs, with no confirmed deaths in that group. The FDA required post-marketing studies of the risk as a condition of the full approval in August 2021, and the label warns of it.</p>
<p>The signal was real, rare and concentrated in a group at low risk from COVID-19 itself. That made it a genuine benefit-risk judgment that differed by age and sex, not a single answer. It was also exactly the kind of nuance that public communication in 2021 struggled with. Officials who had said the vaccines were "safe and effective" were accurate on average, but that phrase did not prepare people for a real, rare harm, and the gap was exploited by those who opposed vaccination altogether.</p>
<h3>Uptake after the emergency</h3>
<p>The vaccine's effect on the pandemic was large. A modeling study in <em>The Lancet Infectious Diseases</em> estimated that COVID-19 vaccines of all kinds prevented 14.4 million deaths in their first year, or 19.8 million using excess mortality, in 185 countries. But as the emergency faded, so did willingness to keep taking it. In the 2023–24 season, only 15.3% of health care personnel in US acute care hospitals received the updated COVID-19 vaccine, compared with 80.7% who got a flu shot. The product had not changed; the perceived need and the trust around it had.</p>`},

      {type: 'chart', title: 'Myocarditis after the second dose: highest in young males', chart: {kind: 'bar', horizontal: true, labelWidth: 150, title: 'Reported myocarditis within 7 days of dose 2 of Comirnaty, US males', subtitle: 'Cases per million second doses, December 2020 to August 2021', unit: 'per million',
        categories: ['Males 12–15', 'Males 16–17', 'Males 18–24'], series: [{name: 'Rate', values: [70.73, 105.86, 52.43]}],
        note: 'Source: Oster et al., JAMA 2022 (CDC analysis of VAERS reports meeting the case definition). Rates in females and older males were much lower. Reporting rates can undercount cases.'},
        takeaway: 'Even the highest rate, about 106 per million, is roughly 1 in 9,400 second doses. Most cases resolved quickly, but a real, rare risk in a low-risk group is a different decision from the same risk in 80-year-olds.'},

      {type: 'callout', variant: 'whatif', heading: 'What if the 2P spike, or the modified nucleoside, had not existed in 2020?', html: `<p>Without the 2P design, BioNTech would probably have gone with its tip-only candidate, BNT162b1, which did not need stabilizing but caused more fever in older adults, or spent months on protein engineering. Without modified nucleosides, the obvious comparison is CureVac, which used unmodified mRNA and withdrew its first-generation vaccine application in October 2021. Without ionizable lipids, there would have been no mRNA vaccine at all in 2020; the remaining options would have been viral-vector and protein vaccines, which took longer to scale. Each fix was a decade of work that happened to be finished just before it was needed. None of it was funded as pandemic preparedness for SARS-CoV-2.</p>`},

      // ================= WHAT CAME NEXT =================
      {type: 'story', kicker: 'What came next', title: 'The platform after the pandemic', tocTitle: 'What came next', html: `
<p>Comirnaty was updated repeatedly to match new variants, from the original Wuhan strain to Omicron versions, using the same backbone and lipids with a changed spike sequence. That is the platform promise working as advertised: the design changes, the factory does not.</p>
<p>The bigger question is what else the platform can do. Pfizer and BioNTech are testing a combined COVID-19 and influenza mRNA vaccine. BioNTech has put its windfall into its original goal: cancer. Its lead individualized cancer vaccine, autogene cevumeran, developed with Genentech, is made for each patient from the [[neoantigen|neoantigens]] in their own tumor and is in phase 2 trials after surgery for pancreatic and colorectal cancer. It is in some ways a harder problem than COVID-19: tumors are not foreign invaders, and each patient's vaccine is a batch of one.</p>
<p>In early 2026 BioNTech announced that its founders, Uğur Şahin and Özlem Türeci, planned to leave by the end of 2026 to lead a new, independent company focused on next-generation mRNA technology, with rights contributed by BioNTech. The mRNA field is now crowded, well funded and heavily litigated, the opposite of the one Karikó worked in during the 1990s.</p>
<aside class="note">Several other cases in this collection share Comirnaty's pattern of long, underfunded basic science followed by rapid translation. Compare the GLP-1 story in Ozempic and the antisense chemistry behind Spinraza.</aside>`},

      {type: 'callout', variant: 'lesson', heading: 'The takeaway for someone entering biotech', html: `<p>Comirnaty looks like an overnight success, and it was one for eleven months. It rested on three bodies of work that each took more than a decade, done by people the system mostly ignored, and it succeeded in 2020 because a small company had a ready platform, a big partner had manufacturing and trial muscle, the trial design matched the question, and money was used to buy time. The failures that followed (supply shortfalls, communication about rare risks, the demand cliff and the lawsuits) are just as instructive as the success.</p>`},

      // ================= QUIZ =================
      {type: 'quiz', title: 'Check your understanding', questions: [
        {q: 'What was the main effect of replacing uridine with modified versions such as pseudouridine in lab-made mRNA?', options: ['It let the mRNA enter the nucleus and act for longer', 'It stopped innate immune sensors treating the mRNA as a virus, reducing inflammation and increasing protein production', 'It locked the spike protein in its prefusion shape', 'It allowed the vaccine to be stored in a normal refrigerator'], answer: 1, explain: 'Karikó and Weissman showed in 2005 that modified nucleosides quiet Toll-like receptor sensing, and in 2008 that such mRNA makes more protein. The spike shape is a separate fix (2P), and storage is about stability.'},
        {q: 'Why is the key lipid in the nanoparticle "ionizable" rather than permanently positively charged?', options: ['Permanently charged lipids are cheaper but harder to make', 'It is neutral in the blood, reducing toxicity, and becomes positive in the acidic endosome, helping release the mRNA inside the cell', 'It keeps the particle frozen at -70°C', 'It binds the spike protein on the cell surface'], answer: 1, explain: 'Cullis and colleagues designed lipids whose charge depends on pH: charged during manufacturing and inside the endosome, neutral in circulation.'},
        {q: 'What does the 2P change do?', options: ['It makes two copies of the spike', 'It swaps two amino acids at a hinge for rigid prolines so the spike stays in its prefusion shape', 'It removes the receptor-binding domain', 'It replaces uridine with pseudouridine'], answer: 1, explain: 'McLellan, Graham, Ward and colleagues found the trick on MERS in 2017. The best neutralizing antibodies target the prefusion shape.'},
        {q: 'Why did the phase 3 trial stop at a number of cases rather than at a fixed date?', options: ['The FDA requires all vaccine trials to last exactly 164 days', 'Statistical power in a prevention trial depends on how many cases occur, so the trial is event-driven', 'It ran out of placebo', 'Participants were paid per case'], answer: 1, explain: 'Most participants never get sick in either arm. The information is in the cases, so the protocol specified looks at 62, 92, 120 and 164 cases.'},
        {q: 'The trial found 95% efficacy (8 vs 162 cases). Which statement is correct?', options: ['5% of vaccinated people caught COVID-19 during the trial', 'The vaccine works in 95% of people and fails in 5%', 'During the trial, the rate of confirmed COVID-19 was about 95% lower in the vaccine group than in the placebo group', 'The vaccine reduced each person\'s absolute risk by 95 percentage points'], answer: 2, explain: 'Efficacy is a relative risk reduction. About 0.9% of the placebo group got confirmed COVID-19 during the analysis window, versus about 0.04% of the vaccine group.'},
        {q: 'Why did Pfizer and BioNTech choose BNT162b2 over BNT162b1?', options: ['b2 produced ten times more antibodies', 'b1 was unsafe and caused serious adverse events', 'The two raised similar antibody levels, but b2 caused milder systemic reactions, particularly in older adults', 'b2 was cheaper to manufacture'], answer: 2, explain: 'The phase 1 comparison showed similar neutralizing titers; tolerability in the elderly was the deciding factor, and b2 displays the whole spike.'},
        {q: 'What did Pfizer give up by not taking Operation Warp Speed development funding?', options: ['The right to sell the vaccine in the US', 'A government subsidy of its development and at-risk manufacturing costs, in exchange for fewer reporting obligations and more control', 'Access to the FDA\'s emergency use pathway', 'Its partnership with BioNTech'], answer: 1, explain: 'Pfizer signed a purchase-on-delivery deal ($1.95B for 100M doses) and funded its share of development itself.'},
        {q: 'The vaccine launched requiring -80°C to -60°C storage, and the rules relaxed within months. What does this tell you about the storage label?', options: ['The formula was secretly changed', 'The label reflects the stability data available at the time; as more real-time data accumulated, regulators allowed warmer storage', 'Regulators lowered their standards under political pressure', 'Dry ice became cheaper'], answer: 1, explain: 'The FDA allowed two weeks in an ordinary freezer in February 2021 based on data Pfizer submitted. Labels state what the evidence supports, not the physical limit.'},
        {q: 'Why did Comirnaty revenue fall about 70% in 2023?', options: ['Generic copies launched after patents expired', 'The FDA withdrew its approval', 'Emergency government purchasing ended and demand for updated shots was far lower', 'Moderna won an injunction blocking sales'], answer: 2, explain: 'It was a demand cliff, not a patent cliff. No court had blocked sales, and no copies were on the market.'},
        {q: 'Myocarditis after mRNA vaccination was highest in which group, and what does that imply?', options: ['Adults over 80; the vaccine should not be given to the elderly', 'Young males after the second dose, a group at low risk from COVID-19, so the benefit-risk balance needs to be judged by age and sex', 'Everyone equally; it is a class effect of all vaccines', 'Pregnant women; they should delay vaccination'], answer: 1, explain: 'The CDC analysis found the highest reporting rate (about 106 per million second doses) in males aged 16–17. Rare and mostly mild, but real, so the benefit-risk balance differs by group.'},
      ]},

      {type: 'lessons', title: 'What this case teaches', items: [
        {title: 'Overnight successes are built on decades of unfashionable work', text: 'Modified nucleosides, ionizable lipids and the 2P spike each took more than ten years and were done mostly for other purposes. The people doing them were often underfunded and overlooked.', links: ['gleevec', 'ozempic', 'spinraza']},
        {title: 'Buy time with money, not with shortcuts in evidence', text: 'Every normal trial stage happened; speed came from running stages in parallel and building factories at risk. A platform makes at-risk manufacturing cheaper because most of the plant works whatever candidate wins.', links: ['kymriah', 'zolgensma']},
        {title: 'Design the trial so the answer comes fast and clean', text: 'An event-driven, placebo-controlled trial with a clinical endpoint and a pre-set bar gave an unambiguous answer in months. Contrast drugs approved on murkier surrogate measures.', links: ['aduhelm', 'leqembi', 'keytruda']},
        {title: 'Manufacturing and logistics are part of the product', text: 'RNA integrity, lipid supply and a -70°C cold chain were as decisive as the molecule. Many great molecules have failed as products at this step.', links: ['exubera', 'kymriah']},
        {title: 'Emergency demand ends; plan for the cliff', text: 'Comirnaty\'s revenue fell 70% in a year without any competition from copies. Curing or preventing a problem can shrink your own market.', links: ['sovaldi', 'humira']},
        {title: 'Rare harms need honest, specific communication', text: 'Myocarditis in young men was real and rare. Messages that were accurate on average but said little about specific groups left room for distrust.', links: ['vioxx', 'tgn1412']},
      ]},

      {type: 'sources', title: 'Sources', items: [
        {text: 'Polack FP et al. Safety and efficacy of the BNT162b2 mRNA Covid-19 vaccine. N Engl J Med 2020;383:2603-15', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2034577'},
        {text: 'Walsh EE et al. Safety and immunogenicity of two RNA-based Covid-19 vaccine candidates. N Engl J Med 2020;383:2439-50', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7583697/'},
        {text: 'Pfizer and BioNTech. VRBPAC briefing document, Pfizer-BioNTech COVID-19 vaccine, December 10, 2020 (FDA)', url: 'https://www.fda.gov/media/144246/download'},
        {text: 'Pfizer and BioNTech press releases filed with the SEC: Apr 9, Apr 29, May 5, Jul 27, Nov 9, Nov 18, Nov 20 and Dec 2, 2020 (BioNTech Form 6-K exhibits); example: Nov 18, 2020 final analysis', url: 'https://www.sec.gov/Archives/edgar/data/1776985/000156459020054420/bntx-ex991_7.htm'},
        {text: 'Pfizer and BioNTech announce vaccine candidate achieved success in first interim analysis, Nov 9, 2020', url: 'https://www.sec.gov/Archives/edgar/data/1776985/000156459020052228/bntx-ex991_40.htm'},
        {text: 'Pfizer and BioNTech achieve first authorization in the world (MHRA), Dec 2, 2020', url: 'https://www.sec.gov/Archives/edgar/data/1776985/000156459020055789/bntx-ex991_20.htm'},
        {text: 'Pfizer and BioNTech announce further details on collaboration (deal terms), Apr 9, 2020', url: 'https://www.sec.gov/Archives/edgar/data/1776985/000156459020016001/bntx-ex991_69.htm'},
        {text: 'Pfizer and BioNTech choose lead mRNA vaccine candidate and commence phase 2/3 study, Jul 27, 2020', url: 'https://www.sec.gov/Archives/edgar/data/1776985/000156459020033641/bntx-ex991_7.htm'},
        {text: 'Pfizer. Pfizer and BioNTech to co-develop potential COVID-19 vaccine, Mar 17, 2020', url: 'https://www.pfizer.com/news/press-release/press-release-detail/pfizer-and-biontech-co-develop-potential-covid-19-vaccine'},
        {text: 'Pfizer. Pfizer and BioNTech announce an agreement with U.S. government for up to 600 million doses, Jul 22, 2020', url: 'https://www.pfizer.com/news/press-release/press-release-detail/pfizer-and-biontech-announce-agreement-us-government-600'},
        {text: 'BioNTech. BioNTech to receive up to €375M in funding from German Federal Ministry of Education and Research, Sep 15, 2020; and BioNTech to acquire GMP manufacturing site (Marburg), Sep 17, 2020', url: 'https://www.sec.gov/Archives/edgar/data/1776985/000156459020043476/bntx-ex991_7.htm'},
        {text: 'FDA. FDA approves first COVID-19 vaccine, Aug 23, 2021; and COMIRNATY approval letter (postmarketing myocarditis requirements)', url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-covid-19-vaccine'},
        {text: 'FDA. FDA allows more flexible storage, transportation conditions for Pfizer-BioNTech COVID-19 vaccine, Feb 25, 2021', url: 'https://www.fda.gov/news-events/press-announcements/coronavirus-covid-19-update-fda-allows-more-flexible-storage-transportation-conditions-pfizer'},
        {text: 'RAPS. Pfizer COVID vax gets thumbs up from FDA\'s VRBPAC (17-4-1 vote), Dec 2020', url: 'https://www.raps.org/resource/thumbs-up-on-pfizer-covid-vax-from-fdas-vrbpac.html'},
        {text: 'European Medicines Agency. Comirnaty: EPAR public assessment report, EMA/707383/2020 (composition, manufacturing, CMA on Dec 21, 2020)', url: 'https://www.ema.europa.eu/en/documents/assessment-report/comirnaty-epar-public-assessment-report_en.pdf'},
        {text: 'Nobel Assembly at Karolinska Institutet. Press release and scientific background: The Nobel Prize in Physiology or Medicine 2023', url: 'https://www.nobelprize.org/prizes/medicine/2023/advanced-information/'},
        {text: 'Karikó K, Buckstein M, Ni H, Weissman D. Suppression of RNA recognition by Toll-like receptors. Immunity 2005;23:165-75; and Karikó K et al. Mol Ther 2008;16:1833-40', url: 'https://doi.org/10.1016/j.immuni.2005.06.008'},
        {text: 'From rejection to the Nobel Prize: Karikó and Weissman\'s pioneering work on mRNA vaccines (PMC, 2023)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10663363/'},
        {text: 'CNBC. Nobel Prize winner Katalin Karikó was "demoted 4 times" at her old job, Oct 6, 2023', url: 'https://www.cnbc.com/2023/10/06/nobel-prize-winner-katalin-karik-on-being-demoted-perseverance-.html'},
        {text: 'Cross R. Without these lipid shells, there would be no mRNA vaccines for COVID-19. C&EN, March 2021', url: 'https://cen.acs.org/pharmaceuticals/drug-delivery/Without-lipid-shells-mRNA-vaccines/99/i8'},
        {text: 'Cross R. The tiny tweak behind COVID-19 vaccines. C&EN, Sep 29, 2020', url: 'https://cen.acs.org/pharmaceuticals/vaccines/tiny-tweak-behind-COVID-19/98/i38'},
        {text: 'Pallesen J et al. Immunogenicity and structures of a rationally designed prefusion MERS-CoV spike antigen. PNAS 2017; and Wrapp D et al. Cryo-EM structure of the 2019-nCoV spike in the prefusion conformation. Science 2020', url: 'https://pubmed.ncbi.nlm.nih.gov/28807998/'},
        {text: 'Projekt Lightspeed exhibition (BioNTech): timeline of January 2020 and 2021 production', url: 'https://www.projektlightspeed.de/en/'},
        {text: 'Pfizer full-year results filed on Form 8-K: 2021 (incl. 2020), 2022, 2023, 2024 and 2025', url: 'https://www.sec.gov/Archives/edgar/data/78003/000007800326000005/pfe-12312025xex99.htm'},
        {text: 'BioNTech. Fourth quarter and full year 2021 financial results (2.6 billion doses delivered)', url: 'https://www.globenewswire.com/en/news-release/2022/03/30/2412614/0/en/BioNTech-Announces-Fourth-Quarter-and-Full-Year-2021-Financial-Results-and-Corporate-Update.html'},
        {text: 'BioNTech Annual Reports on Form 20-F for 2020, 2022 and 2025 (candidates, Acuitas license, finances, litigation, settlements, founders\' plans)', url: 'https://www.sec.gov/Archives/edgar/data/1776985/000177698526000017/bntx-20251231.htm'},
        {text: 'Oster ME et al. Myocarditis cases reported after mRNA-based COVID-19 vaccination in the US from December 2020 to August 2021. JAMA 2022;327:331-40', url: 'https://jamanetwork.com/journals/jama/fullarticle/2788346'},
        {text: 'Pronker ES et al. Risk in vaccine research and development quantified. PLoS One 2013;8:e57755', url: 'https://pubmed.ncbi.nlm.nih.gov/23526951/'},
        {text: 'Watson OJ et al. Global impact of the first year of COVID-19 vaccination: a mathematical modelling study. Lancet Infect Dis 2022;22:1293-302', url: 'https://pubmed.ncbi.nlm.nih.gov/35753318/'},
        {text: 'Bell J et al. Influenza and COVID-19 vaccination coverage among health care personnel, 2023-24 season. MMWR 2024;73:966-72', url: 'https://pubmed.ncbi.nlm.nih.gov/39480706/'},
        {text: 'Operation Warp Speed (overview of funding and Bourla\'s explanation for declining development money); see also Bourla A. Moonshot (Harper Business, 2022)', url: 'https://en.wikipedia.org/wiki/Operation_Warp_Speed'},
      ]},
    ],
  });
})();
