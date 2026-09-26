// Zemdri (plazomicin), Achaogen: an antibiotic that won FDA approval and a company that went bankrupt ten months later.
registerCase({
  id: 'zemdri', kind: 'failure',
  brand: 'Zemdri', generic: 'plazomicin (ACHN-490)', company: 'Achaogen (sold to Cipla in 2019)',
  tagline: `A team in South San Francisco re-engineered an old antibiotic so that bacteria's defenses could no longer disarm it. The FDA approved it in June 2018. It sold $0.8 million that year, and the company filed for bankruptcy ten months after approval. The science worked. The market for new [[antibiotic|antibiotics]] did not.`,
  chips: [['Disease', 'Drug-resistant bacterial infections ([[cUTI]])'], ['Modality', '[[small molecule]] ([[aminoglycoside]])'], ['Target', 'Bacterial [[ribosome]] ([[30S subunit]])'], ['Approved', 'June 25, 2018'], ['Bankruptcy', 'April 15, 2019']],
  readingTime: 34,
  stats: [
    {v: '$0.8M', l: 'Zemdri net sales in 2018, its launch year (launched July 20)', n: 'Achaogen 2018 Form 10-K'},
    {v: '$4.8M', l: 'Upfront cash Cipla paid for worldwide rights (outside Greater China) in bankruptcy', n: 'Achaogen 8-K, July 2019'},
    {v: '$124.4M', l: 'U.S. government ([[BARDA]]) funding for the plazomicin program, 2010–2018', n: 'Achaogen 2018 Form 10-K'},
    {v: '15–0 / 4–11', l: 'FDA advisory committee votes: yes for urinary infections, no for bloodstream infections', n: 'Achaogen 8-K, May 2, 2018'},
    {v: '1.27M', l: 'Deaths worldwide attributable to bacterial [[antimicrobial resistance]] in 2019', n: 'GRAM study, Lancet 2022'},
  ],
  emblem: `<svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="138" class="il-1s"/>
    <rect x="112" y="64" width="76" height="26" rx="7" class="il-8"/>
    <rect x="104" y="88" width="92" height="150" rx="18" class="il-paper il-line2"/>
    <rect x="110" y="146" width="80" height="86" rx="13" class="il-1"/>
    <text x="150" y="196" text-anchor="middle" class="il-white" style="font-size:16px">Zemdri</text>
    <rect x="30" y="206" width="66" height="30" rx="15" class="il-7"/>
    <path d="M26 246 L100 196" class="il-none st-ink" stroke-width="5" stroke-linecap="round"/>
    <path d="M206 92 L230 132 L248 118 L272 196" class="il-none st-6" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M258 190 L274 206 L280 184 Z" class="il-6"/>
  </svg>`,
  facts: {start: 2002, firstHuman: null, approval: 2018, end: 2019, peakSalesB: 0.0008, pivotalN: 609,
    area: 'infectious', modality: 'small molecule', target: 'Bacterial 30S ribosome'},
  themes: ['pricing', 'regulatory', 'competition'],
  glossary: {
    'bacteria': 'Single-celled microbes with no nucleus. Most are harmless or helpful; a few cause infections. They reproduce by splitting in two, sometimes every 20 to 30 minutes.',
    'antibiotic': 'A drug that kills bacteria or stops them growing, by hitting machinery that bacteria have and human cells lack or build differently. Antibiotics do nothing against viruses.',
    'gram-negative': 'Bacteria wrapped in two membranes with a thin cell wall between them. The extra outer membrane keeps many drugs out, which makes gram-negative infections (E. coli, Klebsiella) harder to treat.',
    'ribosome': 'The protein-building machine in every cell. It reads messenger RNA and strings amino acids together in the order the gene specifies. Bacterial ribosomes differ enough from human ones to be a drug target.',
    '30S subunit': 'The smaller of the two pieces of the bacterial ribosome. It holds the messenger RNA and checks that each incoming building block matches the code. Aminoglycosides bind here.',
    'A site': 'The decoding pocket on the ribosome\'s small subunit, part of its 16S ribosomal RNA, where each incoming building block is checked against the messenger RNA code. Aminoglycosides wedge into it.',
    'aminoglycoside': 'A family of antibiotics built from linked sugar rings studded with amino groups (streptomycin, gentamicin, amikacin, plazomicin). They bind the bacterial ribosome and make it misread genes. Powerful and cheap, but they can harm the kidneys and inner ear.',
    'antimicrobial resistance': 'The ability of microbes to survive drugs that used to kill them. It evolves by natural selection whenever drugs are used, and spreads when bacteria pass resistance genes to each other.',
    'AMR': 'Antimicrobial resistance: microbes surviving the drugs designed to kill them.',
    'CRE': 'Carbapenem-resistant Enterobacteriaceae (now also called Enterobacterales): gut bacteria such as E. coli and Klebsiella that resist carbapenems, one of the last reliable antibiotic classes. The CDC calls them an urgent threat.',
    'carbapenem': 'A class of powerful, broad antibiotics (meropenem, imipenem) related to penicillin, long used as a last line of defense against gram-negative bacteria.',
    'Enterobacteriaceae': 'A family of bacteria that live in the gut, including E. coli, Klebsiella and Enterobacter. They cause most urinary tract infections and many bloodstream infections. Renamed Enterobacterales in newer usage.',
    'plasmid': 'A small, separate loop of DNA inside a bacterium that can be copied and passed to other bacteria, even of other species. Plasmids often carry resistance genes.',
    'horizontal gene transfer': 'Bacteria passing genes directly to their neighbors, rather than only to their offspring. It is why resistance can jump between species within a hospital.',
    'beta-lactamase': 'An enzyme some bacteria make that cuts apart penicillin-family antibiotics before they can act.',
    'carbapenemase': 'A beta-lactamase strong enough to destroy carbapenems. KPC, NDM and OXA-48 are the best-known types.',
    'NDM': 'New Delhi metallo-beta-lactamase, a carbapenemase. Bacteria carrying it often also carry a 16S rRNA methyltransferase, which makes them resistant to plazomicin too.',
    'KPC': 'Klebsiella pneumoniae carbapenemase, the most common carbapenem-destroying enzyme in U.S. hospitals. Plazomicin remains active against many KPC producers.',
    'aminoglycoside-modifying enzyme': 'A bacterial enzyme that staples a small chemical group (acetyl, phosphate or adenyl) onto an aminoglycoside so it no longer fits the ribosome. The most common way bacteria resist this drug class. Abbreviated AME.',
    'AME': 'Aminoglycoside-modifying enzyme: a bacterial enzyme that chemically tags an aminoglycoside so it can no longer bind the ribosome. Families are named AAC, APH and ANT.',
    '16S rRNA methyltransferase': 'A bacterial enzyme that adds a methyl group to the ribosome\'s own binding pocket, so no aminoglycoside can bind, plazomicin included. Examples: ArmA, RmtB.',
    'neoglycoside': 'Achaogen\'s name for a next-generation aminoglycoside chemically modified to resist aminoglycoside-modifying enzymes. Plazomicin was the first.',
    'sisomicin': 'A natural aminoglycoside made by soil bacteria (Micromonospora). Achaogen used it, made by fermentation, as the starting material for plazomicin.',
    'HABA': 'Hydroxy-aminobutyric acid: a side chain attached at the N1 position of an aminoglycoside. It blocks several resistance enzymes. Amikacin and plazomicin both carry one.',
    'colistin': 'An old antibiotic that damages bacterial membranes. Doctors largely abandoned it because it harms the kidneys, then revived it as a last resort against CRE.',
    'meropenem': 'A widely used carbapenem antibiotic, given intravenously three times a day. The comparator in the EPIC trial.',
    'cUTI': 'Complicated urinary tract infection: a bladder or kidney infection in someone with a complicating factor such as a blockage, a catheter or a structural problem, plus all kidney infections (pyelonephritis). Usually treated in hospital with IV antibiotics.',
    'pyelonephritis': 'A bacterial infection of the kidney, usually climbing up from the bladder. It can spread into the blood.',
    'bloodstream infection': 'Bacteria growing in the blood (bacteremia). It can trigger sepsis and is often fatal when the bacteria are resistant.',
    'sepsis': 'A life-threatening overreaction of the body to an infection, which can damage organs and cause shock.',
    'non-inferiority trial': 'A trial designed to show a new drug is not unacceptably worse than an existing one, within a pre-set margin. It proves "about as good", not "better".',
    'superiority trial': 'A trial designed to show a new treatment is better than the comparison.',
    'mMITT': 'Microbiological modified intent-to-treat: the randomized patients who received a drug and had a lab-confirmed target infection. The main analysis group in antibiotic trials.',
    'test-of-cure': 'A visit a set time after treatment ends (in EPIC, day 15 to 19 after starting) to check the infection is still gone.',
    'antibiotic stewardship': 'Hospital programs that make sure antibiotics are used only when needed, at the right dose and duration, and keep the newest drugs in reserve so resistance to them grows slowly.',
    'DRG': 'Diagnosis-related group: Medicare pays a hospital one fixed amount per inpatient stay based on the diagnosis, whatever drugs are used. A costly new drug comes out of that fixed payment.',
    'NTAP': 'New Technology Add-on Payment: an extra Medicare payment to hospitals, on top of the DRG, for qualifying new technologies. It covered up to 50% of a new drug\'s cost in 2018 (75% for QIDP antibiotics from October 2019), and only when the stay\'s costs exceed the DRG payment.',
    'QIDP': 'Qualified Infectious Disease Product: an FDA designation under the 2012 GAIN Act that gives an antibiotic priority review and five extra years of market exclusivity.',
    'GAIN Act': 'Generating Antibiotic Incentives Now Act (2012). It created the QIDP designation, with faster review and five extra years of exclusivity for new antibiotics.',
    'BARDA': 'Biomedical Advanced Research and Development Authority, part of the U.S. Department of Health and Human Services. It funds drugs and vaccines for public-health threats, including antibiotic resistance and bioterror agents.',
    'CARB-X': 'Combating Antibiotic-Resistant Bacteria Biopharmaceutical Accelerator: a nonprofit partnership based at Boston University, co-founded by BARDA in 2016, that funds early-stage antibacterial projects.',
    'push incentive': 'Money paid to help develop a drug before approval: grants, contracts, tax credits. It lowers the cost of trying.',
    'pull incentive': 'A reward paid after a drug is approved, such as a guaranteed purchase or a prize. It raises the payoff for succeeding.',
    'subscription model': 'Paying a drug maker a fixed annual fee for access to an antibiotic, whatever volume is used. Sometimes called the "Netflix model". It "delinks" revenue from sales volume.',
    'PASTEUR Act': 'Pioneering Antimicrobial Subscriptions To End Upsurging Resistance Act: a U.S. bill, first introduced in 2020, that would pay for critical new antibiotics through multi-year subscription contracts. Not law as of September 2026.',
    'AMR Action Fund': 'An investment fund of about $1 billion launched in July 2020 by more than 20 drug companies to fund small antibiotic developers, aiming to bring two to four new antibiotics to patients by 2030.',
    'Chapter 11': 'A form of U.S. bankruptcy in which a company keeps operating under court protection while it restructures its debts or sells its assets.',
    'going concern': 'An accounting judgment about whether a company can keep operating for the next year. "Substantial doubt about its ability to continue as a going concern" is a public warning that the money is running out.',
    'complete response letter': 'The FDA\'s letter saying it will not approve an application in its current form, and explaining why.',
    'Special Protocol Assessment': 'A written FDA agreement, before a trial starts, that its design and analysis plan could support approval.',
    'fast track': 'An FDA designation for drugs treating serious conditions with an unmet need. It allows more frequent meetings and rolling submission of the application.',
    'therapeutic drug monitoring': 'Measuring a drug\'s level in a patient\'s blood and adjusting the dose. Recommended for plazomicin in patients with reduced kidney function.',
    'nephrotoxicity': 'Damage to the kidneys caused by a drug.',
    'ototoxicity': 'Damage to the inner ear caused by a drug: hearing loss, ringing, or loss of balance. Sometimes permanent.',
    'susceptibility testing': 'Lab testing of a patient\'s bacteria against specific antibiotics to see which ones work. A hospital lab needs the right test materials for each new drug before doctors can rely on it.',
    'MIC': 'Minimum inhibitory concentration: the lowest drug concentration that stops a bacterium growing in the lab. Lower means more potent.',
    'pharmacy and therapeutics committee': 'The hospital committee of doctors and pharmacists that decides which drugs the hospital stocks (its formulary) and with what restrictions.',
    'WAC': 'Wholesale acquisition cost: the manufacturer\'s list price to wholesalers, before discounts.',
    'efflux pump': 'A protein pump in a bacterium\'s membranes that pushes drugs back out before they can act.',
    'porin': 'A protein channel in the outer membrane of gram-negative bacteria that lets small molecules, including many antibiotics, in. Losing porins is a way of resisting.',
    'peptidoglycan': 'The mesh-like material of the bacterial cell wall. Penicillins and carbapenems stop bacteria building it.',
    'contingent value right': 'A promise to pay shareholders more later if a milestone, such as a sales target, is reached.',
  },
  sections: [
    // ---------------- COLD OPEN ----------------
    {type: 'story', kicker: 'Cold open', title: 'Approved in June, bankrupt by April', tocTitle: 'Cold open', html: `
      <p>On Monday, June 25, 2018, the U.S. Food and Drug Administration approved a new antibiotic called Zemdri. Its chemical name was plazomicin. It had been designed, molecule by molecule, at a small company called Achaogen in South San Francisco, to beat one of the most common tricks that bacteria use to survive antibiotics. The company, which began operating in 2004, had spent most of its life on this molecule. The U.S. government had helped pay for the work, with a contract that eventually reached $124.4 million.</p>
      <p>The approval was not a formality. A panel of outside experts had voted 15 to 0 that the drug worked for serious urinary tract and kidney infections. Achaogen's scientists had published the chemistry. The main clinical trial, of 609 patients, had met its goals. Infectious disease doctors had a new weapon against gram-negative "superbugs," the kind the U.S. Centers for Disease Control and Prevention (CDC) had called "nightmare bacteria."</p>
      <p>A month later, the company announced it would cut about 80 jobs, roughly 28% of its staff. In its first quarter on sale, about two months of selling, Zemdri brought in $291,000. In the whole of 2018 it sold $0.8 million. By comparison, Achaogen lost $186.5 million that year. In November the company announced it was looking for a buyer. In February 2019 it cut again, mostly salespeople. On April 15, 2019, ten months after approval, Achaogen filed for bankruptcy.</p>
      <p>That summer, at a court-supervised auction, the Indian drug maker Cipla bought the worldwide rights to Zemdri, outside Greater China, for $4.8 million in upfront cash. That was less than 1% of the $559 million in accumulated losses Achaogen had built up by the end of 2018. A Chinese company bought the China rights. An auction firm bought the lab equipment for $225,000.</p>
      <p>Nobody in this story did anything obviously wrong. The drug was not unsafe. The trial was not faked. The FDA was not unreasonable. Doctors who kept Zemdri on the shelf were doing exactly what they had been trained to do. And that is what makes this case worth studying. It is about a product that society badly needs and should use as little as possible, sold into a payment system that rewards volume. For someone coming from software, it is the purest example in this collection of a <strong>product that worked and a business model that could not</strong>. It also shows why governments are now experimenting with paying for antibiotics the way you pay for a fire department: for being there, not for how often it is used.</p>`},

    // ---------------- BACTERIA FROM ZERO ----------------
    {type: 'story', kicker: 'The biology from zero', title: 'Bacteria, and how antibiotics kill them', tocTitle: 'Bacteria from zero', html: `
      <p>[[bacteria|Bacteria]] are single cells, about a thousandth of a millimeter long. You carry trillions of them, mostly in your gut, and nearly all are harmless or helpful. A few cause disease when they get somewhere they shouldn't. The ones in this case belong to a family called the [[Enterobacteriaceae]], gut bacteria such as <em>Escherichia coli</em> (E. coli) and <em>Klebsiella pneumoniae</em>. In the gut they are neighbors. In the bladder they cause a urinary tract infection. If they climb up to the kidney, that is [[pyelonephritis]]. If they break into the blood, they can cause [[sepsis]], a runaway reaction that shuts down organs.</p>
      <p>Bacteria are built very differently from human cells, and that difference is what makes antibiotics possible. An [[antibiotic]] is a molecule that jams something bacteria need and our cells either lack or build differently. There are three classic targets:</p>
      <ul>
        <li><strong>The wall.</strong> Bacteria wrap themselves in a mesh called [[peptidoglycan]]. Human cells have no such wall. Penicillin and its relatives, including the [[carbapenem|carbapenems]], stop bacteria from building it, so they burst.</li>
        <li><strong>The protein factory.</strong> Every cell builds its proteins on a machine called the [[ribosome]]. Bacterial ribosomes are smaller and shaped differently from ours. [[aminoglycoside|Aminoglycosides]], the family plazomicin belongs to, and tetracyclines attack them.</li>
        <li><strong>The copier.</strong> Bacteria copy their DNA with enzymes different enough from ours to be blocked. Fluoroquinolones such as ciprofloxacin work this way.</li>
      </ul>
      <p>The bacteria in this case are [[gram-negative]]. The name comes from a staining test invented in the 1880s, but what matters is the structure: gram-negative bacteria have two membranes, with the thin wall sandwiched between them. The outer membrane is a gatekeeper. Drugs can only get through narrow protein doorways called [[porin|porins]], and some bacteria also have [[efflux pump|efflux pumps]] that throw drugs back out. That double defense is why few new classes of antibiotics work against gram-negative bacteria, and why the drug class that plazomicin belongs to, which is good at getting through, is worth rescuing.</p>
      <p>Before antibiotics, a kidney infection that spread to the blood was often a death sentence. Streptomycin, the first aminoglycoside, was reported in 1944 by Albert Schatz, Elizabeth Bugie and Selman Waksman at Rutgers. It was the first drug that worked against tuberculosis and many gram-negative infections. Waksman received the 1952 Nobel Prize; Schatz, the graduate student who isolated it, sued for a share of credit and royalties, and historians still argue about how the credit should have been split. The family grew: gentamicin arrived in 1963, tobramycin in 1967 and amikacin in 1972. They were cheap, fast-acting and powerful. They were also hard on the kidneys and the inner ear, and when gentler drugs arrived in the 1980s (newer cephalosporins, carbapenems and fluoroquinolones), doctors largely moved on.</p>
      <p>Then the bacteria caught up with the gentler drugs too.</p>`},

    {type: 'figure', title: 'Inside a gram-negative bacterium', intro: 'Hover or tap each part to see what it does, and how antibiotics and resistance play out there.',
      svg: `<svg viewBox="0 0 900 420">
        <g data-part="outer"><rect x="20" y="60" width="580" height="300" rx="150" class="il-2s il-line2"/><path d="M92 40 L120 70" class="il-none il-line"/><text x="20" y="34" class="il-text">Outer membrane</text></g>
        <g data-part="wall"><rect x="34" y="74" width="552" height="272" rx="136" class="il-none st-4 il-dash" stroke-width="3"/><path d="M150 392 L160 344" class="il-none il-line"/><text x="70" y="408" class="il-text">Thin cell wall</text></g>
        <g data-part="inner"><rect x="46" y="86" width="528" height="248" rx="124" class="il-paper il-line2"/><path d="M380 392 L372 336" class="il-none il-line"/><text x="320" y="408" class="il-text">Inner membrane</text></g>
        <g data-part="porin"><rect x="292" y="50" width="14" height="30" rx="4" class="il-3"/><rect x="312" y="50" width="14" height="30" rx="4" class="il-3"/><text x="336" y="42" class="il-text">Porin (a doorway)</text></g>
        <g data-part="efflux"><rect x="556" y="196" width="64" height="30" rx="9" class="il-5"/><path d="M620 211 H668" class="il-none st-5 flow" stroke-width="3"/><path d="M664 203 L676 211 L664 219 Z" class="il-5"/><text x="626" y="244" class="il-text">Efflux</text><text x="626" y="261" class="il-text">pump</text></g>
        <g data-part="ribo">
          <ellipse cx="150" cy="168" rx="15" ry="9" class="il-2s il-line"/><ellipse cx="150" cy="179" rx="11" ry="6" class="il-2"/>
          <ellipse cx="128" cy="250" rx="15" ry="9" class="il-2s il-line"/><ellipse cx="128" cy="261" rx="11" ry="6" class="il-2"/>
          <ellipse cx="206" cy="292" rx="15" ry="9" class="il-2s il-line"/><ellipse cx="206" cy="303" rx="11" ry="6" class="il-2"/>
          <ellipse cx="236" cy="134" rx="15" ry="9" class="il-2s il-line"/><ellipse cx="236" cy="145" rx="11" ry="6" class="il-2"/>
          <text x="100" y="218" class="il-text">Ribosomes</text></g>
        <g data-part="dna"><path d="M290 200 C300 150 360 146 372 190 S440 250 452 206 S402 140 350 170 S284 258 330 266 S410 236 392 214" class="il-none st-ink" stroke-width="2.5"/><text x="300" y="300" class="il-text">Chromosome (DNA)</text></g>
        <g data-part="plasmid"><circle cx="500" cy="268" r="17" class="il-none st-7" stroke-width="3.5"/><text x="460" y="310" class="il-text">Plasmid</text></g>
        <g data-part="enzymes"><ellipse cx="478" cy="150" rx="11" ry="8" class="il-7"/><ellipse cx="504" cy="176" rx="9" ry="7" class="il-7"/><ellipse cx="524" cy="140" rx="8" ry="6" class="il-7"/><text x="372" y="124" class="il-text">Resistance enzymes</text></g>
        <g data-part="targets"><rect x="680" y="70" width="206" height="250" rx="14" class="il-paper il-line"/>
          <text x="696" y="98" class="il-title">Where drugs hit</text>
          <text x="696" y="128" class="il-text">Wall</text><text x="696" y="146" class="il-text-2">penicillins, carbapenems</text>
          <text x="696" y="178" class="il-text">Ribosome</text><text x="696" y="196" class="il-text-2">aminoglycosides,</text><text x="696" y="212" class="il-text-2">tetracyclines</text>
          <text x="696" y="244" class="il-text">DNA copying</text><text x="696" y="262" class="il-text-2">fluoroquinolones</text>
          <text x="696" y="294" class="il-text">Membranes</text><text x="696" y="310" class="il-text-2">colistin</text></g>
      </svg>`,
      hotspots: {
        outer: {title: 'The outer membrane', text: 'The extra membrane that defines a [[gram-negative]] bacterium. It is coated with charged fat-sugar molecules. Aminoglycosides are strongly positively charged and cling to it, which helps them force their way in. Many other drugs simply bounce off.'},
        wall: {title: 'The cell wall', text: 'A mesh of [[peptidoglycan]] that keeps the cell from bursting. Penicillins and carbapenems stop bacteria from building it. In gram-negative bacteria it is thin and hidden between the two membranes.'},
        inner: {title: 'The inner membrane', text: 'The cell\'s main barrier. Aminoglycosides cross it using the cell\'s own energy. Once inside, faulty proteins made under the drug\'s influence damage this membrane, which lets even more drug in.'},
        porin: {title: 'Porins', text: 'Protein channels that let nutrients, and many antibiotics, through the outer membrane. Bacteria that make fewer porins let in less drug. The Zemdri label notes reduced activity against bacteria with fewer porins.'},
        efflux: {title: 'Efflux pumps', text: 'Pumps that push drugs back out. Some bacteria make extra copies when under attack. Pumps can lower plazomicin\'s activity, according to its label.'},
        ribo: {title: 'Ribosomes', text: 'Thousands of protein-building machines. Each has a large and a small piece; the small piece, the [[30S subunit]], is where aminoglycosides bind. See the step-through below.'},
        dna: {title: 'The chromosome', text: 'The bacterium\'s main DNA, one long loop. Random copying errors ([[mutation|mutations]]) occasionally make a bacterium resistant, and under drug pressure that one survivor can become billions within a day or two.'},
        plasmid: {title: 'Plasmids', text: 'Small extra loops of DNA that bacteria copy and hand to their neighbors, even to other species. This [[horizontal gene transfer]] is how resistance genes spread through hospitals. A single plasmid can carry several resistance genes at once.'},
        enzymes: {title: 'Resistance enzymes', text: 'Some destroy drugs ([[beta-lactamase|beta-lactamases]] and [[carbapenemase|carbapenemases]] cut penicillin-family drugs apart). Others disable them by attaching a chemical tag ([[aminoglycoside-modifying enzyme|aminoglycoside-modifying enzymes]]). The genes for both often travel on plasmids.'},
        targets: {title: 'Four places to attack', text: 'Most antibiotic classes in use today date from the middle of the 20th century, and nearly all hit one of these structures. New drugs usually improve an old class, as plazomicin did, rather than opening a new one.'},
      },
      caption: 'Schematic, not to scale. A real E. coli is about 2 thousandths of a millimeter long and holds tens of thousands of ribosomes.'},

    // ---------------- RESISTANCE ----------------
    {type: 'story', kicker: 'The problem', title: 'Evolution on fast-forward', tocTitle: 'How resistance spreads', html: `
      <p>[[antimicrobial resistance|Antimicrobial resistance]] is not something that happens to people. It happens to bacteria. When you take an antibiotic, it kills the susceptible bacteria. If a few carry a gene that lets them survive, they now have the place to themselves. Bacteria can divide every 20 to 30 minutes in good conditions, so a single survivor can found an enormous population within a day or two. That is natural selection, running at a speed you can watch in a lab.</p>
      <p>Resistance arises in two ways. The slow way is [[mutation]]: a random copying error that happens to change the drug's target. The fast way is sharing. Bacteria swap small loops of DNA called [[plasmid|plasmids]], and a single plasmid can carry genes against several drug classes at once. This [[horizontal gene transfer]] means a resistance gene that evolved in one species in one country can turn up in a different species on another continent. Hospitals, where many sick people receive many antibiotics, are where it spreads fastest.</p>
      <p>Two kinds of resistance matter most in this case.</p>
      <ul>
        <li><strong>Enzymes that disable aminoglycosides.</strong> Bacteria make [[aminoglycoside-modifying enzyme|aminoglycoside-modifying enzymes]] (AMEs) that staple a small chemical group onto the drug. The tagged drug no longer fits its target. AMEs are the most common reason gentamicin and amikacin fail, and there are dozens of them, named by what they attach and where: AAC enzymes add an acetyl group, APH enzymes a phosphate, ANT enzymes an adenyl group.</li>
        <li><strong>Enzymes that destroy carbapenems.</strong> Carbapenems such as [[meropenem]] were the drugs doctors reached for when everything else failed. Bacteria answered with [[carbapenemase|carbapenemases]], enzymes with names like [[KPC]], [[NDM]] and OXA-48 that chop carbapenems apart. Gut bacteria that resist carbapenems are called [[CRE]], carbapenem-resistant Enterobacteriaceae. In 2013 the CDC labeled them "nightmare bacteria" and an immediate public-health threat.</li>
      </ul>
      <h3>Why resistant infections kill</h3>
      <p>A resistant infection is not necessarily more aggressive than a susceptible one. The danger is delay and weaker weapons. A patient with a kidney infection that has spread to the blood is started on a standard antibiotic before the lab knows what the bacterium resists. If it doesn't work, the lab result takes a day or two, and the backup drugs are often less effective or more toxic. For CRE, the backup was often [[colistin]], an old antibiotic that damages the kidneys. In CRE bloodstream infections, death rates are high.</p>
      <p>The best global estimate comes from the Global Research on Antimicrobial Resistance (GRAM) study, published in <em>The Lancet</em> in 2022. It separated two numbers. In 2019, an estimated <strong>1.27 million deaths were attributable</strong> to bacterial resistance: people who would have lived if their infection had been susceptible. And <strong>4.95 million deaths were associated</strong> with resistant infections: people who died with a resistant infection, whether or not resistance was the deciding factor. A 2024 follow-up estimated 1.14 million attributable deaths in 2021 and forecast 1.91 million a year by 2050. Resistance to carbapenems rose faster than resistance to any other class among gram-negative bacteria between 1990 and 2021.</p>
      <p>In the United States, the CDC's 2019 threats report estimated more than 2.8 million antibiotic-resistant infections and more than 35,000 deaths a year, about one death every 15 minutes. CRE alone accounted for an estimated 13,100 cases in hospitalized patients and 1,100 deaths in 2017. Keep that last figure in mind. It is terrible for the families involved, and it is a small market. Both facts drive this story.</p>`},

    {type: 'custom', title: 'Resistance in a petri dish: a toy simulator', kicker: 'Try it',
      intro: 'Each square is a bacterium. Gray ones are killed by the antibiotic; red ones carry a resistance gene, which costs them a little growth speed when no drug is around. Set how often the colony is exposed to the drug and how easily bacteria share plasmids, then run 60 generations. This is a toy model with made-up rates, meant to show the dynamics, not to predict real numbers.',
      html: `<div class="card">
        <div class="explorer" style="border:0;padding:0;background:none">
          <label><span>Generations with drug</span><input type="range" min="0" max="100" step="5" value="30" id="rsUse"><span class="out" id="rsUseO"></span></label>
          <label><span>Plasmid sharing</span><input type="range" min="0" max="6" step="1" value="2" id="rsHgt"><span class="out" id="rsHgtO"></span></label>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 10px">
          <button class="btn primary" id="rsRun">Run 60 generations</button>
          <button class="btn" id="rsReset">Reset</button>
        </div>
        <div id="rsSvg"></div>
        <div id="rsTxt" style="font:400 16.5px/1.6 var(--serif);margin-top:8px"></div>
      </div>`,
      init: (root) => {
        const W = 30, H = 12, N = W * H, GENS = 60;
        const use = root.querySelector('#rsUse'), hgt = root.querySelector('#rsHgt'), uo = root.querySelector('#rsUseO'), ho = root.querySelector('#rsHgtO');
        const box = root.querySelector('#rsSvg'), txt = root.querySelector('#rsTxt');
        let seed, grid, hist, gen, timer = null;
        const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
        const nb = i => { const x = i % W, y = Math.floor(i / W), out = []; if (x > 0) out.push(i - 1); if (x < W - 1) out.push(i + 1); if (y > 0) out.push(i - W); if (y < H - 1) out.push(i + W); return out; };
        function reset() {
          if (timer) { clearInterval(timer); timer = null; }
          seed = 12345; grid = new Array(N).fill(1); grid[4 * W + 7] = 2; grid[8 * W + 22] = 2; gen = 0; hist = [frac()]; draw();
        }
        function frac() { return grid.filter(v => v === 2).length / N; }
        function step() {
          const u = +use.value / 100, p = +hgt.value / 100;
          const dosed = Math.floor((gen + 1) * u + 1e-9) > Math.floor(gen * u + 1e-9);
          for (let i = 0; i < N; i++) {
            if (grid[i] === 0) continue;
            if (rnd() < 0.1) { grid[i] = 0; continue; }
            if (dosed && grid[i] === 1 && rnd() < 0.75) grid[i] = 0;
          }
          const g2 = grid.slice();
          for (let i = 0; i < N; i++) {
            if (grid[i] === 1) {
              if (rnd() < 0.0004) { g2[i] = 2; continue; }
              if (p > 0 && nb(i).some(j => grid[j] === 2) && rnd() < p) g2[i] = 2;
            }
          }
          grid = g2;
          for (let r = 0; r < 3; r++) {
            const g3 = grid.slice();
            for (let i = 0; i < N; i++) {
              if (grid[i] !== 0) continue;
              const ns = nb(i), j = ns[Math.floor(rnd() * ns.length)], v = grid[j];
              if (v === 1) g3[i] = 1; else if (v === 2 && rnd() < 0.5) g3[i] = 2;
            }
            grid = g3;
          }
          gen++; hist.push(frac());
        }
        function draw() {
          uo.textContent = use.value + '%'; ho.textContent = hgt.value === '0' ? 'none' : hgt.value;
          const cs = 13;
          let s = '<svg viewBox="0 0 720 230" style="width:100%;height:auto;display:block">';
          s += '<text x="10" y="18" class="il-title">Colony, generation ' + gen + '</text>';
          for (let i = 0; i < N; i++) {
            const x = 10 + (i % W) * cs, y = 30 + Math.floor(i / W) * cs, v = grid[i];
            s += '<rect x="' + x + '" y="' + y + '" width="' + (cs - 2) + '" height="' + (cs - 2) + '" rx="3" class="' + (v === 0 ? 'il-bg' : v === 1 ? 'il-8' : 'il-7') + '"/>';
          }
          const X0 = 440, X1 = 705, Y0 = 186, Y1 = 36, X = k => X0 + (X1 - X0) * k / GENS, Y = f => Y0 - (Y0 - Y1) * f;
          s += '<text x="' + X0 + '" y="18" class="il-title">Share resistant</text>';
          [0, 0.5, 1].forEach(f => { s += '<line x1="' + X0 + '" x2="' + X1 + '" y1="' + Y(f) + '" y2="' + Y(f) + '" style="stroke:var(--grid)"/><text x="' + (X0 - 6) + '" y="' + (Y(f) + 4) + '" text-anchor="end" class="il-text-2">' + (f * 100) + '%</text>'; });
          s += '<text x="' + ((X0 + X1) / 2) + '" y="210" text-anchor="middle" class="il-text-2">generations (0 to ' + GENS + ')</text>';
          s += '<path d="' + hist.map((f, k) => (k ? 'L' : 'M') + X(k).toFixed(1) + ' ' + Y(f).toFixed(1)).join(' ') + '" class="il-none st-7" stroke-width="2.5"/>';
          s += '<rect x="10" y="196" width="11" height="11" rx="3" class="il-8"/><text x="26" y="206" class="il-text-2">susceptible</text><rect x="110" y="196" width="11" height="11" rx="3" class="il-7"/><text x="126" y="206" class="il-text-2">resistant</text><rect x="196" y="196" width="11" height="11" rx="3" class="il-bg il-line"/><text x="212" y="206" class="il-text-2">empty space</text>';
          s += '</svg>';
          box.innerHTML = s;
          const f = hist[hist.length - 1];
          let m = 'Resistant share now: <b>' + Math.round(f * 100) + '%</b>. ';
          if (gen === 0) m += 'Two resistant bacteria start in a colony of 360. Press run.';
          else if (gen >= GENS) {
            if (+use.value === 0) m += f < 0.2 ? 'With no drug, the resistance gene is a burden, and resistant bacteria stay rare. That is why careful use keeps old drugs working.' : 'Even with no drug, plasmid sharing spread the gene sideways from neighbor to neighbor. Resistance does not need the drug to travel, only to win.';
            else if (f > 0.6) m += +use.value >= 30 ? 'Frequent exposure hands the colony to the resistant strain. Each dose removes its competitors.' : 'Even occasional exposure, helped by plasmid sharing, handed the colony to the resistant strain.';
            else m += 'Occasional exposure lets resistance grow, but more slowly. Try more plasmid sharing: resistance can spread sideways even without the drug.';
          }
          txt.innerHTML = m;
        }
        root.querySelector('#rsRun').onclick = () => {
          if (timer) return; if (gen >= GENS) reset();
          timer = setInterval(() => { step(); draw(); if (gen >= GENS) { clearInterval(timer); timer = null; } }, 70);
        };
        root.querySelector('#rsReset').onclick = reset;
        use.oninput = () => { uo.textContent = use.value + '%'; };
        hgt.oninput = () => { ho.textContent = hgt.value === '0' ? 'none' : hgt.value; };
        reset();
      }},

    {type: 'callout', variant: 'numbers', heading: 'Antibiotic resistance by the numbers', html: `<ul>
      <li><b>1.27 million</b>: deaths worldwide attributable to bacterial resistance in 2019; <b>4.95 million</b> deaths associated with it (GRAM, <em>Lancet</em> 2022).</li>
      <li><b>1.91 million a year</b>: forecast attributable deaths by 2050 (GBD 2021 AMR collaborators, <em>Lancet</em> 2024).</li>
      <li><b>2.8 million</b> resistant infections and <b>35,000</b> deaths a year in the U.S. (CDC 2019 report).</li>
      <li><b>13,100</b> hospitalized CRE cases, <b>1,100</b> deaths and <b>$130 million</b> in healthcare costs in the U.S. in 2017 (CDC).</li>
    </ul><p>Notice the gap between the global toll and the U.S. CRE numbers. Most resistance deaths happen in low- and middle-income countries, where a new branded drug at U.S. prices is out of reach. The patients a company can bill are a small fraction of the patients who need the drug.</p>`},

    {type: 'callout', variant: 'misconception', heading: '"My body has become resistant to antibiotics"', html: `<p>People don't become resistant; bacteria do. What someone who took many antibiotics may carry is a population of resistant bacteria, selected by those courses, that can then cause their next infection or spread to someone else. That is why resistance is a shared problem, like pollution: every course of antibiotics anywhere slightly raises the odds that the next patient's infection won't respond. And it is why the doctor who refuses to prescribe the newest antibiotic for an infection that an old one can handle is protecting people she will never meet.</p>`},

    // ---------------- AMINOGLYCOSIDES / MECHANISM ----------------
    {type: 'story', kicker: 'The key insight', title: 'Rescue an old class instead of inventing a new one', tocTitle: 'The key insight', html: `
      <p>The hardest thing in antibiotics is finding a genuinely new way to kill gram-negative bacteria. According to CARB-X, the last new class of antibiotic approved in the U.S. or Europe for gram-negative infections was discovered in 1962. Many companies have spent years screening for new classes and found nothing that gets through the double membrane without also harming people.</p>
      <p>Achaogen's bet with plazomicin was more modest and more practical. Aminoglycosides already did the hard part. They get into gram-negative bacteria, kill them fast, and have been used for 70 years, so doctors know exactly how to handle their side effects. Their problem was that bacteria had learned to disable them, mostly with enzymes that stick chemical tags onto specific spots on the molecule.</p>
      <p>If you know where the enzymes grab, the reasoning went, you can build a molecule with nothing for them to grab. Chemists had done this once before: amikacin, launched in 1972, was kanamycin with an extra side chain bolted on to block several enzymes. Achaogen's chemists wanted to go further and block the enzymes that still defeated amikacin, especially the AAC(6′) family, which acetylates the drug at a position called 6′ (read "six prime").</p>
      <p>They called the result a [[neoglycoside]]: a new-generation aminoglycoside. The mechanism below shows how an aminoglycoside kills, how a resistance enzyme stops it, and how plazomicin's extra pieces get around that. The last step shows the one trick plazomicin could not beat.</p>`},

    {type: 'mechanism', title: 'How plazomicin kills, and how it dodges resistance', intro: 'Step through the ribosome, an older aminoglycoside, a resistance enzyme, and plazomicin. Use the arrows or the dots.',
      svg: `<svg viewBox="0 0 760 440">
        <g data-part="cell"><rect x="12" y="14" width="736" height="412" rx="56" class="il-8s"/><text x="44" y="404" class="il-text-2">Inside one bacterium</text></g>
        <g data-part="membrane"><path d="M60 52 H700" class="il-none il-line2"/><path d="M60 62 H700" class="il-none il-line2"/><text x="64" y="86" class="il-text-2">cell membrane</text></g>
        <g data-part="holes"><rect x="440" y="44" width="30" height="26" class="il-8s"/><rect x="530" y="44" width="24" height="26" class="il-8s"/><rect x="612" y="44" width="34" height="26" class="il-8s"/>
          <path d="M440 50 V66 M470 50 V66 M530 50 V66 M554 50 V66 M612 50 V66 M646 50 V66" class="il-none st-7" stroke-width="3"/>
          <text x="440" y="96" class="il-text">holes: the cell leaks and dies</text></g>
        <g data-part="mrna"><path d="M60 350 C80 338 100 362 120 350 S160 338 180 350 S220 362 240 350 S280 338 300 350 S340 362 360 350 S400 338 420 350 S460 362 480 350 S520 338 540 350 S580 362 600 350" class="il-none st-4" stroke-width="4"/><text x="60" y="382" class="il-text-2">mRNA: the gene's instructions</text></g>
        <g data-part="ribo"><ellipse cx="330" cy="252" rx="120" ry="56" class="il-2s il-line"/><text x="330" y="244" text-anchor="middle" class="il-text">50S subunit</text>
          <ellipse cx="330" cy="330" rx="104" ry="28" class="il-2"/><text x="258" y="335" class="il-white">30S subunit</text></g>
        <g data-part="asite"><circle cx="376" cy="308" r="13" class="il-paper il-line"/><path d="M390 308 H470" class="il-none il-line"/><text x="476" y="304" class="il-text">A site: where each</text><text x="476" y="321" class="il-text">building block is checked</text></g>
        <g data-part="protein"><circle cx="330" cy="190" r="8" class="il-3"/><circle cx="336" cy="172" r="8" class="il-3"/><circle cx="348" cy="156" r="8" class="il-3"/><circle cx="364" cy="144" r="8" class="il-3"/><circle cx="382" cy="136" r="8" class="il-3"/><circle cx="402" cy="132" r="8" class="il-3"/><text x="316" y="140" text-anchor="end" class="il-text">new protein,</text><text x="316" y="157" text-anchor="end" class="il-text">built correctly</text></g>
        <g data-part="badprotein"><circle cx="330" cy="190" r="8" class="il-3"/><circle cx="336" cy="172" r="8" class="il-7"/><circle cx="348" cy="156" r="8" class="il-3"/><circle cx="364" cy="144" r="8" class="il-7"/><circle cx="382" cy="136" r="8" class="il-7"/><circle cx="402" cy="132" r="8" class="il-3"/><text x="316" y="140" text-anchor="end" class="il-text">faulty protein, with</text><text x="316" y="157" text-anchor="end" class="il-text">wrong blocks (red)</text></g>
        <g data-part="oldag"><g transform="translate(120 170)">
          <polygon points="-11,6 -16.5,15.5 -27.5,15.5 -33,6 -27.5,-3.5 -16.5,-3.5" class="il-5 il-line"/><polygon points="11,-4 5.5,5.5 -5.5,5.5 -11,-4 -5.5,-13.5 5.5,-13.5" class="il-5 il-line"/><polygon points="33,6 27.5,15.5 16.5,15.5 11,6 16.5,-3.5 27.5,-3.5" class="il-5 il-line"/>
          <text x="0" y="38" text-anchor="middle" class="il-text-2">gentamicin</text></g></g>
        <g data-part="tag"><circle cx="484" cy="146" r="13" class="il-4 il-line"/><text x="484" y="151" text-anchor="middle" class="il-text" style="font-size:12px">Ac</text></g>
        <g data-part="plazo"><g transform="translate(120 170)">
          <polygon points="-11,6 -16.5,15.5 -27.5,15.5 -33,6 -27.5,-3.5 -16.5,-3.5" class="il-1 il-line"/><polygon points="11,-4 5.5,5.5 -5.5,5.5 -11,-4 -5.5,-13.5 5.5,-13.5" class="il-1 il-line"/><polygon points="33,6 27.5,15.5 16.5,15.5 11,6 16.5,-3.5 27.5,-3.5" class="il-1 il-line"/>
          <rect x="-50" y="-2" width="14" height="16" rx="5" class="il-4 il-line"/><rect x="-7" y="-30" width="14" height="14" rx="5" class="il-4 il-line"/>
          <text x="0" y="38" text-anchor="middle" class="il-text-2">plazomicin</text></g></g>
        <g data-part="ame"><path d="M588 150 C608 120 658 124 672 152 C688 182 658 210 628 206 C604 204 598 192 580 186 C564 180 574 164 588 150 Z" class="il-7"/><text x="560" y="236" class="il-text">resistance enzyme</text><text x="560" y="253" class="il-text-2">(an AME, such as AAC(6′))</text></g>
        <g data-part="notag"><path d="M562 146 L582 166 M582 146 L562 166" class="il-none st-7" stroke-width="4" stroke-linecap="round"/><text x="80" y="108" class="il-text">shields: the enzyme finds</text><text x="80" y="125" class="il-text">nothing to grab</text></g>
        <g data-part="bounce"><text x="80" y="108" class="il-text">tagged gentamicin no</text><text x="80" y="125" class="il-text">longer fits the A site</text></g>
        <g data-part="mtase"><path d="M110 292 C126 266 170 270 180 296 C190 322 160 340 136 334 C112 328 98 312 110 292 Z" class="il-7"/><text x="40" y="240" class="il-text">16S rRNA</text><text x="40" y="257" class="il-text">methyltransferase</text><path d="M182 300 C250 290 320 296 362 306" class="il-none st-7 il-dash" stroke-width="2.5"/></g>
        <g data-part="methyl"><circle cx="376" cy="308" r="7" class="il-7"/><text x="476" y="268" class="il-text">methyl mark blocks the pocket</text></g>
        <g data-part="death"><text x="70" y="250" class="il-num" style="font-size:20px">cell death</text></g>
      </svg>`,
      steps: [
        {title: 'The protein factory', text: 'A bacterium builds every protein on its [[ribosome|ribosomes]]. The ribosome slides along a strand of messenger RNA, reads the code three letters at a time, and adds the matching building block (an amino acid) to a growing chain. The small piece, the [[30S subunit]], holds the RNA and checks each incoming block in a pocket called the [[A site]].', show: ['cell', 'membrane', 'mrna', 'ribo', 'asite', 'protein']},
        {title: 'An aminoglycoside wedges into the A site', text: 'Aminoglycosides such as gentamicin are chains of sugar rings covered in positive charges. They slip through the membranes and bind tightly to the A site, which is made of ribosomal RNA (the 16S rRNA). Plazomicin\'s label describes exactly this: it binds the bacterial 30S subunit and inhibits protein synthesis.', show: ['cell', 'membrane', 'mrna', 'ribo', 'asite', 'protein', 'oldag'], focus: ['oldag'], move: {oldag: 'translate(256px, 138px)'}},
        {title: 'Misreading, then death', text: 'With the drug in the pocket, the proofreading fails. Wrong building blocks slip into proteins. Some faulty proteins end up in the cell membrane and punch holes in it, which lets more drug flood in. The process feeds on itself, and aminoglycosides kill bacteria quickly rather than just stopping their growth.', show: ['cell', 'membrane', 'holes', 'mrna', 'ribo', 'asite', 'badprotein', 'oldag', 'death'], pulse: ['holes'], focus: ['badprotein'], move: {oldag: 'translate(256px, 138px)'}},
        {title: 'The bacterium fights back with an enzyme', text: 'A resistant bacterium carries an [[aminoglycoside-modifying enzyme]], often on a plasmid. It grabs gentamicin and staples on a small chemical group, here an acetyl tag ("Ac"). The tagged drug no longer fits the A site. The ribosome keeps building correct proteins, and the bacterium lives.', show: ['cell', 'membrane', 'mrna', 'ribo', 'asite', 'protein', 'oldag', 'ame', 'tag', 'bounce'], focus: ['ame', 'tag'], move: {oldag: 'translate(404px, -10px)'}},
        {title: 'Plazomicin: the same core, with shields', text: 'Plazomicin starts from a natural aminoglycoside, [[sisomicin]], that already lacks two of the spots some enzymes attack. Achaogen\'s chemists added two side chains (yellow) that cover more of them: a [[HABA]] group on the middle ring and a hydroxyethyl group on the end ring. The enzyme cannot get a grip.', show: ['cell', 'membrane', 'mrna', 'ribo', 'asite', 'protein', 'plazo', 'ame', 'notag'], focus: ['plazo'], pulse: ['notag'], move: {plazo: 'translate(404px, -10px)'}},
        {title: 'It still kills the resistant bacterium', text: 'The shields don\'t get in the way of binding the ribosome; a 2021 crystal structure confirmed plazomicin sits in the A site like other aminoglycosides. So in bacteria whose resistance relies on common AMEs, plazomicin still causes misreading, membrane damage and death. In lab tests it stayed active against strains carrying the three most common AMEs in Enterobacteriaceae.', show: ['cell', 'membrane', 'holes', 'mrna', 'ribo', 'asite', 'badprotein', 'plazo', 'ame', 'death'], dim: ['ame'], focus: ['plazo'], pulse: ['holes'], move: {plazo: 'translate(256px, 138px)'}},
        {title: 'What it cannot beat', text: 'Some bacteria don\'t touch the drug at all. They carry a [[16S rRNA methyltransferase]], an enzyme that adds a methyl group to the ribosome\'s own A site. Now no aminoglycoside binds, plazomicin included. These enzymes often travel on the same plasmids as the [[NDM]] carbapenemase. A rarer enzyme, AAC(2′)-I, found mainly in <em>Providencia</em>, also defeats plazomicin.', show: ['cell', 'membrane', 'mrna', 'ribo', 'asite', 'protein', 'plazo', 'mtase', 'methyl'], focus: ['mtase', 'methyl'], move: {plazo: 'translate(40px, -24px)'}},
      ]},

    {type: 'callout', variant: 'product', heading: 'Patch the known exploit, and ship', html: `<p>Plazomicin is a security patch for a 50-year-old product. The attackers (resistance enzymes) had a catalog of known exploits, each targeting a specific spot in the molecule. Achaogen's chemists closed those specific holes and left the proven core untouched, much as you would harden a battle-tested library rather than rewrite it from scratch. The payoff was lower risk: the class's behavior in patients was well understood.</p><p><b>Where the analogy breaks:</b> in software, the attacker has to find a new exploit by hand. Bacteria search blindly but massively in parallel, with billions of attempts a day in every infected patient, and they share their discoveries on plasmids. Every deployment of the patch also trains the attacker. The more a new antibiotic is used, the faster it is defeated, which is the root of the commercial problem in this case.</p>`},

    // ---------------- BUILDING THE DRUG ----------------
    {type: 'story', kicker: 'Building the drug', title: 'Four hundred molecules and a spray dryer', tocTitle: 'Building the drug', html: `
      <p>Achaogen was incorporated in Delaware in June 2002 and began operating in 2004, in South San Francisco. In January 2006 it signed an exclusive license with Isis Pharmaceuticals (now Ionis), which had patents on aminoglycoside antibacterial compounds, paying in preferred stock and agreeing to pay up to $19.5 million in milestones for the first product. Achaogen later paid Ionis $4 million when the first patient was dosed in its phase 3 CARE trial, and $7.5 million when Zemdri was approved. The main patent family covering plazomicin itself belonged to Achaogen.</p>
      <p>The chemistry was published in 2010 in <em>Antimicrobial Agents and Chemotherapy</em> by James Aggen, Eliana Armstrong and colleagues, including George Miller and Heinz Moser. The team made more than 400 analogs of [[sisomicin]], a natural aminoglycoside produced by soil bacteria, and picked one, then called ACHN-490. Sisomicin was a clever starting point. It naturally lacks the hydroxyl groups at the 3′ and 4′ positions, so two enzyme families that defeat amikacin, APH(3′) and ANT(4′), have nothing to attack.</p>
      <p>The team then added two pieces. A [[HABA]] side chain at the N1 position, the same kind of chain that turned kanamycin into amikacin, protects against the AAC(3), ANT(2″) and APH(2″) enzymes. A hydroxyethyl group at the 6′ position blocks the large AAC(6′) family "without reducing potency," as the paper put it. Against panels of resistant hospital bacteria, ACHN-490 inhibited aminoglycoside-resistant Enterobacteriaceae at low concentrations, with weaker activity against <em>Proteus</em> and related species.</p>
      <p>The paper was also candid about the limits. Bacteria with ribosomal methyltransferases such as ArmA had high [[MIC|MICs]] for ACHN-490 and every older aminoglycoside. Against the AAC(2′)-I enzyme it was inactive. Achaogen repeated the warning in its 2014 stock-market prospectus: plazomicin "is not active against organisms expressing a resistance mechanism known as ribosomal methyltransferase," which at the time was rare outside certain countries in Asia.</p>
      <h3>Making it</h3>
      <p>Plazomicin is semi-synthetic. Sisomicin is grown by microbial fermentation, sourced mainly from suppliers in Europe and China, then converted in four process stages, seven chemical steps, purified by ion-exchange chromatography and isolated by spray-drying. The drug substance was made by Hovione and the vials by Pfizer CenterOne. The final product is a 500 mg vial, given once a day as a 30-minute intravenous infusion at 15 mg per kilogram of body weight.</p>
      <p>Once-daily dosing was a selling point. Older aminoglycosides are often given several times a day and need careful blood-level checks. But plazomicin still carried the class's risks, and the label would carry the FDA's strongest warning, a boxed warning, for kidney damage ([[nephrotoxicity]]), hearing and balance damage ([[ototoxicity]]), neuromuscular blockade and harm to a fetus. For patients with reduced kidney function, the label recommended [[therapeutic drug monitoring]], which meant hospitals needed a blood test for plazomicin levels. That test became commercially available only in the fourth quarter of 2018, months after launch.</p>`},

    {type: 'figure', title: 'Anatomy of plazomicin', intro: 'A simplified map of the molecule: three sugar rings and two added shields. Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 380">
        <g data-part="ring1"><polygon points="255,190 227.5,237.6 172.5,237.6 145,190 172.5,142.4 227.5,142.4" class="il-1s il-line2"/><text x="200" y="195" text-anchor="middle" class="il-text">Ring I</text></g>
        <g data-part="ring2"><polygon points="435,190 407.5,237.6 352.5,237.6 325,190 352.5,142.4 407.5,142.4" class="il-1s il-line2"/><text x="380" y="186" text-anchor="middle" class="il-text">Ring II</text><text x="380" y="204" text-anchor="middle" class="il-text-2">the core</text></g>
        <g data-part="ring3"><polygon points="615,190 587.5,237.6 532.5,237.6 505,190 532.5,142.4 587.5,142.4" class="il-1s il-line2"/><text x="560" y="195" text-anchor="middle" class="il-text">Ring III</text></g>
        <path d="M255 190 H325 M435 190 H505" class="il-none il-line2"/><circle cx="290" cy="190" r="10" class="il-paper il-line"/><text x="290" y="194" text-anchor="middle" class="il-text-2">O</text><circle cx="470" cy="190" r="10" class="il-paper il-line"/><text x="470" y="194" text-anchor="middle" class="il-text-2">O</text>
        <g data-part="hydroxy"><path d="M145 190 L112 158" class="il-none il-line2"/><rect x="18" y="120" width="120" height="36" rx="10" class="il-4 il-line"/><text x="78" y="143" text-anchor="middle" class="il-text">hydroxyethyl</text><text x="18" y="110" class="il-text-2">6′ shield</text></g>
        <g data-part="haba"><path d="M380 238 V272" class="il-none il-line2"/><rect x="318" y="272" width="124" height="36" rx="10" class="il-4 il-line"/><text x="380" y="295" text-anchor="middle" class="il-text">HABA chain</text><text x="310" y="330" class="il-text-2">N1 shield</text></g>
        <g data-part="nooh"><circle cx="228" cy="136" r="20" class="il-none st-7 il-dash" stroke-width="2.5"/><text x="150" y="82" class="il-text">3′ and 4′: no hydroxyl groups</text><text x="150" y="100" class="il-text-2">(inherited from sisomicin)</text></g>
        <g data-part="binding"><path d="M618 190 H690" class="il-none st-1" stroke-width="3"/><path d="M686 182 L698 190 L686 198 Z" class="il-1"/><ellipse cx="780" cy="172" rx="70" ry="34" class="il-2s il-line"/><ellipse cx="780" cy="220" rx="62" ry="20" class="il-2"/><text x="720" y="270" class="il-text">binds the A site of</text><text x="720" y="288" class="il-text">the 30S subunit</text></g>
      </svg>`,
      hotspots: {
        ring1: {title: 'Ring I', text: 'The end ring, inherited from [[sisomicin]]. Enzymes of the AAC(6′) family attack its 6′ amino group; AAC(2′)-I attacks its 2′ amino group, which plazomicin leaves unprotected.'},
        ring2: {title: 'Ring II: the core', text: 'A ring called 2-deoxystreptamine, shared by gentamicin, tobramycin and amikacin. It does much of the binding to the ribosome\'s A site. AAC(3) enzymes attack its 3-amino group.'},
        ring3: {title: 'Ring III', text: 'The third sugar. ANT(2″) and APH(2″) enzymes attack a hydroxyl group on it (the 2″ position). The HABA chain on ring II helps shield it.'},
        hydroxy: {title: 'Hydroxyethyl shield (6′)', text: 'Achaogen\'s signature change. It blocks the many AAC(6′) enzymes, which defeat amikacin, "without reducing potency" (Aggen et al., 2010).'},
        haba: {title: 'HABA shield (N1)', text: 'A hydroxy-aminobutyric acid side chain, the same trick that turned kanamycin into amikacin in the 1970s. It protects against AAC(3), ANT(2″) and APH(2″).'},
        nooh: {title: 'Nothing to grab at 3′ and 4′', text: 'Sisomicin naturally lacks hydroxyl groups here, so APH(3′) and ANT(4′) enzymes, which can defeat amikacin, have no target. This is why the chemists started from sisomicin rather than kanamycin.'},
        binding: {title: 'The business end', text: 'None of the added pieces interfere with binding the ribosome. A 2021 crystal structure (Golkar et al., <em>Communications Biology</em>) showed plazomicin binding exclusively to the 16S ribosomal A site. The same study showed how the two mechanisms of clinical resistance, ribosome methylation and AAC(2′) acetylation, defeat it.'},
      },
      caption: 'Schematic, not a chemical structure drawing. Ring names and positions are simplified; see Aggen et al., 2010, and the Zemdri label for the full structure.'},

    {type: 'custom', title: 'Armor the molecule', kicker: 'Try it',
      intro: 'Pick an aminoglycoside and see which resistance enzymes disable it. The panel is simplified: real enzymes come in many variants, and a bacterium\'s pumps and porins matter too.',
      html: `<div class="card"><div id="amBtns" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px"></div><div id="amSvg"></div><div id="amGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:10px;margin-top:10px"></div><div id="amTxt" style="font:400 16.5px/1.6 var(--serif);margin-top:12px"></div></div>`,
      init: (root, api) => {
        const mols = {
          gentamicin: {n: 'Gentamicin (1963)', haba: 0, hyd: 0, oh: 0, cls: 'il-5', note: 'A workhorse since the 1960s, now defeated by many common enzymes.'},
          amikacin: {n: 'Amikacin (1972)', haba: 1, hyd: 0, oh: 1, cls: 'il-5', note: 'Its HABA chain blocks several enzymes, but AAC(6′) and the 3′/4′ enzymes still get through.'},
          sisomicin: {n: 'Sisomicin (starting point)', haba: 0, hyd: 0, oh: 0, cls: 'il-8', note: 'Lacks the 3′/4′ hydroxyls, but otherwise as exposed as gentamicin.'},
          plazomicin: {n: 'Plazomicin (2018)', haba: 1, hyd: 1, oh: 0, cls: 'il-1', note: 'Blocks the common enzymes. Still defeated by ribosome methylation and AAC(2′)-I.'},
        };
        const enz = [
          {k: 'AAC(3)', d: 'acetylates the 3-amino group on ring II', r: {gentamicin: 1, amikacin: 0, sisomicin: 1, plazomicin: 0}},
          {k: 'ANT(2″)', d: 'adds an adenyl group on ring III', r: {gentamicin: 1, amikacin: 0, sisomicin: 1, plazomicin: 0}},
          {k: 'APH(2″)', d: 'adds a phosphate on ring III', r: {gentamicin: 1, amikacin: 0, sisomicin: 1, plazomicin: 0}},
          {k: 'AAC(6′)', d: 'acetylates the 6′ amino group on ring I; very common', r: {gentamicin: 0.5, amikacin: 1, sisomicin: 1, plazomicin: 0}},
          {k: 'APH(3′) / ANT(4′)', d: 'modify the 3′ or 4′ hydroxyl on ring I', r: {gentamicin: 0, amikacin: 1, sisomicin: 0, plazomicin: 0}},
          {k: 'AAC(2′)-I', d: 'acetylates the 2′ amino group; mainly in Providencia', r: {gentamicin: 1, amikacin: 0, sisomicin: 1, plazomicin: 1}},
          {k: '16S rRNA methyltransferase', d: 'changes the ribosome, not the drug; often travels with NDM', r: {gentamicin: 1, amikacin: 1, sisomicin: 1, plazomicin: 1}},
        ];
        const btns = root.querySelector('#amBtns'), svgBox = root.querySelector('#amSvg'), grid = root.querySelector('#amGrid'), txt = root.querySelector('#amTxt');
        Object.keys(mols).forEach(k => { const b = document.createElement('button'); b.className = 'btn'; b.dataset.k = k; b.textContent = mols[k].n; btns.appendChild(b); });
        const hex = (cx, cy, r, cls) => { let p = []; for (let i = 0; i < 6; i++) { const a = Math.PI / 3 * i; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(' ') + '" class="' + cls + ' il-line2"/>'; };
        function render(k) {
          const m = mols[k];
          btns.querySelectorAll('button').forEach(b => { b.classList.toggle('primary', b.dataset.k === k); });
          let s = '<svg viewBox="0 0 720 170" style="width:100%;height:auto;display:block">';
          s += '<path d="M250 90 H310 M410 90 H470" class="il-none il-line2"/>';
          s += hex(200, 90, 50, m.cls) + hex(360, 90, 50, m.cls) + hex(520, 90, 50, m.cls);
          s += '<text x="200" y="95" text-anchor="middle" class="' + (m.cls === 'il-8' ? 'il-text' : 'il-white') + '">Ring I</text><text x="360" y="95" text-anchor="middle" class="' + (m.cls === 'il-8' ? 'il-text' : 'il-white') + '">Ring II</text><text x="520" y="95" text-anchor="middle" class="' + (m.cls === 'il-8' ? 'il-text' : 'il-white') + '">Ring III</text>';
          if (m.hyd) s += '<path d="M150 90 L112 62" class="il-none il-line2"/><rect x="20" y="36" width="104" height="30" rx="9" class="il-4 il-line"/><text x="72" y="56" text-anchor="middle" class="il-text">6′ shield</text>';
          else s += '<circle cx="136" cy="72" r="13" class="il-none st-7 il-dash" stroke-width="2"/><text x="20" y="40" class="il-text-2">6′ amino group exposed</text>';
          if (m.haba) s += '<path d="M360 140 V150" class="il-none il-line2"/><rect x="300" y="138" width="120" height="28" rx="9" class="il-4 il-line"/><text x="360" y="157" text-anchor="middle" class="il-text">N1 HABA shield</text>';
          else s += '<circle cx="360" cy="146" r="12" class="il-none st-7 il-dash" stroke-width="2"/><text x="382" y="158" class="il-text-2">N1 exposed</text>';
          if (m.oh) s += '<rect x="214" y="12" width="36" height="22" rx="6" class="il-7s il-line"/><text x="232" y="28" text-anchor="middle" class="il-text">OH</text><rect x="256" y="12" width="36" height="22" rx="6" class="il-7s il-line"/><text x="274" y="28" text-anchor="middle" class="il-text">OH</text><text x="300" y="28" class="il-text-2">3′/4′ hydroxyls</text>';
          else s += '<text x="214" y="28" class="il-text-2">no 3′/4′ hydroxyls</text>';
          s += '<text x="600" y="40" class="il-title">' + api.esc(m.n.split(' (')[0]) + '</text>';
          s += '</svg>';
          svgBox.innerHTML = s;
          let ok = 0;
          grid.innerHTML = enz.map(e => {
            const v = e.r[k]; if (v === 0) ok++;
            const lab = v === 1 ? 'Disables it' : v === 0.5 ? 'Partly disables it' : 'Blocked';
            const col = v === 0 ? 'var(--good)' : v === 1 ? 'var(--bad)' : 'var(--warn)';
            return '<div style="border:1px solid var(--rule);border-left:5px solid ' + col + ';border-radius:10px;padding:10px 12px;background:var(--panel)"><div style="font:650 15px var(--sans)">' + api.esc(e.k) + '</div><div style="font:400 13.5px/1.4 var(--sans);color:var(--ink-2);margin:3px 0 6px">' + api.esc(e.d) + '</div><div style="font:650 14px var(--sans);color:' + col + '">' + lab + '</div></div>';
          }).join('');
          txt.innerHTML = '<b>' + api.esc(m.n) + '</b> resists ' + ok + ' of ' + enz.length + ' enzyme families here. ' + api.esc(m.note);
        }
        btns.onclick = e => { const b = e.target.closest('button'); if (b) render(b.dataset.k); };
        render('gentamicin');
      }},

    // ---------------- TIMELINE ----------------
    {type: 'timeline', title: 'Timeline: from streptomycin to a $4.8 million auction', events: [
      {year: 1944, title: 'Streptomycin, the first aminoglycoside, is reported', kind: 'science', text: 'Schatz, Bugie and Waksman at Rutgers. Credit for the discovery was later disputed in court.'},
      {year: 1963, title: 'Gentamicin arrives; tobramycin (1967) and amikacin (1972) follow', kind: 'science'},
      {year: 2002, date: 'June 2002', title: 'Achaogen incorporated; operations start in 2004', kind: 'business'},
      {year: 2006, date: 'January 25, 2006', title: 'License from Isis Pharmaceuticals (now Ionis) for aminoglycoside compounds', kind: 'business'},
      {year: 2010, date: 'August 2010', title: 'BARDA contract for plazomicin; with four options it totals $124.4 million', kind: 'business'},
      {year: 2010, title: 'The chemistry of ACHN-490 is published', kind: 'science', text: 'More than 400 sisomicin analogs made; Aggen et al., Antimicrobial Agents and Chemotherapy.'},
      {year: 2013, title: 'CDC calls CRE "nightmare bacteria"', kind: 'science'},
      {year: 2014, date: 'March 2014', title: 'IPO on Nasdaq: 6 million shares at $12', kind: 'business', text: '$72 million gross. The prospectus describes a single pivotal superiority trial in CRE.'},
      {year: 2014, date: 'September 2014', title: 'The CARE trial in CRE infections begins', kind: 'clinical'},
      {year: 2015, date: 'March 31, 2015', title: 'CARE enrolls slowly; Achaogen adds a urinary-infection trial', kind: 'setback'},
      {year: 2016, date: 'January 11, 2016', title: 'First patient in EPIC', kind: 'clinical'},
      {year: 2016, date: 'August 2016', title: 'CARE closes with 69 patients, 39 of them randomized', kind: 'setback', text: 'The 2014 plan had called for about 360.'},
      {year: 2016, date: 'December 12, 2016', title: 'EPIC meets its goals; CARE shows fewer deaths on plazomicin', kind: 'clinical', text: 'Days later Achaogen raises about $94.5 million in a stock offering.'},
      {year: 2017, date: 'October 25, 2017', title: 'New Drug Application submitted', kind: 'regulatory'},
      {year: 2018, date: 'January 2018', title: 'Blake Wise becomes CEO; Kenneth Hillan moves to president of R&D', kind: 'people'},
      {year: 2018, date: 'May 2, 2018', title: 'Advisory committee: 15–0 for urinary infections, 4–11 against bloodstream infections', kind: 'regulatory'},
      {year: 2018, date: 'June 25, 2018', title: 'FDA approves Zemdri for cUTI; complete response letter for bloodstream infections', kind: 'regulatory'},
      {year: 2018, date: 'July 26, 2018', title: 'Six days after launch, about 80 jobs cut (28%)', kind: 'setback', text: 'Hillan, the chief financial officer and the chief scientific officer leave in the fall.'},
      {year: 2018, date: 'November 5, 2018', title: 'Strategic review: the company is for sale', kind: 'setback'},
      {year: 2019, date: 'February 28, 2019', title: 'Second restructuring, mostly sales and field medical staff', kind: 'setback'},
      {year: 2019, date: 'April 15, 2019', title: 'Chapter 11 bankruptcy filing', kind: 'setback'},
      {year: 2019, date: 'July 23, 2019', title: 'Cipla completes purchase of Zemdri for $4.8 million upfront', kind: 'business'},
      {year: 2019, date: 'October 1, 2019', title: 'Medicare raises the add-on payment for qualifying antibiotics to 75%', kind: 'regulatory'},
      {year: 2019, date: 'December 27, 2019', title: 'Melinta, with four marketed antibiotics, files for Chapter 11', kind: 'setback'},
      {year: 2020, date: 'July 2020', title: 'Drug companies launch the $1 billion AMR Action Fund', kind: 'business'},
      {year: 2022, date: 'June 2022', title: 'England signs the first antibiotic subscription contracts', kind: 'regulatory'},
      {year: 2026, date: 'February 4, 2026', title: 'PASTEUR Act reintroduced in Congress, for the fourth time', kind: 'regulatory'},
    ]},

    // ---------------- MONEY BEFORE MARKET ----------------
    {type: 'story', kicker: 'Funding the science', title: 'Paid for by the government, the markets and a foundation', tocTitle: 'Funding the science', html: `
      <p>Antibiotic research is a strange business to raise money for. Investors want a product that sells a lot. Public-health officials want a product that sits in reserve. From the start, Achaogen lived on a mix of both kinds of money.</p>
      <p>The biggest single backer was the U.S. government. In August 2010, [[BARDA]], the Biomedical Advanced Research and Development Authority, awarded Achaogen a contract to develop plazomicin against drug-resistant hospital infections such as CRE, and also against biothreats: the bacteria that cause plague and tularemia, which the government worries could be used as weapons. The contract had a base amount and four options. All four were exercised, for a total of $124.4 million by the end of 2018. That kind of money is called a [[push incentive]]: it lowers the cost of trying, before anyone knows whether the drug works.</p>
      <p>Private money followed. The Wellcome Trust, the British medical charity, lent the company money that was later converted into shares. In March 2014 Achaogen listed on Nasdaq, selling 6 million shares at $12 for $72 million. Its prospectus said the U.S. patent protection for plazomicin ran through 2031. In December 2016, after its phase 3 results, it raised about $94.5 million more. In 2017 the Bill &amp; Melinda Gates Foundation bought $10 million of stock and pledged up to $10.5 million in grants for a separate project on newborn sepsis in poor countries; that project was dropped in December 2018. In 2018, [[CARB-X]], a nonprofit accelerator, awarded $2.4 million toward a next-generation aminoglycoside. Silicon Valley Bank lent $50 million in two tranches in 2018.</p>
      <p>The company also collected every regulatory perk available for antibiotics. Under the 2012 [[GAIN Act]], plazomicin was a [[QIDP|Qualified Infectious Disease Product]], which brought [[priority review]] and five extra years of market exclusivity. It had [[fast track]] designation for CRE infections. Both perks are valuable for a drug that sells well. They are worth much less for a drug that barely sells, a problem nobody could fix by making the approval faster.</p>
      <p>The leadership came from Genentech, the Bay Area biotech giant. Kenneth Hillan, a physician-scientist who had spent 17 years there, joined in 2011 as chief medical officer and ran Achaogen as chief executive from October 2011 to January 2018. Blake Wise, a Genentech marketing and sales executive, joined as chief operating officer in 2015 and became chief executive in January 2018, the year of the launch. The handover made sense: the company was turning from a research shop into a commercial one.</p>`},

    {type: 'figure', title: 'Who pays for a hospital antibiotic, and who benefits', intro: 'Follow the money for one hospital stay in 2018. Hover or tap each box and arrow.',
      svg: `<svg viewBox="0 0 900 430">
        <g data-part="payer"><rect x="20" y="40" width="190" height="82" rx="14" class="il-6s il-line"/><text x="36" y="72" class="il-title">Medicare or insurer</text><text x="36" y="96" class="il-text-2">pays for the stay</text></g>
        <g data-part="drg"><path d="M212 76 H366" class="il-none st-6 flow" stroke-width="3"/><path d="M362 68 L374 76 L362 84 Z" class="il-6"/><text x="222" y="64" class="il-text-2">one fixed DRG payment</text></g>
        <g data-part="ntap"><path d="M212 108 H366" class="il-none st-6 il-dash" stroke-width="2"/><path d="M362 101 L373 108 L362 115 Z" class="il-6"/><text x="222" y="136" class="il-text-2">NTAP add-on (Medicare</text><text x="222" y="152" class="il-text-2">inpatients, partial)</text></g>
        <g data-part="hospital"><rect x="376" y="40" width="200" height="82" rx="14" class="il-3s il-line"/><text x="392" y="72" class="il-title">Hospital</text><text x="392" y="96" class="il-text-2">nurses, bed, labs, drugs</text></g>
        <g data-part="pharmacy"><path d="M476 124 V196" class="il-none il-line2"/><path d="M468 192 L476 204 L484 192 Z" class="il-8"/><rect x="376" y="206" width="200" height="82" rx="14" class="il-8s il-line"/><text x="392" y="238" class="il-title">Pharmacy budget</text><text x="392" y="262" class="il-text-2">drug costs come out of</text><text x="392" y="278" class="il-text-2">the fixed payment</text></g>
        <g data-part="price"><path d="M578 246 H672" class="il-none st-6 flow" stroke-width="3"/><path d="M668 238 L680 246 L668 254 Z" class="il-6"/><text x="586" y="226" class="il-text">$5,445</text><text x="586" y="272" class="il-text-2">a course</text></g>
        <g data-part="maker"><rect x="682" y="206" width="200" height="82" rx="14" class="il-1s il-line"/><text x="698" y="238" class="il-title">Achaogen</text><text x="698" y="262" class="il-text-2">paid per vial sold</text></g>
        <g data-part="barda"><rect x="682" y="40" width="200" height="82" rx="14" class="il-4s il-line"/><text x="698" y="72" class="il-title">BARDA, CARB-X</text><text x="698" y="96" class="il-text-2">push money before approval</text><path d="M782 124 V196" class="il-none st-4 flow" stroke-width="3"/><path d="M774 192 L782 204 L790 192 Z" class="il-4"/></g>
        <g data-part="society"><rect x="20" y="320" width="300" height="92" rx="14" class="il-5s il-line"/><text x="36" y="352" class="il-title">Everyone else</text><text x="36" y="376" class="il-text-2">future patients whose infections</text><text x="36" y="394" class="il-text-2">stay treatable</text>
          <path d="M770 290 C750 380 520 380 326 366" class="il-none st-5 il-dash" stroke-width="2.5"/><path d="M332 358 L320 366 L332 374 Z" class="il-5"/><text x="470" y="404" class="il-text">value nobody pays for</text></g>
      </svg>`,
      hotspots: {
        payer: {title: 'The payer', text: 'For most hospital stays of older Americans, the payer is Medicare, run by [[CMS]]. Private insurers often use similar bundled payments.'},
        drg: {title: 'The DRG bundle', text: 'Medicare pays a fixed amount per inpatient stay according to the patient\'s [[DRG|diagnosis-related group]]. In fiscal 2019, the base payment for a kidney or urinary infection without major complications (MS-DRG 690) worked out to roughly $4,500 at an average hospital. The hospital gets the same amount whether it uses a $10 generic or a $5,445 new drug.'},
        ntap: {title: 'The add-on payment', text: 'CMS approved an [[NTAP]] for Zemdri in August 2018, effective October 1: up to 50% of the drug\'s cost, capped at $2,722.50 a case, and only when the stay\'s total cost exceeded the DRG payment. Only Medicare inpatients qualified. Using Achaogen\'s estimate, CMS expected about 2,500 cases in the first year.'},
        hospital: {title: 'The hospital', text: 'The hospital keeps the difference between the fixed payment and what it spends. A drug that costs more than the old one directly cuts its margin on that patient.'},
        pharmacy: {title: 'The pharmacy budget', text: 'Hospital pharmacy directors are judged on drug spending. The [[pharmacy and therapeutics committee]] decides whether a new drug is stocked and who may order it.'},
        price: {title: 'The price', text: 'CMS\'s 2018 rule records a [[WAC|wholesale price]] of $330 a vial. A typical patient needed three vials a day for about 5.5 days, or $5,445 a course. That is cheap next to many specialty drugs and expensive next to generic antibiotics.'},
        maker: {title: 'The company', text: 'Achaogen earned money only when a vial was sold. Every course that a careful doctor avoided was revenue it would never see.'},
        barda: {title: 'Push funding', text: 'Government and nonprofit grants paid for much of the development ($124.4 million from [[BARDA]] alone). But push money stops at approval, exactly when a company must pay for a sales force and manufacturing.'},
        society: {title: 'The value nobody pays for', text: 'Much of a reserve antibiotic\'s value is insurance: it is there when a resistant outbreak hits, and keeping it unused keeps it working. That benefit is spread across everyone and paid for by no one in this diagram. Economists call it a positive externality.'},
      },
      caption: 'Simplified. Outpatient infusion centers, which accounted for most early Zemdri use, are paid differently; Zemdri received a permanent outpatient billing code (C-code) in January 2019.'},

    {type: 'callout', variant: 'product', heading: 'A product people need and should use as little as possible', html: `<p>Most products win by getting used more: more seats, more sessions, more transactions. A reserve antibiotic is the opposite. Its best outcome for society is to sit on the shelf, ready, while older drugs handle the easy cases, because every use nudges bacteria toward resistance. That makes it closer to a fire extinguisher, a backup generator or a disaster-recovery site than to a SaaS product. You pay for those to exist, not per use.</p><p><b>Where the analogy breaks:</b> a company that sells backup generators can charge the building owner upfront, because the owner captures the benefit. With antibiotics, the benefit of keeping a drug in reserve goes mostly to strangers and future patients, so no single buyer has a reason to pay for readiness. That is why the fix has to come from governments, the only buyers big enough to represent "everyone else."</p>`},

    // ---------------- TRIALS ----------------
    {type: 'story', kicker: 'The trials', title: 'The trial you want and the trial you can run', tocTitle: 'Designing the trials', html: `
      <p>A drug that beats resistant bacteria should be tested against resistant bacteria. That was Achaogen's first plan. Its 2014 prospectus described a single pivotal [[superiority trial]], later named CARE (Combating Antibiotic Resistant Enterobacteriaceae), in patients with bloodstream infections or pneumonia caused by CRE. Plazomicin would be compared with the best available alternative, [[colistin]]. The company projected that plazomicin would cut deaths by 12 percentage points from a baseline of 35%, and estimated it needed about 360 randomized patients over 36 months. Through a [[Special Protocol Assessment]], the FDA had agreed that the design could support an application.</p>
      <p>This was the trial that would prove the drug's real value. It was also nearly impossible to run. CRE bloodstream infections are rare and scattered across many hospitals, and the patients are desperately ill and must be treated at once, often before the lab has even confirmed CRE. One later review counted more than 2,100 patients screened, fewer than 2% of whom were enrolled.</p>
      <p>On March 31, 2015, Achaogen told investors that CARE was enrolling more slowly than expected, and that it would add a second phase 3 trial, in [[cUTI|complicated urinary tract infections]]. That population is large and easy to find. Based on its talks with the FDA, the company expected this trial, together with an earlier successful phase 2 trial in the same infections, to be enough for an application. The FDA also agreed to change CARE's primary endpoint to a combination of death or serious disease-related complications at day 28, which would produce more events and more statistical power.</p>
      <p>The new trial, EPIC (Evaluating Plazomicin In cUTI), was a [[non-inferiority trial]]. Its question was not "is plazomicin better?" but "is it not unacceptably worse than [[meropenem]], a standard carbapenem?" The margin was 15 percentage points. Most patients in such a trial have bacteria that meropenem kills easily, so the trial could not show plazomicin's special talent. It could show that the drug worked in people and was reasonably safe, which is what the FDA needs to approve it.</p>
      <p>This choice is standard in antibiotic development, and for good reason. It is how most modern antibiotics get approved. But it quietly set up the commercial problem: the drug would be approved for an infection that cheaper drugs usually treat well, while the evidence for its unique value came from a trial too small to count.</p>`},

    {type: 'decision', title: 'CARE is stalling', role: 'You are Achaogen\'s chief executive, early 2015',
      scenario: `Your only pivotal trial, CARE, is designed to show plazomicin saves lives in CRE infections, the exact problem the company exists to solve. It is enrolling far below plan, and your cash is finite. The FDA has signaled that a non-inferiority trial in complicated urinary tract infections could support approval. What do you do?`,
      options: [
        {label: 'Keep CARE as the pivotal trial and push enrollment harder, adding sites worldwide', outcome: `If it works, you get the most valuable label possible: proof that plazomicin saves lives in CRE. That evidence would justify a premium price and give doctors a reason to use it. But at the current pace, results might be years away, and the trial might still be too small to reach a clear answer. Your investors and BARDA's contract milestones are watching the calendar.`},
        {label: 'Add a urinary-infection non-inferiority trial as the new pivotal study, and keep CARE going as supporting evidence', outcome: `This is the predictable path: a large, easy-to-find population, a well-trodden FDA route, results in about two years. The risk is strategic, not scientific. You will likely be approved for an infection where cheap drugs usually work, and doctors will reserve you for the rare resistant cases. You win approval and lose the argument about value.`},
        {label: 'Stop investing in phase 3 and license plazomicin to a large company with a hospital sales force', outcome: `A big partner could run trials in many countries at once and already sells to hospitals. But in 2015 large companies were leaving antibiotics, not entering. You would likely get a small upfront payment and a modest royalty, and your company, whose whole reason to exist is this molecule, would lose control of it.`},
      ],
      reality: `Achaogen added EPIC in 2015 and kept CARE as supporting evidence. EPIC enrolled 609 patients in about eight months and reported positive results in December 2016. CARE closed in August 2016 with 69 patients, only 39 of them randomized, instead of the roughly 360 once planned. The path to approval worked. The path to proving value did not.`},

    {type: 'trial', title: 'EPIC: plazomicin versus meropenem in urinary tract infections', intro: 'The design is below. Make a prediction to see the results.',
      design: {name: 'EPIC', phase: 'Phase 3', blinding: 'Double-blind', years: '2016', n: 609,
        population: 'Adults with complicated urinary tract or acute kidney infections',
        randomization: '1:1',
        arms: [{name: 'Plazomicin', n: 191, desc: '15 mg/kg IV once a day, 30-minute infusion'}, {name: 'Meropenem', n: 197, desc: '1 g IV every 8 hours', control: true}],
        endpoint: 'Composite cure at day 5 and at test-of-cure',
        details: {
          'Primary endpoints': 'Composite cure (symptoms resolved plus bacteria eradicated from the urine) at day 5 and at the [[test-of-cure]] visit, 15 to 19 days after starting treatment, in the [[mMITT]] population. Arm sizes shown are the 388 patients in that analysis.',
          'Question asked': 'Non-inferiority, with a margin of 15 percentage points',
          'Treatment': '7 to 10 days in total; after at least 4 days of IV therapy, patients who improved could step down to oral levofloxacin',
          'Registry': 'ClinicalTrials.gov NCT02486627; published in the <em>New England Journal of Medicine</em>, 2019 (Wagenlehner et al.)',
        }},
      predict: {q: 'Plazomicin had to be "not much worse" than meropenem, a carbapenem that kills most urinary bacteria. What happened at the test-of-cure visit, about two weeks after treatment started?',
        options: ['Plazomicin was slightly worse but within the margin, as non-inferiority trials usually show', 'Plazomicin cured more patients than meropenem: about 82% versus 70%', 'Plazomicin failed the non-inferiority test', 'The two drugs were identical to within 1 percentage point'],
        answer: 1,
        explain: `At day 5, plazomicin was slightly behind (88.0% versus 91.4%), comfortably within the margin. At the test-of-cure visit, composite cure was 81.7% on plazomicin versus 70.1% on meropenem, a difference of 11.6 percentage points (95% confidence interval 2.7 to 20.3). Fewer plazomicin patients relapsed later (1.6% versus 7.1%). Plazomicin did better even against bacteria resistant to older aminoglycosides. The price: more kidney effects, with serum creatinine rising by 0.5 mg/dL or more in 7.0% of plazomicin patients versus 4.0% on meropenem.`},
      results: [
        {kind: 'bar', title: 'Composite cure, mMITT population', subtitle: 'Percent of patients cured (clinical cure plus bacteria eradicated)', unit: '%', categories: ['Day 5', 'Test-of-cure (day 15–19)'],
          series: [{name: 'Plazomicin', values: [88.0, 81.7], notes: ['168 of 191', '156 of 191']}, {name: 'Meropenem', values: [91.4, 70.1], notes: ['180 of 197', '138 of 197'], color: 2}], yMax: 100},
        {kind: 'bar', title: 'Late follow-up, 24 to 32 days after starting', subtitle: 'Percent of patients; lower is better', unit: '%', categories: ['Clinical relapse', 'Bacteria came back'],
          series: [{name: 'Plazomicin', values: [1.6, 3.7]}, {name: 'Meropenem', values: [7.1, 8.1], color: 2}], yMax: 10,
          note: 'Source: Wagenlehner et al., NEJM 2019; Achaogen 8-K, December 12, 2016.'},
      ],
      takeaway: 'A clean win on the regulator\'s question. The trial showed plazomicin works in ordinary urinary infections; it could not show that it saves lives in resistant ones, because most of these patients did not have CRE.'},

    {type: 'callout', variant: 'lesson', heading: 'What non-inferiority buys you, and what it doesn\'t', html: `<p>Non-inferiority is the standard way to approve an antibiotic, because it is often unethical to give a seriously ill patient a placebo, and because a new drug rarely beats a good old one on susceptible bacteria. It proves "about as good as the standard." That is enough for the FDA. It is not enough for a hospital deciding whether to pay 10 or 100 times more than for a generic. For a product manager, it is like shipping a feature at parity with the incumbent: it gets you into the market, but gives nobody a reason to switch.</p>`},

    {type: 'trial', title: 'CARE: the trial that was supposed to prove the value', intro: 'This is the small, open-label trial in CRE bloodstream infections and pneumonia. Make a prediction to see the results.',
      design: {name: 'CARE', phase: 'Phase 3', blinding: 'Open-label', years: '2014–2016', n: 69,
        population: 'Adults with bloodstream infections or hospital pneumonia caused by CRE',
        randomization: 'Cohort 1',
        arms: [{name: 'Plazomicin combination', n: 17, desc: 'Plazomicin plus meropenem or tigecycline'}, {name: 'Colistin combination', n: 20, desc: 'Colistin plus meropenem or tigecycline', control: true}],
        endpoint: 'Death or serious complications by day 28',
        details: {
          'Cohorts': 'Cohort 1: 39 patients randomized (30 with bloodstream infections, 9 with pneumonia); 37 had confirmed CRE and formed the main analysis. Cohort 2: 30 patients given plazomicin in a single-arm expanded-access group.',
          'Primary endpoint': 'All-cause death or significant disease-related complications at day 28',
          'Statistics': 'Because the sample was so small, no formal hypothesis test was planned; results were described with 90% confidence intervals',
          'Registry': 'ClinicalTrials.gov NCT01970371; published as a letter in the <em>New England Journal of Medicine</em>, 2019 (McKinnell et al.)',
        }},
      predict: {q: 'In the 37 patients with confirmed CRE, what share died or had serious complications by day 28?',
        options: ['About the same in both groups', 'About 24% on plazomicin versus 50% on colistin', 'Worse on plazomicin, because it is an aminoglycoside and harms the kidneys', 'About 5% versus 60%, an overwhelming result'],
        answer: 1,
        explain: `Four of 17 plazomicin patients (23.5%) died or had serious complications, versus 10 of 20 on colistin (50.0%). Deaths by day 28 were 2 of 17 (11.8%) versus 8 of 20 (40.0%). Kidney side effects were also less common with plazomicin (16.7% versus 38.1%). The numbers pointed strongly one way. But the 90% confidence interval for the primary difference ran from −0.7 to 51.2 percentage points: it included zero. Shift two or three patients and the picture changes.`},
      results: [
        {kind: 'bar', title: 'Day-28 outcomes, Cohort 1 (patients with confirmed CRE)', subtitle: 'Percent of patients. Plazomicin n=17, colistin n=20', unit: '%', categories: ['Death or serious complications', 'Death from any cause'],
          series: [{name: 'Plazomicin', values: [23.5, 11.8], notes: ['4 of 17', '2 of 17']}, {name: 'Colistin', values: [50.0, 40.0], notes: ['10 of 20', '8 of 20'], color: 2}], yMax: 60,
          note: 'Differences: 26.5 points (90% CI −0.7 to 51.2) and 28.2 points (90% CI 0.7 to 52.5). Source: Achaogen 8-K, December 12, 2016; McKinnell et al., NEJM 2019.'},
      ],
      takeaway: 'A striking difference in a very small, open-label study. It is exactly the kind of result that makes doctors hopeful and statisticians nervous.'},

    // ---------------- REGULATORS ----------------
    {type: 'story', kicker: 'The regulators', title: 'Yes for the bladder, no for the blood', tocTitle: 'The FDA\'s verdict', html: `
      <p>Achaogen submitted its New Drug Application on October 25, 2017, asking for two uses: complicated urinary tract infections, based on EPIC, and bloodstream infections in patients with limited or no treatment options, based mainly on CARE. The FDA gave it [[priority review]], with a decision date of June 25, 2018.</p>
      <p>On May 2, 2018, the FDA's Antimicrobial Drugs [[advisory committee]] met in public to review the evidence. Fifteen voting members were present. On urinary infections the vote was unanimous: 15 yes, 0 no. On bloodstream infections it was 4 yes and 11 no. The question the panel answered was whether Achaogen had provided "substantial evidence" of safety and effectiveness. For the bloodstream indication, the evidence was a comparison of 17 patients with 20, in an open-label trial where doctors knew who got which drug, with no pre-planned statistical test. Published reviews of the drug later summarized the problem the same way: the result was encouraging but too small to be conclusive.</p>
      <p>On June 25, 2018, the FDA approved Zemdri for complicated urinary tract infections, including kidney infections, caused by <em>E. coli</em>, <em>Klebsiella pneumoniae</em>, <em>Proteus mirabilis</em> and <em>Enterobacter cloacae</em>, in adults. The label included a sentence that mattered commercially: "As only limited clinical safety and efficacy data for ZEMDRI are currently available, reserve ZEMDRI for use in cUTI patients who have limited or no alternative treatment options." It carried a [[black box warning|boxed warning]] for kidney damage, hearing and balance damage, neuromuscular blockade and fetal harm.</p>
      <p>For bloodstream infections, the FDA issued a [[complete response letter]] stating that the CARE study "does not provide substantial evidence of effectiveness." In December 2018 Achaogen filed a formal dispute, arguing its data did provide substantial evidence. The FDA denied the first round.</p>
      <p>Put the two decisions together and you get the commercial trap. The approved use was one where cheaper drugs usually work, and the label itself told doctors to hold Zemdri back. The use where plazomicin had a unique case, resistant bloodstream infections, was not on the label, so the company could not promote it there. Doctors were free to prescribe it off-label, but a company cannot build a sales plan on that.</p>
      <p>Europe went no better. Achaogen submitted a marketing application to the European Medicines Agency (EMA) in October 2018. Cipla inherited it and withdrew it on June 16, 2020, citing commercial reasons. The EMA's summary says that at that point its provisional opinion was negative, largely over whether the method used to sterilize the product had been fully justified.</p>`},

    {type: 'table', title: 'What the FDA approved, and what it didn\'t', columns: ['', 'Complicated urinary tract infection', 'Bloodstream infection'],
      rows: [
        ['Main evidence', 'EPIC: 609 patients randomized, double-blind, versus meropenem', 'CARE Cohort 1: 37 analyzed patients, open-label, versus colistin'],
        ['Result', 'Non-inferior at day 5; higher cure at test-of-cure (81.7% vs 70.1%)', 'Death or complications 23.5% vs 50.0%; no formal statistical test'],
        ['Advisory committee (May 2, 2018)', '15 yes, 0 no', '4 yes, 11 no'],
        ['FDA decision (June 25, 2018)', 'Approved, with "reserve" language and a boxed warning', '[[complete response letter]]: "does not provide substantial evidence of effectiveness"'],
        ['Commercial meaning', 'A market where cheaper drugs usually work', 'The market where plazomicin was uniquely valuable, off-label only'],
      ],
      caption: 'Sources: Achaogen 8-Ks of May 2 and June 26, 2018; FDA approval letter and label for NDA 210303; Wagenlehner et al. and McKinnell et al., NEJM 2019.'},

    // ---------------- LAUNCH ----------------
    {type: 'story', kicker: 'The moment of failure', title: 'The launch that never took off', tocTitle: 'The launch', html: `
      <p>Zemdri became available in the United States on July 20, 2018. Achaogen had hired a field team of sales representatives and medical science liaisons, experienced people who could explain the data to infectious disease specialists and hospital pharmacists. In its first two weeks, the company said, the team reached more than 75% of its high-priority accounts.</p>
      <p>Six days after launch, on July 26, 2018, Achaogen announced a restructuring that would eliminate about 80 positions, roughly 28% of its workforce, sparing the commercial and medical affairs teams. Kenneth Hillan, the former chief executive who had led the company through the trials, would leave in October, along with the chief financial officer and chief scientific officer. The company was cutting research to fund a launch. Its cash had fallen from $164.8 million at the end of 2017 to $100.5 million by the end of June.</p>
      <p>On November 8, Achaogen reported its first quarter of sales: $291,000, representing about two months on the market. Blake Wise, the chief executive, said: "Momentum for ZEMDRI continues to build and we are pleased with the interest we are seeing for the product." The company said 60% of use so far was outpatient, in infusion centers, where the once-daily 30-minute infusion was an advantage. Three days earlier, it had announced a review of "strategic alternatives," the corporate phrase for putting the company up for sale.</p>
      <p>The leading indicators the company tracked looked healthy: formulary approvals, hospital labs ordering [[susceptibility testing]] materials, readiness for blood-level testing. By February 2019, Achaogen said Zemdri had been approved on 153 hospital formularies, with 98% of formulary reviews ending in approval, and that 200 physician-owned infusion centers had requested or signed contracts. The lagging indicator was the one that paid the bills. Fourth-quarter sales were $0.5 million. For all of 2018, Zemdri's net sales were $0.8 million. At the list price of $5,445 a course, that is on the order of 150 full courses of treatment, fewer than one a day across the whole United States.</p>`},

    {type: 'chart', title: 'Sales versus spending after launch', intro: 'Achaogen\'s reported figures for its two quarters on the market in 2018. Hover for values.',
      chart: {kind: 'bar', title: 'Quarterly revenue and expenses, 2018', subtitle: 'US$ millions (M), company-reported', unit: 'M', categories: ['Q3 2018 (about two months of sales)', 'Q4 2018'],
        series: [{name: 'Zemdri net sales', values: [0.29, 0.5]}, {name: 'Selling, general and administrative', values: [18.9, 16.9], color: 2}, {name: 'Research and development', values: [21.7, 13.4], color: 3}],
        note: 'Sources: Achaogen third-quarter (November 8, 2018) and fourth-quarter (March 28, 2019) results. Restructuring charges of $7.9M and $15.6M are excluded.'},
      takeaway: 'Each quarter, the company spent roughly 30 to 60 times more on sales and administration alone than the drug brought in.'},

    {type: 'callout', variant: 'product', heading: 'Distribution is not adoption', html: `<p>A formulary approval is like getting your app listed in an enterprise's approved-software catalog. Procurement said yes. That tells you nothing about whether anyone will open it. Achaogen won 98% of its formulary reviews and still sold fewer than one course a day nationwide, because hospitals typically stock a new reserve antibiotic with restrictions, such as requiring a documented resistant infection or an infectious disease specialist's sign-off.</p><p><b>Where the analogy breaks:</b> in software, low usage after procurement is a failure of onboarding or product fit, and you can iterate on it. Here, low usage was the intended outcome. The doctors restricting Zemdri were following the label and the principles of [[antibiotic stewardship]]. The product worked exactly as designed, and the system around it was designed to keep it on the shelf.</p>`},

    // ---------------- WHY HOSPITAL LOSES ----------------
    {type: 'story', kicker: 'The post-mortem, part 1', title: 'Why the hospital loses money on a new antibiotic', tocTitle: 'Hospital economics', html: `
      <p>To see why doctors and pharmacists were slow to use Zemdri, you have to see a hospital stay from the hospital's point of view.</p>
      <p>Medicare, which pays for most hospital care of Americans over 65, does not pay hospitals item by item for inpatients. It pays one fixed amount per stay, based on the patient's diagnosis-related group, or [[DRG]]. For fiscal 2019, a kidney or urinary tract infection without major complications fell in MS-DRG 690, with a relative weight of 0.7941. Multiplied by Medicare's national base rate of about $5,650, that is roughly <strong>$4,500</strong> for the whole stay at an average hospital, before local adjustments. A more complicated case (MS-DRG 689) was worth roughly $6,300. Every nurse, bed-day, lab test and drug comes out of that amount.</p>
      <p>Now add Zemdri. The CMS rule records a wholesale price of $330 a vial. A typical patient needs about three vials a day for 5.5 days: <strong>$5,445</strong> for the course, more than the entire DRG payment for a simple case. An older generic antibiotic costs a small fraction of that. So a hospital that switches a patient to Zemdri turns a modest profit on that stay into a loss.</p>
      <p>Medicare knew this and had a patch: the New Technology Add-on Payment, or [[NTAP]]. CMS granted Zemdri one in August 2018, effective October 1. But the patch was small. It paid the lesser of half the drug's cost or half of the amount by which the whole stay's cost exceeded the DRG payment, capped at $2,722.50 a case. It applied only to Medicare inpatients. And to claim it, the hospital still had to absorb at least half the cost. Using Achaogen's own estimate, CMS expected about 2,500 cases in the first year, worth about $6.8 million in add-on payments in total.</p>
      <p>In its 2020 payment rule, CMS raised the add-on for antibiotics designated as [[QIDP|QIDPs]] to 75%, starting October 1, 2019. By then Achaogen had been in bankruptcy for more than five months.</p>
      <p>None of this makes hospital pharmacists villains. Their job is to buy the best care the fixed payment allows. When an old generic works, as it does for most urinary infections, paying 50 times more for a new drug is hard to justify. The explorer below lets you run the numbers yourself.</p>`},

    {type: 'explorer', title: 'The hospital\'s math on one Medicare stay', intro: 'Defaults use CMS\'s fiscal 2019 figures for the DRG payment, Zemdri\'s course cost and the add-on rate. The hospital\'s other costs and the older drug\'s cost are your assumptions. Try raising the add-on to 75%, as CMS did for antibiotics in October 2019.',
      inputs: [
        {id: 'drg', label: 'DRG payment for the stay', min: 2500, max: 9000, step: 50, value: 4500, fmt: v => '$' + v.toLocaleString('en-US')},
        {id: 'other', label: 'Other costs of the stay', min: 1000, max: 8000, step: 100, value: 3800, fmt: v => '$' + v.toLocaleString('en-US')},
        {id: 'old', label: 'Older antibiotic course', min: 10, max: 1500, step: 10, value: 100, fmt: v => '$' + v.toLocaleString('en-US')},
        {id: 'zem', label: 'Zemdri course', min: 1000, max: 8000, step: 5, value: 5445, fmt: v => '$' + v.toLocaleString('en-US')},
        {id: 'ntap', label: 'Add-on (NTAP) rate', min: 0, max: 75, step: 25, value: 50, fmt: v => v + '%'},
      ],
      compute: (v) => {
        const mOld = v.drg - v.other - v.old, costZ = v.other + v.zem;
        const nt = Math.min(v.ntap / 100 * v.zem, v.ntap / 100 * Math.max(0, costZ - v.drg));
        const mZ = v.drg - costZ + nt;
        const f = x => (x < 0 ? '−$' : '$') + Math.abs(Math.round(x)).toLocaleString('en-US');
        const mx = Math.max(Math.abs(mOld), Math.abs(mZ), 500), sc = 210 / mx, z = 470;
        const bar = (y, m, cls, lab) => { const w = Math.abs(m) * sc, x = m >= 0 ? z : z - w; return '<rect x="' + x.toFixed(1) + '" y="' + y + '" width="' + Math.max(1, w).toFixed(1) + '" height="30" rx="5" class="' + cls + '"/><text x="10" y="' + (y + 20) + '" class="il-text">' + lab + '</text><text x="' + (m >= 0 ? x + w + 8 : x - 8).toFixed(1) + '" y="' + (y + 20) + '" text-anchor="' + (m >= 0 ? 'start' : 'end') + '" class="il-text">' + f(m) + '</text>'; };
        let s = '<svg viewBox="0 0 720 130" style="width:100%;height:auto;display:block;margin-bottom:8px">';
        s += '<line x1="' + z + '" x2="' + z + '" y1="6" y2="112" class="il-line"/><text x="' + (z - 6) + '" y="126" text-anchor="end" class="il-text-2">loss</text><text x="' + (z + 6) + '" y="126" class="il-text-2">profit</text>';
        s += bar(16, mOld, 'il-8', 'Older antibiotic') + bar(62, mZ, 'il-1', 'Zemdri');
        s += '</svg>';
        return s + 'With the older drug, the hospital ends the stay at <b>' + f(mOld) + '</b>. With Zemdri it ends at <b>' + f(mZ) + '</b>, after an add-on payment of <b>' + f(nt) + '</b>. Switching costs the hospital <b>' + f(mOld - mZ) + '</b> on this one patient. ' + (v.ntap === 0 ? 'Without the add-on, the whole price difference comes out of the hospital\'s margin.' : 'Even with the add-on, the hospital carries most of the price difference, and only Medicare inpatients qualify.');
      }},

    {type: 'decision', title: 'The formulary vote', role: 'You chair a hospital pharmacy and therapeutics committee, fall 2018',
      scenario: `Zemdri is on your committee's agenda. Your hospital sees a handful of CRE infections a year and many ordinary urinary infections. Your infectious disease doctors want access "just in case." Your stewardship team worries about resistance. Your finance office points out that a course costs $5,445 and most of your urinary infection patients are covered by a fixed DRG payment of about $4,500. Your microbiology lab does not yet have Zemdri susceptibility testing, and plazomicin blood-level testing is only just becoming available. What do you recommend?`,
      options: [
        {label: 'Add it to the formulary without restrictions', outcome: `Doctors get easy access, and the rare patient with a resistant infection gets it quickly. But you invite use in ordinary infections that a generic would cure, each one a loss for the hospital and a small push toward resistance. Without susceptibility testing, doctors may prescribe it blind. Your stewardship team will object.`},
        {label: 'Add it, restricted to infectious disease approval for documented resistant infections', outcome: `The textbook stewardship answer. The drug is there when a patient truly needs it, and it stays out of routine use. Your hospital will probably use a few courses a year. Multiply your decision by hundreds of hospitals making the same sensible choice, and you have Achaogen's sales figures.`},
        {label: 'Don\'t add it; order it case by case, or transfer rare patients to a referral center', outcome: `The cheapest option. With other new drugs already available for many CRE infections, such as ceftazidime-avibactam (approved 2015) and meropenem-vaborbactam (2017), your committee may judge the extra option not worth the paperwork. The risk is delay for the one patient whose bacteria resist everything else, in an infection where hours matter.`},
      ],
      reality: `Most hospitals that reviewed Zemdri approved it: Achaogen reported 153 formulary approvals by February 2019, a 98% approval rate. But being on the formulary is not the same as being used: stewardship programs typically restrict reserve antibiotics, and use stayed tiny. By early 2019, 75% of sales were in outpatient infusion centers rather than hospitals. A 2020 analysis of new CRE drugs in the U.S. listed the reasons use lagged: cost, limited trial data in resistant infections, the lack of commercial susceptibility tests, stewardship mandates, short treatment courses, and the effectiveness of cheap older drugs against most infections.`},

    // ---------------- STEWARDSHIP ----------------
    {type: 'story', kicker: 'The post-mortem, part 2', title: 'Stewardship: the right behavior that breaks the business', tocTitle: 'Stewardship', html: `
      <p>[[antibiotic stewardship|Antibiotic stewardship]] means using antibiotics only when needed, choosing the narrowest drug that works, and keeping the newest drugs in reserve so that bacteria see them as rarely as possible. It is one of the great public-health successes of the past two decades, and it is the right policy. It is also, for a company selling a new antibiotic, a demand ceiling built into the market.</p>
      <p>Think about who actually needed Zemdri in 2018. Not most urinary infection patients: an older drug usually works. Not most CRE patients either: by then, two other new drugs active against many CRE strains were on the market. Ceftazidime-avibactam (Avycaz) had been approved in February 2015 and meropenem-vaborbactam (Vabomere) in August 2017. Plazomicin's niche was the patient whose infection resisted those too, or who couldn't take them, and whose bacteria didn't carry the ribosome-methylating enzymes that defeat plazomicin. That is a small group. It is also, from a public-health standpoint, exactly the group the drug should be saved for.</p>
      <p>The whole class shared the ceiling. One analysis put 2018 U.S. sales of the newest anti-CRE drugs, combined, at about $101 million. For comparison, a single successful cancer or immunology drug can sell that much in a week.</p>
      <p>There was also a practical barrier. A doctor needs to know an infection is susceptible before choosing a reserve drug, and that requires the hospital lab to have a validated susceptibility test for it. For a brand-new antibiotic, labs often lack one for months. Achaogen spent part of its launch persuading hospital labs to adopt Zemdri testing and getting a blood-level test into hospital and reference labs. These are the unglamorous parts of a launch that a product manager would recognize as integration work: the product is only usable once the systems around it support it.</p>
      <p>The explorer below shows how these forces cap revenue. Set the number of patients who truly need the drug each year, the share that actually get it, and the price. Then compare the revenue with what it costs to keep even a stripped-down company alive.</p>`},

    {type: 'explorer', title: 'Why stewardship caps sales', intro: 'All inputs are adjustable assumptions except the defaults noted: the price is CMS\'s $5,445 course cost, and the yearly cost reflects Achaogen\'s own guidance of $15 to $17 million a quarter after its February 2019 cuts, about 40 employees. Nobody published a reliable count of patients who truly needed Zemdri; CMS, using Achaogen\'s estimate, expected about 2,500 Medicare inpatient cases in the first year.',
      inputs: [
        {id: 'pts', label: 'U.S. patients a year who could benefit', min: 500, max: 50000, step: 500, value: 10000, fmt: v => v.toLocaleString('en-US')},
        {id: 'share', label: 'Share who actually get it', min: 1, max: 100, step: 1, value: 10, fmt: v => v + '%'},
        {id: 'price', label: 'Net revenue per course', min: 945, max: 20195, step: 250, value: 5445, fmt: v => '$' + v.toLocaleString('en-US')},
        {id: 'cost', label: 'Company\'s yearly costs', min: 20, max: 200, step: 2, value: 64, fmt: v => '$' + v + 'M'},
      ],
      compute: (v) => {
        const courses = v.pts * v.share / 100, rev = courses * v.price / 1e6, need = Math.ceil(v.cost * 1e6 / v.price);
        const mx = Math.max(rev, v.cost), sc = 470 / mx;
        let s = '<svg viewBox="0 0 720 110" style="width:100%;height:auto;display:block;margin-bottom:8px">';
        s += '<rect x="170" y="12" width="' + Math.max(2, rev * sc).toFixed(1) + '" height="32" rx="5" class="il-1"/><text x="10" y="33" class="il-text">Revenue</text><text x="' + (178 + rev * sc).toFixed(1) + '" y="33" class="il-text">$' + rev.toFixed(1) + 'M</text>';
        s += '<rect x="170" y="60" width="' + (v.cost * sc).toFixed(1) + '" height="32" rx="5" class="il-2"/><text x="10" y="81" class="il-text">Yearly costs</text><text x="' + (178 + v.cost * sc).toFixed(1) + '" y="81" class="il-text">$' + v.cost + 'M</text>';
        s += '</svg>';
        return s + '<b>' + Math.round(courses).toLocaleString('en-US') + '</b> courses a year bring in <b>$' + rev.toFixed(1) + ' million</b>. To cover $' + v.cost + ' million of costs you would need about <b>' + need.toLocaleString('en-US') + '</b> courses a year. ' + (rev >= v.cost ? 'That works, but only if doctors use the drug far more than stewardship would advise.' : 'The gap is ' + '$' + (v.cost - rev).toFixed(1) + ' million. Raising use closes it, at the cost of faster resistance; raising the price closes it, at the cost of hospital losses. Achaogen\'s actual 2018 sales were $0.8 million.');
      }},

    {type: 'callout', variant: 'product', heading: 'Value versus volume pricing', html: `<p>Software teams argue constantly about pricing metrics: per seat, per API call, per outcome, flat subscription. The right metric aligns what the customer pays with the value they get. For a reserve antibiotic, per-unit pricing is the worst possible metric, because the value comes mostly from <em>not</em> using it. Charging per vial punishes exactly the behavior society wants. It is like pricing a security product per breach prevented: the better the product works, and the more carefully it is deployed, the less it earns.</p><p><b>Where the analogy breaks:</b> a software company can simply switch to a flat subscription. An antibiotic maker can't, because its customer (a hospital paid per stay) is not the one who benefits from reserve capacity, and the one who benefits (the public) has no checkout page. Changing the pricing metric requires changing the law, which is the subject of the last part of this case.</p>`},

    // ---------------- THE FALL ----------------
    {type: 'story', kicker: 'The collapse', title: 'Ten months', tocTitle: 'The collapse', html: `
      <p>By the end of 2018 the arithmetic was brutal. Achaogen had $31.0 million of unrestricted cash left. In December, its lender, Silicon Valley Bank, required $25 million of the $50 million it had lent to be held as collateral, locking that money away. The company lost $186.5 million in 2018. It redeemed the Gates Foundation's shares using restricted cash left from that deal, after the newborn sepsis project was dropped.</p>
      <p>In February 2019 Achaogen sold 15 million new shares, raising just $13.6 million after fees, about a dollar a share. Its 2014 IPO had been priced at $12. On February 28 it began a second restructuring, cutting mostly field sales and medical staff, to get down to about 40 employees and $15 to $17 million of spending a quarter. It said it had enough cash into June 2019. Its annual report, filed April 1, 2019, warned of "substantial doubt" about its ability to continue as a [[going concern]].</p>
      <p>The end came quickly. On April 2, Nasdaq warned that the share price had been below $1 for 30 business days. On April 4, Hillan and two other directors resigned from the board. On April 11, Nasdaq warned that the company's market value had been below $50 million for 30 business days. On April 15, 2019, Achaogen filed for [[Chapter 11]] bankruptcy in Delaware, planning to sell its assets at auction. Wise said in the announcement that the board and management "unanimously agree that this structured sale process represents the best possible solution for the Company." Silicon Valley Bank agreed to lend up to $25 million to keep the lights on during the sale.</p>
      <h3>The auction</h3>
      <p>The auction was held on June 3, 2019. The winning bids came to about $16 million in total for all of Achaogen's assets. Cipla USA, the American arm of the Indian generic-drug company, agreed to buy the worldwide rights to Zemdri outside Greater China for $4.65 million upfront, later amended to $4.8 million, plus royalties: 12.5% of any U.S. government stockpiling payments it received from 2019 to 2021, and 10% of worldwide sales above $40 million a year, with minimum royalties totaling $2.7 million through 2029. Cipla paid another $1.2 million for C-Scape, Achaogen's oral antibiotic candidate. QiLu Antibiotics Pharmaceutical bought a license to plazomicin in Greater China. An asset-auction firm, Heritage Global Partners, bought the lab equipment for $225,000, and another biotech bought an antibody program for $125,000.</p>
      <p>At the end of June, 27 of the remaining 30 employees were let go. The Cipla sale closed on July 23, 2019, and Blake Wise left the company that day. In August, Achaogen deregistered its stock.</p>
      <p>Cipla took over the U.S. application, and the FDA approved labeling updates in 2020 and 2023. Cipla withdrew the European application in 2020. When this case was checked in September 2026, the FDA's Drugs@FDA database listed Cipla USA as Zemdri's application holder and its marketing status as discontinued.</p>`},

    {type: 'chart', title: 'Cash in the bank', intro: 'Achaogen\'s unrestricted cash, cash equivalents and short-term investments.',
      chart: {kind: 'bar', title: 'Unrestricted cash and investments', subtitle: 'US$ millions, company-reported', unit: '$M', categories: ['Dec 31, 2017', 'Jun 30, 2018', 'Sep 30, 2018', 'Dec 31, 2018'],
        series: [{name: 'Cash', values: [164.8, 100.5, 58.2, 31.0], notes: ['Before approval', 'Days after approval', 'First quarter of sales', 'Plus $25.5M of restricted cash']}],
        note: 'Sources: Achaogen results releases for Q2, Q3 and Q4 2018. Excludes restricted cash, which rose to $25.5M at year-end after the bank collateralized part of its loan.'},
      takeaway: 'Cash fell by more than 80% in the year of approval.'},

    {type: 'decision', title: 'The board meeting', role: 'You are on Achaogen\'s board, December 2018',
      scenario: `Zemdri has been on sale for five months. Sales are about half a million dollars a quarter. You have about $31 million of usable cash and are spending far more than that each quarter. Your share price is near $1. Your lender has locked up $25 million. You have an approved drug with patents into the 2030s, an EU application under review, a formal dispute with the FDA over the bloodstream indication, and an oral antibiotic candidate. The strategic review you announced in November has not produced a buyer. What do you do?`,
      options: [
        {label: 'Raise more money and keep building the launch', outcome: `Launches take years, and your leading indicators (formularies, testing, infusion-center contracts) are improving. Maybe the bloodstream dispute succeeds, or Congress passes an antibiotic incentive. But at a dollar a share, any raise will be small and will massively dilute existing shareholders. You would be asking investors to fund a multi-year wait with no clear catalyst in sight.`},
        {label: 'Cut to the bone and focus on the outpatient niche while you look for a buyer', outcome: `This buys months, not years. Cutting the sales force makes sales even smaller, which lowers what a buyer will pay. But it keeps the drug available to patients and gives the strategic review more time. It is a holding pattern, not a plan.`},
        {label: 'Sell the company or the drug now, through bankruptcy if necessary, while there is still cash to run a sale', outcome: `Running an orderly sale while you still have money protects creditors and keeps the drug on the market in someone else's hands. But you know what the market is saying about antibiotics: buyers are few and prices are low. Shareholders will likely get little or nothing.`},
      ],
      reality: `Achaogen did all three, in sequence. It raised $13.6 million in February 2019, cut staff again later that month, and filed for Chapter 11 on April 15 to run a structured sale. The auction brought about $16 million for everything; Zemdri itself sold for $4.8 million upfront. Once the leading indicators and the lagging ones disagree for long enough, a small company with one product runs out of time before the argument is settled.`},

    {type: 'callout', variant: 'numbers', heading: 'Achaogen by the numbers', html: `<ul>
      <li><b>$124.4 million</b>: BARDA funding for plazomicin (2010–2018).</li>
      <li><b>$559.4 million</b>: accumulated deficit at the end of 2018, roughly what the company had spent beyond its revenue since 2004.</li>
      <li><b>$0.8 million</b>: Zemdri net sales in 2018.</li>
      <li><b>About 285 → 42</b>: employees before the July 2018 cuts (80 positions were 28%) and on April 1, 2019.</li>
      <li><b>$4.8 million</b>: Cipla's upfront price for Zemdri outside Greater China.</li>
      <li><b>About 10 months</b>: from FDA approval (June 25, 2018) to bankruptcy (April 15, 2019).</li>
    </ul>`},

    {type: 'chart', title: 'Money in, money out', intro: 'The scale of what went into plazomicin compared with what it earned and what it sold for.',
      chart: {kind: 'bar', title: 'Achaogen and plazomicin, key amounts', subtitle: 'US$ millions, nominal', unit: 'million', horizontal: true, colorByCategory: true, labelWidth: 290,
        categories: ['Accumulated deficit by end of 2018', 'BARDA funding for plazomicin', 'Stock offering, Dec 2016 (net)', 'IPO, March 2014 (gross)', 'Cipla upfront price, 2019', 'Zemdri net sales, 2018'],
        series: [{name: 'Amount', values: [559.4, 124.4, 94.5, 72.0, 4.8, 0.8]}],
        note: 'Sources: Achaogen 2018 Form 10-K, IPO prospectus (2014), 8-Ks of December 2016 and July 2019.'},
      takeaway: 'The drug\'s sale price was less than 1% of the losses the company ran up getting there.'},

    // ---------------- THE WIDER MARKET ----------------
    {type: 'story', kicker: 'Not just Achaogen', title: 'A whole market failing at once', tocTitle: 'The wider market failure', html: `
      <p>If Achaogen had been the only casualty, you could blame its choices: the trial strategy, the indication, the timing of the launch, a sales team hired for a market that didn't exist. But the same thing was happening to almost every small company that got an antibiotic approved in those years.</p>
      <p><strong>Melinta Therapeutics</strong> called itself the largest pure-play antibiotics company. It had four marketed antibiotics, including delafloxacin (Baxdela, approved June 2017) and meropenem-vaborbactam (Vabomere, approved August 2017). One review reports that Baxdela sold only about $11 million in its first 12 months. On December 27, 2019, Melinta filed for Chapter 11 under a deal in which its lenders, funds managed by Deerfield, would take over the company in exchange for $140 million of secured debt.</p>
      <p><strong>Tetraphase Pharmaceuticals</strong> won approval for eravacycline (Xerava) in August 2018. According to the same review, it had once reached a market value of about $1.8 billion. In July 2020, La Jolla Pharmaceutical bought the whole company for $43 million in cash plus up to $16 million more in [[contingent value right|contingent payments]] tied to future Xerava sales.</p>
      <p><strong>Aradigm</strong>, developing an inhaled form of the antibiotic ciprofloxacin for a chronic lung condition, filed for Chapter 11 in February 2019, before it had U.S. approval.</p>
      <p>Big companies had drawn their own conclusions earlier. A 2025 review counted 18 major pharmaceutical companies that had reportedly left antibiotic research since the 1990s, and noted that four that had stayed longest (GSK, Novartis, Sanofi and AstraZeneca) shifted away between 2016 and 2019. A 2020 analysis found that one-third of the companies behind antibiotics the FDA had approved in the previous decade had failed.</p>
      <p>This is what economists call a market failure. The product has high value, there is demand for it in the sense that society wants it to exist, and yet the market won't supply it because the value can't be captured through sales. Private companies were behaving rationally, and so were hospitals and doctors. The result was irrational: the world was running short of new antibiotics while resistance deaths climbed.</p>`},

    {type: 'table', title: 'The antibiotic bust, 2019–2020', columns: ['Company', 'Antibiotic(s)', 'What happened'],
      rows: [
        ['Achaogen', 'Zemdri (plazomicin), approved June 2018', 'Chapter 11, April 2019; Zemdri sold to Cipla for $4.8 million upfront'],
        ['Aradigm', 'Inhaled ciprofloxacin (not approved in the U.S.)', 'Chapter 11, February 2019, to sell its assets'],
        ['Melinta', 'Baxdela, Vabomere, Orbactiv, Minocin (IV)', 'Chapter 11, December 2019; lenders took ownership in exchange for $140 million of secured claims'],
        ['Tetraphase', 'Xerava (eravacycline), approved August 2018', 'Sold to La Jolla in July 2020 for $43 million cash plus up to $16 million in contingent payments'],
        ['Large companies', 'Various', 'GSK, Novartis, Sanofi and AstraZeneca shifted away from antibacterials between 2016 and 2019, per a 2025 review'],
      ],
      caption: 'Sources: company 8-K filings (Achaogen 2019, Aradigm February 2019, Melinta December 27, 2019, La Jolla July 29, 2020); Gargate et al., npj Antimicrobials and Resistance 2025; Clancy and Nguyen, Open Forum Infectious Diseases 2020.'},

    // ---------------- FIXES ----------------
    {type: 'story', kicker: 'What the field changed', title: 'Push, pull, and paying for readiness', tocTitle: 'Push and pull incentives', html: `
      <p>Policymakers divide the tools for fixing this market into two kinds. A [[push incentive]] pays for development before approval: grants, contracts, tax breaks. A [[pull incentive]] rewards a company after approval, for having produced something valuable.</p>
      <h3>Push: more money for the pipeline</h3>
      <p>Push funding was never the missing piece for Achaogen. BARDA paid for much of plazomicin's development. In 2016, BARDA co-founded [[CARB-X]], a nonprofit accelerator at Boston University that funds early antibacterial projects; by one 2026 evaluation it had committed more than $1 billion through 2028. That evaluation also found that none of the projects CARB-X funded from 2016 to 2019 had reached approval by February 2024, which is normal for early-stage science.</p>
      <p>In July 2020, more than 20 drug companies launched the [[AMR Action Fund]], an investment fund of about $1 billion for small antibiotic developers, aiming to bring two to four new antibiotics to patients by 2030. It is private push money with a public-health mission. The fund itself says it will also advocate for market reforms, because investing in companies that will later face Achaogen's market makes little sense unless the market changes.</p>
      <h3>Pull: pay for the drug to exist</h3>
      <p>The more radical fix is to stop paying for antibiotics per dose. Under a [[subscription model]], sometimes called the Netflix model, a health system pays a company a fixed annual fee for access to an antibiotic, however much or little it is used. The company earns the same whether doctors use 10 courses or 10,000. Stewardship stops being a threat to revenue.</p>
      <p>England went first. In July 2019 the government announced it would test the world's first subscription-style payment for antibiotics. In June 2022, NHS England signed contracts for two drugs, cefiderocol and ceftazidime-avibactam, committing to pay up to £10 million a year for each for an initial three years, with the option to extend. The value of each drug was assessed by the National Institute for Health and Care Excellence (NICE) using models of the health it would deliver; the assessors later wrote that the estimates were deeply uncertain and the benefits modest. England's 2024–2029 national action plan expanded the approach to more antimicrobials, with tiered annual payments reported to range from £5 million to £20 million.</p>
      <p>In the United States, the [[PASTEUR Act]] would create subscription contracts for critical-need antibiotics. It was introduced in 2020, 2021 and 2023, and again in the House in February 2026 and the Senate in June 2026. The 2026 House version would appropriate $6 billion and set annual payments of $75 million to $300 million per drug, adjusted for inflation. As of September 2026 it had not been enacted. Health economist Kevin Outterson has argued that a working antibiotic market needs pull incentives adding several billion dollars in global revenue for each highly innovative drug, and that the amounts in the 2021 PASTEUR bill and the UK pilot were within that range.</p>
      <p>Medicare made its own smaller change: from October 2019, the add-on payment for [[QIDP]] antibiotics rose to 75% of the drug's cost. Useful, but still a per-use payment, and still partial.</p>`},

    {type: 'custom', title: 'Volume pricing versus a subscription', kicker: 'Calculator',
      intro: 'Compare two ways of paying for one reserve antibiotic over ten years. The per-course price defaults to Zemdri\'s $5,445; everything else is your assumption. Then add an outbreak and see which model rewards heavy use.',
      html: `<div class="card">
        <div class="explorer" style="border:0;padding:0;background:none">
          <label><span>Courses used per year</span><input type="range" min="100" max="10000" step="100" value="1000" id="sbN"><span class="out" id="sbNo"></span></label>
          <label><span>Price per course</span><input type="range" min="945" max="20195" step="250" value="5445" id="sbP"><span class="out" id="sbPo"></span></label>
          <label><span>Subscription fee a year</span><input type="range" min="5" max="300" step="5" value="75" id="sbS"><span class="out" id="sbSo"></span></label>
        </div>
        <div style="margin:4px 0 10px"><label style="font:500 15px var(--sans);display:flex;gap:8px;align-items:center"><input type="checkbox" id="sbO"> Resistant outbreak in years 6–7 triples use</label></div>
        <div id="sbChart"></div>
        <div id="sbTxt" style="font:400 16.5px/1.6 var(--serif);margin-top:8px"></div>
      </div>`,
      init: (root, api) => {
        const n = root.querySelector('#sbN'), p = root.querySelector('#sbP'), sub = root.querySelector('#sbS'), ob = root.querySelector('#sbO');
        const no = root.querySelector('#sbNo'), po = root.querySelector('#sbPo'), so = root.querySelector('#sbSo'), ch = root.querySelector('#sbChart'), txt = root.querySelector('#sbTxt');
        function draw() {
          no.textContent = (+n.value).toLocaleString('en-US'); po.textContent = '$' + (+p.value).toLocaleString('en-US'); so.textContent = '$' + sub.value + 'M';
          const vol = [], sb = [];
          let tv = 0, ts = 0;
          for (let y = 1; y <= 10; y++) {
            const use = +n.value * (ob.checked && (y === 6 || y === 7) ? 3 : 1);
            const r = use * +p.value / 1e6; tv += r; ts += +sub.value;
            vol.push([y, +r.toFixed(2)]); sb.push([y, +sub.value]);
          }
          api.mountChart(ch, {kind: 'line', title: 'Company revenue per year', subtitle: 'US$ millions; illustrative', unit: '$M', xTicks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            series: [{name: 'Per-course pricing', points: vol, color: 2}, {name: 'Subscription', points: sb, color: 1}],
            note: 'The per-course line moves with use. The subscription line does not.'});
          txt.innerHTML = 'Over ten years, per-course pricing earns <b>$' + tv.toFixed(0) + ' million</b> and the subscription <b>$' + ts.toFixed(0) + ' million</b>. ' +
            'Under per-course pricing, every course a careful doctor avoids costs the company <b>$' + (+p.value).toLocaleString('en-US') + '</b>; under the subscription it costs nothing. ' +
            (ob.checked ? 'Notice who carries the outbreak: with per-course pricing the company\'s revenue jumps exactly when resistance is spreading, which gives it a reason to want more use. With a subscription, the payer has already bought readiness.' : 'Tick the outbreak box to see what a surge in resistant infections does to each model.');
        }
        [n, p, sub].forEach(x => x.addEventListener('input', draw)); ob.addEventListener('change', draw);
        draw();
      }},

    {type: 'callout', variant: 'whatif', heading: 'What if a subscription had existed in 2018?', html: `<p>Suppose the U.S. had passed something like the 2026 version of PASTEUR before Zemdri launched, with a contract of, say, $75 million a year, the bill's minimum annual payment. That alone is almost 100 times Zemdri's 2018 sales and more than Achaogen's stripped-down operating costs. The company could have kept its sales force small, focused on education and testing rather than volume, and paid for a larger trial in bloodstream infections.</p><p>But it isn't obvious that Zemdri would have qualified. Subscription schemes pay for drugs that meet a critical need, and the assessors would have asked a hard question: with ceftazidime-avibactam and meropenem-vaborbactam already available, and with plazomicin failing against many of the NDM-carrying bacteria that were the scariest, how much extra protection did it add? England's assessors struggled with the same question for their first two drugs. A pull incentive fixes the payment model. It does not remove the need to prove a drug's unique value, which was plazomicin's weakest point.</p>`},

    // ---------------- POST-MORTEM ----------------
    {type: 'story', kicker: 'The post-mortem', title: 'What actually went wrong', tocTitle: 'Post-mortem', html: `
      <p>Good post-mortems separate the bugs you could have fixed from the ones built into the platform. Achaogen had some of each.</p>
      <h3>What the science got right</h3>
      <p>Almost everything it set out to do. Plazomicin evaded the enzymes it was designed to evade. It did at least as well as a carbapenem in a large, blinded trial, with fewer late relapses. In a tiny trial in the sickest patients, it was associated with fewer deaths than colistin. It was approved on schedule. The limits, ribosome methylation and AAC(2′)-I, were disclosed from the start.</p>
      <h3>What the company could have done differently</h3>
      <ul>
        <li><strong>The evidence for value.</strong> The trial that could be run (EPIC) proved the drug was about as good as a cheap alternative in patients who didn't need it. The trial that would have proved its value (CARE) was too small to count. A larger, perhaps multi-company or government-backed trial in resistant infections might have earned a bloodstream label, though it is not clear such a trial was feasible.</li>
        <li><strong>Building a full commercial company.</strong> Achaogen staffed up to launch alone. In a market capped by stewardship, a large field force costs far more than it can earn. Selling or licensing the drug before launch to a company that already called on hospitals might have preserved more value, if a buyer could have been found.</li>
        <li><strong>Timing.</strong> The blood-level test, susceptibility testing and outpatient billing code arrived months after launch. Medicare's 75% add-on arrived after bankruptcy.</li>
      </ul>
      <h3>What no company could have fixed alone</h3>
      <ul>
        <li><strong>Per-use revenue for a product that should be used rarely.</strong></li>
        <li><strong>Bundled hospital payments</strong> that turn a better drug into a cost.</li>
        <li><strong>Crowding at the top</strong>: two other new anti-CRE drugs had launched in the three years before, splitting a small market.</li>
        <li><strong>Where the patients are.</strong> Most resistance deaths occur in countries where a U.S.-priced branded antibiotic is out of reach.</li>
      </ul>
      <p>The lesson the field drew was that science alone could not fix the antibiotic pipeline, and neither could more push money. When the reward for success is bankruptcy, investors stop funding the next Achaogen, however good its chemistry. This case is now cited in almost every policy argument for pull incentives, and the fixes that followed (the AMR Action Fund, England's subscriptions, the higher Medicare add-on, the repeated PASTEUR bills) all trace back to the wave of failures it led.</p>`},

    {type: 'callout', variant: 'lesson', heading: 'Who captures the value decides who should pay', html: `<p>The value of plazomicin was real, but it was spread out: across future patients, across countries, across years in which it might be needed during an outbreak. The costs were concentrated: on one company, on one hospital budget per patient. When value and cost land on different parties, a market will under-supply the product no matter how good it is. Compare Sovaldi, the hepatitis C cure: its value was concentrated in the patient being cured, so a very high price could be defended, and it sold billions. Plazomicin's value was diffuse, so no single buyer would pay for it.</p>`},

    // ---------------- QUIZ ----------------
    {type: 'quiz', title: 'Check your understanding', questions: [
      {q: 'Why can plazomicin kill bacteria that make common aminoglycoside-modifying enzymes, when gentamicin can\'t?',
        options: ['Added side chains cover the spots those enzymes chemically tag, while the core still binds the ribosome', 'It targets a completely different part of the bacterium than older aminoglycosides', 'It blocks the enzymes themselves, like a beta-lactamase inhibitor', 'It is given at a much higher dose that overwhelms the enzymes'],
        answer: 0, explain: 'Plazomicin binds the same A site on the 30S subunit as other aminoglycosides. The HABA chain at N1 and the hydroxyethyl group at 6′, plus sisomicin\'s missing 3′/4′ hydroxyls, leave the common enzymes nothing to tag.'},
      {q: 'Which resistance mechanism defeats plazomicin?',
        options: ['A 16S rRNA methyltransferase, which modifies the ribosome\'s binding site', 'KPC carbapenemase', 'The AAC(6′) enzyme family', 'Extended-spectrum beta-lactamases'],
        answer: 0, explain: 'Methyltransferases such as ArmA and RmtB change the ribosome itself, so no aminoglycoside can bind. They often travel with NDM carbapenemases. Plazomicin stays active against many KPC and ESBL producers, and the 6′ shield blocks AAC(6′).'},
      {q: 'EPIC was a non-inferiority trial. What did its success actually prove?',
        options: ['That plazomicin was not unacceptably worse than meropenem in complicated urinary infections', 'That plazomicin saves lives in CRE infections', 'That plazomicin is better than every other antibiotic for urinary infections', 'That plazomicin causes no kidney side effects'],
        answer: 0, explain: 'Non-inferiority answers "about as good as the standard, within a margin." EPIC also showed higher cure at test-of-cure, but it studied mostly patients who did not have resistant infections, so it could not show plazomicin\'s unique value.'},
      {q: 'Why did the FDA decline the bloodstream-infection indication?',
        options: ['CARE was too small (37 analyzed patients), open-label and had no formal statistical test, so it was not "substantial evidence"', 'Plazomicin caused more deaths than colistin in CARE', 'The FDA does not approve antibiotics for bloodstream infections', 'Achaogen did not submit bloodstream data'],
        answer: 0, explain: 'The numbers favored plazomicin (23.5% vs 50.0% death or serious complications), but the confidence interval included no difference, and the advisory committee voted 4–11 that the evidence was not substantial.'},
      {q: 'A hospital treats a Medicare patient with a simple kidney infection. How does using Zemdri instead of an older generic affect the hospital?',
        options: ['It loses money on the stay, because the fixed DRG payment doesn\'t rise to cover the drug, and the add-on only covers part of it', 'Medicare reimburses the full cost of the drug separately', 'The hospital makes more money, because new drugs are paid at a premium', 'It makes no difference, because drugs are billed to the patient'],
        answer: 0, explain: 'Inpatient stays are paid as one DRG bundle (about $4,500 in this case in fiscal 2019). A $5,445 course comes out of that amount; the 2018 NTAP covered at most half, and only in some cases.'},
      {q: 'Zemdri won 98% of its formulary reviews but sold only $0.8 million in 2018. What best explains the gap?',
        options: ['Hospitals stocked it with stewardship restrictions and reserved it for rare resistant infections, as the label advised', 'Doctors had never heard of it', 'It was too hard to manufacture, so it was often out of stock', 'The FDA required a special license to prescribe it'],
        answer: 0, explain: 'Formulary approval is access, not use. The label told doctors to reserve Zemdri for patients with limited or no alternatives, and stewardship programs enforced that. Cheaper drugs covered most infections, and two other new CRE drugs were already available.'},
      {q: 'What is the main advantage of a subscription model for reserve antibiotics?',
        options: ['It pays the company for having the drug available, so careful, rare use no longer reduces its revenue', 'It lets companies charge a much higher price per dose', 'It removes the need for clinical trials', 'It guarantees the drug will be used more often'],
        answer: 0, explain: 'Delinking revenue from volume aligns the company\'s incentives with stewardship. England\'s contracts (up to £10 million a year each from 2022) and the proposed PASTEUR Act work this way.'},
      {q: 'Which of these is a pull incentive rather than a push incentive?',
        options: ['An annual subscription payment for an approved antibiotic under the proposed PASTEUR Act', 'BARDA\'s development contract for plazomicin', 'A CARB-X grant for preclinical research', 'An investment from the AMR Action Fund in a company\'s phase 2 trial'],
        answer: 0, explain: 'Push money pays for development before approval (BARDA, CARB-X, the AMR Action Fund\'s investments). Pull money rewards a successful product after approval. Achaogen had plenty of push and no pull.'},
      {q: 'Which analogy best captures how society should pay for a reserve antibiotic?',
        options: ['A fire department: funded for being ready, not per fire', 'A consumer app: free to download, monetized per use', 'A luxury good: priced high to signal quality', 'A commodity: sold at the lowest price that clears the market'],
        answer: 0, explain: 'The value is mostly readiness and insurance, spread across people who may never need it. Paying per use, as with Zemdri, starves the product precisely when it is being used responsibly.'},
    ]},

    // ---------------- LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'Approval is not adoption', text: 'Zemdri passed every scientific and regulatory test and still failed. A product can be approved, stocked and endorsed by experts, and still not be used. Plan the launch around who will actually choose it, and why.', links: ['exubera', 'aduhelm']},
      {title: 'The trial you can run shapes the market you get', text: 'EPIC was the feasible path to approval; CARE was the path to proving value. Choosing an easy indication can win approval for a market where you have no advantage.', links: ['leqembi', 'keytruda']},
      {title: 'Who captures the value decides who will pay', text: 'A cure whose value lands on a single patient and payer can command a high price. A reserve antibiotic\'s value is spread across strangers and the future, so no buyer steps up. Look for that mismatch before you build.', links: ['sovaldi', 'zolgensma']},
      {title: 'The pricing metric is a product decision', text: 'Per-unit pricing punished careful use. Subscriptions and government procurement, as with pandemic vaccines, pay for availability instead. When the right behavior reduces volume, volume pricing will break the business.', links: ['comirnaty', 'sovaldi']},
      {title: 'Some markets need a public buyer', text: 'When the benefit is shared by everyone, a government or nonprofit has to act as the customer. Mission-driven funders have rescued drug markets before; antibiotics need them after approval too, not just before.', links: ['trikafta', 'comirnaty']},
      {title: 'Separate "the science failed" from "the model failed"', text: 'Torcetrapib failed because its biology was wrong. Zemdri failed although its biology was right. Post-mortems that confuse the two draw the wrong lessons.', links: ['torcetrapib', 'exubera']},
    ]},

    // ---------------- SOURCES ----------------
    {type: 'sources', title: 'Sources', items: [
      {text: 'Achaogen, Inc. Annual Report on Form 10-K for 2018 (filed April 1, 2019): history, BARDA ($124.4M), Ionis license, manufacturing, sales ($0.8M), net loss, accumulated deficit, going-concern warning, NTAP, employees.', url: 'https://www.sec.gov/Archives/edgar/data/1301501/000156459019010412/akao-10k_20181231.htm'},
      {text: 'Achaogen IPO prospectus (Form 424B4), March 2014: IPO terms, CARE design and planned size, Special Protocol Assessment, fast track, methyltransferase risk.', url: 'https://www.sec.gov/Archives/edgar/data/1301501/000119312514094586/d623715d424b4.htm'},
      {text: 'Achaogen 8-Ks: March 31, 2015 (development plan change); December 12, 2016 (EPIC and CARE topline results); December 2016 (stock offering).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001301501&type=8-K&dateb=&owner=include&count=100'},
      {text: 'Achaogen 8-K, May 2, 2018: FDA Antimicrobial Drugs Advisory Committee votes (15–0 cUTI; 4–11 bloodstream infection).', url: 'https://www.sec.gov/Archives/edgar/data/1301501/000119312518149223/d580290d8k.htm'},
      {text: 'Achaogen 8-K, June 26, 2018: FDA approval and complete response letter for bloodstream infection; EPIC results.', url: 'https://www.sec.gov/Archives/edgar/data/1301501/000119312518203136/d644854d8k.htm'},
      {text: 'FDA. Approval letter and prescribing information for ZEMDRI (plazomicin), NDA 210303, June 2018.', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2018/210303Orig1s000lbl.pdf'},
      {text: 'Achaogen 8-K, July 26, 2018 (restructuring; executive departures); results releases of August 6 and November 8, 2018, and February 14 and March 28, 2019 (sales, cash, formularies, outpatient share).', url: 'https://www.sec.gov/Archives/edgar/data/1301501/000119312518227954/d578192d8k.htm'},
      {text: 'Achaogen 8-Ks, March 6, April 8 and April 15, 2019: second restructuring, Nasdaq notices, board resignations, Chapter 11 filing.', url: 'https://www.sec.gov/Archives/edgar/data/1301501/000156459019011576/akao-8k_20190411.htm'},
      {text: 'Achaogen 8-Ks, June 6, June 26, July 23 and July 29, 2019: auction results, Cipla asset purchase terms ($4.65M, amended to $4.8M, royalties), closing and CEO departure.', url: 'https://www.sec.gov/Archives/edgar/data/1301501/000156459019023628/akao-8k_20190620.htm'},
      {text: 'Achaogen 2018 proxy statement (Hillan and Wise biographies).', url: 'https://www.sec.gov/Archives/edgar/data/1301501/000156459018008395/akao-def14a_20180605.htm'},
      {text: 'Wagenlehner FME et al. Once-daily plazomicin for complicated urinary tract infections (EPIC). N Engl J Med 2019;380:729–40.', url: 'https://pubmed.ncbi.nlm.nih.gov/30786187/'},
      {text: 'McKinnell JA et al. Plazomicin for infections caused by carbapenem-resistant Enterobacteriaceae (CARE). N Engl J Med 2019;380:791–3.', url: 'https://pubmed.ncbi.nlm.nih.gov/30786196/'},
      {text: 'Aggen JB et al. Synthesis and spectrum of the neoglycoside ACHN-490. Antimicrob Agents Chemother 2010;54:4636–42.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2976124/'},
      {text: 'Krause KM, Serio AW, Kane TR, Connolly LE. Aminoglycosides: an overview. Cold Spring Harb Perspect Med 2016;6:a027029.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4888811/'},
      {text: 'Golkar T et al. Structural basis for plazomicin antibiotic action and resistance. Commun Biol 2021;4:729.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8195987/'},
      {text: 'Abdul-Mutakabbir JC et al. Teaching an old class new tricks: plazomicin. Infect Dis Ther 2019;8:155–70 (CARE screening and limitations).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6522576/'},
      {text: 'Schatz A, Bugie E, Waksman SA. Streptomycin, a substance exhibiting antibiotic activity against gram-positive and gram-negative bacteria (1944); and Kingston W. Streptomycin, Schatz v. Waksman, and the balance of credit for discovery. J Hist Med Allied Sci 2004;59:441–62.', url: 'https://pubmed.ncbi.nlm.nih.gov/15270337/'},
      {text: 'Antimicrobial Resistance Collaborators. Global burden of bacterial antimicrobial resistance in 2019: a systematic analysis. Lancet 2022;399:629–55.', url: 'https://pubmed.ncbi.nlm.nih.gov/35065702/'},
      {text: 'GBD 2021 Antimicrobial Resistance Collaborators. Global burden of bacterial antimicrobial resistance 1990–2021, with forecasts to 2050. Lancet 2024;404:1199–226.', url: 'https://pubmed.ncbi.nlm.nih.gov/39299261/'},
      {text: 'CDC. Antibiotic Resistance Threats in the United States, 2019, including the carbapenem-resistant Enterobacteriaceae fact sheet.', url: 'https://www.cdc.gov/antimicrobial-resistance/data-research/threats/index.html'},
      {text: 'CMS. FY 2019 IPPS final rule (83 FR 41144), ZEMDRI NTAP section, Table 1A standardized amounts and Table 5 MS-DRG weights; and FY 2020 IPPS final rule (84 FR 42044), 75% add-on for QIDPs.', url: 'https://www.federalregister.gov/d/2018-16766'},
      {text: 'European Medicines Agency. Zemdri: withdrawal of the marketing authorisation application (June 16, 2020).', url: 'https://www.ema.europa.eu/en/medicines/human/withdrawn-applications/zemdri'},
      {text: 'FDA Drugs@FDA / openFDA records for Zemdri (NDA 210303, current holder and marketing status), Avycaz (approved February 25, 2015), Vabomere (August 29, 2017), Baxdela (June 19, 2017) and Xerava (August 27, 2018). Accessed September 2026.', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=BasicSearch.process'},
      {text: 'Clancy CJ, Nguyen MH. Buying time: the AMR Action Fund and the state of antibiotic development in the United States 2020. Open Forum Infect Dis 2020;7:ofaa464.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7652093/'},
      {text: 'Gargate N, Laws M, Rahman KM. Current economic and regulatory challenges in developing antibiotics for Gram-negative bacteria. npj Antimicrob Resist 2025;3:50.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12159177/'},
      {text: 'Melinta Therapeutics 8-K and press release, December 27, 2019; La Jolla Pharmaceutical 8-K, July 29, 2020 (Tetraphase acquisition); Aradigm 8-K, February 2019.', url: 'https://www.sec.gov/Archives/edgar/data/1461993/000119312519324277/d857906dex991.htm'},
      {text: 'PASTEUR Act texts: S. 1355 (118th Congress, 2023) and H.R. 7352 (119th Congress, 2026); bill status from GovTrack.', url: 'https://www.govtrack.us/congress/bills/119/hr7352'},
      {text: 'Anderson M et al. Designing eligibility and evaluation criteria for antibacterial pull incentives. Lancet Reg Health Eur 2026;70:101849 (UK contract amounts and tiers); and UK Department of Health and Social Care press releases of July 2019, June 2020 and May 2024.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13572082/'},
      {text: 'Woods B et al. Assessing the value of new antimicrobials: evaluations of cefiderocol and ceftazidime-avibactam to inform delinked payments by the NHS in England. Appl Health Econ Health Policy 2025;23:5–17.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12130071/'},
      {text: 'Outterson K. Estimating the appropriate size of global pull incentives for antibacterial medicines. Health Aff 2021;40:1758–65; Conti RM et al. An evaluation of CARB-X. Health Aff Sch 2026; CARB-X and AMR Action Fund websites.', url: 'https://pubmed.ncbi.nlm.nih.gov/34724432/'},
    ]},
  ],
});
