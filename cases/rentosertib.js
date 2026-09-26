// Rentosertib (ISM001-055), Insilico Medicine: the TNIK inhibitor for idiopathic pulmonary fibrosis that became the test case for "can AI make drug discovery faster, cheaper, or better?"
// Frontier case. Status claims are dated; research current to September 2026.
registerCase({
  id: 'rentosertib', kind: 'frontier',
  brand: 'Rentosertib', generic: 'rentosertib (ISM001-055, formerly INS018_055)', company: 'Insilico Medicine',
  tagline: 'A company says generative AI picked both the target and the molecule for a lung-scarring disease, in a fraction of the usual time. A 71-patient trial gave an encouraging signal. Whether AI can make drugs faster, cheaper or better now rests on a slower, older machine: the [[phase 3]] trial.',
  chips: [['Disease', '[[idiopathic pulmonary fibrosis]]'], ['Modality', '[[small molecule]] (oral pill)'], ['Target', '[[TNIK]]'], ['Status', 'Phase 3 began September 2026 (China)']],
  readingTime: 35,
  stats: [
    {v: '+98 vs −20 mL', l: 'Average 12-week change in lung capacity ([[FVC]]): highest dose of rentosertib vs [[placebo]], in 18 vs 17 patients', n: 'GENESIS-IPF, Nature Medicine, June 2025'},
    {v: '~18 months', l: 'Target discovery to [[preclinical candidate]], by Insilico\'s account, with 78 molecules made and tested', n: 'Company claim (Nature Biotechnology 2024; IPO release 2025)'},
    {v: '7.9%', l: 'Share of drug programs entering [[phase 1]] that reached FDA approval, 2011–2020', n: 'BIO, Informa and QLS, 2021'},
    {v: '10.5 yrs', l: 'Average time from the start of phase 1 to approval: the part of the journey AI has barely touched', n: 'BIO, Informa and QLS, 2021'},
    {v: '320', l: 'Patients planned for GENESIS-IPF-3, the phase 3 trial that dosed its first patient on 9 September 2026', n: 'ClinicalTrials.gov NCT07687459'},
  ],
  emblem: `<svg viewBox="0 0 300 300" role="img" aria-label="A pair of lungs, one lobe overlaid with a network of connected nodes, and a blue pill">
    <circle cx="150" cy="150" r="132" class="il-3s"/>
    <path d="M150 52 V120 M150 120 C140 132 126 140 112 146 M150 120 C160 132 174 140 188 146" class="il-none il-line2" stroke-width="7" stroke-linecap="round"/>
    <path d="M136 132 C104 118 70 140 62 186 C56 222 70 250 100 252 C126 254 138 236 140 206 Z" class="il-2s st-2" stroke-width="3"/>
    <path d="M164 132 C196 118 230 140 238 186 C244 222 230 250 200 252 C174 254 162 236 160 206 Z" class="il-2s st-2" stroke-width="3"/>
    <path d="M86 176 L112 160 L124 196 L96 214 Z M112 160 L130 150 M124 196 L100 236 M96 214 L100 236" class="il-none il-line" stroke-width="2"/>
    <circle cx="86" cy="176" r="7" class="il-6"/><circle cx="112" cy="160" r="7" class="il-6"/><circle cx="124" cy="196" r="8" class="il-2"/><circle cx="96" cy="214" r="7" class="il-6"/><circle cx="100" cy="236" r="7" class="il-6"/><circle cx="130" cy="150" r="6" class="il-6"/>
    <path d="M190 172 q8 -8 16 0 t16 0 M186 196 q8 -8 16 0 t16 0 M192 220 q8 -8 16 0 t16 0" class="il-none st-7" stroke-width="3" stroke-linecap="round"/>
    <g transform="rotate(-30 214 92)"><rect x="184" y="78" width="60" height="28" rx="14" class="il-1"/><path d="M214 78 V106" class="il-line" style="stroke: var(--il-paper)"/></g>
  </svg>`,
  facts: {start: 2019, firstHuman: 2021, approval: null, end: null, peakSalesB: null, pivotalN: null,
          area: 'immunology', modality: 'small molecule', target: 'TNIK'},
  themes: ['platform', 'speed', 'dealmaking'],
  glossary: {
    'idiopathic pulmonary fibrosis': 'A disease in which the lungs slowly fill with scar tissue for no known reason ("idiopathic" means of unknown cause). Breathing gets harder year by year. Median survival after diagnosis is roughly 2 to 4 years.',
    'IPF': 'Short for idiopathic pulmonary fibrosis, the progressive lung-scarring disease rentosertib is being tested in.',
    'fibrosis': 'Scarring: the replacement of normal, flexible tissue with stiff connective tissue made mostly of collagen. It can happen in the lungs, liver, kidneys, heart and skin.',
    'fibroblast': 'A cell in connective tissue that makes the scaffolding between cells. It is the main repair worker after an injury, and the main culprit when repair never stops.',
    'myofibroblast': 'An activated fibroblast that contracts and pumps out large amounts of collagen. Useful for closing a wound; harmful when it persists.',
    'extracellular matrix': 'The scaffolding of proteins, such as collagen and fibronectin, that sits between cells. In fibrosis there is far too much of it.',
    'collagen': 'The most abundant protein in the body, a tough fiber that gives skin, tendon and scar their strength.',
    'alveoli': 'The tiny air sacs at the ends of the airways, where oxygen crosses a very thin wall into the blood.',
    'FVC': 'Forced vital capacity: the total volume of air a person can blow out after the deepest possible breath, measured with a spirometer. Falling FVC is the standard measure of IPF getting worse.',
    'forced vital capacity': 'The total volume of air a person can blow out after the deepest possible breath. The standard lung-function measure in IPF trials.',
    'spirometry': 'The breathing test in which a patient blows as hard and as long as possible into a tube that measures air volume and flow.',
    'acute exacerbation': 'A sudden, severe worsening of IPF over days or weeks, often needing hospital care. In the GENESIS-IPF paper, median survival after one was cited as about 2 months.',
    'TNIK': 'TRAF2- and NCK-interacting kinase: a signaling enzyme inside cells. It is needed to switch on genes controlled by the Wnt pathway and has been linked to other fibrosis-related signals. Rentosertib blocks it.',
    'TGF-β': 'Transforming growth factor beta: a signaling protein that tells fibroblasts to become myofibroblasts and make collagen. The best-known master signal of fibrosis.',
    'Wnt': 'A family of signaling proteins that controls growth and tissue repair. Its signal reaches the nucleus through a protein called β-catenin. Wnt signaling is abnormally active in IPF lungs.',
    'pirfenidone': 'Esbriet: one of the two drugs approved for IPF in 2014. It slows the decline in lung function; its exact mechanism is not fully understood, but it dampens TGF-β-driven scarring.',
    'nintedanib': 'Ofev: an oral drug approved for IPF in 2014 that blocks several growth-factor receptors. It roughly halves the yearly fall in FVC. Diarrhea is common.',
    'nerandomilast': 'Jascayd (Boehringer Ingelheim), a PDE4B inhibitor approved by the FDA for IPF in October 2025, the first new IPF drug in over a decade.',
    'generative AI': 'Machine-learning systems that create new things (text, images, or here molecules) rather than only classifying existing ones.',
    'generative chemistry': 'Using generative AI to propose new molecular structures that are predicted to bind a target and have good drug-like properties.',
    'PandaOmics': 'Insilico\'s commercial target-discovery software. It ranks genes as candidate drug targets by combining patient data (gene activity in diseased vs healthy tissue), biological networks and text mined from papers, patents and grants.',
    'Chemistry42': 'Insilico\'s commercial generative-chemistry software. It generates candidate molecules for a chosen protein pocket and scores them for predicted binding, novelty and drug-likeness.',
    'preclinical candidate': 'The single molecule a company nominates to take through the animal safety studies required before testing in people. In the industry, reaching it marks the end of "discovery".',
    'hit': 'Any molecule that shows some activity against the target in a first test. Most hits are weak, dirty or unstable, and are only starting points.',
    'lead optimization': 'The long stretch of discovery where chemists make and test variations of a promising molecule to improve many properties at once: potency, selectivity, absorption, metabolism and safety.',
    'design-make-test-learn': 'The iterative loop at the heart of medicinal chemistry: design molecules, synthesize them, test them in assays, learn from the results, repeat. AI mainly accelerates the design and learn steps.',
    'ADME': 'Absorption, distribution, metabolism and excretion: how a drug gets into the body, where it goes, how it is broken down and how it leaves. Poor ADME kills many otherwise potent molecules.',
    'Eroom\'s law': 'The observation (Scannell and colleagues, 2012) that the number of new drugs approved per billion dollars of R&D spending has halved roughly every 9 years since 1950. "Moore" spelled backwards.',
    'phase 0': 'A tiny first-in-human study using a microdose far too small to have an effect, to check how the body handles the drug before a full phase 1.',
    'microdose': 'A dose of a drug roughly 100 times smaller than one expected to have any effect, used to study how the body handles it with minimal risk.',
    'phase 2a': 'An early, usually small, phase 2 study that asks whether a drug seems to do anything in patients and at what dose. It is a scouting trip, not proof.',
    'dose-ranging': 'Testing several doses side by side to see how effect and side effects change with dose.',
    'subgroup analysis': 'Looking at results within slices of a trial (for example, patients not on other drugs). With few patients per slice, apparent differences are often chance.',
    'multiplicity': 'The statistical problem that the more comparisons you make (doses, endpoints, subgroups), the more likely one looks impressive by luck.',
    'baseline imbalance': 'When randomized groups happen to differ at the start (for example, one arm has worse lungs). Common in small trials, and it can distort the comparison.',
    'secondary endpoint': 'An outcome a trial measures in addition to its main (primary) question. A positive secondary endpoint in a trial not designed around it is suggestive, not conclusive.',
    'treatment-emergent adverse event': 'Any medical problem that appears or worsens after a patient starts the trial treatment, whether or not the drug caused it.',
    'AlphaFold': 'Google DeepMind\'s AI system that predicts a protein\'s 3D shape from its amino-acid sequence. AlphaFold 2 (2020–2021) earned a share of the 2024 Nobel Prize in Chemistry; AlphaFold 3 (2024) also models how proteins interact with other molecules.',
    'free energy perturbation': 'A physics-based computer method that estimates how tightly a molecule binds its target by simulating the gradual transformation of one molecule into another. Schrödinger\'s version is called FEP+.',
    'phenotypic screening': 'Testing molecules or genetic changes by their effect on how cells look or behave, without first choosing a target. Recursion does this at industrial scale with automated microscopy.',
    'drug repurposing': 'Finding a new use for an existing drug. It skips much of discovery and early safety testing because the drug has already been given to people.',
    'baricitinib': 'Olumiant (Eli Lilly): a JAK inhibitor approved for rheumatoid arthritis, which BenevolentAI flagged in early 2020 as a possible COVID-19 treatment.',
    'USAN': 'United States Adopted Name: the official nonproprietary (generic) name of a drug in the United States, assigned by a council that includes the American Medical Association.',
    'ATP pocket': 'The groove in a kinase where its fuel molecule, ATP, binds. Most kinase-inhibitor drugs, including rentosertib, sit in this pocket and block it.',
    'omics': 'Large-scale measurements of a whole class of molecules at once: genomics (DNA), transcriptomics (gene activity), proteomics (proteins).',
    'proteomics': 'Measuring thousands of proteins at once, for example in a blood sample.',
    'bleomycin model': 'The standard animal model of lung fibrosis: mice or rats are given the cancer drug bleomycin, which scars their lungs. Drugs that work in it often fail in human IPF.',
    'intention-to-treat': 'Analyzing every randomized patient in the group they were assigned to, even if they stopped treatment. It protects against the bias of dropping people who did badly.',
    'expected cost': 'The average spending per approved drug once the cost of all the projects that failed along the way is included.',
    'cost of capital': 'The return investors could have earned elsewhere. Money tied up for 15 years in R&D has to earn back that forgone return, which inflates the true cost of slow programs.',
    'Amdahl\'s law': 'A rule from computing: speeding up one part of a process only helps in proportion to how much of the total time that part takes.',
    'orphan drug designation': 'FDA status for drugs for diseases affecting fewer than 200,000 people in the US. It brings tax credits, fee waivers and seven years of market exclusivity if approved. It says nothing about whether the drug works.',
    'kinase selectivity': 'How specifically a kinase inhibitor hits its intended kinase and not the hundreds of similar ones in the body. Poor selectivity causes side effects.',
  },
  sections: [
    // ============================================================ COLD OPEN
    {type: 'story', kicker: 'Cold open', title: 'Twelve weeks, seventy-one patients', tocTitle: 'Cold open', html: `
<p>Picture the typical patient in the trial. He is in his mid-sixties, a former smoker, living in China. A few years ago he started getting breathless climbing stairs and developed a dry cough that would not go away. A CT scan showed a lacy white pattern at the bottom of both lungs: scar tissue, spreading. The diagnosis was [[idiopathic pulmonary fibrosis]], a disease with no known cause, no cure, and a median survival after diagnosis of roughly two to four years. His doctors may have given him one of the two drugs that slow it down. Neither makes it go away.</p>
<p>Between July 2023 and June 2024, he was one of 71 people with this disease at 21 hospitals across China who agreed to take a pill or a dummy pill for twelve weeks. The real pill came in three doses. Eighteen people got the highest, 60 mg once a day; seventeen got [[placebo]]. At the end, each blew as hard as they could into a tube that measures lung volume. On average, the high-dose group could blow out 98 milliliters more air than when they started, about a third of a can of soda. The placebo group had lost 20 milliliters.</p>
<p>In a disease where lungs only get worse, a number that goes <i>up</i> gets attention. But the trial made headlines for a different reason. When <i>Nature Medicine</i> published it on 3 June 2025, the paper's title described the drug as a "generative AI-discovered" inhibitor. Its developer, Insilico Medicine, says that artificial intelligence did two jobs at once: it picked the target, a signaling protein called [[TNIK]] that no one had tried to drug for fibrosis, and it designed the molecule, now named rentosertib, to block it. Insilico says it went from starting target discovery to a candidate drug in about 18 months, a stretch that typically takes four or five years.</p>
<p>That combination made rentosertib the most closely watched test of one of the biggest bets in biotech. By 2026, investors had put billions of dollars behind the idea that AI can make drug discovery faster, cheaper or better. Isomorphic Labs, spun out of Google DeepMind, announced a $2.1 billion funding round in May 2026. Insilico itself listed on the Hong Kong Stock Exchange in December 2025. Pharma companies have signed partnership deals whose headline values run into billions.</p>
<p>This is a frontier case, so the ending is not written. On 9 September 2026, the first patient was dosed in GENESIS-IPF-3, a 320-patient, year-long [[phase 3]] trial in China. The registry lists its primary completion as late 2029. Until then, the honest answer to "does the AI drug work?" is: it produced an encouraging signal in a small, short study, and that is all.</p>
<p>That makes it a good case to learn from, because it forces the right questions. Where do the time and money in drug development actually go? What would a faster discovery process really change? What can a 12-week trial of 71 people tell you, and what can't it? And when a company says a drug was "discovered by AI", what exactly was discovered, by whom, and how would you check? We will start with the part of the story most people skip: why making drugs is slow in the first place.</p>`},

    // ============================================================ WHY SLOW
    {type: 'story', kicker: 'The real problem', title: 'Why drugs take so long: follow the failures', tocTitle: 'Why drugs are slow', html: `
<p>A new small-molecule drug starts as a question: which protein in the body, if you blocked or boosted it, would change the course of a disease? That protein is the [[target]]. Everything after that is a long sequence of filters.</p>
<p><b>Discovery</b> comes first. Chemists look for a [[hit]], any molecule that touches the target in a test tube, usually by screening libraries of hundreds of thousands of compounds or by designing from the target's 3D structure. Hits are weak and messy. The next few years go into [[lead optimization]]: making and testing variations to improve dozens of properties at once. The molecule must bind the target tightly and ignore similar proteins, survive the stomach, get absorbed, reach the right tissue, avoid being destroyed by the liver too quickly, and not poison anything on the way. Improving one property often worsens another. When a molecule is good enough on all of them, the company nominates it as its [[preclinical candidate]]. Companies commonly benchmark this stage at about four and a half years.</p>
<p><b>Preclinical development</b> follows: animal safety studies, manufacturing the drug to pharmaceutical standards, and an [[IND]] application to the regulator. In a 2024 cost model by Aylin Sertkaya and colleagues, this nonclinical stage averaged about 31 months and about two-thirds of candidates got through it.</p>
<p>Then come people. A 2021 analysis by BIO, Informa and QLS of more than 12,000 development programs from 2011 to 2020 gives the standard numbers. [[Phase 1]], mostly in healthy volunteers, checks safety and dosing: 52% of programs moved on, after an average of 2.3 years. [[Phase 2]] is the first real test of whether the drug helps patients: only 28.9% passed, after 3.6 years. [[Phase 3]], large confirmatory trials, took 3.3 years and 57.8% succeeded. Regulatory review took 1.3 years and 90.6% were approved. Multiply the odds and only 7.9% of drugs entering phase 1 reached approval. On average, the journey from phase 1 to approval took 10.5 years.</p>
<h3>Why they fail</h3>
<p>This is the single most important fact for anyone coming from software: <b>most drugs do not fail because the chemistry was slow.</b> They fail because the biology was wrong or the drug was unsafe. A widely cited 2022 review by Duxin Sun and colleagues summarized clinical failures from 2010 to 2017: 40–50% for lack of efficacy, about 30% for unmanageable toxicity, 10–15% for poor drug-like properties, and about 10% for commercial or strategic reasons. The chemistry category used to be much larger; the same review notes that poor drug-like properties caused 30–40% of failures in the 1990s. Better prediction of [[ADME]] properties, much of it computational, already shrank it. What remains is mostly the hard part: we do not understand human disease well enough to know, before trying, whether hitting a target will help.</p>
<p>And that hard part is discovered late. The core hypothesis of a drug program (that this target drives this disease) is typically tested for the first time in phase 2, around eight years after the project began. Imagine building a product for eight years before learning whether anyone wants it, and then learning that seven times out of ten they don't.</p>
<h3>Where the money goes</h3>
<p>Estimates of the cost of a new drug vary with method. Joseph DiMasi and colleagues at Tufts estimated $2.56 billion per approved drug (2013 dollars, including failures and the [[cost of capital]]), from confidential company data. Olivier Wouters and colleagues, using public filings, estimated a median of $985 million (2018 dollars). Sertkaya's model gives $879 million. The spread matters less than the structure: in Sertkaya's model, the cash spent on one successful drug is about $173 million. Add the cost of the failures you have to pay for along the way and it triples to $516 million; add the cost of capital and it reaches $879 million. <b>Most of the price of a drug is the price of the drugs that didn't work, and of waiting.</b></p>
<h3>Eroom's law</h3>
<p>In 2012 Jack Scannell and colleagues pointed out something uncomfortable. Since 1950, the number of new drugs approved per billion dollars of inflation-adjusted R&D spending had halved roughly every nine years, an 80-fold fall. They called it [[Eroom's law]], Moore's law backwards. This happened while almost every input got dramatically better: combinatorial chemistry, high-throughput screening, genome sequencing, computer-aided design. Among their explanations: new drugs must beat an ever-growing shelf of cheap, effective generics (the "better than the Beatles" problem), regulators grow more cautious, and the industry drifted toward brute-force screening against targets whose link to human disease was weak. Every earlier wave of technology made some step of discovery faster. None reversed the trend. That is the bar AI has to clear.</p>`},

    {type: 'figure', title: 'The drug pipeline: where time, money and failure sit', intro: 'Hover or tap each stage. The blue stages are where most AI claims live. The funnel shows what happens to 100 drugs that enter phase 1.',
      svg: `<svg viewBox="0 0 900 430" role="img" aria-label="Drug development pipeline from target to approval with durations and a survival funnel">
        <text x="232" y="26" text-anchor="middle" class="il-title">Discovery</text>
        <path d="M24 36 H440" class="il-none st-1" stroke-width="3"/>
        <text x="668" y="26" text-anchor="middle" class="il-title">Clinical development</text>
        <path d="M460 36 H880" class="il-none st-2" stroke-width="3"/>
        <g data-part="target"><rect x="24" y="50" width="98" height="104" rx="12" class="il-1s st-1" stroke-width="2"/><text x="73" y="80" text-anchor="middle" class="il-text">Target</text><text x="73" y="100" text-anchor="middle" class="il-small">which protein?</text><text x="73" y="138" text-anchor="middle" class="il-small">part of ~4.5 yrs</text></g>
        <g data-part="hit"><rect x="130" y="50" width="98" height="104" rx="12" class="il-1s st-1" stroke-width="2"/><text x="179" y="80" text-anchor="middle" class="il-text">Hit</text><text x="179" y="100" text-anchor="middle" class="il-small">first molecule</text><text x="179" y="116" text-anchor="middle" class="il-small">that binds</text><text x="179" y="138" text-anchor="middle" class="il-small">part of ~4.5 yrs</text></g>
        <g data-part="leadopt"><rect x="236" y="50" width="98" height="104" rx="12" class="il-1s st-1" stroke-width="2"/><text x="285" y="76" text-anchor="middle" class="il-text">Lead</text><text x="285" y="94" text-anchor="middle" class="il-text">optimization</text><text x="285" y="114" text-anchor="middle" class="il-small">tune everything</text><text x="285" y="138" text-anchor="middle" class="il-small">part of ~4.5 yrs</text></g>
        <g data-part="preclin"><rect x="342" y="50" width="98" height="104" rx="12" class="il-6s st-6" stroke-width="2"/><text x="391" y="76" text-anchor="middle" class="il-text">Preclinical</text><text x="391" y="96" text-anchor="middle" class="il-small">animal safety,</text><text x="391" y="112" text-anchor="middle" class="il-small">manufacturing</text><text x="391" y="138" text-anchor="middle" class="il-small">~2.6 yrs · 68%</text></g>
        <g data-part="p1"><rect x="460" y="50" width="98" height="104" rx="12" class="il-2s st-2" stroke-width="2"/><text x="509" y="80" text-anchor="middle" class="il-text">Phase 1</text><text x="509" y="100" text-anchor="middle" class="il-small">safety, dose</text><text x="509" y="138" text-anchor="middle" class="il-small">2.3 yrs · 52%</text></g>
        <g data-part="p2"><rect x="566" y="50" width="98" height="104" rx="12" class="il-2s st-2" stroke-width="2"/><text x="615" y="80" text-anchor="middle" class="il-text">Phase 2</text><text x="615" y="100" text-anchor="middle" class="il-small">does it work?</text><text x="615" y="138" text-anchor="middle" class="il-small">3.6 yrs · 29%</text></g>
        <g data-part="p3"><rect x="672" y="50" width="98" height="104" rx="12" class="il-2s st-2" stroke-width="2"/><text x="721" y="80" text-anchor="middle" class="il-text">Phase 3</text><text x="721" y="100" text-anchor="middle" class="il-small">confirm, at scale</text><text x="721" y="138" text-anchor="middle" class="il-small">3.3 yrs · 58%</text></g>
        <g data-part="review"><rect x="778" y="50" width="98" height="104" rx="12" class="il-8s il-line" stroke-width="2"/><text x="827" y="80" text-anchor="middle" class="il-text">Review</text><text x="827" y="100" text-anchor="middle" class="il-small">FDA decision</text><text x="827" y="138" text-anchor="middle" class="il-small">1.3 yrs · 91%</text></g>
        <g data-part="funnel">
          <text x="200" y="210" class="il-text">Of 100 drugs that enter phase 1...</text>
          <text x="200" y="232" class="il-small">(BIO, Informa and QLS; 2011–2020 programs)</text>
          <rect x="484" y="200" width="50" height="180" rx="6" class="il-2"/><text x="509" y="396" text-anchor="middle" class="il-num">100</text><text x="509" y="416" text-anchor="middle" class="il-small">start phase 1</text>
          <rect x="590" y="286.4" width="50" height="93.6" rx="6" class="il-2"/><text x="615" y="396" text-anchor="middle" class="il-num">52</text><text x="615" y="416" text-anchor="middle" class="il-small">start phase 2</text>
          <rect x="696" y="353" width="50" height="27" rx="6" class="il-2"/><text x="721" y="396" text-anchor="middle" class="il-num">15</text><text x="721" y="416" text-anchor="middle" class="il-small">start phase 3</text>
          <rect x="802" y="365.8" width="50" height="14.2" rx="4" class="il-3"/><text x="827" y="396" text-anchor="middle" class="il-num">8</text><text x="827" y="416" text-anchor="middle" class="il-small">approved</text>
        </g>
        <g data-part="ai"><circle cx="40" cy="300" r="9" class="il-1"/><text x="56" y="305" class="il-text-2">Where AI companies mostly claim gains</text>
          <circle cx="40" cy="330" r="9" class="il-2"/><text x="56" y="335" class="il-text-2">Where most time and failure sit</text>
          <text x="24" y="372" class="il-small">Durations are averages; real programs overlap stages.</text></g>
      </svg>`,
      hotspots: {
        target: {title: 'Target selection', text: 'Choosing which protein to hit. It takes little money but it is the biggest bet in the program: if the target does not drive the human disease, nothing downstream can rescue it. Most of this bet is only tested years later, in phase 2. Insilico\'s PandaOmics works here.'},
        hit: {title: 'Hit finding', text: 'Finding any molecule that touches the target, by screening physical libraries or searching huge virtual ones. Computation has helped here for decades (virtual screening, structure-based design); AI adds generative design and faster searching.'},
        leadopt: {title: 'Lead optimization', text: 'The longest discovery stage: rounds of [[design-make-test-learn|design, make, test, learn]] to balance potency, selectivity, [[ADME]] and safety. AI mainly promises fewer rounds and fewer molecules. Insilico says it needed 78 molecules for rentosertib; traditional programs often make thousands.'},
        preclin: {title: 'Preclinical development', text: 'Animal toxicology, safety pharmacology and manufacturing scale-up before the first human dose. About 31 months on average and about 68% pass (Sertkaya and colleagues, 2024). Regulators require it; AI can help predict toxicity but cannot replace the studies.'},
        p1: {title: 'Phase 1', text: 'Tens of mostly healthy volunteers, to find a safe dose and see how the body handles the drug. 52% move on, after 2.3 years on average. A 2024 analysis found AI-discovered molecules passed phase 1 more often (21 of 24), a genuine but early sign that AI can design well-behaved molecules.'},
        p2: {title: 'Phase 2: the valley of death', text: 'The first real test of the biology: does hitting this target help patients? Only 28.9% succeed; for respiratory drugs, 21.9%. This is where wrong targets are exposed. It is also where AI has the least evidence so far: about 4 of 10 AI-discovered molecules passed, similar to the industry average.'},
        p3: {title: 'Phase 3', text: 'Hundreds to thousands of patients, often for a year or more, to confirm benefit and characterize safety. The most expensive stage: about $89 million in cash per program in Sertkaya\'s model, before counting failures. 57.8% succeed. Trial duration is set by the disease and the endpoint, not by computing speed.'},
        review: {title: 'Regulatory review', text: 'The FDA or another agency weighs the evidence. 90.6% of submissions were eventually approved in the 2011–2020 data. About 1.3 years on average.'},
        funnel: {title: 'The funnel', text: 'Of 100 drugs entering phase 1, 52 reach phase 2, 15 reach phase 3, and about 8 are approved (7.9%). Every approved drug pays for the other 92, plus the discovery projects that never reached people at all.'},
        ai: {title: 'The mismatch', text: 'Most AI claims concern the blue stages: finding targets, designing molecules, fewer design cycles. Most time, cost and failure sit in the orange stages. That does not make AI useless, because a better target chosen at the start changes the odds at the end. But it is the first thing to check in any claim.'},
      },
      caption: 'Clinical durations and success rates: BIO, Informa and QLS (2021). Preclinical: Sertkaya et al. (2024). The ~4.5-year discovery figure is the industry benchmark AI companies, including Insilico, compare themselves with.'},

    {type: 'custom', title: 'Where does the time go? A pipeline you can speed up', tocTitle: 'Speed-up explorer', intro: 'This is a teaching model, not an estimate for any real drug. Clinical stage durations and success rates come from BIO, Informa and QLS (2021); preclinical and clinical cash costs per program from Sertkaya et al. (2024, 2018 dollars). Discovery (4.5 years, $10 million per attempt, 50% chance of producing a candidate) is an illustrative assumption, because published estimates vary widely. Try the presets, then move the sliders yourself.',
      html: `<div class="explorer">
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px">
          <button class="btn" data-preset="base">Industry baseline</button>
          <button class="btn" data-preset="fast">AI: discovery 3× faster</button>
          <button class="btn" data-preset="cheap">AI: discovery 3× faster and 65% cheaper</button>
          <button class="btn" data-preset="target">Better targets: phase 2 success 29% → 40%</button>
          <button class="btn" data-preset="both">Both</button></div>
        <label><span>Discovery speed-up</span><input type="range" min="1" max="5" step="0.5" value="1" data-k="ds"><span class="out" data-o="ds"></span></label>
        <label><span>Discovery cost cut</span><input type="range" min="0" max="90" step="5" value="0" data-k="dc"><span class="out" data-o="dc"></span></label>
        <label><span>Clinical trial speed-up</span><input type="range" min="1" max="1.5" step="0.05" value="1" data-k="cs"><span class="out" data-o="cs"></span></label>
        <label><span>Phase 1 success</span><input type="range" min="30" max="95" step="0.5" value="52" data-k="p1"><span class="out" data-o="p1"></span></label>
        <label><span>Phase 2 success</span><input type="range" min="15" max="70" step="0.1" value="28.9" data-k="p2"><span class="out" data-o="p2"></span></label>
        <label><span>Phase 3 success</span><input type="range" min="30" max="90" step="0.1" value="57.8" data-k="p3"><span class="out" data-o="p3"></span></label>
        <div data-cards style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-top:14px"></div>
        <div data-svg style="margin-top:12px"></div>
        <div class="result" data-res></div></div>`,
      init: (root) => {
        const q = s => root.querySelector(s);
        const inputs = [...root.querySelectorAll('input[data-k]')];
        const BASE = {ds: 1, dc: 0, cs: 1, p1: 52, p2: 28.9, p3: 57.8};
        const presets = {base: BASE, fast: {...BASE, ds: 3}, cheap: {...BASE, ds: 3, dc: 65}, target: {...BASE, p2: 40}, both: {...BASE, ds: 3, dc: 65, p2: 40}};
        const R = 0.105;
        const model = v => {
          const st = [
            {n: 'Discovery', y: 4.5 / v.ds, c: 10 * (1 - v.dc / 100), p: 0.5, cls: 'il-1'},
            {n: 'Preclinical', y: 2.6, c: 11.8, p: 0.68, cls: 'il-6'},
            {n: 'Phase 1', y: 2.3 / v.cs, c: 7.1, p: v.p1 / 100, cls: 'il-3'},
            {n: 'Phase 2', y: 3.6 / v.cs, c: 21.0, p: v.p2 / 100, cls: 'il-2'},
            {n: 'Phase 3', y: 3.3 / v.cs, c: 89.3, p: v.p3 / 100, cls: 'il-7'},
            {n: 'Review', y: 1.3, c: 2.6, p: 0.906, cls: 'il-8'}];
          let reach = 1; const T = st.reduce((a, s) => a + s.y, 0); let after = T;
          st.forEach(s => { s.reach = reach; after -= s.y; s.t = after + s.y / 2; s.cash = s.c * reach; s.capd = s.c * reach * Math.pow(1 + R, s.t); reach *= s.p; });
          const P = reach;
          st.forEach(s => { s.cashPer = s.cash / P; s.capPer = s.capd / P; });
          return {st, T, P, cash: st.reduce((a, s) => a + s.cashPer, 0), cap: st.reduce((a, s) => a + s.capPer, 0), starts: 1 / P};
        };
        const money = m => m >= 1000 ? '$' + (m / 1000).toFixed(2) + 'B' : '$' + Math.round(m) + 'M';
        const pct = (a, b) => { const d = (a - b) / b * 100; return Math.abs(d) < 0.5 ? 'same as baseline' : (d > 0 ? '+' : '−') + Math.abs(d).toFixed(0) + '% vs baseline'; };
        root.querySelectorAll('[data-preset]').forEach(b => b.onclick = () => { const p = presets[b.dataset.preset]; inputs.forEach(i => i.value = p[i.dataset.k]); run(); });
        const bar = (st, key, y, scale, label) => {
          let x = 150, s = '<text x="140" y="' + (y + 19) + '" text-anchor="end" class="il-text-2">' + label + '</text>';
          st.forEach(o => { const w = Math.max(0, o[key] * scale); s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="28" class="' + o.cls + '"><title>' + o.n + '</title></rect>';
            if (w > 58) s += '<text x="' + (x + w / 2) + '" y="' + (y + 19) + '" text-anchor="middle" class="il-white">' + o.n.replace('Phase ', 'P') + '</text>'; x += w; });
          return s;
        };
        const run = () => {
          const v = {}; inputs.forEach(i => v[i.dataset.k] = +i.value);
          q('[data-o="ds"]').textContent = v.ds.toFixed(1) + '×'; q('[data-o="dc"]').textContent = v.dc + '%'; q('[data-o="cs"]').textContent = v.cs.toFixed(2) + '×';
          q('[data-o="p1"]').textContent = v.p1.toFixed(1) + '%'; q('[data-o="p2"]').textContent = v.p2.toFixed(1) + '%'; q('[data-o="p3"]').textContent = v.p3.toFixed(1) + '%';
          const b = model(BASE), m = model(v);
          const card = (t, val, sub) => '<div class="card" style="padding:12px 14px"><div style="font-size:13px;opacity:.75">' + t + '</div><div style="font:700 24px/1.2 var(--sans)">' + val + '</div><div style="font-size:13px;opacity:.75">' + sub + '</div></div>';
          q('[data-cards]').innerHTML =
            card('Time for a successful drug', m.T.toFixed(1) + ' years', pct(m.T, b.T)) +
            card('Chance a discovery project reaches approval', (m.P * 100).toFixed(1) + '%', '1 in ' + Math.round(m.starts) + ' projects') +
            card('Cash cost per approved drug', money(m.cash), pct(m.cash, b.cash)) +
            card('With 10.5%/yr cost of capital', money(m.cap), pct(m.cap, b.cap));
          const W = 860, tScale = (W - 170) / 18, cScale = (W - 170) / Math.max(b.cap, m.cap, 1);
          let s = '<svg viewBox="0 0 ' + W + ' 250" role="img" aria-label="Stacked bars of time and capitalized cost by stage">';
          s += '<text x="150" y="16" class="il-text">Years, stage by stage (successful drug)</text>';
          s += bar(b.st, 'y', 26, tScale, 'Baseline') + bar(m.st, 'y', 60, tScale, 'Your scenario');
          s += '<text x="150" y="126" class="il-text">Capitalized cost per approved drug, by the stage where it was spent</text>';
          s += bar(b.st, 'capPer', 136, cScale, 'Baseline') + bar(m.st, 'capPer', 170, cScale, 'Your scenario');
          const shareD = m.st[0].capPer / m.cap * 100, shareC = (m.st[2].capPer + m.st[3].capPer + m.st[4].capPer) / m.cap * 100;
          s += '<text x="150" y="222" class="il-small">In your scenario, discovery accounts for ' + shareD.toFixed(0) + '% of capitalized cost and clinical trials for ' + shareC.toFixed(0) + '%. Clinical stages take ' + ((m.st[2].y + m.st[3].y + m.st[4].y) / m.T * 100).toFixed(0) + '% of the time.</text>';
          s += '<text x="150" y="242" class="il-small">Each approved drug pays for about ' + Math.round(m.starts) + ' discovery projects and ' + Math.round(1 / (m.P / m.st[2].reach)) + ' phase 1 starts.</text></svg>';
          q('[data-svg]').innerHTML = s;
          let msg;
          const dT = b.T - m.T;
          if (v.ds > 1 && v.p2 <= 29 && v.p1 <= 52.5 && v.p3 <= 58) msg = 'Faster discovery saves <b>' + dT.toFixed(1) + ' years</b> on a successful drug, real value in patent life and for patients. But the odds of success have not moved: still about 1 approval per ' + Math.round(m.starts) + ' projects. The clinical years are untouched, and they are most of the timeline.';
          else if (v.p2 > 29 && v.ds === 1 && v.dc === 0) msg = 'Better targets change everything downstream: fewer failed phase 2s means fewer projects needed per approval, which cuts the cost of <i>every</i> stage, including discovery. But the timeline of a successful drug does not shrink at all.';
          else if (v.p2 > 29 && v.ds > 1) msg = 'This is the full promise: faster, cheaper discovery <i>and</i> better targets. Notice that the two levers work on different things. Speed shortens the calendar; better biology raises the odds. The second is the one with the least evidence so far.';
          else msg = 'At baseline, clinical trials take about half the calendar and decide most of the failures. Now look at the cost bars: early stages look expensive because each approved drug carries dozens of failed early projects, and early money waits about 15 years for any return. That is attrition showing up as cost. Try the presets: speeding up discovery mostly helps the calendar and the cost of early work; raising phase 2 success helps the odds and the cost of everything.';
          q('[data-res]').innerHTML = msg;
        };
        inputs.forEach(i => i.oninput = run); run();
      }},

    {type: 'callout', variant: 'product', heading: 'Amdahl\'s law, with a catch', html: `
<p>Engineers know [[Amdahl's law]]: if a step takes a quarter of your pipeline's runtime, making it infinitely fast saves at most a quarter. Discovery is roughly a quarter to a third of a drug's calendar. Making it three times faster is worth a few years, which is valuable (every year on the market before a patent expires can be worth hundreds of millions of dollars for a successful drug), but it cannot turn a 15-year process into a 5-year one.</p>
<p>The catch is that drug development is not only a latency problem, it is a conversion problem. Think of a funnel where 92% of users churn, and the churn is decided by a choice you made at signup. The best lever is not a faster signup page; it is picking better users. In drugs, that choice is the target. <b>Where the analogy breaks:</b> in software you can A/B test the funnel every week. In drug development, one pass through the funnel takes a decade, you cannot run it twice on the same patients, and the "conversion event" is whether sick people get better. You find out if your target choice was right years after you made it.</p>`},

    {type: 'callout', variant: 'misconception', heading: '"AI-discovered" means a computer made the drug', html: `
<p>No drug has been produced end to end by a computer. In rentosertib's case, software ranked candidate targets and generated candidate molecules. People chose which datasets to feed in, which settings to use, which of the top-ranked targets to pursue, which generated molecules to make, and how to fix the early leads when they turned out to be broken down too fast by the liver. Chemists synthesized them. Biologists tested them in cells and animals. Contract research organizations ran safety studies. Doctors ran the trials. "AI-discovered" is a claim about where the key ideas came from, and it is usually made by the company that owns the AI. It is worth asking what the AI contributed that a good team with conventional tools would not have.</p>`},

    // ============================================================ IPF
    {type: 'story', kicker: 'The disease from zero', title: 'Lungs that turn to scar', tocTitle: 'IPF from zero', html: `
<p>Your lungs are not balloons. They are more like sponges: the airways branch again and again until they end in hundreds of millions of tiny air sacs called [[alveoli]]. Each sac is wrapped in blood vessels, and its wall is thinner than a sheet of tissue paper. Oxygen crosses that wall into the blood; carbon dioxide crosses the other way. The thinner and more elastic the walls, the easier breathing is.</p>
<p>In [[idiopathic pulmonary fibrosis]] (IPF), the lining cells of those sacs are injured, over and over, in small ways. Nobody knows exactly why, which is what "idiopathic" means, although age, smoking, certain genes and being male all raise the risk. Normally, a small injury triggers a repair crew. Cells called [[fibroblast|fibroblasts]] move in, some turn into [[myofibroblast|myofibroblasts]] that pump out [[collagen]] and other [[extracellular matrix]] to patch the hole, and then the crew stands down. In IPF, the repair never stops. The signals that call the crew, especially [[TGF-β]] and [[Wnt]], stay switched on. Collagen piles up. The walls of the air sacs thicken and stiffen, oxygen struggles to cross, and eventually whole regions collapse into a pattern of cysts that radiologists call honeycombing.</p>
<p>Patients feel it as breathlessness that creeps from stairs to walking to getting dressed, and a dry cough that never ends. In the United States, IPF affects somewhere between 10 and 60 people per 100,000, about ten times more often in people over 65. It is about as common as stomach or brain cancer, and median survival after diagnosis is two to four years. It can also lurch: an [[acute exacerbation]], a sudden collapse in lung function over days or weeks, is often fatal within months.</p>
<h3>How doctors measure it</h3>
<p>The main yardstick is [[FVC|forced vital capacity]] (FVC): take the deepest breath you can and blow it all out, as hard and as long as you can, into a [[spirometry|spirometer]]. A healthy adult might blow out four or five liters. People in the rentosertib trial averaged about 2.6 liters. Untreated IPF typically removes something like 200 milliliters a year; in the placebo groups of the pivotal nintedanib trials, FVC fell by 207 to 240 mL per year. Because FVC decline tracks how fast people get sicker, regulators accept it as the main endpoint for IPF drugs.</p>
<h3>What treatment looks like</h3>
<p>On 15 October 2014, the FDA approved two drugs for IPF on the same day: [[pirfenidone]] (Esbriet) and [[nintedanib]] (Ofev). Both slow the disease; neither stops it. In the two INPULSIS trials of nintedanib, 1,066 patients were followed for a year. FVC fell by about 114 mL on the drug versus 207 to 240 mL on placebo, roughly halving the decline. Diarrhea hit about 62% of patients on nintedanib. In the ASCEND trial of pirfenidone (555 patients), the drug cut by 47.9% the proportion of patients who lost 10 percentage points of predicted FVC or died within a year, with stomach and skin side effects.</p>
<p>For a decade those were the only options. Then, on 7 October 2025, the FDA approved a third: Boehringer Ingelheim's [[nerandomilast]] (Jascayd). In its phase 3 trial, FIBRONEER-IPF, 1,177 patients (most already on one of the older drugs) lost about 69 mL less lung capacity over a year than placebo. Useful, but again: slower decline, not recovery.</p>
<p>So the unmet need is precise. Patients need something that works on top of the existing drugs, is tolerable enough to take for years, and, ideally, stops or reverses the decline rather than slowing it. That is the bar any new IPF drug, AI-designed or not, has to clear. It is also a field with a long graveyard: drugs that looked promising in small, short trials and then failed in large, long ones. We will meet one of them later.</p>`},

    {type: 'figure', title: 'What scarring does to the lung', intro: 'Hover or tap the parts. The two magnified panels compare healthy air sacs with scarred ones.',
      svg: `<svg viewBox="0 0 900 430" role="img" aria-label="Lungs with a magnified view of healthy and fibrotic air sacs and a spirometry curve">
        <g data-part="lungs">
          <path d="M160 40 V110 M160 110 C148 124 132 134 116 142 M160 110 C172 124 188 134 204 142" class="il-none il-line2" stroke-width="8" stroke-linecap="round"/>
          <path d="M146 124 C110 108 60 134 48 196 C40 248 60 290 102 294 C132 296 144 268 146 232 Z" class="il-2s st-2" stroke-width="2.5"/>
          <path d="M174 124 C210 108 260 134 272 196 C280 248 260 290 218 294 C188 296 176 268 174 232 Z" class="il-2s st-2" stroke-width="2.5"/>
          <path d="M116 142 L96 180 M96 180 L80 214 M96 180 L108 226 M204 142 L224 180 M224 180 L240 214 M224 180 L212 226" class="il-none il-line" stroke-width="2"/>
          <text x="160" y="322" text-anchor="middle" class="il-title">The lungs</text>
          <text x="160" y="342" text-anchor="middle" class="il-small">scarring starts at the bases</text>
          <text x="160" y="358" text-anchor="middle" class="il-small">and outer edges</text></g>
        <circle cx="240" cy="262" r="20" class="il-none st-ink" stroke-width="2"/>
        <path d="M258 252 L352 150" class="il-none il-line il-dash" stroke-width="1.5"/>
        <path d="M258 272 L630 150" class="il-none il-line il-dash" stroke-width="1.5"/>
        <g data-part="healthy">
          <rect x="350" y="30" width="250" height="250" rx="16" class="il-paper il-line"/>
          <circle cx="420" cy="100" r="42" class="il-3s st-3" stroke-width="2"/><circle cx="510" cy="96" r="40" class="il-3s st-3" stroke-width="2"/>
          <circle cx="410" cy="196" r="40" class="il-3s st-3" stroke-width="2"/><circle cx="500" cy="192" r="44" class="il-3s st-3" stroke-width="2"/>
          <circle cx="560" cy="150" r="22" class="il-3s st-3" stroke-width="2"/>
          <circle cx="462" cy="146" r="5" class="il-7"/><circle cx="455" cy="60" r="4" class="il-7"/><circle cx="545" cy="228" r="4" class="il-7"/><circle cx="378" cy="146" r="4" class="il-7"/>
          <text x="475" y="266" text-anchor="middle" class="il-text">Healthy air sacs: thin, elastic walls</text></g>
        <g data-part="ipf">
          <rect x="630" y="30" width="250" height="250" rx="16" class="il-paper il-line"/>
          <circle cx="690" cy="90" r="26" class="il-3s st-2" stroke-width="10"/><circle cx="812" cy="92" r="22" class="il-3s st-2" stroke-width="12"/>
          <circle cx="700" cy="204" r="20" class="il-3s st-2" stroke-width="12"/><circle cx="806" cy="200" r="28" class="il-3s st-2" stroke-width="9"/>
          <text x="755" y="266" text-anchor="middle" class="il-text">IPF: thick, stiff, collapsing</text></g>
        <g data-part="fibro">
          <path d="M733 132 q12 -10 24 0 q-12 10 -24 0 Z" class="il-2"/><path d="M646 146 q10 -8 20 0 q-10 8 -20 0 Z" class="il-2"/><path d="M846 146 q10 -8 20 0 q-10 8 -20 0 Z" class="il-2"/>
          <text x="745" y="160" text-anchor="middle" class="il-small">myofibroblasts</text></g>
        <g data-part="collagen">
          <path d="M728 60 q6 -5 12 0 t12 0 t12 0 M650 246 q6 -5 12 0 t12 0 t12 0 M824 246 q6 -5 12 0 t12 0" class="il-none st-7" stroke-width="3" stroke-linecap="round"/>
          <text x="850" y="52" text-anchor="middle" class="il-small">collagen</text></g>
        <g data-part="fvc">
          <rect x="350" y="300" width="530" height="120" rx="14" class="il-paper il-line"/>
          <text x="370" y="322" class="il-text">FVC: all the air you can blow out</text>
          <path d="M380 404 H860 M380 404 V334" class="il-none il-line" stroke-width="1.5"/>
          <path d="M380 404 C396 360 430 350 500 347 S760 344 860 344" class="il-none st-3" stroke-width="3"/>
          <path d="M380 404 C396 380 430 376 500 374 S760 372 860 372" class="il-none st-2" stroke-width="3"/>
          <text x="760" y="338" class="il-small">healthy: ~4–5 liters</text><text x="760" y="366" class="il-small">IPF: less, and falling</text>
          <text x="620" y="416" text-anchor="middle" class="il-small">seconds of blowing →</text></g>
      </svg>`,
      hotspots: {
        lungs: {title: 'Where IPF starts', text: 'Scarring typically begins at the bottom of the lungs and just under their outer surface, then spreads. On a CT scan it looks like a lacy white net, later with small cysts ("honeycombing").'},
        healthy: {title: 'Healthy alveoli', text: 'Millions of tiny sacs with walls thinner than tissue paper, wrapped in capillaries (red). Oxygen diffuses across in a fraction of a second. The walls are elastic, so the lung springs back after each breath.'},
        ipf: {title: 'Fibrotic alveoli', text: 'Repeated injury and endless repair thicken the walls with scar. Oxygen crosses slowly, the lung gets stiff, and sacs collapse or merge into cysts. The damage accumulates; current drugs slow it but do not reverse it.'},
        fibro: {title: 'Myofibroblasts, the overactive repair crew', text: '[[fibroblast|Fibroblasts]] turn into [[myofibroblast|myofibroblasts]] under signals such as [[TGF-β]] and [[Wnt]]. In IPF they cluster in "fibroblastic foci" and keep producing matrix. They are the main target of every antifibrotic drug, including rentosertib.'},
        collagen: {title: 'Extracellular matrix', text: '[[collagen|Collagen]], fibronectin and other matrix proteins are the scar itself. In the rentosertib trial, blood levels of several matrix-related proteins (such as COL1A1 and FN1) fell with higher doses, one of the paper\'s supporting signals.'},
        fvc: {title: 'Forced vital capacity', text: 'The patient inhales fully, then blows out as hard and long as possible. The total volume is the [[FVC]]. A stiff, scarred lung holds and expels less air. FVC decline over 52 weeks is the standard primary endpoint for IPF drugs.'},
      },
      caption: 'Schematic, not to scale. Tissue colors: healthy air sacs aqua, scarring orange and red.'},

    // ============================================================ INSILICO
    {type: 'story', kicker: 'The bet', title: 'A longevity lab that wanted to find its own targets', tocTitle: 'Insilico\'s bet', html: `
<p>Insilico Medicine was founded in the United States in 2014 by Alex Zhavoronkov, a researcher preoccupied with the biology of aging. The company's early identity was as much about longevity as about drugs, and that thread runs through the rentosertib story: Insilico describes IPF as an aging-related disease and TNIK as a target linked to multiple hallmarks of aging. Over time it built operations in Hong Kong, mainland China, the US and the UAE, and much of its lab and clinical work ran through partners in China.</p>
<p>In September 2019, Zhavoronkov and colleagues published a paper in <i>Nature Biotechnology</i> that put the company on the map. Their generative model, GENTRL, had designed inhibitors of a kinase called DDR1 in 21 days; four were active in biochemical tests and one worked in mice. Critics, including the computational chemists Pat Walters and Mark Murcko, pointed out that the best molecules closely resembled existing kinase inhibitors, and that 21 days of design is a small slice of the years a real drug needs. Both points were fair. The paper was a demonstration that generative models could produce plausible molecules, not a drug.</p>
<p>The rentosertib program was the attempt to go the whole way. Insilico built two commercial software products that it also sells to other companies. [[PandaOmics]] ranks genes as possible drug targets. For fibrosis, the team fed it [[omics]] datasets from lung and kidney tissue of patients, along with biological network data and text mined from papers, grants, patents and clinical trials. The software combines many scoring methods (which genes are abnormally active in disease, which sit at the center of disease-related networks, which have causal links) and then applies filters: in this case, only kinases, only targets thought to be druggable by small molecules, and a preference for novelty. The company says it validated the approach with a "time machine" test, training models on data up to a certain year and checking whether they predicted targets that later attracted industry attention.</p>
<p>Out of that process, [[TNIK]] came out number one among five top kinase candidates. TNIK (TRAF2- and NCK-interacting kinase) was not unknown. A 2009 paper from Hans Clevers' lab had shown it is essential for switching on genes controlled by the [[Wnt]] pathway, and cancer researchers had already made experimental TNIK inhibitors. Other papers linked it to [[TGF-β]] signaling and cell changes seen in fibrosis. But, as the <i>Nature Biotechnology</i> paper put it, TNIK had not been studied as a therapeutic target in IPF. It belongs to a kinase family that contains none of the targets of existing antifibrotic drugs. That is what Insilico means by "novel": new for this disease, not unknown to biology.</p>
<h3>Designing the molecule</h3>
<p>Then [[Chemistry42]] took over. Crystal structures of TNIK bound to earlier inhibitors already existed, so the team pointed the generative models at the [[ATP pocket]], the groove where the kinase binds its fuel, and told them to produce molecules that would form a hydrogen bond with a particular spot (the hinge region) and fill an adjacent hydrophobic cavity, a trick for [[kinase selectivity|selectivity]]. Chemists picked generated structures for synthetic feasibility, novelty and drug-like properties, made them and tested them. The first rounds produced potent inhibitors that were, in the paper's words, cleared too quickly by liver enzymes, inhibited drug-metabolizing enzymes and dissolved poorly. Further rounds of optimization fixed those problems and produced the compound then called INS018_055. In cells, it reduced markers of scarring; in mouse and rat models of lung, kidney and skin fibrosis it reduced scarring, given by mouth, by inhalation or on the skin.</p>
<p>Insilico says the whole process, from starting target discovery to nominating the preclinical candidate in February 2021, took about 18 months, and that it synthesized and tested only 78 molecules. A figure of about $2.6 million for that stage has been widely repeated, including in reviews; it traces to the company. These are not independently audited numbers, and it is worth being precise about what they cover. They measure discovery, not development. They exclude the years and money spent building the platforms. And they describe one program chosen, in hindsight, as the showcase. Insilico's later claim, in its 2025 listing announcement, is more useful as a benchmark: an average of 12 to 18 months from program start to candidate across more than 20 in-house programs from 2021 to 2024, with 60 to 200 molecules made per program. If that holds up, it is a real improvement in discovery productivity. It says nothing yet about whether those candidates will work in patients.</p>`},

    {type: 'figure', title: 'The design-make-test-learn loop, and where AI sits in it', intro: 'Medicinal chemistry is an iterative loop. Hover or tap each step to see what AI changes and what it doesn\'t.',
      svg: `<svg viewBox="0 0 900 430" role="img" aria-label="Circular diagram of the design, make, test, learn cycle with a target input and a candidate output">
        <g data-part="target"><rect x="20" y="170" width="170" height="90" rx="14" class="il-2s st-2" stroke-width="2"/><text x="105" y="200" text-anchor="middle" class="il-text">Target in</text><text x="105" y="222" text-anchor="middle" class="il-text-2">TNIK, ranked #1</text><text x="105" y="242" text-anchor="middle" class="il-small">by PandaOmics</text></g>
        <path d="M192 215 H286" class="il-none il-line2" stroke-width="2.5"/><path d="M286 215 l-10 -6 v12 z" class="il-line2"/>
        <circle cx="470" cy="215" r="150" class="il-none il-line il-dash" stroke-width="1.5"/>
        <path d="M560 95 A150 150 0 0 1 590 305" class="il-none st-1 flow" stroke-width="3"/>
        <path d="M560 335 A150 150 0 0 1 350 305" class="il-none st-6 flow" stroke-width="3"/>
        <path d="M330 290 A150 150 0 0 1 380 95" class="il-none st-6 flow" stroke-width="3"/>
        <path d="M400 80 A150 150 0 0 1 540 80" class="il-none st-1 flow" stroke-width="3"/>
        <g data-part="design"><rect x="400" y="40" width="140" height="66" rx="33" class="il-1"/><text x="470" y="70" text-anchor="middle" class="il-white">Design</text><text x="470" y="90" text-anchor="middle" class="il-white" style="font-size:12px">Chemistry42</text></g>
        <g data-part="make"><rect x="560" y="182" width="140" height="66" rx="33" class="il-6"/><text x="630" y="212" text-anchor="middle" class="il-white">Make</text><text x="630" y="232" text-anchor="middle" class="il-white" style="font-size:12px">chemists synthesize</text></g>
        <g data-part="test"><rect x="400" y="324" width="140" height="66" rx="33" class="il-6"/><text x="470" y="354" text-anchor="middle" class="il-white">Test</text><text x="470" y="374" text-anchor="middle" class="il-white" style="font-size:12px">assays, ADME, mice</text></g>
        <g data-part="learn"><rect x="240" y="182" width="140" height="66" rx="33" class="il-1"/><text x="310" y="212" text-anchor="middle" class="il-white">Learn</text><text x="310" y="232" text-anchor="middle" class="il-white" style="font-size:12px">update models</text></g>
        <g data-part="center"><text x="470" y="200" text-anchor="middle" class="il-num">78</text><text x="470" y="222" text-anchor="middle" class="il-text-2">molecules made and tested</text><text x="470" y="240" text-anchor="middle" class="il-small">(company figure)</text></g>
        <path d="M702 215 H728" class="il-none il-line2" stroke-width="2.5"/><path d="M728 215 l-10 -6 v12 z" class="il-line2"/>
        <g data-part="pcc"><rect x="732" y="165" width="150" height="100" rx="14" class="il-1s st-1" stroke-width="2"/><text x="807" y="195" text-anchor="middle" class="il-text">Candidate out</text><text x="807" y="217" text-anchor="middle" class="il-text-2">INS018_055</text><text x="807" y="237" text-anchor="middle" class="il-small">Feb 2021, ~18 months</text><text x="807" y="253" text-anchor="middle" class="il-small">(company account)</text></g>
        <text x="470" y="20" text-anchor="middle" class="il-small">blue: computational (hours to days) · violet: physical lab work (days to weeks per round)</text>
        <text x="800" y="410" text-anchor="middle" class="il-small">Then: animal safety, phase 0, phase 1</text>
      </svg>`,
      hotspots: {
        target: {title: 'The input: a target hypothesis', text: 'Everything in the loop assumes the target is right. The loop can make a superb TNIK inhibitor; it cannot tell you whether blocking TNIK helps people with IPF. That question stayed open until the phase 2a trial, and is still open until phase 3.'},
        design: {title: 'Design: generative chemistry', text: '[[Chemistry42]] generated structures to fit TNIK\'s [[ATP pocket]], scored for predicted binding, novelty and drug-likeness. This is where AI speeds things most: it can propose and screen millions of virtual molecules, so fewer need to be made. Chemists still choose what to make.'},
        make: {title: 'Make: synthesis', text: 'Each molecule has to be synthesized by chemists, often through multi-step routes, typically taking days to weeks. Automated and robotic labs are shortening this, but it remains physical work. A design that is hard to make is a bad design.'},
        test: {title: 'Test: the reality check', text: 'Enzyme assays for potency, panels of other kinases for selectivity, [[ADME]] tests (liver enzymes, solubility), cell models of fibrosis, then animal models such as the [[bleomycin model]]. For rentosertib, the first leads failed here on metabolism and solubility, and needed further rounds.'},
        learn: {title: 'Learn: feeding results back', text: 'Test results update the models and the chemists\' intuition, so the next round of designs is better. The value of AI here depends on data: each program generates only dozens to hundreds of measured molecules, tiny by machine-learning standards.'},
        center: {title: 'Fewer molecules, fewer rounds', text: 'The core productivity claim: Insilico says 78 molecules for rentosertib and 60–200 per program on average, versus the thousands that traditional programs often make. Fewer, smarter rounds is where AI\'s time and cost savings in discovery come from.'},
        pcc: {title: 'The output: a preclinical candidate', text: 'Insilico nominated INS018_055 as its [[preclinical candidate]] in February 2021. From here, the clock runs at biology\'s speed: animal toxicology, manufacturing, and trials measured in months and years.'},
      },
      caption: 'Schematic of the standard medicinal-chemistry loop as applied in the rentosertib program, based on Ren et al., Nature Biotechnology 2024. Timings and molecule counts are Insilico\'s.'},

    {type: 'decision', title: 'Decision: novel target or known target?', role: 'You are the founder of an AI drug discovery startup choosing your first flagship program', scenario: `
<p>You have a target-ranking engine and a generative chemistry engine, about four years of cash, and investors who want proof that your platform works. You can put your best team on one flagship program. Which do you choose?</p>`,
      options: [
        {label: 'A well-validated target, with a better-designed molecule (a "best-in-class" play)', outcome: 'Lower biological risk: others have shown that hitting this target helps patients, so your phase 2 odds are better than average. But you are racing established competitors, your molecule must be clearly better to matter commercially, and skeptics will say your AI merely did faster what chemists already knew how to do. It proves your chemistry engine, not your target engine.'},
        {label: 'A target your AI nominated that nobody has drugged for this disease (a "first-in-class" play)', outcome: 'This is the only way to prove the whole platform, and if it works you own a new mechanism with little competition. But you take on the biggest risk in drug development, the target hypothesis, and you will not know the answer for years. Most novel targets fail in phase 2. If it fails, critics will blame the AI, whether or not that is fair.'},
        {label: 'Repurpose an existing approved drug for a new disease', outcome: 'Fastest path to patients: safety is already known, so you can skip much of discovery and phase 1. BenevolentAI did this with baricitinib for COVID-19. But the commercial upside is often limited (the drug may be generic or owned by someone else), and it demonstrates your insight engine only, not your molecule design.'},
      ],
      reality: `<p>Insilico chose the high-risk, high-proof option for its flagship: a target (TNIK) its software ranked first and that had not been pursued for fibrosis, and a new molecule designed for it. It also hedged. Its broader pipeline includes programs against better-known targets, and some of those became licensing deals; in 2023 it licensed a USP1 inhibitor to Exelixis. The flagship bet is why rentosertib attracts so much attention, and why its phase 3 result will be read as a verdict on more than one drug.</p>`},

    // ============================================================ MECHANISM
    {type: 'mechanism', title: 'How rentosertib is supposed to work', intro: 'Step through the fibrosis signaling story as the papers describe it. Claims about TNIK\'s role come mostly from cell and animal studies; the last two steps separate what has been seen in patients from what is still unknown.',
      svg: `<svg viewBox="0 0 760 440" role="img" aria-label="Fibroblast signaling with TNIK as a hub, and rentosertib blocking it">
        <g data-part="epi">
          <rect x="30" y="20" width="60" height="44" rx="12" class="il-3s st-3" stroke-width="2"/><rect x="96" y="20" width="60" height="44" rx="12" class="il-3s st-3" stroke-width="2"/>
          <rect x="162" y="20" width="60" height="44" rx="12" class="il-3s st-3" stroke-width="2"/><rect x="228" y="20" width="60" height="44" rx="12" class="il-3s st-3" stroke-width="2"/>
          <text x="300" y="48" class="il-text-2">air-sac lining cells</text></g>
        <g data-part="injury"><path d="M120 18 l8 14 l-6 6 l10 14 M188 18 l-6 12 l8 8 l-4 16" class="il-none st-7" stroke-width="3" stroke-linecap="round"/><text x="140" y="84" class="il-small">repeated micro-injury</text></g>
        <g data-part="signals"><circle cx="210" cy="100" r="7" class="il-4"/><circle cx="250" cy="92" r="7" class="il-4"/><circle cx="300" cy="104" r="7" class="il-4"/><circle cx="350" cy="96" r="7" class="il-4"/><circle cx="410" cy="102" r="7" class="il-4"/>
          <text x="470" y="100" class="il-text-2">TGF-β and Wnt signals</text></g>
        <g data-part="fibro">
          <ellipse cx="330" cy="280" rx="250" ry="140" class="il-2s"/>
          <ellipse cx="330" cy="280" rx="250" ry="140" class="il-none st-2" stroke-width="2.5"/>
          <ellipse cx="330" cy="280" rx="242" ry="132" class="il-none st-2" stroke-width="1.2"/>
          <text x="30" y="176" class="il-title">Fibroblast</text></g>
        <g data-part="receptors"><rect x="236" y="130" width="14" height="38" rx="4" class="il-6"/><rect x="322" y="126" width="14" height="38" rx="4" class="il-6"/><rect x="410" y="130" width="14" height="38" rx="4" class="il-6"/>
          <text x="226" y="150" text-anchor="end" class="il-small">receptors</text></g>
        <g data-part="paths">
          <path d="M243 172 L308 222 M329 168 L329 214 M417 172 L352 222" class="il-none il-line2" stroke-width="2.5"/>
          <path d="M300 256 L214 312 M320 262 L292 312 M340 262 L368 312 M360 256 L446 312" class="il-none st-2 flow" stroke-width="2.5"/>
          <text x="190" y="330" text-anchor="middle" class="il-small">β-catenin/TCF</text><text x="284" y="330" text-anchor="middle" class="il-small">SMAD</text><text x="374" y="330" text-anchor="middle" class="il-small">YAP/TAZ</text><text x="456" y="330" text-anchor="middle" class="il-small">NF-κB</text></g>
        <g data-part="tnik"><path d="M296 222 C300 206 360 204 364 222 C372 240 352 262 330 262 C306 262 288 242 296 222 Z" class="il-2"/>
          <path d="M318 226 L342 226 L336 240 L324 240 Z" class="il-paper"/>
          <text x="376" y="232" class="il-text">TNIK</text><text x="376" y="250" class="il-small">a signaling hub</text></g>
        <g data-part="nucleus"><ellipse cx="330" cy="380" rx="120" ry="34" class="il-paper st-2" stroke-width="2"/>
          <path d="M250 368 C275 356 300 386 330 370 C360 354 385 384 410 372" class="il-none st-6" stroke-width="3"/>
          <text x="330" y="400" text-anchor="middle" class="il-small">nucleus: fibrosis genes on</text></g>
        <g data-part="myo"><path d="M150 200 L220 222 M144 222 L214 244 M470 350 L528 334 M476 372 L530 356" class="il-none st-7" stroke-width="2" stroke-linecap="round"/>
          <text x="592" y="230" class="il-small">becomes a</text><text x="592" y="246" class="il-small">myofibroblast</text></g>
        <g data-part="collagen"><path d="M610 330 q8 -8 16 0 t16 0 t16 0 t16 0 t16 0 M606 356 q8 -8 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 M612 382 q8 -8 16 0 t16 0 t16 0 t16 0 t16 0 M606 408 q8 -8 16 0 t16 0 t16 0 t16 0 t16 0 t16 0" class="il-none st-7" stroke-width="3.5" stroke-linecap="round"/>
          <text x="660" y="316" text-anchor="middle" class="il-text">collagen scar</text></g>
        <g data-part="drug"><rect x="600" y="160" width="46" height="22" rx="11" class="il-1"/><path d="M623 160 V182" class="il-line" style="stroke: var(--il-paper)"/>
          <text x="623" y="150" text-anchor="middle" class="il-text">rentosertib</text></g>
        <g data-part="block"><path d="M232 306 l14 14 m0 -14 l-14 14 M292 306 l14 14 m0 -14 l-14 14 M354 306 l14 14 m0 -14 l-14 14 M414 306 l14 14 m0 -14 l-14 14" class="il-none st-ink" stroke-width="3"/>
          <text x="376" y="272" class="il-text">pocket blocked</text></g>
        <g data-part="evidence"><rect x="556" y="292" width="198" height="140" rx="12" class="il-1s st-1" stroke-width="2"/>
          <text x="566" y="314" class="il-text">Seen in patients</text>
          <text x="566" y="336" class="il-small">• FVC signal at 60 mg (12 wk)</text>
          <text x="566" y="354" class="il-small">• blood COL1A1, FAP, FN1,</text>
          <text x="566" y="370" class="il-small">  MMP10 fell with dose, time</text>
          <text x="566" y="388" class="il-small">• falls tracked FVC gains</text>
          <text x="566" y="410" class="il-small">(exploratory, post hoc,</text>
          <text x="566" y="424" class="il-small">small numbers)</text></g>
        <g data-part="open"><rect x="480" y="20" width="272" height="116" rx="12" class="il-5s st-5" stroke-width="2"/>
          <text x="492" y="44" class="il-text">Still unknown</text>
          <text x="492" y="66" class="il-small">• does it slow or stop decline over a year?</text>
          <text x="492" y="84" class="il-small">• which of TNIK's many roles matters?</text>
          <text x="492" y="102" class="il-small">• effects outside the lung: gut, liver,</text>
          <text x="492" y="120" class="il-small">  immune cells, exacerbations</text></g>
      </svg>`,
      steps: [
        {title: 'Injury and repair', text: 'The thin lining cells of the air sacs are injured. They release signals, including [[TGF-β]] and [[Wnt]] proteins, that call in [[fibroblast|fibroblasts]] to patch the damage. In a healthy lung, the repair finishes and the signals fade.', show: ['epi', 'injury', 'signals', 'fibro'], focus: ['injury']},
        {title: 'In IPF, the alarm never switches off', text: 'The injuries keep coming and the signals keep flowing. Receptors on the fibroblast\'s surface fire continuously. Existing drugs work around here: nintedanib blocks several growth-factor receptors, and pirfenidone dampens TGF-β-driven scarring.', show: ['epi', 'injury', 'signals', 'fibro', 'receptors'], pulse: ['signals'], focus: ['receptors'], move: {signals: 'translate(0px, 14px)'}},
        {title: 'Signals converge on a hub: TNIK', text: 'Inside the cell, the messages pass through relay enzymes called [[kinase|kinases]]. [[TNIK]] is one. It is required to switch on Wnt-controlled genes (it works with β-catenin and TCF4 in the nucleus), and studies have linked it to TGF-β/SMAD, YAP/TAZ and NF-κB signaling. PandaOmics ranked it first among kinase targets for fibrosis.', show: ['epi', 'signals', 'fibro', 'receptors', 'tnik', 'paths'], focus: ['tnik'], dim: ['epi', 'signals']},
        {title: 'Fibrosis genes switch on', text: 'The relayed signals reach the nucleus, where transcription factors turn on genes for collagen, fibronectin and the contractile machinery of a scar-making cell.', show: ['fibro', 'receptors', 'tnik', 'paths', 'nucleus'], pulse: ['paths'], focus: ['nucleus']},
        {title: 'Myofibroblasts build the scar', text: 'The fibroblast becomes a [[myofibroblast]] and pours out [[collagen]] and other [[extracellular matrix]]. The air-sac walls thicken and stiffen, and FVC falls. Because TNIK sits upstream of several of these programs, Insilico\'s hypothesis is that blocking it dampens more than one pro-fibrotic pathway at once.', show: ['fibro', 'receptors', 'tnik', 'paths', 'nucleus', 'myo', 'collagen'], pulse: ['collagen'], focus: ['myo']},
        {title: 'Rentosertib plugs TNIK\'s pocket', text: 'Rentosertib is a [[small molecule]] taken as a pill. It sits in TNIK\'s [[ATP pocket]], forming a hydrogen bond with the hinge region and filling a nearby cavity, so the kinase cannot use its fuel. In lab tests it bound TNIK tightly (a dissociation constant of about 4 nanomolar) and was screened against a large panel of other kinases to check [[kinase selectivity|selectivity]].', show: ['fibro', 'receptors', 'tnik', 'paths', 'nucleus', 'myo', 'collagen', 'drug'], move: {drug: 'translate(-293px, 60px)'}, focus: ['drug'], dim: ['collagen', 'myo']},
        {title: 'What has been seen so far', text: 'In cells and in mouse and rat models of lung, kidney and skin fibrosis, it reduced scarring markers. In the 12-week patient trial, the highest dose came with a rise in FVC and, in an exploratory analysis, falling blood levels of scar-related proteins such as COL1A1, FAP, FN1 and MMP10, which tracked with FVC gains. Supportive, but post hoc and in small numbers.', show: ['fibro', 'tnik', 'paths', 'nucleus', 'drug', 'block', 'evidence'], move: {drug: 'translate(-293px, 60px)'}, dim: ['paths', 'nucleus'], focus: ['evidence']},
        {title: 'What is not known', text: 'Whether blocking TNIK slows or halts IPF over a year or more; which of its roles matters most; and what it does elsewhere. TNIK acts in many tissues, including immune cells and the gut. In the trial, diarrhea, liver-enzyme rises and low potassium were more common on the drug, and the highest-dose arm had three acute exacerbations versus one on placebo. Phase 3 is designed to answer the first question.', show: ['fibro', 'tnik', 'drug', 'open', 'evidence'], move: {drug: 'translate(-293px, 60px)'}, dim: ['fibro', 'tnik', 'drug', 'evidence'], focus: ['open']},
      ]},

    {type: 'callout', variant: 'product', heading: 'The 18-month claim is a time-to-MVP metric', html: `
<p>"Target to candidate in 18 months" is like a startup bragging about shipping an MVP in six weeks. It is a genuine measure of team and tooling productivity, and a faster build loop compounds: more shots on goal for the same money. Insilico's claim of 12 to 18 months across 20-plus programs is the more meaningful version, just as a team's median cycle time says more than one heroic launch.</p>
<p><b>Where it breaks:</b> an MVP gets real user feedback in days. A drug candidate gets its first meaningful feedback (does it help patients?) five or more years later, after preclinical studies and phase 1. Nobody would praise a startup for fast MVPs if 70% of its products were later found to solve no real problem. In drugs, that is the base rate at phase 2. Speed in discovery is only as valuable as the hit rate of what you ship into the clinic.</p>`},

    // ============================================================ TIMELINE
    {type: 'timeline', title: 'Timeline: from a Wnt kinase to the first AI-discovered phase 3', tocTitle: 'Timeline', intro: 'Rentosertib\'s milestones interleaved with the wider AI drug discovery field. Filter by type. Notice how many field-wide setbacks sit alongside rentosertib\'s progress.',
      events: [
        {year: 2009, title: 'TNIK shown to be essential for Wnt target genes', kind: 'science', text: 'Hans Clevers\' lab reports in EMBO Journal that the kinase TNIK is needed to switch on Wnt-controlled genes. It draws interest as a cancer target; fibrosis comes later.'},
        {year: 2012, title: 'Eroom\'s law', kind: 'science', text: 'Scannell and colleagues show new drugs per billion dollars of R&D have halved roughly every 9 years since 1950.'},
        {year: 2014, date: 'Oct 15, 2014', title: 'FDA approves pirfenidone and nintedanib for IPF', kind: 'regulatory', text: 'The first two IPF drugs. Both slow lung-function decline; neither reverses it.'},
        {year: 2014, title: 'Insilico Medicine founded', kind: 'people', text: 'Alex Zhavoronkov founds the company in the United States, with an early focus on aging.'},
        {year: 2019, date: 'Sep 2019', title: 'GENTRL: generative design in 21 days', kind: 'science', text: 'Insilico reports AI-designed DDR1 kinase inhibitors in Nature Biotechnology. Critics note the molecules resemble known inhibitors.'},
        {year: 2020, date: 'Jan 2020', title: 'First "AI-designed" molecule enters trials', kind: 'clinical', text: 'Exscientia and Sumitomo Dainippon Pharma announce phase 1 of DSP-1181 for obsessive-compulsive disorder in Japan.'},
        {year: 2020, date: 'Feb 2020', title: 'BenevolentAI flags baricitinib for COVID-19', kind: 'science', text: 'A Lancet letter proposes the arthritis drug as a COVID-19 treatment. Later trials, including RECOVERY with 8,156 patients, show it reduces deaths.'},
        {year: 2021, date: 'Feb 2021', title: 'Preclinical candidate nominated', kind: 'science', text: 'Insilico nominates INS018_055, about 18 months after starting target discovery, by its account.'},
        {year: 2021, date: 'Jul 2021', title: 'AlphaFold 2 paper published', kind: 'science', text: 'DeepMind\'s protein-structure predictor is described in Nature, after winning the CASP14 assessment in 2020.'},
        {year: 2022, date: 'Feb 2022', title: 'Phase 1 begins in New Zealand', kind: 'clinical', text: 'After a phase 0 microdose study in Australia, a 78-person phase 1 in healthy volunteers starts; a separate 48-person phase 1 runs in China.'},
        {year: 2022, title: 'DSP-1181 discontinued', kind: 'setback', text: 'The first AI-designed molecule to enter trials is dropped after phase 1.'},
        {year: 2023, date: 'Feb 2023', title: 'FDA orphan drug designation', kind: 'regulatory', text: 'Granted for INS018_055 in IPF, after positive phase 1 topline data in January.'},
        {year: 2023, date: 'Apr 2023', title: 'BenevolentAI\'s lead drug misses efficacy', kind: 'setback', text: 'BEN-2293 for eczema is safe but shows no significant effect on itch or inflammation. In May the company announces up to 180 job cuts.'},
        {year: 2023, date: 'Jun 2023', title: 'GENESIS-IPF phase 2a begins', kind: 'clinical', text: 'First patients dosed in China. A separate US phase 2a opens in 2024.'},
        {year: 2024, date: 'Mar 2024', title: 'Nature Biotechnology paper', kind: 'science', text: 'Insilico describes the TNIK discovery, the molecule, animal data and phase 1 results.'},
        {year: 2024, date: 'May 2024', title: 'AlphaFold 3', kind: 'science', text: 'Extends structure prediction to proteins interacting with DNA, RNA and drug-like molecules.'},
        {year: 2024, date: 'Oct 9, 2024', title: 'Nobel Prize for protein structure and design', kind: 'people', text: 'Demis Hassabis and John Jumper (AlphaFold) share the chemistry prize with David Baker (computational protein design).'},
        {year: 2024, date: 'Nov 20, 2024', title: 'Recursion completes Exscientia acquisition', kind: 'business', text: 'Two of the best-known AI drug discovery companies combine, announced in August 2024.'},
        {year: 2025, date: 'Mar 2025', title: 'BenevolentAI delists', kind: 'business', text: 'After a merger into a private holding company, its shares leave Euronext Amsterdam on 13 March 2025.'},
        {year: 2025, date: 'May 2025', title: 'Recursion prunes its pipeline', kind: 'setback', text: 'Three clinical programs discontinued or offered for partnering; in June, about 20% of staff cut.'},
        {year: 2025, date: 'Jun 3, 2025', title: 'GENESIS-IPF published in Nature Medicine', kind: 'clinical', text: '71 patients, 12 weeks: safety similar across arms; FVC +98.4 mL at 60 mg vs −20.3 mL on placebo.'},
        {year: 2025, date: 'Oct 7, 2025', title: 'FDA approves nerandomilast for IPF', kind: 'regulatory', text: 'Boehringer Ingelheim\'s Jascayd, the first new IPF drug since 2014, raising the bar for newcomers.'},
        {year: 2025, date: 'Dec 30, 2025', title: 'Insilico lists in Hong Kong', kind: 'business', text: 'Raises HK$2.28 billion on the Hong Kong Stock Exchange.'},
        {year: 2026, date: 'Apr 2026', title: 'Inhaled rentosertib cleared for trials in China', kind: 'regulatory', text: 'An inhaled version, meant to reach the lung with less exposure elsewhere, receives IND clearance.'},
        {year: 2026, date: 'May 2026', title: 'Isomorphic Labs raises $2.1 billion', kind: 'business', text: 'The DeepMind spinout\'s Series B, led by Thrive Capital.'},
        {year: 2026, date: 'Sep 9, 2026', title: 'First patient dosed in GENESIS-IPF-3', kind: 'clinical', text: 'Insilico calls it the first phase 3 of a generative-AI-driven drug: 320 patients, 47 centers in China, 52 weeks.'},
      ]},

    // ============================================================ PHASE 0/1
    {type: 'story', kicker: 'Into people', title: 'From candidate to clinic in record time, then the normal clock', tocTitle: 'Into the clinic', html: `
<p>Once a candidate is nominated, the pace of the story changes. Insilico moved fast by industry standards. In late 2021 it ran a [[phase 0]] study in Australia, giving healthy volunteers a single intravenous [[microdose]] of 100 micrograms to see how the body handled the drug. In February 2022 a randomized, [[double-blind]] phase 1 began in New Zealand in 78 healthy volunteers, testing single and multiple rising doses; a second phase 1 with 48 people ran in China. Both found the drug well tolerated, absorbed well by mouth and behaving predictably as doses rose. Insilico says phase 0 and phase 1 were complete in under 30 months from the start of target discovery.</p>
<p>That is quick, but it is quick in the ordinary way. Phase 1 speed depends on regulators, ethics committees, recruiting volunteers and waiting for blood samples, not on algorithms.</p>
<p>In February 2023 the FDA granted INS018_055 [[orphan drug designation]] for IPF, a status that brings fee waivers and market exclusivity if approved but says nothing about whether the drug works. In June 2023, the first patients were dosed in the phase 2a trial in China, named GENESIS-IPF. A parallel US phase 2a with about 40 patients, registered as NCT05975983, opened in February 2024; at its last registry update in November 2025 it was still listed as recruiting, and no results had been published as of September 2026.</p>
<p>By the time the phase 2a paper appeared, the molecule had an official name. Rentosertib is its United States Adopted Name ([[USAN]]); the "-sertib" ending marks a serine/threonine kinase inhibitor. Insilico describes it as the first USAN given to a drug for which both the target and the molecule were discovered with generative AI. Naming is a routine administrative step that every drug entering serious development goes through. That it became a press release tells you something about how much the company, and the field, needed a milestone.</p>`},

    // ============================================================ TRIAL
    {type: 'trial', title: 'GENESIS-IPF: the phase 2a trial', tocTitle: 'GENESIS-IPF trial', intro: 'Study the design first. Notice what the primary endpoint is, and how many patients are in each arm. Then predict the lung-function result before revealing it.',
      design: {name: 'GENESIS-IPF (NCT05938920)', phase: 'Phase 2a', blinding: 'Double-blind, placebo-controlled', years: 'July 2023 – June 2024', n: 71,
        population: 'Adults 40+ with IPF at 21 hospitals in China; background antifibrotics allowed',
        randomization: '1:1:1:1',
        arms: [
          {name: '30 mg once daily', n: 18, desc: 'Rentosertib pill, 12 weeks'},
          {name: '30 mg twice daily', n: 18, desc: 'Rentosertib pill, 12 weeks'},
          {name: '60 mg once daily', n: 18, desc: 'Rentosertib pill, 12 weeks'},
          {name: 'Placebo', n: 17, desc: 'Dummy pill, 12 weeks', control: true}],
        endpoint: 'Safety: any adverse event',
        details: {
          'Primary endpoint': 'Percentage of patients with at least one [[treatment-emergent adverse event]] over 12 weeks. The trial was sized for safety: about 15 patients per arm gives a 90% chance of seeing at least one event that affects 15% of patients.',
          'Secondary endpoints': 'Pharmacokinetics; change in [[FVC]], DLCO (how well gas crosses into blood) and FEV1; cough quality of life (Leicester Cough Questionnaire); 6-minute walk distance; acute exacerbations.',
          'Exploratory': 'Blood [[proteomics]]: about 2,800 proteins measured at baseline and weeks 2, 4 and 12.',
          'Who took part': 'Mean age 67; 90% men; all Asian; 72% former smokers. Mean FVC about 2.6 liters.',
          'Background therapy': '31% of patients were on nintedanib and 21% on pirfenidone, unevenly spread: 50% of the 60 mg arm was on nintedanib, versus 18% of the placebo arm.',
          'Analysis': 'All 71 randomized patients were analyzed ([[intention-to-treat]]); 16 (23%) stopped treatment early. FVC was analyzed with a model adjusting for baseline, with missing values imputed.',
          'Sponsor': 'Insilico Medicine. Eleven of the 27 authors, including the senior author, Alex Zhavoronkov, were Insilico employees; trial management and data analysis were done by a contract research organization, Fortrea.',
        }},
      predict: {q: 'After 12 weeks, how did average lung capacity (FVC) change in the 60 mg arm compared with placebo?',
        options: ['Both arms declined by a similar amount', 'The 60 mg arm declined more slowly than placebo, but still declined', 'The 60 mg arm rose by about 100 mL while placebo fell by about 20 mL', 'All three doses raised FVC by more than 100 mL'],
        answer: 2,
        explain: 'The 60 mg arm rose by an average of 98.4 mL (95% confidence interval 10.9 to 185.9) while placebo fell by 20.3 mL (−116.1 to 75.6). The lower doses did not show this: −27.0 mL at 30 mg once daily and +19.7 mL at 30 mg twice daily. A rise, rather than a slower fall, is unusual in IPF, which is why the result drew attention. But FVC was a secondary endpoint, the arms were tiny, and the confidence intervals overlap heavily.'},
      results: [
        {kind: 'bar', title: 'Mean change in FVC after 12 weeks', unit: 'mL', categories: ['Placebo', '30 mg once daily', '30 mg twice daily', '60 mg once daily'],
          series: [{name: 'Mean change in FVC', values: [-20.3, -27.0, 19.7, 98.4], notes: ['95% CI −116.1 to 75.6', '95% CI −88.8 to 34.8', '95% CI −60.5 to 99.9', '95% CI 10.9 to 185.9']}],
          note: 'Within-arm mean change from baseline with 95% confidence intervals, as reported in Xu et al., Nature Medicine 2025. 17–18 patients randomized per arm; 22 of 71 patients had no week-12 FVC measurement.'},
        {kind: 'bar', title: 'Side effects and dropouts, by arm', unit: '%', categories: ['Placebo', '30 mg once daily', '30 mg twice daily', '60 mg once daily'],
          series: [{name: 'Treatment-related adverse events', values: [29.4, 50.0, 61.1, 77.8]}, {name: 'Stopped treatment because of an adverse event', values: [11.8, 5.6, 27.8, 22.2]}],
          note: 'Any adverse event (the primary endpoint) was similar: 70.6%, 72.2%, 83.3% and 83.3%. Seven patients stopped because of liver injury or dysfunction, all in the 30 mg twice-daily and 60 mg arms; four of them were also taking nintedanib. Source: Xu et al., Nature Medicine 2025.'},
      ],
      takeaway: 'The trial met its actual goal: it showed that 12 weeks of rentosertib was reasonably safe, with more side effects at higher doses. The FVC result is a dose-related signal worth testing properly. It is not proof that the drug works.'},

    {type: 'story', kicker: 'Reading it carefully', title: 'What a 12-week trial of 71 people can and can\'t tell you', tocTitle: 'Reading the trial', html: `
<p>It is easy to be either too excited or too dismissive about GENESIS-IPF. Here is how an experienced reader would take it apart.</p>
<h3>What it did show</h3>
<p><b>Safety at 12 weeks.</b> That was the primary question, and the answer was acceptable: similar rates of any adverse event across arms, few serious treatment-related events, and a recognizable pattern of side effects (diarrhea, liver-enzyme rises, low potassium) that increased with dose. <b>Dose response.</b> Drug exposure rose with dose, and FVC improved most in the arm with the highest exposure; the paper reports that FVC change correlated with blood levels of the drug. A dose-response pattern is harder to produce by chance than a single good arm. <b>Biology moving in the right direction.</b> In an exploratory analysis of about 2,800 blood proteins, several associated with scarring fell with dose and time, and their falls tracked FVC gains.</p>
<h3>What it could not show</h3>
<p><b>Efficacy, formally.</b> FVC was a [[secondary endpoint]]. The trial was not designed or powered to prove an effect on it, and the paper reports within-arm changes with confidence intervals rather than a pre-specified test against placebo; the authors themselves describe a "trend". The intervals for the 60 mg and placebo arms overlap substantially.</p>
<p><b>Durability.</b> IPF is measured in years. Twelve weeks cannot tell you whether an early bump in FVC lasts, fades or reverses. Several patients in each arm improve or worsen over three months just from measurement noise and the natural wobble of the disease.</p>
<p><b>Fair comparison.</b> With 17 or 18 patients per arm, randomization cannot guarantee the arms start alike, and here they did not. The placebo arm started with noticeably worse lungs: mean FVC of 2,246 mL (66.5% of predicted) versus 2,762 mL (78.5%) in the 60 mg arm. This [[baseline imbalance]] could bias the comparison in either direction. Background drugs were uneven too: half of the 60 mg arm took nintedanib, versus 18% of placebo patients.</p>
<p><b>Missing data.</b> Six of 18 patients in the 60 mg arm stopped treatment early, mostly because of side effects, and 22 of the 71 patients had no week-12 FVC measurement. The analysis imputed missing values assuming they were missing at random; if the patients who dropped out were doing worse, that assumption flatters the drug.</p>
<p><b>Subgroups.</b> Patients on 60 mg who were not taking other antifibrotics gained 187.8 mL; those taking nintedanib or pirfenidone showed no significant change. That is interesting and possibly important (a drug interaction, or simply different patients), but it is a [[subgroup analysis]] of a handful of people. The main commercial market is patients already on background therapy, so this is the question phase 3 must answer.</p>
<p><b>Rare events.</b> Three patients on 60 mg had an [[acute exacerbation]] of IPF and were hospitalized for an average of 23 days, versus one on placebo who was not hospitalized. Three versus one could easily be chance. It could also be a signal; the authors raise the possibility that dampening immune signaling might increase infection-triggered flares. Only a larger, longer trial can tell.</p>
<p><b>Generalizability.</b> Every patient was Chinese and 90% were men. Regulators elsewhere will ask whether results apply to their populations.</p>
<p><b>Who ran it.</b> Insilico sponsored the trial, and its employees helped design it, interpret it and write the paper; the first author, a physician at Peking Union Medical College Hospital, and the senior author, Zhavoronkov, vouched for the completeness of the data. That is normal for industry trials, and the journal's peer review is a real check. It is also why independent replication matters.</p>`},

    {type: 'custom', title: 'How often does luck look like a drug? A small-trial simulator', tocTitle: 'Small-trial simulator', intro: 'A toy model, not a reanalysis of GENESIS-IPF. It runs 2,000 imaginary 12-week trials. Each patient\'s FVC change is drawn from a normal distribution with a standard deviation of 180 mL, roughly what the confidence intervals in the paper imply. Set the true effect of the drug (you can make it zero), the number of patients per arm and the number of dose arms. The simulator reports the best dose arm\'s difference from placebo, as a press release would.',
      html: `<div class="explorer">
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px">
          <button class="btn" data-preset="null">Preset: drug does nothing, GENESIS-IPF size</button>
          <button class="btn" data-preset="modest">Preset: modest real effect (60 mL)</button>
          <button class="btn" data-preset="big">Preset: same, but 150 patients per arm</button></div>
        <label><span>True drug effect vs placebo</span><input type="range" min="0" max="150" step="5" value="0" data-k="eff"><span class="out" data-o="eff"></span></label>
        <label><span>Patients per arm (completing)</span><input type="range" min="10" max="200" step="5" value="15" data-k="n"><span class="out" data-o="n"></span></label>
        <label><span>Number of dose arms</span><input type="range" min="1" max="3" step="1" value="3" data-k="arms"><span class="out" data-o="arms"></span></label>
        <div data-svg style="margin-top:10px"></div>
        <div class="result" data-res></div></div>`,
      init: (root) => {
        const q = s => root.querySelector(s);
        const inputs = [...root.querySelectorAll('input[data-k]')];
        const SD = 180, SIMS = 2000, OBS = 118.7;
        const presets = {null: {eff: 0, n: 15, arms: 3}, modest: {eff: 60, n: 15, arms: 3}, big: {eff: 60, n: 150, arms: 3}};
        root.querySelectorAll('[data-preset]').forEach(b => b.onclick = () => { const p = presets[b.dataset.preset]; inputs.forEach(i => i.value = p[i.dataset.k]); run(); });
        const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
        const run = () => {
          const v = {}; inputs.forEach(i => v[i.dataset.k] = +i.value);
          q('[data-o="eff"]').textContent = '+' + v.eff + ' mL'; q('[data-o="n"]').textContent = v.n; q('[data-o="arms"]').textContent = v.arms;
          const r = rng(v.eff * 7919 + v.n * 31 + v.arms);
          const gauss = () => { let u = 0, w = 0; while (u === 0) u = r(); while (w === 0) w = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * w); };
          const se = SD / Math.sqrt(v.n);
          const best = []; let over100 = 0, overObs = 0, negative = 0;
          for (let i = 0; i < SIMS; i++) {
            const pl = gauss() * se; let b = -1e9;
            for (let a = 0; a < v.arms; a++) {
              // dose arms: the true effect applies fully to the top dose and scales down for lower doses
              const trueA = v.eff * (a + 1) / v.arms;
              const d = trueA + gauss() * se - pl; if (d > b) b = d;
            }
            best.push(b); if (b >= 100) over100++; if (b >= OBS) overObs++; if (b < 0) negative++;
          }
          const lo = -200, hi = 350, bins = 44, bw = (hi - lo) / bins, cnt = new Array(bins).fill(0);
          best.forEach(x => { const k = Math.max(0, Math.min(bins - 1, Math.floor((x - lo) / bw))); cnt[k]++; });
          const W = 860, H = 230, x0 = 50, x1 = W - 20, y0 = 190, h = 150, X = x => x0 + (x1 - x0) * (x - lo) / (hi - lo), mx = Math.max(...cnt, 1);
          let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Histogram of simulated best-arm differences">';
          s += '<text x="' + x0 + '" y="18" class="il-text">Best dose arm minus placebo, in 2,000 simulated trials (mL)</text>';
          cnt.forEach((c, i) => { const bh = h * c / mx, xx = lo + i * bw; s += '<rect x="' + (X(xx) + 1) + '" y="' + (y0 - bh) + '" width="' + ((x1 - x0) / bins - 2) + '" height="' + bh + '" rx="2" class="' + (xx >= 100 ? 'il-2' : 'il-1s') + '"/>'; });
          s += '<line x1="' + x0 + '" x2="' + x1 + '" y1="' + y0 + '" y2="' + y0 + '" class="il-line"/>';
          [-200, -100, 0, 100, 200, 300].forEach(t => s += '<text x="' + X(t) + '" y="' + (y0 + 18) + '" text-anchor="middle" class="il-small">' + (t > 0 ? '+' : '') + t + '</text>');
          s += '<line x1="' + X(OBS) + '" x2="' + X(OBS) + '" y1="' + (y0 - h - 8) + '" y2="' + y0 + '" class="st-7 il-dash" stroke-width="2"/>';
          s += '<text x="' + (X(OBS) + 6) + '" y="' + (y0 - h + 4) + '" class="il-small">GENESIS-IPF 60 mg vs placebo: +118.7</text>';
          s += '<line x1="' + X(v.eff) + '" x2="' + X(v.eff) + '" y1="' + (y0 - h + 20) + '" y2="' + y0 + '" class="st-3" stroke-width="2"/>';
          s += '<text x="' + (X(v.eff) - 6) + '" y="' + (y0 - h + 30) + '" text-anchor="end" class="il-small">true top-dose effect</text>';
          s += '<text x="' + x0 + '" y="' + (H - 6) + '" class="il-small">Orange bars: trials whose best arm beat placebo by 100 mL or more.</text></svg>';
          q('[data-svg]').innerHTML = s;
          const p100 = (over100 / SIMS * 100).toFixed(1), pObs = (overObs / SIMS * 100).toFixed(1);
          let msg = 'In <b>' + p100 + '%</b> of simulated trials the best dose arm beat placebo by at least 100 mL, and in ' + pObs + '% by at least the 118.7 mL seen in GENESIS-IPF.';
          if (v.eff === 0) msg += ' Here the drug does <b>nothing</b>. Small arms plus several doses to choose from make an impressive-looking best arm surprisingly common. That is not evidence rentosertib is inactive; the dose-response pattern and blood markers in the real trial are harder to fake. It is why a single number from a small trial can\'t settle the question.';
          else if (v.n >= 100) msg += ' With large arms, the spread collapses around the true effect: the trial measures the drug instead of the luck. This is what phase 3 buys.';
          else msg += ' Even with a real effect, a small trial can badly overstate or understate it. Early estimates in small trials tend to be too high, because promising results are the ones that get followed up.';
          q('[data-res]').innerHTML = msg;
        };
        inputs.forEach(i => i.oninput = run); run();
      }},

    {type: 'chart', title: 'IPF has seen this movie before', intro: 'Two other IPF drugs produced strong 12-week signals in small phase 2 trials. One was confirmed in phase 3, with a smaller effect. One vanished. Rentosertib\'s phase 3 has only just begun.',
      chart: {kind: 'bar', horizontal: true, labelWidth: 330, title: 'FVC advantage over placebo, early phase 2 vs phase 3', unit: 'mL',
        categories: ['Ziritaxestat, phase 2a FLORA (12 wk, 23 patients)', 'Ziritaxestat, phase 3 ISABELA 2 (52 wk)', 'Nerandomilast, phase 2 (12 wk, no background drug)', 'Nerandomilast, phase 3 FIBRONEER-IPF (52 wk)', 'Rentosertib 60 mg, phase 2a (12 wk, 35 patients)'],
        series: [{name: 'Drug minus placebo FVC change', values: [95, 2.8, 88.4, 68.8, 118.7], notes: ['+25 vs −70 mL', '600 mg; ISABELA 1 was 22.7 mL; both trials stopped early', 'Bayesian median difference', '18 mg twice daily; 1,177 patients', '+98.4 vs −20.3 mL, within-arm means']}],
        note: 'Differences are computed differently across trials (differences of means, model estimates, a Bayesian median) and are only roughly comparable. Rentosertib\'s phase 3 result is not expected before about 2029. Sources: Maher et al., Lancet Respir Med 2018 and JAMA 2023; Richeldi et al., NEJM 2022; FIBRONEER-IPF, NEJM 2025; Xu et al., Nature Medicine 2025.'},
      takeaway: 'Galapagos\' ziritaxestat looked good in 23 patients over 12 weeks and did nothing in 1,306 patients over a year. Boehringer\'s nerandomilast looked good in 147 patients over 12 weeks and was confirmed, at a smaller size, in 1,177 patients. Rentosertib\'s phase 2a is at the promising-but-unproven stage both passed through.'},

    {type: 'decision', title: 'Decision: how to run the next trial?', role: 'You are Insilico\'s leadership, 2025, with the phase 2a paper just published', scenario: `
<p>You have a safety profile, a dose-related FVC signal in 71 Chinese patients, a suggestion that the drug works best without background antifibrotics, and a new competitor (nerandomilast) about to be approved. You have strong relationships with Chinese hospitals and regulators, a smaller US phase 2a still enrolling, and an IPO coming. What next?</p>`,
      options: [
        {label: 'Go straight to a large phase 3 in China', outcome: 'Fastest route to a definitive answer and possibly to approval in China, one of the largest IPF populations in the world. Recruitment and costs favor it. The risk: regulators elsewhere may want data in their own populations, so a global approval could need more trials later, and you are skipping a larger phase 2b that would have refined the dose and the background-therapy question.'},
        {label: 'Run a global phase 2b first, including the US and Europe', outcome: 'The textbook move after a small phase 2a: a few hundred patients for six months to a year, testing doses on top of standard care, before betting on phase 3. It reduces the risk of a failed phase 3 and builds data regulators everywhere will accept. It also costs two or three more years, and gives competitors time.'},
        {label: 'License it to a big pharma partner and let them run phase 3', outcome: 'Big pharma has global trial infrastructure and would pay upfront cash. But partners would discount the drug heavily for the thin data, and giving away the flagship would undercut the story that an AI company can take its own discoveries all the way.'},
      ],
      reality: `<p>Insilico went to phase 3 in China. It announced the start of GENESIS-IPF-3 in July 2026 and dosed the first patient on 9 September 2026: 320 patients at 47 Chinese centers, once-daily oral rentosertib versus placebo for 52 weeks, with the annual rate of FVC decline as the primary endpoint and time to disease progression as the key secondary endpoint. The registry lists primary completion in October 2029. In parallel, an inhaled version cleared China\'s IND review in April 2026, and the US phase 2a (NCT05975983) was still listed as recruiting at its last update. Whether a China-only phase 3 is enough for regulators elsewhere is one of the things to watch.</p>`},

    {type: 'callout', variant: 'numbers', heading: 'Rentosertib by the numbers (as of September 2026)', html: `
<ul>
<li><b>~18 months, 78 molecules:</b> target discovery to preclinical candidate, by Insilico's account.</li>
<li><b>&lt;30 months:</b> target discovery to completing phase 0 and phase 1, by Insilico's account.</li>
<li><b>78 + 48:</b> healthy volunteers in the New Zealand and China phase 1 trials.</li>
<li><b>71 patients, 12 weeks:</b> GENESIS-IPF phase 2a; 18 on the 60 mg dose.</li>
<li><b>+98.4 mL vs −20.3 mL:</b> mean FVC change, 60 mg vs placebo (secondary endpoint).</li>
<li><b>6 of 18:</b> patients in the 60 mg arm who stopped treatment early.</li>
<li><b>320 patients, 52 weeks, 47 centers:</b> GENESIS-IPF-3, first patient dosed 9 September 2026.</li>
<li><b>October 2029:</b> listed primary completion date for phase 3.</li>
</ul>`},

    // ============================================================ THE FIELD
    {type: 'story', kicker: 'The wider field', title: 'Six years of AI drugs in the clinic: a sober scorecard', tocTitle: 'The wider field', html: `
<p>Rentosertib is not the only test. The field is best judged by its whole record, including the parts companies stop talking about.</p>
<h3>Exscientia: first in, first out</h3>
<p>In January 2020, the British company Exscientia and its Japanese partner Sumitomo Dainippon Pharma announced that DSP-1181, a molecule for obsessive-compulsive disorder, was entering phase 1 in Japan. It was widely reported as the first AI-designed drug to be tested in people, and the companies said its exploratory research had taken about 12 months rather than the usual four to five years. The target, a serotonin receptor, was well known; AI's role was to design a better molecule faster. In 2022, the compound was discontinued after phase 1. Exscientia's cancer drug EXS-21546 also ended early. In August 2024 Exscientia agreed to combine with Recursion, and the deal closed on 20 November 2024.</p>
<h3>Recursion: industrial biology, painful pruning</h3>
<p>Recursion, based in Salt Lake City, takes a different approach: [[phenotypic screening]] at massive scale, photographing millions of cells after genetic or chemical changes and using machine learning to map which interventions reverse disease-like appearances. Several of its early clinical programs used existing or in-licensed molecules that its maps suggested for rare diseases. In May 2025 it discontinued, or sought partners for, three of them (REC-994 for cerebral cavernous malformation, REC-2282 for NF2 and REC-3964 for C. difficile infection), and in June 2025 it cut about 20% of its workforce. It reported a net loss of $644.8 million for 2025. It also reported its best result: in familial adenomatous polyposis, a hereditary condition that carpets the colon with polyps, REC-4881 (a MEK inhibitor its platform flagged) reduced median polyp burden by 43% in an early phase 2 study. Najat Khan, previously head of data science at Johnson &amp; Johnson's drug unit, became CEO in January 2026, and in August 2026 Genentech exercised its first option on a neuroscience target from their collaboration.</p>
<h3>BenevolentAI: a brilliant insight, then a hard landing</h3>
<p>In February 2020, days into the pandemic, BenevolentAI researchers used their knowledge graph to propose in <i>The Lancet</i> that [[baricitinib]], Eli Lilly's rheumatoid arthritis drug, might both calm the immune overreaction and block viral entry in COVID-19. It was a genuine [[drug repurposing]] success: randomized trials followed, and in the RECOVERY trial of 8,156 hospitalized patients, baricitinib cut deaths by 13%. It became an authorized and then approved COVID-19 treatment in the US. But Lilly owned the drug, and repurposing does not prove the ability to invent new medicines. BenevolentAI's own lead drug, BEN-2293 for eczema, missed its efficacy goals in April 2023; the company cut up to 180 jobs and, in March 2025, merged into a private holding company and delisted from Euronext Amsterdam.</p>
<h3>AlphaFold and Isomorphic: the science prize and the business bet</h3>
<p>The most celebrated AI achievement in biology is not a drug. [[AlphaFold]], from Google DeepMind, predicts a protein's 3D shape from its sequence with accuracy often competitive with experiments; its 2021 paper in <i>Nature</i> described a solution to a 50-year-old problem. AlphaFold 3, in 2024, extended the approach to how proteins bind DNA, RNA and small molecules. In October 2024 Demis Hassabis and John Jumper shared the Nobel Prize in Chemistry with David Baker, who designs new proteins computationally. Isomorphic Labs, the Alphabet company Hassabis founded in 2021 to turn this into drugs, has partnerships with Eli Lilly, Novartis (expanded in 2025) and Johnson &amp; Johnson (2026), raised $600 million in 2025 and $2.1 billion in May 2026. As of September 2026 it had not publicly reported results from any drug in human trials. Knowing a protein's shape is enormously useful for designing molecules. It does not tell you whether blocking that protein will help a patient.</p>
<h3>Physics first: Schrödinger and Relay</h3>
<p>Not all computational drug discovery is machine learning. Schrödinger has sold physics-based molecular simulation software for decades; its [[free energy perturbation]] method, FEP+, estimates binding strength in hours, and the company says its error approaches that of a lab experiment. A TYK2 inhibitor for psoriasis designed by Nimbus Therapeutics, a Schrödinger collaborator, was bought by Takeda (the deal closed in February 2023) and, as zasocitinib, was in late-stage trials in 2026. Schrödinger's own record is mixed: in August 2025 it stopped its CDC7 inhibitor after two deaths in which the drug was considered a contributing factor, and it now plans to partner its clinical programs. Relay Therapeutics combines simulations of how proteins move with experiments; its breast cancer drug zovegalisib entered a phase 3 trial in 2025 and received FDA breakthrough therapy designation in February 2026. These companies make a useful point: computation has been improving drug design for decades, and its best-documented successes are in making better molecules for targets we already understand.</p>
<h3>The only systematic scorecard</h3>
<p>In 2024, Madura KP Jayatunga and colleagues published the first analysis of the clinical record of molecules from more than 100 "AI-native" biotech companies since 2015. Of 24 AI-discovered molecules with completed phase 1 trials, 21 succeeded (about 87%), substantially above historical industry averages (52% in the BIO data used earlier). Of 10 with phase 2 results, 4 succeeded (40%), in line with the industry. Their reading: AI appears good at designing molecules with drug-like properties, which is what phase 1 tests; it is too early to say whether it picks better targets, which is what phase 2 tests. The samples are tiny, about half the programs were in oncology, and "AI-discovered" covered everything from AI-designed molecules to repurposed drugs. Treat it as a first reading, not a verdict.</p>`},

    {type: 'table', title: 'Scorecard: notable AI-first and computation-first programs', intro: 'Status as of September 2026, from company filings, press releases and trial registries. "What computation did" is as described by the companies.',
      columns: ['Program', 'Company', 'What computation did', 'Furthest stage', 'Status (Sept 2026)'],
      rows: [
        ['<b>Rentosertib</b> (TNIK), IPF', 'Insilico', 'AI-ranked target + generative chemistry', '[[phase 3]]', 'Phase 3 (320 patients, China) dosed first patient Sept 2026; primary completion listed Oct 2029'],
        ['DSP-1181 (5-HT1A), OCD', 'Exscientia / Sumitomo Dainippon', 'AI-assisted design against a known target', 'Phase 1 (2020)', 'Discontinued 2022'],
        ['Baricitinib for COVID-19', 'BenevolentAI (hypothesis); Eli Lilly (drug)', 'Knowledge-graph [[drug repurposing]]', 'Approved (COVID-19)', 'Success: 13% fewer deaths in RECOVERY; the drug was already approved for arthritis'],
        ['BEN-2293 (pan-Trk), eczema', 'BenevolentAI', 'AI-supported target', 'Phase 2a', 'Missed efficacy endpoints, Apr 2023; company delisted Mar 2025'],
        ['REC-994, REC-2282, REC-3964', 'Recursion', '[[phenotypic screening|Phenotypic screening]] maps (existing molecules)', 'Phase 2', 'Discontinued or offered for partnering, May 2025'],
        ['REC-4881 (MEK1/2), FAP', 'Recursion', 'Phenotypic screening insight', 'Phase 2', '43% median polyp-burden reduction in early data (2025); discussing path with FDA'],
        ['Zasocitinib (TYK2), psoriasis', 'Nimbus, now Takeda', 'Physics-based design (Schrödinger software)', 'Late-stage trials', 'Not yet approved'],
        ['SGR-2921 (CDC7), leukemia', 'Schrödinger', 'Physics-based design', 'Phase 1', 'Discontinued Aug 2025 after two deaths'],
        ['Zovegalisib (PI3Kα), breast cancer', 'Relay Therapeutics', 'Protein-motion simulation + experiment', 'Phase 3', 'Phase 3 since 2025; FDA breakthrough designation Feb 2026'],
        ['Isomorphic Labs pipeline', 'Isomorphic Labs', 'AlphaFold-derived design models', 'Preclinical (disclosed)', 'No human-trial results publicly reported; $2.1B raised May 2026'],
      ],
      caption: 'Not a complete list, and success here means advancing, not approval. As of September 2026, no drug whose target and molecule were both discovered by AI had been approved anywhere.'},

    {type: 'chart', title: 'Are AI-discovered molecules more likely to succeed?', intro: 'The one systematic analysis so far, set against the broad industry benchmark used throughout this case.',
      chart: {kind: 'bar', title: 'Phase success rates: AI-discovered molecules vs industry', unit: '%', categories: ['Phase 1', 'Phase 2'],
        series: [{name: 'AI-discovered molecules (Jayatunga et al. 2024)', values: [87.5, 40], notes: ['21 of 24', '4 of 10']}, {name: 'All drugs, 2011–2020 (BIO/Informa/QLS)', values: [52.0, 28.9]}],
        note: 'Different sources, definitions and time periods; the AI samples are very small (24 and 10 molecules). Jayatunga and colleagues described the phase 1 rate as substantially higher than historical averages and the phase 2 rate as comparable to them.'},
      takeaway: 'The phase 1 gap is the strongest evidence yet that AI helps design molecules the body tolerates and handles well. Phase 2, where biology is tested, shows no clear advantage so far, on a sample of ten.'},

    // ============================================================ WHAT AI CHANGES
    {type: 'story', kicker: 'The core lesson', title: 'What AI changes, and what it doesn\'t (yet)', tocTitle: 'What AI changes', html: `
<p>Put the rentosertib story and the field's record together and a fairly clear picture emerges.</p>
<h3>What AI demonstrably speeds up</h3>
<p><b>Hit finding and molecule design.</b> Generative models and fast virtual screening can propose and filter enormous numbers of candidate molecules, so chemists make fewer. Insilico's 60 to 200 molecules per candidate, if representative, is a real productivity gain over programs that make thousands. <b>Design cycles.</b> Better predictions of potency, selectivity and [[ADME]] mean fewer rounds of the design-make-test-learn loop. <b>Some prediction.</b> Structure prediction (AlphaFold), binding estimates (physics-based methods), and property prediction have become routine tools in most large pharma companies. The phase 1 numbers suggest these molecules are, on average, well made.</p>
<h3>What it has not changed yet</h3>
<p><b>Biological uncertainty.</b> Whether hitting a target helps human patients is the question that sinks most drugs, and AI's record there is too short to judge. <b>Clinical trial duration.</b> A year-long IPF trial takes a year. Recruitment, follow-up and the pace of disease set the calendar. AI can help pick sites, find patients and design smarter trials at the margins, but a 52-week endpoint does not compress. <b>Regulatory evidence.</b> Regulators approve drugs on randomized trial data in people, not on how the drug was found. No part of the approval standard changes because a model designed the molecule. <b>Safety.</b> Rentosertib's liver and gut side effects, and DSP-1181's and SGR-2921's fates, are reminders that toxicity is still mostly discovered in animals and people.</p>
<h3>The data problem</h3>
<p>Large language models learned from trillions of words of text. Biology has nothing comparable. The Protein Data Bank that trained AlphaFold held structures for only about 100,000 unique proteins, and it was one of biology's best datasets. Most biological data are sparse (measured on few patients or compounds), noisy (the same experiment in two labs can disagree), biased (studied genes get studied more, which is why target-ranking tools must correct for popularity), and rarely include the most valuable label of all: what happened when a drug hitting this target was given to people. Failures, the most informative data, mostly sit unpublished inside companies. That is why AI companies like Recursion and Insilico build their own automated labs to generate data, and why pharma partners value proprietary datasets as much as algorithms.</p>
<h3>Why target discovery is the prize, and the hardest part</h3>
<p>The explorer earlier made the point in numbers: raising phase 2 success, which mostly means choosing better targets, cuts the cost of every approved drug because fewer projects fail downstream. Human genetics shows it can be done. A 2024 analysis by Eric Minikel and colleagues found that drug mechanisms supported by human genetic evidence were 2.6 times more likely to succeed than those without. That is the kind of prior AI target discovery must beat, and the reason target discovery is the highest-value claim an AI company can make. It is also the hardest to prove, because the proof arrives only with phase 2 and 3 results, years later, one drug at a time. Rentosertib is the most advanced test of an AI-nominated target. One success would be a strong data point; one failure would not disprove the approach. The field needs dozens.</p>
<h3>Faster, cheaper, better?</h3>
<p><b>Faster:</b> yes for discovery, with a plausible saving of two to three years per program; not yet for development, which is most of the calendar. <b>Cheaper:</b> probably, per candidate, because fewer molecules and fewer cycles cost less, and the savings multiply across failed projects. But the platforms themselves are expensive, as Recursion's losses show. <b>Better:</b> the molecules look better behaved in phase 1. Whether the targets are better, the only improvement that would bend Eroom's law, is unknown. The answer will arrive at clinical speed.</p>`},

    {type: 'callout', variant: 'product', heading: 'Platform or product? The biotech version of an old debate', html: `
<p>AI drug companies pitch themselves as platforms: a reusable engine that turns out drug after drug, like a software platform that spawns many apps. Investors reward platforms with higher valuations because the value compounds. Insilico sells its software, licenses its molecules and develops its own drugs; Recursion talks about an "operating system" for biology.</p>
<p><b>Where the analogy breaks:</b> a software platform proves itself when third-party apps succeed, quickly and visibly. A drug platform proves itself only when its drugs pass phase 3, and each proof costs hundreds of millions of dollars and most of a decade. Until then, the market is valuing a promise, and the best metrics available (candidates nominated, deals signed, molecules per program) are the equivalent of counting features shipped rather than revenue. The mRNA platform behind Comirnaty and Spikevax earned "platform" status only after approved products. AI discovery has not yet had that moment.</p>`},

    // ============================================================ PRESS RELEASE
    {type: 'custom', title: 'Read the press release', tocTitle: 'Read the press release', intro: 'Below is a composite press release written for this exercise, modeled on the kinds of sentences AI drug companies publish; some lines paraphrase real facts from this case. For each sentence, decide: is it solid evidence, a claim that needs a question, or a red flag? Then check your answers.',
      html: `<div class="card"><div style="font:600 13px var(--sans);letter-spacing:.06em;text-transform:uppercase;opacity:.7;margin-bottom:6px">Fictional composite press release</div><div data-list></div>
        <div style="display:flex;gap:10px;align-items:center;margin-top:14px"><button class="btn primary" data-check>Check my answers</button><button class="btn" data-reset>Reset</button><span data-score style="font-weight:650"></span></div></div>`,
      init: (root, api) => {
        const items = [
          {s: '"Our AI platform discovered a novel target and designed a first-in-class drug in just 18 months."', a: 'q', why: 'Needs questions. Which steps were counted (discovery only, not development)? Which choices did humans make? Is the target novel to biology or only to this disease (TNIK was known from cancer research)? Is this one showcase program or the average?'},
          {s: '"At the highest dose, lung function improved by 98 mL, versus a 20 mL decline on placebo."', a: 'e', why: 'Solid evidence of an observed result, published and peer reviewed, but read the fine print: 18 vs 17 patients, a secondary endpoint, overlapping confidence intervals, and the lower doses did not show the effect.'},
          {s: '"The drug was safe and well tolerated."', a: 'q', why: 'Needs a question. Compared with what, and at which dose? In GENESIS-IPF, treatment-related side effects rose from 29% on placebo to 78% at 60 mg, and about a quarter of patients in the 30 mg twice-daily and 60 mg arms stopped because of side effects, several with liver problems.'},
          {s: '"Our partnership is worth up to $2.75 billion."', a: 'r', why: 'Red flag if read at face value. "Up to" values add every possible milestone, most of which are only paid if drugs succeed years from now. Ask for the upfront cash: in Insilico\'s 2026 deal with Eli Lilly, it was $115 million of the $2.75 billion headline.'},
          {s: '"The results were published in a leading peer-reviewed journal."', a: 'q', why: 'Peer review is a real check on methods and reporting, but it is not independent replication, and it says nothing about whether the effect will hold in phase 3. Note who sponsored and co-authored the paper.'},
          {s: '"This result validates our AI platform."', a: 'r', why: 'Red flag. One small phase 2a signal cannot validate a platform. Platform claims need base rates across many programs: how many candidates entered the clinic, and how many passed each phase compared with industry averages?'},
          {s: '"Generative AI cut our discovery costs by 90%."', a: 'r', why: 'Red flag without context. Compared with what baseline, which costs (does it include building the platform?), across how many programs? Discovery is also only part of total R&D cost.'},
          {s: '"A 320-patient, 52-week phase 3 trial with FVC decline as the primary endpoint has begun."', a: 'e', why: 'Solid evidence: a concrete, checkable fact, registered on ClinicalTrials.gov (NCT07687459) and in China\'s registry. This is the trial that will actually answer the question.'},
          {s: '"Our drug reverses fibrosis."', a: 'r', why: 'Red flag. A 12-week FVC increase in a small group is not reversal of scarring. That would need imaging or tissue evidence and durable functional improvement over a year or more, none of which has been shown.'},
        ];
        const labels = {e: 'Solid evidence', q: 'Needs a question', r: 'Red flag'};
        const list = root.querySelector('[data-list]'), ans = {};
        const draw = checked => {
          list.innerHTML = items.map((it, i) => {
            const pick = ans[i], ok = checked && pick === it.a;
            const b = k => '<button class="btn" data-i="' + i + '" data-k="' + k + '" style="padding:3px 10px;font-size:13px;' + (pick === k ? 'background:var(--ink);color:var(--paper);border-color:var(--ink)' : '') + '">' + labels[k] + '</button>';
            return '<div style="padding:10px 0;border-bottom:1px solid var(--rule-2)"><div style="font:400 16px/1.5 var(--serif);margin-bottom:6px">' + (i + 1) + '. ' + api.terms(it.s) + '</div><div style="display:flex;gap:6px;flex-wrap:wrap">' + b('e') + b('q') + b('r') + '</div>' +
              (checked ? '<div style="margin-top:6px;font-size:15px;line-height:1.5"><b style="color:' + (ok ? 'var(--good)' : 'var(--bad)') + '">' + (pick == null ? 'Not answered. Suggested: ' + labels[it.a] + '.' : ok ? 'Agreed.' : 'Suggested: ' + labels[it.a] + '.') + '</b> ' + api.terms(it.why) + '</div>' : '') + '</div>';
          }).join('');
        };
        list.addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (!b) return; ans[b.dataset.i] = b.dataset.k; draw(false); root.querySelector('[data-score]').textContent = ''; });
        root.querySelector('[data-check]').onclick = () => { draw(true); const n = items.filter((it, i) => ans[i] === it.a).length; root.querySelector('[data-score]').textContent = n + ' of ' + items.length + ' match the suggested reading'; };
        root.querySelector('[data-reset]').onclick = () => { Object.keys(ans).forEach(k => delete ans[k]); draw(false); root.querySelector('[data-score]').textContent = ''; };
        draw(false);
      }},

    {type: 'decision', title: 'Decision: what evidence do you ask for?', role: 'You are head of business development at a large pharma company, 2026', scenario: `
<p>An AI drug discovery company offers a partnership: it will use its platform to find drug candidates against three hard targets your own chemists have struggled with. It wants a sizable upfront payment and milestones worth, in the headline number, well over a billion dollars. Your CEO wants an AI story. Your head of chemistry is skeptical. What do you insist on before signing?</p>`,
      options: [
        {label: 'Platform metrics: cycle times, molecules per candidate, candidates nominated per year', outcome: 'Useful and easy to get, but these are the company\'s own productivity metrics, measured on programs it chose. They show the engine runs fast; they do not show it produces drugs that work. On its own this is the equivalent of judging a vendor by its sprint velocity.'},
        {label: 'A prospective test on your targets: a paid pilot with pre-agreed success criteria before the big deal', outcome: 'The strongest evidence available before clinical data: can the platform deliver molecules against your hard targets, judged by your assays, against goals set in advance? It costs time and some money, and the best companies may refuse to be "tested". But it converts marketing claims into data you trust.'},
        {label: 'Its clinical track record: every molecule that entered trials and what happened in each phase', outcome: 'The right long-term question, and the only one that speaks to efficacy. The problem is sample size: even the most advanced AI companies have a handful of phase 2 readouts, so the answer will be noisy. Still, a company that won\'t disclose its failures is telling you something.'},
        {label: 'Sign quickly: the downside is small and competitors are signing similar deals', outcome: 'Fear of missing out is a real force in pharma dealmaking, and for a large company the upfront payment may be modest. But herd behavior is how whole fields get overvalued, and a bad partnership also costs your scientists\' time and attention.'},
      ],
      reality: `<p>In practice, large pharma companies have structured most AI partnerships as options: modest upfront payments, with most of the headline value tied to milestones that pay only if programs advance. Insilico\'s 2026 deal with Eli Lilly had a $2.75 billion headline and $115 million upfront. Isomorphic\'s collaboration with Novartis started in January 2024 with three targets and was expanded after a year of work, which is roughly what a pilot-then-scale approach looks like. The experienced move combines the second and third options: pay for proof on your own problems, and read the partner\'s full clinical record, failures included.</p>`},

    {type: 'callout', variant: 'whatif', heading: 'What if the phase 3 fails?', html: `
<p>Suppose GENESIS-IPF-3 reads out around 2029 and rentosertib does not slow FVC decline more than placebo. Headlines would call it a failure of AI drug discovery. That would be the wrong lesson. A failure would most likely mean the target hypothesis (that TNIK inhibition slows human IPF) was wrong, or the dose, patients or duration were wrong, which is how about four in ten phase 3 programs end (57.8% succeed in the BIO data), regardless of how the drug was discovered. The molecule itself would still have been designed quickly and cheaply and behaved well in phase 1.</p>
<p>The fair question would be whether the AI's target ranking did better than chance across many programs, not whether one bet paid off. The same logic applies in reverse: a phase 3 success would be a landmark, the first drug with an AI-nominated target to prove itself, but one success would not show that AI picks targets better on average. Judging a platform by its flagship is like judging a venture fund by a single company.</p>`},

    // ============================================================ WHAT TO WATCH
    {type: 'story', kicker: 'What to watch', title: 'Signals to follow, 2026–2030', tocTitle: 'What to watch', html: `
<p>This case will be rewritten as results arrive. Here is what would genuinely change the picture, and why.</p>
<ul>
<li><b>GENESIS-IPF-3 (primary completion listed for October 2029).</b> The decisive test of rentosertib and of an AI-nominated target. Watch the effect on annual FVC decline in patients already taking nintedanib or pirfenidone, the rate of acute exacerbations, and liver safety over a full year.</li>
<li><b>The US phase 2a (NCT05975983).</b> Results in a non-Chinese population, and any sign of an FDA-agreed path. A China-only phase 3 may lead to approval in China first.</li>
<li><b>The inhaled formulation.</b> Delivering the drug directly to the lung could reduce gut and liver side effects. It entered clinical testing in China in 2026.</li>
<li><b>Insilico's second wave.</b> The company reported ten IND-cleared candidates and seven in clinical development at its listing. Its phase 2 success rate across several programs, not rentosertib alone, is the real test of the platform.</li>
<li><b>The first clinical data from Isomorphic Labs</b>, and whether AlphaFold-derived design translates into better clinical outcomes, not just better molecules.</li>
<li><b>Recursion's REC-4881 registration path</b> and its first programs from wholly new targets found in its maps.</li>
<li><b>Late-stage readouts from computation-first molecules:</b> Relay's zovegalisib phase 3 and Takeda's zasocitinib. These test whether computational design yields drugs that beat existing treatments, not just drugs that work.</li>
<li><b>Updated scorecards.</b> A repeat of the Jayatunga-style analysis with dozens of phase 2 and phase 3 readouts would be the best single answer to "is AI making drugs better?"</li>
</ul>
<p>A useful habit for anyone entering the field: for every AI drug headline, ask which stage of the pipeline the claim concerns, and whether that stage is where drugs actually fail.</p>`},

    {type: 'callout', variant: 'lesson', heading: 'The one idea to keep', html: `<p>AI has made the fast part of drug discovery faster. The slow, expensive part is learning whether a target helps patients, and that still happens in randomized trials, at the speed of disease. The big prize is not quicker molecules but better choices of what to target, and the evidence for that arrives one phase 3 at a time.</p>`},

    // ============================================================ QUIZ
    {type: 'quiz', title: 'Check yourself', questions: [
      {q: 'According to a widely cited review of clinical failures from 2010 to 2017, what is the most common reason drugs fail in clinical trials?', options: ['Lack of efficacy: the drug does not help patients enough', 'Poor drug-like properties such as absorption and metabolism', 'Manufacturing problems', 'Regulators rejecting good drugs'], answer: 0, explain: 'Lack of efficacy accounts for roughly 40–50% of clinical failures and toxicity about 30%. Poor drug-like properties, the area AI design most directly improves, account for 10–15%, down from 30–40% in the 1990s.'},
      {q: 'A startup claims its AI makes discovery three times faster. In a typical drug program, what is the main effect on the timeline of a successful drug?', options: ['It saves a few years, but most of the timeline is clinical development, which is unchanged', 'It cuts total development time by about two-thirds', 'It has no effect, because discovery takes only weeks', 'It doubles the chance of approval'], answer: 0, explain: 'Discovery is roughly 4–5 years of a 15-plus-year journey. Making it three times faster saves about three years, which is valuable, but the roughly 10 years of clinical development and review are untouched, and the odds of success do not change.'},
      {q: 'What was the primary endpoint of the GENESIS-IPF phase 2a trial?', options: ['The share of patients with any treatment-emergent adverse event', 'Change in FVC at 12 weeks', 'Survival at one year', 'Time to acute exacerbation'], answer: 0, explain: 'The trial was designed and sized to assess safety. FVC was a secondary endpoint, which is why the FVC result is a signal to test, not a proof.'},
      {q: 'In GENESIS-IPF, the placebo arm started with notably lower lung function than the 60 mg arm. Why does this matter?', options: ['Baseline imbalances in small trials can distort comparisons, in either direction', 'It proves the randomization was rigged', 'It makes no difference because each arm is compared with its own baseline', 'It means the drug must work even better than reported'], answer: 0, explain: 'With 17–18 patients per arm, chance differences at baseline are common. Patients with different starting lungs may change differently over 12 weeks, so the comparison is less clean. Nothing suggests the randomization was improper.'},
      {q: 'Why is target discovery considered the highest-value application of AI in drug discovery?', options: ['Choosing better targets would raise phase 2 success, which reduces the cost of every approved drug and is where most programs fail', 'Targets are the most expensive part of the pipeline to find', 'Regulators require AI-discovered targets', 'Target discovery takes the most calendar time'], answer: 0, explain: 'Target choice costs little money up front but determines whether the drug can work at all, which is tested years later. Improving it changes the odds at the most expensive, failure-prone stages.'},
      {q: 'The 2024 analysis by Jayatunga and colleagues found AI-discovered molecules succeeded in phase 1 about 87% of the time and in phase 2 about 40%. What is the most reasonable reading?', options: ['AI seems good at designing well-behaved molecules; there is not yet evidence it picks better targets', 'AI drugs are twice as likely to be approved', 'AI drugs are less safe than traditional drugs', 'The phase 2 rate proves AI does not work'], answer: 0, explain: 'Phase 1 mainly tests safety and drug behavior, where AI molecules did well. Phase 2 tests whether the biology works; 4 of 10 is in line with industry and far too small a sample to conclude much either way.'},
      {q: 'An AI company announces a partnership "worth up to $2.75 billion". What should you ask first?', options: ['How much is paid up front, and what milestones trigger the rest?', 'Which AI model was used?', 'How many employees the company has', 'Whether the partner is based in the US'], answer: 0, explain: 'Headline deal values sum all possible milestones, most of which depend on future success. The upfront payment (here $115 million) shows what the partner is willing to pay today.'},
      {q: 'Galapagos\' ziritaxestat showed a strong FVC signal in a 23-patient, 12-week trial and then failed in phase 3. What does this tell you about rentosertib?', options: ['Early IPF signals in small, short trials often do not hold up, so rentosertib\'s result needs phase 3 confirmation', 'Rentosertib will fail too', 'Rentosertib is proven because its signal was larger', 'IPF trials cannot be trusted at any size'], answer: 0, explain: 'It is a base-rate lesson, not a prediction. Nerandomilast\'s early signal was confirmed, ziritaxestat\'s was not. Small early trials are scouting trips.'},
      {q: 'Which of these is the strongest evidence that an AI drug discovery platform works?', options: ['A higher-than-average phase 2 and phase 3 success rate across many of its programs', 'A record-fast time to preclinical candidate for one program', 'A large funding round from well-known investors', 'Publication of its flagship trial in a top journal'], answer: 0, explain: 'Speed, funding and publications are all real but indirect. What would bend Eroom\'s law is more drugs working in patients per program started, which requires many clinical readouts.'},
    ]},

    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'Speed up the bottleneck, not the easy part', text: 'Most of a drug\'s time and failure sit in clinical development, where the biological hypothesis is finally tested. Tools that accelerate discovery are valuable but cannot fix a wrong target. Late failures are where the real money is lost.', links: ['torcetrapib', 'epacadostat']},
      {title: 'Small early trials are scouting trips', text: 'A 12-week phase 2a with 17–18 patients per arm can suggest a dose and a direction. It cannot prove efficacy, and early effects in small trials tend to shrink or vanish. Randomized, adequately sized confirmation is non-negotiable.', links: ['epacadostat', 'aduhelm']},
      {title: 'The target is the bet', text: 'Drugs succeed when the target truly drives the human disease, and genetics is the best-known way to raise those odds. Rentosertib is a test of whether AI can nominate targets as well as genetics or better.', links: ['repatha', 'gleevec', 'torcetrapib']},
      {title: 'Platforms earn the name one approved product at a time', text: 'Investors pay for platforms, but a drug platform is only proven when products built on it succeed in phase 3 and reach patients. Count approvals and phase transitions, not deals and candidates.', links: ['comirnaty', 'spinraza', 'kymriah']},
      {title: 'Read claims by what they count', text: 'Timelines that measure only discovery, costs that exclude the platform, deal values that include every contingent milestone, and "safe and well tolerated" without dropout rates are all technically true and potentially misleading.', links: ['aduhelm', 'vioxx']},
      {title: 'Safety is still discovered in people', text: 'However well a molecule is designed, liver, gut and rare-event risks emerge in animals and patients. Rentosertib\'s liver signals and exacerbations will be watched closely in phase 3.', links: ['tgn1412', 'vioxx']},
    ]},

    {type: 'sources', title: 'Sources', items: [
      {text: 'Xu Z, Ren F, Wang P, et al. A generative AI-discovered TNIK inhibitor for idiopathic pulmonary fibrosis: a randomized phase 2a trial. Nature Medicine 31:2602–2610 (published 3 June 2025).', url: 'https://doi.org/10.1038/s41591-025-03743-2'},
      {text: 'Ren F, et al. A small-molecule TNIK inhibitor targets fibrosis in preclinical and clinical models. Nature Biotechnology (published online 8 March 2024; issue 2025).', url: 'https://doi.org/10.1038/s41587-024-02143-0'},
      {text: 'ClinicalTrials.gov records: NCT05938920 (GENESIS-IPF, completed, 71 patients); NCT07687459 (phase 3, 320 planned, start 9 Sept 2026, primary completion Oct 2029); NCT05975983 (US phase 2a, recruiting as of Nov 2025 update); NCT05154240 (phase 1, New Zealand, 78 participants). Accessed September 2026.', url: 'https://clinicaltrials.gov/study/NCT07687459'},
      {text: 'Insilico Medicine press releases: phase 3 initiation (7 July 2026); first patient dosed in GENESIS-IPF-3 (9 Sept 2026); inhalation IND clearance (28 April 2026); H1 2026 interim results, including Lilly deal terms (26 Aug 2026).', url: 'https://www.prnewswire.com/news-releases/insilico-medicine-doses-first-patient-in-genesis-ipf-3-the-worlds-first-phase-iii-trial-of-a-generative-ai-driven-innovative-drug-302873749.html'},
      {text: 'Insilico Medicine. Lists on Hong Kong Stock Exchange (30 Dec 2025): HK$2.277B raised; 18 months and 78 molecules for rentosertib; 12–18 months and 60–200 molecules per program, 2021–2024.', url: 'https://www.prnewswire.com/news-releases/insilico-medicine-lists-on-hong-kong-stock-exchange-showing-ai-drug-discovery-momentum-with-2025s-largest-hong-kong-biotech-ipo-302650606.html'},
      {text: 'Insilico Medicine. First drug discovered and designed with generative AI enters phase II trials (27 June 2023): candidate nominated Feb 2021, phase 1 cohorts; FDA orphan drug designation (Feb 2023).', url: 'https://www.eurekalert.org/news-releases/993844'},
      {text: 'Review citing the ~$2.6 million and ~18-month figures for rentosertib discovery (company-reported): Artificial intelligence in small-molecule drug discovery: a critical review. Pharmaceuticals 18:1271 (2025).', url: 'https://doi.org/10.3390/ph18091271'},
      {text: 'Zhavoronkov A, et al. Deep learning enables rapid identification of potent DDR1 kinase inhibitors. Nature Biotechnology (2019); Walters WP, Murcko M. Assessing the impact of generative AI on medicinal chemistry. Nature Biotechnology (2020).', url: 'https://doi.org/10.1038/s41587-019-0224-x'},
      {text: 'Zhavoronkov A, et al. Integration of proteomic aging clocks in a phase 2a clinical trial supports simultaneous geroprotective assessment. Nature Biotechnology (Sept 2026).', url: 'https://doi.org/10.1038/s41587-026-03286-y'},
      {text: 'Mahmoudi T, et al. The kinase TNIK is an essential activator of Wnt target genes. EMBO Journal 28:3329–3340 (2009).'},
      {text: 'BIO, Informa Pharma Intelligence, QLS Advisors. Clinical Development Success Rates 2011–2020 (February 2021).', url: 'https://go.bio.org/rs/490-EHZ-999/images/ClinicalDevelopmentSuccessRates2011_2020.pdf'},
      {text: 'Sertkaya A, et al. Costs of drug development and research and development intensity in the US, 2000–2018. JAMA Network Open 7:e2415445 (2024).', url: 'https://doi.org/10.1001/jamanetworkopen.2024.15445'},
      {text: 'DiMasi JA, Grabowski HG, Hansen RW. Innovation in the pharmaceutical industry: new estimates of R&D costs. Journal of Health Economics (2016).', url: 'https://doi.org/10.1016/j.jhealeco.2016.01.012'},
      {text: 'Wouters OJ, McKee M, Luyten J. Estimated research and development investment needed to bring a new medicine to market, 2009–2018. JAMA (2020).', url: 'https://doi.org/10.1001/jama.2020.1166'},
      {text: 'Scannell JW, Blanckley A, Boldon H, Warrington B. Diagnosing the decline in pharmaceutical R&D efficiency. Nature Reviews Drug Discovery 11:191–200 (2012).', url: 'https://doi.org/10.1038/nrd3681'},
      {text: 'Sun D, Gao W, Hu H, Zhou S. Why 90% of clinical drug development fails and how to improve it? Acta Pharmaceutica Sinica B (2022).', url: 'https://doi.org/10.1016/j.apsb.2022.02.002'},
      {text: 'Jayatunga MKP, Ayers M, Bruens L, Jayanth D, Meier C. How successful are AI-discovered drugs in clinical trials? A first analysis and emerging lessons. Drug Discovery Today (2024).', url: 'https://doi.org/10.1016/j.drudis.2024.104009'},
      {text: 'Minikel EV, Painter JL, Dong CC, Nelson MR. Refining the impact of genetic evidence on clinical success. Nature (2024).', url: 'https://doi.org/10.1038/s41586-024-07316-0'},
      {text: 'Richeldi L, et al. Efficacy and safety of nintedanib in idiopathic pulmonary fibrosis (INPULSIS). NEJM (2014); King TE Jr, et al. A phase 3 trial of pirfenidone in patients with idiopathic pulmonary fibrosis (ASCEND). NEJM (2014). FDA approvals of Esbriet (NDA 022535) and Ofev (NDA 205832), 15 Oct 2014, Drugs@FDA.', url: 'https://europepmc.org/article/MED/24836310'},
      {text: 'Richeldi L, et al. Trial of a preferential phosphodiesterase 4B inhibitor for idiopathic pulmonary fibrosis. NEJM (2022); Nerandomilast in patients with idiopathic pulmonary fibrosis (FIBRONEER-IPF). NEJM (2025); FDA approval of Jascayd (NDA 218764), 7 Oct 2025, Drugs@FDA.', url: 'https://doi.org/10.1056/NEJMoa2201737'},
      {text: 'Maher TM, et al. Safety, tolerability, pharmacokinetics, and pharmacodynamics of GLPG1690 (FLORA): a phase 2a trial. Lancet Respiratory Medicine (2018); Maher TM, et al. Ziritaxestat and lung function in IPF: the ISABELA 1 and 2 randomized clinical trials. JAMA (2023).', url: 'https://doi.org/10.1001/jama.2023.5355'},
      {text: 'Jumper J, et al. Highly accurate protein structure prediction with AlphaFold. Nature (2021); Abramson J, et al. Accurate structure prediction of biomolecular interactions with AlphaFold 3. Nature (2024).', url: 'https://doi.org/10.1038/s41586-021-03819-2'},
      {text: 'The Royal Swedish Academy of Sciences. The Nobel Prize in Chemistry 2024, press release (9 October 2024).', url: 'https://www.nobelprize.org/prizes/chemistry/2024/press-release/'},
      {text: 'Isomorphic Labs: Series B announcement ($2.1 billion, 12 May 2026); partnerships page (Novartis, Eli Lilly, Johnson & Johnson); news page (accessed Sept 2026).', url: 'https://www.isomorphiclabs.com/articles/isomorphic-labs-announces-series-b-investment-round'},
      {text: 'Richardson P, et al. Baricitinib as potential treatment for 2019-nCoV acute respiratory disease. Lancet (2020); RECOVERY Collaborative Group. Baricitinib in patients admitted to hospital with COVID-19 (RECOVERY). Lancet (2022; preprint March 2022).', url: 'https://doi.org/10.1016/S0140-6736(20)30304-4'},
      {text: 'BenevolentAI press releases: BEN-2293 phase IIa topline results (5 April 2023); strategic plan with up to 180 job cuts (25 May 2023); proposed delisting via merger into Osaka Holdings (6 Feb 2025).', url: 'https://www.benevolent.com/news-and-media/press-releases-and-in-media/'},
      {text: 'Recursion Pharmaceuticals SEC filings: Form 8-K on completion of Exscientia transaction (20 Nov 2024); Form 8-K on ~20% workforce reduction (10 June 2025); Form 8-K on CEO transition (4 Nov 2025); Form 10-K for 2025 (25 Feb 2026); Q2 2026 results (5 Aug 2026).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001601830&type=&dateb=&owner=include&count=40'},
      {text: 'Schrödinger, Inc. Form 10-K for 2025 (25 Feb 2026): FEP+, Nimbus/Takeda TYK2 transaction, SGR-2921 discontinuation; Relay Therapeutics Form 10-K for 2025: zovegalisib phase 3 and breakthrough designation, lirafugratinib license to Elevar.', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001490978&type=10-K'},
      {text: 'DSP-1181: 2020 journal news report on the first AI-designed drug entering trials (PMC7194950); review noting its 2022 discontinuation after phase 1 (Int J Mol Sci 2026, PMC13566878).', url: 'https://europepmc.org/article/PMC/PMC7194950'},
      {text: 'Zasocitinib status: Zasocitinib: new frontier in tyrosine kinase 2 inhibition. Skin Therapy Letter (2026); Expert Opinion on Pharmacotherapy review (Aug 2026).', url: 'https://europepmc.org/article/MED/42202148'},
    ]},
  ],
});
