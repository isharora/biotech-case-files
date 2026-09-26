// Trikafta (elexacaftor/tezacaftor/ivacaftor), Vertex Pharmaceuticals. See GUIDE.md.
registerCase({
  id: 'trikafta', kind: 'success',
  brand: 'Trikafta', generic: 'elexacaftor / tezacaftor / ivacaftor', company: 'Vertex Pharmaceuticals',
  tagline: `A patient charity paid a small company to screen for molecules that could repair a broken salt channel. Twenty years and four drugs later, three pills a day reversed much of what goes wrong in [[cystic fibrosis]] for about 9 in 10 patients, at about $300,000 a year.`,
  chips: [['Disease', '[[cystic fibrosis]]'], ['Modality', '[[small molecule]] combination'], ['Target', '[[CFTR]] chloride channel'], ['Approved', 'October 2019 (US)']],
  readingTime: 35,
  stats: [
    {v: '+14.3 pts', l: 'Lung function ([[ppFEV1]]) versus placebo through 24 weeks', n: 'Middleton et al., NEJM 2019'},
    {v: '~90%', l: 'Share of people with CF who carry at least one [[F508del]] copy', n: 'NEJM 2019; FDA label'},
    {v: '$150M → $3.3B', l: 'What the CF Foundation put into Vertex, and what it sold its royalty for in 2014', n: 'Chemistry World 2014; Royalty Pharma S-1'},
    {v: '$10.3B', l: 'Trikafta/Kaftrio net sales in 2025, company-reported, worldwide', n: 'Vertex 10-K 2025'},
    {v: '29 → 68', l: 'US median survival age with CF, 1990 versus 2023', n: 'US CF Foundation registry analysis, Pulm Ther 2025'},
  ],
  emblem: `<svg viewBox="0 0 300 300" role="img" aria-label="An open CFTR channel in a cell membrane with chloride flowing through">
    <circle cx="150" cy="150" r="130" class="il-1s"/>
    <rect x="34" y="168" width="232" height="70" rx="18" class="il-3s"/>
    <line x1="34" y1="160" x2="266" y2="160" class="il-line2" stroke-linecap="round"/>
    <line x1="34" y1="178" x2="266" y2="178" class="il-line2" stroke-linecap="round"/>
    <rect x="116" y="126" width="24" height="88" rx="11" class="il-2"/>
    <rect x="160" y="126" width="24" height="88" rx="11" class="il-2"/>
    <rect x="176" y="98" width="12" height="34" rx="5" class="il-7" transform="rotate(28 182 115)"/>
    <path d="M150 232 V70" class="st-4 flow" stroke-width="3" fill="none"/>
    <circle cx="150" cy="198" r="8" class="il-4"/><circle cx="150" cy="150" r="8" class="il-4"/><circle cx="150" cy="104" r="8" class="il-4"/><circle cx="150" cy="66" r="8" class="il-4"/>
    <path d="M204 128 l12 -12 l12 12 l-12 12 z" class="il-1"/>
    <rect x="96" y="186" width="18" height="18" rx="3" class="il-1"/>
    <path d="M188 206 l20 0 l-10 -18 z" class="il-1"/>
  </svg>`,
  facts: {start: 1998, firstHuman: 2017, approval: 2019, end: null, peakSalesB: 10.3, pivotalN: 403,
    area: 'rare', modality: 'small molecule', target: 'CFTR'},
  themes: ['patient-advocacy', 'dealmaking', 'pricing', 'biomarkers'],
  glossary: {
    'cystic fibrosis': 'An inherited disease in which a broken salt channel (CFTR) leaves mucus thick and sticky in the lungs, pancreas, gut and other organs. Often shortened to CF.',
    'CF': 'Cystic fibrosis.',
    'CFTR': 'Cystic fibrosis transmembrane conductance regulator. The gene, and the protein it encodes: a gated channel in the cell membrane that lets chloride out of cells lining the airways, gut, pancreas and sweat glands.',
    'chloride': 'The negatively charged half of table salt (sodium chloride). Cells move chloride to move water: where salt goes, water follows.',
    'epithelium': 'A sheet of cells lining a surface or a tube in the body, such as the airways, gut or sweat ducts. Epithelial cells control what passes across them.',
    'cilia': 'Tiny hair-like projections on airway cells that beat in waves to sweep mucus up and out of the lungs.',
    'airway surface liquid': 'The thin film of salty water on top of airway cells. Cilia need it to beat; without CFTR it dries out.',
    'amino acid': 'One of the 20 building blocks strung together to make a protein. A protein\'s sequence of amino acids decides how it folds.',
    'F508del': 'The most common CF mutation: three DNA letters are missing, so the CFTR protein lacks one amino acid (phenylalanine) at position 508. The protein misfolds and is mostly destroyed before it reaches the cell surface.',
    'G551D': 'A CF mutation in which the CFTR protein reaches the cell surface but its gate barely opens. About 4 to 5 percent of people with CF carry it.',
    'allele': 'One of the two copies of a gene a person carries, one from each parent.',
    'autosomal recessive': 'A pattern of inheritance where you only get the disease if both copies of the gene are broken. People with one broken copy are healthy carriers.',
    'carrier': 'Someone with one working and one broken copy of a gene. Carriers of CF mutations are healthy; two carrier parents have a 1 in 4 chance, with each child, of a child with CF.',
    'homozygous': 'Having two identical copies of a variant, one on each allele (for example F508del/F508del).',
    'heterozygous': 'Having two different variants on the two alleles (for example F508del on one and G551D on the other).',
    'CFTR modulator': 'A small-molecule drug that acts on the CFTR protein itself, helping it fold, reach the surface or open. Ivacaftor, lumacaftor, tezacaftor, elexacaftor and vanzacaftor are all modulators.',
    'potentiator': 'A CFTR modulator that holds the channel\'s gate open more of the time once the protein is at the cell surface. Ivacaftor is a potentiator.',
    'corrector': 'A CFTR modulator that helps the misfolded protein fold properly so the cell ships it to the surface instead of destroying it. Lumacaftor, tezacaftor, elexacaftor and vanzacaftor are correctors.',
    'endoplasmic reticulum': 'The cell\'s folding and quality-control factory for membrane proteins. Proteins that fail inspection there are sent to be destroyed.',
    'ER': 'Endoplasmic reticulum: the cell\'s protein folding and quality-control factory.',
    'proteasome': 'The cell\'s shredder for faulty or unwanted proteins.',
    'gating': 'The opening and closing of an ion channel. A gating mutation leaves the channel in place but mostly shut.',
    'nonsense mutation': 'A mutation that puts a premature "stop" signal in a gene, so no full-length protein is made. About 1 in 10 people with CF carry nonsense mutations.',
    'minimal function mutation': 'A CF mutation that makes little or no working CFTR protein, or protein that did not respond to earlier modulators in lab tests.',
    'residual function mutation': 'A CF mutation that still allows some CFTR activity. People with these often have milder disease and respond partly to a potentiator.',
    'FEV1': 'Forced expiratory volume in one second: how much air a person can blow out in the first second of a hard breath. The standard measure of lung function.',
    'ppFEV1': 'Percent predicted FEV1: a person\'s FEV1 as a percentage of what a healthy person of the same age, sex and height would manage. A rise of 10 percentage points is large.',
    'sweat chloride': 'The amount of chloride in sweat, measured in millimoles per liter (mmol/L). Readings of 60 or above point to CF; below 30 is the normal range. It is a direct readout of how well CFTR works.',
    'sweat test': 'The standard diagnostic test for CF: sweat is collected from the skin and its chloride content measured.',
    'pulmonary exacerbation': 'A flare-up of lung symptoms in CF, usually from infection, that needs extra antibiotics and sometimes a hospital stay.',
    'CFQ-R': 'Cystic Fibrosis Questionnaire-Revised: a patient-reported score of symptoms and quality of life. A 4-point change in its respiratory domain is considered meaningful.',
    'pancreatic enzymes': 'Digestive proteins made by the pancreas. In most people with CF they cannot reach the gut, so patients swallow replacement enzyme capsules with every meal.',
    'bronchiectasis': 'Permanent widening and scarring of the airways after years of infection and inflammation.',
    'Pseudomonas aeruginosa': 'A bacterium that thrives in the thick mucus of CF lungs and is hard to eradicate once it settles in.',
    'positional cloning': 'Finding a disease gene by its location on a chromosome, tracking which stretch of DNA is inherited with the disease in families, before knowing what the gene does.',
    'high-throughput screening': 'Testing hundreds of thousands of chemicals, robotically, against a biological readout to find the few that have the desired effect.',
    'fluorescent voltage sensor': 'A pair of dyes that change color when the electrical charge across a cell membrane changes. Aurora used them to spot molecules that let chloride flow through CFTR.',
    'Lipinski\'s rules': 'Rules of thumb (size, oiliness and so on) that predict whether a molecule can be a pill. CF correctors broke several of them.',
    'Therapeutics Development Network': 'A network of CF clinical trial centers funded by the Cystic Fibrosis Foundation, which let companies find and enroll patients quickly.',
    'patient registry': 'A database that follows everyone with a condition over time. The US CF Foundation registry tracks almost all American patients.',
    'active comparator': 'A trial control arm that gets an existing effective treatment rather than a placebo.',
    'run-in period': 'A stretch at the start of a trial when everyone takes the same treatment, so the comparison starts from a stable baseline.',
    'non-inferiority trial': 'A trial designed to show a new treatment is not worse than an existing one by more than a preset margin.',
    'royalty monetization': 'Selling the right to future royalty payments for a lump sum today.',
    'Royalty Pharma': 'A company that buys royalty streams on drugs from universities, charities and companies, paying cash up front.',
    'FRT assay': 'A lab test using Fischer rat thyroid cells engineered to carry one CFTR variant. The FDA has accepted it as evidence that a modulator helps rare variants never tested in trials.',
    'deuterated drug': 'A drug in which some hydrogen atoms are swapped for deuterium, a heavier form of hydrogen. This can slow how fast the body breaks it down.',
    'compulsory license': 'A government order letting others make a patented product without the patent owner\'s consent, usually for a fee. Allowed under world trade rules in some circumstances.',
    'health-benefit price benchmark': 'ICER\'s estimate of the highest price at which a drug\'s health gains justify its cost.',
    'fast track designation': 'An FDA designation for drugs treating serious conditions with unmet need, allowing more frequent meetings and rolling submission of the application.',
    'microsimulation model': 'A computer model that simulates many individual patients over their lifetimes to project outcomes such as survival.',
    'NHS England': 'The body that buys and organises National Health Service care in England.',
    'NICE': 'National Institute for Health and Care Excellence: the body that decides whether the NHS in England should pay for a medicine, based largely on cost per QALY.',
    'Kalydeco': 'Ivacaftor, a CFTR potentiator. Vertex\'s first CF drug, approved in the US in January 2012.',
    'Orkambi': 'Lumacaftor plus ivacaftor. Vertex\'s first corrector combination, approved in the US in July 2015 for people with two F508del copies.',
    'Symdeko': 'Tezacaftor plus ivacaftor (Symkevi in Europe), approved in the US in February 2018.',
    'Alyftrek': 'Vanzacaftor, tezacaftor and deutivacaftor: Vertex\'s once-daily successor to Trikafta, approved in the US in December 2024.',
  },
  sections: [
    // ---------------------------------------------------------------- 1 cold open
    {type: 'story', kicker: 'Cold open', title: 'Salt on a glass', tocTitle: 'Cold open', html: `
      <p>For centuries, parents in northern Europe passed on a warning about babies whose skin tasted of salt. One version, as the geneticist Jeffrey Friedman retold it in 2025, runs like this:</p>
      <blockquote class="pull">Woe to the child who tastes salty from a kiss on the brow, for he is cursed and soon will die.<cite>Traditional saying, quoted in PNAS, 2025</cite></blockquote>
      <p>The saying was right, and nobody knew why. In 1938 Dorothy Andersen, a pathologist at Columbia University in New York, examined children who had wasted away and found their pancreases filled with fluid-filled cysts and scar tissue. She called the condition "cystic fibrosis of the pancreas". A decade later, during the heat waves of 1948 and 1949, her colleague Paul di Sant'Agnese saw children with the disease collapsing from dehydration on the pediatric ward. According to later accounts, he noticed a chalky white film, salt, on a glass one of them had been drinking from. He collected sweat on gauze from children with and without the disease. The chloride in the sick children's sweat was three to five times higher than normal. The salty kiss was real, and it became a diagnostic test.</p>
      <p>Knowing <em>that</em> sweat was salty did not tell anyone what to do about the lungs, which is what killed most patients. For the next seventy years, treatment meant managing the damage: pancreatic enzyme capsules with every meal, daily airway clearance, courses of antibiotics, and for the sickest, a lung transplant. In 1975, half of Americans with [[cystic fibrosis]] died before about age 15.</p>
      <p>On the evening of Monday 21 October 2019, the US Food and Drug Administration approved a pill combination called Trikafta, from Vertex Pharmaceuticals of Boston. It had been due for a decision by 19 March 2020. The FDA finished five months early. The drug was approved for anyone aged 12 or over carrying at least one copy of the most common CF mutation, which is roughly 9 in 10 patients. In the pivotal trial, lung function rose by about 14 percentage points against placebo, within weeks. The best earlier drug for people with two copies of that mutation had managed about 4.</p>
      <p>This case is about how that happened. The science took decades, and so did the persistence. The unusual part is the money: a patient charity, the Cystic Fibrosis Foundation, paid a small biotech company to look for the drug, took a cut of future sales in return, and in 2014 sold that cut for $3.3 billion. Then comes the price, about $300,000 a year in the US, and the long fights in England, Canada, Brazil and elsewhere over who gets it.</p>`},

    // ---------------------------------------------------------------- 2 disease from zero
    {type: 'story', kicker: 'The disease from zero', title: 'A plumbing problem in every tube of the body', tocTitle: 'The disease', html: `
      <p>Start with a fact from school chemistry: <b>water follows salt</b>. If you put salt on one side of a membrane that water can cross, water moves toward the salt. The body uses this constantly. The tubes and surfaces inside you (airways, gut, the ducts of the pancreas and liver, sweat glands) are lined by sheets of cells called [[epithelium]]. Those cells decide how wet each surface is by pumping salt one way or the other and letting water follow.</p>
      <p>One of the key pumps is really a gate. It is a protein called [[CFTR]] (cystic fibrosis transmembrane conductance regulator), and it sits in the outer membrane of epithelial cells. When the cell signals, CFTR opens and lets [[chloride]], the negatively charged half of table salt, flow out. Water follows. The result is a thin layer of salty liquid on top of the cells. In the airways, that film is what lets millions of tiny hairs, the [[cilia]], beat freely and sweep a thin blanket of mucus up and out of the lungs, taking trapped dust and bacteria with it.</p>
      <h3>What breaks</h3>
      <p>In cystic fibrosis, CFTR is missing, misshapen or stuck shut. Chloride stays in the cells, the water stays with it, and the surfaces dry out. What happens next depends on the organ:</p>
      <ul>
        <li><b>Lungs.</b> The liquid layer shrinks, mucus turns thick and sticky, and cilia get pinned flat under it. Bacteria such as [[Pseudomonas aeruginosa]] settle into the mucus and are hard to clear. The immune system attacks them in a long, losing war that scars the airways ([[bronchiectasis]]). Most of the illness and death in CF comes from this slow destruction of the lungs.</li>
        <li><b>Pancreas.</b> The pancreas makes [[pancreatic enzymes|digestive enzymes]] and pipes them into the gut. In CF the ducts clog, the enzymes back up and damage the organ (Andersen's cysts and scarring), and food passes through undigested. Before replacement enzymes, children starved despite eating.</li>
        <li><b>Sweat glands.</b> Here CFTR runs in reverse: it pulls chloride <em>back</em> out of sweat before sweat reaches the skin. Without it, sweat stays salty. That is why the [[sweat test]] became the standard diagnosis, and why [[sweat chloride]] became the most direct measure of whether a drug is fixing CFTR.</li>
        <li><b>Gut, liver, sinuses and reproductive tract</b> are affected too, which is why fertility was long reduced in people with CF.</li>
      </ul>
      <h3>Two broken copies</h3>
      <p>Everyone has two copies of the CFTR [[gene]], one from each parent. CF is [[autosomal recessive]]: you only get the disease if both copies are broken. People with one broken copy are healthy [[carrier|carriers]], and two carriers have a 1 in 4 chance with each pregnancy of having a child with CF. The FDA estimates about 30,000 people in the US have the disease, roughly 1 in every 3,500 births. Vertex estimates about 112,000 people with CF across the countries it sells in.</p>
      <p>This two-copy detail matters more than it seems. Because each patient has two alleles, and each can carry a different mutation, a drug that repairs one kind of broken protein can help a patient even if the other copy is beyond repair. One working copy's worth of protein, or even a fraction of it, is enough to make a large difference. Keep that in mind: it is why Trikafta could be approved for "at least one" copy of the most common mutation.</p>
      <h3>What treatment looked like before</h3>
      <p>Before 2012, every CF treatment worked downstream of the broken gate. Enzyme capsules (from the 1950s) fixed digestion. Physiotherapy and devices loosened mucus. Inhaled antibiotics, mucus-thinning drugs and salty-water inhalers fought the lung infections. CF care centers, accredited in the US from the 1960s, made that care systematic. Survival rose steadily: the US registry's median survival age went from 29 in 1990 to 38.6 in 2012. But none of it touched the cause.</p>`},

    {type: 'figure', title: 'One broken gate, many organs', intro: 'Every organ highlighted here lines its tubes with epithelial cells that rely on CFTR. Hover or tap each one.',
      svg: `<svg viewBox="0 0 900 420" role="img" aria-label="Body map of organs affected by cystic fibrosis">
        <circle cx="300" cy="62" r="38" class="il-8s il-line"/>
        <rect x="286" y="98" width="28" height="18" class="il-8s"/>
        <path d="M236 116 Q300 102 364 116 L384 300 Q300 326 216 300 Z" class="il-8s il-line"/>
        <rect x="186" y="118" width="30" height="170" rx="15" class="il-8s il-line" transform="rotate(14 201 118)"/>
        <rect x="384" y="118" width="30" height="170" rx="15" class="il-8s il-line" transform="rotate(-14 399 118)"/>
        <rect x="236" y="300" width="34" height="108" rx="16" class="il-8s il-line"/>
        <rect x="330" y="300" width="34" height="108" rx="16" class="il-8s il-line"/>
        <g data-part="sinus"><ellipse cx="300" cy="58" rx="16" ry="9" class="il-2s st-2" stroke-width="2"/></g>
        <g data-part="lungs"><ellipse cx="270" cy="172" rx="26" ry="44" class="il-2"/><ellipse cx="330" cy="172" rx="26" ry="44" class="il-2"/><path d="M300 120 V150 M300 150 L282 160 M300 150 L318 160" class="il-line2" fill="none"/></g>
        <g data-part="liver"><path d="M246 222 Q272 212 300 224 Q296 244 270 248 Q248 246 246 222 Z" class="il-7s st-7" stroke-width="2"/></g>
        <g data-part="pancreas"><ellipse cx="320" cy="252" rx="32" ry="8" class="il-4 "/></g>
        <g data-part="gut"><path d="M270 272 Q300 262 330 272 Q344 282 330 290 Q300 298 270 290 Q256 282 270 272 Z" class="il-5s st-5" stroke-width="2"/><path d="M278 281 Q300 274 322 281" class="st-5" fill="none" stroke-width="2"/></g>
        <g data-part="repro"><circle cx="288" cy="312" r="7" class="il-6s st-6" stroke-width="2"/><circle cx="312" cy="312" r="7" class="il-6s st-6" stroke-width="2"/></g>
        <g data-part="sweat"><path d="M186 232 q6 -12 12 0 a6 6 0 1 1 -12 0 z" class="il-1"/><path d="M166 256 q5 -10 10 0 a5 5 0 1 1 -10 0 z" class="il-1"/><path d="M190 272 q5 -10 10 0 a5 5 0 1 1 -10 0 z" class="il-1"/></g>
        <path d="M316 58 L470 50" class="il-line il-dash" fill="none"/>
        <path d="M356 150 L470 128" class="il-line il-dash" fill="none"/>
        <path d="M298 232 L470 196" class="il-line il-dash" fill="none"/>
        <path d="M352 252 L470 244" class="il-line il-dash" fill="none"/>
        <path d="M340 282 L470 290" class="il-line il-dash" fill="none"/>
        <path d="M320 314 L470 336" class="il-line il-dash" fill="none"/>
        <path d="M160 254 L130 254" class="il-line il-dash" fill="none"/>
        <text x="478" y="55" class="il-text">Sinuses: blocked, polyps</text>
        <text x="478" y="133" class="il-text">Lungs: sticky mucus, infection, scarring</text>
        <text x="478" y="201" class="il-text">Liver: bile ducts can clog</text>
        <text x="478" y="249" class="il-text">Pancreas: enzymes trapped, organ damaged</text>
        <text x="478" y="295" class="il-text">Intestines: blockages, poor absorption</text>
        <text x="478" y="341" class="il-text">Reproductive tract: reduced fertility</text>
        <text x="40" y="244" class="il-text">Sweat:</text><text x="40" y="262" class="il-text">very salty</text>
        <text x="478" y="392" class="il-text-2">Lung damage causes most of the illness and death.</text>
      </svg>`,
      hotspots: {
        lungs: {title: 'Lungs', text: 'Without chloride flowing out, the [[airway surface liquid]] shrinks and mucus turns thick. [[cilia|Cilia]] can\'t clear it, bacteria settle in, and years of infection and inflammation scar the airways. This is what shortens life in CF.'},
        pancreas: {title: 'Pancreas', text: 'The ducts that carry digestive enzymes clog. Many people with CF swallow [[pancreatic enzymes|enzyme capsules]] with every meal; damage to the organ can later cause CF-related diabetes.'},
        sweat: {title: 'Sweat glands', text: 'In the sweat duct, CFTR pulls chloride back into the body. When it fails, sweat stays salty: the basis of the [[sweat test]] used since the late 1950s, and of the [[sweat chloride]] measure used in drug trials.'},
        liver: {title: 'Liver', text: 'Bile ducts are lined with CFTR-dependent cells too, and can become blocked.'},
        gut: {title: 'Intestines', text: 'Thick secretions can block the gut, sometimes even before birth, and digestion is poor without pancreatic enzymes.'},
        sinus: {title: 'Sinuses', text: 'The sinuses clog the same way the airways do, and polyps are common.'},
        repro: {title: 'Reproductive tract', text: 'Thick secretions affect the reproductive tract, and fertility was long reduced in both men and women with CF. One of the surprises after Trikafta was a rise in pregnancies.'},
      },
      caption: 'Schematic, not to anatomical scale. Sources: Andersen 1938 and later history as summarized in J Clin Invest 2025 and PNAS 2025.'},

    {type: 'figure', title: 'Inside an airway: healthy versus CF', intro: 'The same slice of airway lining, with and without working CFTR. Hover or tap the labeled parts.',
      svg: `<svg viewBox="0 0 900 420" role="img" aria-label="Comparison of a healthy airway surface and a cystic fibrosis airway surface">
        <text x="30" y="32" class="il-title">Healthy airway</text>
        <text x="470" y="32" class="il-title">Cystic fibrosis airway</text>
        <line x1="450" y1="20" x2="450" y2="400" class="il-line il-dash"/>
        <g data-part="mucus">
          <path d="M20 140 Q120 128 220 140 T430 140 V170 H20 Z" class="il-4s st-4" stroke-width="1.5"/>
          <path d="M470 100 Q560 70 660 104 T880 96 V236 H470 Z" class="il-4 "/>
        </g>
        <path d="M40 124 H400" class="st-ink flow" stroke-width="2.5" fill="none"/>
        <path d="M392 116 L406 124 L392 132" class="st-ink" stroke-width="2.5" fill="none"/>
        <text x="40" y="112" class="il-text-2">Mucus swept up and out</text>
        <g data-part="asl">
          <rect x="20" y="170" width="410" height="80" class="il-1s"/>
          <rect x="470" y="236" width="410" height="14" class="il-1s"/>
        </g>
        <g data-part="cilia">
          <path d="M40 250 L52 186 M72 250 L84 186 M104 250 L116 186 M136 250 L148 186 M168 250 L180 186 M200 250 L212 186 M232 250 L244 186 M264 250 L276 186 M296 250 L308 186 M328 250 L340 186 M360 250 L372 186 M392 250 L404 186" class="st-3" stroke-width="3" stroke-linecap="round"/>
          <path d="M480 250 Q490 242 506 244 M512 250 Q522 242 538 244 M544 250 Q554 242 570 244 M576 250 Q586 242 602 244 M608 250 Q618 242 634 244 M640 250 Q650 242 666 244 M672 250 Q682 242 698 244 M704 250 Q714 242 730 244 M736 250 Q746 242 762 244 M768 250 Q778 242 794 244 M800 250 Q810 242 826 244 M832 250 Q842 242 858 244" class="st-3" stroke-width="3" fill="none" stroke-linecap="round"/>
        </g>
        <g data-part="bacteria">
          <rect x="540" y="150" width="24" height="11" rx="5.5" class="il-7"/><rect x="600" y="186" width="24" height="11" rx="5.5" class="il-7" transform="rotate(30 612 191)"/>
          <rect x="690" y="140" width="24" height="11" rx="5.5" class="il-7"/><rect x="760" y="196" width="24" height="11" rx="5.5" class="il-7" transform="rotate(-25 772 201)"/>
          <rect x="820" y="150" width="24" height="11" rx="5.5" class="il-7"/><rect x="650" y="210" width="24" height="11" rx="5.5" class="il-7" transform="rotate(15 662 215)"/>
        </g>
        <g data-part="cells">
          <rect x="20" y="258" width="76" height="120" rx="14" class="il-3s il-line"/><rect x="104" y="258" width="76" height="120" rx="14" class="il-3s il-line"/><rect x="188" y="258" width="76" height="120" rx="14" class="il-3s il-line"/><rect x="272" y="258" width="76" height="120" rx="14" class="il-3s il-line"/><rect x="356" y="258" width="74" height="120" rx="14" class="il-3s il-line"/>
          <rect x="470" y="258" width="76" height="120" rx="14" class="il-3s il-line"/><rect x="554" y="258" width="76" height="120" rx="14" class="il-3s il-line"/><rect x="638" y="258" width="76" height="120" rx="14" class="il-3s il-line"/><rect x="722" y="258" width="76" height="120" rx="14" class="il-3s il-line"/><rect x="806" y="258" width="74" height="120" rx="14" class="il-3s il-line"/>
        </g>
        <g data-part="cftr">
          <rect x="52" y="250" width="12" height="18" rx="4" class="il-2"/><rect x="136" y="250" width="12" height="18" rx="4" class="il-2"/><rect x="220" y="250" width="12" height="18" rx="4" class="il-2"/><rect x="304" y="250" width="12" height="18" rx="4" class="il-2"/><rect x="388" y="250" width="12" height="18" rx="4" class="il-2"/>
          <circle cx="58" cy="232" r="5" class="il-4"/><circle cx="142" cy="226" r="5" class="il-4"/><circle cx="226" cy="232" r="5" class="il-4"/><circle cx="310" cy="226" r="5" class="il-4"/><circle cx="394" cy="232" r="5" class="il-4"/>
          <path d="M592 252 l10 10 m0 -10 l-10 10 M760 252 l10 10 m0 -10 l-10 10" class="st-7" stroke-width="2.5"/>
        </g>
        <text x="30" y="400" class="il-text-2">CFTR lets chloride out; water follows; cilia beat freely.</text>
        <text x="470" y="400" class="il-text-2">No chloride out; liquid shrinks; mucus traps bacteria.</text>
      </svg>`,
      hotspots: {
        cftr: {title: 'CFTR channels', text: 'Orange bars: CFTR gates in the top membrane of each cell. Yellow dots: [[chloride]] leaving. In CF (red crosses), the channels are missing or shut, so chloride and the water that follows it stay inside.'},
        asl: {title: 'Airway surface liquid', text: 'A film of salty water about as deep as the cilia are tall. It is the lubricant that lets cilia beat. In CF it collapses.'},
        cilia: {title: 'Cilia', text: 'Hair-like projections that beat in waves, like oars, pushing the mucus blanket toward the throat. In CF they are pinned flat under dehydrated mucus.'},
        mucus: {title: 'Mucus', text: 'Normally a thin, mobile blanket that traps dust and microbes. In CF it becomes thick and sticky, and stays put.'},
        bacteria: {title: 'Bacteria', text: 'Microbes such as [[Pseudomonas aeruginosa]] thrive in static mucus. The resulting infection and inflammation slowly scar the lungs.'},
        cells: {title: 'Epithelial cells', text: 'The airway lining. Every one of these cells carries the same two copies of the CFTR gene.'},
      },
      caption: 'Schematic. The mechanism described here (loss of chloride secretion, dehydrated mucus and impaired clearance) follows the summary in PNAS 2025.'},

    {type: 'custom', title: 'Reading the salt: the sweat chloride ruler', intro: 'Sweat chloride is the most direct readout of how well CFTR works, and it became a key [[biomarker]] in every modulator trial. Drag the slider to read a result, or tap a real data point from the trials.',
      html: `<div class="card"><div id="swRuler"></div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin:10px 0" id="swBtns"></div>
        <label style="display:grid;grid-template-columns:150px 1fr 70px;gap:12px;align-items:center;font-size:15px">A reading (mmol/L)<input type="range" min="10" max="120" value="102" id="swSlide" style="accent-color:var(--accent)"><b id="swVal"></b></label>
        <div id="swOut" style="margin-top:12px;font:400 16.5px/1.6 var(--serif)"></div></div>`,
      init: (root) => {
        const X = v => 50 + (v / 120) * 800;
        const pts = [
          {k: 'base', v: 102.3, lab: 'Before Trikafta', txt: 'Average sweat chloride before treatment in the Trikafta group of the pivotal trial of F508del/minimal-function patients: about 102 mmol/L, far into the CF range.'},
          {k: 'pbo', v: 102.4, lab: 'Placebo, week 24', txt: 'After 24 weeks on placebo: about 102 mmol/L. Nothing changed.'},
          {k: 'tri', v: 57.9, lab: 'Trikafta, week 24', txt: 'After 24 weeks on Trikafta: 57.9 mmol/L on average, a drop of about 42 against placebo, just below the diagnostic line of 60. For a disease defined by salty sweat, that is a striking picture.'},
          {k: 'sky', v: 54, lab: 'On Trikafta years later', txt: 'People with F508del and a minimal-function mutation entering the SKYLINE trials in 2021 and 2022, most already on Trikafta, averaged about 54 mmol/L. In the pooled trials, 23% of those who stayed on Trikafta were below 30 at week 24.'},
          {k: 'aly', v: 30, lab: 'Alyftrek goal: below 30', txt: 'Below 30 mmol/L is the normal range, seen in healthy carriers. In the pooled SKYLINE trials, 31% of people on Alyftrek were below 30 at week 24, against 23% on Trikafta.'},
        ];
        let sel = 'tri';
        const draw = v => {
          let s = `<svg viewBox="0 0 900 170" role="img" aria-label="Sweat chloride scale">`;
          s += `<rect x="${X(0)}" y="60" width="${X(30) - X(0)}" height="36" class="il-3s"/><rect x="${X(30)}" y="60" width="${X(60) - X(30)}" height="36" class="il-4s"/><rect x="${X(60)}" y="60" width="${X(120) - X(60)}" height="36" class="il-2s"/>`;
          s += `<text x="${X(15)}" y="83" text-anchor="middle" class="il-text">Normal</text><text x="${X(45)}" y="83" text-anchor="middle" class="il-text">Intermediate</text><text x="${X(90)}" y="83" text-anchor="middle" class="il-text">Consistent with CF (60 and above)</text>`;
          [0, 30, 60, 90, 120].forEach(t => { s += `<line x1="${X(t)}" y1="96" x2="${X(t)}" y2="104" class="il-line"/><text x="${X(t)}" y="120" text-anchor="middle" class="il-text-2">${t}</text>`; });
          pts.forEach(p => { if (p.k === 'pbo') return; const on = p.k === sel; s += `<g data-tip="${p.lab}: about ${p.v} mmol/L"><line x1="${X(p.v)}" y1="44" x2="${X(p.v)}" y2="60" class="${on ? 'st-1' : 'il-line'}" stroke-width="${on ? 3 : 1.5}"/><circle cx="${X(p.v)}" cy="40" r="${on ? 7 : 5}" class="${on ? 'il-1' : 'il-8'}"/></g>`; });
          s += `<path d="M${X(v)} 100 l-8 14 h16 z" class="il-6"/><text x="${X(v)}" y="148" text-anchor="middle" class="il-num" style="font-size:16px">${v} mmol/L</text>`;
          s += `<text x="${X(0)}" y="22" class="il-text-2">Blue dot: selected data point. Violet marker: your reading.</text></svg>`;
          root.querySelector('#swRuler').innerHTML = s;
          root.querySelector('#swVal').textContent = v;
          const zone = v >= 60 ? 'In the range the diagnostic guidelines treat as consistent with CF.' : v >= 30 ? 'Intermediate: CFTR is working partly. Some people in this range have mild or atypical disease; on modulators, many patients land here.' : 'Normal range: what healthy carriers show. The stated aim of Vertex\'s newer drugs is to get more patients here.';
          const p = pts.find(x => x.k === sel);
          root.querySelector('#swOut').innerHTML = `<b>${zone}</b><br>${p ? p.txt : ''}`;
        };
        const btns = root.querySelector('#swBtns');
        pts.forEach(p => { const b = document.createElement('button'); b.className = 'btn'; b.textContent = p.lab; b.onclick = () => { sel = p.k; slide.value = Math.round(p.v); draw(Math.round(p.v)); }; btns.appendChild(b); });
        const slide = root.querySelector('#swSlide');
        slide.oninput = () => draw(+slide.value);
        slide.value = 58; draw(58);
      }},

    {type: 'chart', title: 'Seventy years of slow gains, then a jump', intro: 'Median survival age for Americans with CF, from the US Cystic Fibrosis Foundation\'s [[patient registry]].',
      chart: {kind: 'line', title: 'US median survival age with CF (years)', unit: '', series: [{name: 'Median survival age (years)', points: [[1975, 15], [1990, 29.0], [2012, 38.6], [2023, 68.0]]}],
        annotations: [{x: 2012, label: 'Kalydeco (2012)'}, {x: 2019.8, label: 'Trikafta (Oct 2019)', dy: 18}], yMax: 80, xTicks: [1975, 1985, 1995, 2005, 2015, 2023],
        note: '1975 value from Glob Adv Health Med 2015; 1990, 2012 and 2023 values from a secondary analysis of the US CF Foundation Patient Registry (Pulm Ther 2025, Vertex-funded). Methods differ between sources; points are joined by straight lines for readability only.'},
      takeaway: 'Between 1990 and 2012, median survival gained about half a year per calendar year, driven by better supportive care. The registry analysis estimates the pace rose to nearly 5 years per year after Trikafta arrived. Registry survival numbers are projections that assume today\'s death rates continue, so treat the 2023 figure as an estimate, not a promise.'},

    {type: 'callout', variant: 'misconception', heading: '"CF is a mucus disease" (or "a lung infection disease")', html: `<p>Thick mucus and infections are what patients and doctors see, so for decades that is what treatment targeted. But they are downstream effects. The root fault is a salt-and-water transport problem at the cell membrane, which is why the same disease shows up in sweat, pancreas, gut and liver, and why a pill that repairs one protein could improve all of them at once. Antibiotics and mucus thinners treat the symptoms. [[CFTR modulator|CFTR modulators]] act on the cause.</p>`},

    // ---------------------------------------------------------------- 3 the key insight
    {type: 'story', kicker: 'The key insight', title: 'Finding the gene, then learning it could be coaxed', tocTitle: 'The gene', html: `
      <p>By the early 1980s physiologists had narrowed the fault down. Paul Quinton showed in 1983 that CF sweat ducts could not reabsorb chloride. Michael Knowles found similar chloride problems in airways. In 1985 Jonathan Widdicombe, Michael Welsh and Walter Finkbeiner placed the defect on the outward-facing membrane of airway cells. Something that should let chloride through was not working. Nobody knew what it was.</p>
      <h3>1989: the gene</h3>
      <p>The answer came from genetics, not physiology. Teams led by Lap-Chee Tsui and John Riordan at the Hospital for Sick Children in Toronto, working with Francis Collins at the University of Michigan, used [[positional cloning]]. They tracked which stretch of [[chromosome]] 7 was inherited along with the disease in families, then walked and jumped along more than 500,000 DNA letters to find the culprit. In September 1989 they published three back-to-back papers in <em>Science</em>. It was one of the first times a disease gene had been found this way, with no prior idea of what the protein did.</p>
      <p>The gene encoded a large protein that looked like a family of molecular pumps. Unsure whether it was a channel itself or something that controlled one, they named it cystic fibrosis transmembrane conductance <em>regulator</em>. And in about 70 percent of the CF chromosomes they studied, the same tiny error appeared: three DNA letters missing, deleting a single [[amino acid]], a phenylalanine, at position 508 of a protein about 1,480 amino acids long. That mutation is now called [[F508del]]. Today about 9 in 10 people with CF carry at least one copy.</p>
      <h3>What the missing letter does</h3>
      <p>Over the next three years, several labs worked out what goes wrong. In 1990 a group at Genzyme showed that F508del protein gets stuck in the [[endoplasmic reticulum]], the cell's folding and quality-control factory, and never matures. Welsh's lab at the University of Iowa showed that CFTR is itself a chloride channel, opened by a chemical signal inside the cell. Then came the finding that would matter most for drug hunters. There had been a puzzle: in mammalian cells F508del never reached the surface, but in frog eggs, which are kept cooler, it did. Welsh showed that the mutant protein is temperature-sensitive. At body temperature it misfolds and is destroyed. At lower temperatures it folds well enough to reach the surface, where it works, but opens far less often than normal.</p>
      <p>That told drug hunters two things. First, F508del CFTR is not beyond repair: if something could stand in for the cold and stabilize its fold, the cell would ship it. Second, fixing the fold would not be enough, because the rescued channel's gate would still be sluggish. A drug for F508del would need two jobs done: a [[corrector]] to fix the folding and a [[potentiator]] to hold the gate open.</p>
      <p>Drugs that open channels had precedents. Drugs that rescue a misfolded protein did not. In the 1990s a lot of hope went instead to gene therapy, delivering a healthy copy of CFTR to the lungs. Welsh's result pointed to a less glamorous path: ordinary pills, found by brute-force screening, that nudge the broken protein into working.</p>
      <h3>Not one disease but many</h3>
      <p>Sequencing thousands of patients eventually turned up more than 2,000 variants in the CFTR gene, over 700 of them known to cause disease. They were sorted into six classes by <em>where</em> in the protein's life they break it, from never being made to falling off the surface too soon. The classes are an imperfect map (F508del has features of several), but they explain why one drug could not fit all patients, and why Vertex had to build its treatments in stages.</p>`},

    {type: 'figure', title: 'Six ways to break a protein', intro: 'A CFTR protein\'s life is an assembly line. Each mutation class breaks it at a different station, and each needs a different fix. Hover or tap a numbered class.',
      svg: `<svg viewBox="0 0 900 420" role="img" aria-label="CFTR mutation classes along the protein assembly line">
        <path d="M30 150 H870" class="il-line2" fill="none"/>
        <path d="M858 142 L872 150 L858 158" class="il-line2" fill="none"/>
        <rect x="24" y="66" width="140" height="130" rx="14" class="il-paper il-line"/>
        <text x="94" y="88" text-anchor="middle" class="il-text">1. Copy the gene</text>
        <path d="M44 110 Q60 100 76 110 T108 110 M44 130 Q60 120 76 130 T108 130" class="st-6" stroke-width="2.5" fill="none"/>
        <path d="M52 108 V128 M68 104 V124 M84 110 V130 M100 106 V126" class="st-6" stroke-width="1.5"/>
        <path d="M112 170 q8 -10 16 0 t16 0" class="st-5" stroke-width="2.5" fill="none"/>
        <text x="94" y="188" text-anchor="middle" class="il-text-2">DNA → mRNA</text>
        <rect x="190" y="66" width="140" height="130" rx="14" class="il-paper il-line"/>
        <text x="260" y="88" text-anchor="middle" class="il-text">2. Build protein</text>
        <circle cx="222" cy="130" r="8" class="il-2s st-2"/><circle cx="240" cy="124" r="8" class="il-2s st-2"/><circle cx="258" cy="130" r="8" class="il-2s st-2"/><circle cx="276" cy="124" r="8" class="il-2s st-2"/><circle cx="294" cy="130" r="8" class="il-2s st-2"/>
        <text x="260" y="188" text-anchor="middle" class="il-text-2">amino acid chain</text>
        <rect x="356" y="66" width="140" height="130" rx="14" class="il-paper il-line"/>
        <text x="426" y="88" text-anchor="middle" class="il-text">3. Fold and check</text>
        <path d="M384 140 Q396 104 420 120 Q446 136 430 150 Q410 166 400 146 Q440 110 468 134" class="st-2" stroke-width="5" fill="none" stroke-linecap="round"/>
        <text x="426" y="188" text-anchor="middle" class="il-text-2">in the ER</text>
        <rect x="522" y="66" width="140" height="130" rx="14" class="il-paper il-line"/>
        <text x="592" y="88" text-anchor="middle" class="il-text">4. Ship to surface</text>
        <circle cx="592" cy="134" r="28" class="il-3s st-3" stroke-width="2"/><rect x="580" y="118" width="10" height="32" rx="4" class="il-2"/><rect x="594" y="118" width="10" height="32" rx="4" class="il-2"/>
        <text x="592" y="188" text-anchor="middle" class="il-text-2">in a tiny bubble</text>
        <rect x="688" y="66" width="190" height="130" rx="14" class="il-paper il-line"/>
        <text x="783" y="88" text-anchor="middle" class="il-text">5. Work at the surface</text>
        <rect x="700" y="138" width="166" height="14" class="il-3s"/><line x1="700" y1="138" x2="866" y2="138" class="il-line"/><line x1="700" y1="152" x2="866" y2="152" class="il-line"/>
        <rect x="766" y="118" width="12" height="52" rx="5" class="il-2"/><rect x="788" y="118" width="12" height="52" rx="5" class="il-2"/>
        <circle cx="783" cy="108" r="5" class="il-4"/><circle cx="783" cy="126" r="5" class="il-4"/>
        <text x="783" y="188" text-anchor="middle" class="il-text-2">open, conduct, stay</text>
        <g data-part="c5"><circle cx="94" cy="250" r="17" class="il-7"/><text x="94" y="255" text-anchor="middle" class="il-white">V</text><text x="94" y="290" text-anchor="middle" class="il-text">Too little made</text><text x="94" y="308" text-anchor="middle" class="il-text-2">(reduced production)</text></g>
        <g data-part="c1"><circle cx="260" cy="250" r="17" class="il-7"/><text x="260" y="255" text-anchor="middle" class="il-white">I</text><text x="260" y="290" text-anchor="middle" class="il-text">No protein</text><text x="260" y="308" text-anchor="middle" class="il-text-2">(e.g. G542X, W1282X)</text></g>
        <g data-part="c2"><circle cx="509" cy="250" r="17" class="il-7"/><text x="509" y="255" text-anchor="middle" class="il-white">II</text><text x="509" y="290" text-anchor="middle" class="il-text">Misfolds, destroyed</text><text x="509" y="308" text-anchor="middle" class="il-text-2">(F508del)</text></g>
        <path d="M426 200 Q509 222 592 200" class="st-7 il-dash" stroke-width="2" fill="none"/>
        <g data-part="c3"><circle cx="706" cy="250" r="15" class="il-7"/><text x="706" y="255" text-anchor="middle" class="il-white">III</text><text x="728" y="255" class="il-text">Gate stuck (G551D)</text></g>
        <g data-part="c4"><circle cx="706" cy="298" r="15" class="il-7"/><text x="706" y="303" text-anchor="middle" class="il-white">IV</text><text x="728" y="303" class="il-text">Pore too narrow</text></g>
        <g data-part="c6"><circle cx="706" cy="346" r="15" class="il-7"/><text x="706" y="351" text-anchor="middle" class="il-white">VI</text><text x="728" y="351" class="il-text">Falls off too soon</text></g>
        <text x="24" y="360" class="il-text-2">Classes I and II leave no protein at the surface.</text>
        <text x="24" y="380" class="il-text-2">Classes III to VI put some protein there that works badly.</text>
      </svg>`,
      hotspots: {
        c1: {title: 'Class I: no protein', text: 'Usually [[nonsense mutation|nonsense mutations]]: a premature stop signal ends the protein early. There is nothing for a modulator to act on. About 1 in 10 people with CF carry nonsense mutations; those with two such copies are the core of the group Trikafta cannot help.'},
        c2: {title: 'Class II: misfolds', text: 'The protein is made but misfolds and is destroyed by the cell\'s quality control. [[F508del]] is the famous example. It needs a [[corrector]] to fold and, once at the surface, a [[potentiator]] because its gate is sluggish too.'},
        c3: {title: 'Class III: gate stuck', text: 'The protein reaches the surface but barely opens ([[gating]] defect). [[G551D]] is the best-known example, carried by about 4 to 5 percent of patients. A potentiator alone can transform these patients: this is where Vertex started.'},
        c4: {title: 'Class IV: narrow pore', text: 'The channel opens but chloride flows through slowly. Some protein works, so a potentiator often helps partly.'},
        c5: {title: 'Class V: too little made', text: 'Only a fraction of the normal amount of protein is produced. What is made works, so these behave like [[residual function mutation|residual function]] mutations.'},
        c6: {title: 'Class VI: unstable', text: 'The protein reaches the surface but is pulled back and destroyed too quickly.'},
      },
      caption: 'Classification as summarized in J Clin Invest 2025. Real mutations can have features of more than one class; F508del, for example, both misfolds and gates poorly.'},

    {type: 'callout', variant: 'product', heading: 'A bug taxonomy, and why it matters for the roadmap', html: `<p>If you have triaged production incidents, the mutation classes will feel familiar. You don't fix "the app is broken"; you ask where in the pipeline it fails. The build never produces an artifact (class I). The artifact is built but fails validation and gets discarded (class II). It deploys but the feature flag is stuck off (class III). It runs but with throttled throughput (IV). A taxonomy by failure point tells you which fix to write, and which users each fix reaches. Vertex's roadmap followed this map: potentiator for the stuck gate first, correctors for the misfolded protein next.</p>
      <p><b>Where the analogy breaks:</b> each patient runs two "builds" at once, one per allele, and one working copy is often enough, so coverage depends on combinations, not single bugs. You also can't hot-patch a person. Every fix needs a years-long trial, and for the class I patients there is no build to patch. A different technology (delivering RNA or editing the gene) is needed.</p>`},

    // ---------------------------------------------------------------- 4 mechanism
    {type: 'mechanism', title: 'How Trikafta works', intro: 'Follow one F508del CFTR protein from gene to surface, and see where each of the three drugs steps in. Use Next, or the arrow keys.',
      svg: `<svg viewBox="0 0 760 440" role="img" aria-label="Mechanism of CFTR correctors and potentiator">
        <g data-part="outside"><rect x="0" y="0" width="760" height="140" class="il-bg"/><text x="20" y="26" class="il-text-2" style="font-size:17px">Airway (outside the cell)</text></g>
        <g data-part="mucusThin"><rect x="0" y="66" width="760" height="74" class="il-1s"/><path d="M0 44 Q190 34 380 48 T760 44 V66 H0Z" class="il-4s"/><text x="20" y="104" class="il-text" style="font-size:19px">Watery layer: cilia sweep freely</text></g>
        <g data-part="cilia"><path d="M250 140 L258 104 M290 140 L298 104 M330 140 L338 104 M370 140 L378 104 M410 140 L418 104 M450 140 L458 104 M650 140 L658 104 M690 140 L698 104 M730 140 L738 104" class="st-3" stroke-width="3" stroke-linecap="round"/></g>
        <g data-part="mucusThick"><path d="M0 40 Q190 22 380 44 T760 38 V134 H0 Z" class="il-4 " opacity="0.85"/><text x="20" y="96" class="il-text" style="font-size:19px">Thick, dry mucus</text></g>
        <g data-part="cell"><rect x="0" y="158" width="760" height="282" class="il-3s"/><text x="20" y="428" class="il-text-2" style="font-size:17px">Inside an airway cell</text></g>
        <g data-part="membrane"><rect x="0" y="140" width="760" height="18" class="il-paper"/><line x1="0" y1="140" x2="760" y2="140" class="il-line2"/><line x1="0" y1="158" x2="760" y2="158" class="il-line2"/></g>
        <g data-part="nucleus"><circle cx="110" cy="310" r="64" class="il-6s st-6" stroke-width="2"/>
          <path d="M70 296 Q90 282 110 296 T150 296 M70 318 Q90 304 110 318 T150 318" class="st-6" stroke-width="2.5" fill="none"/>
          <path d="M80 290 V312 M96 288 V310 M112 296 V318 M128 290 V312 M144 292 V314" class="st-6" stroke-width="1.5"/>
          <text x="110" y="344" text-anchor="middle" class="il-text" style="font-size:19px">CFTR gene</text><text x="110" y="396" text-anchor="middle" class="il-text-2" style="font-size:17px">Nucleus</text></g>
        <g data-part="mrna"><path d="M174 300 q10 -10 20 0 t20 0 t20 0" class="st-5" stroke-width="3" fill="none"/><text x="174" y="284" class="il-text-2" style="font-size:17px">mRNA</text></g>
        <g data-part="er"><path d="M244 296 Q300 270 356 296 Q380 310 356 322 Q300 300 244 322 Q222 310 244 296 Z M240 340 Q300 316 364 340 Q386 354 362 366 Q300 344 240 366 Q218 354 240 340 Z" class="il-5s st-5" stroke-width="1.5"/>
          <text x="302" y="400" text-anchor="middle" class="il-text-2" style="font-size:17px">ER: folding station</text></g>
        <g data-part="misfolded"><path d="M282 318 Q296 290 318 304 Q340 318 322 332 Q300 348 292 330 Q334 300 346 322" class="st-2" stroke-width="7" fill="none" stroke-linecap="round"/></g>
        <g data-part="misLabel"><text x="226" y="262" class="il-text" style="font-size:19px">F508del CFTR: misfolded</text></g>
        <g data-part="toBin"><path d="M352 330 Q460 300 560 352" class="st-7 flow" stroke-width="2.5" fill="none"/></g>
        <g data-part="bin"><rect x="560" y="330" width="120" height="56" rx="14" class="il-8s st-ink" stroke-width="1.5"/><text x="620" y="364" text-anchor="middle" class="il-text" style="font-size:19px">Shredder</text><text x="620" y="408" text-anchor="middle" class="il-text-2" style="font-size:17px">(proteasome)</text></g>
        <g data-part="folded"><rect x="288" y="302" width="18" height="52" rx="8" class="il-2"/><rect x="312" y="302" width="18" height="52" rx="8" class="il-2"/><text x="226" y="262" class="il-text" style="font-size:19px">Folded CFTR</text></g>
        <g data-part="correctors"><rect x="380" y="288" width="18" height="18" rx="3" class="il-1"/><text x="406" y="302" class="il-text" style="font-size:19px">tezacaftor</text><path d="M380 336 l22 0 l-11 -19 z" class="il-1"/><text x="406" y="334" class="il-text" style="font-size:19px">elexacaftor</text></g>
        <g data-part="travel"><path d="M320 296 Q360 200 540 176" class="st-2 flow" stroke-width="2.5" fill="none"/><text x="360" y="214" class="il-text-2" style="font-size:17px">shipped to the surface</text></g>
        <g data-part="channelClosed"><rect x="540" y="124" width="16" height="50" rx="7" class="il-2"/><rect x="564" y="124" width="16" height="50" rx="7" class="il-2"/><rect x="536" y="114" width="48" height="11" rx="4" class="il-7"/><text x="596" y="196" class="il-text" style="font-size:19px">Gate mostly shut</text></g>
        <g data-part="channelOpen"><rect x="540" y="124" width="16" height="50" rx="7" class="il-2"/><rect x="564" y="124" width="16" height="50" rx="7" class="il-2"/><rect x="580" y="92" width="11" height="34" rx="4" class="il-7" transform="rotate(28 585 109)"/><text x="596" y="196" class="il-text" style="font-size:19px">Gate open</text></g>
        <g data-part="ivacaftor"><path d="M600 136 l12 -12 l12 12 l-12 12 z" class="il-1"/><text x="630" y="142" class="il-text" style="font-size:19px">ivacaftor</text></g>
        <g data-part="chloride"><path d="M560 226 V70" class="st-4 flow" stroke-width="3" fill="none"/><circle cx="560" cy="212" r="6" class="il-4"/><circle cx="560" cy="150" r="6" class="il-4"/><circle cx="560" cy="100" r="6" class="il-4"/><text x="470" y="250" class="il-text" style="font-size:19px">Chloride leaves the cell</text></g>
        <g data-part="water"><path d="M470 60 q6 -12 12 0 a6 6 0 1 1 -12 0 z" class="il-1"/><path d="M640 50 q6 -12 12 0 a6 6 0 1 1 -12 0 z" class="il-1"/><path d="M700 76 q6 -12 12 0 a6 6 0 1 1 -12 0 z" class="il-1"/><text x="520" y="24" class="il-text" style="font-size:19px">Water follows the salt</text></g>
      </svg>`,
      steps: [
        {title: 'The instructions', text: 'Inside the nucleus, the CFTR [[gene]] is copied into [[mRNA]]. The mRNA goes to the [[endoplasmic reticulum]] (ER), where the cell strings together about 1,480 [[amino acid|amino acids]] and folds them into a channel. Outside, in a patient with two broken copies, the airway is already clogged with thick mucus.',
          show: ['outside', 'mucusThick', 'cell', 'membrane', 'nucleus', 'mrna', 'er'], focus: ['nucleus', 'mrna']},
        {title: 'F508del: one missing amino acid', text: 'In [[F508del]], one amino acid (a phenylalanine) is missing. The chain still gets made, but it folds wrongly, like a flat-pack wardrobe missing one bracket: the parts are there, but it cannot hold its shape.',
          show: ['outside', 'mucusThick', 'cell', 'membrane', 'nucleus', 'mrna', 'er', 'misfolded', 'misLabel'], focus: ['misfolded']},
        {title: 'Quality control throws it away', text: 'The ER inspects every membrane protein. A misfolded CFTR fails and is sent to the [[proteasome]], the cell\'s shredder. Almost none reaches the surface, so no chloride leaves the cell and the airway dries out.',
          show: ['outside', 'mucusThick', 'cell', 'membrane', 'nucleus', 'er', 'misfolded', 'toBin', 'bin'], move: {misfolded: 'translate(215px, 30px) scale(0.7)'}, pulse: ['bin']},
        {title: 'Two correctors act as a splint', text: 'Tezacaftor and elexacaftor are [[corrector|correctors]]. They bind to <em>different</em> places on the protein as it folds and stabilize it, so their effects add up. With both attached, enough F508del CFTR passes inspection. (Each corrector alone, as in Symdeko, rescued much less.)',
          show: ['outside', 'mucusThick', 'cell', 'membrane', 'nucleus', 'er', 'folded', 'correctors'], dim: ['bin'], focus: ['correctors'], move: {correctors: 'translate(-44px, 6px)'}},
        {title: 'Shipped to the surface, but sluggish', text: 'The rescued protein is shipped to the cell membrane and slots in as a channel. But F508del has a second fault: even at the surface its gate opens far less than normal. Welsh\'s lab saw this in the early 1990s, which is why a corrector alone was never going to be enough.',
          show: ['outside', 'mucusThick', 'cell', 'membrane', 'er', 'travel', 'channelClosed'], dim: ['nucleus'], focus: ['channelClosed'], pulse: ['travel']},
        {title: 'Ivacaftor props the gate open', text: 'Ivacaftor is a [[potentiator]]. It binds the channel at the surface and increases the time the gate spends open. Chloride starts to flow out. This is also all that a patient with a [[G551D]] "stuck gate" needs, which is why ivacaftor alone (Kalydeco) came first.',
          show: ['outside', 'mucusThick', 'cell', 'membrane', 'channelOpen', 'ivacaftor', 'chloride'], dim: ['er', 'nucleus'], focus: ['ivacaftor']},
        {title: 'Salt out, water follows, mucus thins', text: 'Water follows the chloride onto the airway surface. The liquid layer deepens, mucus loosens, and [[cilia]] can sweep again. The same repair happens in sweat glands (sweat chloride falls), the pancreas and the gut. It is a repair, not a cure: stop the pills and the protein goes back to misfolding.',
          show: ['outside', 'mucusThin', 'cilia', 'cell', 'membrane', 'channelOpen', 'ivacaftor', 'chloride', 'water'], dim: ['er', 'nucleus'], pulse: ['water']},
      ]},

    // ---------------------------------------------------------------- 5 venture philanthropy
    {type: 'story', kicker: 'The money that made it', title: 'A charity that acted like a venture fund', tocTitle: 'Venture philanthropy', html: `
      <p>The Cystic Fibrosis Foundation was founded by parents in Philadelphia in 1955. For decades it did what patient charities do: raised money, funded academic research, and built a network of accredited care centers. Two of its investments turned out to matter enormously later. The first was a [[patient registry]] that followed nearly every American with CF. The second was the [[Therapeutics Development Network]], a set of trial sites that could find and enroll patients with specific mutations quickly. Clinical scientist Bonnie Ramsey led that network, and it later found the small number of G551D patients Vertex needed.</p>
      <p>By the late 1990s the gene had been known for a decade and there was still no drug. Big pharmaceutical companies had little reason to chase a disease with about 30,000 US patients and a protein nobody knew how to fix. The foundation's chief executive, Robert (Bob) Beall, concluded that if industry would not come to CF, the foundation would pay industry to come.</p>
      <h3>From a dye to a drug screen</h3>
      <p>The story, as told in Bijal Trivedi's book <em>Breath from Salt</em> and summarized in PNAS, runs through a chain of introductions. In 1999 Alan Verkman, a UCSF scientist with an improved chloride sensor, urged Beall to get companies screening for CFTR drugs. Beall asked an adviser, Raymond Frizzell, who pointed him to his old college roommate, Roger Tsien, a chemist at UC San Diego who would later win a Nobel Prize. Tsien had co-founded a small San Diego company, Aurora Biosciences, to turn his fluorescent dyes into drug-screening machines.</p>
      <p>Aurora's key tool came from Jesús "Tito" González, who had joined Tsien's lab and made work a [[fluorescent voltage sensor]] Tsien had imagined as a graduate student. It was a pair of dyes in the cell membrane that changed color when the cell's electrical charge shifted, which is exactly what happens when chloride starts flowing through CFTR. That meant a robot could test thousands of chemicals a day on cells carrying F508del CFTR and spot the rare one that made the color change. The biologist who ran the CF program was Paul Negulescu, one of Aurora's first hires. He would lead it for twenty years, all the way to Trikafta.</p>
      <p>In 2000 the foundation funded Aurora to run the screen. Accounts of the first award differ: the <em>Journal of Clinical Investigation</em> gives $30 million, while a 2015 commentary gives about $75 million. In 2001 Vertex Pharmaceuticals bought Aurora, and the CF team moved to Vertex. Vertex's own filings date its work with the foundation's drug-development arm to 1998. In May 2004 the two signed the research agreement that shaped everything after it. The foundation funded research, and Vertex agreed to pay tiered [[royalty|royalties]] "from single digits to sub-teens" percent on sales of compounds from the collaboration, including ivacaftor, lumacaftor and tezacaftor. By 2014 the foundation had put in a total of about $150 million.</p>
      <h3>Why it worked</h3>
      <p>Money was only part of it. The foundation also removed the risks a company could not manage alone. It had the registry, so Vertex knew how many patients had each mutation. It had the trial network, so studies enrolled fast. It had the patients' trust, so families volunteered for early trials. It also had scientific advisers who kept pushing the screen toward the right cell models. Welsh, for instance, supplied the cells used in early screens. In the language of product development, the foundation was a customer who funded the roadmap, supplied the beta testers and brought the market research.</p>
      <p>This model, [[venture philanthropy]], has since been copied by many disease foundations. It works best under the conditions CF offered: a clear molecular target, a good biomarker, organized patients, and a charity with enough money to matter to a company.</p>`},

    {type: 'callout', variant: 'product', heading: 'The design partner who funds your roadmap', html: `<p>Enterprise software founders know the "design partner": an early customer who pays for development, co-designs the product and gets a better deal later. The CF Foundation was an extreme version. It paid for the research, lent its patients and data, and took a share of future revenue instead of a discount.</p>
      <p><b>Where the analogy breaks:</b> a design partner can walk away if the product disappoints, and it negotiates price. The foundation could do neither easily. Its "users" were children whose lives depended on the product shipping, and once Vertex held the patents, the charity had almost no say over the price its own members would pay. Venture philanthropy buys speed and focus. It does not buy control.</p>`},

    {type: 'decision', title: 'You decide: the first drug', role: 'You run Vertex\'s CF program, around 2006',
      scenario: `Your screens have produced ivacaftor, a potent [[potentiator]] that opens the CFTR gate. In lab dishes it transforms cells with the [[G551D]] "stuck gate" mutation. Your [[corrector|correctors]] for F508del, the mutation 9 in 10 patients carry, are still weak. G551D patients are only about 4 percent of the CF population. Wall Street wants a big market. The foundation wants a drug. What do you do with ivacaftor?`,
      options: [
        {label: 'Develop ivacaftor alone for G551D now: a small market, but a fast, clean test of the whole idea.', outcome: 'You get a quick, unambiguous answer. If it works, you have proved that fixing CFTR with a pill improves patients, a result the whole field has waited for, and you have a regulatory path, a price and a manufacturing base for later combinations. The risk is that a drug for a few thousand people looks like a commercial dead end, and investors may punish you.'},
        {label: 'Hold ivacaftor until a corrector is ready, and launch a combination for F508del.', outcome: 'You aim at the real market, but you are tying a working drug to one that doesn\'t work yet. Correctors took another decade to become good enough. You would have delayed any benefit for G551D patients by years, and without a first success you would have had no proof that the approach worked at all.'},
        {label: 'Test ivacaftor alone in F508del patients too, hoping for a partial effect.', outcome: 'Tempting, because that is where the patients are. But the biology predicts the result: with almost no F508del protein at the surface, there is little for a potentiator to open. The lab data showed ivacaftor alone does not restore F508del CFTR. A failed trial could also have poisoned investors\' view of the whole program.'},
      ],
      reality: `Vertex developed ivacaftor as a single drug for G551D. The foundation's [[Therapeutics Development Network]] helped find the patients. In the STRIVE trial (161 patients dosed), lung function improved by 10.6 percentage points versus placebo, and sweat chloride fell by 48 mmol/L. The FDA approved Kalydeco on 31 January 2012. It proved that a pill could fix the protein, and it gave Vertex a platform for the combinations to come. It also gave Vertex a price, about $300,000 a year, that set the pattern.`},

    // ---------------------------------------------------------------- 6 timeline
    {type: 'timeline', title: 'Timeline: from salty sweat to triple therapy', events: [
      {year: 1938, title: 'Dorothy Andersen describes "cystic fibrosis of the pancreas"', kind: 'science', text: 'Autopsies of malnourished children reveal cysts and scarring in the pancreas.'},
      {year: 1948, date: '1948–49', title: 'Heat waves reveal salty sweat', kind: 'science', text: 'Paul di Sant\'Agnese finds chloride in CF sweat is 3 to 5 times normal. The sweat test follows.'},
      {year: 1955, title: 'Parents found the Cystic Fibrosis Foundation in Philadelphia', kind: 'people'},
      {year: 1983, title: 'Paul Quinton pins the defect on chloride transport', kind: 'science'},
      {year: 1989, date: 'Sep 1989', title: 'The CFTR gene is found', kind: 'science', text: 'Tsui, Riordan and Collins publish three papers in <em>Science</em>; about 70% of CF chromosomes carry F508del.'},
      {year: 1992, title: 'CFTR is a chloride channel; F508del is temperature-sensitive', kind: 'science', text: 'Michael Welsh\'s lab shows the mutant protein can reach the surface and work if helped to fold.'},
      {year: 1998, title: 'Vertex\'s work with the foundation\'s drug arm begins', kind: 'business', text: 'As dated in Vertex\'s own 10-K filings.'},
      {year: 2000, title: 'The foundation funds Aurora Biosciences\' drug screen', kind: 'business', text: 'Accounts of the first award range from $30 million to about $75 million.'},
      {year: 2001, title: 'Vertex acquires Aurora; the CF team moves to Vertex', kind: 'business'},
      {year: 2004, date: 'May 2004', title: 'Foundation–Vertex research agreement signed', kind: 'business', text: 'Tiered royalties from single digits to sub-teens percent on compounds from the collaboration.'},
      {year: 2005, title: 'Ivacaftor identified', kind: 'science'},
      {year: 2011, date: 'Nov 2011', title: 'STRIVE: ivacaftor lifts lung function 10.6 points in G551D', kind: 'clinical'},
      {year: 2012, date: '31 Jan 2012', title: 'FDA approves Kalydeco (ivacaftor)', kind: 'regulatory', text: 'The first drug to act on the cause of CF, for about 4% of patients.'},
      {year: 2014, date: 'Nov 2014', title: 'The foundation sells its royalty to Royalty Pharma for $3.3 billion', kind: 'business'},
      {year: 2015, date: '2 Jul 2015', title: 'FDA approves Orkambi (lumacaftor/ivacaftor)', kind: 'regulatory', text: 'First treatment for two copies of F508del, but lung function gains were 2.6 to 4.0 points.'},
      {year: 2016.5, date: 'Jul 2016', title: 'NICE rejects Orkambi for the NHS in England', kind: 'setback', text: 'List price about £104,000 a year; not judged cost-effective.'},
      {year: 2016.9, date: 'Dec 2016', title: 'Human testing of elexacaftor (VX-445) opens', kind: 'clinical', text: 'The FDA investigational new drug application opens on 12 December 2016.'},
      {year: 2018, date: 'Feb 2018', title: 'FDA approves Symdeko (tezacaftor/ivacaftor)', kind: 'regulatory'},
      {year: 2018, date: 'Oct 2018', title: 'Phase 2: triple combination adds up to 13.8 points', kind: 'clinical'},
      {year: 2019.8, date: '21 Oct 2019', title: 'FDA approves Trikafta, five months early', kind: 'regulatory', text: 'For people 12 and older with at least one F508del copy.'},
      {year: 2019.85, date: 'Oct 2019', title: 'NHS England and Vertex strike an interim access deal', kind: 'business'},
      {year: 2020, date: 'Aug 2020', title: 'EU approves Kaftrio (the European brand)', kind: 'regulatory'},
      {year: 2021, date: 'Jun 2021', title: 'Health Canada approves Trikafta, about 20 months after the US', kind: 'regulatory'},
      {year: 2022, date: 'Mar 2022', title: 'Brazil\'s regulator approves it; public-system dispensing starts May 2024', kind: 'setback'},
      {year: 2024, date: 'Dec 2024', title: 'FDA approves Alyftrek; boxed warning for liver injury added to Trikafta', kind: 'regulatory'},
      {year: 2025, date: 'Sep 2025', title: 'Lasker Award for Welsh, González and Negulescu', kind: 'people'},
    ]},

    // ---------------------------------------------------------------- 7 building the drug
    {type: 'story', kicker: 'Building the drug', title: 'Four drugs in seven years, one repair at a time', tocTitle: 'Building it in stages', html: `
      <p>Screening finds "hits": molecules that make the dye change color. Turning a hit into a pill that is safe, absorbed and active in people is the long part. At Vertex, Tom Knapp ran screens on chemical libraries selected by Peter Grootenhuis, using cells from Welsh's lab. Chemist Sabine Hadida led the teams that rebuilt the hits into drug candidates. Biologist Fred Van Goor tested them on airway cells grown from the lungs of people with CF. One moment later singled out was Van Goor's demonstration that the drugs restored normal beating of the cilia on those patient-derived cells. By 2005 the team had ivacaftor, and in 2009 they published its lab profile.</p>
      <h3>Stage one: open the gate (Kalydeco, 2012)</h3>
      <p>Ivacaftor went first because it worked on its own for a small group whose protein reaches the surface. The G551D results were large. They also taught the field that [[sweat chloride]] responds within weeks and tracks whether CFTR is being fixed. That gave Vertex a fast readout for every molecule after it. Over the following years Kalydeco's label grew to cover dozens of other [[gating]] and [[residual function mutation|residual-function]] mutations. Many of those additions were based on lab-dish data rather than new trials, a regulatory precedent that would matter later.</p>
      <h3>Stage two: fix the fold, partly (Orkambi 2015, Symdeko 2018)</h3>
      <p>Correctors were harder. The first, lumacaftor, went into two phase 3 trials, TRAFFIC and TRANSPORT, with 1,108 patients who had two copies of F508del. Paired with ivacaftor, it raised lung function by only 2.6 to 4.0 percentage points against placebo and cut [[pulmonary exacerbation|exacerbations]] by 30 to 39 percent. The effect was real but small. Lumacaftor also had drawbacks: it interacts with other drugs, and critics pointed out that its components partly worked against each other. It was launched as Orkambi in July 2015 at about $259,000 a year in the US.</p>
      <p>Tezacaftor was a better-behaved corrector. In the EVOLVE trial (510 patients with two F508del copies), tezacaftor plus ivacaftor improved lung function by 4.0 points, with fewer side effects. It became Symdeko in February 2018. It also helped people with one F508del copy and a residual-function mutation (6.8 points in the EXPAND trial). But for people with one F508del copy and a [[minimal function mutation]] on the other allele, about 6,000 Americans, neither Kalydeco nor Symdeko did anything.</p>
      <h3>Why one corrector was not enough</h3>
      <p>F508del destabilizes the protein in more than one place. A single corrector braces one weak joint; the protein still wobbles elsewhere. The insight behind the triple was to find a <em>second</em> corrector that binds a different site, so the two effects add up. The FDA label now states it plainly: elexacaftor and tezacaftor "bind to different sites on the CFTR protein and have an additive effect." Years later, structural biologist Jue Chen at Rockefeller University imaged F508del CFTR with the drugs bound and saw them stabilizing the correctly folded state.</p>
      <p>Getting there meant breaking the chemist's rulebook. [[Lipinski's rules]] are rules of thumb for what makes a good pill: not too big, not too greasy. Hadida's team concluded that molecules which work on a membrane protein might have to break some of them, and built correctors that did. In a phase 2 study published in October 2018, VX-445 (later named elexacaftor) plus tezacaftor and ivacaftor raised lung function by up to 13.8 points in people with one F508del copy and a minimal-function mutation. Among patients with two copies already on Symdeko, adding it gave another 11 points.</p>
      <p>Vertex moved straight to phase 3. The FDA had opened human testing of elexacaftor in December 2016. It granted [[fast track designation|fast track]] status in February 2017 and [[breakthrough therapy designation|breakthrough therapy]] status in May 2018. The two pivotal trials enrolled from mid-2018.</p>`},

    {type: 'chart', title: 'Each stage, measured in lung function', intro: 'Headline results from the pivotal trials: the gain in [[ppFEV1]] (percentage points) over the control arm.',
      chart: {kind: 'bar', title: 'Gain in ppFEV1 versus control, pivotal trials', unit: 'points', horizontal: true, labelWidth: 250,
        categories: ['Kalydeco, G551D (vs placebo)', 'Orkambi, 2 × F508del (vs placebo)', 'Symdeko, 2 × F508del (vs placebo)', 'Trikafta, F508del + minimal (vs placebo)', 'Trikafta, 2 × F508del (vs Symdeko)'],
        series: [{name: 'Gain', values: [10.6, 4.0, 4.0, 14.3, 10.0], notes: ['STRIVE, through week 24, NEJM 2011', 'Upper end of the 2.6–4.0 range, TRAFFIC/TRANSPORT, NEJM 2015', 'EVOLVE, through week 24, NEJM 2017', 'Trial 102, through week 24, NEJM 2019', 'Trial 103, at week 4, on top of Symdeko, Lancet 2019']}]},
      takeaway: 'Cross-trial comparisons are rough: the populations, durations and controls differ. Note especially the last bar, a gain <em>on top of</em> Symdeko, not over placebo. The pattern is still clear. Correctors alone gave modest gains; two correctors plus a potentiator matched or beat what Kalydeco did for the lucky 4 percent.'},

    {type: 'custom', title: 'Build the combination', intro: 'Pick a genotype and switch drugs on and off to see what the trials found. Every number comes from a published trial; combinations that were never tested say so.',
      html: `<div class="card">
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px" id="cbGeno"></div>
        <div style="display:flex;flex-wrap:wrap;gap:16px;margin-bottom:14px;font-size:15.5px" id="cbDrugs"></div>
        <div id="cbViz"></div><div id="cbOut" style="margin-top:10px;font:400 16.5px/1.6 var(--serif)"></div></div>`,
      init: (root, api) => {
        const drugs = [['iva', 'Ivacaftor (potentiator)'], ['lum', 'Lumacaftor (corrector 1)'], ['tez', 'Tezacaftor (corrector 1, gentler)'], ['elx', 'Elexacaftor (corrector 2)']];
        const genos = [['ff', 'Two copies of F508del'], ['fmf', 'F508del + minimal-function mutation']];
        let g = 'ff'; const on = new Set();
        const res = () => {
          const k = ['iva', 'lum', 'tez', 'elx'].filter(d => on.has(d)).join('+');
          const T = {
            ff: {'': [0, 'Standard care only. No modulator acts on the protein.'],
              'iva': [null, 'Ivacaftor alone does little here: with almost no F508del protein reaching the surface, there is not much gate to open. Not approved for this genotype.'],
              'iva+lum': [4.0, 'Orkambi. TRAFFIC/TRANSPORT (1,108 patients): +2.6 to +4.0 points versus placebo; exacerbations 30–39% lower. Bar shows the upper end.'],
              'iva+tez': [4.0, 'Symdeko. EVOLVE (510 patients): +4.0 points versus placebo; exacerbations 35% lower, fewer side effects than Orkambi.'],
              'iva+tez+elx': [14, 'Trikafta. Trial 103: +10.0 points <em>on top of</em> Symdeko after 4 weeks, and sweat chloride down another 45 mmol/L. The bar adds that to Symdeko\'s 4, a rough cross-trial sum, so read it as "about 14".']},
            fmf: {'': [0, 'Standard care only.'],
              'iva': [null, 'The FDA reviewers noted that neither ivacaftor nor tezacaftor/ivacaftor had shown efficacy in this group. Before Trikafta, these roughly 6,000 Americans had no modulator.'],
              'iva+lum': [null, 'Orkambi is approved only for two copies of F508del.'],
              'iva+tez': [null, 'Tezacaftor/ivacaftor did not work for F508del plus a minimal-function mutation, per the FDA review.'],
              'iva+tez+elx': [14.3, 'Trikafta. Trial 102 (403 patients): +14.3 points versus placebo through 24 weeks; exacerbations 63% lower; sweat chloride 42 mmol/L lower.']},
          };
          const r = T[g][k];
          if (r) return r;
          if (!on.has('iva') && on.size) return [null, 'Never developed as a product. Without a potentiator, rescued F508del channels still open too rarely. In lab tests the triple (two correctors plus ivacaftor) beat every pair.'];
          if (on.has('lum') && (on.has('tez') || on.has('elx'))) return [null, 'Not a tested combination. Lumacaftor and tezacaftor bind the same kind of site; Vertex paired the newer correctors instead.'];
          return [null, 'Not a tested combination. Elexacaftor was only developed alongside tezacaftor and ivacaftor.'];
        };
        const draw = () => {
          const [v, txt] = res(), w = v == null ? 0 : v / 16 * 640;
          root.querySelector('#cbViz').innerHTML = `<svg viewBox="0 0 760 80" role="img" aria-label="Lung function gain"><rect x="100" y="22" width="640" height="30" rx="8" class="il-bg"/>${v ? `<rect x="100" y="22" width="${w}" height="30" rx="8" class="il-1"/>` : ''}<text x="92" y="42" text-anchor="end" class="il-text">ppFEV1</text><text x="${100 + Math.max(w, 0) + 8}" y="42" class="il-text">${v == null ? 'n/a' : (v ? '+' + v + ' points' : '0')}</text>${[0, 4, 8, 12, 16].map(t => `<text x="${100 + t / 16 * 640}" y="72" text-anchor="middle" class="il-text-2">${t}</text>`).join('')}</svg>`;
          root.querySelector('#cbOut').innerHTML = api.terms(txt);
        };
        const gb = root.querySelector('#cbGeno');
        genos.forEach(([k, l]) => { const b = document.createElement('button'); b.className = 'btn'; b.textContent = l; b.dataset.k = k; b.onclick = () => { g = k; gb.querySelectorAll('button').forEach(x => x.classList.toggle('primary', x.dataset.k === g)); draw(); }; gb.appendChild(b); });
        gb.querySelector('button').classList.add('primary');
        const db = root.querySelector('#cbDrugs');
        drugs.forEach(([k, l]) => { const lab = document.createElement('label'); lab.style.cssText = 'display:inline-flex;gap:6px;align-items:center;cursor:pointer'; lab.innerHTML = `<input type="checkbox" data-k="${k}" style="accent-color:var(--accent)"> ${l}`; lab.querySelector('input').onchange = e => { e.target.checked ? on.add(k) : on.delete(k); draw(); }; db.appendChild(lab); });
        ['iva', 'tez', 'elx'].forEach(k => { on.add(k); db.querySelector(`[data-k="${k}"]`).checked = true; });
        draw();
      }},

    {type: 'callout', variant: 'product', heading: 'Beachhead first, then expand', html: `<p>Vertex's sequence reads like a textbook go-to-market plan. Win a small segment where the product clearly works (G551D, about 4 percent). Use that win to fund and de-risk the harder product. Ship intermediate versions (Orkambi, Symdeko) that serve a larger segment modestly. Then release the version that serves 90 percent. Each release also built what the next one needed: an FDA relationship, a price level, a sales force, a manufacturing base and a registry of genotyped patients.</p>
      <p><b>Where the analogy breaks:</b> the iteration loop was measured in years, not sprints. Every "release" needed a trial in which some patients got placebo. And the "users" of the modest versions were not early adopters choosing a beta. Many were people with no other option, paying (or whose insurers paid) premium prices for a 3-point improvement while waiting for the real thing.</p>`},

    // ---------------------------------------------------------------- 8 trials
    {type: 'story', kicker: 'The trials', title: 'Designing the pivotal trials', tocTitle: 'Trial design', html: `
      <p>Vertex ran two phase 3 trials at once, each built around a different ethical and scientific problem.</p>
      <p><b>Trial 102</b> enrolled people with one F508del copy and a [[minimal function mutation]] on the other allele. No approved modulator worked for them, so a [[placebo]] control was ethical: the comparison was triple therapy versus standard care. They were also the hardest test, because only one allele could respond. If the triple worked with half the target, it would surely work with more.</p>
      <p><b>Trial 103</b> enrolled people with two F508del copies. They already had Orkambi and Symdeko, so giving them a placebo for months would have been hard to justify. Instead everyone took Symdeko for four weeks (a [[run-in period]]), then half added elexacaftor. That is an [[active comparator]] design. It asks the question patients and payers care about: how much better than what we have now?</p>
      <h3>What to measure</h3>
      <p>The [[primary endpoint]] in both was [[ppFEV1]], percent predicted forced expiratory volume in one second. You blow out as hard as you can, the machine measures the first second, and the result is expressed as a percentage of what a healthy person of your age, sex and height would manage. It is the standard measure of lung function in CF, and lung function in turn predicts survival. It is still a [[surrogate endpoint]], a stand-in for what patients care about: living longer and feeling better. So the trials also measured [[pulmonary exacerbation|exacerbations]], weight, a patient-reported symptom score (the [[CFQ-R]] respiratory domain) and [[sweat chloride]], the direct readout of CFTR repair.</p>
      <p>One design choice is easy to miss. Trial 102's primary endpoint was measured at <em>week 4</em>, using a planned [[interim analysis]] once at least 140 patients had reached week 4. Modulators act fast. Kalydeco's effect had shown up within two weeks. A four-week readout let Vertex file early, while the full 24-week data, tested as key secondary endpoints, would show whether the effect lasted. That is part of how an application submitted in July 2019 could be approved in October.</p>
      <h3>What could have gone wrong</h3>
      <p>Three drugs at once means three sets of side effects and interactions. Ivacaftor and tezacaftor had known risks: liver enzyme rises, cataracts in children, interactions with drugs that affect the liver enzyme CYP3A. The FDA review flagged two new signals with elexacaftor, rash and raised muscle enzyme levels. Liver injury would later become the main worry.</p>`},

    {type: 'trial', title: 'Trial 102: one F508del copy, versus placebo', intro: 'The trial that decided whether the triple could help people who had no modulator at all.',
      design: {name: 'VX17-445-102', phase: 'Phase 3', blinding: 'Double-blind', years: 'Jun 2018 – Apr 2019', n: 403,
        population: 'Age 12+, one F508del copy plus a minimal-function mutation, ppFEV1 40–90%', randomization: '1:1',
        arms: [{name: 'Trikafta', n: 200, desc: 'Triple combination, 24 weeks'}, {name: 'Placebo', n: 203, desc: 'Matching placebo, 24 weeks', control: true}],
        endpoint: 'Change in ppFEV1 at week 4',
        details: {'Sites': '115 sites in 13 countries', 'Baseline': 'Mean ppFEV1 about 61%; mean sweat chloride about 102 mmol/L; mean age about 26', 'Primary endpoint': 'Absolute change in [[ppFEV1]] at week 4 (interim analysis)', 'Key secondary': 'ppFEV1 through week 24, [[pulmonary exacerbation|exacerbations]], [[sweat chloride]], [[CFQ-R]] respiratory score, BMI', 'Published': 'Middleton et al., NEJM, November 2019'}},
      predict: {q: 'For comparison, Symdeko had added about 4 points of ppFEV1 in people with two F508del copies. What did the triple do here, versus placebo, over 24 weeks?',
        options: ['About 2 to 4 points, similar to Orkambi and Symdeko', 'About 6 to 8 points', 'About 14 points', 'More than 25 points'], answer: 2,
        explain: 'Lung function was 14.3 points higher than placebo through 24 weeks (13.8 at week 4), with the improvement visible at the first check on day 15. That is more than Kalydeco achieved for G551D, in patients where only one allele could respond at all.'},
      results: [
        {kind: 'bar', title: 'Lung function gain over placebo (ppFEV1, percentage points)', unit: '', categories: ['At week 4 (primary)', 'Through week 24'], series: [{name: 'Treatment difference', values: [13.8, 14.3], notes: ['95% CI 12.1 to 15.4', '95% CI 12.7 to 15.8']}]},
        {kind: 'bar', title: 'Sweat chloride at week 24 (mmol/L; 60 and above is the CF range)', unit: '', categories: ['Trikafta', 'Placebo'], series: [{name: 'Mean sweat chloride', values: [57.9, 102.4]}], colorByCategory: true},
        {kind: 'bar', title: 'Pulmonary exacerbations per 100 patient-years', unit: '', categories: ['Trikafta', 'Placebo'], series: [{name: 'Annualized rate', values: [37, 98], notes: ['41 events; 0.37 per patient-year', '113 events; 0.98 per patient-year']}], colorByCategory: true},
      ],
      takeaway: 'Every endpoint moved together: lung function +14.3 points, exacerbations 63% lower, symptom score +20.2 points (4 is considered meaningful), BMI up, sweat chloride down about 42 mmol/L. Only 1% of patients stopped because of side effects. Rash (about 11% versus 6.5%) and raised liver enzymes were more common on the drug.'},

    {type: 'trial', title: 'Trial 103: two F508del copies, versus Symdeko', intro: 'Could a third drug add meaningfully to an already-approved two-drug regimen?',
      design: {name: 'VX17-445-103', phase: 'Phase 3', blinding: 'Double-blind', years: 'Aug – Dec 2018', n: 107,
        population: 'Age 12+, two F508del copies, stable, ppFEV1 40–90%, after 4 weeks on Symdeko', randomization: '1:1',
        arms: [{name: 'Trikafta', n: 55, desc: 'Symdeko + elexacaftor, 4 weeks'}, {name: 'Symdeko', n: 52, desc: 'Symdeko alone, 4 weeks', control: true}],
        endpoint: 'Change in ppFEV1 at week 4',
        details: {'Sites': '44 sites in 4 countries', 'Run-in': 'Everyone took Symdeko for 4 weeks first, so the baseline is "on the best existing drug"', 'Primary endpoint': 'Absolute change in [[ppFEV1]] at week 4', 'Key secondary': '[[sweat chloride]] and [[CFQ-R]] respiratory score', 'Published': 'Heijerman et al., Lancet, November 2019'}},
      predict: {q: 'Everyone was already on Symdeko. After adding elexacaftor for just four weeks, what happened?',
        options: ['Nothing measurable: Symdeko was already doing the work', 'About 10 more points of ppFEV1 and a large further drop in sweat chloride', 'A small lung gain, but sweat chloride unchanged', 'Lung function fell because three drugs interacted badly'], answer: 1,
        explain: 'Adding elexacaftor gave 10.0 more points of ppFEV1 (95% CI 7.4 to 12.6), cut sweat chloride by another 45.1 mmol/L and raised the symptom score by 17.4 points, all within four weeks. Nobody stopped treatment.'},
      results: [
        {kind: 'bar', title: 'Improvement over Symdeko at week 4', unit: '', categories: ['ppFEV1 (points)', 'CFQ-R respiratory (points)', 'Sweat chloride fall (mmol/L)'], series: [{name: 'Treatment difference', values: [10.0, 17.4, 45.1], notes: ['95% CI 7.4 to 12.6', '95% CI 11.8 to 23.0', '95% CI 40.1 to 50.1']}]},
      ],
      takeaway: 'Trial 103 was short (four weeks) and small (107 patients), but because it was run against the best existing drug, it answered the payer\'s question directly: this is not a marginal upgrade. Serious adverse events: 2 patients (4%) on the triple, 1 (2%) on Symdeko.'},

    {type: 'callout', variant: 'numbers', heading: 'Trikafta by the numbers', html: `<ul>
      <li><b>403 + 107</b> patients in the two pivotal trials; <b>115</b> sites in <b>13</b> countries for the larger one.</li>
      <li><b>13.8 → 14.3</b> points: the ppFEV1 gain at week 4 and through week 24. The effect held.</li>
      <li><b>0.37 vs 0.98</b> exacerbations per patient-year. That is roughly one flare-up every 2.7 years instead of about one a year.</li>
      <li><b>102 → 58</b> mmol/L: average sweat chloride moved from deep in the CF range to just under the diagnostic line.</li>
      <li><b>3 months</b> from application (19 July 2019) to approval (21 October 2019), against a deadline of 19 March 2020.</li>
      <li><b>2</b>: pills of the triple each morning, plus one ivacaftor tablet each evening.</li></ul>`},

    // ---------------------------------------------------------------- 9 regulators
    {type: 'story', kicker: 'The regulators', title: 'Five months early, and broader than the trials', tocTitle: 'Regulators', html: `
      <p>Trikafta collected most of the FDA's speed-ups. It had [[fast track designation]] (February 2017), [[breakthrough therapy designation]] (May 2018), [[orphan drug]] status (August 2018) and [[priority review]] (August 2019), which set a six-month clock ending on 19 March 2020. The agency did not convene an [[advisory committee]]. The multidisciplinary review recommended approval, and the drug was approved on 21 October 2019.</p>
      <p>The more interesting decision was the wording of the [[label]]. Vertex asked for "patients 12 years of age and older who have at least one F508del mutation", not just the two genotypes studied. The FDA had warned at the pre-submission meeting that this would be a review issue. In the end it accepted the reasoning. If the drug worked in F508del plus a mutation that makes no protein at all, the hardest case, and in F508del/F508del, then the F508del copy was doing the work. Any second mutation could only help. The review acknowledged that the program "did not specially evaluate all mutations covered under the broader indication". The label covered about 90 percent of patients from day one.</p>
      <p>Later expansions went further, and leaned on laboratory evidence. The label now lists variants judged responsive in the [[FRT assay]]: Fischer rat thyroid cells engineered to carry one CFTR variant each. A variant counts if the drug raises chloride transport by at least 10 percent of normal. For rare mutations carried by a handful of people worldwide, randomized trials are impossible, and the FDA accepted dish data instead. Trikafta's age range dropped to 6 in 2021 and to 2 in 2023. In March 2026 the indication was broadened again to people with at least one variant that is responsive <em>or results in production of CFTR protein</em>, a definition based on mechanism rather than on a list.</p>
      <h3>The safety story since</h3>
      <p>Approval was the start of the safety record, not the end. In December 2024 the FDA required Vertex to move liver injury from a warning into a [[black box warning|boxed warning]] after reports of liver failure leading to transplant or death, in people with and without prior liver disease. The label now calls for liver tests every month for the first six months. Label warnings about raised pressure around the brain and about neuropsychiatric events, including suicidal thoughts, were added or revised in 2025 and 2026. None of this has changed the overall balance for most patients. It is a reminder that trials of a few hundred people over six months cannot see rare harms in drugs taken by tens of thousands of people for decades.</p>`},

    {type: 'table', title: 'The regulatory path', columns: ['Date', 'Milestone', 'Why it matters'], rows: [
      ['12 Dec 2016', '[[IND]] opened for elexacaftor', 'Human testing begins'],
      ['8 Feb 2017', '[[fast track designation|Fast track]]', 'Rolling submission, more FDA contact'],
      ['15 May 2018', '[[breakthrough therapy designation|Breakthrough therapy]]', 'Intensive FDA guidance, based on phase 2 data'],
      ['29 Aug 2018', '[[orphan drug|Orphan drug]] designation', 'Seven years of US market exclusivity, tax credits'],
      ['19 Jul 2019', '[[NDA]] submitted', 'Built on the week-4 interim analysis of trial 102'],
      ['14 Aug 2019', '[[priority review|Priority review]]; [[PDUFA date]] 19 Mar 2020', 'Six-month review clock'],
      ['21 Oct 2019', 'Approved, age 12+, at least one F508del', 'Five months before the deadline; no advisory committee'],
      ['Aug 2020', 'EU approval as Kaftrio', 'Europe follows ten months later'],
      ['2021 / 2023', 'Ages 6–11, then 2–5', 'Starting earlier, before lung damage builds up'],
      ['Dec 2024', 'Boxed warning: liver injury and failure', 'Rare, serious harm seen after approval'],
      ['Mar 2026', 'Indication: any responsive or protein-producing variant', 'Label defined by mechanism, not a list'],
    ], caption: 'Sources: FDA multidisciplinary review of NDA 212273 (2019); current FDA label; Vertex 10-K 2025; EMA dates via Healthcare (Basel) 2025.'},

    // ---------------------------------------------------------------- 10 patients' lives
    {type: 'story', kicker: 'Patients\' lives', title: 'Planning for a future nobody had planned for', tocTitle: 'Patients\' lives', html: `
      <p>Numbers in a trial report can hide what they mean in a life. A 14-point rise in lung function is, for many people, the difference between stopping to rest on the stairs and not noticing the stairs. Fewer exacerbations mean fewer hospital stays for intravenous antibiotics. In the trials, people gained weight; registry studies since then report fewer lung transplants. The daily treatment routine didn't vanish, but for many it shrank.</p>
      <h3>How long will people live?</h3>
      <p>Nobody knows yet, because the drug is too new. Two kinds of estimate exist, and a careful reader should keep them apart. The first comes from the US registry. Its median survival age, a projection that assumes current death rates continue, rose from 38.6 years in 2012 to 68.0 in 2023. The second is modeling. A [[microsimulation model]] by Vertex researchers, published in 2023, projected median survival of 71.6 years for people with two F508del copies who start Trikafta at 12 or older, and 82.5 years for those who start between 12 and 17. That would be close to a normal lifespan. These are projections from a company with a stake in the answer, built largely on trial results and extrapolation, and they should be read that way.</p>
      <h3>The baby boom</h3>
      <p>One effect nobody had planned for was pregnancy. CF reduces fertility, partly through thick secretions in the reproductive tract, and modulators appear to reverse some of that. At one UK center that follows 217 women with CF, pregnancies rose from 3 in 2020 to 16 in 2023; a third of those between 2020 and 2024 were unplanned. Women who had been told they might not live to raise children found themselves pregnant, on a drug that had never been tested in pregnancy (pregnant women were excluded from the trials). Clinicians have had to learn fast: the drugs cross the placenta, and prospective studies are only now under way.</p>
      <h3>The 10 percent</h3>
      <p>For the roughly 1 in 10 people with no F508del copy, the arrival of Trikafta was bittersweet. Some have other mutations that respond, and the label now reaches them. But people whose two copies make no CFTR protein at all, typically two [[nonsense mutation|nonsense mutations]] or large deletions, have nothing for a modulator to act on. Nonsense mutations cause CF in about 10 percent of patients. Attempts to make cells read through the premature stop signal have not yet produced a drug. Ataluren missed its primary endpoint in a phase 3 trial of 238 patients published in 2014. Vertex now estimates that "nearly 95%" of people with CF could benefit from one of its five medicines. For the rest, it is developing VX-522 with Moderna, a nebulized mRNA meant to make lung cells produce working CFTR, alongside gene-editing research.</p>
      <p>These patients are also disproportionately not of European descent. F508del is most common in people of northern European ancestry. In India and Southeast Asia it is reported in only 25 to 30 percent of patients, and national data from Turkey suggest only about half of patients there are eligible for current modulators. A drug that covers 90 percent of patients in Boston may cover far fewer in Istanbul or Delhi.</p>`},

    {type: 'custom', title: 'Which drug covers my mutations?', intro: 'Choose the two CFTR variants a person carries and their age. The explorer applies the current US labels in simplified form (2026). Real decisions belong to CF clinicians, and labels list many more variants than these.',
      html: `<div class="card"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;font-size:15px">
        <label>Allele 1<br><select id="gA" style="width:100%;padding:6px;font-size:15px"></select></label>
        <label>Allele 2<br><select id="gB" style="width:100%;padding:6px;font-size:15px"></select></label>
        <label>Age<br><select id="gAge" style="width:100%;padding:6px;font-size:15px"><option value="1">1 to 5 years</option><option value="6">6 to 11 years</option><option value="12" selected>12 or older</option></select></label></div>
        <div id="gOut" style="margin-top:14px"></div><div id="gNote" style="margin-top:10px;font:400 16px/1.6 var(--serif)"></div></div>`,
      init: (root, api) => {
        const V = {
          F508del: {cls: 'Class II: misfolds', note: 'The most common variant, in about 9 in 10 patients.'},
          G551D: {cls: 'Class III: gate stuck', note: 'The mutation Kalydeco was first approved for.'},
          R117H: {cls: 'Reaches the surface, works partly', note: 'Listed as responsive on the Kalydeco, Symdeko and Trikafta labels.'},
          D1152H: {cls: 'Residual function', note: 'Responsive on all but Orkambi in the current labels.'},
          A455E: {cls: 'Residual function', note: 'Responsive to Kalydeco, Symdeko, Trikafta and Alyftrek per the labels.'},
          N1303K: {cls: 'Misfolds', note: 'Not on the Kalydeco or Symdeko lists; Trikafta\'s label cites lab data in patient-derived airway cells.'},
          G542X: {cls: 'Class I: nonsense, no protein', note: 'A premature stop signal: no full-length protein to act on.'},
          W1282X: {cls: 'Class I: nonsense, no protein', note: 'A premature stop signal: no full-length protein to act on.'},
        };
        const KAL = ['G551D', 'R117H', 'D1152H', 'A455E'], TRI = ['F508del', 'G551D', 'R117H', 'N1303K', 'D1152H', 'A455E'];
        const A = root.querySelector('#gA'), B = root.querySelector('#gB'), AG = root.querySelector('#gAge');
        Object.keys(V).forEach(k => { A.add(new Option(k + ' (' + V[k].cls + ')', k)); B.add(new Option(k + ' (' + V[k].cls + ')', k)); });
        A.value = 'F508del'; B.value = 'G542X';
        const run = () => {
          const a = A.value, b = B.value, age = +AG.value, has = L => L.includes(a) || L.includes(b);
          const rows = [
            ['Kalydeco', 'ivacaftor, 2012', 0, has(KAL), 'needs one potentiator-responsive variant'],
            ['Orkambi', 'lumacaftor/ivacaftor, 2015', 1, a === 'F508del' && b === 'F508del', 'only for two F508del copies'],
            ['Symdeko', 'tezacaftor/ivacaftor, 2018', 6, (a === 'F508del' && b === 'F508del') || has(KAL), 'two F508del copies, or one responsive variant'],
            ['Trikafta', 'elexacaftor/tezacaftor/ivacaftor, 2019', 2, has(TRI), 'at least one responsive or protein-producing variant'],
            ['Alyftrek', 'vanzacaftor triple, 2024', 6, has(TRI), 'same variant rule as Trikafta, once daily'],
          ];
          root.querySelector('#gOut').innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px">` + rows.map(([n, s, minAge, ok, rule]) => {
            const ageOk = age >= minAge, yes = ok && ageOk;
            return `<div style="border:1px solid var(--rule);border-radius:12px;padding:12px;background:${yes ? 'var(--win-s)' : 'var(--panel)'};border-color:${yes ? 'var(--win)' : 'var(--rule)'}"><b>${n}</b><div style="font-size:13px;color:var(--ink-3)">${s}</div><div style="margin-top:6px;font-size:14.5px">${yes ? 'Covered' : ok ? 'Not at this age (from ' + minAge + ')' : 'Not covered'}</div><div style="font-size:13px;color:var(--ink-3);margin-top:4px">${rule}</div></div>`;
          }).join('') + `</div>`;
          const none = !has(TRI);
          root.querySelector('#gNote').innerHTML = api.terms(`<b>${a}:</b> ${V[a].note} <b>${b}:</b> ${V[b].note}` + (none ? ' <b>No modulator helps this genotype:</b> neither copy makes a protein the drugs can work on. This is the group waiting for RNA or gene-based therapies such as VX-522.' : a !== b && (TRI.includes(a) !== TRI.includes(b)) ? ' One responsive copy is enough: the drugs act on the protein made from that allele.' : ''));
        };
        [A, B, AG].forEach(x => x.onchange = run); run();
      }},

    {type: 'callout', variant: 'whatif', heading: 'What if the foundation had waited for pharma?', html: `<p>Suppose the CF Foundation had kept funding only academic grants in the late 1990s. The science would still have arrived: the gene, Welsh's temperature finding and the screening dyes were all public or licensable. But no large company had a CF program. The market looked small, and "fix a misfolded protein with a pill" had no precedent. Someone would probably have tried eventually, perhaps after the first modulator successes in other diseases. Five to ten years of delay would have been a plausible outcome. In a disease where median survival was under 40, that delay would have been measured in lives. The counter-argument is that philanthropy also shaped <em>who</em> owns the result. By choosing one partner early, the foundation helped create the near-monopoly that later set the price.</p>`},

    // ---------------------------------------------------------------- 11 the money
    {type: 'story', kicker: 'The money', title: 'The $3.3 billion royalty', tocTitle: 'The royalty sale', html: `
      <p>By 2014 Kalydeco was on the market, lumacaftor had just reported positive phase 3 results, and the foundation held royalties on the whole Vertex CF pipeline. It also had a problem. It had already done two smaller deals borrowing against the royalty, and under those the foundation would receive no cash from it for two years and only modest amounts in years three and four. Most of the royalty's value lay in drugs not yet approved.</p>
      <p>[[Royalty Pharma]], a New York firm that buys drug royalties, had first approached the foundation in 2008 after Kalydeco's early phase 2 results. Talks went nowhere then. In 2014 it came back. According to Royalty Pharma's later IPO filing, it did its checks, agreed terms, arranged a $2.7 billion loan and closed in about four weeks. In November 2014 it paid <b>$3.3 billion</b> for the foundation's royalties on Vertex's CF medicines, about twenty times the foundation's 2013 budget. It was, at the time, about four times the size of Royalty Pharma's largest previous deal. The foundation kept a share of the upside: half of the royalties on annual worldwide sales above $5.8 billion.</p>
      <p>Beall explained the logic at the time:</p>
      <blockquote class="pull">People with CF and their families need our help now and they can't wait. Selling our royalty rights allows us to begin to accelerate our mission.<cite>Robert Beall, CF Foundation chief executive, November 2014 (via Chemistry World)</cite></blockquote>
      <p>The foundation said it would use the money to improve existing therapies, fund new ones, support patient care and pursue a cure. It began funding a much wider range of companies and approaches, including work on the nonsense and rare mutations Vertex's drugs could not reach. The deal also drew criticizm. A charity holding a direct financial stake in a drug's sales, critics argued, had a conflict of interest when that drug cost about $300,000 a year, and could have done more to keep the price down.</p>
      <p>Was it a good trade? Royalty Pharma bet correctly: Vertex's CF sales grew from about $0.5 billion in 2014 to about $11.8 billion in 2025. In 2025 alone, Royalty Pharma reported $917 million of cash receipts from the CF franchise. But judging the sale by hindsight misses the point of the decision. In 2014 no one knew elexacaftor existed, correctors had shown only modest effects, and the money could fund research immediately. The explorer below lets you check the arithmetic both ways.</p>`},

    {type: 'decision', title: 'You decide: sell the royalty?', role: 'You are the CF Foundation\'s board, November 2014',
      scenario: `You hold royalties "from single digits to sub-teens" percent on Vertex's CF drugs. Kalydeco sells about $460 million a year and serves about 4% of patients. The first corrector combination has just shown a 2.6 to 4.0 point lung gain in phase 3. Because of two earlier financing deals, you will get no cash from the royalty for two years. Royalty Pharma offers $3.3 billion now, twenty times your annual budget, and you would keep half the royalties on sales above $5.8 billion a year. What do you do?`,
      options: [
        {label: 'Sell: $3.3 billion now, keep the upside share.', outcome: 'You turn a risky, delayed stream into cash you can deploy at once, on dozens of companies and on the mutations Vertex will not reach. If the pipeline stalls at modest correctors, you have locked in a fortune. If it succeeds wildly, you have given away most of that success, though you keep a share above $5.8 billion in sales.'},
        {label: 'Keep it: the pipeline is worth more than $3.3 billion.', outcome: 'If the triple arrives, as it did, your royalty would have paid hundreds of millions of dollars a year for decades. But in 2014 you could not see that. You would have had no cash for two years, full exposure to trial failures, and a charity whose budget depended on one company\'s drug sales, deepening the conflict-of-interest problem.'},
        {label: 'Sell only part of it, or borrow against it again.', outcome: 'A middle path: raise less cash now, keep more upside. It is what the earlier capped deals already did, which is why the royalty paid nothing in the near term. Each additional layer adds complexity, and buyers pay less for a slice with strings attached.'},
      ],
      reality: `The foundation sold to Royalty Pharma in November 2014 for $3.3 billion and kept half of royalties on annual sales above $5.8 billion, a threshold Vertex's CF franchise has since passed, so the foundation still receives money. The proceeds funded a large expansion of its research programs. Was it worth more to keep? The royalties paid out up to 2025, discounted back to 2014, come to roughly the sale price on reasonable assumptions (try the explorer below). The larger prize is what is still to come: Royalty Pharma received $917 million from the franchise in 2025 alone, and expects royalties into the late 2030s. Almost all of that value rests on Trikafta and its successor, drugs that did not exist in 2014.`},

    {type: 'explorer', title: 'Sell or hold? Price the royalty yourself', intro: 'A toy valuation. It applies a blended royalty rate to Vertex\'s reported CF sales from 2015, discounts back to 2014, and scales by the odds, as seen in 2014, that the pipeline would succeed. It ignores the capped earlier deals and the foundation\'s upside share. The last slider adds years after 2025, held at the 2025 sales level; royalties are expected to run into the late 2030s.',
      inputs: [
        {id: 'r', label: 'Blended royalty rate', min: 4, max: 12, step: 0.5, value: 8, fmt: v => v + '%'},
        {id: 'd', label: 'Discount rate', min: 4, max: 15, step: 1, value: 10, fmt: v => v + '%'},
        {id: 'p', label: 'Odds in 2014 the pipeline would succeed', min: 10, max: 100, step: 5, value: 50, fmt: v => v + '%'},
        {id: 't', label: 'Years after 2025 to include', min: 0, max: 12, step: 1, value: 0, fmt: v => v ? '+' + v + ' yrs' : 'none'},
      ],
      compute: (v) => {
        const sales = {2015: 0.98, 2016: 1.68, 2017: 2.17, 2018: 3.04, 2019: 4.16, 2020: 6.20, 2021: 7.57, 2022: 8.93, 2023: 9.87, 2024: 11.01, 2025: 11.80};
        for (let k = 1; k <= v.t; k++) sales[2025 + k] = 11.80;
        let pv = 0, raw = 0, pre20 = 0, post25 = 0;
        Object.entries(sales).forEach(([y, s]) => { const roy = s * v.r / 100; raw += roy; const disc = roy / Math.pow(1 + v.d / 100, +y - 2014); pv += disc; if (+y < 2020) pre20 += disc; if (+y > 2025) post25 += disc; });
        const exp = pv * v.p / 100, max = Math.max(3.3, pv, raw) * 1.12, W = 500;
        const bar = (y, val, cls, label) => `<text x="0" y="${y + 17}" class="il-text">${label}</text><rect x="260" y="${y}" width="${Math.max(2, val / max * W)}" height="24" rx="5" class="${cls}"/><text x="${266 + val / max * W}" y="${y + 17}" class="il-text">$${val.toFixed(2)}B</text>`;
        const end = 2025 + v.t;
        const svg = `<svg viewBox="0 0 860 190" role="img" aria-label="Royalty valuation bars">${bar(0, 0.15, 'il-6" style="opacity:0.45', 'Foundation invested (to 2014)')}${bar(36, 3.3, 'il-6', 'Royalty Pharma paid (2014)')}${bar(72, raw, 'il-6" style="opacity:0.45', 'Royalties 2015–' + end + ', undiscounted')}${bar(108, pv, 'il-6', 'Hindsight value, 2014 dollars')}${bar(144, exp, 'il-4', 'Risk-adjusted, as seen in 2014')}</svg>`;
        const verdict = exp > 3.3 ? 'On these assumptions, holding looked better even from 2014.' : pv > 3.3 ? 'With hindsight, holding would have paid more; with 2014\'s uncertainty, selling looked reasonable.' : 'On these assumptions, $3.3 billion beat even the hindsight value of the royalties counted.';
        return `${svg}<p style="margin-top:8px"><b>${verdict}</b> Of the hindsight value, $${pre20.toFixed(2)}B comes from 2015–2019, before Trikafta${v.t ? `, and $${post25.toFixed(2)}B from the years after 2025` : ''}. For calibration: Royalty Pharma reported $917 million of receipts from the franchise in 2025, on about $11.7 billion of end-market sales, roughly 8%. Toy model: sales are Vertex\'s reported CF product revenues; the rates and odds are your assumptions.</p>`;
      }},

    {type: 'chart', title: 'Vertex becomes a CF company', intro: 'Vertex\'s CF product revenue, company-reported, worldwide net sales.',
      chart: {kind: 'line', title: 'Vertex net product revenue from CF medicines', unit: '$B',
        series: [{name: 'All CF medicines', short: 'All CF', points: [[2012, 0.17], [2013, 0.37], [2014, 0.46], [2015, 0.98], [2016, 1.68], [2017, 2.17], [2018, 3.04], [2019, 4.16], [2020, 6.20], [2021, 7.57], [2022, 8.93], [2023, 9.87], [2024, 11.01], [2025, 11.80]]},
          {name: 'Trikafta/Kaftrio', short: 'Trikafta', points: [[2019, 0.42], [2020, 3.86], [2021, 5.70], [2022, 7.69], [2023, 8.94], [2024, 10.24], [2025, 10.31]], color: 3, labelDy: 14}],
        annotations: [{x: 2014.9, label: 'Royalty sold'}, {x: 2019.8, label: 'Trikafta', dy: 16}], xTicks: [2012, 2014, 2016, 2018, 2020, 2022, 2024], rightPad: 70,
        note: 'Source: Vertex 10-K filings (2014, 2015, 2017, 2020, 2022, 2025). 2012–2014 are Kalydeco only. 2024 and 2025 exclude Casgevy and Journavx revenue. 2025 includes $0.84B of Alyftrek.'},
      takeaway: 'In 2012 Vertex\'s biggest product was Incivek, a hepatitis C drug that sold $1.16 billion that year and $24 million two years later, as better drugs (see Sovaldi) swept the market. CF went from rescue to the whole company. By 2025 its CF medicines brought in about $11.8 billion.'},

    {type: 'story', kicker: 'The price', title: '$311,000 a year, and the fights over access', tocTitle: 'Price and access', html: `
      <p>Trikafta launched in the US at a [[list price]] of about $311,000 a year, in line with Kalydeco. By 2025 the list price had risen to about $322,000. In the US, insurers and public programs negotiate confidential rebates, so the [[net price]] is lower, but the list price anchors what everyone pays. For a drug taken daily for life, the lifetime bill at list price runs into many millions of dollars.</p>
      <p>Is it worth it? The US Institute for Clinical and Economic Review ([[ICER]]) concluded in 2020 that Trikafta delivers "substantial benefits", but that its [[health-benefit price benchmark]] was $67,900 to $85,500 a year: at least a 73 percent discount off list. Its press release was blunt: the manufacturer had "leveraged its monopoly to set a price... that is far out of proportion to the treatment's substantial benefits." At the other end, a 2022 study in the <em>Journal of Cystic Fibrosis</em> estimated that the triple could be manufactured, with generic competition, for about $5,700 a year. The same analysis put the cost of treating every eligible diagnosed patient worldwide at list price at $31 billion a year.</p>
      <p>Vertex's defense, common across the industry, is that the price pays for the failures and for the next drugs, and that it spends heavily on research: $3.9 billion in 2025. The critics' reply is that the foundational science was paid for by the NIH and the foundation, and that a monopoly, not the value of the research, sets the price.</p>
      <h3>England: from rejection to a deal</h3>
      <p>In England, [[NICE]] decides whether the NHS pays, using cost per [[QALY]]. In July 2016 it rejected Orkambi, which listed at £104,000 a year. For three years Vertex, the NHS and families fought in public. In October 2019 [[NHS England]] and Vertex agreed an interim deal that made Orkambi and Symkevi (Symdeko's European name) available while more evidence was collected through the UK CF Registry; Kaftrio was added in 2020. By 2021, 72.6 percent of UK patients were on a modulator. When NICE finally appraised the drugs, its November 2023 draft recommended none of them. After further negotiation, the July 2024 final guidance recommended all three, provided the NHS gets them under a confidential commercial arrangement. The list price of Kaftrio in England is £8,346.30 for 28 days of tablets, before that discount.</p>
      <h3>Canada, Brazil and beyond</h3>
      <p>Health Canada approved Trikafta in June 2021, about 20 months after the US. In Brazil, where about 7,000 people are diagnosed with CF, the regulator approved it in March 2022. The public health system agreed to fund it in September 2023, and dispensing began in May 2024, about five years after US approval. Patient groups there asked the health minister to declare modulators of public interest, the first step toward a [[compulsory license]]. In Argentina, where Vertex had not registered the drugs, a local manufacturer produced a generic version at a price about 85 percent below the US original. In South Africa, India and elsewhere, patients and international campaigns such as "Vertex Save Us" have pushed for tiered pricing or generic licenses. In 2023, more than 100 CF clinicians signed a statement urging tiered pricing for low- and middle-income countries. Vertex says its CF medicines are now reimbursed or accessible in more than 60 countries.</p>`},

    {type: 'explorer', title: 'What does a lifetime of Trikafta cost?', intro: 'Set a price and a patient population. Compare with the reference points below: an estimated generic production cost, ICER\'s value-based range, and the US list price at launch. Undiscounted and simplified.',
      inputs: [
        {id: 'price', label: 'Annual price (USD thousands)', min: 5, max: 350, step: 5, value: 310, fmt: v => '$' + v + 'k'},
        {id: 'years', label: 'Years on treatment', min: 5, max: 70, step: 5, value: 50, fmt: v => v + ' yrs'},
        {id: 'n', label: 'Patients treated (thousands)', min: 1, max: 100, step: 1, value: 30, fmt: v => v + 'k'},
      ],
      compute: (v) => {
        const life = v.price * v.years / 1000, budget = v.price * v.n / 1000;
        const X = p => 20 + p / 350 * 800;
        const refs = [[5.7, 'Generic cost est. $5.7k', 'il-3'], [67.9, 'ICER range', 'il-4'], [311, 'US list at launch', 'il-2']];
        let s = `<svg viewBox="0 0 860 120" role="img" aria-label="Price comparison"><rect x="${X(67.9)}" y="30" width="${X(85.5) - X(67.9)}" height="30" class="il-4s"/><line x1="20" y1="60" x2="820" y2="60" class="il-line"/>`;
        refs.forEach(([p, l, c], i) => { s += `<circle cx="${X(p)}" cy="60" r="6" class="${c}"/><text x="${X(p) + (i === 2 ? -8 : 8)}" y="${i === 1 ? 22 : 88 + (i === 0 ? 0 : 0)}" text-anchor="${i === 2 ? 'end' : 'start'}" class="il-text-2">${l}</text>`; });
        s += `<path d="M${X(v.price)} 44 l-8 -14 h16 z" class="il-6"/><text x="${X(v.price)}" y="112" text-anchor="middle" class="il-text">Your price: $${v.price}k</text></svg>`;
        const ratio = v.price / 5.7;
        return `${s}<p style="margin-top:6px">Lifetime cost for one patient: <b>$${life.toFixed(1)} million</b>. Annual bill for ${v.n},000 patients: <b>$${budget.toFixed(1)} billion</b>. Your price is about <b>${Math.round(ratio)} times</b> the estimated generic production cost${v.price > 85.5 ? ', and above ICER\'s health-benefit range of $67.9k–$85.5k' : v.price >= 67.9 ? ', inside ICER\'s health-benefit range' : ', below ICER\'s health-benefit range'}. For scale: about 30,000 people have CF in the US; Vertex estimates about 112,000 across its markets.</p>`;
      }},

    {type: 'callout', variant: 'product', heading: 'Value-based pricing when the customer cannot churn', html: `<p>Software pricing teams talk about capturing a fair share of the value a product creates. By that logic, a drug that adds decades of life is worth a great deal, and Vertex priced it that way. In a normal market, a competitor would enter and the price would fall toward cost. Here the product costs perhaps $6,000 a year to make and sells for fifty times that.</p>
      <p><b>Where the analogy breaks:</b> the customer cannot churn, because stopping the drug means the disease comes back. The buyer is rarely the user; it is an insurer or a national health service trading this drug against others. Patents and data exclusivity deliberately block competitors until the late 2030s. And "willingness to pay" for your child's breath has no ceiling, which is why health systems use tools like QALY thresholds and, occasionally, the threat of a compulsory license to create a ceiling artificially.</p>`},

    {type: 'decision', title: 'You decide: the NHS standoff', role: 'You negotiate for NHS England, 2019',
      scenario: `NICE has said Orkambi is not cost-effective at £104,000 a year. For three years families have campaigned publicly, and Vertex has not budged on the list price. Vertex now offers an interim deal: its current CF drugs at a confidential discount, with data collected through the UK registry while NICE completes a full appraisal later. The triple is in phase 3 and looks far better. Do you accept?`,
      options: [
        {label: 'Accept the portfolio deal now, and let NICE appraise later with real-world data.', outcome: 'Patients get access immediately, you set a precedent that can be extended to the triple, and you get a discount plus registry data to settle the cost-effectiveness question. The risk is that you weaken NICE\'s process: a company that holds out long enough gets a special deal, and the final appraisal becomes hard to enforce once thousands of patients are on the drug.'},
        {label: 'Hold out: the NICE threshold exists for a reason.', outcome: 'You protect the principle that every drug is judged by the same rule, so money is not diverted from treatments that buy more health per pound. But people with CF in England keep going without modulators that American patients have had for years, and the triple is about to arrive with much larger benefits.'},
        {label: 'Threaten a compulsory license or generic import.', outcome: 'It is legal under trade rules in some circumstances and can shift negotiations. But it is politically explosive for a rich country, would sour relations with the whole industry, and would take time to produce a supply.'},
      ],
      reality: `NHS England accepted an interim portfolio agreement in October 2019. Kaftrio was added when it was approved in Europe in August 2020. The registry data collection fed NICE's full appraisal. That appraisal's draft, in November 2023, still said no. But the final guidance in July 2024 recommended all three drugs under a confidential commercial arrangement. By then, more than 7 in 10 UK patients were on a modulator.`},

    // ---------------------------------------------------------------- 12 what came next
    {type: 'story', kicker: 'What came next', title: 'Competing with yourself', tocTitle: 'What came next', html: `
      <p>With no approved competitor for its modulators, Vertex's main rival has been its own previous product. Its successor to Trikafta, <b>Alyftrek</b> (vanzacaftor, tezacaftor and deutivacaftor), was approved in the US in December 2024. It is taken once a day instead of twice. Deutivacaftor is a [[deuterated drug|deuterated]] version of ivacaftor that the body breaks down more slowly.</p>
      <p>The SKYLINE trials that supported it were designed differently from Trikafta's. Nearly 1,000 people, most already on Trikafta, were randomized to stay on it or switch, for 52 weeks. Beating Trikafta on lung function would have been unrealistic, so these were [[non-inferiority trial|non-inferiority trials]]: Alyftrek needed to be no more than 3 points worse. The difference was 0.2 points, essentially identical. On sweat chloride it did better. In the pooled trials, 31 percent of people on Alyftrek reached the normal range (below 30 mmol/L) at week 24, against 23 percent on Trikafta. Whether that sweat test advantage translates into longer or healthier lives is not yet known. Vertex says it expects most patients to switch over time.</p>
      <p>There is also a business reason to switch. The Trikafta basic patent runs to 2037 in the US and Europe; Alyftrek's to 2039. The royalty is different too. Vertex's agreement with the foundation carries no royalties on compounds first synthesized and tested on or after 1 September 2016. According to Royalty Pharma's filings, Vertex says deutivacaftor is not royalty-bearing, which would mean a blended royalty of about 4 percent on Alyftrek. Royalty Pharma argues it is the same as ivacaftor, which would mean about 8 percent. The patient charity's original bet is still paying, but the terms of that bet shape which molecules a company prefers to sell.</p>
      <h3>The legacy</h3>
      <p>In September 2025 the Lasker~DeBakey Clinical Medical Research Award went to Michael Welsh, Tito González and Paul Negulescu. Commentators in PNAS called CF the first example where the absent function of an abnormal protein was corrected by drugs, with lessons for other misfolding diseases. The venture philanthropy model spread to other foundations. And the pricing fight became a reference case for how to reward a cure without letting the reward lock out most of the world.</p>
      <p>For roughly three quarters of the approximately 97,000 people with CF in the US, Europe, Australia and Canada, a Vertex modulator is now part of daily life. For the rest, and for the many undiagnosed patients in countries where the drugs are not registered, the story is not finished.</p>`},

    // ---------------------------------------------------------------- quiz, lessons, sources
    {type: 'quiz', title: 'Check yourself', questions: [
      {q: 'Why does a broken chloride channel lead to thick mucus in the lungs?', options: ['Chloride itself is what makes mucus runny', 'Water follows salt: without chloride leaving the cells, the airway surface dries and mucus becomes thick', 'The broken protein clumps into the mucus', 'The immune system attacks CFTR and causes inflammation first'], answer: 1, explain: 'CFTR moves chloride out of airway cells; water follows by osmosis. Lose that and the airway surface liquid collapses, mucus dehydrates and cilia can\'t clear it. Infection and inflammation follow.'},
      {q: 'Why did Vertex develop ivacaftor alone for G551D before tackling F508del?', options: ['G551D patients were sicker', 'G551D protein reaches the cell surface with a stuck gate, so a potentiator alone could work; F508del protein mostly never arrives', 'The FDA required a small trial first', 'F508del patients refused to join trials'], answer: 1, explain: 'A potentiator needs a channel at the surface to act on. G551D provides one; F508del mostly does not until a corrector rescues its folding. Starting there gave a clean proof of concept.'},
      {q: 'Trikafta was approved for anyone with at least one F508del copy, even though trials only studied two genotypes. What was the reasoning?', options: ['The FDA approved it without evidence because of patient pressure', 'If it works with F508del plus a mutation making no protein, the hardest case, the F508del copy is doing the work, so any second mutation should only help', 'All CF mutations respond identically to modulators', 'Vertex ran separate trials for every genotype'], answer: 1, explain: 'Trial 102 used a minimal-function second allele, the hardest test. The FDA accepted that efficacy there plus in F508del/F508del supported the broader label, while noting not every combination was studied.'},
      {q: 'In trial 103, why did everyone take Symdeko for four weeks before randomization?', options: ['To wash out Orkambi', 'So the comparison measured the gain over the best existing drug, an active comparator, since placebo was hard to justify for people with an approved option', 'To check who could swallow pills', 'Because elexacaftor only works after Symdeko'], answer: 1, explain: 'The run-in set a stable on-treatment baseline. The 10-point gain is therefore on top of Symdeko: exactly what payers and patients wanted to know.'},
      {q: 'Which patients does Trikafta not help, even under the broad 2026 label?', options: ['Anyone with only one F508del copy', 'People whose two variants produce no CFTR protein, typically two nonsense mutations', 'Children under 12', 'People with G551D'], answer: 1, explain: 'Modulators act on protein. With no protein made from either copy, there is nothing to correct or potentiate. That group needs RNA or gene-based approaches.'},
      {q: 'Sweat chloride fell from about 102 to 58 mmol/L on Trikafta. Why is it such a useful endpoint?', options: ['It is what patients care about most', 'It is a direct, fast readout of whether CFTR itself is working, useful for dosing, comparing drugs and supporting rare-variant decisions', 'Regulators accept it instead of lung function for full approval', 'It predicts each individual patient\'s survival exactly'], answer: 1, explain: 'It is a mechanistic biomarker: it tells you CFTR is being repaired, within weeks. It tracks outcomes at the population level but is not a perfect predictor for individuals, which is why lung function stayed the primary endpoint.'},
      {q: 'In 2014 the CF Foundation sold its royalty for $3.3 billion. Which statement is fairest?', options: ['It was a mistake, because Trikafta later made the royalty worth far more', 'It traded an uncertain, delayed income stream for cash to fund research immediately, kept some upside, and in hindsight left money on the table', 'It lost money compared with its $150 million investment', 'It gave the foundation control of Trikafta\'s price'], answer: 1, explain: 'Counting royalties that continue into the late 2030s, holding would have paid more, but that value rests on drugs that did not exist in 2014. The foundation turned about $150 million into $3.3 billion plus an upside share, and deployed it quickly.'},
      {q: 'ICER\'s benchmark price for Trikafta was $67,900–$85,500 a year; a study estimated generic production at about $5,700. What best explains the gap to the $311,000 list price?', options: ['Manufacturing is far more expensive than estimated', 'Patents and exclusivity give Vertex a monopoly, and a customer who cannot stop taking the drug has little power to push back', 'US law sets drug prices by research cost', 'The foundation required a high price to maximize its royalty'], answer: 1, explain: 'Prices reflect market power and what payers will bear, not production cost. No approved competitor exists, and patents run into the late 2030s.'},
      {q: 'Why does the switch from Trikafta to Alyftrek matter commercially, beyond once-daily dosing?', options: ['Alyftrek has a longer patent life (2039 vs 2037) and, by Vertex\'s reading, a lower royalty burden', 'Alyftrek is much cheaper to make', 'The FDA is withdrawing Trikafta', 'Alyftrek doubles lung function gains'], answer: 0, explain: 'Moving patients to a newer molecule extends exclusivity and, if Vertex\'s view on deutivacaftor prevails, roughly halves the royalty rate. Clinically, SKYLINE showed near-identical lung function and better sweat chloride.'},
    ]},

    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'Human genetics can point straight at the target', text: 'The 1989 gene discovery named the protein, the most common defect and, with Welsh\'s temperature finding, the kind of drug needed. Well-validated targets are what let a small company beat long odds.', links: ['gleevec', 'spinraza']},
      {title: 'Patients can be investors, not just advocates', text: 'The CF Foundation funded research, lent its registry and trial network, and took royalties. Venture philanthropy bought speed and focus, but not control over price.', links: ['spinraza', 'zolgensma']},
      {title: 'Stage the roadmap to what the biology allows', text: 'Potentiator first for the stuck gate, then correctors, then a second corrector at a different site. Each release validated the next and built the platform: sweat chloride readouts, genotyped patients, regulatory trust.', links: ['keytruda', 'ozempic']},
      {title: 'A mechanistic biomarker speeds everything', text: 'Sweat chloride responded within weeks, letting Vertex compare molecules fast, file on a 4-week endpoint, and win label expansions for rare variants from lab data. Compare the cases where a surrogate misled.', links: ['aduhelm', 'torcetrapib']},
      {title: 'A monopoly on a cure sets up a global access fight', text: 'A $5,700 production cost against a $311,000 list price, years of delay in England, Canada and Brazil, and generics in Argentina: breakthrough and affordability are separate problems.', links: ['sovaldi', 'humira', 'zolgensma']},
      {title: 'Approval starts the safety story', text: 'Liver failure, neuropsychiatric warnings and pregnancy questions emerged only after tens of thousands took the drug for years. Post-marketing surveillance is part of the product.', links: ['vioxx', 'leqembi']},
    ]},

    {type: 'sources', title: 'Sources', items: [
      {text: 'Middleton PG, Mall MA, et al. Elexacaftor–Tezacaftor–Ivacaftor for Cystic Fibrosis with a Single Phe508del Allele. N Engl J Med 2019 (trial VX17-445-102).', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1908639'},
      {text: 'Heijerman HGM, et al. Efficacy and safety of the elexacaftor plus tezacaftor plus ivacaftor combination regimen in people with cystic fibrosis homozygous for the F508del mutation. Lancet 2019;394:1940–48 (trial VX17-445-103).', url: 'https://pubmed.ncbi.nlm.nih.gov/31679946/'},
      {text: 'Keating D, et al. VX-445–Tezacaftor–Ivacaftor in Patients with Cystic Fibrosis and One or Two Phe508del Alleles. N Engl J Med 2018 (phase 2).', url: 'https://pubmed.ncbi.nlm.nih.gov/30334692/'},
      {text: 'Ramsey BW, et al. A CFTR potentiator in patients with cystic fibrosis and the G551D mutation. N Engl J Med 2011 (STRIVE).', url: 'https://pubmed.ncbi.nlm.nih.gov/22047557/'},
      {text: 'Wainwright CE, et al. Lumacaftor–Ivacaftor in Patients with Cystic Fibrosis Homozygous for Phe508del CFTR. N Engl J Med 2015 (TRAFFIC and TRANSPORT).', url: 'https://pubmed.ncbi.nlm.nih.gov/25981758/'},
      {text: 'Taylor-Cousar JL, et al. Tezacaftor–Ivacaftor in Patients with Cystic Fibrosis Homozygous for Phe508del. N Engl J Med 2017 (EVOLVE); Rowe SM, et al. Tezacaftor–Ivacaftor in Residual-Function Heterozygotes. N Engl J Med 2017 (EXPAND).', url: 'https://pubmed.ncbi.nlm.nih.gov/29099344/'},
      {text: 'Keating C, et al. Vanzacaftor–tezacaftor–deutivacaftor versus elexacaftor–tezacaftor–ivacaftor (SKYLINE trials). Lancet Respir Med 2025.', url: 'https://pubmed.ncbi.nlm.nih.gov/39756424/'},
      {text: 'Riordan JR, et al.; Rommens JM, et al.; Kerem B, et al. Identification of the cystic fibrosis gene (three papers). Science 1989;245.', url: 'https://pubmed.ncbi.nlm.nih.gov/2475911/'},
      {text: 'Van Goor F, et al. Rescue of CF airway epithelial cell function in vitro by a CFTR potentiator, VX-770. PNAS 2009.', url: 'https://pubmed.ncbi.nlm.nih.gov/19846789/'},
      {text: 'Singer BD, Budinger GRS. Welsh, González, and Negulescu share Lasker Award recognizing transformative treatments for people with cystic fibrosis. J Clin Invest 2025 (history, mutation classes, $30M Aurora figure).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12490197/'},
      {text: 'Friedman JM. Cystic fibrosis: Correction of a fatal disease. PNAS 2025 (history of the screen, Aurora, Verkman–Beall–Tsien, the salty-kiss saying).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12452940/'},
      {text: 'US FDA. NDA 212273 Multi-disciplinary Review and Evaluation, Trikafta (2019): designations, dates, PDUFA goal, label reasoning, safety signals.', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/nda/2019/212273Orig1s000MultidisciplineR.pdf'},
      {text: 'US FDA. Trikafta, Kalydeco, Symdeko, Orkambi and Alyftrek prescribing information (versions current 2026), via openFDA / DailyMed: indications, boxed warning, responsive variant tables, trial results.', url: 'https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=trikafta'},
      {text: 'Vertex Pharmaceuticals annual reports on Form 10-K (fiscal years 2014, 2015, 2017, 2020, 2022, 2025): product revenues, CF Foundation agreement, patents, patient estimates, Alyftrek, VX-522.', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000875320&type=10-K'},
      {text: 'Royalty Pharma plc. Form S-1 (2020) and 10-K (2025): the 2014 CF Foundation royalty acquisition, terms, $5.8B upside share, 2025 receipts, deutivacaftor royalty dispute.', url: 'https://www.sec.gov/Archives/edgar/data/1802768/000119312520162827/d862976ds1a.htm'},
      {text: 'Chemistry World. Cystic Fibrosis Foundation sells drug royalty rights for $3.3bn (November 2014): $150M given to Vertex, Beall quote, budget comparison.', url: 'https://www.chemistryworld.com/news/cystic-fibrosis-foundation-sells-drug-royalty-rights-for-33bn/8044.article'},
      {text: 'Scientific American / Nature. Cystic Fibrosis Charity Sells Drug Rights to Pharma for $3.3 Billion (2014): planned uses of the proceeds.', url: 'https://www.scientificamerican.com/article/cystic-fibrosis-charity-sells-drug-rights-to-pharma-for-3-3-billion/'},
      {text: 'Orenstein DM, O\'Sullivan BP, Quinton PM. Cystic Fibrosis: Breakthrough Drugs at Break-the-Bank Prices. Glob Adv Health Med 2015 (1975 survival figure, $75M Aurora account, Kalydeco and Orkambi prices).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4653607/'},
      {text: 'Rubin JL, et al. Impact of CFTR Modulators on Longitudinal Cystic Fibrosis Survival and Mortality: Review and Secondary Analysis. Pulm Ther 2025 (US registry median survival 1990, 2012, 2023; Vertex-funded).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12373600/'},
      {text: 'Lopez A, Daly C, Vega-Hernandez G, MacGregor G, Rubin JL. Elexacaftor/tezacaftor/ivacaftor projected survival and long-term health outcomes in people with CF homozygous for F508del. J Cyst Fibros 2023.', url: 'https://pubmed.ncbi.nlm.nih.gov/36849331/'},
      {text: 'Duffy A, et al. A descriptive cohort study of pregnancy and parenthood in women with cystic fibrosis. Clin Med (Lond) 2025.', url: 'https://pubmed.ncbi.nlm.nih.gov/40516789/'},
      {text: 'Kerem E, et al. Ataluren for the treatment of nonsense-mutation cystic fibrosis: a randomized phase 3 trial. Lancet Respir Med 2014.', url: 'https://pubmed.ncbi.nlm.nih.gov/24836205/'},
      {text: 'ICER. Final Report and Policy Recommendations on Treatments for Cystic Fibrosis (press release, 23 September 2020).', url: 'https://icer.org/news-insights/press-releases/icer-issues-final-report-and-policy-recommendations-on-treatments-for-cystic-fibrosis/'},
      {text: 'Guo J, Wang J, Zhang J, Fortunak J, Hill A. Current prices versus minimum costs of production for CFTR modulators. J Cyst Fibros 2022.', url: 'https://pubmed.ncbi.nlm.nih.gov/35440408/'},
      {text: 'NICE. TA988: Ivacaftor–tezacaftor–elexacaftor, tezacaftor–ivacaftor and lumacaftor–ivacaftor for treating cystic fibrosis (July 2024; draft guidance November 2023; replaces TA398, July 2016).', url: 'https://www.nice.org.uk/guidance/ta988'},
      {text: 'de Oliveira VSB, et al. Case of CFTR Modulator Access in Brazil. Healthcare (Basel) 2025 (approval dates by country, SUS timeline, Argentina generic).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12385758/'},
      {text: 'Karadag B. Disparities in Access to Cystic Fibrosis Therapy Across Countries. Pediatr Pulmonol 2026 (US list price about $322,000, F508del frequency by region, clinician statement).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12968938/'},
      {text: 'Cystic Fibrosis News Today. FDA approves Trikafta (October 2019): five months early, list price about $311,000.', url: 'https://cysticfibrosisnewstoday.com/news/fda-approves-trikafta-1st-vertex-triple-combo-with-potential-to-treat-90-of-cf-patients/'},
      {text: 'BioSpace. Vertex wins approval for triple combination drug expected to treat 90% of CF patients (October 2019): PDUFA date, ~6,000 newly treatable US patients.', url: 'https://www.biospace.com/fda-green-lights-vertex-drug-predicted-to-treat-90-percent-of-cf-patients'},
    ]},
  ],
});
