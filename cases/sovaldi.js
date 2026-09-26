// Sovaldi (sofosbuvir): Pharmasset, then Gilead. See GUIDE.md.
(function () {
  // ---------- shared drawing helpers (same visual vocabulary across the case) ----------
  // A molecule glyph: blue base (the drug core), yellow phosphates, magenta "disguise" pieces.
  const glyph = (x, y, stage) => {
    // stage: 'A' full prodrug, 'B' after ester cut, 'C' monophosphate, 'D' triphosphate
    let s = `<g transform="translate(${x} ${y})">`;
    s += `<rect x="-18" y="-16" width="34" height="32" rx="8" class="il-1"/><text x="-1" y="5" text-anchor="middle" class="il-white">U</text>`;
    s += `<line x1="16" y1="0" x2="26" y2="0" class="il-line2"/><circle cx="36" cy="0" r="11" class="il-4"/><text x="36" y="4.5" text-anchor="middle" class="il-small" style="fill:var(--il-ink);font-weight:700">P</text>`;
    if (stage === 'A' || stage === 'B') s += `<line x1="47" y1="0" x2="56" y2="0" class="il-line2"/><rect x="56" y="-9" width="26" height="18" rx="9" class="il-5"/>`;
    if (stage === 'A') s += `<line x1="36" y1="-11" x2="36" y2="-20" class="il-line2"/><circle cx="36" cy="-28" r="8" class="il-5"/><line x1="82" y1="0" x2="90" y2="0" class="il-line2"/><rect x="90" y="-7" width="18" height="14" rx="4" class="il-5s il-line"/>`;
    if (stage === 'D') s += `<line x1="47" y1="0" x2="52" y2="0" class="il-line2"/><circle cx="63" cy="0" r="11" class="il-4"/><text x="63" y="4.5" text-anchor="middle" class="il-small" style="fill:var(--il-ink);font-weight:700">P</text><line x1="74" y1="0" x2="79" y2="0" class="il-line2"/><circle cx="90" cy="0" r="11" class="il-4"/><text x="90" y="4.5" text-anchor="middle" class="il-small" style="fill:var(--il-ink);font-weight:700">P</text>`;
    return s + '</g>';
  };
  const wave = (x0, x1, y, amp = 6, per = 24) => { let d = `M${x0} ${y}`; for (let x = x0; x < x1; x += per) d += ` q ${per / 4} ${-amp} ${per / 2} 0 t ${per / 2} 0`; return d; };
  const virion = (cx, cy, r = 20) => { let s = `<g><circle cx="${cx}" cy="${cy}" r="${r}" class="il-2"/>`; for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4, x1 = cx + Math.cos(a) * r, y1 = cy + Math.sin(a) * r, x2 = cx + Math.cos(a) * (r + 7), y2 = cy + Math.sin(a) * (r + 7); s += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" class="st-2" stroke-width="3" stroke-linecap="round"/><circle cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="3" class="il-2"/>`; } s += `<path d="${wave(cx - r * 0.55, cx + r * 0.45, cy, 3, 10)}" class="il-none" stroke="var(--il-paper)" stroke-width="2"/></g>`; return s; };
  const beads = (x0, y, n, gap = 18, cls = 'il-4') => { let s = ''; for (let i = 0; i < n; i++) s += `<circle cx="${x0 + i * gap}" cy="${y}" r="7.5" class="${cls}"/>`; return s; };

  // ---------- mechanism SVG ----------
  const mechSvg = `<svg viewBox="0 0 760 440" class="sv-m"><style>.sv-m .il-small{font-size:18px}.sv-m .il-text{font-size:21px}.sv-m .il-text-2{font-size:20px}.sv-m .il-white{font-size:17px}.sv-m .il-title{font-size:23px}</style>
    <g data-part="cell">
      <rect x="30" y="72" width="700" height="352" rx="60" class="il-3s"/>
      <rect x="38" y="80" width="684" height="336" rx="54" class="il-none il-line"/>
      <text x="60" y="404" class="il-text-2">Liver cell (hepatocyte)</text>
    </g>
    <g data-part="nucleus"><ellipse cx="632" cy="340" rx="90" ry="48" class="il-8s il-line"/><text x="632" y="336" text-anchor="middle" class="il-small">Nucleus (DNA)</text><text x="632" y="357" text-anchor="middle" class="il-small">HCV stays out</text></g>
    <g data-part="virus">${virion(110, 40)}<text x="142" y="36" class="il-text">Hepatitis C virus particle</text></g>
    <g data-part="rna"><path d="${wave(80, 320, 162, 7, 24)}" class="il-none st-2" stroke-width="4" stroke-linecap="round"/><text x="330" y="167" class="il-text-2">viral RNA genome</text></g>
    <g data-part="poly">
      <rect x="80" y="202" width="46" height="24" rx="5" class="il-2s il-line"/><text x="103" y="219" text-anchor="middle" class="il-small">Core</text>
      <rect x="128" y="202" width="40" height="24" rx="5" class="il-2s il-line"/><text x="148" y="219" text-anchor="middle" class="il-small">E1</text>
      <rect x="170" y="202" width="40" height="24" rx="5" class="il-2s il-line"/><text x="190" y="219" text-anchor="middle" class="il-small">E2</text>
      <rect x="212" y="202" width="56" height="24" rx="5" class="il-2"/><text x="240" y="219" text-anchor="middle" class="il-white">NS3</text>
      <rect x="270" y="202" width="62" height="24" rx="5" class="il-2"/><text x="301" y="219" text-anchor="middle" class="il-white">NS5A</text>
      <rect x="334" y="202" width="62" height="24" rx="5" class="il-2"/><text x="365" y="219" text-anchor="middle" class="il-white">NS5B</text>
      <text x="406" y="220" class="il-text-2">cut into working parts</text>
    </g>
    <g data-part="template"><path d="${wave(110, 400, 266, 5, 20)}" class="il-none st-2" stroke-width="3.5" stroke-linecap="round"/><text x="422" y="272" class="il-small">template strand</text></g>
    <g data-part="newstrand">${beads(118, 312, 7)}<text x="110" y="346" class="il-small">new copy being built</text></g>
    <g data-part="ns5b"><path d="M250 292 q 10 -30 50 -28 q 42 2 48 32 q 4 30 -40 36 q -52 4 -58 -40 z" class="il-2"/><text x="300" y="304" text-anchor="middle" class="il-white">NS5B</text></g>
    <g data-part="nucs">${beads(392, 330, 1)}${beads(424, 312, 1)}${beads(446, 352, 1)}${beads(478, 326, 1)}${beads(410, 364, 1)}<text x="352" y="398" class="il-small">free RNA building blocks</text></g>
    <g data-part="progeny">${virion(470, 38, 15)}${virion(530, 38, 15)}${virion(590, 38, 15)}${virion(650, 38, 15)}<text x="396" y="110" class="il-text-2">≈ 1 trillion new particles a day</text></g>
    <g data-part="drug"><circle cx="495" cy="238" r="9.5" class="il-1"/><circle cx="495" cy="238" r="14" class="il-none st-1" stroke-width="2"/></g>
    <g data-part="druglabel"><text x="520" y="230" class="il-text">active sofosbuvir</text><text x="520" y="250" class="il-small">mimics the "U" block</text></g>
    <g data-part="stop"><text x="110" y="378" class="il-text" style="fill:var(--il-7);font-weight:700">✕ chain stops here</text></g>
    <g data-part="cure"><rect x="150" y="108" width="460" height="72" rx="14" class="il-paper il-line"/><text x="380" y="138" text-anchor="middle" class="il-title">No new copies, nothing to hide in</text><text x="380" y="164" text-anchor="middle" class="il-text-2">Virus fades as infected cells turn over</text></g>
  </svg>`;

  // ---------- figure: disease progression ----------
  const liverSvg = `<svg viewBox="0 64 900 324">
    <g data-part="healthy"><circle cx="95" cy="150" r="70" class="il-3s il-line"/>
      <path d="M65 125 l15 -9 l15 9 v17 l-15 9 l-15 -9 z M95 125 l15 -9 l15 9 v17 l-15 9 l-15 -9 z M80 151 l15 -9 l15 9 v17 l-15 9 l-15 -9 z" class="il-paper il-line"/>
      <text x="95" y="252" text-anchor="middle" class="il-title">Healthy</text><text x="95" y="272" text-anchor="middle" class="il-text-2">Metavir F0</text></g>
    <g data-part="inflamed"><circle cx="275" cy="150" r="70" class="il-2s il-line"/>
      <path d="M245 125 l15 -9 l15 9 v17 l-15 9 l-15 -9 z M275 125 l15 -9 l15 9 v17 l-15 9 l-15 -9 z M260 151 l15 -9 l15 9 v17 l-15 9 l-15 -9 z" class="il-paper il-line"/>
      <circle cx="240" cy="180" r="5" class="il-2"/><circle cx="305" cy="110" r="5" class="il-2"/><circle cx="312" cy="170" r="5" class="il-2"/><circle cx="252" cy="105" r="5" class="il-2"/><circle cx="290" cy="195" r="5" class="il-2"/>
      <text x="275" y="252" text-anchor="middle" class="il-title">Inflammation</text><text x="275" y="272" text-anchor="middle" class="il-text-2">"hepatitis"</text></g>
    <g data-part="fibrosis"><circle cx="455" cy="150" r="70" class="il-2s il-line"/>
      <path d="M400 120 q 30 20 55 5 t 55 10 M405 170 q 30 -15 50 5 t 50 -5 M440 90 q 10 40 20 60 t 5 60" class="il-none il-line2" stroke-width="4" stroke-linecap="round"/>
      <text x="455" y="252" text-anchor="middle" class="il-title">Fibrosis</text><text x="455" y="272" text-anchor="middle" class="il-text-2">scarring, F1 to F3</text></g>
    <g data-part="cirrhosis"><circle cx="635" cy="150" r="70" class="il-8s il-line"/>
      <circle cx="610" cy="125" r="18" class="il-2s il-line"/><circle cx="655" cy="120" r="16" class="il-2s il-line"/><circle cx="600" cy="170" r="16" class="il-2s il-line"/><circle cx="645" cy="165" r="20" class="il-2s il-line"/><circle cx="680" cy="150" r="12" class="il-2s il-line"/><circle cx="628" cy="200" r="11" class="il-2s il-line"/>
      <text x="635" y="252" text-anchor="middle" class="il-title">Cirrhosis</text><text x="635" y="272" text-anchor="middle" class="il-text-2">F4: lumpy, stiff liver</text></g>
    <g data-part="cancer"><circle cx="815" cy="150" r="70" class="il-8s il-line"/>
      <circle cx="790" cy="125" r="16" class="il-2s il-line"/><circle cx="780" cy="170" r="14" class="il-2s il-line"/><circle cx="845" cy="185" r="12" class="il-2s il-line"/>
      <path d="M820 115 q 30 -5 32 25 q 4 30 -26 34 q -30 2 -30 -26 q 0 -30 24 -33 z" class="il-7"/>
      <text x="815" y="252" text-anchor="middle" class="il-title">Liver cancer</text><text x="815" y="272" text-anchor="middle" class="il-text-2">or liver failure</text></g>
    <g class="il-line2"><path d="M168 150 h32 M348 150 h32 M528 150 h32 M708 150 h32" class="il-line2" stroke-linecap="round"/></g>
    <path d="M198 144 l8 6 l-8 6 z M378 144 l8 6 l-8 6 z M558 144 l8 6 l-8 6 z M738 144 l8 6 l-8 6 z" class="il-8"/>
    <rect x="40" y="310" width="820" height="10" rx="5" class="il-8s"/>
    <rect x="40" y="310" width="580" height="10" rx="5" class="il-2s"/>
    <text x="330" y="345" text-anchor="middle" class="il-text">Usually no symptoms through most of this path, often for decades</text>
    <text x="450" y="372" text-anchor="middle" class="il-text-2">Of people chronically infected, 15 to 30% develop cirrhosis within 20 years (WHO)</text>
  </svg>`;

  // ---------- figure: genome map and drug targets ----------
  const seg = (x, w, label, cls, txt) => `<rect x="${x}" y="110" width="${w}" height="46" rx="6" class="${cls}"/><text x="${x + w / 2}" y="138" text-anchor="middle" class="${txt}">${label}</text>`;
  const genomeSvg = `<svg viewBox="0 0 900 330">
    <text x="30" y="40" class="il-title">The hepatitis C genome: one strand of RNA, one long protein, about ten parts</text>
    <path d="M30 92 v-10 h200 v10" class="il-none il-line"/><text x="130" y="74" text-anchor="middle" class="il-text-2">Structural: build the particle</text>
    <path d="M320 92 v-10 h540 v10" class="il-none il-line"/><text x="590" y="74" text-anchor="middle" class="il-text-2">Non-structural (NS): the copying machinery</text>
    <g data-part="structural">${seg(30, 50, 'Core', 'il-2s il-line', 'il-small')}${seg(82, 60, 'E1', 'il-2s il-line', 'il-small')}${seg(144, 88, 'E2', 'il-2s il-line', 'il-small')}</g>
    <g data-part="p7ns2">${seg(234, 28, 'p7', 'il-8s il-line', 'il-small')}${seg(264, 54, 'NS2', 'il-8s il-line', 'il-small')}</g>
    <g data-part="ns3">${seg(320, 130, 'NS3 protease', 'il-2', 'il-white')}${seg(452, 36, '4A', 'il-2', 'il-white')}</g>
    <g data-part="ns4b">${seg(490, 70, 'NS4B', 'il-8s il-line', 'il-small')}</g>
    <g data-part="ns5a">${seg(562, 128, 'NS5A', 'il-2', 'il-white')}</g>
    <g data-part="ns5b">${seg(692, 168, 'NS5B polymerase', 'il-2', 'il-white')}</g>
    <path d="M405 160 v40 M626 160 v70 M776 160 v100" class="il-none il-line il-dash"/>
    <circle cx="405" cy="204" r="5" class="il-2"/><circle cx="626" cy="234" r="5" class="il-2"/><circle cx="776" cy="264" r="6" class="il-1"/>
    <text x="395" y="209" text-anchor="end" class="il-text">Protease inhibitors ("-previr")</text>
    <text x="616" y="239" text-anchor="end" class="il-text">NS5A inhibitors ("-asvir"), e.g. ledipasvir</text>
    <text x="766" y="269" text-anchor="end" class="il-text" style="fill:var(--il-1);font-weight:700">Polymerase inhibitors ("-buvir"): sofosbuvir</text>
    <text x="30" y="310" class="il-text-2">Combination pills hit two or three of these parts at once, so the virus would need several lucky mutations at the same time to escape.</text>
  </svg>`;

  // ---------- figure: prodrug delivery ----------
  const prodrugSvg = `<svg viewBox="0 0 900 430" class="sv-p"><style>.sv-p .il-small{font-size:13.5px}</style>
    <g data-part="pill"><rect x="28" y="54" width="96" height="40" rx="20" class="il-1s il-line"/><path d="M76 54 h28 a20 20 0 0 1 0 40 h-28 z" class="il-1"/><text x="76" y="118" text-anchor="middle" class="il-text">400 mg tablet</text><text x="76" y="135" text-anchor="middle" class="il-small">once a day</text></g>
    <g data-part="gut"><path d="M30 190 q 30 -30 60 0 t 60 0 t 60 0" class="il-none st-4" stroke-width="26" stroke-linecap="round" opacity="0.45"/><text x="40" y="238" class="il-text">Gut</text><text x="40" y="255" class="il-small">disguise keeps it intact</text><text x="40" y="270" class="il-small">and lets it cross into blood</text></g>
    <g data-part="portal"><path d="M215 190 C 250 190, 270 210, 330 210" class="il-none il-line2 flow" stroke-width="3"/><path d="M322 203 l10 7 l-10 7 z" class="il-8"/><text x="196" y="312" class="il-text">Portal vein</text><text x="196" y="330" class="il-small">gut blood goes to</text><text x="196" y="346" class="il-small">the liver first</text></g>
    <rect x="340" y="30" width="540" height="380" rx="44" class="il-3s"/><rect x="348" y="38" width="524" height="364" rx="38" class="il-none il-line"/>
    <text x="370" y="66" class="il-text-2">Inside a liver cell (hepatocyte)</text>
    <g data-part="step1">${glyph(390, 125, 'A')}<text x="372" y="172" class="il-small">Disguised: phosphate hidden</text><text x="372" y="187" class="il-small">under an ester and a phenol</text></g>
    <path d="M512 125 h36" class="il-line2"/><path d="M546 119 l8 6 l-8 6 z" class="il-8"/>
    <text x="530" y="108" text-anchor="middle" class="il-num" style="font-size:16px">1</text>
    <g data-part="step2">${glyph(590, 125, 'B')}<text x="572" y="172" class="il-small">Liver enzymes (CatA, CES1)</text><text x="572" y="187" class="il-small">cut the ester; phenol falls off</text></g>
    <path d="M790 145 q 30 30 0 70" class="il-none il-line2"/><path d="M784 212 l6 9 l4 -10 z" class="il-8"/>
    <text x="820" y="185" class="il-num" style="font-size:16px">2</text>
    <g data-part="step3">${glyph(700, 250, 'C')}<text x="672" y="292" class="il-small">HINT1 removes the amino</text><text x="672" y="308" class="il-small">acid: a bare monophosphate</text></g>
    <path d="M690 250 h-50" class="il-line2"/><path d="M642 244 l-8 6 l8 6 z" class="il-8"/>
    <text x="662" y="238" text-anchor="middle" class="il-num" style="font-size:16px">3</text>
    <g data-part="active">${glyph(500, 250, 'D')}<text x="484" y="292" class="il-small">Cell kinases add two more</text><text x="484" y="307" class="il-small">phosphates: the active form</text></g>
    <g data-part="target"><path d="M395 350 q 8 -26 44 -24 q 38 2 42 28 q 2 26 -36 30 q -46 4 -50 -34 z" class="il-2"/><text x="438" y="362" text-anchor="middle" class="il-white">NS5B</text><path d="M478 254 C 450 258, 440 290, 440 324" class="il-none st-1" stroke-width="2.5"/><text x="505" y="368" class="il-text">4 jams the viral copier</text></g>
  </svg>`;

  registerCase({
    id: 'sovaldi', kind: 'success',
    brand: 'Sovaldi', generic: 'sofosbuvir', company: 'Pharmasset, then Gilead Sciences',
    tagline: 'A 12-week pill that cures a liver virus which kills hundreds of thousands of people a year, and a $1,000-a-pill price that set off a fight over who pays for cures.',
    chips: [['Disease', 'Chronic [[hepatitis C]]'], ['Modality', '[[small molecule]] [[nucleotide analogue]] ([[prodrug]])'], ['Target', '[[NS5B polymerase]]'], ['Approved', 'December 2013']],
    readingTime: 32,
    stats: [
      {v: '$84,000', l: 'US [[list price]] for a 12-week course: $1,000 a pill', n: 'Senate Finance Committee report, 2015'},
      {v: '$11.2B', l: 'What Gilead paid for Pharmasset, an 89% premium to its share price', n: 'Gilead / Pharmasset, 2011–12'},
      {v: '99%', l: 'Cure rate ([[SVR12]]) with 12 weeks of Harvoni in the ION-1 trial', n: 'Afdhal et al., NEJM 2014'},
      {v: '$19.1B', l: "Gilead's hepatitis C sales in 2015, the peak year", n: 'Gilead 2016 results'},
      {v: '$1.9B', l: 'The same franchise in 2021, after millions were cured', n: 'Gilead 2021 results'},
    ],
    emblem: `<svg viewBox="0 0 300 300">
      <circle cx="150" cy="150" r="130" class="il-1s"/>
      <path d="${wave(40, 170, 120, 10, 30)}" class="il-none st-2" stroke-width="9" stroke-linecap="round"/>
      <circle cx="186" cy="120" r="19" class="il-1"/>
      <path d="${wave(210, 270, 120, 10, 30)}" class="il-none st-2 il-dash" stroke-width="5" opacity="0.35"/>
      <g transform="rotate(-18 150 210)"><rect x="92" y="186" width="116" height="48" rx="24" class="il-paper il-line2"/><path d="M150 186 h34 a24 24 0 0 1 0 48 h-34 z" class="il-1"/></g>
    </svg>`,
    facts: {start: 2007, firstHuman: 2009, approval: 2013, end: null, peakSalesB: 19.1, pivotalN: 327,
      area: 'infectious', modality: 'small molecule', target: 'NS5B polymerase'},
    themes: ['pricing', 'dealmaking', 'competition'],
    glossary: {
      'hepatitis C': 'A liver infection caused by the hepatitis C virus (HCV), spread through blood. Most people who catch it stay infected for decades without symptoms.',
      'HCV': 'Hepatitis C virus: a small virus whose genes are a single strand of RNA. It infects liver cells.',
      'hepatocyte': 'The main working cell of the liver. Hepatitis C infects and copies itself inside hepatocytes.',
      'fibrosis': 'Scar tissue that builds up in an organ after long-running damage and inflammation. In the liver it is scored from F0 (none) to F4 (cirrhosis).',
      'cirrhosis': 'Advanced liver scarring (F4) that leaves the liver lumpy and stiff. It can lead to liver failure and liver cancer.',
      'Metavir score': 'A 0 to 4 scale of liver scarring (F0 none, F4 cirrhosis), originally read from a biopsy and now often estimated with scans or blood tests.',
      'interferon': 'A signaling protein the body makes when a virus attacks. As a drug it was injected for months to boost the immune response to hepatitis C, with flu-like side effects and depression.',
      'peginterferon': 'Interferon with a polymer (PEG) attached so it lasts longer in the body: one injection a week instead of three.',
      'ribavirin': 'An older antiviral pill used alongside interferon for hepatitis C. Weak on its own; can cause anemia.',
      'sustained virologic response': 'No detectable virus in the blood some weeks after treatment ends (usually 12 weeks: SVR12). For hepatitis C this counts as a cure.',
      'SVR12': 'Sustained virologic response 12 weeks after the last dose: no detectable virus. The standard cure endpoint in hepatitis C trials.',
      'SVR': 'Sustained virologic response: no detectable virus weeks after treatment stops. For hepatitis C, a cure.',
      'genotype': 'A major genetic strain of a virus. Hepatitis C has several (1 to 7), and they respond differently to drugs.',
      'direct-acting antiviral': 'A drug that attacks one of the virus\'s own proteins directly, instead of boosting the immune system. For hepatitis C often shortened to DAA.',
      'NS5B polymerase': 'The hepatitis C enzyme that copies the virus\'s RNA genome. Sofosbuvir\'s target.',
      'polymerase': 'An enzyme that builds a new strand of DNA or RNA by reading a template and adding matching building blocks one at a time.',
      'NS5A': 'A hepatitis C protein needed to assemble the copying machinery and new virus particles. Ledipasvir and velpatasvir block it.',
      'protease inhibitor': 'A drug that blocks a protease, an enzyme that cuts proteins. For hepatitis C it stops the virus cutting its long protein into working parts.',
      'nucleotide': 'One building block of DNA or RNA (the "letters" A, C, G, U or T), carrying a phosphate group.',
      'nucleotide analogue': 'A look-alike of a natural nucleotide. A polymerase mistakes it for the real thing and adds it to a growing strand, which then breaks or stops.',
      'chain terminator': 'A nucleotide analogue that, once added to a growing DNA or RNA strand, prevents the next building block from being attached.',
      'replicon': 'A trimmed-down piece of viral RNA that copies itself inside lab-grown cells. For hepatitis C it made drug screening possible for the first time.',
      'triphosphate': 'A nucleotide carrying three phosphate groups: the form a polymerase actually uses. Nucleotide drugs must be converted to it inside the cell.',
      'first-pass metabolism': 'Anything absorbed from the gut goes to the liver first, which processes it before the rest of the body sees it.',
      'phosphoramidate': 'A chemical disguise for a phosphate group that hides its electric charge so the molecule can be absorbed and enter cells; enzymes inside the cell remove it.',
      'isomer': 'Molecules with the same atoms arranged differently, like left and right hands. They can behave very differently in the body.',
      'bioavailability': 'The share of a swallowed dose that reaches the bloodstream in active form.',
      'pharmacy benefit manager': 'A company (such as Express Scripts or CVS Caremark) that runs drug benefits for insurers and employers, builds formularies and negotiates rebates. Often shortened to PBM.',
      'PBM': 'Pharmacy benefit manager: a middleman that manages drug coverage and negotiates rebates with drug makers.',
      'gross-to-net': 'The gap between a drug\'s list price and what the maker actually receives after rebates and discounts.',
      'authorized generic': 'A drug sold by (or with permission of) the brand maker under its generic name, usually at a lower list price.',
      'voluntary license': 'Permission a patent holder grants to other manufacturers to make and sell its drug, often in poorer countries in return for a royalty.',
      'subscription model': 'A payer pays a fixed amount for unlimited use of a drug over a period, instead of paying per patient. Nicknamed the "Netflix model".',
      'noninferiority trial': 'A trial designed to show a new treatment is not meaningfully worse than the existing one (within a pre-set margin), often because it is safer or easier.',
      'warehousing': 'Doctors advising patients to delay treatment while a clearly better drug is expected soon.',
      'viral load': 'How much virus is in the blood, measured as copies per milliliter.',
      'Medicaid': 'The US public health insurance program for people with low incomes, run by each state with federal funding.',
      'ledipasvir': 'An NS5A inhibitor. Combined with sofosbuvir in one pill it became Harvoni.',
      'velpatasvir': 'An NS5A inhibitor that works across all major hepatitis C genotypes. Combined with sofosbuvir it became Epclusa.',
      'budget impact': 'How much a new treatment adds to a payer\'s spending over a set period, regardless of whether it is good value.',
      'pan-genotypic': 'Working against all the major genotypes of hepatitis C, so no strain test is needed before treatment.',
    },
    sections: [
      // ---------------- 1. Cold open ----------------
      {type: 'story', kicker: 'Cold open', title: 'Thirty-six weeks', tocTitle: 'Cold open', html: `
        <p>On October 25, 2013, a college professor named Onaiwu Ogbomo stood up at a public meeting to speak to a panel of experts advising the US [[FDA]]. The panel was deciding whether to recommend a new pill called sofosbuvir. Ogbomo was there to tell them what it had done to him.</p>
        <p>He had caught [[hepatitis C]] as a boy in Nigeria, probably, he believed, through a vaccination program in his home country. He grew up, earned a PhD in Canada, and moved to the United States to teach. The virus sat in his liver the whole time, doing slow damage. By the time his doctor recommended a liver transplant, he hesitated: he was afraid he might die during surgery before seeing his children graduate from college. He waited until they had. He survived the transplant, and then got the news that transplant patients with hepatitis C often get. The virus had come back and was attacking the new liver.</p>
        <p>His doctor told him there was nothing left to try and advised him to get his affairs in order. Soon after, the same doctor called with one more option: a clinical trial of an experimental drug. Ogbomo joined it. Thirty-six weeks later he was cured.</p>
        <p>Sitting in the room was Michael Sofia, the chemist who had led the team that designed the molecule. Sofia later wrote that it was only at that meeting, hearing stories like Ogbomo's, that he truly understood what the drug was going to mean. The panel voted unanimously in favor. Six weeks later, on December 6, 2013, the FDA approved the drug under the brand name Sovaldi.</p>
        <p>Then Gilead Sciences, the company that had bought the drug two years earlier for $11 billion, announced the price: <strong>$84,000 for a 12-week course, or $1,000 a pill</strong>.</p>
        <p>What followed was one of the strangest stories in modern medicine. A drug that did exactly what medicine promises, a short, gentle course of pills that cures a deadly infection in almost everyone who takes it, became a symbol of everything people dislike about the drug industry. US states rationed it, allowing it only for people whose livers were already badly scarred. The US Senate investigated how the price was set. Gilead's hepatitis C sales rose from almost nothing to $19 billion in two years, and then, because the drug worked, collapsed as the patients it cured stopped needing it.</p>
        <p>This case is about all of that: the biology of a virus that hides in plain sight, a piece of chemistry that most experts thought would not work, an acquisition analysts called reckless, and a question the industry is still arguing about. What should a cure cost, and who can afford to pay for one?</p>`},

      // ---------------- 2. Disease from zero ----------------
      {type: 'story', kicker: 'The disease from zero', title: 'A silent virus in the liver', tocTitle: 'Hepatitis C from zero', html: `
        <p>Start with the organ. Your liver is a three-pound chemical factory under your right ribs. It processes nutrients, makes the proteins that let your blood clot, clears toxins and old drugs out of your blood, and stores energy. Its working cells are called [[hepatocyte|hepatocytes]]. The liver is also forgiving: it can lose a lot of function before you notice, and it can regrow. That forgiveness is exactly what makes hepatitis C dangerous.</p>
        <p>"Hepatitis" just means inflammation of the liver. For much of the twentieth century doctors knew about hepatitis A (spread through food and water) and hepatitis B (spread through blood and sex), but many people who got hepatitis after a blood transfusion tested negative for both. The mystery illness was called "non-A, non-B hepatitis". In 1989 a team at the biotech company Chiron, led by Michael Houghton, working with Daniel Bradley at the US Centers for Disease Control, finally fished the culprit's genes out of infected blood. It was a small virus whose genes were written in RNA rather than DNA, roughly 10,000 letters long. They called it the hepatitis C virus, or [[HCV]]. In 2020 Houghton, Harvey Alter (who had shown the disease was caused by a transmissible agent) and Charles Rice (who proved the virus alone could cause it) shared the Nobel Prize for the discovery.</p>
        <h3>How it spreads and what it does</h3>
        <p>HCV lives in blood. Before 1989, unscreened blood transfusions spread it widely. Reused needles in clinics and vaccination campaigns spread it too, and today sharing equipment for injecting drugs is the most common route in the United States. Sexual and mother-to-child transmission happen but are less common.</p>
        <p>About 30% of people who catch it clear the virus on their own within six months. The other 70% or so become chronically infected, and then, typically, nothing happens that they can feel. For years or decades, the virus copies itself inside liver cells, the immune system attacks the infected cells, and the liver lays down scar tissue to patch the damage. That scarring is called [[fibrosis]]. Doctors grade it on the [[Metavir score]] from F0 (no scarring) to F4, which is [[cirrhosis]]: a liver so scarred it becomes lumpy, stiff and unable to do its job. According to the World Health Organization, 15 to 30% of chronically infected people develop cirrhosis within 20 years. Cirrhosis can lead to liver failure, internal bleeding, confusion as toxins build up, and liver cancer.</p>
        <p>Because there are no symptoms for so long, most infected people do not know. A US study cited by the Senate Finance Committee estimated that only about half of Americans with chronic HCV were aware of it. The disease earned the nickname "the silent killer".</p>
        <h3>How big a problem</h3>
        <p>When Sovaldi arrived, estimates put the number of people with chronic HCV worldwide at 130 to 150 million, with about 700,000 deaths a year from related liver disease. That was more deaths than malaria caused at the time. The WHO's current estimate, after a decade of cures, is about 47 million people living with chronic infection, around 900,000 new infections a year and roughly 239,000 deaths in 2024. For scale: 47 million is more than the population of California.</p>
        <p>In the United States, estimates ran as high as 5.2 million infected people, concentrated among baby boomers (people born from 1945 to 1965 were about five times more likely to be positive than other adults) and people who inject drugs. Hepatitis C was the leading reason Americans received liver transplants. It also clustered among people whose insurance was paid by the government: [[Medicaid]], Medicare, veterans' health care and prisons. Remember that detail. It is why the price fight became a fight about public budgets.</p>`},

      {type: 'figure', title: 'From infection to cirrhosis', intro: 'Hover or tap each stage. The whole path can take twenty or thirty years, most of it without symptoms.',
        svg: liverSvg,
        hotspots: {
          healthy: {title: 'Healthy liver (F0)', text: 'Liver cells arranged in neat functional units, with blood flowing through. No scarring. Many people infected with HCV stay near here for years.'},
          inflamed: {title: 'Inflammation', text: 'The virus copies itself inside [[hepatocyte|hepatocytes]]. Immune cells attack infected cells, and liver enzymes leak into the blood: the only early clue, usually spotted by accident in a routine blood test.'},
          fibrosis: {title: 'Fibrosis (F1 to F3)', text: 'Repeated damage is patched with scar tissue. Scar bands gradually link up. In 2014 and 2015 many [[Medicaid]] programs used this score to decide who could get sofosbuvir: in many states only F3 or F4 qualified.'},
          cirrhosis: {title: 'Cirrhosis (F4)', text: 'Scar tissue surrounds lumps of regenerating cells. Blood struggles to pass through, pressure builds, and the liver cannot keep up with its work. Curing the virus at this stage still helps, but some damage and cancer risk remain.'},
          cancer: {title: 'Liver cancer or failure', text: 'Cirrhosis raises the risk of hepatocellular carcinoma (primary liver cancer) and of liver failure. For many patients the only remaining option was a transplant, and the virus usually re-infected the new liver.'},
        },
        caption: 'Stages simplified. Metavir F0 to F4 scale shown. Sources: WHO hepatitis C fact sheet; Senate Finance Committee report (2015).'},

      {type: 'story', kicker: 'Before the pill', title: 'A year of injections for a coin flip', tocTitle: 'The old treatment', html: `
        <p>Before 2011, the only drugs for hepatitis C did not attack the virus directly. They tried to rouse the immune system to do it.</p>
        <p>The main drug was [[interferon]], a signaling protein your own cells release when a virus invades, which puts neighboring cells on alert. Doctors began injecting interferon into non-A, non-B hepatitis patients in the mid-1980s, before the virus even had a name. It worked badly: a 48-week course cleared the virus in only about 16% of patients. In 1998 the FDA approved adding [[ribavirin]], an older antiviral pill, which raised the cure rate to about 42% at 48 weeks. Then chemists attached a long polymer chain (PEG) to interferon so it lasted a week in the body. In the large 2002 trial of this [[peginterferon]] plus ribavirin, 56% of patients were cured overall, but only 46% of those with [[genotype]] 1, the strain that caused about 70% of US infections.</p>
        <p>Those percentages hide what the treatment was like. Patients injected themselves every week for up to 48 weeks and took ribavirin tablets every day. Interferon causes flu-like symptoms: fever, fatigue, headache and aches. Many patients described it as having the flu for a year. It also causes depression, insomnia and falls in blood cells; ribavirin causes anemia. Many patients stopped early. Many others were never offered treatment at all because they had depression, other illnesses, or advanced liver disease that made interferon dangerous.</p>
        <p>In 2011 the first [[direct-acting antiviral|direct-acting antivirals]] arrived: two [[protease inhibitor|protease inhibitors]], telaprevir (Vertex's Incivek) and boceprevir (Merck's Victrelis). They raised cure rates for genotype 1, but they had to be taken with peginterferon and ribavirin, added side effects of their own, and the virus could become resistant to them. They were a step, not an escape.</p>
        <p>Meanwhile, doctors could see a better generation coming. Many started <em>[[warehousing]]</em> patients: advising those with mild scarring to wait. "There's no way I'm going to put them on an interferon regimen when we're a year away from having interferon-free regimens," Scott Friedman, chief of liver diseases at Mount Sinai in New York, told the <em>New York Times</em> in 2013. Gilead estimated that only 58,000 Americans were being treated at the time. So when a good drug arrived, there was a large backlog of people ready for it. That backlog would matter a great deal to the money.</p>`},

      {type: 'custom', title: 'Two treatment journeys', intro: 'Switch between the standard treatment in 2004 and a sofosbuvir-based pill in 2014. Each square is one week; the dots show 100 patients like you.',
        html: `<div class="card" id="tjWrap">
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
            <button class="btn" data-tj="old" aria-pressed="true">2004: peginterferon + ribavirin</button>
            <button class="btn" data-tj="new" aria-pressed="false">2014: ledipasvir-sofosbuvir (Harvoni)</button>
          </div>
          <div id="tjSvg"></div>
          <div id="tjText" style="margin-top:10px;font-size:15px;line-height:1.55"></div>
        </div>`,
        init(root, api) {
          const data = {
            old: {weeks: 48, inj: true, cured: 46, label: 'Peginterferon alfa + ribavirin, genotype 1', dose: 'Weekly injection, plus ribavirin tablets every day', se: 'Flu-like symptoms, fatigue, depression, insomnia, anemia and low white cell counts. Many patients stopped early.', src: 'Fried et al., NEJM 2002 (genotype 1 result)'},
            new: {weeks: 12, inj: false, cured: 99, label: 'Ledipasvir-sofosbuvir, genotype 1, previously untreated', dose: 'One tablet a day, no injections', se: 'Most common: fatigue, headache, insomnia and nausea. No patient in the 12-week arms stopped because of side effects.', src: 'Afdhal et al., NEJM 2014 (ION-1, 12-week arm)'},
          };
          const draw = (k) => {
            const d = data[k];
            let s = '<svg viewBox="0 0 900 250">';
            s += '<text x="0" y="18" class="il-title">Treatment calendar (52 weeks)</text>';
            for (let i = 0; i < 52; i++) {
              const x = (i % 13) * 34, y = 34 + Math.floor(i / 13) * 34, on = i < d.weeks;
              s += `<rect x="${x}" y="${y}" width="28" height="28" rx="6" class="${on ? (k === 'old' ? 'il-2s il-line' : 'il-1s il-line') : 'il-bg il-line'}" data-tip="Week ${i + 1}${on ? (d.inj ? ': injection + daily pills' : ': one pill a day') : ': finished'}"/>`;
              if (on && d.inj) s += `<path d="M${x + 8} ${y + 20} l12 -12 M${x + 17} ${y + 6} l5 5" class="st-2" stroke-width="2.5" stroke-linecap="round"/>`;
              if (on && !d.inj) s += `<rect x="${x + 7}" y="${y + 10}" width="14" height="8" rx="4" class="il-1"/>`;
            }
            s += `<text x="0" y="200" class="il-num">${d.weeks} weeks</text><text x="0" y="222" class="il-text-2">${d.inj ? d.weeks + ' injections' : d.weeks * 7 + ' tablets'}</text>`;
            s += '<text x="480" y="18" class="il-title">Out of 100 patients</text>';
            for (let i = 0; i < 100; i++) {
              const x = 480 + (i % 20) * 21, y = 40 + Math.floor(i / 20) * 26;
              s += `<circle cx="${x + 8}" cy="${y + 8}" r="8" class="${i < d.cured ? 'il-3' : 'il-8s il-line'}"/>`;
            }
            s += `<circle cx="488" cy="190" r="8" class="il-3"/><text x="502" y="195" class="il-text">cured (${d.cured})</text><circle cx="620" cy="190" r="8" class="il-8s il-line"/><text x="634" y="195" class="il-text">not cured (${100 - d.cured})</text>`;
            s += '</svg>';
            root.querySelector('#tjSvg').innerHTML = s;
            root.querySelector('#tjText').innerHTML = `<b>${d.label}.</b> ${d.dose}. <br><b>Side effects:</b> ${d.se}<br><span style="color:var(--ink-3)">Source: ${d.src}. Trial results in different populations, not a head-to-head comparison.</span>`;
            root.querySelectorAll('[data-tj]').forEach(b => { b.setAttribute('aria-pressed', b.dataset.tj === k); b.classList.toggle('primary', b.dataset.tj === k); });
            root.querySelectorAll('[data-tip]').forEach(n => { n.onmousemove = e => api.showTip(e, n.dataset.tip); n.onmouseleave = api.hideTip; });
          };
          root.querySelectorAll('[data-tj]').forEach(b => b.onclick = () => draw(b.dataset.tj));
          draw('old');
        }},

      {type: 'callout', variant: 'numbers', heading: 'Hepatitis C by the numbers', html: `
        <p><b>47 million</b> people living with chronic HCV worldwide today (WHO); estimates were <b>130 to 150 million</b> when Sovaldi launched.</p>
        <p><b>About 239,000</b> deaths in 2024, mostly from cirrhosis and liver cancer. <b>No vaccine</b> exists.</p>
        <p><b>36%</b> of people ever infected have been diagnosed, and only about <b>20%</b> of those diagnosed have been treated, according to the WHO.</p>
        <p><b>16% → 42% → 56% → 90%+</b>: the cure rate as treatment moved from interferon alone, to interferon plus ribavirin, to peginterferon plus ribavirin, to sofosbuvir-based regimens.</p>`},

      // ---------------- 3. Key insight ----------------
      {type: 'story', kicker: 'The key insight', title: 'Why this virus could be cured at all', tocTitle: 'The key insight', html: `
        <p>Most chronic viral infections cannot be cured with drugs, only controlled. HIV writes a DNA copy of its genes into the DNA of your own cells and can lie dormant there for years; stop the drugs and it comes back. Hepatitis B parks a stable DNA copy of itself in the nucleus of liver cells. Hepatitis C does neither. Its genome is RNA, it never makes a DNA copy, and it never enters the nucleus. It survives only by copying itself, over and over, in the fluid of the cell.</p>
        <p>That makes it frightening and fragile at the same time. Frightening because it copies itself at enormous speed: a 1998 study in <em>Science</em> by Avidan Neumann, Alan Perelson and colleagues estimated that an infected person produces and clears about a trillion virus particles a day, and each particle lasts only a few hours in the blood. Fragile because if you can stop the copying completely for long enough, there is nothing left to come back. The infected cells die off or are cleared, new ones stay uninfected, and the virus is gone. That is why hepatitis C trials measure a cure directly: if no virus can be detected in the blood 12 weeks after the last pill, the [[sustained virologic response]] ([[SVR12]]), it almost never returns. The patient can be re-infected by a new exposure, but the old infection is over.</p>
        <p>The copying is done by one viral [[enzyme]], a [[polymerase]] called NS5B. It reads the virus's RNA strand and builds a new one, letter by letter, from building blocks called [[nucleotide|nucleotides]]. Human cells do not use an enzyme like it to copy RNA from RNA, which makes it an attractive target: block it and you should hurt the virus without hurting the patient.</p>
        <h3>The tool that made drug hunting possible</h3>
        <p>For a decade after its discovery, HCV was almost impossible to grow in a lab dish, so chemists could not easily test whether a molecule stopped it. In 1999 Ralf Bartenschlager's group in Heidelberg, with Volker Lohmann, published a workaround: a trimmed-down piece of viral RNA, called a [[replicon]], that copied itself inside liver cancer cells in culture. Charles Rice's lab in the US made key improvements. For the first time, a company could put thousands of candidate molecules on cells and see which ones stopped viral copying. Bartenschlager, Rice and Sofia shared the 2016 Lasker Award for clinical medical research for this chain of work.</p>
        <h3>The people who bet on nucleotides</h3>
        <p>One family of molecules had a long record against viruses: [[nucleotide analogue|nucleotide analogues]], look-alikes of the natural building blocks that fool a viral polymerase. Raymond Schinazi, a chemist at Emory University and the Atlanta VA who had fled Egypt with his family as a teenager, was a master of them. He co-invented lamivudine and emtricitabine, two nucleoside drugs that became pillars of HIV treatment. In 1998 Schinazi, his Emory colleague Dennis Liotta, Jean-Pierre Sommadossi of the University of Alabama at Birmingham and Chung Chu of the University of Georgia founded a small company to develop oral antivirals, with a large focus on hepatitis C. They called it Pharmasset.</p>
        <p>Many larger companies were betting on other targets, especially the NS3 protease, which was further along in clinical trials. Nucleotide analogues had a reputation for being hard to get into cells and hard to make potent enough. Pharmasset's view was that a good nucleotide would have advantages no protease inhibitor could match: it would mimic a building block the virus cannot do without, so it should work against every genotype, and the virus would struggle to become resistant, because a polymerase that rejected the drug would tend to reject the real building block too.</p>`},

      {type: 'mechanism', title: 'How sofosbuvir stops the virus', intro: 'Step through the hepatitis C life cycle inside a liver cell, then watch what the drug does to it.',
        svg: mechSvg,
        steps: [
          {title: 'The virus arrives at a liver cell', text: 'An HCV particle circulating in the blood docks onto a [[hepatocyte]] and is pulled inside. Unlike HIV or hepatitis B, it will never go near the nucleus where the cell keeps its DNA.', show: ['cell', 'nucleus', 'virus'], focus: ['virus']},
          {title: 'It unpacks a single strand of RNA', text: 'Inside, the particle falls apart and releases its genome: one strand of [[RNA]] about 10,000 letters long. The cell\'s own protein-making machinery reads it as if it were a normal instruction.', show: ['cell', 'nucleus', 'virus', 'rna'], move: {virus: 'translate(0px, 72px)'}, dim: ['virus'], focus: ['rna']},
          {title: 'One long protein, cut into parts', text: 'The RNA is translated into one long protein chain, which is cut into about ten pieces. Some build new virus particles. The "non-structural" (NS) pieces form the copying machinery. The scissors are NS3 (the target of protease inhibitors); NS5A organizes the machinery; NS5B is the copier.', show: ['cell', 'nucleus', 'rna', 'poly'], dim: ['rna'], focus: ['poly']},
          {title: 'NS5B copies the genome', text: 'The [[NS5B polymerase]] reads a template strand and builds a new strand, adding matching RNA building blocks ([[nucleotide|nucleotides]]) one at a time, each clicking onto the end of the last.', show: ['cell', 'nucleus', 'poly', 'template', 'newstrand', 'ns5b', 'nucs'], dim: ['poly'], pulse: ['newstrand'], focus: ['ns5b']},
          {title: 'A trillion copies a day', text: 'New genomes are packed into new particles that leave the cell and infect others. Across the whole liver, an infected person makes roughly a trillion particles a day. The copier makes mistakes often, so the virus mutates quickly, which is why single drugs can fail through resistance.', show: ['cell', 'nucleus', 'template', 'newstrand', 'ns5b', 'progeny'], dim: ['template', 'newstrand', 'ns5b'], pulse: ['progeny']},
          {title: 'The decoy: active sofosbuvir', text: 'Inside the liver cell, sofosbuvir has been converted into a [[triphosphate]] that looks almost exactly like the natural "U" building block. Two small changes on its sugar ring (a fluorine atom and an extra methyl group) are the trap.', show: ['cell', 'nucleus', 'template', 'newstrand', 'ns5b', 'nucs', 'drug', 'druglabel'], dim: ['nucs'], focus: ['drug']},
          {title: 'The chain stops', text: 'NS5B takes the decoy and adds it to the growing strand. Because of the changes on its sugar, the next building block cannot attach properly and the strand stops growing: the drug is a [[chain terminator]]. Human polymerases largely ignore it, which is why side effects are mild.', show: ['cell', 'nucleus', 'template', 'newstrand', 'ns5b', 'drug', 'stop'], move: {drug: 'translate(-251px, 74px)'}, focus: ['drug'], pulse: ['stop']},
          {title: 'Nothing to come back from', text: 'With copying blocked every day for 8 to 12 weeks (usually alongside a second drug hitting NS5A), virus levels collapse. Infected cells die off or are cleared, and because HCV has no DNA copy hiding in the nucleus, nothing restarts the infection. That is a cure.', show: ['cell', 'nucleus', 'template', 'newstrand', 'ns5b', 'drug', 'cure'], dim: ['template', 'newstrand', 'ns5b'], move: {drug: 'translate(-251px, 74px)'}, focus: ['cure']},
        ]},

      {type: 'callout', variant: 'misconception', heading: '"Cured" does not mean "immune"', html: `
        <p>A sustained virologic response means the old infection is gone. It does not protect against a new one. People who keep being exposed, for example through shared injecting equipment, can be re-infected and need treating again. That is one reason public health programs pair treatment with harm reduction, and one reason the market for these drugs never falls quite to zero.</p>`},

      {type: 'figure', title: 'The genome as a map of drug targets', intro: 'Hover or tap the pieces of the viral protein. Each class of hepatitis C drug hits one of them.',
        svg: genomeSvg,
        hotspots: {
          structural: {title: 'Structural proteins', text: 'Core, E1 and E2 build the virus particle and its outer coat. E2 changes constantly, which is one reason there is still no vaccine.'},
          p7ns2: {title: 'p7 and NS2', text: 'Helpers for assembling and releasing new particles. No approved drugs target them.'},
          ns3: {title: 'NS3/4A protease', text: 'The scissors that cut the long protein into working parts. Blocked by [[protease inhibitor|protease inhibitors]] (names end in "-previr"): telaprevir and boceprevir (2011), simeprevir (2013), and later ones used in combination pills.'},
          ns4b: {title: 'NS4B', text: 'Reshapes the cell\'s internal membranes into a "replication factory" where copying happens.'},
          ns5a: {title: 'NS5A', text: 'A protein needed to organize copying and assembly. [[NS5A]] inhibitors ("-asvir"), such as [[ledipasvir]] and [[velpatasvir]], are extremely potent. Paired with sofosbuvir they gave Harvoni and Epclusa.'},
          ns5b: {title: 'NS5B polymerase', text: 'The copier. Sofosbuvir is a nucleotide inhibitor that acts as a decoy building block. Because the part of NS5B it mimics is essential and similar across strains, sofosbuvir works on every genotype and resistance is rare.'},
        },
        caption: 'Segment widths are approximate. Drug-name suffixes follow US naming conventions for antivirals.'},

      // ---------------- Timeline ----------------
      {type: 'timeline', title: 'Timeline', intro: 'From an unnamed virus to a cure, a price war and a subscription deal.', events: [
        {year: 1989, title: 'Hepatitis C virus identified', kind: 'science', text: 'Choo, Houghton and colleagues at Chiron, with the CDC\'s Daniel Bradley, clone the virus\'s genes from infected blood.'},
        {year: 1998, title: 'Pharmasset founded', kind: 'people', text: 'Raymond Schinazi, Dennis Liotta, Jean-Pierre Sommadossi and Chung Chu start a company to make oral antivirals.'},
        {year: 1998, date: '12/1998', title: 'Interferon plus ribavirin approved', kind: 'regulatory', text: 'Adding ribavirin more than doubles cure rates compared with interferon alone.'},
        {year: 1999, title: 'The HCV replicon', kind: 'science', text: 'Lohmann, Bartenschlager and colleagues show a trimmed viral RNA can copy itself in lab cells, making drug screening possible.'},
        {year: 2002, title: 'Peginterferon plus ribavirin trial', kind: 'clinical', text: '56% cured overall, 46% in genotype 1, after 48 weeks of weekly injections.'},
        {year: 2005, title: 'Michael Sofia joins Pharmasset', kind: 'people', text: 'He leaves big pharma for a company of about 15 people with no labs of its own.'},
        {year: 2007, title: 'PSI-7977 made', kind: 'science', text: 'Sofia\'s team isolates the more active single isomer of its phosphoramidate prodrug. It will become sofosbuvir.'},
        {year: 2009, date: '03/2009', title: 'First human studies of the prodrug', kind: 'clinical', text: 'PSI-7851, the mixture containing PSI-7977, shows the liver-targeting idea works in patients.'},
        {year: 2011, title: 'First direct-acting antivirals approved', kind: 'regulatory', text: 'Telaprevir and boceprevir, both still taken with interferon and ribavirin.'},
        {year: 2011, date: '11/06/2011', title: 'ELECTRON: 100% cured', kind: 'clinical', text: 'All 40 genotype 2 and 3 patients in the randomized groups cured, including 10 given no interferon.'},
        {year: 2011, date: '11/21/2011', title: 'Gilead agrees to buy Pharmasset', kind: 'business', text: '$137 a share, about $11 billion. Gilead\'s stock falls 9% that day.'},
        {year: 2012, date: '01/2012', title: 'Deal closes at $11.2 billion', kind: 'business', text: 'Bristol-Myers Squibb, meanwhile, pays $2.5 billion for Inhibitex and its rival nucleotide.'},
        {year: 2012, date: '2012', title: 'Rival nucleotide fails', kind: 'setback', text: 'Bristol-Myers Squibb\'s BMS-986094 (from Inhibitex) is stopped after cases of heart failure.'},
        {year: 2013, date: '04/2013', title: 'Phase 3 results published', kind: 'clinical', text: 'NEUTRINO (90% cured) and FISSION (non-inferior to interferon) in the NEJM.'},
        {year: 2013, date: '10/25/2013', title: 'FDA advisers vote unanimously', kind: 'regulatory', text: 'Patients including Onaiwu Ogbomo testify.'},
        {year: 2013, date: '12/06/2013', title: 'Sovaldi approved', kind: 'regulatory', text: 'Priority review and breakthrough therapy designation. Price: $84,000 per 12-week course.'},
        {year: 2014, date: '07/11/2014', title: 'Senators demand pricing documents', kind: 'setback', text: 'Ron Wyden and Chuck Grassley write to Gilead, starting an 18-month investigation.'},
        {year: 2014, date: '09/2014', title: 'Generic licenses for 91 countries', kind: 'business', text: 'Seven Indian manufacturers licensed to make sofosbuvir for developing countries.'},
        {year: 2014, date: '10/10/2014', title: 'Harvoni approved', kind: 'regulatory', text: 'The first once-daily single-tablet, interferon-free regimen for genotype 1. $94,500 per 12 weeks.'},
        {year: 2014, date: '12/22/2014', title: 'Express Scripts picks AbbVie', kind: 'business', text: 'The largest pharmacy benefit manager makes Viekira Pak its preferred genotype 1 drug and drops Gilead\'s.'},
        {year: 2015, date: '2015', title: 'Sales peak at $19.1 billion', kind: 'business', text: 'Gilead\'s hepatitis C franchise, mostly Harvoni.'},
        {year: 2015, date: '12/01/2015', title: 'Senate report released', kind: 'setback', text: '"The Price of Sovaldi and Its Impact on the U.S. Health Care System."'},
        {year: 2016, date: '03/2016', title: 'Australia buys unlimited access', kind: 'business', text: 'A$1.2 billion over five years for as many treatments as needed.'},
        {year: 2016, date: '2016', title: 'Epclusa and the Lasker award', kind: 'people', text: 'Gilead launches a pan-genotypic pill; Bartenschlager, Rice and Sofia win the Lasker award.'},
        {year: 2019, date: '01/2019', title: 'Authorized generics at $24,000', kind: 'business', text: 'Gilead\'s subsidiary Asegua launches lower-priced versions of Epclusa and Harvoni.'},
        {year: 2019, date: '07/2019', title: 'Louisiana subscription starts', kind: 'business', text: 'A capped payment for unlimited treatment for Medicaid patients and prisoners.'},
        {year: 2020, date: '10/2020', title: 'Nobel Prize for discovering HCV', kind: 'people', text: 'Harvey Alter, Michael Houghton and Charles Rice.'},
      ]},

      // ---------------- Building the drug ----------------
      {type: 'story', kicker: 'Building the drug', title: 'A disguise that only the liver can remove', tocTitle: 'Building the drug', html: `
        <p>In 2005 Michael Sofia, a medicinal chemist who had spent years at large drug companies, took a job that friends told him not to take. Pharmasset, he later wrote, had about 15 staff, "limited capabilities, no labs, and little money." It did have a hepatitis C compound, and Sofia thought it had promise.</p>
        <p>The compound was called PSI-6130, a look-alike of the building block cytidine (the "C" in RNA) with two small changes on its sugar ring: a fluorine atom and a methyl group. Those changes made it a decoy for the NS5B copier. In lab tests it stopped viral copying, worked against several genotypes, seemed safe, and the virus had trouble becoming resistant. Pharmasset developed a version for swallowing, RG7128 (later called mericitabine), in partnership with Roche. It gave the first hint that an interferon-free combination could work in people. But it was a weak drug. Patients needed grams of it several times a day, and the body turned much of it into a different molecule that seemed useless.</p>
        <h3>The clue in the waste product</h3>
        <p>Every nucleotide drug has the same problem. What you swallow is not the active drug. To work, it must be converted inside the cell into a [[triphosphate]], with three phosphate groups attached, because that is the form the polymerase uses. Cells add the phosphates one at a time using enzymes called [[kinase|kinases]].</p>
        <p>Phil Furman, who ran Pharmasset's biology and metabolism work, traced exactly what happened to PSI-6130 in liver cells. The "useless" metabolite turned out to be the key. The cell converted some of the drug into a uridine version (the "U" building block) with the same fluorine and methyl changes. When that uridine version reached the triphosphate stage, it blocked NS5B well and lasted a long time in liver cells: long enough, potentially, for one pill a day. The problem was the very first step. Cells' kinases would not add the first phosphate to the uridine version, so if you gave it as a drug, it never got activated.</p>
        <p>The obvious fix was to give the drug with the first phosphate already attached. The obvious objection was that it could not work. A phosphate group carries a negative electrical charge. Charged molecules do not pass through the fatty membranes of gut cells or liver cells, and naked phosphates fall apart in the body. Nobody had ever delivered a nucleotide with its phosphate into humans in a way that worked.</p>
        <h3>Using the liver as the key</h3>
        <p>Sofia's insight was to turn anatomy into a delivery system. Everything absorbed from the gut travels first through the portal vein to the liver, the body's main chemical processing plant, before it reaches the rest of the body. This is called [[first-pass metabolism]], and drug designers usually treat it as a nuisance because the liver destroys drugs. For a hepatitis C drug it was an opportunity. If the phosphate could be hidden under a chemical disguise that liver enzymes happen to remove, the drug would be absorbed intact, unmasked mostly inside liver cells, and trapped there as a charged molecule, exactly where the virus lives.</p>
        <p>The team chose a [[phosphoramidate]] disguise, part of a family of "ProTide" chemistry pioneered by Chris McGuigan's group at Cardiff University: the phosphate is capped with an amino acid ester on one side and a phenol ring on the other. The disguise hides the charge. Inside a liver cell, enzymes clip off the ester, the phenol falls away, another enzyme removes the amino acid, and what remains is the monophosphate that the cell's kinases can finish off.</p>
        <blockquote class="pull">Although the logic seemed sound, at least to me, there was considerable skepticism among most of those whose opinion was sought about the idea as to whether or not this would work.<cite>Michael Sofia, Cell, 2016</cite></blockquote>
        <p>The first disguised uridine molecule worked in the replicon assay. That began a long screening effort, which the team had to invent from scratch because no one had tried to optimize molecules like these before. The chosen candidate, PSI-7851, went into patients and showed for the first time that a phosphate prodrug could work in humans.</p>
        <h3>Left hand, right hand</h3>
        <p>There was one more problem. The phosphorus atom in the disguise can be arranged two ways, like a left and a right hand, so PSI-7851 was a 50:50 mix of two [[isomer|isomers]], one more active than the other. Regulators and chemists both prefer a single, defined molecule. At the time there was no easy way to separate the two, let alone make just one. The team found a way to crystallize the more potent isomer, solved its structure with X-rays, and then invented a new chemical route to make it directly. That single isomer, PSI-7977, was sofosbuvir. The generic name is widely reported to nod to Sofia himself.</p>
        <p>Between 2008 and 2011, according to the Senate investigation, Pharmasset spent $62.4 million on research and development for PSI-7977. A separate academic analysis found about $61 million in related NIH grants going to the underlying science, mostly indirectly, over the preceding years. Both numbers become part of the pricing argument later.</p>`},

      {type: 'figure', title: 'The delivery route', intro: 'Follow the tablet from gut to target. Hover or tap each stage.',
        svg: prodrugSvg,
        hotspots: {
          pill: {title: 'The tablet', text: 'Sofosbuvir 400 mg once a day. Taken by mouth, it is a [[prodrug]]: inactive until the liver unpacks it.'},
          gut: {title: 'Surviving the gut', text: 'A bare nucleotide monophosphate is charged and unstable: it would neither survive nor cross the gut wall. The phosphoramidate disguise hides the charge so the molecule is absorbed.'},
          portal: {title: 'Liver first', text: 'Blood from the gut drains through the portal vein straight to the liver. This [[first-pass metabolism]] normally destroys drugs; here it delivers the drug where the virus lives.'},
          step1: {title: 'The disguised drug', text: 'Blue: the uridine look-alike with its fluorine and methyl changes. Yellow: the phosphate. Magenta: the amino-acid ester and phenol that hide the phosphate\'s charge.'},
          step2: {title: 'Step 1: the ester is cut', text: 'The enzymes cathepsin A and carboxylesterase 1, abundant in liver cells, cut the ester. The phenol then falls off on its own. This step only works on one of the two mirror-image forms, one reason the single isomer mattered.'},
          step3: {title: 'Step 2: the amino acid comes off', text: 'An enzyme called HINT1 removes the amino acid, leaving the monophosphate. The molecule is now charged and trapped inside the cell.'},
          active: {title: 'Step 3: fully armed', text: 'The cell\'s own [[kinase|kinases]] add two more phosphates to make the active [[triphosphate]], which lasts long enough in liver cells for once-daily dosing.'},
          target: {title: 'Step 4: the target', text: 'The triphosphate is taken up by the viral [[NS5B polymerase]] as if it were a normal "U" and stops the new RNA strand.'},
        },
        caption: 'Activation pathway from Murakami et al., J Biol Chem 2010, and Sofia et al., J Med Chem 2010. Molecule shapes are schematic.'},

      {type: 'custom', title: 'Design the molecule: which version reaches the target?', intro: 'Pick a version of the drug and send it down the route. Each gate is a real barrier Pharmasset\'s chemists had to beat.',
        html: `<div class="card">
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px" id="pdBtns">
            <button class="btn" data-m="nuc">Plain uridine look-alike</button>
            <button class="btn" data-m="mp">Bare monophosphate</button>
            <button class="btn" data-m="c">PSI-6130 (the "C" version)</button>
            <button class="btn" data-m="mix">PSI-7851 (isomer mix)</button>
            <button class="btn" data-m="sof">PSI-7977 (sofosbuvir)</button>
          </div>
          <div id="pdSvg"></div>
          <div id="pdOut" style="margin-top:8px;font-size:15px;line-height:1.55;min-height:70px">Choose a molecule above.</div>
        </div>`,
        init(root) {
          const gates = ['Absorbed from gut', 'Reaches liver intact', 'Becomes triphosphate', 'Potent, one molecule'];
          const gx = [180, 360, 540, 720];
          const M = {
            nuc: {fail: 2, text: 'Absorbed and reaches liver cells fine, but the cell\'s kinases will not add the <b>first phosphate</b> to this uridine look-alike, so it never becomes the active triphosphate. Stuck at gate 3. This is the block Phil Furman\'s metabolism studies found.'},
            mp: {fail: 0, text: 'The first phosphate is already on, which solves the kinase block, but a bare phosphate is <b>negatively charged and unstable</b>. It falls apart and cannot cross the gut wall or enter cells. Fails at gate 1.'},
            c: {fail: 3, partial: true, text: 'Works: it gets activated and blocks NS5B. But potency is modest, patients needed grams several times a day, and much of it turns into the uridine metabolite. It reaches the end, weakly. Its prodrug RG7128 (mericitabine) was developed with Roche but was not the drug Sofia\'s team wanted.'},
            mix: {fail: 3, partial: true, text: 'The phosphoramidate disguise works: absorbed, unmasked in the liver, activated, potent in patients. But it is a <b>50:50 mix of two mirror-image isomers</b>, one more active than the other. A drug should be one defined molecule. Nearly there.'},
            sof: {fail: 4, text: 'Disguised to be absorbed, unmasked mostly in the liver, converted to a long-lasting triphosphate, a single crystallized isomer made by a new synthetic route. <b>Passes every gate.</b> This is sofosbuvir.'},
          };
          const svg = (m, pos) => {
            let s = '<svg viewBox="0 0 900 170"><line x1="40" y1="70" x2="860" y2="70" class="il-line2 il-dash"/>';
            gates.forEach((g, i) => {
              let cls = 'il-paper il-line';
              if (m) { const r = M[m]; if (i < r.fail) cls = 'il-3'; else if (i === r.fail && r.fail < 4) cls = r.partial ? 'il-4' : 'il-7'; }
              s += `<circle cx="${gx[i]}" cy="70" r="22" class="${cls}"/><text x="${gx[i]}" y="76" text-anchor="middle" class="il-text">${i + 1}</text><text x="${gx[i]}" y="118" text-anchor="middle" class="il-small">${g}</text>`;
            });
            s += `<g style="transition: transform 1.4s ease-in-out; transform: translate(${pos}px, 0px)"><circle cx="40" cy="70" r="13" class="il-1"/></g>`;
            s += '<text x="40" y="118" text-anchor="middle" class="il-small">Tablet</text><text x="860" y="118" text-anchor="middle" class="il-small">NS5B</text><circle cx="860" cy="70" r="10" class="il-2"/></svg>';
            return s;
          };
          const box = root.querySelector('#pdSvg'); box.innerHTML = svg(null, 0);
          root.querySelectorAll('[data-m]').forEach(b => b.onclick = () => {
            const m = b.dataset.m, r = M[m];
            box.innerHTML = svg(m, 0);
            const stopX = r.fail >= 4 ? 806 : gx[r.fail] - 40 - (r.partial ? -8 : 30);
            requestAnimationFrame(() => requestAnimationFrame(() => { const g = box.querySelector('g'); if (g) g.style.transform = `translate(${stopX}px, 0px)`; }));
            root.querySelector('#pdOut').innerHTML = r.text;
            root.querySelectorAll('[data-m]').forEach(x => { x.setAttribute('aria-pressed', x === b); x.classList.toggle('primary', x === b); });
          });
        }},

      {type: 'callout', variant: 'product', heading: 'Product lens: a payload only the destination can unpack', html: `
        <p>Sofosbuvir's design is like shipping an encrypted payload that only the target environment holds the key to: it travels inert, passes the gateways that would reject it, and "decrypts" only where it is needed. Or think of it as fixing a bug in the <em>delivery layer</em> rather than the core algorithm. The chemistry that hit the target (the fluorine-methyl sugar) already existed in PSI-6130. The breakthrough was packaging.</p>
        <p><b>Where the analogy breaks:</b> in software, you can ship a packaging fix in a sprint and roll it back if it fails. Here each new version needed years of animal and human testing, the "keys" (liver enzymes) vary between people, and a delivery bug can mean a toxic molecule builds up in the wrong organ. Bristol-Myers Squibb's rival nucleotide was stopped in 2012 after heart failure cases. You cannot A/B test your way through that.</p>`},

      // ---------------- The deal ----------------
      {type: 'story', kicker: 'The deal', title: 'Project Harry', tocTitle: 'The $11B bet', html: `
        <p>By 2011 hepatitis C had become the hottest race in antiviral drugs. Every large company with an antiviral business wanted the first all-oral, interferon-free cure. Gilead Sciences was a natural contender: it had become one of the world's most successful biotech companies by selling HIV drugs, several of them nucleotide analogues, including emtricitabine, one of Schinazi's inventions. But Gilead's own hepatitis C program was struggling. Pharmasset's executives told their board in 2010 that "Gilead is left wondering what to do in HCV." That June Gilead hired John McHutchison, a well-known liver specialist who had consulted for Pharmasset, to lead its liver disease work. In September 2011, as talks with Pharmasset began, Gilead had to change the design of trials of its own hepatitis C drug, GS-9190, after patients reported side effects.</p>
        <p>Gilead and its bankers code-named the acquisition "Project Harry". Pharmasset was "Harry"; Gilead was "Gryffindor". In a July 2011 presentation, Gilead's chief operating officer John Milligan stated that "Harry is the best, and most timely, way to bring a nucleotide to Gilead's portfolio," and that Pharmasset was "unlikely to be available a year from now" because other companies found it attractive.</p>
        <p>Then the data got better. On November 6, 2011, Pharmasset presented results from a small Phase 2 trial called ELECTRON: every one of the 40 randomized genotype 2 and 3 patients given sofosbuvir plus ribavirin for 12 weeks was cured, including 10 who received no interferon at all. Over 11 weeks of negotiation Gilead raised its offer from $100 a share to $137, 37% more.</p>
        <p>On November 21, 2011, the companies announced the deal: $137 per share in cash, about $11 billion. That was an 89% premium to Pharmasset's closing price the previous Friday, and 59% above its highest price ever. Gilead would fund it with cash and new debt. For a company of Gilead's size, it was a bet on one molecule that had not finished Phase 3.</p>`},

      {type: 'decision', title: 'Your call: pay $11 billion?', role: 'You are on Gilead\'s board, November 2011',
        scenario: 'Pharmasset\'s sofosbuvir has cured every patient in a small Phase 2 study, but Phase 3 has barely started and no genotype 1 interferon-free data exist at scale. The asking price is $137 a share, about $11 billion, nearly double the market price. Analysts estimate you would need about $4 billion a year in hepatitis C sales to justify it. Your own HCV pipeline has just hit a safety snag. Several competitors are circling.',
        options: [
          {label: 'Pay the $11 billion. The best asset in the race rarely comes cheaper later.', outcome: 'You take on debt and your stock drops about 9% the day the deal is announced. If Phase 3 fails or a safety problem appears, you will have spent a third of your company\'s value on nothing. If it works, you own the backbone of every leading regimen for years.'},
          {label: 'Walk away and keep building your own HCV drugs.', outcome: 'You avoid the risk and the debt. But your internal program is behind, the field is moving "faster than anyone anticipated" (your own advisers\' words), and nucleotides are the hardest piece to build. Most likely you arrive late to a market someone else has shaped.'},
          {label: 'Buy a cheaper rival nucleotide company instead.', outcome: 'Tempting: Inhibitex, with its own nucleotide candidate, sold to Bristol-Myers Squibb for $2.5 billion weeks later. But that drug was stopped in 2012 after patients developed heart failure. A cheaper asset is only cheaper if it works.'},
          {label: 'Offer a licensing or co-development deal to limit your exposure.', outcome: 'Lower risk, but Pharmasset has multiple suitors and knows it; its board has already hired Morgan Stanley after unsolicited offers. A partnership that shares the upside is unlikely to beat an all-cash bid from someone else.'},
        ],
        reality: 'Gilead paid. Bernstein analyst Geoffrey Porges wrote: "For Gilead to give up effectively one-third of their value for an unproven asset still subject to significant ongoing clinical risk seems remarkable." The deal closed on January 17, 2012 at $11.2 billion. Ten days before it closed, McHutchison had privately called it a "bargain" in an email to Gilead\'s banker. In 2014 alone, Gilead\'s hepatitis C sales were $12.4 billion, about three times the level analysts said was needed to justify the price. In hindsight it paid for itself many times over.'},

      {type: 'callout', variant: 'whatif', heading: 'What if Pharmasset had stayed independent?', html: `
        <p>Pharmasset's own financial models, presented to its board days before the sale, assumed a price of <b>$36,000</b> per course in the United States. Morgan Stanley slides shown to the board that same day suggested that at $72,000 per course the company would have been worth about $290 a share, more than twice what Gilead paid. The Senate staff concluded Pharmasset "did not intend to sell PSI-7977 for prices exceeding $50,000."</p>
        <p>An independent Pharmasset would have had to fund Phase 3, build a sales force and launch globally, and it might have priced lower and treated more people early, or been bought later at a higher price. We cannot know. What is clear is that the $84,000 price was a Gilead decision, not something inherited from the inventors.</p>`},

      {type: 'callout', variant: 'product', heading: 'Product lens: buy versus build, and paying for de-risking', html: `
        <p>This is the classic buy-versus-build decision, at a scale where the "build" option was failing. Gilead paid a large premium for a product that had shown it worked in real users (ELECTRON) but had not yet scaled (Phase 3). Tech acquirers do the same when they pay up after product-market fit instead of building a competitor.</p>
        <p><b>Where it breaks:</b> a software acquirer can usually see the product working at scale before buying. Gilead was paying for about 700 patients' worth of data, with a real chance that a rare toxicity would appear in thousands. And unlike software, the asset's value depended on a 20-year patent clock that was already running.</p>`},

      // ---------------- Trials ----------------
      {type: 'story', kicker: 'The trials', title: 'Testing a cure, fast', tocTitle: 'Trial design', html: `
        <p>Hepatitis C trials have an unusual gift: an endpoint that is both quick and meaningful. In cancer or heart disease, trials often have to wait years to count deaths, or use a [[surrogate endpoint]] such as tumor shrinkage that may not translate into longer lives. In hepatitis C, the [[sustained virologic response]] (no detectable virus 12 weeks after treatment ends) stands in for the outcomes that matter (less cirrhosis, less cancer, fewer deaths), and long-term studies had shown that people who achieve it rarely relapse and do much better. Regulators accepted SVR as the primary endpoint. A whole trial, from first dose to answer, could take less than a year.</p>
        <p>Gilead ran four Phase 3 trials at speed, each designed to answer a different question for a different group of patients:</p>
        <ul>
          <li><b>NEUTRINO</b> (genotype 1, 4, 5 or 6, never treated; 327 patients): sofosbuvir plus peginterferon and ribavirin for just 12 weeks. There was no comparison group, an [[open-label]] single-arm design, because the question was whether 12 weeks could match or beat historical results from 24 to 48 weeks. Result: 90% cured.</li>
          <li><b>FISSION</b> (genotype 2 or 3, never treated; 499 patients): sofosbuvir plus ribavirin for 12 weeks, with <em>no interferon</em>, against the standard 24 weeks of peginterferon plus ribavirin. This was a [[noninferiority trial]]: the aim was to show the all-oral regimen was not meaningfully worse, since it was obviously easier to take.</li>
          <li><b>POSITRON</b> (genotype 2 or 3, unable to take interferon): sofosbuvir plus ribavirin against [[placebo]]. 78% cured versus 0%.</li>
          <li><b>FUSION</b> (genotype 2 or 3, previously failed interferon): 12 versus 16 weeks. 50% versus 73%; longer was better, especially for genotype 3.</li>
        </ul>
        <p>Open-label designs and single arms make statisticians nervous, and rightly so in most diseases. They were defensible here because SVR is an objective lab measure (a patient cannot talk their way into an undetectable [[viral load]]), untreated chronic hepatitis C almost never clears on its own, and the historical benchmarks were well known.</p>`},

      {type: 'trial', title: 'FISSION: pill versus injections', intro: 'Genotypes 2 and 3 were thought to be the "easier" strains. Here, 12 weeks of an all-oral regimen went up against 24 weeks of the interferon standard.',
        design: {name: 'FISSION', phase: 'Phase 3', blinding: 'Open-label', years: 'Published April 2013', n: 499, population: 'Adults with genotype 2 or 3 chronic hepatitis C, never treated', randomization: '1:1',
          arms: [{name: 'Sofosbuvir + ribavirin', n: 256, desc: '12 weeks, all oral, no interferon'}, {name: 'Peginterferon + ribavirin', n: 243, desc: '24 wk: weekly shots plus pills', control: true}],
          endpoint: 'SVR12 (cure)',
          details: {'Primary endpoint': '[[SVR12]]: undetectable virus 12 weeks after treatment', 'Design': '[[noninferiority trial|Non-inferiority]]', 'Sponsor': 'Gilead Sciences', 'Published': 'Lawitz et al., NEJM 2013'}},
        predict: {q: 'What share of patients do you think were cured in each arm?', options: ['Sofosbuvir far better: about 95% versus 70%', 'About the same: roughly two-thirds in both arms', 'Interferon clearly better, because it was given for twice as long'], answer: 1,
          explain: 'Both arms cured 67%. That met the non-inferiority goal, with fewer side effects in the sofosbuvir arm, so a pill-only regimen matched a half-year of injections. But the average hid a split: 97% of genotype 2 patients were cured on sofosbuvir-ribavirin, but only 56% of genotype 3. Genotype 3 would need longer treatment and, eventually, better partner drugs.'},
        results: [
          {kind: 'bar', title: 'Cure rate (SVR12), all patients', unit: '%', categories: ['Sofosbuvir + ribavirin, 12 wk', 'Peginterferon + ribavirin, 24 wk'], series: [{name: 'SVR12', values: [67, 67]}], colorByCategory: true, labelWidth: 230, horizontal: true, yMax: 100},
          {kind: 'bar', title: 'Sofosbuvir + ribavirin arm, by genotype', unit: '%', categories: ['Genotype 2', 'Genotype 3'], series: [{name: 'SVR12', values: [97, 56]}], horizontal: true, labelWidth: 230, yMax: 100, note: 'Source: Lawitz et al., NEJM 2013.'}],
        takeaway: 'An all-oral, interferon-free regimen matched the injectable standard in half the time with fewer side effects. For genotype 1, the largest US group, the approved regimen still included interferon (NEUTRINO, 90% cured). A truly interferon-free pill for genotype 1 needed a partner drug.'},

      {type: 'story', title: 'Approval, and the pill that replaced it', tocTitle: 'Regulators and Harvoni', html: `
        <p>The FDA granted [[priority review]], which shortens the review clock to six months for drugs offering a significant improvement, and [[breakthrough therapy designation]], a then-new status created by Congress in 2012 that gives drug developers more intensive FDA guidance. The Senate staff later noted that these policies compressed the timeline so that Sovaldi faced little competition in genotype 1 for nearly a year.</p>
        <p>The FDA's antiviral [[advisory committee]] met on October 25, 2013 and voted unanimously in favor. On December 6, 2013, the FDA approved Sovaldi, 400 mg once a day, as part of combination therapy for genotypes 1 to 4. The [[label]] reflected the trials: genotype 1 and 4 patients took it for 12 weeks with peginterferon and ribavirin; genotype 2 and 3 patients could take it with ribavirin alone, no interferon. In the trials, cure rates ranged from 50 to 90% depending on the group.</p>
        <p>Doctors did not wait for the label to catch up. In January 2014, the liver disease society AASLD recommended combining Sovaldi with Johnson &amp; Johnson's protease inhibitor simeprevir (Olysio) for genotype 1 patients who could not take interferon, even though that combination was not approved. By mid-2014 about a third of Sovaldi-based treatments used it. It worked well, and because both drugs were billed at full price, it cost far more than either alone.</p>
        <h3>Harvoni</h3>
        <p>The real target was always a single pill, taken once a day, no injections, no ribavirin. Gilead combined sofosbuvir with its own [[NS5A]] inhibitor, [[ledipasvir]], in one tablet. Hitting two different viral proteins at once makes it far harder for the virus to escape through mutation, the same logic as HIV combination therapy. The ION-1 trial tested it in 865 previously untreated genotype 1 patients.</p>`},

      {type: 'trial', title: 'ION-1: one pill a day', intro: 'Four arms tested whether adding ribavirin or doubling the treatment length improved on 12 weeks of the single tablet.',
        design: {name: 'ION-1', phase: 'Phase 3', blinding: 'Open-label', years: 'Published May 2014', n: 865, population: 'Adults with genotype 1 chronic hepatitis C, never treated; 16% with cirrhosis', randomization: '1:1:1:1',
          arms: [{name: 'Ledipasvir-sofosbuvir, 12 wk', desc: 'one tablet a day'}, {name: 'Same + ribavirin, 12 wk', desc: 'tablet plus ribavirin'}, {name: 'Ledipasvir-sofosbuvir, 24 wk', desc: 'one tablet a day'}, {name: 'Same + ribavirin, 24 wk', desc: 'tablet plus ribavirin'}],
          endpoint: 'SVR12 (cure)',
          details: {'Primary endpoint': '[[SVR12]]', 'Patients': '865 treated; 67% genotype 1a; 12% Black', 'Sponsor': 'Gilead Sciences', 'Published': 'Afdhal et al., NEJM 2014'}},
        predict: {q: 'Did adding ribavirin or treating for 24 weeks help?', options: ['Yes: 24 weeks with ribavirin was clearly best', 'No: all four arms cured 97 to 99%', 'Ribavirin helped, but only at 12 weeks'], answer: 1,
          explain: 'All four arms landed at 97 to 99%. Twelve weeks of the single tablet alone cured 99%. No patient in either 12-week group stopped treatment because of side effects. A companion trial, ION-3, found 8 weeks cured 94% of patients without cirrhosis.'},
        results: [
          {kind: 'bar', title: 'Cure rate (SVR12) by arm', unit: '%', categories: ['12 wk', '12 wk + ribavirin', '24 wk', '24 wk + ribavirin'], series: [{name: 'SVR12', values: [99, 97, 98, 99]}], yMax: 100, note: 'Source: Afdhal et al., NEJM 2014 (ION-1).'}],
        takeaway: 'More was not better. A single pill for 12 weeks (8 for some patients without cirrhosis) became the standard. The FDA approved Harvoni on October 10, 2014, at $94,500 for 12 weeks.'},

      {type: 'chart', title: 'Thirty years of cure rates in one chart', intro: 'Each bar is from a different trial and population, so read it as a trend, not a head-to-head comparison.',
        chart: {kind: 'bar', title: 'Share of patients cured (sustained virologic response)', unit: '%', horizontal: true, labelWidth: 330,
          categories: ['Interferon alone, 48 weeks', 'Interferon + ribavirin, 48 weeks', 'Peginterferon + ribavirin, 48 wk (genotype 1)', 'Peginterferon + ribavirin, 48 wk (all)', 'Sofosbuvir + peg/ribavirin, 12 wk (NEUTRINO)', 'Harvoni, 12 wk, one pill (ION-1)'],
          series: [{name: 'Cured', values: [16, 42, 46, 56, 90, 99], notes: ['Historical, cited in Senate report', 'Historical, cited in Senate report', 'Fried et al., NEJM 2002', 'Fried et al., NEJM 2002', 'Lawitz et al., NEJM 2013; 98% genotype 1 or 4', 'Afdhal et al., NEJM 2014']}],
          note: 'Older figures measured SVR 24 weeks after treatment; newer ones at 12 weeks. Sources: Senate Finance Committee report (citing Strader and Seeff 2012); Fried 2002; Lawitz 2013; Afdhal 2014.'},
        takeaway: 'The jump is not only in the cure rate. Treatment went from nearly a year of injections with brutal side effects to a few months of one pill, which meant almost anyone could be treated, including people who had been excluded before.'},

      // ---------------- The price ----------------
      {type: 'story', kicker: 'The money', title: 'How $84,000 was chosen', tocTitle: 'Setting the price', html: `
        <p>We know an unusual amount about how Sovaldi's price was set, because in July 2014 Senators Ron Wyden (a Democrat from Oregon) and Chuck Grassley (a Republican from Iowa) demanded Gilead's internal documents. Over 18 months their staff reviewed more than 20,000 pages and interviewed over 100 people. Their report, published on December 1, 2015, is the best public record of how a drug company prices a breakthrough.</p>
        <p>The process ran through a group of top executives called the global pricing committee, including chief executive John Martin, chief financial officer Robin Washington and John Milligan. The starting point was not the cost of research or manufacturing. It was the price of what already existed. The then-current genotype 1 standard, Vertex's Incivek taken with 24 to 48 weeks of peginterferon and ribavirin, cost about $82,500 by Gilead's calculation. Sovaldi cured more people, faster, with fewer side effects. On that logic, Gilead's analysis said, clinical and projected real-world cure rates could justify $82,000 to $121,000 for a 12-week course.</p>
        <p>The team also rated "softer issues" at each possible price: whether medical societies would add price "asterisks" to their guidelines, whether advocacy groups would protest, whether key doctors would withdraw support, and the likelihood of letters or hearings from Congress. They concluded that $80,000 to $85,000 would cause an outcry but that, in their words, "[t]his price will allow Gilead to capture value for the product without going to a price where the combination of external factors and payer dynamics could hinder patient access to uncomfortable levels."</p>
        <p>Compare that to the numbers around the acquisition. Pharmasset's own models had assumed $36,000. Gilead's bankers, when it was buying Pharmasset, had modeled around $65,000, with a range of $55,000 to $75,000. Manufacturing was a trivial share of any of these prices: Pharmasset had estimated it at about 1 to 1.5% of a $30,000 to $50,000 course. The Senate staff found that the Gilead executive who led the pricing recommendation did not know the manufacturing cost, and concluded there was "scant evidence" that recovering the $11.2 billion acquisition cost played a significant role in the price.</p>
        <p>The report also argued that Sovaldi's price was a stepping stone. Gilead expected its all-oral combination pill a year later. Its advisers had even modeled a "convenience bump" for a single-tablet regimen. Pricing Sovaldi high set a floor for Harvoni, which launched at $94,500, and for competitors, who priced close behind.</p>
        <p>Gilead's internal documents framed the price as a "value premium" for higher cure rates, better tolerability, shorter treatment and the path to an all-oral regimen, benchmarked against what payers already paid for the older, worse regimens. Defenders of the price add that a cure costs far less than a lifetime of liver disease, cancer care or a transplant. The company told investigators its primary concern was to treat as many patients as possible. The Senate staff disagreed, concluding that Gilead's "marketing, pricing, and contracting strategies were focused on maximizing revenue — even as the company's analysis showed a lower price would allow more people to be treated."</p>`},

      {type: 'decision', title: 'Your call: set the price', role: 'You are on Gilead\'s global pricing committee, mid-2013',
        scenario: 'Sovaldi will be approved within months. The current genotype 1 regimen (a protease inhibitor with months of interferon) costs roughly $65,000 to $83,000 and cures far fewer people. A huge backlog of warehoused patients is waiting. Most of them are covered by insurers and public programs with fixed annual budgets. You have a year, maybe less, before AbbVie\'s competing regimen arrives. What list price do you recommend for 12 weeks?',
        options: [
          {label: '$36,000: what Pharmasset modeled. Treat as many as possible.', outcome: 'Far fewer payers restrict access and many more patients are treated in year one. But you have signalled that a cure is worth less than the inferior drugs it replaces, you anchor Harvoni and every future regimen lower, and your board will ask why you paid $11 billion for a drug you priced below the old standard.'},
          {label: '$65,000: the bankers\' base case at acquisition, roughly parity with the old regimens.', outcome: 'A defensible "no premium for being better" price. Payers still face big bills because so many patients arrive at once, so some restrictions appear anyway, but you are harder to paint as greedy. You leave billions of dollars on the table during your year of little competition.'},
          {label: '$84,000: just under the level where your research predicts payers will clamp down hard.', outcome: 'Maximum revenue while avoiding the worst access restrictions, if your research is right. You expect an outcry. You are betting payers will absorb it.'},
          {label: '$110,000 or more: your own value analysis justifies up to about $121,000.', outcome: 'On cost per cure versus the old regimens you can argue it. In practice you would trigger the congressional hearings, guideline "asterisks" and hard payer restrictions your team warned about, and hand AbbVie an easy way to win on price.'},
        ],
        reality: 'Gilead chose $84,000 ($1,000 a pill). It sold $10.3 billion of Sovaldi in 2014, one of the largest first years for any drug. But payers reacted more strongly than Gilead expected: many state Medicaid programs limited treatment to the sickest patients, and the Senate report concluded that the access restrictions reduced the number of people who could have been treated. Gilead offered only small extra discounts until competition forced much larger ones.'},

      {type: 'story', kicker: 'The backlash', title: 'Rationing a cure', tocTitle: 'The backlash', html: `
        <p>A single course of Sovaldi cost more than many Americans earn in a year. That alone would have caused controversy. What made it a crisis was the number of patients. A drug for a rare disease can cost $300,000 and barely register in an insurer's budget. Sovaldi was aimed at millions of people, many of them covered by [[Medicaid]], prisons and other public programs whose budgets are set in advance.</p>
        <p>US spending on Sovaldi in 2014 was $7.9 billion, according to IMS Health, more than the United States had spent on all hepatitis C drugs from 2010 to 2013 combined. Medicaid programs spent more than $1 billion on Sovaldi in 2014 and still treated fewer than 2.4% of their enrolled hepatitis C patients.</p>
        <p>States responded by rationing, using [[prior authorization]] rules. A study in the <em>Annals of Internal Medicine</em> by Soumitri Barua and colleagues examined 2014 Medicaid criteria: of 42 states with known rules, 74% limited sofosbuvir to people with advanced scarring (Metavir F3) or cirrhosis (F4). In other words, patients had to wait until their livers were badly damaged. 88% of states included drug or alcohol use in eligibility criteria, half required a period of abstinence, and two-thirds restricted which doctors could prescribe. The authors argued some restrictions appeared to violate federal Medicaid law, which requires states to cover drugs consistent with their FDA labels. Many private insurers applied similar rules.</p>
        <p>The rationing was not a simple story of greed versus need. From a state budget officer's point of view, treating every eligible Medicaid patient in one year at list price could have consumed a large share of the entire drug budget. Treating the sickest first had a medical logic: they had the most to lose. But fibrosis rules also meant that people who could have been cured easily were left to get sicker, and that the virus kept spreading in the meantime.</p>
        <h3>Competition arrives</h3>
        <p>On December 19, 2014, the FDA approved AbbVie's Viekira Pak, a multi-tablet interferon-free regimen for genotype 1 with cure rates comparable to Harvoni's, at a base price of $83,319. Three days later, Express Scripts, the largest US [[pharmacy benefit manager]], announced it would make Viekira Pak its preferred genotype 1 treatment and stop covering Sovaldi and Harvoni for those patients. AbbVie had offered bigger discounts than Gilead had up to then. It was an exclusive deal: a middleman using its control of the [[formulary]] to make two nearly equivalent drugs compete on price.</p>`},

      {type: 'decision', title: 'Your call: Express Scripts just dropped you', role: 'You run Gilead\'s US commercial business, late December 2014',
        scenario: 'The largest pharmacy benefit manager in the country has made AbbVie\'s Viekira Pak its exclusive preferred genotype 1 drug. Your Harvoni is a single pill; Viekira Pak is several pills a day with slightly more complex dosing, but doctors see no big difference in cure rates. Other PBMs and insurers are watching.',
        options: [
          {label: 'Hold the line. Harvoni is the better product and doctors will demand it.', outcome: 'Some doctors appeal for exceptions, but formulary exclusions work: many patients are switched to Viekira Pak. Other PBMs copy Express Scripts to extract AbbVie\'s discounts, and you lose share quickly.'},
          {label: 'Strike exclusive discount deals with the other big PBMs and insurers.', outcome: 'You lock up much of the remaining market and keep your list price intact, at the cost of much deeper confidential rebates. Your revenue per patient falls sharply, but volume holds.'},
          {label: 'Cut the list price publicly to end the argument.', outcome: 'You win good press and simplify things for patients whose out-of-pocket costs are tied to list prices. But every rebate contract and government price calculation resets, you give up margin with every payer at once, and competitors may simply follow.'},
        ],
        reality: 'Within weeks, Gilead struck deals with CVS Caremark (an exclusive arrangement), Anthem, Humana, Aetna, UnitedHealth and Cigna. The discounts were confidential, but Gilead reported that the gap between gross and net price for its hepatitis C drugs ([[gross-to-net]]) would widen from 22% in 2014 to 46% in 2015. An executive at another PBM said he had never seen prices for a brand-name drug class fall so quickly after a competitor arrived. The Senate report noted that one could argue "the system worked", since competition did what regulation had not, while stressing that high costs remained a serious problem for public payers.'},

      {type: 'story', title: 'One drug, many prices', tocTitle: 'Prices around the world', html: `
        <p>The United States pays more for most brand-name drugs than other rich countries, and Sovaldi was a stark example. According to Reuters reporting cited by the Senate, Western European countries paid roughly $51,000 (France) to $66,000 (Germany) for a course of Sovaldi, where national health systems negotiate a single price for the whole country.</p>
        <p>For poorer countries, Gilead used a tiered approach. In September 2014 it signed [[voluntary license|voluntary licenses]] with seven Indian generic manufacturers (Cadila Healthcare, Cipla, Hetero, Mylan, Ranbaxy, Sequent Scientific and Strides Arcolab) to make and sell sofosbuvir, and later ledipasvir, in 91 developing countries. The licensees could set their own prices and paid Gilead a 7% royalty. Gilead said these countries accounted for more than 100 million people with hepatitis C, 54% of the global total. Gilead also supplied Egypt\'s government directly, at a reported $300 per bottle.</p>
        <p>Critics, including access campaigners, argued the license left out many middle-income countries with large epidemics, such as China and Brazil, which would have to pay far more or fight patents. Today the WHO says generic treatment can cost under $50 a course in low-income countries. The gap between that and $84,000 is the gap between the cost of making a small-molecule drug and the price of owning its patent in the world's richest market.</p>`},

      {type: 'callout', variant: 'product', heading: 'Product lens: anchoring and price floors', html: `
        <p>Sovaldi's price worked like an anchor in SaaS pricing: set the first tier high, and the next product (Harvoni, with a "convenience bump") and every competitor's product price themselves against it. AbbVie priced Viekira Pak at $83,319, just under Gilead. Price discrimination by market (US list, European negotiated prices, generic licensing for poorer countries) resembles regional pricing for software.</p>
        <p><b>Where it breaks:</b> the "customer" who chooses (the doctor and patient) is not the one who pays (the insurer or state), and the payer's budget is fixed in advance, so a high price does not just lose marginal customers: it gets sick people formally rationed. And the "customer" cannot churn to a competitor if they cannot afford any product at all. Willingness to pay is not the same as ability to pay when the buyer is a state Medicaid budget.</p>`},

      // ---------------- Sales & cure paradox ----------------
      {type: 'chart', title: 'The rise and fall of a cure', intro: "Gilead's worldwide hepatitis C product sales, as reported by the company (net of rebates).",
        chart: {kind: 'line', title: 'Gilead HCV product sales (Sovaldi, Harvoni, Epclusa, Vosevi)', subtitle: 'Worldwide, US$ billions, company-reported', unit: '$B',
          series: [{name: 'HCV sales', points: [[2013, 0.139], [2014, 12.4], [2015, 19.1], [2016, 14.8], [2017, 9.1], [2018, 3.7], [2019, 2.9], [2020, 2.064], [2021, 1.881]]}],
          annotations: [{x: 2017.6, label: 'Mavyret'}, {x: 2019, label: 'Authorized generics'}],
          note: 'Sources: Gilead full-year results for 2014, 2016, 2017, 2019 and 2021. 2013 is December launch only.'},
        takeaway: 'Two years up, six years down. Part of the fall came from lower net prices as competitors arrived; part is simpler: the backlog of patients was cured and did not come back.'},

      {type: 'story', title: 'The cure paradox', tocTitle: 'The cure paradox', html: `
        <p>Most blockbuster drugs are taken for years. A patient on a cholesterol pill, an HIV regimen or an arthritis injection is a source of revenue every month for a decade or more. The business model of much of the drug industry is, in practice, a subscription.</p>
        <p>Sovaldi broke that model by working. Every patient cured was a patient who would never buy the drug again. In 2014 and 2015, the huge warehoused backlog, the sickest patients and the people with the best insurance were treated. After that, the remaining pool was smaller, harder to find (many people did not know they were infected) and harder to reach (people who inject drugs, prisoners, people without insurance). New competitors, first AbbVie's Viekira Pak and then in August 2017 its Mavyret, a pan-genotypic regimen as short as 8 weeks, pushed prices down. Gilead itself launched Epclusa, a [[pan-genotypic]] successor, in 2016. Gilead's worldwide hepatitis C sales went from $19.1 billion in 2015 to $9.1 billion in 2017 and $3.7 billion in 2018.</p>
        <p>In April 2018 a team of Goldman Sachs analysts, in a report on gene therapy, asked the question out loud: "Is curing patients a sustainable business model?" Using Gilead as their example, they noted that one-shot cures offer a very different outlook for recurring revenue than chronic therapies, and that for infectious diseases "curing existing patients also decreases the number of carriers able to transmit the virus to new patients, thus the incident pool also declines." The question drew widespread criticizm as cynical. It was also an accurate description of what had happened.</p>
        <p>From Gilead's point of view, the $11 billion acquisition paid for itself many times over. The company's hepatitis C products brought in nearly $60 billion from 2014 to 2018, according to its reported results. But the collapse left a large hole in its revenue. For the rest of the industry the lesson was double-edged. Cures can be enormously profitable, but the profit is front-loaded, which pushes companies to charge as much as possible up front while the backlog lasts, which is exactly what makes cures hard for payers to afford.</p>`},

      {type: 'explorer', title: 'Cure economics explorer', intro: 'A toy model of selling a cure. Set the net price, how many patients the health system can treat each year, the size of the diagnosed backlog at launch, and how many new diagnoses arrive each year, and how fast net prices fall once competitors arrive. Watch revenue peak and fall as the pool empties. Illustrative, not a model of Gilead\'s actual figures.',
        inputs: [
          {id: 'price', label: 'Net price per cure', min: 10, max: 100, step: 5, value: 55, fmt: v => '$' + v + 'K'},
          {id: 'cap', label: 'Patients treated per year (max)', min: 50, max: 500, step: 25, value: 250, fmt: v => v + 'K'},
          {id: 'pool', label: 'Diagnosed backlog at launch', min: 500, max: 3000, step: 100, value: 1500, fmt: v => (v / 1000).toFixed(1) + 'M'},
          {id: 'inc', label: 'New diagnoses per year', min: 0, max: 100, step: 5, value: 30, fmt: v => v + 'K'},
          {id: 'fall', label: 'Yearly net price fall once competitors arrive (from year 2)', min: 0, max: 40, step: 5, value: 10, fmt: v => v + '%'},
        ],
        compute(v, api, el) {
          let pool = v.pool, cum = 0, peak = 0, peakYr = 0; const rev = [], left = [];
          for (let y = 0; y < 12; y++) {
            const p = v.price * Math.pow(1 - v.fall / 100, y); const treated = Math.min(v.cap, pool); const r = treated * p / 1000; // $B (K patients x $K = $M; /1000 = $B)
            cum += r; if (r > peak) { peak = r; peakYr = 2014 + y; }
            rev.push([2014 + y, +r.toFixed(2)]); pool = pool - treated + v.inc; left.push([2014 + y, Math.round(pool)]);
          }
          const last = rev[rev.length - 1][1];
          el.innerHTML = `<p style="margin:0 0 8px">Peak revenue <b>$${peak.toFixed(1)}B</b> in ${peakYr}; by 2025 it is <b>$${last.toFixed(1)}B</b> a year (${peak ? Math.round(100 * last / peak) : 0}% of peak). Cumulative revenue over 12 years: <b>$${cum.toFixed(0)}B</b>. Once the backlog is gone, yearly revenue can never exceed new diagnoses × price (by 2025: $${(v.inc * v.price * Math.pow(1 - v.fall / 100, 11) / 1000).toFixed(1)}B).</p><div class="c1"></div><div class="c2"></div>`;
          api.mountChart(el.querySelector('.c1'), {kind: 'line', title: 'Annual revenue', unit: '$B', series: [{name: 'Revenue', points: rev}], note: 'Toy model: treated each year = min(capacity, remaining pool); price falls by the set percentage each year after the first.'});
          api.mountChart(el.querySelector('.c2'), {kind: 'line', title: 'Diagnosed patients still waiting (thousands, end of year)', unit: 'K', series: [{name: 'Waiting', points: left, color: 2}]});
        }},

      {type: 'callout', variant: 'lesson', heading: 'The front-loading problem', html: `
        <p>A cure concentrates a lifetime of value into one purchase. The seller wants to capture that value while the backlog lasts; the buyer has an annual budget. Both are behaving rationally, and the result is rationing. Most of the pricing innovations that followed, from subscription deals to outcomes-based contracts for gene therapies, are attempts to spread the payment out over time to match how the value arrives.</p>`},

      // ---------------- Subscription ----------------
      {type: 'story', kicker: 'A new way to pay', title: 'The Netflix model', tocTitle: 'Subscription deals', html: `
        <p>Once the backlog was treated, drug makers faced a curious situation. The medicine cost very little to make. Every untreated patient was revenue they were not getting. And payers still said they could not afford to treat everyone. Could both sides do better with a different deal?</p>
        <h3>Australia, 2016</h3>
        <p>Australia went first at national scale. In March 2016 the government committed about A$1.2 billion over five years (to February 2021) to the makers of the new hepatitis C drugs in exchange for unlimited treatment. Any adult with chronic hepatitis C could be treated, whatever their liver score and even if they still used drugs. The government paid roughly the same total whether 30,000 or 90,000 people were treated. Treatments soared: about 32,650 courses in 2016, then 21,560 in 2017, 16,490 in 2018 and 11,580 in 2019. A modeling study in <em>The Lancet Regional Health – Western Pacific</em> estimated the implied cost at around A$13,000 per course, a fraction of list prices, and a cost of about A$5,750 per [[QALY]] gained, extraordinarily good value. It projected the program would become cost-saving for society in 2022.</p>
        <h3>Louisiana, 2019</h3>
        <p>In the United States, Louisiana's health secretary Rebekah Gee pushed the idea hardest. In 2018 the state had spent about $35 million to treat roughly 1,000 of the many thousands of people with hepatitis C in its Medicaid program and prisons; treating everyone at prevailing prices had been estimated to cost about $760 million. In June 2019 Louisiana signed a five-year deal with Asegua Therapeutics, a Gilead subsidiary, for unlimited access to its [[authorized generic]] of Epclusa, with the state's spending capped, widely reported at about $35 million a year. The goal: treat at least 31,000 of the estimated 39,000 infected people in Medicaid and state prisons by 2024. Washington State struck a similar arrangement with AbbVie.</p>
        <p>The results show what a subscription can and cannot fix. Treatment rose quickly in Louisiana at first. By September 2022, STAT News reported, about 12,000 people had been treated, well short of the goal. Money was no longer the bottleneck; people were. Many infected people had not been diagnosed; rural clinics were far apart; few doctors treated Medicaid patients; and people who actively inject drugs were hard to reach. In Washington, promised screening efforts were shelved for budget reasons and prescriptions actually fell. A 2026 working paper by Kevin Callison, Rena Conti, Jonathan Gruber and Jacob Wallace nonetheless found that Louisiana's model tripled treatment volume among Medicaid patients with hepatitis C, cut new diagnoses by 23%, and generated estimated five-year medical savings of $266 million against about $37 million of drug spending.</p>`},

      {type: 'explorer', title: 'Subscription calculator for a state budget', intro: 'You are a state Medicaid director. Compare paying per treatment with a capped subscription. The subscription only pays off if your health system can actually find and treat people.',
        inputs: [
          {id: 'people', label: 'People with hepatitis C in your programs', min: 10, max: 100, step: 1, value: 39, fmt: v => v + 'K'},
          {id: 'price', label: 'Net price per course without a deal', min: 15, max: 90, step: 1, value: 35, fmt: v => '$' + v + 'K'},
          {id: 'budget', label: 'Annual drug budget / subscription cap', min: 10, max: 100, step: 1, value: 35, fmt: v => '$' + v + 'M'},
          {id: 'capacity', label: 'People your clinics can diagnose and treat per year', min: 1, max: 15, step: 0.5, value: 4, fmt: v => v + 'K'},
        ],
        compute(v, api, el) {
          const perCourse = Math.min(v.budget * 1000 / v.price, v.capacity * 1000); // people/yr under per-treatment payment
          const subs = v.capacity * 1000; // under subscription, limited only by capacity
          const yrsT = v.people * 1000 / perCourse, yrsS = v.people * 1000 / subs;
          const effS = v.budget * 1e6 / subs;
          el.innerHTML = `<p style="margin:0 0 8px"><b>Pay per course:</b> about <b>${api.fmt(perCourse)}</b> people treated a year; clearing everyone would take <b>${yrsT.toFixed(1)} years</b>.<br><b>Subscription:</b> about <b>${api.fmt(subs)}</b> a year for the same $${v.budget}M; <b>${yrsS.toFixed(1)} years</b> to treat everyone. Effective price per cure: <b>$${api.fmt(effS)}</b>${effS > v.price * 1000 ? ' <span style="color:var(--il-7)">(higher than paying per course: you are paying for capacity you are not using)</span>' : ''}.</p><div class="c1"></div><p style="margin:8px 0 0;color:var(--ink-3);font-size:14px">Louisiana\'s starting point: about $35M a year for about 1,000 treatments. The manufacturer gets the same money either way; its extra cost per additional course is small because the drug is cheap to make.</p>`;
          api.mountChart(el.querySelector('.c1'), {kind: 'bar', title: 'People treated per year', unit: '', categories: ['Pay per course', 'Subscription'], series: [{name: 'Treated per year', values: [Math.round(perCourse), Math.round(subs)]}], colorByCategory: true});
        }},

      {type: 'callout', variant: 'product', heading: 'Product lens: all-you-can-eat pricing', html: `
        <p>The Netflix comparison is apt in one way: when the marginal cost of serving another user is near zero, a flat fee that unlocks usage can beat per-unit pricing for both sides. The seller gets predictable revenue it was not getting; the buyer gets volume it could not afford.</p>
        <p><b>Where it breaks:</b> Netflix's users find the product themselves. Hepatitis C patients have to be found by testing, linked to a clinic, and kept in treatment, and a subscription does nothing for that on its own. If the "users" never show up, the state pays full price for an empty buffet. And a subscription locks in one supplier for years in a market where prices are falling. The model works best, as Australia showed, when it is paired with serious investment in screening and in making treatment easy to get.</p>`},

      // ---------------- Worth it? ----------------
      {type: 'story', kicker: 'The judgment call', title: 'Was it worth it?', tocTitle: 'Was it worth it?', html: `
        <p>People who argue about Sovaldi's price are often answering two different questions. One is whether the drug was <em>good value</em> for the money. The other is whether the health system could <em>afford</em> it. For Sovaldi, the answers pointed in opposite directions.</p>
        <h3>The case that it was worth it</h3>
        <p>Health economists judge value with [[cost-effectiveness]] analysis: how much extra money a treatment costs for each extra [[QALY]] (a year of life in full health) it produces. In the United States, treatments costing up to about $100,000 to $150,000 per QALY are commonly considered reasonable value. A 2015 study in the <em>Annals of Internal Medicine</em> by Jagpreet Chhatwal and colleagues found that, at launch prices, sofosbuvir-based regimens cost about $55,400 per QALY gained compared with the old standard, and were cost-effective in more than 80% of patients at a $100,000 threshold. Curing hepatitis C prevents cirrhosis, liver cancer and transplants, each of which is very expensive, and restores years of healthy life to people who are often in middle age. The drug also cured people for whom interferon had never been an option.</p>
        <p>Supporters of the price add the innovation argument. Pharmasset's investors took years of risk. Gilead took an $11 billion bet that analysts called reckless, and completed development at a cost it put at about $880 million for sofosbuvir-based regimens from 2012 to 2014. High rewards for a cure send a signal to every investor deciding whether to fund the next one. And within a few years competition drove net prices down dramatically, which is how the system is supposed to work: high prices during a limited exclusivity period, then lower prices.</p>
        <h3>The case that it was not</h3>
        <p>The same Chhatwal study estimated that treating all eligible Americans with the new drugs would cost about $65 billion more over five years than the old treatments, while the savings from avoided liver disease over the same period would be only about $16 billion. The savings arrive over decades; the bill arrives now. That is the [[budget impact]] problem, and it is why a "cost-effective" drug was rationed. Value per patient multiplied by millions of patients became unaffordable.</p>
        <p>Critics also point out that the price had little to do with the cost of inventing the drug. Pharmasset spent $62.4 million developing PSI-7977; NIH grants had helped fund the underlying science; manufacturing costs were small. Gilead's $11.2 billion was the price of buying an asset, and its first full year of hepatitis C sales ($12.4 billion) already exceeded it. The Senate staff concluded the price was set to maximize revenue, not recoup costs. And the rationing had human consequences: people had to wait until their livers were scarred, and the virus kept spreading while they waited.</p>
        <h3>Where that leaves us</h3>
        <p>Both sides are right about something. Sovaldi at $84,000 was probably good value per patient and plainly unaffordable at population scale in the first years. The drug's true social value was realized only when prices fell far enough, through competition, generics abroad, and deals like Australia's, for health systems to treat everyone rather than the sickest few. Australia's deal, at roughly A$13,000 per course, was modeled at a far lower cost per QALY than US estimates at launch prices (different models and comparators, so compare loosely), and it treated people much earlier in their disease.</p>`},

      {type: 'table', title: 'Two ways to judge the price', columns: ['Question', 'Evidence', 'What it suggests'],
        rows: [
          ['Value per patient', 'About $55,400 per [[QALY]] at launch prices versus the old standard; cost-effective in over 80% of patients at a $100,000/QALY threshold (Chhatwal 2015)', 'Good value compared with many accepted treatments'],
          ['Affordability', 'About $65B extra spending over 5 years to treat all eligible US patients, against about $16B in offsetting savings in that time (Chhatwal 2015)', 'Budgets could not absorb it; payers rationed'],
          ['Access in practice', '74% of Medicaid programs with known rules limited treatment to F3/F4 in 2014 (Barua 2015); Medicaid spent over $1B on Sovaldi in 2014 and treated under 2.4% of enrolled patients (Senate 2015)', 'The price reduced how many people were cured early'],
          ['Cost to develop', '$62.4M Pharmasset R&D on PSI-7977 (2008–2011); about $880M Gilead R&D on sofosbuvir-based regimens (2012–2014); $11.2B acquisition (Senate 2015)', 'Price was not tied to development cost; first-year sales exceeded the acquisition price'],
          ['After competition', 'Gross-to-net discounts rose from 22% to 46% (2014 to 2015); authorized generics at $24,000 list (2019); Australia at about A$13,000 per course', 'Prices fell a long way within five years'],
        ],
        caption: 'Sources: Chhatwal et al., Annals of Internal Medicine 2015; Barua et al., Annals of Internal Medicine 2015; Senate Finance Committee report 2015; Gilead / Asegua 2018; Lancet Regional Health – Western Pacific 2021.'},

      // ---------------- What came next ----------------
      {type: 'story', kicker: 'What came next', title: 'Elimination, and what it taught the industry', tocTitle: 'What came next', html: `
        <p>Sofosbuvir became the backbone of hepatitis C treatment worldwide. Gilead followed Harvoni with Epclusa (sofosbuvir plus [[velpatasvir]]) in 2016, which works against all major genotypes so no strain test is needed, and Vosevi in 2017 for people whom earlier drugs had failed. AbbVie's Mavyret (2017) competed with a pan-genotypic regimen as short as 8 weeks. In September 2018 Gilead announced that a subsidiary, Asegua Therapeutics, would sell [[authorized generic|authorized generics]] of Epclusa and Harvoni from January 2019 at a list price of $24,000 per course for Epclusa, $50,760 less than the brand. Gilead said this was the fastest way to lower list prices without disrupting the rest of its business, and argued the US system is not built to absorb the up-front cost of a one-time cure.</p>
        <p>By 2021 Gilead's hepatitis C sales were $1.9 billion, a tenth of their peak. In Sofia's 2016 estimate, more than 800,000 people had already been cured by sofosbuvir-based regimens; the number has grown enormously since, including through generics in lower-income countries.</p>
        <p>The WHO has set a goal of eliminating hepatitis C as a public health threat by 2030. The drugs are no longer the main obstacle. Only about 36% of people ever infected have been diagnosed, and only about 20% of those have been treated. The unsolved problems are testing, reaching people who inject drugs or are in prison, and building simple treatment pathways, the same problems Louisiana ran into.</p>
        <p>The people moved on. Sofia went to work on hepatitis B, a harder target because of the DNA copy it hides in the nucleus. Nucleotide prodrug chemistry of the kind that made sofosbuvir work reappeared in Gilead\'s remdesivir, its COVID-19 antiviral. And the pricing fight became the template for every cure since. When gene therapies arrived with seven-figure prices, payers and companies reached for the tools that hepatitis C had forced into existence: subscription deals, outcomes-based contracts, and installment payments.</p>`},

      {type: 'callout', variant: 'lesson', heading: 'The shape of the whole case', html: `
        <p>Sovaldi is a success on every scientific measure: a hard chemistry problem solved, a cure rate above 90%, a deadly disease turned into a 12-week course of pills. It is also a case study in how a system built around paying per prescription struggles when a drug makes itself unnecessary. The science took about 25 years. The argument about how to pay for it is not finished.</p>`},

      // ---------------- Quiz ----------------
      {type: 'quiz', title: 'Check yourself', questions: [
        {q: 'Why can hepatitis C be cured with a short course of drugs, when HIV can only be controlled?', options: ['HCV is a weaker virus, so the immune system finishes the job once the drug gives it a head start', 'HCV never makes a DNA copy that hides in the cell nucleus, so blocking copying for long enough leaves nothing to restart infection', 'Sofosbuvir kills infected liver cells directly', 'HCV infects fewer cells than HIV'], answer: 1, explain: 'HIV integrates into the host DNA and hepatitis B keeps a DNA copy in the nucleus. HCV only exists as RNA being copied in the cell fluid. Stop the copying and, as infected cells turn over, the infection ends.'},
        {q: 'What problem did Sofia\'s phosphoramidate "disguise" solve?', options: ['It made the drug bind NS5B more tightly, so a much lower dose could work', 'It let a charged monophosphate be absorbed, reach the liver intact and be unmasked inside liver cells, bypassing a phosphorylation step cells could not do', 'It stopped the liver from breaking the drug down, so more reached the bloodstream', 'It made the drug work on the immune system instead of the virus'], answer: 1, explain: 'The uridine version could not get its first phosphate from the cell\'s kinases. Delivering it with the phosphate already attached required hiding the phosphate\'s charge until liver enzymes removed the disguise, using first-pass metabolism as a targeting system.'},
        {q: 'FISSION found 67% cured in both arms. Why was that counted as a success for sofosbuvir?', options: ['It was a noninferiority trial: matching 24 weeks of injections with 12 weeks of pills and fewer side effects was the goal', 'The trial was stopped early after sofosbuvir showed an overwhelming benefit', 'The FDA does not require better efficacy for any drug', 'Sofosbuvir was cheaper'], answer: 0, explain: 'The question was whether an easier, interferon-free regimen was not meaningfully worse. It was, with fewer side effects. The genotype breakdown (97% versus 56%) showed where it still fell short.'},
        {q: 'Why was SVR12 an acceptable endpoint when many surrogate endpoints mislead?', options: ['Because it was quick to measure, so trials could finish in months rather than years', 'Because long-term studies linked it to durable absence of virus and better liver outcomes, and it is an objective lab test', 'Because the FDA had no alternative', 'Because it measures how much liver scarring has reversed after treatment'], answer: 1, explain: 'A good surrogate sits on the causal path to the outcome and is validated: once the virus is gone, liver damage from the virus stops, and relapse after SVR is rare. Compare surrogates like amyloid on a brain scan, where the link to benefit is much weaker.'},
        {q: 'According to the Senate investigation, what mainly drove the $84,000 price?', options: ['Recovering the $11.2B acquisition cost plus the R&D needed to finish development', 'High manufacturing costs', 'Comparison with existing regimens and finding the highest price payers would tolerate without severe restrictions, while setting a floor for Harvoni', 'A formula based on cost per QALY'], answer: 2, explain: 'Gilead benchmarked against the Incivek regimen, rated "softer issues" at different prices, and chose a price just below where it expected hard restrictions. The report found scant evidence that acquisition or manufacturing costs played a significant role.'},
        {q: 'Sofosbuvir was cost-effective at about $55,400 per QALY, yet states rationed it. What explains the contradiction?', options: ['The cost-effectiveness studies relied on trial cure rates that real-world use would not match', 'Value per patient and total budget impact are different questions: millions of eligible patients at once overwhelmed fixed annual budgets, while the savings arrive over decades', 'States did not believe the trial results', 'Doctors preferred interferon'], answer: 1, explain: 'A drug can be good value per QALY and still unaffordable if the eligible population is huge and payment is due up front. Chhatwal estimated about $65B in extra costs over five years against about $16B in savings in that period.'},
        {q: 'What most effectively pushed down what US payers actually paid for Gilead\'s hepatitis C drugs in 2015?', options: ['New federal price controls', 'The Senate investigation, which forced Gilead to justify its price in public', 'A competitor (AbbVie\'s Viekira Pak) plus pharmacy benefit managers willing to exclude one drug in exchange for bigger rebates', 'Gilead voluntarily cutting its list price in 2015'], answer: 2, explain: 'Express Scripts made Viekira Pak exclusive for genotype 1; Gilead answered with deals across other PBMs and insurers. Its gross-to-net gap widened from 22% to 46%.'},
        {q: 'Louisiana\'s subscription deal removed the budget limit on treatment. Why did it still fall well short of its goal?', options: ['Gilead limited supply to Louisiana to protect prices in other states', 'The drug stopped working', 'The bottlenecks moved to diagnosis, clinic access and reaching people who inject drugs, which a payment deal does not fix by itself', 'Patients preferred older treatments'], answer: 2, explain: 'About 12,000 people had been treated by September 2022, against a goal of 31,000 by 2024. Finding and linking patients to care became the constraint. Even so, researchers found treatment tripled and new diagnoses fell.'},
        {q: 'What is the "cure paradox" in Gilead\'s results?', options: ['Cured patients were often reinfected, and payers stopped covering retreatment', 'Sales rose to $19.1B in 2015 then fell to about $1.9B by 2021, largely because curing the backlog shrank the pool of patients', 'The drug cured patients in trials but not in real life', 'Gilead could not manufacture enough to meet demand after 2015'], answer: 1, explain: 'A cure is bought once. Once the backlog of known, reachable patients was treated and prices fell with competition, revenue collapsed, a pattern Goldman Sachs analysts later used to ask whether curing patients is a sustainable business model.'},
      ]},

      // ---------------- Lessons ----------------
      {type: 'lessons', title: 'What this case teaches', items: [
        {title: 'Delivery can be the invention', text: 'The molecule that hit NS5B existed before sofosbuvir. The breakthrough was a disguise that got it absorbed and unmasked inside liver cells. Many landmark drugs are really delivery or packaging breakthroughs.', links: ['comirnaty', 'enhertu', 'spinraza']},
        {title: 'Pay for de-risked assets when your own pipeline is behind', text: 'Gilead paid an 89% premium after strong Phase 2 data, and analysts called it reckless. When the asset is the backbone of the category and your internal alternative is failing, the "expensive" deal can be the cheap one.', links: ['keytruda', 'humira']},
        {title: 'A validated surrogate is gold', text: 'SVR12 let trials answer in months because it was objective and firmly linked to outcomes. Contrast diseases where the surrogate moved but patients did not benefit.', links: ['aduhelm', 'leqembi', 'torcetrapib']},
        {title: 'Value and affordability are different questions', text: 'Sofosbuvir was cost-effective per patient and still rationed, because millions of patients arrived at once with a bill due up front. Every high-priced cure since has faced the same split.', links: ['zolgensma', 'trikafta', 'kymriah']},
        {title: 'Cures break recurring-revenue models', text: 'Hepatitis C sales went from $19.1B to about $1.9B in six years as patients were cured. Front-loaded revenue pushes prices up during exclusivity and invites new payment models such as subscriptions and installments.', links: ['zolgensma', 'ozempic', 'humira']},
        {title: 'Competition moved prices more than outrage did', text: 'A Senate investigation documented the pricing strategy, but it was AbbVie\'s rival regimen and exclusive PBM deals that cut net prices in months.', links: ['humira', 'ozempic']},
      ]},

      // ---------------- Sources ----------------
      {type: 'sources', title: 'Sources', items: [
        {text: 'US Senate Committee on Finance (Wyden and Grassley staff), "The Price of Sovaldi and Its Impact on the U.S. Health Care System", December 2015 (Senate Print 114-20).', url: 'https://www.govinfo.gov/content/pkg/CPRT-114SPRT97329/html/CPRT-114SPRT97329-Part1.htm'},
        {text: 'Senate Finance Committee press release: Wyden-Grassley Sovaldi investigation finds revenue-driven pricing strategy behind $84,000 hepatitis drug, December 1, 2015.', url: 'https://www.finance.senate.gov/ranking-members-news/wyden-grassley-sovaldi-investigation-finds-revenue-driven-pricing-strategy-behind-84-000-hepatitis-drug'},
        {text: 'Sofia MJ. "Enter Sofosbuvir: The Path to Curing HCV." Cell 167, September 22, 2016 (Lasker Award essay).', url: 'https://laskerfoundation.org/wp-content/uploads/2021/01/2016_cell_article_-_sofia.pdf'},
        {text: 'Ralf Bartenschlager, Charles Rice, and Michael Sofia are honored with the 2016 Lasker~DeBakey Clinical Medical Research Award. J Clin Invest 2016.', url: 'https://www.jci.org/articles/view/90179'},
        {text: 'Sofia MJ et al. Discovery of a β-D-2\'-deoxy-2\'-α-fluoro-2\'-β-C-methyluridine nucleotide prodrug (PSI-7977) for the treatment of hepatitis C virus. J Med Chem 2010.', url: 'https://doi.org/10.1021/jm100863x'},
        {text: 'Murakami E et al. Mechanism of activation of PSI-7851 and its diastereoisomer PSI-7977. J Biol Chem 2010.', url: 'https://doi.org/10.1074/jbc.M110.161802'},
        {text: 'Gane EJ et al. Nucleotide polymerase inhibitor sofosbuvir plus ribavirin for hepatitis C (ELECTRON). N Engl J Med 2013.', url: 'https://doi.org/10.1056/NEJMoa1208953'},
        {text: 'Lawitz E et al. Sofosbuvir for previously untreated chronic hepatitis C infection (NEUTRINO, FISSION). N Engl J Med 2013.', url: 'https://doi.org/10.1056/NEJMoa1214853'},
        {text: 'Jacobson IM et al. Sofosbuvir for hepatitis C genotype 2 or 3 in patients without treatment options (POSITRON, FUSION). N Engl J Med 2013.', url: 'https://doi.org/10.1056/NEJMoa1214854'},
        {text: 'Afdhal N et al. Ledipasvir and sofosbuvir for untreated HCV genotype 1 infection (ION-1). N Engl J Med 2014;370:1889–98.', url: 'https://doi.org/10.1056/NEJMoa1402454'},
        {text: 'Kowdley KV et al. Ledipasvir and sofosbuvir for 8 or 12 weeks for chronic HCV without cirrhosis (ION-3). N Engl J Med 2014.', url: 'https://doi.org/10.1056/NEJMoa1402355'},
        {text: 'Fried MW et al. Peginterferon alfa-2a plus ribavirin for chronic hepatitis C virus infection. N Engl J Med 2002.', url: 'https://doi.org/10.1056/NEJMoa020047'},
        {text: 'Choo QL et al. Isolation of a cDNA clone derived from a blood-borne non-A, non-B viral hepatitis genome. Science 1989;244:359–62.', url: 'https://doi.org/10.1126/science.2523562'},
        {text: 'Lohmann V et al. Replication of subgenomic hepatitis C virus RNAs in a hepatoma cell line. Science 1999.', url: 'https://doi.org/10.1126/science.285.5424.110'},
        {text: 'Neumann AU et al. Hepatitis C viral dynamics in vivo and the antiviral efficacy of interferon-alpha therapy. Science 1998.', url: 'https://doi.org/10.1126/science.282.5386.103'},
        {text: 'Nobel Assembly at Karolinska Institutet. Press release: The Nobel Prize in Physiology or Medicine 2020 (Alter, Houghton, Rice).', url: 'https://www.nobelprize.org/prizes/medicine/2020/press-release/'},
        {text: 'World Health Organization. Hepatitis C fact sheet (accessed 2026).', url: 'https://www.who.int/news-room/fact-sheets/detail/hepatitis-c'},
        {text: 'Gilead Sciences and Pharmasset. Gilead Sciences to acquire Pharmasset, Inc. for $11 billion. Press release, November 21, 2011 (SEC filing).', url: 'https://www.sec.gov/Archives/edgar/data/0001301081/000119312511317734/d259746dex991.htm'},
        {text: 'Gilead Sciences. U.S. FDA approves Gilead\'s Sovaldi (sofosbuvir) for the treatment of chronic hepatitis C. Press release, December 6, 2013.', url: 'https://www.gilead.com/news/news-details/2013/us-food-and-drug-administration-approves-gileads-sovaldi-sofosbuvir-for-the-treatment-of-chronic-hepatitis-c'},
        {text: 'Gilead Sciences. U.S. FDA approves Gilead\'s Harvoni, the first once-daily single tablet regimen for genotype 1 chronic hepatitis C. Press release, October 10, 2014; price reported by CBS News.', url: 'https://www.cbsnews.com/news/fda-approves-harvoni-1125-a-pill-hepatitis-c-drug/'},
        {text: 'Gilead Sciences full-year financial results: 2014 (Sovaldi $10.3B, HCV $12.4B), 2016 (HCV $19.1B in 2015, $14.8B in 2016), 2017 ($9.1B), 2019 ($3.7B in 2018, $2.9B in 2019), 2021 ($2.064B in 2020, $1.881B in 2021).', url: 'https://www.gilead.com/news/news-details/2017/gilead-sciences-announces-fourth-quarter-and-full-year-2016-financial-results'},
        {text: 'Gilead Sciences. Gilead announces generic licensing agreements to increase access to hepatitis C treatments in developing countries. September 15, 2014.', url: 'https://www.gilead.com/news/news-details/2014/gilead-announces-generic-licensing-agreements-to-increase-access-to-hepatitis-c-treatments-in-developing-countries'},
        {text: 'SpicyIP. Gilead enters into licenses with 7 Indian generics for manufacture and sale of Sovaldi (royalty, Egypt price, excluded countries). September 2014.', url: 'https://spicyip.com/2014/09/gilead-enters-into-licenses-with-7-indian-generics-for-manufacture-and-sale-of-sovaldi.html'},
        {text: 'Barua S et al. Restrictions for Medicaid reimbursement of sofosbuvir for the treatment of hepatitis C virus infection in the United States. Ann Intern Med 2015.', url: 'https://doi.org/10.7326/M15-0406'},
        {text: 'Chhatwal J et al. Cost-effectiveness and budget impact of hepatitis C virus treatment with sofosbuvir and ledipasvir in the United States. Ann Intern Med 2015.', url: 'https://doi.org/10.7326/M14-1336'},
        {text: 'Assessment of the cost-effectiveness of Australia\'s risk-sharing agreement for direct-acting antiviral treatments for hepatitis C: a modelling study. Lancet Reg Health West Pac 2021.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8669355'},
        {text: 'Gilead Sciences. Louisiana launches hepatitis C innovative payment model with Asegua Therapeutics. June 26, 2019.', url: 'https://www.gilead.com/news/news-details/2019/louisiana-launches-hepatitis-c-innovative-payment-model-with-asegua-therapeutics-aiming-to-eliminate-the-disease'},
        {text: 'STAT News. With a promising new plan to pay for pricey cures, two states set out to eliminate hepatitis C. But cost hasn\'t been the biggest problem. September 13, 2022.', url: 'https://www.statnews.com/2022/09/13/louisiana-washington-hep-c-investigation/'},
        {text: 'Callison K, Conti RM, Gruber J, Wallace J. Spending to Save: The Subscription Model for Eradicating Hepatitis C in Louisiana. NBER Working Paper 35583, 2026.', url: 'https://www.nber.org/papers/w35583'},
        {text: 'CNBC. Goldman Sachs asks in biotech research report: "Is curing patients a sustainable business model?" April 11, 2018.', url: 'https://www.cnbc.com/2018/04/11/goldman-asks-is-curing-patients-a-sustainable-business-model.html'},
        {text: 'DCAT Value Chain Insights. Gilead to launch authorized generics of top-selling hepatitis C drugs (Asegua, $24,000 list). September 2018.', url: 'https://www.dcatvci.org/top-industry-news/gilead-to-launch-authorized-generic-of-hep-c-drug/'},
        {text: 'Public funding for transformative drugs: the case of sofosbuvir (Pharmasset founders, NIH funding, Schinazi share of sale). PMC7528745.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7528745/'},
        {text: 'Prodrug strategies in developing antiviral nucleoside analogs (review; remdesivir, sofosbuvir). RSC Med Chem 2026.', url: 'https://doi.org/10.1039/d5md00810g'},
        {text: 'AbbVie. AbbVie receives US FDA approval of Mavyret (glecaprevir/pibrentasvir) for chronic hepatitis C in all major genotypes in as short as 8 weeks. Press release, August 3, 2017.', url: 'https://news.abbvie.com/news/press-releases/abbvie-receives-us-fda-approval-mavyret-glecaprevirpibrentasvir-for-treatment-chronic-hepatitis-c-in-all-major-genotypes-gt-1-6-in-as-short-as-8-weeks.htm'},
        {text: 'Folia Pharmacologica Japonica 2024 (BMS-986094 failed in clinical trials due to heart failure).', url: 'https://doi.org/10.1254/fpj.23094'},
      ]},
    ],
  });
})();
