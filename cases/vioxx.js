// Vioxx (rofecoxib), Merck & Co. A cautionary tale about a safety signal found, argued over, and acted on after launch.
registerCase({
  id: 'vioxx', kind: 'failure',
  brand: 'Vioxx', generic: 'rofecoxib', company: 'Merck & Co.',
  tagline: 'A painkiller built to spare the stomach tipped a balance in the blood. The warning signs came early; for four years people argued about what they meant.',
  chips: [['Disease', 'Arthritis and acute pain'], ['Modality', '[[small molecule]]'], ['Target', '[[COX-2]]'], ['Approved', '1999'], ['Withdrawn', '2004']],
  readingTime: 32,
  stats: [
    {v: '$2.5B', l: 'Worldwide sales in 2003', n: 'Merck annual report'},
    {v: '~20M', l: 'Americans who took Vioxx (estimate)', n: 'NPR, 2007'},
    {v: '20 vs 4', l: 'Heart attacks, Vioxx vs naproxen, in VIGOR', n: 'NEJM, 2005'},
    {v: '1.92×', l: '[[relative risk]] of clot events vs [[placebo]] in APPROVe', n: 'NEJM, 2005'},
    {v: '$4.85B', l: 'US liability settlement, 2007', n: 'Merck'},
  ],
  emblem: `<svg viewBox="0 0 300 300" role="img" aria-label="A pill across a heart">
    <circle cx="150" cy="150" r="132" class="il-7s"/>
    <path d="M150 238 C 70 186 44 148 44 110 C 44 78 70 56 100 56 C 124 56 140 70 150 88 C 160 70 176 56 200 56 C 230 56 256 78 256 110 C 256 148 230 186 150 238 Z" class="il-7"/>
    <path d="M150 88 L 138 128 L 162 150 L 146 196" class="il-none st-ink" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity=".55"/>
    <g transform="rotate(-35 150 150)">
      <rect x="70" y="124" width="160" height="52" rx="26" class="il-paper il-line2"/>
      <path d="M150 124 H 204 A 26 26 0 0 1 204 176 H 150 Z" class="il-1"/>
      <line x1="150" y1="124" x2="150" y2="176" class="il-line2"/>
    </g>
  </svg>`,
  facts: {start: 1991, firstHuman: null, approval: 1999, end: 2004, peakSalesB: 2.5, pivotalN: 8076, area: 'immunology', modality: 'small molecule', target: 'COX-2'},
  themes: ['safety', 'regulatory', 'biology-surprise', 'surrogate-endpoints'],
  glossary: {
    'prostaglandin': 'A family of short-lived, fat-derived signaling molecules made on the spot by almost every tissue. They cause pain, fever and swelling, but also protect the stomach, control kidney blood flow and regulate clotting.',
    'prostanoid': 'The umbrella name for prostaglandins, thromboxane and prostacyclin, all made from the same fat by COX enzymes.',
    'arachidonic acid': 'A fatty acid stored in cell membranes. COX enzymes turn it into prostaglandins, thromboxane and prostacyclin.',
    'cyclooxygenase': 'The enzyme (COX) that performs the first step in making prostaglandins from arachidonic acid. Humans have two main versions, COX-1 and COX-2.',
    'COX-1': 'The "housekeeping" cyclooxygenase, switched on most of the time in the stomach, kidneys and platelets. It makes stomach-protecting prostaglandins and the clotting signal thromboxane.',
    'COX-2': 'The cyclooxygenase that cells switch on in response to injury and inflammation. It also turned out to make much of the body\'s prostacyclin, a signal that stops clots forming.',
    'thromboxane': 'Thromboxane A2, made by platelets through COX-1. It makes platelets clump together and blood vessels tighten: good for stopping bleeding, bad inside a diseased artery.',
    'prostacyclin': 'A signal made by the cells lining blood vessels. It keeps platelets from sticking and relaxes the vessel, the natural counterweight to thromboxane. In people, much of it is made by COX-2.',
    'platelet': 'A tiny cell fragment in the blood that plugs leaks by clumping into a clot. Platelets have no nucleus, so they cannot make new enzymes once one is blocked.',
    'NSAID': 'Non-steroidal anti-inflammatory drug: the class that includes aspirin, ibuprofen, naproxen and the coxibs. All block COX enzymes.',
    'coxib': 'Nickname for the COX-2-selective NSAIDs, such as celecoxib (Celebrex), rofecoxib (Vioxx), valdecoxib (Bextra) and etoricoxib (Arcoxia).',
    'naproxen': 'An older NSAID (sold as Naprosyn and Aleve) that blocks both COX-1 and COX-2. Its long action suppresses platelet thromboxane for much of the day, which is why some thought it might protect the heart.',
    'celecoxib': 'Celebrex, from Searle and Pfizer: the first coxib approved in the US (December 1998) and the only one still sold there.',
    'rofecoxib': 'The generic name of Vioxx, Merck\'s COX-2-selective NSAID, approved in May 1999 and withdrawn in September 2004.',
    'ulcer': 'An open sore in the lining of the stomach or small intestine. NSAID ulcers can bleed or perforate (burst through the wall), which can kill.',
    'heart attack': 'Death of part of the heart muscle when its blood supply is cut off, usually by a clot forming on a fatty plaque inside a coronary artery. Doctors call it a myocardial infarction (MI).',
    'myocardial infarction': 'The medical name for a heart attack (MI).',
    'atherosclerosis': 'The slow build-up of fatty plaques inside artery walls. A plaque that cracks can trigger a clot that blocks the artery.',
    'plaque': 'In arteries: a fatty, inflamed deposit in the vessel wall. Clots that cause heart attacks usually form on top of one.',
    'thrombotic event': 'A medical event caused by a blood clot blocking a vessel: heart attack, ischemic stroke, clots in leg arteries and similar.',
    'relative risk': 'The risk in one group divided by the risk in another. 2.0 means "twice as likely", whether the underlying risk is 1 in 10 or 1 in 10,000.',
    'absolute risk': 'The actual chance of an event in a group over a period, for example 1.5 in 100 per year. Relative risk says how much it changes; absolute risk says how much that matters.',
    'number needed to harm': 'How many people must take a drug for one extra person to have a given side effect. The reciprocal of the absolute risk increase.',
    'patient-year': 'One patient followed for one year (or two for six months, and so on). Event rates "per 100 patient-years" adjust for people being followed for different lengths of time.',
    'meta-analysis': 'A statistical pooling of several studies to get a more precise overall answer than any single study.',
    'cumulative meta-analysis': 'A meta-analysis redone each time a new study appears, showing when the pooled evidence first became convincing.',
    'observational study': 'A study of what happens to people in routine care (insurance claims, health records) without assigning treatments at random. Big and cheap, but prone to confounding.',
    'confounding': 'When something else explains an apparent drug effect, for example if sicker patients were more likely to be prescribed the drug.',
    'case-control study': 'An observational design that starts from people who had the event (cases), matches them to similar people who did not (controls), and compares their earlier drug use.',
    'spontaneous reporting': 'The system in which doctors, patients and companies voluntarily report suspected side effects to the regulator (MedWatch in the US). Good at rare, unusual reactions; poor at detecting increases in common events like heart attacks.',
    'adjudication': 'Review of each possible event by an independent, blinded committee using fixed definitions, so that "heart attack" means the same thing in every arm.',
    'data cutoff': 'The date after which newly reported events are not counted in a particular analysis.',
    'direct-to-consumer advertising': 'Advertising prescription drugs to the public (TV, magazines) rather than only to doctors. Legal in the US and New Zealand; broadcast ads expanded after FDA guidance in 1997.',
    'expression of concern': 'A formal notice from a journal that it doubts the reliability of a paper it published, short of a retraction.',
    'colorectal adenoma': 'A growth (polyp) in the lining of the colon that can turn into cancer. Removing them and preventing new ones reduces colon cancer.',
    'intention-to-treat': 'Analyzing everyone in the group they were randomized to, whether or not they kept taking the drug. It preserves the fairness of randomization.',
    'on-treatment analysis': 'Counting only events that happen while patients are taking the study drug (often plus a short window after). It can hide harms that show up after people stop.',
    'noninferiority trial': 'A trial designed to show a new treatment is "not unacceptably worse" than a comparator, within a pre-set margin.',
    'off-label': 'Use of a drug for a purpose, dose or population the FDA has not approved. Doctors may prescribe off-label; companies may not promote it.',
    'misbranding': 'Under US drug law, selling a drug with false or misleading labeling or promotion, including promoting unapproved uses.',
    'FDAAA': 'The Food and Drug Administration Amendments Act of 2007, which gave the FDA power to require postmarket studies, safety label changes and REMS, and to build an active safety-surveillance system.',
    'Sentinel': 'The FDA\'s active surveillance system, launched in 2008, which queries health-insurance and medical-record data covering many millions of people to check suspected drug risks.',
    'Office of Drug Safety': 'The FDA unit (in 2004) that studied side effects after approval. It could recommend action but had no regulatory authority of its own.',
    'Office of New Drugs': 'The FDA unit that reviews and approves new drugs and, in 2004, also decided on label changes and other actions after approval.',
    'mass tort': 'Many individual injury lawsuits against the same defendant over the same product, usually coordinated before a few judges.',
    'endothelium': 'The single layer of cells lining every blood vessel. It makes prostacyclin and other signals that keep blood flowing smoothly.',
    'MedWatch': 'The FDA\'s program for voluntary reporting of suspected side effects.',
  },
  sections: [
    // ---------------- 1. COLD OPEN ----------------
    {type: 'story', kicker: 'Cold open', title: 'Thursday, September 30, 2004', html: `
<p>Imagine you are 68, with knees that grind on the stairs. For years your doctor has given you ibuprofen or naproxen and warned you about your stomach: these drugs can cause bleeding [[ulcer|ulcers]], and at your age that is a real way to die. Then, in 1999, a new pill arrives. One tablet a day, the same pain relief, far less risk to your stomach. Your doctor switches you. So do the doctors of millions of other people.</p>
<p>That pill was Vioxx. Within two years it was Merck's second-best-selling product. By 2003 it sold $2.5 billion a year worldwide, and an estimated 20 million Americans took it.</p>
<p>On Thursday, September 30, 2004, Merck withdrew Vioxx from every market in the world. A three-year trial against a dummy pill ([[placebo]]) in people with colon polyps had found about twice as many heart attacks and strokes on the drug. "We are taking this action because we believe it best serves the interests of patients," said Raymond Gilmartin, Merck's chief executive.</p>
<p>Read that way, it is a story of a company acting when the evidence arrived. Most people who have studied it do not read it that way. A heart signal had shown up in Merck's own large trial four and a half years earlier and was explained away with a plausible hypothesis that was never directly tested. Six weeks after the withdrawal, an FDA epidemiologist told the US Senate that Vioxx might have caused 88,000 to 139,000 excess heart attacks in America.</p>
<p>This case is about biology (the drug did exactly what it was designed to do, and that was the problem), about statistics (how to see a small rise in a common event), and about organizations: who owns a safety question after launch, and what happens when the people who could answer it hope the answer is no.</p>`},

    // ---------------- 2. PAIN FROM ZERO ----------------
    {type: 'story', kicker: 'The biology from zero', title: 'Where pain comes from, and why painkillers hurt the stomach', html: `
<p>When you sprain an ankle, the injured cells start making short-lived signaling molecules called [[prostaglandin|prostaglandins]]. They make nerve endings more sensitive (pain), widen vessels (heat and redness) and make them leaky (swelling). The classic signs of [[inflammation]] are largely prostaglandins at work.</p>
<p>Prostaglandins are made from [[arachidonic acid]], a fat stored in every cell membrane. The key step is done by an [[enzyme]] (a protein that speeds up one chemical reaction) called [[cyclooxygenase]], or COX. Aspirin, ibuprofen and naproxen all block COX. Together they are called [[NSAID|NSAIDs]]. In 1971 the British pharmacologist John Vane showed that this is how aspirin works, part of the work behind his 1982 Nobel Prize.</p>
<h3>The same molecules keep you alive</h3>
<p>Prostaglandins also do maintenance. In the stomach they keep up the protective mucus and blood flow, so the lining is not digested by its own acid. In the kidneys they help regulate salt and blood flow. In the blood, a cousin called [[thromboxane]], made by [[platelet|platelets]], makes platelets clump to plug a leak, while the lining of blood vessels makes [[prostacyclin]], which does the opposite. Together these molecules are called [[prostanoid|prostanoids]].</p>
<p>An NSAID does not know it is meant for your knee. It lowers prostanoids everywhere. For someone taking full doses for arthritis every day, the stomach loses part of its protection and ulcers form, some of which bleed or burst. A widely cited 1999 review in the <i>New England Journal of Medicine</i> estimated that NSAID complications put about 107,000 Americans in hospital each year and killed at least 16,500 people with arthritis. A painkiller that spared the stomach would be worth a great deal.</p>
<aside class="note">Keep one idea in mind: prostanoids are <b>opposing signals</b>. Some push toward clotting and some against it. Change one side without the other and you change the balance.</aside>`},

    {type: 'figure', title: 'One enzyme family, many jobs', intro: 'Hover or tap each site to see what prostanoids do there and which COX version is mainly responsible.',
      svg: `<svg viewBox="0 0 900 430" role="img" aria-label="Map of where prostanoids act in the body">
        <g class="il-line" fill="none" stroke-dasharray="5 5">
          <path d="M450 215 L200 105"/><path d="M450 215 L200 330"/><path d="M450 215 L450 75"/><path d="M450 215 L700 105"/><path d="M450 215 L700 330"/><path d="M450 215 L450 360"/>
        </g>
        <circle cx="450" cy="215" r="74" class="il-4s il-line"/>
        <text x="450" y="206" text-anchor="middle" class="il-title">COX enzymes</text>
        <text x="450" y="226" text-anchor="middle" class="il-text-2">turn membrane fat</text>
        <text x="450" y="243" text-anchor="middle" class="il-text-2">into prostanoids</text>
        <g data-part="stomach">
          <path d="M160 70 C 150 110 170 140 210 140 C 250 140 262 112 246 96 C 232 84 214 96 206 88 C 196 76 204 60 190 56 C 176 52 164 58 160 70 Z" class="il-2s il-line2"/>
          <text x="205" y="168" text-anchor="middle" class="il-text">Stomach lining</text>
          <text x="205" y="186" text-anchor="middle" class="il-small">mostly COX-1</text>
        </g>
        <g data-part="platelets">
          <ellipse cx="175" cy="310" rx="22" ry="11" class="il-8s il-line"/><ellipse cx="215" cy="300" rx="22" ry="11" class="il-8s il-line"/><ellipse cx="200" cy="330" rx="22" ry="11" class="il-8s il-line"/>
          <circle cx="238" cy="326" r="6" class="il-4"/><circle cx="160" cy="336" r="6" class="il-4"/>
          <text x="200" y="368" text-anchor="middle" class="il-text">Platelets</text>
          <text x="200" y="386" text-anchor="middle" class="il-small">COX-1 only: thromboxane</text>
        </g>
        <g data-part="joint">
          <rect x="400" y="14" width="44" height="38" rx="14" class="il-8s il-line"/><rect x="456" y="14" width="44" height="38" rx="14" class="il-8s il-line"/>
          <circle cx="450" cy="33" r="16" class="il-7s"/><circle cx="450" cy="33" r="7" class="il-7"/>
          <text x="530" y="30" class="il-text">Injured joint</text>
          <text x="530" y="48" class="il-small">COX-2 switched on</text>
        </g>
        <g data-part="brain">
          <path d="M660 110 C 640 110 636 84 656 78 C 654 58 680 50 692 62 C 702 46 732 50 734 70 C 756 70 760 100 740 106 C 742 124 716 130 706 118 C 694 130 668 128 660 110 Z" class="il-5s il-line2"/>
          <text x="700" y="156" text-anchor="middle" class="il-text">Brain and nerves</text>
          <text x="700" y="174" text-anchor="middle" class="il-small">fever, pain signaling</text>
        </g>
        <g data-part="vessel">
          <rect x="630" y="296" width="150" height="40" rx="20" class="il-3s il-line2"/>
          <circle cx="665" cy="316" r="6" class="il-8"/><circle cx="700" cy="312" r="6" class="il-8"/><circle cx="740" cy="320" r="6" class="il-8"/>
          <text x="705" y="364" text-anchor="middle" class="il-text">Blood-vessel wall</text>
          <text x="705" y="382" text-anchor="middle" class="il-small">prostacyclin, largely COX-2</text>
        </g>
        <g data-part="kidney">
          <path d="M430 330 C 404 334 400 372 422 388 C 440 400 462 392 458 376 C 452 362 468 356 470 344 C 472 330 450 326 430 330 Z" class="il-2s il-line2"/>
          <text x="478" y="366" class="il-text">Kidney</text>
          <text x="478" y="384" class="il-small">both COX types</text>
        </g>
      </svg>`,
      hotspots: {
        stomach: {title: 'Stomach lining', text: 'Prostaglandins made mainly by [[COX-1]] tell the stomach lining to secrete mucus and bicarbonate and keep its blood supply up. Block them and the lining becomes vulnerable to its own acid: this is why NSAIDs cause [[ulcer|ulcers]].'},
        platelets: {title: 'Platelets', text: '[[platelet|Platelets]] have only COX-1. They use it to make [[thromboxane]], which makes platelets clump. Low-dose aspirin blocks it permanently for the life of each platelet (about a week to ten days), which is why aspirin prevents heart attacks and also causes bleeding.'},
        joint: {title: 'Injured or inflamed tissue', text: 'Injury and inflammation switch on [[COX-2]], which floods the area with prostaglandins that cause pain and swelling. The COX-2 idea was simple: block this and leave COX-1 alone.'},
        brain: {title: 'Brain and nerves', text: 'Prostaglandins act in the brain to raise body temperature (fever) and in the spinal cord to amplify pain signals. COX-2 is a major source here.'},
        vessel: {title: 'Blood-vessel wall', text: 'The lining of blood vessels makes [[prostacyclin]], which stops platelets sticking and relaxes the vessel. In 1999, Garret FitzGerald\'s group at the University of Pennsylvania showed that in healthy people, COX-2 inhibitors (celecoxib, and Merck\'s compound in a study with Merck co-authors) substantially lowered prostacyclin production. That finding would matter enormously.'},
        kidney: {title: 'Kidney', text: 'Both COX-1 and COX-2 help the kidneys regulate salt and blood flow. This is why NSAIDs, coxibs included, can raise blood pressure and cause fluid retention, effects seen with Vioxx in VIGOR and later trials.'},
      },
      caption: 'Simplified. The real division of labour is messier than "good enzyme, bad enzyme", and that turned out to be the point.'},

    // ---------------- 3. KEY INSIGHT ----------------
    {type: 'story', kicker: 'The key insight', title: 'Two enzymes, one idea', html: `
<p>For twenty years everyone assumed there was one COX enzyme. In 1991 two labs found a second. Daniel Simmons at Brigham Young University and Harvey Herschman at UCLA, studying genes switched on when cells are stimulated to grow, each found a gene very like COX that was nearly absent in resting cells and appeared quickly on stimulation.</p>
<p>It became [[COX-2]]; the original became [[COX-1]]. The tidy picture: COX-1 is the housekeeper, always on in the stomach, kidneys and platelets. COX-2 is the emergency crew, switched on by injury to make the prostaglandins of pain and swelling. Block COX-2 alone and you should get the pain relief of ibuprofen without the ulcers. For a drug company it was a rare combination: a validated [[target]], a clear reason to expect a better drug, and one of the largest markets in medicine.</p>
<p>The chemistry worked because COX-2 has a slightly larger binding pocket with an extra side pocket. A molecule with a bulky group that fits there binds COX-2 tightly and is too big for COX-1. Searle and Pfizer got there first: [[celecoxib]] (Celebrex) was approved on December 31, 1998. Merck's [[rofecoxib]] (Vioxx) followed on May 20, 1999, for osteoarthritis, acute pain and menstrual pain. It was more COX-2-selective in the lab and taken once a day, a [[fast follower]] aiming to be [[best-in-class]]. By January 2001 Merck said it had about half of new US prescriptions in the class.</p>
<p>Note what approval rested on: mostly short studies in patients at low heart risk, measuring pain and ulcers seen by endoscopy. An ulcer on a camera is a [[surrogate endpoint]], a stand-in for what matters (bleeding, perforation, death). Proving the real benefit needed a big outcomes trial. That was VIGOR.</p>`},

    // ---------------- 4. MECHANISM ----------------
    {type: 'mechanism', title: 'How Vioxx worked, and how it harmed', intro: 'Step through the design logic of a COX-2-selective drug, and the part of the system nobody had fully mapped.',
      svg: `<svg viewBox="0 0 760 450" role="img" aria-label="COX-1 and COX-2 mechanism" class="vx-m">
        <style>.vx-m .il-text{font-size:18px}.vx-m .il-small{font-size:14.5px}.vx-m .il-white{font-size:18px}.vx-m .il-text-2{font-size:16px}</style>
        <g data-part="membrane">
          <rect x="20" y="30" width="260" height="36" rx="8" class="il-5s"/>
          <line x1="20" y1="30" x2="280" y2="30" class="il-line2"/><line x1="20" y1="66" x2="280" y2="66" class="il-line2"/>
          <text x="20" y="20" class="il-text-2">Cell membrane</text>
        </g>
        <g data-part="aa">
          <path d="M60 96 q 10 -12 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0" class="st-4 il-none" stroke-width="5" stroke-linecap="round" fill="none"/>
          <text x="210" y="102" class="il-text">arachidonic acid</text>
        </g>
        <g data-part="cox1">
          <path d="M120 112 V 164" class="il-line2 il-none" fill="none"/><path d="M114 158 L120 168 L126 158" class="il-line2 il-none" fill="none"/>
          <ellipse cx="120" cy="206" rx="72" ry="36" class="il-2"/>
          <text x="120" y="212" text-anchor="middle" class="il-white">COX-1</text>
          <text x="120" y="262" text-anchor="middle" class="il-small">always on</text>
        </g>
        <g data-part="cox2">
          <path d="M40 104 C 20 150 20 300 44 330" class="il-line2 il-none" fill="none"/><path d="M36 322 L46 332 L50 318" class="il-line2 il-none" fill="none"/>
          <ellipse cx="120" cy="340" rx="72" ry="36" class="il-7"/>
          <text x="120" y="346" text-anchor="middle" class="il-white">COX-2</text>
          <text x="120" y="396" text-anchor="middle" class="il-small">switched on by injury</text>
        </g>
        <g data-part="a1s"><path d="M192 196 L 294 172" class="il-line2 flow" fill="none"/></g>
        <g data-part="a1t"><path d="M192 216 L 294 246" class="il-line2 flow" fill="none"/></g>
        <g data-part="a2p"><path d="M192 330 L 294 324" class="il-line2 flow" fill="none"/></g>
        <g data-part="a2v"><path d="M192 350 L 294 398" class="il-line2 flow" fill="none"/></g>
        <g data-part="stomach"><rect x="296" y="146" width="214" height="52" rx="12" class="il-3s il-line"/><text x="308" y="168" class="il-text">Stomach lining</text><text x="308" y="188" class="il-small">protective prostaglandins</text></g>
        <g data-part="tx"><rect x="296" y="220" width="214" height="52" rx="12" class="il-4s il-line"/><text x="308" y="242" class="il-text">Thromboxane</text><text x="308" y="262" class="il-small">platelets clump (pro-clot)</text></g>
        <g data-part="pain"><rect x="296" y="298" width="214" height="52" rx="12" class="il-7s il-line"/><text x="308" y="320" class="il-text">Pain and swelling</text><text x="308" y="340" class="il-small">inflammatory prostaglandins</text></g>
        <g data-part="pgi"><rect x="296" y="372" width="214" height="52" rx="12" class="il-3s il-line"/><text x="308" y="394" class="il-text">Prostacyclin</text><text x="308" y="414" class="il-small">vessel wall (anti-clot)</text></g>
        <g data-part="nsaid"><rect x="230" y="176" width="26" height="206" rx="13" class="il-1"/><text x="243" y="440" text-anchor="middle" class="il-text">ibuprofen, naproxen</text></g>
        <g data-part="vioxx"><rect x="230" y="304" width="26" height="100" rx="13" class="il-1"/><text x="243" y="440" text-anchor="middle" class="il-text">Vioxx</text></g>
        <g data-part="ulcer"><rect x="526" y="146" width="226" height="52" rx="12" class="il-7s il-line"/><circle cx="546" cy="172" r="9" class="il-7"/><text x="564" y="168" class="il-text">Ulcers, bleeding</text><text x="564" y="188" class="il-small">stomach loses protection</text></g>
        <g data-part="relief"><rect x="526" y="298" width="226" height="52" rx="12" class="il-1s il-line"/><text x="540" y="320" class="il-text">Pain relieved</text><text x="540" y="340" class="il-small">what the patient wanted</text></g>
        <g data-part="clot">
          <text x="526" y="236" class="il-text">Inside a diseased artery</text>
          <path d="M526 252 H 752 M526 292 H 752" class="il-line2" fill="none"/>
          <path d="M606 292 C 618 272 654 272 666 292 Z" class="il-4s il-line"/>
          <path d="M614 286 C 620 264 654 260 662 284 C 654 274 626 272 614 286 Z" class="il-7"/>
          <circle cx="621" cy="270" r="5" class="il-8"/><circle cx="638" cy="264" r="5" class="il-8"/><circle cx="654" cy="270" r="5" class="il-8"/>
          <text x="560" y="312" class="il-small">plaque</text>
          <text x="672" y="278" class="il-small">clot</text>
        </g>
      </svg>`,
      steps: [
        {title: 'The raw material', text: 'Every cell stores a fat called [[arachidonic acid]] in its membrane. When the cell needs to send a prostanoid signal, it releases some and hands it to a COX enzyme. Nothing is stockpiled: prostanoids are made on demand and last seconds to minutes.', show: ['membrane', 'aa'], dim: ['cox1', 'cox2', 'stomach', 'tx', 'pain', 'pgi'], focus: ['aa']},
        {title: 'COX-1: the housekeeper', text: '[[COX-1]] is on most of the time. In the stomach it makes prostaglandins that keep the lining protected. In [[platelet|platelets]] it makes [[thromboxane]], the signal that makes platelets clump to seal a wound.', show: ['membrane', 'aa', 'cox1', 'a1s', 'a1t', 'stomach', 'tx'], focus: ['cox1']},
        {title: 'COX-2: the emergency crew', text: 'Injury and inflammation switch on [[COX-2]], which makes the prostaglandins behind pain and swelling. It also runs in the lining of blood vessels, where it makes [[prostacyclin]]. That second job was less appreciated in the early 1990s.', show: ['membrane', 'aa', 'cox1', 'cox2', 'a1s', 'a1t', 'a2p', 'a2v', 'stomach', 'tx', 'pain', 'pgi'], focus: ['cox2', 'pain']},
        {title: 'Old NSAIDs block both', text: 'Ibuprofen and naproxen block both enzymes. Pain eases, but the stomach loses its protection, and thromboxane falls too. Over months of daily use that means [[ulcer|ulcers]] and bleeding for a minority of patients. This was the problem to solve.', show: ['membrane', 'aa', 'cox1', 'cox2', 'nsaid', 'relief', 'ulcer'], dim: ['a1s', 'a1t', 'a2p', 'a2v', 'stomach', 'tx', 'pain', 'pgi'], focus: ['nsaid', 'ulcer']},
        {title: 'Vioxx blocks only COX-2', text: 'Vioxx fits a side pocket that exists only in COX-2. Pain relief comes through, while COX-1 keeps the stomach protected. In VIGOR this worked: serious stomach complications were roughly halved compared with naproxen.', show: ['membrane', 'aa', 'cox1', 'cox2', 'vioxx', 'a1s', 'a1t', 'stomach', 'tx', 'relief'], dim: ['a2p', 'a2v', 'pain', 'pgi'], focus: ['vioxx', 'stomach']},
        {title: 'The hidden cost', text: 'Because COX-1 keeps working in platelets, thromboxane stays at full strength. But prostacyclin, its natural counterweight, falls, because much of it comes from COX-2 in the vessel wall. Merck-sponsored research in the late 1990s found rofecoxib cut prostacyclin by about half. The pro-clot side of the balance is now unopposed.', show: ['membrane', 'aa', 'cox1', 'cox2', 'vioxx', 'a1t', 'tx', 'pgi'], dim: ['a2v', 'a1s', 'stomach'], focus: ['tx'], pulse: ['tx']},
        {title: 'Where it matters: a diseased artery', text: 'In a healthy young person the shift may do little. In an older person with fatty [[plaque|plaques]] in the heart arteries, which describes many arthritis patients, it makes a clot a little more likely to form on a plaque and block the artery. That is a [[heart attack]]. The effect is modest per person, but it applies to every patient taking the drug.', show: ['vioxx', 'cox2', 'tx', 'pgi', 'clot'], dim: ['cox1', 'a1t'], focus: ['clot'], pulse: ['clot']},
      ]},

    {type: 'callout', variant: 'misconception', heading: '"Vioxx was uniquely poisonous, and other painkillers are safe"', html: `<p>Vioxx did what it was designed to do; the harm followed from the biology of COX-2, so it did not stay confined to one molecule. A 2005 placebo-controlled trial of Celebrex found a dose-related rise in cardiovascular events, and an FDA panel agreed 32–0 that all three US coxibs raised cardiovascular risk. A 2013 analysis of hundreds of trials found high-dose diclofenac and ibuprofen, both older non-selective NSAIDs, raised major vascular events about as much as coxibs. What made Vioxx the scandal was timing: how early the signal appeared, how it was interpreted, and how widely the drug was pushed meanwhile.</p>`},

    // ---------------- 5. THE BALANCE ----------------
    {type: 'story', kicker: 'The part nobody had mapped', title: 'A seesaw in the blood', html: `
<p>Blood must flow freely through miles of vessels and clot instantly where one is cut. [[thromboxane|Thromboxane]] from platelets pushes toward clotting; [[prostacyclin]] from the vessel wall ([[endothelium]]) pushes against it.</p>
<p>Low-dose aspirin tips this deliberately. It blocks platelet COX-1 permanently, and platelets have no nucleus to make new enzyme, while vessel walls recover. The tilt away from clotting is why people with heart disease take a baby aspirin. A COX-2-selective drug does the reverse: platelet thromboxane is untouched, and if COX-2 makes much of the body's prostacyclin, the counterweight falls.</p>
<p>In January 1999, months before Vioxx launched, Garret FitzGerald's group at the University of Pennsylvania reported that celecoxib suppressed the body's prostacyclin output in healthy volunteers without touching platelet thromboxane. A study that year of Merck's compound, with Merck scientists among the authors, found the same pattern. It was a biochemical finding, not proof of heart attacks, but it gave a clear mechanism. The possible harm was published before launch. What nobody knew was its size in real patients, and only a large trial could count enough heart attacks to find out.</p>`},

    {type: 'custom', title: 'Tip the balance', intro: 'Pick a drug to see how it shifts the balance. Weights are schematic, following the direction of published effects, not measured values.',
      html: `<div class="card"><div class="vx-bal-btns" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px"></div><div class="vx-bal-svg"></div><div class="vx-bal-txt" style="font:400 16.5px/1.6 var(--serif);margin-top:10px;min-height:96px"></div></div>`,
      init(root, api) {
        const S = [
          {k: 'none', label: 'No drug', tx: 100, pg: 100, t: 'Thromboxane from platelets and prostacyclin from the vessel wall roughly cancel out. Blood flows, but clots quickly where a vessel is cut.'},
          {k: 'asp', label: 'Low-dose aspirin', tx: 8, pg: 85, t: 'Aspirin permanently switches off COX-1 in platelets, which cannot make new enzyme. Vessel walls recover. The balance tilts away from clotting: fewer heart attacks, more bleeding. This is aspirin\'s job in heart disease.'},
          {k: 'nap', label: 'Naproxen', tx: 20, pg: 40, t: 'Naproxen blocks both enzymes and, because it lasts a long time, keeps platelet thromboxane low for much of the day. Both sides fall; the tilt is small. This is why some believed naproxen might protect the heart, and why that protection, if real, turned out to be modest.'},
          {k: 'ibu', label: 'High-dose ibuprofen', tx: 55, pg: 40, t: 'Ibuprofen blocks both enzymes but wears off within hours, so platelet thromboxane bounces back between doses. At high daily doses, later large analyses found a rise in heart risk broadly similar to coxibs.'},
          {k: 'vio', label: 'Vioxx', tx: 100, pg: 50, t: 'Vioxx leaves platelet COX-1 alone, so thromboxane stays at full strength, while prostacyclin falls (a Merck-sponsored study found roughly by half). The balance tips toward clotting. In an artery with plaque, that means a somewhat higher chance of a clot, and a heart attack.'},
        ];
        const btns = api.$('.vx-bal-btns', root), box = api.$('.vx-bal-svg', root), txt = api.$('.vx-bal-txt', root);
        const draw = s => {
          const px = 380, py = 110, L = 230, diff = s.tx - s.pg, ang = Math.max(-16, Math.min(16, diff * 0.28)), a = ang * Math.PI / 180;
          const lx = px - L * Math.cos(a), ly = py + L * Math.sin(a), rx = px + L * Math.cos(a), ry = py - L * Math.sin(a);
          const rT = 12 + 26 * Math.sqrt(s.tx / 100), rP = 12 + 26 * Math.sqrt(s.pg / 100);
          const verdict = Math.abs(diff) < 12 ? 'Roughly balanced' : diff > 0 ? 'Tilted toward clotting' : 'Tilted away from clotting (more bleeding)';
          const pan = (x, y, r, cls, name, sub) => `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + 50}" class="il-line"/><path d="M${x - 62} ${y + 50} Q ${x} ${y + 84} ${x + 62} ${y + 50} Z" class="il-8s il-line"/><circle cx="${x}" cy="${y + 50 - r}" r="${r}" class="${cls}"/><text x="${x}" y="${y + 108}" text-anchor="middle" class="il-text">${name}</text><text x="${x}" y="${y + 126}" text-anchor="middle" class="il-small">${sub}</text>`;
          box.innerHTML = `<svg viewBox="0 0 760 330" role="img" aria-label="Balance of thromboxane and prostacyclin">
            <rect x="0" y="0" width="760" height="330" rx="12" class="il-bg"/>
            <text x="380" y="30" text-anchor="middle" class="il-title">${verdict}</text>
            <path d="M380 ${py} L 340 300 H 420 Z" class="il-8s il-line"/>
            <line x1="${lx}" y1="${ly}" x2="${rx}" y2="${ry}" class="st-ink" stroke-width="6" stroke-linecap="round"/>
            <circle cx="${px}" cy="${py}" r="8" class="il-8"/>
            ${pan(lx, ly, rT, 'il-4', 'Thromboxane ' + s.tx + '%', 'platelets, COX-1: pro-clot')}
            ${pan(rx, ry, rP, 'il-3', 'Prostacyclin ' + s.pg + '%', 'vessel wall, mostly COX-2: anti-clot')}
          </svg>`;
          txt.innerHTML = api.terms(s.t);
          api.$$('button', btns).forEach(b => b.setAttribute('aria-pressed', b.dataset.k === s.k));
        };
        S.forEach(s => { const b = api.el('button', 'btn', api.esc(s.label)); b.dataset.k = s.k; b.onclick = () => draw(s); btns.appendChild(b); });
        const st = document.createElement('style'); st.textContent = '.vx-bal-btns .btn[aria-pressed="true"]{background:var(--ink);color:var(--paper);border-color:var(--ink)}'; root.appendChild(st);
        draw(S[4]);
      }},

    {type: 'callout', variant: 'product', heading: 'Optimizing the metric you chose', html: `<p>Anyone who has run A/B tests knows the pattern: pick one primary metric, ship the variant that wins, and hope the guardrail metrics hold. The coxib program was built around stomach safety, and it won. The guardrail, heart events, was in the data from the start, but the trial had not been powered to measure it, and when it moved it was explained away.</p><p><b>Where the analogy breaks:</b> a bad guardrail in software costs revenue and you can roll back. Here the guardrail was heart attacks in 70-year-olds, and the side effect came from the same mechanism as the benefit, so no amount of tuning could remove it.</p>`},

    // ---------------- 6. TIMELINE ----------------
    {type: 'timeline', title: 'Timeline: from two enzymes to a withdrawal', intro: 'Filter by kind of event. Notice the gap between the first warning signs (1999–2000) and the decisive trial (2004).', events: [
      {year: 1971, title: 'Vane shows how aspirin works', kind: 'science', text: 'Aspirin-like drugs block prostaglandin production.'},
      {year: 1991, title: 'A second COX enzyme is found', kind: 'science', text: 'Simmons (BYU) and Herschman (UCLA) independently find COX-2.'},
      {year: 1999, date: 'Jan 1999', title: 'Coxibs shown to suppress prostacyclin', kind: 'science', text: 'FitzGerald\'s group, in healthy volunteers.'},
      {year: 1999, date: 'Jan 1999', title: 'VIGOR begins', kind: 'clinical', text: 'About 8,000 patients, Vioxx 50 mg vs naproxen.'},
      {year: 1999, date: 'May 20, 1999', title: 'FDA approves Vioxx', kind: 'regulatory'},
      {year: 1999, date: 'Nov 1999', title: 'VIGOR safety board sees a heart imbalance', kind: 'setback', text: '79 serious heart events or deaths on Vioxx vs 41 on naproxen. The trial continues.'},
      {year: 2000, date: 'Mar 2000', title: 'VIGOR results: fewer ulcers, more heart attacks', kind: 'clinical', text: 'Merck attributes the heart gap to naproxen protecting the heart.'},
      {year: 2000, title: 'Most-advertised drug in America', kind: 'business', text: '$160.8 million on consumer ads.'},
      {year: 2000, date: 'Nov 23, 2000', title: 'VIGOR published in NEJM', kind: 'clinical', text: 'Counts 17 heart attacks on Vioxx; three more are omitted.'},
      {year: 2001, date: 'Aug 22, 2001', title: 'JAMA raises "a cautionary flag"', kind: 'science', text: 'Mukherjee, Nissen and Topol.'},
      {year: 2001, date: 'Sep 2001', title: 'FDA warning letter to Merck', kind: 'regulatory', text: 'Over promotion that minimized heart findings and promoted an unapproved use.'},
      {year: 2002, date: 'Apr 11, 2002', title: 'Label change: a precaution, not a warning', kind: 'regulatory'},
      {year: 2002, date: 'Oct 2002', title: 'Tennessee Medicaid study', kind: 'science', text: 'High-dose new users: about double the heart risk.'},
      {year: 2004, date: 'Aug 2004', title: 'FDA\'s David Graham presents Kaiser study', kind: 'people', text: 'Higher heart risk on Vioxx than on Celebrex.'},
      {year: 2004, date: 'Sep 30, 2004', title: 'Merck withdraws Vioxx worldwide', kind: 'setback', text: 'After the APPROVe trial.'},
      {year: 2004, date: 'Nov 18, 2004', title: 'Graham testifies to the Senate', kind: 'people', text: 'Estimates 88,000–139,000 excess US cases.'},
      {year: 2005, date: 'Feb 2005', title: 'FDA panel: Vioxx could return, 17–15', kind: 'regulatory', text: 'Merck never relaunches it.'},
      {year: 2005, date: 'Apr 2005', title: 'Bextra withdrawn; boxed warnings on all NSAIDs', kind: 'regulatory'},
      {year: 2005, date: 'Dec 8, 2005', title: 'NEJM "expression of concern" about VIGOR', kind: 'setback'},
      {year: 2007, date: 'Sep 27, 2007', title: 'FDA Amendments Act signed', kind: 'regulatory'},
      {year: 2007, date: 'Nov 9, 2007', title: '$4.85 billion liability settlement', kind: 'business'},
      {year: 2011, date: 'Nov 22, 2011', title: '$950 million criminal and civil resolution', kind: 'regulatory'},
      {year: 2016, date: 'Nov 2016', title: 'PRECISION: Celebrex no worse than naproxen or ibuprofen', kind: 'clinical'},
    ]},

    // ---------------- 7. LAUNCH & MARKETING ----------------
    {type: 'story', kicker: 'The promise', title: 'A launch built for the television era', html: `
<p>Vioxx arrived as drug marketing changed. After FDA guidance in 1997 on broadcast ads, [[direct-to-consumer advertising]] boomed, roughly tripling between 1996 and 2000 to nearly $2.5 billion a year. Vioxx was the most heavily advertised prescription drug in 2000: Merck spent $160.8 million promoting it to the public, more than PepsiCo spent on Pepsi. US retail sales went from about $330 million in 1999 to $1.5 billion in 2000. After VIGOR, Merck also bought nearly a million reprints of the paper to hand to health professionals.</p>
<p>This matters for safety because of who ended up taking the drug. The patients who most needed a stomach-sparing painkiller were a minority: people with past ulcers or bleeding, the very old, people on steroids or blood thinners. Mass promotion reached far more people than that, including many with little stomach risk, who gained little, and many with heart disease, who carried the extra risk. A broad launch multiplied a small per-patient risk across the largest possible population.</p>`},

    {type: 'chart', title: 'Vioxx outspent Pepsi', intro: 'US mass-media advertising in 2000 for some of the most advertised products.',
      chart: {kind: 'bar', title: 'Advertising spend, 2000 (US$ millions)', unit: '$M', horizontal: true, labelWidth: 200,
        categories: ['GM Saturn (cars)', 'Vioxx (Merck)', 'Dell (computers)', 'Budweiser (beer)', 'Pepsi (soft drink)', 'Celebrex (Pfizer)'],
        series: [{name: 'Ad spend', values: [169, 160.8, 160, 146, 125, 78.3]}]},
      takeaway: 'Source: National Institute for Health Care Management (2001). Consumer ads were still only about 16% of drug promotion; most targeted doctors.'},

    {type: 'callout', variant: 'product', heading: 'Paid acquisition for a product with a hidden defect', html: `<p>A drug launch looks like a growth campaign: paid acquisition (consumer ads), a direct sales force (reps), free trials (samples). Growth teams know the fastest way to expand is to reach beyond the core users who have the problem you solve best.</p><p><b>Where the analogy breaks:</b> in software, marginal users dilute your metrics. In medicine, every marginal patient who doesn't need the benefit still carries the full risk, and neither the ad's audience nor the insurer that pays bears the cost of a heart attack.</p>`},

    // ---------------- 8. VIGOR TRIAL ----------------
    {type: 'trial', kicker: 'The trial that should have settled it', title: 'VIGOR: the stomach trial that found a heart signal', intro: 'Merck designed VIGOR to prove Vioxx caused fewer serious stomach complications than a standard NSAID. Read the design, then predict.',
      design: {name: 'VIGOR (Vioxx Gastrointestinal Outcomes Research)', phase: 'Outcomes trial (post-approval)', blinding: 'Double-blind', years: '1999–2000', n: 8076,
        population: 'Rheumatoid arthritis, age 50+ (40+ on steroids); no aspirin users',
        randomization: '1:1',
        arms: [{name: 'Vioxx 50 mg once daily', n: 4047, desc: '2× the top chronic dose'}, {name: 'Naproxen 500 mg twice daily', n: 4029, desc: 'Standard full dose', control: true}],
        endpoint: 'Confirmed serious upper GI events',
        details: {
          'Primary endpoint': 'Confirmed upper GI events: perforation, obstruction, bleeding or symptomatic ulcers.',
          'Heart events': 'Collected as [[adverse event|adverse events]], not a primary endpoint.',
          'Why 50 mg?': 'A stress test: if the stomach is spared at 50 mg, it will be at 25 mg.',
          'Why no aspirin?': 'Aspirin damages the stomach and would blur the comparison, so high-risk patients had no aspirin protection.',
          'Median follow-up': '9 months',
        }},
      predict: {q: 'VIGOR followed about 8,000 patients for a median of nine months. Along with the stomach result, what do you think happened to heart attacks?', options: [
        'No meaningful difference: both drugs are NSAIDs and the numbers are too small to tell',
        'Fewer heart attacks on Vioxx, because it reduces inflammation in the arteries',
        'Several times more heart attacks on Vioxx: roughly 20 versus 4',
        'Slightly more on Vioxx, about 10% higher, not statistically significant'],
        answer: 2, explain: 'Vioxx halved serious stomach events, as hoped. But heart attacks were about four to five times more common in the Vioxx arm: 0.4% versus 0.1% of patients in the published paper, 20 versus 4 in the full data. The absolute numbers were small, since heart attacks are rare over nine months in this population, and the question became which drug was responsible for the gap.'},
      results: [
        {kind: 'bar', title: 'Stomach: confirmed upper GI events per 100 patient-years', unit: '', categories: ['Vioxx 50 mg', 'Naproxen'], series: [{name: 'All confirmed events', values: [2.1, 4.5]}, {name: 'Complicated (perforation, obstruction, severe bleeding)', values: [0.6, 1.4]}], note: 'Relative risk 0.5 (95% CI 0.3–0.6); complicated events 0.4 (0.2–0.8). Bombardier et al., NEJM 2000.'},
        {kind: 'bar', title: 'Heart: myocardial infarctions (heart attacks), number of patients', unit: '', categories: ['Vioxx 50 mg (n=4,047)', 'Naproxen (n=4,029)'], series: [{name: 'Heart attacks', values: [20, 4], notes: ['17 in the published paper; 3 more reported after the cardiovascular data cutoff', 'Unchanged']}], colorByCategory: true, note: 'Published: 0.4% vs 0.1%. With all 20 events, relative risk about 5.0 (95% CI 1.7–20). Cardiovascular deaths were similar.'},
      ],
      takeaway: 'VIGOR proved the stomach benefit and produced the strongest early heart signal of any coxib study. Everything after turned on one question: was Vioxx raising the risk, or naproxen lowering it?'},

    // ---------------- 9. READING VIGOR ----------------
    {type: 'story', kicker: 'What everyone believed, and why it was reasonable', title: 'Is Vioxx harmful, or is naproxen protective?', html: `
<p>Put yourself in a Merck scientist's place in March 2000. The trial you designed has just halved serious stomach complications. And heart attacks are four to five times more common on your drug than on naproxen.</p>
<p>A ratio compares two groups, so the gap has two explanations: Vioxx raised heart attacks, or naproxen lowered them. With no placebo arm, VIGOR could not tell.</p>
<p>The naproxen explanation was not absurd. Naproxen blocks platelet COX-1 and, being long-acting, keeps thromboxane down much of the day, a bit like aspirin. VIGOR excluded aspirin users, so high-risk patients had no protection unless the comparator provided it. When Merck pooled its other trials in 2001, comparing Vioxx with placebo and with other NSAIDs, it found no excess of cardiovascular events. The safety board's own minutes in November 1999 called the trends "disconcerting" but noted "the numbers of events are small."</p>
<p>The case against was also strong. To explain the whole gap, naproxen would need to cut heart attacks by around 80%, far more than aspirin does, and no trial had shown it prevented any. The reassuring pooled trials were short, low-dose and low-risk, too small to see a doubling of a rare event: absence of evidence read as evidence of absence. And FitzGerald's findings gave a specific reason to expect harm.</p>
<p>At the top of Merck's research, the worry was explicit. On March 9, 2000, Edward Scolnick, president of Merck Research Laboratories, wrote about the VIGOR heart results: "It is a shame but it is a low incidence and it is mechanism based as we worried it was." (The email surfaced in litigation.) Publicly, Merck kept the naproxen explanation for years. The fair summary: in 2000 both explanations were possible, and the obvious response was a trial that could separate them. It would be expensive, slow, and might show the drug was harmful.</p>`},

    {type: 'decision', title: 'You are the Merck scientist', role: 'Merck Research Laboratories, spring 2000', scenario: 'VIGOR is in: a clear stomach win, and heart attacks about 4–5× higher than on naproxen, from small numbers. Vioxx has been on the market a year and is growing fast against Celebrex. What do you recommend?', options: [
      {label: 'Accept the naproxen explanation and publish. The biology supports it.', outcome: 'Close to what happened. The hypothesis needed naproxen to be far more protective than aspirin, and was never tested directly. When observational studies measured naproxen\'s effect, they found it small (about 14% lower risk in a 2004 pooled estimate) or absent, far too little to explain VIGOR. The comforting explanation cost four years.'},
      {label: 'Pool all existing Vioxx trials against placebo and other NSAIDs to see if the signal holds.', outcome: 'Merck did this (Konstam et al., <i>Circulation</i>, 2001) and found no excess. But the trials were short, low-dose and low-risk, with few heart attacks. A cumulative meta-analysis done in 2004 found that all trials available by the end of 2000, VIGOR included, already gave a heart attack relative risk of 2.3 (95% CI 1.2–4.3).'},
      {label: 'Launch a dedicated placebo-controlled heart-safety trial in at-risk patients, and warn doctors meanwhile.', outcome: 'The scientifically clean answer: hundreds of millions of dollars, several years, and a real chance of proving the drug harmful mid-launch. Pfizer later ran this kind of trial for Celebrex (PRECISION, registered 2006). No such trial of Vioxx was run; the answer came by accident, from cancer-prevention trials.'},
      {label: 'Drop the 50 mg dose and add a heart warning now, while you study it.', outcome: 'A reasonable middle path. The FDA said in 2002 that 50 mg was not for chronic use, but only as a precaution, and FDA epidemiologist David Graham later testified the change had no effect on high-dose prescribing.'},
    ], reality: 'Merck publicly explained the heart finding as naproxen protection, published a pooled analysis showing no excess against placebo, and kept promoting Vioxx hard. In September 2001 the FDA sent a warning letter over promotion that minimized VIGOR\'s heart findings. The placebo-controlled answer came in 2004, from a colon-polyp trial.'},

    // ---------------- 10. THE PAPER ----------------
    {type: 'story', kicker: 'The publication', title: 'Seventeen heart attacks, or twenty?', html: `
<p>VIGOR appeared in the <i>New England Journal of Medicine</i> on November 23, 2000, led by Claire Bombardier of the University of Toronto, with Merck scientists among the authors. It reported heart attacks in 0.4% of Vioxx patients and 0.1% on naproxen and suggested naproxen's antiplatelet effect as the explanation.</p>
<p>Five years later, through the litigation, the editors learned that VIGOR had used an earlier [[data cutoff]] for heart events (February 10, 2000) than for stomach events (about a month later). Three more heart attacks on Vioxx, reported after the heart cutoff, were not in the paper, and a July 5, 2000 memo between two Merck authors referred to them. Merck gave the FDA the extra events in October 2000 and the FDA posted them in February 2001, but the journal was not told before publication.</p>
<p>In December 2005 <i>NEJM</i> published an [[expression of concern]], saying that "inaccuracies and deletions" in the manuscript "call into question the integrity of the data." The authors, academic ones included, replied that the cutoff was prespecified and the late events properly excluded (as was one late stroke on naproxen), and that the paper "does not require a correction." The editors reaffirmed their concern: the cutoff was not disclosed, and it was set near the trial's end.</p>
<p>Both sides have a point, and that is the lesson. Cutoffs are necessary. But a harm cutoff earlier than the benefit cutoff, chosen late and not stated, tilts the result one way. Doctors reading the journal saw a smaller signal than Merck and the FDA had.</p>`},

    {type: 'figure', title: 'The VIGOR paper, month by month in 2000', intro: 'Hover or tap each point to see who knew what, and when.',
      svg: `<svg viewBox="0 0 900 300" role="img" aria-label="Timeline of the VIGOR publication in 2000">
        <line x1="60" y1="160" x2="860" y2="160" class="il-line2"/>
        <g class="il-small">
          <text x="60" y="194" text-anchor="middle" class="il-small">Jan</text><text x="128" y="194" text-anchor="middle" class="il-small">Feb</text><text x="191" y="194" text-anchor="middle" class="il-small">Mar</text><text x="259" y="194" text-anchor="middle" class="il-small">Apr</text><text x="325" y="194" text-anchor="middle" class="il-small">May</text><text x="392" y="194" text-anchor="middle" class="il-small">Jun</text><text x="458" y="194" text-anchor="middle" class="il-small">Jul</text><text x="526" y="194" text-anchor="middle" class="il-small">Aug</text><text x="594" y="194" text-anchor="middle" class="il-small">Sep</text><text x="660" y="194" text-anchor="middle" class="il-small">Oct</text><text x="728" y="194" text-anchor="middle" class="il-small">Nov</text><text x="794" y="194" text-anchor="middle" class="il-small">Dec</text>
        </g>
        <g data-part="gap"><rect x="150" y="147" width="64" height="26" rx="6" class="il-7s"/><circle cx="168" cy="160" r="6" class="il-7"/><circle cx="182" cy="160" r="6" class="il-7"/><circle cx="196" cy="160" r="6" class="il-7"/><text x="182" y="230" text-anchor="middle" class="il-text">3 more heart attacks</text><text x="182" y="248" text-anchor="middle" class="il-small">on Vioxx, after the CV cutoff</text></g>
        <g data-part="cv"><line x1="150" y1="160" x2="150" y2="90" class="st-7" stroke-width="2.5"/><circle cx="150" cy="160" r="7" class="il-7"/><text x="140" y="70" text-anchor="end" class="il-text">Feb 10: heart-event</text><text x="140" y="87" text-anchor="end" class="il-text">cutoff</text></g>
        <g data-part="gi"><line x1="214" y1="160" x2="214" y2="110" class="st-3" stroke-width="2.5"/><circle cx="214" cy="160" r="7" class="il-3"/><text x="222" y="104" class="il-text">Stomach cutoff</text><text x="222" y="121" class="il-small">(~1 month later)</text></g>
        <g data-part="sub"><line x1="364" y1="160" x2="364" y2="60" class="il-line2"/><circle cx="364" cy="160" r="7" class="il-8"/><text x="372" y="50" class="il-text">May 18: submitted to NEJM</text></g>
        <g data-part="memo"><line x1="469" y1="160" x2="469" y2="226" class="il-line2"/><circle cx="469" cy="160" r="7" class="il-4"/><text x="469" y="240" text-anchor="middle" class="il-text">Jul 5: internal memo</text><text x="469" y="258" text-anchor="middle" class="il-small">mentions heart attacks 18–20</text></g>
        <g data-part="fda"><line x1="687" y1="160" x2="687" y2="100" class="il-line2"/><circle cx="687" cy="160" r="7" class="il-6"/><text x="679" y="84" text-anchor="end" class="il-text">Oct 13: FDA told</text><text x="679" y="101" text-anchor="end" class="il-small">of the extra events</text></g>
        <g data-part="pub"><line x1="777" y1="160" x2="777" y2="226" class="il-line2"/><circle cx="777" cy="160" r="7" class="il-1"/><text x="777" y="240" text-anchor="middle" class="il-text">Nov 23: published</text><text x="777" y="258" text-anchor="middle" class="il-small">17 vs 4 heart attacks</text></g>
      </svg>`,
      hotspots: {
        cv: {title: 'February 10, 2000: cardiovascular cutoff', text: 'Merck and the safety board chair agreed to count heart events reported by this date in the initial analysis. According to NPR\'s reconstruction from court documents, the date was set in February 2000, at least a month before the last patient left the study.'},
        gi: {title: 'About a month later: stomach-event cutoff', text: 'Stomach events, the benefit, were counted for longer. NEJM\'s editors later argued that different cutoffs for benefit and harm skewed the paper in the drug\'s favor. The authors said both were prespecified.'},
        gap: {title: 'Three late heart attacks', text: 'Three more heart attacks happened in the Vioxx group before the trial ended but were reported after the cardiovascular cutoff. Including them raises the count from 17 to 20 (versus 4 on naproxen). An extra stroke in the naproxen group was also left out by the same rule.'},
        sub: {title: 'May 18, 2000: manuscript submitted', text: 'NEJM later said data had been deleted from the manuscript shortly before submission, based on the electronic file it examined. The authors disputed the implication that anything relevant had been hidden.'},
        memo: {title: 'July 5, 2000: the Shapiro memo', text: 'A memo from Merck statistician Deborah Shapiro to Alise Reicin (both VIGOR authors) referred to heart attacks 18, 19 and 20. Obtained by subpoena in the litigation, it showed at least two authors knew of the extra events months before publication. Revisions sent to the journal in July and November did not add them.'},
        fda: {title: 'October 13, 2000: FDA informed', text: 'Merck reported the additional events to the FDA. The FDA posted the full VIGOR cardiovascular data on its website for the February 2001 advisory committee, three months after the paper appeared.'},
        pub: {title: 'November 23, 2000: publication', text: 'The paper reports 0.4% vs 0.1% heart attacks and suggests naproxen\'s antiplatelet effect as the explanation. Merck bought nearly a million reprints. In 2005 the journal issued its expression of concern; the authors stood by the paper.'},
      },
      caption: 'Dates from NEJM\'s 2005 expression of concern and NPR\'s 2007 timeline. The stomach cutoff is approximate.'},

    {type: 'story', kicker: 'The warning signs', title: 'Four years of signals', html: `
<p>After VIGOR the evidence arrived in pieces, each from a different kind of study with its own weakness.</p>
<p><b>August 2001.</b> Using the full VIGOR data the FDA had posted, Cleveland Clinic cardiologists Debabrata Mukherjee, Steven Nissen and Eric Topol found a relative risk of 2.38 (95% [[confidence interval]] 1.39–4.00) for a broad set of clot-related events, and heart attack rates on both coxibs above those in the placebo groups of aspirin trials. It was an indirect comparison, and they called it "a cautionary flag."</p>
<p><b>April 2002.</b> After fourteen months of negotiation, the FDA put VIGOR's heart findings in the Precautions section of the [[label]], not Warnings, and said 50 mg was not recommended for chronic use. No [[black box warning]].</p>
<p><b>October 2002.</b> In Tennessee Medicaid records, Wayne Ray's team at Vanderbilt found new users of high-dose Vioxx had about twice the rate of serious heart disease of non-users (1.93, 95% CI 1.09–3.42). They saw no increase at 25 mg or less.</p>
<p><b>August 2004.</b> FDA epidemiologist David Graham's study with Kaiser Permanente in California, covering 2.3 million patient-years and 8,143 cases of serious heart disease, found Vioxx had 1.59 times the odds of heart attack or sudden cardiac death compared with Celebrex, and 3.58 times above 25 mg. Naproxen showed no protection. Like all [[observational study|observational studies]] these were open to [[confounding]]: doctors may have given Vioxx to patients who differed in ways the data could not capture.</p>
<p>Each study alone could be dismissed. Together they pointed the same way from several independent angles. The question was who was responsible for putting them together.</p>`},

    {type: 'custom', title: 'Watch the signal accumulate', intro: 'Each row estimates how much Vioxx changed the risk of heart attacks or clot events (1 = no change). Drag the date to see what was public by then; hover a row for details.',
      html: `<div class="card"><label style="display:flex;gap:12px;align-items:center;font-size:15px;margin-bottom:6px"><span style="min-width:160px">Evidence public by:</span><input type="range" min="0" max="23" value="23" step="1" class="vx-sig-r" style="flex:1;accent-color:var(--accent)"><b class="vx-sig-d" style="min-width:90px;text-align:right"></b></label><div class="vx-sig-svg"></div><div class="vx-sig-sum" style="font:400 16.5px/1.6 var(--serif);margin-top:8px"></div></div>`,
      init(root, api) {
        const R = [
          {d: 2001.1, when: 'Feb 2001', name: 'VIGOR, full FDA data', cmp: 'heart attacks vs naproxen', rr: 5.00, lo: 1.68, hi: 20.13, k: 'rct', note: 'Randomized trial. All 20 vs 4 heart attacks. Comparator was naproxen, so it cannot separate harm from protection.'},
          {d: 2001.64, when: 'Aug 2001', name: 'Mukherjee, Nissen, Topol (JAMA)', cmp: 'clot events vs naproxen', rr: 2.38, lo: 1.39, hi: 4.00, k: 'rct', note: 'Reanalysis of VIGOR with a broader cardiovascular endpoint.'},
          {d: 2001.87, when: 'Nov 2001', name: 'Merck pooled trials (Circulation)', cmp: 'CV events vs placebo', rr: 0.84, lo: 0.51, hi: 1.38, k: 'pool', note: 'Merck-authored pool of 23 studies, over 28,000 patients. Reassuring, but mostly short, low-dose, low-risk trials: the wide interval could not rule out a large increase.'},
          {d: 2002.8, when: 'Oct 2002', name: 'Tennessee Medicaid (Lancet)', cmp: 'new users, >25 mg vs non-users', rr: 1.93, lo: 1.09, hi: 3.42, k: 'obs', note: 'Observational cohort. No increase seen at 25 mg or less.'},
          {d: 2004.65, when: 'Aug 2004', name: 'Kaiser Permanente (Graham)', cmp: 'all doses vs Celebrex', rr: 1.59, lo: 1.10, hi: 2.32, k: 'obs', note: 'Nested case-control study, 2.3 million patient-years. Presented Aug 2004, published Lancet 2005.'},
          {d: 2004.66, when: 'Aug 2004', name: 'Kaiser Permanente (Graham)', cmp: '>25 mg vs Celebrex', rr: 3.58, lo: 1.27, hi: 10.11, k: 'obs', note: 'High doses showed the largest effect.'},
          {d: 2004.75, when: 'Sep 2004', name: 'APPROVe', cmp: 'clot events vs placebo', rr: 1.92, lo: 1.19, hi: 3.11, k: 'rct', note: 'Randomized, placebo-controlled, 25 mg, 3 years. Triggered the withdrawal. Published NEJM 2005.'},
          {d: 2004.85, when: 'Nov 2004', name: 'Jüni: all trials to end of 2000', cmp: 'heart attacks, pooled', rr: 2.30, lo: 1.22, hi: 4.33, k: 'meta', note: 'Cumulative meta-analysis done in 2004 of trials available by end-2000 (52 heart attacks, 20,742 patients). In hindsight, the pooled evidence was already significant by then.'},
          {d: 2004.86, when: 'Nov 2004', name: 'Jüni: naproxen in observational studies', cmp: 'naproxen vs no naproxen', rr: 0.86, lo: 0.75, hi: 0.99, k: 'nap', note: 'Tests the naproxen hypothesis. A 14% lower risk at most, far too small to explain VIGOR\'s four- to five-fold gap.'},
        ];
        const KC = {rct: ['il-1', 'Randomized trial'], pool: ['il-8', 'Company pooled analysis'], obs: ['il-2', 'Observational study'], meta: ['il-6', 'Meta-analysis (hindsight)'], nap: ['il-3', 'Naproxen check']};
        const months = []; for (let y = 2000.0; y <= 2005.0001; y += 0.25) months.push(+y.toFixed(2));
        const lab = y => { const yr = Math.floor(y), q = Math.round((y - yr) * 4); return ['Jan', 'Apr', 'Jul', 'Oct'][q] + ' ' + yr; };
        const rng = api.$('.vx-sig-r', root); rng.max = months.length - 1; rng.value = months.length - 1;
        const W = 900, L = 330, Rr = 40, T = 40, rowH = 34, H = T + R.length * rowH + 50;
        const lmin = Math.log(0.25), lmax = Math.log(25), X = v => L + (W - L - Rr) * (Math.log(v) - lmin) / (lmax - lmin);
        const draw = () => {
          const now = months[+rng.value];
          api.$('.vx-sig-d', root).textContent = lab(now);
          let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Accumulating estimates of Vioxx risk">`;
          [0.25, 0.5, 1, 2, 5, 10, 25].forEach(v => s += `<line x1="${X(v)}" x2="${X(v)}" y1="${T - 10}" y2="${H - 40}" class="${v === 1 ? 'st-ink' : 'il-line'}" stroke-width="${v === 1 ? 2 : 0.6}" opacity="${v === 1 ? 0.7 : 0.35}"/><text x="${X(v)}" y="${H - 22}" text-anchor="middle" class="il-small">${v}</text>`);
          s += `<text x="${X(1) - 8}" y="${T - 16}" text-anchor="end" class="il-small">lower risk on Vioxx</text><text x="${X(1) + 8}" y="${T - 16}" class="il-small">higher risk on Vioxx</text>`;
          s += `<text x="${(L + W - Rr) / 2}" y="${H - 4}" text-anchor="middle" class="il-small">Relative risk or odds ratio (log scale), with 95% confidence interval</text>`;
          let up = 0, shown = 0;
          R.forEach((r, i) => {
            const y = T + i * rowH + rowH / 2, vis = r.d <= now + 0.001, op = vis ? 1 : 0.13, [cls] = KC[r.k];
            if (vis) { shown++; if (r.k !== 'nap' && r.k !== 'pool' && r.lo > 1) up++; }
            const tip = api.esc(`<b>${api.esc(r.name)}</b> (${r.when})<br>${api.esc(r.cmp)}: <b>${r.rr.toFixed(2)}</b> (${r.lo}–${r.hi})<br><span class=m>${api.esc(r.note)}</span>`);
            s += `<g opacity="${op}" data-tip="${tip}"><rect x="0" y="${y - rowH / 2 + 2}" width="${W}" height="${rowH - 4}" class="il-none" fill="transparent"/>`;
            s += `<text x="8" y="${y - 2}" class="il-text">${api.esc(r.name)}</text><text x="8" y="${y + 13}" class="il-small">${api.esc(r.when + ' · ' + r.cmp)}</text>`;
            s += `<line x1="${X(Math.max(0.25, r.lo))}" x2="${X(Math.min(25, r.hi))}" y1="${y}" y2="${y}" class="st-ink" stroke-width="2"/>`;
            s += `<rect x="${X(r.rr) - 7}" y="${y - 7}" width="14" height="14" rx="3" class="${cls}"/></g>`;
          });
          s += '</svg>';
          const leg = Object.values(KC).map(([c, n]) => `<span style="display:inline-flex;gap:6px;align-items:center;margin-right:14px;font-size:13.5px;color:var(--ink-2)"><svg width="12" height="12"><rect width="12" height="12" rx="3" class="${c}"/></svg>${n}</span>`).join('');
          api.$('.vx-sig-svg', root).innerHTML = `<div style="margin-bottom:6px">${leg}</div>` + s;
          api.$('.vx-sig-sum', root).innerHTML = shown === 0 ? 'In early 2000 only Merck, the VIGOR safety board and, later, the FDA had seen the heart data. Nothing was public yet.'
            : `By <b>${lab(now)}</b>, ${shown} of these estimates were public, and <b>${up}</b> of them had a 95% confidence interval entirely above 1. ` + (now < 2004.7 ? 'The main reassuring estimate came from Merck\'s own pooled short trials, whose interval was wide enough to include a doubling of risk.' : 'The randomized placebo-controlled answer (APPROVe) agreed with the observational studies, and the naproxen explanation had been measured and found far too small.');
        };
        rng.addEventListener('input', draw); draw();
      }},

    {type: 'decision', title: 'You are the FDA reviewer', role: 'FDA Center for Drug Evaluation and Research, 2001', scenario: 'Your advisory committee says VIGOR\'s heart data belong in the label. Merck says naproxen explains the gap. Outside cardiologists are alarmed. Before 2007, you have little legal power to force a new safety trial. What do you push for?', options: [
      {label: 'A boxed warning about heart attacks.', outcome: 'The clearest signal to prescribers, and what the FDA required for all prescription NSAIDs in 2005. In 2001 it meant asserting a causal link the company, and many inside the FDA, considered unproven. Expect a long fight.'},
      {label: 'Describe the heart data under Precautions and say 50 mg is not for chronic use.', outcome: 'What happened, in April 2002. Graham later told the Senate that the change "had absolutely no effect on how often high-dose Vioxx was prescribed."'},
      {label: 'Use the label as leverage to get a dedicated heart-safety trial.', outcome: 'The right question, but a postmarket commitment was then largely voluntary and hard to enforce. The 2007 FDA Amendments Act gave the agency power to require one.'},
      {label: 'Ask Merck to pull the 50 mg tablet.', outcome: 'Targets the dose with the clearest signal, as Graham later argued. But the 25 mg dose most patients took would still carry the risk APPROVe later showed.'},
    ], reality: 'The April 11, 2002 label added VIGOR\'s heart results as a precaution, alongside a new rheumatoid arthritis approval. The FDA said "the relationship of the cardiovascular findings in the VIGOR study to use of Vioxx is not known." Sales held at about $2.5 billion a year.'},

    // ---------------- 12. ABSOLUTE VS RELATIVE ----------------
    {type: 'story', kicker: 'The arithmetic of harm', title: 'Why a small risk becomes a large number', html: `
<p>For one patient the extra risk was small. In APPROVe, placebo patients had about 0.78 clot-related events per 100 [[patient-year|patient-years]] and Vioxx patients about 1.50: a [[relative risk]] of 1.92, "nearly double." But the [[absolute risk]] rose by about 0.7 percentage points a year, so you would treat about 140 people for a year to cause one extra event (the [[number needed to harm]]).</p>
<p>For a country, multiply that 0.7 points by millions of people and the excess reaches tens of thousands. Because heart attacks are common in older people, none of those events looked unusual to the doctor treating it. No one could point at a patient and say "Vioxx did this." That is what makes this kind of harm hard to see and easy to argue about.</p>`},

    {type: 'custom', title: 'Relative risk, absolute risk, and 20 million people', intro: 'Set a baseline rate, a relative risk and an exposure. The grid shows 1,000 people for a year. Defaults are APPROVe\'s rates; this is arithmetic, not an estimate of Vioxx\'s true toll.',
      html: `<div class="card vx-ar"><div class="vx-ar-pre" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px"></div><div class="vx-ar-in"></div><div style="display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:18px;align-items:start;margin-top:10px"><div class="vx-ar-grid"></div><div class="vx-ar-out" style="font:400 16.5px/1.6 var(--serif)"></div></div></div>`,
      init(root, api) {
        const inputs = [
          {id: 'base', label: 'Baseline events per 100 people per year', min: 0.1, max: 3, step: 0.01, value: 0.78, f: v => v.toFixed(2)},
          {id: 'rr', label: 'Relative risk on the drug', min: 1, max: 5, step: 0.01, value: 1.92, f: v => v.toFixed(2) + '×'},
          {id: 'users', label: 'People taking the drug (millions)', min: 1, max: 25, step: 0.5, value: 20, f: v => v + 'M'},
          {id: 'yrs', label: 'Average years on the drug', min: 0.1, max: 3, step: 0.1, value: 0.5, f: v => v.toFixed(1)},
        ];
        const presets = [
          {n: 'APPROVe (25 mg vs placebo)', v: {base: 0.78, rr: 1.92}},
          {n: 'VIGOR heart attacks (50 mg vs naproxen)', v: {base: 0.1, rr: 5}},
          {n: 'Kaiser, all doses vs Celebrex', v: {base: 0.8, rr: 1.59}},
        ];
        const inBox = api.$('.vx-ar-in', root), v = {};
        inBox.innerHTML = inputs.map(x => `<label style="display:grid;grid-template-columns:230px 1fr 70px;gap:12px;align-items:center;font-size:15px;margin:6px 0"><span>${x.label}</span><input type="range" min="${x.min}" max="${x.max}" step="${x.step}" value="${x.value}" data-id="${x.id}" style="accent-color:var(--accent)"><b data-o="${x.id}" style="text-align:right;font-variant-numeric:tabular-nums"></b></label>`).join('');
        const pre = api.$('.vx-ar-pre', root);
        presets.forEach(p => { const b = api.el('button', 'btn', api.esc(p.n)); b.onclick = () => { Object.entries(p.v).forEach(([k, val]) => api.$(`[data-id=${k}]`, inBox).value = val); upd(); }; pre.appendChild(b); });
        const upd = () => {
          inputs.forEach(x => { v[x.id] = +api.$(`[data-id=${x.id}]`, inBox).value; api.$(`[data-o=${x.id}]`, inBox).textContent = x.f(v[x.id]); });
          const p0 = v.base / 100, p1 = Math.min(1, p0 * v.rr), d = p1 - p0, nnh = d > 0 ? Math.round(1 / d) : Infinity;
          const py = v.users * 1e6 * v.yrs, excess = d * py, total = p1 * py;
          const n0 = Math.round(p0 * 1000), n1 = Math.round(p1 * 1000);
          let g = '<svg viewBox="0 0 400 260" role="img" aria-label="1000 people grid">';
          for (let i = 0; i < 1000; i++) { const c = i % 40, r = Math.floor(i / 40), cls = i < n0 ? 'il-8' : i < n1 ? 'il-7' : 'il-8s'; g += `<circle cx="${6 + c * 9.8}" cy="${6 + r * 9.8}" r="3.6" class="${cls}"/>`; }
          g += `<text x="0" y="258" class="il-small">1,000 people, 1 year: gray = would have an event anyway, red = extra</text></svg>`;
          api.$('.vx-ar-grid', root).innerHTML = g;
          const fm = n => n >= 1e6 ? (n / 1e6).toFixed(1) + ' million' : api.fmt(Math.round(n / 10) * 10);
          api.$('.vx-ar-out', root).innerHTML = `<p style="margin:0 0 .6em"><b>For one person:</b> yearly risk goes from ${(p0 * 100).toFixed(2)}% to ${(p1 * 100).toFixed(2)}%, an increase of <b>${(d * 100).toFixed(2)} percentage points</b>. The headline says "${v.rr.toFixed(1)}× the risk"; the patient's chance of escaping an extra event is still about ${(100 - d * 100).toFixed(1)}%.</p>
            <p style="margin:0 0 .6em"><b>Number needed to harm:</b> about <b>${isFinite(nnh) ? api.fmt(nnh) : '∞'}</b> people treated for a year for one extra event.</p>
            <p style="margin:0"><b>For the country:</b> ${v.users}M people × ${v.yrs.toFixed(1)} years = ${fm(py)} patient-years. That is about <b>${fm(excess)} extra events</b>, hidden among roughly ${fm(total - excess)} that would have happened anyway.</p>`;
        };
        api.$$('input', inBox).forEach(i => i.addEventListener('input', upd)); upd();
      }},

    {type: 'callout', variant: 'lesson', heading: 'Report both numbers, always', html: `<p>Relative risk says whether a drug changes risk; absolute risk says whether it matters to a person; exposure says whether it matters to a country. Vioxx's defenders quoted the second, its critics the first and third. All three were true. For any safety headline, ask for the baseline, the absolute difference and how many are exposed.</p>`},

    // ---------------- 13. APPROVe ----------------
    {type: 'story', kicker: 'The moment of failure', title: 'The trial that was not looking for heart attacks', html: `
<p>COX-2 is involved in the growth of colon polyps ([[colorectal adenoma|adenomas]]), which can become cancer. In 2000 Merck began APPROVe: about 2,600 people who had had adenomas removed took Vioxx 25 mg or placebo for three years. It had what VIGOR lacked: a placebo, three years of follow-up, and blinded [[adjudication]] of every possible clot event. Nobody designed it to answer the heart question. It answered it anyway. In September 2004 the three-year data showed about twice the rate of [[thrombotic event|thrombotic events]] on Vioxx, and on September 30 Merck stopped the trial and withdrew the drug.</p>`},

    {type: 'trial', title: 'APPROVe: Vioxx versus placebo for three years', intro: 'A cancer-prevention trial that became the decisive heart-safety trial. Predict before you look.',
      design: {name: 'APPROVe (Adenomatous Polyp Prevention on Vioxx)', phase: 'Phase 3 prevention trial', blinding: 'Double-blind', years: '2000–2004', n: 2586,
        population: 'Adults who had colorectal adenomas removed, at no particular heart risk',
        randomization: '1:1',
        arms: [{name: 'Vioxx 25 mg daily', n: 1287, desc: 'The standard dose, for three years'}, {name: 'Placebo', n: 1299, desc: 'Identical dummy pill', control: true}],
        endpoint: 'Polyp recurrence (efficacy); adjudicated clot events (safety)',
        details: {
          'Primary endpoint': 'Adenoma recurrence over three years.',
          'Heart analysis': 'Possible clot events adjudicated blind by an external committee.',
          'How it ended': 'Stopped in September 2004 when the three-year cardiovascular data showed harm; Vioxx withdrawn worldwide the same month.',
        }},
      predict: {q: 'APPROVe compared the standard 25 mg dose with placebo for up to three years. What did it find for confirmed clot-related heart and stroke events?', options: [
        'No difference: the heart risk was only at 50 mg',
        'About double the rate on Vioxx: 1.50 versus 0.78 events per 100 patient-years',
        'Ten times the rate on Vioxx',
        'Fewer events on Vioxx, because it reduced inflammation'],
        answer: 1, explain: '46 Vioxx patients had a confirmed thrombotic event over 3,059 patient-years (1.50 per 100), against 26 on placebo over 3,327 patient-years (0.78 per 100): a relative risk of 1.92 (95% CI 1.19–3.11). The extra events were mainly heart attacks and ischemic strokes. Overall deaths were similar. At the standard dose, in people with no special heart risk, the drug roughly doubled the rate.'},
      results: [
        {kind: 'bar', title: 'Confirmed thrombotic events per 1,000 patient-years', unit: '', categories: ['Vioxx 25 mg', 'Placebo'], series: [{name: 'Event rate', values: [15.0, 7.8], notes: ['46 patients, 3,059 patient-years', '26 patients, 3,327 patient-years']}], colorByCategory: true, note: '1.50 vs 0.78 per 100 patient-years; relative risk 1.92 (95% CI 1.19–3.11). Bresalier et al., NEJM 2005.'},
        {kind: 'line', title: 'Cumulative share of patients with a thrombotic event', subtitle: 'Schematic: drawn from the reported rates and the paper\'s description (similar for ~18 months), not digitized. Later analyses questioned the 18-month pattern.', unit: '%', xLabel: 'Months on treatment', yMax: 5, xTicks: [0, 6, 12, 18, 24, 30, 36],
          series: [{name: 'Vioxx 25 mg', short: 'Vioxx', points: [[0, 0], [6, 0.4], [12, 0.8], [18, 1.3], [24, 2.3], [30, 3.4], [36, 4.5]]}, {name: 'Placebo', points: [[0, 0], [6, 0.4], [12, 0.8], [18, 1.2], [24, 1.6], [30, 1.95], [36, 2.3]], color: 8}],
          annotations: [{x: 18, label: '18 months'}]},
      ],
      takeaway: 'VIGOR could be explained by the comparator; APPROVe could not. It was the kind of evidence Merck said it trusted most: randomized and placebo-controlled.'},

    {type: 'story', title: 'The argument about eighteen months', html: `
<p>The APPROVe paper said the extra risk "became apparent after 18 months of treatment." That was worth billions: if harm needed 18 months of continuous use, short-term users, including many plaintiffs, were unharmed, and Merck argued exactly that in court. In 2006 <i>NEJM</i> published a correction concerning the statistical test behind the 18-month pattern, with a commentary by Harvard statistician Stephen Lagakos on why the data could not say confidently when risk began. Longer follow-up published in 2008 was "compatible with an early increase in risk," and a separate trial (VICTOR), with a median of 7.4 months on Vioxx, also found more clot events (relative risk 2.66, 95% CI 1.03–6.86). Once a harm is established, the fight moves to its shape (dose, duration, subgroup), where events are fewer and every analytic choice carries money.</p>`},

    {type: 'decision', title: 'You are the CEO', role: 'Merck, late September 2004', scenario: 'APPROVe shows heart and stroke events on Vioxx 25 mg at about double placebo. Vioxx brings in about $2.5 billion a year. Celebrex and older NSAIDs are available, and lawsuits are coming regardless. What do you do?', options: [
      {label: 'Keep selling with a strong new warning, limited to short courses and high stomach-risk patients.', outcome: 'Merck said it believed this "would have been possible." It would keep the drug for patients with most to gain, but create a record of choosing sales after a placebo-controlled trial showed harm.'},
      {label: 'Withdraw Vioxx worldwide, immediately and voluntarily.', outcome: 'What Merck did. It ended the exposure at once, but invited the question of why the same call had not been made on VIGOR in 2000.'},
      {label: 'Pause promotion and ask the FDA to convene an advisory committee first.', outcome: 'Shares the decision with the regulator but leaves millions on the drug for months. A 2005 panel did vote 17–15 that Vioxx could be marketed, so a restricted return was possible.'},
      {label: 'Stop only APPROVe: polyp patients are not arthritis patients.', outcome: 'Narrowly defensible, practically not: it was the fifth line of evidence pointing the same way, and the first placebo-controlled one.'},
    ], reality: 'On September 30, 2004, Merck withdrew Vioxx from all markets. It took a $726 million pre-tax charge in 2004 for returns and withdrawal and reserved $675 million for legal defense. Despite the 2005 panel vote, Merck never brought Vioxx back.'},

    // ---------------- 14. MONEY ----------------
    {type: 'chart', title: 'The money on the line', intro: 'Worldwide Vioxx sales as reported by Merck, in US dollars.',
      chart: {kind: 'line', title: 'Vioxx worldwide sales ($ billions)', unit: '$B', yMax: 3, xTicks: [2000, 2001, 2002, 2003],
        series: [{name: 'Vioxx', points: [[2000, 2.2], [2001, 2.6], [2002, 2.5], [2003, 2.5]]}],
        annotations: [{x: 2002.28, label: 'Label change, Apr 2002'}],
        note: 'Merck earnings releases (Jan 2001, Jan 2002) and annual reports (2002, 2003). 2001 as first reported; Merck later described 2002 as 8% growth, implying a restated 2001 base. The withdrawal cost an estimated $700–750M in Q4 2004 sales.'},
      takeaway: 'Sales barely moved after the April 2002 label change.'},

    // ---------------- 15. GRAHAM ----------------
    {type: 'story', kicker: 'The aftermath', title: '"Two to four jumbo jetliners every week"', html: `
<p>On November 18, 2004, David Graham, associate director for science and medicine in the FDA's [[Office of Drug Safety]], testified to the Senate Finance Committee. His Kaiser study had implied nearly 28,000 excess heart attacks and sudden deaths, which he called "extremely conservative." Then he took Merck's own trials: "If you apply the risk-levels seen in the 2 Merck trials, VIGOR and APPROVe, you obtain a more realistic and likely range of estimates for the number of excess cases in the US. This estimate ranges from 88,000 to 139,000 Americans. Of these, 30-40% probably died."</p>
<p>So the method was the arithmetic in the explorer above: relative risks from randomized trials (VIGOR's for high doses, APPROVe's for standard doses), applied to the background heart attack rate of the people who took Vioxx, multiplied by how much they took. It is an extrapolation, and the exact number cannot be known, since no individual heart attack carried a label. But almost any reasonable inputs give tens of thousands. Graham put it in pictures: the equivalent of "2-4 aircraft every week, week in and week out, for the past 5 years."</p>
<p>The rest of his testimony was about the FDA. He said he was "pressured to change my conclusions." He described a structure in which the [[Office of New Drugs]] approved a drug and also decided what to do about it later, while his office could only recommend: "an inherent conflict of interest." He argued that demanding 95% statistical certainty before accepting a drug is unsafe was like refusing an umbrella until rain is 95% certain. "I would argue that the FDA, as currently configured, is incapable of protecting America against another Vioxx." His testimony set the agenda for three years of reform.</p>`},

    {type: 'figure', title: 'Who owned the safety question in 2004?', intro: 'Graham\'s structural critique, drawn out. Hover or tap each box.',
      svg: `<svg viewBox="0 0 900 380" role="img" aria-label="FDA organization for drug safety in 2004">
        <g data-part="merck"><rect x="20" y="130" width="160" height="96" rx="14" class="il-1s il-line2"/><text x="100" y="168" text-anchor="middle" class="il-title">Merck</text><text x="100" y="190" text-anchor="middle" class="il-text-2">sponsor: runs trials,</text><text x="100" y="207" text-anchor="middle" class="il-text-2">owns the data</text></g>
        <rect x="220" y="24" width="660" height="336" rx="18" class="il-8s"/>
        <text x="240" y="50" class="il-text-2">FDA Center for Drug Evaluation and Research</text>
        <g data-part="ond"><rect x="250" y="66" width="290" height="120" rx="14" class="il-2s il-line2"/><text x="270" y="96" class="il-title">Office of New Drugs</text><text x="270" y="120" class="il-text-2">approved Vioxx in 1999</text><text x="270" y="140" class="il-text-2">and decided label changes</text><text x="270" y="160" class="il-text-2">and actions after launch</text></g>
        <g data-part="ods"><rect x="250" y="222" width="290" height="116" rx="14" class="il-3s il-line2"/><text x="270" y="252" class="il-title">Office of Drug Safety</text><text x="270" y="276" class="il-text-2">studied harms after launch</text><text x="270" y="296" class="il-text-2">(Graham's Kaiser study)</text><text x="270" y="316" class="il-text-2">could only recommend</text></g>
        <g data-part="actions"><rect x="600" y="66" width="260" height="120" rx="14" class="il-4s il-line2"/><text x="620" y="96" class="il-title">Regulatory action</text><text x="620" y="120" class="il-text-2">label changes, warnings,</text><text x="620" y="140" class="il-text-2">study requests,</text><text x="620" y="160" class="il-text-2">withdrawal requests</text></g>
        <g data-part="fdaaa"><rect x="600" y="232" width="260" height="96" rx="14" class="il-6s il-line2"/><text x="620" y="262" class="il-title">After 2007 (FDAAA)</text><text x="620" y="286" class="il-text-2">FDA can require studies,</text><text x="620" y="306" class="il-text-2">label changes and REMS</text></g>
        <path d="M180 170 L 244 130" class="il-line2 il-none" fill="none"/><path d="M234 128 L 246 129 L 240 139" class="il-line2 il-none" fill="none"/>
        <text x="186" y="130" class="il-small">data</text>
        <path d="M540 126 L 594 126" class="il-line2 il-none" fill="none"/><path d="M586 120 L 596 126 L 586 132" class="il-line2 il-none" fill="none"/>
        <path d="M400 222 L 400 192" class="il-line il-dash il-none" fill="none"/><path d="M394 198 L 400 188 L 406 198" class="il-line il-none" fill="none"/>
        <text x="410" y="210" class="il-small">recommends</text>
      </svg>`,
      hotspots: {
        merck: {title: 'The sponsor', text: 'The company runs the trials, holds the patient-level data, writes the label proposals and decides whether to run new studies. Before 2007 the FDA had limited power to compel a postmarket safety study for a drug like Vioxx.'},
        ond: {title: 'Office of New Drugs (OND)', text: 'Reviewed and approved Vioxx. In 2004 it was also responsible for regulating the drug after launch. Graham argued that a division which has approved a drug "regards it as its own child," making it the biggest obstacle to acting on new safety problems.'},
        ods: {title: 'Office of Drug Safety (ODS)', text: 'Staffed by epidemiologists like David Graham who studied harms in real-world data. It had no regulatory authority and had to persuade OND. Graham testified that a senior ODS manager called his Vioxx study "a scientific rumor" eight days before the withdrawal.'},
        actions: {title: 'Regulatory action', text: 'In 2001–2002 the actual action on Vioxx was a negotiated label change placing the heart data under Precautions. There was no boxed warning until the 2005 class-wide NSAID warning, after Vioxx was gone.'},
        fdaaa: {title: 'What changed in 2007', text: 'The [[FDAAA|FDA Amendments Act]] let the FDA require postmarket studies and trials for known or suspected serious risks, order safety label changes on a timetable, require [[REMS]], and fine companies for false or misleading consumer ads. It also mandated an active surveillance system, which became [[Sentinel]].'},
      },
      caption: 'Simplified; the FDA has reorganized its safety offices since 2004.'},

    // ---------------- 16. FAIR ACCOUNTING ----------------
    {type: 'story', kicker: 'The post-mortem', title: 'What Merck knew, and when: a fair accounting', html: `
<p><b>The mechanism was known and worried about before launch.</b> Merck co-authored late-1990s work showing rofecoxib roughly halved urinary markers of prostacyclin, and Scolnick's 2000 email shows the concern at the top.</p>
<p><b>The naproxen hypothesis was possible but never tested,</b> and it was maintained as the main explanation long after observational data contradicted it.</p>
<p><b>Disclosure was selective.</b> The heart imbalance was not hidden altogether: Merck disclosed it in March 2000 and to the FDA. But the journal paper most doctors read counted fewer events than Merck had, with unstated, asymmetric cutoffs. A 2008 <i>JAMA</i> analysis by Bruce Psaty and Richard Kronmal found a parallel pattern in Vioxx's Alzheimer's trials: in April 2001, Merck's internal [[intention-to-treat]] analysis showed about three times the death rate on Vioxx (34 deaths among 1,069 patients vs 12 among 1,078), but the analyses were not given to the FDA or published promptly. Merck's submission used an [[on-treatment analysis]] that made the gap look much smaller. Most deaths were not cardiovascular and chance may explain part; the point is how the analysis choice shapes what readers see.</p>
<p><b>Promotion ran ahead of the evidence.</b> The FDA's 2001 warning letter said promotion minimized the heart findings. In 2011 Merck pleaded guilty to a misdemeanor for promoting Vioxx for rheumatoid arthritis before approval.</p>
<p><b>Merck also did things right.</b> VIGOR was a large, expensive outcome trial few companies then ran. APPROVe had a placebo and blinded adjudication. When it showed harm, Merck withdrew the drug within days.</p>
<p><b>The regulator and the journal share the story.</b> The FDA took fourteen months to agree a precaution and lacked power to demand a trial; by Graham's account it resisted its own epidemiologist. The journal published a sponsor paper with fewer harms than the sponsor held.</p>
<p>Incentives explain much of this without assuming anyone meant harm. A company earning $2.5 billion a year from a drug has little reason to fund a trial that might end it; an office that approved a drug reads new doubts as a challenge; scientists who spent a decade on a molecule find the hopeful reading more convincing. Together, that left a clear question unanswered for four years.</p>`},

    {type: 'table', title: 'Claims and counterclaims', intro: 'The main contested points and where the evidence landed.', columns: ['Claim', 'For', 'Against', 'Where it landed'],
      rows: [
        ['Merck knew Vioxx raised heart risk by 2000', 'VIGOR; Scolnick\'s email; prostacyclin studies', 'Scientists sincerely held the naproxen view; pooled trials showed no excess', 'A serious, plausible signal was known; "knew it was causal" is interpretation'],
        ['Naproxen protected the heart', 'Naproxen suppresses platelet thromboxane', 'Observational effect small (0.86) or absent', 'Far too small to explain VIGOR'],
        ['The NEJM paper hid heart attacks', 'Three omitted; unstated, earlier harm cutoff', 'Cutoff prespecified; data given to FDA and posted', 'Journal kept its concern; authors did not correct'],
        ['Risk only after 18 months', 'Original APPROVe analysis', '2006 correction; 2008 follow-up; VICTOR at 7.4 months', 'Not supported'],
        ['The FDA failed', 'Slow, weak label; Graham\'s testimony', 'Limited legal power pre-2007; real uncertainty', 'Congress added powers in 2007'],
        ['Vioxx was uniquely dangerous', 'Largest, earliest signal', 'Celebrex, diclofenac, high-dose ibuprofen also raise risk', 'A class effect; the scandal was the response'],
      ],
      caption: 'Sources: VIGOR and NEJM expression of concern; Krumholz et al., BMJ 2007; Konstam et al., 2001; Jüni et al., 2004; Graham et al., 2005; Lagakos, 2006; Baron et al., 2008; Kerr et al., 2007; CNT Collaboration, 2013.'},

    {type: 'callout', variant: 'product', heading: 'The team that shipped it should not run the post-mortem alone', html: `<p>Mature engineering organizations separate builders from the people who judge whether a system is safe to keep running: an independent security team, an SRE function that can halt a launch. Not because builders are dishonest, but because everyone reads ambiguous data in light of what they have committed to. Graham's critique was exactly this: the office that approved a drug decided whether new evidence of harm was real.</p><p><b>Where the analogy breaks:</b> an SRE can roll back in minutes. A regulator acts through law and negotiation against a company that holds the data. Independence without authority is a second opinion, which is why the 2007 reforms gave the FDA powers, not just a new org chart.</p>`},

    // ---------------- 17. LITIGATION ----------------
    {type: 'story', title: 'Juries, a settlement, and a guilty plea', html: `
<p>By 2007 about 47,000 plaintiffs had sued. Merck fought case by case and won about as often as it lost early on. On November 9, 2007 it agreed to pay $4.85 billion into a fund for qualifying US heart attack and ischemic stroke claims, with no admission of fault. Claimants had to prove the event, document at least 30 pills, and show use within 14 days before it. In 2011 Merck pleaded guilty to one misdemeanor count of [[misbranding]] for promoting Vioxx for rheumatoid arthritis before approval (fine about $321.6 million) and paid about $628.4 million to settle civil claims, including allegations of misleading cardiovascular-safety statements and [[off-label]] promotion.</p>`},

    {type: 'callout', variant: 'numbers', heading: 'The bill, roughly', html: `<p><b>~$9.8 billion:</b> reported worldwide Vioxx sales, 2000–2003. <b>$4.85 billion:</b> US liability settlement (2007). <b>$950 million:</b> criminal fine and civil settlement (2011). <b>$726 million</b> withdrawal charge and <b>$675 million</b> legal reserve (2004). <b>88,000–139,000:</b> Graham's estimate of excess US heart attacks and sudden cardiac deaths, 30–40% probably fatal. The money is known precisely; the human toll is an estimate.</p>`},

    // ---------------- 18. REFORM ----------------
    {type: 'story', kicker: 'What the field changed', title: 'The FDA gets new powers', html: `
<p>Vioxx drove the most important drug-safety law in decades, the [[FDAAA|Food and Drug Administration Amendments Act]], signed on September 27, 2007. Its Title IX addressed almost every gap in the story:</p>
<ul>
<li><b>Required postmarket studies.</b> The FDA can require studies or trials to assess a known serious risk or a signal of one. Before, these were mostly negotiated commitments.</li>
<li><b>Safety label changes on a clock.</b> Notified of new safety information, a company has 30 days to propose a change or explain why none is needed; the FDA can then drive it. No more fourteen-month negotiations.</li>
<li><b>[[REMS]].</b> Required risk-management programs: medication guides, restricted prescribing, registries.</li>
<li><b>Active surveillance.</b> A system to analyze safety data on at least 25 million patients by 2010 and 100 million by 2012. It became [[Sentinel]], launched in 2008.</li>
<li><b>Advertising.</b> Fines up to $250,000 for a first false or misleading consumer ad, and power to require TV ads be submitted 45 days before airing.</li>
</ul>
<p>The law also expanded ClinicalTrials.gov and required results of many trials to be posted, a partial answer to selective publication. And the biology changed how people think: a more selective drug is not automatically safer. It depends on what the spared and blocked pathways do elsewhere.</p>`},

    {type: 'custom', title: 'How would you have caught it sooner?', intro: 'You design drug-safety monitoring in May 1999, as Vioxx launches. Pick a strategy and a true effect size to see roughly when each would sound the alarm. A toy model with illustrative inputs: the relative speeds, not the dates, are the point.',
      html: `<div class="card"><div class="vx-pv-btns" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px"></div><label style="display:grid;grid-template-columns:230px 1fr 70px;gap:12px;align-items:center;font-size:15px;margin:6px 0"><span>True relative risk of heart attack</span><input type="range" min="1" max="3" step="0.05" value="1.6" class="vx-pv-rr" style="accent-color:var(--accent)"><b class="vx-pv-rro" style="text-align:right"></b></label><div class="vx-pv-chart"></div><div class="vx-pv-txt" style="font:400 16.5px/1.6 var(--serif);margin-top:8px"></div></div>`,
      init(root, api) {
        const M = [
          {k: 'spont', n: 'Wait for spontaneous reports', d: '[[spontaneous reporting|Spontaneous reports]] (the FDA\'s [[MedWatch]] system) work for rare, strange reactions such as liver failure in a young person. A heart attack in a 70-year-old with arthritis looks like an ordinary heart attack. Few are reported, and without knowing how many people take the drug or how many heart attacks they would have had anyway, there is nothing to compare against. In this model the alarm never sounds.'},
          {k: 'adhoc', n: 'Commission a health-plan study once worried', lag: 40, users: 8000, base: 0.012, margin: 0.2, d: 'An insurer\'s records (like Kaiser\'s) can compare Vioxx users with users of other painkillers. But someone has to decide to do the study, get access and run it: Graham\'s took nearly three years. Observational data also need a safety margin against confounding, so small effects are hard to call. Here the answer can only arrive 40 months after launch.'},
          {k: 'active', n: 'Standing active surveillance network', lag: 6, users: 40000, base: 0.012, margin: 0.2, d: 'A standing network of claims and health-record data covering tens of millions of people, with pre-planned sequential analyses of every new drug, like the later [[Sentinel]] system. Data arrive about six months late, but many users give many events quickly. Same confounding margin as the ad hoc study.'},
          {k: 'meta', n: 'Keep a running pooled analysis of all company trials', lag: 0, trialPY: 500, base: 0.008, margin: 0, every: 3, d: 'A [[cumulative meta-analysis]] updated as each trial reports, including VIGOR. Randomized data need no confounding margin, but trials are small and short, so events accrue slowly. In reality, Jüni and colleagues showed in 2004 that such an analysis would have been significant by the end of 2000.'},
          {k: 'rct', n: 'Start a dedicated heart-safety trial at launch', lag: 6, trialN: 4000, base: 0.015, margin: 0, every: 12, d: 'A randomized trial of 4,000 patients per arm at raised cardiovascular risk, versus placebo, with a safety analysis once a year. The cleanest answer and the most expensive. It starts after six months of design and enrols over a year.'},
        ];
        let cur = M[2];
        const btns = api.$('.vx-pv-btns', root), rrI = api.$('.vx-pv-rr', root);
        const st = document.createElement('style'); st.textContent = '.vx-pv-btns .btn[aria-pressed="true"]{background:var(--ink);color:var(--paper);border-color:var(--ink)}'; root.appendChild(st);
        M.forEach(m => { const b = api.el('button', 'btn', api.esc(m.n)); b.dataset.k = m.k; b.onclick = () => { cur = m; draw(); }; btns.appendChild(b); });
        const dateOf = t => { const mm = 4 + t, y = 1999 + Math.floor(mm / 12); return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][mm % 12] + ' ' + y; };
        const draw = () => {
          const rr = +rrI.value; api.$('.vx-pv-rro', root).textContent = rr.toFixed(2) + '×';
          api.$$('button', btns).forEach(b => b.setAttribute('aria-pressed', b.dataset.k === cur.k));
          const out = api.$('.vx-pv-chart', root), txt = api.$('.vx-pv-txt', root);
          const pts = [], thr = [], TH = 2.5; let E = 0, hit = null;
          for (let t = 0; t <= 72; t++) {
            let py = 0;
            if (cur.k === 'adhoc' || cur.k === 'active') py = cur.users * Math.min(1, t / 18) / 12;
            else if (cur.k === 'meta') py = cur.trialPY * (t < 6 ? 0.3 : 1);
            else if (cur.k === 'rct') py = t < cur.lag ? 0 : cur.trialN * Math.min(1, (t - cur.lag) / 12) / 12;
            E += py * cur.base;
            let z = 0;
            if (cur.k !== 'spont' && E > 0) z = Math.max(0, (Math.log(rr) - Math.log(1 + (cur.margin || 0))) / Math.sqrt(1 / (rr * E) + 1 / E));
            const visible = cur.k === 'spont' ? 0 : (t >= (cur.lag || 0) ? z : 0);
            if (t % 2 === 0) { pts.push([+(1999 + (4 + t) / 12).toFixed(3), +Math.min(8, visible).toFixed(2)]); thr.push([+(1999 + (4 + t) / 12).toFixed(3), TH]); }
            const look = !cur.every || ((t - (cur.lag || 0)) % cur.every === 0);
            if (hit == null && look && visible >= TH) hit = t;
          }
          const ann = [{x: 2000.2, label: 'VIGOR results', dy: 0}, {x: 2004.75, label: 'Withdrawal', dy: 16}];
          if (hit != null) ann.push({x: +(1999 + (4 + hit) / 12).toFixed(3), label: 'Alarm: ' + dateOf(hit), dy: 32});
          api.mountChart(out, {kind: 'line', title: 'Strength of the safety signal (toy z-score)', unit: '', yMax: 8, xTicks: [1999.33, 2000, 2001, 2002, 2003, 2004, 2005], xFmt: v => v < 1999.5 ? 'May 99' : String(Math.round(v)),
            series: [{name: 'Signal', points: pts}, {name: 'Alarm threshold', short: 'threshold', points: thr, dashed: true, color: 8}], annotations: ann,
            note: 'Toy model: expected (not random) event counts; effective user numbers, event rates and lags are illustrative. Threshold 2.5 allows for repeated looks. Signal capped at 8 for display.'});
          txt.innerHTML = api.terms(cur.d) + '<br><b>' + (cur.k === 'spont' ? 'Result: no usable signal.' : hit == null ? 'Result: no alarm by mid-2005 at this effect size.' : 'Result: alarm around ' + dateOf(hit) + ', ' + (hit < 64 ? Math.round((64 - hit) / 12 * 10) / 10 + ' years before the real withdrawal.' : 'after the real withdrawal.')) + '</b>';
        };
        rrI.addEventListener('input', draw); draw();
      }},

    {type: 'callout', variant: 'product', heading: 'Observability for a product you cannot roll back', html: `<p>Spontaneous adverse-event reports are the drug world's user bug reports: good for dramatic, unusual failures, nearly useless for a small rise in an error that already fires constantly. Nobody files a ticket when every instance looks normal. You catch that regression only with real monitoring: a denominator, a baseline, a comparison group, and thresholds set before launch. That is what Sentinel tries to be.</p><p><b>Where the analogy breaks:</b> health data are fragmented, months late, recorded for billing, and confounded by who gets prescribed what. There is no staging environment: by the time the signal is clear, people have been harmed.</p>`},

    // ---------------- 19. CELEBREX ----------------
    {type: 'story', kicker: 'What came next', title: 'Why Celebrex survived', html: `
<p>If COX-2 inhibition tips the balance, why is Celebrex still sold? Partly because it is less selective, so it may disturb the balance less at usual doses, and partly because the evidence against it was weaker and later. In a 2005 colon-adenoma trial (APC), celecoxib at 400 and 800 mg a day, above typical arthritis doses, raised cardiovascular events 2.3 and 3.4 times over placebo. In April 2005 the FDA judged all three coxibs risky but unrankable, asked Pfizer to withdraw Bextra (valdecoxib), required boxed warnings on Celebrex and every prescription NSAID, and left Celebrex on the market.</p>
<p>Pfizer then ran the trial Merck never had. PRECISION, led by Steven Nissen, one of the 2001 <i>JAMA</i> authors, randomized 24,081 arthritis patients at raised heart risk to celecoxib, naproxen or ibuprofen for almost three years on average. It was a [[noninferiority trial]]: was celecoxib unacceptably worse? It was not. Cardiovascular death, heart attack or stroke occurred in 2.3% on celecoxib, 2.5% on naproxen and 2.7% on ibuprofen, with fewer serious stomach problems on celecoxib.</p>
<p>It has limits: moderate doses (about 209 mg a day of celecoxib), almost 69% of patients stopping their drug, and no placebo arm, so the message is "no worse than the alternatives," not "safe." With the 2013 meta-analysis it supports today's consensus: cardiovascular risk is a class property of NSAIDs, depending on dose, duration and each drug's COX-1/COX-2 balance, with naproxen perhaps the least risky. Selectivity mainly buys stomach safety. And PRECISION shows what the right response looked like: a large randomized heart-outcome trial in real users. Critics asked for one in 2001; it arrived in 2016.</p>`},

    {type: 'chart', title: 'PRECISION, 2016', intro: 'Cardiovascular death, nonfatal heart attack or nonfatal stroke; intention-to-treat; mean follow-up 34 months.',
      chart: {kind: 'bar', title: 'Patients with a primary cardiovascular event (%)', unit: '%', categories: ['Celecoxib', 'Naproxen', 'Ibuprofen'], series: [{name: 'Primary outcome', values: [2.3, 2.5, 2.7], notes: ['188 patients; mean dose 209 mg/day', '201 patients; mean dose 852 mg/day', '218 patients; mean dose 2,045 mg/day']}], colorByCategory: true, yMax: 3,
        note: 'Hazard ratio celecoxib vs naproxen 0.93 (95% CI 0.76–1.13); vs ibuprofen 0.85 (0.70–1.04); P<0.001 for noninferiority. Nissen et al., NEJM 2016.'},
      takeaway: 'No worse for the heart than the two most common older NSAIDs at moderate doses, and better for the stomach. Not proof that any NSAID is free of heart risk.'},

    {type: 'callout', variant: 'whatif', heading: 'What if Merck had run the heart trial in 2000?', html: `<p>Suppose Merck had started a placebo-controlled trial of Vioxx 25 mg in several thousand at-risk arthritis patients in mid-2000. With a true relative risk near APPROVe's 1.9 and one or two heart events per 100 patients a year, it would likely have shown harm by 2002 or 2003 instead of late 2004. Merck might have restricted Vioxx to patients at high stomach risk and low heart risk rather than lose it. Any lives-saved figure is speculative, but removing a year or two of mass exposure would have prevented a large share of the excess. The deeper counterfactual is organizational: such a trial gets run only if someone with power wants the answer.</p>`},

    // ---------------- 20. QUIZ ----------------
    {type: 'quiz', title: 'Check your understanding', questions: [
      {q: 'Why was a COX-2-selective drug expected to be gentler on the stomach?', options: ['Once-a-day dosing meant less drug touched the stomach', 'Stomach-protecting prostaglandins come mainly from COX-1, which it spared', 'It neutralized stomach acid', 'COX-2 has no role in the body'], answer: 1, explain: 'COX-1 makes the stomach\'s protective prostaglandins. VIGOR confirmed roughly half the rate of serious stomach complications versus naproxen.'},
      {q: 'What best explains how Vioxx raised heart attack risk?', options: ['It poisoned heart muscle', 'It raised cholesterol', 'It lowered anti-clotting prostacyclin while leaving pro-clotting platelet thromboxane untouched', 'It blocked aspirin'], answer: 2, explain: 'The balance model: prostacyclin (largely COX-2) falls, thromboxane (platelet COX-1) does not, so clots are somewhat likelier on arterial plaques. Blood-pressure effects probably contributed.'},
      {q: 'Why could VIGOR alone not settle whether Vioxx caused harm?', options: ['Without a placebo arm, the gap could mean Vioxx raised risk or naproxen lowered it', 'It recorded no heart attacks', 'All patients took aspirin', 'It lasted only a week'], answer: 0, explain: 'A ratio between two active drugs cannot say which one moved. That is why a placebo-controlled trial was needed.'},
      {q: 'Merck\'s 2001 pooled analysis found no excess versus placebo. What was its main weakness?', options: ['It used the wrong software', 'It counted VIGOR twice', 'It only measured stomach events', 'Short, low-dose, low-risk trials had too few events to rule out a meaningful increase'], answer: 3, explain: 'Absence of evidence in underpowered data is not evidence of absence. Look at the confidence interval.'},
      {q: 'What was the core of NEJM\'s 2005 expression of concern?', options: ['The trial was not randomized', 'Patients were invented', 'Three heart attacks known to some authors were omitted, and the harm cutoff was earlier than the benefit cutoff without being stated', 'It was a duplicate publication'], answer: 2, explain: 'The authors said the cutoff was prespecified; the editors said the undisclosed, asymmetric cutoffs misled readers.'},
      {q: 'APPROVe: 1.50 vs 0.78 events per 100 patient-years. Which is correct?', options: ['Relative risk about 2, but under 1 percentage point more per year: about one extra event per ~140 people treated a year', 'Most Vioxx patients had a heart attack', 'Absolute risk rose from 50% to 100%', 'The difference was not significant'], answer: 0, explain: 'Small for each patient, large across millions of patient-years.'},
      {q: 'Why are spontaneous reports poor at catching a drug that raises heart attacks in older adults?', options: ['Reporting heart attacks is forbidden', 'Heart attacks are too rare', 'Only Europe collects reports', 'Heart attacks are common, so cases look ordinary, few are reported, and there is no denominator to compare against'], answer: 3, explain: 'Spontaneous reporting finds rare, odd reactions. A rise in a common event needs active surveillance or comparative trials.'},
      {q: 'Which power did the 2007 FDA Amendments Act give the FDA?', options: ['To approve drugs', 'To require postmarket safety studies and drive safety label changes on a deadline', 'To set prices', 'To license doctors'], answer: 1, explain: 'Title IX added required studies, 30-day label changes, REMS and active surveillance (Sentinel).'},
      {q: 'What did PRECISION (2016) show?', options: ['At moderate doses, celecoxib was noninferior to naproxen and ibuprofen for heart safety, with fewer stomach problems', 'Celecoxib was as dangerous as Vioxx', 'NSAIDs have no heart risk', 'Naproxen prevents heart attacks like aspirin'], answer: 0, explain: 'It compared NSAIDs with each other, not placebo: "no worse than the alternatives."'},
      {q: 'Which structural problem did David Graham highlight?', options: ['Too many epidemiologists', 'The FDA could not read journals', 'The office that approved a drug also decided postmarket action, while the safety office could only recommend', 'Merck set the FDA\'s budget'], answer: 2, explain: 'He called it "an inherent conflict of interest."'},
    ]},

    // ---------------- 21. LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'Selectivity has a price', text: 'Blocking one arm of a balanced system removes the counterweight to another. Ask what the spared and blocked pathways do elsewhere.', links: ['torcetrapib', 'tgn1412']},
      {title: 'Absence of evidence is not evidence of absence', text: 'Small, short, low-risk trials that "show no excess" cannot rule out a doubling of a rare event. Read the confidence interval.', links: ['torcetrapib', 'aduhelm']},
      {title: 'Scale turns small risks into large tolls', text: 'Under 1 percentage point a year becomes tens of thousands of events across millions of users. Mass-market safety systems must be built for that arithmetic.', links: ['comirnaty', 'ozempic']},
      {title: 'Decide who owns the post-launch question', text: 'A clear signal went four years without a decisive trial because the company had little reason to fund one and the regulator no power to force one.', links: ['aduhelm', 'leqembi']},
      {title: 'Fix the analysis before you see the data', text: 'Asymmetric cutoffs, on-treatment analyses and post hoc time windows all tilted the record. Pre-specify, and treat benefits and harms alike.', links: ['epacadostat', 'aduhelm']},
      {title: 'Marketing can outrun the evidence', text: 'The biggest consumer ad budget in America pushed a drug with a narrow ideal population to millions. Launch strategy is a safety decision.', links: ['exubera', 'humira']},
    ]},

    // ---------------- 22. SOURCES ----------------
    {type: 'sources', title: 'Sources', items: [
      {text: 'Bombardier C, et al. Comparison of upper gastrointestinal toxicity of rofecoxib and naproxen in patients with rheumatoid arthritis (VIGOR). N Engl J Med 2000;343:1520–8.', url: 'https://doi.org/10.1056/NEJM200011233432103'},
      {text: 'Curfman GD, Morrissey S, Drazen JM. Expression of concern: Bombardier et al. N Engl J Med 2005;353:2813–4; Expression of concern reaffirmed. N Engl J Med 2006;354:1193; and Bombardier C, et al. Response to expression of concern regarding VIGOR study. N Engl J Med 2006;354:1196–9.', url: 'https://doi.org/10.1056/NEJMe058314'},
      {text: 'Mukherjee D, Nissen SE, Topol EJ. Risk of cardiovascular events associated with selective COX-2 inhibitors. JAMA 2001;286:954–9.', url: 'https://doi.org/10.1001/jama.286.8.954'},
      {text: 'Konstam MA, et al. Cardiovascular thrombotic events in controlled, clinical trials of rofecoxib. Circulation 2001;104:2280–8.', url: 'https://doi.org/10.1161/hc4401.100078'},
      {text: 'Ray WA, et al. COX-2 selective non-steroidal anti-inflammatory drugs and risk of serious coronary heart disease. Lancet 2002;360:1071–3.', url: 'https://doi.org/10.1016/S0140-6736(02)11131-7'},
      {text: 'Graham DJ, et al. Risk of acute myocardial infarction and sudden cardiac death in patients treated with COX-2 selective and non-selective NSAIDs: nested case-control study. Lancet 2005;365:475–81.', url: 'https://doi.org/10.1016/S0140-6736(05)17864-7'},
      {text: 'Bresalier RS, et al. Cardiovascular events associated with rofecoxib in a colorectal adenoma chemoprevention trial (APPROVe). N Engl J Med 2005;352:1092–102.', url: 'https://doi.org/10.1056/NEJMoa050493'},
      {text: 'Lagakos SW. Time-to-event analyses for long-term treatments: the APPROVe trial. N Engl J Med 2006;355:113–7.', url: 'https://doi.org/10.1056/NEJMp068137'},
      {text: 'Baron JA, et al. Cardiovascular events associated with rofecoxib: final analysis of the APPROVe trial. Lancet 2008;372:1756–64.', url: 'https://doi.org/10.1016/S0140-6736(08)61490-7'},
      {text: 'Kerr DJ, et al. Rofecoxib and cardiovascular adverse events in adjuvant treatment of colorectal cancer (VICTOR). N Engl J Med 2007;357:360–9.', url: 'https://doi.org/10.1056/NEJMoa071841'},
      {text: 'Jüni P, et al. Risk of cardiovascular events and rofecoxib: cumulative meta-analysis. Lancet 2004;364:2021–9.', url: 'https://doi.org/10.1016/S0140-6736(04)17514-4'},
      {text: 'McAdam BF, et al. Systemic biosynthesis of prostacyclin by cyclooxygenase-2: the human pharmacology of a selective inhibitor of COX-2. PNAS 1999;96:272–7; and Catella-Lawson F, et al. Effects of specific inhibition of cyclooxygenase-2 on sodium balance, hemodynamics, and vasoactive eicosanoids. J Pharmacol Exp Ther 1999;289:735–41.', url: 'https://doi.org/10.1073/pnas.96.1.272'},
      {text: 'FitzGerald GA. Coxibs and cardiovascular disease. N Engl J Med 2004;351:1709–11.', url: 'https://doi.org/10.1056/NEJMp048288'},
      {text: 'Krumholz HM, Ross JS, Presler AH, Egilman DS. What have we learnt from Vioxx? BMJ 2007;334:120–3 (source of the Scolnick email, reprint purchases and prescription count).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1779871/'},
      {text: 'Psaty BM, Kronmal RA. Reporting mortality findings in trials of rofecoxib for Alzheimer disease or cognitive impairment. JAMA 2008;299:1813–7.', url: 'https://doi.org/10.1001/jama.299.15.1813'},
      {text: 'Wolfe MM, Lichtenstein DR, Singh G. Gastrointestinal toxicity of nonsteroidal antiinflammatory drugs. N Engl J Med 1999;340:1888–99.', url: 'https://doi.org/10.1056/NEJM199906173402407'},
      {text: 'Vane JR. Inhibition of prostaglandin synthesis as a mechanism of action for aspirin-like drugs. Nature New Biology 1971;231:232–5.', url: 'https://doi.org/10.1038/newbio231232a0'},
      {text: 'Testimony of David J. Graham, MD, MPH, US Senate Committee on Finance, November 18, 2004.', url: 'https://www.finance.senate.gov/imo/media/doc/111804dgtest.pdf'},
      {text: 'Prakash S, Valentine V. Timeline: the rise and fall of Vioxx. NPR, November 10, 2007 (VIGOR safety board, cutoff dates, memo, litigation counts).', url: 'https://www.npr.org/2007/11/10/5470430/timeline-the-rise-and-fall-of-vioxx'},
      {text: 'FDA. Drugs@FDA, NDA 021042 (Vioxx) approval May 20, 1999, and NDA 020998 (Celebrex) approval December 31, 1998.', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=021042'},
      {text: 'FDA Talk Paper T02-18. FDA approves new indication and label changes for the arthritis drug Vioxx. April 11, 2002.', url: 'http://web.archive.org/web/20041207003216/http://www.fda.gov:80/bbs/topics/ANSWERS/2002/ANS01145.html'},
      {text: 'FDA. Summary minutes, joint meeting of the Arthritis and Drug Safety and Risk Management Advisory Committees, February 16–18, 2005.', url: 'https://web.archive.org/web/20170510083520/https://www.fda.gov/ohrms/dockets/ac/05/minutes/2005-4090M1_Final.htm'},
      {text: 'Jenkins JK, Seligman PJ (FDA). Analysis and recommendations for Agency action regarding NSAIDs and cardiovascular risk. Memorandum, April 6, 2005.', url: 'http://web.archive.org/web/20090513022900/http://www.fda.gov/cder/drug/infopage/COX2/NSAIDdecisionMemo.pdf'},
      {text: 'Merck & Co. Press releases: Merck announces voluntary worldwide withdrawal of VIOXX (Sept 30, 2004); Merck agreement to resolve US VIOXX product liability lawsuits (Nov 9, 2007).', url: 'http://web.archive.org/web/20041229093300/http://www.merck.com:80/newsroom/press_releases/product/2004_0930.html'},
      {text: 'Merck & Co. Annual reports 2002, 2003 and 2004 (Form 10-K, Exhibit 13) and fourth-quarter earnings releases of January 2001 and January 2002 (Vioxx sales, withdrawal charges, legal reserves). SEC EDGAR.', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000064978&type=10-K'},
      {text: 'National Institute for Health Care Management. Prescription drugs and mass media advertising, 2000. November 2001.', url: 'http://web.archive.org/web/20160303224702/http://www.nihcm.org/pdf/DTCbrief2001.pdf'},
      {text: 'US Department of Justice. U.S. pharmaceutical company Merck Sharp & Dohme to pay nearly one billion dollars over promotion of Vioxx. November 22, 2011.', url: 'https://www.justice.gov/opa/pr/us-pharmaceutical-company-merck-sharp-dohme-pay-nearly-one-billion-dollars-over-promotion'},
      {text: 'Food and Drug Administration Amendments Act of 2007, Public Law 110-85, Title IX; and FDA, Sentinel Initiative background.', url: 'https://www.govinfo.gov/content/pkg/PLAW-110publ85/html/PLAW-110publ85.htm'},
      {text: 'Nissen SE, et al. Cardiovascular safety of celecoxib, naproxen, or ibuprofen for arthritis (PRECISION). N Engl J Med 2016;375:2519–29.', url: 'https://doi.org/10.1056/NEJMoa1611593'},
      {text: 'Solomon SD, et al. Cardiovascular risk associated with celecoxib in a clinical trial for colorectal adenoma prevention (APC). N Engl J Med 2005;352:1071–80; and Coxib and traditional NSAID Trialists\' (CNT) Collaboration. Vascular and upper gastrointestinal effects of NSAIDs: meta-analyses of individual participant data from randomised trials. Lancet 2013;382:769–79.', url: 'https://doi.org/10.1016/S0140-6736(13)60900-9'},
    ]},
  ],
});
