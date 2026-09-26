// Aduhelm (aducanumab): a cautionary tale about evidence, regulation and trust. See GUIDE.md.
registerCase({
  id: 'aduhelm', kind: 'failure',
  brand: 'Aduhelm', generic: 'aducanumab', company: 'Biogen, with Neurimmune and Eisai',
  tagline: 'An antibody that cleared plaque from the brain. Nobody could show it saved memory. Then the FDA approved it anyway, and doctors, insurers and Europe refused to go along.',
  chips: [['Disease', "Early Alzheimer's disease"], ['Modality', '[[monoclonal antibody]]'], ['Target', 'Clumped [[amyloid beta]]'], ['Approved', 'June 2021 ([[accelerated approval|accelerated]])'], ['Discontinued', '2024']],
  readingTime: 36,
  stats: [
    {v: '10 of 11', l: 'FDA advisers who voted the key trial was not primary evidence it worked (the 11th: uncertain)', n: 'FDA summary review, Nov 2020 vote'},
    {v: '22% vs +2%', l: 'Effect on decline in the two identical [[phase 3]] trials: EMERGE slowed it, ENGAGE did not', n: 'FDA label and review'},
    {v: '$56,000', l: 'Launch [[list price]] per year, halved to $28,200 six months later', n: 'Biogen; House report'},
    {v: '$3M', l: "Aduhelm's entire 2021 revenue, against internal hopes of $18B a year at peak", n: 'House report, citing Biogen'},
    {v: '$9.80', l: 'Added to every Medicare Part B monthly premium in 2022 to cover possible Aduhelm spending', n: 'CMS Office of the Actuary'},
  ],
  emblem: `<svg viewBox="0 0 300 300" role="img" aria-label="A brain, half full of plaque, half cleared by antibodies, with a question mark">
    <circle cx="150" cy="150" r="138" class="il-7s"/>
    <path d="M70 160 C52 112 88 66 146 64 C210 60 246 104 238 152 C233 190 202 212 164 210 L150 212 C112 220 82 200 70 160 Z" class="il-paper il-line2"/>
    <path d="M150 70 V210" class="il-line il-dash" fill="none"/>
    <path d="M92 120 C108 108 122 118 134 108 M86 158 C102 146 118 160 134 150 M100 190 C112 180 124 190 136 182" class="il-line il-none" fill="none"/>
    <path d="M166 108 C178 118 192 106 208 118 M166 150 C182 160 196 146 214 158 M164 184 C176 192 188 180 202 190" class="il-line il-none" fill="none"/>
    <circle cx="104" cy="134" r="9" class="il-2"/><circle cx="118" cy="140" r="6" class="il-2"/><circle cx="96" cy="176" r="7" class="il-2"/><circle cx="126" cy="172" r="10" class="il-2"/><circle cx="116" cy="96" r="6" class="il-2"/>
    <g class="st-1" stroke-width="5" stroke-linecap="round" fill="none"><path d="M186 142 V126 M186 126 L176 114 M186 126 L196 114"/><path d="M212 178 V162 M212 162 L202 150 M212 162 L222 150"/><path d="M200 104 V88 M200 88 L190 76 M200 88 L210 76"/></g>
    <text x="150" y="262" text-anchor="middle" class="il-num">plaque ↓ · memory ?</text>
  </svg>`,
  facts: {start: 2007, firstHuman: null, approval: 2021, end: 2024, peakSalesB: null, pivotalN: 3285,
    area: 'neuro', modality: 'antibody', target: 'Aggregated amyloid beta'},
  themes: ['surrogate-endpoints', 'regulatory', 'pricing', 'patient-advocacy'],
  glossary: {
    'amyloid beta': 'The protein fragment (often written Aβ) that clumps into plaques in Alzheimer\'s disease. Single pieces are made normally; the clumps are thought to be the problem.',
    'amyloid hypothesis': 'The idea that build-up of amyloid beta is the trigger that sets off the rest of Alzheimer\'s disease, so clearing it early should slow the disease.',
    'neuron': 'A nerve cell. Neurons carry electrical signals and connect to each other at synapses. Losing them causes the symptoms of dementia.',
    'dementia': 'Loss of memory and thinking severe enough to interfere with daily life. Alzheimer\'s disease is its most common cause.',
    'mild cognitive impairment': 'Noticeable memory or thinking problems that do not yet stop someone living independently. Often the first symptomatic stage of Alzheimer\'s.',
    'microglia': 'The brain\'s own immune cells. They patrol for debris and can swallow plaque that has been coated with antibody.',
    'blood-brain barrier': 'The tightly sealed lining of the brain\'s blood vessels. It keeps most large molecules, including almost all of an injected antibody, out of the brain.',
    'PET scan': 'Positron emission tomography: a scan that follows a faintly radioactive tracer injected into the blood to show where a particular molecule sits in the body.',
    'amyloid PET': 'A PET scan whose tracer sticks to amyloid plaque, so plaque shows up as a bright signal. It measures plaque, not memory.',
    'centiloid': 'A standard scale for amyloid PET results: 0 is a typical young healthy brain, 100 a typical brain with mild Alzheimer\'s dementia.',
    'CDR-SB': 'Clinical Dementia Rating, Sum of Boxes. A clinician interviews the patient and a close companion and scores six areas (memory, orientation, judgment, community affairs, home and hobbies, personal care) from 0 to 3 each. Total 0 (healthy) to 18. Higher is worse.',
    'ApoE4': 'A common version of the APOE gene and the strongest common genetic risk factor for late-onset Alzheimer\'s. Carriers build up more amyloid and are more prone to ARIA on anti-amyloid drugs.',
    'ARIA': 'Amyloid-related imaging abnormalities: brain swelling (ARIA-E) or tiny bleeds (ARIA-H) seen on MRI in people taking anti-amyloid antibodies. Usually silent; sometimes headache, confusion or worse.',
    'ARIA-E': 'The swelling (edema) form of ARIA, visible on MRI.',
    'ARIA-H': 'The bleeding (hemosiderin) form of ARIA: microbleeds or iron deposits on the brain surface, visible on MRI.',
    'MRI': 'Magnetic resonance imaging: a scan that uses magnets and radio waves to picture soft tissue. Used to watch for ARIA.',
    'infusion': 'A drug dripped slowly into a vein, usually in a clinic, over about an hour.',
    'dose titration': 'Starting a drug at a low dose and stepping it up over weeks or months. Here it was used to reduce the risk of ARIA.',
    'protocol amendment': 'A formal change to a trial\'s rules while it is running, such as a new dose. Allowed, but it makes the results harder to interpret.',
    'conditional power': 'The estimated chance a trial will succeed at the end, given the data so far and an assumption about how the rest of the data will look.',
    'post hoc analysis': 'An analysis chosen after seeing the data. Good for generating ideas, weak as proof, because there are many ways to slice a dataset.',
    'statistical analysis plan': 'The document, fixed before the data are unblinded, that says exactly how a trial will be analyzed. It stops anyone choosing the analysis that looks best.',
    'multiplicity': 'The problem that the more comparisons you run, the more likely it is that at least one looks significant by chance alone.',
    'garden of forking paths': 'A phrase from statisticians Andrew Gelman and Eric Loken for the many choices analysts can make after seeing data. Each fork can turn noise into something that looks real.',
    'Type C meeting': 'A formal meeting a drug company can request with the FDA to get advice on almost any development question.',
    'joint briefing document': 'A single advisory committee briefing written by the FDA and the company together, instead of each writing its own.',
    'Medicare': 'US government health insurance for people aged 65 and over, and some younger people with disabilities.',
    'Medicare Part B': 'The part of Medicare that pays for doctor visits and drugs given in clinics, such as infusions. Beneficiaries pay a monthly premium and usually 20% of the cost.',
    'National Coverage Determination': 'A CMS decision on whether, and under what conditions, Medicare pays for a treatment anywhere in the US.',
    'coverage with evidence development': 'A Medicare policy of paying for a treatment only for patients enrolled in approved studies, so the missing evidence gets collected.',
    'confirmatory trial': 'The study a company must run after accelerated approval to show that the drug gives a real clinical benefit.',
    'FDORA': 'The Food and Drug Omnibus Reform Act of 2022, passed inside a year-end spending law, which tightened the rules for accelerated approval.',
    'CHMP': 'The EMA\'s Committee for Medicinal Products for Human Use, which gives the scientific opinion on whether a medicine should be approved in the EU.',
    'WAC': 'Wholesale acquisition cost: the manufacturer\'s list price to wholesalers, before any discounts.',
    'Office of Neuroscience': 'The part of the FDA\'s drug center that reviews medicines for brain and nerve diseases. Its director in this story was Dr. Billy Dunn.',
  },
  sections: [
    // ---------------- COLD OPEN ----------------
    {type: 'story', kicker: 'Cold open', title: 'Monday, June 7, 2021', tocTitle: 'Cold open', html: `
      <p>For eighteen years nothing new had been approved for Alzheimer's disease; the newest drugs, from 2003, eased symptoms for a while without slowing the disease. So when the US Food and Drug Administration approved Biogen's Aduhelm on June 7, 2021, the Alzheimer's Association called it "a new day." For families who had watched parents forget their names, it sounded like hope.</p>
      <p>The FDA itself was careful. Its drug chief, Dr. Patrizia Cavazzoni, wrote that the data "were highly complex and left residual uncertainties regarding clinical benefit." This was an <strong>[[accelerated approval]]</strong>: granted not because Aduhelm had been shown to protect memory, but because it clearly removed [[amyloid]] plaque from the brain, which the agency judged "reasonably likely" to help. Biogen had until 2030 to prove it.</p>
      <p>The same day Biogen set a price of about $56,000 a year. Within days three members of the FDA's own expert panel, which had voted against the drug, resigned. One, Harvard professor Aaron Kesselheim, called it "probably the worst drug approval decision in recent U.S. history."</p>
      <p>Then almost everyone else said no. Major hospitals refused to give it. Europe's regulator recommended refusal. Medicare raised every beneficiary's premium in case it had to pay, then decided to pay only for patients in trials. Aduhelm earned about $3 million in all of 2021. In 2024 Biogen handed it back to the small Swiss company that had discovered it.</p>
      <p>No single experiment failed here. The antibody did what it was built to do. What failed was the chain from a measurement to a medicine, and from a medicine to trust: how trials are stopped and restarted, how regulators work with companies, what counts as proof, and who pays when the proof is missing. At several points you will be asked to make the call.</p>`},

    // ---------------- DISEASE FROM ZERO ----------------
    {type: 'story', kicker: 'The disease from zero', title: "Alzheimer's in five minutes", tocTitle: "Alzheimer's from zero", html: `
      <p>Memory lives in the connections between [[neuron|neurons]], the brain's nerve cells. [[dementia|Dementia]] is what happens when enough of them fail that memory, reasoning and eventually daily life fall apart. Alzheimer's disease is its most common cause. The FDA estimated that 6.2 million Americans aged 65 and over had it in 2021, about the population of Missouri.</p>
      <p>In 1906 the psychiatrist Alois Alzheimer saw two kinds of debris in the brain of a woman who had died after years of confusion: sticky <strong>plaques</strong> between the neurons, made of a protein fragment called [[amyloid beta]], and twisted <strong>tangles</strong> inside them, made of a protein called [[tau]]. Those two lesions still define the disease.</p>
      <p>In 1992 John Hardy and Gerald Higgins set out the <strong>[[amyloid hypothesis]]</strong>: amyloid build-up is the first domino, and tangles, inflammation and neuron death follow. The evidence is real. People born with mutations that make them overproduce amyloid get Alzheimer's early and almost without fail, and plaque builds up years before symptoms. If amyloid is the trigger, clearing it early should slow everything downstream.</p>
      <p>But antibody after antibody against amyloid, including bapineuzumab and solanezumab, had failed in large [[phase 3]] trials. Sceptics began to suspect plaque was more tombstone than murderer: a marker of damage already done. Believers said those drugs removed too little plaque, too late. Aducanumab was the test of that answer.</p>`},
    {type: 'figure', title: "Inside a brain with Alzheimer's", intro: 'Hover or tap each labeled part. Colors: plaque orange, tangles red, immune cells aqua.',
      svg: `<svg viewBox="0 0 900 420" role="img" aria-label="Healthy brain tissue compared with Alzheimer's tissue">
        <text x="30" y="34" class="il-title">Healthy tissue</text><text x="470" y="34" class="il-title">Alzheimer's disease</text>
        <rect x="20" y="48" width="410" height="330" rx="18" class="il-paper il-line"/>
        <rect x="460" y="48" width="420" height="330" rx="18" class="il-paper il-line"/>
        <g class="il-line" fill="none">
          <path d="M120 140 L220 200 M220 200 L320 150 M220 200 L230 300 M120 140 L70 100 M120 140 L80 180 M320 150 L380 110 M320 150 L370 200 M230 300 L170 340 M230 300 L300 345"/>
        </g>
        <g data-part="neuron"><circle cx="120" cy="140" r="24" class="il-8s il-line"/><circle cx="320" cy="150" r="24" class="il-8s il-line"/><circle cx="230" cy="300" r="24" class="il-8s il-line"/>
        <text x="60" y="190" class="il-text">Neurons</text>
        <circle cx="216" cy="198" r="6" class="il-4"/><circle cx="226" cy="204" r="5" class="il-4"/><circle cx="220" cy="210" r="4" class="il-4"/>
        <text x="244" y="222" class="il-text-2">synapse</text></g>
        <path d="M60 368 C150 355 300 355 410 368" class="st-7 il-none" stroke-width="10" stroke-linecap="round" fill="none" opacity=".35"/>
        <text x="40" y="360" class="il-text-2">blood vessel</text>

        <g class="il-line" fill="none">
          <path d="M560 140 L660 200 M660 200 L760 150 M660 200 L670 300 M560 140 L510 100 M760 150 L820 110 M670 300 L610 340"/>
        </g>
        <circle cx="560" cy="140" r="22" class="il-8s il-line"/><circle cx="760" cy="150" r="18" class="il-8s il-line"/><circle cx="670" cy="300" r="22" class="il-8s il-line"/>
        <g data-part="plaque">
          <circle cx="690" cy="110" r="16" class="il-2"/><circle cx="708" cy="124" r="11" class="il-2"/><circle cx="676" cy="128" r="10" class="il-2"/><circle cx="700" cy="100" r="8" class="il-2"/>
          <circle cx="560" cy="240" r="14" class="il-2"/><circle cx="576" cy="252" r="10" class="il-2"/><circle cx="548" cy="256" r="8" class="il-2"/>
          <text x="720" y="92" class="il-text">Amyloid plaque</text>
        </g>
        <g data-part="tangle">
          <path d="M550 134 q5 -8 10 0 t10 0 M552 146 q5 -8 10 0 t10 0" class="st-7 il-none" stroke-width="3" fill="none"/>
          <path d="M660 294 q5 -8 10 0 t10 0 M662 306 q5 -8 10 0 t10 0" class="st-7 il-none" stroke-width="3" fill="none"/>
          <text x="478" y="186" class="il-text">Tau tangles</text>
        </g>
        <g data-part="microglia">
          <path d="M610 220 c10 -14 30 -10 34 4 c10 4 8 20 -4 24 c-4 12 -26 12 -30 0 c-12 -4 -10 -24 0 -28 z" class="il-3"/>
          <path d="M612 222 q-10 -4 -16 -12 M642 226 q10 -6 14 -12 M638 248 q8 4 10 12 M614 248 q-6 6 -8 12" class="st-3 il-none" stroke-width="3" stroke-linecap="round" fill="none"/>
          <text x="560" y="292" class="il-text">Microglia</text>
        </g>
        <g data-part="vessel">
          <path d="M500 368 C590 355 740 355 850 368" class="st-7 il-none" stroke-width="10" stroke-linecap="round" fill="none" opacity=".35"/>
          <circle cx="580" cy="360" r="5" class="il-2"/><circle cx="640" cy="357" r="5" class="il-2"/><circle cx="720" cy="357" r="5" class="il-2"/><circle cx="790" cy="361" r="5" class="il-2"/>
          <text x="700" y="340" class="il-text">Amyloid in vessel walls</text>
        </g>
        <g data-part="loss"><circle cx="820" cy="250" r="20" class="il-none il-line il-dash" fill="none"/><text x="760" y="286" class="il-text">Lost neuron</text></g>
      </svg>`,
      hotspots: {
        neuron: {title: 'Neurons and synapses', text: 'Nerve cells signal to each other across synapses. Memory depends on these connections. Symptoms track the loss of synapses and neurons more closely than they track plaque.'},
        plaque: {title: 'Amyloid plaques', text: 'Clumps of [[amyloid beta]] between neurons. They can be seen in life with an [[amyloid PET]] scan. Aducanumab was designed to grab clumped amyloid and get it cleared.'},
        tangle: {title: 'Tau tangles', text: 'Twisted fibers of [[tau]] inside neurons. Where tangles spread, neurons die and symptoms follow. Anti-amyloid antibodies do not target tau directly.'},
        microglia: {title: 'Microglia', text: 'The brain\'s resident immune cells. When an antibody coats a plaque, its tail acts as an "eat me" flag that microglia can recognize.'},
        vessel: {title: 'Amyloid in blood vessel walls', text: 'Amyloid also builds up in the walls of small brain blood vessels. When antibodies pull it out, the vessel wall can leak, which is thought to underlie [[ARIA]], the main side effect of this drug class.'},
        loss: {title: 'Neuron loss', text: 'The end result: neurons die and the brain shrinks. By the time dementia is obvious, a great deal of damage is permanent, which is why trials moved to the earliest symptomatic stage.'},
      },
      caption: 'Schematic, not to scale. Plaques and tangles were first described by Alois Alzheimer in 1906.'},

    // ---------------- SURROGATE ----------------
    {type: 'story', kicker: 'The central idea', title: 'Measuring the plaque versus measuring the person', tocTitle: 'Surrogate vs clinical', html: `
      <p>This case turns on one distinction. A <strong>clinical endpoint</strong> measures what families care about: can Dad still manage his bank account, find his way home, remember that his grandson visited. In early Alzheimer's the standard is the <strong>[[CDR-SB]]</strong>. A clinician interviews the patient and someone close to them and scores six areas of life from 0 to 3, for a total from 0 (healthy) to 18. It is slow and noisy: untreated patients in these trials worsened by fewer than two points over 18 months.</p>
      <p>A <strong>[[surrogate endpoint]]</strong> is a faster, more precise stand-in believed to predict the clinical endpoint. For Aduhelm it was plaque on an [[amyloid PET]] scan, in which a faintly radioactive tracer makes amyloid light up. Clearing plaque shows up within months, in almost every patient.</p>
      <p>Surrogates such as cholesterol and HIV viral load have saved many lives. But a surrogate is only as good as the causal chain behind it. If plaque drives the disease, clearing it should protect memory. If plaque is a bystander, the scan comes up clean and the person keeps declining. The scan cannot tell you which world you are in. Only the clinical endpoint can.</p>`},
    {type: 'figure', title: 'The gap between a scan and a life', intro: 'Hover or tap each part of the chain.',
      svg: `<svg viewBox="0 0 900 400" role="img" aria-label="Surrogate endpoint on the left, clinical endpoint on the right, with an uncertain link between">
        <g data-part="pet">
          <rect x="20" y="40" width="260" height="230" rx="16" class="il-paper il-line"/>
          <text x="40" y="70" class="il-title">Surrogate</text><text x="40" y="92" class="il-text-2">Plaque on an amyloid PET scan</text>
          <ellipse cx="90" cy="170" rx="48" ry="40" class="il-2s il-line"/><circle cx="76" cy="158" r="12" class="il-2"/><circle cx="104" cy="176" r="15" class="il-2"/><circle cx="82" cy="190" r="9" class="il-2"/>
          <ellipse cx="210" cy="170" rx="48" ry="40" class="il-1s il-line"/><circle cx="220" cy="176" r="5" class="il-2"/>
          <path d="M146 170 H160" class="il-line2" marker-end="none"/><path d="M156 164 L164 170 L156 176" class="il-line2 il-none" fill="none"/>
          <text x="64" y="236" class="il-text-2">before</text><text x="186" y="236" class="il-text-2">after drug</text>
          <text x="40" y="258" class="il-text">Changes in months</text>
        </g>
        <g data-part="link">
          <path d="M292 155 H598" class="il-line2 il-dash" fill="none"/><path d="M588 147 L600 155 L588 163" class="il-line2 il-none" fill="none"/>
          <text x="445" y="130" text-anchor="middle" class="il-text">"reasonably likely to predict"?</text>
          <text x="445" y="192" text-anchor="middle" class="il-num">?</text>
        </g>
        <g data-part="cdr">
          <rect x="610" y="40" width="270" height="230" rx="16" class="il-paper il-line"/>
          <text x="630" y="70" class="il-title">Clinical endpoint</text><text x="630" y="92" class="il-text-2">Thinking and daily life (CDR-SB)</text>
          <rect x="630" y="108" width="72" height="44" rx="6" class="il-3s il-line"/><text x="638" y="135" class="il-text-2">memory</text>
          <rect x="710" y="108" width="72" height="44" rx="6" class="il-3s il-line"/><text x="716" y="135" class="il-text-2">orienting</text>
          <rect x="790" y="108" width="72" height="44" rx="6" class="il-3s il-line"/><text x="796" y="135" class="il-text-2">judgment</text>
          <rect x="630" y="160" width="72" height="44" rx="6" class="il-3s il-line"/><text x="636" y="187" class="il-text-2">outings</text>
          <rect x="710" y="160" width="72" height="44" rx="6" class="il-3s il-line"/><text x="718" y="187" class="il-text-2">home</text>
          <rect x="790" y="160" width="72" height="44" rx="6" class="il-3s il-line"/><text x="798" y="187" class="il-text-2">self-care</text>
          <text x="630" y="236" class="il-text-2">6 boxes × 0–3 = 0 to 18</text>
          <text x="630" y="258" class="il-text">Changes over years</text>
        </g>
        <g data-part="other">
          <rect x="300" y="290" width="300" height="92" rx="14" class="il-4s il-line"/>
          <text x="316" y="316" class="il-text">Other paths the scan can't see</text>
          <text x="316" y="340" class="il-text-2">tau tangles, inflammation, vessel damage;</text>
          <text x="316" y="360" class="il-text-2">side effects such as brain swelling (ARIA)</text>
        </g>
        <path d="M450 285 V200" class="il-line il-dash" fill="none"/>
      </svg>`,
      hotspots: {
        pet: {title: 'The surrogate: amyloid PET', text: 'Precise and fast. In EMERGE, high-dose aducanumab cut the plaque signal by about 64 [[centiloid|centiloids]] compared with placebo over 78 weeks. That part was never in dispute.'},
        link: {title: 'The disputed link', text: 'Accelerated approval requires the surrogate to be "reasonably likely to predict clinical benefit". Before Aduhelm, the FDA had never accepted amyloid as such a surrogate. Europe\'s regulator later said the link between plaque removal and clinical improvement "had not been established."'},
        cdr: {title: 'The clinical endpoint: CDR-SB', text: 'Slow and noisy, but it measures what matters. The trials were sized to detect a 0.5-point difference over 18 months on this 18-point scale.'},
        other: {title: 'What the surrogate misses', text: 'A drug can move the surrogate and still fail if the disease has other drivers that keep going, or if the drug does harm by another route. This is how surrogates have misled before, for example raising "good" [[HDL]] cholesterol with torcetrapib.'},
      },
      caption: 'Schematic. Centiloid figure from the Aduhelm prescribing information (EMERGE PET substudy).'},
    {type: 'custom', title: 'Three possible worlds', intro: 'Pick a world. The PET scan looks the same in all three. Watch what happens to decline.',
      html: `<div class="card"><div class="tw-btns" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px"></div><div class="tw-svg"></div><div class="tw-txt takeaway"></div><div class="caption">Illustrative numbers chosen to show the logic, not data from any trial.</div></div>`,
      init: (root) => {
        const worlds = [
          {b: 'A: plaque drives the disease', drug: 1.0, text: 'Clearing plaque cuts the driver, so decline slows a lot. This is the world the amyloid hypothesis predicts for early treatment.'},
          {b: 'B: plaque is a bystander', drug: 1.8, text: 'The scan is clean, but tau, inflammation and neuron loss carry on. Decline is unchanged. A surrogate-based approval here would be wrong.'},
          {b: 'C: it matters, but modestly', drug: 1.5, text: 'Plaque is part of the story, but much damage is already downstream. Decline slows a little, perhaps too little for families to notice, and the effect is hard to detect reliably in one trial.'},
        ];
        const btns = root.querySelector('.tw-btns'), box = root.querySelector('.tw-svg'), txt = root.querySelector('.tw-txt');
        const draw = (i) => {
          const w = worlds[i];
          btns.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-pressed', j === i));
          btns.querySelectorAll('button').forEach((b, j) => b.className = 'btn' + (j === i ? ' primary' : ''));
          const bar = (x, h, cls, lbl) => `<rect x="${x}" y="${230 - h}" width="60" height="${h}" rx="6" class="${cls}"/><text x="${x + 30}" y="252" text-anchor="middle" class="il-text-2">${lbl}</text>`;
          const Y = v => 230 - v * 90, X = t => 490 + t * 18;
          const line = (end, cls) => `<path d="M${X(0)} ${Y(0)} L${X(18)} ${Y(end)}" class="${cls} il-none" stroke-width="4" fill="none" stroke-linecap="round"/>`;
          box.innerHTML = `<svg viewBox="0 0 900 290" role="img" aria-label="Illustrative plaque and decline">
            <text x="40" y="30" class="il-title">Plaque on PET after 18 months</text>
            <line x1="40" y1="230" x2="360" y2="230" class="il-line"/>
            ${bar(90, 150, 'il-2', 'placebo')}${bar(220, 40, 'il-1', 'drug')}
            <text x="40" y="280" class="il-text-2">Same in every world</text>
            <text x="480" y="30" class="il-title">Worsening on CDR-SB (points)</text>
            <line x1="${X(0)}" y1="230" x2="${X(18)}" y2="230" class="il-line"/><line x1="${X(0)}" y1="230" x2="${X(0)}" y2="50" class="il-line"/>
            <text x="${X(0)}" y="252" class="il-text-2">0</text><text x="${X(18) - 60}" y="252" class="il-text-2">18 months</text>
            ${line(1.8, 'st-7')}${line(w.drug, 'st-1')}
            <text x="${X(18) + 8}" y="${Y(1.8) + 4}" class="il-text">placebo</text>
            <text x="${X(18) + 8}" y="${Y(w.drug) + (Math.abs(w.drug - 1.8) < 0.2 ? 22 : 4)}" class="il-text">drug</text>
          </svg>`;
          txt.innerHTML = '<b>World ' + w.b + '.</b> ' + w.text;
        };
        worlds.forEach((w, i) => { const b = document.createElement('button'); b.className = 'btn'; b.textContent = 'World ' + w.b; b.onclick = () => draw(i); btns.appendChild(b); });
        draw(0);
      }},
    {type: 'callout', variant: 'product', heading: 'A surrogate is a leading indicator, and leading indicators can be gamed', html: `
      <p>You can't wait a year to see whether a feature improves retention, so you watch a leading indicator: sign-ups, clicks, time in app. Push a metric hard enough and it comes loose from the outcome it was meant to predict; a dark pattern can double sign-ups while retention stays flat. Amyloid on a PET scan is a leading indicator for memory, and Aduhelm pushed it harder than any drug before.</p>
      <p><b>Where the analogy breaks:</b> a product team checks the lagging metric next quarter and rolls back. In Alzheimer's the lagging metric takes 18 months and thousands of patients to measure, each carrying a real risk of brain swelling, and nobody can roll back a year of lost memory.</p>`},

    // ---------------- ORIGINS ----------------
    {type: 'story', kicker: 'The promise', title: 'Antibodies borrowed from people who stayed sharp', tocTitle: 'Origins', html: `
      <p>Aducanumab began at the University of Zurich, where professors Roger Nitsch and Christoph Hock founded a spin-off called Neurimmune around an unusual idea. Instead of making antibodies in mice and engineering them to look human, why not look for antibodies that healthy elderly people's immune systems had already made? Perhaps the [[B cell|B cells]] of people who stayed sharp had learned to recognize amyloid.</p>
      <p>From healthy older donors the team found antibodies that stuck to amyloid deposits in brain tissue. One of them, a fully human [[monoclonal antibody]], became aducanumab. It binds <em>clumped</em> amyloid, the plaques and smaller sticky aggregates, and largely ignores the single amyloid pieces found throughout the body.</p>
      <p>In November 2007 Biogen licensed Neurimmune's antibodies in a deal worth up to $380 million, most of it [[milestone payment|milestones]] payable only on success. Biogen later told Congress it had spent about $1.16 billion developing aducanumab by 2021. In 2017 Japan's Eisai, already Biogen's Alzheimer's partner, joined to share the drug's development.</p>
      <h3>PRIME: the result that launched a thousand forecasts</h3>
      <p>A [[phase 1]]b trial called PRIME started in 2012 in people with early Alzheimer's and confirmed amyloid, who received monthly [[infusion|infusions]] of placebo or one of several doses for a year. In December 2014, on interim data, Biogen took the unusual step of skipping a conventional [[phase 2]] trial and going straight to phase 3.</p>
      <p>When the data were shown at a conference in Nice in March 2015, plaque fell in a clean dose-dependent pattern. At 10 mg/kg (milligrams of drug per kilogram of body weight) the average scan came close to the cut-off for being called amyloid-positive. Cognitive scores seemed to separate by dose too, though the trial was small and not designed to test that. Biogen's shares jumped about 7%. The 2016 paper in <em>Nature</em> noted that if phase 3 confirmed the slowing of decline, it would provide compelling support for the amyloid hypothesis.</p>
      <p>There was also a warning. Brain swelling on [[MRI]], known as [[ARIA]], rose with the dose and was more common in carriers of [[ApoE4]], a gene variant that raises Alzheimer's risk. The fix was [[dose titration]], stepping the dose up slowly, and lower doses for carriers. That compromise would come back to haunt phase 3.</p>`},

    // ---------------- MECHANISM ----------------
    {type: 'mechanism', title: 'How aducanumab works, and where the certainty stops', intro: 'Step through the drug\'s journey. The first five steps were well shown in trials. The last is the question the whole case is about.',
      svg: `<svg viewBox="0 0 760 440" role="img" aria-label="Aducanumab journey from bloodstream to plaque">
        <rect x="0" y="124" width="760" height="316" class="il-8s"/>
        <text x="16" y="150" class="il-text-2" style="font-size:17px">Brain tissue</text>
        <g data-part="iv"><rect x="18" y="12" width="48" height="60" rx="8" class="il-1s il-line"/><path d="M42 72 V92 H120" class="il-line il-none" fill="none"/><text x="14" y="112" class="il-text-2" style="font-size:17px">IV drip</text></g>
        <g data-part="blood"><rect x="120" y="30" width="620" height="72" rx="30" class="il-7s il-line"/><text x="600" y="72" class="il-text" style="font-size:19px">Bloodstream</text></g>
        <g data-part="abs" class="st-1" stroke-width="5" stroke-linecap="round" fill="none">
          <path d="M200 78 V64 M200 64 L190 52 M200 64 L210 52"/><path d="M280 78 V64 M280 64 L270 52 M280 64 L290 52"/><path d="M370 78 V64 M370 64 L360 52 M370 64 L380 52"/><path d="M460 78 V64 M460 64 L450 52 M460 64 L470 52"/>
        </g>
        <g data-part="bbb"><path d="M120 112 H740 M120 119 H740" class="il-line2 il-none" fill="none"/><text x="130" y="140" class="il-text" style="font-size:19px">Blood-brain barrier: lets little through</text></g>
        <g data-part="abin" class="st-1" stroke-width="5" stroke-linecap="round" fill="none">
          <path d="M250 212 V198 M250 198 L240 186 M250 198 L260 186"/><path d="M296 202 V188 M296 188 L286 176 M296 188 L306 176"/>
        </g>
        <g data-part="mono"><circle cx="120" cy="206" r="4" class="il-2"/><circle cx="142" cy="222" r="4" class="il-2"/><circle cx="164" cy="202" r="4" class="il-2"/><circle cx="130" cy="236" r="4" class="il-2"/><text x="40" y="264" class="il-text-2" style="font-size:17px">Single Aβ pieces (ignored)</text></g>
        <g data-part="plaque"><circle cx="330" cy="298" r="18" class="il-2"/><circle cx="352" cy="314" r="13" class="il-2"/><circle cx="312" cy="318" r="12" class="il-2"/><circle cx="344" cy="284" r="10" class="il-2"/><circle cx="318" cy="284" r="9" class="il-2"/></g>
        <text x="262" y="352" class="il-text" style="font-size:19px" data-part="plaquelbl">Amyloid plaque</text>
        <g data-part="microglia">
          <path d="M440 290 c12 -16 36 -12 40 4 c12 4 10 24 -4 28 c-4 14 -30 14 -34 0 c-14 -4 -12 -28 -2 -32 z" class="il-3"/>
          <path d="M440 292 l-16 -14 M480 296 l16 -12 M476 322 l14 14 M442 322 l-12 14" class="st-3" stroke-width="3" stroke-linecap="round"/>
          <text x="400" y="376" class="il-text" style="font-size:19px">Microglia (clean-up cells)</text>
        </g>
        <g data-part="neuron">
          <path d="M640 290 L700 250 M640 290 L710 320 M640 290 L600 330 L560 410" class="il-line2 il-none" fill="none"/>
          <circle cx="640" cy="290" r="30" class="il-paper il-line2"/>
          <text x="680" y="362" class="il-text" style="font-size:19px">Neuron</text>
        </g>
        <g data-part="tangle"><path d="M624 284 q6 -9 12 0 t12 0 M626 298 q6 -9 12 0 t12 0" class="st-7 il-none" stroke-width="3" fill="none"/><text x="612" y="386" class="il-text-2" style="font-size:17px">with tau tangles</text></g>
        <g data-part="question"><text x="700" y="226" class="il-num">?</text><text x="520" y="200" class="il-text" style="font-size:19px">Does memory improve?</text></g>
        <g data-part="pet"><rect x="16" y="352" width="250" height="80" rx="10" class="il-paper il-line"/><text x="28" y="372" class="il-text" style="font-size:19px">PET plaque signal</text>
          <rect x="28" y="382" width="160" height="14" rx="4" class="il-2"/><text x="194" y="394" class="il-text-2" style="font-size:17px">start</text>
          <rect x="28" y="404" width="60" height="14" rx="4" class="il-1"/><text x="94" y="416" class="il-text-2" style="font-size:17px">78 weeks</text></g>
        <g data-part="aria"><ellipse cx="560" cy="134" rx="6" ry="9" class="il-7"/><ellipse cx="584" cy="150" rx="6" ry="9" class="il-7"/><ellipse cx="606" cy="136" rx="6" ry="9" class="il-7"/>
          <text x="330" y="194" class="il-text" style="font-size:19px">ARIA: vessels leak (swelling, microbleeds)</text></g>
      </svg>`,
      steps: [
        {title: 'A monthly drip', text: 'Aducanumab is given as an [[infusion]] into a vein every four weeks, stepped up over as long as six months to 10 mg/kg.', show: ['iv', 'blood', 'abs'], dim: ['plaque', 'neuron', 'tangle'], focus: ['abs']},
        {title: 'Crossing the barrier', text: 'The [[blood-brain barrier]] keeps out most large molecules. Only a small fraction of any antibody gets into the brain, which is why such high doses are needed.', show: ['blood', 'abs', 'bbb', 'abin'], dim: ['abs'], focus: ['bbb']},
        {title: 'Grabbing the clumps', text: 'Inside the brain, aducanumab binds clumped [[amyloid beta]], both plaques and smaller sticky aggregates, and largely ignores single amyloid pieces.', show: ['bbb', 'abin', 'plaque', 'plaquelbl', 'mono'], move: {abin: 'translate(50px, 92px)'}, focus: ['abin']},
        {title: 'Calling the clean-up crew', text: 'The antibody\'s tail flags the plaque. [[microglia|Microglia]], the brain\'s immune cells, recognize the flag and engulf and digest the coated amyloid.', show: ['plaque', 'plaquelbl', 'abin', 'microglia'], move: {abin: 'translate(50px, 92px)', microglia: 'translate(-40px, 0px)'}, focus: ['microglia'], pulse: ['plaque']},
        {title: 'The scan clears', text: 'Over 78 weeks, plaque on [[amyloid PET]] falls sharply and in proportion to the dose. In EMERGE the high dose cut it by about 71% from baseline while placebo patients stayed flat. This surrogate result was consistent across all three trials.', show: ['pet', 'plaque', 'plaquelbl'], dim: ['plaque'], move: {plaque: 'scale(0.55)'}, focus: ['pet']},
        {title: 'The price: leaky vessels', text: 'Amyloid also sits in the walls of small blood vessels. Pulling it out can make them leak. On MRI this shows up as swelling ([[ARIA-E]]) in 35% of high-dose patients versus 3% on placebo, or microbleeds ([[ARIA-H]]). Most cases are silent; some cause headache, confusion or worse.', show: ['blood', 'bbb', 'aria', 'plaque'], dim: ['plaque'], move: {plaque: 'scale(0.55)'}, pulse: ['aria']},
        {title: 'The open question', text: 'Neurons are dying because of tangles, inflammation and more. Does clearing plaque slow that enough to protect memory and daily life? The plaque data could not answer this. Only the clinical endpoint could, and the two phase 3 trials disagreed.', show: ['neuron', 'tangle', 'question', 'plaque', 'pet'], dim: ['pet', 'plaque'], move: {plaque: 'scale(0.55)'}, focus: ['question']},
      ]},
    {type: 'chart', title: 'On the surrogate, every trial agreed', intro: 'Amyloid removed by high-dose aducanumab compared with placebo, measured on amyloid PET.',
      chart: {kind: 'bar', title: 'Plaque removed vs placebo (centiloids)', subtitle: 'EMERGE and ENGAGE at 78 weeks; PRIME at 54 weeks, 10 mg/kg. All p < 0.0001.', unit: '',
        categories: ['EMERGE (Study 302)', 'ENGAGE (Study 301)', 'PRIME (Study 103)'], series: [{name: 'Centiloids removed', values: [64.2, 53.5, 61.1], notes: ['High dose. 170 vs 159 patients in PET substudy', 'High dose. 183 vs 204 patients in PET substudy', '10 mg/kg. 28 vs 42 patients']}], yMax: 80,
        note: 'Source: Aduhelm prescribing information (2023), Tables 6, 8 and 9. A typical mild Alzheimer\'s brain scores about 100 centiloids.'},
      takeaway: 'Keep this chart in mind for the next section. On plaque, ENGAGE looked almost as good as EMERGE. On memory and daily life, it did not.'},

    // ---------------- TIMELINE ----------------
    {type: 'timeline', title: 'Timeline: from Zurich to withdrawal', tocTitle: 'Timeline', intro: 'Filter by kind. The reversal (2019) and the fallout (2021–22) happened fast.', events: [
      {year: 2003, title: 'Last new Alzheimer\'s drug approved before Aduhelm', kind: 'regulatory', text: 'The FDA later noted Aduhelm was the first novel therapy for the disease since 2003.'},
      {year: 2007.87, date: 'Nov 2007', title: 'Biogen licenses Neurimmune\'s antibodies', kind: 'business', text: 'A deal worth up to $380 million, mostly milestones.'},
      {year: 2012, title: 'PRIME phase 1b trial starts', kind: 'clinical'},
      {year: 2015.2, date: 'Mar 2015', title: 'PRIME data shown in Nice', kind: 'clinical', text: 'Dose-dependent plaque removal; cognitive trends. Biogen shares rise about 7%.'},
      {year: 2015.62, date: 'Aug–Sep 2015', title: 'EMERGE and ENGAGE begin', kind: 'clinical', text: 'Two identical phase 3 trials, about 1,640 patients each.'},
      {year: 2016.7, date: 'Sep 2016', title: 'PRIME published in Nature', kind: 'science'},
      {year: 2017.78, date: 'Oct 2017', title: 'Eisai joins aducanumab development', kind: 'business'},
      {year: 2019.2, date: 'Mar 21, 2019', title: 'Both trials stopped for futility', kind: 'setback', text: 'Biogen shares fall more than 29%, their worst day since 2005.'},
      {year: 2019.37, date: 'May–Jun 2019', title: 'Biogen and FDA begin a joint "working group"', kind: 'regulatory', text: 'After a conversation at a neurology conference in Philadelphia and a formal meeting on June 14.'},
      {year: 2019.78, date: 'Oct 22, 2019', title: 'The reversal: Biogen will seek approval', kind: 'clinical', text: 'A larger dataset shows EMERGE positive, ENGAGE negative. Shares soar nearly 30%.'},
      {year: 2020.53, date: 'Jul 2020', title: 'Biogen completes its application to the FDA', kind: 'regulatory'},
      {year: 2020.87, date: 'Nov 6, 2020', title: 'FDA advisory committee votes against', kind: 'regulatory', text: '10 of 11 say EMERGE cannot be primary evidence of effectiveness; 1 uncertain.'},
      {year: 2021.44, date: 'Jun 7, 2021', title: 'Accelerated approval, $56,000 a year', kind: 'regulatory', text: 'Based on amyloid reduction. Confirmatory trial due by 2029, report by 2030.'},
      {year: 2021.45, date: 'Jun 2021', title: 'Three FDA advisers resign', kind: 'people', text: 'Joel Perlmutter, David Knopman and Aaron Kesselheim.'},
      {year: 2021.53, date: 'Jul 2021', title: 'Label narrowed; inspector general asked to investigate', kind: 'regulatory', text: 'Label now limited to mild cognitive impairment or mild dementia. Acting commissioner Janet Woodcock requests an independent review.'},
      {year: 2021.87, date: 'Nov 2021', title: 'Medicare Part B premium jumps to $170.10', kind: 'business', text: 'Roughly half the increase reflects a reserve for possible Aduhelm spending.'},
      {year: 2021.95, date: 'Dec 2021', title: 'EMA recommends refusal; Biogen halves the price', kind: 'setback', text: 'New price $28,200 a year from January 1, 2022.'},
      {year: 2022.28, date: 'Apr 7, 2022', title: 'Medicare will pay only inside trials', kind: 'regulatory', text: 'Coverage with evidence development for anti-amyloid antibodies.'},
      {year: 2022.28, date: 'Apr–May 2022', title: 'Biogen withdraws EU application and guts the sales force', kind: 'business'},
      {year: 2022.95, date: 'Dec 2022', title: 'Congressional report; accelerated approval law tightened', kind: 'regulatory', text: 'House committees call the review "rife with irregularities". FDORA gives the FDA new powers over confirmatory trials.'},
      {year: 2024.04, date: 'Jan 31, 2024', title: 'Biogen discontinues Aduhelm', kind: 'business', text: 'Rights return to Neurimmune; the ENVISION confirmatory trial is terminated; resources shift to Leqembi.'},
      {year: 2025.04, date: 'Jan 2025', title: 'Inspector general flags Aduhelm review', kind: 'regulatory', text: 'One of 3 of 24 accelerated approvals reviewed that raised concerns.'},
    ]},

    // ---------------- TRIAL DESIGN ----------------
    {type: 'story', kicker: 'What everyone believed', title: 'Two identical trials, one moving target', tocTitle: 'Phase 3 design', html: `
      <p>In 2015 Biogen launched two identical [[phase 3]] trials, EMERGE (Study 302) and ENGAGE (Study 301). Two trials are standard when the stakes are high: the second guards against the first being a fluke. Together they enrolled 3,285 people aged 50 to 85 at 348 sites in 20 countries, all with [[mild cognitive impairment]] or mild dementia and confirmed amyloid.</p>
      <p>Patients were randomly assigned to placebo, a low dose or a high dose, infused every four weeks for 76 weeks. The [[primary endpoint]] was worsening on the CDR-SB at week 78. Each trial, with about 450 people per group, was sized for a 90% chance of detecting a 0.5-point difference between drug and placebo. Remember that number: it is what the designers thought a real effect would look like.</p>
      <h3>The compromise inside the design</h3>
      <p>Because of ARIA, [[ApoE4]] carriers, about seven in ten participants, were first given a "high dose" of only 6 mg/kg, while non-carriers got 10 mg/kg. When a new PRIME cohort suggested slow titration made 10 mg/kg tolerable for carriers too, Biogen filed a [[protocol amendment]] (version 4) raising them to 10 mg/kg.</p>
      <p>It was a reasonable call. But it meant patients enrolled early received less drug than those enrolled later, so exactly when each trial had recruited its patients started to matter. That accident would become the heart of the argument over which trial to believe.</p>`},

    // ---------------- FUTILITY ----------------
    {type: 'story', kicker: 'The moment of failure', title: 'March 21, 2019: futility', tocTitle: 'Futility', html: `
      <p>Big trials have a planned early look, an [[interim analysis]], run by an independent [[data monitoring committee]] that can see unblinded data. One of its jobs is a [[futility analysis]]: if a drug clearly isn't going to work, stop exposing patients to it and stop spending money.</p>
      <p>Biogen's rule was specific. When about half the patients could have reached week 78, the committee would pool data from both trials and estimate each trial's <strong>[[conditional power]]</strong>, the chance of success if the remaining data looked like the pooled data so far. Below 20% for both doses in both trials meant futility.</p>
      <p>The data cut-off was December 26, 2018, when 1,748 patients could have finished 18 months. The answer was bleak. On March 21, 2019, Biogen and Eisai stopped both trials as "unlikely to meet their primary endpoint." Biogen's shares fell more than 29%, the company's worst day since 2005. Another amyloid drug, it seemed, had failed.</p>
      <p>Two details would matter later. Pooling assumed the drug worked about the same in both trials, so one positive and one flat trial could average into something hopeless. And trials don't freeze while a committee deliberates: data kept arriving between the December cut-off and the March announcement.</p>`},
    {type: 'figure', title: 'Two snapshots of the same trials', intro: 'The futility call and the later reversal looked at different amounts of data. Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 380" role="img" aria-label="Futility dataset compared with final dataset">
        <text x="30" y="36" class="il-title">Patients in EMERGE and ENGAGE combined: 3,285</text>
        <g data-part="cutoff">
          <text x="30" y="84" class="il-text">Futility analysis</text><text x="30" y="104" class="il-text-2">data to Dec 26, 2018</text>
          <rect x="220" y="70" width="640" height="40" rx="8" class="il-8s il-line"/>
          <rect x="220" y="70" width="341" height="40" rx="8" class="il-2"/>
          <text x="232" y="96" class="il-white">1,748 could have completed 18 months</text>
        </g>
        <g data-part="extra">
          <text x="30" y="164" class="il-text">Later analysis</text><text x="30" y="184" class="il-text-2">data to Mar 20, 2019</text>
          <rect x="220" y="150" width="640" height="40" rx="8" class="il-8s il-line"/>
          <rect x="220" y="150" width="402" height="40" rx="8" class="il-1"/>
          <text x="232" y="176" class="il-white">2,066 could have completed 18 months</text>
          <text x="634" y="176" class="il-text-2">+ partial data on the rest</text>
        </g>
        <g data-part="futility">
          <rect x="30" y="224" width="260" height="120" rx="14" class="il-paper il-line"/>
          <text x="46" y="252" class="il-text">The stopping rule</text>
          <text x="46" y="276" class="il-text-2">Pool both trials. Stop if the</text>
          <text x="46" y="296" class="il-text-2">chance of success is under 20%</text>
          <text x="46" y="316" class="il-text-2">for both doses in both trials.</text>
        </g>
        <g data-part="pool">
          <rect x="320" y="224" width="260" height="120" rx="14" class="il-paper il-line"/>
          <text x="336" y="252" class="il-text">The pooling assumption</text>
          <text x="336" y="276" class="il-text-2">One trending up + one trending</text>
          <text x="336" y="296" class="il-text-2">flat can average into "hopeless".</text>
        </g>
        <g data-part="amend">
          <rect x="610" y="224" width="260" height="120" rx="14" class="il-4s il-line"/>
          <text x="626" y="252" class="il-text">Mid-trial dose change</text>
          <text x="626" y="276" class="il-text-2">Later patients, more of them</text>
          <text x="626" y="296" class="il-text-2">ApoE4 carriers, got 10 mg/kg.</text>
          <text x="626" y="316" class="il-text-2">More data = more high-dose time.</text>
        </g>
      </svg>`,
      hotspots: {
        cutoff: {title: 'The futility snapshot', text: 'At the December 26, 2018 cut-off, 57% of ENGAGE patients and 49% of EMERGE patients had had the chance to reach week 78. Patients who had not yet had that chance were left out of the interim analysis, a choice the FDA review noted was not described in the analysis plan.'},
        extra: {title: 'The larger dataset', text: 'Analyzed after the trials stopped, using all data collected up to March 20, 2019: 3,285 patients, of whom 2,066 had had the opportunity to finish. Biogen said the difference from the futility prediction was "largely due to patients\' greater exposure to high dose aducanumab."'},
        futility: {title: 'The rule', text: 'Conditional power under 20% for both doses in both studies. Reasonable as written; the trouble came from what it assumed about the two trials being alike.'},
        pool: {title: 'Pooling', text: 'The FDA review notes that pooling "assumed that the treatment effect would be similar in the two studies." They turned out not to be. In June 2019 the FDA and Biogen agreed it "would have been more appropriate if futility had not been declared."'},
        amend: {title: 'The dose change', text: 'After protocol version 4, ApoE4 carriers in the high-dose arm could reach 10 mg/kg. Patients enrolled later got more of the high dose, and the later data captured more of that exposure. This is the main explanation Biogen and the FDA offered for why the picture changed.'},
      },
      caption: 'Patient counts from Biogen\'s October 22, 2019 announcement; percentages and quotes from the FDA summary review (June 2021).'},
    {type: 'decision', title: 'Stop, or look again?', role: 'You run R&D at Biogen, March 2019',
      scenario: 'The independent committee reports that the pre-specified futility rule has been met: pooled across both trials, neither dose looks likely to succeed. You know the rule pooled the two trials, that it left out patients who hadn\'t yet reached week 78, and that new data have been flowing in since the December cut-off. The drug is your company\'s biggest bet. Stopping will crush the share price. What do you do?',
      options: [
        {label: 'Follow the rule: stop both trials and announce it today', outcome: 'This is the disciplined answer, and it is what the rule was for. You protect patients from a drug that may be useless and you keep credibility with investors and regulators. But you also lock in an interpretation based on older, pooled data, and you lose the chance to see the trials through to a clean, pre-planned final analysis.'},
        {label: 'Stop enrolling, but keep dosing blinded patients until the data you already have are analyzed', outcome: 'Tempting, but the moment you have seen a futility result, every later choice looks motivated. Delaying disclosure of material news is also a securities-law problem for a public company. And if you keep patients on a drug your own committee just called futile, you face hard ethical questions.'},
        {label: 'Argue that the rule is flawed and ask regulators to let the trials continue', outcome: 'You may be right that pooling was a poor assumption, but changing the rules after seeing the result is exactly what trial rules exist to prevent. Even a correct argument would be read as special pleading.'},
      ],
      reality: 'Biogen and Eisai stopped both trials on March 21, 2019 and announced it immediately. Shares fell more than 29%. Months later the FDA\'s own summary recorded that, at a June 14, 2019 meeting, the agency and Biogen "agreed that it would have been more appropriate if futility had not been declared." The early stop left two truncated trials that could never be completed as designed, and every analysis afterwards was argued over.'},

    // ---------------- REVERSAL ----------------
    {type: 'story', kicker: 'The reversal', title: 'October 22, 2019: back from the dead', tocTitle: 'The reversal', html: `
      <p>When Biogen analyzed all the data collected before the stop, using the pre-specified method, the picture split in two. In EMERGE the high dose now showed a statistically significant slowing of decline on the CDR-SB. In ENGAGE it did not.</p>
      <p>What happened next is what investigators later focused on. In May 2019, at a neurology conference in Philadelphia, Biogen's head of R&amp;D, Dr. Alfred Sandrock, discussed the findings with Dr. Billy Dunn, director of the FDA's [[Office of Neuroscience]]. Dunn suggested a formal [[Type C meeting]]. At that meeting, on June 14, the FDA wrote that further analyses "would best be conducted as part of a bilateral effort involving the agency and sponsor."</p>
      <p>Congressional investigators later counted at least 115 meetings, calls and substantive emails between FDA staff and Biogen over the following year, many not recorded in the FDA's official system. STAT News reported that Biogen's internal name for its effort was "Project Onyx."</p>
      <p>On October 22, 2019, Biogen announced that "after consulting with the U.S. Food and Drug Administration" it would seek approval after all. Its shares soared nearly 30%; CNBC's Jim Cramer said it "would be the biggest drug ever." Before you see the final numbers, make a prediction.</p>`},
    {type: 'trial', title: 'EMERGE and ENGAGE: the final results', tocTitle: 'The two trials', intro: 'Design first. Then predict what the high dose did in each trial.',
      design: {name: 'EMERGE (Study 302) and ENGAGE (Study 301), identical designs', phase: 'Phase 3', blinding: 'Double-blind', years: '2015–2019 (stopped early)', n: 3285,
        population: 'Ages 50–85, mild cognitive impairment or mild dementia due to Alzheimer\'s, amyloid confirmed', randomization: '1:1:1',
        arms: [
          {name: 'High dose', n: 1102, desc: 'Up to 10 mg/kg every 4 weeks'},
          {name: 'Low dose', n: 1090, desc: '3 or 6 mg/kg every 4 weeks'},
          {name: 'Placebo', n: 1093, desc: 'Saline IV every 4 weeks', control: true}],
        endpoint: 'Change in CDR-SB at week 78',
        details: {'Primary endpoint': 'Change from baseline in [[CDR-SB]] at week 78 (0–18 scale, higher is worse)', 'Secondary endpoints': 'MMSE, ADAS-Cog 13 (thinking tests) and ADCS-ADL-MCI (daily activities)', 'Planned size': '450 per group per trial for 90% power to detect a 0.5-point difference', 'Testing order': 'High dose first, then low dose; each trial analyzed separately', 'Mid-trial change': 'Protocol version 4 let ApoE4 carriers in the high-dose arm reach 10 mg/kg'}},
      predict: {q: 'Same drug, same doses, same design, about 1,640 people per trial. What did the high dose do?',
        options: ['Slowed decline by roughly a fifth in both trials', 'Slowed decline by roughly a fifth in EMERGE, and nothing measurable in ENGAGE', 'Nothing measurable in either trial', 'Slowed decline in both, but only among ApoE4 carriers'],
        answer: 1, explain: 'EMERGE high dose: 0.39 points less worsening than placebo (22% less decline, p = 0.012). ENGAGE high dose: 0.03 points <em>more</em> worsening (2% more, p = 0.83). The low dose trended the same way in both trials, 15% and 12% less decline, but neither was statistically significant. Oddly, in ENGAGE the low dose did better than the high dose.'},
      results: [
        {kind: 'bar', title: 'Worsening on CDR-SB after 78 weeks (points; lower is better)', unit: '', categories: ['EMERGE (Study 302)', 'ENGAGE (Study 301)'],
          series: [{name: 'Placebo', values: [1.74, 1.56], color: 8, notes: ['Exact: 1.74', 'Exact: 1.56']}, {name: 'Low dose', values: [1.47, 1.38], color: 3, notes: ['Exact: 1.47', 'Exact: 1.38']}, {name: 'High dose', values: [1.35, 1.59], color: 1, notes: ['Exact: 1.35', 'Exact: 1.59']}],
          note: 'Labels are rounded. Exact adjusted mean changes: EMERGE 1.74 placebo, 1.47 low, 1.35 high; ENGAGE 1.56 placebo, 1.38 low, 1.59 high (intent-to-treat). Source: FDA summary review (Dunn, June 2021), Tables 3 and 6.'}],
      takeaway: 'EMERGE on its own looked like a real, modest effect, backed by all its secondary endpoints. ENGAGE, run the same way, found nothing on the high dose. Everything after this is an argument about which trial to believe.'},
    {type: 'custom', title: 'Read it like a statistician', intro: 'The same results as differences from placebo, with 95% [[confidence interval|confidence intervals]]. A bar that crosses zero means the result is compatible with no effect. Hover a row.',
      html: `<div class="card"><svg viewBox="0 0 900 300" role="img" aria-label="Forest plot of CDR-SB differences">
        <text x="20" y="30" class="il-title">Difference from placebo in CDR-SB worsening at week 78</text>
        <line x1="580" y1="50" x2="580" y2="250" class="il-line il-dash"/>
        <text x="580" y="272" text-anchor="middle" class="il-text-2">0 (no effect)</text>
        <text x="330" y="272" text-anchor="middle" class="il-text-2">−0.5</text><line x1="330" y1="250" x2="330" y2="256" class="il-line"/>
        <text x="790" y="272" text-anchor="middle" class="il-text-2">+0.4</text><line x1="790" y1="250" x2="790" y2="256" class="il-line"/>
        <text x="400" y="292" text-anchor="middle" class="il-text-2">← drug better</text><text x="720" y="292" text-anchor="middle" class="il-text-2">drug worse →</text>
        <g data-tip="<b>EMERGE high dose</b><br>−0.39 (95% CI −0.69 to −0.09), p = 0.012. 22% less decline.">
          <rect x="20" y="58" width="860" height="40" class="il-none" fill="transparent"/>
          <text x="20" y="84" class="il-text">EMERGE, high dose</text><line x1="233" y1="78" x2="537" y2="78" class="st-1" stroke-width="3"/><circle cx="385" cy="78" r="8" class="il-1"/><text x="820" y="84" class="il-text">p = 0.012</text></g>
        <g data-tip="<b>EMERGE low dose</b><br>−0.26 (95% CI −0.57 to +0.04), p = 0.090. 15% less decline, not significant.">
          <rect x="20" y="104" width="860" height="40" class="il-none" fill="transparent"/>
          <text x="20" y="130" class="il-text">EMERGE, low dose</text><line x1="295" y1="124" x2="600" y2="124" class="st-3" stroke-width="3"/><circle cx="450" cy="124" r="8" class="il-3"/><text x="820" y="130" class="il-text">p = 0.090</text></g>
        <g data-tip="<b>ENGAGE high dose</b><br>+0.03 (95% CI −0.26 to +0.33), p = 0.83. 2% more decline.">
          <rect x="20" y="150" width="860" height="40" class="il-none" fill="transparent"/>
          <text x="20" y="176" class="il-text">ENGAGE, high dose</text><line x1="449" y1="170" x2="743" y2="170" class="st-1" stroke-width="3"/><circle cx="595" cy="170" r="8" class="il-1"/><text x="820" y="176" class="il-text">p = 0.83</text></g>
        <g data-tip="<b>ENGAGE low dose</b><br>−0.18 (95% CI −0.47 to +0.11), p = 0.23. 12% less decline, not significant.">
          <rect x="20" y="196" width="860" height="40" class="il-none" fill="transparent"/>
          <text x="20" y="222" class="il-text">ENGAGE, low dose</text><line x1="345" y1="216" x2="635" y2="216" class="st-3" stroke-width="3"/><circle cx="490" cy="216" r="8" class="il-3"/><text x="820" y="222" class="il-text">p = 0.23</text></g>
      </svg>
      <div class="caption">Source: FDA summary review (June 2021), Tables 3 and 6. The trials were designed to detect a difference of 0.5 points.</div></div>`},
    {type: 'callout', variant: 'numbers', heading: 'Putting 0.39 points in context', html: `
      <p>Placebo patients in EMERGE worsened by 1.74 points on the 0–18 CDR-SB over 78 weeks; high-dose patients by 1.35. The difference, 0.39, is smaller than the 0.5 the trial was designed to detect. For one person, a single box moving half a step is a 0.5-point change.</p>
      <p>Supporters noted that EMERGE's secondary endpoints all agreed: 18% less decline on the MMSE thinking test, 27% on ADAS-Cog 13 and 40% on a daily-activities scale. Critics answered that "22% slower" sounds much bigger than 0.39 points feels, and that the replication found nothing.</p>`},

    // ---------------- FORKING PATHS ----------------
    {type: 'story', kicker: 'The warning signs', title: 'When the data branch, every branch looks like a path', tocTitle: 'Post-hoc problem', html: `
      <p>Biogen and FDA staff searched for why the trials differed. Their main explanation was dosing. Because of the amendment's timing, ENGAGE patients had less exposure to 10 mg/kg on average, and ENGAGE patients who got enough high-dose infusions looked more like EMERGE. The FDA also found that ENGAGE's high-dose arm happened to contain more "rapid progressors," whose fast decline can swing a small average a long way.</p>
      <p>All of this may be true. But it is a [[post hoc analysis]]: chosen after the answer was known, in a subgroup defined by what happened <em>after</em> randomization. Patients who stay on a high dose differ from those who don't, in ways that affect how fast they decline. Randomization is what makes a trial's comparison fair, and slicing by later events throws that protection away.</p>
      <p>In 2021 neurologists David Knopman, David Jones and Michael Greicius argued that the subgroup gains had explanations unrelated to dose, and that efficacy "cannot be proven by clinical trials with divergent outcomes." They called for a third phase 3 trial.</p>
      <p>Statisticians call the wider trap the <strong>[[garden of forking paths]]</strong>. Every analysis choice (which patients, which time point, which dose definition) is a fork. None needs to be dishonest. But walk enough paths after seeing the data and one will look significant, even for a drug that does nothing. Try it.</p>`},
    {type: 'custom', title: 'The garden of forking paths', intro: 'Simulate a trial of a drug that does <b>nothing</b>. Choose how many different ways you are allowed to analyze it, then run it.',
      html: `<div class="card">
        <label style="display:grid;grid-template-columns:240px 1fr 60px;gap:12px;align-items:center;font-size:15px">Analyses tried (subgroups, endpoints, time points) <input type="range" min="1" max="40" value="10" class="fp-k" style="accent-color:var(--accent)"><b class="fp-kv"></b></label>
        <div style="margin:12px 0;display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary fp-run">Run a trial of a useless drug</button><button class="btn fp-many">Run 1,000 trials</button></div>
        <div class="fp-grid" style="display:flex;flex-wrap:wrap;gap:6px;min-height:40px"></div>
        <div class="fp-out takeaway"></div>
        <div class="caption">Each square is one analysis with a p-value drawn at random, which is what p-values do when there is no true effect. Orange squares have p &lt; 0.05. The formula 1 − 0.95<sup>k</sup> assumes the analyses are independent; real analyses of one trial overlap, so the true inflation is smaller, but it is always real.</div></div>`,
      init: (root) => {
        const k = root.querySelector('.fp-k'), kv = root.querySelector('.fp-kv'), grid = root.querySelector('.fp-grid'), out = root.querySelector('.fp-out');
        let runs = 0, hits = 0;
        const theory = n => (100 * (1 - Math.pow(0.95, n))).toFixed(0);
        const upd = () => { kv.textContent = k.value; };
        const one = () => { const n = +k.value, ps = Array.from({length: n}, () => Math.random()); return ps; };
        const show = (ps) => {
          grid.innerHTML = ps.map((p, i) => `<span data-tip="Analysis ${i + 1}: p = ${p.toFixed(3)}" style="width:26px;height:26px;border-radius:6px;display:inline-block;background:${p < 0.05 ? 'var(--il-2)' : 'var(--il-8s)'};border:1px solid var(--rule)"></span>`).join('');
        };
        const report = (last) => {
          const n = +k.value;
          out.innerHTML = (last == null ? '' : (last ? '<b>Found a "significant" result</b> in a drug that does nothing. ' : '<b>No false positive this time.</b> ')) +
            `With ${n} analyses, the chance of at least one p &lt; 0.05 is about <b>${theory(n)}%</b>. ` + (runs ? `So far: ${hits} of ${runs} simulated trials produced at least one "hit" (${(100 * hits / runs).toFixed(0)}%).` : '');
        };
        root.querySelector('.fp-run').onclick = () => { const ps = one(); show(ps); runs++; const h = ps.some(p => p < 0.05); if (h) hits++; report(h); };
        root.querySelector('.fp-many').onclick = () => { let last; for (let i = 0; i < 1000; i++) { const ps = one(); last = ps; runs++; if (ps.some(p => p < 0.05)) hits++; } show(last); report(null); };
        k.oninput = () => { upd(); runs = 0; hits = 0; report(null); };
        upd(); show(one()); report(null);
      }},
    {type: 'callout', variant: 'product', heading: 'Peeking at an A/B test, then slicing until something wins', html: `
      <p>Aduhelm hit both classic experiment traps. Stopping an A/B test the first time the dashboard looks bad (or good) inflates error rates, which is why good teams fix stopping rules in advance. And when the headline metric is flat, someone always finds a segment where it "worked." Sometimes the segment is real; usually it is noise, and the fix is a new test on that segment.</p>
      <p><b>Where the analogy breaks:</b> a new A/B test costs a week. A new Alzheimer's trial costs years, hundreds of millions of dollars and thousands of patients. That cost is exactly why people tried to squeeze an answer out of the existing data, and why the argument got so heated.</p>`},

    // ---------------- WORKING GROUP DECISION ----------------
    {type: 'decision', title: 'How close should the regulator get?', role: 'You lead the FDA\'s neuroscience office, June 2019',
      scenario: 'Biogen shows you the larger dataset: one trial positive, one negative, for the first drug that might slow Alzheimer\'s. Patient groups are desperate. Your staff think EMERGE could be real; your statisticians are sceptical. Biogen wants to work through the data with you. How do you handle it?',
      options: [
        {label: 'Tell Biogen the program failed and that it needs a new phase 3 trial', outcome: 'Clean and defensible. But a new trial means perhaps four or five more years, and if the drug does work, patients progressing in the meantime lose the chance of benefit. Critics would call you rigid; the drug\'s supporters would never forgive you.'},
        {label: 'Form a joint working group and dig through the data together', outcome: 'Fast and thorough, with the agency\'s best people shaping the analyses. But a regulator who co-authors the analyses is no longer an independent judge of them, and outsiders will wonder whether the referee has joined a team.'},
        {label: 'Give formal advice in documented meetings, but let Biogen do and submit its own analyses for independent review', outcome: 'Slower and more distant, but it keeps the agency in the position of judge. You would still face hard calls, just with a cleaner record and less risk to trust.'},
      ],
      reality: 'The FDA chose close collaboration. Congressional investigators later counted at least 115 meetings, calls and substantive emails between July 2019 and July 2020, many not recorded in the FDA\'s official system. The FDA\'s own internal review, finished a week before approval, said the collaboration "exceeded the norm in some respects" but found "no evidence that these interactions with the sponsor in advance of filing were anything but appropriate." The FDA argued that working proactively on a potential first disease-modifying Alzheimer\'s drug was consistent with its public-health mission.'},

    // ---------------- ADCOM ----------------
    {type: 'story', kicker: 'The regulators', title: 'November 6, 2020: the advisers say no', tocTitle: 'Advisory committee', html: `
      <p>An FDA [[advisory committee]] is a panel of outside experts who review an application in public and vote. The FDA usually, but not always, follows the vote. Aducanumab's panel met online on November 6, 2020.</p>
      <p>The briefing was a single <strong>[[joint briefing document]]</strong> written by the FDA and Biogen together, a format previously used only for cancer drugs where there was broad agreement. Yet the agency was split. Its clinical reviewer, Dr. Krudys, found EMERGE persuasive. Its statistical reviewer, Dr. Massie, argued that only the pre-specified analyses counted, that they showed one positive and one negative trial, and that exploratory analyses could not replace them. The congressional report later found that the joint document did not adequately represent those differing views.</p>
      <p>The panel voted on four questions. Notice what it was <em>not</em> asked: whether the drug should get accelerated approval based on amyloid.</p>`},
    {type: 'custom', title: 'You are on the advisory committee', intro: 'Vote on the four actual questions. Then see how the eleven panellists voted.',
      html: `<div class="adc"></div><div class="adc-sum takeaway"></div>`,
      init: (root, api) => {
        const qs = [
          {q: 'Does Study 302 (EMERGE), viewed independently and without regard for Study 301 (ENGAGE), provide strong evidence that supports the effectiveness of aducanumab?', v: [1, 8, 2]},
          {q: 'Does Study 103 (PRIME) provide supportive evidence of effectiveness?', v: [0, 7, 4]},
          {q: 'Has Biogen presented strong evidence of a pharmacodynamic effect on Alzheimer\'s disease pathophysiology (amyloid, tau and other biomarkers)?', v: [5, 0, 6]},
          {q: 'In light of the exploratory analyses, PRIME and the biomarker evidence, is it reasonable to consider Study 302 as primary evidence of effectiveness?', v: [0, 10, 1]},
        ];
        const L = ['Yes', 'No', 'Uncertain'], C = ['var(--il-3)', 'var(--il-7)', 'var(--il-8)'];
        const box = root.querySelector('.adc'), sum = root.querySelector('.adc-sum'); const mine = {};
        box.innerHTML = qs.map((x, i) => `<div class="qcard" style="background:var(--panel);border:1px solid var(--rule);border-radius:14px;padding:16px 18px;margin-bottom:12px">
          <div style="font-size:12px;font-weight:650;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3)">Question ${i + 1} of 4</div>
          <div style="font:600 16px/1.45 var(--sans);margin:4px 0 10px">${api.esc(x.q)}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap">${L.map((l, j) => `<button class="btn" data-q="${i}" data-a="${j}">${l}</button>`).join('')}</div>
          <div class="adc-res" data-r="${i}" style="margin-top:10px"></div></div>`).join('');
        box.querySelectorAll('button').forEach(b => b.onclick = () => {
          const i = +b.dataset.q, a = +b.dataset.a; mine[i] = a;
          box.querySelectorAll(`button[data-q="${i}"]`).forEach(x => x.className = 'btn' + (x === b ? ' primary' : ''));
          const v = qs[i].v;
          box.querySelector(`[data-r="${i}"]`).innerHTML = `<div style="display:flex;height:22px;border-radius:6px;overflow:hidden;border:1px solid var(--rule)">${v.map((n, j) => n ? `<div style="width:${100 * n / 11}%;background:${C[j]};color:#fff;font:600 12px/22px var(--sans);text-align:center">${n}</div>` : '').join('')}</div>
            <div style="font-size:14px;color:var(--ink-2);margin-top:4px">Panel: ${v[0]} yes · ${v[1]} no · ${v[2]} uncertain. You voted <b>${L[a]}</b>.</div>`;
          const n = Object.keys(mine).length;
          if (n === 4) { const agree = qs.filter((x, j) => x.v.indexOf(Math.max(...x.v)) === mine[j]).length; sum.innerHTML = `You matched the panel majority on <b>${agree} of 4</b> questions. The panel accepted that the drug moved biomarkers (5 yes, 6 uncertain) but not that the clinical evidence was strong. The FDA would go on to approve the drug on exactly the point the panel found most convincing, the biomarkers, a route it had not asked the panel about.`; }
        });
      }},
    {type: 'callout', variant: 'misconception', heading: '"The FDA has to follow its advisory committee"', html: `
      <p>It doesn't; the FDA overrules its advisers in both directions from time to time. What made Aduhelm different was the combination: a near-unanimous negative vote on the clinical evidence, then approval through a pathway the committee was never asked about, on an endpoint (amyloid) the FDA had not accepted as a surrogate before. That is why three members resigned.</p>`},

    // ---------------- EVIDENCE EXERCISE ----------------
    {type: 'custom', title: 'What counts as evidence?', intro: 'Seven pieces of evidence were on the table. Rate each one, then see how the experts disagreed about it.',
      html: `<div class="ev"></div>`,
      init: (root) => {
        const items = [
          {e: 'EMERGE high dose: 22% less decline on CDR-SB, p = 0.012, on the pre-specified primary endpoint, with all secondary endpoints agreeing.', x: 'The FDA decision memo reports that the clinical reviewer considered it "a robust and exceptionally persuasive study." Advisory panel, asked whether it was strong evidence on its own: 1 yes, 8 no, 2 uncertain, partly because the trial was cut short and partly because it could not be viewed without ENGAGE.'},
          {e: 'ENGAGE high dose: no slowing at all (2% more decline), p = 0.83, in a trial identical to EMERGE.', x: 'Everyone agreed ENGAGE was negative. The dispute was how much it should count. The FDA\'s final memo said it "clearly introduces residual uncertainty." Sceptics said it simply means the effect was not replicated.'},
          {e: 'PRIME (phase 1b): at 10 mg/kg, less decline than placebo, nominally significant, in about 30 patients per dose.', x: 'Not designed to test efficacy, and doses were enrolled in sequence, so the comparison with placebo was not fully randomized. Panel vote on "supportive evidence": 0 yes, 7 no, 4 uncertain. The FDA\'s statistical reviewer argued it should not outweigh a large negative trial.'},
          {e: 'Plaque on amyloid PET fell sharply and in proportion to dose, in all three trials.', x: 'Undisputed as a biological effect (panel: 5 yes, 0 no, 6 uncertain on "strong evidence of a pharmacodynamic effect"). The FDA made this the basis of accelerated approval. Europe\'s regulator said the link between this and clinical improvement "had not been established."'},
          {e: 'In a post hoc subgroup of ENGAGE patients with more exposure to 10 mg/kg, decline looked more like EMERGE.', x: 'The FDA memo summarizes the statistical reviewer\'s view: exploratory analyses "cannot take the place of a prespecified primary analysis supported by randomization." Knopman and colleagues argued the subgroup gains had explanations unrelated to dose. Biogen and the FDA clinical team saw it as explaining the discordance.'},
          {e: 'The low dose trended in the right direction in both trials (15% and 12% less decline), though neither was significant.', x: 'The FDA memo called this "some evidence of dose response." Sceptics noted that in ENGAGE the low dose did better than the high dose, the opposite of what a dose response predicts.'},
          {e: 'Across patients, those whose amyloid fell more tended to decline less.', x: 'The FDA memo cited "a generally linear relationship." Critics pointed out that correlations inside a trial are not randomized: patients who clear more plaque may differ in other ways that also slow decline.'},
        ];
        const L = ['Weak', 'Some', 'Strong'];
        const box = root.querySelector('.ev');
        box.innerHTML = items.map((it, i) => `<div style="background:var(--panel);border:1px solid var(--rule);border-radius:14px;padding:14px 18px;margin-bottom:10px;max-width:50em">
          <div style="font:400 16.5px/1.55 var(--serif)">${it.e}</div>
          <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">${L.map((l, j) => `<button class="btn" data-i="${i}" data-a="${j}">${l}</button>`).join('')}</div>
          <div class="ev-x" data-x="${i}" style="display:none;margin-top:10px;background:var(--panel-2);border-radius:10px;padding:10px 12px;font:400 15px/1.55 var(--sans);color:var(--ink-2)"></div></div>`).join('') + '<div class="ev-sum takeaway"></div>';
        const got = {};
        box.querySelectorAll('button').forEach(b => b.onclick = () => {
          const i = +b.dataset.i; got[i] = +b.dataset.a;
          box.querySelectorAll(`button[data-i="${i}"]`).forEach(x => x.className = 'btn' + (x === b ? ' primary' : ''));
          const x = box.querySelector(`[data-x="${i}"]`); x.style.display = 'block'; x.innerHTML = '<b>How the experts read it:</b> ' + items[i].x;
          if (Object.keys(got).length === items.length) {
            const strong = Object.values(got).filter(v => v === 2).length;
            box.querySelector('.ev-sum').innerHTML = `You rated <b>${strong}</b> of 7 as strong. Notice that the case for approval rested on many pieces each rated "some" by at least one camp, added together. The case against rested on one principle: a pre-specified, randomized replication failed, and nothing added afterwards can undo that. Which view you hold decides the case.`;
          }
        });
      }},

    // ---------------- APPROVAL DECISION ----------------
    {type: 'story', kicker: 'The call', title: 'Spring 2021: switching lanes', tocTitle: 'The approval', html: `
      <p>For nine months the FDA reviewed aducanumab for standard approval, which requires substantial evidence that a drug benefits patients. At an internal expert council meeting on March 31 and April 7, 2021, that case met unfavorable feedback.</p>
      <p>Then the agency changed lanes. On April 28 it told Biogen it would consider the drug for [[accelerated approval]], which lets a drug for a serious disease reach patients based on a surrogate "reasonably likely to predict clinical benefit," provided the company later runs a [[confirmatory trial]]. The congressional report called it a pivot "after just three weeks of review." Senior leaders, including the heads of the FDA's drug and biologics centers, had backed the approach at an April 26 briefing. The director of the Office of Biostatistics, Dr. Sylva Collins, dissented, stating her belief that the evidence did not support accelerated approval or any other type of approval.</p>
      <p>Dr. Dunn's decision memo argues against its own conclusion before rejecting it. It concedes that "efforts to rescue, or salvage, a failed study via the accelerated approval pathway are typically inappropriate." It then argues that "the circumstances here are fundamentally different": the amyloid effect was large and consistent, one trial was positive, and plaque is a defining feature of the disease.</p>`},
    {type: 'decision', title: 'You sign the decision', role: 'You are the FDA official responsible for the final call, spring 2021',
      scenario: 'Your clinical reviewers favor approval. Your statisticians don\'t. Your advisory committee voted overwhelmingly that the clinical evidence was not strong. There is no disease-modifying treatment for 6 million Americans. The amyloid effect is beyond doubt. The clinical effect is one positive and one negative trial.',
      options: [
        {label: 'Standard approval: EMERGE plus PRIME are enough', outcome: 'This would tell the world the clinical benefit is established, against your own statisticians and your advisory committee. If a later trial fails, the damage to the agency\'s credibility is severe, and there is no built-in route back.'},
        {label: 'Accelerated approval based on amyloid, with a required confirmatory trial', outcome: 'Patients get access now and the company must prove benefit later. But you are accepting a surrogate you have never accepted before, for a disease where amyloid drugs have repeatedly failed, and you are doing it after the clinical trials were inconclusive rather than before they read out. Payers will ask why they should pay full price for "reasonably likely."'},
        {label: 'Reject, and ask for a third phase 3 trial', outcome: 'Scientifically the cleanest answer, and the one most outside experts urged. The cost is years of delay, patient groups\' fury, and possibly holding back a drug that helps a little. Competing antibodies were already in phase 3, so the question of whether clearing amyloid helps would be answered either way.'},
      ],
      reality: 'On June 7, 2021 the FDA granted accelerated approval "based on reduction in amyloid beta plaques." It gave Biogen until August 2029 to complete a confirmatory trial and until February 2030 to report it. The initial label said simply "for the treatment of Alzheimer\'s disease," far broader than the trial population. It was the first time amyloid had been accepted as a surrogate endpoint.'},

    // ---------------- FALLOUT ----------------
    {type: 'story', kicker: 'The fallout', title: 'Approved, and then refused by almost everyone', tocTitle: 'The fallout', html: `
      <p>Kesselheim, on the committee since 2015, wrote in his resignation letter that "it is clear to me that FDA is not presently capable of adequately integrating the Committee's scientific recommendations into its approval decisions." On approval day he had posted that "Accelerated Approval is not supposed to be the backup that you use when your clinical trial data are not good enough for regular approval." Neurologists Joel Perlmutter of Washington University and David Knopman of the Mayo Clinic had already quit.</p>
      <h3>The label</h3>
      <p>The first [[label]] covered anyone with Alzheimer's, at any stage, though the trials had enrolled only people with mild disease. Congressional investigators found Biogen had internal reservations but "NO plan to push back on broad label indication internally or with the regulators." In early July 2021 the label was narrowed to mild cognitive impairment or mild dementia. That same week, acting FDA commissioner Janet Woodcock asked the HHS inspector general to investigate the agency's dealings with Biogen.</p>
      <h3>The price</h3>
      <p>Biogen's CEO, Michel Vounatsos, called the $56,000 price fair and promised no increase for four years. A September 2020 board presentation, later obtained by Congress, had declared "Our ambition is to make history." The Institute for Clinical and Economic Review ([[ICER]]) judged a fair price to be $3,000 to $8,400 a year.</p>
      <h3>The doctors</h3>
      <p>Then the people who give infusions said no. Cleveland Clinic and Mount Sinai would not administer it. The Veterans Health Administration kept it off its [[formulary]]. Insurers balked. Treatment meant a PET scan or spinal tap, monthly infusions and repeated [[MRI]] scans for [[ARIA]], for a benefit many neurologists doubted. Biogen reported $3 million of Aduhelm revenue for all of 2021.</p>`},
    {type: 'callout', variant: 'product', heading: 'Launch is not adoption', html: `
      <p>Approval was the launch. Adoption needed a chain of other people to say yes: the neurologist, the hospital infusion suite, the radiologist reading MRIs, the insurer and the patient accepting the risk. Each re-ran the evaluation of the evidence, and most reached a different answer from the FDA. Biogen had planned for "pushback" on price; it had not planned for credibility to be the blocker.</p>
      <p><b>Where the analogy breaks:</b> software can build evidence through usage data. Here doctors couldn't learn from prescribing, because a modest benefit is invisible in any one patient. Only a randomized trial can see it, so no amount of traction substitutes.</p>`},

    // ---------------- MEDICARE ----------------
    {type: 'story', kicker: 'The money', title: 'Who pays for "reasonably likely"?', tocTitle: 'Medicare', html: `
      <p>Most people with Alzheimer's are over 65, so the bill lands on [[Medicare]]. Infused drugs go through [[Medicare Part B]], which generally pays for approved drugs without negotiating price; patients usually owe 20%. Biogen projected Medicare would cover more than 85% of its target patients, and a November 2020 board deck reckoned that 250,000 patients at $55,000 would cost Medicare $12 billion a year. The Kaiser Family Foundation noted that if a quarter of the 2 million beneficiaries already on Alzheimer's drugs got Aduhelm, spending would near $29 billion, against $37 billion for all Part B drugs in 2019.</p>
      <p>By law the Part B premium covers about a quarter of expected costs, with reserves for what might happen. In November 2021 CMS raised the 2022 premium from $148.50 to $170.10 a month, which AARP called the largest dollar increase ever, and said roughly half of the rise reflected reserves for Aduhelm. Its actuaries later estimated the premium would have been $160.30 without it. Tens of millions of older Americans paid about $9.80 a month extra for a drug almost none of them received. The excess was folded into a lower premium for 2023.</p>`},
    {type: 'chart', title: 'The Aduhelm premium', intro: 'Standard monthly Medicare Part B premium, in US dollars.',
      chart: {kind: 'bar', title: 'Monthly Part B premium (US$)', unit: '', categories: ['2021', '2022 actual', '2022 minus Aduhelm', '2023'],
        series: [{name: 'Premium', values: [148.5, 170.1, 160.3, 164.9], notes: ['Before Aduhelm', 'Includes reserve for possible Aduhelm spending', 'CMS actuaries\' estimate with all Aduhelm effects removed', 'Reduced by $5.20, partly returning the excess']}], colorByCategory: false, yMax: 200,
        note: 'Sources: CMS 2022 premium announcement (Nov 2021); CMS Office of the Actuary reexamination (May 2022); House staff report (Dec 2022) for the 2023 change.'},
      takeaway: 'A regulatory decision about one drug showed up, within months, in the monthly budget of every Medicare beneficiary.'},
    {type: 'explorer', title: 'Medicare cost explorer', intro: 'A back-of-envelope model. Move the sliders to see how price and uptake drive Medicare spending and premiums. Read the assumptions below the result.',
      inputs: [
        {id: 'n', label: 'Patients treated in a year', min: 10, max: 1000, step: 10, value: 250, fmt: v => v >= 1000 ? '1 million' : v + ',000'},
        {id: 'price', label: 'Price per patient per year', min: 3, max: 60, step: 0.5, value: 56, fmt: v => '$' + v + 'k'},
        {id: 'enr', label: 'Part B enrollees (assumption)', min: 50, max: 65, step: 1, value: 60, fmt: v => v + 'M'},
      ],
      compute: (v, api) => {
        const gross = v.n * 1000 * v.price * 1000, med = 0.8 * gross, coins = 0.2 * v.price * 1000, prem = 0.25 * med / (v.enr * 1e6) / 12, share = gross / 37e9;
        const w = Math.min(100, 100 * share);
        return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:12px;margin-bottom:12px">
          <div class="stat"><div class="v">$${api.fmt(gross / 1e9, 1)}B</div><div class="l">Total drug spending a year (Medicare 80% + patients 20%)</div></div>
          <div class="stat"><div class="v">$${api.fmt(coins)}</div><div class="l">Coinsurance per patient per year, if they have no supplemental insurance</div></div>
          <div class="stat"><div class="v">$${api.fmt(prem, 2)}</div><div class="l">Rough added monthly premium per Part B enrollee</div></div></div>
          <div style="font:400 15px/1.5 var(--sans);color:var(--ink-2)">Compared with Medicare's spending on <b>all</b> Part B drugs in 2019 ($37B): <b>${api.fmt(100 * share)}%</b></div>
          <div style="height:16px;background:var(--panel-2);border-radius:8px;overflow:hidden;margin:6px 0 12px;border:1px solid var(--rule)"><div style="height:100%;width:${w}%;background:var(--il-6)"></div></div>
          <div style="font:400 14px/1.55 var(--sans);color:var(--ink-3)"><b>Assumptions (ours, simplified):</b> Medicare pays 80% and the patient 20% (KFF). The premium covers about 25% of Part B costs (CMS), spread over the number of enrollees you set; CMS says more than 63 million people rely on Medicare, most but not all enrolled in Part B. Ignores the extra 3–6% Medicare adds to drug prices, the cost of PET scans, MRIs and infusion visits, supplemental insurance, and Medicare Advantage. For comparison: Biogen's board deck estimated 250,000 patients at $55,000 = $12B; CMS's real 2022 reserve added $9.80 a month.</div>`;
      }},
    {type: 'story', kicker: 'The post-mortem', title: 'Medicare, Europe and Congress weigh in', tocTitle: 'CMS, EMA, Congress', html: `
      <p><strong>Medicare.</strong> CMS opened a [[National Coverage Determination]] for all anti-amyloid antibodies. Its final decision on April 7, 2022 used <strong>[[coverage with evidence development]]</strong>: for drugs approved on a surrogate, like Aduhelm, Medicare would pay only for patients in randomized controlled trials; for drugs that later showed direct clinical benefit, it would pay for patients in approved studies or registries. In May 2022 Biogen said it was "substantially eliminating" Aduhelm's commercial infrastructure.</p>
      <p><strong>Europe.</strong> The [[EMA]] reached the opposite conclusion from the FDA on the same data. In December 2021 its scientific committee, the [[CHMP]], recommended refusal: although Aduhelm reduces amyloid, "the link between this effect and clinical improvement had not been established," the main studies conflicted, and it was unclear ARIA could be managed in routine practice. Biogen withdrew the application in April 2022.</p>
      <p><strong>Congress.</strong> In December 2022, after 18 months and more than 500,000 pages of documents, staff of two House committees concluded the review was "rife with irregularities": undocumented working-group meetings, a joint briefing document the FDA's own internal review had called "not an appropriate approach in this instance," the abrupt switch to accelerated approval and the broad label. They also judged Biogen's price "unjustifiably high."</p>
      <p><strong>The inspector general.</strong> The HHS Office of Inspector General widened its review to the whole accelerated approval pathway. Its January 2025 report looked at 24 accelerated approvals and found concerns in three, Aduhelm among them, including sponsor meetings missing from or incompletely recorded in FDA files. It recommended better documentation and clear triggers for senior review when reviewers disagree.</p>`},
    {type: 'table', title: 'Who said no, and why', columns: ['Who', 'When', 'Decision', 'Main concern'], rows: [
      ['FDA advisory committee', 'Nov 2020', '10 of 11: EMERGE not primary evidence (1 uncertain)', 'One positive, one negative trial; exploratory analyses cannot rescue ENGAGE'],
      ['Cleveland Clinic, Mount Sinai', 'Jul 2021', 'Would not administer', 'Evidence of benefit and safety risks (as reported)'],
      ['Veterans Health Administration', 'Aug 2021', 'Not added to formulary', 'Evidence of benefit and safety risks (as reported)'],
      ['[[ICER]]', 'Aug 2021', 'Fair price $3,000–$8,400 a year', 'Price should match the demonstrated benefit'],
      ['[[EMA]] ([[CHMP]])', 'Dec 2021', 'Recommended refusal', 'Plaque–benefit link not established; conflicting trials; ARIA risk'],
      ['[[CMS]] (Medicare)', 'Apr 2022', 'Pay only inside randomized trials', 'No anti-amyloid antibody yet shown to improve health outcomes'],
    ], caption: 'Sources: FDA summary review; House staff report (Dec 2022) citing NYT, Reuters and Bloomberg; ICER; EMA; CMS decision memo.'},

    // ---------------- END ----------------
    {type: 'story', kicker: 'The end', title: 'January 31, 2024: handing it back', tocTitle: 'Discontinuation', html: `
      <p>While Aduhelm stalled, its sibling moved. Lecanemab, an anti-amyloid antibody developed by Eisai with Biogen, ran one large, clean phase 3 trial, Clarity AD, with 1,795 participants, and in September 2022 reported a statistically significant slowing of decline on the CDR-SB. As Leqembi it became the first anti-amyloid treatment with traditional FDA approval, covered by Medicare under the rules written for Aduhelm. (The <a href="case.html?id=leqembi">Leqembi case</a> tells that story.)</p>
      <p>Aduhelm's confirmatory trial, ENVISION, began enrolling in 2022, aiming for about 1,500 patients. Biogen spent 2023 looking for a partner or outside financing and found none. On January 31, 2024 it announced it would stop developing and selling Aduhelm, end ENVISION and return the rights to Neurimmune, taking a charge of about $60 million. The decision, it said, was "not related to any safety or efficacy concerns."</p>
      <p>CEO Christopher Viehbacher called Aduhelm the "groundbreaking discovery that paved the way for a new class of drugs." There is truth in that. But with ENVISION ended, the question the FDA left open in 2021, whether Aduhelm itself helped patients, will never be answered.</p>`},
    {type: 'callout', variant: 'whatif', heading: 'What if the FDA had asked for a third trial?', html: `
      <p>Suppose that in 2020 the FDA had required one more phase 3 trial, high dose only, titrated for everyone from day one. It would have taken several years, roughly the time Leqembi's Clarity AD trial took to read out in 2022 with a modest, measurable benefit from clearing amyloid.</p>
      <p>If the third trial succeeded, Aduhelm would have arrived later but with evidence doctors and payers trusted, and with no premium spike, resignations or congressional inquiry. If it failed, patients would have been spared the ARIA risk of an ineffective drug. Either way the FDA's credibility would have been intact when Leqembi came along. The cost: a few years without access for patients who, on EMERGE's numbers, might have gained a small benefit. That trade-off is the real decision.</p>`},

    // ---------------- FAIRNESS ----------------
    {type: 'story', kicker: 'A fair hearing', title: 'The best case for approval, and the best case against', tocTitle: 'Both sides', html: `
      <p>It is more useful to take both sides seriously than to tell a morality tale, because the same arguments will return with the next drug for a devastating disease.</p>
      <h3>The case for approving</h3>
      <ul>
        <li><strong>Unmet need.</strong> Alzheimer's is fatal and common, and nothing slowed it. Delay pushes patients past the stage where the drug might help.</li>
        <li><strong>One trial was positive.</strong> EMERGE met its pre-specified primary endpoint and all secondary endpoints, and there were plausible, if unproven, reasons ENGAGE differed.</li>
        <li><strong>Consistent biology.</strong> The amyloid effect was large and seen in every trial, and tau markers moved the same way.</li>
        <li><strong>The law allows it.</strong> Accelerated approval exists for serious diseases with residual uncertainty.</li>
        <li><strong>Patients wanted a choice.</strong> The Alzheimer's Association and other groups pressed hard for approval, arguing families should weigh a modest chance of benefit against known risks.</li>
      </ul>
      <h3>The case against</h3>
      <ul>
        <li><strong>The replication failed.</strong> Two identical trials were run so that one lucky result couldn't decide the question. When they disagreed, the answer was "not proven."</li>
        <li><strong>The pathway was used backwards.</strong> Accelerated approval is meant to let a trusted surrogate speed a drug <em>before</em> clinical results arrive, not to rescue inconclusive results <em>afterwards</em> with a surrogate the FDA had never accepted.</li>
        <li><strong>The process compromised the judge.</strong> Close collaboration and unrecorded meetings made the result hard to trust, whatever its merits.</li>
        <li><strong>Real harms and costs.</strong> About a third of high-dose patients developed ARIA, and the costs fell on older patients and on Medicare.</li>
        <li><strong>Trust is shared.</strong> Critics argued Aduhelm spent public confidence that "approved" means something, on behalf of every future drug.</li>
      </ul>
      <p>The strongest argument for approval is about <em>who decides</em> under uncertainty. The strongest argument against is about <em>what "approved" is for</em>. Both are legitimate questions, and Aduhelm forced them into the open.</p>`},
    {type: 'callout', variant: 'product', heading: 'Accelerated approval is a beta program with a mandatory follow-up', html: `
      <p>Accelerated approval is like shipping a beta to users who badly need it, on condition that you run the proper evaluation and pull the feature if it fails. That works when the beta metric is trustworthy and the follow-up actually happens. Aduhelm had a questionable metric and a follow-up deadline almost nine years away, with no requirement that the confirmatory trial be running at launch.</p>
      <p><b>Where the analogy breaks:</b> a beta can be switched off overnight. Withdrawing a drug approval has historically taken years, patients have already taken on risks and payers have already paid. So Congress's fix, below, makes the follow-up start sooner and the off-switch faster.</p>`},
    {type: 'story', kicker: 'What changed', title: 'What the field changed afterwards', tocTitle: 'What changed', html: `
      <p><strong>Congress rewrote the rules.</strong> In December 2022 the Food and Drug Omnibus Reform Act, [[FDORA]], passed inside the Consolidated Appropriations Act, 2023. The FDA can now require a confirmatory trial to be underway <em>before</em> accelerated approval, or within a set time after, and must specify its conditions, such as enrolment targets and completion dates, at approval. Companies must report progress about every 180 days, the FDA must publish it, and the agency gained expedited procedures to withdraw an approval if the confirmatory study is not run with due diligence or fails.</p>
      <p><strong>The FDA changed how it works with sponsors.</strong> Its internal review recommended joint briefing documents only "when there is a unified FDA perspective on the data," and that informal contacts be recorded. The inspector general pressed for triggers for senior review when reviewers disagree or approval relies on analyses outside the original plan.</p>
      <p><strong>Medicare found a lever.</strong> Coverage with evidence development became the template for the whole anti-amyloid class.</p>
      <p><strong>The science moved on.</strong> The next anti-amyloid antibodies were judged on clean, pre-specified clinical results, and their modest benefits and ARIA risks are now debated on evidence rather than hope. That may be Aduhelm's most useful legacy.</p>`},
    {type: 'callout', variant: 'lesson', heading: 'The one-sentence lesson', html: `<p>A surrogate endpoint is a promise about a causal chain, and when the clinical trials that should confirm the chain disagree, no amount of process, pressure or post hoc analysis can turn that promise into proof; it can only spend the trust that makes "approved" mean something.</p>`},

    // ---------------- QUIZ ----------------
    {type: 'quiz', title: 'Check your judgment', questions: [
      {q: 'What was the basis of Aduhelm\'s June 2021 approval?', options: ['EMERGE and ENGAGE together showed slower cognitive decline', 'Reduction of amyloid plaque, a surrogate judged reasonably likely to predict benefit', 'A new third phase 3 trial', 'PRIME\'s cognitive results'], answer: 1, explain: 'It was an accelerated approval based on amyloid reduction on PET, with a confirmatory trial required. The clinical trials were inconclusive.'},
      {q: 'Why is "the scan got cleaner" not enough to show a drug helps Alzheimer\'s patients?', options: ['PET scans are too imprecise to measure plaque', 'Plaque might be a bystander, or other disease drivers might carry on regardless', 'The FDA does not allow imaging endpoints', 'Plaque removal takes too long to measure'], answer: 1, explain: 'The surrogate is only as good as the causal chain linking it to outcomes. A scan can change without the person\'s decline changing.'},
      {q: 'Biogen\'s analysts found that ENGAGE patients with more high-dose exposure looked like EMERGE patients. What is the main statistical weakness of that finding?', options: ['The sample was too large', 'It is a post hoc subgroup defined by what happened after randomization, so the groups may differ in other ways', 'It used the wrong endpoint', 'High doses cannot be analyzed separately'], answer: 1, explain: 'Patients who stay on a high dose long enough differ from those who don\'t. Only randomization guarantees a fair comparison.'},
      {q: 'The EMERGE high-dose result was a 0.39-point difference on CDR-SB. What does that mean?', options: ['Patients improved by 0.39 points', 'High-dose patients worsened 0.39 points less than placebo patients over 78 weeks, on an 18-point scale', 'The drug worked in 39% of patients', 'Plaque fell by 39%'], answer: 1, explain: 'Everyone worsened. The drug group worsened less: 1.35 versus 1.74 points. The trial was designed to detect 0.5.'},
      {q: 'Which question was the advisory committee NOT asked in November 2020?', options: ['Whether EMERGE alone provided strong evidence', 'Whether PRIME was supportive', 'Whether the drug should get accelerated approval based on amyloid', 'Whether EMERGE could be primary evidence despite ENGAGE'], answer: 2, explain: 'Accelerated approval was never put to the committee. The FDA switched to that pathway in April 2021.'},
      {q: 'How did Medicare effectively block Aduhelm without refusing to pay for FDA-approved drugs in general?', options: ['It negotiated the price down to $3,000', 'It used coverage with evidence development: pay only for patients in randomized trials', 'It banned the drug', 'It required a prior authorization form'], answer: 1, explain: 'The April 2022 National Coverage Determination covered surrogate-approved anti-amyloid antibodies only inside randomized trials.'},
      {q: 'Why did every Medicare beneficiary feel Aduhelm in 2022, even though almost none received it?', options: ['A special Aduhelm tax', 'Part B premiums must fund reserves for expected costs, and CMS reserved for possible Aduhelm spending', 'Medicare raised coinsurance to 50%', 'Biogen billed Medicare in advance'], answer: 1, explain: 'CMS actuaries estimated the 2022 premium would have been $160.30 instead of $170.10 without the Aduhelm effect.'},
      {q: 'Which change did FDORA (December 2022) make to accelerated approval?', options: ['Abolished accelerated approval for neurology', 'Let the FDA require confirmatory trials to be underway before approval, and speed up withdrawal', 'Required advisory committees to vote on every approval', 'Banned surrogate endpoints based on imaging'], answer: 1, explain: 'It also requires progress reports about every 180 days and lets the FDA set study conditions at approval.'},
    ]},

    // ---------------- LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'A surrogate is a hypothesis, not a result', text: 'Moving a biomarker proves a drug hits its target, not that it helps. Before trusting a surrogate, ask what else could explain the disease and what else the drug does.', links: ['torcetrapib', 'leqembi', 'epacadostat']},
      {title: 'Decide the rules before you see the data', text: 'Stopping rules, analysis plans and subgroup definitions exist so that no one can pick the story after the fact. Aduhelm broke on a futility rule that pooled unlike trials and on post hoc analyses that could never be conclusive.', links: ['epacadostat', 'vioxx']},
      {title: 'Replication is the point of the second trial', text: 'Running two identical trials only protects you if you accept the answer when they disagree. Leqembi showed the alternative: one clean, large trial that people could believe.', links: ['leqembi', 'keytruda']},
      {title: 'Approval is not adoption', text: 'Doctors, hospitals, payers and foreign regulators each re-judge the evidence. A weak evidence package can win a regulator and still lose every other gatekeeper.', links: ['exubera', 'sovaldi']},
      {title: 'Price has to follow proven value', text: 'A high price can be defended for a transformative drug with clear evidence. Set against uncertain benefit and a public payer, it turns scepticism into outrage and invites the payer to block coverage.', links: ['sovaldi', 'zolgensma']},
      {title: 'Patient urgency deserves weight, and so does trust', text: 'Advocates rightly push regulators to move fast for deadly diseases. The lesson from Aduhelm is to channel that urgency into faster, cleaner trials rather than weaker standards.', links: ['spinraza', 'trikafta']},
    ]},

    // ---------------- SOURCES ----------------
    {type: 'sources', title: 'Sources', items: [
      {text: 'FDA. Summary review for regulatory action, BLA 761178 (aducanumab), Office of Neuroscience (Dunn), June 7, 2021.', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/nda/2021/Aducanumab_BLA761178_Dunn_2021_06_07.pdf'},
      {text: 'FDA. ADUHELM (aducanumab-avwa) prescribing information, revised 2023.', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/761178s007lbl.pdf'},
      {text: 'FDA. Accelerated approval letter to Biogen, June 7, 2021 (confirmatory trial dates).', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2021/761178Orig1s000ltr.pdf'},
      {text: 'Cavazzoni P. FDA\'s Decision to Approve New Treatment for Alzheimer\'s Disease. FDA, June 7, 2021.', url: 'https://web.archive.org/web/20210701210715/https://www.fda.gov/drugs/news-events-human-drugs/fdas-decision-approve-new-treatment-alzheimers-disease'},
      {text: 'Budd Haeberlein S, et al. Two Randomized Phase 3 Studies of Aducanumab in Early Alzheimer\'s Disease. J Prev Alzheimers Dis 2022;9:197–210.', url: 'https://www.jpreventionalzheimer.com/5919-two-randomized-phase-3-studies-of-aducanumab-in-early-alzheimers-disease.html'},
      {text: 'Sevigny J, et al. The antibody aducanumab reduces Aβ plaques in Alzheimer\'s disease. Nature 2016;537:50–56.', url: 'https://doi.org/10.1038/nature19323'},
      {text: 'Knopman DS, Jones DT, Greicius MD. Failure to demonstrate efficacy of aducanumab: an analysis of the EMERGE and ENGAGE trials as reported by Biogen, December 2019. Alzheimer\'s & Dementia 2021;17:696–701.', url: 'https://doi.org/10.1002/alz.12213'},
      {text: 'Biogen. Biogen Plans Regulatory Filing for Aducanumab in Alzheimer\'s Disease Based on New Analysis of Larger Dataset from Phase 3 Studies, Oct 22, 2019.', url: 'https://investors.biogen.com/news-releases/news-release-details/biogen-plans-regulatory-filing-aducanumab-alzheimers-disease'},
      {text: 'Biogen. Biogen Announces Reduced Price for ADUHELM to Improve Access for Patients with Early Alzheimer\'s Disease, Dec 20, 2021.', url: 'https://investors.biogen.com/news-releases/news-release-details/biogen-announces-reduced-price-aduhelmr-improve-access-patients'},
      {text: 'Biogen. Biogen to Realign Resources for Alzheimer\'s Disease Franchise, Jan 31, 2024.', url: 'https://investors.biogen.com/news-releases/news-release-details/biogen-realign-resources-alzheimers-disease-franchise'},
      {text: 'Staffs of the House Committee on Oversight and Reform and Committee on Energy and Commerce. The High Price of Aduhelm\'s Approval: An Investigation into FDA\'s Atypical Review Process and Biogen\'s Aggressive Launch Plans, Dec 2022.', url: 'https://oversightdemocrats.house.gov/imo/media/doc/2022-12-29.COR%20%26%20E%26C%20Joint%20Staff%20Report%20re.%20Aduhelm.pdf'},
      {text: 'CMS. Decision memo: Monoclonal Antibodies Directed Against Amyloid for the Treatment of Alzheimer\'s Disease (CAG-00460N), April 7, 2022.', url: 'https://www.cms.gov/medicare-coverage-database/view/ncacal-decision-memo.aspx?proposed=N&ncaid=305'},
      {text: 'CMS. CMS Announces 2022 Medicare Part B Premiums, Nov 12, 2021.', url: 'https://www.cms.gov/newsroom/press-releases/cms-announces-2022-medicare-part-b-premiums'},
      {text: 'CMS. Report to the Secretary: Reexamination of the 2022 Medicare Part B Premium, May 19, 2022.', url: 'https://www.cms.gov/files/document/cms-report-secretary-2022-medicare-part-b-premium-reexamination.pdf'},
      {text: 'European Medicines Agency. Aduhelm: withdrawal of application (and Q&A on the refusal recommendation), April 2022.', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/aduhelm'},
      {text: 'Cubanski J, Neuman T. FDA\'s Approval of Biogen\'s New Alzheimer\'s Drug Has Huge Cost Implications for Medicare and Beneficiaries. KFF, June 10, 2021.', url: 'https://www.kff.org/medicare/issue-brief/fdas-approval-of-biogens-new-alzheimers-drug-has-huge-cost-implications-for-medicare-and-beneficiaries/'},
      {text: 'Chappell B. 3 Experts Have Resigned From An FDA Committee Over Alzheimer\'s Drug Approval. NPR, June 11, 2021.', url: 'https://www.npr.org/2021/06/11/1005567149/3-experts-have-resigned-from-an-fda-committee-over-alzheimers-drug-approval'},
      {text: 'Li Y. Biogen posts its worst day in 14 years after ending trial for blockbuster Alzheimer\'s drug. CNBC, March 21, 2019.', url: 'https://www.cnbc.com/2019/03/21/biogen-shares-plunge-more-than-25percent-after-ending-trial-for-alzheimers-drug-aducanumab.html'},
      {text: 'CNBC. Biogen soars on hopes of Alzheimer\'s treatment approval, Oct 22, 2019.', url: 'https://www.cnbc.com/2019/10/22/biogen-soars-40percent-on-hopes-of-alzheimers-treatment-approval.html'},
      {text: 'Feuerstein A, Herper M, Garde D. Inside \'Project Onyx\': How Biogen used an FDA back channel to win approval of its polarizing Alzheimer\'s drug. STAT, June 29, 2021.', url: 'https://www.statnews.com/2021/06/29/biogen-fda-alzheimers-drug-approval-aduhelm-project-onyx/'},
      {text: 'Alzforum. Biogen Antibody Buoyed by Phase 1 Data and Hungry Investors (AD/PD 2015 coverage).', url: 'https://www.alzforum.org/news/conference-coverage/biogen-antibody-buoyed-phase-1-data-and-hungry-investors'},
      {text: 'Alzforum. Therapeutics: Aduhelm.', url: 'https://www.alzforum.org/therapeutics/aduhelm'},
      {text: 'University of Zurich. Approval for New Alzheimer\'s Drug Developed at UZH, June 7, 2021.', url: 'https://www.media.uzh.ch/en/Press-Releases/2021/Approval.html'},
      {text: 'Zacks R. Biogen Inks $380 Million Deal With Swiss Company. Xconomy, Nov 20, 2007.', url: 'https://web.archive.org/web/20210608103937/https://xconomy.com/boston/2007/11/20/biogen-inks-380-million-deal-with-swiss-company/'},
      {text: 'BioPharma Dive. Federal watchdog cites concerns with FDA\'s accelerated approval process (HHS OIG report), Jan 2025.', url: 'https://www.biopharmadive.com/news/fda-accelerated-approval-hhs-oig-concerns-report/737427/'},
      {text: 'FDA. Expedited Program for Serious Conditions: Accelerated Approval of Drugs and Biologics, draft guidance, Dec 2024.', url: 'https://www.fda.gov/media/184120/download'},
      {text: 'Salloway S, et al. Two Phase 3 Trials of Bapineuzumab in Mild-to-Moderate Alzheimer\'s Disease. N Engl J Med 2014;370:322–333.', url: 'https://doi.org/10.1056/NEJMoa1304839'},
      {text: 'Honig LS, et al. Trial of Solanezumab for Mild Dementia Due to Alzheimer\'s Disease. N Engl J Med 2018;378:321–330.', url: 'https://doi.org/10.1056/NEJMoa1705971'},
      {text: 'Alzheimer\'s Association. It\'s a New Day in the Fight Against Alzheimer\'s: Aducanumab Approved, June 2021.', url: 'https://www.alz.org/get-involved-now/new-day'},
      {text: 'Hardy JA, Higgins GA. Alzheimer\'s disease: the amyloid cascade hypothesis. Science 1992;256:184–185.', url: 'https://doi.org/10.1126/science.1566067'},
    ]},
  ],
});
