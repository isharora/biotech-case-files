// Gleevec (imatinib): the first rationally designed targeted cancer drug. See GUIDE.md.
(function () {
  // ---------- small SVG helpers (classes only, never raw colors) ----------
  const hex = (cx, cy, r, cls) => {
    let p = '';
    for (let i = 0; i < 6; i++) { const a = Math.PI / 6 + i * Math.PI / 3; p += (i ? 'L' : 'M') + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1) + ' '; }
    return '<path d="' + p + 'Z" class="' + cls + '" stroke-width="2"/>';
  };
  // a chromosome drawn as stacked rounded segments with a pinched centromere
  const chromo = (x, w, segs) => segs.map(s => s.cent
    ? '<rect x="' + (x + w * 0.3) + '" y="' + s.y0 + '" width="' + (w * 0.4) + '" height="' + (s.y1 - s.y0) + '" class="' + s.cls + '"/>'
    : '<rect x="' + x + '" y="' + s.y0 + '" width="' + w + '" height="' + (s.y1 - s.y0) + '" rx="' + Math.min(14, (s.y1 - s.y0) / 2) + '" class="' + s.cls + '"/>').join('');

  // ---------- emblem ----------
  const emblem = '<svg viewBox="0 0 300 300">' +
    '<circle cx="150" cy="150" r="138" class="il-2s"/>' +
    '<ellipse cx="150" cy="112" rx="88" ry="50" class="il-7s st-7" stroke-width="3"/>' +
    '<ellipse cx="150" cy="196" rx="104" ry="60" class="il-7s st-7" stroke-width="3"/>' +
    '<ellipse cx="140" cy="154" rx="62" ry="16" class="il-bg"/>' +
    '<path d="M96 154 H190" class="st-1" stroke-width="6" stroke-linecap="round"/>' +
    '<circle cx="96" cy="154" r="11" class="il-1"/><circle cx="126" cy="154" r="11" class="il-1"/><circle cx="158" cy="154" r="11" class="il-1"/><circle cx="190" cy="154" r="11" class="il-1"/>' +
    '<rect x="54" y="60" width="54" height="30" rx="9" class="il-2"/><text x="81" y="80" text-anchor="middle" class="il-white">BCR</text>' +
    '<text x="150" y="232" text-anchor="middle" class="il-text">ABL kinase, locked</text></svg>';

  // ---------- figure: the blood factory ----------
  const bloodSvg = (() => {
    let s = '<svg viewBox="0 0 900 430">';
    s += '<g data-part="marrow"><rect x="20" y="40" width="400" height="360" rx="28" class="il-4s"/><text x="40" y="70" class="il-title">Bone marrow</text><text x="40" y="386" class="il-text-2">the spongy core of large bones</text></g>';
    s += '<g data-part="stem"><circle cx="100" cy="220" r="40" class="il-3s il-line"/><circle cx="100" cy="220" r="17" class="il-3"/><text x="100" y="286" text-anchor="middle" class="il-text">stem cell</text></g>';
    s += '<path d="M142 200 C190 150 210 120 250 115 M142 220 H250 M142 240 C190 290 210 320 250 322" class="il-line il-none flow"/>';
    s += '<g data-part="red">' + [[285, 110], [322, 124], [358, 104]].map(([x, y]) => '<ellipse cx="' + x + '" cy="' + y + '" rx="19" ry="12" class="il-7"/>').join('') + '<text x="262" y="160" class="il-text-2">red cells carry oxygen</text></g>';
    s += '<g data-part="white">' + [[285, 222], [338, 218]].map(([x, y]) => '<circle cx="' + x + '" cy="' + y + '" r="19" class="il-3s il-line"/><circle cx="' + (x - 6) + '" cy="' + (y - 3) + '" r="6" class="il-3"/><circle cx="' + (x + 5) + '" cy="' + (y + 4) + '" r="6" class="il-3"/>').join('') + '<text x="250" y="262" class="il-text-2">white cells fight infection</text></g>';
    s += '<g data-part="platelets">' + [[278, 322], [300, 332], [322, 318], [346, 330], [366, 320]].map(([x, y]) => '<ellipse cx="' + x + '" cy="' + y + '" rx="8" ry="5" class="il-4"/>').join('') + '<text x="262" y="358" class="il-text-2">platelets plug leaks</text></g>';
    // vessels
    const vessel = (y, part, title, whites) => {
      let v = '<g data-part="' + part + '"><text x="470" y="' + (y - 12) + '" class="il-title">' + title + '</text><rect x="460" y="' + y + '" width="420" height="140" rx="70" class="il-7s"/>';
      let seed = y;
      const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
      for (let i = 0; i < 22; i++) { const cx = 505 + (i % 11) * 33 + rnd() * 8, cy = y + 38 + Math.floor(i / 11) * 60 + rnd() * 10; v += '<ellipse cx="' + cx.toFixed(0) + '" cy="' + cy.toFixed(0) + '" rx="13" ry="8" class="il-7"/>'; }
      for (let i = 0; i < whites; i++) { const cx = 510 + ((i * 53) % 330) + rnd() * 10, cy = y + 30 + ((i * 37) % 82) + rnd() * 8; v += '<circle cx="' + cx.toFixed(0) + '" cy="' + cy.toFixed(0) + '" r="12" class="' + (part === 'cml' ? 'il-2 ' : 'il-3s ') + 'il-line"/>'; }
      return v + '</g>';
    };
    s += vessel(58, 'healthy', 'Healthy blood', 2);
    s += vessel(262, 'cml', 'Chronic-phase CML', 17);
    return s + '</svg>';
  })();

  // ---------- figure: the translocation ----------
  const transSvg = (() => {
    const W = 44;
    let s = '<svg viewBox="0 0 920 440">';
    s += '<text x="60" y="30" class="il-title">Before: one cell, two normal chromosomes</text><text x="470" y="30" class="il-title">After: the tips have swapped</text>';
    // before
    s += '<g data-part="chr9">' + chromo(70, W, [{y0: 60, y1: 152, cls: 'il-3s'}, {y0: 150, y1: 164, cls: 'il-3s', cent: 1}, {y0: 162, y1: 330, cls: 'il-3s'}]) + '<text x="92" y="356" text-anchor="middle" class="il-text">chromosome 9</text></g>';
    s += '<g data-part="abl"><rect x="70" y="302" width="' + W + '" height="16" class="il-7"/><text x="124" y="315" class="il-text">ABL</text></g>';
    s += '<g data-part="chr22">' + chromo(190, W, [{y0: 186, y1: 208, cls: 'il-5s'}, {y0: 206, y1: 216, cls: 'il-5s', cent: 1}, {y0: 214, y1: 330, cls: 'il-5s'}]) + '<text x="212" y="356" text-anchor="middle" class="il-text">chromosome 22</text></g>';
    s += '<g data-part="bcr"><rect x="190" y="236" width="' + W + '" height="16" class="il-2"/><text x="244" y="249" class="il-text">BCR</text></g>';
    s += '<g data-part="breaks"><path d="M58 294 H126 M178 256 H246" class="st-ink il-dash" stroke-width="2"/><text x="22" y="298" class="il-small">break</text><text x="252" y="272" class="il-small">break</text></g>';
    s += '<path d="M310 200 H420" class="il-line2 il-none flow"/><path d="M412 192 L424 200 L412 208" class="il-line2 il-none"/><text x="365" y="185" text-anchor="middle" class="il-text-2">swap</text>';
    // after: der(9)
    s += '<g data-part="der9">' + chromo(470, W, [{y0: 60, y1: 152, cls: 'il-3s'}, {y0: 150, y1: 164, cls: 'il-3s', cent: 1}, {y0: 162, y1: 300, cls: 'il-3s'}]) + '<rect x="470" y="294" width="' + W + '" height="76" rx="12" class="il-5s"/><text x="492" y="396" text-anchor="middle" class="il-text">derivative 9</text></g>';
    // after: Philadelphia chromosome
    s += '<g data-part="ph">' + chromo(590, W, [{y0: 186, y1: 208, cls: 'il-5s'}, {y0: 206, y1: 216, cls: 'il-5s', cent: 1}, {y0: 214, y1: 262, cls: 'il-5s'}]) + '<rect x="590" y="254" width="' + W + '" height="36" rx="12" class="il-3s"/><rect x="590" y="236" width="' + W + '" height="16" class="il-2"/><rect x="590" y="262" width="' + W + '" height="14" class="il-7"/><text x="612" y="316" text-anchor="middle" class="il-text">Philadelphia</text><text x="612" y="332" text-anchor="middle" class="il-text">chromosome</text></g>';
    // fusion zoom
    s += '<g data-part="fusion"><path d="M636 252 L690 214 M636 272 L690 290" class="il-line il-dash il-none"/><rect x="690" y="190" width="220" height="126" rx="14" class="il-paper il-line"/><text x="704" y="214" class="il-text">BCR-ABL fusion gene</text><rect x="704" y="228" width="88" height="30" rx="6" class="il-2"/><rect x="792" y="228" width="104" height="30" rx="6" class="il-7"/><text x="748" y="248" text-anchor="middle" class="il-white">BCR</text><text x="844" y="248" text-anchor="middle" class="il-white">ABL</text><text x="704" y="282" class="il-text-2">encodes a kinase that</text><text x="704" y="300" class="il-text-2">never switches off</text></g>';
    s += '<text x="60" y="420" class="il-small">Chromosomes drawn schematically, not to scale. Chromosome 9 is several times larger than 22.</text>';
    return s + '</svg>';
  })();

  // ---------- figure: kinase anatomy ----------
  const kinaseSvg = (() => {
    let s = '<svg viewBox="0 0 900 430">';
    s += '<g data-part="nlobe"><ellipse cx="320" cy="138" rx="150" ry="70" class="il-7s st-7" stroke-width="2.5"/><text x="320" y="118" text-anchor="middle" class="il-text">N-lobe</text></g>';
    s += '<g data-part="clobe"><ellipse cx="320" cy="305" rx="190" ry="84" class="il-7s st-7" stroke-width="2.5"/><text x="320" y="340" text-anchor="middle" class="il-text">C-lobe</text></g>';
    s += '<g data-part="pocket"><ellipse cx="300" cy="215" rx="100" ry="23" class="il-bg il-line" stroke-dasharray="4 3"/></g>';
    s += '<g data-part="atp"><circle cx="248" cy="215" r="15" class="il-4"/><path d="M263 215 H350" class="st-4" stroke-width="3"/><circle cx="288" cy="215" r="9" class="il-4"/><circle cx="314" cy="215" r="9" class="il-4"/><circle cx="340" cy="215" r="9" class="il-4"/><text x="248" y="220" text-anchor="middle" class="il-small">A</text></g>';
    s += '<g data-part="gate"><circle cx="212" cy="207" r="8" class="il-3"/><path d="M205 202 L130 176" class="il-line"/><text x="30" y="170" class="il-text">gatekeeper T315</text></g>';
    s += '<g data-part="aloop"><path d="M420 300 C500 305 530 250 495 228" class="st-2 il-none" stroke-width="6" stroke-linecap="round"/><text x="520" y="330" class="il-text">activation loop</text></g>';
    s += '<g data-part="substrate"><ellipse cx="735" cy="168" rx="95" ry="46" class="il-8s il-line"/><text x="735" y="173" text-anchor="middle" class="il-text">next protein in the chain</text><path d="M648 190 L604 214" class="il-line2"/><text x="588" y="236" class="il-text">Y</text><text x="606" y="250" class="il-small">tyrosine</text></g>';
    s += '<g data-part="phosphate"><path d="M352 215 C430 215 500 212 578 210" class="st-4 il-none flow" stroke-width="2.5"/><circle cx="592" cy="200" r="11" class="il-4"/><text x="592" y="205" text-anchor="middle" class="il-small">P</text><text x="438" y="192" class="il-small">phosphate hops over</text></g>';
    s += '<text x="30" y="44" class="il-title">Anatomy of a kinase</text><text x="30" y="416" class="il-text-2">ATP sits in the cleft between the two lobes; the kinase moves its end phosphate onto a tyrosine on the next protein.</text>';
    return s + '</svg>';
  })();

  // ---------- mechanism: imatinib locks the switch ----------
  const mechSvg = (() => {
    let s = '<svg viewBox="40 30 700 405">';
    s += '<rect x="0" y="0" width="760" height="440" rx="18" class="il-2s" data-part="cell"/>';
    s += '<g data-part="cell"><text x="54" y="58" class="il-text-2" style="font-size:16px">inside a white blood cell</text></g>';
    s += '<g data-part="nucleus"><ellipse cx="630" cy="374" rx="105" ry="55" class="il-6s il-line"/><text x="630" y="372" text-anchor="middle" class="il-text" style="font-size:18px">nucleus</text><text x="630" y="394" text-anchor="middle" class="il-text-2" style="font-size:14px">decides: divide or not</text></g>';
    s += '<g data-part="kinase"><ellipse cx="280" cy="170" rx="130" ry="64" class="il-7s st-7" stroke-width="2.5"/><ellipse cx="280" cy="292" rx="160" ry="80" class="il-7s st-7" stroke-width="2.5"/><ellipse cx="258" cy="232" rx="78" ry="21" class="il-bg il-line" stroke-dasharray="4 3"/><text x="280" y="342" text-anchor="middle" class="il-text" style="font-size:18px">ABL kinase</text></g>';
    s += '<g data-part="bcr"><rect x="138" y="96" width="96" height="44" rx="10" class="il-2"/><text x="186" y="124" text-anchor="middle" class="il-white" style="font-size:18px">BCR</text></g>';
    s += '<g data-part="aloopA"><path d="M360 300 C430 300 460 250 432 214" class="st-2 il-none" stroke-width="6" stroke-linecap="round"/><text x="436" y="322" class="il-text-2" style="font-size:15px">activation loop open</text></g>';
    s += '<g data-part="aloopI"><path d="M360 300 C330 286 350 262 330 250" class="st-ink il-none" stroke-width="6" stroke-linecap="round"/><text x="340" y="394" class="il-text-2" style="font-size:15px">loop folded in (inactive)</text></g>';
    s += '<g data-part="gate"><circle cx="196" cy="226" r="7" class="il-3"/><text x="118" y="208" class="il-text-2" style="font-size:15px">T315</text></g>';
    s += '<g data-part="gateI"><circle cx="196" cy="228" r="15" class="il-8"/><text x="196" y="233" text-anchor="middle" class="il-white">I</text><text x="84" y="206" class="il-text-2" style="font-size:15px">T315I mutant</text></g>';
    s += '<g data-part="atp"><circle cx="220" cy="232" r="13" class="il-4"/><path d="M233 232 H296" class="st-4" stroke-width="3"/><circle cx="254" cy="232" r="8" class="il-4"/><circle cx="274" cy="232" r="8" class="il-4"/><circle cx="294" cy="232" r="8" class="il-4"/><text x="220" y="211" text-anchor="middle" class="il-text" style="font-size:14px">ATP</text></g>';
    s += '<g data-part="drug"><path d="M196 236 H326" class="st-1" stroke-width="5"/><circle cx="200" cy="236" r="12" class="il-1"/><circle cx="238" cy="236" r="12" class="il-1"/><circle cx="276" cy="236" r="12" class="il-1"/><circle cx="318" cy="236" r="12" class="il-1"/><text x="258" y="270" text-anchor="middle" class="il-text" style="font-size:17px">imatinib</text></g>';
    s += '<g data-part="substrate"><ellipse cx="560" cy="170" rx="70" ry="36" class="il-8s il-line"/><text x="560" y="166" text-anchor="middle" class="il-text" style="font-size:16px">signaling</text><text x="560" y="186" text-anchor="middle" class="il-text" style="font-size:16px">protein</text><text x="474" y="210" class="il-text" style="font-size:18px">Y</text></g>';
    s += '<g data-part="phos"><circle cx="486" cy="146" r="11" class="il-4"/><text x="486" y="151" text-anchor="middle" class="il-text" style="font-size:13px">P</text></g>';
    s += '<g data-part="signal"><path d="M580 210 C605 250 620 285 628 316" class="st-4 il-none flow" stroke-width="3"/><text x="626" y="262" class="il-text-2" style="font-size:16px">grow! divide!</text></g>';
    s += '<g data-part="on"><text x="440" y="92" class="il-title" style="font-size:22px">ALWAYS ON</text></g>';
    s += '<g data-part="off"><text x="440" y="92" class="il-title" style="font-size:22px">mostly OFF</text></g>';
    s += '<g data-part="dies"><text x="440" y="92" class="il-title" style="font-size:22px">signal stops</text><text x="440" y="116" class="il-text-2" style="font-size:15px">the cell stops growing and dies</text></g>';
    return s + '</svg>';
  })();

  // ---------- custom 1: build the molecule ----------
  const FRAGS = {
    pyr: {name: 'Add a pyridine ring', does: 'A pyridyl group on the pyrimidine ring boosted activity in cells.', meters: [1, 0, 0]},
    amide: {name: 'Add an amide and a benzene ring', does: 'An amide group on the phenyl ring gave the series activity against tyrosine kinases such as ABL and the PDGF receptor.', meters: [1, 1, 0]},
    methyl: {name: 'Add a single methyl "flag"', does: 'One methyl group on the middle ring twisted the molecule so it no longer fit protein kinase C well: the unwanted activity dropped away.', meters: [0, 2, 0]},
    pip: {name: 'Add an N-methylpiperazine tail', does: 'A water-loving piperazine tail made the compound soluble enough to be absorbed as a pill.', meters: [0, 0, 3]},
  };
  const STAGES = [
    {key: 'pyr', problem: 'Your lead compound, a 2-phenylaminopyrimidine from a screen for protein kinase C blockers, is weak in cells. What do you add first?'},
    {key: 'amide', problem: 'Better in cells, but it is still a PKC compound. You need it to hit tyrosine kinases like ABL. What next?'},
    {key: 'methyl', problem: 'It now blocks ABL, but it still blocks PKC as well. You want a drug that hits one family and spares the other. What next?'},
    {key: 'pip', problem: 'Selective and potent, but it barely dissolves in water, so a pill would pass straight through. Last piece?'},
  ];
  const molSvg = have => {
    let s = '<svg viewBox="0 0 860 300" style="width:100%;height:auto;display:block">';
    s += '<rect x="0" y="0" width="860" height="300" rx="14" class="il-bg"/>';
    // core
    s += hex(300, 160, 38, 'il-8s st-ink') + '<text x="300" y="165" text-anchor="middle" class="il-small">pyrimidine</text>';
    s += '<path d="M338 160 H392" class="st-ink" stroke-width="2"/><text x="365" y="152" text-anchor="middle" class="il-small">NH</text>';
    s += hex(430, 160, 38, 'il-8s st-ink') + '<text x="430" y="165" text-anchor="middle" class="il-small">phenyl</text>';
    if (have.pyr) s += '<path d="M268 140 L222 112" class="st-1" stroke-width="2.5"/>' + hex(190, 94, 34, 'il-1s st-1') + '<text x="190" y="99" text-anchor="middle" class="il-small">pyridine</text>';
    if (have.methyl) s += '<path d="M430 122 V70" class="st-1" stroke-width="2.5"/><text x="430" y="60" text-anchor="middle" class="il-text">CH&#8323; flag</text>';
    if (have.amide) s += '<path d="M468 170 L510 196 H560" class="st-1" stroke-width="2.5"/><text x="528" y="188" text-anchor="middle" class="il-small">amide</text>' + hex(600, 206, 36, 'il-1s st-1') + '<text x="600" y="211" text-anchor="middle" class="il-small">benzene</text>';
    if (have.pip) s += '<path d="M636 206 H690" class="st-1" stroke-width="2.5"/>' + hex(730, 206, 36, 'il-3s st-3') + '<text x="730" y="211" text-anchor="middle" class="il-small">piperazine</text>';
    s += '<text x="20" y="282" class="il-small">Simplified sketch: rings and linkers only, not a full chemical structure.</text>';
    return s + '</svg>';
  };

  // ---------- custom 3: evolve resistance ----------
  // Qualitative sensitivity: 2 = effective, 1 = partial / use with caution, 0 = resistant.
  // Based on ELN mutation guidance (Soverini 2011), Shah 2004, O'Hare 2009, Zabriskie 2014.
  const DRUGS = {
    ima: {name: 'Imatinib (Gleevec)', short: 'imatinib'},
    ima8: {name: 'Imatinib at a higher dose', short: 'high-dose imatinib'},
    das: {name: 'Dasatinib (Sprycel)', short: 'dasatinib'},
    nil: {name: 'Nilotinib (Tasigna)', short: 'nilotinib'},
    pon: {name: 'Ponatinib (Iclusig)', short: 'ponatinib'},
    asc: {name: 'Asciminib (Scemblix)', short: 'asciminib'},
    sct: {name: 'Stem-cell transplant from a donor', short: 'a transplant'},
  };
  const CLONES = {
    wt: {label: 'native BCR-ABL', sens: {ima: 2, ima8: 2, das: 2, nil: 2, pon: 2, asc: 2, sct: 2}},
    y253h: {label: 'Y253H (P-loop)', sens: {ima: 0, ima8: 0, das: 2, nil: 0, pon: 2, asc: 2, sct: 2}},
    f317l: {label: 'F317L', sens: {ima: 0, ima8: 1, das: 0, nil: 2, pon: 2, asc: 2, sct: 2}},
    t315i: {label: 'T315I (gatekeeper)', sens: {ima: 0, ima8: 0, das: 0, nil: 0, pon: 2, asc: 2, sct: 2}},
    compound: {label: 'T315I + E255V compound', sens: {ima: 0, ima8: 0, das: 0, nil: 0, pon: 0, asc: 1, sct: 2}},
  };

  registerCase({
    id: 'gleevec', kind: 'success',
    brand: 'Gleevec', generic: 'imatinib (STI571)', company: 'Novartis (discovered at Ciba-Geigy)',
    tagline: 'A pill aimed at a single broken [[protein]] turned a leukemia that usually killed within five or six years into a condition most patients live with, and wrote the template for [[targeted therapy]].',
    chips: [['Disease', '[[CML|Chronic myeloid leukemia]]'], ['Modality', '[[small molecule]]'], ['Target', '[[BCR-ABL]] kinase'], ['Approved', 'May 2001']],
    readingTime: 35,
    stats: [
      {v: '53 of 54', l: 'Phase 1 patients at 300 mg or more whose blood counts returned to normal', n: 'Druker, NEJM 2001'},
      {v: '~10 weeks', l: 'From application to FDA approval, then a record for a cancer drug', n: 'Cohen, Oncologist 2002'},
      {v: '83%', l: 'Estimated 10-year survival for patients starting imatinib in the IRIS trial', n: 'Hochhaus, NEJM 2017'},
      {v: '$26k → $146k', l: 'US annual price at launch (2001) versus 2016', n: 'Blood 2013; ASCO Post 2016'},
      {v: '$4.7B', l: 'Peak annual sales (2014), from a market once judged too small', n: 'Novartis 20-F'},
    ],
    emblem,
    facts: {start: 1984, firstHuman: 1998, approval: 2001, end: null, peakSalesB: 4.7, pivotalN: 1106, area: 'oncology', modality: 'small molecule', target: 'BCR-ABL'},
    themes: ['biomarkers', 'speed', 'pricing', 'patient-advocacy'],
    glossary: {
      'CML': 'Chronic myeloid leukemia: a blood cancer in which the bone marrow overproduces one family of white blood cells. Almost every case carries the Philadelphia chromosome.',
      'leukemia': 'A cancer of the blood-forming cells in the bone marrow. The cancerous cells crowd out normal blood cells and spill into the blood.',
      'bone marrow': 'The soft tissue inside large bones where blood cells are made, at a rate of billions per day.',
      'stem cell': 'A cell that can both copy itself and give rise to specialized cells. Blood stem cells in the marrow make every kind of blood cell.',
      'white blood cell': 'An immune cell in the blood that fights infection. A healthy adult has roughly 4,000 to 11,000 in every microliter of blood.',
      'Philadelphia chromosome': 'A shortened chromosome 22, found in the leukemia cells of nearly all CML patients. It carries the BCR-ABL fusion gene. Named after the city where it was found in 1960.',
      'translocation': 'A swap of pieces between two different chromosomes. When the break points fall inside genes, it can fuse two genes into one.',
      'fusion gene': 'A hybrid gene created when a chromosome break joins the front of one gene to the back of another.',
      'BCR-ABL': 'The fusion protein made from the Philadelphia chromosome: the front of the BCR protein welded to the ABL kinase. The BCR part keeps the kinase permanently switched on.',
      'BCR': 'A gene on chromosome 22 ("breakpoint cluster region"). In CML its front part is fused to ABL, and it makes pairs of the fusion protein stick together and switch each other on.',
      'ABL': 'A tyrosine kinase that normally relays growth and stress signals and is tightly switched off most of the time. In CML it is fused to BCR.',
      'tyrosine kinase': 'A kinase that attaches phosphate to the amino acid tyrosine on other proteins. About 90 human genes encode tyrosine kinases; many drive cancer when stuck on.',
      'ATP': 'Adenosine triphosphate, the cell\'s energy currency. Kinases take its end phosphate and attach it to their target protein.',
      'ATP pocket': 'The cleft in a kinase where ATP binds. Most kinase-blocking drugs sit in this pocket so ATP cannot.',
      'phosphate': 'A small chemical group (one phosphorus, four oxygens). Adding or removing it flips many proteins between on and off.',
      'conformation': 'The 3D shape a protein takes. Many proteins flip between shapes, and a drug can prefer, or lock in, one of them.',
      'activation loop': 'A flexible strand of a kinase that swings open when the kinase is active and folds over when it is inactive.',
      'gatekeeper mutation': 'A mutation at the residue guarding the back of the ATP pocket (T315 in ABL). Swapping in a bulkier amino acid can physically block a drug.',
      'T315I': 'The mutation that swaps threonine for isoleucine at position 315 of ABL. It blocks imatinib, dasatinib, nilotinib and bosutinib; ponatinib and asciminib were designed to get around it.',
      'oncogene': 'A gene that, when mutated or overactive, drives a cell toward cancer. BCR-ABL is a textbook example.',
      'targeted therapy': 'A drug aimed at a specific molecular change that drives a cancer, rather than at all fast-dividing cells.',
      'chemotherapy': 'Traditional cancer drugs that kill all rapidly dividing cells, cancerous or not, which is why they cause hair loss and nausea.',
      'chronic phase': 'The early, stable stage of CML, lasting years, when the marrow overproduces mature white cells but they still work.',
      'blast crisis': 'The final stage of untreated CML, when immature cells (blasts) take over and the disease behaves like an acute leukemia. Usually fatal within months before imatinib.',
      'accelerated phase': 'The middle stage of CML, between chronic phase and blast crisis, when the disease starts to escape control.',
      'hematologic response': 'Blood counts returning to normal. A complete hematologic response means white cells, platelets and the spleen are all back to normal.',
      'cytogenetic response': 'The fall in the share of marrow cells carrying the Philadelphia chromosome under a microscope. "Complete" means none were seen in at least 20 cells examined.',
      'major cytogenetic response': 'No more than 35% of marrow cells still carry the Philadelphia chromosome.',
      'molecular response': 'The fall in BCR-ABL messenger RNA measured by a sensitive PCR test, far below what a microscope can see.',
      'interferon alfa': 'An immune signaling protein given as daily injections. Before imatinib it was the best drug therapy for CML, but caused flu-like symptoms, fatigue and depression.',
      'cytarabine': 'An old chemotherapy drug, given with interferon in the 1990s standard CML regimen.',
      'hydroxyurea': 'An oral chemotherapy pill that lowers white cell counts. It controlled CML symptoms but did not stop the disease progressing.',
      'stem-cell transplant': 'Replacing a patient\'s bone marrow with a donor\'s after high-dose treatment. The only cure for CML before imatinib, but risky: many patients died of complications.',
      'crossover': 'A trial rule letting patients switch to the other arm, usually when their assigned treatment fails. Humane, but it blurs later survival comparisons.',
      'expanded access': 'A program giving an unapproved drug to seriously ill patients outside a trial, sometimes called compassionate use.',
      'GIST': 'Gastrointestinal stromal tumor, a rare gut cancer usually driven by an always-on KIT kinase. Imatinib blocks KIT too and was approved for GIST in 2002.',
      'PDGF receptor': 'A tyrosine kinase receptor for platelet-derived growth factor. It was an early target of the Ciba-Geigy chemistry that produced imatinib.',
      'protein kinase C': 'A family of serine/threonine kinases. The screen that found imatinib\'s ancestor was looking for PKC blockers.',
      'PKC': 'Protein kinase C, a family of kinases. The screen that found imatinib\'s ancestor was looking for PKC blockers.',
      'oral bioavailability': 'The share of a swallowed dose that reaches the bloodstream. Low bioavailability means a drug cannot work as a pill.',
      'allosteric': 'Binding somewhere other than the active site and changing the protein\'s shape from a distance. Asciminib is an allosteric ABL inhibitor.',
      'treatment-free remission': 'Stopping the drug after years of deep response and staying in remission without it. Possible for a minority of CML patients.',
      'section 3(d)': 'A clause added to India\'s Patents Act in 2005 that bars patents on new forms of known substances unless they show significantly better therapeutic efficacy.',
      'evergreening': 'Extending patent protection with follow-on patents on small changes (new salts, crystal forms, doses) to a known drug.',
      'polymorph': 'One of several crystal forms of the same molecule. Different forms can dissolve or store differently and can be patented separately.',
      'ANDA': 'Abbreviated New Drug Application: the FDA filing for a generic, which relies on the original drug\'s safety and efficacy data.',
      'oncogene addiction': 'The idea that some cancers depend so heavily on one driver oncogene that blocking it collapses the tumor.',
      'Ph-positive ALL': 'A form of acute lymphoblastic leukemia that also carries the Philadelphia chromosome. Imatinib and its successors help here too.',
    },
    sections: [
      // 1. COLD OPEN
      {type: 'story', kicker: 'Cold open', title: 'Portland, summer 1998', tocTitle: 'Cold open', html: `
<p>In June 1998 a small clinical trial began at Oregon Health &amp; Science University in Portland, with sister sites at UCLA and the MD Anderson Cancer Center in Houston. The drug had a catalog name, <strong>STI571</strong>, and it came in capsules. The patients all had <strong>chronic myeloid leukemia</strong>, a blood cancer, and all had already tried the best treatment of the day, daily injections of [[interferon alfa]], without enough success. Most knew what came next. Within a few years their disease would probably turn into [[blast crisis]], and most people in blast crisis died within months.</p>
<p>The trial was a [[phase 1]] study, the kind that is meant to answer a narrow question: is this new compound safe, and how much can people take? Nobody expects phase 1 to cure anyone. The first patients got tiny doses, and the doses rose step by step as each group came through safely. The organizers later described how slowly it began: at each site, roughly one new patient a month started on the drug.</p>
<p>Then the doses reached 300 milligrams a day, and something happened that oncologists rarely see in a dose-finding trial. The patients' [[white blood cell]] counts, which had been several times normal, started to fall. Within a few weeks they were normal. Of the 54 patients who eventually received 300 mg or more, 53 had their blood counts return to normal, usually within the first four weeks. Side effects were mostly mild: nausea, muscle aches, puffiness, diarrhea. The researchers never found a dose that was too toxic to give.</p>
<p>The physician running the Portland site, <strong>Brian Druker</strong>, had spent years arguing that this would happen. The compound had been designed by chemists at the Swiss company Ciba-Geigy to block exactly one misbehaving [[protein]], and Druker had shown in the lab that it killed leukemia cells while leaving normal cells alone. But the company that owned it, by then called Novartis, had come close to shelving it more than once. The market was small, the animal studies had been worrying, and few people believed that a pill aimed at one protein could control a cancer.</p>
<p>Three years later the drug, now named Gleevec, was approved in the United States after one of the fastest reviews in the FDA's history, and appeared on the cover of <em>TIME</em> under the headline "There is new ammunition in the war against cancer. These are the bullets." Twenty years later, a patient diagnosed with chronic myeloid leukemia could expect to live nearly as long as someone without it.</p>
<p>This case follows how that happened: the forty-year chain of biology that made the target visible, the chemistry that hit it, the corporate doubts, the patients who organized to get the drug made faster, the trial that made it the standard of care, the cancer's counter-attack, and the price, which rose more than fivefold after launch and became a case study of its own.</p>`},

      // 2. DISEASE FROM ZERO
      {type: 'story', kicker: 'The disease from zero', title: 'A factory that will not stop', html: `
<p>Start with blood. Every drop contains three main kinds of cell. <strong>Red cells</strong> carry oxygen. <strong>Platelets</strong> are cell fragments that plug leaks. <strong>White cells</strong> fight infection. None of them lasts long. Red cells live about four months, and some white cells only a day or two, so the body has to replace them all the time, at a rate of billions of cells a day.</p>
<p>The factory is the [[bone marrow]], the spongy tissue inside large bones such as the hip and breastbone. In it live blood [[stem cell|stem cells]]: cells that can divide to make more of themselves and can also mature into any type of blood cell. The factory is tightly regulated. Hormones and signals from neighboring cells tell the stem cells how many of each type to make, and each cell has internal switches that decide when to divide and when to stop. Most of those switches are [[protein|proteins]].</p>
<p>A [[leukemia]] is a cancer of this factory. Some leukemias, the <em>acute</em> kinds, fill the marrow with immature cells that never grow up; they kill in weeks without treatment. [[CML|Chronic myeloid leukemia]] (CML) is different, at least at first. One stem cell acquires a defect that tells it and all its descendants to keep making white cells of the "myeloid" family (the ones that mop up bacteria). Those cells still mature and still more or less work. There are simply far too many of them.</p>
<h3>How CML shows up</h3>
<p>A typical patient is middle-aged or older; in the US today, half are diagnosed after 67. The first sign is often nothing: an abnormal white count on a routine blood test. Others feel tired, lose weight, sweat at night, or notice a heavy feeling under the left ribs. That is the spleen, which filters blood and swells as it fills with surplus cells. A normal white count is roughly 4,000 to 11,000 cells per microliter; in CML it can be ten or more times higher.</p>
<p>CML is rare. The US now sees about 9,600 new cases a year, around half a percent of all cancers. When Ciba-Geigy was deciding whether to develop a drug for it, the usual estimate was about 4,500 to 5,000 new US cases a year, roughly the population of a small town.</p>
<h3>Three phases</h3>
<p>Left alone, CML runs a predictable course in three phases. The [[chronic phase]] lasts a few years, during which the disease can be controlled with pills that lower the white count. Then, as the leukemic cells pile up more mutations, it moves into an [[accelerated phase]], and finally [[blast crisis]], when immature cells called blasts take over and the disease behaves like an acute leukemia. In the pre-imatinib era, blast crisis was usually fatal within months.</p>
<h3>What treatment looked like in the 1990s</h3>
<ul>
<li><strong>[[hydroxyurea|Hydroxyurea]] or busulfan</strong>: old [[chemotherapy]] pills that brought the white count down and made patients feel better, but did not slow the march to blast crisis much. In a large Italian trial published in 1994, median survival on this conventional chemotherapy was 52 months.</li>
<li><strong>[[interferon alfa|Interferon alfa]]</strong>: an immune signaling protein injected every day. In the same trial it pushed median survival to 72 months, and in a minority of patients it cleared the abnormal cells from the marrow. The cost was months or years of flu-like fever, fatigue and often depression. Doctors later added the chemotherapy drug [[cytarabine]] to it.</li>
<li><strong>[[stem-cell transplant|Bone marrow transplant]]</strong> from a matched donor: the only cure. But many patients were too old or had no matched donor, and a significant share of those transplanted died from the procedure itself.</li>
</ul>
<p>So the choice for a newly diagnosed patient in 1998 was an early gamble on a transplant, or years of daily injections that made them feel ill and bought, on average, an extra year or two. That is the baseline against which to measure what came next.</p>`},

      {type: 'figure', title: 'The blood factory, and what CML does to it', intro: 'Hover or tap a part. The left panel is the factory; the right shows its output.', svg: bloodSvg,
        hotspots: {
          marrow: {title: 'Bone marrow', text: 'The spongy tissue inside large bones where blood is made. A doctor diagnosing CML usually takes a small sample from the back of the hip bone to count cells and look at chromosomes.'},
          stem: {title: 'Blood stem cell', text: 'Each can copy itself or mature into any blood cell. CML begins when one stem cell acquires the Philadelphia chromosome; all of its descendants inherit the fault.'},
          red: {title: 'Red cells', text: 'Carry oxygen. In CML, the flood of white cells crowds the marrow, so patients often become anemic and tired.'},
          white: {title: 'White cells (myeloid)', text: 'Neutrophils and their relatives, which eat bacteria. CML makes far too many of them. In chronic phase they still work; in [[blast crisis]] immature ones take over.'},
          platelets: {title: 'Platelets', text: 'Cell fragments that plug leaks. Counts can be high or low in CML.'},
          healthy: {title: 'Healthy blood', text: 'Mostly red cells, with a few thousand white cells per microliter.'},
          cml: {title: 'Chronic-phase CML', text: 'White counts can be ten or more times normal. The excess cells also collect in the spleen, which swells under the left ribs. Imatinib\'s first visible effect in 1998 was to bring this count back to normal within weeks.'},
        },
        caption: 'Schematic. Proportions of cells are illustrative, not to scale.'},

      // 3. PHILADELPHIA STORY
      {type: 'story', kicker: 'The key insight', title: 'A missing piece in Philadelphia', html: `
<p>The story of Gleevec starts with a microscope, not a drug. In 1960 two researchers in Philadelphia, <strong>Peter Nowell</strong>, a pathologist at the University of Pennsylvania, and <strong>David Hungerford</strong>, a graduate student at the Fox Chase Cancer Center, were looking at the [[chromosome|chromosomes]] of white cells from leukemia patients. A chromosome is a single, very long molecule of [[DNA]] wound tightly around proteins, and human cells have 46 of them in 23 pairs. Just before a cell divides, the chromosomes condense into the X-shaped bodies you can stain and count under a microscope.</p>
<p>In patients with CML, Nowell and Hungerford saw something consistent: one of the smallest chromosomes was even smaller than it should be. It was the first time anyone had tied a specific chromosome abnormality to a specific cancer. The shortened chromosome was named after the city: the <strong>[[Philadelphia chromosome]]</strong>.</p>
<p>For thirteen years, nobody knew where the missing piece had gone. Then <strong>Janet Rowley</strong>, working at the University of Chicago with new staining methods that gave each chromosome a barcode of light and dark bands, found it. The piece had not vanished. The tip of chromosome 22 had swapped places with the tip of chromosome 9. She published the finding in <em>Nature</em> in 1973. It was a [[translocation]], a swap, and the fact that it happened in the same place in patient after patient was a strong hint that the swap itself was doing the damage.</p>
<h3>What the swap does</h3>
<p>Through the 1980s, molecular biologists found the [[gene|genes]] at the break points. On chromosome 9 was <strong>[[ABL]]</strong>, a gene first known from a mouse cancer virus. On chromosome 22, the breaks clustered in a small region that a Dutch-led team including <strong>Nora Heisterkamp</strong> and <strong>John Groffen</strong> named <strong>[[BCR]]</strong>, for "breakpoint cluster region". The translocation welds the front of BCR onto most of ABL, making a new hybrid, a [[fusion gene]]: <strong>[[BCR-ABL]]</strong>.</p>
<p>ABL encodes a [[kinase]], a protein that acts as a molecular switch. Normally ABL spends most of its time switched off. The BCR piece jams it on. In 1990, <strong>George Daley</strong>, <strong>Richard Van Etten</strong> and <strong>David Baltimore</strong> put the BCR-ABL gene into the bone marrow cells of mice and transplanted them. The mice developed a disease that closely resembled human CML. That was the decisive experiment. BCR-ABL was not just a marker that happened to travel with the disease. It was enough, on its own, to cause it.</p>
<p>That made CML unusual. Most cancers accumulate dozens of mutations, and it is hard to say which ones matter. CML in chronic phase looked like a one-fault disease: one gene, one abnormal protein, present in essentially every cancer cell and absent from every normal cell. If you could switch off that protein, you might switch off the disease. The question was whether a drug could hit one kinase without hitting the hundreds of other kinases every cell needs.</p>`},

      {type: 'figure', title: 'The translocation that makes the Philadelphia chromosome', intro: 'Hover or tap each part, from left to right.', svg: transSvg,
        hotspots: {
          chr9: {title: 'Chromosome 9', text: 'One of the medium-sized chromosomes. Near the end of its long arm sits the [[ABL]] gene.'},
          abl: {title: 'ABL gene', text: 'Encodes a [[tyrosine kinase]] that relays signals and is normally kept switched off. The break on chromosome 9 falls just in front of most of the gene, so the working kinase part travels to chromosome 22.'},
          chr22: {title: 'Chromosome 22', text: 'One of the smallest chromosomes. It carries the [[BCR]] gene near its center.'},
          bcr: {title: 'BCR gene', text: 'Named "breakpoint cluster region" because the breaks in CML patients cluster inside it. The front part of BCR helps pairs of the fusion protein stick together, which keeps the kinase on.'},
          breaks: {title: 'Two breaks in one cell', text: 'Both chromosomes break in a single blood stem cell, and the loose ends are rejoined to the wrong partners. It is an accident acquired during life, not something inherited.'},
          der9: {title: 'Derivative chromosome 9', text: 'Chromosome 9 with the tip of 22 attached. It is longer than normal and less important to the disease.'},
          ph: {title: 'Philadelphia chromosome', text: 'What is left of chromosome 22, now carrying the tip of 9. This is the small chromosome Nowell and Hungerford saw in 1960, and Rowley showed in 1973 was the product of a swap.'},
          fusion: {title: 'BCR-ABL fusion gene', text: 'The junction produces a hybrid gene, and the hybrid protein is a kinase stuck in the on position. It is found in over 95% of CML cases, which makes it both the cause of the disease and a near-perfect [[biomarker]].'},
        }},

      {type: 'callout', variant: 'misconception', heading: '"CML is a genetic disease, so it runs in families"', html: `<p>It is genetic in the sense that it is caused by a change in DNA, but the change is <strong>acquired</strong>, not inherited. The translocation happens by accident in one blood stem cell during a person's life. It is not in their egg or sperm cells, and it is not passed to children. The same distinction applies to most cancers: they are diseases of genes in specific tissues, not of the genes people inherit.</p>`},

      // 4. KINASES
      {type: 'story', kicker: 'The science', title: 'Kinases, and the pocket every one of them shares', tocTitle: 'Kinases and the ATP pocket', html: `
<p>To see why a drug for CML seemed so improbable, you need to know what a kinase is and why drug companies distrusted them as targets.</p>
<p>A cell runs on relayed messages. A signal arrives at the surface, and a chain of proteins passes it inward to the nucleus, where the decision to divide is made. Many links in these chains are [[kinase|kinases]]: [[enzyme|enzymes]] whose job is to take a small chemical tag, a [[phosphate]] group, and stick it onto another protein. The tag changes that protein's shape and switches it on (or sometimes off). It then switches on the next protein in line, and so on.</p>
<p>The phosphate has to come from somewhere. It comes from [[ATP]], the molecule cells use as their energy currency. Each kinase has a cleft, the [[ATP pocket]], where ATP docks. The kinase grips ATP, pulls off its end phosphate and hands it to a specific amino acid on the target protein. [[tyrosine kinase|Tyrosine kinases]] such as ABL put it on the amino acid tyrosine.</p>
<p>Here is the problem. Humans have more than 500 kinases, and they all use ATP. Their ATP pockets are built from the same basic fold. In the 1980s, the standard view among pharmacologists was that any molecule small enough to fit in one ATP pocket would fit in most of them, and would therefore jam hundreds of switches at once. There was also a second worry: ATP is present inside cells at high concentrations, so a drug would have to beat a flood of the natural fuel to its seat. Many experts expected any kinase inhibitor to be either useless or poisonous.</p>
<p>What changed their minds was a detail of shape. Kinases are not rigid. They flip between an active shape and one or more inactive shapes, and the inactive shapes differ much more from kinase to kinase than the active one does. A drug that binds the inactive form can exploit those differences. We now know that imatinib does exactly that. In 2000, <strong>John Kuriyan</strong>'s lab at Rockefeller University published the crystal structure of imatinib bound to ABL. The drug fits only when the kinase is in an inactive [[conformation]], with its [[activation loop]] folded in, and it reaches past the ATP site into a neighboring pocket that exists only in that shape. Imatinib does not so much outcompete ATP as catch the switch in the off position and hold it there.</p>
<p>The chemists who made imatinib did not know this when they designed it. They optimized by testing, not by structure. The explanation came afterwards, and it became the basis of the next twenty years of kinase drug design.</p>`},

      {type: 'figure', title: 'Anatomy of a kinase', intro: 'A kinase is two lobes with a cleft between them. Hover or tap each part.', svg: kinaseSvg,
        hotspots: {
          nlobe: {title: 'N-lobe', text: 'The smaller upper half. It closes down over ATP like a lid.'},
          clobe: {title: 'C-lobe', text: 'The larger lower half. It holds the target protein in place for the phosphate transfer.'},
          pocket: {title: 'ATP pocket', text: 'The cleft between the lobes where [[ATP]] docks. Almost every kinase drug on the market binds here. Because all 500-plus human kinases share the basic fold, making a drug that fits only one is the central challenge.'},
          atp: {title: 'ATP', text: 'The energy molecule. Its adenine ring (A) sits deep in the pocket; its three phosphates point toward the opening. The kinase takes the last one.'},
          gate: {title: 'Gatekeeper residue (T315)', text: 'A threonine at the back of the pocket. Imatinib forms a hydrogen bond with it. Swapping it for a bulkier isoleucine, the [[T315I]] mutation, blocks imatinib and most of its successors.'},
          aloop: {title: 'Activation loop', text: 'A flexible strand. When it swings out, the kinase is active. When it folds back in, the kinase is off, and a side pocket opens next to the ATP site. Imatinib binds this off shape.'},
          substrate: {title: 'The next protein in the chain', text: 'The kinase\'s target. When a phosphate lands on one of its tyrosines, it switches on and passes the signal further along, ultimately telling the cell to grow and divide.'},
          phosphate: {title: 'The phosphate hand-off', text: 'The whole job of a kinase: move one [[phosphate]] from ATP onto a protein. BCR-ABL does this all the time, whether or not the cell has been told to grow.'},
        }},

      // 5. MECHANISM
      {type: 'mechanism', title: 'How imatinib locks the switch', intro: 'Step through what BCR-ABL does inside a CML cell, and how imatinib stops it.', svg: mechSvg, steps: [
        {title: 'Normal ABL is a well-behaved switch', text: 'In a healthy cell, the [[ABL]] kinase spends most of its time folded into an inactive shape, with its [[activation loop]] tucked in. It turns on briefly when the cell needs it, then off again.', show: ['cell', 'nucleus', 'kinase', 'aloopI', 'gate', 'off']},
        {title: 'BCR welds on, and the switch sticks', text: 'In CML, the translocation fuses the front of BCR to ABL. The BCR portion makes pairs of the protein clump together and switch each other on. The result, [[BCR-ABL]], is a kinase that is on nearly all the time.', show: ['cell', 'nucleus', 'kinase', 'bcr', 'aloopA', 'gate', 'on'], focus: ['bcr'], pulse: ['on']},
        {title: 'ATP arrives', text: 'An active kinase grabs [[ATP]], the cell\'s energy molecule, in the pocket between its two lobes.', show: ['cell', 'nucleus', 'kinase', 'bcr', 'aloopA', 'gate', 'atp', 'on'], move: {atp: 'translate(-140px, 150px)'}, focus: ['atp']},
        {title: 'A phosphate passes the message on', text: 'ATP docks. The kinase moves its end [[phosphate]] onto a tyrosine on the next signaling protein, which switches on and relays the message to the nucleus: grow, divide, do not die. Over and over, with no brake. That is chronic myeloid leukemia.', show: ['cell', 'nucleus', 'kinase', 'bcr', 'aloopA', 'gate', 'atp', 'substrate', 'phos', 'signal', 'on'], pulse: ['signal', 'phos']},
        {title: 'Even an always-on kinase breathes', text: 'Proteins are not rigid. From moment to moment, BCR-ABL still flickers into its inactive shape: the activation loop folds in and a slot opens beside the ATP pocket. That brief shape is the opening.', show: ['cell', 'nucleus', 'kinase', 'bcr', 'aloopI', 'gate', 'substrate'], dim: ['aloopA'], focus: ['aloopI']},
        {title: 'Imatinib slips into the off shape', text: 'Imatinib is shaped to fit the ATP pocket <em>plus</em> that neighboring slot, which exists only in the inactive form. It anchors by a hydrogen bond to the gatekeeper residue T315 at the back of the pocket.', show: ['cell', 'nucleus', 'kinase', 'bcr', 'aloopI', 'gate', 'drug', 'substrate'], move: {drug: 'translate(-120px, 145px)'}, focus: ['drug']},
        {title: 'Locked off', text: 'With imatinib in place, the kinase is held in its inactive shape and ATP cannot dock. No phosphate, no signal. The leukemia cells, which have come to depend on BCR-ABL for survival, stop growing and die. Normal cells, which do not carry BCR-ABL, mostly carry on. It is a key in a lock that only one kind of cell has.', show: ['cell', 'nucleus', 'kinase', 'bcr', 'aloopI', 'gate', 'drug', 'substrate', 'atp', 'dies'], dim: ['atp'], move: {atp: 'translate(-140px, 150px)'}, focus: ['drug']},
        {title: 'The counter-move: T315I', text: 'A single-letter [[mutation]] can swap the gatekeeper threonine for a bulkier isoleucine. Now imatinib cannot fit or form its anchoring bond, ATP docks again, and the signal restarts. This is the [[T315I]] mutation, and it drove a second and third generation of drugs.', show: ['cell', 'nucleus', 'kinase', 'bcr', 'aloopA', 'gateI', 'atp', 'drug', 'substrate', 'phos', 'signal', 'on'], move: {drug: 'translate(-120px, 145px)'}, dim: ['drug'], focus: ['gateI'], pulse: ['signal']},
      ]},

      {type: 'callout', variant: 'product', heading: 'Like fixing the one root cause, not the thousand symptoms', html: `<p>Most cancer drugs before 2001 were like restarting every server in the data center because one of them was misbehaving: [[chemotherapy]] kills all fast-dividing cells and relies on cancer cells dying first. Imatinib was a patch aimed at the single faulty service. In CML there really was one dominant root cause, a single always-on kinase, and fixing it resolved most of the symptoms. Engineers know how rare, and how satisfying, that is.</p><p><strong>Where the analogy breaks:</strong> you rarely know in advance that a cancer has one root cause, and most do not. Solid tumors usually carry many driver mutations, so a single patch buys months, not decades. And unlike software, the "system" fights back: the cancer evolves around the patch, as the resistance section shows.</p>`},

      // 6. THE CHEMISTS
      {type: 'story', kicker: 'Building the drug', title: 'Chemists in Basel', html: `
<p>While academic labs were decoding BCR-ABL, a pharmaceutical company in Basel, Switzerland, was placing a bet that most of its rivals thought unwise. In 1984, <strong>Alex Matter</strong>, who led oncology research at Ciba-Geigy, set up a program to find drugs that block kinases. Two years later a British biochemist, <strong>Nick Lydon</strong>, started a dedicated effort on [[tyrosine kinase|tyrosine kinases]]. The team grew to include the chemist <strong>Jürg Zimmermann</strong> and the cell biologist <strong>Elisabeth Buchdunger</strong>, who ran the experiments that told the chemists whether each new molecule did what they hoped.</p>
<p>They did not start with BCR-ABL. The first targets were ones with bigger markets. The program screened chemical libraries for molecules that blocked [[protein kinase C]] (PKC), a kinase family then thought important in cancer and inflammation. One hit was a compound from a chemical class called 2-phenylaminopyrimidines. It was a weak, messy [[lead compound]]: it blocked PKC and did little to tyrosine kinases. But it was a starting point.</p>
<p>What followed is textbook medicinal chemistry: make a variant, test it, keep what helps, and repeat, hundreds of times. According to the team's own account, a few changes did most of the work:</p>
<ul>
<li>Adding a <strong>pyridine ring</strong> improved activity in cells.</li>
<li>Adding an <strong>amide group</strong> on the phenyl ring switched on activity against tyrosine kinases, including ABL and the [[PDGF receptor]].</li>
<li>A single extra <strong>methyl group</strong>, which the chemists called a "flag methyl", on the middle ring killed the PKC activity. It is a tiny change, three hydrogens and a carbon, but it twisted the molecule so that it no longer fit PKC.</li>
<li>Finally, a <strong>methylpiperazine</strong> tail made it dissolve in water, which a molecule needs in order to be absorbed from the gut. That gave it [[oral bioavailability]]: it could be a pill.</li>
</ul>
<p>The result, cataloged as <strong>CGP 57148</strong> and later STI571, blocked ABL, the PDGF receptor and a third kinase called KIT, and left most other kinases alone. Buchdunger and Zimmermann, with Druker and Lydon, reported in 1996 that it inhibited the ABL kinase in test tubes and in animals. Being selective for three kinases rather than one later proved to be a gift. KIT turned out to drive a rare gut cancer, [[GIST]], and imatinib was approved for that disease less than a year after its CML approval.</p>
<p>A point that often gets lost in the "rational design" story: the Ciba-Geigy chemists did not have a crystal structure of ABL to design against. They were guided by biology (which kinase mattered) and by test results (which molecule blocked it). The "rational" part was the choice of target. The chemistry was iterative, empirical and slow, which is how most drug discovery still works.</p>`},

      {type: 'custom', title: 'Build the molecule', intro: 'You are a Ciba-Geigy chemist in the early 1990s. At each stage, pick the change that fixes the problem. The meters show the direction of each change, not measured values.', html: '<div class="card" id="molRoot"><div id="molSvg"></div><div id="molProb" style="font:600 16px/1.5 var(--sans);margin:14px 0 10px"></div><div class="opts" id="molOpts"></div><div id="molMsg" class="explain"></div><div id="molMeters" style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:14px"></div><button class="btn" id="molReset" style="margin-top:12px">Start again</button></div>',
        init: (root, api) => {
          let have = {}, stage = 0, meters = [1, 0, 1];
          const names = ['Potency against ABL', 'Selectivity (spares PKC)', 'Works as a pill'];
          const draw = () => {
            root.querySelector('#molSvg').innerHTML = molSvg(have);
            root.querySelector('#molMeters').innerHTML = names.map((n, i) => '<div><div style="font-size:13px;color:var(--ink-2)">' + n + '</div><div style="display:flex;gap:4px;margin-top:4px">' + [0, 1, 2, 3].map(k => '<span style="flex:1;height:10px;border-radius:3px;background:' + (k < meters[i] ? 'var(--il-1)' : 'var(--rule)') + '"></span>').join('') + '</div></div>').join('');
            const opts = root.querySelector('#molOpts');
            if (stage >= STAGES.length) {
              root.querySelector('#molProb').innerHTML = 'You have made CGP 57148, later called STI571 and then imatinib.';
              opts.innerHTML = '';
              return;
            }
            root.querySelector('#molProb').innerHTML = 'Stage ' + (stage + 1) + ' of 4. ' + STAGES[stage].problem;
            opts.innerHTML = Object.keys(FRAGS).filter(k => !have[k]).map(k => '<button data-k="' + k + '">' + FRAGS[k].name + '</button>').join('');
          };
          root.querySelector('#molOpts').onclick = e => {
            const b = e.target.closest('button'); if (!b) return; const k = b.dataset.k, want = STAGES[stage].key, msg = root.querySelector('#molMsg');
            if (k === want) {
              have[k] = true; FRAGS[k].meters.forEach((d, i) => meters[i] = Math.min(4, meters[i] + d)); stage++;
              msg.innerHTML = '<span class="verdict" style="color:var(--good)">Good call.</span>' + FRAGS[k].does + (stage === 4 ? ' Real development took years and hundreds of analogs; the team kept the changes that worked.' : '');
            } else {
              msg.innerHTML = '<span class="verdict" style="color:var(--bad)">Not yet.</span>' + FRAGS[k].does + ' That is useful, but it does not fix the problem in front of you.';
            }
            draw();
          };
          root.querySelector('#molReset').onclick = () => { have = {}; stage = 0; meters = [1, 0, 1]; root.querySelector('#molMsg').innerHTML = ''; draw(); };
          draw();
        }},

      // 7. DRUKER AND THE DOUBTERS
      {type: 'story', kicker: 'The people', title: 'An oncologist who would not take no', tocTitle: 'Druker and the doubters', html: `
<p><strong>Brian Druker</strong> trained as an oncologist in the 1980s at the Dana-Farber Cancer Institute in Boston, where he worked in a lab studying tyrosine kinases and the tools used to detect the phosphate tags they leave. He became convinced that BCR-ABL was the ideal target for a drug, and he began collaborating with Lydon's group at Ciba-Geigy, which had the compounds. In 1993 he moved to Oregon Health &amp; Science University with a single goal: find a BCR-ABL inhibitor that could go into patients.</p>
<p>Lydon sent compounds. Druker tested them against leukemia cells. CGP 57148 stood out. In a 1996 paper in <em>Nature Medicine</em>, Druker, Lydon, Buchdunger, Zimmermann and colleagues showed that it stopped BCR-ABL-driven cells from growing and, in samples from CML patients, cut the number of leukemic colonies by 92 to 98% while leaving normal colonies untouched. That is the result a drug developer dreams of: a large effect on the disease and almost none on healthy tissue.</p>
<h3>Why the company hesitated</h3>
<p>The science looked good. The business case did not, and the timing was bad.</p>
<ul>
<li><strong>The market.</strong> With perhaps 5,000 new US patients a year, CML looked like a tiny market for a company that measured success in billions. The Lasker Foundation's account of the award later given to Druker, Lydon and Sawyers puts it plainly: the potential market seemed small, and management had little enthusiasm for developing the drug further. Vasella's own history of the drug describes how few people inside the company expected it to make money.</li>
<li><strong>The animals.</strong> In 1996, preclinical toxicology in dogs raised alarms. According to Vasella's account, an intravenous formulation caused blood clots at the catheter site, and later studies showed liver damage in dogs. Those who wanted to stop the project, he wrote, had found new ammunition, and it was put on hold for a while. The fix was to go back to an oral formulation, which needed more studies and more time.</li>
<li><strong>The merger.</strong> In 1996 Ciba-Geigy merged with Sandoz to form Novartis, one of the largest corporate mergers of its time. Mergers mean portfolio reviews, and small projects without champions tend to die in them. Lydon left the company soon afterwards.</li>
<li><strong>The skepticism.</strong> Many in the field still doubted that a kinase inhibitor could be selective enough to be safe, and there were worries that blocking a kinase might just select for resistant cells.</li>
</ul>
<p>Druker kept pushing. In the Lasker Foundation's words, he "would not take 'no' for an answer." He lobbied the company to make enough drug for a clinical trial and to finish the required safety studies. The go-ahead came, and in June 1998 the first patient began taking STI571.</p>
<p>Two other names belong in this part of the story. <strong>Charles Sawyers</strong>, at UCLA, and <strong>Moshe Talpaz</strong>, at MD Anderson, ran the other sites in the phase 1 trial. Sawyers would later become the central figure in the story of resistance. And at Novartis, <strong>Daniel Vasella</strong>, the chief executive of the merged company, became an enthusiastic backer once the early data arrived. His book about the drug, <em>Magic Cancer Bullet</em>, is one of the main sources for the company's side of the history.</p>`},

      {type: 'decision', title: 'Kill it?', role: 'You run oncology portfolio review at the newly merged Novartis, 1997', scenario: `A small-molecule kinase inhibitor, CGP 57148, kills CML cells in the lab and spares normal ones. But CML has only about 5,000 new US cases a year, your market research sees a modest product at best, the intravenous form caused clots and liver damage in dog studies, and a freshly merged company is looking for projects to cut. An outside academic, Brian Druker, is lobbying hard for a trial. What do you do?`,
        options: [
          {label: 'Stop the project. The market is too small and the dog toxicity is a real warning sign.', outcome: 'This is the decision most portfolio models would recommend. It saves perhaps tens of millions of dollars in near-term development, and you can defend it: dog liver toxicity has ended many programs that later proved dangerous in people. But it also throws away the one asset in your portfolio with a genetically validated target and a 92–98% kill rate on patient leukemia cells. And if you let the academic take it elsewhere, you may watch a competitor launch it.'},
          {label: 'Out-license it to a small biotech or academic group and keep a royalty.', outcome: 'A reasonable hedge. You shed the cost and keep some upside. The risks are that a small partner lacks the manufacturing scale to supply thousands of patients quickly, and that you lose control of a molecule whose chemistry also hits two other kinases (PDGFR and KIT), with markets you have not yet imagined.'},
          {label: 'Fund a small, cheap phase 1 in CML with an oral formulation, and decide again when there are human data.', outcome: 'This is the "buy information cheaply" option. A phase 1 in a few dozen patients who have run out of options costs little compared with a full program, and CML is unusually easy to measure: a white-cell count responds within weeks. If the drug works, you will know fast. If it fails, you have lost little.'},
          {label: 'Go all in: fund phase 1, 2 and 3 in parallel to reach the market fast.', outcome: 'Bold, and it is roughly what Novartis did once the phase 1 data came in. Doing it before any human data would have meant betting large sums on a compound with an unresolved toxicity signal in a small market. Few boards would sign off on that in 1997.'},
        ],
        reality: 'Novartis kept the project alive but on a short leash: it moved to an oral formulation, completed the toxicology, and allowed a modest phase 1 to start in June 1998. The phase 1 was small and slow, about one new patient a month per site. Once the blood counts started falling at 300 mg, the company switched to maximum speed, scaling up manufacturing and launching large phase 2 trials. The lesson that portfolio managers still repeat: the cheapest thing you can buy in drug development is a well-chosen human experiment in a disease with a fast readout.'},

      // 8. TIMELINE
      {type: 'timeline', title: 'Timeline: from a small chromosome to a standard of care', tocTitle: 'Timeline', events: [
        {year: 1960, title: 'Nowell and Hungerford see the Philadelphia chromosome', kind: 'science', text: 'The first chromosome abnormality consistently tied to a specific cancer.'},
        {year: 1973, title: 'Janet Rowley shows it is a 9;22 translocation', kind: 'science', text: 'Banding stains reveal that the tip of chromosome 22 has swapped with the tip of chromosome 9.'},
        {year: 1984, title: 'BCR breakpoint cluster found; Ciba-Geigy starts kinase program', kind: 'science', text: 'Heisterkamp, Groffen and colleagues map the breaks on chromosome 22 to BCR. At Ciba-Geigy, Alex Matter launches a kinase inhibitor effort.'},
        {year: 1986, title: 'Nick Lydon leads a tyrosine kinase inhibitor program', kind: 'people', text: 'Zimmermann (chemistry) and Buchdunger (biology) join. The starting point is a PKC screen.'},
        {year: 1990, title: 'BCR-ABL alone causes CML in mice', kind: 'science', text: 'Daley, Van Etten and Baltimore show the fusion gene is sufficient to cause a CML-like disease.'},
        {year: 1993, title: 'Druker moves to OHSU to find a BCR-ABL drug', kind: 'people'},
        {year: 1994, date: '1994', title: 'Italian trial: interferon beats chemotherapy', kind: 'clinical', text: 'Median survival 72 months with interferon alfa versus 52 months with hydroxyurea or busulfan. The bar imatinib would have to clear.'},
        {year: 1996, title: 'Nature Medicine paper: CGP 57148 kills CML cells', kind: 'science', text: '92–98% fewer leukemic colonies in patient samples, normal colonies spared.'},
        {year: 1996, date: '1996', title: 'Dog toxicity; Ciba-Geigy and Sandoz merge into Novartis', kind: 'setback', text: 'Clots and liver damage in dog studies put the project on hold. Lydon leaves soon after the merger.'},
        {year: 1998, date: 'Jun 1998', title: 'First patient dosed in phase 1', kind: 'clinical', text: 'OHSU, UCLA and MD Anderson. Doses rise from 25 mg to 1,000 mg across 14 levels.'},
        {year: 1999, date: 'Nov 1999', title: 'Patient petition; Novartis accelerates production', kind: 'people', text: 'Suzan McNamara\'s online petition gathers about 2,000 signatures. Novartis scales up manufacturing.'},
        {year: 2000.35, date: 'May 2000', title: 'Worldwide expanded access program opens', kind: 'clinical', text: 'Eventually 7,380 patients at 106 centers in 34 countries receive imatinib before approval.'},
        {year: 2000.45, date: 'Jun 2000', title: 'IRIS phase 3 begins', kind: 'clinical', text: '1,106 newly diagnosed patients, randomized to imatinib or interferon plus cytarabine.'},
        {year: 2000.7, date: 'Sep 2000', title: 'Crystal structure: imatinib binds the inactive shape', kind: 'science', text: 'Kuriyan\'s lab explains why the drug is so selective.'},
        {year: 2001.1, date: 'Feb 2001', title: 'NDA submitted', kind: 'regulatory', text: 'Orphan drug status was granted in January.'},
        {year: 2001.25, date: 'Apr 2001', title: 'Phase 1 results published in NEJM', kind: 'clinical', text: '53 of 54 patients at 300 mg or more have complete hematologic responses.'},
        {year: 2001.35, date: '10 May 2001', title: 'FDA accelerated approval', kind: 'regulatory', text: 'About ten weeks after submission. Launch price roughly $2,200 a month.'},
        {year: 2001.6, date: 'Aug 2001', title: 'Sawyers\' lab explains relapse: BCR-ABL mutations', kind: 'setback', text: 'Resistant cancers have reactivated the kinase, through point mutations or extra copies of the gene.'},
        {year: 2002.1, date: 'Feb 2002', title: 'Approved for GIST', kind: 'regulatory', text: 'Imatinib also blocks KIT, the driver of most gastrointestinal stromal tumors.'},
        {year: 2002.9, date: 'Dec 2002', title: 'Approved as first treatment for newly diagnosed CML', kind: 'regulatory', text: 'On the strength of IRIS.'},
        {year: 2006, date: 'Jun 2006', title: 'Dasatinib approved for imatinib-resistant CML', kind: 'regulatory', text: 'Bristol Myers Squibb\'s second-generation drug, developed with Sawyers\' lab.'},
        {year: 2007, date: 'Oct 2007', title: 'Nilotinib approved', kind: 'regulatory', text: 'Novartis\'s own second-generation successor, designed from the imatinib-ABL structure.'},
        {year: 2009, title: 'Lasker Award to Druker, Lydon and Sawyers', kind: 'people'},
        {year: 2012, date: 'Dec 2012', title: 'Ponatinib approved, active against T315I', kind: 'regulatory', text: 'A partial clinical hold follows in 2013 over blood clots.'},
        {year: 2013, date: 'Apr 2013', title: 'Blood letter on prices; Indian Supreme Court rejects Glivec patent', kind: 'business', text: 'More than 100 CML experts call prices unsustainable. In India, Novartis v Union of India upholds section 3(d).'},
        {year: 2016, date: 'Feb 2016', title: 'First US generic imatinib', kind: 'business', text: 'Sun Pharma launches. Gleevec sales fall by 29% that year.'},
        {year: 2017, date: 'Mar 2017', title: 'IRIS at 10 years: 83.3% survival', kind: 'clinical'},
        {year: 2021, date: 'Oct 2021', title: 'Asciminib approved: a new binding site', kind: 'regulatory', text: 'Binds ABL\'s myristoyl pocket rather than the ATP site.'},
      ]},

      // 9. PHASE 1
      {type: 'story', kicker: 'The trials', title: 'Phase 1: the blood counts fall', html: `
<p>A [[phase 1]] trial in cancer is usually a grim affair. Patients have run out of options, doses start deliberately low, and the aim is to find the [[dose-limiting toxicity|highest dose people can tolerate]]. Responses are a bonus, and they are rare.</p>
<p>The STI571 trial enrolled 83 patients with chronic-phase CML in whom interferon had failed. They were assigned in turn to one of 14 dose levels, from 25 mg to 1,000 mg a day. CML made the trial unusually easy to read: a blood test shows within weeks whether the white count is falling. And at 300 mg and above, it fell in almost everyone.</p>
<p>The team also looked for a deeper signal. A [[hematologic response]] means blood counts are back to normal. A [[cytogenetic response]] means the Philadelphia chromosome itself is disappearing from the bone marrow when cells are examined under a microscope. That is harder to achieve and a better predictor of long-term survival. Some patients were already showing cytogenetic responses within the first year.</p>
<p>A second study, in 58 patients with [[blast crisis]] or with [[Ph-positive ALL|Philadelphia-positive acute lymphoblastic leukemia]], found responses in more than half, though they often did not last. That was a warning that later turned out to matter: the more advanced the disease, the more mutations the leukemia had accumulated, and the easier it found ways around the drug.</p>
<p>Both papers were published together in the <em>New England Journal of Medicine</em> in April 2001. But the results had leaked out long before, through conference presentations and, crucially, through a new medium: patients on the trial were talking to other patients online.</p>`},

      {type: 'trial', title: 'The phase 1 dose-escalation trial', intro: 'Before you look, predict what happened at the effective doses.',
        design: {name: 'STI571 phase 1 (Druker et al.)', phase: 'Phase 1', blinding: 'Open-label', years: '1998–2000', n: 83, population: 'Chronic-phase CML after interferon failure', randomization: null,
          arms: [{name: 'STI571 by mouth, daily', n: 83, desc: '14 dose levels from 25 to 1,000 mg; 54 got 300 mg or more'}], endpoint: 'Safety, dose, blood and marrow response',
          details: {'Sites': 'OHSU (Druker), UCLA (Sawyers), MD Anderson (Talpaz)', 'Primary aim': 'Safety and tolerated dose. No maximum tolerated dose was found.', 'Response measures': '[[hematologic response]] (blood counts), [[cytogenetic response]] (Ph-positive cells in marrow)', 'Common side effects': 'Nausea, muscle aches, fluid retention (edema), diarrhea: mostly mild'}},
        predict: {q: 'Of the 54 patients who received 300 mg a day or more, how many had their blood counts return to normal (a complete hematologic response)?', options: ['About 10 (roughly 20%, typical for a phase 1 cancer drug)', 'About 27 (half)', '53', 'All 54, and the Philadelphia chromosome vanished in most of them'], answer: 2,
          explain: '53 of 54 had complete hematologic responses, usually within four weeks. The deeper response, loss of the Philadelphia chromosome from the marrow, was less common at this stage: major cytogenetic responses in 17 (31%), complete in 7. Normal blood counts came first; clearing the marrow took longer.'},
        results: [{kind: 'bar', title: 'Responses in the 54 patients on 300 mg or more', subtitle: 'Chronic-phase CML after interferon failure. Druker et al., NEJM 2001.', unit: '%', categories: ['Complete hematologic response', 'Any cytogenetic response', 'Major cytogenetic response', 'Complete cytogenetic response'],
          series: [{name: 'Share of 54 patients', values: [98, 54, 31, 13], notes: ['53 of 54', '29 of 54', '17 of 54', '7 of 54']}], horizontal: true, labelWidth: 230}],
        takeaway: 'Nearly everyone at an effective dose had normal blood counts within weeks. The drug\'s effect was large, fast and easy to measure, which is why the regulators and the company moved so quickly afterwards.'},

      // 10. SUPPLY
      {type: 'story', title: 'Patients organize, and a factory scales', tocTitle: 'Supply and advocacy', html: `
<p>By late 1999, word of the phase 1 results had spread through CML patient communities on the internet. Patients who were not in the trial, or who lived far from Portland, Los Angeles and Houston, wanted in. The drug did not exist in large quantities. Novartis had made enough for small trials. Scaling a new chemical process from kilograms to tons takes time, money and a decision to spend it before the drug is proven.</p>
<p>A CML patient named <strong>Suzan McNamara</strong> started an online petition asking Novartis to make more of the drug. She later told the <em>New York Times</em>: "We were hoping to get 200 names, and in two months before you knew it we had 2,000." According to her account, Druker phoned her on her birthday, 2 November 1999, to say that the company would speed up production. She joined a trial on 1 January 2000 and went into remission. Vasella has said that messages from patients helped persuade him to invest in scaling manufacturing.</p>
<p>Novartis started large [[phase 2]] trials in all three phases of CML, which enrolled 1,027 patients across them, and in May 2000 opened a worldwide [[expanded access]] program. It eventually gave imatinib to 7,380 patients with CML or Philadelphia-positive ALL at 106 centers in 34 countries, bridging the gap until the drug could be approved and sold.</p>
<p>This was a new pattern. HIV activists in the late 1980s had shown that patient pressure could speed drug development and change FDA rules. The CML community showed the same thing could happen in cancer, and could be organized almost entirely online. It also raised a question that every program with a scarce, promising drug now faces: when there is not enough to go around, who gets it?</p>`},

      {type: 'decision', title: 'Not enough drug', role: 'You run clinical operations for STI571, late 1999', scenario: `The phase 1 data are spectacular, and demand has exploded. You have enough drug for the ongoing trials and a planned phase 2 program, but not for every CML patient who is asking. Manufacturing scale-up will take many months. Patients are petitioning, doctors are calling, and journalists are writing. How do you allocate what you have?`,
        options: [
          {label: 'Protect the trials. Every capsule goes to controlled studies until approval.', outcome: 'This gets the cleanest data and the fastest path to approval, which will help the most people in the long run. But it means telling dying patients no while a drug that might save them sits in trial stock, and you will face (fair) accusations of putting a filing ahead of lives. It is also bad for the trials: desperate patients sometimes lie about eligibility to get in.'},
          {label: 'Open broad compassionate use now, first come, first served.', outcome: 'Humane and popular, but first come, first served favors patients with well-connected doctors and internet access, not those with the most need. It can also drain supply from the trials that regulators need, delaying approval for everyone.'},
          {label: 'Prioritize by need: patients in blast crisis first, then accelerated phase, while enrolling chronic-phase patients in large phase 2 trials and expanding access as supply grows.', outcome: 'This tries to satisfy both goals. The sickest patients get drug first, the trials keep enrolling (and are made larger, so more patients get treated inside them), and expanded access widens with manufacturing. The costs are complexity and an uncomfortable fact: blast-crisis patients respond less durably, so drug goes to those who may benefit least.'},
          {label: 'Run a lottery among eligible patients.', outcome: 'A lottery is fair in one sense, and it has been used for scarce drugs (for example some HIV drugs in the early 1990s). But it ignores differences in urgency, and patients and doctors often find it hard to accept.'},
        ],
        reality: 'Novartis did a mix. It enlarged the phase 2 program to more than a thousand patients across all three phases of CML, which put many petitioners inside trials. It opened the worldwide expanded access program in May 2000, eventually treating 7,380 people, and it invested in manufacturing scale-up before approval. The FDA\'s approval in 2001 covered patients in blast crisis, in accelerated phase, and in chronic phase after interferon failure. It was a template, imperfect but influential, for the expanded access programs of later breakthrough drugs.'},

      // 11. REGULATORS
      {type: 'story', kicker: 'The regulators', title: 'Ten weeks at the FDA', html: `
<p>Novartis submitted its [[NDA|New Drug Application]] on 27 February 2001. The FDA had granted STI571 [[orphan drug]] status (for a disease with fewer than 200,000 US patients) a month earlier. The agency approved it on <strong>10 May 2001</strong>, about ten weeks later. At the time that was the fastest approval of a cancer drug in the FDA's history, and it came less than three years after the first patient was dosed.</p>
<p>The approval was an [[accelerated approval]]. That pathway allows the FDA to approve a drug for a serious disease on the basis of a [[surrogate endpoint]], a measurement likely to predict real benefit, on condition that the company later confirms the benefit. Here the surrogates were hematologic and cytogenetic response rates from the three phase 2 studies. Nobody yet had evidence that imatinib made people live longer; that would take years. But the response rates were so far beyond anything seen before, and the disease so well understood, that the FDA judged the risk of approving too early much smaller than the cost of making patients wait.</p>
<p>The initial label covered three groups: CML in blast crisis, in accelerated phase, and in chronic phase after interferon had failed. Newly diagnosed patients, the biggest group, were not yet included. They would have to wait for IRIS.</p>
<p>Less than three weeks after approval, the cover of <em>TIME</em> for 28 May 2001 carried the words "There is new ammunition in the war against cancer. These are the bullets." That was hype by any standard, since most cancers turned out to be far less tractable than CML. But it marked the moment the public idea of a cancer drug began to change, from poison that kills cancer slightly faster than it kills you to a precise tool aimed at the cancer's specific fault.</p>
<p>Later decisions followed quickly: approval for [[GIST]] in February 2002; for newly diagnosed CML in December 2002, based on IRIS; and conversion of the CML approvals from accelerated to full approval once longer follow-up confirmed durable benefit.</p>`},

      {type: 'table', title: 'The phase 2 evidence behind the 2001 approval', intro: 'Three single-arm studies, 1,027 patients, reported to the FDA. Note how the response falls as the disease advances.', columns: ['Study population', 'Patients', 'Hematologic response', 'Major cytogenetic response'],
        rows: [
          ['[[chronic phase|Chronic phase]], after interferon failure', '532', '88% complete hematologic response', '49%'],
          ['[[accelerated phase|Accelerated phase]]', '235', '63%', '21%'],
          ['[[blast crisis|Blast crisis]]', '260', '26%', '13.5%'],
        ],
        caption: 'Source: Cohen, Moses and Pazdur (FDA), The Oncologist 2002. Response definitions differ slightly between phases; figures are as reported in the FDA summary.'},

      {type: 'callout', variant: 'product', heading: 'Expanded access is a beta program with lives at stake', html: `<p>The 7,380-patient expanded access program looks like a staged rollout: ship to an early-access cohort before general availability, learn about real-world use, build demand, and scale the infrastructure (here, a chemical plant) in parallel. The petition was, in effect, a waitlist that went viral.</p><p><strong>Where the analogy breaks:</strong> in software, a beta user who churns loses nothing. Here the people outside the beta could die waiting, and there is no way to "ship to everyone" when the bottleneck is tons of a complex molecule. Access decisions become ethical decisions about who gets a scarce treatment, and the data from expanded access are messier than trial data, so they cannot replace the trials the regulator needs.</p>`},

      // 12. IRIS
      {type: 'story', title: 'IRIS: proving it in newly diagnosed patients', tocTitle: 'IRIS design', html: `
<p>Accelerated approval gave imatinib to patients whose other treatments had failed. The real prize was patients who had just been diagnosed. For them, the [[standard of care]] was interferon alfa plus low-dose cytarabine, and the evidence bar was a head-to-head [[randomized controlled trial|randomized trial]].</p>
<p>The <strong>IRIS</strong> trial (International Randomized Study of Interferon and STI571) started in June 2000. The plan registered on ClinicalTrials.gov called for 850 patients. Demand was so intense that it enrolled <strong>1,106</strong>, split evenly: 553 to imatinib 400 mg a day, 553 to interferon plus cytarabine. Patients were adults aged 18 to 70 with chronic-phase CML diagnosed within the previous six months.</p>
<h3>Design choices worth noticing</h3>
<ul>
<li><strong>[[open-label|Open-label]].</strong> There was no way to blind it. One arm swallowed a pill; the other injected itself daily and ran fevers. Open-label trials risk bias, which is one reason the main measures were laboratory-based (cell counts and chromosome tests) rather than subjective ones.</li>
<li><strong>Crossover.</strong> Patients who failed or could not tolerate their assigned treatment could switch arms under set rules: no complete hematologic response by 6 months, no major cytogenetic response by 2 years, or loss of response. It was the ethical choice, since nobody could justify keeping patients on a failing regimen while an obviously active drug was in the next arm. But [[crossover]] is also why IRIS can never show cleanly how much longer imatinib makes people live: most of the control arm ended up on imatinib.</li>
<li><strong>What was measured.</strong> The registry lists time to treatment failure and overall survival as the main objectives, with response rates and progression to advanced disease as key measures. The first big report, in March 2003, focused on cytogenetic response and freedom from progression, because those were available early.</li>
</ul>
<p>What could have gone wrong? Plenty. Responses to imatinib might have proved short-lived, as they had in blast crisis. Long-term side effects of blocking three kinases for years were unknown. And a cytogenetic response is a surrogate: nobody could be sure that clearing the Philadelphia chromosome from the marrow would translate into longer lives. That uncertainty is exactly why the trial kept following patients for more than a decade.</p>`},

      {type: 'trial', title: 'IRIS: imatinib versus interferon plus cytarabine', intro: 'The trial that made imatinib the first treatment for CML. Predict first.',
        design: {name: 'IRIS', phase: 'Phase 3', blinding: 'Open-label, with crossover', years: '2000–2007 (follow-up to about 11 years)', n: 1106, population: 'Newly diagnosed chronic-phase CML, age 18 to 70', randomization: '1:1',
          arms: [{name: 'Imatinib', n: 553, desc: '400 mg by mouth once daily'}, {name: 'Interferon alfa + cytarabine', n: 553, desc: 'Daily injections plus monthly cytarabine', control: true}], endpoint: 'Treatment failure, survival, cytogenetic response',
          details: {'First report': 'O\'Brien et al., NEJM, March 2003 (median follow-up 19 months)', 'Crossover': 'Allowed on failure or intolerance; 65.6% of the control arm eventually crossed over, after a median of 0.8 years', 'Key measure': '[[major cytogenetic response]]: no more than 35% of marrow cells Ph-positive', 'Long-term reports': '5 years (Druker, NEJM 2006) and 10.9 years (Hochhaus, NEJM 2017)'}},
        predict: {q: 'At 18 months, what share of imatinib patients had a complete cytogenetic response (no Philadelphia chromosome seen in the marrow), compared with the interferon arm?', options: ['About 30% versus 15%: twice as good', 'About 50% versus 35%: a solid improvement', 'About 76% versus 15%: a different league', 'About 95% versus 90%: both work well'], answer: 2,
          explain: '76.2% versus 14.5%. Major cytogenetic response was 87.1% versus 34.7%. Freedom from progression to accelerated phase or blast crisis at 18 months was 96.7% versus 91.5%, and imatinib was much better tolerated. Results this lopsided are why most control patients crossed over.'},
        results: [
          {kind: 'bar', title: 'Responses at 18 months', subtitle: 'Estimated rates, O\'Brien et al., NEJM 2003. All differences P < 0.001.', unit: '%', categories: ['Major cytogenetic response', 'Complete cytogenetic response', 'Free from progression'],
            series: [{name: 'Imatinib', values: [87.1, 76.2, 96.7]}, {name: 'Interferon + cytarabine', values: [34.7, 14.5, 91.5], color: 8}]},
          {kind: 'km', title: 'Overall survival on imatinib in IRIS', subtitle: 'Schematic curve drawn through the reported landmark estimates (89% at 5 years, 83.3% at 10 years), not digitized from the paper. The control arm is not shown because 65.6% crossed over to imatinib.', xLabel: 'Years', unit: '%', yMax: 100, xMax: 11.5,
            series: [{name: 'Imatinib arm (IRIS)', points: [[0, 100], [1, 98], [2, 96], [3, 94], [4, 91.5], [5, 89], [6, 88], [7, 86.8], [8, 85.6], [9, 84.4], [10, 83.3]]}],
            markers: [{x: 5, y: 89, label: '89% at 5 yrs', series: 0}, {x: 10, y: 83.3, label: '83.3% at 10 yrs', series: 0}], note: 'Values between landmarks are interpolated. Deaths from all causes are included; many late deaths were unrelated to CML.'},
        ],
        takeaway: 'Imatinib won on every early measure by a wide margin, and the long follow-up showed the responses lasted: at 10 years, 83.3% of patients who started on imatinib were estimated to be alive. The price of the ethical crossover design is that IRIS alone cannot give a clean randomized survival comparison.'},

      {type: 'callout', variant: 'numbers', heading: 'IRIS by the numbers', html: `<p><strong>850</strong> patients planned, <strong>1,106</strong> enrolled. <strong>87.1%</strong> versus <strong>34.7%</strong> major cytogenetic response at 18 months. <strong>65.6%</strong> of the control arm crossed over to imatinib. <strong>10.9 years</strong> median follow-up in the final report. <strong>83.3%</strong> estimated 10-year survival on imatinib, and <strong>6.9%</strong> of imatinib patients progressed to accelerated phase or blast crisis over the whole trial, against <strong>12.8%</strong> of those randomized to interferon, most of whom switched to imatinib early. Before imatinib, the median patient on the best available drug lived about <strong>six years</strong> after diagnosis.</p>`},

      {type: 'custom', title: 'One hundred patients, three eras', intro: 'Drag the slider to see how many of 100 newly diagnosed patients would be alive after a given number of years, under each era\'s standard treatment.', html: `<div class="card"><label style="display:grid;grid-template-columns:170px 1fr 70px;gap:12px;align-items:center;font-size:15px">Years since diagnosis <input type="range" min="0" max="10" step="0.5" value="5" id="svY" style="accent-color:var(--accent)"><b id="svYo" style="text-align:right"></b></label><div id="svGrid" style="margin-top:12px"></div><div class="caption">Schematic. The first two rows are drawn through the medians and 6-year survival reported in the 1994 Italian trial (conventional chemotherapy: median 52 months, 29% at 6 years; interferon: median 72 months, 50% at 6 years) and stop at 6 years, the extent of that report. The imatinib row is drawn through the IRIS estimates (89% at 5 years, 83.3% at 10 years). Different trials enrolled different patients, so treat the comparison as rough. In a Swedish registry study, patients diagnosed in 2013 were predicted to lose on average fewer than 3 years of life to CML.</div></div>`,
        init: (root) => {
          const interp = (pts, t) => { for (let i = 1; i < pts.length; i++) if (t <= pts[i][0]) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i]; return y0 + (y1 - y0) * (t - x0) / (x1 - x0); } return null; };
          const rows = [
            {name: 'Hydroxyurea or busulfan (1980s)', pts: [[0, 100], [52 / 12, 50], [6, 29]], cls: 'il-2'},
            {name: 'Interferon alfa (1990s)', pts: [[0, 100], [6, 50]], cls: 'il-4'},
            {name: 'Imatinib (IRIS, 2000s)', pts: [[0, 100], [5, 89], [10, 83.3]], cls: 'il-1'},
          ];
          const draw = () => {
            const t = +root.querySelector('#svY').value; root.querySelector('#svYo').textContent = t + ' yr';
            let s = '<svg viewBox="0 0 900 250" style="width:100%;height:auto;display:block">';
            rows.forEach((r, ri) => {
              const y0 = 14 + ri * 80, v = interp(r.pts, t), alive = v == null ? null : Math.round(v);
              s += '<text x="0" y="' + (y0 + 26) + '" class="il-text">' + r.name + '</text>';
              s += '<text x="0" y="' + (y0 + 46) + '" class="il-text-2">' + (alive == null ? 'beyond reported follow-up' : alive + ' of 100 alive') + '</text>';
              for (let i = 0; i < 100; i++) {
                const cx = 290 + (i % 50) * 12, cy = y0 + 14 + Math.floor(i / 50) * 16;
                const c = alive == null ? 'il-bg il-line' : (i < alive ? r.cls : 'il-8s');
                s += '<circle cx="' + cx + '" cy="' + cy + '" r="5" class="' + c + '"/>';
              }
            });
            root.querySelector('#svGrid').innerHTML = s + '</svg>';
          };
          root.querySelector('#svY').addEventListener('input', draw); draw();
        }},

      // 13. RESISTANCE
      {type: 'story', kicker: 'What came next', title: 'The cancer fights back', html: `
<p>Even in 2001, not everyone did well. Patients in blast crisis often responded dramatically and then relapsed within months. What was going on?</p>
<p><strong>Charles Sawyers</strong>'s lab at UCLA looked at the relapsed patients' leukemia cells. In a paper in <em>Science</em> in 2001, led by <strong>Mercedes Gorre</strong>, they reported that in every case they examined, BCR-ABL was active again. In some patients the cancer had made extra copies of the BCR-ABL gene, overwhelming the drug. In others, a single change in the DNA had swapped one amino acid in the kinase for another, so that imatinib no longer fit. The most important of those swaps was at position 315, the gatekeeper at the back of the ATP pocket: threonine replaced by isoleucine, written <strong>[[T315I]]</strong>.</p>
<p>This was bad news and good news at once. Bad, because cancers could clearly evolve around a targeted drug. Good, because the leukemia was still addicted to the same kinase; it had just changed the lock. That meant a different key might work. The idea that a cancer can depend on a single driver, and that blocking it collapses the tumor, became known as [[oncogene addiction]], and resistance mutations turned out to be the strongest evidence for it.</p>
<h3>Second and third generations</h3>
<p>The response was a sequence of new keys, each designed partly around the mutations that beat the previous one.</p>
<ul>
<li><strong>Dasatinib</strong> (Bristol Myers Squibb, approved June 2006). Sawyers's lab, with <strong>Neil Shah</strong>, showed in 2004 that it was far more potent than imatinib and still worked against 14 of 15 imatinib-resistant mutants. Unlike imatinib, it binds ABL in both its active and inactive shapes. The one mutant it could not handle was T315I.</li>
<li><strong>Nilotinib</strong> (Novartis, approved October 2007) was designed using the imatinib-ABL crystal structure to fit the pocket more tightly. It is 10 to 30 times more potent than imatinib in lab tests. It also fails against T315I.</li>
<li><strong>Bosutinib</strong> (Pfizer, approved September 2012) added another option, again without T315I activity.</li>
<li><strong>Ponatinib</strong> (Ariad, approved December 2012) was built specifically to get past T315I. A rigid carbon-carbon triple bond in its middle lets it slide past the bulky isoleucine. It works against every single BCR-ABL mutant tested. But in 2013 the FDA put new trial enrollment on partial hold over blood clots and arterial blockages, and it is now used with careful dosing and patient selection.</li>
<li><strong>Asciminib</strong> (Novartis, approved October 2021) broke the pattern. It does not bind the ATP pocket at all. It binds a different site, the myristoyl pocket, which ABL normally uses to switch itself off, and so acts as an [[allosteric]] inhibitor. Mutations in the ATP pocket, including T315I, do not stop it.</li>
</ul>
<p>Leukemias sometimes answered back again. Patients treated with one drug after another could accumulate two mutations in the same BCR-ABL gene, called compound mutations. Some of these, such as combinations including T315I, can resist even ponatinib. A pattern emerged that later applied to targeted drugs in lung cancer, melanoma and beyond: each new inhibitor selects for the next resistant clone. Oncologists came to talk about it as an arms race.</p>
<p>In practice, most patients in chronic phase never needed the arms race. On first-line imatinib, the majority stayed in remission for years. Resistance matters most for patients diagnosed late, those who respond poorly early on, and those who do not take their pills consistently. That last point matters more than it sounds: a drug taken every day for decades only works if it is taken.</p>`},

      {type: 'custom', title: 'Evolve resistance: pick the next drug', intro: 'You are treating one patient over many years. Each time a resistant clone appears, sequencing tells you the mutation. Choose the next drug. The sensitivity patterns follow published expert guidance, simplified.', html: `<div class="card"><div id="rsSvg"></div><div id="rsStage" style="font:600 16px/1.5 var(--sans);margin:12px 0 6px"></div><div id="rsText" style="font:400 16px/1.6 var(--serif);margin-bottom:10px"></div><div class="opts" id="rsOpts"></div><div id="rsOut" class="explain"></div><div style="margin-top:10px;display:flex;gap:8px;align-items:center"><button class="btn" id="rsNext" disabled>Next &#8594;</button><button class="btn" id="rsReset">Start over</button><span id="rsLog" style="font-size:13px;color:var(--ink-3)"></span></div></div>`,
        init: (root, api) => {
          const NEXT_AFTER = {ima: 'y253h', ima8: 'y253h', das: 'f317l', nil: 'y253h'};
          let round, clone, current, history, cleared, done;
          const stageText = () => {
            if (round === 0) return {h: 'Diagnosis: chronic-phase CML', t: 'The leukemia carries native (unmutated) BCR-ABL. Every approved inhibitor works against it. Which do you start with?', opts: ['ima', 'das', 'nil', 'pon']};
            if (clone === 't315i') return {h: 'Relapse: the T315I gatekeeper mutation', t: 'After years of response, BCR-ABL levels are climbing on ' + DRUGS[current].short + '. Sequencing finds T315I, the bulky isoleucine at the back of the pocket.', opts: ['ima8', 'das', 'nil', 'pon', 'asc']};
            if (clone === 'compound') return {h: 'Relapse again: a compound mutation', t: 'On ' + DRUGS[current].short + ', a clone has picked up a second mutation on the same BCR-ABL gene: T315I plus E255V.', opts: ['pon', 'asc', 'das', 'sct']};
            return {h: 'Rising BCR-ABL: ' + CLONES[clone].label, t: 'Eighteen months in, the PCR test shows BCR-ABL rising on ' + DRUGS[current].short + '. Sequencing finds the ' + CLONES[clone].label + ' mutation.', opts: ['ima8', 'das', 'nil', 'pon']};
          };
          const drawCells = (resistFrac, label) => {
            let s = '<svg viewBox="0 0 900 150" style="width:100%;height:auto;display:block"><rect x="0" y="0" width="900" height="150" rx="14" class="il-bg"/>';
            const n = 120, nRes = Math.round(n * resistFrac), nLeft = Math.round(n * (1 - cleared));
            for (let i = 0; i < n; i++) {
              const cx = 24 + (i % 40) * 21.5, cy = 26 + Math.floor(i / 40) * 26;
              const isRes = i >= n - nRes, alive = i >= n - Math.max(nLeft, nRes);
              s += '<circle cx="' + cx + '" cy="' + cy + '" r="8" class="' + (!alive ? 'il-3s' : isRes ? 'il-2' : 'il-7s st-7') + '"/>';
            }
            s += '<text x="24" y="118" class="il-text">' + label + '</text><text x="24" y="138" class="il-small">orange: resistant clone; pink: sensitive leukemia cells; pale green: replaced by healthy cells</text>';
            return s + '</svg>';
          };
          const render = () => {
            const st = stageText();
            root.querySelector('#rsStage').textContent = done ? 'Outcome' : st.h;
            root.querySelector('#rsText').innerHTML = done ? '' : api.terms(st.t);
            root.querySelector('#rsOpts').innerHTML = done ? '' : st.opts.map(k => '<button data-k="' + k + '">' + DRUGS[k].name + '</button>').join('');
            root.querySelector('#rsLog').textContent = history.length ? 'So far: ' + history.join(' → ') : '';
          };
          const reset = () => { round = 0; clone = 'wt'; current = null; history = []; cleared = 0; done = false; root.querySelector('#rsOut').innerHTML = ''; root.querySelector('#rsNext').disabled = true; root.querySelector('#rsSvg').innerHTML = drawCells(0, 'Newly diagnosed: marrow full of BCR-ABL-positive cells'); render(); };
          root.querySelector('#rsOpts').onclick = e => {
            const b = e.target.closest('button'); if (!b || done) return; const k = b.dataset.k, s = CLONES[clone].sens[k], out = root.querySelector('#rsOut');
            let msg = '';
            if (round === 0) {
              current = k; history.push(DRUGS[k].short); cleared = 0.9;
              if (k === 'pon') msg = 'It works, but ponatinib\'s risk of blood clots and arterial blockages makes it a poor choice for a new patient with ordinary disease; it is reserved for resistance. Your patient responds anyway. ';
              else if (k === 'ima') msg = 'The classic choice: decades of safety data, cheap as a generic, and most patients do well. ';
              else msg = 'A second-generation drug gives faster, deeper molecular responses than imatinib, at the cost of different side effects (nilotinib raised cardiovascular events and glucose in its big trial). Whether that translates into longer survival has been hard to show. ';
              msg += 'Blood counts normalize and the Philadelphia chromosome fades from the marrow.';
              clone = NEXT_AFTER[k] || 'y253h';
              if (k === 'pon') clone = 'compound';
              root.querySelector('#rsSvg').innerHTML = drawCells(0.02, 'In remission, but a tiny resistant clone is hiding');
              out.innerHTML = '<span class="verdict" style="color:var(--good)">Remission.</span>' + api.terms(msg);
              root.querySelector('#rsNext').disabled = false; round = 1; return;
            }
            if (k === 'sct') {
              out.innerHTML = '<span class="verdict" style="color:var(--good)">A real option.</span>' + api.terms('For leukemia that resists every inhibitor, a donor [[stem-cell transplant]] is still the one treatment that does not depend on the kinase at all: the donor\'s immune cells attack the leukemia. It is risky, and some patients die of complications, but it can cure. Clinical trials of newer drugs and combinations are the other route.');
              done = true; history.push('transplant'); render(); root.querySelector('#rsNext').disabled = true; return;
            }
            if (s === 2) {
              history.push(DRUGS[k].short); current = k; cleared = 0.85;
              const nextClone = clone === 't315i' ? 'compound' : 't315i';
              msg = DRUGS[k].name + ' still works against this mutant. The resistant clone shrinks. ';
              if (k === 'pon' && clone !== 't315i') msg += 'It works, but you have spent your T315I option early, and exposed the patient to ponatinib\'s vascular risk sooner than necessary. ';
              if (clone === 't315i' && k === 'asc') msg += 'Asciminib binds a different pocket altogether, so the gatekeeper mutation does not matter; the FDA label includes a higher dose for T315I. ';
              if (clone === 't315i' && k === 'pon') msg += 'Ponatinib\'s triple bond slides past the bulky isoleucine. ';
              clone = nextClone;
              root.querySelector('#rsSvg').innerHTML = drawCells(0.02, 'Response again. But evolution has not stopped');
              out.innerHTML = '<span class="verdict" style="color:var(--good)">Response.</span>' + msg;
              root.querySelector('#rsNext').disabled = false;
            } else if (s === 1) {
              out.innerHTML = '<span class="verdict" style="color:var(--warn)">Partial.</span>' + (clone === 'compound' ? 'Asciminib binds a different pocket, so it is a reasonable thing to try, but evidence for any single drug against compound mutants like this is limited. For a patient who has already failed several inhibitors, doctors would also discuss a transplant or a clinical trial.' : 'A higher dose may squeeze out a little more effect against this mutant, but guidance prefers switching to a drug that binds it well.');
              root.querySelector('#rsSvg').innerHTML = drawCells(0.35, 'Resistant clone held back, not cleared');
            } else {
              out.innerHTML = '<span class="verdict" style="color:var(--bad)">Progression.</span>' + DRUGS[k].name + ' cannot bind the ' + CLONES[clone].label + ' mutant well. The resistant clone expands. Try another option.';
              root.querySelector('#rsSvg').innerHTML = drawCells(0.6, 'The resistant clone is taking over the marrow');
            }
          };
          root.querySelector('#rsNext').onclick = () => { root.querySelector('#rsOut').innerHTML = ''; root.querySelector('#rsNext').disabled = true; round++; cleared = 0.8; root.querySelector('#rsSvg').innerHTML = drawCells(0.2, 'Years later: a resistant clone is growing'); render(); };
          root.querySelector('#rsReset').onclick = reset;
          reset();
        }},

      {type: 'table', title: 'Six keys for one lock', columns: ['Drug', 'Company', 'US approval', 'How it binds', 'Beats T315I?', 'Notes'],
        rows: [
          ['Imatinib (Gleevec)', 'Novartis', 'May 2001', 'ATP pocket, inactive shape only', 'No', 'Also blocks KIT and PDGFR; generic since 2016'],
          ['Dasatinib (Sprycel)', 'Bristol Myers Squibb', 'Jun 2006', 'ATP pocket, active and inactive shapes', 'No', 'Active against 14 of 15 imatinib-resistant mutants in the 2004 lab study'],
          ['Nilotinib (Tasigna)', 'Novartis', 'Oct 2007', 'ATP pocket, inactive shape, tighter fit', 'No', 'Designed from the imatinib-ABL structure; more cardiovascular events than imatinib in ENESTnd'],
          ['Bosutinib (Bosulif)', 'Pfizer', 'Sep 2012', 'ATP pocket', 'No', ''],
          ['Ponatinib (Iclusig)', 'Ariad (now Takeda)', 'Dec 2012', 'ATP pocket; triple bond slips past the gatekeeper', 'Yes', 'Blocked by some compound mutations; blood-clot risk led to a 2013 partial clinical hold'],
          ['Asciminib (Scemblix)', 'Novartis', 'Oct 2021', '[[allosteric]]: the myristoyl pocket, not the ATP site', 'Yes (higher dose)', 'Beat investigator-chosen first-line drugs on molecular response in ASC4FIRST; FDA accelerated approval for newly diagnosed patients, Oct 2024'],
        ],
        caption: 'Approval dates from FDA Drugs@FDA records. Binding descriptions from Schindler 2000, Shah 2004, O\'Hare 2009 and the asciminib label. "Beats T315I" refers to the single mutation; compound mutations are a separate problem.'},

      {type: 'callout', variant: 'product', heading: 'An arms race with an adaptive adversary', html: `<p>Resistance looks like security work. You ship a defense (the drug), the adversary probes for the one change that gets around it (a mutation), you patch (a new drug), and it probes again. Sequencing the relapsed leukemia is reading the attacker's exploit, and the second- and third-generation drugs were patches written against known exploits. As in security, the best defense is layered and early: deep, fast responses leave fewer surviving cells to evolve.</p><p><strong>Where the analogy breaks:</strong> the adversary is not intelligent. It is billions of cells mutating at random, and selection does the searching. You cannot hot-fix a molecule. Each patch took years and a new round of trials. And every patch has its own side effects in a human body, so "just run all the patches at once" is not free, as ponatinib\'s blood clots showed.</p>`},

      // 14. MONEY
      {type: 'story', kicker: 'The money', title: 'From "too small to matter" to $4.7 billion a year', tocTitle: 'Sales and pricing', html: `
<p>Novartis launched Gleevec in the US at about <strong>$2,200 a month</strong>, or roughly <strong>$26,000 a year</strong> (some accounts round the figure up to about $30,000), in 2001 dollars. That was in the same range as a year of interferon, the drug it replaced. Novartis also set up patient assistance programs from the start, which comes up again below.</p>
<p>The forecast of a small market was wrong for reasons that are obvious in hindsight. First, patients stopped dying. A drug for a disease that kills in five years treats each patient for five years. A drug that turns it into a chronic condition treats each patient for decades, so the number of people on treatment, the <em>prevalence</em>, rises every year even if new cases stay flat. The 2013 expert letter in <em>Blood</em> estimated that 1.2 to 1.5 million people worldwide were living with CML. Second, the drug worked in other diseases: [[GIST]], [[Ph-positive ALL|Philadelphia-positive ALL]] and a handful of rare disorders driven by the other kinases it blocks. Third, Novartis kept raising the price.</p>
<p>Company filings tell the story. Worldwide sales (the chart below) passed $1 billion in 2003, $3 billion in 2007, and plateaued at around $4.7 billion from 2011 to 2015. Meanwhile, the US price rose. According to the <em>Blood</em> letter it was about $92,000 a year in 2012, more than three times the launch price, over a period when the cost of developing the drug had long since been recovered and the number of patients had grown. A 2016 commentary in the <em>ASCO Post</em> put the US price at $132,000 in 2014 and about $146,000 in 2016.</p>
<p>The rise was not unique to Gleevec. When dasatinib and nilotinib arrived, they were priced above imatinib, and imatinib rose toward them. Competition in US oncology drug pricing often did not push prices down; newer drugs set a higher reference point, and older ones moved up to match. In 2012, all five CML inhibitors on the US market cost between about $92,000 and $138,000 a year.</p>
<h3>The doctors' letter</h3>
<p>In April 2013, more than 100 CML specialists from around the world published a commentary in <em>Blood</em>, the leading hematology journal, titled "The price of drugs for chronic myeloid leukemia (CML) is a reflection of the unsustainable prices of cancer drugs." It was unusual for so many prominent doctors to criticize the pricing of drugs they prescribed and had helped to develop. They pointed out that the same drug cost far less in Europe (in the UK, about a third of the US price), that many US patients with insurance faced large out-of-pocket costs, and that high prices lead to patients skipping doses, which in CML leads to resistance. They argued for lower prices and for policies that would allow them.</p>
<p>The industry's standard answer is that prices must pay for the failures as well as the successes, and that a drug which gives decades of life is worth a great deal. Both points have force. The <em>Blood</em> letter's reply was that the Gleevec price had tripled long after its development cost had been paid back. The explorer below lets you test the "value" argument yourself.</p>`},

      {type: 'chart', title: 'Gleevec/Glivec worldwide sales', chart: {kind: 'line', title: 'Annual worldwide net sales', subtitle: 'US dollars, company-reported, as published in Novartis annual reports (Form 20-F)', unit: '$B',
        series: [{name: 'Gleevec/Glivec', points: [[2002, 0.61], [2003, 1.13], [2004, 1.63], [2005, 2.17], [2006, 2.55], [2007, 3.05], [2008, 3.67], [2009, 3.94], [2010, 4.27], [2011, 4.66], [2012, 4.68], [2013, 4.69], [2014, 4.75], [2015, 4.66], [2016, 3.32], [2017, 1.94], [2018, 1.56]]}],
        annotations: [{x: 2007, label: 'Nilotinib (Tasigna) launches', dy: 200}, {x: 2016, label: 'US and EU exclusivity lost', dy: 150}], xTicks: [2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018],
        note: '2001 sales were reported in Swiss francs (CHF 257 million in under 8 months) and are omitted. From 2007 Novartis also sold its own successor, nilotinib (Tasigna), a newer molecule with a longer patent life; its sales are not included.'},
        takeaway: 'A drug once forecast to be a small product became one of the best-selling cancer drugs in the world, mostly because patients lived, stayed on it for years and the price rose. Sales fell sharply after 2016 as generics arrived.'},

      {type: 'chart', title: 'What a year of imatinib cost in the US', chart: {kind: 'line', title: 'US annual price of Gleevec, then generic imatinib', subtitle: 'Thousands of US dollars per year, nominal (not inflation-adjusted). Reported list-type prices, not net prices after rebates.', unit: '',
        series: [{name: 'Gleevec (brand)', label: false, points: [[2001, 26], [2012, 92], [2014, 132], [2016, 146]]}, {name: 'Generic, cash price via Cost Plus Drug Co.', short: 'Generic (Cost Plus)', points: [[2023, 0.56]], color: 3, label: false}],
        annotations: [{x: 2013, label: 'Blood letter', dy: 120}, {x: 2016, label: 'Sun generic at near-brand price', dy: 16}], xTicks: [2001, 2005, 2010, 2015, 2020, 2023],
        note: 'Sources: 2001 and 2012 from the 2013 Blood commentary; 2014 and 2016 from ASCO Post 2016; generic cash price of about $564 a year from ASCO Post 2023. Lines between points are straight-line guides, not annual data.'},
        takeaway: 'Nominal price rose more than fivefold in 15 years. The first generic, launched by Sun Pharma in February 2016 with six months of exclusive rights, was priced only a little below the brand. Real price competition arrived later, as more generics entered and cash-price pharmacies undercut the supply chain.'},

      {type: 'explorer', title: 'Cost per year of life: test the value argument', intro: 'The defense of a high price is value: a drug that gives decades of life is worth a lot. Set your own assumptions. This is a toy: it ignores discounting, quality of life, other medical costs and rebates.', inputs: [
        {id: 'price', label: 'Annual price (thousand $)', min: 1, max: 150, value: 92, fmt: v => '$' + v + 'k'},
        {id: 'years', label: 'Years on the drug', min: 1, max: 30, value: 20, fmt: v => v + ' yrs'},
        {id: 'gain', label: 'Life-years gained vs the old treatment', min: 1, max: 25, value: 12, fmt: v => v + ' yrs'},
        {id: 'wtp', label: 'Your willingness to pay per life-year (thousand $)', min: 20, max: 300, step: 10, value: 150, fmt: v => '$' + v + 'k'}],
        compute: (v) => {
          const total = v.price * v.years, per = total / v.gain, ok = per <= v.wtp;
          const maxPrice = v.wtp * v.gain / v.years;
          return 'Total drug spending per patient: <b>$' + (total >= 1000 ? (total / 1000).toFixed(2) + ' million' : total.toFixed(0) + 'k') + '</b>. Cost per life-year gained: <b>$' + per.toFixed(0) + 'k</b>, which is ' + (ok ? '<b style="color:var(--good)">within</b>' : '<b style="color:var(--bad)">above</b>') + ' your threshold of $' + v.wtp + 'k. At your threshold, the highest annual price you would accept is about <b>$' + maxPrice.toFixed(0) + 'k</b>.<br><span style="font-size:15px;color:var(--ink-2)">Notice the trap: the better the drug works, the longer patients take it, so total spending grows with success. A price that is "cost-effective" per patient can still be unaffordable across a growing population of more than a million people worldwide. There is no official US threshold; cost-per-QALY analyses usually use quality-adjusted years, which would make these numbers worse.</span>';
        }},

      {type: 'decision', title: 'Set the launch price', role: 'You are on the Novartis pricing committee, spring 2001', scenario: `Gleevec is about to be approved. Interferon, the current standard, is itself an expensive daily injection, and payers will compare you with it. Your drug is much better, is a pill, and will be taken for years. The market is small but the press attention is enormous, and you know many patients in poorer countries cannot pay anything. What do you do?`,
        options: [
          {label: 'Price close to interferon (about $26,000 a year) and launch free-drug programs for patients who cannot pay.', outcome: 'This is close to what happened. It avoids a public fight at launch, makes the drug easy for payers to accept, and still leaves room for large revenues if use grows. It also sets a low anchor that you may later want to raise, which invites criticizm.'},
          {label: 'Price on value: $60,000 or more, reflecting years of life gained.', outcome: 'Defensible in economic terms, and later drugs launched far higher. But in 2001, with a drug the public saw as a medical miracle and a company that had talked about a small market, a high price would have made headlines. Payers had no long-term survival data yet, so a value claim was hard to prove.'},
          {label: 'Price low (under $10,000) to maximize access and goodwill.', outcome: 'It would have made Gleevec a symbol of responsible pricing and helped patients without insurance. It would also have set a low reference price for every targeted cancer drug that followed. Investors and your own R&D budget holders would have asked why you left so much value on the table.'},
          {label: 'Tier prices by country income, with a high US price subsidizing low prices elsewhere.', outcome: 'Tiered pricing is standard practice now, and Gleevec helped pioneer it through donation programs. The catch is leakage (cheap drug flowing back into rich markets) and the political awkwardness of Americans paying the most.'},
        ],
        reality: 'Novartis launched at about $2,200 a month, around $26,000 a year, near the price of interferon. It then raised the US price step by step, to about $92,000 in 2012 and about $146,000 by 2016. In parallel it ran patient assistance programs. Its Glivec International Patient Assistance Program, run with the Max Foundation from 2001, supplied the drug free in more than 70 lower-income countries; Novartis\'s own filings reported more than 20,000 patients on free drug by 2008. Both halves of that strategy are part of the Gleevec legacy.'},

      {type: 'story', title: 'India, patents and the generic endgame', tocTitle: 'India and generics', html: `
<p>The fiercest fight over Gleevec happened in India. Until 2005, Indian law allowed patents on processes for making a drug but not on the drug itself, so Indian companies were free to make copies of imatinib. Novartis had applied in 1998 for an Indian patent on the specific crystal form of imatinib mesylate used in the pills, the beta-crystalline [[polymorph]]. When India changed its law in 2005 to comply with World Trade Organization rules, it added a clause, <strong>[[section 3(d)]]</strong>, which said that a new form of a known substance cannot be patented unless it shows significantly enhanced "efficacy".</p>
<p>The Indian patent office rejected Novartis's application in 2006. Novartis challenged the constitutionality of section 3(d) and lost in the Madras High Court in 2007; an appeals board rejected the application again in 2009. On <strong>1 April 2013</strong>, in <em>Novartis AG v Union of India</em>, the Supreme Court of India upheld the rejection. The judges read "efficacy" as therapeutic efficacy. The beta form's roughly 30% better absorption (bioavailability) was not enough; Novartis had not shown that it worked better for patients. The court framed the ruling as a guard against [[evergreening]], extending monopolies through small changes to known drugs.</p>
<p>Price was the backdrop. By one widely cited comparison, Glivec in India cost about $2,666 per patient per month, against about $177 to $266 for generic versions. Novartis, for its part, pointed out that its assistance program gave the drug free to the large majority of Indian patients on Glivec: about 16,000 people by 2013, according to the company. Critics answered that donation depends on the donor's goodwill and does not reach everyone, which is exactly what competition is meant to fix. Both sides saw the ruling as a signal to the whole industry, and they were right. It is still the leading case on how far a country can go in limiting follow-on patents on medicines.</p>
<h3>Generics in the US</h3>
<p>In the US, the key imatinib patent expired in July 2015. The first generic, from Sun Pharma, launched about six months later, in <strong>February 2016</strong>, with 180 days of exclusive rights as the first company to file an [[ANDA]]. With only one competitor, Sun priced it close to the brand. Real price competition came only as more generic makers entered. By 2023, a cash-price pharmacy, the Mark Cuban Cost Plus Drug Company, was selling generic imatinib for about $47 a month, roughly $564 a year, which may be less than an insured patient's co-pay. Novartis's Gleevec sales fell from $4.7 billion in 2015 to $1.9 billion in 2017.</p>
<p>That fall is the system working as designed: a period of monopoly pricing to reward invention, then cheap copies for everyone. The argument is about the size of the reward, how it rose during the monopoly, and who could not get the drug while it lasted.</p>`},

      {type: 'callout', variant: 'whatif', heading: 'What if Ciba-Geigy had killed it in 1996?', html: `<p>It came close. If the dog toxicity had ended the project, BCR-ABL would still have been a validated target, and someone would probably have made an inhibitor eventually. Academic groups had early compounds, and other companies were starting kinase programs. But "eventually" could have meant five or ten more years. At the pre-imatinib death rate, that would have meant many CML deaths that did not need to happen. It would also have delayed the proof that a kinase inhibitor could be safe and selective, the proof that unlocked investment in the dozens of kinase drugs that followed for lung cancer, breast cancer, melanoma and more. Some of the biggest effects of a first-in-class drug are on the programs it makes possible for others.</p>`},

      // 15. LEGACY
      {type: 'story', kicker: 'Legacy', title: 'The template, and its limits', html: `
<p>Gleevec is often called the first targeted cancer drug. Strictly, it was not. Tamoxifen (1970s) targets the estrogen receptor in breast cancer, and trastuzumab (Herceptin, 1998) is an antibody against HER2. But imatinib was the first drug deliberately designed as a [[small molecule]] to block the specific abnormal protein that causes a cancer, and the first to show how well that could work. It set a template that the industry has followed ever since:</p>
<ol>
<li><strong>Find the driver.</strong> Identify a genetic change that causes the cancer, ideally with experiments showing it is enough to cause the disease.</li>
<li><strong>Make a selective inhibitor.</strong> Block the abnormal protein while sparing its relatives.</li>
<li><strong>Select patients with a test.</strong> Treat only patients whose tumors carry the change. For CML that was easy, since nearly every case is Philadelphia-positive; for later drugs, a [[companion diagnostic]] became part of the approval.</li>
<li><strong>Measure response early and precisely.</strong> Use a [[biomarker]] (here the Philadelphia chromosome, later BCR-ABL levels measured by PCR) to show the drug is hitting its target, and use that to move fast with regulators.</li>
<li><strong>Expect resistance, and plan the next drug.</strong> Sequence relapsed tumors and design successors around the mutations.</li>
</ol>
<p>That playbook produced EGFR inhibitors for a subset of lung cancers, ALK inhibitors, BRAF inhibitors in melanoma, and dozens more. By the 2020s, the FDA had approved dozens of small-molecule kinase inhibitors. Cancers came to be classified by their molecular drivers as well as by the organ where they started, and some drugs were approved for any tumor carrying a given mutation, regardless of where in the body it arose.</p>
<h3>Paradigm or anomaly?</h3>
<p>Soon after the launch, some researchers asked whether CML was a paradigm or an anomaly. Their point was that chronic-phase CML is unusually simple. One driver, present in every cancer cell, early in the disease, before many other mutations accumulate. Most solid tumors are diagnosed later and carry many drivers. When the same approach was tried in them, responses were often dramatic but lasted months, not decades, because resistant clones were already present. Imatinib itself shows the gradient: durable in chronic phase, short-lived in blast crisis.</p>
<p>So the honest legacy is double. Imatinib proved the principle, and CML's result remains one of the best in oncology. It also set expectations that most later targeted drugs could not meet, and the response to that, combinations, earlier treatment, immunotherapy, is much of the story of cancer medicine since.</p>
<h3>Can patients stop?</h3>
<p>One more question emerged as patients lived for decades: do they have to take the pill forever? In the French STIM trial, published in 2010, patients who had had undetectable BCR-ABL for at least two years stopped imatinib. About 61% relapsed, mostly within six months, and all of those responded again when they restarted it. The rest stayed in remission without treatment. [[treatment-free remission|Treatment-free remission]] is now an established goal for a subset of patients, and it raises an interesting question for a business built on chronic therapy: the best outcome for the patient is to stop buying the drug.</p>
<h3>The people</h3>
<p>Druker, Lydon and Sawyers shared the 2009 Lasker-DeBakey Clinical Medical Research Award. Buchdunger, Zimmermann and Matter, whose chemistry and biology made the molecule, appear in fewer headlines. Nowell, Hungerford, Rowley, Heisterkamp, Groffen, Daley, Van Etten and Baltimore did the basic science decades before anyone could use it, most of it paid for by public research funding with no drug in view. So did Suzan McNamara and the patients who signed her petition. The chain of people is long, and most of them never worked on a drug.</p>`},

      {type: 'callout', variant: 'lesson', heading: 'The deepest lesson: target validation is everything', html: `<p>Imatinib's success was set up by <strong>thirty years of biology</strong> before any chemist touched it: a visible chromosome defect (1960), its mechanism (1973), the fusion gene (1980s) and proof that the fusion alone causes the disease (1990). Few drug targets have ever been this well validated. Most drugs fail in trials because the target turns out not to matter enough in people, not because the chemistry fails. When the target is right, even an empirically optimized molecule with a modest market forecast can transform a disease.</p>`},

      {type: 'callout', variant: 'product', heading: 'A reference implementation, not a platform', html: `<p>Gleevec was not a [[platform]] in the mRNA or antibody sense. It did not produce a family of products from a reusable technology. What it produced was a <strong>reference implementation</strong>: a proof that a pattern (driver, selective inhibitor, biomarker, fast approval, next generation for resistance) works end to end. Like the first app that shows a new API is usable, it lowered the perceived risk for everyone who followed, which is why kinase programs multiplied across the industry after 2001.</p><p><strong>Where the analogy breaks:</strong> in software, once the pattern is proven, each new implementation is mostly engineering. In biology, each new target has to be validated again in people. Every "Gleevec for X" still needed a driver as dominant as BCR-ABL, and most cancers do not have one.</p>`},

      // QUIZ
      {type: 'quiz', title: 'Check yourself', questions: [
        {q: 'What is the Philadelphia chromosome?', options: ['An extra copy of chromosome 22 inherited from a parent', 'A shortened chromosome 22 created by a swap with chromosome 9 in one blood stem cell', 'A virus that inserts into chromosome 9', 'A chromosome found in all white blood cells of healthy people'], answer: 1, explain: 'Rowley showed in 1973 that it results from a reciprocal 9;22 translocation. It is acquired in one stem cell, not inherited.'},
        {q: 'Why did many experts in the 1980s doubt that a kinase inhibitor could be a good drug?', options: ['All kinases share a similar ATP pocket, so a drug might block hundreds of them and be toxic', 'Kinases are only found outside cells', 'Kinases cannot be made in a lab', 'ATP is too rare in cells to matter'], answer: 0, explain: 'The shared ATP pocket was the core worry, plus the high level of ATP a drug would have to compete with. Imatinib got around it by binding an inactive shape that differs more between kinases.'},
        {q: 'Imatinib works mainly by…', options: ['Killing all fast-dividing cells', 'Stimulating the immune system to attack leukemia cells', 'Holding the BCR-ABL kinase in its inactive shape so ATP cannot bind', 'Repairing the translocation in the DNA'], answer: 2, explain: 'The 2000 crystal structure showed imatinib binds ABL only in the inactive conformation, occupying the ATP site and a neighboring pocket.'},
        {q: 'The FDA\'s 2001 approval was an accelerated approval. What did that mean here?', options: ['It was approved on survival data from IRIS', 'It skipped phase 1', 'It was approved only for newly diagnosed patients', 'It was approved on hematologic and cytogenetic response rates, surrogate endpoints, with confirmation to follow'], answer: 3, explain: 'The approval rested on response rates in three single-arm phase 2 studies. Survival data came years later.'},
        {q: 'IRIS allowed patients to cross over between arms. What is the main downside for interpreting the results?', options: ['It made the trial unblinded', 'It reduced the number of patients enrolled', 'It makes a clean randomized survival comparison impossible, because most control patients ended up on imatinib', 'It forced the use of placebo'], answer: 2, explain: '65.6% of the interferon arm crossed over. That is why the 10-year analysis focused on the imatinib arm alone.'},
        {q: 'A patient relapses on imatinib, and sequencing finds T315I. Which drug is most likely to work?', options: ['Dasatinib', 'Nilotinib', 'A higher dose of imatinib', 'Ponatinib or asciminib'], answer: 3, explain: 'T315I blocks imatinib, dasatinib, nilotinib and bosutinib. Ponatinib was designed to get past it, and asciminib binds a different site entirely.'},
        {q: 'Why did a drug for a "small market" end up selling $4.7 billion a year?', options: ['Patients lived for decades on daily treatment, the drug worked in other cancers such as GIST, and the price rose several times over', 'CML became much more common', 'It was used off-label for common cancers', 'It was sold over the counter'], answer: 0, explain: 'Prevalence grew because patients survived, new indications were added, and the US price went from about $26,000 to over $120,000 a year.'},
        {q: 'What did India\'s Supreme Court decide in Novartis v Union of India (2013)?', options: ['That imatinib could not be sold in India', 'That Novartis had to give the drug away', 'That all cancer drugs are exempt from patents', 'That the beta-crystalline form was not patentable under section 3(d), because better absorption was not shown to mean better therapeutic efficacy'], answer: 3, explain: 'The court read "efficacy" as therapeutic efficacy and upheld the rejection, a landmark against evergreening.'},
        {q: 'Why is CML sometimes called "an anomaly" rather than a template for all cancers?', options: ['It is caused by a virus', 'It is the only cancer treated with pills', 'In chronic phase it is driven by a single dominant oncogene present in every cancer cell, which most solid tumors are not', 'It never becomes resistant'], answer: 2, explain: 'One early, dominant driver made CML unusually suited to a single targeted drug. Most solid tumors carry many drivers and resistant clones, so responses are shorter.'},
        {q: 'In 1997, what made a small phase 1 trial in CML an unusually good bet for Novartis?', options: ['The target was genetically validated, the drug was selective in patient cells, and response could be measured within weeks with a blood test', 'Phase 1 trials in CML were required by law', 'The drug had already been approved in Europe', 'There was no competition for patients'], answer: 0, explain: 'A validated target plus a fast, objective readout means a cheap trial can answer the key question quickly.'},
      ]},

      // LESSONS
      {type: 'lessons', title: 'What this case teaches', items: [
        {title: 'Validated biology beats a big market forecast', text: 'Imatinib was nearly shelved because the market looked small. Decades of target validation made it work, and success grew the market. Forecasts built on today\'s patients miss the patients a good drug creates by keeping them alive.', links: ['trikafta', 'spinraza', 'torcetrapib']},
        {title: 'Fast, objective readouts make bold decisions cheap', text: 'A white-cell count answered the key question within weeks. Look for diseases and biomarkers where a small trial gives a clear signal early, and be wary when the only readout is a surrogate that may not track outcomes.', links: ['sovaldi', 'aduhelm', 'leqembi']},
        {title: 'Select patients by biology', text: 'Every CML patient had the target. That precision, one test and one drug, became the template for biomarker-selected oncology. Drugs aimed at unselected populations, or at targets that do not dominate, often disappoint.', links: ['keytruda', 'enhertu', 'epacadostat']},
        {title: 'Patients can change the timeline', text: 'A petition of about 2,000 names helped push Novartis to scale manufacturing before approval, and a 7,380-patient expanded access program followed. Organized patients now shape trials, access and even financing.', links: ['trikafta', 'zolgensma', 'spinraza']},
        {title: 'Resistance is part of the product roadmap', text: 'Cancers evolve around targeted drugs. The companies that planned successor drugs, and sequenced relapses to see why, kept patients alive and their franchises going.', links: ['keytruda', 'kymriah']},
        {title: 'A price trajectory becomes part of the legacy', text: 'Gleevec launched near the price of the drug it replaced, then rose more than fivefold. The 2013 doctors\' letter, the Indian patent case and the slow generic price fall are now standard reference points in drug pricing debates.', links: ['sovaldi', 'humira', 'zolgensma']},
      ]},

      // SOURCES
      {type: 'sources', title: 'Sources', items: [
        {text: 'Nowell PC, Hungerford DA. A minute chromosome in human chronic granulocytic leukemia. Science 1960;132:1497. Background via Wikipedia, "Philadelphia chromosome".', url: 'https://en.wikipedia.org/wiki/Philadelphia_chromosome'},
        {text: 'Rowley JD. A new consistent chromosomal abnormality in chronic myelogenous leukaemia identified by quinacrine fluorescence and Giemsa staining. Nature 1973;243:290–293.', url: 'https://pubmed.ncbi.nlm.nih.gov/4126434/'},
        {text: 'Daley GQ, Van Etten RA, Baltimore D. Induction of chronic myelogenous leukemia in mice by the P210bcr/abl gene of the Philadelphia chromosome. Science 1990;247:824–830.', url: 'https://pubmed.ncbi.nlm.nih.gov/2406902/'},
        {text: 'Hunter T. Treatment for chronic myelogenous leukemia: the long road to imatinib. J Clin Invest 2007 (history of BCR-ABL and the Ciba-Geigy program).', url: 'https://www.jci.org/articles/view/31691'},
        {text: 'Italian Cooperative Study Group on CML. Interferon alfa-2a as compared with conventional chemotherapy for the treatment of CML. NEJM 1994;330:820–825.', url: 'https://pubmed.ncbi.nlm.nih.gov/8114834/'},
        {text: 'Buchdunger E, Zimmermann J, Mett H, et al. Inhibition of the Abl protein-tyrosine kinase in vitro and in vivo by a 2-phenylaminopyrimidine derivative. Cancer Res 1996;56:100–104.', url: 'https://pubmed.ncbi.nlm.nih.gov/8548747/'},
        {text: 'Druker BJ, Tamura S, Buchdunger E, et al. Effects of a selective inhibitor of the Abl tyrosine kinase on the growth of Bcr-Abl positive cells. Nat Med 1996;2:561–566.', url: 'https://pubmed.ncbi.nlm.nih.gov/8616716/'},
        {text: 'Capdeville R, Buchdunger E, Zimmermann J, Matter A. Glivec (STI571, imatinib), a rationally developed, targeted anticancer drug. Nat Rev Drug Discov 2002;1:493–502.', url: 'https://www.nature.com/articles/nrd839'},
        {text: 'Schindler T, Bornmann W, Pellicena P, et al. Structural mechanism for STI-571 inhibition of Abelson tyrosine kinase. Science 2000;289:1938–1942.', url: 'https://pubmed.ncbi.nlm.nih.gov/10988075/'},
        {text: 'Druker BJ, Talpaz M, Resta DJ, et al. Efficacy and safety of a specific inhibitor of the BCR-ABL tyrosine kinase in CML. NEJM 2001;344:1031–1037.', url: 'https://www.nejm.org/doi/full/10.1056/NEJM200104053441401'},
        {text: 'Druker BJ, Sawyers CL, Kantarjian H, et al. Activity of a specific inhibitor of the BCR-ABL tyrosine kinase in the blast crisis of CML and ALL with the Philadelphia chromosome. NEJM 2001;344:1038–1042.', url: 'https://www.nejm.org/doi/full/10.1056/NEJM200104053441402'},
        {text: 'Cohen MH, Moses ML, Pazdur R. Gleevec for the treatment of CML: FDA regulatory mechanisms, accelerated approval, and orphan drug status. The Oncologist 2002;7:390–392.', url: 'https://academic.oup.com/oncolo/article/7/5/390/6397224'},
        {text: 'US FDA, Drugs@FDA records (via openFDA) for Gleevec NDA 021335 and later approvals: Sprycel NDA 021986, Tasigna NDA 022068, Bosulif NDA 203341, Iclusig NDA 203469, Scemblix NDA 215358, Sun Pharma imatinib ANDA 078340.', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm'},
        {text: 'Report of an international expanded access program of imatinib in adults with Ph-positive leukemias. Ann Oncol 2008.', url: 'https://pubmed.ncbi.nlm.nih.gov/18344535/'},
        {text: 'O\'Brien SG, Guilhot F, Larson RA, et al. Imatinib compared with interferon and low-dose cytarabine for newly diagnosed chronic-phase CML. NEJM 2003;348:994–1004.', url: 'https://pubmed.ncbi.nlm.nih.gov/12637609/'},
        {text: 'Druker BJ, Guilhot F, O\'Brien SG, et al. Five-year follow-up of patients receiving imatinib for CML. NEJM 2006;355:2408–2417.', url: 'https://pubmed.ncbi.nlm.nih.gov/17151364/'},
        {text: 'Hochhaus A, Larson RA, Guilhot F, et al. Long-term outcomes of imatinib treatment for CML. NEJM 2017;376:917–927; and CancerNetwork summary of the final IRIS results (progression rates by arm).', url: 'https://www.cancernetwork.com/view/final-results-landmark-imatinib-study-cml-show-long-term-benefit'},
        {text: 'ClinicalTrials.gov NCT00006343: STI571 compared with interferon alfa plus cytarabine (IRIS), planned accrual and crossover rules.', url: 'https://clinicaltrials.gov/study/NCT00006343'},
        {text: 'Bower H, Björkholm M, Dickman PW, et al. Life expectancy of patients with CML approaches the life expectancy of the general population. J Clin Oncol 2016;34:2851–2857; and NCI SEER Cancer Stat Facts: CML (incidence, median age).', url: 'https://seer.cancer.gov/statfacts/html/cmyl.html'},
        {text: 'Gorre ME, Mohammed M, Ellwood K, et al. Clinical resistance to STI-571 cancer therapy caused by BCR-ABL gene mutation or amplification. Science 2001;293:876–880.', url: 'https://pubmed.ncbi.nlm.nih.gov/11423618/'},
        {text: 'Shah NP, Tran C, Lee FY, et al. Overriding imatinib resistance with a novel ABL kinase inhibitor. Science 2004;305:399–401.', url: 'https://pubmed.ncbi.nlm.nih.gov/15256671/'},
        {text: 'O\'Hare T, Shakespeare WC, Zhu X, et al. AP24534 (ponatinib), a pan-BCR-ABL inhibitor, potently inhibits the T315I mutant. Cancer Cell 2009;16:401–412; and Zabriskie MS et al. BCR-ABL1 compound mutations confer clinical resistance to ponatinib. Cancer Cell 2014;26:428–442.', url: 'https://pubmed.ncbi.nlm.nih.gov/19878872/'},
        {text: 'Soverini S, Hochhaus A, Nicolini FE, et al. BCR-ABL kinase domain mutation analysis in CML: recommendations from an expert panel on behalf of European LeukemiaNet. Blood 2011;118:1208–1215.', url: 'https://pubmed.ncbi.nlm.nih.gov/21562040/'},
        {text: 'FDA. FDA grants accelerated approval to asciminib for newly diagnosed chronic myeloid leukemia, October 29, 2024.', url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-asciminib-newly-diagnosed-chronic-myeloid-leukemia'},
        {text: 'Hochhaus A et al. 5-year update of ENESTnd (nilotinib vs imatinib). Leukemia 2016; and Hochhaus A et al. Asciminib in newly diagnosed CML (ASC4FIRST). NEJM 2024. Drug background: Wikipedia entries on nilotinib, ponatinib and asciminib.', url: 'https://pubmed.ncbi.nlm.nih.gov/38820078/'},
        {text: 'Mahon FX, Réa D, Guilhot J, et al. Discontinuation of imatinib in CML patients in complete molecular remission for at least 2 years: the STIM trial. Lancet Oncol 2010;11:1029–1035.', url: 'https://pubmed.ncbi.nlm.nih.gov/20965785/'},
        {text: 'Experts in Chronic Myeloid Leukemia. The price of drugs for CML is a reflection of the unsustainable prices of cancer drugs. Blood 2013;121:4439–4442.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4190613/'},
        {text: 'The arrival of generic imatinib into the U.S. market: an educational event. ASCO Post, May 2016; and Influence of the "Mark Cuban effect" on cancer drug prices in the United States: focus on CML. ASCO Post, February 2023.', url: 'https://ascopost.com/issues/may-25-2016/the-arrival-of-generic-imatinib-into-the-us-market-an-educational-event/'},
        {text: 'Novartis AG, annual reports on Form 20-F, 2002–2018 (Gleevec/Glivec sales, patient assistance figures), SEC EDGAR.', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001114448&type=20-F'},
        {text: 'Supreme Court of India, Novartis AG v Union of India & Others, 1 April 2013 (UNCTAD case summary); background and price comparison via Wikipedia, "Novartis v. Union of India & Others".', url: 'https://unctad.org/ippcaselaw/novartis-ag-v-union-india-others-supreme-court-india-1-april-2013'},
        {text: 'Lasker Foundation, 2009 Lasker-DeBakey Clinical Medical Research Award to Druker, Lydon and Sawyers; Yang B, summary of D. Vasella, "Magic Cancer Bullet", Discovery Medicine 2009; The Max Foundation, history (GIPAP); TIME cover, 28 May 2001; S. McNamara petition account quoting the New York Times (cmleukemia.com).', url: 'https://laskerfoundation.org/winners/molecularly-targeted-treatments-for-chronic-myeloid-leukemia/'},
      ]},
    ],
  });
})();
