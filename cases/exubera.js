// Exubera (inhaled human insulin): Pfizer, Nektar (formerly Inhale Therapeutic Systems), Sanofi-Aventis. See GUIDE.md.
registerCase({
  id: 'exubera', kind: 'failure',
  brand: 'Exubera', generic: 'insulin human [rDNA origin] inhalation powder', company: 'Pfizer, with Nektar Therapeutics (formerly Inhale) and Sanofi-Aventis',
  tagline: 'The first insulin you could breathe instead of inject. It worked, regulators approved it, and almost nobody bought it: a $2.8 billion lesson in the gap between approval and adoption.',
  chips: [['Disease', 'Type 1 and type 2 diabetes'], ['Modality', 'Inhaled [[biologic]] (dry-powder insulin)'], ['Approved', 'January 2006 (US and EU)'], ['Withdrawn', 'October 2007 (commercial reasons)']],
  readingTime: 35,
  stats: [
    {v: '$1–4B', l: 'Analysts\' estimates of annual sales at approval', n: 'Nature Biotechnology, Dec 2007'},
    {v: '$12M', l: 'Actual sales in the first nine months of 2007', n: 'Nature Biotechnology, Dec 2007'},
    {v: '$2.8B', l: 'Pfizer\'s pre-tax charge to exit the product', n: 'Pfizer Q3 2007 results'},
    {v: '$1.3B', l: 'Paid to Sanofi-Aventis for its share, January 2006', n: 'Sanofi-Aventis release, 13 Jan 2006'},
    {v: '1 mg', l: 'Exubera\'s smallest dose, about 3 [[international unit|units]]: milligrams in a world that thinks in units', n: 'FDA label, 2006'},
  ],
  emblem: `<svg viewBox="0 0 300 300" role="img" aria-label="An inhaler next to an insulin pen">
    <circle cx="150" cy="150" r="136" class="il-1s"/>
    <rect x="86" y="54" width="28" height="22" rx="6" class="il-8s il-line"/>
    <rect x="68" y="72" width="64" height="118" rx="22" class="il-paper il-line2"/>
    <circle cx="90" cy="110" r="6" class="il-1"/><circle cx="108" cy="100" r="4" class="il-1"/><circle cx="104" cy="124" r="7" class="il-1"/><circle cx="84" cy="138" r="4" class="il-1"/><circle cx="112" cy="146" r="5" class="il-1"/><circle cx="94" cy="160" r="4" class="il-1"/>
    <rect x="64" y="188" width="72" height="64" rx="12" class="il-8s il-line2"/>
    <circle cx="100" cy="214" r="8" class="il-1"/>
    <rect x="136" y="198" width="10" height="44" rx="4" class="il-8"/>
    <g transform="rotate(18 214 160)"><rect x="202" y="74" width="24" height="156" rx="10" class="il-2s il-line2"/><rect x="202" y="196" width="24" height="34" rx="6" class="il-2"/><path d="M214 74 V50" class="il-line2" stroke-linecap="round"/></g>
    <path d="M60 268 H240" class="il-line il-dash"/>
    <text x="150" y="290" text-anchor="middle" class="il-text-2">approved, launched, withdrawn</text>
  </svg>`,
  facts: {start: 1990, firstHuman: null, approval: 2006, end: 2007, peakSalesB: null, pivotalN: 335,
          area: 'metabolic', modality: 'inhaled insulin', target: 'Insulin receptor (replacement hormone)'},
  themes: ['pricing', 'competition', 'regulatory', 'safety'],
  glossary: {
    'type 1 diabetes': 'A form of diabetes in which the immune system destroys the insulin-making beta cells of the pancreas, so the body makes almost no insulin. Patients need insulin from the day of diagnosis.',
    'type 2 diabetes': 'The common form of diabetes (about 9 in 10 cases). The body still makes insulin but responds to it poorly and, over years, makes too little. Treated first with diet and pills; many patients eventually need insulin.',
    'pancreas': 'An organ behind the stomach. Besides digestive juices, it contains small clusters of cells (islets) that release insulin and other hormones into the blood.',
    'beta cell': 'The cell type in the pancreas that senses blood sugar and releases insulin.',
    'glucose': 'The main sugar in the blood and the body\'s everyday fuel. Insulin lets cells take it in.',
    'basal insulin': 'Long-acting "background" insulin, usually injected once or twice a day, that covers the body\'s needs between meals and overnight.',
    'mealtime insulin': 'Short-acting insulin taken just before eating to handle the rise in blood sugar from a meal. Also called prandial or bolus insulin. This is the only kind Exubera replaced.',
    'international unit': 'The standard measure of insulin dose, based on its biological effect rather than its weight. Doctors and patients have dosed insulin in units since the 1920s.',
    'hypoglycemia': 'Blood sugar that falls too low, usually from too much insulin. It causes shaking, sweating and confusion and can be dangerous. The main risk of any insulin.',
    'alveoli': 'The hundreds of millions of tiny air sacs at the ends of the lung\'s airways, where oxygen passes into the blood. Their walls are extremely thin, which is why the lung can absorb some drugs.',
    'bioavailability': 'The share of a dose that actually reaches the bloodstream in usable form. For injected insulin it is high; for inhaled insulin it was roughly 10–20%.',
    'aerosol': 'A cloud of fine particles or droplets suspended in air, such as the puff from an asthma inhaler.',
    'micron': 'One thousandth of a millimeter (a micrometer). A human hair is roughly 50–100 microns wide.',
    'spirometry': 'A breathing test: the patient blows as hard as possible into a tube, and a machine measures how much air comes out and how fast. The label required it before starting Exubera and regularly afterwards.',
    'FEV1': 'Forced expiratory volume in one second: how much air you can blow out in the first second of a hard breath. The main number from spirometry.',
    'DLco': 'Diffusing capacity for carbon monoxide: a lung test of how easily gas crosses from the air sacs into the blood.',
    'COPD': 'Chronic obstructive pulmonary disease: long-term lung damage, usually from smoking, that narrows the airways.',
    'bronchospasm': 'A sudden tightening of the airways that makes breathing difficult, as in an asthma attack.',
    'insulin pen': 'A pocket-sized injector that holds an insulin cartridge. The user screws on a tiny needle, dials the dose in units, and injects. Pens replaced vials and syringes for many patients.',
    'insulin analog': 'Insulin whose protein sequence has been slightly altered to change how fast or slow it acts, for example the fast-acting lispro (Humalog) or the long-acting glargine (Lantus).',
    'Lantus': 'Sanofi-Aventis\'s long-acting insulin glargine, approved in 2000. By 2006 it was the world\'s leading insulin brand by sales.',
    'NPH': 'An intermediate-acting insulin made by adding protamine and zinc to regular insulin. Common basal insulin before long-acting analogs.',
    'regular insulin': 'Unmodified short-acting human insulin, injected before meals. Exubera\'s trials compared against it.',
    'change of control clause': 'A contract term letting one party renegotiate or exit if the other is taken over. Aventis\'s merger into Sanofi triggered one in the Exubera alliance.',
    'write-off': 'Removing an asset\'s value from the balance sheet because it will never earn back what was paid for it. It is recorded as a loss.',
    'impairment': 'An accounting charge recognizing that an asset (a factory, a patent, acquired rights) is worth less than its recorded value.',
    'utility': 'In health economics, a number between 0 (death) and 1 (perfect health) for how good a health state is. A "utility gain" of 0.02 means a 2% improvement in quality of life.',
    'cost per QALY': 'The extra cost of a treatment divided by the extra quality-adjusted life years it buys. England\'s NICE generally looked for roughly £20,000–30,000 or less.',
    'NICE': 'The National Institute for Health and Care Excellence, which decides whether England\'s National Health Service should pay for new treatments, largely on cost-effectiveness.',
    'direct-to-consumer advertising': 'Drug advertising aimed at patients (TV, magazines) rather than doctors. Legal in the US and New Zealand.',
    'Technosphere': 'MannKind\'s inhalation technology: insulin (or another drug) bound to tiny particles that dissolve quickly in the lung. The basis of Afrezza.',
    'needle phobia': 'An intense, persistent fear of needles and injections. It is real, but less common than a general reluctance to start insulin.',
    'sunk cost': 'Money already spent that cannot be recovered. Good decisions ignore it and look only at future costs and benefits.',
  },
  sections: [

    // ---------------- 1. COLD OPEN ----------------
    {type: 'story', kicker: 'Cold open', title: 'The vote that said yes, and the chairman who said no', tocTitle: 'Cold open', html: `
<p>On Thursday, September 8, 2005, a panel of outside experts sat in the Kennedy Room of a Holiday Inn in Silver Spring, Maryland, a few miles from the headquarters of the US Food and Drug Administration. They were the FDA's Endocrinologic and Metabolic Drugs [[advisory committee]], and they had spent the day on one question: should Americans be allowed to breathe their insulin instead of injecting it?</p>
<p>The product was called Exubera. Pfizer had spent a decade developing it with a small California company, Inhale Therapeutic Systems (renamed Nektar Therapeutics in 2003), and with the German drugmaker that became Aventis. It was a fine white powder of human insulin sealed in foil blisters. You loaded a blister into a hand-held device, pumped a handle, pressed a button, and a small cloud of insulin filled a clear chamber. You breathed the cloud in. The insulin crossed from your lungs into your blood and lowered your blood sugar, much as an injection would.</p>
<p>By the end of the afternoon, the committee voted 7 to 2 that Exubera should be approved for adults with [[type 1 diabetes]], and 7 to 2 again for [[type 2 diabetes]]. The science had held up. In trials of about 2,500 patients, the powder controlled blood sugar about as well as injected insulin did.</p>
<p>One of the two "no" votes came from the acting chairman, Dr. Paul Woolf. His reason had nothing to do with whether the drug worked. When it was his turn, he said simply: "No because of the issue of training." Earlier he had explained what he meant.</p>
<blockquote class="pull">It is a very ambitious project to train literally millions of people, and I don't know what resources will be available to train those people. ... To have to screen people with spirometry probably won't happen half the time.<cite>Dr. Paul Woolf, acting chair, FDA advisory committee, September 8, 2005 (official transcript)</cite></blockquote>
<p>The committee's patient representative, Rebecca Killion, voted yes, but she worried aloud about the dosing. Exubera was measured in milligrams, not the insulin units every patient and doctor had used for eighty years, and three small blisters did not equal one large one. "As we all know," she said, "in the real world the plan is the first casualty."</p>
<p>Four and a half months later, the FDA approved Exubera. European approval came the same week. Pfizer had just agreed to pay $1.3 billion to buy out its partner's share. Analysts estimated annual sales of $1 billion to $4 billion.</p>
<p>On October 18, 2007, twenty-one months after approval, Pfizer's chief executive Jeff Kindler announced that the company was giving up. "Despite our best efforts, Exubera has failed to gain the acceptance of patients and physicians," he said. Exubera had sold $12 million in the first nine months of that year. The exit cost Pfizer $2.8 billion.</p>
<p>This case is the closest thing biotech has to a failed software launch. Nothing blew up. No regulator forced it off the market. The drug did what it said. It simply lost to the product people already had, for reasons that were visible, and said out loud, in a hotel conference room two years before the end.</p>`},

    {type: 'callout', variant: 'product', heading: 'Approval is shipping. It is not product–market fit.', html: `<p>For a software team, FDA approval looks like getting through app-store review: a gate you must pass, and then the real test begins. Exubera passed the gate cleanly and then failed on the things every product manager worries about: onboarding friction, a confusing unit of measure, a price premium without a matching benefit for the buyer, and an incumbent that kept improving.</p><p><b>Where the analogy breaks:</b> a software team that sees bad retention ships a fix next sprint. Exubera's dose units, device and label were locked in by a decade of trials and a regulatory filing. Changing the unit of measure, or shrinking the device, meant new studies and new approvals. The iteration loop was measured in years, and the company that paid for it had already committed the factory.</p>`},

    // ---------------- 2. DISEASE FROM ZERO ----------------
    {type: 'story', kicker: 'The disease from zero', title: 'Sugar, insulin, and a daily needle', tocTitle: 'Diabetes from zero', html: `
<p>Every cell in your body runs on sugar, mainly a simple sugar called [[glucose]]. After a meal, glucose from food floods into the blood. The cells that need it most, in muscle, fat and the liver, cannot simply soak it up. They wait for a signal.</p>
<p>That signal is [[insulin]], a small [[protein]] [[hormone]] made by the [[beta cell|beta cells]] of the [[pancreas]], an organ tucked behind the stomach. Beta cells sense rising glucose and release insulin into the blood. Insulin docks on a [[receptor]] on the surface of muscle and fat cells, and that opens the door for glucose to come in. It also tells the liver to stop releasing its own stored sugar. Blood sugar falls back to normal. In a healthy person this loop runs quietly all day.</p>
<p>Diabetes is what happens when the loop breaks. In <b>[[type 1 diabetes]]</b>, the immune system destroys the beta cells, usually in childhood or early adulthood, and the body makes almost no insulin. Without insulin from outside, a person with type 1 diabetes dies, often within months. In <b>[[type 2 diabetes]]</b>, by far the more common form, the body still makes insulin but responds to it poorly, and over years the beta cells wear out. Type 2 is treated first with diet, exercise and pills; many patients eventually need insulin too.</p>
<p>High blood sugar does its damage slowly. Over years it injures small blood vessels and nerves, leading to blindness, kidney failure, nerve damage and amputations, and it raises the risk of heart attacks and strokes. Doctors track control with a blood test, [[HbA1c]], which reflects the average blood sugar over the previous two to three months. When the FDA approved Afrezza, a later inhaled insulin, in 2014, it estimated that 25.8 million Americans, about 8.3% of the population, had diabetes. When it approved Exubera in 2006, it noted that more than 5 million Americans took insulin injections.</p>
<h3>A hundred years of needles</h3>
<p>Insulin was discovered in Toronto in 1921. On January 11, 1922, a 14-year-old boy became the first person to be injected with pancreatic extract; soon, refined insulin was keeping dying children alive. It was one of medicine's great moments, and it came with a condition that never went away: insulin is a protein, and stomach acid and digestive enzymes destroy proteins. It cannot be swallowed as a pill. It has to go in through the skin.</p>
<p>So for eight decades, insulin meant injections, often several a day. A typical intensive regimen has two parts. <b>[[basal insulin|Basal]]</b> (background) insulin, injected once or twice a day, covers the body's needs between meals and overnight. <b>[[mealtime insulin|Mealtime]]</b> insulin, injected just before each meal, handles the surge of sugar from food. That can mean four or more injections a day, every day, for life, plus finger-prick blood tests to decide the doses.</p>
<p>The technology improved steadily. Animal insulin gave way in 1982 to human insulin made by genetically engineered bacteria. <b>[[insulin analog|Insulin analogs]]</b>, with small changes to the protein that make them act faster or last longer, arrived with lispro (Humalog) in 1996 and the long-acting glargine ([[Lantus]]) in 2000. Syringes and vials gave way, from the late 1980s, to <b>[[insulin pen|insulin pens]]</b>: pocket-sized injectors with a dial and a very fine, short needle. Remember that last point. It matters later.</p>
<h3>Why needles really are a barrier (and why it is not just fear)</h3>
<p>People with type 2 diabetes often put off starting insulin for years. A study of more than 80,000 people in UK general practice found that, among patients whose blood sugar stayed above target on pills, the median time before they moved on to insulin was more than six years. Doctors call this delay clinical inertia, and it has real costs: every year of high blood sugar adds to the long-term damage.</p>
<p>It is tempting to blame the needle, and for a small group of people true [[needle phobia]] is a serious problem. But the German diabetes researcher Lutz Heinemann, who spent years running inhaled-insulin studies, argued that most patients discover a modern injection is nearly painless. In his view, "the psychological barrier most patients experience in reality is not needle phobia, but a fear of all the other aspects of insulin therapy," such as weight gain and the risk of [[hypoglycemia|dangerously low blood sugar]]. Starting insulin also feels like a verdict: your disease has got worse.</p>
<p>That distinction turned out to be crucial. The case for Exubera assumed that the needle was the main thing standing between patients and insulin. Remove the needle, the reasoning went, and patients would start insulin earlier and use it more willingly. If the needle was only part of the barrier, and a shrinking part as pens got better, the case was weaker than it looked.</p>
<h3>The oldest dream in diabetes care</h3>
<p>Needle-free insulin is almost as old as insulin itself. In 1924 and 1925, German researchers, led by the physician Gänsslen, tried spraying insulin into the airways of people with diabetes with a glass nebulizer. It lowered blood sugar, but by later accounts only about 3% of the dose seemed to reach the bloodstream; most stuck in the mouth and throat. At a time when insulin had to be extracted from animal pancreases and was expensive, wasting 97% of it was not an option. The idea waited sixty years for two things: cheap, pure human insulin from biotechnology, and a way to turn a fragile protein into particles small enough to reach the deepest part of the lung.</p>`},

    {type: 'figure', title: 'How the body handles sugar, and where injected insulin comes in', intro: 'Hover or tap each labeled part. The same colors are used through the rest of the case: insulin in yellow when the body makes it, blue when it is a medicine.',
      svg: `<svg viewBox="0 0 900 430" role="img" aria-label="Diagram of pancreas, liver, bloodstream, muscle cell and an injection under the skin">
        <g data-part="beta">
          <path d="M40 110 C60 60 160 50 230 70 C280 84 300 110 280 135 C250 165 150 160 90 150 C55 144 32 132 40 110 Z" class="il-2s il-line2"/>
          <circle cx="110" cy="105" r="11" class="il-2"/><circle cx="170" cy="92" r="9" class="il-2"/><circle cx="220" cy="115" r="10" class="il-2"/>
          <text x="60" y="40" class="il-title">Pancreas</text>
          <text x="40" y="182" class="il-text-2">beta cells (orange) make insulin</text>
        </g>
        <g data-part="liver">
          <path d="M340 70 C380 40 490 40 520 70 C540 95 520 140 470 150 C420 160 360 150 340 120 C330 105 330 85 340 70 Z" class="il-5s il-line2"/>
          <text x="392" y="102" class="il-title">Liver</text>
          <text x="352" y="124" class="il-text-2">stores and releases sugar</text>
        </g>
        <g data-part="cell">
          <rect x="590" y="36" width="280" height="130" rx="40" class="il-3s il-line2"/>
          <text x="630" y="78" class="il-title">Muscle or fat cell</text>
          <text x="630" y="100" class="il-text-2">takes in sugar only when</text>
          <text x="630" y="118" class="il-text-2">insulin docks on its receptor</text>
          <rect x="650" y="150" width="12" height="30" rx="4" class="il-6"/><rect x="730" y="150" width="12" height="30" rx="4" class="il-6"/><rect x="810" y="150" width="12" height="30" rx="4" class="il-6"/>
        </g>
        <g data-part="blood">
          <rect x="30" y="210" width="840" height="64" rx="32" class="il-7s il-line"/>
          <circle cx="100" cy="242" r="8" class="il-paper il-line"/><circle cx="170" cy="232" r="8" class="il-paper il-line"/><circle cx="240" cy="252" r="8" class="il-paper il-line"/><circle cx="330" cy="236" r="8" class="il-paper il-line"/><circle cx="420" cy="250" r="8" class="il-paper il-line"/><circle cx="520" cy="234" r="8" class="il-paper il-line"/><circle cx="610" cy="248" r="8" class="il-paper il-line"/><circle cx="700" cy="236" r="8" class="il-paper il-line"/><circle cx="790" cy="250" r="8" class="il-paper il-line"/>
          <circle cx="140" cy="254" r="5" class="il-4"/><circle cx="290" cy="228" r="5" class="il-4"/><circle cx="470" cy="256" r="5" class="il-4"/><circle cx="660" cy="228" r="5" class="il-4"/><circle cx="750" cy="256" r="5" class="il-4"/>
          <text x="520" y="298" class="il-text-2">Bloodstream: sugar (white) and insulin (yellow)</text>
        </g>
        <path d="M272 140 V206" class="il-line2 flow" fill="none"/>
        <path d="M430 152 V206" class="il-line2 flow" fill="none"/>
        <path d="M736 206 V184" class="il-line2 flow" fill="none"/>
        <g data-part="skin">
          <rect x="30" y="330" width="480" height="18" rx="4" class="il-2s"/>
          <rect x="30" y="348" width="480" height="62" rx="4" class="il-4s"/>
          <text x="330" y="344" class="il-small">skin</text><text x="330" y="386" class="il-text-2">fat layer</text>
          <ellipse cx="190" cy="378" rx="30" ry="14" class="il-1"/>
          <path d="M130 300 L182 366" class="il-line2" stroke-linecap="round"/>
          <rect x="96" y="276" width="46" height="20" rx="6" transform="rotate(52 119 286)" class="il-2"/>
          <path d="M220 372 C260 350 280 320 300 290" class="st-1 flow" stroke-width="2.5" fill="none"/>
          <text x="40" y="424" class="il-text-2">Injected insulin forms a small depot under the skin and seeps into the blood</text>
        </g>
        <g data-part="hba1c">
          <rect x="560" y="316" width="310" height="96" rx="14" class="il-paper il-line"/>
          <text x="578" y="344" class="il-title">HbA1c: the report card</text>
          <text x="578" y="368" class="il-text-2">average blood sugar over 2–3 months;</text>
          <text x="578" y="388" class="il-text-2">trials of Exubera measured success here</text>
        </g>
      </svg>`,
      hotspots: {
        beta: {title: 'Pancreas and beta cells', text: 'Beta cells sense rising blood sugar and release insulin. In [[type 1 diabetes]] the immune system destroys them. In [[type 2 diabetes]] they keep working but cannot keep up, because the body responds poorly to insulin.'},
        liver: {title: 'Liver', text: 'The liver stores sugar and releases it between meals. Insulin tells it to stop releasing sugar, which is one reason [[basal insulin]] matters even when you are not eating.'},
        cell: {title: 'Muscle and fat cells', text: 'Insulin docks on the insulin [[receptor]] (purple bars) and glucose can then enter the cell. Without insulin, sugar piles up in the blood while the cells starve.'},
        blood: {title: 'The bloodstream', text: 'Blood carries glucose from food and insulin from the pancreas. Too much sugar for years damages blood vessels in the eyes, kidneys, nerves and heart. Too much insulin causes [[hypoglycemia]].'},
        skin: {title: 'The injection', text: 'Because insulin is a [[protein]] that the gut would digest, it has been injected into the fat under the skin since 1922. By the 2000s most injections were given with [[insulin pen|pens]] and very fine needles.'},
        hba1c: {title: 'HbA1c', text: 'The standard measure of diabetes control. Exubera\'s trials asked whether inhaled insulin kept [[HbA1c]] about as low as injected insulin. It did.'},
      },
      caption: 'Schematic. In people without diabetes, insulin release rises and falls with every meal. People who need insulin try to copy that pattern with injections.'},

    {type: 'figure', title: 'A day of insulin: what Exubera could and could not replace', intro: 'A schematic day for someone on an intensive insulin regimen. Tap the parts to see which injections an inhaler could remove.',
      svg: `<svg viewBox="0 0 900 380" role="img" aria-label="Schematic 24-hour insulin profile with basal background and three mealtime peaks">
        <line x1="70" y1="300" x2="870" y2="300" class="il-line"/>
        <text x="70" y="324" class="il-small" text-anchor="middle">6 am</text><text x="203" y="324" class="il-small" text-anchor="middle">10 am</text><text x="337" y="324" class="il-small" text-anchor="middle">2 pm</text><text x="470" y="324" class="il-small" text-anchor="middle">6 pm</text><text x="603" y="324" class="il-small" text-anchor="middle">10 pm</text><text x="737" y="324" class="il-small" text-anchor="middle">2 am</text><text x="870" y="324" class="il-small" text-anchor="middle">6 am</text>
        <text x="30" y="200" class="il-text-2" transform="rotate(-90 30 200)" text-anchor="middle">insulin in the blood</text>
        <g data-part="basal">
          <rect x="70" y="252" width="800" height="48" class="il-3s"/>
          <path d="M70 252 H870" class="st-3" stroke-width="2.5"/>
          <text x="440" y="282" class="il-text">Basal (background) insulin: one or two injections a day</text>
        </g>
        <g data-part="meals">
          <path d="M120 252 C150 252 160 120 185 120 C215 120 230 252 270 252 Z" class="il-1s st-1" stroke-width="2.5"/>
          <path d="M290 252 C320 252 330 110 355 110 C385 110 400 252 440 252 Z" class="il-1s st-1" stroke-width="2.5"/>
          <path d="M470 252 C500 252 510 100 535 100 C565 100 580 252 620 252 Z" class="il-1s st-1" stroke-width="2.5"/>
          <text x="165" y="110" class="il-text-2">breakfast</text><text x="340" y="100" class="il-text-2">lunch</text><text x="515" y="90" class="il-text-2">dinner</text>
        </g>
        <g data-part="exu">
          <path d="M120 70 H620" class="st-1" stroke-width="2"/><path d="M120 64 V78 M620 64 V78" class="st-1" stroke-width="2"/>
          <text x="370" y="56" class="il-text" text-anchor="middle">Mealtime insulin: the only part Exubera could replace</text>
        </g>
        <g data-part="night">
          <rect x="640" y="120" width="220" height="110" rx="12" class="il-paper il-line"/>
          <text x="656" y="146" class="il-text">Still injected with Exubera:</text>
          <text x="656" y="168" class="il-text-2">the long-acting basal dose.</text>
          <text x="656" y="190" class="il-text-2">Type 2 patients usually start</text>
          <text x="656" y="210" class="il-text-2">with long-acting insulin.</text>
        </g>
      </svg>`,
      hotspots: {
        basal: {title: 'Basal insulin', text: 'Long-acting background insulin, such as [[NPH]] or [[Lantus]], injected once or twice a day. Exubera was a short-acting insulin, so patients with type 1 diabetes still had to inject basal insulin. The FDA-approved label said so.'},
        meals: {title: 'Mealtime peaks', text: 'Short-acting insulin taken before each meal. Inhaled Exubera reached its peak in the blood in about 49 minutes, against about 105 minutes for injected [[regular insulin]], so it suited mealtimes well.'},
        exu: {title: 'What the inhaler removed', text: 'For a type 1 patient on four injections a day, Exubera could remove three. For many type 2 patients, whose insulin journey starts with a single basal injection, it removed none of the first step.'},
        night: {title: 'The catch', text: 'Novo Nordisk\'s chief executive later noted that people with type 2 diabetes generally start insulin with long-acting or premixed insulin. An inhaled mealtime insulin did not address the moment most patients first confront a needle.'},
      },
      caption: 'Schematic shapes, not measured data. Peak timing from the Exubera US label (2006); regimen description from the label and Novo Nordisk\'s January 2008 statement.'},

    // ---------------- 3. KEY INSIGHT ----------------
    {type: 'story', kicker: 'The key insight', title: 'The lung as a front door', tocTitle: 'The key insight', html: `
<p>John Patton spent the late 1980s running the drug delivery group at Genentech, the pioneering biotech company in South San Francisco. His problem was one the whole industry shared. Biotechnology could now make protein medicines, such as insulin and growth hormone, in large amounts. But proteins are big, fragile molecules. The gut digests them and the skin blocks them, so they have to be injected.</p>
<p>Patton looked at the lung. It is built to move gas between air and blood, and to do that it has an enormous, delicate internal surface. The airways branch again and again, like the roots of a tree, and end in grape-like clusters of tiny air sacs called <b>[[alveoli]]</b>. A careful count published in 2004 found an average of about 480 million of them in an adult lung. In the alveoli, the wall between air and blood is only a cell or two thick. Small proteins that land there can slip through into the bloodstream.</p>
<p>The obstacle was getting them there. The lung has spent millions of years evolving to keep particles out. Anything too large crashes into the back of the throat or the walls of the upper airways and is swallowed or coughed up; that is what defeated Gänsslen's nebulizer in the 1920s. The sweet spot for reaching the deep lung is particles between about 1 and 5 <b>[[micron|microns]]</b> across, a few percent of the width of a human hair. Even smaller particles tend to be breathed straight back out.</p>
<p>In 1990 Patton and Bob Platz co-founded Inhale Therapeutic Systems in San Carlos, California. Platz brought the crucial trick: a spray-drying process, adapted from techniques used to make powdered foods, that turned protein solutions into a dry, glassy powder that stayed stable at room temperature. Inhale's filings described fine dry powders "with particle aerosol diameters of between one and five microns without significant drug degradation." Dry powder had big advantages over a liquid spray. It did not need refrigeration, and a measured dose could be sealed in a foil blister.</p>
<p>The powder was only half of the problem. A normal breath cannot break up a clump of fine powder into a cloud of separate particles. So Inhale built a device that did it mechanically: the patient pumped a handle to store compressed air, and a button released it in a burst that shattered the powder into an <b>[[aerosol]]</b> inside a clear holding chamber. The patient then breathed the standing cloud in slowly, so the particles could travel deep into the lung instead of slamming into the throat.</p>
<p>In January 1995 Inhale signed a collaboration with Pfizer to develop an inhaled version of insulin. Pfizer would run the clinical trials and sell the product; Inhale would make the powder and supply the inhalers and earn a royalty. In November 1998 Pfizer brought in a third partner, the German drugmaker that would soon become part of Aventis, to co-develop and co-promote the product and to build a jointly owned insulin factory in Frankfurt. The partners said they planned to invest more than $160 million in the plant.</p>
<p>There was one fact about the lung that would matter enormously later, and it was known from the start. Much of any inhaled dose never makes it into the blood: some stays in the blister, some in the device, some lands in the mouth and throat, some is breathed out. Heinemann estimated the effective <b>[[bioavailability]]</b> of inhaled insulin "in the range of 10 to 20%," which meant using "at least a fivefold higher amount of insulin" to get the same effect as an injection. Insulin was cheap enough by the 1990s that this looked manageable. It was also a permanent cost disadvantage built into the product.</p>`},

    {type: 'mechanism', title: 'From blister to bloodstream', intro: 'Step through how a puff of powder becomes insulin in the blood. Use the arrows or the ← → keys.',
      svg: `<svg viewBox="0 0 760 440" class="exm" role="img" aria-label="Inhaler, airway tree, alveolus and capillary">
        <style>.exm .il-text-2{font-size:16px}.exm .il-text{font-size:17px}.exm .il-title{font-size:19px}</style>
        <g data-part="device">
          <rect x="52" y="52" width="40" height="26" rx="6" class="il-8s il-line"/>
          <rect x="28" y="76" width="88" height="170" rx="20" class="il-paper il-line2"/>
          <rect x="24" y="244" width="96" height="84" rx="14" class="il-8s il-line2"/>
          <circle cx="72" cy="274" r="9" class="il-1"/>
          <rect x="120" y="254" width="10" height="60" rx="4" class="il-8"/>
          <text x="20" y="352" class="il-text">Exubera inhaler</text>
        <g data-part="cloud">
          <circle cx="52" cy="120" r="6" class="il-1"/><circle cx="80" cy="108" r="4" class="il-1"/><circle cx="92" cy="140" r="7" class="il-1"/><circle cx="60" cy="160" r="4" class="il-1"/><circle cx="84" cy="182" r="5" class="il-1"/><circle cx="50" cy="206" r="6" class="il-1"/><circle cx="96" cy="214" r="4" class="il-1"/><circle cx="70" cy="226" r="3" class="il-1"/>
          <text x="134" y="140" class="il-text-2">powder cloud</text>
          <text x="134" y="160" class="il-text-2">in the chamber</text>
        </g>
        </g>
        <g data-part="airway">
          <path d="M96 62 H214 C232 62 240 72 240 90 V206" fill="none" style="stroke:var(--il-7s)" stroke-width="30" stroke-linecap="round"/>
          <path d="M240 206 C240 240 214 262 190 300 C176 322 168 346 164 372" fill="none" style="stroke:var(--il-7s)" stroke-width="20" stroke-linecap="round"/>
          <path d="M240 206 C240 240 270 262 296 296 C312 318 322 340 330 366" fill="none" style="stroke:var(--il-7s)" stroke-width="20" stroke-linecap="round"/>
          <path d="M190 300 C200 320 214 334 226 350" fill="none" style="stroke:var(--il-7s)" stroke-width="12" stroke-linecap="round"/>
          <path d="M296 296 C286 320 280 340 276 360" fill="none" style="stroke:var(--il-7s)" stroke-width="12" stroke-linecap="round"/>
          <text x="252" y="100" class="il-text-2">throat and windpipe</text>
          <text x="252" y="222" class="il-text-2">airways branch</text><text x="252" y="242" class="il-text-2">again and again</text>
        </g>
        <g data-part="big">
          <circle cx="112" cy="58" r="8" class="il-2"/><circle cx="124" cy="70" r="7" class="il-2"/><circle cx="108" cy="72" r="6" class="il-2"/>
        </g>
        <g data-part="bigtext"><text x="150" y="28" class="il-text">Too big (over ~5 microns): hits the throat</text></g>
        <g data-part="flow">
          <path d="M100 62 H212 C228 62 240 74 240 92 V206 C240 240 270 262 296 296 C312 318 322 340 330 366" fill="none" class="st-1 flow" stroke-width="3"/>
        </g>
        <g data-part="small">
          <circle cx="326" cy="372" r="4" class="il-1"/><circle cx="334" cy="364" r="3.5" class="il-1"/><circle cx="168" cy="374" r="3.5" class="il-1"/><circle cx="228" cy="354" r="3" class="il-1"/><circle cx="278" cy="362" r="3" class="il-1"/>
          <text x="20" y="410" class="il-text">1–5 microns: reaches the deep lung</text>
        </g>
        <g data-part="zoom">
          <path d="M340 372 L420 330" class="il-line il-dash" fill="none"/>
          <circle cx="570" cy="220" r="166" class="il-paper il-line2"/>
          <circle cx="520" cy="180" r="58" class="il-3s il-line"/>
          <circle cx="612" cy="160" r="50" class="il-3s il-line"/>
          <circle cx="600" cy="262" r="56" class="il-3s il-line"/>
          <path d="M430 120 C480 110 500 250 560 330 C600 380 680 350 700 300" fill="none" style="stroke:var(--il-7s)" stroke-width="26" stroke-linecap="round"/>
          <text x="470" y="72" class="il-title">Inside the deep lung</text>
          <text x="492" y="184" class="il-text-2">air sac</text>
          <text x="588" y="160" class="il-text-2">air sac</text>
          <text x="632" y="330" class="il-text-2">capillary</text>
        </g>
        <g data-part="landed">
          <circle cx="552" cy="206" r="6" class="il-1"/><circle cx="580" cy="236" r="5" class="il-1"/><circle cx="560" cy="290" r="6" class="il-1"/>
        </g>
        <g data-part="landedtxt"><text x="420" y="412" class="il-text-2">powder dissolves in the fluid lining the sac</text></g>
        <g data-part="absorb">
          <circle cx="540" cy="306" r="4" class="il-1"/><circle cx="566" cy="330" r="4" class="il-1"/><circle cx="598" cy="344" r="4" class="il-1"/><circle cx="640" cy="342" r="4" class="il-1"/>
          <circle cx="520" cy="280" r="7" class="il-7"/><circle cx="620" cy="350" r="7" class="il-7"/>
        </g>
        <g data-part="absorbtxt"><text x="420" y="434" class="il-text-2">insulin crosses into the capillary blood</text></g>
        <g data-part="timing">
          <rect x="16" y="358" width="450" height="78" rx="10" class="il-paper il-line"/>
          <text x="28" y="380" class="il-text-2">Time to peak insulin level (label averages)</text>
          <rect x="28" y="391" width="74" height="12" rx="4" class="il-1"/><text x="112" y="403" class="il-text-2">inhaled: 49 min</text>
          <rect x="28" y="413" width="158" height="12" rx="4" class="il-2"/><text x="196" y="425" class="il-text-2">injected regular: 105 min</text>
        </g>
        <g data-part="loss">
          <rect x="16" y="358" width="450" height="78" rx="10" class="il-paper il-line"/>
          <text x="28" y="390" class="il-text">Only about 10–20% of the insulin does its job</text>
          <text x="28" y="416" class="il-text-2">so each dose needs roughly 5x more insulin</text>
        </g>
      </svg>`,
      steps: [
        {title: 'A blister becomes a cloud', text: 'The patient drops a foil blister of powder into the inhaler, pumps the handle and presses the button. The blister is pierced and a burst of air shatters the powder into a cloud that hangs in the clear chamber. The label notes that up to 45% of a 1 mg blister\'s contents can stay behind in the blister.', show: ['device', 'cloud'], focus: ['cloud'], pulse: ['cloud'], move: {device: 'translate(170px, 40px) scale(1.5)'}},
        {title: 'A slow, deep breath', text: 'The patient breathes the cloud in through the mouthpiece. A slow breath matters: fast air carries particles straight into the walls of the throat.', show: ['device', 'cloud', 'airway', 'big', 'flow'], dim: ['cloud']},
        {title: 'Big particles crash early', text: 'Particles much bigger than about 5 [[micron|microns]] cannot follow the bends of the airway. They slam into the back of the throat and are swallowed, where the gut digests the insulin. This is why 1920s nebulizers delivered only a few percent of the dose.', show: ['device', 'airway', 'big', 'bigtext'], dim: ['cloud'], focus: ['big'], move: {big: 'translate(118px, 14px)'}},
        {title: 'Small particles go deep', text: 'Particles between about 1 and 5 microns ride the airflow through branch after branch of ever-narrower airways, down to the deepest part of the lung. Getting insulin into this size range, without damaging the protein, was Inhale\'s core engineering achievement.', show: ['device', 'airway', 'big', 'flow', 'small'], dim: ['device', 'big'], focus: ['small'], pulse: ['flow'], move: {big: 'translate(118px, 14px)'}},
        {title: 'Into the air sacs', text: 'The airways end in clusters of tiny air sacs, the [[alveoli]]. An adult lung has roughly 480 million of them. Their walls are so thin that oxygen crosses in a fraction of a second, and small proteins such as insulin can cross too.', show: ['airway', 'small', 'zoom', 'landed', 'landedtxt'], dim: ['airway', 'small'], focus: ['zoom']},
        {title: 'Dissolve and cross into the blood', text: 'The powder dissolves in the thin layer of fluid lining the air sac. Insulin molecules pass through the wall into the capillaries wrapped around each sac, and the bloodstream carries them to muscle, fat and liver.', show: ['airway', 'small', 'zoom', 'landed', 'absorb', 'absorbtxt'], dim: ['airway', 'small', 'landed'], focus: ['absorb'], move: {absorb: 'translate(6px, 6px)'}},
        {title: 'Faster than a shot', text: 'Because the lung absorbs quickly, inhaled insulin started lowering blood sugar within 10–20 minutes in healthy volunteers and peaked in the blood at about 49 minutes, against about 105 minutes for injected [[regular insulin]]. That suited mealtimes: the label said to inhale no more than 10 minutes before eating. It also meant nothing here could replace long-acting basal insulin.', show: ['zoom', 'absorb', 'timing'], dim: ['zoom'], focus: ['timing']},
        {title: 'The hidden cost: most of it is lost', text: 'Only a minority of the insulin in the blister ends up working in the body. Heinemann put the effective [[bioavailability]] at about 10–20%, so each dose needs roughly five times more insulin than an injection. Absorption also varied: in smokers, exposure was 2 to 5 times higher, which is one reason smokers were excluded.', show: ['device', 'airway', 'zoom', 'loss'], dim: ['device', 'airway', 'zoom'], focus: ['loss']},
      ]},

    // ---------------- 4. THE DEVICE ----------------
    {type: 'figure', title: 'The device in your hand', intro: 'Exubera was a system: powder blisters, an inhaler with replaceable parts, and a new unit of dose. Tap each part. Proportions are approximate.',
      svg: `<svg viewBox="0 0 900 430" role="img" aria-label="Exubera inhaler, blister cards and an insulin pen compared">
        <path d="M60 42 V386" class="il-line"/><path d="M52 42 H68 M52 386 H68" class="il-line"/>
        <text x="44" y="220" class="il-text-2" text-anchor="middle" transform="rotate(-90 44 220)">about flashlight-size, longer when extended</text>
        <g data-part="mouth"><rect x="128" y="40" width="44" height="34" rx="8" class="il-8s il-line2"/><text x="182" y="60" class="il-text-2">mouthpiece</text></g>
        <g data-part="chamber">
          <rect x="98" y="72" width="104" height="180" rx="32" class="il-paper il-line2"/>
          <circle cx="126" cy="120" r="6" class="il-1"/><circle cx="160" cy="110" r="4" class="il-1"/><circle cx="174" cy="146" r="7" class="il-1"/><circle cx="130" cy="170" r="4" class="il-1"/><circle cx="160" cy="196" r="5" class="il-1"/><circle cx="122" cy="222" r="5" class="il-1"/>
          <text x="212" y="150" class="il-text-2">clear chamber</text>
        </g>
        <g data-part="release"><rect x="106" y="252" width="88" height="16" rx="4" class="il-4s il-line"/><text x="212" y="264" class="il-text-2">release unit</text></g>
        <g data-part="base">
          <rect x="90" y="268" width="120" height="118" rx="16" class="il-8s il-line2"/>
          <rect x="112" y="350" width="76" height="14" rx="3" class="il-paper il-line"/>
          <text x="92" y="410" class="il-text-2">base (blister slot)</text>
        </g>
        <g data-part="handle"><rect x="210" y="282" width="16" height="92" rx="6" class="il-8 il-line"/><text x="234" y="330" class="il-text-2">pump handle</text></g>
        <g data-part="button"><circle cx="150" cy="306" r="14" class="il-1"/><text x="234" y="302" class="il-text-2">button</text><path d="M166 304 H228" class="il-line il-dash"/></g>
        <g data-part="b1">
          <rect x="360" y="96" width="130" height="100" rx="10" class="il-3s il-line2"/>
          <circle cx="392" cy="128" r="11" class="il-paper il-line"/><circle cx="425" cy="128" r="11" class="il-paper il-line"/><circle cx="458" cy="128" r="11" class="il-paper il-line"/>
          <circle cx="392" cy="164" r="11" class="il-paper il-line"/><circle cx="425" cy="164" r="11" class="il-paper il-line"/><circle cx="458" cy="164" r="11" class="il-paper il-line"/>
          <rect x="370" y="104" width="4" height="84" rx="2" class="il-3"/>
          <text x="362" y="222" class="il-text">1 mg blister</text><text x="362" y="242" class="il-text-2">≈ 3 units</text>
        </g>
        <g data-part="b3">
          <rect x="520" y="96" width="130" height="100" rx="10" class="il-1s il-line2"/>
          <circle cx="566" cy="128" r="11" class="il-paper il-line"/><circle cx="598" cy="128" r="11" class="il-paper il-line"/><circle cx="630" cy="128" r="11" class="il-paper il-line"/>
          <circle cx="566" cy="164" r="11" class="il-paper il-line"/><circle cx="598" cy="164" r="11" class="il-paper il-line"/><circle cx="630" cy="164" r="11" class="il-paper il-line"/>
          <rect x="526" y="104" width="4" height="84" rx="2" class="il-1"/><rect x="533" y="104" width="4" height="84" rx="2" class="il-1"/><rect x="540" y="104" width="4" height="84" rx="2" class="il-1"/>
          <text x="522" y="222" class="il-text">3 mg blister</text><text x="522" y="242" class="il-text-2">≈ 8 units (not 9)</text>
        </g>
        <text x="360" y="290" class="il-text-2">Three 1 mg blisters give about 30–40% more insulin</text>
        <text x="360" y="310" class="il-text-2">in the blood than one 3 mg blister. Do not swap them.</text>
        <g data-part="pen">
          <rect x="746" y="120" width="30" height="220" rx="12" class="il-2s il-line2"/>
          <rect x="746" y="296" width="30" height="44" rx="8" class="il-2"/>
          <rect x="752" y="92" width="18" height="30" rx="6" class="il-8s il-line"/>
          <path d="M761 92 V76" class="il-line2" stroke-linecap="round"/>
          <text x="700" y="372" class="il-text">Insulin pen</text>
          <text x="700" y="392" class="il-text-2">fits in a pocket,</text>
          <text x="700" y="410" class="il-text-2">dialed in units</text>
        </g>
      </svg>`,
      hotspots: {
        mouth: {title: 'Mouthpiece', text: 'The patient seals their lips around it and breathes the cloud in slowly and deeply.'},
        chamber: {title: 'Clear chamber', text: 'The powder cloud hangs here for a moment so the patient can inhale it at an easy pace. The chamber is what made the device big: folded it was roughly the size of a flashlight, and it got longer when opened for use. Critics said it looked like a bong. Heinemann wrote that it "was simply too big and cumbersome to handle. If you inhaled with this inhaler, for example, in a restaurant, you can be sure to receive a lot of attention."'},
        release: {title: 'Release unit', text: 'A replaceable part that the label said should be changed every 2 weeks. The whole inhaler could be used for up to 1 year. A replacement chamber was sold separately.'},
        base: {title: 'Base and blister slot', text: 'Each blister is inserted into the base. A dose of 4 mg meant one 1 mg blister and one 3 mg blister, loaded and inhaled one after the other. Heinemann noted that larger doses could take "many seconds, maybe even minutes."'},
        handle: {title: 'Pump handle', text: 'Pumping stores compressed air. The American Family Physician review noted that the device required some hand strength.'},
        button: {title: 'Release button', text: 'Pressing it pierces the blister and releases the air burst that disperses the powder into the chamber.'},
        b1: {title: '1 mg blister (green print, one raised bar)', text: 'About 3 [[international unit|units]] of injected [[regular insulin]]. Six blisters per card; the raised bar lets patients with poor eyesight tell strengths apart by touch. Store at room temperature, away from humidity such as a steamy bathroom.'},
        b3: {title: '3 mg blister (blue print, three raised bars)', text: 'About 8 units, not 9. Three 1 mg blisters inhaled in a row gave roughly 30% higher peak levels and 40% more total insulin exposure than one 3 mg blister, so the label warned patients never to substitute them. If 3 mg blisters ran out, use two 1 mg blisters instead.'},
        pen: {title: 'The competition: an insulin pen', text: 'By 2006 many patients used pens. You screw on a fine needle, dial the dose in units, inject, and put the pen back in your pocket. Heinemann: an injection with a pen "takes a matter of seconds even with higher insulin doses."'},
      },
      caption: 'Sources: Exubera US prescribing information (2006); American Family Physician review (2007); Heinemann, J Diabetes Sci Technol (2008); Medical Design and Outsourcing. Colors and raised bars as described in the label.'},

    {type: 'custom', title: 'Milligrams in a world of units', intro: 'Your doctor has always told you your mealtime dose in units. Pick one, and see what it takes to deliver it with Exubera blisters. Then try the "ran out of 3 mg blisters" trap.',
      html: `<div class="card">
        <div style="display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin-bottom:10px">
          <label style="font-size:15px">Mealtime dose you are used to: <b id="exuU">12</b> units</label>
          <input type="range" id="exuDose" min="3" max="30" step="1" value="12" style="flex:1;min-width:200px;accent-color:var(--accent)">
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px">
          <button class="btn" id="exuTrap" aria-pressed="false">Scenario: you ran out of 3 mg blisters</button>
        </div>
        <div id="exuOut"></div>
      </div>`,
      init: (root, api) => {
        const map = {1: 3, 2: 6, 3: 8, 4: 11, 5: 14, 6: 16, 7: 19, 8: 22, 9: 24, 10: 27, 11: 30};
        const combo = mg => { const b = Math.floor(mg / 3); const a = mg - 3 * b; return {a, b}; };
        const blisterSvg = (a, b, trap) => {
          let s = '<svg viewBox="0 0 520 70" style="width:100%;max-width:520px;height:auto;display:block">'; let x = 10;
          for (let i = 0; i < a; i++) { s += '<rect x="' + x + '" y="10" width="44" height="44" rx="8" class="il-3s il-line"/><text x="' + (x + 22) + '" y="37" text-anchor="middle" class="il-text">1</text>'; x += 52; }
          for (let i = 0; i < b; i++) { s += '<rect x="' + x + '" y="10" width="44" height="44" rx="8" class="il-1s il-line"/><text x="' + (x + 22) + '" y="37" text-anchor="middle" class="il-text">3</text>'; x += 52; }
          if (!a && !b) s += '<text x="10" y="37" class="il-text-2">no blisters</text>';
          return s + '</svg>';
        };
        let trap = false;
        const dose = root.querySelector('#exuDose'), out = root.querySelector('#exuOut'), tb = root.querySelector('#exuTrap');
        const draw = () => {
          const u = +dose.value; root.querySelector('#exuU').textContent = u;
          let best = 1, bd = 99; Object.keys(map).forEach(k => { const d = Math.abs(map[k] - u); if (d < bd || (d === bd && map[k] < map[best])) { bd = d; best = +k; } });
          const c = combo(best), got = map[best];
          let html = '<p style="margin:0 0 6px">Closest Exubera dose: <b>' + best + ' mg</b>, which the label equates to about <b>' + got + ' units</b> of injected regular insulin' + (got !== u ? ' (' + (got > u ? got - u + ' more' : u - got + ' fewer') + ' than you asked for)' : '') + '.</p>';
          html += blisterSvg(c.a, c.b) + '<p class="caption" style="margin-top:4px">' + (c.a + c.b) + ' blister' + (c.a + c.b > 1 ? 's' : '') + ', each loaded, pumped, released and inhaled in turn. The label says to use the fewest blisters possible.</p>';
          if (trap && c.b > 0) {
            const wrongA = c.a + 3 * c.b, rightA = c.a + 2 * c.b;
            html += '<div style="margin-top:12px;padding:12px 14px;border-radius:10px;background:var(--loss-s)"><b>The trap.</b> The obvious move is ' + wrongA + ' one-milligram blisters, because ' + c.b + ' x 3 mg "equals" ' + (3 * c.b) + ' x 1 mg. It does not. In the label\'s study, three 1 mg blisters produced about <b>30% higher peak</b> insulin levels and <b>40% more total exposure</b> than one 3 mg blister: a real risk of [[hypoglycemia]]. The label\'s instruction is the counter-intuitive one: substitute <b>two</b> 1 mg blisters for each 3 mg blister, so ' + rightA + ' blisters in all, and check your blood sugar closely.</div>';
          } else if (trap) {
            html += '<div style="margin-top:12px;padding:12px 14px;border-radius:10px;background:var(--panel-2)">This dose uses only 1 mg blisters, so running out of 3 mg blisters does not matter. Try a dose of 8 units or more.</div>';
          }
          html += '<div style="margin-top:12px;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px">' +
            '<div style="padding:10px 12px;border:1px solid var(--rule);border-radius:10px"><b>With a pen</b><br>Dial ' + u + ' units. The pen is marked in units, so the dose you are told is the dose you take.</div>' +
            '<div style="padding:10px 12px;border:1px solid var(--rule);border-radius:10px"><b>With Exubera</b><br>Doses come in steps of about 3 units (3, 6, 8, 11, 14...). Converting needs a table, and 1 + 1 + 1 is not 3.</div></div>';
          out.innerHTML = api.terms(html);
        };
        dose.addEventListener('input', draw);
        tb.onclick = () => { trap = !trap; tb.setAttribute('aria-pressed', trap); tb.classList.toggle('primary', trap); draw(); };
        draw();
      }},

    {type: 'callout', variant: 'product', heading: 'Changing the unit of measure is a migration, not a detail', html: `<p>Imagine a billing product that switched from dollars to "credits," where 1 credit is worth about $3, a 3-credit bundle about $8, and three single credits somehow unlock 40% more usage than the bundle. Every customer would need a conversion table, and every mistake would land on support. At the 2005 advisory committee, endocrinologist Nelson Watts made the same point about Exubera: "doctors and patients using insulin think in terms of units," and "three blisters of 1 mg is more than one blister of 3 mg." Heinemann later wrote that dosing in milligrams was "a source of confusion and error for the nonexpert (= many general practitioners)."</p><p><b>Where the analogy breaks:</b> a billing error costs money and trust. An insulin dosing error can put someone in the emergency room with severe [[hypoglycemia]]. And the milligram labeling was not a UX choice you could A/B test after launch; it was tied to how the drug was measured, studied and approved.</p>`},

    // ---------------- 5. TIMELINE ----------------
    {type: 'timeline', title: 'Timeline: a century-old idea, a two-year product', tocTitle: 'Timeline', intro: 'Filter by category, or tap a pin on the strip to jump to an event.', events: [
      {year: 1990, title: 'Inhale Therapeutic Systems founded', kind: 'people', text: 'John Patton, formerly head of drug delivery at Genentech, and Bob Platz start the company in San Carlos, California.'},
      {year: 1995, date: 'Jan 1995', title: 'Pfizer partners with Inhale', kind: 'business', text: 'Pfizer will run the trials and sell inhaled insulin; Inhale will make the powder and inhalers and earn royalties.'},
      {year: 1998.45, date: 'Jun 1998', title: 'Phase 2 results: control matches injections', kind: 'clinical', text: 'In a three-month [[phase 2]] study, [[HbA1c]] with inhaled insulin is statistically equivalent to conventional injections in type 1 patients.'},
      {year: 1998.87, date: 'Nov 1998', title: 'The future Aventis joins; Frankfurt insulin plant planned', kind: 'business', text: 'A worldwide co-development and co-promotion deal, including a jointly owned insulin factory in Frankfurt (the Diabel joint venture).'},
      {year: 2000, title: 'Lantus (insulin glargine) approved', kind: 'regulatory', text: 'A once-daily long-acting insulin analog. It would become the incumbent that Exubera never displaced.'},
      {year: 2001.1, date: 'Feb 2001', title: 'Lancet proof-of-concept study', kind: 'clinical', text: 'In 73 type 1 patients over 12 weeks, HbA1c changes with inhaled mealtime insulin are indistinguishable from injections.'},
      {year: 2002.8, date: 'Oct 2002', title: 'Lung-function signal delays the filing', kind: 'setback', text: 'Phase 3 data show a small relative decrease in a lung-function test. Pfizer and Aventis decide to complete longer-term lung studies before filing.'},
      {year: 2003.04, date: 'Jan 2003', title: 'Inhale renames itself Nektar Therapeutics', kind: 'business'},
      {year: 2005.69, date: 'Sep 8, 2005', title: 'FDA advisory committee votes 7–2 to approve', kind: 'regulatory', text: 'The acting chair votes no "because of the issue of training." Members worry aloud about spirometry, milligram dosing and long-term lung safety.'},
      {year: 2006.03, date: 'Jan 13, 2006', title: 'Pfizer buys out Sanofi-Aventis for $1.3 billion', kind: 'business', text: 'Triggered by a [[change of control clause]] after Sanofi acquired Aventis. Includes Sanofi-Aventis\'s share of the Frankfurt plant.'},
      {year: 2006.06, date: 'Jan 24, 2006', title: 'European approval', kind: 'regulatory'},
      {year: 2006.07, date: 'Jan 27, 2006', title: 'FDA approval', kind: 'regulatory', text: 'The first new way of delivering insulin since the 1920s. Label requires lung testing and excludes smokers.'},
      {year: 2006.37, date: 'May–Sep 2006', title: 'Launch in Germany, Ireland, the UK and the US', kind: 'business', text: 'Supplies available across the US from September 2006.'},
      {year: 2006.95, date: 'Dec 2006', title: 'England\'s NICE says no to routine use', kind: 'regulatory', text: 'Only for patients with poor control who have diagnosed needle phobia or severe injection-site problems.'},
      {year: 2007.3, date: 'Apr 2007', title: 'Pfizer "disappointed with the slow acceptance"', kind: 'setback', text: 'New sales force, diabetes educators and a consumer ad campaign planned for mid-summer.'},
      {year: 2007.8, date: 'Oct 18, 2007', title: 'Pfizer exits Exubera; $2.8 billion charge', kind: 'setback', text: 'Sales in the first nine months of 2007: about $12 million.'},
      {year: 2007.86, date: 'Nov 9, 2007', title: 'Nektar and Pfizer part ways; $135 million payment', kind: 'business'},
      {year: 2008.04, date: 'Jan 2008', title: 'Novo Nordisk stops its inhaled insulin (AERx)', kind: 'setback', text: 'Cost about DKK 1.3 billion. Its CEO says inhaled mealtime insulin is unlikely to beat modern pens.'},
      {year: 2008.18, date: 'Mar 7, 2008', title: 'Lilly ends its AIR inhaled insulin', kind: 'setback'},
      {year: 2008.27, date: 'Apr 9, 2008', title: 'Lung cancer warning added; Nektar abandons inhaled insulin', kind: 'setback', text: '6 cases in Exubera-treated patients vs 1 in comparators, all former smokers.'},
      {year: 2008.99, date: 'Dec 31, 2008', title: 'Nektar sells its pulmonary business to Novartis for $115 million', kind: 'business'},
      {year: 2014.49, date: 'Jun 27, 2014', title: 'FDA approves MannKind\'s Afrezza', kind: 'regulatory', text: 'A second inhaled insulin, with a small inhaler and doses in units.'},
      {year: 2016, date: 'Jan 2016', title: 'Sanofi hands Afrezza back to MannKind', kind: 'setback', text: 'After 2015 sales of €7.0 million.'},
    ]},

    // ---------------- 6. DEVELOPMENT ----------------
    {type: 'story', kicker: 'What everyone believed, and why it was reasonable', title: 'Ten years, three companies, and a very big bet', tocTitle: 'Development', html: `
<p>It is easy, in hindsight, to call Exubera a folly. It did not look like one at the time, and it is worth understanding why intelligent people believed in it.</p>
<p>First, the need looked huge. Diabetes was growing fast, many type 2 patients were badly controlled, and doctors knew that patients delayed insulin for years. If even a slice of those patients started insulin earlier because they could inhale it, the medical and commercial prize was large. Second, the science kept working. Pfizer began a multi-site [[phase 2]] outpatient trial in October 1996; results announced in June 1998 showed [[HbA1c]] with inhaled insulin statistically equivalent to injections over three months, in both type 1 and type 2 patients. In February 2001, a randomized proof-of-concept study in <i>The Lancet</i>, led by Jay Skyler at the University of Miami, found that changes in HbA1c over 12 weeks were "indistinguishable between groups" in 73 people with type 1 diabetes, with no effect on lung function. Third, patients liked it. In trial after trial, treatment satisfaction was higher with inhaled insulin.</p>
<p>And there was the size of the partners. Pfizer was the largest drug company in the world, the maker of Lipitor, Viagra and Zoloft, with one of the industry's biggest sales forces. Aventis, an established insulin maker, added manufacturing know-how and a plan for a dedicated insulin plant. [[phase 3|Phase 3]] trials began in June 1999.</p>
<h3>The first warning: the lungs</h3>
<p>Then came the one scientific question that never fully went away. In December 2001 Pfizer said it would include more long-term, controlled safety data in its application. In May and June 2002, phase 3 results showed that Exubera controlled blood sugar as well as injections in type 1 diabetes, and better than pills alone in type 2 patients who had failed on oral drugs. But the data also showed "a small relative decrease in one of the pulmonary function tests" in the Exubera group. In October 2002 Pfizer and Aventis announced they would complete longer-term studies to find out whether it mattered clinically. The filing slipped by years.</p>
<p>The eventual answer was reassuring but not clean. Patients on Exubera lost slightly more lung function, measured by [[FEV1]] (how much air you can blow out in one second) and [[DLco]] (how easily gas crosses into the blood), than patients on injections. The difference appeared in the first few weeks and then stopped growing. After two years it amounted to roughly 40 milliliters of FEV1, a fraction of a typical breath, and in one type 2 study it disappeared within six weeks of stopping the drug. A two-year trial of 635 non-smoking type 2 patients, published in 2008, described "a small nonprogressive difference." Nobody could say with certainty what inhaling a growth-promoting hormone into the lungs every day for twenty or thirty years would do. That uncertainty would shape the label, and the label would shape the launch.</p>
<h3>The second warning: the product itself</h3>
<p>The other warnings were not scientific, and they were easier to discount. The inhaler was large. The dose came in milligrams. The drug replaced only mealtime insulin. And insulin itself was changing: long-acting analogs like [[Lantus]] and better pens were making injections simpler every year. Each of these was known inside the partnership. None of them was the kind of problem clinical trials are designed to measure, because trials measure whether a drug works in patients who have already agreed to use it.</p>`},

    {type: 'trial', title: 'The trial that proved it worked', intro: 'One of the pivotal phase 3 studies, in people with type 1 diabetes. Look at the design, predict the result, then see the numbers.',
      design: {name: 'Exubera Phase III, type 1 diabetes (Quattrin et al., 2004)', phase: 'Phase 3', blinding: 'Open-label', years: '6 months (published 2004)', n: 335,
        population: 'People with type 1 diabetes, randomized to inhaled or injected mealtime insulin',
        randomization: '1:1',
        arms: [{name: 'Inhaled insulin (Exubera)', desc: 'Inhaled before meals + bedtime Ultralente injection'}, {name: 'Conventional injections', desc: 'Regular + NPH insulin, 2–3 injections a day', control: true}],
        endpoint: 'Change in HbA1c over 24 weeks',
        details: {'Question': 'Is inhaled mealtime insulin about as good as injections (not better)?', 'Primary endpoint': 'Change in [[HbA1c]] from baseline to 24 weeks', 'Why open-label': 'You cannot disguise an inhaler as an injection, so everyone knew which treatment they were on.', 'Also measured': '[[hypoglycemia]], lung function ([[spirometry]], [[DLco]]), insulin antibodies, cough, treatment satisfaction'}},
      predict: {q: 'What do you think the trial showed?', options: [
        'Inhaled insulin lowered HbA1c clearly more than injections, because patients took their doses more reliably',
        'Blood sugar control was roughly the same, with more cough and higher satisfaction in the inhaled group',
        'Inhaled insulin was clearly worse, because so much of each dose was lost in the lung',
        'Lung function fell so much that the trial was stopped early'],
        answer: 1,
        explain: 'HbA1c fell from 8.1% to 7.9% with inhaled insulin and from 8.1% to 7.7% with injections: an adjusted difference of 0.16 percentage points, close enough to count as comparable. Mild to moderate cough was more common with inhaled insulin (27% vs 5%) but faded over time, lung tests were similar apart from a greater fall in [[DLco]], and treatment satisfaction was higher in the inhaled group. That is a successful trial of a convenience product: it proves "as good as," not "better than."'},
      results: [
        {kind: 'bar', title: 'Fall in HbA1c over 24 weeks (percentage points)', subtitle: 'Higher bar = bigger improvement', unit: '', categories: ['Inhaled insulin (Exubera)', 'Conventional injections'], series: [{name: 'HbA1c reduction', values: [0.2, 0.4], notes: ['8.1% to 7.9%', '8.1% to 7.7%']}], colorByCategory: true},
        {kind: 'bar', title: 'Patients reporting cough', unit: '%', categories: ['Inhaled insulin (Exubera)', 'Conventional injections'], series: [{name: 'Cough', values: [27, 5]}], colorByCategory: true, note: 'Source: Quattrin T et al., Diabetes Care 2004;27:2622–7 (abstract). Adjusted treatment difference in HbA1c 0.16% (95% CI −0.01 to 0.32).'}],
      takeaway: 'The trial answered the regulator\'s question (does it work and is it reasonably safe?) with a clear yes. It could not answer the market\'s question: will doctors, payers and patients choose it over a pen, at a higher price, with lung tests attached?'},

    {type: 'chart', title: 'The lung signal in the label', intro: 'Pooled numbers from the controlled phase 2 and 3 studies, as printed in the 2006 US label. The differences are small, but every one points the same way.',
      chart: {kind: 'bar', title: 'Respiratory findings: Exubera vs injected insulin comparator', unit: '%', categories: ['Cough (type 1)', 'Cough (type 2)', 'DLco fell 20% or more', 'FEV1 fell 20% or more'],
        series: [{name: 'Exubera', values: [29.5, 21.9, 5.1, 1.5]}, {name: 'Injected insulin', values: [8.8, 10.2, 3.6, 1.3], color: 2}],
        note: 'Source: Exubera US prescribing information, January 2006 (Table 6 and Pulmonary Function sections). Lung-function rows are pooled across type 1 and type 2 trials of up to two years. Cough "tended to occur within seconds to minutes after" inhalation and was mostly mild; 1.2% of patients stopped because of it.'},
      takeaway: 'The regulator\'s reading: a real but small, non-progressive effect, acceptable with monitoring. The doctor\'s reading: a new drug that needs a lung test before I can prescribe it.'},

    // ---------------- 7. REGULATORS ----------------
    {type: 'story', kicker: 'The regulators', title: 'Approved, with homework', tocTitle: 'Regulators and the label', html: `
<p>The September 2005 advisory committee is a remarkable document to read now, because almost every commercial problem Exubera would face was raised in it, by people with no stake in the commercial outcome.</p>
<p>The committee agreed that Exubera lowered blood sugar, and was unanimous that there were enough data to assess its lung safety in people without lung disease. It split 5 to 4 against the idea that there were enough data for people with lung disease such as asthma or [[COPD]]. Karen Schell, a respiratory therapist, worried about whether ordinary doctors' offices could perform [[spirometry]] properly: "It is very patient dependent, also upon the practitioner doing it." Dr. James Stoller, a lung specialist, asked the FDA and Pfizer to decide in advance "at what incidence of excess lung cancer does one say there is potential causality," given that the company planned to look for rare cancers after approval. Three years later that question would stop being hypothetical.</p>
<p>On January 27, 2006, the FDA approved Exubera for adults with type 1 and type 2 diabetes. "Until today, patients with diabetes who need insulin to manage their disease had only one way to treat their condition," said Dr. Steven Galson, director of the FDA's Center for Drug Evaluation and Research. "It is our hope that the availability of inhaled insulin will offer patients more options to better control their blood sugars." The European Commission approved it the same week, on January 24 according to the European Medicines Agency, for type 2 patients not adequately controlled on pills and as an add-on to longer-acting insulin in type 1.</p>
<p>The US [[label]] came with conditions that turned a prescription into a small project:</p>
<ul>
<li><b>Lung test first.</b> "All patients should have spirometry (FEV1) assessed prior to initiating therapy." Testing of [[DLco]] "should be considered."</li>
<li><b>Lung tests forever.</b> Spirometry again after 6 months, and every year after that, "even in the absence of pulmonary symptoms." A confirmed fall of 20% or more in FEV1 meant stopping.</li>
<li><b>No smokers.</b> Contraindicated in anyone who smoked or had quit less than 6 months earlier, because smokers absorbed 2 to 5 times more insulin. Anyone who started smoking again had to stop Exubera immediately.</li>
<li><b>Not for lung disease.</b> Not recommended in asthma or COPD, or in anyone whose lung function was below 70% of predicted.</li>
<li><b>Mealtime only.</b> In type 1 diabetes, it had to be combined with a longer-acting injected insulin.</li>
<li><b>A Medication Guide</b>, the FDA-approved patient handout, with every prescription, and a company commitment to long-term safety studies after launch.</li>
</ul>
<p>None of this was unreasonable. It was the regulator doing its job: approving a useful option while managing an uncertain long-term risk. But each condition landed on someone. The lung test landed on the doctor, most of whom were primary-care physicians without a spirometer. The smoking exclusion ruled out every current smoker and recent quitter. The basal-insulin requirement meant type 1 patients were not freed from needles, only from some of them. For a product whose entire value was convenience, the label subtracted convenience before the first box was sold.</p>`},

    {type: 'table', title: 'The label, translated into work', intro: 'What each condition meant for the people who had to act on it.', columns: ['Label condition', 'Who carries it', 'What it cost them'],
      rows: [
        ['[[spirometry|Spirometry]] before starting', 'Prescribing doctor', 'A lung-function test many primary-care offices could not do in-house: a referral, an extra visit or new equipment and training.'],
        ['Repeat spirometry at 6 months, then yearly', 'Doctor and patient', 'An ongoing monitoring burden for a drug whose selling point was simplicity.'],
        ['No smokers, or quit less than 6 months', 'Doctor', 'A screening conversation, and every current smoker or recent quitter excluded.'],
        ['Not for asthma or [[COPD]]', 'Doctor', 'More screening; common conditions in the same age group.'],
        ['Type 1: still inject [[basal insulin]]', 'Patient', 'Fewer needles, not no needles.'],
        ['Doses in milligrams (1 mg ≈ 3 units, 3 mg ≈ 8 units); never swap three 1 mg for one 3 mg', 'Doctor, pharmacist, patient', 'A conversion table, training time and a new kind of dosing error.'],
        ['Change release unit every 2 weeks; replace inhaler yearly', 'Patient', 'Parts to track and reorder.'],
      ],
      caption: 'Source: Exubera US prescribing information, January 27, 2006.'},

    {type: 'callout', variant: 'lesson', heading: 'The warning signs were public', html: `<p>Training, spirometry, milligram dosing, and even the possibility of a lung cancer signal were all raised, on the record, at a public FDA meeting in September 2005. The failure was not that nobody saw these problems. It was that the people deciding how much to invest treated them as launch logistics rather than as threats to demand.</p>`},

    // ---------------- 8. DECISION 1 ----------------
    {type: 'decision', title: 'Decision: buy out the partner?', role: 'You are Pfizer\'s leadership, January 2006', scenario: `Sanofi-Synthélabo has just acquired Aventis. Your 1998 alliance contract has a [[change of control clause]], and Sanofi-Aventis already sells <b>[[Lantus]]</b>, the world's best-selling insulin brand. You can exercise the clause and buy Sanofi-Aventis's worldwide rights to Exubera, plus its stake in the Frankfurt insulin factory, for about <b>$1.3 billion</b>. FDA approval looks likely within weeks, and analysts expect $1–4 billion a year in sales. What do you do?`,
      options: [
        {label: 'Buy them out. Full control, full upside, and no partner whose insulin franchise competes with ours.', outcome: 'This is the textbook move when you believe in a product: a partner who profits from Lantus has mixed incentives, and a single owner can move faster. It also concentrates all the risk on you. If demand disappoints, you own the whole factory, the whole inventory and the whole write-off.'},
        {label: 'Keep the alliance. Share the launch costs and the risk with a company that knows insulin.', outcome: 'You halve your exposure and keep an insulin specialist in the tent. But you are now co-launching a product with a partner whose biggest brand is an injected insulin sold in ever-better pens. The alliance may be slow and conflicted exactly when speed matters.'},
        {label: 'Let them exit, but pay mostly through milestones tied to future sales.', outcome: 'A sales-linked structure would have capped your loss if the launch failed, the way software acquirers use earn-outs. The catch: a seller who does not believe in the product will demand cash now, and a seller who does will not accept a discount. Whether Sanofi-Aventis would have taken such a deal is unknowable.'},
      ],
      reality: `Pfizer bought out Sanofi-Aventis on January 13, 2006 for $1.3 billion (about $1.4 billion including transaction costs), completing the deal on February 28. Pfizer recorded about $1.0 billion of acquired technology rights, $218 million of inventory and $166 million of goodwill. By the end of 2007, Pfizer reported that substantially all assets recorded in the acquisition had been written off. Sanofi-Aventis booked a pre-tax gain of €460 million on the sale, and kept building its injected insulin business: Lantus had passed €1 billion in sales in 2005 and reached about €1.7 billion in 2006, and Europe's regulator approved Sanofi-Aventis's new disposable SoloSTAR pen in September 2006.`},

    // ---------------- 9. MONEY ----------------
    {type: 'story', kicker: 'The money', title: 'Forecasts, factories and a price premium', tocTitle: 'The money', html: `
<p>By the time Exubera reached the market, the bet was enormous. Analysts, according to <i>Nature Biotechnology</i>, estimated annual sales of $1 billion to $4 billion. Heinemann recalled expectations that Exubera "would become a new blockbuster with an annual turnover above $2 billion." For Pfizer, which was about to lose patent protection on several major drugs and faced the loss of Lipitor, its $13-billion-a-year cholesterol drug, early in the next decade, a new [[blockbuster]] mattered.</p>
<p>The supply chain was built for those numbers. Bulk insulin came from the Frankfurt plant owned through the Diabel joint venture, which Pfizer now owned outright. Nektar made all of the insulin powder at its facility in San Carlos, California, and two contract manufacturers built the inhalers. Nektar was paid on a cost-plus basis for what it shipped. In 2007 alone, Nektar recorded $146.2 million of revenue from Pfizer related to Exubera. That figure is worth holding next to what patients actually bought: about $12 million of Exubera in the first nine months of 2007. Factories were filling warehouses that pharmacies were not emptying. When Pfizer quit, it wrote off $661 million of inventory.</p>
<h3>The unit economics were upside down</h3>
<p>Remember the lung's hidden cost. Because only about 10–20% of inhaled insulin did its job, each dose needed several times more insulin than an injection, plus the powder engineering, the foil blisters and a mechanical inhaler with replaceable parts. The product was structurally more expensive to make than a vial of insulin and a syringe.</p>
<p>So it was priced at a premium. A 2007 review in <i>American Family Physician</i> listed the average wholesale prices: a one-month starter kit for about $188, and a refill pack of 90 one-milligram and 90 three-milligram blisters, equivalent to 990 units of rapid-acting insulin, for about $140. A 1,000-unit vial of insulin lispro (Humalog), a fast-acting injected insulin, cost about $78. Per unit of insulin effect, that makes Exubera powder about 80% more expensive at list price, before counting the inhaler and its parts.</p>
<p>In England, the manufacturer's own submission to [[NICE]] estimated the annual cost at £1,102 per person, including the device. NICE's analysis showed exactly where the value question lay, as the interactive below lets you explore. If inhaled insulin only helped by getting people to start insulin earlier, with no quality-of-life gain from avoiding injections, the [[cost per QALY]] was above £200,000, many times what the National Health Service would normally pay. The product could only look cost-effective if not injecting was itself worth a measurable improvement in quality of life.</p>
<p>That is the core of the commercial problem in one sentence: Exubera's clinical benefit was parity, its benefit to the patient was convenience, and its cost was higher. A [[payer]] looking at that profile has an easy answer. Pay for the injection.</p>`},

    {type: 'explorer', title: 'The payer\'s spreadsheet', intro: 'Set a patient\'s daily mealtime insulin dose and the size of a health plan. This uses the 2007 average wholesale prices from American Family Physician: list prices, not the discounted prices insurers actually paid, and excluding the inhaler and its parts.',
      inputs: [
        {id: 'u', label: 'Mealtime insulin per day (units)', min: 6, max: 60, step: 2, value: 24, fmt: v => v + ' units'},
        {id: 'n', label: 'Patients on mealtime insulin in the plan', min: 100, max: 20000, step: 100, value: 5000, fmt: v => v.toLocaleString('en-US')},
      ],
      compute: (v, api) => {
        const exu = 140 / 990, lis = 78 / 1000;
        const mE = v.u * 30.4 * exu, mL = v.u * 30.4 * lis, yr = (mE - mL) * 12;
        const bar = (val, max, cls, label) => '<div style="display:flex;align-items:center;gap:10px;margin:6px 0"><div style="width:190px;font-size:14px">' + label + '</div><div style="flex:1;background:var(--panel-2);border-radius:6px;height:18px;position:relative"><div style="width:' + Math.min(100, 100 * val / max) + '%;height:100%;border-radius:6px;background:var(' + cls + ')"></div></div><div style="width:80px;text-align:right;font-variant-numeric:tabular-nums"><b>$' + val.toFixed(0) + '</b></div></div>';
        const max = Math.max(mE, mL) * 1.05;
        return bar(mE, max, '--s1', 'Exubera powder, per month') + bar(mL, max, '--s2', 'Insulin lispro vial, per month') +
          '<p style="margin-top:10px">Extra cost per patient: about <b>$' + api.fmt(yr) + ' a year</b> at list price. Across ' + api.fmt(v.n) + ' patients: <b>$' + api.fmt(yr * v.n / 1e6, 1) + ' million a year</b>, for blood-sugar control the trials showed was about the same.</p>' +
          '<p class="caption">Per-unit prices: Exubera refill pack $140 for 990 unit-equivalents (about 14 cents a unit); lispro $78 per 1,000 units (about 8 cents). Starter kits, inhaler replacement, release units and the required lung tests would add more. A payer negotiating rebates on injected insulins would see an even wider gap.</p>';
      }},

    {type: 'custom', title: 'How much is not injecting worth?', intro: 'NICE\'s assessment turned on one number: how much a patient\'s quality of life improves simply because they inhale instead of inject (a "[[utility]] gain"). Pick an assumption to see what NICE\'s analysts found. NICE typically looked for about £20,000–30,000 per QALY or less.',
      html: `<div class="card"><div id="niceBtns" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px"></div><div id="niceOut"></div></div>`,
      init: (root, api) => {
        const S = [
          {k: '0', label: 'No quality-of-life gain', segs: [{off: true, label: 'every scenario: above £200,000'}], text: 'If the only benefit is that some people start insulin earlier, every scenario NICE\'s analysts ran came out above £200,000 per QALY, far off this scale.'},
          {k: '0.02', label: 'Small gain (0.02)', segs: [{lo: 30000, hi: 60000, open: true, label: 'most groups: above £30,000'}, {lo: 20600, hi: 21400, label: 'one group: ~£21,000', below: true}], text: 'Above £30,000 per QALY for all groups analyzed, except type 2 patients already on a basal injection who would otherwise move to a full basal-plus-mealtime regimen, where it was around £21,000.'},
          {k: '0.04', label: 'Larger gain (0.04)', segs: [{lo: 22000, hi: 24000, label: 'type 2 on pills: £22–24k'}, {lo: 10000, hi: 17000, label: 'type 2 on basal: £10–17k', below: true}], text: '£22,000–24,000 per QALY for type 2 patients uncontrolled on pills, and £10,000–17,000 for type 2 patients uncontrolled on basal insulin. Only here does inhaled insulin start to look affordable, and only if you believe avoiding injections is worth a 4% improvement in quality of life.'},
        ];
        const btns = root.querySelector('#niceBtns'), out = root.querySelector('#niceOut');
        const draw = s => {
          const X = v => 20 + 640 * Math.min(v, 60000) / 60000;
          let svg = '<svg viewBox="0 0 700 150" style="width:100%;height:auto;display:block">';
          svg += '<rect x="' + X(20000) + '" y="24" width="' + (X(30000) - X(20000)) + '" height="80" class="il-3s"/>';
          svg += '<text x="' + ((X(20000) + X(30000)) / 2) + '" y="16" text-anchor="middle" class="il-small">usual NICE range</text>';
          s.segs.forEach(g => {
            if (g.off) { svg += '<rect x="' + X(54000) + '" y="42" width="' + (X(60000) - X(54000)) + '" height="22" rx="6" class="il-1"/><path d="M' + (X(60000) + 4) + ' 53 l12 0 m-6 -6 l6 6 l-6 6" class="st-1" stroke-width="2.5" fill="none"/><text x="' + (X(54000) - 8) + '" y="58" text-anchor="end" class="il-text">' + g.label + '</text>'; return; }
            const y = g.below ? 72 : 36;
            svg += '<rect x="' + X(g.lo) + '" y="' + y + '" width="' + Math.max(8, X(g.hi) - X(g.lo)) + '" height="22" rx="6" class="il-1"/>';
            if (g.open) svg += '<path d="M' + (X(60000) + 4) + ' ' + (y + 11) + ' l12 0 m-6 -6 l6 6 l-6 6" class="st-1" stroke-width="2.5" fill="none"/>';
            const tx = g.open ? X(g.lo) + 10 : X(g.hi) + 8;
            svg += '<text x="' + tx + '" y="' + (y + 16) + '" class="' + (g.open ? 'il-white' : 'il-text') + '">' + g.label + '</text>';
          });
          [0, 10000, 20000, 30000, 40000, 50000, 60000].forEach(t => { svg += '<line x1="' + X(t) + '" x2="' + X(t) + '" y1="110" y2="116" class="il-line"/><text x="' + X(t) + '" y="134" text-anchor="middle" class="il-small">£' + (t / 1000) + 'k</text>'; });
          svg += '<line x1="20" x2="660" y1="110" y2="110" class="il-line"/></svg>';
          out.innerHTML = svg + '<p style="margin:10px 0 0;font:400 16.5px/1.6 var(--serif)">' + api.terms(s.text) + '</p><p class="caption">Cost per QALY on the axis. Source: NICE technology appraisal 113, Inhaled insulin for the treatment of type 1 and type 2 diabetes (December 2006), section 4.2.12. Ranges summarize the reported results; they are not recalculated.</p>';
          [...btns.children].forEach(b => b.classList.toggle('primary', b.dataset.k === s.k));
        };
        S.forEach(s => { const b = document.createElement('button'); b.className = 'btn'; b.textContent = s.label; b.dataset.k = s.k; b.onclick = () => draw(s); btns.appendChild(b); });
        draw(S[0]);
      }},

    {type: 'decision', title: 'Decision: how do you price it?', role: 'You are Pfizer\'s US launch team, 2006', scenario: `Exubera costs far more to make than injected insulin: roughly five times the insulin per dose, plus powder processing, blisters and a mechanical inhaler. Trials show blood-sugar control about equal to injections, higher patient satisfaction, and a label that requires lung testing. Insurers already cover cheap, effective injected insulins. What is your launch price strategy?`,
      options: [
        {label: 'Premium. Price to cover the higher cost of goods and reflect a first-of-its-kind product patients prefer.', outcome: 'You protect margins and signal that this is an innovation, not a commodity. But a payer sees parity efficacy at a higher price and has no reason to cover it generously. Patients face higher co-pays or [[prior authorization]], doctors face paperwork on top of the lung test, and the people most excited about the product are the ones least able to get it.'},
        {label: 'Parity with injected mealtime insulin. Eat the margin to win broad coverage fast.', outcome: 'Coverage gets easier and the payer objection mostly disappears. But the cost of goods means each patient may lose money for years, and it does nothing about the lung test, the device size or the milligram dosing. You could end up with broad coverage and still low demand, at a loss on every box.'},
        {label: 'Premium list price, but free starter kits and co-pay support so doctors and patients can try it.', outcome: 'The common modern playbook. It lowers the patient\'s barrier to a first try, and trial is where a convenience product proves itself. It does not change the payer\'s math on renewal, and it can be expensive if many patients try and few stay. Heinemann later argued that too few patients got the chance to try the system and see its pros and cons for themselves.'},
      ],
      reality: `Exubera launched at a premium. At average wholesale prices it cost about 80% more per unit of insulin effect than an injected rapid-acting analog, before counting the device. Pfizer's filings describe a "lack of acceptance by patients, physicians and payers." In Europe, Heinemann wrote, many countries offered no reimbursement, and England's NICE recommended against routine use. In the US, Pfizer responded in 2007 not with a lower price but with more selling: a new sales force from April, trained diabetes educators in the field, and [[direct-to-consumer advertising]] planned for mid-summer.`},

    // ---------------- 10. LAUNCH ----------------
    {type: 'story', kicker: 'The launch', title: 'Everyone who had to say yes', tocTitle: 'The launch', html: `
<p>Between May and September 2006, Pfizer launched Exubera in Germany, Ireland, the UK and the US; supplies were available across the US from September. Within months it was clear that something was wrong. In its report for the first quarter of 2007, Pfizer wrote a sentence companies rarely put in a securities filing: "We have been disappointed with the slow acceptance of Exubera."</p>
<p>The easiest way to understand what happened is to walk through everyone who had to say yes before a single patient took a single puff.</p>
<h3>The doctor</h3>
<p>Most people with type 2 diabetes are treated by primary-care physicians, not specialists. For a family doctor with fifteen minutes per patient, Exubera meant: screen for smoking, asthma and COPD; order a [[spirometry]] test the office might not be able to do; learn a new dosing system in milligrams with a conversion table; teach the patient to use a multi-part device; schedule repeat lung tests at six months and every year; and fill out insurance paperwork. The alternative was to write a prescription for a pen. Heinemann put it bluntly: the teaching effort needed to use the inhaler properly had been underestimated, and in the "limited time available for a single patient in a busy practice," such practical arguments mattered more than anyone expected. Dr. Woolf had said the same thing in 2005.</p>
<p>Pfizer recognized some of this. Its April 2007 plan added diabetes educators "engaging in clinical discussions to deliver the practical clinical guidance needed by physicians," which it called a "direct response to our customers' need for increased support in using a novel delivery device."</p>
<h3>The payer</h3>
<p>Insurers and national health systems saw a drug that controlled blood sugar about as well as a cheaper one. In England, NICE's December 2006 guidance said inhaled insulin was "not recommended for the routine treatment of people with type 1 or type 2 diabetes." It could be used only by people with poor control who could not start or step up injections because of "a marked and persistent fear of injections" meeting psychiatric criteria for a specific phobia, diagnosed by a specialist, or severe and persistent injection-site problems, and it had to be started at a specialist diabetes center. That shrank the English market to a small fraction of the patients Pfizer had in mind. In the US, Pfizer's own filings list payers alongside patients and physicians among those who did not accept the product.</p>
<h3>The patient</h3>
<p>Patients in trials had liked inhaled insulin. But trial patients are volunteers who have been given the device, trained on it, and supported by research nurses. Real-world patients met a device roughly the size of a flashlight when folded, and bigger when opened for use, that some critics said looked like a bong. Using it at a restaurant table drew attention. Larger doses meant loading several blisters in turn. Type 1 patients still had to inject their long-acting insulin, so they were trading some needles, not all. And the thing they were being asked to give up was no longer a syringe and a vial but a slim pen with a very fine needle that took seconds.</p>
<h3>The company</h3>
<p>Launching a drug that depends on a device, a training program and a lung test is closer to launching a medical system than a pill. <i>Nature Biotechnology</i> reported that some observers thought Pfizer "was ill-prepared to launch the product in the first place"; other accounts have blamed the inhaler's design, which was Nektar's responsibility. The relationship between the partners was souring in public: the two companies' frustrations spilled into quarterly earnings calls, and Nektar's chief executive criticized Pfizer's marketing. The moves Pfizer made in 2007 (a sales force with cardiovascular experience, educators, consumer advertising) were sensible, but they came a year into the launch, after doctors had formed their first impressions.</p>
<p>Put the four together and the arithmetic of adoption is brutal. Every "yes" had to happen, in order, and each came with a reason to say no. A doctor who was reluctant never raised it. A patient who was keen could not get it covered. A patient who got coverage still had to carry the device.</p>`},

    {type: 'custom', title: 'Taking one mealtime dose: pen vs Exubera', intro: 'Step through both routines side by side. The steps are simplified from the Exubera label and standard pen use; the point is the number of things that can go wrong, not the seconds.',
      html: `<div class="card">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
          <button class="btn primary" id="pjNext">Next step →</button>
          <button class="btn" id="pjAll">Show all steps</button>
          <button class="btn" id="pjReset">Start over</button>
          <span id="pjCount" style="align-self:center;color:var(--ink-3);font-size:14px"></span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px">
          <div><div style="font:650 16px var(--sans);margin-bottom:6px">Insulin pen (12 units)</div><ol id="pjPen" style="margin:0;padding-left:1.3em;font-size:15px;line-height:1.5"></ol></div>
          <div><div style="font:650 16px var(--sans);margin-bottom:6px">Exubera (4 mg ≈ 11 units)</div><ol id="pjExu" style="margin:0;padding-left:1.3em;font-size:15px;line-height:1.5"></ol></div>
        </div>
        <div id="pjExtra" style="margin-top:14px"></div>
      </div>`,
      init: (root, api) => {
        const pen = ['Take the pen out of your pocket or bag.', 'Screw on a new fine needle.', 'Do a small safety shot to check insulin flows.', 'Dial 12 units.', 'Inject into the skin of the belly or thigh and hold for a few seconds.', 'Remove the needle; cap the pen; done.'];
        const exu = ['Take out the inhaler (about flashlight-size).', 'Extend the chamber into the ready position.', 'Insert the 1 mg blister (green, one raised bar).', 'Pump the handle to store compressed air.', 'Press the button: the blister is pierced and a cloud fills the chamber.', 'Breathe the cloud in slowly and deeply through the mouthpiece.', 'Remove the empty blister.', 'Insert the 3 mg blister (blue, three raised bars).', 'Pump the handle again.', 'Press the button again.', 'Breathe in the second cloud.', 'Remove the blister; close the device; done. Eat within 10 minutes.'];
        const chores = ['<b>Exubera, beyond the dose:</b> change the release unit every 2 weeks; replace the inhaler yearly; keep blisters dry (not in a steamy bathroom); lung test before starting, at 6 months and every year; no smoking.', '<b>And for type 1 patients:</b> still inject long-acting basal insulin every day.'];
        let k = 0; const P = root.querySelector('#pjPen'), E = root.querySelector('#pjExu'), X = root.querySelector('#pjExtra'), C = root.querySelector('#pjCount');
        const draw = () => {
          const li = (s, i, done) => '<li style="margin:3px 0;opacity:' + (i < k ? 1 : 0.18) + ';' + (done && i === Math.min(k, 99) - 1 ? 'font-weight:600' : '') + '">' + s + '</li>';
          P.innerHTML = pen.map((s, i) => li(s, i, true)).join('');
          E.innerHTML = exu.map((s, i) => li(s, i, true)).join('');
          C.textContent = k === 0 ? 'Click Next step to begin' : (k >= exu.length ? 'Pen: ' + pen.length + ' steps. Exubera: ' + exu.length + ' steps.' : 'Step ' + k);
          X.innerHTML = k >= exu.length ? chores.map(c => '<div style="margin-top:6px;padding:10px 12px;border-radius:10px;background:var(--panel-2);font-size:15px">' + c + '</div>').join('') + (k >= exu.length ? '<p class="caption">A 4 mg dose uses one 1 mg and one 3 mg blister, the fewest-blisters rule in the label. Pen steps are typical of pen instructions; exact steps vary by brand.</p>' : '') : '';
          if (k >= pen.length && k < exu.length) C.textContent = 'Pen user is finished. Exubera: step ' + k + ' of ' + exu.length;
        };
        root.querySelector('#pjNext').onclick = () => { k = Math.min(exu.length, k + 1); draw(); };
        root.querySelector('#pjAll').onclick = () => { k = exu.length; draw(); };
        root.querySelector('#pjReset').onclick = () => { k = 0; draw(); };
        draw();
      }},

    {type: 'callout', variant: 'product', heading: 'The user is not the buyer, and the gatekeeper is neither', html: `<p>Exubera looks like a consumer product, but it was sold like enterprise software. The end user (the patient) liked it in trials. The gatekeeper (the doctor, like an IT department) had to install it: screening, a lung test, training, follow-up. The buyer (the insurer or health system, like procurement) compared it with the cheaper tool that already worked. Enterprise vendors learn to sell to all three. Exubera's value story was aimed mostly at the first.</p><p><b>Where the analogy breaks:</b> in medicine the gatekeeper carries clinical and legal responsibility for harm, which makes caution rational, not bureaucratic. And the buyer's decision is formal and public: a body like NICE writes down the cost per quality-adjusted life year and applies a threshold. There is no champion inside the account who can push a purchase through on enthusiasm.</p>`},

    {type: 'custom', title: 'Find the adoption blockers', intro: 'Here are twelve statements about Exubera\'s launch. Flag the ones that were real, documented barriers to adoption, then check your answers. Some are myths.',
      html: `<div class="card"><div id="abGrid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:10px"></div>
        <div style="margin-top:12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap"><button class="btn primary" id="abCheck">Check my answers</button><button class="btn" id="abReset">Reset</button><span id="abScore" style="font-weight:600"></span></div></div>`,
      init: (root, api) => {
        const items = [
          {t: 'The inhaler was bulky and conspicuous to use in public.', real: true, who: 'Patient', why: 'Roughly flashlight-size folded, bigger when opened. Heinemann: "too big and cumbersome to handle."'},
          {t: 'Doses were in milligrams, not the units everyone knew, and 3 x 1 mg did not equal 3 mg.', real: true, who: 'Doctor and patient', why: 'Raised at the 2005 advisory committee and by Heinemann as "a source of confusion and error."'},
          {t: 'A lung-function test was required before starting, at 6 months and yearly.', real: true, who: 'Doctor', why: 'Required by the label. Many primary-care offices lacked spirometry; the committee chair doubted it would happen "half the time."'},
          {t: 'Blood-sugar control was worse than with injected insulin.', real: false, who: 'Myth', why: 'Trials showed control about equal to injected insulin. The problem was never efficacy.'},
          {t: 'Per unit of insulin, it cost roughly 80% more than an injected rapid-acting insulin at list price.', real: true, who: 'Payer', why: 'AFP 2007 average wholesale prices: about 14 cents vs 8 cents per unit, before the device.'},
          {t: 'England\'s NICE limited it to patients with diagnosed needle phobia or severe injection-site problems.', real: true, who: 'Payer', why: 'NICE TA113, December 2006: "not recommended for the routine treatment."'},
          {t: 'The powder had to be kept in a refrigerator.', real: false, who: 'Myth', why: 'The reverse: blisters were stored at room temperature and must not be refrigerated. Stability without refrigeration was one of its real advantages.'},
          {t: 'Type 1 patients still had to inject their long-acting basal insulin.', real: true, who: 'Patient', why: 'Exubera was a mealtime insulin only; the label required a longer-acting insulin in type 1 diabetes.'},
          {t: 'Smokers and recent ex-smokers could not use it.', real: true, who: 'Doctor and patient', why: 'Contraindicated if smoking or quit less than 6 months, because smokers absorbed 2 to 5 times more insulin.'},
          {t: 'The FDA refused to approve it for type 2 diabetes.', real: false, who: 'Myth', why: 'It was approved for adults with type 1 and type 2 diabetes in January 2006.'},
          {t: 'Insulin pens had already made injections quick and nearly painless.', real: true, who: 'All three', why: 'Novo Nordisk\'s CEO said inhaled mealtime insulin was unlikely to beat "injections of modern insulin with pen devices."'},
          {t: 'Pfizer pulled it because it was shown to cause lung cancer.', real: false, who: 'Myth', why: 'The withdrawal (October 2007) came before the lung cancer signal (April 2008), and causation was never established.'},
        ];
        const grid = root.querySelector('#abGrid'), flags = new Set(); let checked = false;
        const draw = () => {
          grid.innerHTML = items.map((it, i) => {
            const on = flags.has(i); let bg = on ? 'var(--panel-2)' : 'var(--panel)', bd = on ? 'var(--ink)' : 'var(--rule)', extra = '';
            if (checked) { const ok = on === it.real; bd = ok ? 'var(--win)' : 'var(--loss)'; bg = ok ? 'var(--win-s)' : 'var(--loss-s)';
              extra = '<div style="margin-top:6px;font-size:13.5px;color:var(--ink-2)"><b>' + (it.real ? 'Real blocker: ' + it.who : 'Myth') + '.</b> ' + api.esc(it.why) + '</div>'; }
            return '<button data-i="' + i + '" style="text-align:left;border:1.5px solid ' + bd + ';background:' + bg + ';border-radius:10px;padding:10px 12px;font-size:15px;line-height:1.45">' + (on ? '<b>⚑ Flagged</b><br>' : '') + api.esc(it.t) + extra + '</button>';
          }).join('');
        };
        grid.onclick = e => { const b = e.target.closest('button'); if (!b || checked) return; const i = +b.dataset.i; flags.has(i) ? flags.delete(i) : flags.add(i); draw(); };
        root.querySelector('#abCheck').onclick = () => { checked = true; const right = items.filter((it, i) => flags.has(i) === it.real).length; root.querySelector('#abScore').textContent = right + ' of ' + items.length + ' correct. Eight were real; four were myths.'; draw(); };
        root.querySelector('#abReset').onclick = () => { checked = false; flags.clear(); root.querySelector('#abScore').textContent = ''; draw(); };
        draw();
      }},

    // ---------------- 11. MOVING BASELINE ----------------
    {type: 'story', kicker: 'The competitor nobody modeled', title: 'Racing a moving baseline', tocTitle: 'The moving baseline', html: `
<p>When Inhale and Pfizer started in 1995, the injected alternative was, for many patients, a vial, a syringe and regular human insulin that had to be injected well before a meal. By 2006, the alternative had changed almost beyond recognition, and Exubera was compared not with the old routine but with the new one.</p>
<p>Three things had improved at once. <b>Long-acting analogs</b> such as [[Lantus]], approved in 2000, gave smooth background coverage from a single daily injection. <b>Fast-acting analogs</b> such as lispro, approved in 1996, could be injected right at mealtime, removing one of inhaled insulin's selling points. And <b>pens</b>, introduced in the late 1980s and dismissed at first by some diabetologists as expensive "toys," according to Heinemann, had become the normal way to inject, at least in Europe, with ever finer needles. "It was the ease of practicing insulin therapy with insulin pens," he wrote, "that led to the predominant use of such devices."</p>
<p>The irony is in the numbers. Sanofi-Aventis, the partner Pfizer paid $1.3 billion to buy out, reported that Lantus had been the world's leading insulin brand by sales since August 2005, with 2005 sales of €1,214 million and 2006 sales of about €1.7 billion. It launched a reusable pen for Lantus in the US and Japan in 2005, and in September 2006, the same year Exubera launched, Europe's regulator approved its new disposable SoloSTAR pen for Lantus and its fast-acting insulin Apidra. While Pfizer was trying to persuade doctors that breathing insulin beat injecting it, the market leader in insulin was making injecting it easier.</p>
<p>Novo Nordisk, the other insulin giant, reached the same conclusion from the inside. It had its own inhaled insulin, AERx, in late-stage development. In January 2008, three months after Pfizer's exit, it killed the program at a cost of about DKK 1.3 billion. Its chief executive, Lars Rebien Sørensen, explained why in a single sentence that could serve as Exubera's epitaph:</p>
<blockquote class="pull">We have concluded that fast-acting inhaled insulin in the form it is known today is unlikely to offer significant clinical or convenience benefits over injections of modern insulin with pen devices such as Novo Nordisk's FlexPen.<cite>Lars Rebien Sørensen, CEO of Novo Nordisk, January 2008</cite></blockquote>
<p>He added that people with type 2 diabetes usually start insulin with long-acting or premixed insulin, and that "they want very simple, very convenient devices." Eli Lilly, which was developing an inhaled insulin called AIR with Alkermes in phase 3, ended that program on March 7, 2008, citing "increasing uncertainties in the regulatory environment" and its evaluation of the product's commercial and clinical potential. Within five months of Pfizer's exit, the three biggest efforts in inhaled insulin were all dead.</p>`},

    {type: 'callout', variant: 'product', heading: 'You compete with the incumbent\'s roadmap, not its current release', html: `<p>Exubera's business case was built in the 1990s against the 1990s standard of care: syringes, vials and slow regular insulin. It launched in 2006 against pens, fast analogs and once-daily Lantus. This is the classic trap of a long build: you benchmark against the product you see, and by the time you ship, the incumbent has closed the gap with cheap, incremental improvements. The fast-follower did not need to beat you; it just needed to get good enough.</p><p><b>Where the analogy breaks:</b> a software challenger can respond to an incumbent's new release within months. Exubera could not: its device, dose units and label were fixed by trials that took years. Meanwhile the incumbents' improvements (a better pen, a thinner needle) did not require new drug trials at all, because the insulin inside was already approved. The race was structurally unfair, and it was predictable.</p>`},

    {type: 'chart', title: 'Expectations, reality and the bill', intro: 'All figures in US dollars, millions. The actual-sales bar is there; it is just very small.',
      chart: {kind: 'bar', title: 'Exubera by the numbers ($ millions)', unit: '$M', horizontal: true, labelWidth: 330,
        categories: ['Analyst sales estimate, high end (per year)', 'Pfizer\'s pre-tax exit charge (2007)', 'Paid to Sanofi-Aventis for its share (2006)', 'Analyst sales estimate, low end (per year)', 'Nektar\'s Exubera revenue from Pfizer (2007)', 'Actual Exubera sales, Jan–Sep 2007'],
        series: [{name: 'US$ millions', values: [4000, 2800, 1300, 1000, 146.2, 12], notes: ['Nature Biotechnology', 'Pfizer Q3 2007', 'Sanofi-Aventis, Jan 2006', 'Nature Biotechnology', 'Nektar 10-K 2007: product and related revenue for making powder and inhalers', 'Nature Biotechnology']}],
        note: 'Sources: Nature Biotechnology (Mack, Dec 2007); Pfizer third-quarter 2007 results; Sanofi-Aventis press release, 13 Jan 2006; Nektar Therapeutics 10-K for 2007. Analyst estimates are annual; actual sales are for nine months.'},
      takeaway: 'The gap between what Nektar shipped to Pfizer ($146 million) and what patients bought (about $12 million in nine months) shows how far supply had been built ahead of demand.'},

    // ---------------- 12. DECISION 3 + WITHDRAWAL ----------------
    {type: 'decision', title: 'Decision: keep going or cut your losses?', role: 'You are Pfizer\'s CEO, early October 2007', scenario: `Exubera has sold about $12 million in the first nine months of 2007. You rebuilt the sales approach in April, put diabetes educators in the field, and planned consumer advertising for the summer; those efforts have barely had time to work. Patients who use Exubera like it. The factory, inventory and acquired rights are on your books at well over $2 billion. Nektar is publicly blaming your marketing. What do you do?`,
      options: [
        {label: 'Give it one more year. The new sales force and advertising need time, and walking away wastes everything we have spent.', outcome: 'Tempting, and partly right: launches do sometimes turn. But "wasting what we have spent" is a [[sunk cost]] argument. The money is gone either way. The only question is whether the next dollar earns more than a dollar, and none of the structural blockers (the lung test, milligram dosing, the device size, the payer math) will be fixed by more advertising.'},
        {label: 'Exit now. Take the write-off, move patients to other insulins, and stop spending.', outcome: 'Painful and public, but it caps the loss. You will be criticized for abandoning a working drug and a partner, and for a costly misjudgment. You also stop paying for support lines, training, manufacturing and marketing for a product that is not growing.'},
        {label: 'Hand it back. Let Nektar find a new partner, and transfer the rights if it does.', outcome: 'This keeps a working drug alive for the patients who want it and passes future risk to someone more committed. It only works if another company believes it can succeed where the world\'s largest drugmaker failed.'},
      ],
      reality: `Pfizer did the second and a version of the third. It announced its exit on October 18, 2007, with a $2.8 billion pre-tax charge, and gave doctors three months to move patients to other treatments. On November 9 it paid Nektar $135 million to settle all remaining obligations for Exubera and a next-generation inhaled insulin, and agreed to transfer its rights to any new partner Nektar found. Heinemann later argued that the cost of keeping the mandatory support lines running was so high "that even a big pharmaceutical company cannot cover this over a prolonged period of time." Nektar's search for a new partner lasted five months.`},

    {type: 'story', kicker: 'The moment of failure', title: 'October 18, 2007', tocTitle: 'The withdrawal', html: `
<p>Pfizer announced the end in its third-quarter earnings release. Net income for the quarter fell 77%, to $761 million, largely because of the Exubera charge. Kindler's statement was short: "Despite our best efforts, Exubera has failed to gain the acceptance of patients and physicians. We have therefore concluded that further investment in this product is unwarranted." Pfizer's quarterly filing added payers to that list.</p>
<p>The charge of about $2.8 billion (about $2.1 billion after tax) was mostly an admission that the assets built for a blockbuster were worth nothing: about $1.1 billion of intangible assets such as the rights bought from Sanofi-Aventis, $661 million of inventory, $454 million of fixed assets such as manufacturing equipment, and $584 million of other exit costs such as contract terminations. Very few companies walk away from an approved drug with no safety or efficacy problem, <i>Nature Biotechnology</i> observed; this one did it about seventeen months after the first launch, and twenty-one months after approval.</p>
<p>The way it ended also said something about the partnership. According to <i>Nature Biotechnology</i>, Pfizer did not contact Nektar before issuing the news; Nektar "heard it over the wire like everyone else." For Nektar, the loss was existential. Pfizer had accounted for 69% of its revenue in 2007, and in 2008 it would receive none. Nektar cut about 110 jobs, roughly 20% of its full-time staff, in February 2008, while keeping the people it needed to find a new inhaled-insulin partner.</p>
<p>For patients who had adopted Exubera, and there were some who loved it, the news meant going back to needles. Pfizer said it would work with physicians to move them to other treatments within three months, with an extended program for those who could not switch in time. In England, NICE marked its guidance obsolete in January 2008, when Pfizer ceased production. In the European Union, the marketing authorization was withdrawn in 2008 at Pfizer's request, for commercial reasons.</p>`},

    {type: 'chart', title: 'What $2.8 billion was made of', chart: {kind: 'bar', title: 'Pfizer\'s Exubera exit charges, Q3 2007 ($ millions, pre-tax)', unit: '$M', horizontal: true, labelWidth: 330,
      categories: ['Intangible assets (acquired rights, technology)', 'Inventory (powder, blisters, inhalers)', 'Other exit costs (contracts, severance)', 'Fixed assets (plant and equipment)'],
      series: [{name: 'Charge', values: [1105, 661, 584, 454]}],
      note: 'Source: Pfizer third-quarter 2007 results and Form 10-Q. Total about $2.8 billion pre-tax, $2.1 billion after tax. Pfizer\'s full-year 2007 report later gave $578 million for other exit costs.'},
      takeaway: 'Almost everything in this chart is money spent before the first patient decided whether they wanted the product.'},

    // ---------------- 13. LUNG CANCER ----------------
    {type: 'story', kicker: 'The coda', title: 'Six cases, and a question from 2005', tocTitle: 'The lung cancer signal', html: `
<p>Nektar spent the winter of 2007–2008 trying to find a new company to take over Exubera and its next-generation inhaled insulin. On April 9, 2008, it gave up.</p>
<p>The reason came from the long-term safety studies Pfizer had promised the FDA and was still running. Pfizer updated Exubera's label with a new warning: in clinical trials there had been 6 newly diagnosed cases of primary lung cancer among Exubera-treated patients and 1 among patients on comparison treatments, plus 1 more case reported after marketing. In the controlled trials, the rate was 0.13 new lung cancers per 100 patient-years of exposure for Exubera (5 cases over 3,900 patient-years), against 0.02 for comparators (1 case over 4,100 patient-years). Every patient diagnosed had a history of smoking.</p>
<p>The label was careful: "There were too few cases to determine whether the emergence of these events is related to Exubera." Seven cancers in thousands of patients, all in former smokers, is a small signal that could be chance. But insulin is a growth-promoting hormone, and it was being deposited directly on lung tissue every day. No company was going to take on an unprofitable product with an unresolved cancer question. "The concern over this new data analysis from ongoing clinical trials has resulted in the termination of all negotiations with potential partners," said Nektar's chief executive, Howard Robin. The company said it had already been "moving away from inhaled insulin."</p>
<p>Recall Dr. Stoller's request at the 2005 advisory committee: decide in advance "at what incidence of excess lung cancer does one say there is potential causality." That is exactly the kind of rare, slow-to-appear risk that trials of a few thousand people for a year or two cannot rule out, and that [[pharmacovigilance]] and long-term studies exist to catch. Whether inhaled insulin causes lung cancer has never been established. What the signal did establish was that Exubera would not come back.</p>
<p>In October 2008 Nektar agreed to sell its pulmonary business unit, including dry-powder manufacturing assets and about 140 employees, to Novartis for $115 million in cash; the sale closed on December 31, 2008. The company that had been founded to deliver proteins through the lung built its future on a different technology, PEGylation, which it had gained by buying Shearwater Corporation in 2001 and which attaches chains of a polymer to drugs to make them last longer in the body.</p>`},

    {type: 'callout', variant: 'misconception', heading: '"Exubera was pulled because it caused lung cancer"', html: `<p>A common retelling. The order of events says otherwise. Pfizer exited in <b>October 2007</b>, citing lack of acceptance by patients, physicians and payers. The lung cancer imbalance was announced in <b>April 2008</b>, six months later, and the label said there were too few cases to tell whether Exubera was responsible. The cancer signal ended any chance of a revival; it did not cause the failure. Exubera is a commercial failure, not a safety withdrawal like <a href="case.html?id=vioxx">Vioxx</a>.</p>`},

    {type: 'callout', variant: 'numbers', heading: 'Exubera in eight numbers', html: `<p><b>1925:</b> the first published attempt to inhale insulin. <b>1995:</b> the Pfizer–Inhale deal. <b>7–2:</b> the advisory committee's vote for approval. <b>$1.3 billion:</b> paid to Sanofi-Aventis in January 2006. <b>~80%:</b> Exubera's list-price premium per unit of insulin over injected lispro. <b>$12 million:</b> sales in the first nine months of 2007, against analyst estimates of $1–4 billion a year. <b>$2.8 billion:</b> the pre-tax cost of exiting. <b>6 vs 1:</b> lung cancer cases, Exubera vs comparators, all in former smokers.</p>`},

    // ---------------- 14. AFREZZA ----------------
    {type: 'story', kicker: 'What came next', title: 'The sequel: Afrezza', tocTitle: 'Afrezza and after', html: `
<p>One company kept going. MannKind Corporation, founded and funded for years by the billionaire entrepreneur Alfred Mann, had been developing a different inhaled insulin built on its <b>[[Technosphere]]</b> particles, which dissolve very quickly in the lung. On June 27, 2014, the FDA approved it as Afrezza, a rapid-acting inhaled insulin taken at the start of each meal.</p>
<p>Afrezza looked like a product designed by people who had studied Exubera's failure. The inhaler was small and portable: Oleck and colleagues, writing in <i>Diabetes Spectrum</i> in 2016, contrasted Afrezza's "small, sleek" device "dosed in units" with Exubera's, which "was large, awkward, and dosed in milligrams." But the regulatory baggage was similar. Afrezza carried a [[black box warning]] that acute [[bronchospasm]] had been seen in patients with asthma and COPD; it was not to be used in people with chronic lung disease or who smoked; and in type 1 diabetes it had to be combined with long-acting insulin. In the FDA's type 1 trial it met the pre-set non-inferiority margin against injected insulin aspart but lowered [[HbA1c]] less.</p>
<p>In August 2014, Sanofi, the same company that had sold its Exubera stake to Pfizer, licensed Afrezza: $150 million upfront and up to $775 million more in milestones, about $925 million in all, with Sanofi taking 65% of profits and losses. Sanofi launched Afrezza in the US in February 2015. It reported 2015 sales of €7.0 million. On January 4, 2016, Sanofi notified MannKind that it was terminating the deal, invoking its right to exit if commercialization was "no longer economically viable in the United States."</p>
<p>MannKind took Afrezza back and sold it itself. It has survived as a niche product: MannKind reported Afrezza net revenue of $74.6 million in 2025, up from $64.0 million in 2024. That is a real business for a small company, and a tiny share of the insulin market. The more lucrative use of MannKind's inhalation platform turned out to be a different drug entirely: its dry-powder technology is used in Tyvaso DPI, an inhaled treatment for pulmonary hypertension sold by United Therapeutics, and MannKind's royalty revenue from that partnership exceeded its Afrezza sales in 2025.</p>
<p>The pattern is instructive. A second team fixed the most visible product flaws (size, units) and still found the market small, because the deeper problems remained: the moving baseline of pens and analogs, the payers' parity math, the lung testing, and the fact that inhaled mealtime insulin does not touch the first step most type 2 patients take onto insulin.</p>`},

    {type: 'chart', title: 'Afrezza: a niche that grew slowly', chart: {kind: 'bar', title: 'Afrezza net revenue reported by MannKind ($ millions)', unit: '$M', categories: ['2023', '2024', '2025'],
      series: [{name: 'Afrezza net revenue', values: [54.9, 64.0, 74.6]}],
      note: 'Source: MannKind Corporation Form 10-K for 2025. For comparison, Sanofi reported 2015 Afrezza sales of €7.0 million in its only full year selling the product (MannKind 10-K for 2015).'}},

    {type: 'callout', variant: 'whatif', heading: 'What if Exubera had launched pocket-sized, in units, at price parity?', html: `<p>It is the obvious counterfactual, and Afrezza is a partial natural experiment. Afrezza fixed the size and the units, and still sold only a few million euros in its first year with a big partner. That suggests the device and dosing were real problems but not the whole story. Price parity would have removed the payer's easiest objection, but at a loss per patient given the insulin wasted in the lung. The lung testing was set by regulators, not marketers. The honest answer is that a better-designed Exubera would probably have sold more, and probably still would not have come close to $1 billion a year, because its core benefit (fewer mealtime needles) was shrinking every year as pens improved.</p>`},

    // ---------------- 15. POST-MORTEM ----------------
    {type: 'story', kicker: 'The post-mortem', title: 'What was actually wrong, and what would have caught it', tocTitle: 'Post-mortem', html: `
<p>Most failure stories in drug development are about biology: the target was wrong, the effect was too small, a side effect appeared. Exubera is different. The science worked. What failed was a set of assumptions about people, and each can be stated plainly.</p>
<h3>Assumption 1: the needle was the barrier</h3>
<p>The investment case assumed that removing needles would unlock insulin for millions of reluctant patients. But the reluctance was only partly about needles; it was also about hypoglycemia, weight gain and what starting insulin meant. And for most type 2 patients the first insulin is a single daily basal injection, which Exubera did not replace. The addressable market was the set of people who would switch mealtime insulin, pay more or get it covered, pass a lung test, not smoke, and prefer a large device to a pen. That is a much smaller set than "people with diabetes who dislike needles."</p>
<h3>Assumption 2: approval would bring adoption</h3>
<p>The partnership optimized for the regulator's question, and answered it well. It built manufacturing for peak demand before demand existed. The launch plan underweighted the doctor's workload and the payer's math, both of which were visible in the label and at the advisory committee. Pfizer's own corrective steps in 2007 were aimed at exactly these problems, which suggests they could have been planned for.</p>
<h3>Assumption 3: the baseline would stand still</h3>
<p>Between the 1995 deal and the 2006 launch, injected insulin became dramatically easier. The competitor was not "injections"; it was Lantus plus a pen. Sanofi-Aventis, which knew that market intimately, took the money and doubled down on pens.</p>
<h3>Organizational factors</h3>
<p>Three companies with different incentives spent a decade on the program: a small technology company whose survival depended on it, a giant that needed blockbusters, and an insulin maker with a competing franchise. When the insulin maker left, the giant bought the whole bet at the moment of maximum optimizm. The public friction between Pfizer and Nektar during the launch, and the fact that Nektar learned of the exit from the news wire, point to a partnership that was not working as a team when it mattered.</p>
<h3>What would have caught it earlier</h3>
<ul>
<li><b>Payer research before the price was set.</b> A simple question to insurers and health technology bodies ("Would you pay a premium for parity efficacy and patient preference?") would have predicted NICE's answer.</li>
<li><b>Real-world usability testing in ordinary practices.</b> Not trained trial sites, but busy primary-care offices without spirometers, with patients who had never been in a trial.</li>
<li><b>Staged rollout.</b> Launching in a few regions with close tracking of new prescriptions and repeat fills, before building capacity and inventory for $1 billion or more a year.</li>
<li><b>Benchmarking against the future standard of care.</b> Asking, "What will a pen look like in 2006?" rather than, "Is inhaling better than a syringe?"</li>
<li><b>A pre-agreed kill metric.</b> Deciding in advance what uptake by what date would trigger an exit, which is what Pfizer in effect did in October 2007, a year later than it might have.</li>
</ul>
<h3>What the field changed</h3>
<p>The industry drew its conclusions quickly. Novo Nordisk and Lilly abandoned their inhaled mealtime insulins within months; Novo said it would focus inhalation research on long-acting insulin and GLP-1 instead. Afrezza was designed small and dosed in units. More broadly, Exubera became the standard example, taught in business schools and repeated in industry, of why payers, prescribers and patient workflow must be part of development from the start. It sits alongside later cases such as <a href="case.html?id=aduhelm">Aduhelm</a>, where approval also failed to produce adoption.</p>`},

    {type: 'callout', variant: 'product', heading: 'Staged rollout and kill criteria', html: `<p>Software teams launch to 1%, watch retention, and decide. Exubera launched in four countries within a few months, with factories sized for a blockbuster, and the exit decision came twenty-one months after approval. The most transferable lesson for a product person moving into biotech is to insist on leading indicators (new prescriptions, repeat fills, payer coverage decisions) and on pre-agreed thresholds for stopping.</p><p><b>Where the analogy breaks:</b> a drug launch cannot really be a 1% rollout. Manufacturing capacity has to be built years in advance, the label is the same everywhere, and a slow launch is itself a signal doctors notice. What you <i>can</i> stage is the investment: capacity, inventory and acquisition price.</p>`},

    // ---------------- 16. QUIZ ----------------
    {type: 'quiz', title: 'Check your judgment', questions: [
      {q: 'What did Exubera\'s pivotal trials show about blood-sugar control?', options: ['It lowered HbA1c far more than injections', 'It was roughly as good as injected insulin', 'It was much worse, because most of the dose was lost', 'The trials never measured blood sugar'], answer: 1, explain: 'Trials such as Quattrin 2004 showed HbA1c control comparable to injections. Exubera was a convenience product: its claim was "as good as, without some needles," not "better."'},
      {q: 'Why could Exubera not free a person with type 1 diabetes from needles entirely?', options: ['It replaced only mealtime insulin; long-acting basal insulin still had to be injected', 'It only worked in type 2 diabetes', 'It had to be mixed with an injection each time', 'Patients needed a weekly blood test by needle'], answer: 0, explain: 'Exubera was short-acting. The label required type 1 patients to keep injecting a longer-acting basal insulin.'},
      {q: 'Why was the powder engineered into particles of about 1 to 5 microns?', options: ['So it would dissolve in the stomach', 'So it could be injected if needed', 'Larger particles hit the throat and smaller ones tend to be breathed out; this size reaches the deep lung', 'To make it taste better'], answer: 2, explain: 'Particle size decides where an aerosol lands. The deep-lung air sacs, with their very thin walls, are where insulin can reach the blood.'},
      {q: 'A patient on 3 mg blisters runs out. What does the label say to do?', options: ['Take three 1 mg blisters', 'Skip the dose', 'Take one 1 mg blister', 'Take two 1 mg blisters and monitor blood sugar closely'], answer: 3, explain: 'Three 1 mg blisters gave about 30% higher peak levels and 40% more total exposure than one 3 mg blister. The counter-intuitive instruction was to use two.'},
      {q: 'England\'s NICE analysis found inhaled insulin could look cost-effective only if...', options: ['It lowered HbA1c more than injections', 'Avoiding injections was itself counted as a meaningful quality-of-life gain', 'Pfizer cut the price by 90%', 'It was used only in children'], answer: 1, explain: 'With no quality-of-life gain from inhaling, the cost per QALY exceeded £200,000. Only with an assumed utility gain of around 0.04 did some groups fall near NICE\'s usual threshold.'},
      {q: 'Which best describes the order of events at the end?', options: ['Withdrawal for commercial reasons, then a lung cancer signal that ended any revival', 'Lung cancer signal, then withdrawal', 'FDA ordered the withdrawal', 'Nektar withdrew the product after Pfizer handed it back'], answer: 0, explain: 'Pfizer exited in October 2007 for lack of acceptance. The lung cancer imbalance (6 vs 1, all former smokers) was announced in April 2008.'},
      {q: 'Nektar recorded $146 million of Exubera-related revenue from Pfizer in 2007, while patients bought about $12 million in nine months. What does the gap mainly show?', options: ['Nektar overcharged Pfizer', 'Most sales happened outside the US', 'Supply and inventory were built for expected demand that never came', 'Accounting errors'], answer: 2, explain: 'Nektar was paid for making powder and inhalers. Pfizer later wrote off $661 million of Exubera inventory.'},
      {q: 'Novo Nordisk\'s CEO gave which reason for abandoning his company\'s inhaled insulin in 2008?', options: ['It caused cancer', 'The FDA had rejected it', 'It could not be manufactured', 'Inhaled mealtime insulin was unlikely to offer significant benefits over modern insulin injected with pens'], answer: 3, explain: 'The competitor had moved. Pens and analogs had made injections simple, and type 2 patients usually start with long-acting insulin.'},
      {q: 'Afrezza (2014) fixed Exubera\'s device size and milligram dosing. What does its modest performance suggest?', options: ['Device and dosing were real problems, but the deeper issues (payer math, lung testing, pens, basal-first treatment) remained', 'Device design never matters', 'Inhaled insulin does not work', 'Sanofi did not try to sell it'], answer: 0, explain: 'Sanofi sold €7.0 million in 2015 and exited. Fixing the visible flaws helped less than hoped because the structural barriers were unchanged.'},
      {q: 'If you were advising on a similar convenience product today, which early step would most directly have tested Exubera\'s biggest risk?', options: ['A larger efficacy trial', 'A new brand name', 'Asking payers and busy primary-care practices whether they would adopt it at the planned price and workflow, before building capacity', 'More advisory committee meetings'], answer: 2, explain: 'Efficacy was never the problem. The risks were adoption by doctors, coverage by payers and daily use by patients, all testable before the factory was sized.'},
    ]},

    // ---------------- 17. LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'Approval is not adoption', text: 'Regulators ask whether a drug works and is safe enough. The market asks whether anyone will choose it, prescribe it and pay for it. Exubera passed the first test and failed the second.', links: ['aduhelm', 'leqembi']},
      {title: 'Know all three customers', text: 'The patient uses it, the doctor gatekeeps it, the payer buys it. A product that delights one and burdens the other two will not scale.', links: ['sovaldi', 'zolgensma']},
      {title: 'Parity plus a premium is a hard sell', text: 'A convenience benefit that costs more needs someone to value the convenience in money. Payers value outcomes; Exubera\'s outcomes were the same as a cheaper product.', links: ['humira', 'sovaldi']},
      {title: 'Benchmark against the future baseline', text: 'Over a decade-long development program, the incumbent improves. Exubera was built to beat syringes and launched against pens and Lantus.', links: ['ozempic', 'keytruda']},
      {title: 'Rare risks show up late', text: 'A lung cancer signal emerged only after years of exposure in thousands of patients. Long-term safety commitments are not a formality.', links: ['vioxx', 'torcetrapib']},
      {title: 'A platform can outlive its first product', text: 'Inhaled delivery lost with insulin, but MannKind\'s dry-powder platform found a profitable use in pulmonary hypertension. Separate the technology bet from the product bet.', links: ['comirnaty', 'enhertu']},
    ]},

    // ---------------- 18. SOURCES ----------------
    {type: 'sources', title: 'Sources', items: [
      {text: 'Exubera (insulin human [rDNA origin]) Inhalation Powder, US prescribing information, Pfizer, version dated January 27, 2006 (dose equivalents, blister substitution, pulmonary function, cough, smoking, storage, release unit)', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2006/021868lbl.pdf'},
      {text: 'FDA news release P06-13: FDA Approves First Ever Inhaled Insulin Combination Product for Treatment of Diabetes, January 27, 2006 (archived)', url: 'http://web.archive.org/web/20090513024731/http://www.fda.gov/bbs/topics/news/2006/NEW01304.html'},
      {text: 'FDA Endocrinologic and Metabolic Drugs Advisory Committee, transcript, September 8, 2005 (votes; remarks by Woolf, Killion, Watts, Schell, Stoller)', url: 'https://www.fda.gov/ohrms/dockets/ac/05/transcripts/2005-4169T1.pdf'},
      {text: 'European Medicines Agency: Exubera, EPAR (authorisation 24 January 2006; withdrawn for commercial reasons)', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/exubera'},
      {text: 'Pfizer: Third-quarter 2007 results, October 18, 2007 (Kindler and D\'Amelio statements, $2.8 billion charge and breakdown)', url: 'https://www.pfizer.com/news/press-release/press-release-detail/pfizer_reports_third_quarter_2007_results_reconfirms_2007_and_2008_revenue_and_adjusted_diluted_eps_1_guidance'},
      {text: 'Pfizer Form 10-Q, first quarter 2007 (launch countries, September 2006 US supply, "disappointed with the slow acceptance," April 2007 sales force and DTC plans; Sanofi-Aventis acquisition accounting)', url: 'https://www.sec.gov/Archives/edgar/data/0000078003/000007800307000108/q1-07pfe1.htm'},
      {text: 'Pfizer Form 10-Q, third quarter 2007 (exit rationale including payers; charges net of tax)', url: 'https://www.sec.gov/Archives/edgar/data/0000078003/000007800307000311/q3-07pfe1.htm'},
      {text: 'Pfizer 2007 Financial Report, Form 10-K exhibit 13 ($135 million payment to partner; $1.4 billion including transaction costs; assets written off)', url: 'https://www.sec.gov/Archives/edgar/data/0000078003/000093041308001360/c52104_ex13.htm'},
      {text: 'Sanofi-Aventis press release, January 13, 2006: transfer of Exubera rights and Diabel stake to Pfizer for $1.3 billion (Form 6-K)', url: 'https://www.sec.gov/Archives/edgar/data/0001121404/000090342306000031/ex99-3_0113.htm'},
      {text: 'Sanofi-Aventis Form 20-F for 2006 (€460 million gain; Lantus sales 2005 and 2006; OptiClik and SoloSTAR pens)', url: 'https://www.sec.gov/Archives/edgar/data/0001121404/000119312507072848/d20f.htm'},
      {text: 'Mack GS. Pfizer dumps Exubera. Nature Biotechnology 2007;25:1331–1332 (analyst estimates $1–4 billion; $12 million in nine months; Nektar "heard it over the wire")', url: 'https://www.nature.com/articles/nbt1207-1331'},
      {text: 'Heinemann L. The failure of Exubera: are we beating a dead horse? J Diabetes Sci Technol 2008;2:518–529', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2769732/'},
      {text: 'Quattrin T et al. Efficacy and safety of inhaled insulin (Exubera) compared with subcutaneous insulin therapy in patients with type 1 diabetes. Diabetes Care 2004;27:2622–2627', url: 'https://pubmed.ncbi.nlm.nih.gov/15504996/'},
      {text: 'Skyler JS et al. Efficacy of inhaled human insulin in type 1 diabetes mellitus: a randomised proof-of-concept study. Lancet 2001;357:331–335', url: 'https://pubmed.ncbi.nlm.nih.gov/11210993/'},
      {text: 'Rosenstock J et al. Two-year pulmonary safety and efficacy of inhaled human insulin (Exubera) in adult patients with type 2 diabetes. Diabetes Care 2008;31:1723–1728', url: 'https://pubmed.ncbi.nlm.nih.gov/18535196/'},
      {text: 'Borja N, Daniel K, Tourtelot JB. Insulin inhalation powder (Exubera) for diabetes mellitus. American Family Physician 2007;75:1546–1547 (prices, device notes)', url: 'https://www.aafp.org/pubs/afp/issues/2007/0515/p1546.html'},
      {text: 'NICE technology appraisal guidance 113: Inhaled insulin for the treatment of type 1 and type 2 diabetes, December 2006 (recommendations, cost, cost-effectiveness results) (archived PDF)', url: 'http://web.archive.org/web/20080910082341/http://www.nice.org.uk/nicemedia/pdf/TA113guidance.pdf'},
      {text: 'Inhale Therapeutic Systems Form 10-K for 2001 (January 1995 Pfizer agreement; phase 2 and 3 history; November 1998 Aventis deal and Frankfurt plant; 1–5 micron powders)', url: 'https://www.sec.gov/Archives/edgar/data/906709/000091205702012782/a2075159z10-k.htm'},
      {text: 'Nektar Therapeutics Form 10-K for 2002 (name change January 15, 2003; December 2001 and October 2002 pulmonary-data decisions)', url: 'https://www.sec.gov/Archives/edgar/data/906709/000104746903010902/a2106664z10-k.htm'},
      {text: 'Nektar Therapeutics Form 10-K for 2006 (San Carlos powder manufacturing; contract inhaler manufacturers)', url: 'https://www.sec.gov/Archives/edgar/data/906709/000119312507044514/d10k.htm'},
      {text: 'Nektar Therapeutics Form 10-K for 2007 (November 9, 2007 termination and $135 million payment; $146.2 million Exubera revenue from Pfizer; 69% of revenue; February 2008 workforce reduction)', url: 'https://www.sec.gov/Archives/edgar/data/906709/000119312508043391/d10k.htm'},
      {text: 'Nektar press release, April 9, 2008: termination of partner negotiations; Exubera label lung cancer warning (Form 8-K exhibit)', url: 'https://www.sec.gov/Archives/edgar/data/0000906709/000114420408021336/v110118_ex99-1.htm'},
      {text: 'Nektar press release: Nektar sells pulmonary business to Novartis for $115 million (2008)', url: 'https://ir.nektar.com/news-releases/news-release-details/nektar-sells-pulmonary-business-novartis-115-million-and-nektar'},
      {text: 'Novo Nordisk company announcement: refocus of inhaled insulin and discontinuation of AERx, January 2008 (Form 6-K)', url: 'https://www.sec.gov/Archives/edgar/data/353278/000120864608000019/c97839.txt'},
      {text: 'Eli Lilly and Company Form 8-K, March 2008: termination of AIR Insulin program', url: 'https://www.sec.gov/Archives/edgar/data/59478/000129993308001365/htm_26085.htm'},
      {text: 'FDA news release: FDA approves Afrezza to treat diabetes, June 27, 2014 (archived)', url: 'http://web.archive.org/web/20170311085255/https://www.fda.gov/NewsEvents/Newsroom/PressAnnouncements/ucm403122.htm'},
      {text: 'MannKind Corporation Form 10-K for 2014 (Sanofi license: $150 million upfront, milestones, profit split) and Form 10-K for 2015 (Sanofi 2015 sales €7.0 million; termination notice January 4, 2016)', url: 'https://www.sec.gov/Archives/edgar/data/899460/000119312516505366/d107849d10k.htm'},
      {text: 'MannKind Corporation Form 10-K for 2025 (Afrezza net revenue 2023–2025; royalties from United Therapeutics)', url: 'https://www.sec.gov/Archives/edgar/data/899460/000119312526073516/mnkd-20251231.htm'},
      {text: 'Oleck J, Kassam S, Goldman JD. Commentary: Why was inhaled insulin a failure in the market? Diabetes Spectrum 2016;29:180–184', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5001220/'},
      {text: 'Khunti K et al. Clinical inertia in people with type 2 diabetes: a retrospective cohort study of more than 80,000 people. Diabetes Care 2013;36:3411–3417', url: 'https://pubmed.ncbi.nlm.nih.gov/23877982/'},
      {text: 'Ochs M et al. The number of alveoli in the human lung. Am J Respir Crit Care Med 2004;169:120–124', url: 'https://pubmed.ncbi.nlm.nih.gov/14512270/'},
      {text: 'Quianzon CC, Cheikh I. History of insulin. J Community Hosp Intern Med Perspect 2012 (first injection January 1922; 1982 recombinant insulin; lispro 1996; glargine 2000)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3714061/'},
      {text: 'Weickert M. The odyssey of inhaled insulin (essay; Gänsslen\'s 1920s results, Patton and Platz, spray-drying)', url: 'https://michaelweickertphd.substack.com/p/the-odyssey-of-inhaled-insulin'},
      {text: 'PharmaTimes: Profits fall as Pfizer pulls poor-performing Exubera from market, October 2007 (Nektar CEO\'s criticism of Pfizer\'s marketing)', url: 'https://pharmatimes.com/news/profits_fall_as_pfizer_pulls_poor-performing_exubera_from_market_991157/'},
      {text: 'Medical Design and Outsourcing: MedTech Memoirs: Inhalable insulin flops... twice (device size, "bong" comparison)', url: 'https://www.medicaldesignandoutsourcing.com/medtech-memoirs-inhalable-insulin-flops-twice/'},
    ]},
  ],
});
