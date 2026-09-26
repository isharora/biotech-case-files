// Enhertu (trastuzumab deruxtecan): Daiichi Sankyo and AstraZeneca. See GUIDE.md.
(function () {
  // ---------- helpers to build SVG and schematic curves ----------
  const expCurve = (median, xMax, step = 1) => {
    const pts = [];
    for (let x = 0; x <= xMax; x += step) pts.push([x, +(100 * Math.pow(0.5, x / median)).toFixed(1)]);
    return pts;
  };
  // HER2 receptor bars placed around the top of an ellipse, perpendicular to the membrane
  const receptorsOnEllipse = (cx, cy, rx, ry, degs, cls, part) => degs.map(t => {
    const r = t * Math.PI / 180, x = cx + rx * Math.cos(r), y = cy - ry * Math.sin(r);
    return `<rect x="${(x - 7).toFixed(1)}" y="${(y - 18).toFixed(1)}" width="14" height="34" rx="6" class="${cls}" transform="rotate(${(90 - t).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)})"${part ? ` data-part="${part}"` : ''}/>`;
  }).join('');
  // an upright antibody (arms up) with optional payload dots
  const antibody = (x, yTop, scale, extra) => {
    const s = scale, stemTop = yTop + 130 * s, stemBot = yTop + 250 * s;
    return `<path d="M${x} ${stemBot} V${stemTop} M${x} ${stemTop} L${x - 80 * s} ${yTop} M${x} ${stemTop} L${x + 80 * s} ${yTop}" class="st-1 il-none" stroke-width="${26 * s}" stroke-linecap="round" fill="none"/>
      <circle cx="${x - 80 * s}" cy="${yTop}" r="${16 * s}" class="il-1s st-1" stroke-width="3"/><circle cx="${x + 80 * s}" cy="${yTop}" r="${16 * s}" class="il-1s st-1" stroke-width="3"/>${extra || ''}`;
  };

  // ---------- emblem ----------
  const emblem = `<svg viewBox="0 0 300 300" role="img" aria-label="An antibody carrying eight payload molecules docking onto HER2 receptors">
    <circle cx="150" cy="150" r="138" class="il-1s"/>
    <path d="M44 238 Q150 212 256 238 Q250 262 214 276 Q150 292 86 276 Q50 262 44 238 Z" class="il-2s"/>
    <path d="M44 238 Q150 212 256 238" class="il-line2 il-none" fill="none"/>
    <rect x="112" y="214" width="15" height="34" rx="6" class="il-2"/><rect x="173" y="214" width="15" height="34" rx="6" class="il-2"/>
    <path d="M150 58 V148 M150 148 L120 206 M150 148 L180 206" class="st-1 il-none" stroke-width="18" stroke-linecap="round" fill="none"/>
    <g class="il-line2">
      <path d="M142 80 H126 M158 80 H174 M142 116 H126 M158 116 H174 M141 166 H116 M159 166 H184 M124 198 H100 M176 198 H200"/>
    </g>
    <circle cx="120" cy="80" r="9" class="il-4"/><circle cx="180" cy="80" r="9" class="il-4"/>
    <circle cx="120" cy="116" r="9" class="il-4"/><circle cx="180" cy="116" r="9" class="il-4"/>
    <circle cx="110" cy="166" r="9" class="il-4"/><circle cx="190" cy="166" r="9" class="il-4"/>
    <circle cx="94" cy="198" r="9" class="il-4"/><circle cx="206" cy="198" r="9" class="il-4"/>
  </svg>`;

  // ---------- figure: normal cell vs HER2-positive cell ----------
  const geneTicks = (cx, y, n, spread) => Array.from({length: n}, (_, i) => {
    const x = cx - spread / 2 + (n === 1 ? spread / 2 : i * spread / (n - 1));
    return `<rect x="${(x - 4).toFixed(1)}" y="${y - 9}" width="8" height="18" rx="2" class="il-2"/>`;
  }).join('');
  const cellFigure = `<svg viewBox="0 0 900 430" role="img" aria-label="Normal breast cell compared with a HER2-positive cancer cell">
    <text x="220" y="34" text-anchor="middle" class="il-title">Normal breast cell</text>
    <text x="660" y="34" text-anchor="middle" class="il-title">HER2-positive cancer cell</text>
    <g data-part="normal">
      <ellipse cx="220" cy="235" rx="165" ry="135" class="il-3s il-line"/>
      <ellipse cx="220" cy="235" rx="157" ry="127" class="il-none il-line" fill="none"/>
      ${receptorsOnEllipse(220, 235, 165, 135, [70, 115], 'il-2')}
      <circle cx="220" cy="255" r="62" class="il-paper il-line"/>
      <path d="M170 245 Q195 230 220 245 T270 245" class="il-line il-none" fill="none"/>
      ${geneTicks(220, 245, 2, 50)}
      <text x="220" y="280" text-anchor="middle" class="il-text-2">2 copies of</text><text x="220" y="296" text-anchor="middle" class="il-text-2">the HER2 gene</text>
    </g>
    <g data-part="membrane">
      <ellipse cx="660" cy="240" rx="190" ry="150" class="il-2s il-line"/>
      <ellipse cx="660" cy="240" rx="182" ry="142" class="il-none il-line" fill="none"/>
    </g>
    <g data-part="her2">${receptorsOnEllipse(660, 240, 190, 150, [22, 34, 46, 58, 70, 82, 94, 106, 118, 130, 158], 'il-2')}</g>
    <g data-part="signal">
      <path d="M700 100 C705 150 690 190 675 215" class="st-4 il-none flow" stroke-width="4" fill="none"/>
      <path d="M800 150 C770 180 740 205 715 225" class="st-4 il-none flow" stroke-width="4" fill="none"/>
      <text x="738" y="262" class="il-text-2">"grow"</text><text x="738" y="278" class="il-text-2">signals</text>
    </g>
    <g data-part="amp">
      <circle cx="660" cy="275" r="72" class="il-paper il-line"/>
      <path d="M600 262 Q630 245 660 262 T720 262" class="il-line il-none" fill="none"/>
      ${geneTicks(660, 262, 9, 104)}
      <text x="660" y="300" text-anchor="middle" class="il-text-2">many copies</text><text x="660" y="316" text-anchor="middle" class="il-text-2">(amplified)</text>
    </g>
    <g data-part="antibody">
      <g transform="translate(538 125) rotate(-40)"><path d="M0 -78 V-48 M0 -48 L-13 -24 M0 -48 L13 -24" class="st-1 il-none" stroke-width="9" stroke-linecap="round" fill="none"/></g>
      <text x="440" y="70" text-anchor="middle" class="il-text">Herceptin</text>
      <text x="440" y="86" text-anchor="middle" class="il-text-2">(trastuzumab)</text>
    </g>
    <text x="220" y="405" text-anchor="middle" class="il-text-2">A few HER2 receptors: normal growth control</text>
    <text x="660" y="415" text-anchor="middle" class="il-text-2">Surface crowded with HER2: the cell is told to divide, over and over</text>
  </svg>`;

  // ---------- figure: ADC anatomy, Kadcyla vs Enhertu ----------
  const adcDots = (x, yTop, pts, shape, part, linkerCls) => pts.map(([px, py, side, off = 34]) => {
    const ax = x + px, ay = yTop + py, dx = ax + side * off;
    const link = `<path d="M${ax} ${ay} H${dx - side * 10}" class="${linkerCls}" stroke-width="3" fill="none"/>`;
    const cut = linkerCls.includes('cut') ? `<path d="M${ax + side * (off / 2 + 2)} ${ay - 7} l${side * 6} 7 l${-side * 6} 7" class="st-2 il-none" stroke-width="2" fill="none"/>` : '';
    const mark = shape === 'sq' ? `<rect x="${dx - 9}" y="${ay - 9}" width="18" height="18" rx="3" class="il-4"/>` : `<circle cx="${dx}" cy="${ay}" r="10" class="il-4"/>`;
    return `<g data-part="${part}">${link}${cut}</g><g data-part="${part === 'linker' ? 'payload' : part}">${mark}</g>`;
  }).join('');
  // points relative to antibody (x, yTop=110): stem x=0, y 240..360 ; arms from (0,130) to (+-80,0)
  const enhPts = [[-13, 160, -1], [13, 160, 1], [-13, 215, -1], [13, 215, 1], [-22, 95, -1, 42], [22, 95, 1, 42], [-43, 60, -1, 42], [43, 60, 1, 42]];
  const kadPts = [[-13, 190, -1], [52, 50, 1], [-38, 76, -1]];
  const adcFigure = `<svg viewBox="0 0 900 450" role="img" aria-label="Kadcyla and Enhertu compared: same antibody, different linker, payload and drug-to-antibody ratio">
    <text x="230" y="36" text-anchor="middle" class="il-title">Kadcyla (T-DM1), approved 2013</text>
    <text x="670" y="36" text-anchor="middle" class="il-title">Enhertu (T-DXd), approved 2019</text>
    <g data-part="antibody">${antibody(230, 90, 1)}</g>
    <g data-part="antibody">${antibody(670, 90, 1)}</g>
    <g data-part="tdm1">${kadPts.map(([px, py, side]) => { const ax = 230 + px, ay = 90 + py, dx = ax + side * 34; return `<path d="M${ax} ${ay} H${dx - side * 10}" class="il-line2" stroke-width="5" fill="none"/><rect x="${dx - 9}" y="${ay - 9}" width="18" height="18" rx="3" class="il-4"/>`; }).join('')}
      <path d="M243 250 H268" class="il-line2 il-dash" fill="none"/><rect x="268" y="241" width="18" height="18" rx="3" class="il-none il-line il-dash" fill="none"/>
    </g>
    ${adcDots(670, 90, enhPts, 'dot', 'linker', 'il-line2 cut')}
    <g data-part="dar">
      <path d="M790 118 V330" class="il-line il-none" fill="none"/><path d="M784 118 H790 M784 330 H790" class="il-line"/>
      <text x="800" y="215" class="il-num">≈ 8</text><text x="800" y="238" class="il-text-2">payloads per</text><text x="800" y="254" class="il-text-2">antibody</text>
      <text x="100" y="215" class="il-num">3.5</text><text x="70" y="238" class="il-text-2">on average</text>
    </g>
    <text x="230" y="382" text-anchor="middle" class="il-text">DM1 payload: a tubulin poison</text>
    <text x="230" y="402" text-anchor="middle" class="il-text-2">non-cleavable linker</text>
    <text x="230" y="420" text-anchor="middle" class="il-text-2">released DM1 stays trapped in the cell</text>
    <text x="670" y="382" text-anchor="middle" class="il-text">DXd payload: a topoisomerase I inhibitor</text>
    <text x="670" y="402" text-anchor="middle" class="il-text-2">cleavable four-amino-acid linker (orange notch)</text>
    <text x="670" y="420" text-anchor="middle" class="il-text-2">released DXd can cross into neighboring cells</text>
    <text x="450" y="200" text-anchor="middle" class="il-text-2">same antibody:</text>
    <text x="450" y="216" text-anchor="middle" class="il-text-2">trastuzumab</text>
  </svg>`;

  // ---------- mechanism ----------
  const mechSvg = `<svg viewBox="0 0 760 450" role="img" aria-label="How Enhertu kills a HER2-positive cell and its neighbor">
    <rect x="0" y="0" width="760" height="140" class="il-7s" opacity="0.55"/>
    <text x="16" y="30" class="il-text-2" style="font-size:18px">Bloodstream</text>
    <g data-part="cell">
      <ellipse cx="260" cy="315" rx="232" ry="126" class="il-2s il-line"/>
      <ellipse cx="260" cy="315" rx="224" ry="118" class="il-none il-line" fill="none"/>
      <text x="92" y="236" class="il-text" style="font-size:18px">HER2-positive</text><text x="92" y="257" class="il-text" style="font-size:18px">tumor cell</text>
    </g>
    <g data-part="her2">
      <rect x="193" y="176" width="14" height="36" rx="6" class="il-2"/><rect x="253" y="172" width="14" height="36" rx="6" class="il-2"/><rect x="313" y="176" width="14" height="36" rx="6" class="il-2"/>
      <text x="336" y="178" class="il-text-2" style="font-size:18px">HER2</text>
    </g>
    <g data-part="nucleus">
      <circle cx="195" cy="330" r="60" class="il-paper il-line"/>
      <path d="M150 312 Q172 300 195 312 T240 312 M150 348 Q172 336 195 348 T240 348" class="il-line il-none" fill="none"/>
      <path d="M160 314 V346 M175 309 V341 M190 312 V348 M205 314 V346 M220 309 V341 M232 312 V346" class="il-line"/>
    </g>
    <g data-part="neighbor">
      <ellipse cx="630" cy="325" rx="118" ry="102" class="il-8s il-line"/>
      <ellipse cx="630" cy="325" rx="110" ry="94" class="il-none il-line" fill="none"/>
      <circle cx="650" cy="335" r="38" class="il-paper il-line"/>
      <path d="M622 330 Q636 322 650 330 T678 330" class="il-line il-none" fill="none"/>
      <text x="630" y="196" text-anchor="middle" class="il-text-2" style="font-size:18px">neighbor with little</text><text x="630" y="216" text-anchor="middle" class="il-text-2" style="font-size:18px">or no HER2</text>
    </g>
    <g data-part="adc">
      <path d="M260 22 V70 M260 70 L242 100 M260 70 L278 100" class="st-1 il-none" stroke-width="9" stroke-linecap="round" fill="none"/>
      <circle cx="250" cy="34" r="4.5" class="il-4"/><circle cx="270" cy="34" r="4.5" class="il-4"/><circle cx="250" cy="52" r="4.5" class="il-4"/><circle cx="270" cy="52" r="4.5" class="il-4"/>
      <circle cx="240" cy="78" r="4.5" class="il-4"/><circle cx="280" cy="78" r="4.5" class="il-4"/><circle cx="234" cy="94" r="4.5" class="il-4"/><circle cx="286" cy="94" r="4.5" class="il-4"/>
      <text x="296" y="56" class="il-text" style="font-size:18px">Enhertu</text>
    </g>
    <g data-part="vesicle">
      <circle cx="330" cy="268" r="34" class="il-paper il-line il-dash"/>
      <path d="M330 248 V270 M330 270 L320 286 M330 270 L340 286" class="st-1 il-none" stroke-width="6" stroke-linecap="round" fill="none"/>
      <circle cx="323" cy="255" r="3.5" class="il-4"/><circle cx="337" cy="255" r="3.5" class="il-4"/><circle cx="318" cy="278" r="3.5" class="il-4"/><circle cx="342" cy="278" r="3.5" class="il-4"/>
      <text x="372" y="256" class="il-text-2" style="font-size:18px">swallowed</text><text x="372" y="276" class="il-text-2" style="font-size:18px">in a bubble</text>
    </g>
    <g data-part="lyso">
      <circle cx="385" cy="318" r="40" class="il-6s il-line"/>
      <path d="M368 300 l10 10 m0 -10 l-10 10" class="st-6" stroke-width="3"/>
      <path d="M381 324 V338 M389 324 V338" class="st-1" stroke-width="5" stroke-linecap="round"/>
      <circle cx="403" cy="308" r="4" class="il-4"/><circle cx="399" cy="330" r="4" class="il-4"/><circle cx="373" cy="334" r="4" class="il-4"/>
      <text x="352" y="382" text-anchor="middle" class="il-text-2" style="font-size:18px">lysosome</text>
      <text x="352" y="402" text-anchor="middle" class="il-text-2" style="font-size:18px">cuts the linker</text>
    </g>
    <g data-part="dxd">
      <path d="M343 322 C315 324 285 328 258 330" class="st-4 il-none flow" stroke-width="3" fill="none"/>
      <circle cx="322" cy="324" r="5" class="il-4"/><circle cx="292" cy="327" r="5" class="il-4"/><circle cx="238" cy="330" r="5" class="il-4"/>
      <text x="272" y="314" class="il-text-2" style="font-size:18px">DXd</text>
    </g>
    <g data-part="dnabreak">
      <path d="M200 305 l8 12 l-10 8 l10 10 l-8 12" class="st-7 il-none" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>
    <g data-part="bystander">
      <path d="M445 330 C480 322 520 322 600 332" class="st-4 il-none flow" stroke-width="3" fill="none"/>
      <circle cx="470" cy="326" r="5" class="il-4"/><circle cx="512" cy="323" r="5" class="il-4"/><circle cx="552" cy="326" r="5" class="il-4"/><circle cx="628" cy="334" r="5" class="il-4"/>
      <text x="478" y="296" class="il-text-2" style="font-size:18px">DXd diffuses out</text>
    </g>
    <g data-part="nbdamage">
      <path d="M655 312 l7 10 l-9 7 l9 9 l-7 10" class="st-7 il-none" stroke-width="4" fill="none" stroke-linecap="round"/>
    </g>
    <g data-part="death">
      <text x="195" y="425" text-anchor="middle" class="il-title" style="fill:var(--il-7);font-size:20px">cell dies</text>
      <text x="630" y="290" text-anchor="middle" class="il-title" style="fill:var(--il-7);font-size:20px">cell dies</text>
    </g>
  </svg>`;
  const base = ['cell', 'her2', 'nucleus', 'neighbor'];

  registerCase({
    id: 'enhertu', kind: 'success',
    brand: 'Enhertu', generic: 'trastuzumab deruxtecan (fam-trastuzumab deruxtecan-nxki)', company: 'Daiichi Sankyo and AstraZeneca',
    tagline: 'A Japanese drugmaker rebuilt the [[ADC|antibody-drug conjugate]] around a payload from one of its own failed drugs, and ended up creating a new kind of breast cancer: [[HER2-low]].',
    chips: [['Disease', 'Breast cancer (and other HER2 tumors)'], ['Modality', '[[ADC|Antibody-drug conjugate]]'], ['Target', '[[HER2]]'], ['First approved', 'US, December 2019']],
    readingTime: 40,
    stats: [
      {v: '$4.98B', l: '2025 worldwide sales, combined across Daiichi Sankyo and AstraZeneca', n: 'AstraZeneca FY2025 results'},
      {v: '0.28', l: '[[hazard ratio]] for progression or death against Kadcyla in DESTINY-Breast03', n: 'Cortés et al., NEJM 2022'},
      {v: '≈ 8', l: 'payload molecules on each antibody, more than twice Kadcyla\'s 3.5', n: 'US prescribing information'},
      {v: 'About half', l: 'of breast cancers fall into the HER2-low group the drug opened up', n: 'Daiichi Sankyo, Aug 2022; NCI'},
      {v: '$1.35B', l: 'AstraZeneca\'s [[upfront payment]] in 2019, in a deal worth up to $6.9B', n: 'AstraZeneca, Mar 2019'},
    ],
    emblem,
    facts: {start: null, firstHuman: 2015, approval: 2019, end: null, peakSalesB: 4.98, pivotalN: 557, area: 'oncology', modality: 'ADC', target: 'HER2'},
    themes: ['biomarkers', 'platform', 'dealmaking', 'safety'],
    glossary: {
      'HER2': 'Human epidermal growth factor receptor 2: a receptor protein on the cell surface that relays "grow" signals. Some tumors carry extra copies of its gene and are covered in it.',
      'HER2-positive': 'A tumor scored IHC 3+, or IHC 2+ with extra copies of the HER2 gene on an ISH test. About 15–20% of breast cancers.',
      'HER2-low': 'A tumor scored IHC 1+, or IHC 2+ without gene amplification. Lumped in with "HER2-negative" until 2022; about half of all breast cancers.',
      'HER2-ultralow': 'A tumor scored IHC 0 that still shows faint, incomplete HER2 staining on more than 0% and up to 10% of its cells.',
      'IHC': 'Immunohistochemistry: staining a thin slice of tumor with an antibody that turns brown wherever the target protein is, then scoring the slide under a microscope.',
      'ISH': 'In situ hybridization: a test that uses labeled DNA probes to count copies of a gene inside tumor cells. Used to settle borderline HER2 results.',
      'trastuzumab': 'The HER2 antibody sold as Herceptin (Genentech, approved 1998). The same antibody is the "guidance system" inside both Kadcyla and Enhertu.',
      'hormone receptor': 'The estrogen or progesterone receptor. Tumors that carry them (HR-positive) grow in response to hormones and are usually treated first with hormone-blocking drugs.',
      'HR-positive': 'Hormone-receptor-positive: a breast tumor that carries estrogen and/or progesterone receptors. The most common type.',
      'endocrine therapy': 'Hormone-blocking drugs (such as tamoxifen or aromatase inhibitors) that starve HR-positive tumors of estrogen\'s growth signal.',
      'metastatic': 'Cancer that has spread from where it started to distant organs such as bone, liver, lung or brain. Usually treatable but not curable.',
      'chemotherapy': 'Drugs that kill rapidly dividing cells. They hit tumors, but also hair follicles, gut lining and bone marrow, which causes most of their side effects.',
      'drug-to-antibody ratio': 'DAR: the average number of payload molecules attached to each antibody in an ADC.',
      'DAR': 'Drug-to-antibody ratio: the average number of payload molecules attached to each antibody.',
      'bystander effect': 'When an ADC\'s released payload leaks out of the targeted cell and kills neighboring cells too, including ones with little or none of the target.',
      'topoisomerase I': 'An enzyme that nicks one strand of DNA to relieve twisting as the cell copies it, then reseals the nick. Drugs that jam it leave the DNA broken.',
      'exatecan': 'A topoisomerase I inhibitor Daiichi developed as a standalone chemotherapy. It failed a phase 3 trial in pancreatic cancer; a derivative became Enhertu\'s payload.',
      'DXd': 'The payload in Enhertu: a derivative of exatecan that blocks topoisomerase I and can pass through cell membranes.',
      'SN-38': 'The active form of the old chemotherapy drug irinotecan, a topoisomerase I inhibitor. The benchmark Daiichi compared DXd against.',
      'lysosome': 'A small acid-filled compartment inside cells, packed with enzymes that break down whatever the cell has swallowed.',
      'cathepsin': 'A family of protein-cutting enzymes found in lysosomes. Enhertu\'s linker is designed to be cut by enzymes like these.',
      'internalization': 'When a cell pulls a surface receptor, and anything stuck to it, inside in a small membrane bubble.',
      'interstitial lung disease': 'Inflammation and scarring of the tissue around the lungs\' air sacs, which makes breathing harder. With Enhertu it can be mild, severe, or fatal.',
      'ILD': 'Interstitial lung disease: inflammation and scarring of lung tissue. Enhertu\'s most serious known risk.',
      'pneumonitis': 'Inflammation of the lungs, often drug-induced. Grouped with ILD in Enhertu\'s safety data.',
      'T-DM1': 'Trastuzumab emtansine (Kadcyla): trastuzumab joined to the tubulin poison DM1 by a non-cleavable linker. Approved 2013.',
      'T-DXd': 'Trastuzumab deruxtecan (Enhertu).',
      'DM1': 'A derivative of the plant toxin maytansine that stops cells dividing by jamming tubulin, the scaffolding a cell needs to split in two. Kadcyla\'s payload.',
      'calicheamicin': 'An extremely potent DNA-cutting toxin from soil bacteria, used as the payload in Mylotarg.',
      'gene amplification': 'When a cancer cell ends up with many extra copies of one gene, so it makes far too much of that protein.',
      'triple-negative': 'Breast cancer with no estrogen receptor, no progesterone receptor and no HER2 amplification. Historically the hardest type to treat with targeted drugs.',
      'tumor-agnostic': 'An approval based on a tumor\'s molecular feature (here, strong HER2) rather than the organ where the cancer started.',
      'patient-derived xenograft': 'A piece of a patient\'s tumor grown in a mouse. Used to test drugs on tumors that behave more like the real thing than cell lines do.',
      'physician\'s choice': 'A control arm in which each patient gets whichever standard treatment their doctor picks from a pre-set list.',
      'RTOR': 'Real-Time Oncology Review: an FDA pilot in which the agency starts reviewing cancer trial data before the full application is filed, to speed decisions.',
      'neutropenia': 'A low count of neutrophils, the white blood cells that fight bacteria. Raises the risk of serious infection.',
      'pertuzumab': 'A second HER2 antibody (Perjeta, Genentech) that binds a different part of HER2 than trastuzumab. Often given together with it.',
      'adjuvant': 'Treatment given after surgery to kill any cancer cells left behind.',
      'neoadjuvant': 'Treatment given before surgery to shrink the tumor.',
      'pathological complete response': 'No invasive cancer left in the tissue removed at surgery after neoadjuvant treatment. A good sign, but a surrogate for long-term outcome.',
      'TROP2': 'A surface protein found on many carcinomas. The target of the ADCs Datroway (Daiichi Sankyo and AstraZeneca) and Trodelvy (Gilead).',
      'in-market sales': 'Sales to hospitals and pharmacies booked by whichever partner sells the drug in that country. AstraZeneca reports Enhertu\'s combined in-market sales even where Daiichi books them.',
      'oncogene': 'A gene that drives cancer when it is overactive or present in too many copies.',
      'confirmatory trial': 'The trial a company must run after an accelerated approval to show real clinical benefit. If it fails, the approval can be withdrawn.',
    },
    sections: [
      // ---------------- 1. Cold open ----------------
      {type: 'story', kicker: 'Chicago, June 2022', title: 'A standing ovation for six months', tocTitle: 'Cold open',
        html: `<p>Medical conferences rarely applaud. The annual meeting of the American Society of Clinical Oncology (ASCO) draws many thousands of cancer specialists to Chicago each June, and most results are received the way engineers receive a quarterly roadmap review: polite attention, a few photos of slides, a rush to the next room. In June 2022, at the meeting's plenary session, the breast oncologist Shanu Modi of Memorial Sloan Kettering finished presenting a trial called DESTINY-Breast04, and the hall stood up and clapped.</p>
        <p>On paper, the numbers were not spectacular. In women whose breast cancer had spread through the body, a drug called <strong>Enhertu</strong> kept the disease in check for a median of 9.9 months, against 5.1 months with standard [[chemotherapy]]. Half the patients on Enhertu were alive at 23.4 months, against 16.8 months on chemotherapy. That is roughly six extra months of life on average. It is not a cure.</p>
        <p>What made people stand was <em>who</em> those patients were. Every one of them had a pathology report stating that her tumor was "HER2-negative". For more than twenty years that phrase had meant one thing: the targeted drugs built around a protein called [[HER2]] were not for you. Herceptin, the drug that had changed the outlook for the roughly one in six breast cancer patients with high HER2, did nothing for the rest. DESTINY-Breast04 showed that a drug aimed at HER2 worked in tumors that carried so little of it that the standard test had rounded them down to "negative".</p>
        <p>About half of all breast cancers fall into that group. Overnight it acquired a name, [[HER2-low]], and within two months the US Food and Drug Administration had approved Enhertu for it. A category that had not existed on any lab report now had its own treatment.</p>
        <p>The drug that did it belonged to a technology with a checkered record. [[ADC|Antibody-drug conjugates]], antibodies with a poison bolted on, had been promising "guided missile" chemotherapy since the 1980s, and for most of that time they had mostly produced disappointments, including one high-profile withdrawal from the market. Enhertu came from Daiichi Sankyo, a Tokyo drugmaker, and its warhead was a chemical cousin of one of Daiichi's own failed cancer drugs. Its success set off a wave of deals worth tens of billions of dollars, a rush of copycat designs, and a scramble among pathologists to relearn how to read a slide.</p>
        <p>This case is about how that happened: the biology of HER2, the engineering problem of building a better guided missile, the trials that proved it, the lung toxicity that still shadows it, and the business bets that turned a Japanese research program into one of the most valuable franchises in cancer medicine.</p>`},

      // ---------------- 2. Disease from zero ----------------
      {type: 'story', kicker: 'The disease from zero', title: 'Breast cancer, receptors and HER2', tocTitle: 'Breast cancer and HER2',
        html: `<p>Your body is built from tens of trillions of cells, and almost all of them spend their lives following orders. A cell divides when neighboring cells and hormones tell it to, and stops when they don't. Those orders arrive as molecules that dock onto [[receptor|receptors]]: [[protein|proteins]] that sit in the cell's outer membrane with one end outside, like a doorbell, and one end inside, wired to the cell's machinery. When the doorbell rings, a chain of signals runs inward to the nucleus, where the [[DNA]] is, and switches on the genes for growth and division.</p>
        <p>Cancer is what happens when that control breaks. Over years, a cell accumulates [[mutation|mutations]], typos in its DNA, that either jam an accelerator on or break a brake. The cell divides when it shouldn't, its descendants inherit the fault, and eventually they form a tumor. Breast cancer usually starts in the milk ducts or lobules. Caught early, it is often cured with surgery, radiation and drugs. The real danger is spread: once tumor cells travel through blood or lymph and settle in bone, liver, lung or brain, the disease is called [[metastatic]], and it is treatable but, for most patients, not curable.</p>
        <p>The scale is large. The World Health Organization estimates that about 2.4 million women were diagnosed with breast cancer in 2024, roughly the population of Houston, and that it caused about 694,000 deaths. It is the most common cancer in women in most countries.</p>
        <h3>Three proteins that sort the disease</h3>
        <p>Doctors do not treat "breast cancer" as one disease. The first thing a pathologist does with a biopsy is check for three proteins, because they predict which drugs will work.</p>
        <ul><li><strong>Estrogen and progesterone receptors.</strong> Tumors that carry these [[hormone receptor|hormone receptors]] ("[[HR-positive]]") use the body's own hormones as a growth signal. They are usually treated first with [[endocrine therapy]], drugs that block estrogen. Tumors that are HR-positive and HER2-negative make up about 70% of breast cancers.</li>
        <li><strong>HER2.</strong> A receptor for growth signals. Every breast cell has some. In about 15–20% of breast cancers the cell has made many extra copies of the HER2 [[gene]], a fault called [[gene amplification]], and its surface is carpeted with the receptor. Crowded together, the receptors switch each other on without waiting for a signal, and the cell is told to divide, over and over.</li>
        <li><strong>None of the above.</strong> Tumors with no hormone receptors and no HER2 amplification are called [[triple-negative]], and they have historically had the fewest targeted options.</li></ul>
        <h3>The Herceptin story, briefly</h3>
        <p>HER2's role in breast cancer was pinned down in 1987, when Dennis Slamon, an oncologist at UCLA, and colleagues including Axel Ullrich of the biotech company Genentech, published a study in <em>Science</em> of 189 breast tumors. The HER2 gene was amplified, from two-fold to more than twenty-fold, in 30% of them, and the women whose tumors carried the amplification relapsed sooner and died sooner. (Later, larger studies settled on the lower figure of 15–20%.) HER2 was an [[oncogene]], a gene that drives cancer when overactive, and it sat on the cell surface, where an [[antibody]] could reach it.</p>
        <p>Genentech built that antibody. [[trastuzumab|Trastuzumab]], sold as Herceptin, grabs the outside of HER2 and dampens its signal, and it also flags the cell for attack by the immune system. The FDA approved it in 1998. The pivotal trial, published in 2001, randomized 469 women with HER2-positive metastatic breast cancer to chemotherapy with or without trastuzumab. Adding it extended median survival from 20.3 to 25.1 months and cut the risk of death by 20%. It also revealed a heart side effect, which is why cardiac monitoring is still routine for HER2 drugs.</p>
        <p>Herceptin made HER2 the textbook example of a [[biomarker]]-selected drug: test the tumor, and treat only the patients whose tumor has the target. It also created a sharp line. Trastuzumab works by blocking a signal the tumor depends on, so it only helps tumors that are addicted to HER2, the amplified ones. Everything below the line was "HER2-negative", and HER2 drugs were simply not an option for those patients.</p>`},
      {type: 'figure', title: 'What HER2 amplification looks like', intro: 'Hover or tap the labeled parts. The key difference is not a broken protein but far too many copies of a normal one.',
        svg: cellFigure,
        hotspots: {
          normal: {title: 'Normal breast cell', text: 'Every breast cell carries two copies of the HER2 [[gene]] (one from each parent) and a modest number of HER2 receptors, which help it respond to growth signals at the right moments.'},
          membrane: {title: 'The cell membrane', text: 'A double layer of fat that separates inside from outside. Receptors like HER2 span it: one end outside to catch signals, one end inside to pass them on. Antibodies are too big to cross it, which is why they target things on the surface.'},
          her2: {title: 'HER2 receptors, crowded together', text: 'In a HER2-positive cancer cell the surface can carry vastly more receptor than normal. Packed so densely, HER2 molecules pair up and switch each other on without any incoming signal. HER2 is a [[kinase]], an enzyme that passes on signals by tagging other proteins, so this keeps the "divide" instruction permanently on.'},
          amp: {title: 'Gene amplification', text: 'The cause: the cell has copied the stretch of DNA containing HER2 many times over. Slamon\'s 1987 study found two-fold to more than twenty-fold amplification in 30% of 189 tumors. An [[ISH]] test counts these copies directly.'},
          signal: {title: 'Growth signals running to the nucleus', text: 'Active HER2 triggers relay chains inside the cell that end in the nucleus, turning on genes for growth, survival and division.'},
          antibody: {title: 'Herceptin (trastuzumab)', text: 'A [[monoclonal antibody]] that clamps onto the outside of HER2. It dampens the signal and marks the cell for immune attack. It only helps tumors that depend on HER2, which is why it was restricted to HER2-positive disease. Enhertu uses this same antibody as its guidance system.'},
        },
        caption: 'Schematic, not to scale. Real HER2-positive cells can carry very large numbers of receptors; the point is the contrast.'},

      // ---------------- HER2 scoring ----------------
      {type: 'story', title: 'How a pathologist decides "HER2-positive"', tocTitle: 'How HER2 is scored',
        html: `<p>The HER2 line is drawn by two lab tests, and it is worth understanding exactly how, because this case turns on it.</p>
        <p>The first is [[IHC|immunohistochemistry (IHC)]]. A thin slice of tumor, a few thousandths of a millimeter thick, is mounted on a glass slide and washed with an antibody that sticks to HER2. A chemical reaction then deposits brown pigment wherever that antibody landed. The pathologist looks down a microscope and asks two questions: how much of each cell's outline is brown, and how dark? The answer is a score from 0 to 3+, defined in guidelines from the American Society of Clinical Oncology and the College of American Pathologists (ASCO/CAP):</p>
        <ul><li><strong>3+</strong>: complete, intense brown rings around more than 10% of tumor cells.</li>
        <li><strong>2+</strong>: weak to moderate complete rings in more than 10% of cells. Borderline.</li>
        <li><strong>1+</strong>: faint, barely perceptible, incomplete staining in more than 10% of cells.</li>
        <li><strong>0</strong>: no staining, or faint incomplete staining in 10% of cells or fewer.</li></ul>
        <p>The second test is [[ISH|in situ hybridization (ISH)]], which uses glowing or colored DNA probes to count copies of the HER2 gene in each cell. It is used to settle the borderline 2+ cases: if the gene is amplified, the tumor is HER2-positive.</p>
        <p>So until 2022 the rule was simple: 3+, or 2+ with an amplified gene, meant [[HER2-positive]]. Everything else, from a clean 0 to a 2+ without amplification, was HER2-negative. That threshold was calibrated to predict who benefits from Herceptin. Nobody had tuned it to separate 0 from 1+, because there was no drug for which the difference mattered. Try the scoring yourself below, and watch how the same slide moves between categories over time.</p>`},
      {type: 'custom', title: 'Score the slide', tocTitle: 'Interactive: HER2 scoring',
        intro: 'Pick a score to see a schematic tissue field: brown rings stand for HER2 staining on cell membranes. Then read how the same result has been classified, and treated, over time.',
        html: `<div class="card"><div id="ihcBtns" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px"></div><div id="ihcIsh" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;min-height:32px"></div>
          <div id="ihcSvg" style="background:var(--il-bg);border:1px solid var(--rule);border-radius:12px;padding:8px"></div>
          <div id="ihcInfo" style="margin-top:12px;font-size:15px;line-height:1.55"></div></div>`,
        init: (root, api) => {
          const L = [
            {k: '0', label: 'IHC 0 (no staining)', pct: 0, w: 0, o: 0, dash: false, def: 'No membrane staining at all.', y19: 'HER2-negative', y22: 'HER2-negative ("HER2-0")', y25: 'HER2-negative (sometimes called "HER2-null")', rx: 'No HER2-directed drug approved for this group in breast cancer.'},
            {k: 'u', label: 'IHC 0 with faint staining', pct: 0.07, w: 2.5, o: 0.5, dash: true, def: 'Faint, incomplete staining in more than 0% and up to 10% of tumor cells. Still scored IHC 0.', y19: 'HER2-negative', y22: 'HER2-negative', y25: '<b>[[HER2-ultralow]]</b>', rx: 'From January 2025: Enhertu for HR-positive metastatic disease that has progressed on endocrine therapy (DESTINY-Breast06).'},
            {k: '1', label: 'IHC 1+', pct: 0.6, w: 2.5, o: 0.55, dash: true, def: 'Faint, barely perceptible, incomplete staining in more than 10% of tumor cells.', y19: 'HER2-negative', y22: '<b>[[HER2-low]]</b>', y25: '<b>HER2-low</b>', rx: 'From August 2022: Enhertu after chemotherapy for metastatic disease (DESTINY-Breast04). From January 2025 also after endocrine therapy if HR-positive (DESTINY-Breast06).'},
            {k: '2', label: 'IHC 2+', pct: 0.8, w: 4.5, o: 0.8, dash: false, def: 'Weak to moderate complete staining in more than 10% of tumor cells. Borderline, so an ISH test decides.', y19: 'Depends on ISH', y22: 'Depends on ISH', y25: 'Depends on ISH', rx: 'Choose the ISH result above.'},
            {k: '3', label: 'IHC 3+', pct: 1, w: 7, o: 1, dash: false, def: 'Complete, intense, circumferential staining in more than 10% of tumor cells.', y19: '<b>HER2-positive</b>', y22: '<b>HER2-positive</b>', y25: '<b>HER2-positive</b>', rx: 'Trastuzumab (1998) and pertuzumab, Kadcyla (2013), Enhertu (2019 onward). In 2024 IHC 3+ solid tumors of any organ also became eligible for Enhertu.'},
          ];
          let cur = '1', ish = 'neg';
          const order = [...Array(30).keys()].map(i => (i * 7) % 30), rank = {}; order.forEach((c, i) => rank[c] = i);
          const btns = root.querySelector('#ihcBtns'), ishBox = root.querySelector('#ihcIsh');
          L.forEach(l => { const b = document.createElement('button'); b.className = 'btn'; b.textContent = l.label; b.dataset.k = l.k; b.onclick = () => { cur = l.k; draw(); }; btns.appendChild(b); });
          function draw() {
            const l = L.find(x => x.k === cur);
            btns.querySelectorAll('button').forEach(b => { b.classList.toggle('primary', b.dataset.k === cur); });
            ishBox.innerHTML = cur === '2' ? `<span style="font-size:14px;color:var(--ink-3);align-self:center">ISH result:</span> <button class="btn ${ish === 'neg' ? 'primary' : ''}" data-i="neg">Not amplified</button> <button class="btn ${ish === 'pos' ? 'primary' : ''}" data-i="pos">Amplified</button>` : '';
            ishBox.querySelectorAll('button').forEach(b => b.onclick = () => { ish = b.dataset.i; draw(); });
            let s = '<svg viewBox="0 0 860 300" role="img" aria-label="Schematic IHC tissue field">';
            const nStained = Math.round(l.pct * 30);
            for (let r = 0; r < 3; r++) for (let c = 0; c < 10; c++) {
              const i = r * 10 + c, x = 46 + c * 82 + (r % 2 ? 18 : 0), y = 55 + r * 92, rx = 36 + ((i * 13) % 5), ry = 31 + ((i * 7) % 4);
              s += `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" class="il-8s" style="stroke:var(--il-line);stroke-width:1;stroke-opacity:.35"/>`;
              s += `<ellipse cx="${x + 3}" cy="${y + 2}" rx="13" ry="11" class="il-6s"/>`;
              const amplified = cur === '3' || (cur === '2' && ish === 'pos');
              const dots = amplified ? 7 : 2;
              for (let d = 0; d < dots; d++) s += `<circle cx="${x - 6 + (d % 4) * 5}" cy="${y - 2 + Math.floor(d / 4) * 6}" r="1.8" class="il-7"/>`;
              if (rank[i] < nStained) {
                const dash = l.dash ? `stroke-dasharray:${18 + (i % 3) * 6} ${14 + (i % 4) * 5};stroke-dashoffset:${i * 9}` : '';
                s += `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="none" style="stroke:var(--il-2);stroke-width:${l.w};stroke-opacity:${l.o};${dash}"/>`;
              }
            }
            s += '</svg>';
            root.querySelector('#ihcSvg').innerHTML = s;
            let y19 = l.y19, y22 = l.y22, y25 = l.y25, rx = l.rx;
            if (cur === '2') {
              if (ish === 'pos') { y19 = y22 = y25 = '<b>HER2-positive</b>'; rx = 'Treated as HER2-positive: trastuzumab-based therapy, Kadcyla, Enhertu.'; }
              else { y19 = 'HER2-negative'; y22 = y25 = '<b>HER2-low</b>'; rx = 'Same as IHC 1+: Enhertu from August 2022 (after chemotherapy) and January 2025 (HR-positive, after endocrine therapy).'; }
            }
            root.querySelector('#ihcInfo').innerHTML = api.terms(`<div style="margin-bottom:8px"><b>${l.label}.</b> ${l.def} <span style="color:var(--ink-3)">(Tiny red dots in each nucleus: HER2 gene copies, which an [[ISH]] test would count.)</span></div>
              <table class="tbl"><thead><tr><th>Up to 2021</th><th>From Aug 2022</th><th>From Jan 2025</th></tr></thead><tbody><tr><td>${y19}</td><td>${y22}</td><td>${y25}</td></tr></tbody></table>
              <div style="margin-top:8px"><b>HER2-directed options in breast cancer:</b> ${rx}</div>`);
          }
          draw();
        }},
      {type: 'callout', variant: 'misconception', heading: '"HER2-negative" never meant "no HER2"',
        html: `<p>It is natural to read a test result as a statement about the tumor. But "HER2-negative" was really a statement about Herceptin: below this line, blocking HER2's signal does not help. Most of those tumors still have some HER2 on their surface. About half of all breast cancers score 1+ or 2+ without amplification. For a signal-blocking drug that is irrelevant. For a drug that only needs HER2 as a <em>docking point</em>, it might be enough. Seeing that difference is the whole Enhertu story.</p>`},

      // ---------------- ADCs from zero ----------------
      {type: 'story', kicker: 'The technology', title: 'Guided missiles, and why they kept missing', tocTitle: 'ADCs from zero',
        html: `<p>Classic [[chemotherapy]] works because cancer cells divide a lot, and most chemo drugs kill dividing cells. The problem is that plenty of healthy cells divide a lot too: hair follicles, the lining of the gut, the bone marrow that makes blood. That is why chemo causes hair loss, nausea and dangerously low blood counts, and why the dose that can be given is capped by the damage to healthy tissue rather than by what it would take to kill the tumor. Oncologists call the gap between an effective dose and a toxic one the <em>therapeutic window</em>. For many chemo drugs it is narrow.</p>
        <p>The dream of widening that window is more than a century old. The German scientist Paul Ehrlich, who received the Nobel Prize in Physiology or Medicine in 1908, imagined "magic bullets": compounds that would seek out a disease-causing target and leave the rest of the body alone. Antibodies, once scientists learned to make them to order, looked like the perfect seeker. An antibody binds one molecular shape, very tightly, and ignores everything else. So bolt a poison onto an antibody against a tumor protein, and the antibody should carry the poison to the tumor like a guided missile.</p>
        <p>That is an [[ADC|antibody-drug conjugate]]. It has four design choices, and each one fights the others:</p>
        <ul><li><strong>The antibody</strong> sets the address. It must bind a protein that is plentiful on tumor cells and scarce on healthy ones, and ideally the protein should be pulled inside the cell after binding ([[internalization]]).</li>
        <li><strong>The [[payload]]</strong> is the warhead. Only a small fraction of an injected antibody ever reaches the tumor, so the payload must be extraordinarily potent, often too toxic to give on its own.</li>
        <li><strong>The [[linker]]</strong> is the clasp. It must hold the payload tight for days in the bloodstream, because payload that falls off in the blood is just chemo spread around the body, then let go once inside the target cell.</li>
        <li><strong>The [[drug-to-antibody ratio]] (DAR)</strong> is how many payload molecules ride on each antibody. More payload means more killing per antibody, but loading an antibody with many oily drug molecules was widely thought to make it clump and clear from the blood faster.</li></ul>
        <h3>A history of near misses</h3>
        <p>The first attempts, in the 1980s and 1990s, failed for three reasons that Daiichi Sankyo's scientists later summarized neatly. The antibodies came from mice, and patients' immune systems attacked them. The linkers released their cargo slowly or unpredictably. And the payloads, borrowed from ordinary chemotherapy (methotrexate, vinblastine, doxorubicin), were simply not potent enough at the tiny amounts an antibody could deliver.</p>
        <p>The first ADC to reach the market showed how unforgiving the balance is. Mylotarg (gemtuzumab ozogamicin), now sold by Pfizer, joined an antibody against CD33, a protein on leukemia cells, to calicheamicin, a DNA-shredding bacterial toxin. The FDA gave it [[accelerated approval]] in 2000 for older patients with relapsed acute myeloid leukemia. A decade later the confirmatory trial came back: adding Mylotarg to chemotherapy did not improve survival, and it was linked with excess serious side effects and early deaths, including liver damage. Pfizer withdrew it in 2010. It came back in 2017 at a lower, split dose, after a French trial showed that a gentler schedule improved event-free survival. The drug had not changed; the dose had. It was a lesson in how narrow an ADC's window can be.</p>
        <p>Better engineering arrived in the 2010s. Seagen's Adcetris, for lymphoma, was approved in 2011. Then in 2013 came the ADC this story's drug would have to beat: <strong>Kadcyla</strong> ([[T-DM1]], trastuzumab emtansine), from Genentech, using linker-payload technology licensed from ImmunoGen. Kadcyla took Herceptin's antibody and attached [[DM1]], a potent poison that stops cells dividing, through a sturdy, non-cleavable linker, with an average of 3.5 payloads per antibody. In the EMILIA trial of 991 women with previously treated HER2-positive breast cancer, it beat the standard pill combination on both [[progression-free survival]] (median 9.6 vs 6.4 months) and [[overall survival]] (30.9 vs 25.1 months), with fewer severe side effects. It was proof that the concept worked.</p>
        <p>But Kadcyla had limits built into its design. Its linker is never cut; DM1 is released only when the whole antibody is digested inside the cell, and what comes out is still attached to a fragment of linker and an amino acid. That form crosses cell membranes poorly, so it stays trapped in the cell that swallowed it. That is safe, but it means each dose kills only the cells that swallowed it. Kadcyla works where every cell is loaded with HER2, and not much elsewhere. By 2021, nine ADCs had been approved for cancer. Nobody had yet made one that broke the rule that HER2 drugs were for HER2-positive tumors.</p>`},
      {type: 'figure', title: 'Anatomy of two ADCs', intro: 'Kadcyla and Enhertu share the same antibody. Hover or tap the parts to see what Daiichi Sankyo changed.',
        svg: adcFigure,
        hotspots: {
          antibody: {title: 'The antibody: trastuzumab', text: 'Identical in both drugs: the Herceptin antibody, made in Chinese hamster ovary cells. Its two arm tips bind HER2. The antibody provides the address, and it keeps some of Herceptin\'s own activity against HER2 signaling.'},
          tdm1: {title: 'Kadcyla: DM1 on a non-cleavable linker', text: 'An average of 3.5 [[DM1]] molecules per antibody (the dashed square stands for the "half"), attached to lysine amino acids at scattered positions through a sturdy thioether linker. The payload only comes free when the whole antibody is digested, and the released form cannot leave the cell.'},
          linker: {title: 'Enhertu\'s linker', text: 'A four-amino-acid chain (glycine-glycine-phenylalanine-glycine) designed to be cut by [[lysosome|lysosomal]] enzymes such as [[cathepsin|cathepsins]], followed by a spacer that falls away on its own so the payload is released unmodified. In Daiichi\'s lab tests only about 2.1% of the payload came off in human plasma over 21 days.'},
          payload: {title: 'Enhertu\'s payload: DXd', text: '[[DXd]] is a derivative of [[exatecan]], a [[topoisomerase I]] inhibitor. Daiichi reported it is about 10 times more potent at blocking the enzyme than [[SN-38]], the active form of the older drug irinotecan. It can cross cell membranes, which makes the [[bystander effect]] possible, and it is cleared from the body quickly if it escapes.'},
          dar: {title: 'Drug-to-antibody ratio', text: 'Enhertu carries about 8 payloads per antibody, attached at the antibody\'s own cysteine sites so the product is uniform. Kadcyla carries an average of 3.5. More warheads per antibody means more payload delivered per HER2 molecule, which matters when the tumor has little HER2.'},
        },
        caption: 'Schematic. Payload positions are illustrative; in Enhertu they sit at the eight cysteines that normally hold the antibody\'s chains together. Sources: US prescribing information for Kadcyla and Enhertu; Nakada et al., 2019.'},
      {type: 'callout', variant: 'product', heading: 'An ADC is a modular stack, until it isn\'t',
        html: `<p>To a software person an ADC looks like a clean layered architecture: the antibody is the routing layer, the linker is the "decrypt on arrival" layer, and the payload is the function that runs at the destination. Swap the antibody and, in principle, you point the same payload at a new target. That is exactly how Daiichi later turned one design into a pipeline.</p>
        <p>Where the analogy breaks: the layers are not independent. Adding payload changes how the antibody behaves in the blood; a linker chemistry that is stable in mice may leak in humans; a payload that can leave the cell (good for killing neighbors) can also reach healthy tissue. You cannot unit-test layers in isolation, because the only real integration environment is a patient, and every new combination is a new drug that needs its own trials.</p>`},

      // ---------------- Key insight ----------------
      {type: 'story', kicker: 'The key insight', title: 'Rebuilding the missile around a failed drug', tocTitle: 'Daiichi\'s design',
        html: `<p>Daiichi Sankyo is a Tokyo pharmaceutical company that describes itself as having more than a century of scientific history. In the 1990s and 2000s it had developed a chemotherapy drug called [[exatecan]], which works by jamming an enzyme called [[topoisomerase I]].</p>
        <p>Here is what that enzyme does. DNA is a long, twisted double strand. When a cell copies it before dividing, the machinery that unzips the strands makes the rope ahead of it twist tighter and tighter, like a phone cord. Topoisomerase I relieves the tension: it nicks one strand, lets it swivel, and reseals the nick. Drugs like exatecan trap the enzyme in the middle of that job, holding the nick open. When the copying machinery runs into it, the DNA breaks, and a cell with badly broken DNA kills itself. The older drug irinotecan, whose active form is called [[SN-38]], works the same way and is a staple of colon cancer treatment.</p>
        <p>As a standalone drug, exatecan failed. In a [[phase 3]] trial of 349 patients with advanced pancreatic cancer, published in 2006, adding exatecan to standard chemotherapy gave a median survival of 6.7 months versus 6.2 months without it, a difference that was not statistically meaningful. It is the kind of result that usually ends a molecule's story.</p>
        <p>Daiichi's antibody-drug conjugate researchers, among them Yusuke Ogitani, Takashi Nakada and Toshinori Agatsuma, saw a different use for it. The ADC field had mostly used payloads that attack tubulin, the scaffolding a cell needs in order to split in two (DM1 in Kadcyla, or the auristatins in Adcetris), or calicheamicin, which cuts DNA directly. A topoisomerase I inhibitor was an unusual choice. Daiichi's chemists made a new derivative of exatecan, which they called [[DXd]], and reported that it blocked topoisomerase I about ten times more potently than SN-38. Then they designed everything else around it. In a 2019 review they listed the features they were aiming for:</p>
        <ul><li><strong>A highly potent new payload</strong>, DXd, with a different mechanism from the tubulin poisons used before, which matters for tumors that have stopped responding to Kadcyla.</li>
        <li><strong>A high drug-to-antibody ratio of about 8</strong>, more than twice Kadcyla's, loaded at the antibody's own cysteine sites so that almost every molecule carries the same number of payloads.</li>
        <li><strong>A linker cut by enzymes inside the cell</strong>: a short chain of four amino acids that lysosomal enzymes cleave, plus a spacer that falls away so DXd comes out in its active form.</li>
        <li><strong>Stability in the blood</strong>: in human plasma in the lab, only about 2.1% of the payload came off over 21 days.</li>
        <li><strong>A payload that clears quickly</strong> if it does escape, limiting how long healthy tissue is exposed.</li>
        <li><strong>A payload that can cross membranes</strong>, so after killing the cell that swallowed it, DXd can drift into neighbors and kill them too: the [[bystander effect]].</li></ul>
        <p>The last two points are the heart of it. Tumors are patchy. Even in a HER2-positive tumor, some cells carry far less HER2 than others, and in a HER2-low tumor most cells carry only a little. A payload that stays locked inside its target cell can only kill cells that are rich in the target. A payload that seeps out kills the patch around them.</p>
        <p>The 2016 preclinical papers made the case in mice. Ogitani and colleagues reported that the conjugate, then called DS-8201a, shrank tumors in a HER2-positive gastric cancer model after a single dose, worked in a tumor model that did not respond to Kadcyla, and, unlike Kadcyla, showed activity against several breast cancer [[patient-derived xenograft|patient-derived tumors grown in mice]] with low HER2. In a companion paper they grew HER2-positive and HER2-negative cells together: DS-8201a killed both, while Kadcyla killed only the HER2-positive ones. When the HER2-negative tumor was implanted on the opposite side of the mouse, DS-8201a did not touch it, which suggested the bystander killing was local rather than a sign that the payload was leaking everywhere.</p>
        <p>Monkeys tolerated high doses, which suggested room to dose humans effectively. The design choices were all ones that the ADC field, burned by linker leakage and toxicity, had reasons to be wary of: a high DAR, a payload deliberately built to escape the cell, and a mechanism borrowed from a failed drug. Daiichi made them all at once.</p>`},
      {type: 'mechanism', title: 'How Enhertu kills', intro: 'Seven steps from infusion to cell death. Use Next, the dots, or your arrow keys.',
        svg: mechSvg,
        steps: [
          {title: 'Circulating in the blood', text: 'Enhertu is given as an infusion into a vein every three weeks. Each antibody carries about eight DXd molecules. The linker is built to hold in the bloodstream: in lab tests only about 2.1% of the payload came off in human plasma over three weeks. Payload that falls off early would act like ordinary chemotherapy, hitting healthy tissue.', show: [...base, 'adc'], focus: ['adc']},
          {title: 'Docking onto HER2', text: 'The antibody\'s arm tips find HER2 on the tumor surface and bind. This is the same binding as Herceptin, so the antibody also dampens HER2 signaling a little. Crucially, Enhertu does not need the tumor to depend on HER2; it only needs HER2 as a docking point. A tumor with modest HER2 can still pull in a lot of payload, because each antibody brings eight.', show: [...base, 'adc'], move: {adc: 'translate(0px, 72px)'}, focus: ['her2']},
          {title: 'Swallowed', text: 'The cell pulls HER2, with the drug attached, inside in a membrane bubble. This [[internalization]] is why the choice of target matters: a surface protein that never gets swallowed would leave the payload outside, where the linker would never be cut.', show: [...base, 'vesicle'], focus: ['vesicle']},
          {title: 'The linker is cut in the lysosome', text: 'The bubble merges with a [[lysosome]], the cell\'s recycling compartment, full of protein-cutting enzymes such as [[cathepsin|cathepsins]]. They snip the four-amino-acid linker, and a spacer falls away, releasing DXd in its active form.', show: [...base, 'lyso'], dim: ['vesicle'], focus: ['lyso'], pulse: ['lyso']},
          {title: 'DXd breaks the DNA', text: 'DXd crosses into the nucleus and traps [[topoisomerase I]] while it has DNA nicked open. When the cell tries to copy its DNA, the strands break. A cell with badly broken DNA triggers its own death program.', show: [...base, 'dxd', 'dnabreak'], dim: ['lyso'], focus: ['dnabreak'], pulse: ['dxd']},
          {title: 'The bystander effect', text: 'Unlike Kadcyla\'s payload, DXd can pass through cell membranes. Some of it diffuses out of the dying cell into neighbors, including cells with little or no HER2, and kills them too. Tumors are patchy, so this matters. The flip side: payload that escapes can reach healthy tissue, which is one reason ADC side effects are never zero. DXd is cleared quickly from the body, which limits that exposure.', show: [...base, 'dnabreak', 'bystander', 'nbdamage'], dim: ['dxd'], pulse: ['bystander'], focus: ['nbdamage']},
          {title: 'Both cells die', text: 'The targeted cell and its neighbor both die. Repeat across billions of cells, every three weeks. This is why Enhertu works in [[HER2-low]] tumors where Herceptin and Kadcyla do not, and also why its toxicity profile includes typical chemotherapy effects such as nausea and low blood counts, plus a lung risk covered later in this case.', show: [...base, 'dnabreak', 'nbdamage', 'death'], focus: ['death']},
        ]},
      {type: 'explorer', title: 'Build your own ADC', tocTitle: 'Interactive: build an ADC',
        intro: 'A <b>teaching model</b>, not pharmacology: the formulas are invented to show the direction of each trade-off, not real magnitudes. Try three designs. <b>"Mylotarg era"</b>: DAR 2, stability 3, potency 10, permeability 5. <b>"Kadcyla-like"</b>: DAR 4, stability 10, potency 6, permeability 1. <b>"Enhertu-like"</b>: DAR 8, stability 9, potency 8, permeability 8.',
        inputs: [
          {id: 'dar', label: '[[DAR|Drug-to-antibody ratio]]', min: 2, max: 8, step: 1, value: 4, fmt: v => v + ' per antibody'},
          {id: 'stab', label: 'Linker stability in blood', min: 1, max: 10, value: 6, fmt: v => v + ' / 10'},
          {id: 'pot', label: 'Payload potency', min: 1, max: 10, value: 6, fmt: v => v + ' / 10'},
          {id: 'perm', label: 'Payload membrane permeability', min: 0, max: 10, value: 2, fmt: v => v + ' / 10'},
        ],
        compute: (v) => {
          const r = 0.5 + 0.05 * v.stab, pr = (10 - v.stab) / 10, pot = v.pot / 10, perm = v.perm / 10, clr = 1 - 0.03 * (v.dar - 2);
          const delivered = v.dar * r * clr;
          const killHigh = 100 * (1 - Math.exp(-delivered * pot * 0.9));
          const killLow = 100 * (1 - Math.exp(-(delivered * pot * 0.1 + perm * delivered * pot * 0.25) * 0.9));
          const tox = Math.min(100, pr * v.dar * pot * 25 + perm * pot * v.dar * 1.2 + pot * v.dar * 1.5);
          const bar = (label, val, col) => `<div style="display:grid;grid-template-columns:230px 1fr 50px;gap:10px;align-items:center;margin:6px 0;font:14px var(--sans)"><span>${label}</span><span style="background:var(--panel-2);border-radius:6px;height:16px;overflow:hidden"><span style="display:block;height:100%;width:${Math.max(1, val).toFixed(0)}%;background:var(${col})"></span></span><b>${val.toFixed(0)}</b></div>`;
          let verdict;
          if (tox > 60) verdict = 'Too toxic. Payload is escaping in the blood or reaching healthy tissue faster than the tumor benefit justifies. This is roughly what went wrong with the first Mylotarg regimen: potent payload, leaky clasp, narrow window.';
          else if (killHigh > 70 && killLow < 35) verdict = 'Kadcyla-like. Strong against tumors packed with HER2, little against HER2-low tumors, because the payload stays in the cell that swallowed it and each antibody carries few warheads. Safe, but the market is capped at HER2-positive disease.';
          else if (killLow >= 55 && tox <= 60) verdict = 'Enhertu-like. Enough payload per antibody, and a payload that reaches neighbors, so even HER2-low tumors respond. The cost: more systemic toxicity than a Kadcyla-like design, which is the real-world trade-off (nausea, low blood counts, lung inflammation).';
          else if (killHigh < 50) verdict = 'Underpowered. Not enough payload reaches the tumor to do much. This was the fate of many 1980s–90s ADCs with ordinary chemo payloads.';
          else verdict = 'A middle-of-the-road design. Try raising DAR and permeability to reach HER2-low tumors, or linker stability to cut toxicity.';
          return `${bar('Kill in a HER2-high tumor', killHigh, '--il-1')}${bar('Kill in a HER2-low tumor', killLow, '--il-3')}${bar('Systemic toxicity', tox, '--il-7')}
            <p style="margin:12px 0 4px">${verdict}</p>
            <p style="font-size:14px;color:var(--ink-3);margin:0">Caveats: real ADC behavior depends on the target, the tumor, the linker chemistry and the patient, and the numbers here are not predictions. In the model, higher DAR is slightly penalized because heavily loaded ADCs can clear faster; Daiichi used a water-friendly linker design to limit that.</p>`;
        }},
      {type: 'decision', title: 'Your call: which warhead?', role: 'You lead an ADC research group at Daiichi Sankyo, before the first human dose',
        scenario: `You want to build a better HER2 ADC than Kadcyla. The safe path in the field is to license a proven linker-payload system from one of the established ADC technology companies, as Genentech did with ImmunoGen for Kadcyla. Your company also owns exatecan, a potent topoisomerase I inhibitor that failed to improve survival in a phase 3 pancreatic cancer trial. What do you build on?`,
        options: [
          {label: 'License a proven tubulin-poison linker-payload system and focus on the antibody', outcome: 'Fast and defensible: regulators and partners know these payloads. But you would be building a Kadcyla lookalike against the same antibody, and trastuzumab itself is not new. Your drug would have to beat Kadcyla head to head with the same kind of warhead, and would likely inherit the same limit: little activity in low-HER2 tumors. You would also owe royalties on every sale.'},
          {label: 'Build your own linker-payload around a new exatecan derivative, with high DAR and a payload designed to leak into neighbors', outcome: 'High risk: every element runs against some part of the field\'s caution (high DAR, a membrane-permeable payload, a mechanism from a failed drug). But if it works, you own the whole platform, not just one drug, and you may reach tumors Kadcyla cannot.'},
          {label: 'Skip ADCs; the field\'s track record is poor. Put the budget into small molecules', outcome: 'Defensible given the history: Mylotarg\'s withdrawal was recent memory and many ADC programs had failed. But you would be walking away from an asset (exatecan chemistry) no competitor has, just as second-generation ADCs like Adcetris and Kadcyla were showing the concept could work.'},
        ],
        reality: `Daiichi built its own. Its researchers designed the DXd payload, a cleavable four-amino-acid linker, and a DAR of about 8, and published the preclinical case in 2016. The platform later produced a string of other DXd-based ADCs aimed at different targets, and those, not just Enhertu, became the basis of multibillion-dollar deals with AstraZeneca and Merck. Owning the linker-payload turned out to be worth far more than one drug.`},

      // ---------------- Timeline ----------------
      {type: 'timeline', title: 'Timeline', intro: 'From the discovery of HER2\'s role to a franchise approved across the course of breast cancer. Filter by type, or click a pin.',
        events: [
          {year: 1987, title: 'Slamon links HER2 amplification to worse survival', kind: 'science', text: 'HER2 amplified in 30% of 189 breast tumors; amplification predicts earlier relapse and death (<em>Science</em>).'},
          {year: 1998, title: 'Herceptin (trastuzumab) approved in the US', kind: 'regulatory', text: 'The first HER2-targeted drug, for HER2-overexpressing breast cancer.'},
          {year: 2000, title: 'Mylotarg becomes the first ADC on the market', kind: 'regulatory', text: 'Accelerated approval for older patients with relapsed acute myeloid leukemia.'},
          {year: 2001, title: 'Herceptin pivotal trial published', kind: 'clinical', text: '469 women; median survival 25.1 vs 20.3 months with chemotherapy alone.'},
          {year: 2006, title: 'Exatecan fails in pancreatic cancer', kind: 'setback', text: 'Phase 3, 349 patients: median survival 6.7 vs 6.2 months, not significant. Daiichi\'s molecule later becomes the basis of DXd.'},
          {year: 2010, title: 'Mylotarg withdrawn', kind: 'setback', text: 'Confirmatory trials show no survival gain and excess serious toxicity and early deaths.'},
          {year: 2011, title: 'Adcetris approved', kind: 'regulatory', text: 'Seagen\'s lymphoma ADC, part of a second generation of better-engineered conjugates.'},
          {year: 2013, date: 'Feb 2013', title: 'Kadcyla (T-DM1) approved', kind: 'regulatory', text: 'Trastuzumab plus DM1, average DAR 3.5. Based on EMILIA (991 patients).'},
          {year: 2015, date: 'Aug 2015', title: 'First patient dosed with DS-8201', kind: 'clinical', text: 'Phase 1 dose escalation at two sites in Japan; later expanded to the US.'},
          {year: 2016, title: 'Preclinical papers: works where Kadcyla does not', kind: 'science', text: 'Ogitani and colleagues report activity in low-HER2 tumor models and a bystander effect on HER2-negative neighbors.'},
          {year: 2017, date: 'Sep 2017', title: 'Mylotarg returns at a lower dose', kind: 'regulatory', text: 'Reapproved with a fractionated schedule for newly diagnosed and relapsed CD33-positive AML.'},
          {year: 2019, date: 'Mar 2019', title: 'AstraZeneca deal: $1.35B upfront', kind: 'business', text: 'Up to $6.9B in total; costs and profits shared 50/50 outside Japan.'},
          {year: 2019, date: 'Dec 2019', title: 'US accelerated approval', kind: 'regulatory', text: 'For HER2-positive metastatic breast cancer after two or more HER2 regimens, based on DESTINY-Breast01. Boxed warning for lung disease.'},
          {year: 2020, date: 'Jul 2020', title: 'Second AstraZeneca deal, for Dato-DXd', kind: 'business', text: 'A TROP2-directed DXd ADC: $1B upfront, up to $6B.'},
          {year: 2022, title: 'DESTINY-Breast03 published', kind: 'clinical', text: 'Head to head against Kadcyla: hazard ratio for progression or death 0.28.'},
          {year: 2022, date: 'Jun 2022', title: 'DESTINY-Breast04 at ASCO: standing ovation', kind: 'people', text: 'Shanu Modi presents the HER2-low results, published the same day in <em>NEJM</em>.'},
          {year: 2022, date: 'Aug 2022', title: 'First approval for HER2-low breast cancer', kind: 'regulatory', text: 'Granted under the FDA\'s Real-Time Oncology Review program.'},
          {year: 2023, date: 'Mar 2023', title: 'Pfizer agrees to buy Seagen for about $43B', kind: 'business', text: 'The biggest ADC transaction yet.'},
          {year: 2023, date: 'Oct 2023', title: 'Merck deal for three more DXd ADCs', kind: 'business', text: '$4B upfront plus $1.5B in continuation payments; up to $22B in total.'},
          {year: 2024, date: 'Apr 2024', title: 'Tumor-agnostic approval', kind: 'regulatory', text: 'Accelerated approval for any previously treated HER2 IHC 3+ solid tumor.'},
          {year: 2025, date: 'Jan 2025', title: 'HER2-low and HER2-ultralow after endocrine therapy', kind: 'regulatory', text: 'Based on DESTINY-Breast06; chemotherapy no longer required first.'},
          {year: 2025, date: 'Dec 2025', title: 'First-line HER2-positive metastatic disease', kind: 'regulatory', text: 'With pertuzumab, based on DESTINY-Breast09.'},
          {year: 2026, date: 'May 2026', title: 'Early breast cancer indications', kind: 'regulatory', text: 'Before and after surgery for HER2-positive disease (DESTINY-Breast11 and DESTINY-Breast05).'},
        ]},

      // ---------------- Into the clinic ----------------
      {type: 'story', kicker: 'Into the clinic', title: 'The first patients, and an early hint', tocTitle: 'First patients',
        html: `<p>The first person received DS-8201 on August 28, 2015, in a [[phase 1]] trial at two hospitals in Japan. A phase 1 trial's job is to find a safe dose, so the first patients got tiny amounts and later groups got more, from 0.8 up to 8.0 milligrams per kilogram of body weight. The trial enrolled people whose breast or gastric cancers had stopped responding to everything else.</p>
        <p>Two things stood out in the 24 patients of the dose-escalation phase, published in <em>The Lancet Oncology</em> in 2017. First, the investigators never hit a [[dose-limiting toxicity]]; the maximum tolerated dose was not reached. Second, 10 of the 23 patients who could be assessed had their tumors shrink substantially (a 43% [[response rate]]), and that group included patients whose tumors had only low HER2. The authors flagged it explicitly: the drug showed activity "even in low HER2-expressing tumors".</p>
        <p>The trial then expanded into Japan and the US. In 99 patients with HER2-positive breast cancer, 54.5% responded. And in a separate group of 54 heavily pretreated patients with HER2-low breast cancer, who had received a median of 7.5 previous treatments, 20 responded, 37%. For patients whose tumors were officially "HER2-negative", given a HER2 drug, that was a startling number. Shanu Modi, who led that analysis, would present the confirmatory randomized trial at ASCO five years later.</p>
        <p>As more patients were treated, the drug's dark side emerged: [[interstitial lung disease]], inflammation and scarring of lung tissue. In the pooled data from the phase 1 study and DESTINY-Breast01 that supported the first label, six patients died of it. That signal would follow Enhertu into every trial and onto its label.</p>
        <p>The first registration trial, DESTINY-Breast01, was a [[phase 2]] study with no control group. It enrolled patients with HER2-positive metastatic breast cancer who had already been treated with Kadcyla, the best available HER2 ADC. These were patients with few options left: a median of six previous treatments. A single-arm trial like this cannot prove a drug extends life, but it can show whether tumors shrink in people for whom nothing else is working, which is what the FDA's [[accelerated approval]] pathway is designed for.</p>`},
      {type: 'trial', title: 'DESTINY-Breast01: after Kadcyla had stopped working', tocTitle: 'Trial: DESTINY-Breast01',
        design: {name: 'DESTINY-Breast01', phase: 'Phase 2', blinding: 'Open-label, single arm', years: 'Published 2019–2020', n: 184, population: 'HER2-positive metastatic breast cancer, previously treated with Kadcyla', randomization: null,
          arms: [{name: 'Enhertu 5.4 mg/kg', n: 184, desc: 'IV every 3 weeks'}], endpoint: 'Tumor response rate (central review)',
          details: {'Primary endpoint': '[[response rate|Objective response rate]], judged by independent central review', 'Key secondary': 'Duration of response, [[progression-free survival]], safety', 'Why single-arm': 'No standard treatment reliably worked at this stage; the question was whether tumors would shrink at all'}},
        predict: {q: 'In women who had already received a median of six prior treatments, including Kadcyla, what share do you think had their tumors shrink substantially on Enhertu?', options: ['About 15%, a typical late-line result', 'About 35%', 'About 60%', 'About 90%'], answer: 2,
          explain: 'In the intention-to-treat analysis 112 of 184 patients responded (60.9%); the FDA\'s review of confirmed responses gave 60.3%. For patients this heavily treated, that is an unusually high rate, and responses lasted a median of 14.8 months.'},
        results: [
          {kind: 'bar', title: 'Tumor response in DESTINY-Breast01', subtitle: 'Confirmed responses by independent central review (FDA analysis), n = 184', unit: '%', categories: ['Any response', 'Partial response', 'Complete response'], series: [{name: 'Share of patients', values: [60.3, 56, 4.3]}], colorByCategory: false, note: 'Source: FDA approval summary. The trial publication reported 60.9% in its intention-to-treat analysis.'},
          {kind: 'bar', title: 'How long it lasted', unit: 'mo', categories: ['Response lasted', 'Progression-free'], series: [{name: 'Months', values: [14.8, 16.4]}], note: 'Median follow-up was 11.1 months, so these medians were early estimates. Source: DESTINY-Breast01, NEJM 2020.'},
        ],
        takeaway: 'The trial also found drug-related lung disease in 13.6% of patients, and 2.2% (four people) died of it. On December 20, 2019, the FDA granted accelerated approval with a boxed warning: for patients with so few options, the response data were judged to outweigh a risk that could be monitored. Continued approval depended on a randomized [[confirmatory trial]]: DESTINY-Breast03.'},

      // ---------------- The deal ----------------
      {type: 'decision', title: 'Your call: pay $1.35 billion upfront?', tocTitle: 'Decision: the AstraZeneca deal', role: 'You run oncology business development at AstraZeneca, early 2019',
        scenario: `Daiichi Sankyo is looking for a global partner for DS-8201. The phase 1 data are striking, including responses in HER2-low tumors, and DESTINY-Breast01 is enrolling. But it is an ADC, a class with a history of disappointments; there is a lung toxicity signal with deaths; and Daiichi will insist on keeping manufacturing, keeping Japan, and splitting development costs and profits 50/50. The asking price: $1.35 billion upfront, before any approval, and up to $5.55 billion more in milestones. You would need to raise equity to fund it. What do you recommend?`,
        options: [
          {label: 'Pay it. Sign the 50/50 deal and commit to a broad development program, including HER2-low', outcome: 'You are betting that the phase 1 signal is real and that HER2-low could be a much bigger market than HER2-positive. If DESTINY-Breast01 disappoints or the lung signal worsens, you have paid more than a billion dollars for an unapproved drug and diluted shareholders to do it. If it works, you share half of a drug that could be used across breast, gastric and lung cancer.'},
          {label: 'Counter with a smaller upfront and more milestones, and only the HER2-positive indication', outcome: 'Financially prudent: you pay mostly for success. But Daiichi holds an asset with fresh data and can walk away, go alone, or find another partner. And by excluding HER2-low you would carve out the part of the market with the largest upside. Asking the seller to take the risk only works when the seller needs you more than you need them.'},
          {label: 'Pass. ADCs are risky and the lung deaths could sink the drug', outcome: 'You avoid the downside, and plenty of analysts would have agreed. The cost of being wrong is that a competitor gets the asset, and you spend the next five years trying to buy your way into ADCs at higher prices.'},
        ],
        reality: `AstraZeneca paid. On March 28, 2019, it agreed to pay $1.35 billion upfront (half on signing, half 12 months later), plus up to $3.8 billion for regulatory and other milestones and $1.75 billion for sales milestones: up to $6.9 billion in all. The companies share development costs and profits equally worldwide except Japan, where Daiichi keeps the rights; Daiichi manufactures. AstraZeneca funded the upfront and near-term milestones through a new equity placement of about $3.5 billion. CEO Pascal Soriot said the drug could become a transformative medicine and highlighted its potential in HER2-low tumors. Nine months later it had US approval; in 2025, combined sales were $4.98 billion.`},
      {type: 'story', title: 'Inside the deal', tocTitle: 'The deal',
        html: `<p>Headline deal values in biotech are mostly fiction, in the sense that they add up every [[milestone payment]] that could ever be paid. The number that matters is the [[upfront payment]], the only money guaranteed to change hands. By that measure, $1.35 billion for a drug that had not yet been approved anywhere was an enormous bet. AstraZeneca paid it in two halves, the second a year after signing, and it raised about $3.5 billion in new shares at the same time, more than half of it earmarked for this collaboration.</p>
        <p>The structure tells you who had the leverage. This was not a classic [[licensing deal]] in which a big company buys rights and pays the inventor a [[royalty]]. It was a 50/50 co-development and co-commercialization partnership. Daiichi kept Japan (AstraZeneca receives only a mid-single-digit royalty on Japanese sales), kept sole responsibility for manufacturing and supply, and books the product sales in many markets, including the US. AstraZeneca brought a global oncology sales force, a large clinical operation to run dozens of trials in parallel, and cash. In its accounts, AstraZeneca reports Enhertu's "combined sales" recorded by both companies, which is why the sales figures in this case are combined worldwide [[in-market sales]], not AstraZeneca's revenue.</p>
        <p>Why would Daiichi give away half of what was clearly its best asset? The companies' announcements stressed combining their skills; the general logic of such deals is that running a global program of this size is extraordinarily expensive and slow for one company alone. The value of a cancer drug depends on how quickly it can be tested in every tumor type and treatment line where it might work. A partner that could run DESTINY-Breast03, -04, -06, -09 and trials in gastric, lung and other cancers at the same time could make the drug worth far more than the half Daiichi gave up.</p>
        <p>Pascal Soriot, AstraZeneca's chief executive, said at the time that the drug could become a transformative medicine for HER2-positive breast and gastric cancers, and pointed to its potential as the first therapy for HER2-low tumors. That second point is worth pausing on. In March 2019, the evidence for HER2-low consisted of phase 1 data in a few dozen patients. AstraZeneca was paying, in part, for an option on a market that did not formally exist yet.</p>
        <p>Use the explorer below to feel how that bet looked from AstraZeneca's side in 2019. The formula is deliberately crude; the point is to see which assumptions drive the answer.</p>`},
      {type: 'explorer', title: 'Was $1.35 billion a good price?', tocTitle: 'Interactive: value the deal',
        intro: 'A toy model of AstraZeneca\'s side of the deal as it might have looked in 2019. Not a real [[rNPV]]: no discounting by year, no tax, invented margins. It assumes HER2-positive uses could reach 40% of the drug\'s peak sales and HER2-low 60%, and that AstraZeneca keeps half of an operating profit of 40% of sales for about ten peak-year equivalents.',
        inputs: [
          {id: 'pPos', label: 'Chance of success in HER2-positive disease', min: 10, max: 95, step: 5, value: 60, fmt: v => v + '%'},
          {id: 'pLow', label: 'Chance HER2-low also works (if the drug works at all)', min: 0, max: 80, step: 5, value: 25, fmt: v => v + '%'},
          {id: 'peak', label: 'Peak annual sales if everything works', min: 2, max: 15, step: 0.5, value: 6, fmt: v => '$' + v + 'B'},
        ],
        compute: (v) => {
          const pPos = v.pPos / 100, pLow = v.pLow / 100;
          const expectedShare = pPos * 0.4 + pPos * pLow * 0.6;
          const expPeak = v.peak * expectedShare;
          const value = 0.5 * 0.4 * expPeak * 10;
          const payments = 1.35 + 5.55 * expectedShare;
          const net = value - payments;
          const f = x => (x < 0 ? '−$' : '$') + Math.abs(x).toFixed(1) + 'B';
          return `<p>Expected peak sales, weighted by the odds: <b>${f(expPeak)}</b> a year.</p>
            <p>Value to AstraZeneca of half the profits: <b>${f(value)}</b>. Expected payments to Daiichi (upfront plus probability-weighted milestones): <b>${f(payments)}</b>.</p>
            <p style="font-size:19px">Toy net value of the deal: <b style="color:${net >= 0 ? 'var(--good)' : 'var(--bad)'}">${f(net)}</b></p>
            <p style="font-size:14px;color:var(--ink-3)">Notice how much of the answer rides on the HER2-low slider. Set it to 0% and the deal only works if you are confident in HER2-positive success and a high peak. For reference, what actually happened: combined worldwide sales were $4.98B in 2025 and still growing, with approvals in HER2-positive, HER2-low and HER2-ultralow breast cancer and other tumors. AstraZeneca also shares the development costs, which this toy ignores.</p>`;
        }},

      // ---------------- DB-03 ----------------
      {type: 'story', kicker: 'The trials', title: 'Head to head with the incumbent', tocTitle: 'DESTINY-Breast03',
        html: `<p>An accelerated approval is a loan against future evidence. To keep it, Daiichi and AstraZeneca had to show in a randomized trial that Enhertu actually helped patients live longer without their cancer growing. They chose the hardest comparison available: DESTINY-Breast03 pitted Enhertu directly against Kadcyla, the reigning [[standard of care]] for HER2-positive metastatic breast cancer after first-line treatment.</p>
        <p>That choice is worth appreciating. Beating a weak control is easy and persuades nobody. Beating the drug oncologists already use, with the same antibody inside it, would show that the linker, payload and DAR changes, not the antibody, made the difference. It also set up a clean commercial story: if Enhertu won, Kadcyla's main use would shrink.</p>
        <p>The trial randomized 524 patients, 261 to Enhertu and 263 to Kadcyla, across 169 centers on five continents. It was [[open-label]]: the two drugs have different side effect profiles and infusion routines, so blinding was impractical. To guard against bias, the [[primary endpoint]], [[progression-free survival]], was judged by radiologists at a central lab who did not know which drug each patient had received.</p>
        <p>Progression-free survival is the time until a scan shows the cancer growing, or the patient dies. It is a faster endpoint than [[overall survival]], because it doesn't wait for deaths, and in metastatic breast cancer it is widely accepted, though critics point out it does not always translate into longer life. Before you look, make a guess.</p>`},
      {type: 'trial', title: 'DESTINY-Breast03: Enhertu vs Kadcyla', tocTitle: 'Trial: DESTINY-Breast03',
        design: {name: 'DESTINY-Breast03', phase: 'Phase 3', blinding: 'Open-label, blinded central review', years: '2018–2021 (enrollment 2018–2020)', n: 524, population: 'HER2-positive metastatic breast cancer previously treated with trastuzumab and a taxane', randomization: '1:1',
          arms: [{name: 'Enhertu 5.4 mg/kg', n: 261, desc: 'IV every 3 weeks'}, {name: 'Kadcyla 3.6 mg/kg', n: 263, desc: 'IV every 3 weeks', control: true}], endpoint: 'Progression-free survival (blinded central review)',
          details: {'Primary endpoint': '[[progression-free survival]] by blinded independent central review', 'Key secondary': '[[overall survival]]', 'Stratified by': 'Hormone receptor status, prior pertuzumab, disease in internal organs'}},
        predict: {q: 'Kadcyla had itself beaten the previous standard in 2012. What do you think the hazard ratio for progression or death was with Enhertu versus Kadcyla? (1.0 = no difference; lower is better for Enhertu.)', options: ['About 0.9: a small edge', 'About 0.7: a clear but ordinary win', 'About 0.5: halving the rate', 'About 0.28: cutting the rate by more than two-thirds'], answer: 3,
          explain: 'The hazard ratio was 0.28 (95% CI 0.22–0.37). At 12 months, 75.8% of Enhertu patients were alive without progression, versus 34.1% on Kadcyla. With longer follow-up, median progression-free survival was 28.8 months versus 6.8. Hazard ratios this low are rare in phase 3 oncology trials, and rarer still against an active modern drug.'},
        results: [
          {kind: 'km', title: 'Progression-free survival', subtitle: 'Schematic curves drawn from the reported medians (28.8 vs 6.8 months, 2023 update), not digitized from the paper', xLabel: 'Months', unit: '%', yMax: 100, xMax: 36,
            series: [{name: 'Enhertu', points: expCurve(28.8, 36)}, {name: 'Kadcyla', points: expCurve(6.8, 36), color: 2}],
            markers: [{x: 28.8, y: 50, label: 'median 28.8 mo', series: 0}, {x: 6.8, y: 50, label: 'median 6.8 mo', series: 1}], note: 'Exponential curves fitted to the medians only. Real curves differ in shape. Sources: Cortés et al., NEJM 2022; Hurvitz et al., Lancet 2023.'},
          {kind: 'bar', title: 'Key results', unit: '%', categories: ['PFS at 12 months', 'Response rate'], series: [{name: 'Enhertu', values: [75.8, 79.7]}, {name: 'Kadcyla', values: [34.1, 34.2], color: 2}], note: 'Primary analysis, NEJM 2022.'},
        ],
        takeaway: 'Overall survival followed: in the 2023 update, the hazard ratio for death was 0.64, and after about 41 months of follow-up median survival was 52.6 months versus 42.7 (hazard ratio 0.73). Lung disease was more common with Enhertu (10.5% vs 1.9% in the first analysis; 16.7% vs 3.4% of any grade with longer follow-up), though none of the cases in the first analysis were grade 4 or 5. By August 2022 the US label had been expanded, on the strength of this trial, to patients who had received one prior HER2 regimen, moving Enhertu ahead of Kadcyla in the treatment sequence.'},
      {type: 'callout', variant: 'numbers', heading: 'Enhertu vs Kadcyla, by the numbers',
        html: `<p><b>Same antibody.</b> Different linker, payload and loading: about 8 payloads per antibody versus 3.5.</p>
        <p><b>28.8 vs 6.8 months</b> median progression-free survival (2023 update): roughly four times as long before the cancer grew.</p>
        <p><b>79.7% vs 34.2%</b> of patients had their tumors shrink substantially.</p>
        <p><b>52.6 vs 42.7 months</b> median overall survival after about 41 months of follow-up: about ten months more life on average.</p>
        <p><b>16.7% vs 3.4%</b>: any-grade lung inflammation with longer follow-up. The price of the stronger drug is a lung risk that must be watched.</p>`},

      // ---------------- HER2-low decision + DB-04 ----------------
      {type: 'story', title: 'The HER2-low bet', tocTitle: 'The HER2-low bet',
        html: `<p>Winning in HER2-positive disease meant taking share from Kadcyla in roughly one in six breast cancers. The larger prize was the other group: the roughly half of breast cancers with some HER2 but not enough to be called positive. For those patients, especially after [[endocrine therapy]] stopped working, the standard of care was sequential chemotherapy, one drug after another, each with diminishing returns.</p>
        <p>The phase 1 signal was real but thin: 20 responses among 54 patients, no control group, and a test (the IHC 1+ versus 0 boundary) that pathologists had never been trained to call carefully. The authors of the eventual phase 3 trial noted that available HER2-directed therapies had been ineffective in HER2-low cancers; the Herceptin-era rule existed for a reason. To change practice, the companies would need a randomized trial with a hard endpoint, and they would need to define "HER2-low" precisely enough that every participating lab could find the right patients.</p>
        <p>Before you see what they did, put yourself in their position.</p>`},
      {type: 'decision', title: 'Your call: how to prove HER2-low?', tocTitle: 'Decision: HER2-low trial', role: 'You lead global development for the Enhertu partnership, 2018',
        scenario: `You have a 37% response rate in 54 heavily pretreated HER2-low patients from phase 1. You could (a) file for accelerated approval on a larger single-arm HER2-low study, which would be faster; (b) run a randomized phase 3 against chemotherapy, which is slower and risks a clear, public failure; or (c) wait until the HER2-positive program has succeeded, then decide. Which do you choose?`,
        options: [
          {label: 'A single-arm study for accelerated approval', outcome: 'Fastest to market, and the FDA has granted accelerated approvals on response rates before. But "HER2-low" is not an established category; a single-arm result would not tell doctors whether the drug beats the chemotherapy those patients would otherwise get, guidelines would be slow to adopt it, and payers would push back. You would also have no survival data to weigh against the lung risk.'},
          {label: 'A randomized phase 3 against doctors\' choice of chemotherapy', outcome: 'Slower, and if it fails, the whole HER2-low story dies in public. But a win would be decisive: survival data against real-world chemotherapy, in a precisely defined population, with a companion test to go with it. That is what it takes to create a new category rather than a niche label.'},
          {label: 'Wait for the HER2-positive results first', outcome: 'Lower risk of wasting money, but years slower, and in a field where competitors were already designing ADCs of their own, being second to HER2-low could forfeit the category entirely.'},
        ],
        reality: `They ran the randomized trial. DESTINY-Breast04 enrolled 557 patients with HER2-low metastatic breast cancer who had already had one or two lines of chemotherapy, and randomized them 2:1 to Enhertu or the [[physician's choice]] of standard chemotherapy. HER2-low was defined centrally as IHC 1+, or IHC 2+ with a negative ISH test. The primary endpoint was progression-free survival in the hormone-receptor-positive group, with overall survival as a key secondary endpoint.`},
      {type: 'trial', title: 'DESTINY-Breast04: HER2 therapy for "HER2-negative" patients', tocTitle: 'Trial: DESTINY-Breast04',
        design: {name: 'DESTINY-Breast04', phase: 'Phase 3', blinding: 'Open-label, blinded central review', years: 'Reported 2022', n: 557, population: 'HER2-low (IHC 1+ or 2+/ISH−) metastatic breast cancer after 1–2 lines of chemotherapy; 494 HR-positive, 63 HR-negative', randomization: '2:1',
          arms: [{name: 'Enhertu 5.4 mg/kg', n: 373, desc: 'IV every 3 weeks'}, {name: 'Physician\'s choice chemo', n: 184, desc: 'eribulin, capecitabine, gemcitabine, nab-paclitaxel or paclitaxel', control: true}], endpoint: 'Progression-free survival, HR-positive cohort',
          details: {'Primary endpoint': '[[progression-free survival]] in the HR-positive cohort (blinded central review)', 'Key secondary': 'Progression-free survival in all patients; [[overall survival]] in the HR-positive cohort and in all patients', 'Why 2:1': 'More patients get the new drug, which helps enrollment when the control is chemotherapy patients have often already had'}},
        predict: {q: 'These patients\' tumors had been called HER2-negative. In the HR-positive cohort, what happened to overall survival with Enhertu versus chemotherapy?', options: ['No difference: HER2-low was too little target', 'Longer progression-free survival, but no survival difference', 'Longer progression-free survival and about six months longer median survival', 'Survival doubled'], answer: 2,
          explain: 'Median progression-free survival was 10.1 vs 5.4 months (hazard ratio 0.51) and median overall survival 23.9 vs 17.5 months (hazard ratio 0.64) in the HR-positive cohort. Across all patients: 9.9 vs 5.1 months and 23.4 vs 16.8 months. Tumors shrank in 52.3% of Enhertu patients versus 16.3% on chemotherapy. Severe (grade 3 or higher) side effects were actually less common on Enhertu: 52.6% vs 67.4%.'},
        results: [
          {kind: 'km', title: 'Overall survival, HR-positive cohort', subtitle: 'Schematic curves drawn from the reported medians (23.9 vs 17.5 months), not digitized from the paper', xLabel: 'Months', unit: '%', yMax: 100, xMax: 36,
            series: [{name: 'Enhertu', points: expCurve(23.9, 36)}, {name: 'Chemotherapy', points: expCurve(17.5, 36), color: 8}],
            markers: [{x: 23.9, y: 50, label: 'median 23.9 mo', series: 0}], note: 'Exponential curves matched to the medians only. Source: Modi et al., NEJM 2022; US prescribing information.'},
          {kind: 'km', title: 'Progression-free survival, HR-positive cohort', subtitle: 'Schematic curves drawn from the reported medians (10.1 vs 5.4 months)', xLabel: 'Months', unit: '%', yMax: 100, xMax: 24,
            series: [{name: 'Enhertu', points: expCurve(10.1, 24)}, {name: 'Chemotherapy', points: expCurve(5.4, 24), color: 8}], note: 'Schematic, not digitized. Hazard ratio 0.51.'},
          {kind: 'bar', title: 'Tumor response and severe side effects (all patients)', unit: '%', categories: ['Response rate', 'Grade 3+ side effects'], series: [{name: 'Enhertu', values: [52.3, 52.6]}, {name: 'Chemotherapy', values: [16.3, 67.4], color: 8}], note: 'Sources: US prescribing information (response); NEJM 2022 (adverse events).'},
        ],
        takeaway: 'Drug-related lung disease occurred in 12.1% of Enhertu patients, and 0.8% (three patients) died of it. The trial did not ask whether HER2-low is a distinct biology; it showed that HER2-low is a treatable one.'},
      {type: 'story', title: 'From standing ovation to a new category', tocTitle: 'A new category',
        html: `<p>Modi presented DESTINY-Breast04 at ASCO in June 2022, and the <em>New England Journal of Medicine</em> published it the same day. The National Cancer Institute's news service reported the standing ovation, and quoted breast oncologists describing a result that would fundamentally change how metastatic breast cancer is classified.</p>
        <p>The FDA moved at unusual speed. On August 5, 2022, it approved Enhertu for unresectable or metastatic HER2-low breast cancer after prior chemotherapy, making it the first HER2-directed therapy for that group. The review ran under [[RTOR|Real-Time Oncology Review]], a pilot in which the agency examines data as they come in rather than waiting for a complete application, after the drug had already received [[breakthrough therapy designation]] and [[priority review]] for the indication.</p>
        <h3>The pathologists' problem</h3>
        <p>Creating a category on a pathology report creates work in the pathology lab. The IHC scale had been designed to find 3+ tumors reliably; the difference between 0 and 1+ ("faint, barely perceptible") had never had consequences, and it is a subjective call made by eye. Now it decided whether a woman was offered a drug that could add months of life.</p>
        <p>The follow-on trial showed how blurry that line was. DESTINY-Breast06 tested Enhertu earlier, in HR-positive patients who had progressed on endocrine therapy but had not yet had chemotherapy for metastatic disease. It included not just HER2-low patients but a new group, [[HER2-ultralow]]: tumors scored IHC 0 that still showed faint staining in up to 10% of cells. According to Daiichi Sankyo, nearly two-thirds of tumors that local labs had scored IHC 0 were reclassified as HER2-low or HER2-ultralow when a central lab looked at the same archived sample. The company estimated that about 85–90% of patients with HR-positive, HER2-negative metastatic breast cancer may have some actionable level of HER2.</p>
        <p>The DESTINY-Breast06 results, published in 2024, favored Enhertu: in 713 HER2-low patients, median progression-free survival was 13.2 months versus 8.1 with chemotherapy (hazard ratio 0.62), and the 866-patient total including ultralow was similar. The ultralow subgroup alone, 153 patients, was exploratory and too small to be conclusive on its own (hazard ratio 0.76 with a confidence interval crossing 1). On January 27, 2025, the FDA approved Enhertu for HR-positive, HER2-low or HER2-ultralow metastatic breast cancer after one or more endocrine therapies. In little more than five years, the drug had gone from "after two HER2 therapies have failed" to a first chemotherapy-free option for most HR-positive patients whose hormone therapy stops working.</p>
        <p>One consequence deserves attention. "HER2-low" is best understood as a treatment threshold rather than a separate disease. It is defined by what a test shows and what a drug does, not by a distinct biology. As more sensitive tests and more potent ADCs arrive, the threshold may keep moving down.</p>`},
      {type: 'callout', variant: 'product', heading: 'Redefining the segment, not just the product',
        html: `<p>Product people will recognize the move. Enhertu did not win by being a better Herceptin for Herceptin's customers (though it did beat Kadcyla there). It won by showing that the market segmentation everyone used, positive versus negative, was an artifact of the previous product's limitations. Redraw the segment boundary and the addressable market roughly quadruples, from one in six patients to most of them.</p>
        <p>Where the analogy breaks: you cannot redraw a medical segment with a pricing page. It took a 557-patient randomized trial, a regulator's approval, a companion test, and retraining pathologists to see a faint signal they had been taught to ignore. And the "segment" is a person's biopsy, read by a human, with real error rates at exactly the boundary that now matters.</p>`},

      // ---------------- Safety ----------------
      {type: 'story', kicker: 'Safety', title: 'The lungs', tocTitle: 'Lung toxicity',
        html: `<p>Every Enhertu label since the first one has opened with a black box, the FDA's strongest warning. It names two risks. The second, harm to a fetus, is shared by HER2 drugs generally. The first is specific to this drug and is the one oncologists talk about: <strong>[[interstitial lung disease]] and [[pneumonitis]]</strong>, including fatal cases.</p>
        <p>Interstitial lung disease means inflammation, and eventually scarring, of the delicate tissue around the lungs' air sacs, which is where oxygen crosses into the blood. Mild cases may show up only on a CT scan. Worse cases cause cough, breathlessness and fever. The worst cause respiratory failure. Why an ADC aimed at HER2 inflames the lungs is still not fully understood. The label notes that higher exposure to the drug was associated with more lung disease.</p>
        <p>The numbers have changed as doctors learned to look for it. In the first label, based on 234 patients, lung disease occurred in 9%, and 2.6% died of it. In DESTINY-Breast01, independent adjudicators counted 13.6%, with 2.2% fatal. In later trials, as doctors learned to catch it earlier, the fatal rate was lower: 0.8% in DESTINY-Breast04, three grade 5 events among the 434 treated patients in DESTINY-Breast06, and no grade 4 or 5 cases in the first DESTINY-Breast03 analysis. Across the current US label's pooled data for the standard 5.4 mg/kg dose, lung disease occurred in 12% of patients, with a median onset of 5.5 months, and was fatal in 0.9%.</p>
        <p>What changed was management, not the molecule. The label now tells doctors to:</p>
        <ul><li>Monitor for cough, shortness of breath and fever, and investigate any new respiratory symptom promptly, usually with imaging.</li>
        <li>For lung disease found on a scan without symptoms (grade 1), pause Enhertu until it resolves and consider steroids; restart at the same or a reduced dose depending on how long recovery took.</li>
        <li>For any symptomatic lung disease (grade 2 or higher), stop Enhertu permanently and start high-dose steroids immediately.</li></ul>
        <p>Trials also excluded patients with a history of lung inflammation needing steroids. Real-world patients are often older and sicker than trial patients, which is why [[pharmacovigilance]] after approval matters.</p>
        <p>The other side effects are the familiar ones of a chemotherapy payload: nausea (76% of Enhertu patients in DESTINY-Breast04), fatigue, hair loss, and falls in white blood cells ([[neutropenia]]). The label specifies premedication to prevent nausea. It also carries a warning that Enhertu must not be substituted for Herceptin or Kadcyla, whose names and antibody are similar but whose doses are completely different: a real risk of medication error when three drugs share the word "trastuzumab".</p>`},
      {type: 'custom', title: 'Lung risk in 100 patients', tocTitle: 'Interactive: lung risk',
        intro: 'Each figure is one patient treated with Enhertu. Pick a dataset to see how often drug-related lung disease occurred, and how often it was fatal. Rates are rounded to the nearest whole person.',
        html: `<div class="card"><div id="ildBtns" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px"></div>
          <div style="display:grid;grid-template-columns:minmax(0,1.1fr) minmax(220px,1fr);gap:18px;align-items:start"><div id="ildSvg"></div><div id="ildInfo" style="font:400 16px/1.6 var(--serif)"></div></div></div>`,
        init: (root) => {
          const D = [
            {k: 'l19', name: 'First label (2019)', any: 9, fatal: 2.6, n: 234, note: 'Pooled HER2-positive breast cancer patients in DESTINY-Breast01 and the phase 1 study, as reported in the original December 2019 label.'},
            {k: 'db01', name: 'DESTINY-Breast01', any: 13.6, fatal: 2.2, n: 184, note: 'Heavily pretreated HER2-positive patients; independently adjudicated. Grade 1–2: 10.9%; grade 3–4: 0.5%; grade 5 (fatal): 2.2%.'},
            {k: 'db03', name: 'DESTINY-Breast03', any: 10.5, fatal: 0, n: null, note: 'First analysis against Kadcyla (1.9% with Kadcyla). No grade 4 or 5 cases. With longer follow-up, any-grade lung disease reached 16.7% (vs 3.4%) with no new grade 3+ cases.'},
            {k: 'db04', name: 'DESTINY-Breast04', any: 12.1, fatal: 0.8, n: 371, note: 'HER2-low patients: 12.1% adjudicated drug-related lung disease; 0.8% fatal (three patients).'},
            {k: 'lbl', name: 'Current label, pooled', any: 12, fatal: 0.9, n: null, note: 'All patients treated with 5.4 mg/kg Enhertu alone across breast, lung and solid-tumor studies in the current US label. Median time to onset 5.5 months.'},
          ];
          let cur = 'db01';
          const btns = root.querySelector('#ildBtns');
          D.forEach(d => { const b = document.createElement('button'); b.className = 'btn'; b.textContent = d.name; b.dataset.k = d.k; b.onclick = () => { cur = d.k; draw(); }; btns.appendChild(b); });
          function draw() {
            const d = D.find(x => x.k === cur);
            btns.querySelectorAll('button').forEach(b => b.classList.toggle('primary', b.dataset.k === cur));
            const fatal = Math.round(d.fatal), any = Math.round(d.any);
            let s = '<svg viewBox="0 0 400 420" role="img" aria-label="100 patient icons">';
            for (let i = 0; i < 100; i++) {
              const x = 20 + (i % 10) * 38, y = 16 + Math.floor(i / 10) * 40;
              const cls = i < fatal ? 'il-7' : i < any ? 'il-2' : 'il-8s';
              s += `<circle cx="${x + 10}" cy="${y + 7}" r="6" class="${cls}"/><path d="M${x} ${y + 30} Q${x} ${y + 15} ${x + 10} ${y + 15} Q${x + 20} ${y + 15} ${x + 20} ${y + 30} Z" class="${cls}"/>`;
            }
            s += '</svg>';
            root.querySelector('#ildSvg').innerHTML = s;
            root.querySelector('#ildInfo').innerHTML = `<div style="font:650 18px var(--sans);margin-bottom:6px">${d.name}</div>
              <div><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:var(--il-2);margin-right:6px"></span><b>${d.any}%</b> had drug-related lung disease (non-fatal cases shown orange)</div>
              <div><span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:var(--il-7);margin-right:6px"></span><b>${d.fatal}%</b> died of it</div>
              ${d.n ? `<div style="color:var(--ink-3);font-size:14px;margin-top:4px">Based on ${d.n} Enhertu-treated patients.</div>` : ''}
              <p style="margin-top:10px">${d.note}</p>
              <p style="font-size:14px;color:var(--ink-3)">Different trials enrolled different patients and followed them for different lengths of time, so these are not a clean before-and-after comparison. The broad pattern, a similar overall rate but fewer deaths, is consistent with earlier detection and steroid treatment.</p>`;
          }
          draw();
        }},

      // ---------------- Regulators ----------------
      {type: 'table', title: 'The regulatory path in the US', tocTitle: 'Regulators',
        intro: 'One drug, a steady march from last-line treatment toward earlier treatment and new tumor types. "Accelerated" approvals rest on response rates and require confirmatory trials.',
        columns: ['Date', 'Indication', 'Basis', 'Type'],
        rows: [
          ['Dec 2019', 'HER2-positive metastatic breast cancer after two or more HER2 regimens', 'DESTINY-Breast01 (single arm, n = 184): response rate', '[[accelerated approval|Accelerated]]; boxed warning for ILD and embryo-fetal toxicity'],
          ['By Aug 2022', 'HER2-positive gastric or gastroesophageal junction cancer after a trastuzumab-based regimen', 'DESTINY-Gastric program', 'Listed on the label by August 2022'],
          ['By Aug 2022', 'HER2-positive metastatic breast cancer after one prior HER2 regimen', 'DESTINY-Breast03 vs Kadcyla', 'Expansion to an earlier line, confirming benefit'],
          ['Aug 2022', '[[HER2-low]] metastatic breast cancer after chemotherapy', 'DESTINY-Breast04 vs chemotherapy', 'Regular; [[priority review]], [[breakthrough therapy designation]], [[RTOR]]'],
          ['After Aug 2022', 'HER2-mutant non-small cell lung cancer after prior therapy', 'Response rate in the DESTINY-Lung program', 'Accelerated'],
          ['Apr 2024', 'Any previously treated HER2 IHC 3+ solid tumor with no good alternative', '192 patients in three trials; response rate 51.4% in DESTINY-PanTumor02', 'Accelerated, [[tumor-agnostic]]'],
          ['Jan 2025', 'HR-positive, HER2-low or [[HER2-ultralow]] metastatic breast cancer after endocrine therapy', 'DESTINY-Breast06 vs chemotherapy (n = 866)', 'Regular; priority review, breakthrough designation'],
          ['Dec 2025', 'First-line HER2-positive metastatic breast cancer, with [[pertuzumab]]', 'DESTINY-Breast09 vs taxane, trastuzumab, pertuzumab (n = 1,157 across three arms)', 'Regular'],
          ['May 2026', 'HER2-positive early breast cancer: [[neoadjuvant|before surgery]] and [[adjuvant|after surgery]] for residual disease', 'DESTINY-Breast11 and DESTINY-Breast05', 'Regular'],
        ],
        caption: 'Dates from company press releases, FDA announcements and the "recent major changes" section of the US prescribing information (May 2026). The exact dates of the gastric, second-line breast and lung approvals are not shown; the gastric and second-line breast indications appear in the label list in Daiichi Sankyo\'s August 2022 press release, and the lung indication does not.'},
      {type: 'callout', variant: 'product', heading: 'The staged rollout of a drug',
        html: `<p>The table above reads like a textbook staged rollout. Launch to the users with the most acute pain and fewest alternatives (patients who have exhausted HER2 therapies), where a regulator will accept a lighter proof (response rate, single arm). Use that foothold to fund the heavier proofs. Then expand to adjacent segments (earlier lines, HER2-low, other tumors), each unlocked by its own trial.</p>
        <p>Where it breaks: every "release" costs years and hundreds of millions of dollars, is irreversible once patients are dosed, and can be rolled back by a regulator if the confirmatory trial fails, as Mylotarg's was. The accelerated approval "beta" is also real medicine for real patients, which is why the evidentiary bar exists at all.</p>`},

      // ---------------- Money ----------------
      {type: 'chart', title: 'Sales', tocTitle: 'The money',
        intro: 'Worldwide in-market sales, as reported by AstraZeneca. Before 2022 AstraZeneca reported them excluding Japan, so the two series overlap in 2022 on slightly different definitions.',
        chart: {kind: 'line', title: 'Enhertu sales', subtitle: 'US dollars, billions, company-reported in-market sales', unit: '$B',
          series: [
            {name: 'Combined worldwide sales (Daiichi Sankyo + AstraZeneca)', short: 'Worldwide', points: [[2022, 1.253], [2023, 2.566], [2024, 3.754], [2025, 4.982]]},
            {name: 'In-market sales excluding Japan (earlier definition)', short: 'Ex-Japan', points: [[2020, 0.202], [2021, 0.426], [2022, 1.173]], color: 3, dashed: true},
          ],
          annotations: [{x: 2022.6, label: 'HER2-low approval'}], xTicks: [2020, 2021, 2022, 2023, 2024, 2025],
          note: 'Sources: AstraZeneca full-year results for 2021, 2022, 2023 and 2025 (SEC Form 6-K filings). First half of 2026: $2.96B combined, versus $2.29B in the first half of 2025. US sales, booked by Daiichi Sankyo, were $2.45B in 2025.'},
        takeaway: 'Enhertu passed $1 billion in combined sales in its third full year and roughly quadrupled over the following three. It is a [[blockbuster]] several times over, and because the approvals keep moving into earlier lines of treatment, where patients stay on therapy longer, growth has continued.'},
      {type: 'story', title: 'How the money works', tocTitle: 'Money: how it works',
        html: `<p>A few features of Enhertu's economics are typical of modern cancer drugs, and worth being able to explain.</p>
        <p><strong>Sales move with treatment lines.</strong> A drug used after two prior therapies is given for a short time to a shrinking pool of patients. A drug used earlier is given to more people for longer. Enhertu's approvals have marched from third line (2019) to second line (2022), to before chemotherapy in HR-positive disease (2025), to first line and early breast cancer (2025–2026). Each step expands both the number of patients and the months each one stays on treatment, which is why sales kept rising long after launch.</p>
        <p><strong>Biomarker expansion is market expansion.</strong> The HER2-low approval roughly quadrupled the number of breast cancer patients who could be considered for the drug. AstraZeneca's reporting flagged the flip side: in 2023, part of the US sales growth came from HER2-low patients who had been waiting for access, a one-time surge the company described as "bolus depletion" in the second half of the year. Launch spikes are not trends.</p>
        <p><strong>Partnership accounting is confusing on purpose.</strong> Because Daiichi books product sales in many markets and AstraZeneca receives its share of profits as "alliance revenue", AstraZeneca's own reported Enhertu revenue is much smaller than the drug's actual sales. In 2023, for example, combined sales were $2.57 billion, while AstraZeneca's total Enhertu revenue was $1.28 billion. When you read a headline number, always ask whose revenue it is.</p>
        <p><strong>Manufacturing is leverage.</strong> An ADC is made in steps: an antibody grown in living cells, a payload and linker made by chemical synthesis, and a conjugation step that must reliably attach about eight payloads to every antibody. Daiichi kept sole responsibility for manufacturing and supply in both its AstraZeneca and Merck deals. Whoever controls a hard-to-copy supply chain keeps bargaining power long after the deal is signed. This case does not quote a price, because list prices vary by market and discounts are confidential.</p>`},

      // ---------------- The boom ----------------
      {type: 'story', kicker: 'What came next', title: 'The ADC gold rush', tocTitle: 'The ADC boom',
        html: `<p>Before Enhertu, ADCs were a respectable niche. After DESTINY-Breast03 and -04, they became the hottest [[modality]] in oncology dealmaking. The logic was simple: if a better linker-payload could turn the same antibody from Kadcyla into Enhertu, then every antibody against every tumor protein was a candidate for an upgrade, and every company with a good linker-payload platform was a potential target.</p>
        <p>Daiichi Sankyo was the first beneficiary. In July 2020 AstraZeneca signed a second deal, for datopotamab deruxtecan (Dato-DXd), a DXd ADC aimed at [[TROP2]], paying $1 billion upfront in a deal worth up to $6 billion; it was approved in the US in 2025 as Datroway. In October 2023 Merck agreed to pay $4 billion upfront, plus $1.5 billion in continuation payments over two years and up to $16.5 billion more in sales milestones, for three more DXd ADCs: patritumab deruxtecan, ifinatamab deruxtecan and raludotatug deruxtecan, aimed at different tumor proteins. Total potential value: up to $22 billion. In each deal Daiichi kept the Japanese rights, the same template as the Enhertu deal, and in the Merck deal it again kept sole responsibility for manufacturing and supply.</p>
        <p>The rest of the industry followed. In March 2023 Pfizer agreed to buy Seagen, the company behind Adcetris and several other ADCs, for about $43 billion including debt. In November 2023 AbbVie agreed to buy ImmunoGen, whose technology had gone into Kadcyla and whose own ovarian cancer ADC was on the market, for about $10.1 billion. In January 2024 Johnson &amp; Johnson agreed to buy Ambrx, which engineers precisely placed conjugation sites, for about $2 billion. In April 2024 Genmab agreed to buy ProfoundBio, headquartered in Seattle with an R&amp;D center in Suzhou, China, for $1.8 billion; its lead drug was described as a "Topo1 ADC", a topoisomerase I payload like DXd.</p>
        <p>China became a major source of ADCs. Chinese biotechs had built fast, relatively low-cost ADC engines, and Western companies licensed from them. Merck took rights to up to seven preclinical ADCs from Sichuan Kelun-Biotech in a deal that closed in February 2023, paying $175 million upfront with billions more in potential milestones. BioNTech paid DualityBio of Suzhou $220 million upfront in 2023 for ADC rights, with up to $2.6 billion in milestones. These deals had small upfronts by Merck-Daiichi standards, which is part of their appeal: a big company can take many shots for the price of one.</p>
        <p>Many of the new programs borrowed Daiichi's playbook: a topoisomerase I inhibitor payload, a cleavable linker, a high DAR, a membrane-permeable payload for bystander killing. Enhertu did not just create a drug; it set a template.</p>`},
      {type: 'chart', title: 'Cash committed at signing in major ADC deals', tocTitle: 'Chart: ADC deals',
        intro: 'Upfront payments for licensing deals and total price for acquisitions. The headline "up to" values of licensing deals are far larger, but mostly contingent.',
        chart: {kind: 'bar', title: 'ADC deals, 2019–2024', subtitle: 'US dollars, billions: upfront (licenses) or equity value (acquisitions)', unit: '$B', horizontal: true, labelWidth: 250,
          categories: ['Pfizer buys Seagen (2023)', 'AbbVie buys ImmunoGen (2023)', 'Merck–Daiichi, 3 DXd ADCs (2023)', 'J&J buys Ambrx (2024)', 'Genmab buys ProfoundBio (2024)', 'AstraZeneca–Daiichi, Enhertu (2019)', 'AstraZeneca–Daiichi, Dato-DXd (2020)', 'BioNTech–DualityBio (2023)', 'Merck–Kelun-Biotech (2023)'],
          series: [{name: 'Cash at signing', values: [43, 10.1, 4, 2, 1.8, 1.35, 1, 0.22, 0.175],
            notes: ['About $43B including net debt, $229 per share', 'About $10.1B equity value, $31.26 per share', '$4B upfront plus $1.5B continuation payments; up to $22B total', 'About $2.0B equity value, $28 per share', '$1.8B cash', '$1.35B upfront; up to $6.9B total', '$1B upfront; up to $6B total', '$220M aggregate upfront; up to $2.6B in milestones', '$175M upfront for up to seven preclinical ADCs']}]},
        takeaway: 'Sources: company press releases and SEC filings (Pfizer investor presentation, Mar 2023; AbbVie, Nov 2023; Merck, Oct 2023 and 2023 Form 10-K; Johnson &amp; Johnson/Ambrx, Jan 2024; Genmab, Apr 2024; AstraZeneca, Mar 2019 and 2020 filings; BioNTech 2023 Form 20-F). Not an exhaustive list of ADC deals.'},
      {type: 'callout', variant: 'whatif', heading: 'What if Daiichi had played it safe?',
        html: `<p>Suppose Daiichi had built a conventional HER2 ADC: a licensed tubulin payload, a non-cleavable linker, a DAR around 4. The preclinical data suggest what would have happened. Kadcyla, exactly that kind of design, failed to control the low-HER2 tumor models in which DS-8201a worked, and did not kill HER2-negative cells growing next to HER2-positive ones.</p>
        <p>The likely result is a respectable drug competing with Kadcyla for one in six breast cancer patients, with no HER2-low trial, no new category, no $43 billion scramble for ADC companies, and pathology reports that still read "positive" or "negative". The riskiest design choices (high DAR, a payload built to escape the cell) were also the ones that created most of the value. They are also the most likely source of the lung toxicity. The upside and the risk came from the same design choice.</p>`},
      {type: 'story', title: 'Where it stands now', tocTitle: 'Where it stands',
        html: `<p>By 2026 Enhertu had moved from the last line of treatment to the first. In DESTINY-Breast09, 1,157 patients with newly diagnosed HER2-positive metastatic breast cancer were randomized to Enhertu plus [[pertuzumab]], the long-standing standard of taxane chemotherapy plus trastuzumab and pertuzumab, or an investigational arm. Median progression-free survival was 40.7 months with Enhertu plus pertuzumab versus 26.9 months with the standard (hazard ratio 0.56). The FDA approved that combination in December 2025.</p>
        <p>In early breast cancer, where the goal is cure rather than control, two trials followed. In DESTINY-Breast05, 1,635 patients who still had invasive cancer after pre-surgery treatment were randomized to Enhertu or Kadcyla after surgery; three years later 92.4% of the Enhertu group were free of invasive disease, versus 83.7% (hazard ratio 0.47). In DESTINY-Breast11, Enhertu followed by standard therapy before surgery left no invasive cancer at surgery (a [[pathological complete response]]) in 67.3% of patients, versus 56.3% with an older chemotherapy regimen. Both indications were added to the US label in May 2026. Kadcyla, the drug Enhertu was designed to beat, has now been outperformed in both of the settings where it was the standard.</p>
        <p>Beyond breast cancer, the 2024 [[tumor-agnostic]] approval covers any previously treated solid tumor with HER2 IHC 3+ and no good alternative, based on 192 patients across three trials; in the main one, DESTINY-PanTumor02, about half (51.4%) responded. It is one of a small number of cancer approvals based on a molecular feature rather than the organ of origin, a model pioneered by drugs like Keytruda.</p>
        <h3>Open questions</h3>
        <ul><li><strong>Sequencing.</strong> Many new ADCs carry topoisomerase I payloads like DXd. If a tumor becomes resistant to the payload, will the next ADC with a similar payload still work? Early data are mixed, and trials are ongoing.</li>
        <li><strong>The lungs.</strong> Lung disease rates of around 10–15% remain the main limit on how widely, and how early, Enhertu can be used, especially in early-stage patients who may be cured by other means.</li>
        <li><strong>The test.</strong> A treatment decision now hangs on faint staining that pathologists disagree about. Quantitative, machine-read HER2 tests are in development; they could move the threshold again.</li>
        <li><strong>Competition.</strong> Enhertu's own success guarantees fast followers, including the ADCs licensed from China, and Daiichi's own TROP2 ADC competes with Gilead's Trodelvy in breast cancer.</li></ul>`},

      // ---------------- Quiz, lessons, sources ----------------
      {type: 'quiz', title: 'Check yourself', questions: [
        {q: 'Herceptin and Enhertu use the same antibody. Why does Enhertu work in HER2-low tumors when Herceptin does not?', options: ['Enhertu binds HER2 more tightly', 'Enhertu uses HER2 only as a docking point to deliver a payload, so it does not need the tumor to depend on HER2 signaling', 'HER2-low tumors produce a different form of HER2', 'Enhertu is given at a much higher antibody dose'], answer: 1,
          explain: 'Herceptin works mainly by blocking a signal that only HER2-amplified tumors depend on. Enhertu needs HER2 only as an address. With eight payloads per antibody and a bystander effect, modest HER2 is enough to deliver a lethal dose.'},
        {q: 'Which change from Kadcyla most directly enables the bystander effect?', options: ['The higher drug-to-antibody ratio', 'Using trastuzumab as the antibody', 'A payload that can cross cell membranes after release', 'Infusion every three weeks'], answer: 2,
          explain: 'Kadcyla\'s released payload carries a charged linker fragment and stays trapped in the cell. DXd is membrane-permeable, so it can diffuse into neighboring cells, including ones with little HER2. A high DAR increases the payload delivered, but permeability is what lets it reach neighbors.'},
        {q: 'Mylotarg was withdrawn in 2010 and reapproved in 2017. What mainly changed?', options: ['A new antibody', 'A new payload', 'A lower, fractionated dose and a different patient population', 'A new manufacturing process'], answer: 2,
          explain: 'Same molecule, different regimen. The lesson for ADCs: the window between effective and toxic is narrow, and dose and schedule can decide success or failure.'},
        {q: 'DESTINY-Breast01 had no control arm. Why was that acceptable for accelerated approval?', options: ['The FDA never requires randomized trials in cancer', 'Patients had exhausted available HER2 options, a high and durable response rate is meaningful in that setting, and a randomized confirmatory trial was required', 'Single-arm trials are more rigorous than randomized ones', 'Because lung toxicity was rare'], answer: 1,
          explain: 'Accelerated approval accepts a surrogate such as response rate for serious diseases with unmet need, on condition that confirmatory trials show real benefit. DESTINY-Breast03 was that confirmation.'},
        {q: 'In DESTINY-Breast03 the hazard ratio for progression or death was 0.28. What does that mean?', options: ['72% of Enhertu patients were cured', 'At any given time, Enhertu patients progressed or died at about 28% of the rate of Kadcyla patients', 'Enhertu patients lived 28% longer', '28% of patients responded'], answer: 1,
          explain: 'A hazard ratio compares event rates over time. 0.28 means the rate of progression or death was cut by about 72% at any point. It is not a cure rate or a survival extension in months.'},
        {q: 'A colleague says "HER2-low is a new subtype of breast cancer discovered in 2022." What is the most accurate response?', options: ['Correct: it was discovered by gene sequencing', 'Partly: HER2-low is a treatment category defined by IHC scores and a drug that works there, not a biologically distinct subtype', 'Wrong: HER2-low is the same as triple-negative', 'Wrong: HER2-low tumors have no HER2'], answer: 1,
          explain: 'HER2-low tumors (IHC 1+ or 2+/ISH−) always existed and were labeled HER2-negative. What changed in 2022 was a drug that made the distinction clinically useful. HER2-low includes both HR-positive and HR-negative tumors.'},
        {q: 'Why did AstraZeneca\'s 2019 deal give Daiichi 50/50 profits instead of a royalty?', options: ['Japanese law requires it', 'Daiichi owned a de-risked, high-value asset and platform, and could negotiate a true partnership while keeping manufacturing and Japan', 'AstraZeneca wanted to minimize its costs', 'Royalty deals are illegal for biologics'], answer: 1,
          explain: 'Deal structure reflects leverage. With striking phase 1 data and its own manufacturing, Daiichi could demand co-ownership. AstraZeneca got scale, speed and half the upside, and paid for it upfront.'},
        {q: 'Lung disease rates with Enhertu stayed around 10–15% across trials, but the fatal rate fell from about 2–3% to under 1%. The most likely reason:', options: ['The molecule was reformulated', 'Earlier detection, dose interruption, permanent discontinuation for symptomatic cases and prompt steroids, plus excluding patients with prior lung inflammation', 'Lung disease was redefined', 'Lower doses were used in all later trials'], answer: 1,
          explain: 'Management protocols changed, not the drug: monitoring, imaging for new symptoms, holding the drug for asymptomatic cases, stopping it and starting steroids for symptomatic ones. Differences in trial populations also contribute, so the comparison is not perfectly clean.'},
        {q: 'Which of these is the best product lesson from the ADC deal boom after Enhertu?', options: ['Platforms are worthless; only individual drugs matter', 'A validated, reusable linker-payload platform can be worth more than any single drug, because each new antibody becomes a new product', 'Acquisitions always beat licensing deals', 'Only Western companies can build ADC platforms'], answer: 1,
          explain: 'Daiichi\'s DXd platform produced Enhertu, Datroway and the three ADCs in the Merck deal. Buyers paid for platforms (Seagen, ImmunoGen, Ambrx, ProfoundBio) and for pipelines from Chinese ADC engines.'},
      ]},
      {type: 'lessons', title: 'What this case teaches', items: [
        {title: 'A test threshold is a product decision in disguise', text: '"HER2-negative" was calibrated for Herceptin\'s mechanism. A drug with a different mechanism made the same slides mean something new. Ask what a biomarker cutoff was designed to predict before treating it as biology.', links: ['keytruda', 'gleevec']},
        {title: 'Old failures can be new components', text: 'Exatecan failed as a standalone drug; a derivative became the payload behind a multibillion-dollar platform. A molecule that is too toxic to give systemically can be ideal when delivered precisely.', links: ['spinraza', 'kymriah']},
        {title: 'Beat the incumbent head to head', text: 'DESTINY-Breast03 compared Enhertu with Kadcyla, not with a weak control. A decisive head-to-head win rewrites guidelines and markets at once.', links: ['sovaldi', 'humira']},
        {title: 'Own the platform, partner for scale', text: 'Daiichi kept its linker-payload technology, manufacturing and Japan, and traded half the global upside for a partner\'s speed. It repeated the template with AstraZeneca and Merck.', links: ['comirnaty', 'trikafta']},
        {title: 'Toxicity can be managed, not just avoided', text: 'Lung disease never went away, but monitoring and fast intervention cut fatal cases. Compare cases where safety signals were missed or handled badly.', links: ['vioxx', 'tgn1412']},
        {title: 'Accelerated approval is a loan, not a gift', text: 'Enhertu repaid its accelerated approval with a confirmatory trial that beat the standard. Mylotarg did not, and was withdrawn. The same pathway can end very differently.', links: ['aduhelm', 'leqembi']},
      ]},
      {type: 'sources', title: 'Sources', items: [
        {text: 'Slamon DJ et al. Human breast cancer: correlation of relapse and survival with amplification of the HER-2/neu oncogene. Science 1987.', url: 'https://doi.org/10.1126/science.3798106'},
        {text: 'Slamon DJ et al. Use of chemotherapy plus a monoclonal antibody against HER2 for metastatic breast cancer that overexpresses HER2. NEJM 2001.', url: 'https://doi.org/10.1056/NEJM200103153441101'},
        {text: 'Strebhardt K, Ullrich A. Paul Ehrlich\'s magic bullet concept: 100 years of progress. Nature Reviews Cancer 2008.', url: 'https://doi.org/10.1038/nrc2394'},
        {text: 'Wolff AC et al. HER2 testing in breast cancer: ASCO/CAP clinical practice guideline focused update. J Clin Oncol 2018.', url: 'https://doi.org/10.1200/JCO.2018.77.8738'},
        {text: 'World Health Organization. Breast cancer fact sheet (2026 update; 2024 estimates).', url: 'https://www.who.int/news-room/fact-sheets/detail/breast-cancer'},
        {text: 'National Cancer Institute, Cancer Currents. Trastuzumab deruxtecan for HER2-low breast cancer (2022): standing ovation at ASCO; HER2-positive 15–20% and HER2-low 50–60% of breast cancers.', url: 'https://www.cancer.gov/news-events/cancer-currents-blog/2022/enhertu-her2-low-breast-cancer'},
        {text: 'National Cancer Institute, Cancer Currents. Gemtuzumab (Mylotarg) approved by FDA for acute myeloid leukemia (2017): 2000 approval, 2010 withdrawal, 2017 reapproval.', url: 'https://www.cancer.gov/news-events/cancer-currents-blog/2017/gemtuzumab-fda-leukemia'},
        {text: 'Swaminathan M, Cortes JE. Update on the role of gemtuzumab ozogamicin in the treatment of acute myeloid leukemia. Ther Adv Hematol 2023.', url: 'https://doi.org/10.1177/20406207231154708'},
        {text: 'Verma S et al. Trastuzumab emtansine for HER2-positive advanced breast cancer (EMILIA). NEJM 2012.', url: 'https://doi.org/10.1056/NEJMoa1209124'},
        {text: 'Drago JZ, Modi S, Chandarlapaty S. Unlocking the potential of antibody-drug conjugates for cancer therapy. Nature Reviews Clinical Oncology 2021.', url: 'https://doi.org/10.1038/s41571-021-00470-8'},
        {text: 'Abou-Alfa GK et al. Randomized phase III study of exatecan and gemcitabine compared with gemcitabine alone in untreated advanced pancreatic cancer. J Clin Oncol 2006.', url: 'https://doi.org/10.1200/JCO.2006.07.0201'},
        {text: 'Ogitani Y et al. DS-8201a, a novel HER2-targeting ADC with a novel DNA topoisomerase I inhibitor, demonstrates a promising antitumor efficacy with differentiation from T-DM1. Clin Cancer Res 2016.', url: 'https://doi.org/10.1158/1078-0432.CCR-15-2822'},
        {text: 'Ogitani Y et al. Bystander killing effect of DS-8201a in tumors with HER2 heterogeneity. Cancer Science 2016.', url: 'https://doi.org/10.1111/cas.12966'},
        {text: 'Nakada T, Sugihara K, Jikoh T, Abe Y, Agatsuma T. The latest research and development into the antibody-drug conjugate [fam-] trastuzumab deruxtecan (DS-8201a). Chem Pharm Bull 2019.', url: 'https://doi.org/10.1248/cpb.c18-00744'},
        {text: 'Doi T et al. Safety, pharmacokinetics, and antitumour activity of trastuzumab deruxtecan (DS-8201): a phase 1 dose-escalation study. Lancet Oncol 2017.', url: 'https://doi.org/10.1016/S1470-2045(17)30604-6'},
        {text: 'Modi S et al. Antitumor activity and safety of trastuzumab deruxtecan in patients with HER2-low-expressing advanced breast cancer: phase Ib study. J Clin Oncol 2020.', url: 'https://doi.org/10.1200/JCO.19.02318'},
        {text: 'DESTINY-Breast01. Trastuzumab deruxtecan in previously treated HER2-positive breast cancer. NEJM 2020.', url: 'https://doi.org/10.1056/NEJMoa1914510'},
        {text: 'FDA approval summary: fam-trastuzumab deruxtecan-nxki for unresectable or metastatic HER2-positive breast cancer. Clin Cancer Res 2021 (PubMed 33753456).', url: 'https://pubmed.ncbi.nlm.nih.gov/33753456/'},
        {text: 'Cortés J et al. Trastuzumab deruxtecan versus trastuzumab emtansine for breast cancer (DESTINY-Breast03). NEJM 2022.', url: 'https://doi.org/10.1056/NEJMoa2115022'},
        {text: 'Hurvitz SA et al. DESTINY-Breast03 updated results. Lancet 2023; and Cortés J et al. Long-term survival analysis of DESTINY-Breast03. Nature Medicine 2024.', url: 'https://doi.org/10.1038/s41591-024-03021-7'},
        {text: 'Modi S et al. Trastuzumab deruxtecan in previously treated HER2-low advanced breast cancer (DESTINY-Breast04). NEJM 2022.', url: 'https://doi.org/10.1056/NEJMoa2203690'},
        {text: 'DESTINY-Breast06. Trastuzumab deruxtecan after endocrine therapy in metastatic breast cancer. NEJM 2024.', url: 'https://pubmed.ncbi.nlm.nih.gov/39282896/'},
        {text: 'ENHERTU US prescribing information (DailyMed, May 2026), including boxed warning, ILD rates, DESTINY-Breast04/05/06/09/11 results and description (≈8 payloads per antibody); original December 2019 label for early ILD rates.', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7e67e73e-ddf4-4e4d-8b50-09d7514910b6'},
        {text: 'KADCYLA and HERCEPTIN US prescribing information (DailyMed): DAR 3.5, non-cleavable MCC linker; Herceptin initial approval 1998.', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=23f3c1f4-0fc8-4804-a9e3-04cf25dd302e'},
        {text: 'AstraZeneca press release, 28 March 2019: AstraZeneca and Daiichi Sankyo enter collaboration for novel HER2-targeting antibody-drug conjugate.', url: 'https://www.astrazeneca.com/media-centre/press-releases/2019/astrazeneca-and-daiichi-sankyo-enter-collaboration-for-novel-her-2-targeting-antibody-drug-conjugate.html'},
        {text: 'Daiichi Sankyo press releases: HER2-low approval (5 Aug 2022) and HER2-low/ultralow approval after endocrine therapy (27 Jan 2025).', url: 'https://www.daiichisankyo.com/files/news/pressrelease/pdf/202501/20250127_E.pdf'},
        {text: 'FDA: accelerated approval of fam-trastuzumab deruxtecan-nxki for unresectable or metastatic HER2-positive (IHC 3+) solid tumors, April 2024.', url: 'https://www.fda.gov/drugs/resources-information-approved-drugs/fda-grants-accelerated-approval-fam-trastuzumab-deruxtecan-nxki-unresectable-or-metastatic-her2'},
        {text: 'AstraZeneca full-year results (SEC Form 6-K): FY2021 (ex-Japan in-market sales), FY2023 (combined sales $2,566m; FY2022 $1,253m) and FY2025 ($4,982m; FY2024 $3,754m).', url: 'https://www.sec.gov/Archives/edgar/data/901832/000165495426001073/a3234s.htm'},
        {text: 'Merck press release, Oct 2023: Daiichi Sankyo and Merck collaboration for three DXd ADCs ($4B upfront, up to $22B); Merck 2023 Form 10-K (Kelun-Biotech terms).', url: 'https://www.merck.com/news/daiichi-sankyo-and-merck-announce-global-development-and-commercialization-collaboration-for-three-daiichi-sankyo-dxd-adcs/'},
        {text: 'ADC acquisition filings: Pfizer investor presentation on Seagen (Mar 2023); AbbVie–ImmunoGen (Nov 2023); J&J–Ambrx (Jan 2024); Genmab–ProfoundBio (Apr 2024); BioNTech 2023 Form 20-F (DualityBio); AstraZeneca 2020 Form 6-K (Dato-DXd terms).', url: 'https://www.sec.gov/Archives/edgar/data/78003/000119312523068538/d408093dex992.htm'},
      ]},
    ],
  });
})();
