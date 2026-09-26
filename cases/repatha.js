// Repatha (evolocumab), Amgen, and the PCSK9 class. Case file. See GUIDE.md for the contract.
registerCase({
  id: 'repatha', kind: 'success',
  brand: 'Repatha', generic: 'evolocumab', company: 'Amgen',
  tagline: 'Human genetics handed the industry a near-perfect target: people born with a broken [[PCSK9]] gene have very low [[LDL]] and far fewer heart attacks. Amgen built an [[antibody]] that copies them, and it worked. Then insurers refused to pay for it.',
  chips: [['Disease', 'High LDL cholesterol and heart disease'], ['Modality', '[[monoclonal antibody]]'], ['Target', '[[PCSK9]]'], ['Approved', '2015 (EU July, US August)']],
  readingTime: 45,
  stats: [
    {v: '14 mg/dL', l: 'LDL of a healthy 32-year-old woman born with no working PCSK9', n: 'Zhao et al., Am J Hum Genet 2006'},
    {v: '59%', l: 'Extra LDL reduction on top of a statin in FOURIER (median 92 to 30 mg/dL)', n: 'Sabatine et al., NEJM 2017'},
    {v: '$14,100', l: 'US list price per year at launch in 2015; cut 60% to $5,850 in 2018', n: 'ICER 2015; Amgen 2018 10-K'},
    {v: '47%', l: 'Share of new PCSK9 prescriptions that insurers ever approved in the first year', n: 'Navar et al., JAMA Cardiol 2017'},
    {v: '$3.0B', l: 'Repatha worldwide sales in 2025, up 36%, a decade after launch', n: 'Amgen 2025 10-K'},
  ],
  emblem: `<svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="138" class="il-bg"/>
    <rect x="12" y="172" width="276" height="86" rx="10" class="il-8s"/>
    <path d="M14 172 H286 M14 180 H286" class="il-line2" fill="none"/>
    <rect x="94" y="150" width="14" height="58" rx="5" class="il-3"/>
    <path d="M74 132 V150 H128 V132" class="il-none st-3" stroke-width="8" stroke-linecap="round" fill="none"/>
    <circle cx="101" cy="106" r="26" class="il-7"/>
    <circle cx="92" cy="98" r="4" class="il-4"/><circle cx="110" cy="98" r="4" class="il-4"/><circle cx="101" cy="116" r="4" class="il-4"/>
    <path d="M186 118 C186 98 208 92 224 99 C242 106 246 128 232 140 C216 152 188 144 186 118 Z" class="il-2"/>
    <path d="M214 34 V62 M214 62 L194 88 M214 62 L234 88" class="st-1" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="194" cy="92" r="7" class="il-1"/><circle cx="234" cy="92" r="7" class="il-1"/>
  </svg>`,
  facts: {start: 2003, firstHuman: null, approval: 2015, end: null, peakSalesB: 3.0, pivotalN: 27564,
    area: 'cardio', modality: 'antibody', target: 'PCSK9'},
  themes: ['pricing', 'competition', 'surrogate-endpoints'],
  glossary: {
    'PCSK9': 'Proprotein convertase subtilisin/kexin type 9: a protein made mainly by the liver and released into the blood. It latches onto LDL receptors and sends them to be destroyed, so less LDL is cleared from the blood.',
    'LDL receptor': 'A protein on the surface of liver cells (and other cells) that grabs LDL particles from the blood and pulls them inside. Each receptor can make many round trips. More receptors means lower blood LDL.',
    'hepatocyte': 'The main working cell of the liver. Hepatocytes make cholesterol, package it into lipoproteins, and clear LDL from the blood.',
    'statin': 'A class of cheap daily pills (atorvastatin, rosuvastatin and others) that block the liver enzyme HMG-CoA reductase. Starved of its own cholesterol, the liver puts out more LDL receptors and LDL falls.',
    'HMG-CoA reductase': 'The liver enzyme that sets the pace of cholesterol production. Statins block it.',
    'familial hypercholesterolemia': 'An inherited condition, usually caused by a faulty LDL receptor gene, that causes very high LDL from birth and early heart disease. About 1 in 250 people carry one faulty copy.',
    'endosome': 'A small bubble of membrane inside a cell that forms when the cell swallows something from its surface. It works as a sorting station.',
    'lysosome': 'A compartment inside cells filled with digestive enzymes: the cell\'s recycling plant. Proteins sent there are broken down.',
    'gain-of-function': 'A mutation that makes a protein do more of its job, or do it more strongly, than normal.',
    'loss-of-function': 'A mutation that makes a protein do less of its job, or stop working entirely.',
    'nonsense mutation': 'A single-letter DNA change that puts a "stop" signal in the middle of a gene, so the cell makes a truncated, usually useless protein.',
    'compound heterozygote': 'Someone who carries two different broken versions of the same gene, one from each parent, so neither copy works.',
    'allele': 'One version of a gene. You inherit one allele from each parent.',
    'Mendelian randomization': 'Using gene variants people are born with as a natural randomized trial. Because genes are dealt at conception, a variant that lowers LDL shows the effect of lower LDL free of lifestyle confounding.',
    'odds ratio': 'A measure of association: 1.0 means no difference, 0.81 means about 19% lower odds, 1.11 means 11% higher odds.',
    'epidemiology': 'The study of patterns of disease in populations. It finds associations, which may or may not be causes.',
    'atherosclerosis': 'The slow build-up of fatty, inflamed plaque inside artery walls. The underlying cause of most heart attacks and many strokes.',
    'plaque': 'A lump of cholesterol, dead cells and scar tissue inside an artery wall. If its cap tears, a clot can block the artery.',
    'mg/dL': 'Milligrams per deciliter, the US unit for cholesterol on a blood test. 1 mmol/L of LDL cholesterol is about 39 mg/dL.',
    'mmol/L': 'Millimoles per liter, the unit for cholesterol used in most countries outside the US. 1 mmol/L of LDL cholesterol is about 39 mg/dL.',
    'MACE': 'Major adverse cardiovascular events: a composite endpoint that usually counts cardiovascular death, heart attack and stroke, sometimes plus hospitalization for chest pain or artery-opening procedures.',
    'composite endpoint': 'A trial endpoint that counts any one of several events, so the trial accumulates events faster than it would counting one kind alone.',
    'secondary prevention': 'Treating people who have already had a heart attack, stroke or other sign of artery disease, to prevent the next one.',
    'primary prevention': 'Treating people who have not yet had a heart attack or stroke, to prevent the first one.',
    'open-label extension': 'A follow-on study in which trial patients can keep taking (or start) the drug, with everyone knowing what they receive.',
    'humanized antibody': 'An antibody first raised in mice, then re-engineered so most of it matches human sequence. A small mouse-derived part remains.',
    'fully human antibody': 'An antibody whose sequence is entirely human, typically made in mice engineered to carry human antibody genes or picked from human antibody libraries.',
    'antidrug antibodies': 'Antibodies a patient\'s immune system makes against a drug. They can neutralize it or speed its clearance.',
    'priority review voucher': 'A transferable FDA voucher, earned by approving a drug for certain neglected or rare pediatric diseases, that entitles another application to a 6-month priority review. Vouchers are bought and sold.',
    'wholesale acquisition cost': 'WAC: the manufacturer\'s US list price to wholesalers, before rebates and discounts.',
    'PBM': 'Pharmacy benefit manager: a company that runs drug benefits for insurers and employers, builds formularies, negotiates rebates and applies prior-authorization rules.',
    'utilization management': 'Insurer tools that limit use of a drug: prior authorization, step therapy (try cheaper drugs first), quantity limits.',
    'NDC': 'National Drug Code: the US product identifier for a specific drug, package and labeler. A new NDC can carry a different list price.',
    'Medicare Part D': 'The US government\'s outpatient prescription drug benefit for people aged 65 and over, run through private plans.',
    'abandonment': 'When a prescription is approved but the patient never picks it up, most often because of the out-of-pocket cost.',
    'enablement': 'A patent-law requirement: the patent must teach a skilled person how to make and use everything it claims, without undue experimentation.',
    'genus claim': 'A patent claim covering a whole class of things defined by what they do or share (for example, every antibody that binds a certain site), rather than one specific molecule.',
    'Federal Circuit': 'The US Court of Appeals for the Federal Circuit, which hears all US patent appeals. Above it sits only the Supreme Court.',
    'siRNA': 'Small interfering RNA: a short double-stranded RNA that guides the cell\'s own machinery to destroy one specific messenger RNA, so less of that protein is made.',
    'GalNAc': 'A sugar tag that liver cells grab eagerly through a receptor on their surface. Attaching it to a drug delivers the drug to the liver.',
    'macrocyclic peptide': 'A chain of amino acids closed into a ring. The ring makes it rigid and resistant to digestion, so some can be taken as pills.',
    'base editing': 'A gene-editing method that changes a single DNA letter to another without cutting both strands of the DNA. Described as a pencil rather than scissors.',
    'ezetimibe': 'A cholesterol pill that blocks absorption of cholesterol from the gut. It lowers LDL by roughly a fifth to a quarter and is now generic.',
    'ASCVD': 'Atherosclerotic cardiovascular disease: heart attack, stroke, or other disease caused by plaque in the arteries.',
  },
  sections: [
    // ---------------- COLD OPEN ----------------
    {type: 'story', kicker: 'Cold open', title: 'An aerobics instructor with an LDL of 14', tocTitle: 'Cold open', html: `
      <p>In the early 2000s, researchers at the University of Texas Southwestern Medical Center in Dallas were drawing blood from thousands of ordinary city residents for a project called the Dallas Heart Study. One of them was a 53-year-old woman whose LDL cholesterol, the "bad cholesterol" on a routine blood test, came back at 49 [[mg/dL]]. For comparison: in the big heart trial at the center of this case, patients who had already had heart attacks and were taking cholesterol pills started at a median of 92.</p>
      <p>Her number was interesting because two Dallas geneticists, Helen Hobbs and Jonathan Cohen, were hunting for exactly this kind of person. They had found that some people carried a broken copy of a little-known gene called <em>PCSK9</em>, and that those people had unusually low LDL. The woman carried one broken copy. So they tested her family.</p>
      <p>Her 32-year-old daughter had an LDL of 14 mg/dL. That is not a typo. When the team looked for the PCSK9 protein in her blood, they couldn't find any. She had inherited one broken copy of the gene from her mother and a different broken copy from her father, so neither copy worked. She had, in effect, been born without the protein and had lived her entire life without it.</p>
      <p>The obvious question was what was wrong with her. The answer, as the team reported in 2006, was apparently nothing. In their words she was "an apparently healthy, fertile, normotensive, college-educated woman with normal liver and renal function tests ... who works as an aerobics instructor." She had children. Their LDL was 30 and 27.</p>
      <p>For drug hunters, this was about as good as news gets. A few months earlier, the same Dallas team had shown that people with one broken copy of <em>PCSK9</em> had dramatically fewer heart attacks over 15 years. Now they had a living person showing that having none at all seemed harmless. Human biology had run a lifelong experiment and published the result: switch this gene off, LDL falls, arteries stay cleaner, and nothing obvious goes wrong.</p>
      <p>Nine years later, in the summer of 2015, the FDA approved two drugs that block the PCSK9 protein: Praluent, from Regeneron and Sanofi, and Repatha, from Amgen. In 2017 a trial of 27,564 heart patients showed that Repatha prevented heart attacks and strokes. The science had worked almost exactly as the genetics predicted.</p>
      <p>And then, for years, most of the patients whose doctors prescribed it didn't get it. In the first year, insurers ever approved fewer than half of new prescriptions. Sales in the first two years were small. This case is about both halves of that story: how human genetics produced one of the best-validated drug targets in history, and why a drug that works is not the same thing as a drug that gets paid for.</p>`},

    // ---------------- BIOLOGY FROM ZERO ----------------
    {type: 'story', kicker: 'The biology from zero', title: 'The liver is the drain', tocTitle: 'LDL from zero', html: `
      <p>The <a href="case.html?id=torcetrapib">torcetrapib case</a> explains cholesterol from the ground up, so here is the short version. [[cholesterol|Cholesterol]] is a fatty molecule every cell needs. Because fat doesn't dissolve in blood, the body ships it in tiny particles. The ones that matter here are [[LDL]] particles, which carry most of the cholesterol in the blood. When there are too many of them, some slip into artery walls and get stuck, seeding the fatty [[plaque]] of [[atherosclerosis]]. Decades later, a plaque can tear, a clot forms, and an artery feeding the heart or brain is blocked: a heart attack or stroke.</p>
      <p>So the question "why is my LDL high?" is really a plumbing question. LDL flows into the blood from the liver, which makes the particles. It flows out mostly through the liver too, which pulls them back and breaks them down. Your LDL level is the water level in a tub with the tap and the drain both open. The drain is the part this case is about.</p>
      <h3>The receptor that clears the blood</h3>
      <p>In 1973, two young doctors at UT Southwestern, Michael Brown and Joseph Goldstein, found the drain. Cells, they showed, carry a protein on their surface, the [[LDL receptor]], that recognizes LDL particles, grabs them and pulls them inside. They worked it out partly by studying cells from patients with [[familial hypercholesterolemia]], an inherited disease in which cholesterol is sky-high from birth. Those children's cells lacked working LDL receptors, completely or partly. No drain, so the tub overflows.</p>
      <p>Brown and Goldstein then traced the receptor's journey. It sits in a small dimple on the cell surface. Once it has hooked an LDL particle, the dimple pinches off into a bubble inside the cell called an [[endosome]]. There the LDL lets go. The particle travels on to the [[lysosome]], the cell's recycling plant, where its cholesterol is released for the cell to use. The receptor goes back to the surface to catch another. They also showed that the cell adjusts how many receptors it makes: when it has plenty of cholesterol, it makes fewer; when it runs short, it makes more. In 1985 the two men shared the Nobel Prize in Physiology or Medicine "for their discoveries concerning the regulation of cholesterol metabolism."</p>
      <h3>Why statins work</h3>
      <p>That feedback loop explains the most successful heart drugs ever made. [[statin|Statins]] block [[HMG-CoA reductase]], the enzyme that paces the liver's own cholesterol factory. The liver senses a shortage and responds the only way it knows: it puts more LDL receptors on its surface and pulls more LDL out of the blood. Statins don't really work by stopping production. They work by opening the drain wider.</p>
      <p>The payoff is well measured. In 2010 the Cholesterol Treatment Trialists pooled 26 randomized trials with about 170,000 participants and found that every 1 [[mmol/L]] reduction in LDL (about 39 mg/dL) cut major vascular events by about 22% over roughly five years of treatment. That rule held across very different patients, including those who already had low LDL. Lower is better, and the relationship is close to a straight line.</p>
      <p>By the 2000s statins were cheap and generic. But they had limits. Many heart patients on the highest doses were still above their LDL goals. Some people couldn't tolerate statins because of muscle aches. And patients with familial hypercholesterolemia often couldn't get low enough on anything. Cardiologists wanted a second way to open the drain. Nobody knew yet that the body already had a built-in valve on it.</p>`},

    {type: 'figure', title: 'The liver\'s cholesterol economy', intro: 'Every drug in this case acts on one of these parts. Hover or tap each labeled part.',
      svg: `<svg viewBox="0 0 900 420">
        <rect x="20" y="24" width="508" height="372" rx="40" class="il-8s"/>
        <text x="48" y="62" class="il-title">Liver cell (hepatocyte)</text>
        <rect x="532" y="24" width="348" height="372" rx="20" class="il-7s"/>
        <text x="560" y="62" class="il-title">Blood</text>
        <path d="M524 40 V380 M532 40 V380" class="il-line2" fill="none"/>
        <g data-part="factory">
          <ellipse cx="150" cy="160" rx="72" ry="36" class="il-4s il-line"/>
          <text x="150" y="156" text-anchor="middle" class="il-text">cholesterol</text><text x="150" y="174" text-anchor="middle" class="il-text">factory</text>
          <circle cx="236" cy="146" r="6" class="il-4"/><circle cx="254" cy="160" r="6" class="il-4"/><circle cx="240" cy="174" r="6" class="il-4"/>
          <text x="70" y="220" class="il-small">HMG-CoA reductase sets the pace</text></g>
        <g data-part="statin"><path d="M150 92 l16 9 v18 l-16 9 l-16 -9 v-18 Z" class="il-1"/><text x="176" y="112" class="il-text">statin blocks it</text></g>
        <g data-part="sensor"><rect x="232" y="246" width="250" height="58" rx="12" class="il-paper il-line"/><text x="248" y="270" class="il-text">Short of cholesterol?</text><text x="248" y="291" class="il-text-2">build more LDL receptors</text>
          <path d="M440 244 C470 220 490 200 506 180" class="il-none il-line2" fill="none"/><path d="M500 176 L510 172 L508 184 Z" class="il-8"/></g>
        <g data-part="receptors">
          <rect x="506" y="112" width="44" height="12" rx="4" class="il-3"/><path d="M566 100 H552 V136 H566" class="il-none st-3" stroke-width="6" stroke-linecap="round" fill="none"/>
          <rect x="506" y="182" width="44" height="12" rx="4" class="il-3"/><path d="M566 170 H552 V206 H566" class="il-none st-3" stroke-width="6" stroke-linecap="round" fill="none"/>
          <text x="376" y="146" class="il-text">LDL receptors</text></g>
        <g data-part="ldl">
          <circle cx="600" cy="118" r="16" class="il-7"/><circle cx="668" cy="170" r="16" class="il-7"/><circle cx="740" cy="120" r="16" class="il-7"/><circle cx="620" cy="238" r="16" class="il-7"/><circle cx="800" cy="200" r="16" class="il-7"/>
          <text x="690" y="236" class="il-text">LDL particles</text></g>
        <g data-part="vldl"><path d="M470 76 H590" class="il-none st-7 flow" stroke-width="3" fill="none"/><text x="600" y="82" class="il-text-2">new particles out</text></g>
        <g data-part="pcsk9"><path d="M400 330 C440 330 520 330 600 314" class="il-none st-2 flow" stroke-width="3" fill="none"/>
          <path d="M604 314 C604 298 622 294 634 300 C648 306 652 322 640 332 C628 342 606 336 604 314 Z" class="il-2"/>
          <text x="660" y="322" class="il-text">PCSK9</text><text x="300" y="350" class="il-small">the liver also releases PCSK9</text></g>
        <g data-part="fh"><rect x="506" y="258" width="44" height="12" rx="4" class="il-8"/><path d="M566 246 H552 V256 M552 272 V282 H566" class="il-none il-line2" stroke-width="5" fill="none"/><text x="578" y="270" class="il-small">broken receptor (FH)</text></g>
        <g data-part="artery"><rect x="740" y="330" width="130" height="50" rx="10" class="il-5s il-line"/><path d="M756 330 C772 300 820 300 836 330 Z" class="il-4s il-line"/><text x="752" y="370" class="il-small">artery wall, plaque</text></g>
      </svg>`,
      hotspots: {
        factory: {title: 'The cholesterol factory', text: 'Liver cells make cholesterol with a chain of enzymes. [[HMG-CoA reductase]] is the slow step that sets the pace. The liver packs the cholesterol into particles and sends them into the blood.'},
        statin: {title: 'Statins', text: 'A [[statin]] blocks HMG-CoA reductase. The point is not really less production: it is that the cell, sensing a shortage, makes more LDL receptors and pulls LDL out of the blood.'},
        sensor: {title: 'The thermostat', text: 'Cells track their own cholesterol. When it drops, they make more LDL receptors. It later turned out that statin treatment also raises PCSK9 in the blood, in proportion to the dose, which works against the extra receptors.'},
        receptors: {title: 'LDL receptors: the drain', text: 'Each [[LDL receptor]] grabs LDL particles and pulls them inside, then returns to the surface for more. The number of receptors on liver cells is the main thing that decides how much LDL stays in the blood.'},
        ldl: {title: 'LDL in the blood', text: 'What your blood test measures. Too many LDL particles for too long, and some lodge in artery walls. Every 39 mg/dL (1 mmol/L) of lowering cuts major vascular events by about 22% over five years of treatment.'},
        vldl: {title: 'The tap', text: 'The liver sends out VLDL particles, which unload fat and shrink into LDL. The drugs in this case mostly leave the tap alone and work on the drain.'},
        pcsk9: {title: 'PCSK9: a hand on the drain valve', text: 'The liver releases [[PCSK9]] into the blood. It binds LDL receptors and marks them for destruction. More PCSK9, fewer receptors, higher LDL. Block it, and receptors last longer.'},
        fh: {title: 'Familial hypercholesterolemia', text: 'In [[familial hypercholesterolemia]], receptors are missing or broken, usually because of a mutation in the LDL receptor gene. Brown and Goldstein used cells from such patients to discover the receptor.'},
        artery: {title: 'Where the damage happens', text: 'LDL causes harm far from the liver, in the walls of arteries. That is why the liver\'s drain matters to the heart. See the <a href="case.html?id=torcetrapib">torcetrapib case</a> for how a plaque forms.'},
      },
      caption: 'Schematic, not to scale. Statins open the drain by making more receptors. PCSK9 closes it by destroying them.'},

    {type: 'callout', variant: 'product', heading: 'Workers, a queue, and a process that fires workers', html: `<p>Think of LDL particles as jobs piling up in a queue, and LDL receptors as workers pulling jobs off it. Statins are a hiring push: the liver adds workers. PCSK9 is a process that quietly fires workers after each shift. If you can stop the firing, the workforce grows without hiring anyone, and the two approaches stack.</p><p><strong>Where it breaks:</strong> a software team can watch its queue depth in real time and roll back in a minute. Here the "queue" does its damage silently in artery walls over decades, the only reliable readout of harm is heart attacks counted in trials of tens of thousands of people, and nothing about the system can be rolled back once a plaque has torn.</p>`},

    // ---------------- KEY INSIGHT ----------------
    {type: 'story', kicker: 'The key insight', title: 'Three labs, one gene', tocTitle: 'The genetics', html: `
      <p>The discovery of PCSK9 is a story of three groups in three cities, none of which set out to find a heart drug.</p>
      <h3>Montreal: a pair of molecular scissors</h3>
      <p>Nabil Seidah, a biochemist at the Clinical Research Institute of Montreal, had spent his career on a family of enzymes called proprotein convertases. They act like molecular scissors: many proteins are made as longer, inactive precursors and only work after a convertase snips them. In February 2003, Seidah's team described the ninth member of the family, which they called NARC-1. It was active in the liver and in developing brain cells, and the paper was about liver regeneration and neuron development. Cholesterol wasn't in the title. The gene's official name became <em>PCSK9</em>: proprotein convertase subtilisin/kexin type 9.</p>
      <h3>Paris: families with no explanation</h3>
      <p>Catherine Boileau's group at the Necker hospital in Paris studied French families with inherited very high cholesterol. Most such families carry a broken LDL receptor gene, or a defect in apoB, the protein on LDL that the receptor recognizes. Some of Boileau's families had neither. By following how the trait was passed down, her team had mapped a third culprit to a stretch of chromosome 1. Seidah's new gene sat in that stretch.</p>
      <p>The two groups joined forces. In June 2003, with Marianne Abifadel as first author and both Seidah and Boileau as senior authors, they reported in <em>Nature Genetics</em> that two different mutations in <em>PCSK9</em> caused inherited high cholesterol. These were [[gain-of-function]] changes: the mutant protein did its job too well. Mice engineered to make extra PCSK9 in the liver soon confirmed the mechanism. They had fewer LDL receptors and higher cholesterol.</p>
      <h3>Dallas: looking at the other end</h3>
      <p>Helen Hobbs and Jonathan Cohen at UT Southwestern, the same medical center where Brown and Goldstein worked, had a simple strategy. Instead of studying sick families, they sequenced genes in people at the healthy extreme: the residents of the Dallas Heart Study with the lowest LDL. If too much PCSK9 raised cholesterol, perhaps too little lowered it.</p>
      <p>In 128 people with low LDL, half of them African American, they found two [[nonsense mutation|nonsense mutations]] that cut the PCSK9 protein short. Both were [[loss-of-function]] variants. Together they were carried by about 2% of African Americans and fewer than 1 in 1,000 European Americans, and carriers had LDL about 40% lower. They published in January 2005.</p>
      <p>A lower number on a blood test is interesting. Fewer heart attacks is what matters. So Hobbs and Cohen went to the Atherosclerosis Risk in Communities (ARIC) study, which had followed thousands of middle-aged Americans for 15 years and recorded every heart attack. In March 2006 they reported in the <em>New England Journal of Medicine</em>:</p>
      <ul>
        <li>Among 3,363 Black participants, 2.6% carried a nonsense mutation. Their LDL was 28% lower, and their risk of coronary heart disease was <strong>88% lower</strong> ([[hazard ratio]] 0.11, with a wide [[confidence interval]] from 0.02 to 0.81, because events among carriers were few).</li>
        <li>Among 9,524 white participants, 3.2% carried a milder variant called R46L. Their LDL was 15% lower and their risk was <strong>47% lower</strong> (hazard ratio 0.50).</li>
      </ul>
      <p>These were not small effects on a big population. They were huge effects from a modest LDL difference, and they appeared even though many carriers had high blood pressure, diabetes or smoked. Later that year came the aerobics instructor in the cold open, a [[compound heterozygote]] with no detectable PCSK9 and an LDL of 14.</p>
      <h3>The last piece: it works from the blood</h3>
      <p>One question remained, and it decided what kind of drug could be built. Did PCSK9 act inside the liver cell, where only a small molecule could reach it, or outside? In November 2006, Jay Horton's lab, also in Dallas, answered it with an elegant experiment. They surgically joined the circulations of two mice, one engineered to pour PCSK9 into its blood and one normal. PCSK9 from the first mouse's blood wiped out the LDL receptors in the second mouse's liver. PCSK9 was a secreted protein that attacked receptors from outside the cell. Anything that could grab it in the bloodstream, such as an [[antibody]], could in principle stop it.</p>`},

    {type: 'figure', title: 'Nature\'s dose-response curve', intro: 'Human genetics supplied every setting of the PCSK9 dial, from none at all to too much. Hover or tap each point.',
      svg: `<svg viewBox="0 0 900 420">
        <line x1="80" y1="350" x2="860" y2="350" class="il-line2"/>
        <line x1="80" y1="350" x2="80" y2="40" class="il-line2"/>
        <text x="470" y="398" text-anchor="middle" class="il-text">PCSK9 activity →</text>
        <text x="30" y="200" text-anchor="middle" class="il-text" transform="rotate(-90 30 200)">LDL in the blood →</text>
        <text x="100" y="374" class="il-small">none</text><text x="800" y="374" class="il-small">too much</text>
        <path d="M110 318 C230 290 320 262 420 232 C520 200 620 150 720 110" class="il-none il-line il-dash" fill="none"/>
        <g data-part="none"><circle cx="118" cy="316" r="15" class="il-3"/><text x="118" y="292" text-anchor="middle" class="il-text">no PCSK9</text><text x="140" y="340" class="il-small">LDL 14 mg/dL</text></g>
        <g data-part="nonsense"><circle cx="270" cy="276" r="15" class="il-3"/><text x="270" y="252" text-anchor="middle" class="il-text">one copy broken</text><text x="220" y="304" class="il-small">LDL 28–40% lower</text></g>
        <g data-part="r46l"><circle cx="400" cy="238" r="15" class="il-3"/><text x="380" y="206" text-anchor="end" class="il-text">milder variant (R46L)</text><text x="380" y="222" text-anchor="end" class="il-small">LDL 15% lower</text></g>
        <g data-part="normal"><circle cx="540" cy="192" r="15" class="il-8"/><text x="540" y="168" text-anchor="middle" class="il-text">typical</text></g>
        <g data-part="gof"><circle cx="720" cy="110" r="15" class="il-7"/><text x="744" y="104" class="il-text">overactive</text><text x="744" y="122" class="il-text">(French families)</text><text x="744" y="142" class="il-small">very high LDL, early</text><text x="744" y="156" class="il-small">heart disease</text></g>
        <g data-part="drug"><path d="M530 222 C470 262 400 300 336 324" class="il-none st-1" stroke-width="4" fill="none"/><path d="M342 316 L326 330 L346 334 Z" class="il-1"/><text x="420" y="338" class="il-text" style="fill:var(--il-1)">what a drug tries to copy</text></g>
        <g data-part="outcome"><rect x="600" y="220" width="250" height="96" rx="12" class="il-paper il-line"/><text x="616" y="246" class="il-text">Heart disease over 15 years</text><text x="616" y="272" class="il-text-2">one broken copy: 88% lower</text><text x="616" y="296" class="il-text-2">milder variant: 47% lower</text></g>
      </svg>`,
      hotspots: {
        none: {title: 'No PCSK9 at all', text: 'A 32-year-old African American woman who inherited two different broken copies ([[compound heterozygote]]). No detectable PCSK9 in her blood, LDL 14 mg/dL, and, as the authors put it, apparently healthy and fertile, with normal liver and kidney tests. The best early evidence that blocking PCSK9 completely might be safe.'},
        nonsense: {title: 'One copy broken', text: 'Two [[nonsense mutation|nonsense mutations]] (Y142X and C679X) carried by about 2% of African Americans. In the Dallas Heart Study, about 40% lower LDL. In the ARIC study, 28% lower LDL and 88% less coronary heart disease over 15 years (Cohen et al., 2005 and 2006).'},
        r46l: {title: 'A milder variant', text: 'R46L, carried by 3.2% of white ARIC participants, lowers PCSK9 function partly. LDL 15% lower, coronary heart disease 47% lower. A smaller dial turn, a smaller but still large benefit: the dose-response pattern you want to see.'},
        normal: {title: 'Typical PCSK9', text: 'Most people. Their LDL depends on diet, other genes and age, but PCSK9 is steadily removing a share of their LDL receptors.'},
        gof: {title: 'Too much PCSK9', text: 'The Paris team led by Catherine Boileau, with Nabil Seidah, found [[gain-of-function]] mutations in French families with inherited high cholesterol (Abifadel et al., Nature Genetics 2003). The mutant protein destroys receptors too efficiently.'},
        drug: {title: 'The drug\'s job', text: 'Move a patient to the left on this curve, on top of whatever statins do. The genetics predicts both the size of the LDL drop and the direction of the heart benefit before a single patient is dosed.'},
        outcome: {title: 'Outcomes, not just LDL', text: 'The crucial step: Hobbs and Cohen checked real heart events, not just blood tests. That is what separated PCSK9 from HDL, where raising the blood number never lowered heart attacks.'},
      },
      caption: 'Schematic curve, not to scale; the points are placed by the reported LDL differences. Every setting of the dial shows up in real people, with outcomes that move in the direction the LDL predicts.'},

    // ---------------- WHY STRONG ----------------
    {type: 'story', kicker: 'Target validation', title: 'Why this was the best evidence a drug hunter could ask for', tocTitle: 'Why genetics wins', html: `
      <p>Every drug program is a bet that changing one [[target]] will help patients. Most bets fail, and the main reason is that the target turns out not to cause the disease. The PCSK9 evidence was unusually strong, and it helps to see why by comparing it with its mirror image in this collection, <a href="case.html?id=torcetrapib">torcetrapib</a>.</p>
      <p>Torcetrapib rested on [[epidemiology]]: people with high HDL had fewer heart attacks. But people with high HDL also tend to be leaner, more active and less insulin-resistant, so the association could have been a side effect of good health rather than its cause. The genetic support was a handful of Japanese families without CETP, the protein torcetrapib blocked, and other studies of such families disagreed. Nobody had shown that people born with high HDL had fewer heart attacks. Later, when that test was run, they didn't.</p>
      <p>PCSK9 passed every one of those tests before any company spent serious money:</p>
      <ul>
        <li><strong>Randomized by nature.</strong> Which version of a gene you inherit is settled at conception, before diet, wealth or smoking can interfere. This is the logic of [[Mendelian randomization]]: a gene variant works like a lifelong randomized trial.</li>
        <li><strong>Both directions.</strong> Too much PCSK9 raised LDL and caused early heart disease. Too little lowered LDL and prevented it. A target that moves disease both ways is hard to explain away.</li>
        <li><strong>A dose-response.</strong> The milder variant gave a smaller LDL drop and a smaller benefit; the stronger ones gave more.</li>
        <li><strong>Hard outcomes.</strong> Heart attacks and coronary deaths, not a blood test.</li>
        <li><strong>A safety readout.</strong> A healthy adult with none of the protein suggested that even complete blockade might be tolerable.</li>
        <li><strong>A mechanism, and a druggable one.</strong> PCSK9 acts from the bloodstream, where an antibody can reach it.</li>
      </ul>
      <p>There was one more reassurance. The target sat on a pathway that had already been proven many times over. Statins, [[ezetimibe]] and diet all lowered LDL through the same receptor, and all reduced heart attacks roughly in proportion. A PCSK9 drug wasn't a new theory of heart disease. It was a new lever on the best-validated cause of it.</p>
      <p>Genetics also warned of a likely cost. In 2016, Brian Ference and colleagues compared variants in <em>PCSK9</em> with variants in <em>HMGCR</em>, the gene for the enzyme statins block, across 112,772 people. Per 10 mg/dL lower LDL, both sets of variants gave the same protection ([[odds ratio]] 0.81 for cardiovascular events) and a similar small rise in diabetes risk (odds ratio 1.11 for PCSK9, 1.13 for HMGCR), confined to people who already had high blood sugar. Human genetics predicted the benefit and flagged a side effect to watch for.</p>
      <aside class="note"><b>One caution.</b> Genetics shows the effect of <em>lifelong</em> lower LDL. A drug started at 60 is a different experiment: decades of plaque are already in place. The genetic effect per unit of LDL is much larger than what a five-year trial shows. That gap is the subject of the explorer below.</aside>`},

    {type: 'table', title: 'Two cholesterol targets, two kinds of evidence', intro: 'The same questions asked of the HDL-raising drug torcetrapib (a failure) and of PCSK9.',
      columns: ['Question', 'CETP / torcetrapib (HDL)', 'PCSK9 (LDL)'],
      rows: [
        ['Main reason to believe', 'Observational: high HDL, fewer heart attacks', 'Genetic: people with low-activity PCSK9 have fewer heart attacks'],
        ['Could confounding explain it?', 'Yes: high HDL travels with leanness and good metabolic health', 'Hard to see how: genes are dealt at conception'],
        ['Human genetic outcomes', 'Small, conflicting family studies; later genetic studies found HDL is not causal', '88% and 47% lower coronary disease in carriers over 15 years (ARIC)'],
        ['Works in both directions?', 'Not shown', 'Yes: gain-of-function raises LDL and heart disease'],
        ['Safety of full blockade', 'Unknown', 'A healthy, fertile adult with no detectable PCSK9'],
        ['Pathway already proven by drugs?', 'No drug had lowered heart attacks by raising HDL', 'Yes: statins and ezetimibe work through the same LDL receptor'],
        ['What happened', 'Deaths rose in ILLUMINATE, 2006', 'FOURIER and ODYSSEY OUTCOMES positive, 2017–2018'],
      ],
      caption: 'Sources: Cohen et al. NEJM 2006; Zhao et al. AJHG 2006; Abifadel et al. Nat Genet 2003; see the torcetrapib case for the CETP evidence.'},

    {type: 'explorer', title: 'Explorer: why lifelong low LDL beats late low LDL', kicker: 'Teaching model',
      intro: 'A simple model anchored to two published numbers: statin trials, which found about 22% fewer major events per 39 mg/dL (1 mmol/L) of LDL lowering over about five years (CTT 2010), and a Mendelian randomization meta-analysis of 312,321 people, which found about 54.5% lower coronary risk per 39 mg/dL of lifelong lower LDL (Ference 2012). Set the LDL drop and how long it lasts.',
      inputs: [
        {id: 'ldl', label: 'LDL lower by', min: 5, max: 100, step: 1, value: 38, fmt: v => v + ' mg/dL'},
        {id: 'yrs', label: 'For how many years', min: 1, max: 60, step: 1, value: 50, fmt: v => v + (v === 1 ? ' year' : ' years')},
      ],
      compute: (v, api, el) => {
        const k = t => t < 5 ? 0.25 * t / 5 : 0.25 + 0.0118 * (t - 5);
        const red = (mg, t) => Math.round((1 - Math.exp(-k(t) * mg / 38.7)) * 100);
        const r = red(v.ldl, v.yrs);
        const pts = []; for (let t = 1; t <= 60; t += 1) pts.push([t, red(v.ldl, t)]);
        const pts2 = []; for (let t = 1; t <= 60; t += 1) pts2.push([t, red(62, t)]);
        el.innerHTML = `<p style="font:400 17px/1.6 var(--serif);margin:0 0 10px">Model estimate: <b>${r}% lower risk</b> of major coronary events after ${v.yrs} year${v.yrs === 1 ? '' : 's'} of LDL ${v.ldl} mg/dL lower.</p><div class="mrch"></div>
        <div class="tbl-wrap" style="margin-top:10px"><table class="tbl"><thead><tr><th>Reality check</th><th>LDL difference</th><th>How long</th><th>Observed</th><th>This model</th></tr></thead><tbody>
        <tr><td>Statin trials (CTT 2010)</td><td>39 mg/dL</td><td>~5 years</td><td>22% fewer major events</td><td>${red(38.7, 5)}%</td></tr>
        <tr><td>Genetic variants, pooled (Ference 2012)</td><td>39 mg/dL</td><td>lifelong (~50 yrs)</td><td>54.5% lower coronary risk</td><td>${red(38.7, 50)}%</td></tr>
        <tr><td>FOURIER, evolocumab (2017)</td><td>~62 mg/dL (92 to 30)</td><td>2.2 years</td><td>20% fewer CV deaths, heart attacks, strokes</td><td>${red(62, 2.2)}%</td></tr>
        <tr><td>PCSK9 nonsense carriers (ARIC)</td><td>28% lower (roughly 35–40 mg/dL)</td><td>lifelong</td><td>88% less coronary disease (CI 19–98%)</td><td>${red(38, 55)}%</td></tr>
        <tr><td>PCSK9 R46L carriers (ARIC)</td><td>15% lower (roughly 20 mg/dL)</td><td>lifelong</td><td>47% less coronary disease</td><td>${red(20, 55)}%</td></tr>
        </tbody></table></div>
        <div class="caption">Teaching model, not a clinical tool: the per-39-mg/dL log-risk reduction ramps up over the first five years to match statin trials, then grows linearly to match the lifelong genetic estimate. The mg/dL values for the ARIC carriers are rough conversions from the reported percentages. The genetic estimates have wide confidence intervals (the 88% figure rests on few events).</div>`;
        api.mountChart(el.querySelector('.mrch'), {kind: 'line', title: 'Estimated risk reduction by years of lower LDL (teaching model)', unit: '%', yMax: 100, xTicks: [1, 10, 20, 30, 40, 50, 60], xFmt: x => x + ' yr',
          series: [{name: 'Your setting: ' + v.ldl + ' mg/dL lower', points: pts}, {name: 'FOURIER-sized drop: 62 mg/dL', points: pts2, color: 2, dashed: true}],
          annotations: [{x: 2.2, label: 'FOURIER length'}, {x: 50, label: 'lifelong (genetics)', dy: 18}],
          note: 'Model anchored to CTT 2010 (RR 0.78 per mmol/L over ~5 years) and Ference 2012 (54.5% per mmol/L lifelong).'});
      }},

    {type: 'callout', variant: 'lesson', heading: 'Genetics is the spec, the trial is the test', html: `<p>A human genetic finding with outcomes is the closest thing drug discovery has to a written specification: it says which lever to pull, in which direction, roughly how much benefit to expect, and whether pulling it all the way is survivable. A 2015 GSK-led analysis estimated that choosing targets with genetic support could double the success rate in clinical development. PCSK9 became the textbook example.</p>`},

    // ---------------- MECHANISM ----------------
    {type: 'mechanism', title: 'How it works: saving the receptor', intro: 'Step through one LDL receptor\'s working life on the surface of a liver cell, what PCSK9 does to it, and what the antibody changes. Use the arrows or the dots.',
      svg: `<svg viewBox="0 0 760 440">
        <g data-part="blood"><rect x="4" y="4" width="752" height="146" rx="16" class="il-7s"/><text x="20" y="32" class="il-title">Bloodstream</text></g>
        <g data-part="cell"><rect x="4" y="150" width="752" height="286" rx="16" class="il-8s"/><text x="20" y="186" class="il-title">Liver cell</text><path d="M4 150 H756 M4 158 H756" class="il-line2" fill="none"/></g>
        <g data-part="endo"><circle cx="260" cy="300" r="66" class="il-4s il-line"/><text x="104" y="296" text-anchor="middle" class="il-text">endosome</text><text x="104" y="314" text-anchor="middle" class="il-text-2">(sorting)</text></g>
        <g data-part="lyso"><circle cx="600" cy="350" r="58" class="il-5s il-line"/><text x="600" y="428" text-anchor="middle" class="il-text">lysosome (breaks things down)</text></g>
        <g data-part="recycle"><path d="M296 244 C304 204 330 182 364 172" class="il-none st-3 flow" stroke-width="3.5" fill="none"/><text x="200" y="214" class="il-text-2">recycled</text></g>
        <g data-part="tolyso"><path d="M326 318 C400 342 470 352 540 350" class="il-none st-5 flow" stroke-width="3.5" fill="none"/></g>
        <g data-part="chol"><circle cx="582" cy="338" r="6" class="il-4"/><circle cx="604" cy="360" r="6" class="il-4"/><circle cx="622" cy="336" r="6" class="il-4"/><circle cx="590" cy="376" r="6" class="il-4"/><text x="548" y="284" class="il-small">cholesterol for the cell</text></g>
        <g data-part="mrna"><path d="M604 236 q10 -10 20 0 t20 0 t20 0 t20 0 t20 0 t20 0" class="il-none st-5" stroke-width="3" fill="none"/><text x="592" y="242" text-anchor="end" class="il-text-2">liver makes PCSK9</text></g>
        <g data-part="secrete"><path d="M662 224 C666 182 644 146 620 118" class="il-none st-2 flow" stroke-width="3" fill="none"/></g>
        <g data-part="sirna"><path d="M604 252 q10 -10 20 0 t20 0 t20 0" class="il-none st-1" stroke-width="4" fill="none"/><path d="M676 226 L696 246 M696 226 L676 246" class="il-none st-1" stroke-width="4" stroke-linecap="round" fill="none"/><text x="604" y="276" class="il-text" style="fill:var(--il-1)">inclisiran (siRNA)</text></g>
        <g data-part="more">
          <rect x="144" y="132" width="12" height="46" rx="4" class="il-3"/><path d="M128 118 V134 H172 V118" class="il-none st-3" stroke-width="6" stroke-linecap="round" fill="none"/>
          <rect x="244" y="132" width="12" height="46" rx="4" class="il-3"/><path d="M228 118 V134 H272 V118" class="il-none st-3" stroke-width="6" stroke-linecap="round" fill="none"/>
          <rect x="514" y="132" width="12" height="46" rx="4" class="il-3"/><path d="M498 118 V134 H542 V118" class="il-none st-3" stroke-width="6" stroke-linecap="round" fill="none"/></g>
        <g data-part="reclabel"><text x="350" y="112" text-anchor="end" class="il-text">LDL receptor</text></g>
        <g data-part="receptor"><rect x="374" y="132" width="12" height="46" rx="4" class="il-3"/><path d="M358 118 V134 H402 V118" class="il-none st-3" stroke-width="6" stroke-linecap="round" fill="none"/></g>
        <g data-part="ldl"><circle cx="380" cy="66" r="24" class="il-7"/><circle cx="368" cy="56" r="4" class="il-4"/><circle cx="392" cy="56" r="4" class="il-4"/><text x="380" y="80" text-anchor="middle" class="il-white">LDL</text></g>
        <g data-part="pcsk9"><path d="M577 92 C577 74 597 70 611 76 C627 82 631 100 619 110 C605 120 581 114 577 92 Z" class="il-2"/><text x="603" y="98" text-anchor="middle" class="il-white" style="font-size:12px">PCSK9</text></g>
        <g data-part="drug"><path d="M710 30 V52 M710 52 L694 72 M710 52 L726 72" class="il-none st-1" stroke-width="8" stroke-linecap="round" fill="none"/><circle cx="694" cy="74" r="5" class="il-1"/><circle cx="726" cy="74" r="5" class="il-1"/><text x="710" y="22" text-anchor="middle" class="il-text" style="fill:var(--il-1)">evolocumab</text></g>
        <g data-part="rd1"><rect x="14" y="394" width="420" height="36" rx="10" class="il-paper il-line"/><text x="28" y="418" class="il-text">Receptor recycles: LDL keeps getting cleared</text></g>
        <g data-part="rd2"><rect x="14" y="394" width="420" height="36" rx="10" class="il-paper il-line"/><text x="28" y="418" class="il-text">Receptor destroyed: more LDL stays in the blood</text></g>
        <g data-part="rd3"><rect x="14" y="394" width="420" height="36" rx="10" class="il-paper il-line"/><text x="28" y="418" class="il-text">More receptors survive: LDL falls about 60%</text></g>
      </svg>`,
      steps: [
        {title: 'A receptor waits at the surface', text: 'Liver cells carry [[LDL receptor|LDL receptors]] (aqua) that reach into the bloodstream. LDL particles (red, carrying yellow cholesterol) drift past. The number of receptors on liver cells mostly decides how much LDL stays in the blood.', show: ['blood', 'cell', 'receptor', 'reclabel', 'ldl']},
        {title: 'It grabs an LDL particle', text: 'The receptor recognizes the protein on the LDL particle\'s surface and holds it. This is the first step Brown and Goldstein described in the 1970s.', show: ['blood', 'cell', 'receptor', 'reclabel', 'ldl'], focus: ['receptor'], move: {ldl: 'translate(0px, 28px)'}},
        {title: 'The cell swallows both', text: 'The patch of membrane holding the receptor pinches off into a bubble inside the cell, an [[endosome]]. Receptor and LDL travel in together.', show: ['blood', 'cell', 'receptor', 'ldl', 'endo'], focus: ['endo'], move: {receptor: 'translate(-120px, 160px)', ldl: 'translate(-120px, 190px)'}},
        {title: 'Sorted: cargo to the recycling plant, receptor back to work', text: 'Inside the endosome the LDL lets go. The particle goes on to the [[lysosome]], where its cholesterol is freed for the cell to use. The receptor returns to the surface to catch another. A single receptor can make many round trips.', show: ['blood', 'cell', 'receptor', 'endo', 'lyso', 'tolyso', 'recycle', 'chol', 'rd1'], pulse: ['recycle'], focus: ['receptor']},
        {title: 'PCSK9 arrives from the liver itself', text: 'The same liver cells make [[PCSK9]] and release it into the blood. It binds the LDL receptor at the surface, next to where LDL docks. The receptor is swallowed as usual, now carrying PCSK9 with it.', show: ['blood', 'cell', 'receptor', 'ldl', 'pcsk9', 'mrna', 'secrete'], focus: ['pcsk9'], pulse: ['secrete'], move: {pcsk9: 'translate(-183px, 30px)', ldl: 'translate(0px, 28px)'}},
        {title: 'Marked for destruction', text: 'With PCSK9 attached, the receptor can\'t let go and return. The whole bundle is sent to the lysosome and broken down. One trip instead of many. Fewer receptors on the surface means less LDL cleared and a higher LDL level. People with overactive PCSK9 have too much of this; people with broken PCSK9 have too little.', show: ['blood', 'cell', 'receptor', 'ldl', 'pcsk9', 'endo', 'lyso', 'tolyso', 'rd2'], dim: ['endo'], pulse: ['lyso'], move: {receptor: 'translate(210px, 225px)', ldl: 'translate(210px, 255px)', pcsk9: 'translate(27px, 256px)'}},
        {title: 'The antibody catches PCSK9 first', text: 'Evolocumab is a [[monoclonal antibody]] injected under the skin every two weeks or once a month. It grabs PCSK9 in the blood and blocks the patch PCSK9 uses to bind the receptor. Receptors go back to recycling, more of them survive, and in trials LDL fell by about 60% on top of a statin. The antibody never enters the cell.', show: ['blood', 'cell', 'receptor', 'more', 'ldl', 'pcsk9', 'drug', 'endo', 'lyso', 'recycle', 'rd3'], dim: ['endo', 'lyso'], focus: ['drug'], pulse: ['recycle'], move: {drug: 'translate(-107px, 4px)', ldl: 'translate(0px, 28px)'}},
        {title: 'Another route: stop the liver making PCSK9', text: 'Later drugs attack earlier in the chain. Inclisiran, an [[siRNA]], destroys the messenger RNA the liver uses to build PCSK9, so less is made; two injections a year are enough. Gene editors aim to switch the gene off for good. Different tools, same end state: the receptor survives.', show: ['blood', 'cell', 'receptor', 'more', 'mrna', 'sirna', 'secrete', 'rd3'], dim: ['secrete', 'mrna'], focus: ['sirna']},
      ]},

    {type: 'callout', variant: 'misconception', heading: '"PCSK9 drugs pull cholesterol out of your arteries"', html: `<p>Not directly. The antibody works in the bloodstream and its effect lands on liver cells: more LDL receptors survive, so the liver clears more LDL from the blood. Lower LDL in the blood means fewer particles lodging in artery walls from then on. The main effect is prevention of new damage, which is why the benefit grows year by year rather than appearing overnight.</p>`},

    // ---------------- TIMELINE ----------------
    {type: 'timeline', title: 'Timeline: from a Montreal enzyme to an oral pill', intro: 'Two decades from gene to a class of drugs, with a price fight and a Supreme Court case along the way. Filter by kind, or click a pin.', events: [
      {year: 1973, title: 'Brown and Goldstein discover the LDL receptor', kind: 'science', text: 'At UT Southwestern in Dallas, partly by studying cells from patients with familial hypercholesterolemia.'},
      {year: 1985, date: 'Oct 1985', title: 'Nobel Prize for Brown and Goldstein', kind: 'people', text: '"For their discoveries concerning the regulation of cholesterol metabolism."'},
      {year: 2003, date: 'Feb 2003', title: 'Seidah describes NARC-1, later named PCSK9', kind: 'science', text: 'The ninth proprotein convertase, active in liver and developing brain. Nothing yet about cholesterol.'},
      {year: 2003, date: 'Jun 2003', title: 'PCSK9 mutations cause inherited high cholesterol', kind: 'science', text: 'Abifadel, Seidah, Boileau and colleagues, Nature Genetics: gain-of-function mutations in French families.'},
      {year: 2005, date: 'Jan 2005', title: 'Loss-of-function mutations mean low LDL', kind: 'science', text: 'Cohen, Hobbs and colleagues find nonsense mutations in about 2% of African Americans, with LDL about 40% lower.'},
      {year: 2006, date: 'Mar 2006', title: '88% less coronary heart disease in carriers', kind: 'science', text: 'The ARIC study, 15 years of follow-up (NEJM). The milder R46L variant: 47% less.'},
      {year: 2006, date: 'Sep 2006', title: 'A healthy woman with no PCSK9', kind: 'people', text: 'LDL 14 mg/dL, a college-educated aerobics instructor with children (Zhao et al.).'},
      {year: 2006, date: 'Nov 2006', title: 'PCSK9 attacks receptors from the blood', kind: 'science', text: 'Horton\'s lab joins the circulations of two mice: PCSK9 from one wipes out liver receptors in the other. An antibody could work.'},
      {year: 2009, date: 'May 2009', title: 'Amgen antibody cuts LDL 80% in monkeys', kind: 'science', text: 'A single injection of a neutralizing antibody (PNAS).'},
      {year: 2012, date: 'Mar 2012', title: 'First human data for alirocumab', kind: 'clinical', text: 'Regeneron and Sanofi report phase 1 studies: up to 61% lower LDL on top of atorvastatin (NEJM).'},
      {year: 2014, date: 'Aug 2014', title: 'Amgen files for approval', kind: 'regulatory', text: 'Regeneron and Sanofi file soon after, using a priority review voucher to jump the queue.'},
      {year: 2015, date: 'Jul 2015', title: 'Repatha approved in Europe', kind: 'regulatory', text: 'The first PCSK9 inhibitor approved anywhere.'},
      {year: 2015, date: 'July 24, 2015', title: 'FDA approves Praluent', kind: 'regulatory', text: 'List price about $14,600 a year. Approved on LDL lowering; the label says the effect on heart attacks is not yet known.'},
      {year: 2015, date: 'August 27, 2015', title: 'FDA approves Repatha', kind: 'regulatory', text: 'List price $14,100 a year.'},
      {year: 2015, date: 'Nov 2015', title: 'ICER: worth about $2,177 a year', kind: 'business', text: 'The value-based price benchmark, an 85% discount from list, driven by the potential budget impact.'},
      {year: 2016, date: 'Mar 2016', title: 'Jury sides with Amgen against Sanofi and Regeneron', kind: 'business', text: 'In January 2017 a judge orders Praluent off the US market; the appeals court stays the order in February and vacates it in October.'},
      {year: 2017, date: 'Mar 2017', title: 'Bococizumab results published after Pfizer drops it', kind: 'setback', text: 'Pfizer\'s humanized antibody provoked high rates of antidrug antibodies. Its two outcomes trials, with 27,438 patients, ended early.'},
      {year: 2017, date: 'Mar 2017', title: 'FOURIER: fewer heart attacks and strokes', kind: 'clinical', text: '27,564 patients; 15% fewer primary events, 20% fewer of the key secondary. No change in cardiovascular death over 2.2 years.'},
      {year: 2017, date: 'Dec 2017', title: 'FDA adds heart-attack prevention to Repatha label', kind: 'regulatory'},
      {year: 2018, date: 'Oct 2018', title: 'Amgen cuts Repatha list price 60%', kind: 'business', text: 'New product codes at $5,850 a year, aimed especially at Medicare patients.'},
      {year: 2018, date: 'Nov 2018', title: 'ODYSSEY OUTCOMES positive for Praluent', kind: 'clinical', text: '18,924 patients after a heart attack or unstable angina; 15% fewer events.'},
      {year: 2019, date: 'Mar 2019', title: 'Praluent matches at $5,850', kind: 'business'},
      {year: 2019, date: 'Nov 2019', title: 'Novartis buys The Medicines Company for $9.7B', kind: 'business', text: 'For inclisiran, a twice-yearly siRNA against PCSK9 originally from Alnylam.'},
      {year: 2021, title: 'Repatha passes $1 billion in annual sales', kind: 'business', text: '$1.12 billion, six years after launch.'},
      {year: 2021, date: 'December 22, 2021', title: 'FDA approves inclisiran (Leqvio)', kind: 'regulatory', text: 'A year after a rejection over manufacturing-site inspection issues.'},
      {year: 2023, date: 'May 18, 2023', title: 'Supreme Court: Amgen\'s broad patents invalid', kind: 'regulatory', text: 'Unanimous: "The more one claims, the more one must enable."'},
      {year: 2025, date: 'Jun 2025', title: 'Lilly agrees to buy Verve Therapeutics', kind: 'business', text: 'Up to about $1.3 billion for one-time gene editing of PCSK9.'},
      {year: 2025, date: 'Nov 2025', title: 'VESALIUS-CV: benefit before a first heart attack', kind: 'clinical', text: '12,257 patients without a prior heart attack or stroke; 25% fewer 3-point MACE.'},
      {year: 2026, date: 'July 15, 2026', title: 'FDA approves the first oral PCSK9 inhibitor', kind: 'regulatory', text: 'Merck\'s enlicitide (Lipfendra), a daily pill, approved on LDL lowering.'},
    ]},

    // ---------------- BUILDING THE DRUG ----------------
    {type: 'story', kicker: 'Building the drug', title: 'Why an antibody, and the race to make one', tocTitle: 'The race', html: `
      <p>Most drugs are [[small molecule|small molecules]] that fit into a pocket on an enzyme, like a key in a lock. PCSK9 was an awkward target for that approach. Its job is to stick to another protein, the LDL receptor, across a fairly flat surface with no deep pocket. Small molecules are poor at blocking that kind of handshake. [[antibody|Antibodies]] are good at it: they are large Y-shaped proteins whose tips can cover a patch of surface and hold on very tightly. And because Horton's mouse experiment showed PCSK9 did its damage from the bloodstream, an antibody didn't need to get inside cells, which antibodies can't do.</p>
      <p>So the race was an antibody race, and several big companies entered it. Amgen published early proof in May 2009: a neutralizing antibody that roughly doubled liver LDL receptors in mice and, in monkeys, cut LDL by 80% after a single injection, with a clear effect lasting ten days. Regeneron, working with Sanofi, published the first human results in March 2012: in patients already on atorvastatin, its antibody lowered LDL by up to 61% more than placebo, with no dropouts due to side effects. Pfizer and others followed.</p>
      <h3>A lesson in antibody engineering</h3>
      <p>Not every antibody was equal. Evolocumab (Amgen) and alirocumab (Regeneron and Sanofi) are [[fully human antibody|fully human antibodies]]. Pfizer's bococizumab was a [[humanized antibody]]: raised in mice and then re-engineered, keeping a small mouse-derived part. In many patients, the immune system noticed. Pfizer's program found high rates of [[antidrug antibodies]], which can blunt a drug's effect. Pfizer stopped development, and its two outcomes trials, with 27,438 patients, ended after a median of only 10 months. In the higher-risk trial, bococizumab still showed a significant benefit. The target was right; the molecule wasn't good enough to last a lifetime of injections.</p>
      <h3>The last lap</h3>
      <p>Amgen filed its application with the FDA in August 2014. A standard review for a new biologic takes about ten months from the filing date, a priority review six. Regeneron and Sanofi filed later, but they had bought a [[priority review voucher]]: a tradable coupon that the FDA awards for approving a drug for a rare pediatric disease, which buys any other application a faster review. Regeneron's half of the cost was $33.8 million, so the voucher cost about $67.5 million in all.</p>
      <p>It worked. Europe approved Repatha first, in July 2015. But in the US, the FDA approved Praluent on July 24, 2015, and Repatha on August 27, 2015, about five weeks later. Both were self-injected under the skin with a pen: Repatha 140 mg every two weeks or 420 mg once a month; Praluent every two weeks. Both were sold at list prices of more than $14,000 a year.</p>`},

    {type: 'decision', title: 'Decision: pay $67.5 million to go first?', role: 'You run the Praluent program at Regeneron and Sanofi, 2014',
      scenario: `Amgen's evolocumab is ahead of you and will be filed in August 2014. Your data are just as good. You can buy a priority review voucher from another company for about $67.5 million, which should cut your FDA review from roughly ten months to six. The two drugs do the same thing to the same protein, and doctors will be choosing between them from day one.`,
      options: [
        {label: 'Buy the voucher and try to launch first', outcome: 'You spend $67.5 million to buy perhaps a month or two of lead. The prize is being the default: the drug formularies list first, the one cardiologists learn to prescribe, the one in the first payer contracts. In a two-horse race with identical efficacy, a first-mover edge can be worth far more than the voucher, if it lasts.'},
        {label: 'Skip it: same drug, same price, a few weeks won\'t matter', outcome: 'Reasonable. Two near-identical drugs usually end up splitting the market on contracts, price and sales force, not on launch day. You save $67.5 million. But you hand Amgen the "first PCSK9 inhibitor in the US" headline and a head start with insurers who were already planning to cover only one.'},
        {label: 'Wait: file after your outcomes trial so your label can claim fewer heart attacks', outcome: 'Scientifically principled, commercially very costly. Your outcomes trial won\'t read out for years. Amgen would own the market alone in the meantime, and it is running its own outcomes trial anyway.'},
      ],
      reality: `Regeneron and Sanofi bought the voucher, split the cost ($33.8 million each), and won. Praluent was approved on July 24, 2015, about five weeks before Repatha, even though Amgen had filed first. The lead didn't translate into dominance: payers pitted the two drugs against each other, and by 2017 Repatha was outselling Praluent ($319 million to about $195 million worldwide). Speed mattered less than the next fight, over price.`},

    // ---------------- REGULATORS ----------------
    {type: 'story', kicker: 'Regulators', title: 'Approved on a number, told to prove the outcome', tocTitle: 'Regulators', html: `
      <p>The FDA approved both drugs on a [[surrogate endpoint]]: LDL cholesterol. That was defensible. LDL is the best-validated surrogate in medicine, with dozens of statin trials showing that lowering it prevents heart attacks roughly in proportion. Waiting years for outcomes data would have denied the drugs to people with [[familial hypercholesterolemia]] who couldn't get low enough on anything else.</p>
      <p>But the field had been burned. In 2006, torcetrapib had improved cholesterol numbers and increased deaths. A brand-new mechanism that drove LDL lower than almost anyone had seen deserved caution.</p>
      <p>So the agency split the difference. Amgen had asked for a broad label covering many patients with high LDL. As its annual report put it, "the FDA ultimately approved Repatha only for a subset of those patients, citing among other things the absence of positive outcomes data showing that Repatha prevents cardiovascular events." The 2015 labels covered adults with heterozygous familial hypercholesterolemia, or with established [[ASCVD]] (a prior heart attack, stroke or similar), who needed more LDL lowering on top of the maximum tolerated statin. And they carried a sentence every payer would quote back: the effect on cardiovascular illness and death had not been determined.</p>
      <p>That sentence mattered commercially. Insurers could argue, with the FDA's own words, that they were being asked to pay specialty-drug prices for a blood test result. Both companies were already running outcomes trials, of about 27,000 and 19,000 patients. Everything depended on them.</p>`},

    // ---------------- FOURIER ----------------
    {type: 'story', kicker: 'The trials', title: 'FOURIER: the trial that had to answer the question', tocTitle: 'FOURIER design', html: `
      <p>FOURIER enrolled 27,564 people (about the population of a small town) who already had atherosclerotic disease: 81% had had a heart attack, 19% a stroke, 13% had symptomatic disease in the leg arteries. All had LDL of at least 70 mg/dL despite a statin, and 69% were on a high-intensity statin. Half were randomly assigned to evolocumab and half to placebo injections, and neither patients nor doctors knew which. The median starting LDL was 92 mg/dL.</p>
      <p>Two design choices shaped what FOURIER could show:</p>
      <ul>
        <li><strong>A broad [[composite endpoint]].</strong> The [[primary endpoint]] counted cardiovascular death, heart attack, stroke, hospitalization for unstable angina (chest pain signaling an artery close to blocking), or a procedure to reopen a coronary artery. The key secondary endpoint was the classic "hard" trio: cardiovascular death, heart attack or stroke.</li>
        <li><strong>Event-driven length.</strong> The trial would stop after a set number of events had occurred, not after a set time. Events came faster than planned, so the median follow-up was only 26 months, against 48 originally planned. That was efficient, but it meant the trial measured the first two years of a treatment meant to last decades.</li>
      </ul>
      <p>Before you look, recall the explorer above. Genetics says lifelong lower LDL is enormously protective. Statin trials say a few years of lower LDL gives about 22% fewer major events per 39 mg/dL. FOURIER was going to cut LDL by about 60 mg/dL, for about two years.</p>`},

    {type: 'trial', title: 'FOURIER results', intro: 'The design is below. Make your prediction to see what happened.',
      design: {name: 'FOURIER', phase: 'Phase 3', blinding: 'Double-blind', years: '2013–2016', n: 27564,
        population: 'Adults with established atherosclerotic disease and LDL ≥70 mg/dL on a statin', randomization: '1:1',
        arms: [{name: 'Evolocumab + statin', n: 13784, desc: '140 mg every 2 weeks or 420 mg monthly, injected under the skin'}, {name: 'Placebo + statin', n: 13780, desc: 'Matching placebo injections', control: true}],
        endpoint: 'Five-part MACE composite (see below)',
        details: {'Primary endpoint': 'Time to first [[MACE]] (five-part composite)', 'Key secondary': 'Cardiovascular death, heart attack or stroke', 'Median follow-up': '2.2 years (26 months; 48 planned)', 'Background therapy': '69% high-intensity statin, 30% moderate', 'Starting LDL': 'Median 92 mg/dL'}},
      predict: {q: 'Evolocumab cut LDL from a median of 92 to 30 mg/dL. What happened to the key secondary endpoint (cardiovascular death, heart attack or stroke) over 2.2 years?',
        options: ['About 50% fewer events, as the genetics would suggest', 'About 20% fewer events', 'No significant difference', 'More events: LDL that low is harmful'], answer: 1,
        explain: 'The key secondary endpoint fell 20% (5.9% vs 7.4%; hazard ratio 0.80), the primary 15% (9.8% vs 11.3%; hazard ratio 0.85). Heart attacks fell 27% and strokes 21%. Cardiovascular deaths did not fall at all over this short follow-up. Genetic effects reflect decades of lower LDL; a two-year trial captures only the start.'},
      results: [
        {kind: 'bar', title: 'Patients with an event during the trial (%)', unit: '%', categories: ['Primary (5-part)', 'Key secondary (CV death, MI, stroke)', 'Heart attack', 'Stroke', 'Cardiovascular death'],
          series: [{name: 'Evolocumab', values: [9.8, 5.9, 3.4, 1.5, 1.8]}, {name: 'Placebo', values: [11.3, 7.4, 4.6, 1.9, 1.7], color: 8}],
          note: 'Source: Sabatine et al., NEJM 2017, and the Repatha US label (Table 3). Median follow-up 26 months.'},
        {kind: 'bar', horizontal: true, title: 'Hazard ratio × 100 (below 100 favors evolocumab)', unit: '%', labelWidth: 250,
          categories: ['Primary composite', 'Key secondary composite', 'Heart attack', 'Stroke', 'Coronary revascularization', 'Unstable angina hospitalization', 'Cardiovascular death', 'Death from any cause'],
          series: [{name: 'Hazard ratio × 100', values: [85, 80, 73, 79, 78, 99, 105, 104], notes: ['95% CI 0.79–0.92', '95% CI 0.73–0.88', '95% CI 0.65–0.82', '95% CI 0.66–0.95', '95% CI 0.71–0.86', '95% CI 0.82–1.18', '95% CI 0.88–1.25', '95% CI 0.91–1.19']}],
          note: '100 would mean no difference; 73 means heart attacks occurred at 73% of the placebo rate at any given time. Source: Repatha US label, Table 3.'},
      ],
      takeaway: 'FOURIER proved the drug prevents heart attacks and strokes on top of statins, with no safety problems even at very low LDL. It did not show that fewer people died, and the absolute benefit over two years was 1.5 percentage points. Both facts would shape the price fight.'},

    {type: 'story', kicker: 'Reading the result', title: 'A clear win that sounded like a disappointment', tocTitle: 'Reading FOURIER', html: `
      <p>FOURIER was published on March 17, 2017. By any scientific standard it was a success: a large, well-run trial that met its primary and key secondary endpoints with very small [[p-value|p-values]], and showed that driving LDL down to 30 mg/dL, far below existing targets, was both safe and beneficial. At 48 weeks, the median LDL in the evolocumab group was 26 mg/dL, and 47% of patients were below 25. Serious side effects, muscle problems and new diabetes were no more common than on placebo. Injection-site reactions were slightly more common (2.1% vs 1.6%). A substudy of 1,974 patients called EBBINGHAUS found no effect on memory or thinking over a median of 19 months.</p>
      <p>But three features of the result gave payers and skeptics material.</p>
      <ul>
        <li><strong>No fewer deaths.</strong> Cardiovascular death was 1.8% on evolocumab and 1.7% on placebo. Statin trials had reduced deaths. ICER, the independent value assessor, called this concerning.</li>
        <li><strong>A modest absolute benefit.</strong> A 20% relative reduction on a 7.4% event rate is about 1.5 percentage points over two years. You would treat roughly 67 patients for the trial's two-odd years to prevent one heart attack, stroke or cardiovascular death.</li>
        <li><strong>Far smaller than the genetics.</strong> Carriers of PCSK9 variants had 47% to 88% less coronary disease; FOURIER showed 20%.</li>
      </ul>
      <p>The investigators' answer was time. Statin trials had always shown smaller effects in the first year, because lowering LDL prevents new damage rather than undoing old damage. FOURIER's own numbers fit that pattern: the hazard ratio for heart attack was 0.80 in the first year and 0.65 after it. The prediction was that a longer trial would show larger benefits, including on deaths.</p>
      <p>It took five more years to test. In the FOURIER [[open-label extension]], 6,635 patients from the original trial all received evolocumab for a median of another five years. Those who had been randomized to evolocumab from the start, and so had about two extra years of low LDL, had 20% fewer cardiovascular deaths, heart attacks or strokes during the extension, and <strong>23% fewer cardiovascular deaths</strong> (hazard ratio 0.77). Side effects did not increase with up to 8.4 years of exposure. It is an extension study, not a fresh randomized trial, but it fit the long-exposure logic of the genetics.</p>
      <h3>Praluent's turn</h3>
      <p>Regeneron and Sanofi's ODYSSEY OUTCOMES trial took a different slice of patients: 18,924 people who had been hospitalized with a heart attack or unstable angina 1 to 12 months earlier, all on intensive statins. The dose was adjusted to aim for an LDL of 25 to 50 mg/dL. Over a median of 2.8 years, the primary endpoint fell from 11.1% to 9.5% (hazard ratio 0.85), the same relative effect as FOURIER. Deaths from any cause were 3.5% versus 4.1%, a difference that was encouraging but, under the trial's pre-specified testing order, could not be counted as a formal finding. Published in November 2018, it confirmed that this was a class effect, not a quirk of one molecule.</p>`},

    {type: 'callout', variant: 'numbers', heading: 'FOURIER by the numbers', html: `<ul>
      <li><b>27,564</b> patients in 49 countries; median follow-up <b>26 months</b>.</li>
      <li>LDL: median <b>92 → 30 mg/dL</b> at 48 weeks, a 59% placebo-adjusted cut.</li>
      <li>Key secondary endpoint: <b>816 vs 1,013</b> patients with a cardiovascular death, heart attack or stroke (<b>5.9% vs 7.4%</b>).</li>
      <li>Heart attacks: <b>468 vs 639</b> (hazard ratio 0.73). Cardiovascular deaths: <b>251 vs 240</b>.</li>
      <li>Open-label extension: <b>6,635</b> patients, up to <b>8.4 years</b> on the drug, <b>23%</b> fewer cardiovascular deaths in those who started early.</li>
    </ul>`},

    {type: 'callout', variant: 'misconception', heading: '"An LDL of 30 must be dangerous"', html: `<p>It sounds alarming, since typical adult values are several times higher. But the body's cells need far less LDL than most people carry, and the evidence points the other way. The woman with no PCSK9 had an LDL of 14 and was healthy. In FOURIER, 47% of patients on evolocumab were below 25 mg/dL at 48 weeks, with no rise in serious adverse events, and no effect on cognition in the EBBINGHAUS substudy. The honest caveat is the one ICER raised: rare or slow-developing harms can take longer than a few years to show, which is why the extension studies mattered.</p>`},

    // ---------------- THE MONEY ----------------
    {type: 'story', kicker: 'The money', title: 'The payer fight', tocTitle: 'The payer fight', html: `
      <p>Repatha launched in the US at a list price, or [[wholesale acquisition cost]], of $14,100 a year; Praluent at $14,600. That was typical for a specialty [[biologic]] at the time. It was also roughly 17 times the $812 a year that the Institute for Clinical and Economic Review ([[ICER]]) estimated for the highest dose of generic atorvastatin.</p>
      <p>The problem wasn't the price per patient alone. It was the number of patients. Rare-disease drugs can charge hundreds of thousands of dollars because few people need them. Millions of Americans have heart disease and LDL above 70 mg/dL on a statin. ICER's November 2015 report estimated that more than 7 million people with existing cardiovascular disease were not at their LDL target on statins, and that if all eligible patients were treated as fast as ICER assumed, the net added cost would average $21.4 billion a year across five years.</p>
      <h3>What was it worth?</h3>
      <p>Two independent analyses, drawing on the same simulation model, asked what the drugs were worth in [[QALY|quality-adjusted life years]], the standard currency of [[cost-effectiveness]]. Before any outcomes data existed, they had to assume that PCSK9 inhibitors would reduce events as much as statins did per unit of LDL.</p>
      <ul>
        <li><strong>ICER (November 2015)</strong> estimated about $297,000 per QALY at the average list price of $14,350. A common US benchmark is $100,000 to $150,000. The price that would meet $100,000 to $150,000 per QALY was $5,404 to $7,735 a year. But ICER added a second test, potential budget impact, and concluded that to avoid adding more than $904 million a year per drug to US health spending, the price would need to be <strong>$2,177 a year</strong>, 85% below list.</li>
        <li><strong>Kazi and colleagues (JAMA, 2016)</strong> estimated $414,000 per QALY for patients with heart disease, and said the annual price would need to fall to $4,536 to reach $100,000 per QALY.</li>
      </ul>
      <p>FOURIER made the economics look worse, not better, because the trial showed no reduction in deaths. ICER's September 2017 update estimated about $1.34 million per QALY at list price and about $800,000 at an estimated [[net price]] of $8,970 (roughly 40% below list after rebates), and cut its value-based benchmark to $1,725 to $2,242 a year. A JAMA update by Kazi's group, which let the reduction in heart attacks and strokes lower deaths the way it does in statin trials, estimated $450,000 per QALY and a required price of about $4,215. The analysts disagreed about the right number, but not about the direction: at $14,000 a year, the drug was far from cost-effective by US conventions.</p>
      <h3>The gatekeepers</h3>
      <p>Insurers and [[PBM|pharmacy benefit managers]] responded with [[utilization management]]. [[prior authorization|Prior authorization]] required doctors to document that each patient met the insurer's criteria before the drug would be covered. Amgen's annual report complained of "burdensome administrative processes required for physicians to demonstrate or document that the patients ... meet payer utilization management criteria."</p>
      <p>The best measurement came from pharmacy transaction data on 45,029 US patients newly prescribed a PCSK9 inhibitor between August 2015 and July 2016, published by Ann Marie Navar and colleagues at Duke in 2017. Only 20.8% of prescriptions were approved on the first day. Only 47.2% were ever approved. Of those approved, 65.3% were filled; the rest were [[abandonment|abandoned]] at the pharmacy counter, mostly because of the copay. The abandonment rate ran from 7.5% for patients with a $0 copay to more than 75% for copays over $350. In all, <strong>30.9%</strong> of patients whose doctors prescribed the drug ever received it. Approval rates varied almost threefold among the ten largest PBMs, and, strikingly, did not depend on the patient's LDL level.</p>
      <p>Sales told the same story. Repatha brought in $141 million worldwide in 2016 and $319 million in 2017. For a drug with a patient population in the millions, those were small numbers.</p>`},

    {type: 'custom', title: 'Follow 100 prescriptions', kicker: 'Interactive', intro: 'Each dot is a patient whose doctor prescribed a PCSK9 inhibitor in its first year on the US market. Step through what happened, using the proportions measured by Navar and colleagues in 45,029 real patients.',
      html: `<div class="card">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px" id="fnBtns">
          <button class="btn primary" data-s="0">1. Prescribed</button><button class="btn" data-s="1">2. Approved on day one</button><button class="btn" data-s="2">3. Ever approved</button><button class="btn" data-s="3">4. Actually filled</button>
        </div>
        <div id="fnSvg"></div>
        <div id="fnTxt" style="font:400 16.5px/1.6 var(--serif);margin-top:8px;min-height:84px"></div>
      </div>`,
      init: (root) => {
        const stages = [
          {n: 100, cls: 'il-1', lab: 'prescribed', t: 'Every patient here has a doctor who decided they needed the drug: most had heart disease or familial hypercholesterolemia and LDL above goal on a statin.'},
          {n: 21, cls: 'il-1', lab: 'approved on the first day', t: '<b>20.8%</b> were approved the day the prescription was written. The rest hit [[prior authorization]]: forms, lab values, appeals, often weeks of back-and-forth.'},
          {n: 47, cls: 'il-1', lab: 'ever approved', t: '<b>47.2%</b> were ever approved. Government insurance approved far more often than commercial plans (odds ratio 3.3). Approval did not vary with the patient\'s LDL level: the gate wasn\'t sorting by need.'},
          {n: 31, cls: 'il-3', lab: 'received the drug', t: 'Of the approved, <b>65.3%</b> filled the prescription, so <b>30.9%</b> of all patients got the drug. Abandonment tracked the copay: 7.5% at $0, more than 75% above $350. Approval by the insurer did not mean affordability for the patient.'},
        ];
        const box = root.querySelector('#fnSvg'), txt = root.querySelector('#fnTxt');
        function draw(s) {
          const st = stages[s];
          let h = '<svg viewBox="0 0 720 250" style="width:100%;height:auto;display:block">';
          for (let i = 0; i < 100; i++) {
            const x = 40 + (i % 20) * 26, y = 30 + Math.floor(i / 20) * 34, on = i < st.n;
            h += '<circle cx="' + x + '" cy="' + y + '" r="10" class="' + (on ? st.cls : 'il-8s il-line') + '"/>';
          }
          h += '<text x="580" y="80" class="il-num" style="font-size:44px">' + st.n + '</text><text x="580" y="108" class="il-text">of 100</text><text x="580" y="130" class="il-text-2">' + st.lab + '</text>';
          h += '</svg>';
          box.innerHTML = h;
          txt.innerHTML = st.t.replace(/\[\[prior authorization\]\]/, 'prior authorization');
          root.querySelectorAll('#fnBtns button').forEach(b => b.classList.toggle('primary', +b.dataset.s === s));
        }
        root.querySelector('#fnBtns').addEventListener('click', e => { const b = e.target.closest('button'); if (b) draw(+b.dataset.s); });
        draw(0);
      }},

    {type: 'explorer', title: 'Explorer: what is a year of Repatha worth?', kicker: 'Teaching model',
      intro: 'A deliberately simple cost-effectiveness model: cost per QALY = (annual price − cost of events avoided) ÷ QALYs gained per year of treatment. The default settings roughly reproduce the published estimates (about $400,000 per QALY at list price, and a break-even near $4,500 for $100,000 per QALY). Change the assumptions and watch the price that "makes it worth it" move.',
      inputs: [
        {id: 'price', label: 'Annual drug price', min: 1000, max: 15000, step: 100, value: 14100, fmt: v => '$' + v.toLocaleString('en-US')},
        {id: 'risk', label: 'Yearly risk of a major event on a statin', min: 1, max: 12, step: 0.5, value: 5, fmt: v => v + '%'},
        {id: 'rrr', label: 'Relative risk reduction from the drug', min: 5, max: 45, step: 1, value: 25, fmt: v => v + '%'},
        {id: 'qaly', label: 'QALYs lost per major event (discounted)', min: 0.5, max: 5, step: 0.1, value: 2.5, fmt: v => v.toFixed(1)},
        {id: 'cost', label: 'Medical cost of one major event', min: 20000, max: 200000, step: 5000, value: 100000, fmt: v => '$' + (v / 1000) + 'k'},
      ],
      compute: (v, api, el) => {
        const avert = v.risk / 100 * v.rrr / 100, q = avert * v.qaly, off = avert * v.cost;
        const cpq = p => Math.max(0, (p - off) / q);
        const be = t => Math.round((off + t * q) / 10) * 10;
        const f = x => '$' + Math.round(x).toLocaleString('en-US');
        const nnt = Math.round(1 / avert);
        el.innerHTML = `<p style="font:400 17px/1.6 var(--serif);margin:0 0 6px">At <b>${f(v.price)}</b> a year: about <b>${f(cpq(v.price))} per QALY</b>. You treat about <b>${nnt}</b> patients for a year to prevent one major event. The price that meets $100,000 per QALY is <b>${f(be(100000))}</b>; $150,000 per QALY, <b>${f(be(150000))}</b>.</p><div class="cech"></div>
        <div class="caption">Teaching model, not ICER's or Kazi's model: it treats every year alike and ignores that benefits grow over time, that deaths prevented are worth more than nonfatal events, and discounting over a lifetime. Reference prices: $14,100 (2015 list), $8,970 (ICER's 2017 estimate of the net price), $5,850 (2018 list). Published estimates: ICER 2015, about $297,000 per QALY at $14,350; Kazi 2016, $414,000; ICER 2017 after FOURIER, about $1.34 million at list.</div>`;
        api.mountChart(el.querySelector('.cech'), {kind: 'bar', title: 'Cost per QALY gained, in thousands of US dollars (teaching model)', unit: 'thousand', categories: ['$14,100 list, 2015', '$8,970 est. net, 2017', '$5,850 list, 2018', 'Your price'],
          series: [{name: 'Cost per QALY', values: [14100, 8970, 5850, v.price].map(p => Math.round(cpq(p) / 1000))}], colorByCategory: true,
          note: 'For reference, US analysts commonly use $100,000–$150,000 per QALY as the range for good value.'});
      }},

    {type: 'decision', title: 'Decision: set the launch price', role: 'You lead US commercial strategy for Repatha, summer 2015',
      scenario: `Praluent has just launched at $14,600 a year. You have no outcomes data yet; FOURIER will read out in about 18 months. An independent group, ICER, is about to publish a report saying the drugs are worth a small fraction of that. Tens of millions of patients could eventually qualify, and payers are already signaling they'll restrict access. What list price do you set?`,
      options: [
        {label: 'About $14,000: in line with Praluent and with specialty biologics', outcome: 'You avoid a price war, protect room for rebates, and keep the price anchored for the day FOURIER succeeds. But at this price every payer treats the drug as a budget threat, and prior authorization will throttle volume. Your revenue depends on how many patients get through the gate, and that number will be small.'},
        {label: 'About $7,000: near the top of the cost-effectiveness range', outcome: 'Payers have less reason to fight, and ICER\'s analysis would look closer to acceptable. But you\'ve cut revenue per patient in half with no guarantee that insurers relax their rules, Praluent might follow you down, and you\'ve given up price you can never easily take back if the outcomes trial is a triumph.'},
        {label: 'About $2,000: price for mass volume, like a primary-care drug', outcome: 'Close to ICER\'s budget-impact benchmark. Access might be broad. But you\'d need many times the patient volume just to match the revenue of the $14,000 strategy, your company\'s manufacturing and sales plans were built for a specialty drug, and investors would ask why you priced a first-in-class biologic like a generic.'},
      ],
      reality: `Amgen set a list price of $14,100 a year, about 3% below Praluent. The outcome was the throttled scenario: in the first year fewer than half of prescriptions were ever approved and fewer than a third of patients got the drug. Repatha sold $141 million in 2016 and $319 million in 2017. Amgen gave growing rebates (ICER estimated the 2017 net price at about $8,970), discussed outcomes-based deals that would refund payers if patients had cardiovascular events, and then, in October 2018, cut the list price itself by 60%. Arguably, the launch price bought margin per patient at the cost of three years of volume.`},

    {type: 'callout', variant: 'product', heading: 'The user is not the buyer', html: `<p>Enterprise software teams learn this early: the person who loves the product (the end user) is not the person who signs the contract (procurement, the CFO). Repatha had enthusiastic users (cardiologists) and a skeptical buyer (payers) who judged it on budget impact, not on the hazard ratio. The go-to-market plan has to win the buyer.</p><p><strong>Where it breaks:</strong> in software a blocked deal means a lost sale. Here a blocked prescription means a patient with heart disease goes without a treatment their doctor believes they need, and the buyer is often spending pooled premiums or public money on behalf of millions of people it will never meet. Patients also pay a share out of pocket, so even an approved "sale" can fail at the pharmacy counter.</p>`},

    {type: 'story', kicker: 'The money', title: 'The 60% cut, and the slow turnaround', tocTitle: 'The price cut', html: `
      <p>By 2018 Amgen had a drug with proven outcomes, a label (since December 2017) saying it reduced heart attacks, strokes and coronary procedures, and sales that were still a rounding error for a company of its size. The rebates it was paying were lowering the [[net price]], but they had a blind spot.</p>
      <p>In the US, a large share of patients who need Repatha are on [[Medicare Part D]]. In much of that benefit, what the patient pays at the pharmacy is set as a percentage of the drug's price before rebates, and rebates flow to the insurer, not to the patient. So a patient on a $14,100 list-price drug could face hundreds of dollars a month even as Amgen's net price fell. Amgen's own filing was blunt: "a very high percentage of Medicare patients have abandoned their Repatha prescriptions rather than pay their co-pay payment."</p>
      <p>In October 2018, Amgen did something unusual. It launched new product codes ([[NDC|NDCs]]) for the same drug at a list price of <strong>$5,850 a year</strong>, 60% lower, "to address affordability for patients, particularly those on Medicare." Regeneron and Sanofi followed: from March 2019, Praluent was available at the same $5,850, also a 60% cut from its original price.</p>
      <p>It didn't work overnight. Amgen warned that payers might be slow to adopt the new codes and might keep restricting access. But the direction was clear. Repatha sales rose 20% in 2019, to $661 million, then $887 million in 2020, and crossed $1 billion in 2021, at $1.12 billion. By 2024 they were $2.22 billion, and in 2025 $3.02 billion. Amgen attributed the growth to volume: in 2024, unit demand rose 43% while the net selling price fell 10%. The drug that couldn't get through the gate at $14,100 became a multibillion-dollar product at a much lower price per patient, sold to many more of them.</p>
      <p>Other things helped. Outcomes data accumulated. The long-term extension showed fewer cardiovascular deaths among patients treated longer. And in August 2025, the FDA broadened the label to adults at increased risk of major cardiovascular events from uncontrolled LDL, removing the requirement for an existing diagnosis of cardiovascular disease.</p>`},

    {type: 'chart', title: 'Repatha worldwide sales', intro: 'Company-reported revenue. Hover for values.',
      chart: {kind: 'line', title: 'Repatha worldwide sales', subtitle: 'US$ billions, company-reported, nominal', unit: '$B',
        series: [{name: 'Repatha', points: [[2016, 0.141], [2017, 0.319], [2018, 0.550], [2019, 0.661], [2020, 0.887], [2021, 1.117], [2022, 1.296], [2023, 1.635], [2024, 2.222], [2025, 3.016]]}],
        annotations: [{x: 2017.2, label: 'FOURIER (Mar 2017)'}, {x: 2018.8, label: 'List price cut 60% (Oct 2018)', dy: 18}],
        yMax: 3.5, xTicks: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
        note: 'Source: Amgen Form 10-K filings for 2018, 2020, 2023 and 2025. Growth after 2018 came from volume; net selling price kept falling.'},
      takeaway: 'Sales took six years to reach $1 billion, then nearly tripled in four. The drug didn\'t change; the price, the evidence and the access did.'},

    {type: 'custom', title: 'Simulator: price, the gate and the pharmacy counter', kicker: 'Teaching model',
      intro: 'Revenue is a funnel: prescriptions × approval rate × share filled × net price. The share filled depends on the patient\'s copay, which in this model is a coinsurance percentage of the list price, so list price matters even when rebates are large. Abandonment is a rough straight-line fit to Navar\'s endpoints: 7.5% at a $0 copay, 75% at $350 a month or more. Start from 2016 conditions, then cut the list price.',
      html: `<div class="card">
        <div class="explorer" style="border:0;padding:0;background:none">
          <label><span>List price per year</span><input type="range" min="2000" max="15000" step="50" value="14100" id="psP"><span class="out" id="psPo"></span></label>
          <label><span>Rebates and discounts (gross-to-net)</span><input type="range" min="0" max="70" step="1" value="38" id="psD"><span class="out" id="psDo"></span></label>
          <label><span>Payer approval rate</span><input type="range" min="10" max="100" step="1" value="47" id="psA"><span class="out" id="psAo"></span></label>
          <label><span>Patient coinsurance (% of list)</span><input type="range" min="0" max="40" step="1" value="25" id="psC"><span class="out" id="psCo"></span></label>
          <label><span>New prescriptions per year</span><input type="range" min="50000" max="1000000" step="10000" value="200000" id="psN"><span class="out" id="psNo"></span></label>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 10px"><button class="btn" id="ps16">Reset to 2016 conditions</button><button class="btn" id="psCut">Apply a 60% list-price cut</button></div>
        <div id="psSvg"></div>
        <div id="psTxt" style="font:400 16.5px/1.6 var(--serif);margin-top:8px"></div>
        <div class="caption">Teaching model. The 2016 settings use measured values: $14,100 list, about 38% gross-to-net (ICER's 2017 net-price estimate of $8,970), 47% approval (Navar 2017). The coinsurance share and prescription volume are illustrative assumptions, and approval is held fixed unless you move it: in reality, payers also loosened criteria as prices fell. Patients are assumed to stay on treatment all year.</div>
      </div>`,
      init: (root, api) => {
        const $ = id => root.querySelector('#' + id);
        const ins = ['psP', 'psD', 'psA', 'psC', 'psN'];
        const money = x => x >= 1e9 ? '$' + (x / 1e9).toFixed(2) + 'B' : '$' + Math.round(x / 1e6) + 'M';
        function draw() {
          const P = +$('psP').value, D = +$('psD').value / 100, A = +$('psA').value / 100, C = +$('psC').value / 100, N = +$('psN').value;
          $('psPo').textContent = '$' + P.toLocaleString('en-US'); $('psDo').textContent = Math.round(D * 100) + '%'; $('psAo').textContent = Math.round(A * 100) + '%'; $('psCo').textContent = Math.round(C * 100) + '%'; $('psNo').textContent = (N / 1000) + 'k';
          const copay = C * P / 12, ab = Math.min(0.75, 0.075 + 0.675 * Math.min(1, copay / 350)), fill = 1 - ab;
          const approved = N * A, treated = approved * fill, net = P * (1 - D), rev = treated * net;
          const bars = [['Prescribed', N, 'il-8'], ['Approved', approved, 'il-1s'], ['Filled', treated, 'il-1']];
          let s = '<svg viewBox="0 0 720 200" style="width:100%;height:auto;display:block">';
          bars.forEach(([lab, val, cls], i) => { const w = Math.max(2, val / N * 360); s += '<text x="10" y="' + (40 + i * 52) + '" class="il-text">' + lab + '</text><rect x="110" y="' + (20 + i * 52) + '" width="' + w + '" height="30" rx="6" class="' + cls + '"/><text x="' + (120 + w) + '" y="' + (40 + i * 52) + '" class="il-text-2">' + Math.round(val).toLocaleString('en-US') + '</text>'; });
          s += '<rect x="580" y="20" width="130" height="134" rx="12" class="il-6s il-line"/><text x="645" y="50" text-anchor="middle" class="il-text-2">net revenue</text><text x="645" y="84" text-anchor="middle" class="il-num">' + money(rev) + '</text><text x="645" y="112" text-anchor="middle" class="il-small">per year</text><text x="645" y="136" text-anchor="middle" class="il-small">net $' + Math.round(net).toLocaleString('en-US') + '/patient</text>';
          s += '</svg>';
          $('psSvg').innerHTML = s;
          $('psTxt').innerHTML = 'Patient copay about <b>$' + Math.round(copay) + ' a month</b>, so about <b>' + Math.round(ab * 100) + '%</b> of approved prescriptions are abandoned. <b>' + Math.round(treated).toLocaleString('en-US') + '</b> patients treated. Try cutting the list price while raising the rebate less: fewer patients walk away at the counter, and if payers also approve more, volume can more than make up for the lower price.';
        }
        ins.forEach(id => $(id).addEventListener('input', draw));
        $('ps16').onclick = () => { $('psP').value = 14100; $('psD').value = 38; $('psA').value = 47; $('psC').value = 25; $('psN').value = 200000; draw(); };
        $('psCut').onclick = () => { $('psP').value = 5850; $('psD').value = 20; draw(); };
        draw();
      }},

    {type: 'decision', title: 'Decision: cut the list price?', role: 'You run Amgen\'s US cardiovascular business, mid-2018',
      scenario: `FOURIER is on the label. Your net price is already far below list thanks to rebates to insurers and PBMs. But Medicare patients keep abandoning prescriptions because their copay is calculated on the list price. Cutting list price 60% will shrink the rebates you can offer PBMs, who earn money from them, and could invite pressure to cut other drugs' prices too. Sales last year were $319 million.`,
      options: [
        {label: 'Keep the list price; raise rebates to buy better formulary positions', outcome: 'The industry-standard move. PBMs like it, and net price can fall quietly without resetting public list prices. But it does nothing for the Medicare patient facing a copay pegged to a $14,100 list price, which is exactly where your prescriptions are dying.'},
        {label: 'Launch a lower-list-price version at $5,850', outcome: 'You attack the abandonment problem directly: copays tied to list price fall with it. You also give up the rebate currency PBMs are used to, and risk a period where plans are slow to adopt the new codes. It\'s a bet that volume and goodwill beat margin per patient.'},
        {label: 'Keep the price and fund copay assistance programs', outcome: 'Copay cards help commercially insured patients, but federal anti-kickback rules generally bar manufacturers from paying Medicare patients\' copays, and Medicare patients are where the abandonment is worst. This fixes the wrong half of the problem.'},
      ],
      reality: `Amgen launched new NDCs at a 60% lower list price of $5,850 a year in October 2018, citing affordability "particularly for those on Medicare." Regeneron and Sanofi matched it for Praluent from March 2019. Adoption by payers took time, but Repatha sales grew every year afterward, from $550 million in 2018 to $3.0 billion in 2025, with growth driven by volume while net price kept falling.`},

    {type: 'callout', variant: 'whatif', heading: 'What if Amgen had launched at $5,850?', html: `<p>Suppose Repatha had launched in 2015 at the price it reached in 2018. ICER's first analysis put the price for $100,000 per QALY at $5,404, so the drug would have been close to conventional value before any outcomes data. Payers might have written looser criteria, and far fewer Medicare patients would have walked away at the pharmacy. Three years of volume, and three years of heart attacks prevented in real patients, might have been gained.</p><p>But it is not obvious. ICER's budget-impact benchmark was still lower ($2,177), payers restrict any drug that could reach millions, and Praluent could have undercut. And Amgen would have given up the chance to price up on a FOURIER win that, as it turned out, never came in the form of a death benefit. Launch price is a one-way door: it is easy to cut and very hard to raise.</p>`},

    // ---------------- PATENTS ----------------
    {type: 'story', kicker: 'Patents', title: 'Can you patent a target?', tocTitle: 'The patent war', html: `
      <p>Amgen and Regeneron each held patents on their own antibodies, described by their exact sequence of amino acids. Those patents were not in dispute. The fight was over something far bigger.</p>
      <p>In 2014, Amgen obtained two more patents, related to its original filing, that claimed what the Supreme Court would later call "the entire genus" of antibodies that do two things: bind to specific amino-acid positions on PCSK9, and block PCSK9 from binding to LDL receptors. In other words, not one molecule but any antibody that works the way Amgen's worked. Amgen's patent application had disclosed the sequences of 26 such antibodies and described a method, which Amgen called "the roadmap," for finding more: make many antibodies, then screen them for the ones that bind and block. Alirocumab, a different antibody discovered separately at Regeneron, did both. So Amgen sued Regeneron and Sanofi for infringement.</p>
      <p>Regeneron and Sanofi argued that the broad patents were invalid because they failed the [[enablement]] requirement: a patent must teach a skilled person how to make and use everything it claims. Amgen's claims, they said, covered potentially millions of antibodies that no one had made, and the roadmap was just trial and error.</p>
      <p>The case went back and forth for seven years. A Delaware jury sided with Amgen in March 2016. On January 5, 2017, the judge granted a permanent injunction that would have barred Praluent from the US market, a remarkable remedy against an approved heart drug. The [[Federal Circuit]] stayed the injunction in February 2017 and in October 2017 vacated it and ordered a new trial. A second jury sided largely with Amgen in February 2019, but in August 2019 the judge ruled as a matter of law that the claims were not enabled. The Federal Circuit agreed in 2021.</p>
      <p>On May 18, 2023, a unanimous Supreme Court, in an opinion by Justice Neil Gorsuch, ruled against Amgen. The Court reached back to 19th-century cases about Samuel Morse's telegraph and Edison's light bulb. "The more one claims, the more one must enable," Gorsuch wrote. Amgen's roadmap and its other method, he said, amounted to "little more than two research assignments." If you claim a whole class of antibodies defined by what they do, you must teach others how to make the whole class, not just give them a procedure for searching.</p>
      <p>The ruling mattered far beyond cholesterol. It told the biotech industry that a first-mover cannot lock up a target, or a mechanism, by claiming every antibody that hits it. It can patent the antibodies it actually invents. Fast followers with their own molecules remain free to compete. Europe had already reached a similar place: in 2020 the European Patent Office's appeal board upheld Amgen claims covering Repatha while ruling broader claims covering Praluent invalid.</p>`},

    {type: 'custom', title: 'Write the claim', kicker: 'Interactive', intro: 'You are Amgen\'s patent counsel. Pick how broadly to claim your invention, and see what the claim covers and how it fared. Dots stand for antibodies that bind PCSK9 and block the receptor.',
      html: `<div class="card">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px" id="pcBtns">
          <button class="btn primary" data-c="0">A. Claim evolocumab by its sequence</button><button class="btn" data-c="1">B. Claim every antibody that binds these sites and blocks</button><button class="btn" data-c="2">C. Claim any drug that blocks PCSK9</button>
        </div>
        <div id="pcSvg"></div>
        <div id="pcTxt" style="font:400 16.5px/1.6 var(--serif);margin-top:8px;min-height:110px"></div>
      </div>`,
      init: (root) => {
        let seed = 11; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
        const dots = []; for (let i = 0; i < 90; i++) { const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 150; dots.push([360 + r * Math.cos(a) * 1.5, 150 + r * Math.sin(a) * 0.8]); }
        const known = []; for (let i = 0; i < 26; i++) { const a = rnd() * 6.283, r = 14 + Math.sqrt(rnd()) * 36; known.push([250 + r * Math.cos(a), 140 + r * Math.sin(a)]); }
        const txt = [
          '<b>Narrow and solid.</b> Amgen did hold patents on its own antibody by sequence, as Regeneron did on alirocumab. Such claims are easy to enable: you have made the molecule. But they don\'t stop a competitor who finds a different antibody that does the same job. Praluent is outside the circle.',
          '<b>Broad, and struck down.</b> This is what Amgen\'s 2014 patents claimed: the "entire genus" of antibodies that bind specific PCSK9 residues and block receptor binding. It covered Praluent, and two juries upheld it. But Amgen had disclosed 26 antibodies and a trial-and-error "roadmap" for potentially millions more. A unanimous Supreme Court held in 2023 that the claims were not enabled: "The more one claims, the more one must enable."',
          '<b>Hypothetical, and even weaker.</b> Amgen never claimed this. A claim to any drug blocking PCSK9 would cover inclisiran, oral peptides and gene editors, none of which Amgen invented or taught anyone to make. After <em>Amgen v. Sanofi</em>, a claim this broad would face the same enablement problem, only worse. Targets and mechanisms are, in practice, open to everyone.',
        ];
        const box = root.querySelector('#pcSvg'), out = root.querySelector('#pcTxt');
        function draw(c) {
          let s = '<svg viewBox="0 0 720 300" style="width:100%;height:auto;display:block">';
          s += '<ellipse cx="360" cy="150" rx="340" ry="140" class="' + (c === 2 ? 'il-1s' : 'il-bg') + ' il-line"/>';
          s += '<text x="40" y="30" class="il-small">' + (c === 2 ? 'claim C covers the whole space, including RNA drugs, pills and gene editors' : 'all PCSK9-blocking drugs') + '</text>';
          s += '<ellipse cx="330" cy="150" rx="250" ry="112" class="' + (c === 1 ? 'il-1s' : 'il-paper') + ' il-line"/>';
          s += '<text x="330" y="54" text-anchor="middle" class="il-small">antibodies that bind these PCSK9 sites and block the receptor</text>';
          dots.forEach(([x, y]) => { if (((x - 330) / 240) ** 2 + ((y - 150) / 104) ** 2 < 1) s += '<circle cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="3.5" class="il-8"/>'; });
          known.forEach(([x, y]) => { s += '<circle cx="' + x.toFixed(0) + '" cy="' + y.toFixed(0) + '" r="5" class="il-1"/>'; });
          s += '<circle cx="250" cy="140" r="9" class="il-1" style="stroke:var(--il-ink);stroke-width:2"/>';
          if (c === 0) s += '<circle cx="250" cy="140" r="14" class="il-none" style="stroke:var(--il-7);stroke-width:3" fill="none"/>';
          s += '<text x="180" y="216" class="il-text">26 antibodies Amgen sequenced</text><text x="188" y="145" text-anchor="end" class="il-text" style="fill:var(--il-1)">evolocumab</text>';
          s += '<circle cx="470" cy="170" r="10" class="il-2" style="stroke:var(--il-ink);stroke-width:2"/><text x="486" y="175" class="il-text">alirocumab</text>';
          s += '<text x="420" y="230" class="il-small">gray: antibodies nobody has made yet</text>';
          s += '<path d="M628 110 q8 -8 16 0 t16 0" class="il-none st-5" stroke-width="3" fill="none"/><text x="604" y="132" class="il-small">siRNA</text><circle cx="650" cy="178" r="7" class="il-none st-6" stroke-width="3" fill="none"/><text x="624" y="202" class="il-small">oral pill</text>';
          const covers = c === 0 ? 'Covers Praluent: no · Survived: yes' : c === 1 ? 'Covers Praluent: yes · Survived: no (2023)' : 'Covers everything · Never claimed';
          s += '<rect x="440" y="252" width="270" height="36" rx="10" class="il-paper il-line"/><text x="575" y="275" text-anchor="middle" class="il-text">' + covers + '</text></svg>';
          box.innerHTML = s; out.innerHTML = txt[c];
          root.querySelectorAll('#pcBtns button').forEach(b => b.classList.toggle('primary', +b.dataset.c === c));
        }
        root.querySelector('#pcBtns').addEventListener('click', e => { const b = e.target.closest('button'); if (b) draw(+b.dataset.c); });
        draw(0);
      }},

    {type: 'callout', variant: 'product', heading: 'Patenting the interface versus the implementation', html: `<p>Software engineers know the debate: can you own an API, or only your code that implements it? Amgen tried to own something like the interface, every antibody that binds PCSK9 at a given spot and blocks the receptor, rather than its own implementation. The Supreme Court said you own what you actually build and teach others to build.</p><p><strong>Where it breaks:</strong> a software implementation can be rewritten in weeks. Finding a second antibody that works in people, making it at scale and proving it in 20,000-patient trials takes a decade and billions of dollars. That is why broad claims were tempting, and why the ruling reshaped how biotech companies value a first-mover position: the moat is the molecule, the data and the execution, not the target.</p>`},

    // ---------------- WHAT CAME NEXT ----------------
    {type: 'story', kicker: 'What came next', title: 'Every way to switch off one gene', tocTitle: 'What came next', html: `
      <p>Once human genetics had shown that less PCSK9 is good, the question became how else to get there. The following decade turned PCSK9 into a showcase of nearly every [[modality]] in modern drug development, all aimed at the same protein.</p>
      <h3>An RNA drug twice a year</h3>
      <p>Alnylam, a pioneer of RNA interference, designed inclisiran: an [[siRNA]], a short double-stranded RNA that guides the liver cell's own machinery to destroy the messenger RNA for PCSK9, so the cell makes less of the protein. A [[GalNAc]] sugar tag delivers it to the liver. Alnylam licensed it in February 2013 to The Medicines Company, which ran the big trials. In ORION-10 and ORION-11, about 3,200 patients in all, inclisiran given on day 1, day 90 and every six months cut LDL by about 50%. In November 2019, Novartis agreed to buy The Medicines Company for about $9.7 billion, $85 a share, mainly for that drug. The FDA rejected the first application in December 2020 over unresolved manufacturing-site inspection issues, then approved inclisiran, as Leqvio, on December 22, 2021. Its selling point is practical: a nurse gives it twice a year in the clinic, so adherence doesn't depend on patients remembering injections. Its outcomes trials are still running; ORION-4, with 16,124 patients in the UK and US, is expected to report in early 2027.</p>
      <h3>A pill</h3>
      <p>Merck spent years on the problem that made PCSK9 an antibody target in the first place: blocking a flat protein-protein handshake with something small enough to swallow. Its answer, enlicitide, is a [[macrocyclic peptide]], a ring of amino acids that holds a rigid shape and survives the gut well enough to work once a day. In the CORALreef Lipids trial of 2,909 people, published in 2026, it cut LDL by 55.8 percentage points relative to placebo at 24 weeks, similar to the antibodies. The FDA approved it as Lipfendra on July 15, 2026, on LDL lowering; the CORALreef Outcomes trial is still under way. A second oral approach, the small molecule laroprovstat, which interferes with how PCSK9 drags receptors to the lysosome, lowered LDL by up to 51% in phase 2.</p>
      <h3>Once in a lifetime</h3>
      <p>The most radical idea copies the aerobics instructor directly: edit the gene. Verve Therapeutics, co-founded by the cardiologist and geneticist Sekar Kathiresan, uses [[base editing]], which changes a single DNA letter without cutting both DNA strands, delivered to the liver in a [[lipid nanoparticle]]. The edit disrupts the <em>PCSK9</em> gene in liver cells, permanently. Its first candidate, VERVE-101, hit trouble: in April 2024 Verve paused enrollment after one patient had a severe, temporary rise in a liver enzyme and a drop in blood platelets. It moved to VERVE-102, with a redesigned GalNAc-tagged particle; in 2025 a single infusion at the highest dose tested lowered LDL by an average of 53%, and up to 69%. In June 2025 Eli Lilly agreed to buy Verve for $10.50 a share in cash, about $1.0 billion, plus up to $3.00 a share more if VERVE-102 reaches a US phase 3 trial, for a total of up to about $1.3 billion. Lilly completed the tender offer in July 2025. Whether regulators and patients will accept a permanent edit for a condition that pills and injections can manage is the open question.</p>
      <h3>Earlier treatment, more evidence</h3>
      <p>Amgen, meanwhile, went back to the genetics' central lesson: benefit grows with time. VESALIUS-CV enrolled 12,257 people who had atherosclerosis or diabetes but had never had a heart attack or stroke, and followed them for a median of 4.6 years, twice as long as FOURIER. Reported in November 2025, evolocumab cut the combination of coronary death, heart attack or ischemic stroke by 25% (5-year rates 6.2% versus 8.0%; hazard ratio 0.75), and heart attacks by 36%. It was the first evidence that a PCSK9 inhibitor helps before a first event, in the kind of [[primary prevention]] population that is far larger than the heart-attack survivors of FOURIER.</p>`},

    {type: 'figure', title: 'Four ways to silence PCSK9', intro: 'Every approach ends with more LDL receptors surviving; they differ in where they intervene and how often you need them. Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 420">
        <rect x="20" y="30" width="580" height="360" rx="36" class="il-8s"/>
        <text x="44" y="64" class="il-title">Liver cell</text>
        <rect x="604" y="30" width="276" height="360" rx="20" class="il-7s"/>
        <text x="624" y="64" class="il-title">Blood</text>
        <path d="M596 44 V376 M604 44 V376" class="il-line2" fill="none"/>
        <g data-part="dna"><circle cx="150" cy="220" r="82" class="il-6s il-line"/><path d="M110 170 C150 200 110 240 150 270 M150 170 C110 200 150 240 110 270" class="il-none st-6" stroke-width="3" fill="none"/><path d="M116 185 H144 M114 220 H146 M116 255 H144" class="il-line" fill="none"/><text x="180" y="200" class="il-text">PCSK9</text><text x="180" y="218" class="il-text">gene</text><text x="180" y="236" class="il-small">(DNA)</text></g>
        <g data-part="edit"><path d="M78 118 L112 152" class="il-none st-1" stroke-width="10" stroke-linecap="round" fill="none"/><path d="M112 152 L120 164 L106 158 Z" class="il-1"/><text x="40" y="104" class="il-text" style="fill:var(--il-1)">base editor: once</text></g>
        <g data-part="mrna"><path d="M236 220 q12 -12 24 0 t24 0 t24 0 t24 0 t24 0" class="il-none st-5" stroke-width="3.5" fill="none"/><text x="250" y="196" class="il-text-2">mRNA</text></g>
        <g data-part="sirna"><path d="M252 246 q12 -12 24 0 t24 0 t24 0" class="il-none st-1" stroke-width="4.5" fill="none"/><path d="M300 208 L320 230 M320 208 L300 230" class="il-none st-1" stroke-width="4" stroke-linecap="round" fill="none"/><text x="236" y="290" class="il-text" style="fill:var(--il-1)">siRNA: twice a year</text></g>
        <g data-part="protein"><path d="M408 220 C408 200 430 194 444 201 C460 208 464 228 452 240 C438 252 410 244 408 220 Z" class="il-2"/><text x="398" y="276" class="il-text-2">PCSK9 protein</text><path d="M466 214 C520 190 580 170 680 150" class="il-none st-2 flow" stroke-width="3" fill="none"/></g>
        <g data-part="mab"><path d="M700 150 C700 132 720 126 734 132 C750 138 754 158 742 170 C728 182 702 176 700 150 Z" class="il-2"/><path d="M790 90 V112 M790 112 L774 132 M790 112 L806 132" class="il-none st-1" stroke-width="8" stroke-linecap="round" fill="none" transform="translate(-54 0)"/><text x="664" y="204" class="il-text" style="fill:var(--il-1)">antibody: every</text><text x="664" y="222" class="il-text" style="fill:var(--il-1)">2–4 weeks</text></g>
        <g data-part="oral"><path d="M700 262 C700 244 720 238 734 244 C750 250 754 270 742 282 C728 294 702 288 700 262 Z" class="il-2"/><circle cx="772" cy="262" r="16" class="il-none st-1" stroke-width="6" fill="none"/><text x="720" y="318" class="il-text" style="fill:var(--il-1)">oral peptide: daily pill</text></g>
        <g data-part="receptor"><rect x="578" y="340" width="44" height="12" rx="4" class="il-3"/><path d="M638 328 H624 V364 H638" class="il-none st-3" stroke-width="6" stroke-linecap="round" fill="none"/><text x="470" y="374" class="il-text">LDL receptor</text></g>
      </svg>`,
      hotspots: {
        dna: {title: 'The gene', text: 'The <em>PCSK9</em> gene in each liver cell\'s DNA. The aerobics instructor was born with both copies broken; gene editing tries to recreate that state in adults.'},
        edit: {title: 'Base editing: VERVE-102 (Lilly)', text: 'A one-time infusion of a [[base editing|base editor]] in a lipid nanoparticle, designed to change one DNA letter and disrupt the gene permanently in liver cells. VERVE-102 lowered LDL by an average of 53% at its top dose in early testing. Lilly bought Verve in 2025 for up to about $1.3 billion. Irreversible, which is both the appeal and the worry.'},
        mrna: {title: 'The messenger RNA', text: 'The working copy of the gene that the cell reads to build PCSK9 protein.'},
        sirna: {title: 'siRNA: inclisiran (Leqvio, Novartis)', text: 'An [[siRNA]] tagged with [[GalNAc]] to reach the liver. It triggers destruction of PCSK9 messenger RNA. Given at day 1, day 90, then every six months; LDL about 50% lower. Approved December 2021; outcomes trials still running.'},
        protein: {title: 'PCSK9 protein', text: 'Made in the liver and secreted into the blood, where it finds LDL receptors.'},
        mab: {title: 'Antibodies: Repatha and Praluent', text: '[[monoclonal antibody|Monoclonal antibodies]] that grab PCSK9 in the blood and block the site it uses to bind the receptor. Self-injected every two weeks or monthly. LDL about 60% lower. The only class with completed outcomes trials: FOURIER, ODYSSEY OUTCOMES and VESALIUS-CV.'},
        oral: {title: 'Oral: enlicitide (Lipfendra, Merck)', text: 'A [[macrocyclic peptide]] taken once a day that blocks the same PCSK9-receptor handshake as the antibodies. About 56 percentage points more LDL lowering than placebo in CORALreef Lipids. FDA-approved July 2026 on LDL lowering; outcomes trial ongoing.'},
        receptor: {title: 'The common endpoint', text: 'All four approaches aim to leave more [[LDL receptor|LDL receptors]] on liver cells, so more LDL is cleared. Same target, same biology, very different products: frequency, route, reversibility, manufacturing and price.'},
      },
      caption: 'Schematic. The genetics validated the target once; the industry then built the same benefit four different ways.'},

    {type: 'table', title: 'The PCSK9 class, side by side', intro: 'Status as of September 2026.',
      columns: ['', 'Repatha (evolocumab)', 'Praluent (alirocumab)', 'Leqvio (inclisiran)', 'Lipfendra (enlicitide)', 'VERVE-102'],
      rows: [
        ['Company', 'Amgen', 'Regeneron (US), Sanofi (ex-US)', 'Novartis (from Alnylam, The Medicines Co.)', 'Merck', 'Eli Lilly (from Verve)'],
        ['Modality', 'Fully human [[monoclonal antibody]]', 'Fully human monoclonal antibody', '[[siRNA]]', 'Oral [[macrocyclic peptide]]', '[[base editing|Base editor]] in a lipid nanoparticle'],
        ['How often', 'Every 2 weeks or monthly, self-injected', 'Every 2 weeks (or monthly), self-injected', 'Day 1, day 90, then every 6 months, in clinic', 'Once-daily pill', 'Once (intended)'],
        ['LDL lowering', 'About 60%', 'Up to about 60% (61% in phase 1)', 'About 50%', 'About 56 points vs placebo', 'Mean 53% at top dose (phase 1b)'],
        ['Outcomes trial', 'FOURIER (2017), VESALIUS-CV (2025): positive', 'ODYSSEY OUTCOMES (2018): positive', 'ORION-4, VICTORION-2 PREVENT: pending', 'CORALreef Outcomes: pending', 'None yet'],
        ['First US approval', 'August 27, 2015', 'July 24, 2015', 'December 22, 2021', 'July 15, 2026', 'Not approved'],
      ],
      caption: 'Sources: FDA approval records; Sabatine 2017; Schwartz 2018; Bohula 2025; Ray 2020; Navar 2026; Verve Q1 2025 report; company filings.'},

    {type: 'callout', variant: 'lesson', heading: 'Validated targets attract crowds', html: `<p>A target with human genetic proof is valuable precisely because it lowers the risk for everyone, including competitors. Within two decades of the gene's discovery, PCSK9 had antibodies, an RNA drug, an oral peptide and a gene editor, from at least six companies. The first-mover's durable advantages turned out to be outcomes data, manufacturing and commercial execution, not the target itself.</p>`},

    // ---------------- QUIZ ----------------
    {type: 'quiz', title: 'Check your understanding', questions: [
      {q: 'How does PCSK9 raise LDL cholesterol?', options: ['It makes the liver produce more cholesterol', 'It binds LDL receptors and sends them to be destroyed, so fewer receptors clear LDL', 'It blocks HDL from carrying cholesterol away', 'It damages the lining of arteries'], answer: 1, explain: 'PCSK9 escorts the LDL receptor to the lysosome, so it makes one trip instead of many. Fewer receptors on the liver means less LDL cleared from the blood.'},
      {q: 'Why was the PCSK9 genetic evidence stronger than the HDL evidence behind torcetrapib?', options: ['It came from larger observational studies', 'Gene variants are fixed at conception, so they act like a randomized trial; and they tracked actual heart attacks in both directions', 'It came from animal studies that are more reliable than human data', 'Because LDL is easier to measure than HDL'], answer: 1, explain: 'Mendelian randomization avoids lifestyle confounding. PCSK9 variants that raised LDL caused heart disease, those that lowered it prevented heart disease, with a dose-response. HDL rested largely on associations.'},
      {q: 'Why did Horton\'s 2006 experiment joining two mice\'s circulations matter for drug design?', options: ['It showed PCSK9 causes diabetes', 'It showed PCSK9 destroys receptors from the bloodstream, so an antibody that can\'t enter cells could still block it', 'It proved statins and PCSK9 inhibitors can\'t be combined', 'It showed mice don\'t have PCSK9'], answer: 1, explain: 'Secreted PCSK9 from one mouse wiped out liver receptors in the other. The target was outside cells, within reach of an antibody.'},
      {q: 'FOURIER cut LDL by about 60% but reduced major events by only about 20% over 2.2 years, while genetics suggested much larger effects. What is the best explanation?', options: ['The drug doesn\'t really work', 'Genetic effects reflect decades of lower LDL; a short trial started late in life captures only the early part of the benefit', 'The placebo group secretly took the drug', 'LDL is not a cause of heart disease'], answer: 1, explain: 'Benefit accumulates with years of exposure. FOURIER\'s own landmark data and the open-label extension (23% fewer cardiovascular deaths with longer exposure) fit that pattern.'},
      {q: 'In the first year on the market, what share of patients prescribed a PCSK9 inhibitor actually received it?', options: ['About 90%', 'About two thirds', 'About 31%', 'About 5%'], answer: 2, explain: '47.2% of prescriptions were ever approved, and 65.3% of those were filled: 30.9% overall (Navar 2017). Approval didn\'t even vary with LDL level.'},
      {q: 'Why did Amgen cut the list price rather than just offering bigger rebates?', options: ['Rebates are illegal for biologics', 'Many Medicare patients\' copays are tied to the list price, so rebates to insurers didn\'t lower what patients paid, and they abandoned prescriptions', 'The FDA required a price cut after FOURIER', 'Praluent had already cut its price'], answer: 1, explain: 'Amgen cited affordability "particularly for those on Medicare." Rebates lowered Amgen\'s net price but not patients\' pharmacy bills. Praluent followed Amgen\'s cut, in March 2019.'},
      {q: 'ICER\'s 2015 value-based price benchmark ($2,177) was much lower than its cost-effectiveness price range ($5,404–$7,735). Why?', options: ['ICER made an arithmetic error', 'ICER added a budget-impact cap: treating millions of patients at a "cost-effective" price would still add too much to US spending too fast', 'It assumed the drug did not work', 'It used European prices'], answer: 1, explain: 'A drug can be good value per patient and still unaffordable in aggregate when the eligible population is huge. That tension is the heart of the PCSK9 payer fight.'},
      {q: 'What did the Supreme Court decide in Amgen v. Sanofi (2023)?', options: ['That antibodies cannot be patented', 'That Amgen\'s claims to the whole class of antibodies that bind PCSK9 and block the receptor were invalid because Amgen hadn\'t enabled the full class', 'That Praluent infringed Amgen\'s sequence patent', 'That the FDA should not have approved Praluent'], answer: 1, explain: 'Unanimously: "The more one claims, the more one must enable." Amgen\'s 26 examples and "roadmap" were "little more than two research assignments."'},
      {q: 'Pfizer\'s bococizumab hit the same target and lowered LDL, but was abandoned. Why?', options: ['PCSK9 turned out to be the wrong target', 'As a humanized antibody, it provoked high rates of antidrug antibodies in patients', 'It raised LDL instead of lowering it', 'The FDA rejected it for safety'], answer: 1, explain: 'The target was validated; the molecule wasn\'t durable enough. Fully human antibodies like evolocumab and alirocumab avoided the problem.'},
    ]},

    // ---------------- LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'Human genetics is the best target validation', text: 'Gain- and loss-of-function variants, a dose-response, hard outcomes and a healthy "knockout" human told the industry what PCSK9 inhibition would do before any trial. Compare torcetrapib, which rested on associations.', links: ['torcetrapib', 'casgevy', 'trikafta']},
      {title: '"Works" is not the same as "gets paid for"', text: 'FOURIER succeeded, and in its first year fewer than a third of patients prescribed the drug received it. Evidence of benefit is necessary; evidence of value at a price, for a population a payer can afford, is a separate test.', links: ['sovaldi', 'exubera', 'zolgensma']},
      {title: 'The payer is the customer', text: 'Doctors chose, insurers decided, and patients paid a share. A launch price is a one-way door, and list price still matters when patients\' copays are pegged to it.', links: ['humira', 'ozempic', 'sovaldi']},
      {title: 'Patent the molecule, not the target', text: 'Amgen v. Sanofi confirmed that you can own the antibodies you invent and teach, not every antibody that hits a target. Fast followers with their own molecules can compete.', links: ['humira', 'keytruda']},
      {title: 'Short trials understate slow benefits', text: 'Lowering LDL prevents new damage over years. Two-year trials show a fraction of the lifelong effect, and choices like follow-up length and endpoint decide what a trial can prove.', links: ['leqembi', 'aduhelm', 'vioxx']},
      {title: 'A validated target becomes a platform for modalities', text: 'Antibody, siRNA, oral peptide and base editor all aim at one protein. The winner may be decided by dosing frequency, route and price rather than mechanism.', links: ['spinraza', 'ozempic', 'comirnaty']},
    ]},

    // ---------------- SOURCES ----------------
    {type: 'sources', title: 'Sources', items: [
      {text: 'Seidah NG et al. The secretory proprotein convertase neural apoptosis-regulated convertase 1 (NARC-1): liver regeneration and neuronal differentiation. PNAS 2003.', url: 'https://europepmc.org/article/MED/12552133'},
      {text: 'Abifadel M, ... Seidah NG, Boileau C. Mutations in PCSK9 cause autosomal dominant hypercholesterolemia. Nat Genet 2003.', url: 'https://europepmc.org/article/MED/12730697'},
      {text: 'Cohen J, Pertsemlidis A, Kotowski IK, Graham R, Garcia CK, Hobbs HH. Low LDL cholesterol in individuals of African descent resulting from frequent nonsense mutations in PCSK9. Nat Genet 2005.', url: 'https://europepmc.org/article/MED/15654334'},
      {text: 'Cohen JC, Boerwinkle E, Mosley TH, Hobbs HH. Sequence variations in PCSK9, low LDL, and protection against coronary heart disease. NEJM 2006.', url: 'https://europepmc.org/article/MED/16554528'},
      {text: 'Nelson MR et al. The support of human genetic evidence for approved drug indications. Nat Genet 2015.', url: 'https://europepmc.org/article/MED/26121088'},
      {text: 'Kotowski IK et al. A spectrum of PCSK9 alleles contributes to plasma levels of low-density lipoprotein cholesterol (Dallas Heart Study). Am J Hum Genet 2006.', url: 'https://europepmc.org/article/MED/16465619'},
      {text: 'Zhao Z et al. Molecular characterization of loss-of-function mutations in PCSK9 and identification of a compound heterozygote. Am J Hum Genet 2006 (quote describing the woman with no PCSK9).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1559532/'},
      {text: 'Lagace TA et al. Secreted PCSK9 decreases the number of LDL receptors in hepatocytes and in livers of parabiotic mice. J Clin Invest 2006.', url: 'https://europepmc.org/article/MED/17080197'},
      {text: 'The Nobel Assembly at Karolinska Institutet. Press release: The Nobel Prize in Physiology or Medicine 1985 (Brown and Goldstein; LDL receptor discovered in 1973; receptor recycling).', url: 'https://www.nobelprize.org/prizes/medicine/1985/press-release/'},
      {text: 'Cholesterol Treatment Trialists\' (CTT) Collaboration. Efficacy and safety of more intensive lowering of LDL cholesterol: a meta-analysis of data from 170,000 participants in 26 randomised trials. Lancet 2010.', url: 'https://europepmc.org/article/MED/21067804'},
      {text: 'Ference BA et al. Effect of long-term exposure to lower LDL cholesterol beginning early in life on the risk of coronary heart disease: a Mendelian randomization analysis. JACC 2012.', url: 'https://europepmc.org/article/MED/23083789'},
      {text: 'Ference BA et al. Variation in PCSK9 and HMGCR and risk of cardiovascular disease and diabetes. NEJM 2016.', url: 'https://europepmc.org/article/MED/27959767'},
      {text: 'Dubuc G et al. A new method for measurement of total plasma PCSK9: clinical applications (PCSK9 rises with statin dose). J Lipid Res 2010.', url: 'https://europepmc.org/article/MED/19571328'},
      {text: 'Chan JC et al. (Amgen). A PCSK9 neutralizing antibody reduces serum cholesterol in mice and nonhuman primates. PNAS 2009.', url: 'https://europepmc.org/article/MED/19443683'},
      {text: 'Stein EA et al. Effect of a monoclonal antibody to PCSK9 on LDL cholesterol (REGN727, phase 1). NEJM 2012.', url: 'https://europepmc.org/article/MED/22435370'},
      {text: 'Ridker PM et al. Cardiovascular efficacy and safety of bococizumab in high-risk patients (SPIRE-1 and SPIRE-2). NEJM 2017.', url: 'https://europepmc.org/article/MED/28304242'},
      {text: 'Sabatine MS et al. Evolocumab and clinical outcomes in patients with cardiovascular disease (FOURIER). NEJM 2017.', url: 'https://europepmc.org/article/MED/28304224'},
      {text: 'REPATHA (evolocumab) US prescribing information, DailyMed, 2026 (FOURIER Table 3; LDL <25 mg/dL in 47%; EBBINGHAUS; half-life; IgG2).', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cd61e902-166d-4aa6-9f3c-a18c1008d07e'},
      {text: 'O\'Donoghue ML et al. Long-term evolocumab in patients with established atherosclerotic cardiovascular disease (FOURIER-OLE). Circulation 2022.', url: 'https://europepmc.org/article/MED/36031810'},
      {text: 'Schwartz GG et al. Alirocumab and cardiovascular outcomes after acute coronary syndrome (ODYSSEY OUTCOMES). NEJM 2018.', url: 'https://europepmc.org/article/MED/30403574'},
      {text: 'Bohula EA et al. Evolocumab in patients without a previous myocardial infarction or stroke (VESALIUS-CV). NEJM 2025/2026.', url: 'https://europepmc.org/article/MED/41211925'},
      {text: 'US FDA, Drugs@FDA / openFDA records: Praluent BLA 125559 (approved July 24, 2015); Repatha BLA 125522 (August 27, 2015; efficacy supplement December 1, 2017); Leqvio NDA 214012 (December 22, 2021); Lipfendra NDA 220848 (July 15, 2026).', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/'},
      {text: 'Institute for Clinical and Economic Review. PCSK9 inhibitors for treatment of high cholesterol: final evidence report, November 24, 2015 (list prices, $2,177 benchmark, budget impact).', url: 'https://icer.org/wp-content/uploads/2020/10/Final-Report-for-Posting-11-24-15-1.pdf'},
      {text: 'Institute for Clinical and Economic Review. Evolocumab for treatment of high cholesterol: New Evidence Update, September 11, 2017 (net price estimate, $1.34M per QALY, landmark analyses, C+ rating).', url: 'https://icer.org/wp-content/uploads/2020/10/ICER_PCSK9_NEU_091117.pdf'},
      {text: 'Kazi DS et al. Cost-effectiveness of PCSK9 inhibitor therapy in patients with heterozygous familial hypercholesterolemia or atherosclerotic cardiovascular disease. JAMA 2016.', url: 'https://europepmc.org/article/MED/27533159'},
      {text: 'Kazi DS et al. Updated cost-effectiveness analysis of PCSK9 inhibitors based on the results of the FOURIER trial. JAMA 2017.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5817484/'},
      {text: 'Navar AM et al. Association of prior authorization and out-of-pocket costs with patient access to PCSK9 inhibitor therapy. JAMA Cardiol 2017.', url: 'https://europepmc.org/article/MED/28973087'},
      {text: 'Amgen Inc. Form 10-K filings for 2014, 2015, 2018, 2020, 2023 and 2025 (BLA filing, FDA label restriction, 60% list price cut to $5,850, Medicare abandonment, Repatha sales 2016–2025, VESALIUS-CV, label broadening, European patent rulings).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000318154&type=10-K'},
      {text: 'Regeneron Pharmaceuticals Form 10-K filings for 2015, 2017 and 2019 (priority review voucher, injunction and patent litigation history); Regeneron Q1 2019 results (Praluent at $5,850 from March 2019).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000872589&type=10-K'},
      {text: 'Amgen Inc. v. Sanofi, 598 U.S. ___ (2023), No. 21-757, decided May 18, 2023. Opinion of the Court by Justice Gorsuch.', url: 'https://www.supremecourt.gov/opinions/22pdf/21-757_k5g1.pdf'},
      {text: 'Novartis media release, November 24, 2019: Novartis to acquire The Medicines Company for USD 9.7 bn (Form 6-K).', url: 'https://www.sec.gov/Archives/edgar/data/1114448/000117184319007762/f6k_112519.htm'},
      {text: 'Alnylam Pharmaceuticals Form 10-K for 2022 (2013 license of inclisiran to The Medicines Company; December 2020 complete response letter).', url: 'https://www.sec.gov/Archives/edgar/data/1178670/000117867023000005/alny-20221231.htm'},
      {text: 'Ray KK et al. Two phase 3 trials of inclisiran in patients with elevated LDL cholesterol (ORION-10 and ORION-11). NEJM 2020.', url: 'https://europepmc.org/article/MED/32187462'},
      {text: 'Mafham MM et al. HPS-4/TIMI 65/ORION-4: trial design, recruitment and baseline characteristics. Am Heart J 2026.', url: 'https://europepmc.org/article/MED/42567431'},
      {text: 'Navar AM et al. A placebo-controlled trial of the oral PCSK9 inhibitor enlicitide (CORALreef Lipids). NEJM 2026.', url: 'https://europepmc.org/article/MED/41879224'},
      {text: 'Nguyen DQ, Pagidipati NJ, Navar AM. Oral PCSK9 inhibitors: closing the gap between potency and practicality (enlicitide and laroprovstat). Curr Opin Lipidol 2026.', url: 'https://europepmc.org/article/MED/42755338'},
      {text: 'Verve Therapeutics Form 10-K for 2024 (VERVE-101 pause, April 2024; base editing and GalNAc-LNP) and Q1 2025 results (VERVE-102: mean 53%, maximum 69% LDL reduction).', url: 'https://www.sec.gov/Archives/edgar/data/1840574/000095017025070905/verv-ex99_1.htm'},
      {text: 'Eli Lilly and Company, June 17, 2025: Lilly to acquire Verve Therapeutics; and July 24, 2025: expiration of the Verve tender offer.', url: 'https://www.sec.gov/Archives/edgar/data/1840574/000119312525141748/d30505dex991.htm'},
    ]},
  ],
});
