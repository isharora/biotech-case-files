// Kymriah (tisagenlecleucel): the first CAR-T therapy. See GUIDE.md for the contract.
(function () {
  // ---------- small SVG helpers (all colors through il-* / st-* classes) ----------
  const r1 = v => Math.round(v * 10) / 10;
  const rad = d => d * Math.PI / 180;
  // A little Y-shaped CAR sticking out of a round cell
  function carY(cx, cy, r, deg, s = 1, cls = 'st-1') {
    const a = rad(deg), x0 = cx + r * Math.cos(a), y0 = cy + r * Math.sin(a);
    const x1 = cx + (r + 13 * s) * Math.cos(a), y1 = cy + (r + 13 * s) * Math.sin(a);
    const xl = x1 + 8 * s * Math.cos(a - 0.6), yl = y1 + 8 * s * Math.sin(a - 0.6);
    const xr = x1 + 8 * s * Math.cos(a + 0.6), yr = y1 + 8 * s * Math.sin(a + 0.6);
    return `<path d="M${r1(x0)} ${r1(y0)} L${r1(x1)} ${r1(y1)} M${r1(x1)} ${r1(y1)} L${r1(xl)} ${r1(yl)} M${r1(x1)} ${r1(y1)} L${r1(xr)} ${r1(yr)}" class="${cls} il-none" stroke-width="${r1(3 * s)}" stroke-linecap="round"/>`;
  }
  // CD19 "lollipop" on a cell surface
  function cd19(cx, cy, r, deg, s = 1) {
    const a = rad(deg), x0 = cx + r * Math.cos(a), y0 = cy + r * Math.sin(a);
    const x1 = cx + (r + 9 * s) * Math.cos(a), y1 = cy + (r + 9 * s) * Math.sin(a);
    return `<path d="M${r1(x0)} ${r1(y0)} L${r1(x1)} ${r1(y1)}" class="st-2" stroke-width="${r1(2.5 * s)}"/><circle cx="${r1(x1 + 3 * s * Math.cos(a))}" cy="${r1(y1 + 3 * s * Math.sin(a))}" r="${r1(4 * s)}" class="il-2"/>`;
  }
  const ring = (cx, cy, r, degs, fn, s) => degs.map(d => fn(cx, cy, r, d, s)).join('');
  // deterministic scatter for cells inside a panel
  function scatter(x0, y0, w, h, cols, rows, seed) {
    let t = seed; const rnd = () => { t = (t * 9301 + 49297) % 233280; return t / 233280; };
    const out = [];
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) out.push([r1(x0 + (i + 0.5) * w / cols + (rnd() - 0.5) * w / cols * 0.5), r1(y0 + (j + 0.5) * h / rows + (rnd() - 0.5) * h / rows * 0.5)]);
    return out;
  }

  // ---------- emblem ----------
  const EMBLEM = `<svg viewBox="0 0 300 300" role="img" aria-label="An engineered T cell locking onto a leukemia cell">
    <circle cx="150" cy="150" r="140" class="il-1s"/>
    <circle cx="224" cy="92" r="44" class="il-2s st-2" stroke-width="3"/>
    ${ring(224, 92, 44, [100, 125, 150, 175, 200, 230, 60, 30], cd19, 1.2)}
    <circle cx="120" cy="172" r="70" class="il-paper st-1" stroke-width="4"/>
    <circle cx="112" cy="178" r="28" class="il-1s st-1" stroke-width="2"/>
    ${ring(120, 172, 70, [0, 40, 80, 120, 160, 200, 240, 280, 320], carY, 1.5)}
    <circle cx="178" cy="126" r="9" class="il-4"/>
    <path d="M168 116 l-8 -8 M190 118 l8 -8 M186 138 l8 6" class="st-4" stroke-width="3" stroke-linecap="round"/>
  </svg>`;

  // ---------- figure: the disease ----------
  const healthyCells = scatter(262, 92, 196, 256, 5, 6, 7).map(([x, y], i) => i % 5 === 1 ? `<circle cx="${x}" cy="${y}" r="13" class="il-3s st-3" stroke-width="2"/>` : i % 7 === 3 ? `<circle cx="${x}" cy="${y}" r="5" class="il-8"/>` : `<circle cx="${x}" cy="${y}" r="10" class="il-7"/><circle cx="${x}" cy="${y}" r="4" class="il-7s"/>`).join('');
  const allCells = scatter(502, 92, 196, 256, 5, 6, 11).map(([x, y], i) => i === 7 || i === 22 ? `<circle cx="${x}" cy="${y}" r="10" class="il-7"/><circle cx="${x}" cy="${y}" r="4" class="il-7s"/>` : `<circle cx="${x}" cy="${y}" r="17" class="il-2s st-2" stroke-width="2"/><circle cx="${x + 2}" cy="${y - 1}" r="8" class="il-2" opacity=".55"/>`).join('');
  const FIG_DISEASE = `<svg viewBox="0 0 900 430" role="img" aria-label="Bone marrow, healthy and leukemic">
    <text x="125" y="50" text-anchor="middle" class="il-title">Bone marrow</text>
    <text x="360" y="50" text-anchor="middle" class="il-title">Healthy marrow</text>
    <text x="600" y="50" text-anchor="middle" class="il-title">Marrow in ALL</text>
    <text x="810" y="50" text-anchor="middle" class="il-title">The target: CD19</text>
    <g data-part="marrow">
      <rect x="40" y="75" width="170" height="290" rx="75" class="il-8s il-line"/>
      <rect x="62" y="105" width="126" height="230" rx="56" class="il-7s"/>
      <circle cx="125" cy="165" r="22" class="il-6s st-6" stroke-width="2.5"/>
      <text x="125" y="170" text-anchor="middle" class="il-text">stem</text>
      <path d="M112 186 L95 245 M125 188 L125 250 M138 186 L156 245" class="il-line il-none"/>
      <circle cx="93" cy="262" r="11" class="il-7"/><circle cx="125" cy="270" r="13" class="il-3s st-3" stroke-width="2"/><circle cx="158" cy="258" r="6" class="il-8"/>
      <text x="125" y="310" text-anchor="middle" class="il-text-2">red, white,</text>
      <text x="125" y="325" text-anchor="middle" class="il-text-2">platelets</text>
    </g>
    <g data-part="healthy">
      <rect x="250" y="75" width="220" height="290" rx="22" class="il-paper il-line"/>
      ${healthyCells}
    </g>
    <g data-part="blasts">
      <rect x="490" y="75" width="220" height="290" rx="22" class="il-paper il-line"/>
      ${allCells}
    </g>
    <g data-part="bcell">
      <circle cx="810" cy="200" r="58" class="il-3s st-3" stroke-width="3"/>
      <circle cx="804" cy="206" r="26" class="il-3" opacity=".45"/>
    </g>
    <g data-part="cd19">${ring(810, 200, 58, [0, 45, 90, 135, 180, 225, 270, 315], cd19, 1.4)}
      <path d="M845 130 L868 104" class="il-line il-none"/><text x="848" y="98" class="il-text">CD19</text></g>
    <text x="810" y="300" text-anchor="middle" class="il-text-2">B cell or B-ALL blast:</text>
    <text x="810" y="317" text-anchor="middle" class="il-text-2">CD19 on the surface</text>
    <text x="125" y="395" text-anchor="middle" class="il-text-2">One factory, many products</text>
    <text x="360" y="395" text-anchor="middle" class="il-text-2">Red cells, white cells, platelets</text>
    <text x="600" y="395" text-anchor="middle" class="il-text-2">Immature blasts crowd out the rest</text>
    <text x="810" y="395" text-anchor="middle" class="il-text-2">A handle for a drug</text>
  </svg>`;

  // ---------- figure: the CAR construct ----------
  const FIG_CAR = `<svg viewBox="0 0 900 470" role="img" aria-label="The parts of Kymriah's chimeric antigen receptor">
    <rect x="0" y="0" width="900" height="70" class="il-2s"/>
    <path d="M0 64 H900 M0 72 H900" class="st-2" stroke-width="2"/>
    <text x="20" y="38" class="il-text">Leukemia cell surface</text>
    <g data-part="cd19">
      <path d="M450 72 V104 M690 72 V104" class="st-2" stroke-width="4"/>
      <rect x="432" y="102" width="36" height="30" rx="12" class="il-2"/>
      <rect x="672" y="102" width="36" height="30" rx="12" class="il-2"/>
      <text x="720" y="124" class="il-text">CD19</text>
    </g>
    <g data-part="antibody">
      <path d="M150 262 V210 M150 210 L112 160 M150 210 L188 160" class="st-1 il-none" stroke-width="12" stroke-linecap="round"/>
      <circle cx="112" cy="158" r="13" class="il-1"/><circle cx="188" cy="158" r="13" class="il-1"/>
      <circle cx="188" cy="158" r="24" class="il-none il-line il-dash"/>
      <text x="150" y="112" text-anchor="middle" class="il-text">A whole antibody</text>
      <text x="150" y="284" text-anchor="middle" class="il-text-2">borrow just its tips</text>
      <path d="M214 160 C300 150 340 162 408 162" class="il-line il-dash il-none"/>
    </g>
    <g data-part="scfv">
      <ellipse cx="436" cy="160" rx="18" ry="25" class="il-1"/>
      <ellipse cx="465" cy="160" rx="18" ry="25" class="il-1s st-1" stroke-width="3"/>
      <text x="500" y="152" class="il-text">Antibody fragment (scFv)</text>
      <text x="500" y="170" class="il-text-2">the "eyes": grabs CD19</text>
    </g>
    <g data-part="hinge">
      <path d="M450 186 C438 205 462 222 450 240 C438 258 462 272 450 290" class="st-1 il-none" stroke-width="6" stroke-linecap="round"/>
      <text x="480" y="232" class="il-text">Hinge (from CD8)</text>
      <text x="480" y="250" class="il-text-2">reach and flexibility</text>
    </g>
    <rect x="0" y="300" width="900" height="170" class="il-1s"/>
    <path d="M0 296 H900 M0 304 H900" class="st-1" stroke-width="2"/>
    <g data-part="tm">
      <rect x="440" y="288" width="20" height="26" rx="4" class="il-1"/>
      <text x="425" y="284" text-anchor="end" class="il-text">Transmembrane anchor</text>
    </g>
    <g data-part="bb">
      <rect x="422" y="320" width="56" height="40" rx="10" class="il-3"/>
      <text x="450" y="345" text-anchor="middle" class="il-text">4-1BB</text>
      <text x="410" y="345" text-anchor="end" class="il-text-2">"multiply and persist"</text>
    </g>
    <g data-part="zeta">
      <rect x="422" y="366" width="56" height="74" rx="10" class="il-4"/>
      <path d="M430 386 H470 M430 403 H470 M430 420 H470" class="il-line" />
      <text x="410" y="408" text-anchor="end" class="il-text-2">"switch on and kill"</text>
      <text x="450" y="458" text-anchor="middle" class="il-text">CD3ζ</text>
    </g>
    <path d="M482 400 C540 400 560 392 614 390" class="st-4 il-none flow" stroke-width="3"/>
    <g data-part="gene">
      <ellipse cx="730" cy="385" rx="110" ry="48" class="il-paper st-1" stroke-width="2"/>
      <path d="M650 372 C680 352 700 400 730 380 C760 360 780 402 810 382 M650 392 C680 372 700 420 730 400 C760 380 780 422 810 402" class="il-line il-none"/>
      <path d="M716 386 C724 380 732 382 744 392" class="st-1 il-none" stroke-width="7" stroke-linecap="round"/>
      <text x="730" y="455" text-anchor="middle" class="il-text">CAR gene in the T cell's DNA</text>
    </g>
    <text x="20" y="455" class="il-text">Engineered T cell (inside)</text>
  </svg>`;

  // ---------- mechanism ----------
  const clonePos = [[290, 128], [250, 232], [300, 336], [376, 86], [372, 372]];
  const MECH_SVG = `<svg viewBox="0 0 760 440" role="img" aria-label="How a CAR-T cell kills a leukemia cell">
    <g data-part="blood"><rect x="0" y="0" width="760" height="440" rx="16" class="il-7s"/><text x="20" y="30" class="il-text-2" style="font-size:19px">Blood and bone marrow</text></g>
    <g data-part="clones">${clonePos.map(([x, y]) => `<circle cx="${x}" cy="${y}" r="22" class="il-paper st-1" stroke-width="2.5"/><circle cx="${x - 2}" cy="${y + 2}" r="9" class="il-1s"/>${ring(x, y, 22, [0, 72, 144, 216, 288], carY, 0.8)}`).join('')}
      <text x="150" y="60" class="il-text" style="font-size:20px">thousands-fold more</text></g>
    <g data-part="cart">
      <circle cx="170" cy="220" r="52" class="il-paper st-1" stroke-width="3"/>
      <circle cx="164" cy="226" r="20" class="il-1s st-1" stroke-width="1.5"/>
      ${ring(170, 220, 52, [0, 36, 72, 108, 144, 180, 216, 252, 288, 324], carY, 1.1)}
      <text x="170" y="310" text-anchor="middle" class="il-text" style="font-size:20px">CAR-T cell</text>
    </g>
    <g data-part="signal"><path d="M428 178 L410 214 L424 214 L408 252 L440 206 L425 206 L440 178 Z" class="il-4 st-4" stroke-width="1.5"/><text x="420" y="140" text-anchor="middle" class="il-text" style="font-size:20px">CD3ζ + 4-1BB fire</text></g>
    <g data-part="leuk">
      <circle cx="560" cy="200" r="58" class="il-2s st-2" stroke-width="3"/>
      <circle cx="566" cy="204" r="24" class="il-2" opacity=".5"/>
      ${ring(560, 200, 58, [0, 45, 90, 135, 160, 185, 210, 270, 315], cd19, 1.2)}
      <text x="600" y="296" text-anchor="middle" class="il-text" style="font-size:20px">Leukemia cell (CD19+)</text>
    </g>
    <g data-part="synapse"><circle cx="496" cy="204" r="9" class="il-4"/><path d="M486 190 l-6 -8 M506 190 l6 -8 M506 218 l6 8 M486 218 l-6 8" class="st-4" stroke-width="3" stroke-linecap="round"/></g>
    <g data-part="granules"><circle cx="522" cy="186" r="5" class="il-4"/><circle cx="534" cy="210" r="5" class="il-4"/><circle cx="518" cy="228" r="5" class="il-4"/><circle cx="546" cy="194" r="4" class="il-4"/><text x="560" y="112" text-anchor="middle" class="il-text-2" style="font-size:19px">perforin, granzymes</text></g>
    <g data-part="dead">
      <circle cx="560" cy="200" r="58" class="il-none il-line il-dash"/>
      <path d="M530 180 q10 -14 22 -4 q-6 14 -22 4Z M575 175 q14 -6 18 8 q-12 8 -18 -8Z M545 222 q12 -2 14 12 q-14 4 -14 -12Z M585 215 q10 2 8 14 q-12 -2 -8 -14Z" class="il-2"/>
      <text x="600" y="296" text-anchor="middle" class="il-text" style="font-size:20px">Leukemia cell destroyed</text>
    </g>
    <g data-part="bcell">
      <circle cx="660" cy="352" r="30" class="il-3s st-3" stroke-width="2.5"/>
      ${ring(660, 352, 30, [200, 250, 300, 350, 40], cd19, 0.9)}
      <text x="650" y="418" text-anchor="middle" class="il-text" style="font-size:20px">Healthy B cell</text>
    </g>
    <g data-part="bdead"><path d="M638 330 L682 374 M682 330 L638 374" class="st-7" stroke-width="4" stroke-linecap="round"/></g>
    <g data-part="cyto">${scatter(470, 22, 270, 50, 9, 2, 5).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.5" class="il-4"/>`).join('')}<text x="605" y="96" text-anchor="middle" class="il-text" style="font-size:20px">cytokine flood: fever,</text><text x="605" y="120" text-anchor="middle" class="il-text" style="font-size:20px">low blood pressure</text></g>
    <g data-part="memory">
      <circle cx="170" cy="220" r="46" class="il-paper st-1" stroke-width="3"/>
      ${ring(170, 220, 46, [0, 60, 120, 180, 240, 300], carY, 1)}
      <text x="170" y="226" text-anchor="middle" class="il-text" style="font-size:18px">memory</text>
      <text x="190" y="310" text-anchor="middle" class="il-text" style="font-size:20px">A few CAR-T cells stay on patrol</text>
    </g>
  </svg>`;

  // ---------- figure: cytokine release syndrome ----------
  const FIG_CRS = `<svg viewBox="0 50 900 360" role="img" aria-label="How cytokine release syndrome happens and where drugs act">
    <g data-part="cart">
      <circle cx="95" cy="200" r="44" class="il-paper st-1" stroke-width="3"/>${ring(95, 200, 44, [0, 60, 120, 180, 240, 300], carY, 1)}
      <circle cx="175" cy="200" r="34" class="il-2s st-2" stroke-width="2.5"/>${ring(175, 200, 34, [300, 0, 60], cd19, 1)}
      <text x="130" y="275" text-anchor="middle" class="il-text">CAR-T cells meet</text>
      <text x="130" y="293" text-anchor="middle" class="il-text">leukemia, en masse</text>
    </g>
    <path d="M220 200 C250 200 260 200 290 200" class="st-4 il-none flow" stroke-width="3"/>
    <g data-part="macro">
      <path d="M330 150 C370 120 440 130 460 165 C490 200 470 250 430 262 C390 276 330 262 316 226 C302 196 306 168 330 150Z" class="il-3s st-3" stroke-width="3"/>
      <circle cx="392" cy="200" r="20" class="il-3" opacity=".45"/>
      <text x="390" y="300" text-anchor="middle" class="il-text">Macrophages and other</text>
      <text x="390" y="318" text-anchor="middle" class="il-text">immune cells join in</text>
    </g>
    <g data-part="il6">${scatter(480, 150, 120, 110, 4, 3, 3).map(([x, y]) => `<circle cx="${x}" cy="${y}" r="6" class="il-4"/>`).join('')}
      <text x="540" y="130" text-anchor="middle" class="il-text">IL-6 surge</text></g>
    <g data-part="vessel">
      <path d="M640 70 H880 M640 120 H700 M725 120 H800 M825 120 H880" class="st-7" stroke-width="4" stroke-linecap="round"/>
      <circle cx="712" cy="138" r="5" class="il-7"/><circle cx="812" cy="140" r="5" class="il-7"/>
      <text x="760" y="165" text-anchor="middle" class="il-text">Leaky vessels: blood pressure falls,</text>
      <text x="760" y="183" text-anchor="middle" class="il-text">fluid fills the lungs, fever</text>
    </g>
    <g data-part="toci">
      <rect x="618" y="232" width="14" height="40" rx="5" class="il-7"/>
      <path d="M625 188 V210 M625 210 L611 228 M625 210 L639 228" class="st-1 il-none" stroke-width="7" stroke-linecap="round"/>
      <text x="656" y="238" class="il-text">Tocilizumab (blue) caps the</text>
      <text x="656" y="256" class="il-text">IL-6 receptor (red) and blocks it</text>
    </g>
    <g data-part="brain">
      <path d="M660 330 C650 300 690 286 710 296 C730 280 770 290 770 312 C792 318 790 350 766 356 C750 372 700 372 690 356 C664 358 650 346 660 330Z" class="il-5s st-5" stroke-width="2.5"/>
      <text x="790" y="330" class="il-text">Brain: confusion,</text>
      <text x="790" y="348" class="il-text">seizures (ICANS)</text>
    </g>
    <g data-part="steroid">
      <rect x="40" y="350" width="300" height="46" rx="12" class="il-8s il-line"/>
      <text x="190" y="378" text-anchor="middle" class="il-text">Steroids: turn everything down</text>
    </g>
    <path d="M605 165 C625 150 640 140 660 132 M605 250 C620 290 640 315 655 325" class="st-4 il-none flow" stroke-width="2.5"/>
  </svg>`;

  window.__KYM = {EMBLEM, FIG_DISEASE, FIG_CAR, MECH_SVG, FIG_CRS, carY, cd19, ring, r1};
})();

(function () {
const K = window.__KYM;
registerCase({
  id: 'kymriah', kind: 'success',
  brand: 'Kymriah', generic: 'tisagenlecleucel', company: 'University of Pennsylvania and Novartis',
  tagline: 'The first [[CAR-T]] therapy approved in the United States: a living drug made one patient at a time from that patient\'s own [[T cell|T cells]], given once, and still working in some of them more than a decade later.',
  chips: [['Disease', 'B-cell [[acute lymphoblastic leukemia]]'], ['Modality', '[[CAR-T]] ([[cell therapy]])'], ['Target', '[[CD19]]'], ['Approved', 'August 30, 2017']],
  readingTime: 40,
  stats: [
    {v: '81%', l: 'In remission within 3 months in the pivotal ELIANA trial (61 of 75 infused patients)', n: 'Maude et al., NEJM 2018'},
    {v: '$475,000', l: 'US list price for one infusion at launch in 2017', n: 'NCI Cancer Currents; STAT'},
    {v: '10–0', l: 'FDA [[advisory committee]] vote in favor, July 12, 2017', n: 'RAPS; Nature'},
    {v: '~22 days', l: 'Planned manufacturing turnaround at launch, for one patient\'s batch', n: 'Nature Trade Secrets, 2017'},
    {v: '$587M', l: 'Peak annual sales (2021). Rival Yescarta reached $1.57B in 2024', n: 'Novartis and Gilead financial reports'},
  ],
  emblem: K.EMBLEM,
  facts: {start: 2009, firstHuman: 2010, approval: 2017, end: null, peakSalesB: 0.587, pivotalN: 75, area: 'oncology', modality: 'cell therapy', target: 'CD19'},
  themes: ['manufacturing', 'pricing', 'safety', 'competition'],
  glossary: {
    'CD19': 'A protein on the surface of B cells at almost every stage of their life, and on most B-cell leukemia and lymphoma cells. Kymriah is built to find it.',
    'chimeric antigen receptor': 'An engineered receptor stitched together from parts of different proteins: an antibody fragment outside the cell to recognize a target, and T-cell signaling parts inside to switch the cell on. Abbreviated CAR.',
    'CAR': 'Chimeric antigen receptor: an engineered receptor that gives a T cell antibody-like eyes and a built-in on switch.',
    'leukemia': 'A cancer of blood-forming cells. It usually starts in the bone marrow and spills into the blood.',
    'acute lymphoblastic leukemia': 'A fast-growing blood cancer in which immature lymphocytes, usually immature B cells, fill the bone marrow. The most common childhood cancer. Abbreviated ALL.',
    'ALL': 'Acute lymphoblastic leukemia.',
    'bone marrow': 'The soft tissue inside bones where blood cells are made.',
    'blast': 'An immature blood cell. In leukemia, blasts multiply without maturing and crowd out the normal cells.',
    'lymphocyte': 'A family of white blood cells that includes B cells and T cells, the specialists of the immune system.',
    'scFv': 'Single-chain variable fragment: the two target-grabbing tips of an antibody joined into one short chain. It is the part of a CAR that recognizes the target.',
    'hinge': 'A flexible spacer in a CAR that holds the antibody fragment away from the cell surface so it can reach its target.',
    'transmembrane domain': 'The stretch of a receptor that crosses the cell\'s outer membrane and anchors it there.',
    'CD3 zeta': 'The signaling tail of the natural T-cell receptor complex. In a CAR it provides "signal 1", the switch that tells the T cell to attack.',
    '4-1BB': 'A T-cell costimulatory protein, also called CD137. Its signaling piece in Kymriah\'s CAR helps the cells multiply and survive for months or years.',
    'CD28': 'A T-cell costimulatory protein. CARs built with its signaling piece (such as Yescarta) are the main alternative design to 4-1BB CARs.',
    'costimulation': 'The "second signal" a T cell needs, on top of recognizing its target, to multiply and survive rather than fizzle out.',
    'lentiviral vector': 'A disabled virus derived from HIV, stripped of the genes that cause disease, used to insert a new gene permanently into a cell\'s DNA.',
    'transduction': 'Using a viral vector to deliver a gene into cells.',
    'leukapheresis': 'A procedure that draws blood through a vein, spins out the white blood cells and returns the rest. For Kymriah it takes 3 to 6 hours.',
    'lymphodepletion': 'A short course of chemotherapy (for Kymriah in ALL, fludarabine and cyclophosphamide) given just before infusion to make room for the CAR-T cells to expand.',
    'autologous': 'Made from the patient\'s own cells.',
    'allogeneic': 'Made from a donor\'s cells rather than the patient\'s own. For CAR-T, the hope is an "off-the-shelf" product.',
    'vein-to-vein time': 'The time from collecting a patient\'s cells to infusing the finished product back into the same patient.',
    'out of specification': 'A manufactured batch that misses at least one of its release tests, for example too few living cells or a dose outside the approved range.',
    'ICANS': 'Immune effector cell-associated neurotoxicity syndrome: confusion, trouble speaking, seizures or brain swelling after CAR-T and similar immune therapies.',
    'tocilizumab': 'An antibody drug (brand name Actemra) that blocks the receptor for the cytokine IL-6. First approved for arthritis; approved for CAR-T cytokine release syndrome in 2017.',
    'IL-6': 'Interleukin-6, a cytokine that drives fever and inflammation. Its level spikes in severe cytokine release syndrome.',
    'B-cell aplasia': 'Having no B cells. CD19 CAR-T cells kill healthy B cells as well as cancerous ones, so patients may need antibody infusions to prevent infections.',
    'IVIG': 'Intravenous immunoglobulin: pooled antibodies from donated blood, given to people who cannot make enough of their own.',
    'MRD': 'Minimal residual disease: leukemia too sparse to see under a microscope but detectable by sensitive tests. In ELIANA, MRD-negative meant fewer than 1 leukemia cell in 10,000.',
    'complete remission': 'No leukemia visible under the microscope (fewer than 5% blasts in the marrow) and normal blood counts.',
    'CRi': 'Complete remission with incomplete blood count recovery: the leukemia is gone from view, but blood counts have not yet fully recovered.',
    'event-free survival': 'The share of patients who are alive and have not relapsed, failed treatment or needed new cancer therapy at a given time.',
    'stem cell transplant': 'Replacing a patient\'s blood-forming system with a donor\'s after very intensive chemotherapy. It can cure leukemia but is harsh and risky, and usually needs the patient to be in remission first.',
    'outcomes-based contract': 'A deal in which what is paid for a drug depends on whether it works for the patient.',
    'chain of identity': 'The labeling and tracking that guarantees each patient receives only their own cells, from collection to infusion.',
    'insertional mutagenesis': 'The risk that a gene inserted by a viral vector lands in a spot that disrupts another gene, which in rare cases could help a cell turn cancerous.',
    'diffuse large B-cell lymphoma': 'The most common aggressive lymphoma in adults: a cancer of B cells that grows mainly in lymph nodes. Abbreviated DLBCL.',
    'DLBCL': 'Diffuse large B-cell lymphoma, the most common aggressive lymphoma in adults.',
    'CLL': 'Chronic lymphocytic leukemia: a slow-growing cancer of mature B cells, mostly in older adults.',
    'BCMA': 'B-cell maturation antigen, a protein on myeloma cells. The target of two CAR-T therapies for multiple myeloma.',
    'multiple myeloma': 'A cancer of plasma cells, the antibody factories that B cells turn into, which grows in the bone marrow.',
    'bridging therapy': 'Treatment given while a patient waits for a CAR-T product to be made, to keep the cancer in check.',
    'blinatumomab': 'An off-the-shelf "bispecific" antibody that tethers a patient\'s own T cells to CD19-positive cells. A rival approach for B-cell ALL.',
    'perforin': 'A protein that killer T cells release to punch holes in a target cell. Granzymes, released with it, enter through the holes and make the cell self-destruct.',
    'cytokine storm': 'An informal name for a runaway release of cytokines; in CAR-T medicine it is called cytokine release syndrome.',
    'CRS': 'Cytokine release syndrome.',
  },
  sections: [
    {type: 'story', kicker: 'Cold open', title: 'Philadelphia, April 2012', tocTitle: 'Cold open',
      html: `<p>A few days after her infusion, Emily Whitehead was dying in the pediatric intensive care unit at the Children's Hospital of Philadelphia (CHOP). She was six. Her fever would not break. Her blood pressure kept falling despite drugs meant to prop it up. Fluid was filling her lungs, and the doctors had put her on a ventilator and into a medically induced coma.</p>
      <p>The strange part was the cause. Emily was not being killed by her [[leukemia]], at least not directly. She was being overwhelmed by her own immune system, which had been deliberately supercharged. In March, doctors had collected her [[T cell|T cells]], the immune system's killer cells, and sent them to a laboratory at the University of Pennsylvania. There, a disabled virus had inserted a new gene into each cell, giving it an engineered receptor that could recognize a protein called [[CD19]] on her leukemia cells. The cells had been grown into an army and dripped back into her veins over three days in April. She was the first child ever to receive this treatment.</p>
      <p>The army was working, perhaps too well. As the engineered cells found their targets and multiplied, they released a flood of [[cytokine|cytokines]], the chemical signals immune cells use to call for help. The flood was the problem: [[cytokine release syndrome]], a whole-body inflammatory storm.</p>
      <p>Emily's parents, Tom and Kari, had already been told by her local hospital that palliative care, keeping her comfortable until the end, was the realistic option. Her leukemia had come back twice. It was growing too fast for a [[stem cell transplant]]. This experiment was the last door. Now the experiment itself might kill her, and the team had no playbook, because no child had ever been here before.</p>
      <p>Then a lab test came back. Among the cytokines the team measured, one was sky-high: [[IL-6|interleukin-6]]. Carl June, the Penn immunologist whose laboratory had built the cells, knew there was a drug that blocked IL-6. He knew it because his daughter took it for juvenile arthritis.</p>
      <p>What happened next shaped a field. It is why Kymriah exists, why a whole class of "living drugs" reached patients, and why doctors today treat this storm with a drug from a rheumatologist's cupboard. We'll come back to Emily's bedside. First, you need to understand what was wrong with her blood, what those engineered cells were, and why it took more than twenty years to make them.</p>
      <blockquote class="pull">What we learned from Emily has defined the entire field of CAR T-cell therapy.<cite>Stephan Grupp, CHOP oncologist who led her treatment, 2022</cite></blockquote>`},

    {type: 'story', kicker: 'The disease from zero', title: 'A blood factory that jams', tocTitle: 'The disease',
      html: `<p>Every second, your body makes millions of new blood cells. The factory is the [[bone marrow]], the spongy tissue inside your bones. At its heart sit blood stem cells, which divide and mature into three kinds of product: red cells that carry oxygen, platelets that plug leaks, and white cells that fight infection.</p>
      <p>Among the white cells are the [[lymphocyte|lymphocytes]], the specialists of the immune system. Two kinds matter in this story. <strong>B cells</strong> make antibodies, the Y-shaped proteins that tag invaders. <strong>T cells</strong> patrol the body, inspect other cells and kill the ones that look infected or abnormal. Think of B cells as the intelligence service and T cells as special forces.</p>
      <p>[[leukemia|Leukemia]] is what happens when the factory jams. One developing cell picks up genetic mistakes that let it keep dividing without ever maturing. Its descendants, called [[blast|blasts]], pile up in the marrow and crowd out everything else. The symptoms follow directly: too few red cells means exhaustion and pallor; too few platelets means bruising and bleeding; too few working white cells means infections that won't go away. Then the blasts spill into the blood.</p>
      <h3>ALL: the commonest childhood cancer</h3>
      <p>In [[acute lymphoblastic leukemia]] (ALL), the jammed cell is an immature lymphocyte, most often an immature B cell. "Acute" means fast: without treatment it kills in weeks to months. ALL accounts for about a quarter of all cancer diagnoses in children under 15, and about 3,100 American children and adolescents are diagnosed each year, most often between the ages of one and four.</p>
      <p>ALL is also one of medicine's great success stories. Five-year survival for children under 15 rose from about 60% in 1975 to about 90% today, through decades of carefully sequenced trials of old chemotherapy drugs given for years in combination. About 98% of children go into remission at first.</p>
      <p>The trouble is the other side of that number. Roughly 15% of children relapse after chemotherapy. A large Children's Oncology Group analysis of more than 9,500 children found that those who relapsed early, within 18 months of diagnosis, had only about a 21% chance of being alive five years later. The leukemia that comes back has survived everything thrown at it: it is, by definition, the most drug-resistant fraction. Each relapse is harder to treat than the last. The main hope for a cure was a [[stem cell transplant]], which needs the patient to be in remission first and brings its own serious risks. For children whose disease came back after a transplant, or would not go into remission at all, the options ran out. CHOP's doctors put the long-term cancer-free rate for these relapsed children before CAR-T at around 9%.</p>
      <h3>A handle on the enemy</h3>
      <p>B cells, healthy or cancerous, wear a protein on their surface called [[CD19]]. It appears early in a B cell's life and stays on almost to the end, and it is present on most B-cell ALL blasts. It is not on red cells, platelets, T cells or the stem cells that restock the factory. That makes CD19 an unusually clean target. Kill everything carrying CD19 and you wipe out the leukemia, along with the patient's healthy B cells. Losing your B cells is serious, but survivable: doctors can replace the missing antibodies with monthly infusions of donated ones ([[IVIG]]). Losing your red cells or stem cells is not.</p>`},

    {type: 'figure', title: 'What goes wrong in the marrow', intro: 'Hover or tap each part to see what it is.',
      svg: K.FIG_DISEASE,
      hotspots: {
        marrow: {title: 'Bone marrow: the factory', text: 'Blood stem cells in the marrow divide and mature into red cells, platelets and white cells, including the B and T [[lymphocyte|lymphocytes]]. A healthy adult makes hundreds of billions of blood cells a day.'},
        healthy: {title: 'Healthy marrow', text: 'A balanced mix of maturing red cells (red), white cells (green) and platelets (gray). Each product leaves for the bloodstream when it is ready.'},
        blasts: {title: 'Marrow in ALL', text: 'Immature [[blast|blasts]] (orange) that never finish maturing pile up and crowd out normal production. Doctors count blasts to track the disease: [[complete remission]] means fewer than 5% blasts in the marrow.'},
        bcell: {title: 'A B cell', text: 'B cells normally make antibodies. In B-cell ALL, the cancer is an immature B cell stuck in a loop of division.'},
        cd19: {title: 'CD19, the handle', text: '[[CD19]] sits on the surface of B cells from early to late in their development and on most B-ALL blasts, but not on stem cells, red cells, platelets or T cells. A drug that hunts CD19 kills leukemia and healthy B cells, but spares the factory itself.'},
      },
      caption: 'Schematic. Colors: orange marks disease and the target, green marks healthy immune cells, blue (later) marks the drug.'},

    {type: 'callout', variant: 'numbers', heading: 'Childhood ALL in numbers',
      html: `<p><b>~25%</b> of cancer diagnoses in US children under 15 are ALL. <b>~3,100</b> US children and adolescents are diagnosed each year. <b>~90%</b> five-year survival today, up from ~60% in 1975. <b>~15%</b> relapse after chemotherapy. <b>21%</b> five-year survival after an early relapse in a big 1988–2002 cohort. For scale: if 3,100 diagnoses a year were a school, 15% relapsing would be about 450 children, a few classrooms' worth, and only some of them relapse twice. That is the size of Kymriah's first market. Keep it in mind when we get to the money.</p>`},

    {type: 'story', kicker: 'The key insight', title: 'Give a killer cell new eyes', tocTitle: 'The key insight',
      html: `<p>If T cells kill abnormal cells for a living, why don't they kill leukemia? Partly because cancer cells are the patient's own cells, and the immune system is trained hard not to attack "self". Partly because of how T cells see. A natural T-cell receptor does not look at the proteins on a cell's surface directly. It reads small fragments of proteins that the cell chops up and displays in a molecular display case. Cancers can hide by displaying nothing unusual, or by switching the display case off.</p>
      <p>Antibodies see differently. They grab whole, intact proteins on a cell's surface, such as CD19, with exquisite precision. But an antibody on its own is a tag, not a weapon.</p>
      <p>In 1989, Zelig Eshhar and colleagues at Israel's Weizmann Institute published the obvious-in-hindsight idea: bolt an antibody's eyes onto a T cell's engine. They swapped the recognition parts of a T-cell receptor for the variable regions of an antibody, and the modified T cells responded to the antibody's target. Eshhar called them "T-bodies". In 1993 his group simplified the design into a single chain: an antibody fragment outside the cell, joined through the membrane to the [[CD3 zeta]] signaling tail from the natural T-cell receptor inside. That is the first-generation [[chimeric antigen receptor]], or [[CAR]]. "Chimeric" because, like the mythical chimera, it is built from parts of different creatures.</p>
      <h3>The missing second signal</h3>
      <p>First-generation CARs worked in the dish and disappointed in people. Engineered cells went in, did a little, and faded away. By 2011, a Penn paper summarized the field bluntly: CAR T cells had so far shown minimal expansion and anti-tumor effect in clinical trials.</p>
      <p>The explanation came from basic immunology. A T cell needs two signals to launch a full attack. Signal 1 says "that's the target". Signal 2, called [[costimulation]], says "and this is serious: multiply, and stay alive". Signal 1 alone makes a T cell fire briefly and then go limp. So researchers started adding a second signaling piece to the CAR's tail.</p>
      <p>At Memorial Sloan Kettering in New York, Michel Sadelain's group added the signaling domain of [[CD28]], a classic costimulatory protein, in a 2002 paper, and in 2003 showed that human T cells with a CD19-directed CAR could eradicate B-cell tumors in mice. At St. Jude Children's Research Hospital in Memphis, Dario Campana's group built a CD19 CAR with the signaling domain of [[4-1BB]] (also called CD137), published in 2004, and showed potent killing of ALL cells. At the National Cancer Institute, Steven Rosenberg's team, with James Kochenderfer, reported in 2010 a dramatic regression of lymphoma in a patient treated with CD19 CAR-T cells. It was a race, with several credible runners.</p>
      <h3>The Penn team</h3>
      <p>At the University of Pennsylvania, Carl June had spent years learning how to grow T cells outside the body, originally for HIV research. With Bruce Levine, he developed a way to wake up and expand T cells using tiny beads coated with antibodies against CD3 and CD28, which mimic the two signals. Michael Milone in June's lab compared CAR designs head to head. In a 2009 paper, CD19 CARs carrying the 4-1BB domain beat both first-generation and CD28 versions in mice with human ALL: the cells survived longer and controlled the leukemia for more than six months. The team also used a [[lentiviral vector]], a gutted virus derived from HIV, to insert the CAR gene permanently into the T cells' DNA, so that every descendant of an engineered cell would carry the CAR too.</p>
      <p>Traditional funding was limited, and June has credited philanthropists, notably Barbara and Edward Netter's Alliance for Cancer Gene Therapy, for keeping the work going.</p>
      <h3>2010: three patients</h3>
      <p>In 2010, the Penn team, with the transplant physician David Porter, treated three adults with advanced [[CLL]], a slower B-cell leukemia, who had run out of options. The dose was tiny, in one patient about 150,000 cells per kilogram of body weight. Then the cells multiplied inside the patients more than a thousandfold, flooded the bone marrow and destroyed the leukemia. Two of the three went into complete remission. Michael Kalos led the lab work that tracked the cells and calculated that, on average, each infused CAR T cell had eliminated at least 1,000 leukemia cells. Doug Olson, one of the earliest patients, became one of the field's best-known survivors, and in 2022 the team reported that CAR-T cells were still detectable in the first two responders more than ten years after infusion, with their leukemia still in remission.</p>
      <p>The results were published in August 2011 in the <i>New England Journal of Medicine</i> and <i>Science Translational Medicine</i>. They were three patients. But they showed something no drug had shown before: a treatment that grows, hunts and remembers.</p>`},

    {type: 'figure', title: 'Anatomy of Kymriah\'s CAR', intro: 'The receptor is one protein chain with five working parts. Hover or tap each one.',
      svg: K.FIG_CAR,
      hotspots: {
        antibody: {title: 'Where the eyes come from', text: 'An [[antibody]] recognizes its target with the tips of its two arms. A CAR borrows only those tips, joined into one short chain.'},
        scfv: {title: 'Antibody fragment (scFv)', text: 'The [[scFv]] recognizes [[CD19]]. Kymriah\'s comes from a mouse antibody, which is why the label discusses immune reactions against "murine" CAR parts. It binds whole CD19 proteins on the cell surface, with no need for the display system natural T-cell receptors use.'},
        hinge: {title: 'Hinge', text: 'A flexible stalk (from a T-cell protein called CD8) that holds the scFv out from the cell so it can reach CD19. The length and stiffness of this spacer change how well a CAR works, one reason CAR engineering is still partly empirical.'},
        tm: {title: 'Transmembrane anchor', text: 'The [[transmembrane domain]] crosses the T cell\'s membrane, connecting what happens outside (binding CD19) to what happens inside (signaling). Kymriah\'s also comes from CD8.'},
        bb: {title: '4-1BB costimulatory domain', text: 'Signal 2. The [[4-1BB]] piece tells the cell to multiply and to survive. The label credits it with enhancing expansion and persistence. It is the main design difference between Kymriah (4-1BB) and Yescarta ([[CD28]]).'},
        zeta: {title: 'CD3ζ activation domain', text: 'Signal 1. The [[CD3 zeta]] tail is borrowed from the natural T-cell receptor. When the CAR binds CD19, it sets off the cascade that makes the T cell kill. The three bars represent its signaling motifs.'},
        cd19: {title: 'CD19 on the leukemia cell', text: 'The target. One CAR T cell can engage and kill many CD19-positive cells in turn.'},
        gene: {title: 'The CAR gene', text: 'A [[lentiviral vector]] writes the CAR gene into the T cell\'s own DNA during manufacturing, so every daughter cell inherits it. This permanent insertion is why the FDA classed Kymriah as a gene therapy, and why regulators require 15 years of follow-up.'},
      },
      caption: 'Schematic, not to scale. Parts as described in section 11 of the Kymriah US prescribing information: murine anti-CD19 scFv, CD8 hinge and transmembrane region, 4-1BB and CD3ζ signaling domains.'},

    {type: 'custom', title: 'Build a CAR: why the second signal mattered', intro: 'Pick a tail for the receptor and see what happened when researchers tried it. All three designs recognize CD19 in exactly the same way; only the signaling inside differs.',
      html: `<div class="card"><div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px" id="cb-btns">
        <button class="btn" data-k="g1">CD3ζ only (1st generation)</button>
        <button class="btn" data-k="g28">CD28 + CD3ζ</button>
        <button class="btn" data-k="gbb">4-1BB + CD3ζ</button></div>
        <div style="display:grid;grid-template-columns:minmax(0,300px) minmax(0,1fr);gap:18px;align-items:start" id="cb-grid">
        <div id="cb-svg" style="background:var(--il-bg);border:1px solid var(--rule);border-radius:12px;padding:8px"></div>
        <div id="cb-out" style="font:400 16.5px/1.6 var(--serif)"></div></div></div>`,
      init(root) {
        const D = {
          g1: {name: 'First generation', dom: [], text: `<p><b>Signal 1 only.</b> Eshhar's 1993 design proved the concept: a T cell armed this way recognizes its target without any help from the natural display system, and kills.</p><p><b>In people:</b> the cells fired and faded. Summing up the field in 2011, the Penn team wrote that CAR T cells had so far shown minimal expansion in patients and minimal anti-tumor effect.</p><p class="caption">Sources: Eshhar et al., PNAS 1993; Kalos et al., Sci Transl Med 2011.</p>`},
          g28: {name: 'CD28 second generation', dom: [['CD28', 'il-5']], text: `<p><b>Signal 1 + CD28.</b> Sadelain's group at Memorial Sloan Kettering (2002, 2003) and the National Cancer Institute used this design. It gave strong activation and multiplication.</p><p><b>In people:</b> it works. The NCI reported a dramatic lymphoma regression in 2010, and Kite's Yescarta, built on a CD28 CAR, produced responses in 82% of patients with refractory large B-cell lymphoma in its pivotal trial.</p><p class="caption">Sources: Maher et al., Nat Biotechnol 2002; Kochenderfer et al., Blood 2010; Neelapu et al., NEJM 2017.</p>`},
          gbb: {name: '4-1BB second generation (Kymriah)', dom: [['4-1BB', 'il-3']], text: `<p><b>Signal 1 + 4-1BB.</b> First built by Campana's group at St. Jude (2004). In Penn's 2009 mouse comparison, 4-1BB CAR T cells survived longer and controlled human ALL better than CD3ζ-only or CD28 versions.</p><p><b>In people:</b> this is Kymriah. In the first three Penn CLL patients the cells expanded more than 1,000-fold and persisted at high levels for at least six months; in the first two responders they were still detectable more than ten years later.</p><p class="caption">Sources: Imai et al., Leukemia 2004; Milone et al., Mol Ther 2009; Kalos et al., 2011; Melenhorst et al., Nature 2022.</p>`},
        };
        const draw = k => {
          const d = D[k];
          let s = `<svg viewBox="0 0 300 370" role="img" aria-label="${d.name}"><rect x="0" y="0" width="300" height="46" class="il-2s"/><path d="M0 44 H300" class="st-2" stroke-width="2"/><rect x="132" y="50" width="36" height="24" rx="10" class="il-2"/><text x="180" y="67" class="il-text">CD19</text>
            <ellipse cx="136" cy="100" rx="16" ry="22" class="il-1"/><ellipse cx="164" cy="100" rx="16" ry="22" class="il-1s st-1" stroke-width="3"/>
            <path d="M150 122 C140 138 160 150 150 166 C140 180 158 190 150 200" class="st-1 il-none" stroke-width="5"/>
            <rect x="0" y="206" width="300" height="164" class="il-1s"/><path d="M0 204 H300 M0 212 H300" class="st-1" stroke-width="2"/><rect x="141" y="198" width="18" height="20" rx="4" class="il-1"/>`;
          let y = 224;
          d.dom.forEach(([n, c]) => { s += `<rect x="122" y="${y}" width="56" height="34" rx="9" class="${c}"/><text x="150" y="${y + 22}" text-anchor="middle" class="il-text">${n}</text>`; y += 40; });
          s += `<rect x="122" y="${y}" width="56" height="52" rx="9" class="il-4"/><text x="150" y="${y + 30}" text-anchor="middle" class="il-text">CD3ζ</text>`;
          s += `<text x="12" y="358" class="il-text">${d.name}</text></svg>`;
          root.querySelector('#cb-svg').innerHTML = s;
          root.querySelector('#cb-out').innerHTML = d.text;
          root.querySelectorAll('#cb-btns button').forEach(b => b.classList.toggle('primary', b.dataset.k === k));
        };
        root.querySelector('#cb-btns').onclick = e => { const b = e.target.closest('button'); if (b) draw(b.dataset.k); };
        const mq = () => { root.querySelector('#cb-grid').style.gridTemplateColumns = root.clientWidth < 620 ? '1fr' : 'minmax(0,300px) minmax(0,1fr)'; };
        mq(); addEventListener('resize', mq);
        draw('gbb');
      }},

    {type: 'callout', variant: 'product', heading: 'A CAR is a composable interface, until it isn\'t',
      html: `<p>To a software person, a CAR looks like clean modular architecture: a recognition module (the scFv) that defines <i>what</i> to act on, an adapter layer (hinge and transmembrane anchor), and pluggable business logic (the signaling domains) that defines <i>what to do</i>. Swap the scFv and you retarget the whole system; BCMA-directed CARs for myeloma reuse much of the same chassis. It really is a platform.</p>
      <p>Where the analogy breaks: the modules are not independent. Hinge length changes how well the binder works; the costimulatory domain changes how long the cells live, how violently they expand and how toxic they are. Mouse results did not reliably predict human ones. And there is no staging environment. Each "config change" is effectively a new product that must be tested in sick people, in trials that take years, with side effects that cannot be rolled back once the cells are inside a patient.</p>`},

    {type: 'mechanism', title: 'How a CAR-T cell clears leukemia', intro: 'Step through what happens after the bag of cells is infused. The same steps explain why it works, and why it is dangerous.',
      svg: K.MECH_SVG,
      steps: [
        {title: 'A bag of living cells', text: 'After a short course of chemotherapy to make room, the patient receives a single infusion of their own engineered T cells. For a child weighing 30 kg, the ALL dose range works out to about 6 to 150 million CAR-positive cells, in a bag of 10 to 50 milliliters. That sounds like a lot; it is a tiny fraction of the cells that will exist a week later.', show: ['blood', 'cart', 'leuk', 'bcell']},
        {title: 'The hunt for CD19', text: 'The CAR-T cells circulate through the blood, bone marrow and even the fluid around the brain and spinal cord, where Penn\'s team later found them in children. They do not need the leukemia to "display" anything unusual. They simply bump into cells and check for [[CD19]].', show: ['blood', 'cart', 'leuk', 'bcell'], focus: ['leuk'], move: {cart: 'translate(250px, 0px)'}},
        {title: 'Lock on, switch on', text: 'When the antibody fragment grabs CD19, the receptors cluster and both signaling pieces fire: [[CD3 zeta]] says "attack", [[4-1BB]] says "multiply and survive". A natural T cell needs two separate receptors for these two messages. The CAR delivers both from a single contact.', show: ['blood', 'cart', 'leuk', 'bcell', 'synapse', 'signal'], focus: ['synapse'], pulse: ['signal'], move: {cart: 'translate(250px, 0px)'}},
        {title: 'Multiply', text: 'Activated CAR-T cells divide again and again. In the first Penn patients the engineered cells expanded more than a thousandfold inside the body. This is the property that separates a living drug from a pill: the dose is set by the disease. More leukemia means more targets, which means more expansion.', show: ['blood', 'cart', 'leuk', 'bcell', 'clones'], focus: ['clones'], move: {cart: 'translate(250px, 0px)'}},
        {title: 'Kill', text: 'A CAR-T cell presses against its target and releases [[perforin]], which punches holes in the membrane, and granzymes, which enter and trigger the cell\'s self-destruct program. Then it detaches and moves on to the next one. Kalos\'s team estimated that each infused cell eliminated at least 1,000 leukemia cells.', show: ['blood', 'cart', 'clones', 'granules', 'dead', 'bcell'], focus: ['dead'], move: {cart: 'translate(250px, 0px)'}},
        {title: 'The collateral effects', text: 'Two side effects come straight from the mechanism. Healthy B cells carry CD19 too, so they are wiped out ([[B-cell aplasia]]); patients may need antibody infusions. And billions of activating immune cells release a flood of [[cytokine|cytokines]], which causes [[cytokine release syndrome]]: fever, falling blood pressure and, at worst, organ failure. In ELIANA it happened to 77% of patients.', show: ['blood', 'cart', 'clones', 'dead', 'bcell', 'bdead', 'cyto'], dim: ['dead'], pulse: ['cyto'], focus: ['bdead'], move: {cart: 'translate(250px, 0px)'}},
        {title: 'Standing guard', text: 'Once the leukemia is gone, most CAR-T cells die off, but some settle down as long-lived memory cells. If CD19-positive cells reappear, they can re-expand. In ELIANA, the cells were found in the blood as long as 20 months after infusion; in two of Penn\'s first CLL patients, more than ten years. The flip side: as long as they persist, the patient usually has no B cells.', show: ['blood', 'memory', 'bcell', 'bdead'], dim: ['bcell', 'bdead']},
      ]},

    {type: 'callout', variant: 'misconception', heading: '"First gene therapy" does not mean the patient\'s genes were changed',
      html: `<p>The FDA called Kymriah the first gene therapy approved in the United States, which can sound as if doctors rewrote the patient's genome. They did not. The new gene goes into T cells in a factory, outside the body. The patient's other cells, including eggs, sperm and the bone marrow stem cells, are untouched, and nothing is inherited by the patient's children. What makes it a gene therapy is that a new gene is permanently inserted into the DNA of the cells that are given back. That permanence is also why regulators worry about the rare chance of the insertion landing somewhere harmful ([[insertional mutagenesis]]), and why every patient is followed for 15 years.</p>`},

    {type: 'timeline', title: 'From T-bodies to boxed warnings', intro: 'Three decades, from an Israeli lab idea to a commercial product that is now being overtaken by its successors. Filter by kind of event.',
      events: [
        {year: 1989, title: 'Eshhar\'s "T-bodies"', kind: 'science', text: 'Gross, Waks and Eshhar at the Weizmann Institute show T cells can be given antibody-type specificity with chimeric receptors (PNAS).'},
        {year: 1993, title: 'The single-chain CAR', kind: 'science', text: 'Eshhar\'s group joins an antibody fragment to the CD3ζ signaling chain: the first-generation CAR.'},
        {year: 2002, title: 'Adding CD28', kind: 'science', text: 'Sadelain\'s group at Memorial Sloan Kettering adds a CD28 costimulatory domain.'},
        {year: 2003, title: 'CD19 CAR clears tumors in mice', kind: 'science', text: 'Brentjens, Sadelain and colleagues target CD19 (Nature Medicine).'},
        {year: 2004, title: 'The 4-1BB CAR at St. Jude', kind: 'science', text: 'Imai, Campana and colleagues build an anti-CD19 CAR with a 4-1BB domain and show potent killing of ALL cells.'},
        {year: 2009, title: 'Penn\'s CD19-BB-ζ design', kind: 'science', text: 'Milone, June and colleagues show 4-1BB CARs, delivered by lentiviral vector, outperform alternatives in mice.'},
        {year: 2010, title: 'First CLL patients at Penn', kind: 'clinical', text: 'Three adults with refractory CLL are treated; two achieve complete remission that year.'},
        {year: 2010, title: 'NCI reports lymphoma regression', kind: 'clinical', text: 'Kochenderfer, Rosenberg and colleagues publish a CD19 CAR-T response in follicular lymphoma (Blood).'},
        {year: 2011, date: 'Aug 2011', title: 'Penn results published', kind: 'clinical', text: 'Porter et al. (NEJM) and Kalos et al. (Sci Transl Med): >1,000-fold expansion, remissions.'},
        {year: 2012, date: 'Apr 2012', title: 'Emily Whitehead is infused', kind: 'people', text: 'The first child treated, at CHOP. Severe CRS is reversed with tocilizumab.'},
        {year: 2012, date: 'Aug 2012', title: 'Novartis–Penn alliance', kind: 'business', text: 'Exclusive worldwide license to CTL019 and future CARs; Novartis funds a new Penn cell-therapy center.'},
        {year: 2012, date: 'Dec 2012', title: 'Novartis buys a cell-therapy plant', kind: 'business', text: 'Dendreon\'s Morris Plains, New Jersey facility, built for Provenge, for $43 million.'},
        {year: 2012, title: 'St. Jude sues Penn', kind: 'setback', text: 'A contract dispute over the 4-1BB CAR grows into patent litigation, later joined by Juno Therapeutics.'},
        {year: 2013, date: 'Apr 2013', title: 'Two children in NEJM', kind: 'clinical', text: 'Grupp et al.: both go into remission; one relapses with leukemia that no longer carries CD19.'},
        {year: 2014, date: 'Oct 2014', title: '30 patients, 90% complete remission', kind: 'clinical', text: 'Maude et al. (NEJM): 27 of 30 children and adults with relapsed ALL in complete remission.'},
        {year: 2015, date: 'Apr 2015', title: 'Patent fight settled; ELIANA starts', kind: 'business', text: 'Novartis pays Juno $12.25M upfront plus milestones and royalties. The global pivotal trial enrolls its first patients the same month.'},
        {year: 2017, date: 'Jul 12, 2017', title: 'Advisory committee votes 10–0', kind: 'regulatory', text: 'Emily\'s father, Tom Whitehead, speaks at the public hearing.'},
        {year: 2017, date: 'Aug 28, 2017', title: 'Gilead agrees to buy Kite for $11.9B', kind: 'business', text: 'Two days before Kymriah\'s approval, the rival CD28 CAR-T company is valued at $180 a share.'},
        {year: 2017, date: 'Aug 30, 2017', title: 'FDA approves Kymriah', kind: 'regulatory', text: 'First gene therapy approved in the US. Tocilizumab is approved for CRS the same day.'},
        {year: 2017, date: 'Oct 18, 2017', title: 'Yescarta approved', kind: 'business', text: 'Kite\'s CAR-T wins adult large B-cell lymphoma first, at $373,000.'},
        {year: 2018, date: 'May 2018', title: 'Kymriah approved in adult lymphoma', kind: 'regulatory', text: 'Based on the JULIET trial in diffuse large B-cell lymphoma.'},
        {year: 2018, date: 'Jul 2018', title: 'CMS walks away from pricing pilot', kind: 'setback', text: 'Medicare drops a planned indication-based payment demonstration with Novartis.'},
        {year: 2021, title: 'BELINDA fails', kind: 'setback', text: 'Kymriah does not beat standard care as second-line lymphoma treatment; Yescarta\'s ZUMA-7 does.'},
        {year: 2022, date: 'May 2022', title: 'Follicular lymphoma approval', kind: 'regulatory', text: 'Accelerated approval for relapsed or refractory follicular lymphoma.'},
        {year: 2022, date: 'May 2022', title: 'Emily: ten years cancer-free', kind: 'people', text: 'CHOP marks the anniversary; her doctors say they believe she is cured.'},
        {year: 2023, date: 'Aug 2023', title: 'FDA warning letter to Morris Plains', kind: 'setback', text: 'Inspectors cite particles in about 100 batches and repeated mold findings in clean rooms.'},
        {year: 2023, date: 'Nov 28, 2023', title: 'FDA investigates T-cell cancers', kind: 'setback', text: 'Reports of secondary T-cell malignancies across all six approved CAR-Ts.'},
        {year: 2024, date: 'Apr 2024', title: 'Class-wide boxed warning', kind: 'regulatory', text: 'T-cell malignancies added to the boxed warnings of all BCMA- and CD19-directed CAR-Ts.'},
        {year: 2025, date: 'Jun 26, 2025', title: 'REMS eliminated', kind: 'regulatory', text: 'FDA drops the restricted-distribution program for autologous CAR-Ts to widen access.'},
      ]},

    {type: 'story', kicker: 'Back to the bedside', title: 'The first child', tocTitle: 'Emily\'s storm',
      html: `<p>Emily Whitehead was diagnosed with ALL on May 28, 2010, when she was five. Standard chemotherapy put her into remission for 16 months. In October 2011 the leukemia came back. A second, harsher round of chemotherapy was meant to get her into remission for a [[stem cell transplant]], and in early 2012, weeks before the planned transplant, the leukemia returned again. Her doctors proposed an even more toxic drug combination; her parents, worried about lasting kidney damage and the odds of success, declined. Instead they brought her to CHOP, where Stephan Grupp was opening the first pediatric trial of Penn's CAR-T cells, then called CTL019.</p>
      <p>The logistics of that first infusion were academic, not industrial. Emily's T cells were collected in March and engineered and grown at Penn's own Clinical Cell and Vaccine Production Facility, the laboratory Bruce Levine directed. In April she received the cells over three days, starting on April 17.</p>
      <p>Within days the storm began. The team knew to expect some reaction: the adult CLL patients who responded had developed fevers and other signs of cytokine release as their cells expanded. Emily's reaction was far more severe. She needed drugs to keep her blood pressure up. Her lungs filled with fluid. She was intubated and sedated. Steroids, the standard way to damp down an overactive immune system, were not working, and pushing them harder carried its own danger: steroids can kill T cells, including the engineered ones that were her only hope against the leukemia.</p>
      <p>Then came the lab result. The team had been measuring a panel of cytokines, and one stood out: [[IL-6]], a cytokine that drives fever and makes blood vessels leak, was enormously elevated. As Grupp later put it, "In a stroke of serendipity, IL-6 was one of the few cytokines in 2012 with an FDA-approved drug that blocks it." That drug was [[tocilizumab]], an antibody sold as Actemra for rheumatoid arthritis and juvenile arthritis. Carl June knew it well, because his daughter was being treated with it.</p>
      <p>Nobody had given tocilizumab for this. Nobody knew whether blocking IL-6 would calm the storm, or whether it would also cripple the CAR-T cells and let the leukemia win. Put yourself in the room.</p>`},

    {type: 'decision', title: 'The Emily Whitehead moment', role: 'You are on the CHOP and Penn team, April 2012',
      scenario: `A six-year-old on a ventilator, blood pressure failing, fever unbroken, about a week after her CAR-T infusion. Steroids have not helped. Her IL-6 level is extraordinarily high. The CAR-T cells are expanding, which is what you want for the leukemia and the likely cause of the crisis. What do you recommend?`,
      options: [
        {label: 'Escalate to high-dose steroids. They are the proven, familiar way to shut down a runaway immune response.', outcome: 'This is the textbook move and it might well save her from the storm. The cost is that high-dose steroids are toxic to T cells. You could survive the crisis and lose the treatment: if the CAR-T cells are wiped out before they finish the leukemia, it comes back. The team had already found that the steroids they gave were not controlling the reaction.'},
        {label: 'Give tocilizumab, off-label, to block IL-6 specifically.', outcome: 'A targeted bet: block the one signal that is off the charts and leave the T cells alone. The risks are real. It has never been used for this, IL-6 might be a symptom rather than a driver, and you cannot be sure it spares the anti-leukemia effect. But it is an approved drug with a known safety record in children, and it attacks the measured problem directly.'},
        {label: 'Keep maximal supportive care (ventilator, blood-pressure drugs, fluids) and let the reaction burn itself out.', outcome: 'This protects the CAR-T cells completely, and the reaction may well be self-limiting once the leukemia is gone. But she is already on maximal support and getting worse. Waiting means betting that her organs will outlast the storm, with no way to reverse course if they do not.'},
      ],
      reality: `The team gave tocilizumab (the published case report notes that etanercept, another anti-inflammatory antibody, was also given). Her fever broke within hours; over the following days she came off blood-pressure support and the ventilator. She woke up on her seventh birthday. A bone-marrow test showed the leukemia was gone. It was later found that blocking IL-6 did not stop the CAR-T cells from expanding or killing leukemia. Grupp's team published the case in the <i>New England Journal of Medicine</i> in 2013, and tocilizumab became the standard treatment for severe [[cytokine release syndrome]]. On August 30, 2017, the same day it approved Kymriah, the FDA approved tocilizumab for CAR-T-induced CRS. Emily passed ten years cancer-free in 2022.`},

    {type: 'story', title: 'What Emily taught the field', tocTitle: 'What Emily taught',
      html: `<p>Emily's case changed the field in three ways.</p>
      <p><strong>It turned the storm into a manageable toxicity.</strong> Before 2012, [[cytokine release syndrome]] was a frightening and poorly understood reaction. Afterwards it had a mechanism (IL-6 as a central driver), a biomarker and a treatment. Penn and CHOP learned that severe CRS was more likely in patients with more leukemia at the time of infusion, which makes sense: more targets, more activation. In the 30-patient series published in 2014, every patient developed CRS, 27% had severe CRS, and it was, in the authors' words, "effectively treated" with tocilizumab. Hospitals could now plan for it: a CAR-T center must have tocilizumab on hand before a patient is infused.</p>
      <p><strong>It showed the treatment worked in the hardest disease.</strong> Two children were described in the 2013 paper, and both went into complete remission. One was Emily. The other relapsed about two months later, and the returning leukemia cells no longer carried CD19. The cancer had evolved around the drug by dropping the very handle it grabbed. This "antigen escape" is still one of the main ways CAR-T fails, and it is why researchers are testing CARs that recognize two targets at once.</p>
      <p><strong>It gave the treatment a face.</strong> Emily and her family became the most visible advocates for CAR-T. Her father would later testify before the FDA's advisory committee, and her story was covered widely by newspapers and television. For a technology that sounded like science fiction, a smiling seven-year-old in remission was more persuasive than any survival curve.</p>
      <p>By 2014, Penn and CHOP had treated 30 children and adults with relapsed or refractory ALL. Twenty-seven, or 90%, went into complete remission, including 15 whose leukemia had come back after a stem cell transplant. It was time to find out whether this could become a product.</p>`},

    {type: 'callout', variant: 'whatif', heading: 'What if Carl June\'s daughter hadn\'t had arthritis?',
      html: `<p>June has said plainly that he knew about tocilizumab because his daughter, about a year older than Emily, had arthritis, and that this coincidence saved Emily's life and is part of why CAR-T cells are available today. Suppose the first child had died of CRS in April 2012. A pediatric trial with a death in its first patient would very likely have been paused. Engineered T cells were still an unproven field. The Novartis deal was signed that August, four months later; it is easy to imagine it being delayed or shrunk. Other groups would probably have found IL-6 blockade eventually, because the biology was there to be found. But "eventually" in drug development can mean years, and years are measured in patients.</p>
      <p>The lesson is not "get lucky". It is that the team measured a broad panel of cytokines in real time, so when the crisis came, they had the data to act on, and someone in the room knew the pharmacopeia well enough to connect the data to an existing drug.</p>`},

    {type: 'figure', title: 'The storm, and where drugs can act', intro: 'Cytokine release syndrome and neurotoxicity are the two signature toxicities of CAR-T. Hover or tap each part.',
      svg: K.FIG_CRS,
      hotspots: {
        cart: {title: 'The trigger', text: 'When millions of CAR-T cells engage CD19-positive cells at once, they release cytokines such as interferon-gamma. More leukemia at infusion means more activation, and a higher risk of severe CRS.'},
        macro: {title: 'The amplifiers', text: 'Other immune cells, especially macrophages, respond to those signals by pouring out even more cytokines, including [[IL-6]]. This is why the reaction can snowball far beyond the CAR-T cells themselves.'},
        il6: {title: 'IL-6', text: 'The cytokine that was sky-high in Emily Whitehead. It drives fever and makes blood vessels leaky.'},
        vessel: {title: 'What the patient feels', text: 'Fever (93% of ALL patients with CRS in the label), low blood pressure (69%), low oxygen (57%). Severe cases need intensive care. In ELIANA, 47% of infused patients were admitted to intensive care.'},
        toci: {title: 'Tocilizumab', text: '[[tocilizumab|Tocilizumab]] blocks the IL-6 receptor, so IL-6 cannot deliver its message. It calms CRS without apparently stopping the CAR-T cells from working. The label requires at least two doses to be available on site before infusion.'},
        brain: {title: 'Neurotoxicity (ICANS)', text: 'Confusion, difficulty speaking, tremor, seizures and, rarely, brain swelling. Now called [[ICANS]]. It can occur with CRS, after it, or without it, and tocilizumab does not reliably treat it; steroids are used instead. Its mechanism is still not fully understood.'},
        steroid: {title: 'Steroids', text: 'Corticosteroids suppress inflammation broadly. They work against both CRS and ICANS, but they can also suppress the CAR-T cells, so doctors use them carefully.'},
      },
      caption: 'Schematic. Percentages from the Kymriah US prescribing information and Maude et al., NEJM 2018.'},

    {type: 'story', kicker: 'Building the business', title: 'A university, a pharma company and a plant in New Jersey', tocTitle: 'Novartis and Penn',
      html: `<p>By 2012, Penn had something extraordinary and no way to deliver it at scale. Its production facility was built to supply clinical trials, not a commercial market. Taking a product through a global pivotal trial, the FDA and a worldwide launch costs hundreds of millions of dollars and needs manufacturing, regulatory and commercial machinery that universities do not have.</p>
      <p>On August 6, 2012, Novartis and Penn announced an alliance. Penn granted Novartis an exclusive worldwide license to CTL019 and to future CARs developed through the collaboration, for all uses. In return Novartis agreed to pay an upfront fee, research funding, milestone payments and royalties, and to fund a new Center for Advanced Cellular Therapeutics on Penn's campus. The center cost about $27 million, $20 million of it from Novartis, with 6,300 square feet of clean rooms for cell engineering.</p>
      <p>Four months later, in December 2012, Novartis bought a factory. Dendreon, which had made the prostate cancer vaccine Provenge (the first approved [[autologous]] cellular immunotherapy, also made from each patient's own cells), was restructuring and closing its plant in Morris Plains, New Jersey. Novartis paid $43 million for the building, its equipment, its clean-room infrastructure and some of its trained staff. It was a rare thing: a ready-made facility designed for personalized cell products, available at a bargain because its previous owner's business model had struggled.</p>
      <h3>The patent fight</h3>
      <p>There was a snag. The 4-1BB CAR design had first been built at St. Jude, in Dario Campana's lab. In 2012, a contract dispute between St. Jude and Penn grew into patent litigation over a St. Jude patent covering "chimeric receptors with 4-1BB stimulatory signaling domain". In 2013 St. Jude licensed that patent to Juno Therapeutics, a well-funded CAR-T startup with roots at Memorial Sloan Kettering, and Juno joined the fight. In April 2015 it was settled: Novartis paid Juno $12.25 million upfront plus milestones and royalties on US sales, shared with St. Jude. The CAR-T field was now a race among Novartis, Juno and Kite, each built on a different academic lineage.</p>`},

    {type: 'decision', title: 'Build, buy or borrow the factory?', role: 'You run Novartis\'s new cell-therapy effort, late 2012',
      scenario: `You have just licensed CTL019. No one has ever manufactured a genetically modified, patient-specific cell therapy at commercial scale. Each batch starts from one sick patient's blood, and every batch is different. Penn can keep making cells for early trials. You need a plan for the global pivotal trial and launch.`,
      options: [
        {label: 'Buy Dendreon\'s idle Morris Plains plant, built for patient-specific cells, and run manufacturing in-house.', outcome: 'You get control of the process and a head start on the hardest part of the business, for a modest price. You also take on fixed costs, a site built for a different product that must be re-validated, and the full burden of regulatory compliance. When anything goes wrong in the factory, it is your name on the FDA letter.'},
        {label: 'Outsource to an experienced contract manufacturer ([[CDMO]]) and stay asset-light.', outcome: 'Faster to start and cheaper up front, and it keeps your options open if the product fails. But in 2012 almost no contract manufacturer had done this at scale. You would be teaching a partner your most valuable know-how, competing with other clients for slots, and depending on someone else for the one step that decides whether each patient gets treated.'},
        {label: 'Let Penn keep manufacturing through the pivotal trial and decide later.', outcome: 'It avoids a big bet before the data are in, and Penn knows the process best. But an academic facility cannot supply a multinational trial, and regulators will want the commercial product to match the trial product. Changing factories after the trial invites exactly the question you do not want: is this still the same drug?'},
      ],
      reality: `Novartis bought the Morris Plains site in December 2012 for $43 million and made it the hub for Kymriah; ELIANA's patients across 25 centers in 11 countries used centrally manufactured product. The bet gave Novartis a head start, and also a single point of failure. At the 2017 advisory committee, the FDA's Wilson Bryan framed the central question as ensuring "the marketed product would be the same product as what was studied in clinical trials." Years later, an FDA inspection of Morris Plains in late 2022 led to a 2023 warning letter citing foreign particles in about 100 batches since 2018 and repeated mold findings in clean rooms. Novartis also added sites elsewhere, including a facility in Stein, Switzerland.`},

    {type: 'story', kicker: 'The manufacturing problem', title: 'One patient, one batch', tocTitle: 'Making a living drug',
      html: `<p>A normal drug is made in huge batches: one run of a tablet press or a bioreactor supplies thousands of patients, and every pill is identical. Kymriah inverts that. Every batch serves exactly one patient, starts from that patient's cells, and must come back to that patient and nobody else. The starting material is different every time, often damaged by years of chemotherapy. Here is the journey, as the prescribing information describes it.</p>
      <p><strong>1. Collection.</strong> At a certified hospital, the patient undergoes [[leukapheresis]]: blood is drawn through a catheter, the white cells are spun out, and the rest is returned. It takes 3 to 6 hours and sometimes must be repeated. The cells are frozen and labeled with the patient's identity; from here on, a [[chain of identity]] tracks the bag like a passport.</p>
      <p><strong>2. Shipping.</strong> The frozen cells travel by specialist courier to the manufacturing site, Morris Plains for US patients.</p>
      <p><strong>3. Enrichment and engineering.</strong> Technicians enrich the sample for T cells, wake them up with beads coated with antibodies against CD3 and CD28 (the Penn invention that mimics the two signals), and expose them to the [[lentiviral vector]] carrying the CAR gene. The virus inserts the gene into the T cells' DNA. This is [[transduction]].</p>
      <p><strong>4. Expansion.</strong> The engineered cells grow and divide in culture for days until there are enough of them. Here the patient's biology matters: T cells from heavily treated patients sometimes grow poorly.</p>
      <p><strong>5. Harvest, formulation and freezing.</strong> The cells are washed, suspended in a solution that includes a cryoprotectant, and frozen in one to three patient-specific bags.</p>
      <p><strong>6. Quality testing and release.</strong> The batch must pass release tests, including sterility, before it can ship. A Certificate of Analysis travels with it, stating the actual number of CAR-positive cells. A batch that misses a release test is called [[out of specification]].</p>
      <p><strong>7. Shipping back.</strong> Frozen, to the treating hospital. The Medication Guide tells patients the process takes "about 3-4 weeks" from when the cells reach the site to when they are shipped back. Before launch, Novartis said it expected a 22-day turnaround.</p>
      <p><strong>8. Lymphodepletion and infusion.</strong> Meanwhile the patient's leukemia keeps growing, so most receive [[bridging therapy]]; in the FDA's ALL cohort, 53 of 63 patients did. Then comes [[lymphodepletion]]: for ALL, fludarabine daily for four days and cyclophosphamide for two, followed 2 to 14 days later by the infusion itself, which usually takes less than an hour after thawing. Staff verify the patient's identity against the bag before they infuse. The patient must stay near the treating hospital for at least two weeks and not drive for two weeks.</p>
      <p>The whole span, from collection to infusion, is the [[vein-to-vein time]]. Every day of it is a day for the disease. And every step can fail: a courier delay, a manufacturing slot that is not free, cells that will not grow, a batch that fails release, a patient who develops an infection and cannot receive chemotherapy. In the FDA's ALL cohort, 9% of enrolled patients never received the product because of manufacturing failure. Novartis told the 2017 advisory committee it had cut failures to about 2% in recent batches.</p>
      <p>In Japan, where Novartis published four years of commercial data, the manufacturing success rate rose from 85.6% in the first year to 95.3% in the fourth, and the share of out-of-specification batches fell from 7.6% to 3.7%. The main reasons a batch misses its specifications are low cell viability and a dose outside the approved range. An out-of-specification batch is not necessarily useless; Novartis has run trials to give such products to patients who have no alternative, such as a phase 3b study in Japan.</p>`},

    {type: 'custom', title: 'The vein-to-vein clock', intro: 'Here is a simplified journey for one patient. Add the delays that happen in real life and watch the clock and the waiting patients. The stage lengths are illustrative, chosen so the in-plant and shipping steps add up to Novartis\'s planned 22-day turnaround.',
      html: `<div class="card">
        <div id="vv-svg"></div>
        <div id="vv-ctrls" style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:4px 28px;margin-top:10px"></div>
        <div style="display:flex;gap:10px;align-items:center;margin-top:12px;flex-wrap:wrap"><button class="btn primary" id="vv-play">▶ Run the clock</button><button class="btn" id="vv-reset">Reset delays</button><span id="vv-sum" style="font-size:15px"></span></div>
        <div id="vv-out" style="margin-top:12px;font:400 16.5px/1.6 var(--serif)"></div>
        <div class="caption">Toy model. The weekly drop-out rate is an assumption you set, not a measured rate. Real anchors: in ELIANA, 17 of 92 enrolled patients were never infused. In the BELINDA lymphoma trial, the median time from leukapheresis to infusion was 52 days, and 25.9% of patients in the CAR-T arm had progressing lymphoma by week 6.</div></div>`,
      init(root) {
        const base = [
          {k: 'col', n: 'Collect', d: 1, c: 'il-3'},
          {k: 'ship1', n: 'Ship to plant', d: 2, c: 'il-8'},
          {k: 'eng', n: 'Engineer', d: 2, c: 'il-1'},
          {k: 'grow', n: 'Grow', d: 8, c: 'il-1'},
          {k: 'frz', n: 'Freeze', d: 1, c: 'il-1'},
          {k: 'qc', n: 'Test & release', d: 7, c: 'il-6'},
          {k: 'ship2', n: 'Ship back', d: 2, c: 'il-8'},
          {k: 'ld', n: 'Chemo + infuse', d: 6, c: 'il-3'},
        ];
        const knobs = [
          {id: 'courier', label: 'Courier or customs delay', max: 6, after: 'ship1', unit: 'days'},
          {id: 'slot', label: 'Waiting for a manufacturing slot', max: 28, after: 'ship1', unit: 'days'},
          {id: 'slow', label: 'Cells grow slowly', max: 10, after: 'grow', unit: 'days'},
          {id: 'remake', label: 'Batch fails release: remake it', max: 1, after: 'qc', unit: 'toggle'},
          {id: 'sick', label: 'Patient too unwell for chemo (infection)', max: 14, after: 'ship2', unit: 'days'},
          {id: 'drop', label: 'Weekly chance a waiting patient becomes too sick to treat', max: 8, unit: '%', val: 2},
        ];
        const v = {}; knobs.forEach(k => v[k.id] = k.val || 0);
        const ctr = root.querySelector('#vv-ctrls');
        ctr.innerHTML = knobs.map(k => `<label style="display:grid;grid-template-columns:1fr 120px 64px;gap:8px;align-items:center;font-size:14.5px"><span>${k.label}</span><input type="range" min="0" max="${k.max}" step="1" value="${v[k.id]}" data-id="${k.id}" style="accent-color:var(--accent)"><b data-o="${k.id}" style="text-align:right;font-variant-numeric:tabular-nums"></b></label>`).join('');
        const segs = () => {
          const out = [];
          base.forEach(s => {
            out.push(s);
            knobs.filter(k => k.after === s.k && v[k.id] > 0).forEach(k => out.push({n: k.id === 'remake' ? 'Remake batch' : k.label.split(' ')[0] + ' delay', d: k.id === 'remake' ? 18 : v[k.id], c: 'il-7', delay: true}));
          });
          return out;
        };
        const W = 860, X0 = 20, scale = (W - 40) / 120;
        let clock = null;
        const draw = (day) => {
          const S = segs(), total = S.reduce((a, s) => a + s.d, 0);
          let x = X0, t = 0, s = `<svg viewBox="0 0 ${W} 190" role="img" aria-label="Vein-to-vein timeline">`;
          // stations
          base.forEach((b, i) => {
            const cx = 60 + i * 105, active = day != null && (() => { let tt = 0; for (const q of S) { if (day >= tt && day < tt + q.d) return q === b; tt += q.d; } return false; })();
            s += `<circle cx="${cx}" cy="34" r="20" class="${active ? b.c : 'il-paper'} il-line"/><text x="${cx}" y="39" text-anchor="middle" class="${active ? 'il-white' : 'il-text'}">${i + 1}</text><text x="${cx}" y="74" text-anchor="middle" class="il-text-2">${b.n}</text>`;
          });
          // bar
          s += `<rect x="${X0}" y="96" width="${W - 40}" height="30" rx="6" class="il-bg il-line"/>`;
          S.forEach(q => { const w = q.d * scale; s += `<rect x="${x}" y="98" width="${Math.max(1, w - 1)}" height="26" rx="3" class="${q.c}" ${q.delay ? '' : 'opacity=".85"'} data-tip="<b>${q.n}</b><br>${q.d} day${q.d === 1 ? '' : 's'}"/>`; x += w; t += q.d; });
          [0, 30, 60, 90, 120].forEach(dd => s += `<text x="${X0 + dd * scale}" y="146" text-anchor="${dd === 0 ? 'start' : dd === 120 ? 'end' : 'middle'}" class="il-text-2">day ${dd}</text>`);
          const tx = X0 + Math.min(day == null ? total : day, 120) * scale;
          s += `<path d="M${tx} 88 V132" class="st-ink" stroke-width="2.5"/><circle cx="${tx}" cy="88" r="6" class="il-4 il-line"/>`;
          s += `<text x="${X0}" y="178" class="il-text">${day == null ? 'Vein-to-vein: ' + total + ' days' : 'Day ' + Math.floor(day) + ' of ' + total}</text>`;
          s += `<text x="${W - 20}" y="178" text-anchor="end" class="il-text-2">red = delays</text></svg>`;
          root.querySelector('#vv-svg').innerHTML = s;
          return total;
        };
        const update = () => {
          knobs.forEach(k => root.querySelector(`[data-o="${k.id}"]`).textContent = k.unit === 'toggle' ? (v[k.id] ? 'yes' : 'no') : v[k.id] + (k.unit === '%' ? '%' : ' d'));
          const total = draw(null), p = v.drop / 100, weeks = total / 7;
          const still = Math.round(100 * Math.pow(1 - p, weeks)), baseT = base.reduce((a, s) => a + s.d, 0), baseStill = Math.round(100 * Math.pow(1 - p, baseT / 7));
          root.querySelector('#vv-sum').innerHTML = `<b>${total} days</b> vein-to-vein (baseline ${baseT})`;
          root.querySelector('#vv-out').innerHTML = `Of 100 patients starting this journey, about <b>${still}</b> would still be well enough to receive their cells at day ${total}${total > baseT ? `, versus about ${baseStill} with no delays. The delays cost roughly <b>${baseStill - still}</b> patients in every hundred` : ''}. ${total >= 52 ? 'You are now at or beyond the 52-day median wait in BELINDA, the lymphoma trial Kymriah lost.' : ''}`;
        };
        ctr.addEventListener('input', e => { const i = e.target.closest('input'); if (!i) return; v[i.dataset.id] = +i.value; stop(); update(); });
        const stop = () => { if (clock) { clearInterval(clock); clock = null; root.querySelector('#vv-play').textContent = '▶ Run the clock'; } };
        root.querySelector('#vv-play').onclick = () => {
          if (clock) { stop(); update(); return; }
          let d = 0; const total = draw(0); root.querySelector('#vv-play').textContent = '❚❚ Pause';
          clock = setInterval(() => { d += 0.5; if (d >= total) { stop(); update(); } else draw(d); }, 60);
        };
        root.querySelector('#vv-reset').onclick = () => { knobs.forEach(k => { v[k.id] = k.val || 0; root.querySelector(`input[data-id="${k.id}"]`).value = v[k.id]; }); stop(); update(); };
        const mq = () => { ctr.style.gridTemplateColumns = root.clientWidth < 700 ? '1fr' : 'minmax(0,1fr) minmax(0,1fr)'; };
        mq(); addEventListener('resize', mq);
        update();
      }},

    {type: 'callout', variant: 'product', heading: 'Build-to-order, where every order is irreplaceable',
      html: `<p>Autologous CAR-T is the most extreme build-to-order supply chain in commerce. Each unit is custom, the raw material is supplied by the customer, and the customer's identity must be tracked through every step, like an order ID that can never be mixed up. Latency is the key metric: vein-to-vein time is an SLA, and missing it has a cost you can count in patients. Capacity planning is brutal, because demand arrives one patient at a time and each slot is tied up for weeks.</p>
      <p>Where the analogy breaks: the raw material is scarce and degraded (you cannot ask a patient for a fresh batch of healthy T cells), a failed order often cannot simply be re-run, and you cannot ship a "good enough" version and patch it later. Every process improvement, even changing a bag supplier, has to be shown to produce the same product, which is why cell-therapy companies say "the process is the product."</p>`},

    {type: 'story', kicker: 'The trials', title: 'Designing ELIANA', tocTitle: 'Designing ELIANA',
      html: `<p>The single-center results from Penn and CHOP were remarkable, but they came from the team that invented the therapy, making cells in its own lab for its own patients. The FDA needed to see that Novartis could make the product in its own factory, ship it around the world, and have other hospitals achieve similar results. That was ELIANA.</p>
      <p>ELIANA was a [[phase 2]], single-arm, [[open-label]] trial. There was no control group: every patient got tisagenlecleucel, and everyone knew it. For most drugs that would be a weak design. Here it was defensible, for three reasons. First, the patients had leukemia that had come back at least twice, or had never responded, and for them there was no effective standard treatment to compare against. Second, spontaneous remission in this disease essentially does not happen, so if a patient's marrow went from full of blasts to clear, the drug did it. Third, randomizing dying children to a chemotherapy regimen that had already failed them would have been hard to justify ethically and nearly impossible to recruit.</p>
      <p>So the trial set a bar instead of a comparator. The [[primary endpoint]] was the overall remission rate, meaning [[complete remission]] or [[CRi]] (complete remission with incomplete blood count recovery), within three months of infusion. The statistical test was whether that rate beat 20%. Secondary endpoints included [[MRD]], the most sensitive measure of leftover leukemia, how long remissions lasted, [[event-free survival]] and overall survival.</p>
      <p>ELIANA opened in April 2015 and enrolled patients at 25 centers in 11 countries across North America, Europe, Asia and Australia. Cells from every site were shipped to Novartis for manufacturing, which made the trial a test of the supply chain as much as the drug.</p>`},

    {type: 'trial', title: 'ELIANA: the pivotal trial', intro: 'Read the design, then predict the result.',
      design: {name: 'ELIANA (CCTL019B2202)', phase: 'Phase 2', blinding: 'Open-label, single arm', years: '2015–2017 (primary analysis)', n: 75,
        population: 'Children and young adults with relapsed or refractory CD19-positive B-cell ALL', randomization: null,
        arms: [{name: 'Tisagenlecleucel', n: 75, desc: 'Lymphodepleting chemo, then one infusion'}],
        endpoint: 'Remission (CR or CRi) within 3 months',
        details: {
          'Enrolled vs infused': '92 enrolled; 75 infused and evaluated. Seven could not receive product because it could not be manufactured; ten others were not infused for other reasons, such as dying or becoming too ill while waiting.',
          'Sites': '25 centers in 11 countries; central manufacturing',
          'Primary endpoint': 'Overall remission rate ([[complete remission]] or [[CRi]]) within 3 months; tested against a 20% bar',
          'Key secondary': '[[MRD]]-negative remission, duration of remission, [[event-free survival]], overall survival, safety',
        }},
      predict: {q: 'For children whose leukemia had relapsed at least twice or never responded, the trial only needed to beat 20%. What share of the 75 infused patients do you think were in remission within three months?',
        options: ['About 25%: a modest but real improvement on salvage chemotherapy', 'About 45%', 'About 80%', 'Nearly everyone, with almost no relapses afterwards'], answer: 2,
        explain: '81% (61 of 75) were in remission within three months: 60% in complete remission and 21% in CRi. Every responder was MRD-negative. But remission is not the end of the story: event-free survival was 73% at six months and 50% at twelve, so about half the patients had relapsed or had another event within a year.'},
      results: [
        {kind: 'bar', title: 'Best response within 3 months (75 infused patients)', unit: '%', categories: ['Complete remission', 'CR, incomplete count recovery', 'No remission'], series: [{name: 'Share of infused patients', values: [60, 21, 19], notes: ['45 of 75', '16 of 75', 'Includes non-responders and patients who could not be assessed']}], colorByCategory: true, yMax: 100, note: 'Maude et al., NEJM 2018. The "no remission" bar is the remainder, 100 minus 81.'},
        {kind: 'line', title: 'How durable? Event-free and overall survival', subtitle: 'Landmark estimates joined by straight lines: 6 and 12 months from the 75-patient primary analysis; 36 months from the 3-year update of 79 patients. Not digitized curves.', unit: '%', yMax: 100, xLabel: 'Months after infusion', xTicks: [0, 6, 12, 24, 36],
          series: [{name: 'Overall survival', short: 'Alive', points: [[0, 100], [6, 90], [12, 76], [36, 63]]}, {name: 'Event-free survival', short: 'Event-free', points: [[0, 100], [6, 73], [12, 50], [36, 44]], color: 2}],
          note: 'Sources: Maude et al., NEJM 2018; Laetsch et al., JCO 2023 (median follow-up 38.8 months; median event-free survival 24 months).'},
      ],
      takeaway: 'A single infusion put four in five heavily pretreated children and young adults into deep remission, against a bar of one in five. The durability was lower than the headline: roughly half had an event within a year, but most events happened within the first two years, and those still in remission at that point mostly stayed there.'},

    {type: 'custom', title: 'Which denominator?', intro: 'Every patient in ELIANA is a dot. The same results give different headline numbers depending on who you count. Switch the denominator.',
      html: `<div class="card"><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px" id="dn-btns"><button class="btn" data-k="inf">Count infused patients (75)</button><button class="btn" data-k="enr">Count everyone enrolled (92)</button></div>
        <div id="dn-svg"></div><div id="dn-out" style="font:400 16.5px/1.6 var(--serif);margin-top:8px"></div></div>`,
      init(root) {
        const groups = [['rem', 61, 'il-1', 'In remission within 3 months'], ['non', 14, 'il-1s', 'Infused, no remission'], ['mfg', 7, 'il-2', 'Never infused: product could not be made'], ['oth', 10, 'il-8', 'Never infused: other reasons']];
        const draw = k => {
          let s = `<svg viewBox="0 0 860 280" role="img" aria-label="ELIANA patients as dots">`, i = 0;
          groups.forEach(([g, n, c]) => { for (let j = 0; j < n; j++, i++) { const col = i % 23, row = Math.floor(i / 23); const dim = k === 'inf' && (g === 'mfg' || g === 'oth'); s += `<circle cx="${30 + col * 36}" cy="${30 + row * 36}" r="13" class="${c} ${c === 'il-1s' ? 'st-1' : ''}" stroke-width="1.5" opacity="${dim ? 0.18 : 1}"/>`; } });
          groups.forEach(([g, n, c, lab], gi) => { const lx = 20 + (gi % 2) * 430, ly = 192 + Math.floor(gi / 2) * 26; s += `<circle cx="${lx + 8}" cy="${ly}" r="8" class="${c} ${c === 'il-1s' ? 'st-1' : ''}"/><text x="${lx + 22}" y="${ly + 5}" class="il-text">${lab} (${n})</text>`; });
          const den = k === 'inf' ? 75 : 92, pct = Math.round(61 / den * 100);
          s += `<text x="20" y="268" class="il-title">61 remissions ÷ ${den} = ${pct}%</text></svg>`;
          root.querySelector('#dn-svg').innerHTML = s;
          root.querySelector('#dn-out').innerHTML = k === 'inf' ? '<b>81%</b> is the headline number in the paper, and it is the right number for a doctor asking "if my patient receives the cells, what are the odds?"' : '<b>66%</b> is closer to the question a family faces on the day they sign up: "if we start this journey, what are the odds?" The difference is the patients the supply chain and the disease got to first. The FDA\'s own label cohort tells the same story: 52 of 63 evaluable patients (83%) went into remission, but 88 were enrolled, and 9% of those never got a product because of manufacturing failure.';
          root.querySelectorAll('#dn-btns button').forEach(b => b.classList.toggle('primary', b.dataset.k === k));
        };
        root.querySelector('#dn-btns').onclick = e => { const b = e.target.closest('button'); if (b) draw(b.dataset.k); };
        draw('inf');
      }},

    {type: 'callout', variant: 'product', heading: 'Funnel metrics and the denominator you choose',
      html: `<p>Product teams know this trap: a conversion rate of "81% of users who completed onboarding" and "66% of users who signed up" can describe the same product, and which one you put on the dashboard changes decisions. Clinical trials have the same choice: analyze everyone who was enrolled ("intention to treat") or only those who received the treatment. For a pill, the two are nearly identical because almost everyone who enrolls gets a dose. For a manufactured-to-order therapy, the gap is the product's operational performance, and it belongs in the pitch.</p>
      <p>Where the analogy breaks: a user who drops out of your funnel can come back tomorrow. In ELIANA, the gap was made of young patients whose cells could not be made, or who became too sick, or died, before they could be treated.</p>`},

    {type: 'story', kicker: 'The regulators', title: 'Ten votes to none', tocTitle: 'The FDA',
      html: `<p>Novartis asked the FDA to approve CTL019 through a biologics license application ([[BLA]]). On July 12, 2017, the FDA's Oncologic Drugs Advisory Committee, the panel of outside experts the agency convenes on hard or novel cases, met to discuss it.</p>
      <p>Nobody on the panel seriously doubted that the treatment worked. The debate was about everything else. Could Novartis make a product in New Jersey that behaved like the cells Penn had made in Philadelphia, batch after batch, for patients all over the country? What was the long-term risk of a lentivirus inserting genes into T cells: could an insertion ever turn a T cell cancerous? Why did some patients develop neurological toxicity, and how should hospitals spot and manage it? And how would families living far from the first 30 to 35 certified treatment centers cope with weeks of travel and monitoring?</p>
      <p>In the afternoon's open public hearing, Tom Whitehead spoke for his daughter, who was in the room, now 12 and five years in remission. Then the committee voted 10 to 0 in favor.</p>
      <h3>Approval, with guardrails</h3>
      <p>On August 30, 2017, well before its October deadline, the FDA approved Kymriah for patients up to 25 years old with B-cell precursor ALL that was refractory or in second or later relapse. The FDA described it as the first gene therapy available in the United States. It was a full approval, not an [[accelerated approval]], based on the rate and depth of remission.</p>
      <p>The FDA's analysis of 63 evaluable patients found 83% in remission within three months (the agency counted complete remission alone at 63%), all MRD-negative. It reported CRS in 79% and neurological events in 65%, and concluded that with safeguards, the benefit-risk balance was acceptable "for this patient population with such resistant ALL".</p>
      <p>The guardrails were substantial:</p>
      <ul>
      <li><strong>A boxed warning</strong>, the FDA's strongest label warning, for cytokine release syndrome and neurological toxicities.</li>
      <li><strong>A [[REMS]]</strong>: Kymriah could only be given at hospitals certified by Novartis, whose staff were trained to recognize and manage CRS and neurotoxicity and which had tocilizumab on site.</li>
      <li><strong>Fifteen years of follow-up</strong> for every patient, to watch for late effects such as new cancers.</li>
      </ul>
      <p>The same day, the FDA approved tocilizumab to treat CAR-T-induced cytokine release syndrome, the formal end of the story that began at Emily's bedside.</p>
      <p>Adult indications followed: [[diffuse large B-cell lymphoma]] in May 2018, based on the JULIET trial (93 infused adults, 52% responding, 40% with complete responses), and relapsed or refractory follicular lymphoma under accelerated approval in May 2022.</p>`},

    {type: 'story', kicker: 'Safety', title: 'The long tail of a living drug', tocTitle: 'Safety',
      html: `<p>A pill leaves the body in hours or days. Kymriah is designed to stay, which means its risks unfold on three timescales.</p>
      <p><strong>Days: the acute storm.</strong> In ELIANA, [[cytokine release syndrome]] occurred in 77% of patients and was grade 3 or 4 in 46%; 47% of patients were admitted to intensive care at some point, and about half of those with CRS received tocilizumab. Neurological events occurred in 40% within eight weeks. The label, which counts more broadly in a 79-patient set, reports neurological toxicities in 71% of ALL patients, grade 3 or worse in 22%, usually starting around day 6 and lasting about a week. These events, now called [[ICANS]], include confusion, difficulty speaking, tremor and seizures. Most resolve, but they are frightening, and some are severe or life-threatening.</p>
      <p><strong>Months to years: the missing B cells.</strong> Because the CAR-T cells hunt CD19, patients who respond lose their healthy B cells for as long as the CAR-T cells persist. In the label's ALL data, 88% of patients still in response at two years had no detectable B cells. That raises the risk of infections; many patients receive [[IVIG]]. Doctors watch the return of B cells as a warning sign that the CAR-T cells may have faded.</p>
      <p><strong>Years: the insertion question.</strong> Lentiviral vectors insert genes more or less at random into the genome. In theory an insertion could disrupt a gene that restrains cell growth. This is why regulators demanded 15 years of follow-up. On November 28, 2023, the FDA announced it was investigating reports of T-cell cancers, including some that carried the CAR itself, in patients treated with all six approved BCMA- and CD19-directed CAR-Ts. One analysis described 22 such cases under review. In January 2024 the agency began class-wide label changes, and in April 2024 it required a boxed warning on all six products: T-cell malignancies "may present as soon as weeks following infusion, and may include fatal outcomes." Patients now need lifelong monitoring. The FDA also said the overall benefits continue to outweigh the risks for the approved uses, and how many of these cancers are caused by the CAR insertion, as opposed to prior chemotherapy or pre-existing mutations, is still being worked out.</p>
      <p>At the same time, a decade of experience made the acute toxicities more manageable. On June 26, 2025, the FDA eliminated the REMS for all six autologous CAR-Ts, saying the goal was to improve access, particularly for patients in rural areas. Hospitals no longer need special certification. The label still requires tocilizumab to be available, daily monitoring for the first week, staying near a healthcare facility for at least two weeks, and no driving for two weeks.</p>`},

    {type: 'callout', variant: 'misconception', label: 'Common misconception', heading: '"Remission" is not the same as "cure"',
      html: `<p>Headlines in 2017 often described Kymriah as a cure. The honest statement is narrower. In ELIANA, 81% of infused patients went into remission, but event-free survival was 50% at one year and 44% at three years. A remission means no detectable leukemia now. Some patients relapsed with CD19-negative leukemia that the CAR-T cells could not see; others relapsed after the CAR-T cells faded. Some went on to a stem cell transplant. For the roughly four in ten still event-free after three years, most of whom stayed that way, "cure" may be the right word; Emily Whitehead's doctors use it. For the others, Kymriah bought time, which is not nothing, but is not the same thing.</p>`},

    {type: 'story', kicker: 'The money', title: '$475,000, payable if it works', tocTitle: 'The price',
      html: `<p>Novartis announced Kymriah's price the day it was approved: $475,000 for a single infusion, a US [[list price]] in 2017 dollars. It was among the highest prices ever set for a drug, and it did not include the hospital's costs for collection, chemotherapy, intensive care if needed, and weeks of monitoring.</p>
      <p>The case for the price rested on three points. The treatment is given once, rather than every month for years. It replaced, for many patients, a stem cell transplant, itself a very expensive procedure with long hospital stays. And it worked in children who would otherwise very likely die, so the years of life gained were large. Critics answered that a price should reflect more than the cost of what it replaces, and that the science had been built with public and philanthropic money at Penn, St. Jude, the NCI and elsewhere. A STAT commentary at the time captured the uncertainty: without better long-term data, it was difficult to say whether the price was "too high by fivefold or too low by half."</p>
      <h3>An outcomes-based contract</h3>
      <p>Novartis paired the price with a pledge: in collaboration with the US Centers for Medicare &amp; Medicaid Services ([[CMS]]), it would be paid only if a patient responded by the end of the first month. If the leukemia was not in remission at the one-month assessment, the hospital would not be charged. This was an [[outcomes-based contract]], and it made headlines as a first.</p>
      <p>It was a smart piece of positioning, and it is worth looking at closely. In the FDA's cohort, the median time to remission was 29 days, and almost every responder, 50 of 52, achieved remission between days 26 and 31. So the one-month checkpoint captured nearly all responses. The guarantee therefore refunded the 15 to 20% of patients who never responded, but not those who responded and relapsed in the following months, who were a larger group. The STAT authors noted that about a quarter of initial responders had progressed by six months.</p>
      <p>In practice, the arrangement was narrower than the headlines. It was offered through contracts with certified treatment centers, covered only the ALL indication, and saw limited uptake among private insurers, who mostly negotiated single-case agreements. In July 2018 CMS walked away from a separate plan to test indication-based payment for Kymriah, saying only that it had decided to "go in a different direction". Hospitals, meanwhile, warned that Medicare's fixed inpatient payments could leave them losing money on a $475,000 product.</p>`},

    {type: 'explorer', title: 'Who carries the risk? A contract explorer', intro: 'Compare three ways of paying for 100 infused patients. Contract A charges for every infusion. Contract B is Kymriah\'s: pay only if the patient is in remission at one month. Contract C is a stricter hypothetical: pay only if the patient is still in remission at one year. Defaults follow ELIANA: 81% remission, and 59% of responders still relapse-free at one year.',
      inputs: [
        {id: 'price', label: 'List price per infusion', min: 250, max: 800, step: 25, value: 475, fmt: v => '$' + v + 'k'},
        {id: 'resp', label: 'In remission at 1 month', min: 40, max: 95, step: 1, value: 81, fmt: v => v + '%'},
        {id: 'dur', label: 'Responders still in remission at 1 year', min: 20, max: 95, step: 1, value: 59, fmt: v => v + '%'},
      ],
      compute: (v, api) => {
        const N = 100, P = v.price / 1000, resp = v.resp / 100, dur = v.dur / 100;
        const durable = N * resp * dur;
        const rows = [
          ['A. Pay for every infusion', N * P, 'The payer carries all the risk of non-response.'],
          ['B. Pay if in remission at 1 month', N * resp * P, 'Refunds non-responders only. Relapses after month one are still paid for.'],
          ['C. Pay if in remission at 1 year', durable * P, 'The manufacturer carries the relapse risk.'],
        ];
        const max = N * P;
        const bar = (x) => `<div style="height:14px;border-radius:4px;background:var(--il-6);width:${Math.max(1, 100 * x / max)}%"></div>`;
        const breakEven = (N * P) / Math.max(1, durable);
        return `<div style="display:grid;gap:12px">${rows.map(([n, t, note]) => `<div><div style="display:flex;justify-content:space-between;gap:10px;font:600 15px var(--sans)"><span>${n}</span><span>$${api.fmt(t, 1)}M total · $${api.fmt(t / Math.max(1, durable) * 1000, 0)}k per durable remission</span></div>${bar(t)}<div style="font-size:14px;color:var(--ink-3)">${note}</div></div>`).join('')}</div>
          <p style="margin-top:12px">About <b>${api.fmt(durable, 0)}</b> of 100 patients are still in remission at one year. Under contract B the payer pays for <b>${api.fmt(N * resp, 0)}</b> infusions; the gap between B and A is only the non-responders. To earn the same revenue under contract C as under A, the manufacturer would have to charge about <b>$${api.fmt(breakEven * 1000, 0)}k</b> per paid patient, which is why outcome guarantees and list prices are negotiated together.</p>
          <p class="caption">Toy model. Ignores hospital costs, manufacturing failures, discounts and rebates, patients who proceed to transplant, and the time value of money. Real contracts varied and most terms were confidential.</p>`;
      }},

    {type: 'decision', title: 'Setting the price', role: 'You lead Novartis\'s US pricing for Kymriah, August 2017',
      scenario: `You are launching the first CAR-T therapy. The US market is a few hundred children and young adults a year; adult lymphoma, a much bigger market, is months away and will face a rival. Politicians are attacking drug prices. Your health-economics team says the treatment could justify a very high price given the years of life gained. Kite's competing product is expected within weeks. What is your launch strategy?`,
      options: [
        {label: 'Price high, around the value your economists estimate, to recoup R&D on a tiny population. Charge for every infusion.', outcome: 'Defensible on value arithmetic, and the ALL population is small enough that the total budget impact is modest. But it makes you the face of drug pricing on the day of a historic approval, invites comparison with the public money behind Penn\'s work, and sets a high anchor that payers will resist when you seek the much larger lymphoma indication.'},
        {label: 'Set a high but not maximal price, and pair it with a pledge that payers owe nothing if the patient is not in remission at one month.', outcome: 'You get a headline about value rather than cost, and the guarantee costs little because nearly all responses occur by about day 28. Payers still pay full price for patients who relapse later. The contracts are administratively complex, and you depend on CMS and insurers to make the scheme real.'},
        {label: 'Price well below value, near the cost of a transplant, to maximize access and goodwill.', outcome: 'Access and reputation improve, and payers have little reason to delay coverage. But you leave money on the table in a tiny market with enormous manufacturing costs, set a low anchor for every future cell therapy, including your own, and hand your competitor a price umbrella to undercut or match.'},
      ],
      reality: `Novartis chose $475,000 with an outcomes-based pledge tied to response at one month, developed with CMS. Two months later, Kite priced Yescarta at $373,000 for adult lymphoma and said it would not adopt a similar outcomes-based model. In 2018 CMS dropped a separate indication-based pricing pilot with Novartis, and uptake of outcomes-based contracts among private insurers was limited. The headline price held; the pricing innovation had less effect than the press coverage suggested.`},

    {type: 'chart', title: 'First to market, second in sales', intro: 'Company-reported worldwide net sales, in millions of US dollars.',
      chart: {kind: 'line', title: 'Kymriah vs Yescarta, annual net sales (US$ millions)', unit: '',
        series: [
          {name: 'Kymriah (Novartis)', short: 'Kymriah', points: [[2018, 76], [2019, 278], [2020, 474], [2021, 587], [2022, 536], [2023, 508], [2024, 443], [2025, 381]]},
          {name: 'Yescarta (Gilead/Kite)', short: 'Yescarta', points: [[2018, 264], [2019, 456], [2020, 563], [2021, 695], [2022, 1160], [2023, 1498], [2024, 1570], [2025, 1495]], color: 2},
        ],
        annotations: [{x: 2022.3, label: 'Yescarta wins 2nd-line lymphoma (Apr 2022)'}],
        xTicks: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        note: 'Sources: Novartis quarterly and annual financial reports (2019, 2020, 2022, 2024, 2025); Gilead earnings releases filed with the SEC. Yescarta sums US, Europe and rest-of-world lines.'},
      takeaway: 'Kymriah peaked at $587 million in 2021 and by 2025 Novartis was reporting it among its "established brands", with sales down to $381 million, "mainly due to competitive pressure in DLBCL". Yescarta, approved seven weeks later, passed $1.5 billion.'},

    {type: 'story', kicker: 'What came next', title: 'Why the pioneer fell behind', tocTitle: 'Competition',
      html: `<p>On August 28, 2017, two days before Kymriah's approval, Gilead Sciences agreed to buy Kite Pharma for $180 a share in cash, about $11.9 billion. Kite's lead product, axicabtagene ciloleucel, used a CD19 CAR with a [[CD28]] costimulatory domain, a design lineage that ran through the National Cancer Institute. On October 18, 2017, the FDA approved it as Yescarta for adults with large B-cell lymphoma after two or more lines of therapy. In its pivotal trial, ZUMA-1, the product was successfully manufactured for 110 of 111 enrolled patients (99%) and 82% of the 101 treated patients responded.</p>
      <p>Kymriah had won the race to be first. It lost the race that mattered commercially, for several reasons that compound.</p>
      <p><strong>The first indication was small.</strong> Relapsed and refractory childhood ALL is a devastating disease but, mercifully, an uncommon one. Adult lymphoma is where the patients are, and Kite got there first, more than six months before Kymriah's lymphoma approval.</p>
      <p><strong>The lymphoma data looked different.</strong> Cross-trial comparisons are treacherous, because the trials enrolled different patients and measured things differently. But doctors do compare: JULIET reported a 52% response rate in 93 infused patients, ZUMA-1 82% in 101.</p>
      <p><strong>Second-line lymphoma went to the rival.</strong> The big prize was moving CAR-T earlier, to patients whose lymphoma had failed only one treatment. Both companies ran randomized trials against the standard of care, salvage chemotherapy and a stem cell transplant. Kite's ZUMA-7, in 359 patients, beat standard care, and Yescarta was approved for second-line use in April 2022. Novartis's BELINDA, in 322 patients, did not. In BELINDA, the median time from leukapheresis to infusion was 52 days, and a quarter of patients in the CAR-T arm already had progressing lymphoma by week 6. The trial designs differed in several ways, so no single cause can be proven, but a seven-week wait in aggressive lymphoma is an obvious suspect.</p>
      <p><strong>The factory became a liability as well as an asset.</strong> Every manufacturing failure or out-of-specification batch is a patient who waits longer or goes untreated, and doctors with desperately sick patients notice. The 2023 FDA warning letter about particles and mold at Morris Plains did not help.</p>
      <p>Kymriah still matters most where it started. In late 2024 Novartis reported strong performance in US pediatric ALL even as overall Kymriah sales fell, and it is the only CAR-T approved specifically for children with ALL. But even there, the off-the-shelf bispecific antibody [[blinatumomab]], which also targets CD19, has moved into frontline treatment for many children, changing who reaches the point of needing CAR-T at all.</p>
      <h3>Where the field is going</h3>
      <p>By 2025, the FDA had approved seven CAR-T therapies, all [[autologous]]. The next frontier has three parts. <strong>Earlier use</strong>, when patients' T cells are healthier and the disease smaller, which also lowers toxicity. <strong>[[allogeneic|Allogeneic]], "off-the-shelf" CAR-T</strong>, made in advance from healthy donors' cells and edited so they neither attack the patient nor get rejected; many companies are trying, but as of the FDA's current list none has been approved. And <strong>new diseases</strong>: in 2022, German doctors reported that CD19 CAR-T cells, manufactured with a lentiviral vector much like Kymriah's, put five patients with severe lupus into drug-free remission by resetting their B-cell compartment, opening a whole new field in autoimmune disease.</p>`},

    {type: 'table', title: 'The approved CAR-T therapies', intro: 'Every CAR-T therapy on the FDA\'s approved list, all made from the patient\'s own cells.',
      columns: ['Product', 'Company', 'Target', 'Costimulatory domain', 'First US approval', 'First indication'],
      rows: [
        ['<b>Kymriah</b> (tisagenlecleucel)', 'Novartis', '[[CD19]]', '[[4-1BB]]', 'Aug 30, 2017', 'Relapsed/refractory B-cell ALL, patients up to 25'],
        ['<b>Yescarta</b> (axicabtagene ciloleucel)', 'Kite (Gilead)', 'CD19', '[[CD28]]', 'Oct 18, 2017', 'Large B-cell lymphoma after 2 or more lines'],
        ['<b>Tecartus</b> (brexucabtagene autoleucel)', 'Kite (Gilead)', 'CD19', 'CD28', 'Jul 24, 2020', 'Relapsed/refractory mantle cell lymphoma'],
        ['<b>Breyanzi</b> (lisocabtagene maraleucel)', 'Juno (Bristol Myers Squibb)', 'CD19', '4-1BB', 'Feb 5, 2021', 'Relapsed/refractory large B-cell lymphoma'],
        ['<b>Abecma</b> (idecabtagene vicleucel)', 'Celgene (Bristol Myers Squibb)', '[[BCMA]]', '4-1BB', 'Mar 26, 2021', 'Relapsed/refractory [[multiple myeloma]]'],
        ['<b>Carvykti</b> (ciltacabtagene autoleucel)', 'Janssen (Johnson &amp; Johnson), with Legend', 'BCMA', '4-1BB', 'Feb 28, 2022', 'Relapsed/refractory multiple myeloma after 4 or more lines'],
        ['<b>Aucatzyl</b> (obecabtagene autoleucel)', 'Autolus', 'CD19', '4-1BB', 'Nov 8, 2024', 'Relapsed/refractory B-cell ALL in adults'],
      ],
      caption: 'Sources: FDA list of approved cellular and gene therapy products; FDA approval summaries; Kite press release (2017); approval dates and domains as compiled on Wikipedia\'s CAR T cell page. No allogeneic CAR-T appears on the FDA list. The class-wide boxed warning for T-cell malignancies (2024) covers the first six.'},

    {type: 'callout', variant: 'product', heading: 'First mover, wrong segment',
      html: `<p>Kymriah is a textbook case of first-mover advantage failing to compound. Novartis launched first, in a small, high-need segment where it could prove the technology. Its rival launched seven weeks later into the larger adult segment, then won the expansion into the next segment up (second-line lymphoma) with a better-designed or luckier trial. Network effects, the thing that usually makes being first valuable in software, barely exist here: doctors choose product by product and patient by patient.</p>
      <p>Where the analogy breaks: in software, entering a new segment is a go-to-market decision. In drugs, every segment is a separate regulatory approval, usually requiring a multi-year randomized trial that you can lose. Novartis could not simply "ship to" second-line lymphoma; it had to win BELINDA, and it did not.</p>`},

    {type: 'callout', variant: 'lesson', heading: 'The process is the product',
      html: `<p>For most drugs, the molecule is the product and manufacturing is a cost. For autologous cell therapy, manufacturing is the product: its speed decides how many patients live to be treated, its failure rate decides the real-world response rate, and its consistency is what regulators actually approve. Kymriah's science was first-rate. Its commercial story was decided largely in the factory and the clinic calendar.</p>`},

    {type: 'quiz', title: 'Check yourself', questions: [
      {q: 'Why was CD19 a good target for the first CAR-T therapy?', options: ['It is found only on cancer cells, so there are no side effects', 'It is on B cells and most B-ALL blasts but not on the stem cells, red cells or T cells, and losing B cells is survivable with antibody replacement', 'It is the protein that causes leukemia cells to divide', 'It is displayed by the natural T-cell receptor system, which CARs depend on'], answer: 1, explain: 'CD19 is not cancer-specific: healthy B cells carry it too, and they are destroyed (B-cell aplasia). It works as a target because that collateral damage is survivable with IVIG, and the blood-forming stem cells are spared. CARs bind CD19 directly, without the display system.'},
      {q: 'What did adding a 4-1BB or CD28 domain fix in first-generation CARs?', options: ['The CAR could not recognize its target', 'The T cells fired but did not multiply and persist in patients, because they lacked the second (costimulatory) signal', 'The CAR caused too much cytokine release', 'The lentiviral vector could not insert the gene'], answer: 1, explain: 'First-generation CARs delivered only signal 1 (CD3ζ). T cells need costimulation to expand and survive. Penn\'s 4-1BB CAR expanded more than 1,000-fold in patients.'},
      {q: 'Emily Whitehead\'s team measured a sky-high IL-6 level. Why was the decision to give tocilizumab risky?', options: ['Tocilizumab had never been given to children', 'It was unknown whether blocking IL-6 would also blunt the CAR-T cells\' attack on the leukemia', 'Tocilizumab is a chemotherapy drug that kills T cells', 'It had to be manufactured specially for her'], answer: 1, explain: 'It was approved (including for juvenile arthritis), but never used for CRS. The worry was that calming the storm might also stop the treatment. It turned out not to prevent CAR-T expansion or anti-leukemia activity.'},
      {q: 'ELIANA had no control group. Why did the FDA accept a single-arm trial for approval?', options: ['Single-arm trials are standard for all cancer drugs', 'The patients had no effective standard therapy, spontaneous remissions essentially do not happen, and the remission rate was far above a pre-set 20% bar', 'Novartis had already run a randomized trial in adults', 'The FDA only requires safety data for gene therapies'], answer: 1, explain: 'When the natural history is uniformly grim and the effect is large, objective and deep (MRD-negative remissions), a single-arm trial can be convincing. The same logic does not work for modest effects in diseases with variable courses.'},
      {q: 'ELIANA reported 81% remission among 75 infused patients, but 92 were enrolled. What is the main reason the gap matters more for Kymriah than for a pill?', options: ['Patients in cell-therapy trials are older', 'Some enrolled patients never get treated because their product cannot be made or they become too sick while waiting, so operational performance becomes part of efficacy', 'The FDA counts only enrolled patients', 'Pills are always tested in larger trials'], answer: 1, explain: 'With a pill, nearly everyone enrolled gets a dose. With a made-to-order product, manufacturing failures and waiting-time drop-outs sit between enrollment and treatment. 61 of 92 is 66%.'},
      {q: 'Under Kymriah\'s outcomes-based pledge, payment was owed only if the patient responded by the end of the first month. Why did this guarantee cost Novartis relatively little?', options: ['Almost no patients responded', 'Nearly all responses occur around day 28, so the pledge refunded only never-responders, not the larger group who relapsed later', 'CMS paid the refunds', 'The pledge applied only to adults'], answer: 1, explain: 'Median time to remission was 29 days, with 50 of 52 responders reaching it between days 26 and 31. The one-month checkpoint captured nearly all responses; later relapses were still paid for. An outcome guarantee is only as meaningful as its metric and time point.'},
      {q: 'Which factor did NOT help Yescarta outsell Kymriah?', options: ['Yescarta reached the larger adult lymphoma market first', 'Yescarta\'s randomized second-line trial (ZUMA-7) succeeded while Kymriah\'s (BELINDA) failed', 'Yescarta was the first CAR-T approved by the FDA', 'Doctors compared the lymphoma trial results, however imperfectly'], answer: 2, explain: 'Kymriah was first, by seven weeks. Being first mattered less than market size, the second-line win and clinical perception.'},
      {q: 'Why does the FDA require 15 years of follow-up and, since 2024, a boxed warning about T-cell cancers?', options: ['Because CAR-T cells are made from donor cells', 'Because the lentiviral vector inserts the CAR gene permanently into the T cells\' DNA, and cases of T-cell malignancy, some carrying the CAR, have been reported across the class', 'Because tocilizumab causes cancer', 'Because patients lose their B cells'], answer: 1, explain: 'Permanent insertion carries a theoretical risk of disrupting a growth-control gene (insertional mutagenesis). The FDA investigated 2023 reports across all six BCMA- and CD19-directed products, added a class boxed warning in April 2024, and still judged benefits to outweigh risks.'},
      {q: 'Novartis bought Dendreon\'s Morris Plains plant in 2012. In hindsight, what was the biggest strategic trade-off of centralizing manufacturing there?', options: ['It was too expensive to buy', 'It gave control and a head start but concentrated risk: capacity, speed and quality problems at one site affected every patient and the brand', 'Regulators do not allow central manufacturing', 'It meant Penn could no longer do research'], answer: 1, explain: 'Owning the process was an advantage early. Later, vein-to-vein time, failure rates and a 2023 FDA warning letter about the site became part of why Kymriah lost ground.'},
    ]},

    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'In cell therapy, the process is the product', text: 'Kymriah\'s biology was decided in Penn\'s lab; its commercial fate was decided in the factory, the courier network and the clinic calendar. Vein-to-vein time and manufacturing success rates are efficacy metrics in disguise.', links: ['zolgensma', 'comirnaty']},
      {title: 'Measure broadly, and know the pharmacopeia', text: 'Emily Whitehead survived because the team was measuring many cytokines in real time and someone in the room knew an existing drug that blocked the one that spiked. TGN1412 shows what a cytokine storm looks like when nobody is prepared.', links: ['tgn1412', 'humira']},
      {title: 'A single-arm trial can be enough, if the effect is huge and objective', text: 'Remission rates of 81% against a 20% bar, in a disease without spontaneous remissions, convinced the FDA without a control group. The same shortcut fails when effects are modest or the endpoint is a surrogate of uncertain meaning.', links: ['gleevec', 'spinraza', 'aduhelm']},
      {title: 'First to market is not the same as winning the market', text: 'Kymriah launched first in a small indication; Yescarta launched weeks later into a bigger one and won the next expansion trial. Indications, not launch dates, define the market.', links: ['keytruda', 'sovaldi', 'ozempic']},
      {title: 'An outcome guarantee is only as honest as its metric', text: 'Paying only for responders at one month sounded radical but refunded few patients, because nearly all responses happen by then. Choose outcome measures, and time points, that capture the value you claim.', links: ['zolgensma', 'sovaldi']},
      {title: 'Permanent treatments have permanent safety questions', text: 'A drug designed to live in the body for years needs follow-up for decades. The T-cell cancer signal arrived in 2023, six years after approval, through trial follow-up and post-marketing reports, and led to a class-wide boxed warning.', links: ['vioxx', 'zolgensma']},
    ]},

    {type: 'sources', title: 'Sources', items: [
      {text: 'Maude SL, Laetsch TW, et al. Tisagenlecleucel in children and young adults with B-cell lymphoblastic leukemia (ELIANA). N Engl J Med 2018;378:439–448.', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1709866'},
      {text: 'Laetsch TW, et al. Three-year update of tisagenlecleucel in pediatric and young adult patients with R/R ALL in the ELIANA trial. J Clin Oncol 2023.', url: 'https://pubmed.ncbi.nlm.nih.gov/36399695/'},
      {text: 'O\'Leary MC, et al. FDA approval summary: tisagenlecleucel for relapsed or refractory B-cell precursor ALL. Clin Cancer Res 2019;25:1142–1146.', url: 'https://aacrjournals.org/clincancerres/article/25/4/1142/9858/FDA-Approval-Summary-Tisagenlecleucel-for'},
      {text: 'KYMRIAH (tisagenlecleucel) US prescribing information and Medication Guide, Novartis (revised 2025).', url: 'https://www.novartis.com/us-en/sites/novartis_us/files/kymriah.pdf'},
      {text: 'Novartis. Novartis receives first ever FDA approval for a CAR-T cell therapy, Kymriah (press release, Aug 30, 2017); and FDA, FDA approves tisagenlecleucel for B-cell ALL and tocilizumab for cytokine release syndrome (2017).', url: 'https://www.novartis.com/news/media-releases/novartis-receives-first-ever-fda-approval-car-t-cell-therapy-kymriahtm-ctl019-children-and-young-adults-b-cell-all-refractory-or-has-relapsed-least-twice'},
      {text: 'Grupp SA, Kalos M, et al. Chimeric antigen receptor-modified T cells for acute lymphoid leukemia. N Engl J Med 2013;368:1509–1518; and Maude SL, Frey N, et al. Chimeric antigen receptor T cells for sustained remissions in leukemia. N Engl J Med 2014;371:1507–1517.', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1407222'},
      {text: 'Porter DL, Levine BL, Kalos M, Bagg A, June CH. Chimeric antigen receptor-modified T cells in chronic lymphoid leukemia. N Engl J Med 2011;365:725–733; and Kalos M, et al. Sci Transl Med 2011;3:95ra73.', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1103849'},
      {text: 'Melenhorst JJ, et al. Decade-long leukaemia remissions with persistence of CD4+ CAR T cells. Nature 2022.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9166916/'},
      {text: 'Milone MC, et al. Chimeric receptors containing CD137 signal transduction domains mediate enhanced survival of T cells and increased antileukemic efficacy in vivo. Mol Ther 2009;17:1453–1464.', url: 'https://doi.org/10.1038/mt.2009.83'},
      {text: 'CAR design history: Gross G, Waks T, Eshhar Z. PNAS 1989;86:10024 (T-bodies); Eshhar Z, et al. PNAS 1993;90:720–724; Maher J, Sadelain M, et al. Nat Biotechnol 2002; Brentjens RJ, et al. Nat Med 2003; Imai C, Campana D, et al. Leukemia 2004;18:676–684; Kochenderfer JN, et al. Blood 2010.', url: 'https://www.pnas.org/doi/10.1073/pnas.86.24.10024'},
      {text: 'Children’s Hospital of Philadelphia. Emily Whitehead, first pediatric patient to receive CAR T-cell therapy, celebrates cure 10 years later (May 2022); and The ASCO Post, Against all odds (Jan 25, 2018).', url: 'https://www.chop.edu/news/emily-whitehead-first-pediatric-patient-receive-car-t-cell-therapy-celebrates-cure-10-years'},
      {text: 'Penn Today. Honoring a life scientist\'s life-saving science (Carl June, Breakthrough Prize); and The Daily Pennsylvanian, March 2024 (June on his daughter and tocilizumab).', url: 'https://penntoday.upenn.edu/news/honoring-life-scientists-life-saving-science-carl-june-breakthrough-prize'},
      {text: 'Novartis and University of Pennsylvania form broad-based R&D alliance (press release, Aug 6, 2012); Penn Almanac on the Center for Advanced Cellular Therapeutics.', url: 'https://www.globenewswire.com/news-release/2012/08/06/1834567/0/en/Novartis-and-University-of-Pennsylvania-form-broad-based-R-D-alliance-to-advance-novel-T-cell-immunotherapies-to-treat-cancer.html'},
      {text: 'Contract Pharma. Novartis buys Dendreon manufacturing facility (Dec 20, 2012); Dendreon 10-K for FY2012.', url: 'https://www.contractpharma.com/contents/view_breaking-news/2012-12-20/novartis-buys-dendreon-manufacturing-facility/'},
      {text: 'Jones Day. St. Jude and Juno secure $12.25 million settlement resolving patent dispute with Novartis and Penn (April 2015).', url: 'https://www.jonesday.com/en/practices/experience/2015/04/st-jude-and-juno-secure-1225-million-settlement-resolving-patent-dispute-with-novartis-pharmaceuticals-and-university-of-pennsylvania'},
      {text: 'RAPS. FDA panel votes unanimously in favor of first CAR-T cancer therapy (July 2017); Nature Trade Secrets blog, First approval in sight for Novartis’ CAR-T therapy after expert panel vote (July 15, 2017: vote, manufacturing failure rates, 22-day turnaround, 30–35 centers); Emily Whitehead Foundation on the hearing.', url: 'https://www.raps.org/resource/fda-panel-votes-unanimously-in-favor-of-first-car.html'},
      {text: 'STAT. A $475,000 price tag for a new cancer drug: crazy or meh? (Aug 31, 2017); and NCI Cancer Currents, FDA approves second CAR T-cell therapy (Oct 2017: Yescarta $373,000, Kymriah $475,000, Kite declines outcomes-based model).', url: 'https://www.statnews.com/2017/08/31/475000-price-tag-new-cancer-drug-crazy-meh/'},
      {text: 'Pharmaceutical Technology. Outcome-based contracts viable for Kymriah, but US payers still unsure (2018).', url: 'https://www.pharmaceutical-technology.com/comment/outcome-based-contracts-kymriah/'},
      {text: 'Gilead Sciences to acquire Kite Pharma for $11.9 billion (Form 8-K exhibit, Aug 28, 2017); Kite press release on Yescarta approval (Oct 18, 2017).', url: 'https://www.sec.gov/Archives/edgar/data/0001510580/000119312517269386/d441582dex991.htm'},
      {text: 'Neelapu SS, et al. Axicabtagene ciloleucel CAR T-cell therapy in refractory large B-cell lymphoma (ZUMA-1). N Engl J Med 2017; and Schuster SJ, et al. Tisagenlecleucel in adult relapsed or refractory DLBCL (JULIET). N Engl J Med 2019.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5882485/'},
      {text: 'Bishop MR, et al. Second-line tisagenlecleucel or standard care in aggressive B-cell lymphoma (BELINDA). N Engl J Med 2022; and Sharma P, et al. FDA approval summary: axicabtagene ciloleucel for second-line LBCL (ZUMA-7). Clin Cancer Res 2023.', url: 'https://doi.org/10.1056/NEJMoa2116596'},
      {text: 'Novartis quarterly and annual condensed financial reports (Kymriah net sales 2018–2025): full-year reports for 2019, 2020, 2022 and 2024, and Q4/full year 2025 (Form 6-K, Feb 4, 2026: Kymriah $381M, "established brands").', url: 'https://www.novartis.com/sites/novartis_com/files/2025-01-interim-financial-report-en.pdf'},
      {text: 'Gilead Sciences earnings releases filed with the SEC, 2020–2026 (Yescarta sales by region), e.g. full year 2025.', url: 'https://www.sec.gov/Archives/edgar/data/882095/000088209526000003/exhibit991earningspressrel.htm'},
      {text: 'FDA. FDA investigating serious risk of T-cell malignancy following BCMA- or CD19-directed autologous CAR T cell immunotherapies (Nov 28, 2023) and boxed warning requirement (April 2024); Abou-El-Enein M, Blood Cancer Discov 2024 (22 cases under FDA review).', url: 'https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/fda-investigating-serious-risk-t-cell-malignancy-following-bcma-directed-or-cd19-directed-autologous'},
      {text: 'FDA. FDA eliminates Risk Evaluation and Mitigation Strategies (REMS) for autologous CAR T cell immunotherapies (June 26, 2025).', url: 'https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/fda-eliminates-risk-evaluation-and-mitigation-strategies-rems-autologous-chimeric-antigen-receptor'},
      {text: 'BioProcess International. Kymriah GMP issues in NJ led to FDA letter for Novartis (Dec 2023).', url: 'https://www.bioprocessintl.com/regulations/kymriah-gmp-issues-in-nj-led-to-fda-letter-for-novartis'},
      {text: 'Iwamoto F, et al. Optimizing the commercial manufacturing of tisagenlecleucel for patients in Japan: a 4-year experiential journey. Regen Ther 2025; and Kato K, et al. Out-of-specification tisagenlecleucel in a Japanese phase 3b trial. Cytotherapy 2025.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11891598/'},
      {text: 'National Cancer Institute. Childhood acute lymphoblastic leukemia treatment (PDQ), health professional version; Nguyen K, et al. Factors influencing survival after relapse from ALL: a Children\'s Oncology Group study. Leukemia 2008.', url: 'https://www.cancer.gov/types/leukemia/hp/child-all-treatment-pdq'},
      {text: 'FDA. Approved cellular and gene therapy products; Wikipedia, "CAR T cell" (approval dates and costimulatory domains).', url: 'https://www.fda.gov/vaccines-blood-biologics/cellular-gene-therapy-products/approved-cellular-and-gene-therapy-products'},
      {text: 'Mackensen A, et al. Anti-CD19 CAR T cell therapy for refractory systemic lupus erythematosus. Nat Med 2022; Li AM, Maude SL. With BiTEs at the kiddie table, where do CARs come in for pediatric B-ALL? ASH Education Program 2025.', url: 'https://pubmed.ncbi.nlm.nih.gov/36109639/'},
    ]},
  ],
});
// Spread the correct answers across positions (they are written with the answer in slot 1 or 2 for readability).
const quiz = window.CASES && window.CASES.kymriah && window.CASES.kymriah.sections.find(x => x.type === 'quiz');
if (quiz) {
  const target = [1, 0, 2, 3, 0, 3, 2, 3, 1];
  quiz.questions.forEach((q, i) => {
    const t = Math.min(target[i] ?? q.answer, q.options.length - 1);
    const right = q.options.splice(q.answer, 1)[0];
    q.options.splice(t, 0, right); q.answer = t;
  });
}
})();
