// Humira (adalimumab): Abbott, then AbbVie. See GUIDE.md. All numbers are sourced in the Sources section.
(function () {
  // ---------- small SVG helpers (classes only, no raw colors) ----------
  // An antibody drawn as a Y: stem from (x, y) down, arms up-left and up-right. c = stroke class for each segment.
  const Y = (x, y, o) => {
    o = o || {};
    const w = o.w || 22, arm = o.arm || 56, stem = o.stem || 100, rise = o.rise || 88;
    const lx = x - arm, rx = x + arm, ty = y - rise, mx1 = x - arm / 2, mx2 = x + arm / 2, my = y - rise / 2;
    const cStem = o.stemC || 'st-1', cIn = o.inC || 'st-1', cOut = o.outC || 'st-1';
    let s = `<path d="M${x} ${y} V${y + stem}" class="${cStem}" stroke-width="${w + 4}" stroke-linecap="round" fill="none"/>`;
    s += `<path d="M${x} ${y} L${mx1} ${my} M${x} ${y} L${mx2} ${my}" class="${cIn}" stroke-width="${w}" stroke-linecap="round" fill="none"/>`;
    s += `<path d="M${mx1} ${my} L${lx} ${ty} M${mx2} ${my} L${rx} ${ty}" class="${cOut}" stroke-width="${w}" stroke-linecap="round" fill="none"/>`;
    if (o.tips) s += `<circle cx="${lx}" cy="${ty}" r="${w * 0.42}" class="${o.tips}"/><circle cx="${rx}" cy="${ty}" r="${w * 0.42}" class="${o.tips}"/>`;
    return s;
  };
  // A TNF-alpha trimer: three orange balls.
  const TNF = (x, y, r) => { r = r || 9; return `<circle cx="${x - r * 0.95}" cy="${y + r * 0.6}" r="${r}" class="il-2"/><circle cx="${x + r * 0.95}" cy="${y + r * 0.6}" r="${r}" class="il-2"/><circle cx="${x}" cy="${y - r}" r="${r}" class="il-2"/>`; };

  // ---------- data used by several sections ----------
  const SALES = [[2003, 0.28], [2004, 0.852], [2005, 1.4], [2006, 2.0], [2007, 3.0], [2008, 4.5], [2009, 5.5], [2010, 6.5], [2011, 7.9], [2012, 9.3], [2013, 10.659], [2014, 12.543], [2015, 14.012], [2016, 16.078], [2017, 18.427], [2018, 19.936], [2019, 19.169], [2020, 19.832], [2021, 20.694], [2022, 21.237], [2023, 14.404], [2024, 8.993], [2025, 4.54]];
  const INDICATIONS = [
    {n: 'Rheumatoid arthritis', s: 'RA', y: 2002.99, d: '31 Dec 2002', t: 'The original indication. Joints lined by inflamed synovium; the ARMADA, DE019 and DE011 trials supported approval.'},
    {n: 'Psoriatic arthritis', s: 'PsA', y: 2005.75, d: 'Oct 2005', t: 'Joint inflammation that travels with the skin disease psoriasis. Same TNF-driven fire, different address.'},
    {n: 'Ankylosing spondylitis', s: 'AS', y: 2006.57, d: 'Jul 2006', t: 'Inflammation of the spine and pelvic joints that can fuse vertebrae over time, mostly in younger adults.'},
    {n: 'Crohn’s disease', s: 'CD', y: 2007.16, d: 'Feb 2007', t: 'Inflammation anywhere along the gut wall, often the small intestine. The first move from rheumatology into gastroenterology.'},
    {n: 'Plaque psoriasis', s: 'Ps', y: 2008.05, d: 'Jan 2008', t: 'Raised, scaly skin plaques driven by overactive immune signaling in the skin. Opened dermatology.'},
    {n: 'Juvenile idiopathic arthritis', s: 'JIA', y: 2008.14, d: 'Feb 2008', t: 'Chronic arthritis in children. Pediatric indications also earn extra exclusivity in some settings.'},
    {n: 'Ulcerative colitis', s: 'UC', y: 2012.74, d: 'Sep 2012', t: 'Inflammation of the lining of the colon and rectum.'},
    {n: 'Hidradenitis suppurativa', s: 'HS', y: 2015.69, d: 'Sep 2015', t: 'Painful recurring abscesses in skin folds. Humira became the first FDA-approved treatment for it; the indication carried orphan status.'},
    {n: 'Uveitis (non-infectious)', s: 'UV', y: 2016.5, d: 'Jun 2016', t: 'Inflammation inside the eye that can threaten sight. The ninth US indication, approved six months before the core patent expired.'},
  ];

  registerCase({
    id: 'humira', kind: 'success',
    brand: 'Humira', generic: 'adalimumab', company: 'BASF/Knoll and Cambridge Antibody Technology; then Abbott; then AbbVie',
    tagline: 'A [[fully human antibody]] fished out of a library of billions of viruses became the world’s top-selling drug, and then the textbook case of how a [[patent thicket]] can keep copies away for years.',
    chips: [['Disease', '[[Rheumatoid arthritis]] and 8 more US indications'], ['Modality', '[[monoclonal antibody]] (fully human)'], ['Target', '[[TNF-alpha]]'], ['Approved', 'Dec 2002 (FDA)']],
    readingTime: 32,
    stats: [
      {v: '$21.2B', l: 'Worldwide net revenue in 2022, Humira’s peak year', n: 'AbbVie 2022 Form 10-K'},
      {v: '9', l: 'US indications on the label, from RA (2002) to uveitis (2016)', n: 'FDA label, Drugs@FDA'},
      {v: '+470%', l: 'Rise in the US list price per syringe, 2003 to 2021', n: 'House Oversight Committee, 2021'},
      {v: '132', l: 'Extra US patents AbbVie held beyond the basic patent', n: 'US Court of Appeals, 7th Circuit, 2022'},
      {v: '4+ yrs', l: 'Gap between biosimilar launches in Europe (Oct 2018) and the US (Jan 2023)', n: 'Amgen–AbbVie settlement'},
      {v: '$25.9B', l: '2025 sales of Skyrizi + Rinvoq, the successors', n: 'AbbVie 2025 Form 10-K'},
    ],
    emblem: `<svg viewBox="0 0 300 300" role="img" aria-label="An antibody gripping TNF in front of a stack of patents">
      <circle cx="150" cy="150" r="138" class="il-1s"/>
      <g transform="rotate(-14 92 200)"><rect x="52" y="150" width="80" height="102" rx="8" class="il-paper il-line"/><path d="M64 172 H120 M64 186 H120 M64 200 H112 M64 214 H120 M64 228 H104" class="il-line"/></g>
      <g transform="rotate(14 208 200)"><rect x="168" y="150" width="80" height="102" rx="8" class="il-paper il-line"/><path d="M180 172 H236 M180 186 H236 M180 200 H228 M180 214 H236 M180 228 H220" class="il-line"/></g>
      <g transform="rotate(4 150 170)"><rect x="110" y="140" width="80" height="102" rx="8" class="il-paper il-line"/><path d="M122 162 H178 M122 176 H178 M122 190 H170 M122 204 H178" class="il-line"/><circle cx="170" cy="224" r="9" class="il-6s il-line"/></g>
      ${Y(150, 150, {w: 20, arm: 52, rise: 76, stem: 100})}
      ${TNF(98, 60, 14)}
      <circle cx="202" cy="74" r="10" class="il-1"/>
    </svg>`,
    facts: {start: 1993, firstHuman: null, approval: 2002, end: null, peakSalesB: 21.2, pivotalN: 619, area: 'immunology', modality: 'antibody', target: 'TNF-alpha'},
    themes: ['pricing', 'competition', 'platform', 'regulatory'],
    glossary: {
      'autoimmune disease': 'A disease in which the immune system attacks the body’s own tissue, as if it were an invader. Rheumatoid arthritis, Crohn’s disease and psoriasis are examples.',
      'rheumatoid arthritis': 'A chronic autoimmune disease in which the lining of the joints becomes inflamed, causing pain, swelling and, over years, destruction of cartilage and bone. Often shortened to RA.',
      'TNF-alpha': 'Tumor necrosis factor alpha: a cytokine (immune signaling protein) that acts as an alarm, switching on inflammation. It travels as a cluster of three identical pieces (a trimer). Humira grabs it and stops it working.',
      'synovium': 'The thin membrane lining a joint capsule. It makes the fluid that lubricates the joint. In RA it becomes thick, inflamed and invasive.',
      'pannus': 'The thickened, inflamed synovial tissue in RA that grows over cartilage and eats into bone.',
      'macrophage': 'A large immune cell that swallows debris and microbes and releases alarm signals such as TNF-alpha.',
      'methotrexate': 'An old, cheap pill (originally a cancer drug) taken once a week at low dose for RA. Still the usual first treatment; biologics are often added on top of it.',
      'DMARD': 'Disease-modifying antirheumatic drug: a treatment that slows the underlying disease in RA rather than just easing pain. Methotrexate is the classic example; Humira is a biologic DMARD.',
      'chimeric antibody': 'An antibody whose binding arms come from a mouse and whose body is human. Remicade (infliximab) is one. Names end in -ximab.',
      'humanized antibody': 'An antibody that is human except for the small loops at the tips that touch the target, which come from a mouse. Names end in -zumab.',
      'fully human antibody': 'An antibody whose whole protein sequence is human, so the patient’s immune system is less likely to treat it as foreign. Humira was the first such drug approved by the FDA. Names end in -umab.',
      'phage display': 'A lab method that puts a protein (here, an antibody fragment) on the outside of a virus that infects bacteria, with the gene for that protein inside. Billions of variants can be screened by fishing out the viruses that stick to a target.',
      'bacteriophage': 'A virus that infects bacteria, not people. Phage for short. The filamentous phage used for phage display are long thin rods.',
      'antibody library': 'A collection of billions of different antibody genes, each packaged in its own phage, ready to be screened against a target.',
      'guided selection': 'A phage-display trick that turns a mouse antibody into a fully human one in two swaps: keep half the mouse antibody, pair it with human partners, select; then replace the other mouse half with human partners and select again.',
      'fusion protein': 'A protein built by joining pieces of two different proteins into one chain. Enbrel joins the TNF-catching part of a TNF receptor to the stem of a human antibody.',
      'variable region': 'The tips of an antibody’s arms. They differ from antibody to antibody and determine what it binds.',
      'Fc region': 'The stem of the Y-shaped antibody. It is the same across antibodies of a class and helps set how long the antibody lasts in the blood.',
      'epitope': 'The exact patch on a target that an antibody touches.',
      'CHO cells': 'Chinese hamster ovary cells: the workhorse cell line used to manufacture most antibody drugs in large steel tanks.',
      'subcutaneous': 'Injected just under the skin, usually with a small needle or pen, often by the patient at home.',
      'ACR20': 'American College of Rheumatology 20% response: the patient’s tender and swollen joint counts improve by at least 20%, plus at least three of five other measures. ACR50 and ACR70 are the stricter versions.',
      'anti-drug antibodies': 'Antibodies a patient’s immune system makes against a protein drug. They can neutralize the drug or speed its clearance.',
      'immunogenicity': 'How likely a drug is to provoke an immune response against itself.',
      'Crohn’s disease': 'An inflammatory bowel disease that can affect any part of the gut wall, causing pain, diarrhoea and complications such as fistulas.',
      'ulcerative colitis': 'An inflammatory bowel disease of the lining of the colon and rectum.',
      'psoriasis': 'An immune-driven skin disease causing thick, scaly plaques. It affects roughly 100 million people worldwide.',
      'psoriatic arthritis': 'Joint inflammation that occurs in some people with psoriasis.',
      'ankylosing spondylitis': 'Inflammatory arthritis of the spine and pelvis that can fuse vertebrae.',
      'hidradenitis suppurativa': 'A chronic skin disease with painful lumps and abscesses in the armpits, groin and other skin folds.',
      'uveitis': 'Inflammation of the middle layer of the eye; it can cause vision loss.',
      'juvenile idiopathic arthritis': 'Chronic arthritis of unknown cause that starts in childhood.',
      'composition-of-matter patent': 'A patent on the molecule itself. It is the strongest kind of drug patent, because any copy of the molecule infringes it.',
      'secondary patent': 'A patent on something around the molecule: a formulation, a dose, a manufacturing step, a use in a disease, a device. Usually filed later and easier to design around or challenge.',
      'continuation patent': 'A new patent application that claims priority from an earlier one and shares its description, letting a company add new claims years later.',
      'terminal disclaimer': 'A US mechanism that lets a company obtain a patent that is not meaningfully different from one it already owns, provided the new patent expires at the same time and stays owned together.',
      'inter partes review': 'A US Patent Office procedure (heard by the Patent Trial and Appeal Board, PTAB) in which anyone can challenge an issued patent as not new or obvious. Faster and cheaper than court.',
      'BPCIA': 'The Biologics Price Competition and Innovation Act of 2009, which created the US approval pathway for biosimilars.',
      'interchangeable biosimilar': 'In the US, a biosimilar with an extra FDA designation that lets a pharmacist substitute it for the brand without asking the prescriber, subject to state law.',
      'reference product': 'The original branded biologic that a biosimilar is compared against. For adalimumab biosimilars, Humira.',
      'PBM': 'Pharmacy benefit manager: a middleman that runs drug coverage for insurers and employers, builds formularies and negotiates rebates. The three largest in the US are CVS Caremark, Express Scripts and OptumRx.',
      'rebate': 'Money a drugmaker pays back to a PBM or insurer after a sale, in exchange for favorable formulary placement. Rebates are confidential and often a percentage of the list price.',
      'WAC': 'Wholesale acquisition cost: the manufacturer’s official list price to wholesalers, before rebates and discounts.',
      'private label': 'A product made by one company but sold under another company’s label. In 2024 the big PBMs began selling their own private-label adalimumab.',
      'tender': 'A competitive bid in which a national or regional health system buys one or a few suppliers’ products for a period, usually the cheapest acceptable offer. Common in Europe.',
      'reverse payment': 'A patent settlement in which the brand company pays the would-be copycat to stay off the market. The US Supreme Court held in FTC v. Actavis (2013) that these can violate antitrust law.',
      'IL-23': 'Interleukin-23: a cytokine that keeps a particular group of inflammatory T cells active. It drives psoriasis and inflammatory bowel disease. Skyrizi blocks it.',
      'JAK inhibitor': 'A pill that blocks Janus kinases, enzymes inside immune cells that relay signals from many cytokines at once. Rinvoq is one. The class carries a boxed warning in the US.',
      'PASI 90': 'A 90% improvement in the Psoriasis Area and Severity Index, a standard score of how much skin is affected and how badly. PASI 90 means almost clear skin.',
      'glycosylation': 'Sugar chains that cells attach to proteins as they make them. The pattern varies with cell line and conditions, which is one reason no two manufacturers make exactly the same biologic.',
      'shadow pricing': 'When competitors follow each other’s price increases instead of undercutting each other.',
      'evergreening': 'A critical term for filing new patents on minor changes to extend a product’s protection beyond its core patent.',
      'at-risk launch': 'Launching a copy before patent disputes are resolved, and risking large damages if the patents are later upheld.',
    },
    sections: [
      // ---------------- 1. COLD OPEN ----------------
      {type: 'story', kicker: 'Cold open', title: 'The slide', tocTitle: 'Cold open', html: `
<p>On 30 October 2015, AbbVie’s chief executive, Richard Gonzalez, stood in front of investors with a problem everyone knew about. AbbVie depended on one product, an injection called Humira. It brought in about $14 billion that year, and in each of the next three years it supplied more than 60 percent of the company’s revenue. The US patent on the Humira molecule would expire at the end of 2016.</p>
<p>For an ordinary pill, that date is a cliff. Generic copies arrive within weeks, and the brand loses most of its sales within a year.</p>
<p>Gonzalez showed a slide titled “Broad U.S. Humira Patent Estate.” It listed patents not on the molecule but on almost everything around it: the diseases it treats and at what doses, the liquid formulation, the manufacturing process, the injection devices. The message was that competition would not arrive on schedule.</p>
<p>It didn’t. The first US copy launched on 31 January 2023, six years after the molecule’s patent expired. In between, Humira’s sales climbed to a peak of $21.2 billion in 2022, and the US list price of a year’s supply reached $77,586. A retiree with Crohn’s disease who could not afford it wrote to the company calling the price “unconscionable.” In Europe, copies of the same molecule had been on sale since October 2018.</p>
<p>This case is about two kinds of skill. The first is scientific. Humira was the first fully human [[antibody]] the FDA approved. It was fished out of a library of billions of viruses using a method that later won a Nobel Prize, and aimed at a target that a London lab had shown could calm a crippling disease. The second skill is commercial and legal: turning the third drug in its class into the world’s best-selling medicine through new diseases, higher prices, a wall of patents and settlements with every would-be competitor. Lifecycle management or gaming the system? Decide for yourself by the end.</p>`},

      // ---------------- 2. DISEASE FROM ZERO ----------------
      {type: 'story', kicker: 'The disease from zero', title: 'When the immune system attacks the joints', tocTitle: 'The disease', html: `
<p>Your immune system is a security service: attack invaders, leave your own tissue alone. In an <strong>[[autoimmune disease]]</strong> it mistakes part of the body for an intruder and keeps attacking it for years.</p>
<p><strong>[[Rheumatoid arthritis]]</strong> (RA) is the classic example. The World Health Organization estimates that 18 million people had it in 2019, about 70 percent of them women. It usually starts in the small joints of the hands, wrists and feet, often on both sides at once. Joints turn stiff, hot, swollen and painful, worst in the morning. Untreated, RA destroys joints and can damage the heart, lungs and nerves.</p>
<p>A joint is where two bones meet. Their ends are capped with slippery <strong>cartilage</strong>, and the joint sits in a capsule lined by a thin membrane, the <strong>[[synovium]]</strong>, which makes lubricating fluid. In RA, immune cells pour into the synovium and it swells into a thick, invasive tissue called <strong>[[pannus]]</strong>. The cells signal to each other with [[cytokine|cytokines]], small proteins that act as alarm messages. The alarms recruit more immune cells and tell nearby cells to release enzymes that dissolve cartilage and bone. Damage creates debris, and debris sets off more alarms. The fire feeds itself.</p>
<p>The same kind of fire can burn in the gut ([[Crohn’s disease]], [[ulcerative colitis]]), the skin ([[psoriasis]], [[hidradenitis suppurativa]]), the spine ([[ankylosing spondylitis]]) or the eye ([[uveitis]]). Different addresses, shared alarm signals. That is why one drug would eventually be approved for nine diseases.</p>
<h3>Before biologics</h3>
<p>For most of the 20th century doctors could ease the pain but not stop the damage. Anti-inflammatories such as aspirin dulled symptoms. Steroids worked, but taken for years they cause bone loss, diabetes and infections. A 1983 review found that slowing joint damage on X-rays was unusual with the traditional drugs. Low-dose weekly <strong>[[methotrexate]]</strong>, an old cancer drug, became the first-choice [[DMARD]] (disease-modifying antirheumatic drug), and it still is. But many patients kept flaring on it, and their joints kept eroding.</p>`},

      {type: 'figure', title: 'Inside a joint: healthy versus rheumatoid arthritis', intro: 'Hover or tap the labeled parts. The healthy joint is on the left; the same joint with active RA is on the right.',
        svg: `<svg viewBox="0 0 900 420" role="img" aria-label="Healthy joint compared with a joint affected by rheumatoid arthritis">
          <!-- healthy joint -->
          <g data-part="capsule"><path d="M160 92 C108 150 108 270 160 326 L300 326 C352 270 352 150 300 92 Z" class="il-paper"/><path d="M160 92 C108 150 108 270 160 326 M300 92 C352 150 352 270 300 326" class="il-line2" fill="none"/></g>
          <g data-part="synovium"><path d="M172 108 C128 160 128 262 172 312 M288 108 C332 160 332 262 288 312" class="st-3" stroke-width="5" fill="none" stroke-linecap="round"/></g>
          <g data-part="fluid"><ellipse cx="230" cy="205" rx="62" ry="17" class="il-1s"/></g>
          <g data-part="bone"><rect x="165" y="18" width="130" height="162" rx="60" class="il-8s il-line"/><rect x="165" y="230" width="130" height="150" rx="60" class="il-8s il-line"/></g>
          <g data-part="cartilage"><path d="M174 152 Q230 196 286 152" class="st-3" stroke-width="12" fill="none" stroke-linecap="round"/><path d="M174 260 Q230 216 286 260" class="st-3" stroke-width="12" fill="none" stroke-linecap="round"/></g>
          <text x="10" y="64" class="il-text">Bone</text><path d="M48 60 H168" class="il-line" fill="none"/>
          <text x="10" y="142" class="il-text">Cartilage</text><path d="M78 138 H180" class="il-line" fill="none"/>
          <text x="10" y="214" class="il-text">Joint fluid</text><path d="M88 210 H170" class="il-line" fill="none"/>
          <text x="10" y="276" class="il-text">Synovium</text><path d="M80 272 H130" class="il-line" fill="none"/>
          <text x="10" y="346" class="il-text">Capsule</text><path d="M68 342 L132 300" class="il-line" fill="none"/>
          <text x="230" y="408" text-anchor="middle" class="il-title">Healthy joint</text>
          <!-- RA joint -->
          <path d="M610 92 C558 150 558 270 610 326 L750 326 C802 270 802 150 750 92 Z" class="il-paper"/><path d="M610 92 C558 150 558 270 610 326 M750 92 C802 150 802 270 750 326" class="il-line2" fill="none"/>
          <ellipse cx="680" cy="205" rx="62" ry="17" class="il-1s"/>
          <rect x="615" y="18" width="130" height="162" rx="60" class="il-8s il-line"/><rect x="615" y="230" width="130" height="150" rx="60" class="il-8s il-line"/>
          <g data-part="thin"><path d="M650 170 Q680 190 710 170" class="st-3" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M652 244 Q680 226 708 244" class="st-3" stroke-width="5" fill="none" stroke-linecap="round"/></g>
          <g data-part="pannus"><path d="M616 100 C562 150 560 272 616 316 C636 296 642 258 634 232 C648 222 662 212 668 204 C650 196 636 186 632 168 C634 146 630 122 616 100 Z" class="il-7s st-7" stroke-width="1.5"/><path d="M744 100 C798 150 800 272 744 316 C724 296 718 258 726 232 C712 222 698 212 692 204 C710 196 724 186 728 168 C726 146 730 122 744 100 Z" class="il-7s st-7" stroke-width="1.5"/></g>
          <g data-part="erosion"><path d="M616 262 q14 6 6 20 q-10 4 -8 16" class="st-7" stroke-width="3" fill="none"/><circle cx="624" cy="276" r="10" class="il-paper st-7" stroke-width="2"/></g>
          <g data-part="immune"><circle cx="588" cy="160" r="8" class="il-3"/><circle cx="598" cy="252" r="8" class="il-3"/><circle cx="584" cy="208" r="8" class="il-3"/><circle cx="772" cy="166" r="8" class="il-3"/><circle cx="764" cy="248" r="8" class="il-3"/><circle cx="778" cy="208" r="8" class="il-3"/></g>
          <g data-part="tnf">${TNF(612, 190, 4)}${TNF(748, 190, 4)}${TNF(606, 232, 4)}${TNF(752, 136, 4)}${TNF(612, 132, 4)}${TNF(742, 280, 4)}</g>
          <text x="380" y="112" class="il-text">Inflamed synovium (pannus)</text><path d="M560 108 L590 122" class="il-line" fill="none"/>
          <text x="380" y="164" class="il-text">Immune cells pour in</text><path d="M526 160 H578" class="il-line" fill="none"/>
          <text x="380" y="208" class="il-text">Alarm signals (TNF-alpha)</text><path d="M552 204 H596" class="il-line" fill="none"/>
          <text x="380" y="252" class="il-text">Cartilage wears thin</text><path d="M520 248 C580 248 620 236 650 244" class="il-line" fill="none"/>
          <text x="380" y="300" class="il-text">Bone erosion</text><path d="M470 296 L612 280" class="il-line" fill="none"/>
          <text x="680" y="408" text-anchor="middle" class="il-title">Rheumatoid arthritis</text>
        </svg>`,
        hotspots: {
          bone: {title: 'Bone', text: 'The two bone ends that meet at the joint. In RA, immune activity eventually activates bone-dissolving cells, and erosions appear on X-rays.'},
          cartilage: {title: 'Cartilage', text: 'A smooth, slippery cap on each bone end. It has no blood supply and very little capacity to repair itself, so damage tends to be permanent.'},
          fluid: {title: 'Joint (synovial) fluid', text: 'A slick fluid, made by the synovium, that lubricates and nourishes the cartilage.'},
          synovium: {title: 'Synovium', text: 'In a healthy joint the [[synovium]] is a film a few cells thick. It is where RA starts.'},
          capsule: {title: 'Joint capsule', text: 'A tough envelope that encloses the joint and holds the fluid in.'},
          pannus: {title: 'Pannus', text: 'The inflamed synovium swells into a thick tissue packed with immune cells and new blood vessels. It creeps across the cartilage and eats into bone.'},
          immune: {title: 'Immune cells', text: 'Macrophages, T cells and B cells crowd into the joint lining. Macrophages are a major source of TNF-alpha.'},
          tnf: {title: 'TNF-alpha', text: 'One of the cytokines that keep the fire going. In the late 1980s researchers found it sits near the top of the chain of alarm signals in RA joints. Humira’s only job is to take it out of circulation.'},
          erosion: {title: 'Bone erosion', text: 'Bites out of the bone at the joint margin. Stopping new erosions on X-rays was one of Humira’s approved claims (“inhibiting the progression of structural damage”).'},
          thin: {title: 'Thinning cartilage', text: 'Enzymes released on cytokine command break down the cartilage, narrowing the joint space.'},
        },
        caption: 'Schematic, not to scale. TNF-alpha is drawn as a cluster of three orange balls because it works as a trimer of three identical pieces.'},

      // ---------------- 3. KEY INSIGHT ----------------
      {type: 'story', kicker: 'The key insight', title: 'Find the master switch', tocTitle: 'The key insight', html: `
<p>By the 1980s immunologists had found dozens of [[cytokine|cytokines]] in inflamed joints. The common view was that the system was <em>redundant</em>: block one alarm and the others keep ringing.</p>
<p>Marc Feldmann, an immunologist, and Ravinder (Tiny) Maini, a rheumatologist, began working together in London in 1984, studying tissue taken straight from patients’ joints. A postdoctoral researcher in their group, Fionula Brennan, grew RA joint-lining cells in a dish and added antibodies that neutralize <strong>[[TNF-alpha]]</strong>. The result, published in <em>The Lancet</em> in 1989, was that production of a different alarm signal, interleukin-1, fell too. TNF looked like the switch at the top of the chain.</p>
<p>To test it in people, they borrowed cA2, an anti-TNF antibody from the US biotech company Centocor, developed with Junming Le and Jan Vilček at New York University. In 1992, at Charing Cross Hospital, 20 patients with long-standing RA received it. Within six weeks the median number of tender joints fell from 28 to 6. In 1994 the team ran a [[randomized controlled trial|randomized]], [[double-blind]] trial of a single infusion in 73 patients. On the high dose, 19 of 24 responded, against 2 of 24 on placebo. The paper called it “the first good evidence that specific cytokine blockade can be effective in human inflammatory disease.” A companion paper showed that the benefit faded as the drug wore off and returned on re-treatment. Feldmann and Maini won the 2003 Lasker Clinical Medical Research Award.</p>
<h3>The first anti-TNF drugs</h3>
<p>Centocor’s antibody became <strong>Remicade</strong> (infliximab), approved in August 1998 for Crohn’s disease and in November 1999 for RA. It is a <strong>[[chimeric antibody]]</strong>, with mouse binding arms on a human body, given as an intravenous infusion. <strong>Enbrel</strong> (etanercept), from Immunex (bought by Amgen in 2002), was approved for RA in November 1998. It is a <strong>[[fusion protein]]</strong>: the TNF-catching part of the body’s own TNF receptor joined to an antibody stem, an idea from Bruce Beutler’s lab in Dallas. A third anti-TNF, then in development in Germany and Massachusetts, was betting that being <em>fully human</em> would matter.</p>`},

      // ---------------- 4. MECHANISM ----------------
      {type: 'mechanism', title: 'How Humira works', intro: 'Step through what TNF-alpha does in an inflamed joint, and how the antibody stops it.',
        svg: `<svg viewBox="0 0 760 440" role="img" aria-label="TNF-alpha signaling and its blockade by adalimumab">
          <g data-part="cell"><rect x="20" y="300" width="720" height="150" rx="36" class="il-3s"/><path d="M44 306 H716 M44 316 H716" class="il-line" fill="none"/><text x="44" y="424" class="il-text-2" style="font-size:15.5px">Cell in the joint lining</text></g>
          <g data-part="receptor"><rect x="424" y="268" width="24" height="64" rx="9" class="il-7"/><rect x="556" y="268" width="24" height="64" rx="9" class="il-7"/><text x="596" y="292" class="il-text" style="font-size:17px">TNF receptors</text></g>
          <g data-part="macrophage"><ellipse cx="140" cy="130" rx="112" ry="78" class="il-3s st-3" stroke-width="2"/><circle cx="190" cy="140" r="24" class="il-3"/><text x="72" y="96" class="il-text" style="font-size:17px">Immune cell</text><text x="80" y="188" class="il-text-2" style="font-size:15.5px">(macrophage)</text></g>
          <g data-part="tnfFree">${TNF(290, 110, 10)}${TNF(330, 160, 10)}${TNF(292, 204, 10)}<text x="268" y="68" class="il-text" style="font-size:17px">TNF-alpha released</text></g>
          <g data-part="tnfBound">${TNF(436, 250, 10)}${TNF(568, 250, 10)}</g>
          <g data-part="signal"><path d="M436 334 C436 360 470 372 500 380 M568 334 C568 360 530 372 500 380" class="st-7 flow" stroke-width="3" fill="none"/><ellipse cx="500" cy="394" rx="64" ry="20" class="il-paper il-line"/><text x="500" y="399" text-anchor="middle" class="il-small" style="font-size:13px">inflammation genes ON</text></g>
          <g data-part="cascade"><circle cx="640" cy="222" r="6" class="il-4"/><circle cx="664" cy="198" r="6" class="il-4"/><circle cx="690" cy="226" r="6" class="il-4"/><circle cx="676" cy="170" r="6" class="il-4"/><circle cx="708" cy="190" r="6" class="il-4"/><text x="548" y="118" class="il-text" style="font-size:17px">More alarms: IL-1, IL-6</text><text x="548" y="138" class="il-text" style="font-size:17px">+ cartilage-eating enzymes</text><path d="M660 150 L660 164" class="il-line" fill="none"/></g>
          <g data-part="drug">${Y(470, 72, {w: 12, arm: 28, rise: 38, stem: 48})}<text x="512" y="64" class="il-text" style="font-size:17px">Humira (adalimumab)</text><text x="512" y="86" class="il-text-2" style="font-size:15.5px">injected under the skin</text></g>
          <g data-part="complex">${Y(350, 206, {w: 12, arm: 30, rise: 40, stem: 50})}${TNF(318, 154, 9)}${TNF(382, 154, 9)}<text x="176" y="294" class="il-text" style="font-size:17px">TNF trapped by the antibody</text></g>
          <g data-part="clear"><text x="30" y="258" class="il-text-2" style="font-size:15.5px">Bound TNF can’t reach its receptors</text><text x="30" y="276" class="il-text-2" style="font-size:15.5px">and is cleared from the body</text></g>
          <g data-part="dose"><rect x="512" y="14" width="234" height="60" rx="10" class="il-1s"/><text x="526" y="38" class="il-text" style="font-size:17px">40 mg every other week</text><text x="526" y="62" class="il-text-2" style="font-size:15.5px">half-life about 2 weeks</text></g>
        </svg>`,
        steps: [
          {title: 'Two cells and a message', text: 'In an inflamed joint, immune cells such as [[macrophage|macrophages]] sit next to the cells that line the joint. The lining cells carry TNF receptors on their surface: docking stations for one particular alarm signal.', show: ['cell', 'receptor', 'macrophage']},
          {title: 'The alarm: TNF-alpha', text: 'The macrophage releases [[TNF-alpha]]. Each molecule is a trimer, three identical pieces stuck together, which is how it can grab and cluster receptors. In RA the joint lining is flooded with it.', show: ['cell', 'receptor', 'macrophage', 'tnfFree'], focus: ['tnfFree'], pulse: ['tnfFree']},
          {title: 'Docking switches the cell on', text: 'When TNF lands on its receptors, a relay of signals runs into the cell’s nucleus and switches on inflammation genes.', show: ['cell', 'receptor', 'macrophage', 'tnfBound', 'signal'], focus: ['tnfBound'], pulse: ['signal']},
          {title: 'The fire feeds itself', text: 'The activated cells release more alarm signals (interleukin-1, interleukin-6) and enzymes that break down cartilage and bone. Those signals recruit more immune cells, which make more TNF. This is the loop Brennan, Feldmann and Maini found TNF sitting on top of.', show: ['cell', 'receptor', 'macrophage', 'tnfBound', 'signal', 'cascade'], focus: ['cascade'], pulse: ['cascade']},
          {title: 'Enter the antibody', text: 'Humira is a Y-shaped [[antibody]] made entirely of human protein sequence. It is injected under the skin and slowly soaks into the blood and tissues. Each tip of the Y is shaped to fit one [[epitope]] on TNF-alpha.', show: ['cell', 'receptor', 'macrophage', 'tnfFree', 'drug'], dim: ['cascade'], focus: ['drug'], pulse: ['drug']},
          {title: 'Grab and hold', text: 'The antibody binds TNF tightly. One antibody has two arms, so it can hold two TNF molecules. TNF that is trapped can’t dock on its receptors, so the lining cells stay switched off. Humira also binds TNF displayed on the surface of immune cells.', show: ['cell', 'receptor', 'macrophage', 'complex', 'clear'], dim: ['signal', 'cascade'], focus: ['complex']},
          {title: 'Quiet, as long as the drug is there', text: 'With the top alarm silenced, the other signals fade and the joint calms down. The antibody has a half-life of about two weeks, so one 40 mg injection every other week keeps levels up. Stop the drug and the fire usually returns. And because TNF also helps fight infections, patients are at higher risk of serious infections such as tuberculosis: Humira’s US label carries a [[black box warning]] about it.', show: ['cell', 'receptor', 'macrophage', 'complex', 'dose'], focus: ['dose']},
        ]},

      // ---------------- 5. ANTIBODY FAMILY ----------------
      {type: 'figure', title: 'Mouse, chimeric, humanized, fully human, fusion', intro: 'Antibody drugs got steadily more human between the 1980s and 2000s. Hover or tap each molecule. Magenta is mouse-derived protein; blue is human; aqua is a piece of a human receptor.',
        svg: `<svg viewBox="0 0 900 420" role="img" aria-label="Five kinds of TNF-blocking or antibody molecules compared">
          <circle cx="30" cy="26" r="8" class="il-5"/><text x="44" y="31" class="il-text">Mouse-derived protein</text>
          <circle cx="230" cy="26" r="8" class="il-1"/><text x="244" y="31" class="il-text">Human protein</text>
          <circle cx="390" cy="26" r="8" class="il-3"/><text x="404" y="31" class="il-text">Human receptor piece</text>
          <g data-part="mouse">${Y(95, 200, {stemC: 'st-5', inC: 'st-5', outC: 'st-5'})}<text x="95" y="340" text-anchor="middle" class="il-title">Mouse</text><text x="95" y="360" text-anchor="middle" class="il-text-2">first generation</text><text x="95" y="380" text-anchor="middle" class="il-small">names end -omab</text></g>
          <g data-part="chimeric">${Y(275, 200, {outC: 'st-5'})}<text x="275" y="340" text-anchor="middle" class="il-title">Chimeric</text><text x="275" y="360" text-anchor="middle" class="il-text-2">Remicade (1998)</text><text x="275" y="380" text-anchor="middle" class="il-small">names end -ximab</text></g>
          <g data-part="humanized">${Y(455, 200, {tips: 'il-5'})}<text x="455" y="340" text-anchor="middle" class="il-title">Humanized</text><text x="455" y="360" text-anchor="middle" class="il-text-2">mouse loops only</text><text x="455" y="380" text-anchor="middle" class="il-small">names end -zumab</text></g>
          <g data-part="human">${Y(635, 200, {})}<text x="635" y="340" text-anchor="middle" class="il-title">Fully human</text><text x="635" y="360" text-anchor="middle" class="il-text-2">Humira (2002)</text><text x="635" y="380" text-anchor="middle" class="il-small">names end -umab</text></g>
          <g data-part="fusion"><path d="M815 200 V300" class="st-1" stroke-width="26" stroke-linecap="round"/><path d="M815 200 L790 172 M815 200 L840 172" class="st-1" stroke-width="16" stroke-linecap="round"/><circle cx="782" cy="160" r="15" class="il-3"/><circle cx="770" cy="134" r="14" class="il-3"/><circle cx="762" cy="108" r="13" class="il-3"/><circle cx="848" cy="160" r="15" class="il-3"/><circle cx="860" cy="134" r="14" class="il-3"/><circle cx="868" cy="108" r="13" class="il-3"/><text x="815" y="340" text-anchor="middle" class="il-title">Receptor fusion</text><text x="815" y="360" text-anchor="middle" class="il-text-2">Enbrel (1998)</text><text x="815" y="380" text-anchor="middle" class="il-small">names end -cept</text></g>
          <g data-part="variable"><path d="M700 112 L736 80" class="il-line" fill="none"/><text x="680" y="72" class="il-text-2">variable tips</text></g>
          <g data-part="fc"><path d="M660 262 L712 262" class="il-line" fill="none"/><text x="716" y="266" class="il-text-2">Fc stem</text></g>
        </svg>`,
        hotspots: {
          mouse: {title: 'Mouse antibody', text: 'The standard way to make a [[monoclonal antibody]] was to immunise a mouse and harvest the antibody-making cells. The result is entirely mouse protein. Human immune systems often recognize it as foreign, make antibodies against it, and clear it quickly or react to it.'},
          chimeric: {title: 'Chimeric: Remicade', text: 'Genetic engineering keeps the mouse [[variable region|variable regions]] (the binding tips) and swaps everything else for human sequence. Roughly a third of the protein stays mouse. Infliximab works well, but some patients make [[anti-drug antibodies]]; it is usually given with methotrexate, which reduces that.'},
          humanized: {title: 'Humanized', text: 'Greg Winter’s 1986 technique grafts only the small loops that touch the target onto a human antibody frame. Most of the protein is human. Many later blockbusters are humanized, including AbbVie’s successor drug Skyrizi.'},
          human: {title: 'Fully human: Humira', text: 'Every amino acid in adalimumab’s sequence is human. It is a human IgG1 antibody of 1,330 amino acids and about 148,000 daltons: roughly 800 times the weight of an aspirin molecule. It is made in [[CHO cells|Chinese hamster ovary cells]], and was found using [[phage display]] rather than a mouse.'},
          fusion: {title: 'Receptor fusion: Enbrel', text: 'A [[fusion protein]]: the TNF-catching portion of the human TNF receptor 2, joined to a human antibody stem. It works as a decoy receptor, mopping up TNF before it reaches real receptors.'},
          variable: {title: 'Variable region', text: 'The tips of the arms, different in every antibody. They decide what the antibody binds. In Humira they were selected from a human [[antibody library]].'},
          fc: {title: 'Fc stem', text: 'The constant stem. It interacts with immune cells and with a recycling receptor that protects antibodies from breakdown, which is why antibodies last weeks in the blood while most small proteins last minutes or hours.'},
        },
        caption: 'The suffixes follow the naming scheme in use when these drugs were named; it has since been revised. Humanized and fully human antibodies can still provoke [[anti-drug antibodies]], just less often.'},

      // ---------------- 6. BUILDING THE DRUG ----------------
      {type: 'story', kicker: 'Building the drug', title: 'Evolution in a test tube', tocTitle: 'Phage display', html: `
<p>Mouse antibodies could be made against almost anything, but human patients reacted to them. Greg Winter, at the UK Medical Research Council’s Laboratory of Molecular Biology in Cambridge, developed “humanizing” in 1986: keep only the mouse loops that touch the target. The real prize was a <strong>[[fully human antibody]]</strong>, but you cannot immunise people with TNF and harvest their antibodies.</p>
<h3>Protein outside, gene inside</h3>
<p>The answer started with George Smith at the University of Missouri. In 1985 he showed that a gene spliced into a <strong>[[bacteriophage]]</strong> makes its protein appear on the outside of the virus. Protein outside, gene inside: catch the protein and you have its recipe. Winter’s group, with John McCafferty doing much of the work, reported in <em>Nature</em> in 1990 that antibody binding tips could be displayed this way. They built <strong>[[antibody library|libraries]]</strong> of billions of phage, each carrying a different human antibody fragment. Then they went fishing: coat a surface with the target, pour the library over it, wash, collect what sticks, grow more in bacteria, repeat. This is <strong>[[phage display]]</strong>. Winter and David Chiswell founded Cambridge Antibody Technology (CAT) in 1989 to turn it into drugs. In 1993 CAT began working with BASF, whose drug arm, Knoll, had an anti-TNF program.</p>
<h3>Guided selection</h3>
<p>BASF already had mouse antibodies against TNF. CAT scientists used <strong>[[guided selection]]</strong>, published in 1994. Keep the mouse heavy chain, pair it with a library of human light chains and select the pairs that bind. Then keep the best human light chain, pair it with a library of human heavy chains and select again. The mouse antibody is scaffolding, removed once the building stands, and the result binds the same [[epitope]]. The antibody that emerged was <strong>D2E7</strong>. On 9 February 1996 BASF filed US patent 6,090,382, naming BASF scientists including Jochen Salfeld and CAT scientists including Tristan Vaughan. This was the <strong>[[composition-of-matter patent]]</strong> on the molecule. It expired on 31 December 2016.</p>
<h3>The process is the product</h3>
<p>A [[small molecule]] like aspirin is made by chemistry and can be described exactly. Adalimumab is made by living [[CHO cells]] in steel tanks, then purified in steps that include removing viruses. The cells attach sugar chains ([[glycosylation]]) that vary with growing conditions, so small process changes can change the product.</p>
<p>One more detail. Abbott at first paid CAT royalties of about 2 percent of sales. CAT sued, and in December 2004 London’s High Court ruled that the full rate of just over 5 percent applied. Abbott paid about $255 million, of which the Medical Research Council, the public funder behind Winter’s lab, received about $191 million.</p>`},

      {type: 'custom', title: 'Try it: run a phage display selection', intro: 'Step through one round, then run more rounds and watch the binders take over. The numbers are illustrative, but the logic is exactly how D2E7’s ancestors were found.',
        html: `<div class="card"><div id="pdStage"></div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:10px">
            <button class="btn" data-a="back">← Back</button><button class="btn primary" data-a="next">Next step →</button><button class="btn" data-a="round">Run a whole round</button><button class="btn" data-a="reset">Reset</button>
            <label style="display:flex;gap:8px;align-items:center;font-size:14px;margin-left:auto">Enrichment per round <input type="range" min="10" max="1000" step="10" value="100" data-a="enr"> <b data-o="enr">100×</b></label>
          </div>
          <div id="pdText" style="margin-top:12px;font:400 16.5px/1.6 var(--serif);min-height:78px"></div>
          <div id="pdLog" style="margin-top:8px"></div></div>`,
        init(root, api) {
          const W = 900, H = 340, N = 48;
          const stage = root.querySelector('#pdStage'), text = root.querySelector('#pdText'), log = root.querySelector('#pdLog');
          const enrIn = root.querySelector('[data-a=enr]'), enrOut = root.querySelector('[data-o=enr]');
          const F0 = 1e-7; let round = 0, step = 0, hist = [F0];
          const frac = r => { const e = Math.pow(+enrIn.value, r); return F0 * e / (F0 * e + (1 - F0)); };
          const phage = (i, binder) => `<g class="ph" data-i="${i}" style="transition:transform .9s cubic-bezier(.4,.1,.2,1),opacity .7s ease"><path d="M0 0 V18" class="il-line2" fill="none"/><circle cx="0" cy="-5" r="6" class="${binder ? 'il-1' : 'il-8'}"/></g>`;
          stage.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Phage display selection">
            <rect x="12" y="40" width="250" height="240" rx="24" class="il-paper il-line"/><text x="137" y="30" text-anchor="middle" class="il-title">1. Library</text>
            <rect x="300" y="40" width="300" height="240" rx="24" class="il-paper il-line"/><text x="450" y="30" text-anchor="middle" class="il-title">2–3. Bait, then wash</text>
            <rect x="316" y="250" width="268" height="20" rx="6" class="il-2s"/>${Array.from({length: 11}, (_, k) => TNF(330 + k * 24, 256, 4)).join('')}<text x="450" y="300" text-anchor="middle" class="il-text-2">surface coated with TNF-alpha</text>
            <rect x="638" y="40" width="250" height="240" rx="24" class="il-paper il-line"/><text x="763" y="30" text-anchor="middle" class="il-title">4. Grow in bacteria</text>
            ${[0, 1, 2].map(k => `<ellipse cx="${700 + k * 62}" cy="${250}" rx="26" ry="13" class="il-4s il-line"/>`).join('')}<text x="763" y="300" text-anchor="middle" class="il-text-2">E. coli make fresh copies</text>
            <path d="M610 312 H40" class="il-line il-dash" fill="none"/><text x="325" y="332" text-anchor="middle" class="il-small">5. The enriched copies become the next round’s library</text>
            <g id="pdPh"></g></svg>`;
          const ph = stage.querySelector('#pdPh');
          let pos = [];
          const build = () => {
            const f = frac(round), nb = f * N < 1 ? 1 : Math.round(f * N);
            let s = ''; pos = [];
            for (let i = 0; i < N; i++) { const b = i < nb; pos.push({b, x: 38 + (i % 8) * 27 + (Math.floor(i / 8) % 2) * 10, y: 72 + Math.floor(i / 8) * 34}); s += phage(i, b); }
            ph.innerHTML = s; place();
          };
          const place = () => {
            ph.querySelectorAll('.ph').forEach((g, i) => {
              const p = pos[i]; let x = p.x, y = p.y, op = 1;
              if (step >= 1) { x = p.x + 300; y = p.y; }
              if (step >= 2) { if (p.b) { x = 330 + (i % 11) * 24; y = 218; } else { op = 0; y = p.y + 40; } }
              if (step >= 3) { if (p.b) { x = 668 + (i % 8) * 27; y = 80 + Math.floor((i % 40) / 8) * 30; } }
              g.style.transform = `translate(${x}px, ${y}px)`; g.style.opacity = op;
            });
          };
          const fmtFrac = f => f >= 0.5 ? 'about ' + Math.round(f * 100) + '% of phage bind TNF' : 'about 1 in ' + api.fmt(Math.round(1 / f)) + ' phage binds TNF';
          const TXT = [
            () => `<b>Round ${round + 1}, step 1: the library.</b> Billions of [[bacteriophage|phage]], each showing a different human antibody fragment on its tip and carrying the gene for it inside. Right now ${fmtFrac(frac(round))}. Blue tips are binders; gray tips are not. (With so few binders we draw one so you can follow it.)`,
            () => `<b>Step 2: pour over the bait.</b> The phage are washed over a surface coated with [[TNF-alpha]]. Binders stick; the rest just float.`,
            () => `<b>Step 3: wash.</b> Rinsing removes the phage that didn’t grip. Only binders, plus a little sticky background, stay behind.`,
            () => `<b>Step 4: elute and amplify.</b> The survivors are released and used to infect bacteria, which make thousands of copies of each. The antibody’s gene has come along for the ride, so you can read its sequence.`,
            () => `<b>Step 5: repeat.</b> The copies form a new, enriched library. Press <i>Next</i> to start round ${round + 2}. Researchers can also mutate the winners between rounds to find even tighter binders, which is where the “evolution” comes in.`,
          ];
          const drawLog = () => {
            const rows = hist.map((f, r) => { const w = Math.max(2, (Math.log10(f) + 7) / 7 * 100); return `<div style="display:grid;grid-template-columns:80px 1fr 230px;gap:10px;align-items:center;font-size:13.5px;margin:3px 0"><span>Start of round ${r + 1}</span><span style="background:var(--panel-2);border-radius:6px;height:12px;display:block"><span style="display:block;height:12px;border-radius:6px;width:${w}%;background:var(--il-1)"></span></span><span>${fmtFrac(f)}</span></div>`; }).join('');
            log.innerHTML = rows + `<div class="caption">Illustrative: starting at 1 binder per 10 million and assuming a fixed enrichment per round. Bar length is on a log scale. Real selections usually take 2–4 rounds.</div>`;
          };
          const render = () => { place(); text.innerHTML = api.terms(TXT[step]()); drawLog(); };
          root.addEventListener('click', e => {
            const a = e.target.closest('button') && e.target.closest('button').dataset.a; if (!a) return;
            if (a === 'next') { if (step < 4) step++; else { round++; step = 0; hist.push(frac(round)); build(); } }
            if (a === 'back') { if (step > 0) step--; }
            if (a === 'round') { round++; step = 0; hist.push(frac(round)); build(); }
            if (a === 'reset') { round = 0; step = 0; hist = [F0]; build(); }
            render();
          });
          enrIn.addEventListener('input', () => { enrOut.textContent = enrIn.value + '×'; hist = hist.map((_, r) => frac(r)); build(); render(); });
          build(); render();
        }},

      {type: 'callout', variant: 'product', heading: 'Phage display is search at a scale product teams never get', html: `<p>Phage display is A/B testing with ten billion arms and a perfectly objective metric: does it stick to TNF? Because each variant carries its own gene, a winner can be read and rebuilt, like every variant shipping with its source code.</p><p><b>Where it breaks:</b> the metric is a proxy. \u201cBinds TNF in a dish\u201d is not \u201cworks safely in people for 20 years.\u201d D2E7 still needed years of manufacturing work and trials in thousands of patients. In software a winning variant ships that afternoon; in biologics the lab result is where the long, expensive part begins.</p>`},

      // ---------------- 7. TIMELINE ----------------
      {type: 'timeline', title: 'Timeline', intro: 'Filter by kind, or click a dot on the strip.',
        events: [
          {year: 1984, title: 'Feldmann and Maini start working together', kind: 'people', text: 'Studying cytokines in tissue from RA joints, in London.'},
          {year: 1985, title: 'George Smith invents phage display', kind: 'science'},
          {year: 1989, title: 'Blocking TNF quietens other alarm signals', kind: 'science', text: 'Brennan, Feldmann, Maini and colleagues, The Lancet.'},
          {year: 1989, title: 'Cambridge Antibody Technology founded', kind: 'business', text: 'By Greg Winter and David Chiswell.'},
          {year: 1990, title: 'Antibodies displayed on phage', kind: 'science', text: 'McCafferty, Winter and colleagues, Nature.'},
          {year: 1992, title: 'First RA patients get an anti-TNF antibody', kind: 'clinical', text: 'Twenty patients at Charing Cross Hospital receive Centocor\u2019s cA2.'},
          {year: 1993, title: 'BASF and CAT begin collaborating', kind: 'business'},
          {year: 1994, title: 'Randomized proof in The Lancet', kind: 'clinical', text: '19 of 24 high-dose patients respond versus 2 of 24 on placebo.'},
          {year: 1996, date: '9 Feb 1996', title: 'D2E7 composition-of-matter patent filed', kind: 'regulatory', text: 'US 6,090,382; expires 31 Dec 2016.'},
          {year: 1998, title: 'Remicade and Enbrel approved', kind: 'regulatory', text: 'Remicade for Crohn\u2019s (Aug), Enbrel for RA (Nov).'},
          {year: 2001, date: '2 Mar 2001', title: 'Abbott buys BASF\u2019s pharma business', kind: 'business', text: 'Knoll and D2E7, for $6.9 billion in cash.'},
          {year: 2002, date: '31 Dec 2002', title: 'FDA approves Humira for RA', kind: 'regulatory'},
          {year: 2004, date: 'Dec 2004', title: 'CAT wins royalty case against Abbott', kind: 'business'},
          {year: 2013, date: '1 Jan 2013', title: 'AbbVie spun off from Abbott', kind: 'business'},
          {year: 2016, date: '31 Dec 2016', title: 'Core US patent expires; no US biosimilar launches', kind: 'regulatory'},
          {year: 2017, date: '28 Sep 2017', title: 'Amgen settles: Europe 2018, US 2023', kind: 'business', text: 'Eight more companies settle over the next two years.'},
          {year: 2018, date: 'Oct 2018', title: 'Biosimilars launch in Europe', kind: 'setback'},
          {year: 2018, date: 'Oct 2018', title: 'Nobel Prize for phage display', kind: 'people', text: 'Shared by George Smith and Greg Winter.'},
          {year: 2019, title: 'Skyrizi and Rinvoq approved', kind: 'regulatory'},
          {year: 2021, date: 'May 2021', title: 'House Oversight hearing and staff report', kind: 'setback'},
          {year: 2022, date: 'Aug 2022', title: 'Seventh Circuit rejects antitrust claims', kind: 'regulatory'},
          {year: 2023, date: '31 Jan 2023', title: 'First US biosimilar launches', kind: 'setback'},
          {year: 2024, date: 'Apr 2024', title: 'CVS Caremark drops Humira from main formularies', kind: 'setback'},
          {year: 2025, title: 'Skyrizi + Rinvoq ($25.9B) pass Humira\u2019s peak', kind: 'business'},
        ]},

      // ---------------- 8. DECISION 1: ABBOTT / KNOLL ----------------
      {type: 'decision', title: 'Decision: buy a whole company for one antibody?', role: 'You run strategy at Abbott Laboratories, 2000', scenario: `
<p>BASF, the German chemical giant, wants out of pharmaceuticals and is selling its drug business, Knoll. Its most valuable asset is D2E7, a fully human anti-TNF antibody in late-stage RA trials. Nothing is approved yet. Remicade and Enbrel are already on the market, backed by Johnson & Johnson and Immunex. Knoll comes with factories and older products too. The asking price is several billion dollars in cash. What do you recommend?</p>`,
        options: [
          {label: 'Buy all of BASF’s pharma business. Accept the baggage to own D2E7 outright.', outcome: 'You get 100% of D2E7’s economics, plus manufacturing and a European sales force. The risk is concentrated: if D2E7 disappoints in phase 3, or turns out to be a me-too third entrant, you have overpaid for a mixed bag of older products.'},
          {label: 'Only license D2E7 (co-develop and share profits), and leave the rest.', outcome: 'Cheaper and lower risk, and many companies structure deals this way. But BASF is exiting the business entirely and prefers a clean sale, so a partner-only deal may not be on offer, and you would give away a large share of any upside.'},
          {label: 'Pass. A third TNF blocker entering behind two established ones is a weak bet.', outcome: 'A reasonable view: being third in a class often means a small share. But you would be betting that “fully human” and home injection every two weeks don’t matter to doctors and patients, and that TNF blockers won’t expand beyond RA.'},
        ],
        reality: 'Abbott bought BASF’s pharmaceutical business, including Knoll, for $6.9 billion in cash, completing the deal on 2 March 2001. Abbott later said the acquisition significantly increased the scale of its drug business. D2E7 became Humira and was approved 22 months later. By 2012 it was selling $9.3 billion a year, and it went on to generate over $170 billion in worldwide net revenue by 2020, according to a congressional staff report. In hindsight this was one of the best acquisitions in pharma history, but the third-entrant worry was entirely reasonable at the time.'},

      // ---------------- 9. TRIALS & APPROVAL ----------------
      {type: 'story', kicker: 'The trials', title: 'Proving it, and getting to market third', tocTitle: 'Trials & approval', html: `
<p>By the time D2E7 reached large trials, TNF blockade was proven. The question was whether this antibody worked well, safely and conveniently. Two design choices mattered. It was injected <strong>[[subcutaneous|under the skin]]</strong>, so patients could do it at home, while Remicade needed an infusion in a clinic. And because its half-life is about two weeks, <strong>once every other week</strong> was enough.</p>
<p>Several trials supported approval. <strong>ARMADA</strong> (271 patients) tested it added to methotrexate; you will predict it below. <strong>DE019</strong> (619 patients, 52 weeks) asked whether it stops joint destruction. X-ray damage progressed by a mean of 0.1 points on 40 mg every other week, versus 2.7 on placebo. <strong>DE011</strong> (544 patients) showed it also works on its own, though less strongly: 46% reached ACR20 on 40 mg every other week, versus 19% on placebo.</p>
<p>The standard RA measure is the <strong>[[ACR20]]</strong>: at least a 20 percent improvement in tender and swollen joint counts, plus three of five other measures. It is a low bar, so trials also report the stricter ACR50 and ACR70.</p>
<p>The FDA approved Humira on 31 December 2002, and Europe followed in September 2003. Today’s US label carries a [[black box warning]] for serious infections, including tuberculosis, and for malignancy. Abbott launched at $522.64 a syringe, about $13,600 a year. It sold $280 million in 2003 and $852 million in 2004.</p>`},

      {type: 'trial', title: 'The ARMADA trial', intro: 'Adalimumab added to methotrexate in patients whose RA was still active despite methotrexate. Look at the design, predict the result, then see it.',
        design: {name: 'ARMADA', phase: 'Randomized, placebo-controlled', blinding: 'Double-blind', years: 'Published Jan 2003', n: 271,
          population: 'Adults with active RA despite long-term stable methotrexate',
          randomization: '4 arms',
          arms: [{name: 'Adalimumab 20 mg', desc: 'Every other week + methotrexate'}, {name: 'Adalimumab 40 mg', desc: 'Every other week + MTX (approved)'}, {name: 'Adalimumab 80 mg', desc: 'Every other week + methotrexate'}, {name: 'Placebo', desc: 'Dummy injection + methotrexate', control: true}],
          endpoint: 'ACR20 response at week 24',
          details: {'Primary endpoint': '[[ACR20]] response at 24 weeks', 'Key secondary': 'ACR50 and ACR70 responses', 'Background therapy': 'Everyone kept taking [[methotrexate]], so the comparison is “adding” adalimumab'}},
        predict: {q: 'At 24 weeks, what share of patients on 40 mg adalimumab plus methotrexate reached ACR20, compared with placebo plus methotrexate?',
          options: ['About 35% versus 25%: a modest gain on top of methotrexate', 'About 67% versus 15%: a large gain', 'About 95% versus 15%: nearly everyone responded'], answer: 1,
          explain: '67.2% versus 14.5% (P < 0.001). The 80 mg dose did no better (65.8%) than 40 mg, which is one reason 40 mg every other week became the standard. Note the placebo rate: these were patients whose disease was active despite methotrexate, so few improved by chance. Even on the drug, about a third did not reach ACR20; TNF blockade is powerful but not universal.'},
        results: [
          {kind: 'bar', title: 'Responses at week 24: 40 mg adalimumab vs placebo (both with methotrexate)', unit: '%', categories: ['ACR20', 'ACR50', 'ACR70'],
            series: [{name: 'Adalimumab 40 mg + MTX', values: [67.2, 55.2, 26.9]}, {name: 'Placebo + MTX', values: [14.5, 8.1, 4.8], color: 8}],
            note: 'Weinblatt et al., Arthritis & Rheumatism 2003. ACR20 on 20 mg was 47.8% and on 80 mg 65.8%.'},
        ],
        takeaway: 'A large, fast effect (many patients responded by week 1, the first visit). The strictest measure, ACR70, was reached by about a quarter of patients, which gave later drugs room to claim they were better.'},

      {type: 'callout', variant: 'misconception', heading: '“Fully human means the body won’t react to it”', html: `<p>Being fully human lowers [[immunogenicity]] but doesn\u2019t remove it: the variable tips of every antibody are new to the immune system. In Humira\u2019s RA trials about 5% of patients made [[anti-drug antibodies]] within 6 to 12 months: 1% of those also on methotrexate, 12% of those on Humira alone. Those patients can lose response. \u201cFully human\u201d was a real advantage, and great marketing, but it is a matter of degree.</p>`},

      // ---------------- 10. EXPANSION ----------------
      {type: 'story', kicker: 'What came next, part 1', title: 'One molecule, nine diseases', tocTitle: 'Nine indications', html: `
<p>Most drugs stay in one disease. Abbott kept running trials wherever TNF drives the fire. Each indication needed its own trials, its own FDA review and often a new sales force of specialists. The US approvals: [[psoriatic arthritis]] (October 2005), [[ankylosing spondylitis]] (July 2006), [[Crohn’s disease]] (February 2007), plaque [[psoriasis]] (January 2008), [[juvenile idiopathic arthritis]] (February 2008), [[ulcerative colitis]] (September 2012), [[hidradenitis suppurativa]] (September 2015; Humira was its first approved treatment) and [[uveitis]] (June 2016). Each gave patients an evidence-based option, and each gave Abbott a new market for the same molecule from the same factories. A congressional report later counted eight [[orphan drug]] designations and approvals, and criticized AbbVie for staggering exclusivity periods by age group.</p>
<p>Convenience was strategy too. By mid-2006 the label included the <strong>HUMIRA Pen</strong>, a prefilled autoinjector. Later versions used a higher concentration so each dose was smaller. An internal AbbVie presentation cited by Congress listed such “enhancements” under “biosimilar defense.” Patients got a better product; AbbVie got new patents and a moving target for copycats.</p>
<p>On 1 January 2013 Abbott split in two. Devices, diagnostics and nutrition kept the Abbott name. The research-based drug business became <strong>AbbVie</strong>, with Humira at its center ($9.3 billion in 2012, about half of that business’s sales). Investors could now choose between a diversified healthcare company and a high-margin drug company facing a [[patent cliff]]. AbbVie would stand or fall on what happened to Humira after 2016.</p>`},

      {type: 'custom', title: 'Indication expansion, year by year', intro: 'Each bar is one US indication, starting in the year the FDA approved it. The line on top is worldwide Humira sales. Click or hover a bar for details.',
        html: `<div class="card"><div id="ixSvg"></div><div id="ixInfo" class="hotinfo"><span class="hint">Click a bar to see the indication.</span></div></div>`,
        init(root, api) {
          const x0 = 2002, x1 = 2026, L = 196, R = 846, X = y => L + (y - x0) / (x1 - x0) * (R - L);
          const rowH = 25, base = 402;
          let s = `<svg viewBox="0 0 900 440" role="img" aria-label="Humira indications by approval year with sales line">`;
          // sales sparkline band
          const sy = v => 120 - v / 22 * 96;
          s += `<text x="${L - 10}" y="30" text-anchor="end" class="il-text">Worldwide sales</text><text x="${L - 10}" y="48" text-anchor="end" class="il-small">peak $21.2B (2022)</text>`;
          [0, 10, 20].forEach(v => s += `<path d="M${L} ${sy(v)} H${R}" class="il-line il-dash" fill="none" opacity=".5"/><text x="${R + 4}" y="${sy(v) + 4}" class="il-small">$${v}B</text>`);
          s += `<path d="${SALES.map((p, i) => (i ? 'L' : 'M') + X(p[0] + 0.5).toFixed(1) + ' ' + sy(p[1]).toFixed(1)).join(' ')}" class="st-6" stroke-width="3" fill="none"/>`;
          SALES.forEach(p => s += `<circle cx="${X(p[0] + 0.5)}" cy="${sy(p[1])}" r="3.5" class="il-6" data-tip="<b>${p[0]}</b><br>Humira worldwide: $${p[1].toFixed(1)}B"/>`);
          // markers
          [[2016.99, 'US core patent expires', 'end'], [2018.79, 'EU biosimilars', 'start'], [2023.08, 'US biosimilars', 'start']].forEach(([y, t, an], k) => {
            s += `<path d="M${X(y)} 130 V${base + 4}" class="il-line il-dash" fill="none"/><text x="${X(y) + (an === 'end' ? -4 : 4)}" y="${140 + k * 14}" text-anchor="${an}" class="il-small">${t}</text>`;
          });
          INDICATIONS.forEach((d, i) => {
            const y = base - (i + 1) * rowH, a = X(d.y), e1 = X(2023.08), e2 = X(2026);
            s += `<g class="ixrow" data-i="${i}" style="cursor:pointer" data-tip="<b>${d.n}</b><br>US approval: ${d.d}">`;
            s += `<text x="${L - 10}" y="${y + 16}" text-anchor="end" class="il-text">${d.n}</text>`;
            s += `<rect x="${a}" y="${y + 3}" width="${e1 - a}" height="${rowH - 7}" rx="5" class="il-1"/>`;
            s += `<rect x="${e1}" y="${y + 3}" width="${e2 - e1}" height="${rowH - 7}" rx="5" class="il-1s"/>`;
            s += `<rect x="${L}" y="${y}" width="${R - L}" height="${rowH}" class="il-none" fill="transparent"/></g>`;
          });
          for (let yy = 2002; yy <= 2026; yy += 4) s += `<text x="${X(yy)}" y="${base + 26}" text-anchor="middle" class="il-small">${yy}</text>`;
          s += `<text x="${X(2024.5)}" y="${base + 26}" text-anchor="middle" class="il-small"></text></svg>`;
          root.querySelector('#ixSvg').innerHTML = s;
          const info = root.querySelector('#ixInfo');
          root.querySelectorAll('.ixrow').forEach(g => g.addEventListener('click', () => {
            const d = INDICATIONS[+g.dataset.i];
            root.querySelectorAll('.ixrow').forEach(x => x.style.opacity = x === g ? 1 : 0.45);
            info.innerHTML = `<div class="h">${d.n} · US approval ${d.d}</div>${api.terms(d.t)}`;
          }));
        }},

      {type: 'callout', variant: 'product', heading: 'Land and expand, with a molecule', html: `<p>Humira\u2019s growth follows the enterprise-software playbook: land in one department (rheumatology), expand into adjacent ones (gastroenterology, dermatology, ophthalmology) with the same core product, and raise prices on the installed base.</p><p><b>Where it breaks:</b> each expansion needed years of randomized trials that might fail; you cannot ship a feature flag to Crohn\u2019s patients. And patients whose disease is controlled rarely \u201cchurn\u201d, while the person choosing the drug (the doctor) is not the one paying. That makes pricing power in pharma far stronger than in software, and far more ethically loaded.</p>`},

      // ---------------- 11. THE MONEY ----------------
      {type: 'chart', title: 'The sales curve', kicker: 'The money', intro: 'Company-reported worldwide net revenue for Humira. Abbott reported it until 2012, AbbVie from 2013.',
        chart: {kind: 'line', title: 'Humira worldwide net revenue', subtitle: 'US$ billions, nominal', unit: '$B', series: [{name: 'Humira', points: SALES}], yMax: 30,
          annotations: [{x: 2013, label: 'AbbVie spin-off', dy: 0}, {x: 2016.99, label: 'US core patent expires', dy: 18}, {x: 2018.8, label: 'EU biosimilars', dy: 36}, {x: 2023.08, label: 'US biosimilars', dy: 0}],
          note: 'Sources: Abbott 10-K filings (2003–2012; 2005–2011 rounded to $0.1B as reported), AbbVie 10-K filings (2013–2025).'},
        takeaway: 'Look at 2017 to 2022. The core patent had expired, yet sales kept rising by about $1 billion a year, driven by the United States. The drop only came when US biosimilars arrived in 2023.'},

      {type: 'story', title: 'How the price climbed', tocTitle: 'Pricing', html: `
<p>Humira’s growth came from more patients, more diseases and a higher price. The third is where the story turns controversial.</p>
<p>A 2021 staff report by the US House Committee on Oversight and Reform, based on more than 170,000 pages of internal documents, found that Humira’s US list price had been raised 27 times since 2003: 13 times under Abbott and 14 under AbbVie. That included a rise of nearly 30 percent in ten months, from March 2015 to January 2016. By 2021 a syringe listed at $2,984, or $77,586 a year, 470 percent more than at launch.</p>
<p>US drug prices have two layers. The <strong>[[list price]]</strong> (the [[WAC]]) is the sticker price. The <strong>[[net price]]</strong> is what the maker keeps after [[rebate|rebates]] to [[PBM|pharmacy benefit managers]], insurers and government programs. AbbVie argued that rebates explained much of the rise in list price. The committee found that net prices rose too, from $16,663 a year in 2009 to $35,041 in 2018, up 110 percent. List prices still matter. Uninsured patients, and those paying deductibles or coinsurance, pay against them. And rebates calculated as a share of the list price give middlemen a reason to prefer expensive drugs.</p>
<p>The report found that in 2015 a syringe cost $1,000 more in the US than in Canada, Japan, Korea or the UK, and that US net revenue from Humira more than tripled between 2013 and 2020, to $16.1 billion. It also alleged “[[shadow pricing]]” with Enbrel. AbbVie’s case was that the price reflects the drug’s value, that rebates and patient assistance offset much of it, and that revenue funds research. The committee countered that AbbVie’s “Humira Research & Development” spending was $5.19 billion from 2009 to 2018, about 4.2 percent of Humira revenue, and that much of it was aimed at blocking biosimilars.</p>`},

      {type: 'chart', title: 'List price and net price in the US', intro: 'The cost of a year of every-other-week injections. Only the points reported by the congressional investigation are shown; lines between them are straight-line connections, not measured paths.',
        chart: {kind: 'line', title: 'US price of one year of Humira', subtitle: 'US$ thousands per year (26 syringes). List = wholesale acquisition cost; net = after rebates and discounts', unit: '',
          series: [{name: 'List price (WAC)', short: 'List', labelDy: -10, points: [[2003, 13.6], [2015.25, 37.9], [2016.05, 49.3], [2021.4, 77.6]]}, {name: 'Net price', short: 'Net', labelDy: -10, points: [[2009, 16.7], [2018, 35.0]], color: 7, dashed: true}],
          yMax: 80, xTicks: [2003, 2006, 2009, 2012, 2015, 2018, 2021],
          note: 'House Committee on Oversight and Reform staff report, May 2021: list $522.64 per syringe at launch (2003), $1,456 (Mar 2015), $1,898 (Jan 2016), $2,984.09 (2021); net $16,663/yr (2009) and $35,041/yr (2018). Annual list figures are 26 × the per-syringe price.'},
        takeaway: 'The gap between list and net grew over time (that is the rebate), but the net price still roughly doubled in nine years, far faster than inflation.'},

      {type: 'callout', variant: 'numbers', heading: 'Humira by the numbers', html: `<ul><li><b>$170 billion+</b> in worldwide net revenue from launch to 2020, $107 billion of it from the US (House Oversight report).</li><li><b>61\u201365%</b> of AbbVie\u2019s total revenue in each year from 2016 to 2018.</li><li><b>27</b> US list price increases, taking a year\u2019s supply from $13.6k to $77.6k (2003\u20132021).</li><li><b>$21.2 billion</b> at the 2022 peak; <b>$4.5 billion</b> in 2025, down 79%.</li></ul>`},

      // ---------------- 12. THE THICKET ----------------
      {type: 'story', kicker: 'What came next, part 2', title: 'The patent thicket', tocTitle: 'Patent thicket', html: `
<p>A patent lets its owner exclude others from an invention for about 20 years from filing. For drugs, the strongest is the <strong>[[composition-of-matter patent]]</strong> on the molecule, because any copy infringes it. Humira’s expired on 31 December 2016. <strong>[[secondary patent|Secondary patents]]</strong> cover what surrounds the molecule: the formulation, manufacturing steps, doses for particular diseases, the pen. Each can be real innovation, and each is usually narrower and easier to challenge. Together they form a <strong>[[patent thicket]]</strong>.</p>
<p>Counts vary with what you count. The patent-reform group I-MAK counted 247 US applications in 2020 (later 257, with 130 granted). It found that 89 percent were filed after approval and nearly half from 2014 on. The US Court of Appeals for the Seventh Circuit, ruling in 2022, described 132 additional patents, the last expiring in 2034, which traced back to 20 “root” patents through [[continuation patent|continuation applications]]. US rules let a company obtain a patent that is not meaningfully distinct from one it already holds by filing a [[terminal disclaimer]]. One academic study estimated that about 80 percent of Humira’s US patents were duplicative in that sense. In Europe, I-MAK counted 76 applications and only a handful of granted patents.</p>
<p>Challengers won some rounds. In 2017 the Patent Trial and Appeal Board, in [[inter partes review]] cases brought by Coherus and Boehringer Ingelheim, invalidated three RA dosing patents as obvious, a decision upheld in 2020. But three patents out of more than a hundred does not open a market. Gonzalez told investors in April 2017:</p>
<blockquote class="pull">It was never contingent upon any one set of IP or any single set of patents or individual patents.<cite>Richard Gonzalez, AbbVie Q1 2017 earnings call, as quoted in the House Oversight report</cite></blockquote>
<p>That is the logic of a thicket: the strength is in the number. Clearing every patent costs millions of dollars and years per case. Launching before they are all cleared risks damages on a product selling more than $12 billion a year in the US.</p>`},

      {type: 'custom', title: 'The thicket, visualised', intro: 'Top: the key moments. Middle: one dot for each of the 247 US patent applications I-MAK counted, grouped by when they were filed. Bottom: when protection actually ended in the US and Europe. Click anything labeled.',
        html: `<div class="card"><div id="ptSvg"></div><div id="ptInfo" class="hotinfo"><span class="hint">Click a marker, a block of dots or a bar.</span></div></div>`,
        init(root, api) {
          const y0 = 1995, y1 = 2037, L = 40, R = 870, X = y => L + (y - y0) / (y1 - y0) * (R - L);
          const INFO = {
            m1996: ['9 Feb 1996: the core patent is filed', 'BASF files US 6,090,382 covering human antibodies that bind TNF-alpha, including D2E7. This is the [[composition-of-matter patent]].'],
            m2002: ['31 Dec 2002: FDA approval', 'Humira is approved for RA. About 89% of the later US patent applications were filed after this date.'],
            m2016: ['31 Dec 2016: the core patent expires', 'For a small-molecule drug, generics would typically launch around here. Amgen’s biosimilar had FDA approval since September 2016, but it did not launch in the US.'],
            m2017: ['2017: some patents fall, entry doesn’t follow', 'The Patent Trial and Appeal Board invalidates three RA dosing patents as obvious ([[inter partes review]] brought by Coherus and Boehringer Ingelheim). In September, Amgen settles for a 31 January 2023 US entry date.'],
            m2018: ['16 Oct 2018: Europe opens', 'Under the settlements, biosimilars launch across Europe. AbbVie held far fewer patents there.'],
            m2023: ['2023: the US opens', 'Amgen’s Amjevita launches on 31 January; other settled competitors enter from July onward, with dates running through the year.'],
            m2034: ['2034: last of the 132 patents expires', 'The Seventh Circuit noted that the last of the 132 additional patents would run until 2034. The settlements traded those later years for guaranteed 2023 entry. The congressional report put the last expiry of all patents and applications at 2037.'],
            b1: ['Before approval: about 27 applications', 'About 11% of the 247 applications were filed before the 2002 approval. These are the patents most people accept as incentives to invent and develop the drug.'],
            b2: ['2003–2013: about 98 applications', 'New indications, formulations, doses and manufacturing methods, filed while Humira was on the market and growing.'],
            b3: ['2014 onward: 122 applications', 'Nearly half of all applications, filed more than a decade after launch as the core patent’s expiry approached. Many were continuations linked to earlier patents by [[terminal disclaimer|terminal disclaimers]].'],
            us: ['US: protected in practice until 2023', 'Settlements with nine companies set US entry dates in 2023. Biosimilar makers also agreed to pay AbbVie royalties after entering.'],
            eu: ['Europe: until October 2018', 'Biosimilars entered Europe more than four years before the US, under the same settlement deals.'],
          };
          let s = `<svg viewBox="0 0 900 392" role="img" aria-label="Humira patent timeline">`;
          s += `<path d="M${L} 66 H${R}" class="il-line2" fill="none"/>`;
          for (let y = 1995; y <= 2035; y += 5) s += `<path d="M${X(y)} 60 V72" class="il-line" fill="none"/><text x="${X(y)}" y="90" text-anchor="middle" class="il-small">${y}</text>`;
          const marks = [['m1996', 1996.1, 'core patent filed', 'il-1', 0], ['m2002', 2002.99, 'approval', 'il-1', 1], ['m2016', 2016.99, 'core patent expires', 'il-2', 0], ['m2017', 2017.6, 'PTAB + Amgen deal', 'il-8', 1], ['m2018', 2018.79, 'EU biosimilars', 'il-3', 2], ['m2023', 2023.08, 'US biosimilars', 'il-3', 0], ['m2034', 2034, 'last patent expires', 'il-2', 1]];
          marks.forEach(([k, y, t, c, lv]) => { s += `<g class="pt" data-k="${k}" style="cursor:pointer"><circle cx="${X(y)}" cy="66" r="8" class="${c}"/><text x="${X(y)}" y="${42 - lv * 14}" text-anchor="middle" class="il-small">${t}</text></g>`; });
          // dot blocks
          const block = (k, n, cols, x, cls, label) => {
            let g = `<g class="pt" data-k="${k}" style="cursor:pointer">`;
            for (let i = 0; i < n; i++) g += `<circle cx="${x + (i % cols) * 10}" cy="${126 + Math.floor(i / cols) * 10}" r="3.8" class="${cls}"/>`;
            const rows = Math.ceil(n / cols);
            g += `<text x="${x}" y="${126 + rows * 10 + 14}" class="il-text">${label}</text></g>`;
            return g;
          };
          s += `<text x="${L}" y="112" class="il-text-2">US patent applications by filing period (1 dot = 1 application)</text>`;
          s += block('b1', 27, 9, X(1996.2), 'il-3', '~27 pre-approval');
          s += block('b2', 98, 18, X(2003.3), 'il-4', '~98 in 2003–2013');
          s += block('b3', 122, 14, X(2014.2), 'il-2', '122 from 2014 on');
          // protection bars
          const bar = (k, y, a, b, cls, label, ext) => `<g class="pt" data-k="${k}" style="cursor:pointer"><text x="${L}" y="${y + 15}" class="il-text">${label}</text><rect x="${X(a)}" y="${y}" width="${X(b) - X(a)}" height="20" rx="6" class="${cls}"/>${ext ? `<rect x="${X(b)}" y="${y + 5}" width="${X(ext) - X(b)}" height="10" rx="5" class="il-1s il-dash st-1" stroke-width="1"/>` : ''}</g>`;
          s += `<text x="${L}" y="282" class="il-text-2">When copies could actually launch</text>`;
          s += bar('us', 294, 2002.99, 2023.08, 'il-1', 'United States', 2034);
          s += bar('eu', 330, 2002.99, 2018.79, 'il-1', 'Europe');
          s += `<text x="${X(2023.3)}" y="291" class="il-small">patents on paper to 2034</text>`;
          s += `<text x="${L}" y="382" class="il-small">Filing-period counts derived from I-MAK (2020): 247 applications, 89% after approval, 122 from 2014. Schematic; not every application became a patent.</text></svg>`;
          root.querySelector('#ptSvg').innerHTML = s;
          const info = root.querySelector('#ptInfo');
          root.querySelectorAll('.pt').forEach(g => g.addEventListener('click', () => {
            const [h, t] = INFO[g.dataset.k];
            root.querySelectorAll('.pt').forEach(x => x.style.opacity = x === g ? 1 : 0.55);
            info.innerHTML = `<div class="h">${h}</div>${api.terms(t)}`;
          }));
        }},

      // ---------------- 13. DECISION 2: BIOSIMILAR MAKER ----------------
      {type: 'decision', title: 'Decision: sue or settle?', role: 'You run Amgen’s biosimilar business, mid-2017', scenario: `
<p>Your adalimumab copy, Amjevita, was approved by the FDA in September 2016. Humira’s core patent expired at the end of 2016. But AbbVie has sued you, asserting a long list of secondary patents, and it has more in reserve. US Humira revenue is running at over $12 billion a year. In Europe, AbbVie’s patents run out in October 2018, and your product is approved there too. AbbVie is open to talking. What do you do?</p>`,
        options: [
          {label: 'Launch in the US now “at risk” and fight the patents in court.', outcome: 'You would be first into the biggest drug market in the world, possibly years ahead of rivals. But an [[at-risk launch]] means that if even one asserted patent survives, you could owe damages based on AbbVie’s lost profits on a $12-billion-a-year product. Your board and your investors would need a very strong stomach.'},
          {label: 'Keep litigating, patent by patent, until you clear the thicket.', outcome: 'Principled, and you might win: challengers have already knocked out dosing patents at the Patent Office. But each patent fight takes years and millions of dollars, and AbbVie can assert new ones. By the time you clear them, the settlement dates others accept may have come and gone.'},
          {label: 'Settle: accept a fixed US entry date in a few years, launch in Europe on day one, pay royalties.', outcome: 'You trade the chance of early US entry for certainty: a guaranteed European launch in October 2018 and a known US date, possibly ahead of other biosimilars. You pay AbbVie royalties. Critics will say you helped keep US prices high; your shareholders will see a de-risked plan.'},
        ],
        reality: 'Amgen settled on 28 September 2017. AbbVie granted patent licenses worldwide; Amgen could launch in Europe on 16 October 2018 and in the US on 31 January 2023. Over the next two years, eight more companies settled on US dates later in 2023 (among them Boehringer Ingelheim, Mylan and Coherus, which the Seventh Circuit said apparently did not plan to sell in Europe), with royalties payable to AbbVie. Internal AbbVie documents described in the 2021 congressional report show that in 2014 its own executives expected three to five biosimilars by early 2017. Amgen’s five-month head start over the others was, the committee estimated, worth at least $493 million to Amgen.'},

      // ---------------- 14. BIOSIMILARS EXPLAINED ----------------
      {type: 'story', title: 'Why a copy of a biologic is not a generic', tocTitle: 'Biosimilars explained', html: `
<p>A generic pill is a chemically identical copy. It is approved on proof that the same amount of drug reaches the blood, and pharmacists substitute it automatically. A biologic like adalimumab is 1,330 amino acids, folded into shape and decorated with sugar chains by the cells that make it. It cannot be copied exactly. A competitor has to build its own cell line and process from scratch, and even the originator’s own batches vary within an approved range.</p>
<p>So the copy is called a <strong>[[biosimilar]]</strong>. In the FDA’s words, it is “highly similar to and has no clinically meaningful differences in terms of safety, purity, and potency” from the original, the <strong>[[reference product]]</strong>. The US pathway came from the <strong>[[BPCIA]]</strong> in 2009. Approval rests on detailed laboratory comparisons, studies of how the drug moves through the body, checks for immune reactions and sometimes a comparative trial. That is cheaper than developing a new drug, but far costlier than a generic.</p>
<p>In the US, an <strong>[[interchangeable biosimilar]]</strong> may be substituted by the pharmacist without asking the prescriber, subject to state law. The maker must show that the same result can be expected in any given patient. Boehringer Ingelheim’s Cyltezo became the first interchangeable adalimumab in October 2021. European regulators stated in 2022 that all EU-approved biosimilars are interchangeable. In practice, as you will see, what moved US patients was not the FDA designation but the middlemen.</p>`},

      {type: 'table', title: 'Generic versus biosimilar', columns: ['', 'Generic (small molecule)', 'Biosimilar (biologic)'],
        rows: [
          ['What it is', 'An identical copy of a chemical, such as a statin pill', 'A highly similar copy of a protein made in living cells, such as adalimumab'],
          ['Size', 'Tens of atoms (aspirin weighs 180 daltons)', 'Thousands of atoms (adalimumab weighs about 148,000 daltons)'],
          ['Proof of sameness', 'Same chemical, same blood levels', 'Detailed lab comparisons, blood levels, immune reactions, sometimes a trial'],
          ['US law', 'Hatch-Waxman Act (1984)', '[[BPCIA]] (2009)'],
          ['Pharmacy substitution (US)', 'Automatic in most states', 'Only for products designated [[interchangeable biosimilar|interchangeable]], subject to state law'],
          ['Humira example', '—', 'Amjevita (Amgen), Cyltezo (Boehringer), Hyrimoz (Sandoz), Hadlima (Samsung Bioepis), Yuflyma (Celltrion) and others'],
        ],
        caption: 'Sources: FDA biosimilar review and approval page; EMA–HMA statement (2022); FDA label for Humira; Drugs@FDA.'},

      {type: 'callout', variant: 'misconception', heading: '“A biosimilar is just a cheaper, lower-quality Humira”', html: `<p>Biosimilars must show no clinically meaningful differences from the original and meet the same manufacturing standards. Humira\u2019s own batches vary within an approved range, and biosimilars must fall within a similar one. \u201cSimilar\u201d reflects the fact that no two living-cell processes make identical molecules, not second-rate quality.</p>`},

      // ---------------- 15. EUROPE VS US ----------------
      {type: 'story', title: 'Two continents, one molecule', tocTitle: 'Europe vs US', html: `
<p>The settlements created a natural experiment: the same molecule and the same competitors, but copies arriving four years apart.</p>
<h3>Europe, October 2018</h3>
<p>On 16 October 2018 several biosimilars launched across Europe, including Amgevita, Imraldi, Hyrimoz and Hulio. Many European health systems buy through <strong>[[tender|tenders]]</strong>, awarding the business to the best bid. England’s NHS, for which adalimumab was the most expensive hospital drug, ran one of the largest. I-MAK reported that within six months prices had fallen by 70 percent and biosimilars held over a third of the market. AbbVie said it cut prices by as much as 80 percent in some tenders. Its international Humira revenue fell 31 percent in 2019, while US revenue grew 8.6 percent.</p>
<h3>The United States, 2023</h3>
<p>Amjevita launched on 31 January 2023, and a wave of competitors followed from July. Within months the cheapest were listed more than 80 percent below Humira. Yet by the end of 2023, biosimilars had less than 3 percent of prescriptions. The three largest [[PBM|PBMs]] handle about 80 percent of US prescriptions and earn money partly from [[rebate|rebates]]. A high-list-price drug with a big confidential rebate can be worth more to them than a cheap drug with none. Humira stayed on formularies at parity, so doctors and patients had no reason to switch.</p>
<p>In April 2024 CVS Caremark dropped Humira from its main formularies. It preferred Sandoz’s Hyrimoz, a [[private label]] Hyrimoz from its own subsidiary Cordavis, and an unbranded Humira also sold through Cordavis. Within two months the Cordavis products had 15 percent of prescriptions. Express Scripts and OptumRx followed with private labels of their own.</p>
<p>AbbVie’s US Humira revenue fell from $18.6 billion in 2022 to $3.1 billion in 2025. Yet one 2025 analysis estimated that biosimilars and unbranded Humira together had under 20 percent of prescriptions. If most patients stayed on Humira, most of the loss must have come through price: bigger rebates to keep formulary access. Net prices are confidential, so this is an inference.</p>`},

      {type: 'chart', title: 'The same drug, two erosion curves', intro: 'Humira net revenue in the United States versus the rest of the world. International includes Japan and other markets, but Europe was the biggest part of it.',
        chart: {kind: 'line', title: 'Humira net revenue by region', subtitle: 'US$ billions, company-reported', unit: '$B',
          series: [{name: 'United States', labelDy: -12, points: [[2016, 10.432], [2017, 12.361], [2018, 13.685], [2019, 14.864], [2020, 16.112], [2021, 17.330], [2022, 18.619], [2023, 12.160], [2024, 7.142], [2025, 3.062]]},
            {name: 'International', labelDy: -8, points: [[2016, 5.646], [2017, 6.066], [2018, 6.251], [2019, 4.305], [2020, 3.720], [2021, 3.364], [2022, 2.618], [2023, 2.244], [2024, 1.851], [2025, 1.478]], color: 2}],
          yMax: 25, annotations: [{x: 2018.8, label: 'EU biosimilars (Oct 2018)', dy: 0}, {x: 2023.08, label: 'US biosimilars (Jan 2023)', dy: 18}],
          note: 'AbbVie Form 10-K filings for 2018, 2019, 2022 and 2025. International revenue is also affected by exchange rates.'},
        takeaway: 'Europe eroded first and fast; the US kept growing for four more years and then fell further and faster in absolute dollars.'},

      {type: 'custom', title: 'Simulator: how biosimilars erode a brand', intro: 'A toy model of one market after biosimilars arrive. Set how cheap the copies are, how much share they win, and how far the brand cuts its own net price to defend itself. Or load a preset.',
        html: `<div class="card">
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px"><button class="btn" data-p="eu">Europe 2018–19 style</button><button class="btn" data-p="us23">US 2023</button><button class="btn" data-p="us25">US 2025</button></div>
          <div class="explorer" style="border:0;padding:0">
            <label><span>Biosimilar price discount</span><input type="range" min="0" max="90" value="70" data-id="d"><span class="out" data-o="d"></span></label>
            <label><span>Biosimilar share (from year 2)</span><input type="range" min="0" max="90" value="40" data-id="s"><span class="out" data-o="s"></span></label>
            <label><span>Brand’s own net price cut</span><input type="range" min="0" max="90" value="60" data-id="c"><span class="out" data-o="c"></span></label>
          </div>
          <div id="erChart" style="margin-top:12px"></div><div id="erText" class="takeaway"></div></div>`,
        init(root, api) {
          const P = {eu: {d: 70, s: 40, c: 60, t: 'Loosely based on reports that European prices fell about 70% within six months, biosimilars took over a third of the market, and AbbVie cut prices by up to 80% in some tenders.'},
            us23: {d: 85, s: 3, c: 0, t: 'Biosimilars listed at up to 85% below Humira but reached under 3% of prescriptions in 2023. The brand’s real net price concessions are not public; 0% here shows the list-price view.'},
            us25: {d: 85, s: 20, c: 80, t: 'About 20% share after PBM formulary changes. The 80% brand net price cut is not a reported number: it is roughly what the toy needs to reproduce AbbVie’s reported 84% fall in US Humira revenue from 2022 to 2025. That suggests most of the damage came through price, not volume.'}};
          const inputs = root.querySelectorAll('input[type=range]');
          let note = P.eu.t;
          const upd = () => {
            const v = {}; inputs.forEach(i => { v[i.dataset.id] = +i.value; root.querySelector(`[data-o="${i.dataset.id}"]`).textContent = i.value + '%'; });
            const yrs = [0, 1, 2, 3, 4, 5], orig = [], bios = [], tot = [];
            yrs.forEach(t => { const r = Math.min(1, t / 2), sh = v.s / 100 * r, po = 1 - v.c / 100 * r, pb = 1 - v.d / 100;
              const o = 100 * (1 - sh) * po, b = t === 0 ? 0 : 100 * sh * pb; orig.push([t, +o.toFixed(1)]); bios.push([t, +b.toFixed(1)]); tot.push([t, +(o + b).toFixed(1)]); });
            api.mountChart(root.querySelector('#erChart'), {kind: 'line', title: 'Spending index (pre-entry = 100)', subtitle: 'Toy model: constant patient volume; year 0 is the year before entry', unit: '', yMax: 110, xFmt: t => t === 0 ? 'Before' : 'Year ' + t, xTicks: yrs,
              series: [{name: 'Brand revenue', short: 'Brand', labelDy: -10, points: orig}, {name: 'Biosimilar revenue', short: 'Biosimilars', labelDy: -10, points: bios, color: 3}, {name: 'Total spend by payers', short: 'Total spend', labelDy: -10, points: tot, color: 7, dashed: true}]});
            const o5 = orig[5][1], t5 = tot[5][1];
            root.querySelector('#erText').innerHTML = `By year 5 the brand keeps <b>${o5.toFixed(0)}%</b> of its old revenue, and payers spend <b>${t5.toFixed(0)}%</b> of what they did. ${note}`;
          };
          root.addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (!b) return; const p = P[b.dataset.p]; inputs.forEach(i => i.value = p[i.dataset.id]); note = p.t; upd(); });
          root.addEventListener('input', () => { note = 'Your own scenario. Notice that the brand can lose most of its revenue while keeping most of its patients, if it defends share with price.'; upd(); });
          upd();
        }},

      {type: 'callout', variant: 'product', heading: 'Distribution beats price: the PBM as app store', html: `<p>A cheaper, equivalent product did not win in 2023 because the customer (the patient) doesn\u2019t choose, and the gatekeeper (the PBM) was paid by the incumbent. Picture an app store ranking apps by the revenue share they pay. Biosimilars only gained share when a gatekeeper changed its own incentives by launching its own private label.</p><p><b>Where it breaks:</b> an app user can search for the cheaper app. A patient generally cannot fill a prescription for a drug their plan excludes without paying thousands of dollars, and PBM rebates are confidential, so nobody outside can see whose interests are served.</p>`},

      // ---------------- 16. DECISION 3: ABBVIE CLIFF ----------------
      {type: 'decision', title: 'Decision: how do you handle the cliff?', role: 'You are on AbbVie’s executive team, 2015', scenario: `
<p>Humira brings in about $14 billion a year and most of your profit. The core US patent expires in 2016; Europe will see biosimilars around 2018. Your thicket and legal team can probably buy some years in the US, but eventually Humira will erode. You have strong cash flow and a pipeline that includes two immunology candidates: an IL-23 antibody licensed from Boehringer Ingelheim (later Skyrizi) and a JAK inhibitor pill (later Rinvoq). Where do you put your effort?</p>`,
        options: [
          {label: 'Defend Humira as long as possible and return cash to shareholders through dividends and buybacks.', outcome: 'This maximises near-term cash, and every year of US exclusivity is worth well over $10 billion in revenue. But it only delays the cliff. When it comes, you are a company with no growth engine, and a thicket strategy draws political fire.'},
          {label: 'Buy growth: make large acquisitions to diversify away from immunology.', outcome: 'Deals can replace revenue quickly and spread risk across therapy areas. But acquisitions are expensive, bring integration headaches, and the price of any asset reflects the fact that you need it.'},
          {label: 'Build successors in immunology and run head-to-head trials against Humira itself, so doctors move patients before biosimilars arrive.', outcome: 'You keep your relationships with the same specialists and turn the cliff into a handover. But you are deliberately cannibalising a $14-billion product, and trials against a well-established drug can fail in public.'},
        ],
        reality: 'AbbVie did all three. It defended Humira with the thicket and settlements, secured 2023 US entry dates, and returned large amounts of cash to shareholders. It bought Pharmacyclics (Imbruvica, a cancer drug) for $21 billion in 2015 and announced the roughly $63 billion acquisition of Allergan (including Botox) in June 2019. And it ran its successors directly against Humira: Skyrizi beat Humira in psoriasis in the IMMvent trial, and Rinvoq beat it in RA in SELECT-COMPARE. By 2025 Skyrizi and Rinvoq made up about 42% of AbbVie’s revenue.'},

      // ---------------- 17. SUCCESSION ----------------
      {type: 'story', title: 'The succession plan: Skyrizi and Rinvoq', tocTitle: 'Succession', html: `
<p>AbbVie’s boldest move was replacing Humira with its own drugs.</p>
<p><strong>Skyrizi</strong> (risankizumab) is a [[humanized antibody]] against <strong>[[IL-23]]</strong>, a cytokine that sustains a group of inflammatory T cells and matters especially in psoriasis and bowel disease. Approved for psoriasis in April 2019, it later added psoriatic arthritis, Crohn’s disease and ulcerative colitis, three of Humira’s biggest markets. In psoriasis, after two starting doses it is injected every 12 weeks.</p>
<p><strong>Rinvoq</strong> (upadacitinib) is a <strong>[[JAK inhibitor]]</strong> pill that blocks relay enzymes inside immune cells. It was approved for RA in August 2019, and later for many other conditions. The JAK class carries a US [[black box warning]] (serious infections, death, cancer, heart events and blood clots). Rinvoq’s RA use is for patients who did not do well enough on a TNF blocker, so Humira and its copies remain the usual first biologic in RA.</p>
<p>AbbVie tested both head-to-head against Humira: Skyrizi in IMMvent (below), and Rinvoq in SELECT-COMPARE, where it beat Humira in RA. A patient already switched to Skyrizi is one a biosimilar cannot win.</p>
<p>Did it work? In 2025 Skyrizi sold $17.6 billion and Rinvoq $8.3 billion: $25.9 billion together, more than Humira’s peak. AbbVie’s revenue hit a record $61.2 billion, above the $58.1 billion of 2022. The caveats: two drugs now make up about 42 percent of revenue, Rinvoq’s warning limits its early use, and the same questions about price and patents will one day come for the successors.</p>`},

      {type: 'trial', title: 'IMMvent: AbbVie’s new drug versus its old one', intro: 'Skyrizi (risankizumab) against Humira (adalimumab) in moderate-to-severe plaque psoriasis. Both arms were active drugs; there was no placebo.',
        design: {name: 'IMMvent', phase: 'Phase 3', blinding: 'Double-blind (part A)', years: '2016–2017', n: 605,
          population: 'Adults with moderate-to-severe chronic plaque psoriasis at 66 clinics in 11 countries',
          randomization: '1:1',
          arms: [{name: 'Risankizumab (Skyrizi)', n: 301, desc: '150 mg at weeks 0 and 4'}, {name: 'Adalimumab (Humira)', n: 304, desc: '40 mg every other week', control: true}],
          endpoint: 'PASI 90 and clear or almost clear skin at week 16',
          details: {'Co-primary endpoints': '[[PASI 90]] and a physician score of clear or almost clear (sPGA 0/1) at week 16', 'Part B': 'Humira patients with only a partial response were re-randomized to stay on Humira or switch to Skyrizi'}},
        predict: {q: 'At week 16, how did Skyrizi compare with Humira on PASI 90 (near-clear skin)?', options: ['About the same: 50% versus 47%', 'Worse: 40% versus 47%', 'Clearly better: 72% versus 47%'], answer: 2,
          explain: '72% of Skyrizi patients reached PASI 90 versus 47% on Humira (difference about 25 percentage points, P < 0.0001). Among Humira patients with only a partial response, 66% of those switched to Skyrizi reached PASI 90 by week 44, versus 21% of those who stayed on Humira. Adverse event rates were similar (56% vs 57% in part A).'},
        results: [
          {kind: 'bar', title: 'Week 16 results', unit: '%', categories: ['PASI 90', 'Clear or almost clear (sPGA 0/1)'],
            series: [{name: 'Risankizumab (Skyrizi)', values: [72, 84]}, {name: 'Adalimumab (Humira)', values: [47, 60], color: 2}],
            note: 'Reich et al., Lancet 2019.'},
          {kind: 'bar', title: 'Part B: Humira partial responders at week 44, PASI 90', unit: '%', categories: ['Switched to Skyrizi', 'Stayed on Humira'],
            series: [{name: 'PASI 90', values: [66, 21]}], colorByCategory: true, note: '53 patients switched, 56 stayed. Reich et al., Lancet 2019.'},
        ],
        takeaway: 'AbbVie proved its own blockbuster could be beaten in psoriasis, and gave doctors a reason to switch patients before biosimilars could compete for them.'},

      {type: 'chart', title: 'The handover', intro: 'Worldwide net revenue for Humira and its two successors.',
        chart: {kind: 'line', title: 'Humira vs Skyrizi and Rinvoq', subtitle: 'US$ billions, company-reported', unit: '$B',
          series: [{name: 'Humira', labelDy: -10, points: [[2019, 19.169], [2020, 19.832], [2021, 20.694], [2022, 21.237], [2023, 14.404], [2024, 8.993], [2025, 4.54]]},
            {name: 'Skyrizi', labelDy: -10, points: [[2019, 0.355], [2020, 1.59], [2021, 2.939], [2022, 5.165], [2023, 7.763], [2024, 11.718], [2025, 17.562]], color: 3},
            {name: 'Rinvoq', labelDy: -10, points: [[2019, 0.047], [2020, 0.731], [2021, 1.651], [2022, 2.522], [2023, 3.969], [2024, 5.971], [2025, 8.304]], color: 5},
            {name: 'Skyrizi + Rinvoq', labelDy: -10, points: [[2019, 0.402], [2020, 2.321], [2021, 4.59], [2022, 7.687], [2023, 11.732], [2024, 17.689], [2025, 25.866]], color: 7, dashed: true}],
          note: 'AbbVie Form 10-K filings for 2019, 2022 and 2025.'},
        takeaway: 'The successors crossed Humira in 2024 and passed its all-time peak in 2025.'},

      // ---------------- 18. CriticizM VS Defense ----------------
      {type: 'story', kicker: 'Judgment', title: 'The case against, and the case for', tocTitle: 'The debate', html: `
<p>Humira is cited in almost every argument about US drug pricing.</p>
<h3>The case against</h3>
<ul>
<li><strong>The patents were about delay, not invention.</strong> About 90 percent of applications came after approval, many of them near-duplicates. An internal presentation said one goal of “enhancements” was to “raise barriers to competitor ability to replicate.”</li>
<li><strong>The settlements split the world.</strong> Critics argued that competitors got Europe from 2018 in exchange for staying out of the US until 2023. An internal AbbVie analysis estimated that earlier entry would have saved the US health system at least $19 billion from 2016 to 2023.</li>
<li><strong>Prices rose far faster than inflation</strong>, alongside executive bonuses tied to Humira revenue, and orphan-drug incentives were used for a multi-billion-dollar product.</li>
<li><strong>Patients paid</strong>, through deductibles and coinsurance tied to the list price.</li>
</ul>
<h3>The case for</h3>
<ul>
<li><strong>Every patent was granted and presumed valid</strong>, and challengers could knock patents out. For the Seventh Circuit, Judge Frank Easterbrook wrote: “If AbbVie made 132 inventions, why can’t it hold 132 patents?” and added that “weak patents are valid.”</li>
<li><strong>The settlements were lawful.</strong> AbbVie paid nobody to stay away (the kind of [[reverse payment]] the Supreme Court has said can be illegal). Instead the biosimilar makers paid AbbVie royalties, and entry came years before the last patents expired. The court noted that three US entrants with no European plans accepted 2023 dates anyway.</li>
<li><strong>The improvements were real.</strong> New indications required expensive trials and gave doctors an approved option, in one case for a disease with no approved treatment at all. Better pens matter to people who inject for decades.</li>
<li><strong>AbbVie played by the rules Congress wrote</strong>, and the profits funded the successors that beat Humira head-to-head.</li>
</ul>
<p>Both can be true. The courts found AbbVie’s conduct legal; many policymakers concluded the law allowed too much. For someone entering the industry, the lesson is that <em>legal</em> and <em>defensible in public</em> are different tests, and your most valuable product will be judged by both.</p>`},

      {type: 'callout', variant: 'whatif', heading: 'What if US biosimilars had launched in 2018, alongside Europe?', html: `<p>AbbVie\u2019s own internal analysis, as described by the House committee, estimated that earlier US entry would have saved the health system at least <b>$19 billion</b> from 2016 to 2023.</p><p>But the counterfactual cuts both ways. Without its extra US years, AbbVie would have had less cash to buy Allergan and fund the Skyrizi and Rinvoq trials, and the industry less reason to invest in expanding biologics into new diseases. Cheaper medicines today versus incentives for tomorrow\u2019s medicines is the central trade-off in drug policy. Humira is its most expensive example.</p>`},

      // ---------------- QUIZ ----------------
      {type: 'quiz', title: 'Check your understanding', questions: [
        {q: 'Why did the 1989 Brennan, Feldmann and Maini experiment change thinking about RA?', options: ['TNF turned out to be the only cytokine in RA joints', 'Blocking TNF also cut another cytokine (IL-1), suggesting TNF sits at the top of a cascade', 'It proved RA is caused by an infection', 'It showed mouse antibodies were safe in people'], answer: 1, explain: 'The prevailing view was that cytokines were redundant. One target quietening the network made a single-target drug plausible.'},
        {q: 'What makes phage display work?', options: ['Human volunteers make the antibodies', 'It yields antibodies that never provoke immune responses', 'It replaces clinical trials', 'Each phage carries an antibody fragment outside and its gene inside, so winners from billions can be selected and decoded'], answer: 3, explain: 'The protein\u2013gene link is the whole trick. Fully human antibodies can still provoke some immune response.'},
        {q: 'Remicade, Enbrel and Humira all block TNF. Which is correct?', options: ['Remicade is chimeric, Enbrel a receptor fusion protein, Humira fully human', 'All three are fully human antibodies', 'Enbrel is a pill', 'Humira was first to market'], answer: 0, explain: 'Humira was third. It competed on being fully human and self-injected every other week.'},
        {q: 'Why was the ARMADA placebo response (14.5% ACR20) so low?', options: ['The placebo was harmful', 'Placebo patients got no injections', 'Patients had active disease despite methotrexate, and everyone stayed on it, so few improved by chance', 'ACR20 is impossible without a biologic'], answer: 2, explain: 'The trial measured the effect of adding adalimumab to a drug that had already failed to control the disease.'},
        {q: 'Humira\u2019s molecule patent expired at the end of 2016. Why did US biosimilars wait until 2023?', options: ['No biosimilar was FDA-approved until 2023', 'US law bans biosimilars for ten years after patent expiry', 'Nobody could manufacture one until 2022', 'Over a hundred secondary patents, and settlements that set 2023 entry dates'], answer: 3, explain: 'Amjevita was approved in September 2016. The thicket drove settlements with 2023 dates.'},
        {q: 'Why is a Humira copy a \u201cbiosimilar\u201d rather than a generic?', options: ['A protein made by living cells cannot be copied exactly, so it must be shown highly similar with no clinically meaningful differences', 'It is deliberately less potent', 'Because it is made in Europe', 'It has a different active ingredient'], answer: 0, explain: 'Cell lines, conditions and glycosylation differ between makers; even the originator\u2019s batches vary within a range.'},
        {q: 'In 2023 biosimilars listed up to 85% below Humira but won under 3% of prescriptions. Why?', options: ['Trial data showed they were unsafe', 'They were only sold in hospitals', 'PBMs kept Humira on formularies, backed by large rebates, so nobody had a reason to switch', 'The FDA required new prescriptions'], answer: 2, explain: 'Share moved only when PBMs changed formularies, starting with CVS Caremark in April 2024.'},
        {q: 'AbbVie\u2019s US Humira revenue fell about 84% from 2022 to 2025, while copies had under 20% of prescriptions. What does that imply?', options: ['Patients stopped using adalimumab', 'Most of the loss came from lower net prices, not lost volume', 'Biosimilars cost more than Humira', 'AbbVie stopped selling Humira in the US'], answer: 1, explain: 'If most patients stayed on Humira, revenue could only fall that far through price. It is an inference; net prices are confidential.'},
        {q: 'Which best describes AbbVie\u2019s succession strategy?', options: ['Patents only, no new drugs', 'Selling Humira to Amgen', 'Cutting the US price in 2017 to deter biosimilars', 'New immunology drugs tested head-to-head against Humira, plus large acquisitions'], answer: 3, explain: 'Skyrizi and Rinvoq beat Humira in IMMvent and SELECT-COMPARE and by 2025 outsold its peak.'},
      ]},

      // ---------------- LESSONS ----------------
      {type: 'lessons', title: 'What this case teaches', items: [
        {title: 'Validate targets in human disease tissue', text: 'The TNF insight came from patients\u2019 own joint cells, then a small open trial, then a randomized one.', links: ['gleevec', 'trikafta', 'tgn1412']},
        {title: 'Platforms compound', text: 'Phage display produced Humira and many antibodies after it. A discovery engine can outlast any single molecule.', links: ['comirnaty', 'enhertu', 'keytruda']},
        {title: 'A drug is a franchise, not a launch', text: 'Third in its class, Humira became the world\u2019s top seller through new indications, devices and relentless lifecycle management.', links: ['keytruda', 'ozempic']},
        {title: 'Exclusivity is designed, not given', text: 'Patents, settlements and designations set Humira\u2019s timeline as much as science did, and decided where the backlash landed.', links: ['sovaldi', 'zolgensma', 'spinraza']},
        {title: 'The channel decides who wins', text: 'Cheaper biosimilars barely moved until PBMs changed formularies. Who controls access, and how they are paid, beats list price.', links: ['sovaldi', 'exubera']},
        {title: 'Cannibalise yourself first', text: 'AbbVie beat its own blockbuster in trials and moved patients to successors before copies arrived.', links: ['ozempic', 'vioxx']},
      ]},

      // ---------------- SOURCES ----------------
      {type: 'sources', title: 'Sources', items: [
        {text: 'Brennan FM et al. Inhibitory effect of TNF alpha antibodies on synovial cell interleukin-1 production in RA. Lancet 1989.', url: 'https://pubmed.ncbi.nlm.nih.gov/2569055/'},
        {text: 'Elliott MJ et al. Treatment of RA with chimeric monoclonal antibodies to TNF alpha. Arthritis Rheum 1993.', url: 'https://pubmed.ncbi.nlm.nih.gov/8250987/'},
        {text: 'Elliott MJ et al. Randomised double-blind comparison of cA2 versus placebo in RA. Lancet 1994; and Repeated therapy with cA2, Lancet 1994.', url: 'https://pubmed.ncbi.nlm.nih.gov/7934491/'},
        {text: 'Feldmann M, Maini RN. TNF defined as a therapeutic target for RA (Lasker Award essay). Nat Med 2003.', url: 'https://pubmed.ncbi.nlm.nih.gov/14520364/'},
        {text: 'McCafferty J et al. Phage antibodies: filamentous phage displaying antibody variable domains. Nature 1990.', url: 'https://pubmed.ncbi.nlm.nih.gov/2247164/'},
        {text: 'Jespers LS et al. Guiding the selection of human antibodies from phage display repertoires to a single epitope. Biotechnology 1994.', url: 'https://pubmed.ncbi.nlm.nih.gov/7521646/'},
        {text: 'Osbourn J, Groves M, Vaughan T. From rodent reagents to human therapeutics using antibody guided selection. Methods 2005.', url: 'https://pubmed.ncbi.nlm.nih.gov/15848075/'},
        {text: 'Nobel Prize in Chemistry 2018: press release and popular information.', url: 'https://www.nobelprize.org/prizes/chemistry/2018/popular-information/'},
        {text: 'US Patent 6,090,382 (Salfeld et al., BASF), filed 9 Feb 1996, expired 31 Dec 2016.', url: 'https://patents.google.com/patent/US6090382A/en'},
        {text: 'Abbott Form 8-K, 2 Mar 2001: acquisition of BASF pharmaceutical business for $6.9 billion.', url: 'https://www.sec.gov/Archives/edgar/data/1800/000091205701007683/a2040697z8-k.htm'},
        {text: 'Abbott Form 10-K filings, 2002\u20132012 (approval date; Humira sales 2003\u20132012).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000001800&type=10-K'},
        {text: 'AbbVie Form 10-K filings, 2012\u20132025 (spin-off; Humira, Skyrizi, Rinvoq and total revenue; share of revenue; biosimilar erosion).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001551152&type=10-K'},
        {text: 'FDA Drugs@FDA records: Humira (BLA 125057) approvals and efficacy supplements; Remicade; Enbrel; Skyrizi; Rinvoq; adalimumab biosimilars incl. Cyltezo (BLA 761058).', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=125057'},
        {text: 'FDA labels: Humira (current and July 2006, incl. HUMIRA Pen, boxed warning, half-life, immunogenicity); Rinvoq (boxed warning).', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2006/125057s062lbl.pdf'},
        {text: 'Weinblatt ME et al. The ARMADA trial. Arthritis Rheum 2003.', url: 'https://pubmed.ncbi.nlm.nih.gov/12528101/'},
        {text: 'Keystone EC et al. Radiographic, clinical and functional outcomes with adalimumab (DE019). Arthritis Rheum 2004.', url: 'https://pubmed.ncbi.nlm.nih.gov/15146409/'},
        {text: 'van de Putte LB et al. Adalimumab monotherapy (DE011). Ann Rheum Dis 2004.', url: 'https://pubmed.ncbi.nlm.nih.gov/15082480/'},
        {text: 'Pincus T et al. DMARDs and radiographic progression in RA: updating a 1983 review. Rheumatology 2002.', url: 'https://pubmed.ncbi.nlm.nih.gov/12468813/'},
        {text: 'World Health Organization. Rheumatoid arthritis fact sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/rheumatoid-arthritis'},
        {text: 'US House Committee on Oversight and Reform. Drug Pricing Investigation: AbbVie\u2014Humira and Imbruvica. Staff report, May 2021.', url: 'https://oversightdemocrats.house.gov/imo/media/doc/Committee%20on%20Oversight%20and%20Reform%20-%20AbbVie%20Staff%20Report.pdf'},
        {text: 'I-MAK. Overpatented, Overpriced: Special Humira Edition (2020); Humira\u2019s Patent Wall (2020).', url: 'https://www.i-mak.org/wp-content/uploads/2020/10/i-mak.humira.report.3.final-REVISED-2020-10-06.pdf'},
        {text: 'Mayor and City Council of Baltimore v. AbbVie Inc., No. 20-2402 (7th Cir. 2022).', url: 'https://www.courtlistener.com/opinion/7853046/mayor-and-city-council-of-baltimore-v-abbvie-inc/'},
        {text: 'Goode R, Chao B. Biological patent thickets and delayed access to biosimilars, an American problem. J Law Biosci 2022.', url: 'https://pubmed.ncbi.nlm.nih.gov/36072417/'},
        {text: 'Amgen press release, 28 Sep 2017: Amgen and AbbVie settlement (EU entry 16 Oct 2018; US 31 Jan 2023).', url: 'https://www.amgen.com/newsroom/press-releases/2017/09/amgen-and-abbvie-agree-to-settlement-allowing-commercialization-of-amgevita'},
        {text: 'FDA. Biosimilars: review and approval.', url: 'https://www.fda.gov/drugs/biosimilars/review-and-approval'},
        {text: 'EMA/HMA statement: biosimilar medicines can be interchanged, Sep 2022.', url: 'https://www.ema.europa.eu/en/news/biosimilar-medicines-can-be-interchanged'},
        {text: 'Mehr SR. Private-label market access channel and biosimilars. J Manag Care Spec Pharm 2025.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12288720/'},
        {text: 'Reich K et al. Risankizumab versus adalimumab in plaque psoriasis (IMMvent). Lancet 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/31280967/'},
        {text: 'Fleischmann RM et al. Upadacitinib or adalimumab plus methotrexate in RA (SELECT-COMPARE, 48 weeks). Ann Rheum Dis 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/31362993/'},
        {text: 'Gibbons JB, Laber M, Bennett CL. Humira: the first $20 billion drug. Am J Manag Care 2023.', url: 'https://pubmed.ncbi.nlm.nih.gov/36811981/'},
        {text: 'Wikipedia: Cambridge Antibody Technology, Adalimumab, Infliximab, Etanercept, AbbVie (background only: CAT founding and royalty case, cA2/Enbrel origins, Allergan deal).', url: 'https://en.wikipedia.org/wiki/Cambridge_Antibody_Technology'},
      ]},
    ],
  });
})();
