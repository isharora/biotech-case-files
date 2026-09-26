// Keytruda (pembrolizumab), Merck & Co. Case file. See GUIDE.md for the contract.
registerCase({
  id: 'keytruda', kind: 'success',
  brand: 'Keytruda', generic: 'pembrolizumab', company: 'Merck & Co. (MSD)',
  tagline: 'An antibody that was nearly sold off became the world\'s top-selling medicine. It does nothing to cancer cells directly: it releases a brake on the patient\'s own [[T cell|T cells]]. And Merck won the race by betting on a [[biomarker]].',
  chips: [['Disease', 'Many cancers (first: melanoma)'], ['Modality', '[[monoclonal antibody]]'], ['Target', '[[PD-1]]'], ['Approved', '2014 (US)']],
  readingTime: 40,
  stats: [
    {v: '$29.5B', l: 'Worldwide Keytruda sales in 2024, up 18% on 2023', n: 'Merck Q4 2024 results'},
    {v: '$31.7B', l: '2025 sales: 49% of everything Merck sold', n: 'Merck 2025 10-K'},
    {v: '1,235', l: 'Patients in KEYNOTE-001, a "phase 1" trial', n: 'Kang et al., Ann Oncol 2017'},
    {v: '31.9%', l: 'Alive at 5 years on first-line Keytruda in KEYNOTE-024, vs 16.3% with chemo', n: 'Reck et al., JCO 2021'},
    {v: '2028', l: 'Main US compound patent expires; Merck expects biosimilars from December 2028', n: 'Merck 2025 10-K'},
  ],
  emblem: `<svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="138" class="il-bg"/>
    <rect x="12" y="70" width="120" height="170" rx="56" class="il-3s il-line"/>
    <text x="72" y="115" text-anchor="middle" class="il-text">T cell</text>
    <rect x="178" y="60" width="110" height="180" rx="50" class="il-2s il-line"/>
    <text x="233" y="105" text-anchor="middle" class="il-text">tumor</text>
    <rect x="128" y="176" width="30" height="12" rx="5" class="il-2"/>
    <circle cx="162" cy="182" r="9" class="il-2"/>
    <rect x="176" y="176" width="30" height="12" rx="5" class="il-7"/>
    <circle cx="206" cy="182" r="9" class="il-7" transform="translate(12 0)"/>
    <path d="M160 88 V132 M160 132 L144 160 M160 132 L176 160" class="st-1" stroke-width="12" stroke-linecap="round" fill="none"/>
    <circle cx="144" cy="165" r="6" class="il-1"/>
  </svg>`,
  facts: {start: 1992, firstHuman: 2011, approval: 2014, end: null, peakSalesB: 31.7, pivotalN: 305,
    area: 'oncology', modality: 'antibody', target: 'PD-1'},
  themes: ['biomarkers', 'competition', 'regulatory', 'biology-surprise'],
  glossary: {
    'PD-1': 'Programd cell death protein 1: a receptor on activated T cells that acts as an off switch. When it is engaged, the T cell slows down or stops attacking. Keytruda blocks it.',
    'PD-L1': 'Programd death-ligand 1: the protein that plugs into PD-1 and switches T cells off. Healthy tissues use it to avoid friendly fire; many tumors make it to shield themselves.',
    'CTLA-4': 'Another brake on T cells, acting earlier in the immune response (in lymph nodes rather than inside the tumor). Blocked by ipilimumab (Yervoy).',
    'checkpoint inhibitor': 'A drug that blocks an immune checkpoint (a brake such as PD-1 or CTLA-4) so T cells can keep attacking cancer.',
    'immunotherapy': 'Treating disease by changing what the immune system does. In cancer, usually helping T cells find and kill tumor cells.',
    'immune-related adverse event': 'A side effect caused by a released immune system attacking healthy organs, such as the thyroid, lungs, colon or liver. Usually treated with steroids or hormone replacement.',
    'neoantigen': 'A new protein fragment made by a mutated gene in a tumor. It looks foreign to the immune system, so T cells can recognize it.',
    'MHC': 'Major histocompatibility complex: display racks on the cell surface that show fragments of the proteins inside the cell, so passing T cells can inspect them.',
    'T-cell exhaustion': 'A worn-out state T cells enter after long, unresolved fights. Exhausted T cells carry lots of PD-1 and attack weakly.',
    'tumor proportion score': 'The percentage of living tumor cells in a biopsy whose surface stains for PD-L1. Immune cells do not count. Keytruda\'s first-line lung approval required a score of 50% or more.',
    'TPS': 'Tumor proportion score: the percentage of viable tumor cells with PD-L1 staining on their surface.',
    'immunohistochemistry': 'A lab test that uses antibodies with a colored tag to show where a protein sits in a thin slice of tissue under the microscope.',
    '22C3': 'The antibody clone in Dako\'s PD-L1 IHC 22C3 pharmDx kit, the companion diagnostic developed alongside Keytruda.',
    'expansion cohort': 'An extra group of patients added to an early trial to test the drug more thoroughly in one population, dose or question.',
    'non-small-cell lung cancer': 'The most common type of lung cancer (about 85% of cases). Usually shortened to NSCLC.',
    'NSCLC': 'Non-small-cell lung cancer, the most common type of lung cancer.',
    'melanoma': 'A cancer of the pigment cells in skin. Advanced melanoma was notoriously resistant to chemotherapy.',
    'humanization': 'Re-engineering a mouse antibody so almost all of it matches human antibody sequence, keeping only the mouse parts that grip the target. It stops patients\' immune systems rejecting the drug.',
    'IgG4': 'One of four subclasses of the most common human antibody type. Its stem is poor at recruiting immune killers, useful when you want to block a receptor on a T cell without destroying the T cell.',
    'CDR': 'Complementarity-determining regions: six short loops at the tips of an antibody\'s arms that actually touch the target.',
    'mismatch repair': 'A cell\'s spell-checker for DNA copying errors. When it is broken (dMMR), tumors pile up thousands of mutations.',
    'MSI-H': 'Microsatellite instability-high: a DNA signature of broken mismatch repair. Such tumors carry many mutations and many neoantigens.',
    'dMMR': 'Deficient mismatch repair: the DNA spell-checker is broken, so the tumor accumulates many mutations.',
    'tissue-agnostic': 'An approval based on a tumor\'s molecular feature rather than the organ it started in.',
    'chemotherapy': 'Drugs that kill rapidly dividing cells. They hit tumors harder than most healthy tissue but cause hair loss, nausea, infections and fatigue.',
    'crossover': 'Letting patients in a trial\'s control arm switch to the new drug when their disease progresses. Ethical, but it blurs overall-survival comparisons.',
    'objective response': 'A tumor shrinking by at least 30% on scans (partial response) or disappearing (complete response).',
    'subcutaneous': 'Injected under the skin rather than into a vein. Faster and simpler than an intravenous infusion.',
    'hyaluronidase': 'An enzyme that temporarily loosens the gel between cells under the skin so a larger volume of drug can be injected there.',
    'regulatory T cell': 'A T cell whose job is to calm other immune cells down. Tumors often recruit them.',
    'macrophage': 'A large immune cell that eats debris and microbes. In tumors, many are reprogramd to suppress immune attack.',
    'interferon-gamma': 'A signal released by activated T cells. It rallies the immune system, but it also makes nearby cells, including tumor cells, put up more PD-L1.',
    'autoimmunity': 'The immune system attacking the body\'s own healthy tissue.',
    'corticosteroids': 'Powerful anti-inflammatory drugs (such as prednisone) used to calm immune side effects.',
    'Inflation Reduction Act': 'A 2022 US law that lets Medicare set prices for some high-spend drugs several years after approval. Merck expects Keytruda to be selected.',
    'adaptive design': 'A trial plan that can change in pre-specified ways (add cohorts, drop doses, grow) as data come in.',
  },
  sections: [
    // ---------------- 1. Cold open
    {type: 'story', kicker: 'Cold open', title: 'Copenhagen, October 2016', tocTitle: 'Cold open', html: `
      <p>On October 9, 2016, a German lung doctor named Martin Reck stood up at the European Society for Medical Oncology congress in Copenhagen with a slide deck that would reshape the treatment of the world's deadliest cancer.</p>
      <p>For decades, a person newly diagnosed with advanced [[non-small-cell lung cancer]] and no targetable mutation got the same thing: a platinum-based [[chemotherapy]] doublet. It shrank tumors for a while, made people sick, and bought months, not years. Lung cancer kills more people than any other cancer. As one expert commenting at the meeting noted, no therapy had ever before improved progression-free survival over that standard first-line chemo.</p>
      <p>Reck's trial, KEYNOTE-024, had enrolled 305 patients from 16 countries. Half got chemotherapy. Half got a single drug given as a 30-minute infusion every three weeks: pembrolizumab, sold as Keytruda. The drug does not poison cancer cells at all. It is an [[antibody]] that switches off an off switch on the patient's own immune cells.</p>
      <p>The result was not close. Patients on Keytruda went a median of 10.3 months before their cancer grew, against 6.0 months on chemo. Fewer of them died. Fewer had serious side effects. "This data will completely change the management of patients with advanced NSCLC," Reck told the press.</p>
      <p>But the most interesting thing about KEYNOTE-024 was not the drug. It was the fine print on who got in. Merck had only enrolled patients whose tumors lit up strongly for a protein called [[PD-L1]]: at least half of the tumor cells had to carry it. That is roughly a quarter of lung cancer patients. Merck had deliberately built a smaller market, on purpose, to make sure it won.</p>
      <p>Its rival, Bristol Myers Squibb, had made the opposite call. Its drug, Opdivo, works the same way and had reached lung cancer patients first. BMS ran its own first-line trial in almost everyone whose tumor showed any PD-L1 at all. That same year, BMS announced the trial had failed. Its shares fell, and a lead that had looked unassailable began to slip away. A former BMS scientist would later put it bluntly: "It was just one bad trial design."</p>
      <p>This case is about how that happened. It starts with a Japanese lab chasing a gene for cell death, runs through a Dutch antibody that nobody at three successive companies particularly wanted, and ends with a single medicine that brought in $31.7 billion in 2025, nearly half of all of Merck's revenue. Along the way it teaches the most important idea in modern drug development: <strong>who you test a drug in can matter as much as what the drug is.</strong></p>`},

    // ---------------- 2. Immunology from zero
    {type: 'story', kicker: 'The biology from zero', title: 'Your body already knows how to kill cancer', tocTitle: 'Immunology from zero', html: `
      <p>Start with a surprising fact: your immune system probably destroys cancer cells regularly. A tumor does not begin as a tumor. It begins as one cell whose DNA has been damaged enough to make it divide when it should not. Most such cells die, repair themselves, or get noticed and eliminated. Cancer is what happens when one of them gets away.</p>
      <h3>The inspectors: T cells</h3>
      <p>The immune cells that matter most for this story are [[T cell|T cells]]. Think of them as a vast force of inspectors, each carrying a unique badge reader called a T-cell receptor. Your body makes billions of them, each able to recognize a different molecular shape.</p>
      <p>What do they inspect? Every cell in your body continuously chops up samples of the proteins it is making and displays the fragments on its surface in little holders called [[MHC]] molecules. It is as if every cell in the body keeps a window display of what is going on inside. A T cell cruises past, reads the display, and if everything looks like "self", moves on.</p>
      <p>If a cell is infected by a virus, its window shows virus fragments. A T cell whose receptor happens to fit that fragment locks on, multiplies into an army of clones, and the "killer" versions punch holes in the infected cell and trigger it to self-destruct.</p>
      <h3>How T cells spot cancer</h3>
      <p>Cancer cells are the body's own cells, which makes them harder to spot. But cancers are built from [[mutation|mutations]], and mutated genes make slightly altered proteins. Chopped up and displayed, some of these altered fragments look foreign. Immunologists call them [[neoantigen|neoantigens]]. The more mutations a tumor has, the more neoantigens it tends to display, and the more chances a T cell has to notice it. That is one reason melanoma (skin cancer driven by sun damage) and lung cancer in smokers, which carry huge numbers of mutations, turned out to respond well to Keytruda.</p>
      <h3>Why tumors get away</h3>
      <p>If T cells can recognize tumors, why does anyone die of cancer? Because a tumor that grows big enough to be diagnosed has, by definition, survived years of immune pressure. It has evolved tricks. Some tumors stop displaying fragments at all. Some build a fortress of scar-like tissue that T cells cannot enter. Some recruit calming cells, such as [[regulatory T cell|regulatory T cells]] and reprogramd [[macrophage|macrophages]], to their side.</p>
      <p>And many do something sneakier: they flash a "friendly" signal that tells arriving T cells to stand down. They exploit a safety system that exists for a very good reason. The figure below shows what a tumor looks like from the immune system's point of view.</p>`},

    {type: 'figure', title: 'Inside a tumor: the battlefield', intro: 'A tumor is not just cancer cells. It is a neighborhood of blood vessels, immune cells and support cells. Hover or tap each labeled part.',
      svg: `<svg viewBox="0 0 900 430">
        <rect x="10" y="10" width="880" height="410" rx="18" class="il-paper"/>
        <g data-part="vessel">
          <path d="M20 60 C120 90 110 250 60 410" class="il-none st-7" stroke-width="44" stroke-linecap="round" opacity=".25"/>
          <path d="M20 60 C120 90 110 250 60 410" class="il-none st-7" stroke-width="2"/>
          <circle cx="78" cy="150" r="11" class="il-3s il-line"/><circle cx="86" cy="220" r="11" class="il-3s il-line"/>
          <text x="30" y="40" class="il-text">Blood vessel</text>
        </g>
        <g data-part="tcell">
          <circle cx="175" cy="120" r="20" class="il-3s il-line"/><circle cx="175" cy="120" r="8" class="il-3"/>
          <circle cx="160" cy="260" r="20" class="il-3s il-line"/><circle cx="160" cy="260" r="8" class="il-3"/>
          <text x="140" y="90" class="il-text">T cells arrive</text>
          <path d="M112 150 L150 125" class="st-3 il-none flow" stroke-width="2.5"/>
        </g>
        <g data-part="tumor">
          <circle cx="420" cy="170" r="42" class="il-2s il-line"/><circle cx="500" cy="130" r="40" class="il-2s il-line"/>
          <circle cx="505" cy="220" r="44" class="il-2s il-line"/><circle cx="420" cy="260" r="40" class="il-2s il-line"/>
          <circle cx="590" cy="175" r="42" class="il-2s il-line"/><circle cx="585" cy="265" r="38" class="il-2s il-line"/>
          <circle cx="500" cy="310" r="38" class="il-2s il-line"/>
          <text x="455" y="60" class="il-title">Tumor cells</text>
        </g>
        <g data-part="neoantigen">
          <path d="M378 170 l-12 -6 v12 z" class="il-4"/><path d="M462 128 l-12 -6 v12 z" class="il-4"/>
          <path d="M378 258 l-12 -6 v12 z" class="il-4"/>
          <text x="262" y="200" class="il-text-2">mutant fragments</text><text x="262" y="216" class="il-text-2">(neoantigens)</text>
        </g>
        <g data-part="pdl1">
          <circle cx="456" cy="195" r="6" class="il-7"/><circle cx="545" cy="150" r="6" class="il-7"/>
          <circle cx="548" cy="232" r="6" class="il-7"/><circle cx="626" cy="190" r="6" class="il-7"/>
          <circle cx="455" cy="280" r="6" class="il-7"/><circle cx="540" cy="318" r="6" class="il-7"/>
          <text x="645" y="150" class="il-text">PD-L1 (red dots)</text>
        </g>
        <g data-part="exhausted">
          <circle cx="345" cy="310" r="20" class="il-3s il-line il-dash"/><circle cx="345" cy="310" r="8" class="il-8"/>
          <circle cx="362" cy="297" r="4" class="il-2"/><circle cx="365" cy="318" r="4" class="il-2"/>
          <text x="232" y="355" class="il-text">exhausted T cell</text><text x="232" y="371" class="il-text-2">(covered in PD-1)</text>
        </g>
        <g data-part="treg">
          <circle cx="665" cy="300" r="20" class="il-5s il-line"/><circle cx="665" cy="300" r="8" class="il-5"/>
          <text x="690" y="305" class="il-text">regulatory T cell</text>
        </g>
        <g data-part="macrophage">
          <path d="M650 360 q30 -30 60 -8 q30 -10 40 18 q-10 28 -50 22 q-40 8 -50 -32z" class="il-8s il-line"/>
          <text x="760" y="378" class="il-text">macrophage</text>
        </g>
        <g data-part="cold">
          <rect x="700" y="40" width="170" height="80" rx="14" class="il-bg il-line il-dash"/>
          <text x="785" y="72" text-anchor="middle" class="il-text">no T cells here</text>
          <text x="785" y="92" text-anchor="middle" class="il-text-2">a "cold" region</text>
        </g>
      </svg>`,
      hotspots: {
        vessel: {title: 'Blood vessel', text: 'T cells travel in the blood and squeeze out of vessels into tissue. A tumor needs a blood supply to grow, which also gives the immune system a way in.'},
        tcell: {title: 'Patrolling T cells', text: '[[T cell|T cells]] leave the bloodstream and inspect every cell they meet. A T cell whose receptor fits a tumor fragment locks on and starts to kill.'},
        tumor: {title: 'Tumor cells', text: 'Cells that divide when they should not. They are the body\'s own cells, so they mostly look "self" to the immune system.'},
        neoantigen: {title: 'Neoantigens: the giveaway', text: 'Mutated genes make altered proteins. Fragments displayed on [[MHC]] can look foreign. More mutations usually means more [[neoantigen|neoantigens]], which is why heavily mutated tumors (melanoma, smokers\' lung cancer, [[MSI-H]] tumors) respond best to checkpoint drugs.'},
        pdl1: {title: 'PD-L1: the "friendly" flag', text: 'Many tumor cells raise [[PD-L1]] on their surface, often in response to the [[interferon-gamma]] that attacking T cells release. When PD-L1 touches [[PD-1]] on a T cell, the T cell stands down. This is the trick Keytruda defeats.'},
        exhausted: {title: 'Exhausted T cells', text: 'T cells that have been fighting without winning become worn out and covered in PD-1 ([[T-cell exhaustion]]). Blocking PD-1 can partly wake them up. They are the main reason the drug works at all: it needs T cells already in the tumor.'},
        treg: {title: 'Regulatory T cells', text: 'A T cell type whose job is to calm immune responses. Tumors recruit them. They are one reason blocking PD-1 alone does not work for everyone.'},
        macrophage: {title: 'Suppressive macrophages', text: 'Big immune cells that should eat debris and alert T cells, but in tumors are often reprogramd to suppress attack and help the tumor grow.'},
        cold: {title: '"Cold" regions', text: 'Some tumors, or parts of tumors, contain almost no T cells, often because the tumor keeps them out. Releasing a brake cannot help if no car is on the road. "Cold" tumors respond poorly to Keytruda; "hot" (T-cell-rich) tumors respond best.'},
      },
      caption: 'Schematic, not to scale. In a real tumor, cancer cells can be outnumbered by the non-cancer cells around them.'},

    // ---------------- 3. The key insight
    {type: 'story', kicker: 'The key insight', title: 'Brakes, and the two labs that found them', tocTitle: 'The science of brakes', html: `
      <p>An immune system powerful enough to kill infected cells is powerful enough to kill you. So evolution fitted it with safety features. Immunologists call them [[immune checkpoint|immune checkpoints]]: proteins on T cells that act like brakes, telling the cell to slow down, stop, or stand down. They keep responses proportionate and switch them off when the job is done. When checkpoints fail, the result is [[autoimmunity]]: the body attacking itself.</p>
      <h3>Tasuku Honjo and a gene for cell death, 1992</h3>
      <p>In 1992, Tasuku Honjo's lab at Kyoto University was hunting for genes switched on when immune cells die. Yasumasa Ishida, working in the lab, fished out a new gene that fit the bill and named it "programd death 1": [[PD-1]]. The name stuck, even though it turned out to be slightly wrong. PD-1 does not make cells die.</p>
      <p>It took Honjo's group most of the 1990s to find out what it does. In 1999 they showed that mice born without PD-1 slowly develop a lupus-like autoimmune disease, with inflamed joints and kidneys. That was the clue: PD-1 is a brake. Take it away and the immune system gradually turns on its own body.</p>
      <p>Around the same time, other groups found the protein that presses the brake. Lieping Chen's lab described it in 1999 under the name B7-H1; in 2000, Gordon Freeman, Honjo and colleagues showed it plugs into PD-1 and shuts T cells down, and named it [[PD-L1]]. Healthy tissues use PD-L1 to protect themselves from friendly fire during inflammation.</p>
      <p>Then in 2002, Honjo's team, with Nagahiro Minato, showed the dark side. Tumor cells engineered to make PD-L1 escaped T cells and grew aggressively in mice, and an antibody blocking the interaction reversed the effect. Tumors, they concluded, could hide behind the body's own brake, and blocking it "may provide a promising strategy" for cancer treatment.</p>
      <h3>James Allison and CTLA-4, 1996</h3>
      <p>In parallel, James Allison at the University of California, Berkeley was studying a different brake, [[CTLA-4]]. Others wanted to activate CTLA-4 to treat autoimmune disease. Allison had the opposite idea: block it, and see whether T cells would attack cancer. His lab ran the first experiment at the end of 1994. In 1996 they published it in <em>Science</em>: mice given an anti-CTLA-4 antibody rejected their tumors, and stayed immune when challenged again.</p>
      <p>The idea of "releasing the brakes" instead of "pressing the accelerator" was new, and industry was skeptical. Immunotherapy had a long history of disappointment. "A lot of the companies I approached said, 'Immunotherapy has never worked. It's never going to work,'" Allison later recalled. A small company, Medarex, used Allison's work to design a human antibody against CTLA-4. In 2010 its drug, ipilimumab, became the first treatment ever shown to extend survival in a randomized trial in advanced melanoma: median survival of 10.0 months versus 6.4 months. Bristol Myers Squibb, which had partnered with Medarex and then bought it for $2.4 billion in 2009, won FDA approval for ipilimumab as Yervoy in 2011. It was the first checkpoint drug.</p>
      <p>Yervoy proved the principle but had a cost: in that trial, 10 to 15% of patients had severe immune side effects, and some died of them. CTLA-4 acts early and broadly, in lymph nodes where T cells are first activated. PD-1 acts later and more locally, inside the inflamed tissue where a T cell meets its target. Blocking PD-1, the thinking went, might be both more effective and gentler. It was.</p>
      <p>On October 1, 2018, Allison and Honjo shared the Nobel Prize in Physiology or Medicine "for their discovery of cancer therapy by inhibition of negative immune regulation."</p>
      <blockquote class="pull">Melanoma was "the place where all good drugs go to die."<cite>Hussein Tawbi, MD Anderson, recalling the pre-checkpoint era (BioPharma Dive, 2024)</cite></blockquote>`},

    {type: 'callout', variant: 'misconception', heading: '"Keytruda attacks cancer cells"', html: `<p>It does not touch them. Pembrolizumab binds to [[PD-1]] on the patient's T cells. Everything that happens to the tumor after that is done by the immune system. This is why it can work across dozens of cancer types (the drug's target is the same in all of them), why it can take weeks to show an effect, why responses can last for years after treatment stops, and why its side effects look like autoimmune diseases rather than classic chemo toxicity.</p>`},

    // ---------------- 4. Mechanism
    {type: 'mechanism', title: 'How it works: releasing the brake', intro: 'Step through what happens where a T cell meets a tumor cell. Use Next, the dots, or your arrow keys.',
      svg: `<svg viewBox="0 0 760 440">
        <g data-part="tcell">
          <rect x="20" y="50" width="280" height="340" rx="120" class="il-3s il-line2"/>
          <text x="110" y="110" class="il-title" style="font-size:22px">T cell</text>
          <circle cx="120" cy="220" r="42" class="il-3" opacity=".35"/>
          <text x="120" y="225" text-anchor="middle" class="il-text-2" style="font-size:16px">nucleus</text>
        </g>
        <g data-part="tumor">
          <rect x="470" y="50" width="270" height="340" rx="110" class="il-2s il-line2"/>
          <text x="605" y="110" text-anchor="middle" class="il-title" style="font-size:22px">Tumor cell</text>
        </g>
        <g data-part="tcr">
          <rect x="296" y="142" width="44" height="18" rx="6" class="il-3"/>
          <path d="M338 142 h14 v6 h-8 v6 h8 v6 h-14 z" class="il-3"/>
          <text x="286" y="132" text-anchor="end" class="il-text" style="font-size:19px">T-cell receptor</text>
        </g>
        <g data-part="mhc">
          <rect x="392" y="142" width="82" height="18" rx="6" class="il-8"/>
          <circle cx="378" cy="151" r="10" class="il-4 il-line"/>
          <text x="488" y="146" class="il-text" style="font-size:19px">MHC showing a</text>
          <text x="488" y="168" class="il-text" style="font-size:19px">mutant fragment</text>
        </g>
        <g data-part="attack">
          <path d="M306 214 H464" class="st-4 il-none flow" stroke-width="4"/>
          <text x="385" y="204" text-anchor="middle" class="il-text" style="font-size:19px">kill signals</text>
        </g>
        <g data-part="granules">
          <circle cx="250" cy="236" r="7" class="il-4"/><circle cx="268" cy="250" r="7" class="il-4"/><circle cx="250" cy="262" r="7" class="il-4"/>
        </g>
        <g data-part="pd1">
          <rect x="296" y="282" width="52" height="16" rx="6" class="il-2"/>
          <circle cx="356" cy="290" r="12" class="il-2"/>
          <text x="286" y="272" text-anchor="end" class="il-text" style="font-size:19px">PD-1 (the brake)</text>
        </g>
        <g data-part="pdl1">
          <rect x="410" y="282" width="64" height="16" rx="6" class="il-7"/>
          <circle cx="402" cy="290" r="12" class="il-7"/>
          <text x="488" y="325" class="il-text" style="font-size:19px">PD-L1</text>
        </g>
        <g data-part="brake">
          <path d="M296 290 C260 300 250 330 230 340" class="st-7 il-none" stroke-width="3" stroke-dasharray="5 4"/>
          <rect x="110" y="325" width="120" height="34" rx="10" class="il-7"/>
          <text x="170" y="347" text-anchor="middle" class="il-white" style="font-size:18px">BRAKE ON</text>
        </g>
        <g data-part="drug">
          <path d="M372 36 V78 M372 78 L352 104 M372 78 L392 104" class="st-1" stroke-width="10" stroke-linecap="round" fill="none"/>
          <text x="360" y="50" text-anchor="end" class="il-text" style="font-size:19px">pembrolizumab</text>
        </g>
        <g data-part="kill">
          <rect x="470" y="50" width="270" height="340" rx="110" class="il-none st-7" stroke-width="3" stroke-dasharray="10 8"/>
          <path d="M560 200 l20 20 l-14 16 l22 22 M640 260 l-18 18 l16 12" class="st-7 il-none" stroke-width="3"/>
          <text x="605" y="370" text-anchor="middle" class="il-text" style="font-size:19px">tumor cell destroyed</text>
        </g>
      </svg>`,
      steps: [
        {title: 'Two cells meet', text: 'A killer [[T cell]] (left) has found its way into a tumor and bumped into a cancer cell (right). Whether the T cell attacks depends on what it reads on the cancer cell\'s surface, and on which brakes get pressed.', show: ['tcell', 'tumor']},
        {title: 'Recognition', text: 'The tumor cell displays fragments of its proteins on [[MHC]] molecules. One fragment comes from a mutated gene: a [[neoantigen]]. This T cell\'s receptor happens to fit it, like a key in a lock. The T cell is now activated.', show: ['tcell', 'tumor', 'tcr', 'mhc'], focus: ['tcr', 'mhc']},
        {title: 'The attack starts', text: 'The activated T cell releases toxic granules and death signals at the point of contact. It also releases [[interferon-gamma]], an alarm signal that rallies other immune cells.', show: ['tcell', 'tumor', 'tcr', 'mhc', 'attack', 'granules'], pulse: ['attack'], move: {granules: 'translate(235px, -10px)'}},
        {title: 'The tumor presses the brake', text: 'Activated T cells raise [[PD-1]] on their surface. Many tumors respond to the interferon alarm by raising [[PD-L1]]. When PD-L1 plugs into PD-1, the T cell receives an off signal that overrides the "attack" signal from its receptor.', show: ['tcell', 'tumor', 'tcr', 'mhc', 'attack', 'pd1', 'pdl1'], focus: ['pd1', 'pdl1'], move: {pdl1: 'translate(-20px, 0px)'}},
        {title: 'Brake on: the T cell stands down', text: 'The T cell stops killing and stops multiplying. Over weeks of this it becomes "exhausted". The tumor survives, surrounded by T cells that can see it but will not act. Healthy tissues use exactly this trick to protect themselves during inflammation; the tumor has hijacked it.', show: ['tcell', 'tumor', 'tcr', 'mhc', 'pd1', 'pdl1', 'brake'], dim: ['attack'], move: {pdl1: 'translate(-20px, 0px)'}, focus: ['brake']},
        {title: 'Pembrolizumab arrives', text: 'Keytruda is a [[monoclonal antibody]] that grips PD-1 very tightly, sitting exactly where PD-L1 would dock. It is given by intravenous infusion and stays in the blood for weeks, so one dose covers three weeks (or six at a double dose).', show: ['tcell', 'tumor', 'tcr', 'mhc', 'pd1', 'pdl1', 'brake', 'drug'], dim: ['attack'], move: {drug: 'translate(-16px, 186px)', pdl1: 'translate(22px, 0px)'}, focus: ['drug']},
        {title: 'Brake released', text: 'With PD-1 occupied, PD-L1 has nothing to plug into. The off signal stops, the attack signal wins, and the T cell resumes killing. It also multiplies, so the attack can spread through the tumor. The drug did not create any new immunity. It unmasked immunity that was already there, which is why it only helps patients whose immune system had already found the tumor.', show: ['tcell', 'tumor', 'tcr', 'mhc', 'pd1', 'pdl1', 'drug', 'attack', 'granules', 'kill'], move: {drug: 'translate(-16px, 186px)', pdl1: 'translate(22px, 0px)', granules: 'translate(235px, -10px)'}, pulse: ['attack'], focus: ['kill']},
      ]},

    {type: 'callout', variant: 'product', heading: 'Like removing a rate limiter from a production system', html: `<p>Checkpoints behave like the circuit breakers and rate limiters you put on a service: they stop a healthy system from overwhelming itself. A tumor that expresses PD-L1 is like a bad actor who has learned to trip your circuit breaker on purpose, so your defenses shut themselves off. Keytruda removes the breaker's ability to trip.</p><p><strong>Where the analogy breaks:</strong> you cannot remove the limiter for just one bad actor. PD-1 is blocked on every T cell in the body, for months. The same released immune system can turn on the thyroid, the lungs or the colon. And unlike a config change, there is no instant rollback: the antibody stays in the blood for weeks, and some damage (a destroyed thyroid) is permanent.</p>`},

    // ---------------- 5. Timeline
    {type: 'timeline', title: 'Timeline', intro: 'From a Kyoto gene hunt to the best-selling medicine in the world. Filter by kind, or click a pin.', events: [
      {year: 1992, title: 'Honjo\'s lab discovers PD-1', kind: 'science', text: 'Yasumasa Ishida and Tasuku Honjo publish a new gene switched on in dying immune cells, "programd death 1".'},
      {year: 1996, title: 'Blocking CTLA-4 cures tumors in mice', kind: 'science', text: 'Dana Leach, Matthew Krummel and James Allison publish in <em>Science</em>: releasing a T-cell brake makes mice reject tumors.'},
      {year: 1999, title: 'PD-1 revealed as a brake', kind: 'science', text: 'Mice lacking PD-1 develop lupus-like autoimmunity. Its partner, PD-L1, is described in 1999–2000.'},
      {year: 2002, title: 'Tumors hide behind PD-L1', kind: 'science', text: 'Iwai, Honjo, Minato: PD-L1 helps tumors escape T cells in mice, and blocking it helps.'},
      {year: 2007, title: 'Organon humanizes its anti-PD-1 antibody', kind: 'business', text: 'Organon works with the UK charity LifeArc (then MRC Technology) to humanize a mouse antibody. The same year Schering-Plough buys Organon.'},
      {year: 2009, title: 'Merck buys Schering-Plough for $41 billion', kind: 'business', text: 'The anti-PD-1 antibody comes along almost unnoticed. BMS buys Medarex, owner of the rival antibody that becomes Opdivo, for $2.4 billion.'},
      {year: 2009, date: '2009–2010', title: 'Program deprioritized, reportedly marked for sale', kind: 'setback', text: 'According to press reports, Merck placed the antibody on its list of assets to license out.'},
      {year: 2010, title: 'Ipilimumab extends survival in melanoma', kind: 'clinical', text: 'The first randomized survival win for a checkpoint drug (Hodi et al., NEJM).'},
      {year: 2011, date: 'Jan 2011', title: 'KEYNOTE-001 begins', kind: 'clinical', text: 'A first-in-human dose-finding study that would grow to 1,235 patients.'},
      {year: 2011, title: 'FDA approves Yervoy (ipilimumab)', kind: 'regulatory', text: 'The first checkpoint inhibitor on the market.'},
      {year: 2013, date: 'Apr 2013', title: 'Breakthrough therapy designation', kind: 'regulatory', text: 'Merck announces FDA [[breakthrough therapy designation]] for MK-3475 in advanced melanoma.'},
      {year: 2013, date: 'Jun 2013', title: '38% response rate in melanoma', kind: 'clinical', text: 'Hamid et al. report the first 135 melanoma patients in NEJM, under the drug\'s earlier name, lambrolizumab.'},
      {year: 2014, date: 'Sep 4, 2014', title: 'Accelerated approval: the first anti-PD-1 drug', kind: 'regulatory', text: 'For advanced melanoma after ipilimumab, based on 89 patients from KEYNOTE-001.'},
      {year: 2014, date: 'Dec 22, 2014', title: 'Opdivo approved, 109 days later', kind: 'regulatory', text: 'BMS\'s nivolumab gets accelerated approval in the same melanoma setting.'},
      {year: 2015, title: 'Lung cancer approval with a companion test', kind: 'regulatory', text: 'Accelerated approval in previously treated PD-L1-positive NSCLC, alongside the 22C3 PD-L1 test.'},
      {year: 2016, title: 'CheckMate-026 fails', kind: 'setback', text: 'BMS\'s broad first-line lung trial of Opdivo misses its primary endpoint. For Merck\'s rival, a major setback.'},
      {year: 2016, date: 'Oct 24, 2016', title: 'First-line lung approval (TPS ≥50%)', kind: 'regulatory', text: 'KEYNOTE-024 makes Keytruda the first checkpoint inhibitor approved for first-line lung cancer.'},
      {year: 2017, date: 'Jan 2017', title: 'Patent war settled', kind: 'business', text: 'Merck pays BMS and Ono $625 million plus royalties on Keytruda sales through 2026.'},
      {year: 2017, date: 'May 23, 2017', title: 'First tissue-agnostic approval', kind: 'regulatory', text: 'For any MSI-H or dMMR solid tumor, regardless of where it started.'},
      {year: 2018, title: 'KEYNOTE-189: chemo plus Keytruda', kind: 'clinical', text: 'Adding pembrolizumab to chemo cuts the risk of death by about half in first-line lung cancer, across PD-L1 levels.'},
      {year: 2018, date: 'Oct 1, 2018', title: 'Nobel Prize for Allison and Honjo', kind: 'people'},
      {year: 2019, date: 'May 2019', title: 'LifeArc sells royalty slice for $1.3 billion', kind: 'business', text: 'The charity that humanized the antibody monetizes part of its Keytruda royalty.'},
      {year: 2024, date: 'Jun 2024', title: '40th FDA approval', kind: 'regulatory', text: 'With chemotherapy in endometrial cancer.'},
      {year: 2025, date: 'Sep 2025', title: 'Keytruda Qlex approved', kind: 'regulatory', text: 'A subcutaneous version given in one or two minutes, protected by patents running to 2043 in the US.'},
      {year: 2028, date: 'Dec 2028 (expected)', title: 'US compound patent expires', kind: 'business', text: 'Merck expects biosimilar competition to begin.'},
    ]},

    // ---------------- 6. Building the drug
    {type: 'story', kicker: 'Building the drug', title: 'The antibody nobody wanted', tocTitle: 'Organon to Merck', html: `
      <p>Keytruda's corporate family tree is a lesson in how drug discovery really works. It was not invented at Merck.</p>
      <h3>Organon: a chemicals company's drug lab</h3>
      <p>The antibody came from Organon, the pharmaceutical arm of the Dutch chemicals group Akzo Nobel. A small team split between Organon's new research site in Cambridge, Massachusetts and its home base in Oss, in the Netherlands, set out to make an antibody against human PD-1. The patents name Gregory Carven, Hans van Eenennaam and John Dulos as inventors. Andrea van Elsas, who ran Organon's tumor immunology group, is often credited with keeping the program alive through the upheavals that followed.</p>
      <p>The process is standard for antibodies. You immunize mice with the human protein, harvest the antibody-making cells, and screen thousands of candidates for ones that grip PD-1 tightly and actually block PD-L1 from docking. Then there is a problem: a mouse antibody injected into a person looks foreign, and the patient's immune system attacks it. So the winning mouse antibody has to be [[humanization|humanized]].</p>
      <p>In 2007, Organon hired LifeArc, a British medical research charity then called MRC Technology, to do that. LifeArc funded the work itself in exchange for a share of any future sales. The humanized version that came out, one of several variants in Organon's patent filings, was called <strong>h409A11</strong>. It entered the clinic with exactly that sequence and is the molecule now sold as Keytruda. That royalty would later make LifeArc one of the richest medical charities in Britain.</p>
      <p>The team also made a design choice that matters: they built the antibody on an [[IgG4]] frame. Antibody "stems" come in different flavors. Some are excellent at summoning immune killers to destroy whatever the antibody is stuck to, which is exactly what you want when the target sits on a cancer cell. Here the target sits on the T cells you are trying to help. An IgG4 stem blocks PD-1 while largely leaving the T cell alone.</p>
      <h3>Three owners in three years</h3>
      <p>In 2007, the same year as the humanization deal, the American drug maker Schering-Plough bought Organon's human and animal health business. Schering-Plough was interested in Organon's brain and women's health medicines, not an obscure cancer antibody. Two years later, in 2009, Merck agreed to buy Schering-Plough for $41 billion. The antibody, by then coded SCH 900475, came along with the rest of the furniture and was renamed MK-3475.</p>
      <p>Mergers are brutal on research programs. Portfolios are merged, sites are closed, projects are ranked, and anything near the bottom is cut or sold. By the time the dust settled, according to press reports, the PD-1 antibody was not a priority and had even been marked for sale. Tumor immunology had a reputation as a graveyard.</p>
      <h3>The revival</h3>
      <p>What changed minds? Accounts emphasize different moments, but they point in the same direction. BMS was pushing ipilimumab through late-stage trials, and in 2010 it showed a survival benefit in melanoma. BMS also had its own anti-PD-1 antibody, nivolumab, from Medarex, already in patients. Suddenly the brake-release idea looked real, and Merck was sitting on an asset in the hottest new class in oncology. "What really re-energized Merck to develop this was a growing awareness that PD1 looked as though it was going to be important," Roy Baynes, later Merck's chief medical officer, told BioPharma Dive.</p>
      <p>Merck's phase 1 trial began in January 2011. BMS was years ahead. What Merck did next is the reason it caught up.</p>`},

    {type: 'figure', title: 'From mouse antibody to pembrolizumab', intro: 'Humanization keeps only the tiny parts that grip PD-1 and replaces the rest with human sequence. Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 400">
        <text x="200" y="36" text-anchor="middle" class="il-title">Mouse antibody</text>
        <text x="200" y="56" text-anchor="middle" class="il-text-2">from immunized mice</text>
        <g data-part="mouse">
          <path d="M200 220 L130 110 M200 220 L270 110" class="st-2 il-none" stroke-width="26" stroke-linecap="round"/>
          <path d="M200 220 V340" class="st-2" stroke-width="26" stroke-linecap="round"/>
          <text x="80" y="300" class="il-text">all mouse</text><text x="80" y="318" class="il-text">sequence</text>
        </g>
        <g><circle cx="130" cy="110" r="14" class="il-4 il-line"/><circle cx="270" cy="110" r="14" class="il-4 il-line"/></g>
        <g data-part="process">
          <path d="M350 210 H540" class="st-ink il-none" stroke-width="3"/><path d="M540 200 L556 210 L540 220 z" class="il-8"/>
          <text x="452" y="186" text-anchor="middle" class="il-text">humanization</text>
          <text x="452" y="240" text-anchor="middle" class="il-text-2">LifeArc, for Organon, 2007</text>
        </g>
        <text x="700" y="36" text-anchor="middle" class="il-title">h409A11 = pembrolizumab</text>
        <text x="700" y="56" text-anchor="middle" class="il-text-2">mostly human sequence (schematic)</text>
        <g data-part="frame">
          <path d="M700 220 L630 110 M700 220 L770 110" class="st-1 il-none" stroke-width="26" stroke-linecap="round"/>
          <text x="785" y="175" class="il-text">human</text><text x="785" y="193" class="il-text">framework</text>
        </g>
        <g data-part="cdr">
          <circle cx="630" cy="110" r="14" class="il-2"/><circle cx="770" cy="110" r="14" class="il-2"/>
          <path d="M630 110 l-8 -22 M630 110 l10 -22 M770 110 l-8 -22 M770 110 l10 -22" class="st-2 il-none" stroke-width="4" stroke-linecap="round"/>
          <text x="560" y="84" class="il-text">mouse CDR loops</text>
        </g>
        <g data-part="fc">
          <path d="M700 220 V340" class="st-1" stroke-width="26" stroke-linecap="round" style="opacity:.6"/>
          <text x="722" y="300" class="il-text">IgG4 stem</text>
        </g>
        <g data-part="target">
          <rect x="600" y="360" width="200" height="30" rx="8" class="il-3s il-line"/>
          <text x="700" y="380" text-anchor="middle" class="il-text">made in hamster cells (CHO)</text>
        </g>
      </svg>`,
      hotspots: {
        mouse: {title: 'The mouse original', text: 'Mice immunized with human PD-1 make antibodies against it. The best one gripped PD-1 tightly and blocked PD-L1. But in people, an all-mouse antibody provokes an immune reaction that neutralizes it and can cause allergic reactions.'},
        process: {title: 'Humanization', text: 'Engineers graft the mouse binding loops onto a human antibody framework, then test variants to recover full strength. LifeArc funded the work in return for a royalty; in 2019 it sold part of that royalty for about $1.3 billion.'},
        frame: {title: 'Human framework', text: 'Most of the molecule is now human sequence, so the patient\'s immune system largely ignores it. That lets it circulate for weeks: Keytruda is dosed every 3 or 6 weeks.'},
        cdr: {title: 'The binding loops (CDRs)', text: 'Six short loops at the arm tips, the [[CDR|CDRs]], do the actual gripping. They are the only part kept from the mouse. They sit on PD-1 exactly where PD-L1 would dock.'},
        fc: {title: 'IgG4 stem', text: 'The stem decides what the immune system does to whatever the antibody is holding. An [[IgG4]] stem is a poor recruiter of killer cells, so the drug blocks PD-1 without marking the patient\'s own T cells for destruction.'},
        target: {title: 'Manufacturing', text: 'Like most antibodies, pembrolizumab is a [[biologic]] made by engineered Chinese hamster ovary (CHO) cells in large steel bioreactors, then purified. Per the label, it is a humanized IgG4 kappa antibody weighing about 149 kDa, more than 800 times heavier than an aspirin molecule.'},
      },
      caption: 'Schematic. Real antibodies have two heavy and two light chains, and the binding loops are tiny relative to the whole molecule.'},

    {type: 'decision', title: 'Decision: keep it or sell it?', role: 'You run the merged oncology portfolio, 2010', scenario: `You have just absorbed Schering-Plough. You have more projects than money, and your job is to rank them. Near the bottom sits MK-3475, an anti-PD-1 antibody from Organon. Tumor immunology has failed for decades. The first checkpoint drug, BMS's ipilimumab, is only now showing a survival benefit, with severe immune side effects in a meaningful share of patients. BMS also has its own anti-PD-1 antibody that is already in the clinic, years ahead of yours. What do you do?`,
      options: [
        {label: 'License it out. Take upfront cash and royalties; let a specialist take the risk.', outcome: 'A defensible call, and the one reportedly on the table. Nobody knows what the upfront payment would have been, but for an early asset in an unfashionable field it would probably have been modest. You would have kept a royalty worth a few percent of sales. Given that Keytruda sold $31.7 billion in 2025 alone, that is one of the most expensive "sensible" decisions in pharma history. (LifeArc, which only did the humanization, sold part of its royalty for about $1.3 billion.)'},
        {label: 'Keep it, but run a small, cheap phase 1 and wait for BMS\'s data before spending more.', outcome: 'Low risk, and the natural "fast follower" play. The trouble is that you would stay a follower: BMS\'s head start would grow, and the market for a second PD-1 drug in the same patients would be much smaller. Merck did start small, but the program changed character once the early data came in.'},
        {label: 'Keep it and plan to move fast: design the first trial so it can grow into a registration package if the drug works.', outcome: 'This is roughly what happened, though not all at once. It costs more up front and carries the risk of spending heavily on a drug in a field with a long record of failure. But if the effect is large, you can reach the market years earlier than a conventional program.'},
      ],
      reality: 'Press reports say the antibody was marked for sale after the merger. It was not sold. Merck started KEYNOTE-001 in January 2011 as a modest dose-finding study, then kept adding cohorts as responses appeared. After Roger Perlmutter took over Merck research in 2013, the company went all in, and the drug reached the market three and a half months ahead of Opdivo.'},

    // ---------------- 7. KEYNOTE-001
    {type: 'story', kicker: 'The trials, part 1', title: 'KEYNOTE-001: the phase 1 that ate the development plan', tocTitle: 'KEYNOTE-001', html: `
      <p>Textbook drug development is a relay race. [[phase 1|Phase 1]]: a few dozen patients to find a safe dose. [[phase 2|Phase 2]]: a few hundred to see whether it works. [[phase 3|Phase 3]]: hundreds to thousands in a randomized comparison. Each leg waits for the previous one to finish, and each handoff involves a new protocol, new ethics approvals, new sites. From first test in humans to approval typically takes a decade or more.</p>
      <p>KEYNOTE-001 did something different. It began in January 2011 as an ordinary first-in-human study: a "3+3" dose escalation in which small groups of patients with any advanced solid tumor got rising doses until side effects became unacceptable. They never did. There was no maximum tolerated dose; the highest tested, 10 mg per kilogram every two weeks, was well tolerated.</p>
      <p>And patients responded. So instead of closing the study and writing a phase 2 protocol, Merck amended it. Then amended it again. Nine times in all. Each amendment added an [[expansion cohort]]: 135 melanoma patients here, a randomized comparison of two doses in 173 patients whose melanoma had failed ipilimumab there, then several hundred lung cancer patients split into a "training" group and a "validation" group to work out which patients benefited. By the time enrollment closed in July 2014, the "phase 1" study had treated 1,235 people, more than many phase 3 trials.</p>
      <h3>Why that design was unusual</h3>
      <p>Inside one protocol, KEYNOTE-001 ran what amounted to several phase 2 studies in parallel: in two diseases, with six randomized dose-and-schedule comparisons, each with a pre-specified statistical plan. That mattered. Regulators are rightly suspicious of fishing expeditions in which a company tests everything and reports what looks good. Pre-specifying each cohort's question and analysis kept the false-positive rate controlled.</p>
      <p>It also let Merck build its [[biomarker]] test and its drug at the same time. The lung cohorts were deliberately designed so that one set of patients (182) could be used to choose a PD-L1 cut-off, and a separate set (313) could check whether that cut-off really predicted response. That training-and-validation split, familiar to anyone who has built a machine learning model, is what later gave Merck the confidence to bet its first-line lung trial on a single number: 50%.</p>
      <p>The authors of a 2017 review of the trial, led by Merck's S. Peter Kang, estimated that the time from the investigational new drug filing to first approval was about four years, less than half what the traditional sequence would likely have taken. They were also frank about the costs: huge protocol complexity, sites struggling to keep up with amendments, and the statistical headaches of testing many hypotheses at once.</p>
      <p>This only works under particular conditions. The drug must be safe enough that you are not escalating into danger. The effect must be big enough to see in single-arm cohorts: tumors in advanced melanoma almost never shrink on their own, so a 38% [[response rate]] is a signal, not noise. And the regulator must be willing to engage. Merck met frequently with the FDA, which had just created the [[breakthrough therapy designation]] in 2012 for exactly this kind of drug.</p>`},

    {type: 'custom', title: 'Two roads to approval', intro: 'Compare a textbook sequential program with what KEYNOTE-001 actually did. Hover over any block for details; switch views with the buttons.',
      html: `<div class="card"><div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px"><button class="btn primary" data-v="time">Timeline view</button><button class="btn" data-v="tree">Inside KEYNOTE-001</button></div><div class="k1stage"></div><div class="caption k1cap"></div></div>`,
      init: (root, api) => {
        const stage = root.querySelector('.k1stage'), cap = root.querySelector('.k1cap');
        const tip = (h) => api.esc(h);
        const time = () => {
          const X = y => 90 + (y - 2011) * 70;
          let s = '<svg viewBox="0 0 900 350" style="width:100%;height:auto">';
          for (let y = 2011; y <= 2022; y++) s += `<line x1="${X(y)}" x2="${X(y)}" y1="40" y2="318" class="il-line" opacity=".25"/><text x="${X(y)}" y="338" text-anchor="middle" class="il-small">${y}</text>`;
          s += '<text x="10" y="28" class="il-title">Textbook sequence (illustrative)</text>';
          const trad = [['Phase 1', 2011, 2012.6, 'il-8s', 'Dose finding in a few dozen patients. Typically 1 to 2 years.'], ['Phase 2', 2012.6, 2015, 'il-4s', 'A few hundred patients to estimate efficacy. Typically about 2 years, plus time to write and start the next protocol.'], ['Phase 3', 2015, 2019, 'il-3s', 'Randomized comparison with standard care. Typically 3 to 4 years.'], ['Review', 2019, 2020, 'il-6s', 'FDA review, 6 to 10 months plus preparation.']];
          trad.forEach(([n, a, b, c, t]) => s += `<g data-tip="${tip('<b>' + n + '</b><br>' + t)}"><rect x="${X(a)}" y="42" width="${X(b) - X(a) - 4}" height="40" rx="8" class="${c} il-line"/><text x="${X(a) + 10}" y="67" class="il-text">${n}</text></g>`);
          s += `<text x="${X(2020) + 8}" y="67" class="il-text-2">approval ≈ 2020</text>`;
          s += '<text x="10" y="122" class="il-title">KEYNOTE-001 (actual)</text>';
          const k1 = [['Dose escalation (cohort A)', 2011.0, 2012.0, 150, 'il-8s', '3+3 dose escalation from January 2011. No maximum tolerated dose was found; the highest dose tested was 10 mg/kg every 2 weeks.'], ['Melanoma expansion cohorts', 2011.8, 2014.5, 190, 'il-1s', 'Cohort B1: 135 melanoma patients (NEJM, 2013). Cohort B2: 173 ipilimumab-refractory patients randomized between two doses (Lancet, 2014). These supported the September 2014 approval.'], ['Lung cohorts + PD-L1 training and validation', 2012.4, 2014.55, 230, 'il-2s', 'Several hundred NSCLC patients. 182 in a training set chose the PD-L1 cut-off (50%); 313 in a validation set confirmed it (Garon et al., NEJM 2015). UCLA\'s lung patients enrolled May 2012 to July 2014.']];
          k1.forEach(([n, a, b, y, c, t]) => s += `<g data-tip="${tip('<b>' + n + '</b><br>' + t)}"><rect x="${X(a)}" y="${y - 15}" width="${X(b) - X(a)}" height="26" rx="8" class="${c} il-line"/><text x="${X(b) + 12}" y="${y + 3}" class="il-text">${n}</text></g>`);
          const sx = X(2014.68);
          s += `<g data-tip="${tip('<b>September 4, 2014</b><br>Accelerated approval in advanced melanoma, based on 89 patients from KEYNOTE-001: response rate 24%.')}"><path d="M${sx} 266 l7 14 l16 2 l-12 11 l3 16 l-14 -8 l-14 8 l3 -16 l-12 -11 l16 -2 z" class="il-4 il-line"/></g>`;
          s += `<text x="${sx - 26}" y="292" text-anchor="end" class="il-text">approval, Sep 2014</text>`;
          s += `<path d="M${sx + 22} 286 H${X(2020)}" class="st-7 il-none" stroke-width="2.5" stroke-dasharray="6 5"/><text x="${(sx + X(2020)) / 2 + 10}" y="276" text-anchor="middle" class="il-text-2">roughly five years sooner than the illustrative sequence</text>`;
          s += '</svg>';
          stage.innerHTML = s;
          cap.innerHTML = 'Textbook phase durations are illustrative, not Merck\'s plan. KEYNOTE-001 dates from Kang et al. (Ann Oncol 2017) and Shaverdian et al. (Lancet Oncol 2017); cohort bars show approximate enrollment windows.';
        };
        const tree = () => {
          let s = '<svg viewBox="0 0 900 330" style="width:100%;height:auto">';
          const node = (x, y, w, h, c, l1, l2, t) => `<g data-tip="${tip(t)}" style="cursor:help"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" class="${c} il-line"/><text x="${x + w / 2}" y="${y + 22}" text-anchor="middle" class="il-text">${l1}</text>${l2 ? `<text x="${x + w / 2}" y="${y + 40}" text-anchor="middle" class="il-text-2">${l2}</text>` : ''}</g>`;
          const line = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} C${x1} ${(y1 + y2) / 2} ${x2} ${(y1 + y2) / 2} ${x2} ${y2}" class="il-line il-none"/>`;
          s += line(450, 70, 230, 130) + line(450, 70, 670, 130);
          s += node(320, 16, 260, 54, 'il-paper', 'KEYNOTE-001: 1,235 patients', 'one protocol, nine amendments', '<b>KEYNOTE-001</b><br>Started January 2011 as a first-in-human study; enrollment complete July 2014.');
          s += node(110, 130, 240, 54, 'il-1s', 'Melanoma cohorts', 'B1, B2 and others', '<b>Melanoma</b><br>Several expansion cohorts in patients with and without prior ipilimumab, including randomized dose comparisons.');
          s += node(550, 130, 240, 54, 'il-2s', 'Lung cancer cohorts', 'C, F1, F2, F3', '<b>NSCLC</b><br>Treatment-naive and previously treated patients at several doses; 495 analyzed in Garon et al. 2015.');
          s += line(230, 184, 110, 240) + line(230, 184, 330, 240) + line(670, 184, 560, 240) + line(670, 184, 790, 240);
          s += node(20, 240, 190, 60, 'il-1s', 'B1: 135 patients', 'NEJM 2013: 38% response', '<b>Cohort B1</b><br>135 patients, with or without prior ipilimumab. Confirmed response rate 38% across doses.');
          s += node(230, 240, 200, 60, 'il-1s', 'B2: 173 randomized', '2 vs 10 mg/kg: both 26%', '<b>Cohort B2</b><br>Ipilimumab-refractory melanoma, randomized 2 mg/kg vs 10 mg/kg every 3 weeks. Response 26% at both doses, so the lower dose was chosen. The 89 patients at 2 mg/kg supported approval.');
          s += node(460, 240, 200, 60, 'il-2s', 'Training set: 182', 'chooses PD-L1 cut-off', '<b>Training set</b><br>182 lung cancer patients used to pick a PD-L1 cut-off. Statistical analysis (ROC curve) pointed to a tumor proportion score of 50%.');
          s += node(680, 240, 200, 60, 'il-2s', 'Validation set: 313', '45.2% response if ≥50%', '<b>Validation set</b><br>313 separate patients to test the cut-off. Response rate 45.2% with TPS ≥50%, versus 19.4% across all lung patients.');
          s += '</svg>';
          stage.innerHTML = s;
          cap.innerHTML = 'Numbers from Hamid et al. 2013, Robert et al. 2014, Garon et al. 2015 and Kang et al. 2017. Cohort list simplified.';
        };
        root.querySelectorAll('[data-v]').forEach(b => b.onclick = () => { root.querySelectorAll('[data-v]').forEach(x => x.classList.toggle('primary', x === b)); b.dataset.v === 'time' ? time() : tree(); });
        time();
      }},

    {type: 'callout', variant: 'numbers', heading: 'KEYNOTE-001 by the numbers', html: `<p><strong>1,235</strong> patients, in a study labeled phase 1. <strong>9</strong> protocol amendments. <strong>6</strong> randomized dose or schedule comparisons nested inside it. <strong>2</strong> accelerated approvals (melanoma 2014, lung 2015) plus the first companion diagnostic for a checkpoint drug. About <strong>4 years</strong> from the investigational new drug filing to first approval, versus the 10 to 15 years that first test to approval generally takes. For scale, the whole trial population would fit in a mid-sized high school; the patients whose results led to approval, 89, would fit in two school buses.</p>`},

    {type: 'callout', variant: 'product', heading: 'Like a staged rollout behind feature flags', html: `<p>KEYNOTE-001 resembles shipping one codebase and expanding exposure cohort by cohort as metrics come in: internal users, then a beta group, then segments defined by what you learned. You don't rewrite the app between phases; you flip flags. Merck even used a training set and a holdout validation set to pick its targeting rule, just as you would for a model.</p><p><strong>Where it breaks:</strong> every "user" is a person with a terminal illness, consenting to an experimental drug. Each "flag flip" is a protocol amendment reviewed by ethics boards and discussed with the FDA. And you cannot A/B test your way out of a safety problem: if a toxicity appears at month nine, hundreds of people have already been exposed. The approach worked because the drug was unusually safe and the effect unusually large. Most drugs are neither.</p>`},

    {type: 'decision', title: 'Decision: keep expanding, or stop and do it "properly"?', role: 'You lead the MK-3475 program, mid-2013', scenario: `Melanoma responses are striking: 38% in the first 135 patients, many of them lasting. The FDA has just given you breakthrough therapy designation. The conventional move now is to close the phase 1, publish, and launch a randomized phase 3 against ipilimumab or chemotherapy, which would take years to read out. BMS is running exactly such trials with nivolumab. Your statisticians say KEYNOTE-001 could instead add a randomized dose comparison in ipilimumab-refractory patients, people with no good options, and file for accelerated approval on response rate. What do you do?`,
      options: [
        {label: 'Close it and go straight to a large randomized phase 3.', outcome: 'Cleaner evidence, and the path regulators know best. But you would reach the market a year or more later than BMS, and patients who had failed ipilimumab would wait for a drug that was already clearly shrinking tumors. You would run the phase 3 trials anyway, for full approval.'},
        {label: 'Expand KEYNOTE-001 with a pre-specified randomized dose cohort and file for accelerated approval, while starting phase 3 trials in parallel.', outcome: 'Faster, riskier, more complex. You have to convince the FDA that response rate in a first-in-human study, in patients with no alternatives, is "reasonably likely" to predict benefit, and then prove it in confirmatory trials. If the confirmatory trials fail, the approval can be withdrawn.'},
        {label: 'Keep it single-arm and file on the existing data as quickly as possible.', outcome: 'Fastest on paper, but you would still not know which dose to approve. Without a randomized comparison of 2 mg/kg and 10 mg/kg, the FDA would push back on dose selection, one of the key issues it later cited in its review.'},
      ],
      reality: 'Merck did the second: it expanded KEYNOTE-001 with the randomized 2 vs 10 mg/kg cohort (173 patients, 26% response at both doses) and ran randomized trials in parallel (KEYNOTE-002 against chemotherapy, KEYNOTE-006 against ipilimumab). Accelerated approval came on September 4, 2014; full approval in melanoma followed on December 18, 2015, when those randomized trials showed longer survival.'},

    // ---------------- 8. Regulators
    {type: 'story', kicker: 'Regulators', title: 'First to market by 109 days', tocTitle: 'Regulators', html: `
      <p>Merck announced its [[breakthrough therapy designation]] for advanced melanoma in April 2013. The designation was brand new, created by Congress in 2012, and it gave Merck frequent, senior-level meetings with FDA reviewers. In January 2014, Merck began a rolling submission of its [[BLA|Biologics License Application]], sending in completed sections as they were ready rather than all at once. The FDA granted [[priority review]].</p>
      <p>On September 4, 2014, the FDA granted [[accelerated approval]] to pembrolizumab for patients with advanced melanoma whose disease had progressed after ipilimumab (and, if their tumors had a BRAF mutation, after a BRAF inhibitor). The evidence: 89 patients from KEYNOTE-001 at the 2 mg/kg dose, of whom 24% had their tumors shrink substantially, and at six months 86% of those responses were still ongoing. It was the first anti-PD-1 drug approved anywhere in the US.</p>
      <p>The FDA's own review summary lists what made the application unusual: relying on data from a first-in-human trial, judging how much the durability of responses should count, and choosing a dose. It concluded that durable tumor shrinkage in a life-threatening disease with few options outweighed the risks of immune side effects.</p>
      <p>Accelerated approval is a loan against future evidence. The company must run confirmatory trials. Merck's came through: on December 18, 2015, the FDA converted melanoma to regular approval, based on two randomized trials. In one, KEYNOTE-006 with 834 patients, pembrolizumab beat ipilimumab on [[overall survival]].</p>
      <p>BMS's Opdivo received accelerated approval in the same setting on December 22, 2014, 109 days later. A few months of lead matters less than you might think, because doctors switch readily when data favor a rival. The real race was lung cancer.</p>`},

    {type: 'table', title: 'The regulatory path, at a glance', columns: ['Date', 'Milestone', 'What it meant'],
      rows: [
        ['Jan 2011', 'KEYNOTE-001 begins', 'First-in-human; later expanded to 1,235 patients'],
        ['Apr 2013', '[[breakthrough therapy designation|Breakthrough therapy designation]] (announced)', 'Intensive FDA guidance; faster path'],
        ['Jan 2014', 'Rolling BLA submission starts', 'Sections reviewed as submitted'],
        ['Sep 4, 2014', '[[accelerated approval|Accelerated approval]], melanoma after ipilimumab', 'Based on [[response rate]] (24%) in 89 patients; confirmation required'],
        ['Dec 22, 2014', 'Opdivo accelerated approval (BMS)', 'Rival arrives in the same setting'],
        ['2015', 'Accelerated approval in previously treated PD-L1+ [[NSCLC]], with the 22C3 test', 'The first [[companion diagnostic]] for a checkpoint drug'],
        ['Dec 18, 2015', 'Regular approval in melanoma', 'Randomized trials confirmed survival benefit'],
        ['Oct 24, 2016', 'First-line NSCLC with [[TPS]] ≥50%', 'First checkpoint drug approved to replace first-line chemo in lung cancer'],
        ['May 23, 2017', 'Any [[MSI-H]]/[[dMMR]] solid tumor', 'First FDA cancer approval based on a biomarker rather than organ of origin'],
        ['Sep 2025', 'Keytruda Qlex ([[subcutaneous]])', 'Same antibody, new route; separate patents'],
      ],
      caption: 'Sources: FDA approval summaries (Chuk 2017, Barone 2017, Pai-Scherf 2017, Marcus 2019, Hazarika 2017), Kang 2017 and Merck 10-K filings.'},

    // ---------------- 9. Biomarker bet
    {type: 'story', kicker: 'The biomarker bet', title: 'Why Merck chose a smaller market', tocTitle: 'The biomarker bet', html: `
      <p>By 2014, both Merck and BMS knew that PD-1 blockers helped some lung cancer patients a lot and most patients not at all. In KEYNOTE-001, only 19.4% of lung cancer patients responded overall. The question that would decide billions of dollars was: can you tell in advance who the responders will be?</p>
      <h3>Staining for PD-L1</h3>
      <p>The obvious candidate was PD-L1 itself. If a tumor survives by flashing PD-L1 at T cells, tumors with lots of it should be the ones most dependent on the brake, and so most vulnerable when it is released. You can see PD-L1 with [[immunohistochemistry]]: a pathologist takes a thin slice of the biopsy, applies an antibody against PD-L1 that carries a brown dye, and looks under a microscope. Cells with PD-L1 on their surface get a brown ring.</p>
      <p>Merck worked with the diagnostics company Dako (now part of Agilent) on a test built around an antibody clone called [[22C3]]. The score it produces is the [[tumor proportion score]], or TPS: of all the living tumor cells on the slide, what percentage have a partial or complete brown ring on their membrane? Immune cells, which can also carry PD-L1, are not counted. A slide needs at least 100 tumor cells to be scored.</p>
      <p>The lung cohorts of KEYNOTE-001 were used to pick a cut-off. In the training set, a statistical analysis pointed to 50%. In the separate validation set, patients with a TPS of 50% or more had a response rate of 45.2%, more than double the 19.4% seen across all patients. Their median progression-free survival was 6.3 months, versus 3.7 months for everyone.</p>
      <p>How common is a TPS of 50% or more? In a large 2019 real-world study of 2,368 patients with advanced NSCLC across 18 countries, 22% had it; among those without EGFR or ALK mutations (the patients eligible for immunotherapy first), 27%. About half had some PD-L1 (TPS of 1% or more).</p>
      <p>Try scoring a slide yourself. It is harder than it sounds, and the difficulty is part of the story.</p>`},

    {type: 'custom', title: 'Be the pathologist: score a biopsy', intro: 'Each circle is a cell. Orange cells are tumor cells; small aqua cells are immune cells. A red ring (brown on a real slide) means the cell\'s surface stains for PD-L1. Real slides hold hundreds to thousands of tumor cells; this one is simplified. Estimate the tumor proportion score, then reveal it.',
      html: `<div class="card"><div class="tpsfield"></div>
        <div style="display:grid;grid-template-columns:170px 1fr 70px;gap:12px;align-items:center;margin-top:12px;font-size:15px"><span>Your estimate of TPS</span><input type="range" min="0" max="100" value="30" class="tpsguess" style="accent-color:var(--accent)"><b class="tpsgv">30%</b></div>
        <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap"><button class="btn primary tpsrev">Reveal the score</button><button class="btn tpsnew">New biopsy</button></div>
        <div class="tpsout explain" style="min-height:70px"></div></div>`,
      init: (root, api) => {
        let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
        const targets = [0.62, 0.08, 0.46, 0.55, 0.0, 0.93, 0.3, 0.51];
        let k = 0, truth = 0;
        const field = root.querySelector('.tpsfield'), out = root.querySelector('.tpsout'), g = root.querySelector('.tpsguess'), gv = root.querySelector('.tpsgv');
        const draw = () => {
          const p = targets[k % targets.length]; k++;
          let s = '<svg viewBox="0 0 900 340" style="width:100%;height:auto;background:var(--il-paper);border-radius:12px">';
          let tumor = 0, pos = 0;
          const cols = 15, rows = 6;
          for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
            const x = 40 + c * 57 + (r % 2) * 26 + (rnd() - 0.5) * 12, y = 40 + r * 52 + (rnd() - 0.5) * 10;
            if (rnd() < 0.22) {
              const st = rnd() < 0.55;
              s += `<circle cx="${x}" cy="${y}" r="10" class="il-3s il-line"/><circle cx="${x}" cy="${y}" r="4" class="il-3"/>` + (st ? `<circle cx="${x}" cy="${y}" r="12.5" class="il-none st-7" stroke-width="3"/>` : '');
            } else {
              tumor++; const st = rnd() < p; if (st) pos++;
              s += `<circle cx="${x}" cy="${y}" r="20" class="il-2s il-line"/><circle cx="${x + 3}" cy="${y - 2}" r="6" class="il-2" opacity=".55"/>` + (st ? `<circle cx="${x}" cy="${y}" r="22" class="il-none st-7" stroke-width="3.5"/>` : '');
            }
          }
          s += '</svg>';
          field.innerHTML = s; truth = Math.round(100 * pos / tumor);
          field.dataset.info = `${pos} of ${tumor} tumor cells stained`;
          out.innerHTML = '<span style="color:var(--ink-3)">Count only the big orange cells. Ringed immune cells do not count.</span>';
        };
        g.oninput = () => gv.textContent = g.value + '%';
        root.querySelector('.tpsnew').onclick = draw;
        root.querySelector('.tpsrev').onclick = () => {
          const cat = truth >= 50 ? '<b>TPS ≥50%</b>: eligible for first-line Keytruda alone under the October 2016 label (KEYNOTE-024 population).' : truth >= 1 ? '<b>TPS 1–49%</b>: PD-L1 positive, but outside KEYNOTE-024. After 2018, typically treated with Keytruda plus chemotherapy (KEYNOTE-189).' : '<b>TPS below 1%</b>: PD-L1 negative. In KEYNOTE-189, patients benefited from Keytruda plus chemo even here.';
          const diff = Math.abs(+g.value - truth);
          out.innerHTML = `True score: <b>${truth}%</b> (${field.dataset.info}). You were ${diff <= 5 ? 'within 5 points, excellent' : 'off by ' + diff + ' points'}. ${cat}` + ((truth >= 40 && truth < 60) ? ' <br><i>Near the 50% line, two pathologists can easily land on different sides: one reason cut-offs are blunt instruments.</i>' : '');
        };
        draw();
      }},

    {type: 'callout', variant: 'product', heading: 'Like choosing a beachhead segment', html: `<p>This is the "cross the chasm" playbook: instead of launching to everyone and getting mediocre average metrics, win decisively with the segment that needs you most, then expand. Merck's first lung launch targeted the roughly one in four patients whose tumors screamed PD-L1. A clean win there bought credibility, guidelines and habits (upfront PD-L1 testing) that it later extended to everyone.</p><p><strong>Where it breaks:</strong> in software you define segments by behavior you can observe cheaply, and you can change your mind next quarter. Here the segment is defined by a biopsy stain that must itself be validated and approved, a pathologist's judgment near the cut-off can flip a patient's eligibility, and a trial locks in the segment for three to five years. You also cannot quietly include "adjacent" users: anyone outside the label is off-label.</p>`},

    {type: 'decision', title: 'Decision: broad or selected?', role: 'You are designing a first-line lung cancer trial, early 2014', scenario: `You have a PD-1 antibody that shrinks tumors in about one in five previously treated lung cancer patients, and in almost half of those whose tumors are strongly PD-L1 positive. You now want to replace chemotherapy as the first treatment for newly diagnosed advanced lung cancer, the biggest prize in oncology. You must pick who to enroll before the trial starts, and live with the answer for years. The PD-L1 test is imperfect, and some PD-L1-negative patients respond too.`,
      options: [
        {label: 'Broad: enroll anyone with PD-L1 of 1% or more (about half of patients). Bigger market, faster enrollment, and the label you get covers far more patients.', outcome: 'This is roughly what BMS did in CheckMate-026 (enrolling at ≥1%, with the primary analysis at ≥5%). If the drug works strongly in high expressers and weakly in low expressers, the average effect is diluted. With chemotherapy still a decent comparator in the first line, the diluted effect may not beat it. In BMS\'s case, it did not: median progression-free survival was 4.2 months with nivolumab versus 5.9 with chemo.'},
        {label: 'Selected: enroll only patients with TPS of 50% or more (about a quarter). Smaller market and heavy screening burden, but a much bigger expected effect.', outcome: 'This is what Merck did in KEYNOTE-024. You must screen many patients to find eligible ones and your first label is narrower. But the effect is concentrated where the biology is strongest, so the chance of a clear win is much higher. It worked: progression-free survival 10.3 vs 6.0 months, and a significant overall survival benefit at an interim analysis.'},
        {label: 'Hedge: enroll broadly but make high PD-L1 the primary analysis, with the broad group as a secondary.', outcome: 'Sensible, and Merck later did something similar in KEYNOTE-042, testing TPS ≥50%, ≥20% and ≥1% in sequence. The catch: a bigger, slower trial, and if the headline benefit in the broad group comes mostly from the high expressers, regulators and doctors notice. In KEYNOTE-042 the survival benefit shrank as the population widened.'},
      ],
      reality: 'Merck chose the selected design for KEYNOTE-024 (registered in 2014). BMS chose the broad design for CheckMate-026 (also registered in 2014). Merck won, and the 2016 readouts reordered the PD-1 market. Merck also hedged: KEYNOTE-042 tested the broad population, and KEYNOTE-189 tested Keytruda plus chemo in everyone.'},

    // ---------------- 10. KEYNOTE-024 trial
    {type: 'trial', kicker: 'The trials, part 2', title: 'KEYNOTE-024: the head-to-head that mattered', tocTitle: 'KEYNOTE-024', intro: 'Pembrolizumab alone versus chemotherapy, as the very first treatment for advanced lung cancer, in patients selected for high PD-L1.',
      design: {name: 'KEYNOTE-024', phase: 'Phase 3', blinding: 'Open-label', years: '2014–2016 (primary analysis)', n: 305,
        population: 'Untreated advanced NSCLC, PD-L1 TPS ≥50%, no EGFR or ALK alteration',
        randomization: '1:1',
        arms: [{name: 'Pembrolizumab', n: 154, desc: '200 mg IV every 3 weeks'}, {name: 'Platinum chemotherapy', n: 151, desc: 'Platinum doublet, 4 to 6 cycles', control: true}],
        endpoint: 'Progression-free survival (blinded central review)',
        details: {'Primary endpoint': '[[progression-free survival]], judged by radiologists who did not know the treatment', 'Secondary': '[[overall survival]], [[response rate]], safety', 'Crossover': 'Chemo patients could switch to pembrolizumab when their cancer grew ([[crossover]])', 'Where': '16 countries; presented at ESMO, October 2016; published in NEJM'}},
      predict: {q: 'No therapy had ever beaten platinum chemotherapy on progression-free survival as first-line treatment for this kind of lung cancer. What do you predict for the hazard ratio for progression or death (below 1 favors pembrolizumab)?',
        options: ['About 1.0: no real difference', 'About 0.80: a modest 20% reduction in risk', 'About 0.50: risk of progression or death roughly halved', 'Pembrolizumab did worse (above 1.0)'],
        answer: 2, explain: 'The hazard ratio was 0.50: at any given time, patients on pembrolizumab had half the risk of their cancer growing or of dying. Median progression-free survival was 10.3 versus 6.0 months. At the second interim analysis, overall survival was also significantly better (hazard ratio 0.60), and fewer patients had severe side effects (26.6% vs 53.3%).'},
      results: [
        {kind: 'km', title: 'Progression-free survival', subtitle: 'Schematic curves drawn from the reported medians (10.3 vs 6.0 months, HR 0.50), not digitized from the paper.', xLabel: 'Months', unit: '%', yMax: 100, xMax: 18,
          series: [{name: 'Pembrolizumab', points: [[0, 100.0], [1, 93.5], [2, 87.4], [3, 81.7], [4, 76.4], [5, 71.4], [6, 66.8], [7, 62.4], [8, 58.4], [9, 54.6], [10, 51.0], [10.3, 50], [11, 47.7], [12, 44.6], [13, 41.7], [14, 39.0], [15, 36.4], [16, 34.1], [17, 31.9], [18, 29.8]]},
            {name: 'Chemotherapy', points: [[0, 100.0], [1, 89.1], [2, 79.4], [3, 70.7], [4, 63.0], [5, 56.1], [6, 50.0], [7, 44.5], [8, 39.7], [9, 35.4], [10, 31.5], [11, 28.1], [12, 25.0], [13, 22.3], [14, 19.8], [15, 17.7], [16, 15.7], [17, 14.0], [18, 12.5]], color: 8}],
          markers: [{x: 10.3, y: 50, label: 'median 10.3 mo', series: 0}, {x: 6, y: 50, label: '6.0 mo', series: 7, dy: 34}]},
        {kind: 'km', title: 'Overall survival, five-year follow-up', subtitle: 'Schematic curves drawn from the reported medians (26.3 vs 13.4 months), 5-year rates (31.9% vs 16.3%) and the 6-month rates from the first report. Not digitized.', xLabel: 'Months', unit: '%', yMax: 100, xMax: 60,
          series: [{name: 'Pembrolizumab', points: [[0, 100.0], [2, 92.9], [4, 86.3], [6, 80.2], [8, 76.6], [10, 73.1], [12, 69.7], [14, 66.6], [16, 63.5], [18, 60.7], [20, 57.9], [22, 55.3], [24, 52.7], [26.3, 50], [28, 48.9], [30, 47.6], [32, 46.3], [34, 45.1], [36, 43.9], [38, 42.8], [40, 41.7], [42, 40.6], [44, 39.5], [46, 38.4], [48, 37.4], [50, 36.5], [52, 35.5], [54, 34.6], [56, 33.6], [58, 32.8], [60, 31.9]]},
            {name: 'Chemotherapy', points: [[0, 100.0], [2, 89.8], [4, 80.6], [6, 72.4], [8, 65.5], [10, 59.3], [12, 53.6], [13.4, 50], [16, 47.0], [18, 44.8], [20, 42.7], [22, 40.7], [24, 38.7], [26, 36.9], [28, 35.2], [30, 33.5], [32, 32.0], [34, 30.5], [36, 29.0], [38, 27.7], [40, 26.4], [42, 25.1], [44, 24.0], [46, 22.8], [48, 21.8], [50, 20.7], [52, 19.8], [54, 18.8], [56, 17.9], [58, 17.1], [60, 16.3]], color: 8}],
          markers: [{x: 26.3, y: 50, label: 'median 26.3 mo', series: 0}],
          note: '66% of chemotherapy patients effectively crossed over to a PD-1 or PD-L1 drug later, which shrinks the apparent survival gap. Hazard ratio for death at 5 years: 0.62.'},
        {kind: 'bar', title: 'Response and severe side effects', unit: '%', categories: ['Tumor response', 'Severe side effects (grade 3–5)'],
          series: [{name: 'Pembrolizumab', values: [44.8, 26.6]}, {name: 'Chemotherapy', values: [27.8, 53.3], color: 8}]},
      ],
      takeaway: 'In the right patients, a single antibody beat the chemotherapy that had been standard for decades, with half the rate of severe side effects. Five years later, about one in three patients on pembrolizumab was alive, roughly double the chemotherapy arm, despite most chemo patients later receiving immunotherapy.'},

    {type: 'story', title: 'CheckMate-026: same mechanism, opposite result', tocTitle: 'Why BMS lost', html: `
      <p>BMS's Opdivo and Merck's Keytruda do essentially the same thing to the same protein. So why did one company's first-line trial succeed and the other's fail?</p>
      <p>CheckMate-026 enrolled 541 patients with untreated advanced lung cancer and a PD-L1 level of 1% or more (measured with a different test), and made its primary analysis in the 423 with 5% or more. Among those, median progression-free survival was 4.2 months with nivolumab versus 5.9 months with chemotherapy (hazard ratio 1.15). Overall survival was 14.4 versus 13.2 months, no meaningful difference. Nivolumab was gentler: severe treatment-related side effects occurred in 18% of patients versus 51% on chemo. But gentler was not the bar. Better was.</p>
      <p>The most likely explanation is dilution. A 5% threshold lets in many patients whose tumors barely use PD-L1. If the drug helps high expressers a great deal and low expressers little, averaging them together produces a lukewarm number that a decent comparator can match. Chemotherapy in first-line lung cancer is a decent comparator. At the ESMO meeting, the Belgian lung cancer expert Johan Vansteenkiste said the reason KEYNOTE-024 met its endpoint, "in contrast with other studies, is probably because the trial only included patients who had PD-L1 expression of at least 50%."</p>
      <p>Other factors may have contributed, including a different PD-L1 test and heavy crossover: 60% of chemotherapy patients went on to receive nivolumab, which blurs any survival comparison. BioPharma Dive later summarized the design gap: Merck enrolled at 50%, BMS at 5%, and Merck "designed its trial with more opportunities for Keytruda to succeed."</p>
      <p>The consequences were enormous. In its 2016 annual report, BMS called CheckMate-026 "a significant setback in first-line lung cancer" and noted negative impacts on its stock price. Opdivo had outsold Keytruda in 2015 and 2016. By 2018, Keytruda had overtaken it, and the gap has widened every year since. "It destroyed BMS," Nils Lonberg, a former Medarex and BMS scientist, told BioPharma Dive. "It was just one bad trial design. But there was no clawing our way back."</p>
      <aside class="note">Hindsight caveat: BMS's broad design was not foolish. In 2014 nobody knew how steeply benefit rose with PD-L1, the test was new, and a broad label is worth far more if it succeeds. The lesson is not "always select". It is "know how your effect is distributed before you bet on the average."</aside>`},

    {type: 'table', title: 'Side by side: the two first-line lung trials', columns: ['', 'KEYNOTE-024 (Merck)', 'CheckMate-026 (BMS)'],
      rows: [
        ['Drug', 'Pembrolizumab 200 mg every 3 weeks', 'Nivolumab 3 mg/kg every 2 weeks'],
        ['Who got in', 'PD-L1 [[TPS]] ≥50% (22C3 test)', 'PD-L1 ≥1% enrolled; primary analysis ≥5% (different assay)'],
        ['Patients randomized', '305', '541 (423 in primary analysis)'],
        ['Primary endpoint', '[[progression-free survival|Progression-free survival]]', 'Progression-free survival'],
        ['Median PFS, drug vs chemo', '<b>10.3 vs 6.0 months</b> (HR 0.50)', '<b>4.2 vs 5.9 months</b> (HR 1.15)'],
        ['Overall survival', 'HR 0.60 at first report; 5-year: 31.9% vs 16.3%', 'Median 14.4 vs 13.2 months (HR 1.02)'],
        ['Severe treatment-related side effects', '26.6% vs 53.3%', '18% vs 51%'],
        ['Outcome', 'FDA approval, October 24, 2016', 'Failed; BMS calls it a "significant setback"'],
      ],
      caption: 'Sources: Reck et al., NEJM 2016 and JCO 2021; Carbone et al., NEJM 2017; BMS 2016 Form 10-K. Cross-trial comparisons are informal: different tests, populations and designs.'},

    {type: 'explorer', title: 'Explorer: what does selecting patients buy you?', intro: 'A toy model of the 2014 choice. Set how well you believe the drug works in each PD-L1 group, and how many patients you can enroll. The model compares three enrollment strategies. Population shares come from the EXPRESS study (EGFR/ALK-negative patients: 27% TPS ≥50%, 26% TPS 1–49%, 47% below 1%).',
      inputs: [
        {id: 'hi', label: 'True HR if TPS ≥50%', min: 0.35, max: 0.95, step: 0.01, value: 0.55, fmt: v => v.toFixed(2)},
        {id: 'mid', label: 'True HR if TPS 1–49%', min: 0.6, max: 1.15, step: 0.01, value: 0.92, fmt: v => v.toFixed(2)},
        {id: 'neg', label: 'True HR if TPS <1%', min: 0.7, max: 1.25, step: 0.01, value: 1.05, fmt: v => v.toFixed(2)},
        {id: 'n', label: 'Patients enrolled', min: 150, max: 1500, step: 50, value: 400, fmt: v => v},
      ],
      compute: (v, api, el) => {
        const Phi = z => { const t = 1 / (1 + 0.2316419 * Math.abs(z)), d = 0.3989423 * Math.exp(-z * z / 2); const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274)))); return z > 0 ? 1 - p : p; };
        const groups = {hi: 0.27, mid: 0.26, neg: 0.47};
        const strat = [['All-comers', ['hi', 'mid', 'neg']], ['TPS ≥1%', ['hi', 'mid']], ['TPS ≥50%', ['hi']]];
        const rows = strat.map(([name, gs]) => {
          const w = gs.reduce((a, g) => a + groups[g], 0);
          const lnhr = gs.reduce((a, g) => a + groups[g] * Math.log(v[g]), 0) / w;
          const hr = Math.exp(lnhr), d = 0.65 * v.n;
          const power = lnhr < 0 ? Phi(Math.sqrt(d) * Math.abs(lnhr) / 2 - 1.96) : 0.025;
          const need = lnhr < -0.005 ? Math.ceil(4 * Math.pow(1.96 + 1.2816, 2) / (lnhr * lnhr) / 0.65) : Infinity;
          return {name, share: w, hr, power, screen: Math.round(v.n / w), need, needScreen: need === Infinity ? Infinity : Math.round(need / w)};
        });
        const f = x => x === Infinity ? 'never' : api.fmt(x);
        el.innerHTML = `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>Strategy</th><th>Eligible</th><th>Diluted HR</th><th>Chance of a win with ${api.fmt(v.n)} patients</th><th>Patients screened</th><th>Patients for 90% power</th></tr></thead><tbody>${rows.map(r => `<tr><td><b>${r.name}</b></td><td>${Math.round(r.share * 100)}%</td><td>${r.hr.toFixed(2)}</td><td><b>${Math.round(r.power * 100)}%</b></td><td>${api.fmt(r.screen)}</td><td>${f(r.need)} (screen ${f(r.needScreen)})</td></tr>`).join('')}</tbody></table></div><div class="exch" style="margin-top:12px"></div><div class="caption">Toy model: the diluted hazard ratio is a share-weighted average of log hazard ratios; power uses Schoenfeld's approximation with a two-sided 5% test and assumes 65% of patients have an event by the analysis. Real trials also face assay error, crossover and imbalances. These are not Merck's or BMS's calculations.</div>`;
        api.mountChart(el.querySelector('.exch'), {kind: 'bar', title: 'Chance of a statistically significant win', unit: '%', categories: rows.map(r => r.name), series: [{name: 'Power', values: rows.map(r => Math.round(r.power * 100))}], colorByCategory: true, labelWidth: 120});
      }},

    {type: 'chart', title: 'The dilution effect, in real data', intro: 'Merck later tested pembrolizumab alone against chemotherapy in a broad population (KEYNOTE-042, 1,274 patients with TPS ≥1%), analyzing three thresholds in sequence. Lower hazard ratios mean a bigger survival benefit.',
      chart: {kind: 'bar', horizontal: true, title: 'Death rate relative to chemotherapy (hazard ratio × 100; lower is better)', unit: '%', labelWidth: 260,
        categories: ['KEYNOTE-024, TPS ≥50% (5-year)', 'KEYNOTE-042, TPS ≥50%', 'KEYNOTE-042, TPS ≥20%', 'KEYNOTE-042, TPS ≥1%', 'CheckMate-026 (nivolumab), ≥5%'],
        series: [{name: 'Hazard ratio × 100', values: [62, 69, 77, 81, 102], notes: ['Reck et al., JCO 2021', 'Mok et al., Lancet 2019; median OS 20.0 vs 12.2 months', 'Mok et al., Lancet 2019', 'Mok et al., Lancet 2019; median OS 16.7 vs 12.1 months', 'Carbone et al., NEJM 2017']}],
        note: 'All five compare a PD-1 drug alone with platinum chemotherapy in untreated advanced NSCLC. KEYNOTE-042 was positive at every threshold, but the benefit shrank as lower-PD-L1 patients were added. 100% would mean no difference; 62% means deaths occurred at 62% of the chemotherapy rate at any given time (hazard ratio 0.62).'},
      takeaway: 'Widening the population did not erase the benefit, but it diluted it, exactly as the toy model predicts. A trial that started broad, with a weaker drug-versus-comparator margin, could easily have missed.'},

    {type: 'callout', variant: 'lesson', heading: 'The biomarker bet, in one sentence', html: `<p>When a drug's effect is concentrated in an identifiable subgroup, testing it in that subgroup first can turn a coin flip into a near-certainty, and the credibility from that first win lets you expand later, through combination trials and broader studies.</p>`},

    // ---------------- 11. Expansion
    {type: 'story', kicker: 'What came next', title: 'From one niche to dozens of cancers', tocTitle: 'Expansion', html: `
      <p>Winning the high-PD-L1 quarter of lung cancer was the beachhead. The rest of the market, patients with low or no PD-L1, still got chemotherapy first. Merck's next move was not to choose between chemo and Keytruda, but to give both.</p>
      <p>The logic was biological as well as commercial. Chemotherapy kills tumor cells, and dying tumor cells spill their contents, including neoantigens, which can prime T cells. Chemo can also thin out the suppressive cells that shield tumors. Releasing the PD-1 brake at the same time might let the immune system take advantage. KEYNOTE-189 tested that idea in 616 patients with non-squamous NSCLC, regardless of PD-L1 level.</p>`},

    {type: 'trial', title: 'KEYNOTE-189: Keytruda plus chemotherapy for (almost) everyone', tocTitle: 'KEYNOTE-189', intro: 'A double-blind trial: patients and doctors did not know whether the chemo came with pembrolizumab or a placebo.',
      design: {name: 'KEYNOTE-189', phase: 'Phase 3', blinding: 'Double-blind', years: 'Published 2018', n: 616,
        population: 'Untreated metastatic non-squamous NSCLC, no EGFR/ALK, any PD-L1 level',
        randomization: '2:1',
        arms: [{name: 'Pembrolizumab + chemo', n: 410, desc: 'Chemo plus pembrolizumab 200 mg'}, {name: 'Placebo + chemo', n: 206, desc: 'Chemo plus placebo', control: true}],
        endpoint: 'Overall survival and progression-free survival (dual primary)',
        details: {'Randomization': '2:1, so two of every three patients got pembrolizumab', 'Primary endpoints': '[[overall survival]] and [[progression-free survival]]', 'Crossover': 'Placebo patients could switch to pembrolizumab alone on progression'}},
      predict: {q: 'Many of these patients had tumors with little or no PD-L1, the people KEYNOTE-024 had excluded. What happened to survival at 12 months?',
        options: ['No benefit outside high PD-L1 tumors', 'A small gain, only in high PD-L1 tumors', 'A large gain overall (about half the risk of death), seen across PD-L1 groups', 'Survival improved but severe side effects doubled'],
        answer: 2, explain: 'At 12 months, 69.2% of patients on the combination were alive versus 49.4% on chemo alone (hazard ratio for death 0.49), and the improvement was seen in every PD-L1 category evaluated. Severe side effects were similar in both arms (67.2% vs 65.8%), mostly from the chemo. Median progression-free survival was 8.8 vs 4.9 months.'},
      results: [
        {kind: 'km', title: 'Overall survival', subtitle: 'Schematic curves drawn from the reported 12-month rates (69.2% vs 49.4%) and hazard ratio (0.49). Median follow-up was 10.5 months, so curves stop at 15 months. Not digitized.', xLabel: 'Months', unit: '%', yMax: 100, xMax: 15,
          series: [{name: 'Pembrolizumab + chemo', label: false, points: [[0, 100.0], [1, 97.0], [2, 94.0], [3, 91.2], [4, 88.5], [5, 85.8], [6, 83.2], [7, 80.7], [8, 78.2], [9, 75.9], [10, 73.6], [11, 71.4], [12, 69.2], [13, 67.1], [14, 65.1], [15, 63.1]]},
            {name: 'Placebo + chemo', label: false, points: [[0, 100.0], [1, 94.3], [2, 88.9], [3, 83.8], [4, 79.1], [5, 74.5], [6, 70.3], [7, 66.3], [8, 62.5], [9, 58.9], [10, 55.6], [11, 52.4], [12, 49.4], [13, 46.6], [14, 43.9], [15, 41.4]], color: 8}],
          markers: [{x: 12, y: 69.2, label: '69.2% at 12 mo', series: 0}, {x: 12, y: 49.4, label: '49.4%', series: 7, dy: 30}]},
        {kind: 'bar', title: 'Median progression-free survival (months)', unit: 'mo', categories: ['Pembrolizumab + chemo', 'Placebo + chemo'], series: [{name: 'Median PFS', values: [8.8, 4.9]}], colorByCategory: true},
      ],
      takeaway: 'The combination opened first-line lung cancer to patients regardless of PD-L1. The biomarker that had won the race now mattered mainly for deciding between Keytruda alone and Keytruda plus chemo.'},

    {type: 'story', title: 'A drug defined by a mutation pattern, not an organ', tocTitle: 'Tissue-agnostic', html: `
      <p>Meanwhile, at Johns Hopkins, Dung Le, Luis Diaz and colleagues asked whether tumors with broken [[mismatch repair]], the cell's DNA spell-checker, would be especially visible to released T cells. Tumors with this defect accumulate thousands of mutations, which should mean a flood of [[neoantigen|neoantigens]]. The team ran a small study of pembrolizumab in 41 patients. Among colorectal cancers with broken mismatch repair, 40% responded; among colorectal cancers with intact repair, none did (0 of 18). Non-colorectal tumors with the defect responded like the colorectal ones. They published in 2015, and in 2017 extended the finding across 12 tumor types in <em>Science</em>.</p>
      <p>On May 23, 2017, the FDA approved pembrolizumab for any unresectable or metastatic solid tumor that is [[MSI-H]] or [[dMMR]] and has progressed on prior treatment, regardless of where in the body it started. The evidence came from 149 patients with 15 different tumor types across five single-arm trials, with a 39.6% response rate. The FDA called it "the first time that the FDA has approved a cancer treatment for an indication based on a common biomarker rather than the primary site of origin." It was a clean demonstration of the mechanism: more mutations, more neoantigens, more for released T cells to see.</p>
      <p>From there, the label kept growing. Keytruda was approved in head and neck cancer, bladder cancer, stomach and esophageal cancer, cervical and endometrial cancer, kidney cancer, triple-negative breast cancer, Hodgkin lymphoma and more, first in advanced disease, then earlier, before and after surgery, where cures are more likely. In June 2024 it received its 40th FDA approval. By 2024, Merck said it had spent $46 billion developing the drug, that it had been used to treat 2.5 million people, and that it was being studied in 1,600 trials.</p>
      <p>Merck's CEO Robert Davis was candid about how repeatable this is. "We're not out there saying, 'Let's find the next Keytruda.' That was lightning in a bottle," he said at the 2024 ASCO meeting.</p>`},

    {type: 'callout', variant: 'product', heading: 'Platform, not product', html: `<p>Because Keytruda acts on the patient's immune system rather than on a tumor-specific target, each new cancer type is less like building a new product and more like opening a new market for the same platform, with a new trial as the "integration". Merck also became a default partner: hundreds of combination trials used Keytruda as the backbone, much as developers build on a dominant API.</p><p><strong>Where it breaks:</strong> each new indication still costs a phase 3 trial of hundreds of patients and several years, not a sprint. Integrations fail more often than they succeed (many combination partners, such as the IDO inhibitor epacadostat, failed spectacularly), and a failed add-on can't be quietly deprecated: patients were exposed and the results are public.</p>`},

    // ---------------- 12. Side effects
    {type: 'story', kicker: 'Safety', title: 'The price of releasing the brakes', tocTitle: 'Side effects', html: `
      <p>Keytruda is, for most patients, much easier to take than chemotherapy: no hair loss, less nausea, fewer infections. Its common side effects are fatigue, itching, rash and diarrhea. But because it disables a brake on T cells throughout the body, it can unleash [[autoimmunity]]. These are called [[immune-related adverse event|immune-related adverse events]], and they can strike any organ, at any time, including months after treatment has stopped.</p>
      <p>The thyroid is hit most often: in the label's pooled data, 8% of patients developed an underactive thyroid, usually needing lifelong hormone tablets. Lung inflammation (pneumonitis) is less common but occasionally fatal. Rarely, T cells destroy the insulin-making cells of the pancreas, leaving the patient with permanent type 1 diabetes. The figure below maps the rest.</p>
      <p>Treatment is mostly [[corticosteroids]] to damp the immune response, plus hormone replacement for glands that have been destroyed. In the Yervoy era, some doctors were reluctant to use steroids for fear of blunting the anti-cancer effect; steroids later proved effective at managing checkpoint toxicity. Oncologists had to learn a new vocabulary: the dermatologist, endocrinologist and pulmonologist became part of the cancer team.</p>
      <p>It helps to keep perspective. In KEYNOTE-024, severe treatment-related side effects were half as common with pembrolizumab as with chemotherapy. The risks are different, not greater. But they are harder to predict, because they depend on the patient's immune system rather than the dose.</p>`},

    {type: 'figure', title: 'Where immune side effects strike', intro: 'Rates from the US Keytruda label, pooled across 2,799 patients who received it alone. Hover or tap an organ.',
      svg: `<svg viewBox="0 0 900 440">
        <g>
          <circle cx="450" cy="62" r="40" class="il-8s il-line"/>
          <rect x="425" y="100" width="50" height="22" rx="8" class="il-8s il-line"/>
          <path d="M380 125 Q450 112 520 125 L540 300 Q450 318 360 300 Z" class="il-8s il-line"/>
          <path d="M380 128 L330 280 M520 128 L570 280" class="il-line2 il-none" stroke-width="22" stroke-linecap="round" opacity=".35"/>
          <path d="M400 305 L392 425 M500 305 L508 425" class="il-line2 il-none" stroke-width="26" stroke-linecap="round" opacity=".35"/>
        </g>
        <g data-part="pituitary"><circle cx="450" cy="66" r="8" class="il-5"/><path d="M458 66 H600" class="il-line il-none"/><text x="606" y="70" class="il-text">pituitary 0.6%</text></g>
        <g data-part="thyroid"><path d="M436 112 q14 10 28 0 q-2 12 -14 12 q-12 0 -14 -12z" class="il-2"/><path d="M436 114 H300" class="il-line il-none"/><text x="292" y="118" text-anchor="end" class="il-text">thyroid: low 8%, high 3.4%</text></g>
        <g data-part="lungs"><ellipse cx="420" cy="175" rx="26" ry="40" class="il-3s il-line"/><ellipse cx="482" cy="175" rx="26" ry="40" class="il-3s il-line"/><path d="M394 170 H300" class="il-line il-none"/><text x="292" y="174" text-anchor="end" class="il-text">lungs 3.4%</text></g>
        <g data-part="heart"><path d="M452 196 q10 -12 20 0 q6 10 -20 26 q-26 -16 -20 -26 q10 -12 20 0z" class="il-7"/><path d="M472 205 H600" class="il-line il-none"/><text x="606" y="209" class="il-text">heart (rare, serious)</text></g>
        <g data-part="liver"><path d="M398 222 q40 -10 60 4 q-10 24 -60 18z" class="il-6s il-line"/><path d="M398 232 H300" class="il-line il-none"/><text x="292" y="236" text-anchor="end" class="il-text">liver 0.7%</text></g>
        <g data-part="adrenal"><circle cx="486" cy="238" r="7" class="il-4"/><path d="M493 240 H600" class="il-line il-none"/><text x="606" y="244" class="il-text">adrenal glands 0.8%</text></g>
        <g data-part="pancreas"><path d="M455 252 q30 -6 44 4 q-20 8 -44 4z" class="il-4s il-line"/><path d="M499 258 H600" class="il-line il-none"/><text x="606" y="277" class="il-text">pancreas (type 1 diabetes) 0.2%</text></g>
        <g data-part="kidney"><ellipse cx="420" cy="262" rx="9" ry="14" class="il-7s il-line"/><path d="M411 264 H300" class="il-line il-none"/><text x="292" y="268" text-anchor="end" class="il-text">kidneys 0.3%</text></g>
        <g data-part="colon"><path d="M405 285 q45 -14 90 0 v12 q-45 -12 -90 0z" class="il-2s il-line"/><path d="M405 292 H300" class="il-line il-none"/><text x="292" y="302" text-anchor="end" class="il-text">colon 1.7%</text></g>
        <g data-part="skin"><rect x="560" y="330" width="240" height="46" rx="12" class="il-5s il-line"/><text x="680" y="358" text-anchor="middle" class="il-text">skin: rash, itching (common)</text></g>
      </svg>`,
      hotspots: {
        thyroid: {title: 'Thyroid', text: 'The most common immune side effect. Hypothyroidism (underactive thyroid) in 8% and hyperthyroidism in 3.4%; hypothyroidism can follow a burst of hyperthyroidism as the gland is destroyed. Most patients need long-term hormone replacement, but rarely need to stop Keytruda.'},
        lungs: {title: 'Lungs (pneumonitis)', text: 'Inflammation of the lungs in 3.4%, including fatal cases in 0.1%. More common after chest radiation. Shows up as cough or breathlessness; treated with [[corticosteroids]] (67% of cases needed them).'},
        colon: {title: 'Colon (colitis)', text: 'Immune attack on the gut lining in 1.7%, causing diarrhea and abdominal pain. Usually treated with steroids.'},
        liver: {title: 'Liver (hepatitis)', text: 'Immune-mediated hepatitis in 0.7%. Detected with routine blood tests of liver enzymes before each dose.'},
        pituitary: {title: 'Pituitary (hypophysitis)', text: 'Inflammation of the master hormone gland in 0.6%. Presents with headache and fatigue; can leave the patient needing several hormones for life.'},
        adrenal: {title: 'Adrenal glands', text: 'Adrenal insufficiency in 0.8%. Most affected patients stay on replacement steroids.'},
        pancreas: {title: 'Pancreas (type 1 diabetes)', text: 'Rarely (0.2%), T cells destroy the insulin-producing cells, causing permanent type 1 diabetes that can present as a medical emergency (diabetic ketoacidosis).'},
        kidney: {title: 'Kidneys (nephritis)', text: 'Immune-mediated nephritis in 0.3%.'},
        heart: {title: 'Heart (myocarditis)', text: 'Rare but potentially fatal, especially when checkpoint drugs are combined. The label requires permanent discontinuation for moderate or worse myocarditis.'},
        skin: {title: 'Skin', text: 'Rash and itching are among the most common side effects overall. Rarely, severe blistering reactions occur and the drug must be stopped permanently.'},
      },
      caption: 'Source: US prescribing information for Keytruda (DailyMed, 2026). Percentages are all grades, for Keytruda alone; rates are higher in combinations.'},

    // ---------------- 13. The money
    {type: 'story', kicker: 'The money', title: 'The biggest drug in the world, and the most concentrated bet', tocTitle: 'The money', html: `
      <p>Keytruda's sales curve is almost unbroken. Merck reported $55 million in the last months of 2014, $1.4 billion in 2016, $7.2 billion in 2018, $14.4 billion in 2020, $25.0 billion in 2023, $29.5 billion in 2024 and $31.7 billion in 2025 (all company-reported worldwide sales, in US dollars of each year). By 2023 it was the world's top-selling medicine. For scale: $31.7 billion is about $87 million every day, from a single molecule given every three or six weeks.</p>
      <p>The chart below tells the competitive story. Opdivo launched almost simultaneously and outsold Keytruda in 2015 and 2016. The first-line lung readouts of 2016 reversed that. Keytruda passed Opdivo in 2018 and never looked back.</p>`},

    {type: 'chart', title: 'Annual sales: Keytruda vs Opdivo', chart: {kind: 'line', title: 'Worldwide sales, company-reported ($ billions)', unit: '$B',
      series: [
        {name: 'Keytruda (Merck)', short: 'Keytruda', points: [[2014, 0.055], [2015, 0.566], [2016, 1.402], [2017, 3.809], [2018, 7.171], [2019, 11.084], [2020, 14.38], [2021, 17.186], [2022, 20.937], [2023, 25.011], [2024, 29.482], [2025, 31.68]]},
        {name: 'Opdivo (BMS)', short: 'Opdivo', points: [[2014, 0.006], [2015, 0.942], [2016, 3.774], [2017, 4.948], [2018, 6.735], [2019, 7.204], [2020, 6.992], [2021, 7.523], [2022, 8.249], [2023, 9.009], [2024, 9.304], [2025, 10.049]], color: 2},
      ],
      annotations: [{x: 2016, label: 'KEYNOTE-024 wins, CheckMate-026 fails'}, {x: 2028, label: 'US patent expiry (Dec 2028)', dy: 110}],
      xTicks: [2014, 2016, 2018, 2020, 2022, 2024, 2026, 2028], xMin: 2014, xMax: 2028,
      note: 'Sources: Merck and BMS Form 10-K filings. Keytruda 2025 includes Keytruda Qlex. Opdivo is BMS-reported revenue only (Ono holds rights in some markets) and excludes Opdivo Qvantig ($238M in 2025).'},
      takeaway: 'Two drugs with the same mechanism, launched months apart. The difference in trajectory traces back largely to trial design and indication strategy.'},

    {type: 'story', title: 'Who else got paid', tocTitle: 'Royalties and patents', html: `
      <p>A drug this large creates a web of claims on its revenue.</p>
      <p><strong>Bristol Myers Squibb and Ono.</strong> Ono Pharmaceutical of Japan and its partner BMS held patents broadly claiming the use of anti-PD-1 antibodies to treat cancer. They sued Merck in 2014, the month Keytruda was approved. In January 2017 Merck settled: a one-time payment of $625 million and royalties on worldwide Keytruda sales of 6.5% from 2017 through 2023, then 2.5% from 2024 through 2026. In a year like 2023, with $25 billion in sales, 6.5% is roughly $1.6 billion flowing from Merck to its rival. BMS lost the race but was paid for every lap.</p>
      <p><strong>LifeArc.</strong> The British charity that humanized the antibody in 2007, taking on the financial risk itself, received royalties from the start. It sold a small slice for $150 million in 2016 and a larger portion to the Canada Pension Plan Investment Board for $1.297 billion in May 2019, making it one of the UK's largest medical research charities by assets.</p>
      <p><strong>Merck itself</strong> has become dependent on the drug. In 2025 Keytruda was 49% of the company's total sales, a concentration Merck lists as a risk factor in its annual report. That is what makes the next chapter so important.</p>`},

    {type: 'callout', variant: 'whatif', heading: 'What if Merck had sold it in 2010?', html: `<p>Suppose the post-merger portfolio review had gone the other way and MK-3475 had been licensed to a mid-sized biotech for a modest upfront payment and a royalty. The antibody would probably still have reached patients: the science was sound and BMS was proving the class. But a small company would likely not have run a 1,235-patient phase 1, dozens of phase 3 trials and hundreds of combination studies at once. Opdivo would likely have kept its lead in lung cancer longer, and Merck, facing the loss of its asthma drug Singulair and other patent cliffs in the early 2010s, would have been a much smaller company. The same asset is worth vastly different amounts depending on who owns it and how much they are willing to spend on it.</p>`},

    // ---------------- 14. Patent cliff and lifecycle
    {type: 'story', kicker: 'Lifecycle', title: 'The cliff, and the injection that might soften it', tocTitle: 'Patent cliff and Qlex', html: `
      <p>Every blockbuster ends. For Keytruda, Merck's 2025 annual report lays out the schedule. The primary US compound patent expires in 2028; two related patents run to May and November 2029, but Merck expects them to be litigated and says [[biosimilar]] competition "could begin in December 2028." In Europe, exclusivity is expected to end in 2031.</p>
      <p>There is a second threat: the [[Inflation Reduction Act]], which lets Medicare set prices for some long-marketed, high-spend drugs. Merck says it expects Keytruda to be selected in 2027, with a government-set price taking effect on January 1, 2029, and that "U.S. sales of Keytruda will decline materially after that time."</p>
      <h3>Keytruda Qlex</h3>
      <p>Merck's main lifecycle move is a new way to give the same antibody. Standard Keytruda is an intravenous infusion over 30 minutes, which means a chair in an infusion center, a nurse, and IV access. In September 2025 the FDA approved Keytruda Qlex, pembrolizumab combined with berahyaluronidase alfa, an enzyme licensed from the biotech company Alteogen. The [[hyaluronidase]] temporarily loosens the tissue under the skin so a larger volume can be injected. Qlex is given as a [[subcutaneous]] injection into the thigh or abdomen: 2.4 mL over one minute every three weeks, or 4.8 mL over two minutes every six weeks. It is approved in the US across Keytruda's solid tumor indications, and in Europe (as Keytruda SC) across Keytruda's adult indications.</p>
      <p>For patients and clinics, a one-minute shot beats a 30-minute infusion. For Merck, it has another advantage: Merck lists US patent protection for Qlex running to 2043. A biosimilar maker that copies intravenous pembrolizumab in 2028 will not automatically be able to copy the subcutaneous product. The more patients who have switched to Qlex before biosimilars arrive, the more of the franchise may be protected. Merck also lists "lower than expected utilization of Keytruda Qlex" as a risk. Whether doctors switch, how payers respond, and how the IRA price-setting treats the two products are open questions as of 2026.</p>
      <p>Moving patients to an easier version of a drug before the patent expires is a familiar playbook. Critics call it evergreening; companies call it innovation that patients value. Both can be true.</p>`},

    {type: 'explorer', title: 'Explorer: how much can a switch to Qlex protect?', intro: 'A deliberately simple model starting from Merck\'s reported $31.7 billion in 2025. Set growth until the cliff, how many patients switch to the subcutaneous version by the end of 2028, and how fast each version erodes afterwards.',
      inputs: [
        {id: 'g', label: 'Growth to 2028', min: 0, max: 10, step: 1, value: 4, fmt: v => v + '%'},
        {id: 'conv', label: 'On Qlex by 2028', min: 0, max: 70, step: 5, value: 30, fmt: v => v + '%'},
        {id: 'ero', label: 'IV lost per year', min: 10, max: 60, step: 5, value: 35, fmt: v => v + '%'},
        {id: 'qd', label: 'Qlex lost per year', min: 0, max: 40, step: 5, value: 10, fmt: v => v + '%'},
      ],
      compute: (v, api, el) => {
        const yrs = []; for (let y = 2025; y <= 2033; y++) yrs.push(y);
        const run = conv => {
          let iv = 0, q = 0; const pts = [];
          yrs.forEach(y => {
            if (y <= 2028) { const tot = 31.68 * Math.pow(1 + v.g / 100, y - 2025); const share = conv / 100 * (y - 2025) / 3; q = tot * share; iv = tot - q; }
            else { iv *= (1 - v.ero / 100); q *= (1 - v.qd / 100); }
            pts.push([y, +(iv + q).toFixed(2)]);
          });
          return pts;
        };
        const a = run(v.conv), b = run(0);
        const cum = p => p.filter(x => x[0] >= 2029).reduce((s, x) => s + x[1], 0);
        el.innerHTML = `<div class="kmx"></div><p style="margin:10px 0 0">In this toy model, the switch keeps about <b>$${(cum(a) - cum(b)).toFixed(0)} billion</b> of extra sales over 2029–2033 compared with no switch. Sales in 2033: <b>$${a[a.length - 1][1].toFixed(1)}B</b> with the switch vs <b>$${b[b.length - 1][1].toFixed(1)}B</b> without.</p><div class="caption">Not a forecast. Ignores Medicare price setting under the Inflation Reduction Act (expected from 2029), later European patent expiry (2031), new indications, possible patent challenges to Qlex, and pricing differences between the versions.</div>`;
        api.mountChart(el.querySelector('.kmx'), {kind: 'line', title: 'Pembrolizumab franchise sales, toy scenarios ($ billions)', unit: '$B', series: [{name: 'With Qlex switch', short: 'with switch', points: a}, {name: 'No switch', short: 'no switch', points: b, color: 8, dashed: true}], annotations: [{x: 2028.9, label: 'biosimilars arrive'}], xTicks: yrs});
      }},

    {type: 'callout', variant: 'product', heading: 'Like migrating users to v2 before v1 is commoditized', html: `<p>Qlex is a classic migration play: ship a version that is genuinely better for users (one minute instead of thirty), move the installed base onto it while you still control both, and let competitors clone the old version. Software companies do this when they move customers from a self-hosted product to a cloud one before open-source alternatives mature.</p><p><strong>Where it breaks:</strong> the "user" choosing is an oncologist and the one paying is an insurer or Medicare, and both may prefer a cheaper biosimilar infusion. Regulators and courts decide whether the new version's patents hold. And a government price-setting law can reset the price of the underlying molecule regardless of which version the patient gets.</p>`},

    {type: 'story', title: 'Legacy', html: `
      <p>Keytruda's legacy is bigger than Merck's balance sheet. It turned a principle, releasing an immune brake, into routine care across dozens of cancers, often as the first treatment a patient receives. Melanoma, once "the place where all good drugs go to die," became a disease where specialists talk about curing a substantial share of patients with advanced disease.</p>
      <p>It also changed how drugs are developed. KEYNOTE-001 showed that a well-run, pre-specified [[adaptive design]] could compress years out of development when the effect is large. KEYNOTE-024 made upfront biomarker testing standard in lung cancer. The 2017 MSI-H approval opened the door to tissue-agnostic drugs defined by molecular features rather than organs.</p>
      <p>And it set a very high bar. After PD-1, companies spent billions trying to find the next checkpoint or the perfect combination partner. Most failed. The most successful drug in the world came from a small Dutch team, a British charity, a merger nobody made for its sake, and a company willing to bet big once the data arrived, then to shrink its first lung market on purpose so that it would win.</p>`},

    // ---------------- 15. Quiz
    {type: 'quiz', title: 'Check yourself', questions: [
      {q: 'What does pembrolizumab physically bind to?', options: ['PD-L1 on tumor cells', 'PD-1 on T cells', 'The mutated proteins inside cancer cells', 'CTLA-4 in lymph nodes'], answer: 1, explain: 'It binds PD-1 on T cells, blocking PD-L1 from docking. It never touches the cancer cell. (Other drugs, such as atezolizumab, block PD-L1 instead.)'},
      {q: 'Why do tumors with many mutations (like MSI-H tumors) tend to respond better?', options: ['Mutations make tumor cells absorb more drug', 'More mutations mean more neoantigens for T cells to recognize once the brake is released', 'Mutated tumors grow more slowly', 'Mutations remove PD-L1 from tumor cells'], answer: 1, explain: 'The drug only unmasks immunity that already exists. More altered proteins means more foreign-looking fragments, so more T cells are likely to have recognized the tumor already.'},
      {q: 'What made KEYNOTE-001 unusual?', options: ['It was the first randomized trial against placebo in melanoma', 'A first-in-human study grew through pre-specified expansion cohorts to 1,235 patients and supported approvals directly', 'It tested Keytruda only in healthy volunteers', 'It used overall survival as its primary endpoint'], answer: 1, explain: 'Nine amendments added melanoma and lung cohorts, randomized dose comparisons and PD-L1 training and validation sets, all inside one "phase 1" protocol.'},
      {q: 'A patient\'s biopsy has 300 tumor cells, of which 120 have PD-L1 membrane staining, plus 200 immune cells, of which 150 stain. What is the tumor proportion score?', options: ['54%', '40%', '75%', '27%'], answer: 1, explain: '120 ÷ 300 = 40%. Immune cells are not counted in the TPS. This patient would not have qualified for KEYNOTE-024 (≥50%).'},
      {q: 'Why did CheckMate-026 most likely fail where KEYNOTE-024 succeeded?', options: ['Nivolumab does not block PD-1', 'Its broad PD-L1 threshold diluted the effect, so the average benefit could not beat a decent comparator', 'It used a placebo instead of chemotherapy', 'It was stopped early for safety'], answer: 1, explain: 'Enrolling at ≥1% (primary analysis ≥5%) included many patients with little benefit. Merck restricted to ≥50%, where the effect was concentrated. Crossover and arm imbalances also played a part.'},
      {q: 'In 2014, BMS\'s broad design was...', options: ['Obviously wrong at the time', 'A reasonable bet with a bigger payoff if it worked, which failed because benefit was more concentrated in high PD-L1 tumors than it assumed', 'Required by the FDA', 'Identical to Merck\'s design'], answer: 1, explain: 'Hindsight makes it look reckless, but a broad label is worth much more. The error was betting on the average without enough confidence in how the effect was distributed.'},
      {q: 'Accelerated approval in September 2014 was based on...', options: ['Overall survival from a phase 3 trial', 'A durable 24% response rate in 89 patients from the phase 1 trial, with confirmatory trials required', 'Results from KEYNOTE-024', 'Data from BMS\'s nivolumab trials'], answer: 1, explain: 'Response rate was the surrogate. Randomized trials later confirmed a survival benefit, and regular approval followed in December 2015.'},
      {q: 'Which side effect pattern best fits Keytruda?', options: ['Hair loss and low blood counts in most patients', 'Autoimmune-like inflammation of organs such as the thyroid, lungs and colon, sometimes months after starting', 'Liver failure in about a quarter of patients', 'No side effects, because it targets only tumors'], answer: 1, explain: 'Immune-related adverse events: hypothyroidism in 8%, pneumonitis in 3.4%, colitis in 1.7% on the label, usually managed with steroids or hormone replacement.'},
      {q: 'What is the main strategic value of Keytruda Qlex to Merck?', options: ['It works on tumors that IV Keytruda cannot reach', 'A faster, more convenient version with separate patents (to 2043 in the US) that biosimilars of IV pembrolizumab cannot automatically copy', 'It avoids all immune side effects', 'It removes the need for PD-L1 testing'], answer: 1, explain: 'Same antibody, new route. Its value depends on how many patients switch before biosimilars of the IV version arrive around December 2028.'},
    ]},

    // ---------------- 16. Lessons
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'Select where the biology is strongest, then widen', text: 'KEYNOTE-024 won by enrolling only high PD-L1 tumors; KEYNOTE-189 and KEYNOTE-042 widened later. Know how your effect is distributed before you bet on the average.', links: ['gleevec', 'enhertu', 'epacadostat']},
      {title: 'The same mechanism can win or lose on trial design', text: 'Opdivo and Keytruda do the same thing to the same protein. One design choice in 2014 reordered a market worth tens of billions.', links: ['torcetrapib', 'aduhelm', 'leqembi']},
      {title: 'Orphaned assets can be crown jewels', text: 'The antibody passed through three owners and was reportedly marked for sale. Portfolio reviews after mergers systematically undervalue programs in unfashionable fields.', links: ['humira', 'sovaldi']},
      {title: 'Adaptive trials compress time when effects are large', text: 'KEYNOTE-001 turned a phase 1 into a registration package in about four years. It worked because the drug was safe, the effect big, and the statistics pre-specified.', links: ['comirnaty', 'kymriah']},
      {title: 'Releasing the immune system has a cost', text: 'Removing a brake can unleash autoimmunity in any organ. Immune drugs need different safety monitoring than cell-killing drugs.', links: ['tgn1412', 'kymriah']},
      {title: 'Plan the lifecycle before the cliff', text: 'Qlex, with patents to 2043, is Merck\'s attempt to carry the franchise past 2028. Whether patients switch in time is the multi-billion-dollar question.', links: ['humira', 'ozempic']},
    ]},

    // ---------------- 17. Sources
    {type: 'sources', title: 'Sources', items: [
      {text: 'Ishida Y, Agata Y, Shibahara K, Honjo T. Induced expression of PD-1, a novel member of the immunoglobulin gene superfamily, upon programmed cell death. EMBO J 1992.', url: 'https://europepmc.org/article/MED/1396582'},
      {text: 'Nishimura H et al. Development of lupus-like autoimmune diseases by disruption of the PD-1 gene. Immunity 1999.', url: 'https://europepmc.org/article/MED/10485649'},
      {text: 'Dong H, Zhu G, Tamada K, Chen L. B7-H1, a third member of the B7 family. Nat Med 1999.', url: 'https://europepmc.org/article/MED/10581077'},
      {text: 'Freeman GJ et al. Engagement of the PD-1 immunoinhibitory receptor by a novel B7 family member. J Exp Med 2000.', url: 'https://europepmc.org/article/MED/11015443'},
      {text: 'Iwai Y et al. Involvement of PD-L1 on tumor cells in the escape from host immune system and tumor immunotherapy by PD-L1 blockade. PNAS 2002.', url: 'https://europepmc.org/article/MED/12218188'},
      {text: 'Leach DR, Krummel MF, Allison JP. Enhancement of antitumor immunity by CTLA-4 blockade. Science 1996.', url: 'https://europepmc.org/article/MED/8596936'},
      {text: 'Hodi FS et al. Improved survival with ipilimumab in patients with metastatic melanoma. NEJM 2010.', url: 'https://europepmc.org/article/MED/20525992'},
      {text: 'The Nobel Assembly at Karolinska Institutet. Press release: The Nobel Prize in Physiology or Medicine 2018 (October 1, 2018).', url: 'https://www.nobelprize.org/prizes/medicine/2018/press-release/'},
      {text: 'Hamid O et al. Safety and tumor responses with lambrolizumab (anti-PD-1) in melanoma. NEJM 2013.', url: 'https://europepmc.org/article/MED/23724846'},
      {text: 'Robert C et al. Anti-programmed-death-receptor-1 treatment with pembrolizumab in ipilimumab-refractory advanced melanoma (KEYNOTE-001 dose comparison). Lancet 2014.', url: 'https://europepmc.org/article/MED/25034862'},
      {text: 'Garon EB et al. Pembrolizumab for the treatment of non-small-cell lung cancer (KEYNOTE-001). NEJM 2015.', url: 'https://europepmc.org/article/MED/25891174'},
      {text: 'Kang SP et al. Pembrolizumab KEYNOTE-001: an adaptive study leading to accelerated approval for two indications and a companion diagnostic. Ann Oncol 2017.', url: 'https://europepmc.org/article/PMC/PMC5452070'},
      {text: 'Shaverdian N et al. Previous radiotherapy and pembrolizumab in NSCLC: secondary analysis of KEYNOTE-001 (enrollment dates). Lancet Oncol 2017.', url: 'https://europepmc.org/article/MED/28551359'},
      {text: 'Chuk MK et al. FDA Approval Summary: Accelerated approval of pembrolizumab for second-line treatment of metastatic melanoma. Clin Cancer Res 2017.', url: 'https://europepmc.org/article/MED/28235882'},
      {text: 'Barone A et al. FDA Approval Summary: Pembrolizumab for unresectable or metastatic melanoma (regular approval, Dec 18, 2015). Clin Cancer Res 2017.', url: 'https://europepmc.org/article/MED/28179454'},
      {text: 'Hazarika M et al. U.S. FDA Approval Summary: Nivolumab for melanoma following progression on ipilimumab (Dec 22, 2014). Clin Cancer Res 2017.', url: 'https://europepmc.org/article/MED/28087644'},
      {text: 'Reck M et al. Pembrolizumab versus chemotherapy for PD-L1-positive non-small-cell lung cancer (KEYNOTE-024). NEJM 2016.', url: 'https://europepmc.org/article/MED/27718847'},
      {text: 'Reck M et al. Five-year outcomes with pembrolizumab versus chemotherapy for metastatic NSCLC with PD-L1 TPS ≥50%. J Clin Oncol 2021.', url: 'https://europepmc.org/article/MED/33872070'},
      {text: 'European Society for Medical Oncology press release via ScienceDaily: Pembrolizumab new option for first line treatment... (Oct 9, 2016), quotes from M. Reck and J. Vansteenkiste.', url: 'https://www.sciencedaily.com/releases/2016/10/161009085010.htm'},
      {text: 'Carbone DP et al. First-line nivolumab in stage IV or recurrent non-small-cell lung cancer (CheckMate 026). NEJM 2017.', url: 'https://europepmc.org/article/MED/28636851'},
      {text: 'Pai-Scherf L et al. FDA Approval Summary: Pembrolizumab for treatment of metastatic NSCLC: first-line therapy and beyond. Oncologist 2017.', url: 'https://europepmc.org/article/MED/28835513'},
      {text: 'Mok TSK et al. Pembrolizumab versus chemotherapy for PD-L1-expressing NSCLC (KEYNOTE-042). Lancet 2019.', url: 'https://europepmc.org/article/MED/30955977'},
      {text: 'Gandhi L et al. Pembrolizumab plus chemotherapy in metastatic non-small-cell lung cancer (KEYNOTE-189). NEJM 2018.', url: 'https://europepmc.org/article/MED/29658856'},
      {text: 'Dietel M et al. Real-world prevalence of PD-L1 expression in locally advanced or metastatic NSCLC: the EXPRESS study. Lung Cancer 2019.', url: 'https://europepmc.org/article/MED/31319978'},
      {text: 'Le DT et al. PD-1 blockade in tumors with mismatch-repair deficiency. NEJM 2015; and Le DT et al. Mismatch repair deficiency predicts response of solid tumors to PD-1 blockade. Science 2017.', url: 'https://europepmc.org/article/MED/26028255'},
      {text: 'Marcus L et al. FDA Approval Summary: Pembrolizumab for microsatellite instability-high solid tumors. Clin Cancer Res 2019.', url: 'https://europepmc.org/article/MED/30787022'},
      {text: 'Merck & Co. Form 10-K filings, 2013 to 2022 (breakthrough designation, rolling BLA, annual sales, BMS/Ono settlement terms).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000310158&type=10-K'},
      {text: 'Merck & Co. Form 10-K for 2025: Keytruda sales 2023–2025, 49% of sales, patent expiry table, biosimilar and IRA expectations, Keytruda Qlex.', url: 'https://www.sec.gov/Archives/edgar/data/310158/000031015826000063/mrk-20251231.htm'},
      {text: 'Merck. Fourth-quarter and full-year 2024 financial results (Keytruda $29.5B, +18%).', url: 'https://www.merck.com/news/merck-announces-fourth-quarter-and-full-year-2024-financial-results/'},
      {text: 'Bristol Myers Squibb Form 10-K filings for 2016, 2019, 2022, 2024 and 2025 (Opdivo sales; CheckMate-026 described as a significant setback).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000014272&type=10-K'},
      {text: 'KEYTRUDA (pembrolizumab) US prescribing information, and KEYTRUDA QLEX prescribing information. DailyMed, 2026.', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=9333c79b-d487-4538-a9f0-71b91a02b287'},
      {text: 'BioPharma Dive (2024). A decade of cancer immunotherapy: Keytruda, Opdivo and the drugs that changed oncology (source of the Baynes, Lonberg, Tawbi, Allison and Davis quotes).', url: 'https://www.biopharmadive.com/news/cancer-immunotherapy-decade-keytruda-opdivo-pd1-oncology/725774/'},
      {text: 'LifeArc (2019). LifeArc monetises Keytruda royalty interests; and LifeArc case study "Keytruda: the best-selling drug that nearly wasn\'t".', url: 'https://www.lifearc.org/2019/lifearc-monetises-keytruda-royalty-interests-20052019/'},
      {text: 'US Patent 8,354,509, Antibodies to human programmed death receptor PD-1 (inventors Carven, van Eenennaam, Dulos; assigned to N.V. Organon), describing h409A11.', url: 'https://patents.google.com/patent/US8354509B2/en'},
      {text: 'Shaywitz D. The startling history behind Merck\'s new cancer blockbuster. Forbes, July 26, 2017 (Organon origins; the program\'s low internal ranking and its champions, including Andrea van Elsas).', url: 'https://www.forbes.com/sites/davidshaywitz/2017/07/26/the-startling-history-behind-mercks-new-cancer-blockbuster/'},
      {text: 'IPO Education Foundation. Gregory Carven: Inventor, KEYTRUDA (Organon Cambridge and Oss team; ownership changes 2007 and 2009).', url: 'https://www.ipoef.org/gregory-carven-inventor-keytruda/'},
      {text: 'Cancer Research Institute. Keytruda receives 40th FDA approval (June 17, 2024).', url: 'https://www.cancerresearch.org/blog/keytruda-receives-40th-fda-approval'},
    ]},
  ],
});
