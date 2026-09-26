// Epacadostat (Incyte, with Merck's Keytruda): the IDO1 inhibitor whose phase 3 failure in 2018 took down a whole field.
registerCase({
  id: 'epacadostat', kind: 'failure',
  brand: 'Epacadostat', generic: 'epacadostat (INCB024360)', company: 'Incyte, with Merck & Co. (and Bristol-Myers Squibb, AstraZeneca)',
  tagline: 'A pill meant to cut off a tumor\'s supply of immune-silencing chemistry looked like the perfect partner for [[checkpoint inhibitor|checkpoint inhibitors]]. Then one [[randomized controlled trial|randomized trial]] showed it added nothing, and a billion-dollar gold rush ended in four weeks.',
  chips: [['Disease', 'Advanced melanoma, then lung, kidney, bladder, head and neck'], ['Modality', '[[small molecule]] (oral pill)'], ['Target', '[[IDO1]]'], ['Outcome', 'Phase 3 failure, April 2018']],
  readingTime: 40,
  stats: [
    {v: '706', l: 'Patients randomized in ECHO-301, the phase 3 melanoma trial', n: 'Long et al., Lancet Oncology 2019'},
    {v: 'HR 1.00', l: '[[hazard ratio]] for progression: no difference at all between the arms', n: 'Median PFS 4.7 vs 4.9 months'},
    {v: '55% vs 33%', l: 'The cross-trial comparison that misled: combination response rate in a single-arm study vs Keytruda alone in a different trial', n: 'ECHO-202 (2017) vs KEYNOTE-006 (2015)'},
    {v: '$800M', l: 'Upfront cash BMS paid in 2015 for Flexus and its IDO1 inhibitor, which had not yet been tested in any person', n: 'BMS press release, Feb 2015'},
    {v: '~22%', l: 'Fall in Incyte\'s share price in early trading the morning the result came out', n: '$83.07 close to $65.00, 6 April 2018'},
    {v: '8', l: 'Other epacadostat phase 3 trials halted or downgraded within four weeks', n: 'Plus a ninth, with AstraZeneca, never started'},
  ],
  emblem: `<svg viewBox="0 0 300 300" role="img" aria-label="An enzyme shaped like a mouth, eating tryptophan beads, with a blue pill wedged in it">
    <circle cx="150" cy="150" r="132" class="il-2s"/>
    <circle cx="72" cy="78" r="30" class="il-3"/><circle cx="72" cy="78" r="18" class="il-3s"/>
    <path d="M128 168 L180 138 A60 60 0 1 0 180 198 Z" class="il-2"/>
    <circle cx="118" cy="138" r="7" class="il-paper"/>
    <rect x="150" y="154" width="54" height="28" rx="14" class="il-1"/>
    <path d="M177 154 V182" class="il-line" style="stroke: var(--il-paper)"/>
    <circle cx="222" cy="168" r="10" class="il-4"/><circle cx="248" cy="168" r="10" class="il-4"/><circle cx="236" cy="142" r="10" class="il-4"/>
    <circle cx="96" cy="236" r="8" class="il-5"/><circle cx="120" cy="250" r="8" class="il-5"/><circle cx="72" cy="222" r="8" class="il-5"/>
  </svg>`,
  facts: {start: null, firstHuman: 2010, approval: null, end: 2018, peakSalesB: null, pivotalN: 706,
          area: 'oncology', modality: 'small molecule', target: 'IDO1'},
  themes: ['biomarkers', 'competition', 'dealmaking', 'biology-surprise'],
  glossary: {
    'IDO1': 'Indoleamine 2,3-dioxygenase 1: an enzyme that breaks down the amino acid tryptophan into kynurenine. Immune cells and many tumors switch it on when inflamed. Epacadostat was built to block it.',
    'IDO': 'Short for indoleamine 2,3-dioxygenase, the tryptophan-destroying enzyme. The main form in tumors is IDO1.',
    'tryptophan': 'An essential amino acid: the body cannot make it, so it comes from food. T cells need it to multiply.',
    'kynurenine': 'The first stable product when IDO1 or TDO breaks down tryptophan. It acts as a signal that dampens immune attack. Blood kynurenine levels were used to check whether epacadostat was working.',
    'amino acid': 'One of the 20 building blocks of proteins. Cells need a steady supply to build new proteins and divide.',
    'PD-1': 'Programd cell death protein 1: an off switch on the surface of T cells. When it is triggered, the T cell stands down. Keytruda blocks it.',
    'PD-L1': 'The partner molecule that flips the PD-1 off switch. Tumors often display it to shut down T cells that come to attack.',
    'checkpoint inhibitor': 'A drug, usually an antibody, that blocks an immune brake such as PD-1 or CTLA-4, releasing T cells to attack cancer. Keytruda and Opdivo are the best known.',
    'immunotherapy': 'Treatment that works by helping the patient\'s own immune system fight the disease, rather than attacking the cancer directly.',
    'melanoma': 'A cancer of the pigment cells in the skin. When it spreads (metastatic melanoma) it was, until checkpoint inhibitors, one of the deadliest cancers.',
    'tumor microenvironment': 'Everything around the cancer cells inside a tumor: blood vessels, immune cells, connective tissue and the chemical signals they exchange.',
    'regulatory T cell': 'A "peacekeeper" T cell that calms other immune cells to prevent autoimmunity. Tumors recruit them to protect themselves.',
    'dendritic cell': 'An immune cell that collects fragments of invaders or tumors and shows them to T cells to start an attack. Some dendritic cells make IDO.',
    'interferon-gamma': 'An alarm cytokine released by active T cells. It rallies the immune system, but it also makes nearby cells switch on IDO1 and PD-L1: built-in negative feedback.',
    'TDO': 'Tryptophan 2,3-dioxygenase: a different enzyme that also breaks tryptophan into kynurenine. Some tumors use it. Epacadostat does not block it.',
    'GCN2': 'A stress-sensing kinase inside cells that detects a shortage of amino acids. In T cells starved of tryptophan it halts division.',
    'aryl hydrocarbon receptor': 'A sensor protein inside cells that kynurenine can switch on. In immune cells its activation pushes toward suppression.',
    'single-arm trial': 'A study where every patient gets the treatment and there is no comparison group. It can show that something happens, not what caused it.',
    'historical control': 'Using results from an earlier, separate study as the comparison for a new one. Cheap and fast, and often misleading because the patients differ.',
    'cross-trial comparison': 'Comparing numbers from two different trials as if they were one experiment. Differences in patients, timing and measurement can swamp any drug effect.',
    'selection bias': 'When the patients who enter a study differ systematically from the wider population (healthier, earlier disease, chosen by experienced centers), making results look better or worse than they really are.',
    'pharmacodynamics': 'What a drug does to the body: whether it hits its target and changes the biology. Often shortened to PD (not to be confused with PD-1).',
    'pharmacokinetics': 'What the body does to a drug: how much gets absorbed, where it goes and how fast it is cleared. Often shortened to PK.',
    'target engagement': 'Direct evidence that a drug is actually binding and blocking its target in patients, at the dose used, in the tissue that matters.',
    'proof of mechanism': 'Evidence in patients that a drug changes the biology it was designed to change, before anyone asks whether it helps.',
    'IC50': 'The drug concentration that blocks half of a target\'s activity. Lower means more potent. Blocking 90% or more usually needs several times the IC50.',
    'RECIST': 'Response Evaluation Criteria in Solid Tumors: the standard rulebook for measuring tumor shrinkage on scans. A "response" means at least 30% shrinkage.',
    'treatment-naive': 'Patients who have not yet had any drug treatment for their advanced disease. They usually respond better than patients whose cancer has already beaten one therapy.',
    'Fast Track designation': 'An FDA status for drugs addressing serious unmet needs. It allows more frequent meetings with the agency and rolling submission. It says nothing about whether the drug works.',
    'factorial design': 'A trial that tests each drug alone and together (A, B, A+B, neither or standard care) so the contribution of each can be separated.',
    'randomized phase 2': 'A mid-sized trial (often 100–200 patients) that randomizes patients to the new combination or a control, giving an honest early read before committing to phase 3.',
    'clinical trial collaboration': 'A deal where two companies test their drugs together; usually each supplies its own drug and they share data, without buying rights to each other\'s product.',
    'herding': 'Many investors or companies copying the same bet because others are making it, so a single hidden flaw hits all of them at once.',
    'market capitalization': 'The total value of a company\'s shares on the stock market: share price times number of shares.',
    'ipilimumab': 'Yervoy (BMS), the first checkpoint inhibitor, approved in 2011. It blocks a brake called CTLA-4.',
    'nivolumab': 'Opdivo (BMS), a PD-1 blocking antibody and Keytruda\'s main rival.',
    'indoximod': 'NewLink Genetics\' IDO-pathway drug (a form of 1-methyl-tryptophan). It does not block the IDO1 enzyme directly and its mechanism is still debated.',
    'stable disease': 'On scans, the tumor neither shrank enough to count as a response nor grew enough to count as progression.',
    'allogeneic': 'From a genetically different individual of the same species. A fetus is partly allogeneic to its mother because half its genes come from the father.',
    'regression to the mean': 'The tendency for an extreme first measurement to be followed by a less extreme one, simply because luck played a part in the first.',
    'statistical power': 'The chance a trial will detect a real effect of a given size. Small trials have low power and can miss real effects or overstate lucky ones.',
    'trough': 'The lowest drug level in the blood, just before the next dose.',
  },
  sections: [
    // ---------------------------------------------------------------- COLD OPEN
    {type: 'story', kicker: 'Cold open', title: 'Friday, 6 April 2018', tocTitle: 'Cold open', html: `
<p>Before the stock market opened that Friday, Incyte and Merck put out a short joint statement. An independent [[data monitoring committee]] had looked at the unblinded results of a trial called ECHO-301. It was testing whether adding Incyte's pill, epacadostat, to Merck's blockbuster [[immunotherapy]] Keytruda helped people with advanced [[melanoma]]. The committee's verdict was blunt: the combination had not beaten Keytruda alone, and the second goal, longer survival, was not expected to be met either. The trial was being stopped.</p>
<p>By 9:37 a.m., Incyte's shares had fallen from $83.07 to $65.00, a drop of nearly 22%. Billions of dollars of market value were gone before lunch. Shares of NewLink Genetics, a small Iowa company whose drug worked on the same pathway, fell by about 43% that day. Neither company had a safety problem. The pill was well tolerated. It simply did nothing that anyone could measure.</p>
<p>The reason this one trial mattered so much is that epacadostat was not a single bet. It was the leading edge of a whole industry thesis. In the three years before that morning, big drugmakers had signed up to test inhibitors of an enzyme called [[IDO1]] alongside every major [[checkpoint inhibitor]]. Bristol-Myers Squibb had paid $800 million up front for a company whose IDO1 inhibitor had not yet been given to a single person. Incyte alone had eight more [[phase 3]] trials of epacadostat running or starting, in lung, kidney, bladder, and head and neck cancer, with three different partners. Within four weeks almost all of it would be halted, shrunk or canceled.</p>
<p>Behind the tickers were people: 706 patients with melanoma in ECHO-301, half of them swallowing a pill twice a day that turned out to add nothing, and hundreds more just starting in the follow-on trials.</p>
<p>Most drugs fail. What makes this failure worth your time is that, in hindsight, it was visible in how the evidence had been assembled: early results from studies with no comparison group, measured against numbers from other trials in other patients. Experienced people at several of the best-run companies in the world read that evidence the same way and ran in the same direction at once. This case is about how that happens, and how to spot it.</p>`},

    // ---------------------------------------------------------------- BACKGROUND FROM ZERO
    {type: 'story', kicker: 'Background from zero', title: 'The immune system, its brakes, and the patients left behind', tocTitle: 'Immune brakes', html: `
<p>Your immune system's soldiers are [[T cell|T cells]]. Each recognizes one molecular shape; when it finds a cell displaying that shape, such as a mutated protein from a cancer cell, it multiplies into an army and kills. Cancers are full of mutations, so in principle T cells should destroy them.</p>
<p>They often don't, partly because the immune system has brakes. Without brakes it attacks the body's own tissues, which is what autoimmune disease is. So T cells carry off switches, called [[immune checkpoint|immune checkpoints]]. The most important in cancer is [[PD-1]]. When PD-1 on a T cell meets its partner [[PD-L1]] on another cell, the T cell stands down. Many tumors cover themselves in PD-L1. They are not invisible; they are flashing a badge that says "friendly, move along".</p>
<p>A [[checkpoint inhibitor]] is an [[antibody]] that jams one of those brakes. Keytruda (pembrolizumab, from Merck) blocks PD-1, so the tumor's badge no longer works. The FDA approved it for advanced melanoma in September 2014, and it went on to become the best-selling drug in the world (see the <a href="case.html?id=keytruda">Keytruda case</a>). For some patients with melanoma it produced tumor shrinkage lasting years.</p>
<p>But only for some. In KEYNOTE-006, the 834-patient trial that established Keytruda in melanoma, about a third of patients (33.7% and 32.9% on the two dose schedules) had a [[response rate|response]], meaning their tumors shrank by at least 30% on scans. The other two thirds did not. That gap, between durable remissions for some and nothing for most, became the defining problem of cancer drug development in the mid-2010s.</p>
<h3>The scramble for combinations</h3>
<p>The obvious idea was to add something. If PD-1 is one brake, perhaps non-responders' tumors were using a second brake as well; release both and more patients might respond. The commercial logic was overwhelming: Merck, Bristol-Myers Squibb (with Opdivo), AstraZeneca and Roche all wanted to own the "second drug" before their rivals did.</p>
<p>A landscape analysis by the Cancer Research Institute, published at the start of 2018, counted 3,042 active clinical trials of immuno-oncology agents and warned that a rapidly rising number of PD-1 combination studies were testing the same combinations and "following inefficient patterns". Of all the candidate second brakes, the most promising was not a receptor on a cell surface. It was an enzyme that ate an amino acid.</p>`},

    {type: 'figure', title: 'Inside a tumor: who is there, and who is starving whom', intro: 'A tumor is not just cancer cells. Hover or tap each part to meet the cast of this story.',
      svg: `<svg viewBox="0 0 900 420" role="img" aria-label="Diagram of a tumor microenvironment">
        <g data-part="vessel"><rect x="18" y="18" width="78" height="384" rx="36" class="il-7s"/><path d="M57 40 V380" class="st-7 flow" stroke-width="3" fill="none"/>
          <circle cx="45" cy="110" r="7" class="il-4"/><circle cx="68" cy="190" r="7" class="il-4"/><circle cx="45" cy="280" r="7" class="il-4"/>
          <text x="57" y="415" text-anchor="middle" class="il-small">blood vessel</text></g>
        <g data-part="tumor">
          <circle cx="220" cy="130" r="62" class="il-2s"/><circle cx="220" cy="130" r="62" class="il-none st-2" stroke-width="2"/>
          <circle cx="330" cy="200" r="66" class="il-2s"/><circle cx="330" cy="200" r="66" class="il-none st-2" stroke-width="2"/>
          <circle cx="215" cy="275" r="60" class="il-2s"/><circle cx="215" cy="275" r="60" class="il-none st-2" stroke-width="2"/>
          <circle cx="330" cy="335" r="52" class="il-2s"/><circle cx="330" cy="335" r="52" class="il-none st-2" stroke-width="2"/>
          <text x="150" y="50" class="il-title">Tumor cells</text></g>
        <g data-part="ido">
          <path d="M325 200 L349 186 A28 28 0 1 0 349 214 Z" class="il-2"/><circle cx="320" cy="189" r="3.5" class="il-paper"/>
          <path d="M210 275 L231 263 A24 24 0 1 0 231 287 Z" class="il-2"/><circle cx="206" cy="266" r="3" class="il-paper"/>
          <text x="330" y="245" text-anchor="middle" class="il-text">IDO1</text></g>
        <g data-part="pdl1"><rect x="392" y="182" width="12" height="34" rx="4" class="il-7"/><rect x="270" y="112" width="12" height="30" rx="4" class="il-7"/><rect x="376" y="318" width="12" height="30" rx="4" class="il-7"/>
          <text x="410" y="176" class="il-text-2">PD-L1</text></g>
        <g data-part="trp"><circle cx="450" cy="104" r="7" class="il-4"/><circle cx="486" cy="126" r="7" class="il-4"/><circle cx="455" cy="146" r="7" class="il-4"/><circle cx="130" cy="200" r="7" class="il-4"/>
          <text x="470" y="84" text-anchor="middle" class="il-text-2">tryptophan</text></g>
        <g data-part="kyn"><circle cx="455" cy="250" r="7" class="il-5"/><circle cx="490" cy="272" r="7" class="il-5"/><circle cx="460" cy="295" r="7" class="il-5"/><circle cx="505" cy="235" r="7" class="il-5"/>
          <text x="480" y="325" text-anchor="middle" class="il-text-2">kynurenine</text></g>
        <g data-part="tcell"><circle cx="630" cy="200" r="64" class="il-3s"/><circle cx="630" cy="200" r="64" class="il-none st-3" stroke-width="2.5"/><circle cx="640" cy="205" r="26" class="il-3" opacity=".55"/>
          <rect x="560" y="183" width="12" height="34" rx="4" class="il-3"/><text x="630" y="120" text-anchor="middle" class="il-title">Killer T cell</text><text x="554" y="178" text-anchor="end" class="il-small">PD-1</text></g>
        <g data-part="dc"><g transform="translate(0 -34)"><path d="M600 340 l22 -30 l14 28 l32 -14 l-10 30 l30 12 l-30 14 l8 30 l-32 -12 l-16 26 l-12 -28 l-32 8 l14 -26 l-26 -18 z" class="il-4s st-4" stroke-width="2"/></g>
          <text x="700" y="360" class="il-text-2">dendritic cell</text></g>
        <g data-part="treg"><circle cx="810" cy="236" r="40" class="il-8s"/><circle cx="810" cy="236" r="40" class="il-none il-line2"/><text x="810" y="241" text-anchor="middle" class="il-text">Treg</text><text x="810" y="296" text-anchor="middle" class="il-text-2">regulatory T cell</text></g>
        <g data-part="brake"><rect x="720" y="60" width="160" height="96" rx="14" class="il-paper il-line"/><text x="800" y="86" text-anchor="middle" class="il-text">Two brakes</text>
          <text x="800" y="110" text-anchor="middle" class="il-small">PD-1 / PD-L1 (Keytruda)</text><text x="800" y="130" text-anchor="middle" class="il-small">IDO1 / tryptophan</text><text x="800" y="146" text-anchor="middle" class="il-small">(epacadostat)</text></g>
      </svg>`,
      hotspots: {
        vessel: {title: 'Blood vessel', text: 'Blood brings [[tryptophan]] from your diet into the tumor. It is an essential [[amino acid]]: the body cannot make it, so the local supply matters.'},
        tumor: {title: 'Tumor cells', text: 'Cancer cells carry mutated proteins that T cells can in principle recognize. To survive, a tumor must stop the T cells that find it.'},
        ido: {title: 'IDO1, the tryptophan-eating enzyme', text: '[[IDO1]] is switched on inside tumor cells and some immune cells, often in response to [[interferon-gamma]] released by attacking T cells. It destroys tryptophan and produces [[kynurenine]].'},
        pdl1: {title: 'PD-L1, the "friendly" badge', text: '[[PD-L1]] triggers the [[PD-1]] off switch on T cells. Keytruda blocks this handshake.'},
        trp: {title: 'Tryptophan, T-cell fuel', text: 'A dividing T cell needs a steady supply of tryptophan to build proteins. When local levels crash, a stress sensor called [[GCN2]] halts division.'},
        kyn: {title: 'Kynurenine, the suppressive by-product', text: 'Kynurenine is not just waste. It can switch on the [[aryl hydrocarbon receptor]] in immune cells and push them toward tolerance. So IDO works twice: it starves attackers and leaves a signal that calms them.'},
        tcell: {title: 'Killer T cell', text: 'The cell every immunotherapy is trying to unleash. It carries [[PD-1]] on its surface. Starved of tryptophan and bathed in kynurenine, it stalls.'},
        dc: {title: 'Dendritic cell', text: 'The immune system\'s scout. Some [[dendritic cell|dendritic cells]] make IDO, which is how David Munn and Andrew Mellor first framed IDO as an immune regulator.'},
        treg: {title: 'Regulatory T cell', text: 'The peacekeepers. IDO activity and kynurenine help convert ordinary T cells into [[regulatory T cell|regulatory T cells]], adding another layer of protection for the tumor.'},
        brake: {title: 'The combination thesis', text: 'Keytruda releases one brake (PD-1). The idea behind epacadostat was to release a second, independent brake at the same time, so more patients would respond.'},
      },
      caption: 'Schematic, not to scale. Colors: tumor and its targets orange and red, immune cells aqua, small molecules yellow (tryptophan) and pink (kynurenine).'},

    // ---------------------------------------------------------------- KEY INSIGHT
    {type: 'story', kicker: 'The key insight', title: 'A pregnancy puzzle, solved with an amino acid', tocTitle: 'The key insight', html: `
<p>The story of IDO in cancer starts with a question about pregnancy. In 1953 the British biologist Peter Medawar pointed out something that should not work. Half of a fetus's genes come from the father, so to the mother's immune system the fetus is partly foreign tissue, as foreign as a transplanted kidney from a stranger. Transplanted organs are rejected within days without drugs. Yet mothers carry [[allogeneic]] fetuses to term all the time. Why doesn't the immune system attack?</p>
<p>The enzyme at the center of this case had been known since 1967, when Shozo Yamamoto and Osamu Hayaishi in Japan described it in rabbit intestine, and for decades it interested mainly biochemists. In the late 1990s, David Munn and Andrew Mellor at the Medical College of Georgia in Augusta connected it to Medawar's puzzle. Cells in the placenta make a lot of [[IDO]], and T cells cannot divide without [[tryptophan]]. So what happens if you block IDO in a pregnant mouse?</p>
<p>Their answer, published in <i>Science</i> in August 1998, was dramatic. When pregnant mice were treated with an IDO inhibitor (a chemical called 1-methyl-tryptophan), T cells rapidly rejected every fetus that carried a genetically different father's genes. Fetuses from genetically identical parents were spared. The conclusion: by burning up tryptophan, the placenta was actively suppressing the mother's T cells and defending the pregnancy. IDO was not just a metabolic enzyme; it was an immune shield.</p>
<blockquote class="pull">By catabolizing tryptophan, the mammalian conceptus suppresses T cell activity and defends itself against rejection.<cite>Munn, Mellor and colleagues, Science, 1998</cite></blockquote>
<p>If a fetus could hide from the immune system this way, could a tumor? In 2003, Benoît Van den Eynde's group at the Ludwig Institute in Brussels reported in <i>Nature Medicine</i> that most human tumors they examined expressed IDO. In mice, tumors engineered to make IDO escaped T cells that should have killed them, and an IDO inhibitor partly reversed the effect. Munn and Mellor's group then showed in 2005 how the starvation works at the molecular level: a stress sensor inside T cells called [[GCN2]] detects the shortage of tryptophan and halts division. In 2011 a German group showed that [[kynurenine]], the product of tryptophan breakdown, is itself an active signal that switches on the [[aryl hydrocarbon receptor]] and suppresses immune attack (in that paper, the kynurenine came from a related enzyme, [[TDO]]).</p>
<p>By the early 2010s the story was elegant: tumors use IDO to starve and sedate the T cells that come for them, so block IDO and you restore the fuel and remove the sedative. And an [[enzyme]] with a pocket where tryptophan binds is exactly what a cheap [[small molecule]] pill can block.</p>
<h3>A clue that pointed the other way</h3>
<p>One more paper matters, because in hindsight it was a warning. In 2013 Stefani Spranger and Thomas Gajewski at the University of Chicago reported that IDO, PD-L1 and [[regulatory T cell|regulatory T cells]] were all found together in melanomas that were already full of killer T cells, and that in mice their appearance depended on those T cells being present. The T cells' own alarm signal, [[interferon-gamma]], was switching IDO on. Their interpretation: these brakes are negative feedback that follows an immune attack, rather than something the cancer orchestrates first.</p>
<p>The awkward consequence: if IDO is high mainly in tumors already under immune attack, IDO-high tumors are the ones most likely to respond to Keytruda anyway. IDO could be a sign of a tumor that will respond without being the reason others do not. (Gajewski later co-authored the ECHO-301 paper.)</p>`},

    {type: 'mechanism', title: 'How IDO was supposed to work, and how epacadostat was supposed to fix it', intro: 'Step through the thesis that launched dozens of trials. The last step shows why it may not have played out.',
      svg: `<svg viewBox="0 0 760 440" role="img" aria-label="Mechanism of IDO1 and epacadostat" class="epmech"><style>.epmech .il-text{font-size:19px}.epmech .il-text-2{font-size:18px}.epmech .il-small{font-size:17px}.epmech .il-title{font-size:21px}</style>
        <g data-part="tumor">
          <ellipse cx="190" cy="250" rx="165" ry="160" class="il-2s"/>
          <ellipse cx="190" cy="250" rx="165" ry="160" class="il-none il-line2"/>
          <ellipse cx="190" cy="250" rx="157" ry="152" class="il-none st-2" stroke-width="1.5"/>
          <ellipse cx="130" cy="290" rx="48" ry="36" class="il-2s il-line"/>
          <text x="190" y="124" text-anchor="middle" class="il-title">Tumor cell</text>
          <text x="130" y="295" text-anchor="middle" class="il-small">nucleus</text></g>
        <g data-part="ido"><path d="M250 250 L284.6 230 A40 40 0 1 0 284.6 270 Z" class="il-2"/><circle cx="244" cy="231" r="4.5" class="il-paper"/>
          <text x="236" y="316" text-anchor="middle" class="il-text">IDO1 enzyme</text></g>
        <g data-part="tdo"><path d="M100 224 L119 213 A22 22 0 1 0 119 235 Z" class="il-7"/><circle cx="96" cy="215" r="3" class="il-paper"/>
          <text x="58" y="164" class="il-small">TDO: a second</text><text x="58" y="186" class="il-small">tryptophan eater</text></g>
        <g data-part="pdl1"><rect x="347" y="230" width="16" height="40" rx="5" class="il-7"/><text x="372" y="298" text-anchor="middle" class="il-text-2">PD-L1</text></g>
        <g data-part="ifn"><path d="M572 178 C 520 104, 420 104, 364 172" class="st-4 flow il-none" stroke-width="3"/><path d="M356 164 L362 180 L374 168 Z" class="il-4"/>
          <text x="466" y="98" text-anchor="middle" class="il-text-2">interferon-γ (alarm signal)</text></g>
        <g data-part="trpFull"><circle cx="395" cy="205" r="7" class="il-4"/><circle cx="432" cy="228" r="7" class="il-4"/><circle cx="470" cy="200" r="7" class="il-4"/><circle cx="520" cy="195" r="7" class="il-4"/>
          <circle cx="400" cy="262" r="7" class="il-4"/><circle cx="440" cy="268" r="7" class="il-4"/><circle cx="476" cy="276" r="7" class="il-4"/>
          <text x="450" y="176" text-anchor="middle" class="il-text-2">tryptophan (T-cell fuel)</text></g>
        <g data-part="trpLow"><circle cx="432" cy="228" r="7" class="il-4"/><circle cx="440" cy="268" r="7" class="il-4"/>
          <text x="450" y="176" text-anchor="middle" class="il-text-2">tryptophan running out</text></g>
        <g data-part="kyn"><circle cx="410" cy="334" r="7" class="il-5"/><circle cx="446" cy="352" r="7" class="il-5"/><circle cx="482" cy="328" r="7" class="il-5"/><circle cx="516" cy="350" r="7" class="il-5"/><circle cx="458" cy="380" r="7" class="il-5"/><circle cx="500" cy="384" r="7" class="il-5"/>
          <text x="462" y="418" text-anchor="middle" class="il-text-2">kynurenine (suppressive by-product)</text></g>
        <g data-part="tcell"><circle cx="640" cy="250" r="85" class="il-3s"/><circle cx="640" cy="250" r="85" class="il-none st-3" stroke-width="2.5"/>
          <rect x="547" y="230" width="16" height="40" rx="5" class="il-3"/><text x="540" y="222" text-anchor="end" class="il-small">PD-1</text>
          <text x="648" y="252" text-anchor="middle" class="il-title">Killer T cell</text></g>
        <g data-part="starve"><circle cx="640" cy="250" r="97" class="il-none st-7 il-dash" stroke-width="2"/>
          <text x="648" y="276" text-anchor="middle" class="il-text-2">stalled: starved</text><text x="648" y="294" text-anchor="middle" class="il-text-2">and sedated</text></g>
        <g data-part="treg"><circle cx="690" cy="92" r="28" class="il-8s"/><circle cx="690" cy="92" r="28" class="il-none il-line2"/><text x="690" y="98" text-anchor="middle" class="il-small">Treg</text>
          <text x="690" y="48" text-anchor="middle" class="il-text-2">more peacekeepers</text></g>
        <g data-part="keytruda"><path d="M487 250 H527 M527 250 L545 236 M527 250 L545 264" class="st-1 il-none" stroke-width="7" stroke-linecap="round"/>
          <text x="505" y="304" text-anchor="middle" class="il-text">Keytruda</text></g>
        <g data-part="epac"><rect x="71" y="49" width="48" height="22" rx="11" class="il-1"/><path d="M95 49 V71" class="il-line" style="stroke: var(--il-paper)"/></g>
        <g data-part="eLabel"><text x="130" y="42" class="il-text">epacadostat (pill)</text></g>
        <g data-part="eLabel2"><text x="252" y="196" text-anchor="middle" class="il-text">epacadostat plugs IDO1</text></g>
        <g data-part="attack"><path d="M520 372 L376 372" class="st-3 il-none flow" stroke-width="4"/><path d="M366 372 L382 362 L382 382 Z" class="il-3"/>
          <text x="446" y="360" text-anchor="middle" class="il-text">attack</text></g>
      </svg>`,
      steps: [
        {title: 'A T cell finds a tumor', text: 'A killer [[T cell]] has recognized the tumor. The tissue fluid between them holds plenty of [[tryptophan]], the amino acid the T cell needs to multiply. The tumor\'s [[IDO1]] enzyme is present but quiet.',
          show: ['tumor', 'tcell', 'trpFull', 'pdl1'], dim: ['ido']},
        {title: 'The alarm switches IDO1 on', text: 'The attacking T cell releases [[interferon-gamma]], an alarm signal. One of its effects is to make nearby cells switch on IDO1 and display [[PD-L1]]. The attack itself triggers the defenses.',
          show: ['tumor', 'tcell', 'trpFull', 'pdl1', 'ido', 'ifn'], focus: ['ido', 'pdl1']},
        {title: 'IDO1 eats the tryptophan', text: 'IDO1 breaks tryptophan down. Local levels fall. Inside the T cell a stress sensor, [[GCN2]], notices the shortage and halts division: the army cannot grow.',
          show: ['tumor', 'tcell', 'trpLow', 'pdl1', 'ido'], focus: ['ido'], pulse: ['trpLow']},
        {title: 'Kynurenine piles up and sedates', text: 'The by-product, [[kynurenine]], accumulates. It acts as a signal that dampens T cells and helps create [[regulatory T cell|regulatory T cells]]. Starved and sedated, the killer T cell stalls. Meanwhile PD-L1 on the tumor presses its [[PD-1]] off switch.',
          show: ['tumor', 'tcell', 'trpLow', 'pdl1', 'ido', 'kyn', 'starve', 'treg'], pulse: ['kyn'], focus: ['starve']},
        {title: 'Keytruda releases one brake', text: 'Keytruda, an [[antibody]], sits on PD-1 so PD-L1 cannot trigger it. In about a third of patients with melanoma that is enough for tumors to shrink. In the rest, perhaps something else, like IDO, is still holding the T cells back.',
          show: ['tumor', 'tcell', 'trpLow', 'pdl1', 'ido', 'kyn', 'starve', 'treg', 'keytruda'], focus: ['keytruda']},
        {title: 'Epacadostat plugs IDO1', text: 'Epacadostat is a [[small molecule]] that fits into IDO1\'s active pocket and blocks it, with little effect on the related enzymes IDO2 and [[TDO]]. Tryptophan should recover and kynurenine should fall. Blood kynurenine became the way to check the drug was working.',
          show: ['tumor', 'tcell', 'trpFull', 'pdl1', 'ido', 'keytruda', 'epac', 'eLabel2'], dim: ['kyn', 'treg'], move: {epac: 'translate(187px, 190px)'}, focus: ['epac']},
        {title: 'The hope: two brakes off', text: 'With PD-1 blocked and IDO1 plugged, the T cell refuels, multiplies and attacks. That was the combination thesis, and it is what the early single-arm studies seemed to show.',
          show: ['tumor', 'tcell', 'trpFull', 'pdl1', 'ido', 'keytruda', 'epac', 'attack'], move: {epac: 'translate(187px, 190px)', tcell: 'translate(-26px, 0px)', keytruda: 'translate(-26px, 0px)'}, pulse: ['attack']},
        {title: 'What the randomized trial said', text: 'In ECHO-301, adding epacadostat to Keytruda changed nothing measurable. Candidate reasons: the dose may not have fully blocked IDO1 inside tumors; tumors can make kynurenine through [[TDO]] instead; IDO may be a marker of an immune attack rather than the thing stopping it; and epacadostat may even leave IDO1 able to signal in other ways. The last three are hypotheses, not settled findings.',
          show: ['tumor', 'tcell', 'trpLow', 'pdl1', 'ido', 'keytruda', 'epac', 'tdo', 'kyn', 'starve'], dim: ['kyn'], move: {epac: 'translate(187px, 190px)'}, focus: ['tdo'], pulse: ['tdo']},
      ]},

    {type: 'callout', variant: 'product', heading: 'IDO is a resource-exhaustion attack', html: `
<p>If you have debugged a service that fell over because a noisy neighbor ate all the memory on the host, you already understand IDO. The tumor does not attack the T cell directly; it exhausts a shared resource the T cell needs (tryptophan) and leaves junk that slows everything down (kynurenine). The obvious fix is a quota on the noisy process: block the enzyme.</p>
<p><b>Where the analogy breaks:</b> in a data center you can watch resource usage per host in real time. In a patient you can measure kynurenine in blood, but the "host" that matters is the inside of the tumor, which you can only sample with a biopsy, once, in one spot. A quota that works on the dashboard (blood) may not be enforced where the damage happens. That gap is at the heart of this case.</p>`},

    // ---------------------------------------------------------------- TIMELINE
    {type: 'timeline', title: 'Timeline: from a pregnancy puzzle to a stopped trial', tocTitle: 'Timeline', intro: 'Filter by type. Notice how the business events bunch up in 2014–2017, before the only randomized answer arrived.', events: [
      {year: 1953, title: 'Medawar poses the fetal "transplant" paradox', kind: 'science', text: 'Why doesn\'t a mother reject a fetus that is half foreign?'},
      {year: 1967, title: 'A tryptophan-cleaving enzyme described in rabbit intestine', kind: 'science', text: 'Shozo Yamamoto and Osamu Hayaishi report the enzyme later known as IDO.'},
      {year: 1998.58, date: 'Aug 1998', title: 'Munn and Mellor: blocking IDO makes mice reject their fetuses', kind: 'science', text: 'Published in <i>Science</i>. IDO becomes an immune regulator, not just a metabolic enzyme.'},
      {year: 2003, title: 'Most human tumors express IDO', kind: 'science', text: 'Van den Eynde\'s group (Ludwig Institute, Brussels) in <i>Nature Medicine</i>: IDO helps mouse tumors escape T cells.'},
      {year: 2005, title: 'GCN2 identified as the T cell\'s tryptophan-starvation sensor', kind: 'science'},
      {year: 2007, title: 'First registered trial of indoximod (1-methyl-D-tryptophan) in cancer', kind: 'clinical'},
      {year: 2009, title: 'Incyte publishes its hydroxyamidine IDO1 inhibitors', kind: 'science', text: 'The chemical series that led to epacadostat (INCB024360).'},
      {year: 2010.5, date: 'Jul 2010', title: 'Epacadostat first-in-human study begins', kind: 'clinical', text: '52 patients; blood kynurenine falls sharply, but no tumor shrinks on epacadostat alone.'},
      {year: 2013, title: 'Spranger and Gajewski: IDO follows T-cell inflammation', kind: 'science', text: 'IDO, PD-L1 and regulatory T cells appear where killer T cells already are.'},
      {year: 2014, title: 'Incyte signs trial collaborations with Merck, BMS, AstraZeneca and Roche', kind: 'business', text: 'Epacadostat to be tested with all four companies\' PD-1 or PD-L1 antibodies.'},
      {year: 2014.5, date: 'Jul 2014', title: 'ECHO-202/KEYNOTE-037 (epacadostat + Keytruda) opens', kind: 'clinical', text: 'Open-label phase 1/2, no control arm.'},
      {year: 2014.67, date: 'Sep 2014', title: 'FDA approves Keytruda for advanced melanoma', kind: 'regulatory'},
      {year: 2014.75, date: 'Oct 2014', title: 'Genentech licenses NewLink\'s IDO inhibitor NLG919', kind: 'business', text: '$150M upfront, more than $1B in potential milestones.'},
      {year: 2015.08, date: 'Feb 2015', title: 'BMS agrees to buy Flexus Biosciences for its preclinical IDO1 inhibitor', kind: 'business', text: '$800M upfront, up to $450M more in milestones ($1.25B total).'},
      {year: 2015.75, date: 'Oct 2015', title: 'Merck and Incyte expand the deal to a phase 3 in melanoma (ECHO-301)', kind: 'business'},
      {year: 2016.42, date: 'Jun 2016', title: 'ECHO-301 randomizes its first patient', kind: 'clinical', text: 'Enrollment of 706 patients completed in August 2017.'},
      {year: 2017.17, date: 'Mar 2017', title: 'Merck and Incyte plan phase 3s in lung, kidney, bladder, head and neck', kind: 'business'},
      {year: 2017.25, date: 'Apr 2017', title: 'BMS adds two epacadostat + Opdivo phase 3s', kind: 'business', text: 'In lung and head and neck cancer. AstraZeneca adds a phase 3 plan in October.'},
      {year: 2017.5, date: 'Jul 2017', title: 'FDA grants ECHO-301 Fast Track designation', kind: 'regulatory'},
      {year: 2017.67, date: 'Sep 2017', title: 'Updated ECHO-202: 55% response rate in treatment-naive melanoma', kind: 'clinical', text: 'Presented at ESMO. Median progression-free survival 22.8 months in that group.'},
      {year: 2018.25, date: '6 Apr 2018', title: 'ECHO-301 stopped: no benefit over Keytruda alone', kind: 'setback', text: 'Incyte shares fall about 22% in early trading; NewLink about 43% on the day.'},
      {year: 2018.33, date: 'May 2018', title: 'Incyte halts or downgrades eight more phase 3s; BMS "rationalizes" its IDO program', kind: 'setback'},
      {year: 2018.42, date: 'Jun 2018', title: 'Full ECHO-301 data presented at ASCO', kind: 'clinical'},
      {year: 2019.58, date: 'Aug 2019', title: 'ECHO-301 published in <i>Lancet Oncology</i>', kind: 'clinical'},
      {year: 2024, title: 'Results of the truncated follow-on trials published together', kind: 'clinical', text: 'A <i>BMC Cancer</i> supplement: none showed a meaningful benefit from adding epacadostat.'},
    ]},

    // ---------------------------------------------------------------- BUILDING THE DRUG
    {type: 'story', kicker: 'Building the drug', title: 'Incyte\'s pill, and a first trial where nothing shrank', tocTitle: 'Building epacadostat', html: `
<p>Incyte, based in Wilmington, Delaware, was not a famous name in 2010. Its first big drug, Jakafi (ruxolitinib), a pill for a rare bone-marrow cancer, began shipping in late 2011 and paid for everything else. Its chemists went after IDO1 with a classic small-molecule campaign: find compounds that block the enzyme, then refine them for potency, selectivity and the ability to survive digestion.</p>
<p>The molecule they settled on, INCB024360, later named epacadostat, is chemically unusual. Its 2017 description paper notes that it contains several groups rarely seen in approved drugs (a hydroxyamidine, a furazan ring, a bromine and a sulfamide) and "falls outside of drug-like space", yet it was absorbed well when swallowed. In cell tests it blocked human IDO1 at an [[IC50]] of around 10 nanomolar, very potent, with little activity against IDO2 or [[TDO]]. In mice, it slowed tumors, but only when the mice had working lymphocytes, which is what you would expect from a drug that works through the immune system.</p>
<h3>Phase 1: the target moved, the tumors didn't</h3>
<p>The [[first-in-human]] study began in 2010 and enrolled 52 patients with advanced solid tumors at doses from 50 mg once a day to 700 mg twice a day. The drug was generally well tolerated. It reduced blood [[kynurenine]] at every dose, and the investigators reported near-maximal effects from 100 mg twice daily upward, with more than 80% to 90% inhibition of IDO1 activity in blood samples throughout the dosing period. But not a single patient's tumor shrank enough to count as a response. Seven had [[stable disease]] lasting at least 16 weeks.</p>
<p>That was not, by itself, alarming: a drug that releases a brake only matters if something is pressing the accelerator. A study with [[ipilimumab]] (Yervoy, the first checkpoint drug) reported responses in 23% of immunotherapy-naive melanoma patients, again with no control arm, before the sponsor stopped it as the field moved to PD-1 combinations. In 2014 Incyte signed [[clinical trial collaboration|clinical trial collaborations]] with all four companies that had PD-1 or PD-L1 antibodies near market: Merck, Bristol-Myers Squibb, AstraZeneca and Roche. Whoever won the PD-1 race, Incyte would be the partner.</p>
<h3>The dose</h3>
<p>Remember the number 100 mg twice daily. It was chosen for the combination with Keytruda in the ECHO-202 phase 1, and every later trial used it. The reasons given in the published paper were sensible: the maximum tolerated dose was never reached, the paper reported fewer severe side effects, dose interruptions and dose reductions at the lower dose levels, and drug levels at 100 mg were projected to give at least 50% average IDO1 inhibition in all patients. But note the word "projected". The paper states that kynurenine was not directly measured over time in that study; target inhibition was calculated from drug concentrations in blood, using a model. Nobody had shown that 100 mg twice daily shut IDO1 down inside a tumor.</p>`},

    {type: 'explorer', title: 'Did the dose do the job? A toy model of target coverage', intro: 'This is an illustrative model, not epacadostat\'s measured pharmacokinetics. It shows why "blocks the target in blood" and "blocks the target in the tumor, all day" are different claims. The tumor factor stands for everything that makes a tumor harder to block than blood: lower drug penetration, far more enzyme switched on by inflammation, more tryptophan competing for the pocket.',
      inputs: [
        {id: 'dose', label: 'Dose twice daily', min: 25, max: 700, step: 25, value: 100, fmt: v => v + ' mg'},
        {id: 'hl', label: '[[half-life]] (toy)', min: 1, max: 10, step: 0.5, value: 3, fmt: v => v + ' h'},
        {id: 'fold', label: 'Tumor is harder by', min: 1, max: 20, step: 1, value: 1, fmt: v => v + '×'},
      ],
      compute: (v, api, el) => {
        // one-compartment, instant absorption, dosing every 12 h, calibrated so 100 mg gives ~80% trough block at fold 1
        const k = Math.LN2 / v.hl;
        const peak = (v.dose / 100) * 4 * Math.exp(k * 12); // toy steady-state peak in multiples of IC50: trough = 4x IC50 at 100 mg
        const pts = [], thr = 90; let tAbove = 0, minI = 100, sumI = 0; const N = 96;
        for (let i = 0; i <= N; i++) {
          const t = i * 0.5, c = peak * Math.exp(-k * (t % 12)), inh = 100 * c / (c + v.fold);
          pts.push([t, +inh.toFixed(1)]); if (i < N) { sumI += inh; if (inh >= thr) tAbove++; minI = Math.min(minI, inh); }
        }
        const avg = sumI / N, pctAbove = 100 * tAbove / N;
        api.mountChart(el, {kind: 'line', title: 'IDO1 blocked over two days of twice-daily dosing (toy model)', unit: '%', yMax: 100, xLabel: 'Hours', xTicks: [0, 12, 24, 36, 48],
          series: [{name: 'Share of IDO1 blocked', short: 'blocked', points: pts, label: false}, {name: '90% block', points: [[0, 90], [48, 90]], dashed: true, color: 8, label: false}], annotations: [{x: 12, label: 'next dose', dy: 210}, {x: 36, label: 'next dose', dy: 210}],
          note: `Average block ${avg.toFixed(0)}%, lowest point (the [[trough]]) ${minI.toFixed(0)}%, time spent above 90% block ${pctAbove.toFixed(0)}%. ${v.fold >= 5 && v.dose <= 150 ? 'At this setting the enzyme escapes for much of each day even though the blood-based numbers would look fine at a tumor factor of 1.' : v.fold === 1 ? 'With the tumor as easy as blood, 100 mg looks like strong coverage, which matches what the phase 1 blood tests suggested.' : 'Raise the dose and watch how much it takes to hold coverage when the tumor is harder than blood.'} Illustrative only: invented potency and half-life, instant absorption, no tissue data.`});
      }},

    {type: 'callout', variant: 'product', heading: 'Target engagement is "did the feature flag actually turn on?"', html: `
<p>Every engineer has shipped a change, watched the metric not move, and later found the flag was never enabled for most users. Before concluding "users don't want this", you check the instrumentation. In drug development that is [[target engagement]] and [[proof of mechanism]]: proving that the drug, at your dose, blocked the target where it matters. Without it, a negative trial cannot tell you whether the idea or the execution was wrong.</p>
<p><b>Where the analogy breaks:</b> checking a flag takes minutes. Checking target engagement in a tumor needs biopsies (painful, risky, a snapshot) or a validated blood marker, designed into the trial in advance. ECHO-301 enrolled all 706 patients without published direct evidence that 100 mg twice daily suppressed IDO1 inside tumors.</p>`},

    // ---------------------------------------------------------------- THE PROMISE: ECHO-202
    {type: 'story', kicker: 'The promise', title: 'ECHO-202: numbers too good to ignore', tocTitle: 'ECHO-202', html: `
<p>ECHO-202/KEYNOTE-037 opened in July 2014. It was an [[open-label]] phase 1/2 study: every patient received both epacadostat and Keytruda, and everyone knew it. The phase 1 part enrolled 62 patients across many tumor types to find a dose; the phase 2 part expanded into cohorts of specific cancers at 100 mg twice daily. There was no control group, so each cohort's results could only be compared with Keytruda results from other trials.</p>
<p>The phase 1 results, published in the <i>Journal of Clinical Oncology</i> in 2018 after earlier conference presentations, were striking. Of 22 patients with melanoma, 12 (55%) had an objective response; 19 of those 22 had not been treated for advanced disease. Across all 62 patients, 25 responded: 5 of 12 with non-small-cell lung cancer, 2 of 11 with kidney cancer, and patients with bladder, endometrial and head and neck cancers too. The combination added little extra toxicity. By September 2017, with the phase 2 melanoma cohort added, the response rate in 54 treatment-naive melanoma patients was still 55%, and median [[progression-free survival]] in that group was 22.8 months.</p>
<p>Now put that next to the reference everyone had in their heads. In KEYNOTE-006, published in the <i>New England Journal of Medicine</i> in 2015, Keytruda alone produced responses in about 33% of melanoma patients, and median progression-free survival was a few months. Fifty-five percent versus thirty-three percent. It looked like the combination made Keytruda work for half again as many patients, with longer control of disease, from a cheap, safe pill. Similar-looking comparisons came in from other tumor types. For a field searching for the second brake, this was the strongest signal anyone had.</p>
<p>Why did sophisticated people find this persuasive? The numbers were large and repeated across cancers, the biology had 15 years of papers behind it, mouse experiments showed the combination beating either drug alone, and the low toxicity made trying look cheap. What the headline numbers hid was how different ECHO-202's patients were from KEYNOTE-006's. That difference turned out to be nearly the whole story.</p>`},

    {type: 'figure', title: 'Two ways to test a combination', intro: 'Hover or tap each part. The left panel is how the IDO field got its early evidence. The right panel is how it got the truth.',
      svg: `<svg viewBox="0 0 900 420" role="img" aria-label="Single-arm versus randomized trial design">
        <text x="215" y="30" text-anchor="middle" class="il-title">Single-arm study (ECHO-202 style)</text>
        <text x="675" y="30" text-anchor="middle" class="il-title">Randomized trial (ECHO-301)</text>
        <path d="M450 44 V400" class="il-line il-dash"/>
        <g data-part="saPool"><rect x="30" y="56" width="370" height="70" rx="14" class="il-paper il-line"/>
          <circle cx="62" cy="91" r="11" class="il-3"/><circle cx="92" cy="91" r="11" class="il-3"/><circle cx="122" cy="91" r="11" class="il-3"/><circle cx="152" cy="91" r="11" class="il-3"/><circle cx="182" cy="91" r="11" class="il-8"/><circle cx="212" cy="91" r="11" class="il-3"/>
          <text x="236" y="86" class="il-text-2">patients chosen by a few</text><text x="236" y="104" class="il-text-2">expert centers, mostly fit</text></g>
        <g data-part="saArm"><path d="M215 126 V160" class="il-line2"/><rect x="95" y="160" width="240" height="64" rx="14" class="il-1s il-line"/>
          <text x="215" y="188" text-anchor="middle" class="il-text">Everyone gets A + B</text><text x="215" y="208" text-anchor="middle" class="il-small">Keytruda + epacadostat, open-label</text></g>
        <g data-part="saResult"><path d="M215 224 V258" class="il-line2"/><rect x="120" y="258" width="190" height="60" rx="14" class="il-1"/>
          <text x="215" y="286" text-anchor="middle" class="il-white">55% respond</text><text x="215" y="305" text-anchor="middle" class="il-white" style="font-size:12px">melanoma, treatment-naive</text></g>
        <g data-part="saHistory"><rect x="60" y="338" width="310" height="58" rx="14" class="il-8s il-line il-dash"/>
          <text x="215" y="362" text-anchor="middle" class="il-text">Compared with: "A alone ≈ 33%"</text><text x="215" y="382" text-anchor="middle" class="il-small">a different trial, different patients, different year</text></g>
        <g data-part="rPool"><rect x="490" y="56" width="370" height="70" rx="14" class="il-paper il-line"/>
          <circle cx="522" cy="91" r="11" class="il-3"/><circle cx="552" cy="91" r="11" class="il-8"/><circle cx="582" cy="91" r="11" class="il-3"/><circle cx="612" cy="91" r="11" class="il-3"/><circle cx="642" cy="91" r="11" class="il-8"/><circle cx="672" cy="91" r="11" class="il-3"/>
          <text x="696" y="86" class="il-text-2">706 patients, 118 sites,</text><text x="696" y="104" class="il-text-2">23 countries</text></g>
        <g data-part="rSplit"><path d="M675 126 V146" class="il-line2"/><rect x="655" y="146" width="40" height="40" rx="4" transform="rotate(45 675 166)" class="il-4s il-line"/><text x="675" y="170" text-anchor="middle" class="il-small">1:1</text></g>
        <g data-part="rArms"><path d="M660 184 L590 214 M690 184 L760 214" class="il-line2"/>
          <rect x="492" y="214" width="180" height="64" rx="14" class="il-1s il-line"/><text x="582" y="242" text-anchor="middle" class="il-text">A + B</text><text x="582" y="262" text-anchor="middle" class="il-small">Keytruda + epacadostat</text>
          <rect x="680" y="214" width="180" height="64" rx="14" class="il-8s il-line"/><text x="770" y="242" text-anchor="middle" class="il-text">A + placebo</text><text x="770" y="262" text-anchor="middle" class="il-small">Keytruda + dummy pill</text></g>
        <g data-part="rBlind"><rect x="596" y="292" width="160" height="30" rx="15" class="il-6s"/><text x="676" y="312" text-anchor="middle" class="il-text-2">double-blind</text></g>
        <g data-part="rCompare"><rect x="520" y="338" width="310" height="58" rx="14" class="il-1s il-line"/>
          <text x="675" y="362" text-anchor="middle" class="il-text">34% vs 32% respond; PFS HR 1.00</text><text x="675" y="382" text-anchor="middle" class="il-small">same time, same kind of patients, same scans</text></g>
      </svg>`,
      hotspots: {
        saPool: {title: 'Who gets in', text: 'Early-phase studies run at a handful of experienced centers. Investigators choose patients who are fit enough for an experimental regimen and likely to stay on it. In ECHO-202\'s phase 1, 19 of 22 melanoma patients were [[treatment-naive]]. None of that is wrong, but it shapes the result. This is [[selection bias]].'},
        saArm: {title: 'Everyone gets both drugs', text: 'With no comparison group, a [[single-arm trial]] cannot separate what Keytruda did from what epacadostat added. Keytruda alone produces many responses in exactly these patients.'},
        saResult: {title: 'An impressive-looking number', text: 'A 55% response rate in treatment-naive melanoma was real: those patients did respond. The question is how many would have responded to Keytruda alone.'},
        saHistory: {title: 'The historical comparator', text: 'The 33% came from KEYNOTE-006, a randomized trial with its own, broader patient mix, including people already treated for advanced disease. Using it as the benchmark is a [[historical control]] and a [[cross-trial comparison]].'},
        rPool: {title: 'A broad, pre-specified population', text: 'ECHO-301 enrolled adults with unresectable stage III or IV melanoma who had not had a PD-1 drug, stratified by PD-L1 status and BRAF mutation status, at 118 sites in 23 countries.'},
        rSplit: {title: 'Randomization', text: 'A computer assigns each patient to an arm by chance, so both arms get the same mix of fit and frail, lucky and unlucky patients. Any difference that appears is then down to the drug.'},
        rArms: {title: 'Identical except for the pill', text: 'Both arms got the same Keytruda. The only difference was epacadostat versus a dummy pill ([[placebo]]). This isolates exactly what the second drug adds.'},
        rBlind: {title: 'Blinding', text: 'In a [[double-blind]] trial neither patients nor doctors know who has the real pill, so expectations cannot color how scans are read or how patients are managed. Scans in ECHO-301 were also read by blinded independent central reviewers.'},
        rCompare: {title: 'The honest answer', text: 'Response rates of 34.2% vs 31.5% and a [[hazard ratio]] of 1.00 for progression. The randomized trial found that Keytruda alone, in these patients, did about as well as the combination.'},
      },
      caption: 'Numbers from Mitchell et al. (JCO 2018), the ECHO-202 update presented at ESMO 2017, and Long et al. (ASCO 2018; Lancet Oncology 2019).'},

    {type: 'custom', title: 'The single-arm illusion: build your own misleading trial', tocTitle: 'Single-arm simulator', intro: 'Set the true effect of the second drug (you can make it exactly zero), how much healthier the early-study patients are than the historical comparison, and the trial size. The simulator runs 400 imaginary single-arm studies and 400 imaginary randomized trials with the same patients and shows what each design would conclude. The historical benchmark is fixed at 33%, Keytruda\'s rate in KEYNOTE-006.',
      html: `<div class="explorer">
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px">
          <button class="btn" data-preset="epac">Preset: the epacadostat scenario</button>
          <button class="btn" data-preset="real">Preset: a genuinely useful add-on</button>
          <button class="btn" data-preset="clean">Preset: no selection bias</button></div>
        <label><span>True added effect of drug B</span><input type="range" min="0" max="25" step="1" value="0" data-k="b"><span class="out" data-o="b"></span></label>
        <label><span>Patient-selection bias</span><input type="range" min="0" max="25" step="1" value="15" data-k="bias"><span class="out" data-o="bias"></span></label>
        <label><span>Patients per trial arm</span><input type="range" min="20" max="360" step="10" value="60" data-k="n"><span class="out" data-o="n"></span></label>
        <div data-svg style="margin-top:10px"></div>
        <div class="result" data-res></div></div>`,
      init: (root, api) => {
        const q = s => root.querySelector(s);
        const inputs = [...root.querySelectorAll('input[data-k]')];
        const HIST = 33, SIMS = 400;
        const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
        const binom = (n, p, r) => { let k = 0; for (let i = 0; i < n; i++) if (r() < p) k++; return k; };
        const presets = {epac: {b: 0, bias: 18, n: 60}, real: {b: 15, bias: 0, n: 150}, clean: {b: 0, bias: 0, n: 60}};
        root.querySelectorAll('[data-preset]').forEach(btn => btn.onclick = () => { const p = presets[btn.dataset.preset]; inputs.forEach(i => i.value = p[i.dataset.k]); run(); });
        const hist = (vals, lo, hi, x0, w, y0, h, cls, refX, refLabel, title, ticks) => {
          const bins = 30, bw = (hi - lo) / bins, cnt = new Array(bins).fill(0);
          vals.forEach(v => { const b = Math.max(0, Math.min(bins - 1, Math.floor((v - lo) / bw))); cnt[b]++; });
          const mx = Math.max(...cnt, 1), X = v => x0 + w * (v - lo) / (hi - lo);
          let s = '<text x="' + (x0 + w / 2) + '" y="' + (y0 - h - 34) + '" text-anchor="middle" class="il-text">' + title + '</text>';
          cnt.forEach((c, i) => { const bh = h * c / mx; s += '<rect x="' + (x0 + i * w / bins + 1) + '" y="' + (y0 - bh) + '" width="' + (w / bins - 2) + '" height="' + bh + '" rx="2" class="' + cls + '"/>'; });
          s += '<line x1="' + x0 + '" x2="' + (x0 + w) + '" y1="' + y0 + '" y2="' + y0 + '" class="il-line"/>';
          ticks.forEach(t => s += '<text x="' + X(t) + '" y="' + (y0 + 18) + '" text-anchor="middle" class="il-small">' + t + '</text>');
          s += '<line x1="' + X(refX) + '" x2="' + X(refX) + '" y1="' + (y0 - h - 20) + '" y2="' + y0 + '" class="st-7 il-dash" stroke-width="2"/>';
          s += '<text x="' + (X(refX) + 6) + '" y="' + (y0 - h - 10) + '" class="il-small">' + refLabel + '</text>';
          return s;
        };
        const run = () => {
          const v = {}; inputs.forEach(i => v[i.dataset.k] = +i.value);
          q('[data-o="b"]').textContent = '+' + v.b + ' pts'; q('[data-o="bias"]').textContent = '+' + v.bias + ' pts'; q('[data-o="n"]').textContent = v.n;
          const r = rng(v.b * 1000 + v.bias * 37 + v.n);
          const pA = Math.min(0.97, (HIST + v.bias) / 100), pAB = Math.min(0.98, (HIST + v.bias + v.b) / 100);
          const single = [], diffs = []; let fooled = 0, sig = 0;
          for (let i = 0; i < SIMS; i++) {
            const s1 = 100 * binom(v.n, pAB, r) / v.n; single.push(s1); if (s1 >= HIST + 10) fooled++;
            const a = binom(v.n, pAB, r) / v.n, c = binom(v.n, pA, r) / v.n, d = 100 * (a - c); diffs.push(d);
            const pp = (a + c) / 2, se = Math.sqrt(2 * pp * (1 - pp) / v.n) || 1; if ((a - c) / se > 1.96) sig++;
          }
          const mean = a => a.reduce((x, y) => x + y, 0) / a.length;
          let svg = '<svg viewBox="0 0 900 270" role="img" aria-label="Simulated trial results">';
          svg += hist(single, 0, 100, 40, 380, 220, 140, 'il-1', HIST, 'history 33%', 'Single-arm: A+B response rate (%)', [0, 20, 40, 60, 80, 100]);
          svg += hist(diffs, -30, 40, 490, 380, 220, 140, 'il-3', 0, 'no difference', 'Randomized: A+B minus A+placebo (points)', [-30, -20, -10, 0, 10, 20, 30, 40]);
          svg += '<text x="230" y="264" text-anchor="middle" class="il-small">each bar = how many of 400 imaginary trials landed there</text>';
          svg += '<text x="680" y="264" text-anchor="middle" class="il-small">same patients, but compared with each other</text></svg>';
          q('[data-svg]').innerHTML = svg;
          const f = Math.round(100 * fooled / SIMS), g = Math.round(100 * sig / SIMS);
          let verdict = '';
          if (v.b === 0 && f >= 50) verdict = ' Drug B does <b>nothing</b> here. Every bit of the apparent benefit in the single-arm studies is selection bias plus chance. This is the epacadostat pattern.';
          else if (v.b === 0) verdict = ' Drug B does nothing, and with little selection bias most single-arm studies correctly look unremarkable, but a few still look exciting by luck alone.';
          else if (g < 50) verdict = ' Drug B really helps, but at this size the randomized trial often misses it: it is underpowered. Randomized trials need enough patients to see the effect you are looking for.';
          else verdict = ' Drug B really helps and the randomized trial usually detects it. Randomization does not make real effects disappear; it only removes fake ones.';
          q('[data-res]').innerHTML = 'Average single-arm result: <b>' + mean(single).toFixed(0) + '%</b> against a history of 33%. In <b>' + f + '%</b> of simulated single-arm studies, A+B beat the history by 10 points or more and would have looked like a breakthrough. In the randomized version, <b>' + g + '%</b> of trials found a statistically significant benefit (average difference ' + mean(diffs).toFixed(1) + ' points).' + verdict;
        };
        inputs.forEach(i => i.addEventListener('input', run)); run();
      }},

    {type: 'callout', variant: 'product', heading: 'A single-arm study is a launch with no holdout group', html: `
<p>Imagine you ship a new onboarding flow in September and conversion jumps from 33% to 55%. Is it the flow, or September's students who convert anyway, your most engaged market getting it first, and a comparison with last spring? That is why serious teams keep a randomized holdout. ECHO-202 was the September launch compared with last spring. ECHO-301 was the A/B test.</p>
<p><b>Where the analogy breaks:</b> a web A/B test is nearly free and takes days. A randomized cancer trial of a few hundred patients costs tens of millions of dollars, takes a year or more, and every "user" in the control arm has a deadly disease. That is exactly why companies are tempted to skip the randomized phase 2, and why skipping it tends to cost more later, all at once.</p>`},

    {type: 'table', title: 'The cross-trial comparison, unpacked', intro: 'Here are the melanoma numbers people were comparing, side by side with what the patients in each study were like. The last two rows come from the randomized trial that settled the question.',
      columns: ['Study (year reported)', 'Design', 'Patients', 'Treatment', 'Response rate', 'Median PFS'],
      rows: [
        ['KEYNOTE-006 (2015)', 'Randomized phase 3 vs ipilimumab', '834 with advanced melanoma; up to one prior therapy allowed', 'Keytruda alone', '33.7% / 32.9% (two schedules)', 'A few months (6-month PFS about 47%)'],
        ['KEYNOTE-001 (2016)', 'Open-label, multi-cohort phase 1b', '133 [[treatment-naive]] with measurable disease', 'Keytruda alone', '<b>45%</b> (central review)', 'Not in this abstract; 12-month PFS 52%'],
        ['KEYNOTE-001, 5-year update (2019)', 'Same study, longer follow-up', '151 treatment-naive', 'Keytruda alone', '<b>52%</b> (immune-related criteria, investigator-read)', '<b>16.9 months</b>'],
        ['ECHO-202 phase 1/2 (2017)', '[[single-arm trial|Single-arm]], open-label', '54 treatment-naive melanoma', 'Keytruda + epacadostat', '<b>55%</b>', '22.8 months'],
        ['ECHO-301, control arm (2018)', 'Randomized, double-blind phase 3', '352, no prior PD-1 drug', 'Keytruda + placebo', '31.5% (central review)', '4.9 months'],
        ['ECHO-301, combination arm (2018)', 'Randomized, double-blind phase 3', '354, no prior PD-1 drug', 'Keytruda + epacadostat', '34.2% (central review)', '4.7 months'],
      ],
      caption: 'The fair comparison for ECHO-202 was Keytruda alone in similar, treatment-naive patients, which looked like 45–52%. Response criteria, scan reading and follow-up differ between rows, which is itself the point: these numbers were never designed to be compared. Sources: Robert et al. NEJM 2015; Ribas et al. JAMA 2016; Hamid et al. Ann Oncol 2019; Long et al. ASCO 2018 and Lancet Oncol 2019.'},

    {type: 'callout', variant: 'misconception', heading: '"The phase 1/2 patients must have been cherry-picked on purpose"', html: `
<p>There is no evidence of that, and you don't need it. Early-phase trials run at a few expert centers, enroll patients well enough for frequent visits and biopsies, and attract people earlier in their disease. Each choice is ordinary; together they produce a population that does better on almost any drug. Tara Mitchell, who led the ECHO-202 phase 1 publication, wrote in 2024 that single-arm phase I/II evidence "can be misleading due to patient selection factors" and that single-agent Keytruda's effect was "likely" underestimated by relying on historical controls. The problem was structural, not a matter of bad faith.</p>`},

    {type: 'decision', title: 'Decision: straight to phase 3?', role: 'You are Merck\'s head of oncology development, autumn 2015', scenario: `
Keytruda is on the market for melanoma. Early ECHO-202 data show response rates with epacadostat that look well above Keytruda\'s historical numbers, in several tumor types, with little extra toxicity. Incyte also has collaboration agreements with Bristol-Myers Squibb, AstraZeneca and Roche. If IDO works, whoever runs the first phase 3 could own the combination label. What do you do?`,
      options: [
        {label: 'Go straight to a large, double-blind phase 3 in first-line melanoma (about 700 patients), with Keytruda + placebo as the control', outcome: 'Fast and rigorous: if it works, you have a clean, approvable answer years before rivals. But every piece of evidence you are betting on is single-arm, and a 700-patient trial commits a lot of money and patients before you know whether the second drug adds anything.'},
        {label: 'First run a randomized phase 2 (roughly 150 patients, Keytruda + epacadostat vs Keytruda + placebo) with a response-rate endpoint and kynurenine measured in blood and tumor biopsies', outcome: 'Perhaps 12 to 18 months slower, and rivals may start phase 3s meanwhile. But you learn whether the combination beats Keytruda alone in comparable patients, and whether 100 mg shuts down IDO1 in tumors, before betting a program on it. In hindsight it very likely would have shown no difference, as the later randomized lung-cancer phase 2 did.'},
        {label: 'Pass: wait for someone else\'s randomized data', outcome: 'Cheapest in the short run. But Keytruda is your franchise; if IDO works and your rival\'s PD-1 drug gets the combination label first, you could lose share in the biggest market in oncology. For a PD-1 owner, sitting out felt like an unaffordable risk.'},
      ],
      reality: 'In October 2015 Merck and Incyte expanded their collaboration to include ECHO-301, a phase 3 in first-line melanoma. It randomized 706 patients between June 2016 and August 2017, and in July 2017 the FDA gave it [[Fast Track designation]]. There was no randomized phase 2 first. In March 2017, before ECHO-301 had read out, the companies also announced phase 3 plans in lung, kidney, bladder, and head and neck cancer.'},

    // ---------------------------------------------------------------- LAND RUSH
    {type: 'story', kicker: 'The land rush', title: 'Everyone into the pool', tocTitle: 'The land rush', html: `
<p>In October 2014, Genentech, part of Roche, licensed NewLink Genetics' IDO inhibitor NLG919 (later called navoximod) for $150 million up front and more than $1 billion in potential [[milestone payment|milestone payments]]. NewLink kept [[indoximod]], an older IDO-pathway compound, for its own trials. In February 2015, Bristol-Myers Squibb agreed to buy Flexus Biosciences, a private company in San Carlos, California, for $800 million up front plus up to $450 million in milestones. What BMS was buying was F001287 (later BMS-986205, then linrodostat), an IDO1 inhibitor that was still [[preclinical]]: Flexus was planning to file to start human trials in the second half of 2015. An [[upfront payment]] of $800 million for a molecule never tested in a person shows how much option value the industry placed on IDO, and how much BMS feared lacking an IDO drug to pair with Opdivo.</p>
<p>Incyte, meanwhile, became the partner of choice. Having signed [[clinical trial collaboration|collaborations]] with all four PD-1 or PD-L1 owners in 2014, it expanded them as the data came in. In October 2015 Merck committed to ECHO-301. In March 2017 Merck and Incyte announced phase 3 trials in four more tumor types (non-small-cell lung, kidney, bladder, and head and neck). In April 2017 BMS signed up for two phase 3 trials of epacadostat with Opdivo, in lung and head and neck cancer, even though it owned its own IDO1 inhibitor. In October 2017 AstraZeneca added a phase 3 plan with its PD-L1 antibody Imfinzi in stage III lung cancer. By early 2018, Incyte's pipeline table listed nine epacadostat phase 3 trials, from ECHO-301 to ECHO-310.</p>
<p>Incyte's research and development spending rose from $582 million in 2016 to $1.33 billion in 2017, against total revenue of $1.54 billion. (That includes $359 million of one-time partnership charges, and Incyte does not report spending by project, so epacadostat's share is not public.)</p>
<h3>The trials multiplied</h3>
<p>Academic investigators and smaller companies added their own studies: IDO inhibitors with vaccines, chemotherapy, radiation and other experimental drugs, in ovarian, pancreatic, gastric and brain cancers. On ClinicalTrials.gov, new cancer trials of the main IDO-pathway inhibitors were starting at about five per half-year through 2016, then 12 in the second half of 2017 and 16 in the first half of 2018.</p>
<p>Each decision made sense locally: PD-1 owners could not afford to be second, IDO owners needed a PD-1 partner, investigators wanted in. But nearly every bet rested on the same evidence (single-arm response rates), the same assumption (that the dose blocked IDO in tumors) and the same untested belief (that IDO was what held back PD-1 non-responders). If that shared foundation cracked, it would crack for everyone at once.</p>`},

    {type: 'chart', title: 'The herding chart: IDO-inhibitor cancer trials started and stopped', chart: {kind: 'line', title: 'Interventional cancer trials of IDO-pathway inhibitors, by half-year', subtitle: 'Trials registered on ClinicalTrials.gov testing epacadostat, indoximod, BMS-986205 (linrodostat), navoximod, PF-06840003, KHK2455 or LY3381916. Approximate.',
      unit: '', xTicks: [2012, 2014, 2016, 2018, 2020], xFmt: v => (Number.isInteger(v) ? 'H1 ' : 'H2 ') + Math.floor(v),
      series: [
        {name: 'Trials starting (actual or planned start date)', label: false, points: [[2012, 1], [2012.5, 2], [2013, 0], [2013.5, 3], [2014, 1], [2014.5, 5], [2015, 3], [2015.5, 3], [2016, 5], [2016.5, 5], [2017, 5], [2017.5, 12], [2018, 16], [2018.5, 13], [2019, 5], [2019.5, 6], [2020, 2], [2020.5, 1], [2021, 1], [2021.5, 0]]},
        {name: 'Trials terminated or withdrawn (by primary completion date)', label: false, color: 8, points: [[2012, 0], [2012.5, 0], [2013, 0], [2013.5, 0], [2014, 0], [2014.5, 1], [2015, 0], [2015.5, 0], [2016, 0], [2016.5, 1], [2017, 0], [2017.5, 2], [2018, 4], [2018.5, 6], [2019, 3], [2019.5, 6], [2020, 4], [2020.5, 4], [2021, 2], [2021.5, 1]]},
      ],
      annotations: [{x: 2018.25, label: 'ECHO-301 stops (Apr 2018)'}],
      note: 'My count from a ClinicalTrials.gov API search (September 2026) of 96 phase 1–3 cancer trials, excluding healthy-volunteer and non-drug studies. "Starting" includes withdrawn trials at their planned start date, so the 2018 bars include trials that never enrolled. "Stopped" uses the primary completion date as a proxy for when a trial ended, and undercounts: several halted epacadostat phase 3s are listed as "completed" because they closed early with the patients already enrolled. Treat the shape, not the exact counts, as the finding.'},
      takeaway: 'New IDO trials were starting faster than ever in the months before ECHO-301 read out, most of them resting on the same single-arm evidence. After April 2018 the curve collapses and the stops pile up.'},

    {type: 'callout', variant: 'numbers', heading: 'The land rush, by the numbers', html: `
<p><b>4</b> PD-1 or PD-L1 owners signed trial collaborations with Incyte in 2014: Merck, BMS, AstraZeneca and Roche.</p>
<p><b>$950 million</b> in upfront payments for just two IDO deals: $800 million from BMS for Flexus (2015) and $150 million from Genentech to NewLink (2014), with more than $1.4 billion more in potential milestones between them.</p>
<p><b>9</b> epacadostat phase 3 trials running or opening by early 2018 (ECHO-301 to ECHO-307, ECHO-309, ECHO-310), plus one more planned with AstraZeneca.</p>
<p><b>3,042</b> active immuno-oncology trials counted worldwide in a late-2017 landscape analysis, which flagged that many PD-1 combination studies were testing the same combinations.</p>
<p><b>0</b> randomized trials comparing epacadostat plus a PD-1 drug against the PD-1 drug alone had reported results when these commitments were made.</p>`},

    {type: 'decision', title: 'Decision: hedge, or double down?', role: 'You are Bristol-Myers Squibb\'s oncology leadership, early 2017', scenario: `
You paid $800 million for Flexus in 2015, and its IDO1 inhibitor (BMS-986205) is now in a phase 1/2 study with Opdivo. Incyte offers to expand your collaboration into two phase 3 trials of epacadostat with Opdivo, in lung and head and neck cancer. Merck is already running a phase 3 in melanoma and planning four more. ECHO-301 will read out in about a year. What do you do?`,
      options: [
        {label: 'Do both: sign the epacadostat phase 3s and start your own BMS-986205 phase 3s too', outcome: 'Maximum coverage: whichever IDO drug wins, Opdivo is in the race and not behind Keytruda. But you are now doubling your exposure to one unproven mechanism, and every trial depends on the same assumption that IDO blockade adds to PD-1.'},
        {label: 'Sign the epacadostat trials (Incyte pays for its drug) but hold your own phase 3s until ECHO-301 reads out', outcome: 'A cheaper hedge: if IDO works you still have combination data with Opdivo, and you protect the bigger spend on your own molecule until a randomized answer arrives. You risk falling behind if IDO works, but you would lose less if it doesn\'t.'},
        {label: 'Run a randomized phase 2 of BMS-986205 + Opdivo vs Opdivo alone, with tumor biopsies to confirm the target is blocked, and decline the phase 3s for now', outcome: 'The most information for the least commitment, and a potential edge: a better-characterized drug and dose. But a year of "no phase 3" for a drug you paid $800 million for is a hard story to tell a board that feels Merck breathing down its neck.'},
      ],
      reality: 'BMS signed the two epacadostat phase 3s in April 2017, and also registered its own phase 3 trials of BMS-986205 with Opdivo in melanoma, head and neck and lung cancer in late 2017 and early 2018. After ECHO-301 failed, BMS said it was rationalizing its IDO program: the melanoma phase 3 stopped after enrolling 20 patients, the head and neck and lung phase 3s were withdrawn with no patients enrolled, citing changed business objectives. A bladder-cancer phase 3 that had been designed with a BMS-986205 arm began in late 2018; its registry entry now lists only chemotherapy and Opdivo arms.'},

    {type: 'explorer', title: 'Why the rush felt rational: a toy expected-value model', intro: 'A deliberately simple model of the choice every PD-1 owner faced in 2016: launch phase 3s now, or run a randomized phase 2 first and accept a delay that might cost market share. All numbers are illustrative, not company estimates.',
      inputs: [
        {id: 'p', label: 'Chance IDO really adds benefit', min: 5, max: 60, value: 30, fmt: v => v + '%'},
        {id: 'val', label: 'Value if it works (NPV)', min: 2, max: 30, value: 10, fmt: v => '$' + v + 'B'},
        {id: 'c3', label: 'Cost of the phase 3 program', min: 0.3, max: 3, step: 0.1, value: 1.5, fmt: v => '$' + v.toFixed(1) + 'B'},
        {id: 'loss', label: 'Value lost by an 18-month delay', min: 0, max: 60, value: 25, fmt: v => v + '%'},
      ],
      compute: (v) => {
        const p = v.p / 100, c2 = 0.1;
        const rush = p * v.val - v.c3;
        const staged = -c2 + p * (v.val * (1 - v.loss / 100) - v.c3);
        const better = staged > rush ? 'staged' : 'rush';
        const diff = Math.abs(staged - rush).toFixed(1);
        const saved = ((1 - p) * v.c3).toFixed(1);
        return `<b>Rush to phase 3 now:</b> expected value $${rush.toFixed(1)}B. <b>Randomized phase 2 first</b> (toy cost $0.1B, then phase 3 only if it works): expected value $${staged.toFixed(1)}B.<br>
The ${better === 'staged' ? '<b>staged</b>' : '<b>rush</b>'} strategy comes out ahead by about $${diff}B. Staging saves the phase 3 cost in the ${(100 - v.p)}% of worlds where IDO does nothing (about $${saved}B on average), at the price of losing ${v.loss}% of the value in the worlds where it works.
${better === 'rush' ? ' Notice what makes rushing win: a high belief that IDO works, and a belief that being second is very costly. Both were widespread in 2016, and both were fed by the same single-arm data.' : ' Notice that the answer flips toward staging as soon as you are honest that the chance of success is modest; single-arm data had inflated everyone\'s estimate of p.'}
<br><span style="color:var(--ink-3);font-size:15px">Toy model: ignores time value of money, partial successes and the possibility of learning from rivals\' trials, all of which matter in real portfolio decisions.</span>`;
      }},

    {type: 'callout', variant: 'product', heading: 'Herding is a feature-parity race', html: `
<p>A competitor demos a flashy feature, every roadmap in the category reshuffles to match it, and a year later half the industry has shipped the same thing on the same thin evidence. If the bet is right, being late hurts. If it is wrong, everyone is wrong together, and nobody's individual process looked unreasonable.</p>
<p><b>Where the analogy breaks:</b> a wasted software quarter is mostly money and morale, and the feature can be deleted. In oncology the scarce resource is patients: only so many people with advanced melanoma or bladder cancer are eligible for trials each year, and each can join only one. The industry did not just waste money; it spent a shared, finite resource on one correlated bet.</p>`},

    // ---------------------------------------------------------------- ECHO-301
    {type: 'trial', title: 'ECHO-301/KEYNOTE-252: the test that mattered', tocTitle: 'ECHO-301', intro: 'This is the randomized trial that finally asked the right question. Study the design, then predict the result before you see it.',
      design: {name: 'ECHO-301 / KEYNOTE-252', phase: 'Phase 3', blinding: 'Double-blind, placebo-controlled', years: '2016–2018', n: 706,
        population: 'Adults with unresectable stage III or IV melanoma, no prior PD-1 or PD-L1 drug', randomization: '1:1',
        arms: [{name: 'Epacadostat + Keytruda', n: 354, desc: 'Pill 100 mg twice daily + Keytruda'}, {name: 'Placebo + Keytruda', n: 352, desc: 'Dummy pill + the same Keytruda', control: true}],
        endpoint: 'Progression-free survival and overall survival',
        details: {
          'Primary endpoints': '[[progression-free survival]] (scans read by blinded independent central review) and [[overall survival]]',
          'Secondary': '[[response rate]] by [[RECIST]] 1.1, duration of response, safety',
          'Stratified by': 'PD-L1 status and BRAF mutation status (a gene change in about half of melanomas)',
          'Where and when': '118 sites in 23 countries; randomized June 2016 to August 2017; first scan at week 12',
          'Regulatory': 'FDA [[Fast Track designation]], July 2017',
          'Stopped': 'After the second planned [[interim analysis]], on the recommendation of the external [[data monitoring committee]], announced 6 April 2018'}},
      predict: {q: 'In early 2018 the monitoring committee unblinds the data (median follow-up about 12 months). Given the 55% response rate in single-arm studies, what do you expect?',
        options: ['A clear win: progression-free survival much longer with epacadostat, as the phase 1/2 suggested', 'A modest gain in response rate that doesn\'t translate into longer progression-free survival', 'No difference at all: the two arms are almost indistinguishable', 'Harm: the combination does clearly worse than Keytruda alone'],
        answer: 2, explain: 'The arms were almost identical. Median progression-free survival was 4.7 months with epacadostat and 4.9 months with placebo ([[hazard ratio]] 1.00, 95% [[confidence interval]] 0.83–1.21). Response rates were 34.2% vs 31.5%, well within chance. Overall survival was immature (hazard ratio 1.13, 0.86–1.49) and not expected to reach significance. Keytruda plus placebo performed much as Keytruda had in KEYNOTE-006, while the combination fell far short of its single-arm numbers.'},
      results: [
        {kind: 'km', title: 'Progression-free survival', subtitle: 'Schematic curves drawn from the reported medians (4.7 vs 4.9 months) and the approximate 6- and 12-month rates on the presented curves (about 46% and 37% in both arms); not digitized from the paper. The steep early drop reflects the first scan at week 12.', xLabel: 'Months', unit: '%', yMax: 100, xMax: 18,
          series: [
            {name: 'Epacadostat + Keytruda', label: false, points: [[0, 100], [2.7, 97], [2.8, 62], [4.2, 55], [4.7, 50], [6, 45.8], [8, 42], [10, 39], [12, 36.9], [14, 35], [16, 34], [18, 33]]},
            {name: 'Placebo + Keytruda', label: false, color: 8, points: [[0, 100], [2.7, 97], [2.8, 63], [4.2, 56], [4.9, 50], [6, 45.8], [8, 42], [10, 39], [12, 36.6], [14, 35], [16, 34], [18, 33]]}],
          markers: [{x: 4.8, y: 50, label: 'medians 4.7 and 4.9 mo', series: 0}],
          note: 'Hazard ratio 1.00 (0.83–1.21); one-sided p = 0.52. Long et al., Lancet Oncology 2019.'},
        {kind: 'bar', title: 'Every measure, side by side', unit: '%', categories: ['Tumor response (RECIST)', 'Progression-free at 12 months', 'Alive at 12 months'],
          series: [{name: 'Epacadostat + Keytruda', values: [34.2, 36.9, 74.4]}, {name: 'Placebo + Keytruda', color: 8, values: [31.5, 36.6, 74.1]}],
          note: 'Response by blinded central review. 12-month rates as shown on the ASCO 2018 presentation (Long et al.). Grade 3 or worse treatment-related side effects: 21.8% vs 17.0%.'}],
      takeaway: 'Keytruda plus a dummy pill did as well as Keytruda plus epacadostat. The 55% single-arm figure and the 34% randomized figure are not in conflict once you accept that they measured different patients: the randomized trial measured what epacadostat added, and the answer was nothing detectable.'},

    {type: 'story', kicker: 'The moment of failure', title: 'Four weeks that ended a field', tocTitle: 'The unwinding', html: `
<p>The 6 April announcement was short: at the second [[interim analysis]] the study had missed on progression-free survival, overall survival was not expected to reach significance, and safety looked like earlier studies. Incyte's chief medical officer, Steven Stein, said the company would keep exploring IDO1 inhibition and other mechanisms. The market did not wait to hear how.</p>
<p>One could argue melanoma was a special case, since Keytruda already works unusually well there. But every other epacadostat trial had been justified by the same kind of single-arm data, at the same dose. If the melanoma signal was an illusion, why trust the others?</p>
<p>On 1 May 2018, with its quarterly results, Incyte announced the unwinding. Enrollment stopped in four phase 3 trials with Keytruda, in kidney cancer (ECHO-302), bladder cancer (ECHO-303 and ECHO-307) and head and neck cancer (ECHO-304). The two phase 3 lung-cancer trials with Keytruda (ECHO-305 and ECHO-306) were converted into [[randomized phase 2|randomized phase 2]] studies with response rate as the endpoint. The two trials with BMS's Opdivo (ECHO-309 in lung and ECHO-310 in head and neck) stopped enrolling, and the planned phase 3 with AstraZeneca's Imfinzi was never started. Stein said any further IDO work would be done in small proof-of-concept trials. Incyte's 10-K for 2018 would later say simply that the company had "significantly downsized the epacadostat development program".</p>
<p>Around the same time, Bristol-Myers Squibb's chief executive, Giovanni Caforio, said that based on Incyte's announcement and its own data, BMS was rationalizing its IDO program. NewLink stopped the randomized part of its indoximod study in melanoma and moved the drug toward other diseases, including childhood brain tumors. Within weeks, one of the most crowded ideas in oncology had almost no late-stage trials left.</p>
<h3>The trials that were already running</h3>
<p>The truncated trials were eventually analyzed and published together in a 2024 supplement of <i>BMC Cancer</i>. They are small and immature (some had about two months of follow-up), so they are weak evidence, but they point one way. In lung cancer with high PD-L1, the randomized phase 2 found a confirmed response rate of 32.5% with epacadostat versus 39.0% with Keytruda alone. When chemotherapy was added, the epacadostat arm did worse: 26.4% versus 44.8%. In most of these trials the investigators also measured blood kynurenine, which fell with epacadostat but, in the words of the lung-trial paper, was "not normalized in most patients". Nowhere did the combination show the lift the single-arm studies had promised.</p>`},

    {type: 'chart', title: 'The randomized results, across cancers', chart: {kind: 'bar', horizontal: true, labelWidth: 230, title: 'Response rate: epacadostat + PD-1 drug vs PD-1 drug without epacadostat', subtitle: 'Randomized comparisons only. Every trial except ECHO-301 was cut short, so most are small with short follow-up.', unit: '%',
      categories: ['Melanoma (ECHO-301, n=706)', 'Lung, PD-L1 high (KN-654, n=154)', 'Lung + chemo (KN-715, n=178)', 'Bladder, 2nd line (KN-698, n=84)', 'Bladder, 1st line (KN-672, n=93)', 'Head and neck (KN-669, n=54*)'],
      series: [
        {name: 'With epacadostat', values: [34.2, 32.5, 26.4, 26.2, 31.8, 31], notes: ['Central review', 'Confirmed responses', 'Confirmed; both arms had chemo + Keytruda', 'Unconfirmed; median follow-up 62 days', 'Unconfirmed; median follow-up 64 days', 'Investigator-assessed, week 9 scan']},
        {name: 'Without epacadostat', color: 8, values: [31.5, 39.0, 44.8, 11.9, 24.5, 21], notes: ['Keytruda + placebo', 'Keytruda + placebo', 'Keytruda + chemo + placebo', 'Keytruda + placebo; 42 per arm', 'Keytruda + placebo', 'Keytruda alone, only 19 patients']}]},
      takeaway: 'The only large, mature trial shows no difference. The small, truncated trials scatter in both directions, as small trials do; the two bladder studies lean positive on tiny numbers and unconfirmed responses, while the best-powered follow-on (lung with chemotherapy) leaned negative. None changed anyone\'s mind. *Head and neck: 35 patients on the combination vs 19 on Keytruda alone (a third arm got chemotherapy).'},

    {type: 'decision', title: 'Decision: what do you do with the other eight trials?', role: 'You are Incyte\'s leadership team, April 2018', scenario: `
ECHO-301 has just failed. You have eight other epacadostat phase 3 trials running or opening in lung, kidney, bladder and head and neck cancer, with Merck and BMS. Some investigators argue melanoma is different, since Keytruda already works so well there that there was little room to improve. Other tumor types might still benefit. Your partners are waiting for your call.`,
      options: [
        {label: 'Keep all the phase 3s running: different cancers, different biology, and the trials are already open', outcome: 'You preserve the chance of a win in another tumor type, and avoid wasting the setup costs. But you keep enrolling hundreds of patients into trials justified by the same kind of evidence that just failed, at the same unverified dose. Investigators, ethics committees and partners are unlikely to go along, and if a second trial fails, your credibility suffers with it.'},
        {label: 'Stop everything immediately and walk away from IDO', outcome: 'Clean and decisive, and it frees money and patients for other programs. But it throws away the chance to learn anything from patients already randomized, and it treats one trial in one cancer as a complete refutation of the biology, which is more than the data can say.'},
        {label: 'Stop enrolling, but analyze the patients already randomized as small randomized phase 2s, with kynurenine measured, and keep IDO only in small proof-of-concept studies', outcome: 'You stop putting new patients at risk of a useless extra drug, but extract an honest randomized read from those already enrolled, including whether the dose moved the biomarker. The results will be small and immature, but they will be controlled, which is more than the field had before.'},
      ],
      reality: 'Incyte did roughly the third option. Enrollment stopped in the kidney, bladder and head and neck trials and the two Opdivo trials, the lung trials were converted to randomized phase 2s, the AstraZeneca trial was never started, and future IDO work was limited to small proof-of-concept studies. The truncated trials were analyzed and published in 2024. None showed a meaningful benefit.'},

    // ---------------------------------------------------------------- POST-MORTEM
    {type: 'story', kicker: 'The post-mortem', title: 'What actually went wrong', tocTitle: 'Post-mortem', html: `
<p>Nobody knows for certain why epacadostat did not work. What we do know is why the field was surprised, which is the more useful lesson. There are three layers: evidence, biology and behavior.</p>
<h3>Layer one: evidence that could not answer the question</h3>
<p><b>No control arm.</b> ECHO-202 was a [[single-arm trial]], so there was no way to separate what Keytruda did from what epacadostat added. Such a study can show a combination is safe and that patients respond. It cannot show why.</p>
<p><b>The wrong benchmark.</b> 55% against KEYNOTE-006's 33% was a [[cross-trial comparison]] with a [[historical control]]. KEYNOTE-006 enrolled a broader population; ECHO-202's melanoma patients were mostly [[treatment-naive]]. Keytruda's own single-arm data in treatment-naive patients, published in <i>JAMA</i> in April 2016 while ECHO-301 was starting, showed 45%. Against the right benchmark, ECHO-202 looked like Keytruda doing what Keytruda does.</p>
<p><b>Selection and small numbers.</b> A 22-patient cohort with 12 responders has a 95% [[confidence interval]] of roughly 32% to 76%. Run dozens of small cohorts across tumor types and some will look spectacular by chance; those get presented and acted on, and larger numbers later drift back: [[regression to the mean]].</p>
<p><b>No proof the target was hit in tumors.</b> The first-in-human study showed large falls in blood kynurenine. But in ECHO-202 inhibition was projected from drug levels rather than measured; in the later randomized trials, 100 mg twice daily lowered blood kynurenine without normalizing it in most patients; and a pooled analysis cited by Tara Mitchell found that even doses below 600 mg twice daily could not keep it normal. Tumor-tissue evidence was scarce. So when ECHO-301 failed, it could not say whether the idea was wrong or merely under-dosed. Alexander Muller, George Prendergast and colleagues made this point in 2019: a single trial with significant limitations was "by no means a definitive test for the field".</p>
<h3>Layer two: biology that may not have worked as believed</h3>
<p><b>A marker, not a driver?</b> If IDO rises mainly in tumors already under T-cell attack (Spranger and Gajewski, 2013), IDO-high tumors respond to PD-1 drugs anyway, and blocking IDO adds little.</p>
<p><b>Backup routes.</b> Tumors can make kynurenine with [[TDO]] (or IDO2), which epacadostat was designed not to touch. Muller and colleagues noted that work since 2011 had pointed toward blocking both IDO and TDO, or the downstream [[aryl hydrocarbon receptor]]. Six days after the result, Mark Manfredi, chief executive of Kyn Therapeutics (which was developing drugs for that downstream pathway, so not a neutral voice), argued the same and questioned whether 100 mg had been enough.</p>
<p><b>Unexpected drug behavior.</b> Laboratory work in ovarian cancer cells (Rossini and colleagues, 2024) found that epacadostat stabilizes a form of the IDO1 protein that can still send pro-tumor signals. That is unproven in patients, but it shows how much about the target was unknown. Muller's group also judged the mouse data for the combination "not particularly compelling".</p>
<h3>Layer three: how organizations behaved</h3>
<p><b>Herding.</b> Every PD-1 owner faced the same asymmetric fear: being second to a working IDO combination looked catastrophic, joining a failing one merely expensive. So everyone committed early on the same evidence, and the diversity of views that normally catches errors disappeared. That is [[herding]].</p>
<p><b>Opportunity cost.</b> On top of ECHO-301's 706 patients, the halted follow-on trials had randomized nearly 800 more; the bladder trial ECHO-303 alone had been targeting 648. Trial sites and eligible patients are finite, and some patients spent months on a pill that added side effects (grade 3 or worse treatment-related events: 21.8% vs 17.0% in ECHO-301) and nothing else.</p>`},

    {type: 'custom', title: 'Spot the warning signs', tocTitle: 'Spot the warning signs', intro: 'Here are nine things that were known, or knowable, before ECHO-301 read out. Mark each as a warning sign or reassuring, then check your answers. Some are genuinely debatable; the explanations say why.',
      html: `<div class="card"><div data-list></div>
        <div style="display:flex;gap:10px;align-items:center;margin-top:14px"><button class="btn primary" data-check>Check my answers</button><button class="btn" data-reset>Reset</button><span data-score style="font-weight:650"></span></div></div>`,
      init: (root, api) => {
        const items = [
          {s: 'Epacadostat alone produced no objective responses in 52 patients in its first-in-human trial.', a: 'r', why: 'Mostly reassuring, or at least neutral: an immune-brake drug is not expected to shrink tumors alone. But it does mean every sign of benefit depended on a partner drug, so the design had to isolate what the partner contributed.'},
          {s: 'In ECHO-202, 55% of treatment-naive melanoma patients responded, versus 33% for Keytruda in KEYNOTE-006.', a: 'w', why: 'Warning sign. A single-arm number compared with a different trial\'s population. Keytruda alone in treatment-naive patients had shown 45% in 2016.'},
          {s: 'Kynurenine was not directly measured over time in the ECHO-202 phase 1; IDO1 inhibition was projected from drug levels.', a: 'w', why: 'Warning sign. The dose for every later trial was chosen without direct evidence that it shut down the target, let alone in tumors.'},
          {s: 'Adding epacadostat to Keytruda caused little extra toxicity.', a: 'r', why: 'Reassuring about safety, but a trap if read as evidence of efficacy. A drug that does nothing also adds little toxicity. Low toxicity made the rush feel cheap.'},
          {s: 'Responses were seen in six different tumor types.', a: 'w', why: 'Seductive but a warning sign. Keytruda alone produces responses in all of those cancers. Breadth of single-arm activity says nothing about what the second drug adds.'},
          {s: 'In mice, an IDO1 inhibitor plus a PD-L1 antibody shrank tumors more than either alone.', a: 'r', why: 'Genuinely supportive, and a reasonable basis for testing the idea. Some experts later argued the mouse data were modest compared with other combinations, and mouse models often mislead, so it is weak support rather than proof.'},
          {s: 'IDO appears mainly in melanomas that are already full of killer T cells, switched on by their alarm signal.', a: 'w', why: 'Warning sign, in hindsight. If IDO marks tumors under immune attack, those tumors respond to PD-1 drugs anyway and blocking IDO may add little.'},
          {s: 'Many tumors can also make kynurenine through TDO, which epacadostat does not block.', a: 'w', why: 'Warning sign. A highly selective IDO1 inhibitor leaves a bypass open. Researchers had flagged this route since 2011.'},
          {s: 'ECHO-301 was double-blind, placebo-controlled, stratified and randomized 706 patients.', a: 'r', why: 'Reassuring: this is a well-designed trial and it is why we know the answer. The problem was not the phase 3 design; it was betting a whole field on the phase 3 without a randomized phase 2 first.'},
        ];
        const list = root.querySelector('[data-list]'), ans = {};
        const draw = (checked) => {
          list.innerHTML = items.map((it, i) => {
            const pick = ans[i], ok = checked && pick === it.a;
            const b = (k, lab) => '<button class="btn" data-i="' + i + '" data-k="' + k + '" style="padding:3px 10px;font-size:13px;' + (pick === k ? 'background:var(--ink);color:var(--paper);border-color:var(--ink)' : '') + '">' + lab + '</button>';
            return '<div style="padding:10px 0;border-bottom:1px solid var(--rule-2)"><div style="font:400 16px/1.5 var(--serif);margin-bottom:6px">' + (i + 1) + '. ' + api.terms(it.s) + '</div><div style="display:flex;gap:6px;flex-wrap:wrap">' + b('w', 'Warning sign') + b('r', 'Reassuring') + '</div>' +
              (checked ? '<div style="margin-top:6px;font-size:15px;line-height:1.5"><b style="color:' + (ok ? 'var(--good)' : 'var(--bad)') + '">' + (pick == null ? 'Not answered.' : ok ? 'Agreed.' : 'Most experts would disagree.') + '</b> ' + api.terms(it.why) + '</div>' : '') + '</div>';
          }).join('');
        };
        list.addEventListener('click', e => { const b = e.target.closest('button[data-i]'); if (!b) return; ans[b.dataset.i] = b.dataset.k; draw(false); root.querySelector('[data-score]').textContent = ''; });
        root.querySelector('[data-check]').onclick = () => { draw(true); const n = items.filter((it, i) => ans[i] === it.a).length; root.querySelector('[data-score]').textContent = n + ' of ' + items.length + ' match the expert view'; };
        root.querySelector('[data-reset]').onclick = () => { Object.keys(ans).forEach(k => delete ans[k]); draw(false); root.querySelector('[data-score]').textContent = ''; };
        draw(false);
      }},

    {type: 'callout', variant: 'whatif', heading: 'What if Merck had run a randomized phase 2 in 2015?', html: `
<p>Suppose that instead of going straight to ECHO-301, Merck and Incyte had randomized about 150 treatment-naive melanoma patients to Keytruda plus epacadostat or Keytruda plus placebo, measured kynurenine in blood and in tumor biopsies, and read out response rates within about a year. Given what ECHO-301 later showed (34% vs 32%), the likeliest result is a small, non-significant difference, and possibly a finding that 100 mg twice daily did not fully suppress IDO1 in tumors.</p>
<p>That result would have arrived around 2017, before most of the other phase 3s opened. It might have prompted a higher-dose study, a switch to a dual IDO/TDO approach, or an early exit. It would probably not have stopped BMS's Flexus deal, which was signed in February 2015. But it could have spared many of the roughly 1,500 patients who were randomized into epacadostat phase 3 and converted trials, and it would have let a failure in one company stay a failure in one company. The randomized lung-cancer phase 2 that Incyte eventually ran, with 154 patients, is essentially this experiment, three years late.</p>`},

    // ---------------------------------------------------------------- WHAT CHANGED
    {type: 'story', kicker: 'What changed', title: 'The field\'s new rules for combinations', tocTitle: 'What changed', html: `
<p><b>Randomized phase 2 before phase 3.</b> A new drug added to an established one needs a randomized comparison against the established drug alone before a big phase 3 program; Tara Mitchell's 2024 summary of the epacadostat trials makes exactly this point. It was always the textbook view; epacadostat made it expensive to ignore. Nor was the principle new: the FDA's 2013 guidance on co-developing two investigational drugs, and the older combination-drug rule it cites, already expect sponsors to show the contribution of each drug, typically with a [[factorial design]]. Epacadostat's partner, Keytruda, was already approved, so the combination did not formally fall under that guidance, but the logic was identical.</p>
<p><b>Proof of mechanism first.</b> After epacadostat, investors and partners became more likely to ask a blunt question of any immunotherapy combination: show me that your drug hits its target in the tumor, at your dose, before you show me response rates. That means designing [[pharmacodynamics]] into early trials (paired biopsies, validated blood markers, dose-ranging with a biomarker endpoint), not bolting it on later.</p>
<p><b>Skepticism of cross-trial comparisons and crowding.</b> Single-arm response rates next to historical benchmarks still appear routinely in oncology presentations, but "what is the right comparator population?" is now the first question a careful reader asks. And the landscape analyses that had warned about redundant PD-1 combination trials now had a concrete example to point to.</p>
<h3>What happened to IDO</h3>
<p>The biology did not vanish: researchers still study kynurenine signaling, dual IDO/TDO inhibitors, downstream-receptor blockers and IDO-targeted cancer vaccines. But no IDO inhibitor has been approved for cancer, and new trial starts never returned to their 2017–2018 peak. Incyte survived on Jakafi and other drugs, and kept growing (revenue rose from $1.54 billion in 2017 to $1.88 billion in 2018).</p>
<p>The deeper legacy is methodological: a field talked itself into a conclusion that only one well-designed experiment could test, and then waited until the last and largest step to run it.</p>`},

    {type: 'callout', variant: 'lesson', heading: 'The one idea to keep', html: `<p>An add-on drug has to be judged by what it adds, and only a randomized comparison against the base drug alone, in the same patients, at the same time, can measure that. Before paying for that comparison at phase 3 scale, prove that your dose actually blocks the target where the disease is. Epacadostat had neither, and so did everyone who followed it.</p>`},

    // ---------------------------------------------------------------- QUIZ
    {type: 'quiz', title: 'Check yourself', questions: [
      {q: 'Why did the 1998 Munn and Mellor pregnancy experiment matter for cancer?', options: ['It proved tumors are made of fetal cells', 'It showed that destroying tryptophan with IDO can actively suppress T cells, suggesting tumors could use the same shield', 'It showed that PD-1 blocks rejection of fetuses', 'It showed that IDO inhibitors shrink tumors in mice'], answer: 1, explain: 'Blocking IDO made mice reject genetically different fetuses. That turned IDO into an immune regulator, and later work showed many tumors express it too.'},
      {q: 'ECHO-202 reported a 55% response rate in treatment-naive melanoma with epacadostat plus Keytruda. What was the main problem with comparing that to Keytruda\'s 33% in KEYNOTE-006?', options: ['The two trials used different doses of Keytruda', 'KEYNOTE-006 was not a real trial', 'The patient populations differed; Keytruda alone had already shown about 45% in treatment-naive patients in another single-arm study', 'Response rate cannot be measured in melanoma'], answer: 2, explain: 'The right benchmark was Keytruda alone in similar patients, and that was already around 45–52%. The comparison was cross-trial and used a historical control.'},
      {q: 'In ECHO-301, what was the hazard ratio for progression-free survival, and what does it mean?', options: ['0.50: epacadostat halved the risk of progression', '1.00: no difference in the rate of progression between the arms', '1.13: epacadostat significantly increased deaths', '0.83: a modest, significant benefit'], answer: 1, explain: 'A hazard ratio of 1.00 means progression happened at the same rate in both arms. (0.83–1.21 was the confidence interval, and 1.13 was the immature overall-survival ratio, not significant.)'},
      {q: 'A small single-arm study of a new add-on drug shows striking responses. Which additional result would most increase your confidence before approving a phase 3?', options: ['Responses in even more tumor types', 'Low toxicity when the drugs are combined', 'A randomized comparison against the base drug alone, plus biopsies showing the target is blocked in tumors at the chosen dose', 'A larger single-arm cohort at a famous cancer center'], answer: 2, explain: 'Breadth, safety and bigger single-arm cohorts can all be produced by a drug that adds nothing. Only randomization isolates the add-on\'s contribution, and target engagement tells you the test is meaningful.'},
      {q: 'Why might a drug that clearly lowers kynurenine in blood still fail to work in tumors?', options: ['Blood tests are always wrong', 'Tumors may have far more enzyme, lower drug penetration or a backup enzyme (TDO), so the target inside the tumor may not be fully blocked', 'Kynurenine is not related to IDO', 'Blood kynurenine only reflects kidney function'], answer: 1, explain: 'Blood is a proxy. The randomized follow-on trials found that 100 mg twice daily lowered but did not normalize blood kynurenine in most patients, and there was little direct tumor evidence.'},
      {q: 'Spranger and Gajewski found IDO mostly in tumors already full of T cells. Why is that awkward for the IDO combination thesis?', options: ['It means IDO cannot be measured', 'It suggests IDO may mark tumors that are already under attack and likely to respond to PD-1 drugs anyway, rather than being what blocks non-responders', 'It proves IDO causes cancer', 'It means T cells make epacadostat'], answer: 1, explain: 'If IDO is negative feedback that follows an immune attack, IDO-high tumors are good PD-1 responders already, and blocking IDO may add little.'},
      {q: 'BMS paid $800 million up front for Flexus in 2015. What was unusual about that?', options: ['Flexus had an approved drug', 'The IDO1 inhibitor BMS bought had not yet been tested in any human', 'The payment was in shares, not cash', 'BMS had no PD-1 drug to combine it with'], answer: 1, explain: 'F001287 was preclinical, with a human-trial filing planned for later in 2015. The price reflected fear of missing out on a mechanism that looked like it would matter.'},
      {q: 'Which best describes the "herding" problem in this case?', options: ['Too few companies worked on IDO', 'Many companies made correlated bets on the same evidence and assumptions, so one failure hit all of them at once and consumed shared trial capacity', 'Regulators forced companies to run IDO trials', 'Patients refused to join IDO trials'], answer: 1, explain: 'Locally rational decisions (nobody wanted to be second) produced a system with a single point of failure, and used up finite patients and trial sites.'},
      {q: 'After ECHO-301, what is the most defensible scientific conclusion?', options: ['IDO biology is completely disproven', 'Epacadostat at 100 mg twice daily added no detectable benefit to Keytruda in advanced melanoma; whether other doses, drugs or approaches to the pathway could work remains open', 'Keytruda does not work in melanoma', 'All combination immunotherapies are ineffective'], answer: 1, explain: 'One well-run trial answers one question well. It does not settle whether better-dosed or differently targeted IDO-pathway drugs could help, which is why proving target engagement first matters so much.'},
    ]},

    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'A single-arm number is not a comparison', text: 'Response rates from studies with no control group, set against another trial\'s patients, can manufacture an effect out of selection and chance. The fair benchmark for an add-on is the base drug alone in the same kind of patients.', links: ['keytruda', 'aduhelm']},
      {title: 'Prove the mechanism before you scale the bet', text: 'A 706-patient trial that fails without evidence of target engagement cannot tell you whether the idea was wrong or the dose was. Build pharmacodynamics into the earliest trials.', links: ['torcetrapib', 'tgn1412']},
      {title: 'An add-on must show what it adds', text: 'For combinations, randomize against the backbone drug alone before phase 3. The extra year is cheap compared with a failed program, and it keeps a failure local.', links: ['enhertu', 'comirnaty']},
      {title: 'Correlated bets fail together', text: 'When every company builds on the same evidence and assumptions, a single flaw takes out the whole field and consumes the finite supply of trial patients along the way.', links: ['exubera', 'vioxx']},
      {title: 'A marker that travels with response is not necessarily a cause', text: 'IDO was high in tumors under immune attack, which may be why it looked important. Correlation in tissue samples is a hypothesis, not target validation.', links: ['leqembi', 'aduhelm']},
    ]},

    {type: 'sources', title: 'Sources', items: [
      {text: 'Munn DH, Zhou M, Attwood JT, … Mellor AL. Prevention of allogeneic fetal rejection by tryptophan catabolism. Science 1998;281:1191.', url: 'https://doi.org/10.1126/science.281.5380.1191'},
      {text: 'Yamamoto S, Hayaishi O. Tryptophan pyrrolase of rabbit intestine. J Biol Chem 1967.', url: 'https://doi.org/10.1016/S0021-9258(18)99420-2'},
      {text: 'Uyttenhove C, … Van den Eynde BJ. Evidence for a tumoral immune resistance mechanism based on tryptophan degradation by indoleamine 2,3-dioxygenase. Nat Med 2003.', url: 'https://doi.org/10.1038/nm934'},
      {text: 'Munn DH, Sharma MD, … Mellor AL. GCN2 kinase in T cells mediates proliferative arrest and anergy induction in response to indoleamine 2,3-dioxygenase. Immunity 2005.', url: 'https://doi.org/10.1016/j.immuni.2005.03.013'},
      {text: 'Opitz CA, et al. An endogenous tumour-promoting ligand of the human aryl hydrocarbon receptor. Nature 2011.', url: 'https://doi.org/10.1038/nature10491'},
      {text: 'Spranger S, … Gajewski TF. Up-regulation of PD-L1, IDO, and Tregs in the melanoma tumor microenvironment is driven by CD8+ T cells. Sci Transl Med 2013.', url: 'https://doi.org/10.1126/scitranslmed.3006504'},
      {text: 'Yue EW, et al. Discovery of potent competitive inhibitors of indoleamine 2,3-dioxygenase with in vivo pharmacodynamic activity and efficacy in a mouse melanoma model. J Med Chem 2009.', url: 'https://doi.org/10.1021/jm900518f'},
      {text: 'Liu X, et al. Selective inhibition of IDO1 effectively regulates mediators of antitumor immunity. Blood 2010.', url: 'https://pubmed.ncbi.nlm.nih.gov/20197554/'},
      {text: 'Yue EW, et al. INCB24360 (epacadostat), a highly potent and selective IDO1 inhibitor for immuno-oncology. ACS Med Chem Lett 2017.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5430407/'},
      {text: 'Beatty GL, et al. First-in-human phase I study of the oral inhibitor of indoleamine 2,3-dioxygenase-1 epacadostat (INCB024360) in patients with advanced solid malignancies. Clin Cancer Res 2017;23:3269–76.', url: 'https://doi.org/10.1158/1078-0432.CCR-16-2272'},
      {text: 'Gibney GT, et al. Phase 1/2 study of epacadostat in combination with ipilimumab in patients with unresectable or metastatic melanoma. J Immunother Cancer 2019.', url: 'https://doi.org/10.1186/s40425-019-0562-8'},
      {text: 'Mitchell TC, Hamid O, Smith DC, et al. Epacadostat plus pembrolizumab in patients with advanced solid tumors: phase I results from a multicenter, open-label phase I/II trial (ECHO-202/KEYNOTE-037). J Clin Oncol 2018.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6225502/'},
      {text: 'Long GV, et al. Epacadostat plus pembrolizumab versus pembrolizumab alone in unresectable or metastatic melanoma: results of the phase 3 ECHO-301/KEYNOTE-252 study. ASCO 2018 presentation slides (includes ECHO-202 phase 1/2 treatment-naive melanoma summary from Hamid et al., ESMO 2017).', url: 'https://www.biomedtracker.com/EventFiles/INCY%202018-06-03%20ASCO%20ECHO-301%20Slides.pdf'},
      {text: 'Long GV, Dummer R, Hamid O, et al. Epacadostat plus pembrolizumab versus placebo plus pembrolizumab in patients with unresectable or metastatic melanoma (ECHO-301/KEYNOTE-252): a phase 3, randomised, double-blind study. Lancet Oncol 2019;20:1083–97.', url: 'https://doi.org/10.1016/S1470-2045(19)30274-8'},
      {text: 'ClinicalTrials.gov record NCT02752074 (ECHO-301/KEYNOTE-252).', url: 'https://clinicaltrials.gov/study/NCT02752074'},
      {text: 'Robert C, et al. Pembrolizumab versus ipilimumab in advanced melanoma (KEYNOTE-006). N Engl J Med 2015.', url: 'https://doi.org/10.1056/NEJMoa1503093'},
      {text: 'Ribas A, et al. Association of pembrolizumab with tumor response and survival among patients with advanced melanoma (KEYNOTE-001). JAMA 2016.', url: 'https://pubmed.ncbi.nlm.nih.gov/27092830/'},
      {text: 'Hamid O, et al. Five-year survival outcomes for patients with advanced melanoma treated with pembrolizumab in KEYNOTE-001. Ann Oncol 2019.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6503622/'},
      {text: 'Mitchell TC. Valuable insights from the epacadostat plus pembrolizumab clinical trials in solid cancers. BMC Cancer 2024.', url: 'https://doi.org/10.1186/s12885-024-12432-1'},
      {text: 'Tokito T, et al. Epacadostat plus pembrolizumab versus placebo plus pembrolizumab as first-line treatment for metastatic NSCLC with high PD-L1 (KEYNOTE-654/ECHO-305). BMC Cancer 2024.', url: 'https://doi.org/10.1186/s12885-023-11203-8'},
      {text: 'Boyer M, et al. Pembrolizumab with platinum-based chemotherapy with or without epacadostat for metastatic NSCLC (KEYNOTE-715/ECHO-306). BMC Cancer 2024.', url: 'https://doi.org/10.1186/s12885-022-10427-4'},
      {text: 'Cicin I, et al. Epacadostat plus pembrolizumab versus placebo plus pembrolizumab for advanced urothelial carcinoma (ECHO-303/KEYNOTE-698). BMC Cancer 2024.', url: 'https://doi.org/10.1186/s12885-023-11213-6'},
      {text: 'Necchi A, et al. Pembrolizumab plus either epacadostat or placebo for cisplatin-ineligible urothelial carcinoma (ECHO-307/KEYNOTE-672). BMC Cancer 2024.', url: 'https://doi.org/10.1186/s12885-023-10727-3'},
      {text: 'Cho BC, et al. Pembrolizumab plus epacadostat in recurrent/metastatic head and neck squamous cell carcinoma (KEYNOTE-669/ECHO-304). BMC Cancer 2024.', url: 'https://doi.org/10.1186/s12885-023-11316-0'},
      {text: 'Lara PN, et al. Pembrolizumab plus epacadostat versus sunitinib or pazopanib for metastatic renal cell carcinoma (KEYNOTE-679/ECHO-302). BMC Cancer 2024.', url: 'https://doi.org/10.1186/s12885-023-10971-7'},
      {text: 'Muller AJ, Manfredi MG, Zakharia Y, Prendergast GC. Inhibiting IDO pathways to treat cancer: lessons from the ECHO-301 trial and beyond. Semin Immunopathol 2019.', url: 'https://doi.org/10.1007/s00281-018-0702-0'},
      {text: 'Rossini S, et al. Epacadostat stabilizes the apo-form of IDO1 and signals a pro-tumorigenic pathway in human ovarian cancer cells. Front Immunol 2024.', url: 'https://doi.org/10.3389/fimmu.2024.1346686'},
      {text: 'Manfredi M. Life after ECHO-301: lessons learned about modulating IDO/TDO to treat cancer. LifeSciVC, April 2018.', url: 'https://lifescivc.com/2018/04/life-after-echo-301-lessons-learned-about-modulating-ido-tdo-to-treat-cancer/'},
      {text: 'Incyte and Merck. Update on phase 3 study of epacadostat in combination with Keytruda in unresectable or metastatic melanoma. Press release, 6 April 2018.', url: 'https://www.merck.com/news/incyte-and-merck-provide-update-on-phase-3-study-of-epacadostat-in-combination-with-keytruda-pembrolizumab-in-patients-with-unresectable-or-metastatic-melanoma/'},
      {text: 'Incyte Corporation. Form 10-K for 2017 (collaborations, ECHO program, R&D and revenue) and Form 10-K for 2018 (downsizing of the epacadostat program).', url: 'https://www.sec.gov/Archives/edgar/data/879169/000155837018000722/incy-20171231x10k.htm'},
      {text: 'Bristol-Myers Squibb. BMS to expand its immuno-oncology pipeline with agreement to acquire Flexus Biosciences. Press release (SEC Form 8-K exhibit), 23 February 2015.', url: 'https://www.sec.gov/Archives/edgar/data/14272/000119312515070065/d879683dex991.htm'},
      {text: 'NewLink Genetics. Exclusive worldwide licensing agreement with Genentech for NLG919. Press release (SEC Form 8-K exhibit), 20 October 2014.', url: 'https://www.sec.gov/Archives/edgar/data/1126234/000112623414000169/nlnk-20141020x8kex991.htm'},
      {text: 'GEN. Incyte, Merck & Co. halt phase III trial after epacadostat/Keytruda combination fails in melanoma. April 2018 (share price figures).', url: 'https://www.genengnews.com/news/incyte-merck-co-halt-phase-iii-trial-after-epacadostat-keytruda-combination-fails-in-melanoma/'},
      {text: 'BioPharma Dive. Incyte cancer study fails, setting back drug combo hopes. April 2018 (NewLink share fall).', url: 'https://www.biopharmadive.com/news/incyte-cancer-study-fails-setting-back-drug-combo-hopes/520781/'},
      {text: 'BioPharma Dive. IDO drug development scaled back in wake of Incyte trial miss. May 2018.', url: 'https://www.biopharmadive.com/news/incye-ido-drug-development-scaled-back/522635/'},
      {text: 'Tang J, Shalabi A, Hubbard-Lucey VM. Comprehensive analysis of the clinical immuno-oncology landscape. Ann Oncol 2018.', url: 'https://doi.org/10.1093/annonc/mdx755'},
      {text: 'ClinicalTrials.gov API v2 search of interventional trials of epacadostat/INCB024360, indoximod, BMS-986205/linrodostat, navoximod/GDC-0919/NLG919, PF-06840003, KHK2455 and LY3381916 (accessed September 2026), used for the herding chart and the phase 3 trial statuses.', url: 'https://clinicaltrials.gov/data-api/api'},
      {text: 'US FDA. Codevelopment of two or more new investigational drugs for use in combination. Guidance for industry, June 2013.', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/codevelopment-two-or-more-new-investigational-drugs-use-combination'},
      {text: 'Merck & Co. Form 10-K for 2014 (Keytruda US approval, September 2014).', url: 'https://www.sec.gov/Archives/edgar/data/310158/000031015815000005/mrk1231201410k.htm'},
    ]},
  ],
});
