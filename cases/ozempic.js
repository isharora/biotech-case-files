// Ozempic & Wegovy (semaglutide), Novo Nordisk. See GUIDE.md.
// The 31 amino acids of GLP-1(7-37) for the peptide figure, with semaglutide's substitutions.
const OZ_BEADS = (() => {
  const seq = 'HAEGTFTSDVSSYLEGQAAKEFIAWLVKGRG'.split('');
  seq[1] = 'Aib'; seq[27] = 'R';
  let s = '';
  seq.forEach((aa, i) => {
    const x = 45 + i * 26.9, y = 250, pos = i + 7;
    const part = i === 1 ? 'aib' : i === 19 ? 'lys26' : i === 27 ? 'arg34' : '';
    const cls = i === 1 || i === 27 ? 'il-4' : i === 19 ? 'il-2' : 'il-1s';
    const r = i === 1 ? 15 : 12.5;
    s += '<g' + (part ? ' data-part="' + part + '"' : '') + '><circle cx="' + x + '" cy="' + y + '" r="' + r + '" class="' + cls + ' il-line"/><text x="' + x + '" y="' + (y + 4.5) + '" text-anchor="middle" class="il-text-2" style="font-size:' + (aa.length > 1 ? 10.5 : 13) + 'px;font-weight:600">' + aa + '</text></g>';
    if ([7, 8, 26, 34, 37].includes(pos)) s += '<text x="' + x + '" y="' + (y + 34) + '" text-anchor="middle" class="il-text-2">' + pos + '</text>';
  });
  s += '<text x="50" y="205" class="il-text">Aib at 8</text><path d="M72 212 L72 232" class="il-line il-none"/>';
  s += '<text x="700" y="205" class="il-text">Arg at 34</text><path d="M771 212 L771 235" class="il-line il-none"/>';
  return s;
})();

registerCase({
  id: 'ozempic', kind: 'success',
  brand: 'Ozempic & Wegovy', generic: 'semaglutide', company: 'Novo Nordisk',
  tagline: 'A gut [[hormone]] that lasts two minutes in the blood was rebuilt to last a week. It started as a diabetes drug, became the first truly effective obesity medicine, and upended an industry.',
  chips: [['Disease', '[[type 2 diabetes]], [[obesity]]'], ['Modality', '[[peptide]] ([[GLP-1 receptor agonist]])'], ['Target', '[[GLP-1]] receptor'], ['Approved', '2017 (Ozempic), 2021 (Wegovy)']],
  readingTime: 40,
  stats: [
    {v: '~2 min → ~1 wk', l: '[[half-life]] of natural [[GLP-1]] vs semaglutide (about 165 hours)', n: 'Lasker Foundation; Drucker 2017 review'},
    {v: '14.9%', l: 'Average weight lost at 68 weeks in STEP 1, vs 2.4% on [[placebo]]', n: 'Wilding et al., NEJM 2021'},
    {v: '20%', l: 'Fewer heart attacks, strokes and cardiovascular deaths in SELECT (people with obesity, no diabetes)', n: 'Lincoff et al., NEJM 2023'},
    {v: 'DKK 228B', l: '2025 sales of Ozempic, Wegovy and Rybelsus combined (well over $30B)', n: 'Novo Nordisk 2025 financial report'},
    {v: '$969 vs $59', l: 'Monthly [[list price]] of Ozempic in the US vs Germany, 2024', n: 'US Senate HELP Committee, 2024'},
  ],
  emblem: `<svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="138" class="il-1s"/>
    <ellipse cx="118" cy="200" rx="72" ry="48" class="il-8s il-line"/>
    <text x="118" y="206" text-anchor="middle" class="il-text-2">albumin</text>
    <path d="M168 84 L158 98 L170 110 L158 122 L170 134 L156 146 L164 156" class="st-4 il-none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <g>
      <circle cx="100" cy="80" r="12" class="il-1"/><circle cx="122" cy="71" r="12" class="il-4"/><circle cx="145" cy="68" r="12" class="il-1"/>
      <circle cx="168" cy="72" r="12" class="il-2"/><circle cx="190" cy="80" r="12" class="il-1"/><circle cx="210" cy="92" r="12" class="il-1"/>
      <circle cx="227" cy="107" r="12" class="il-1"/><circle cx="240" cy="125" r="12" class="il-4"/><circle cx="248" cy="146" r="12" class="il-1"/>
    </g>
    <rect x="186" y="214" width="92" height="44" rx="12" class="il-paper il-line"/>
    <text x="232" y="242" text-anchor="middle" class="il-text">1× a week</text>
  </svg>`,
  facts: {start: 1982, firstHuman: null, approval: 2017, end: null, peakSalesB: 34, pivotalN: 1961,
    area: 'metabolic', modality: 'peptide', target: 'GLP-1 receptor'},
  themes: ['competition', 'pricing', 'manufacturing', 'biology-surprise'],
  glossary: {
    'glucose': 'The sugar that circulates in blood and fuels cells. A healthy adult has only about 4 grams (a teaspoon) of it in the whole bloodstream at any moment.',
    'pancreas': 'An organ behind the stomach. Most of it makes digestive juices; small clusters of cells inside it (islets) make insulin and glucagon.',
    'beta cell': 'The insulin-making cells in the pancreas. In type 2 diabetes they gradually fail to keep up with demand.',
    'glucagon': 'A pancreatic hormone with the opposite job to insulin: it tells the liver to release sugar into the blood.',
    'type 2 diabetes': 'A chronic disease in which blood sugar stays too high, because the body responds poorly to insulin and the pancreas cannot make enough extra to compensate.',
    'insulin resistance': 'When muscle, fat and liver cells respond weakly to insulin, so more insulin is needed to move the same amount of sugar out of the blood.',
    'obesity': 'Excess body fat that harms health. Usually defined in adults as a body-mass index of 30 or more.',
    'BMI': 'Body-mass index: weight in kilograms divided by height in meters squared. 25–29.9 is "overweight", 30 or more is "obesity". A crude but cheap screening measure.',
    'incretin': 'A gut hormone, released when you eat, that makes the pancreas release more insulin. GLP-1 and GIP are the two main ones.',
    'incretin effect': 'The observation that sugar swallowed by mouth triggers much more insulin than the same amount of sugar infused into a vein. The difference comes from gut hormones.',
    'GLP-1': 'Glucagon-like peptide-1: a 30-odd amino acid hormone released by the gut after meals. It boosts insulin (only when sugar is high), lowers glucagon, slows the stomach and signals fullness to the brain.',
    'GLP-1 receptor agonist': 'A drug that switches on the GLP-1 receptor, mimicking the natural hormone but lasting much longer. Exenatide, liraglutide, semaglutide and others.',
    'GIP': 'Glucose-dependent insulinotropic polypeptide, the other main incretin hormone. Lilly\'s tirzepatide activates both the GIP and GLP-1 receptors.',
    'L-cell': 'A hormone-making cell in the lining of the lower gut that senses nutrients and releases GLP-1.',
    'proglucagon': 'A larger precursor protein that is cut into several hormones: glucagon in the pancreas, and GLP-1 and GLP-2 in the gut.',
    'amino acid': 'One of the 20 building blocks strung together to make peptides and proteins. Each has a one-letter code (H, A, E, G…).',
    'Aib': 'Aminoisobutyric acid: an amino acid not used by the body to build proteins. Swapped in at position 8 of semaglutide, it blocks the enzyme DPP-4 from cutting the peptide.',
    'DPP-4': 'Dipeptidyl peptidase-4: an enzyme in the blood that snips the first two amino acids off GLP-1, inactivating it within minutes.',
    'DPP-4 inhibitor': 'A pill (such as sitagliptin, 2006) that blocks the DPP-4 enzyme so the body\'s own GLP-1 lasts a little longer. Lowers blood sugar modestly with little effect on weight.',
    'albumin': 'The most abundant protein in blood plasma. It carries fats and other molecules around the body. Drugs that stick to it are protected from breakdown and from being filtered out by the kidneys.',
    'fatty acid': 'A chain of carbon atoms with an acid group at one end, the building block of fats. Albumin naturally carries fatty acids, which is why attaching one to a drug makes it hitch a ride.',
    'exendin-4': 'A GLP-1-like peptide found in Gila monster venom by John Eng. Resistant to DPP-4, it became the first GLP-1 drug, exenatide (Byetta).',
    'gastric emptying': 'The rate at which food leaves the stomach for the intestine. GLP-1 slows it, which blunts blood sugar spikes and prolongs fullness.',
    'hypothalamus': 'A small region at the base of the brain that regulates hunger, thirst, body temperature and hormones.',
    'subcutaneous': 'Injected into the fat just under the skin, usually with a small pen needle.',
    'bioavailability': 'The fraction of a dose that reaches the bloodstream. Swallowed peptides usually have almost none; oral semaglutide gets only a small fraction through.',
    'SNAC': 'Sodium N-[8-(2-hydroxybenzoyl)amino]caprylate: an absorption enhancer from Emisphere Technologies, co-formulated with semaglutide in the Rybelsus tablet so it can be absorbed in the stomach.',
    'dose escalation': 'Starting with a low dose and stepping it up over weeks or months so side effects (for GLP-1 drugs, mainly nausea) are tolerable.',
    'steady state': 'The point, after repeated doses, where the amount of drug added each dose equals the amount cleared, so levels rise and fall in the same pattern each cycle. Takes about 4–5 half-lives to reach.',
    'estimand': 'A precise statement of what a trial is estimating, including how it treats people who stop the drug. "Treatment policy" counts everyone as randomized; "trial product" asks what happens if people keep taking it.',
    'cardiovascular outcomes trial': 'A large, long trial that counts heart attacks, strokes and cardiovascular deaths, rather than a lab marker. Required for new diabetes drugs since the late 2000s.',
    'MACE': 'Major adverse cardiovascular events: usually a composite of cardiovascular death, non-fatal heart attack and non-fatal stroke.',
    'noninferiority': 'A trial design that asks whether a drug is "not unacceptably worse" than a comparator, within a pre-set margin, rather than whether it is better.',
    'lean mass': 'Everything in the body that is not fat: muscle, organs, bone, water. Measured by DXA scans; not the same thing as muscle alone.',
    'DXA': 'Dual-energy X-ray absorptiometry: a low-dose scan that splits body weight into fat, lean tissue and bone.',
    'retinopathy': 'Damage to the blood vessels of the retina, a common complication of diabetes. Very rapid drops in blood sugar can temporarily worsen it.',
    'MASH': 'Metabolic dysfunction-associated steatohepatitis: fatty liver with inflammation and scarring, closely linked to obesity and diabetes.',
    'tirzepatide': 'Eli Lilly\'s once-weekly injected peptide that activates both GIP and GLP-1 receptors. Sold as Mounjaro (diabetes, 2022) and Zepbound (obesity, 2023).',
    'cagrilintide': 'A long-acting version of amylin, another satiety hormone. Novo combines it with semaglutide in CagriSema.',
    'compounding pharmacy': 'A pharmacy that mixes drugs itself for individual patients. US law lets compounders copy an approved drug when it is on the FDA shortage list, with much less oversight than a manufacturer.',
    'shortage list': 'The FDA\'s official list of drugs in shortage. Being on it legally opens the door to compounded copies.',
    'fill-finish': 'The last manufacturing step: filling sterile drug into vials, syringes or pens and sealing them. Often the real bottleneck for injectables.',
    'PBM': 'Pharmacy benefit manager: a middleman that runs drug benefits for US insurers, negotiates rebates from manufacturers and decides which drugs are on formularies.',
    'Medicare Part D': 'The US government\'s prescription drug benefit for people aged 65 and over, delivered through private plans. By law it excludes drugs used for weight loss.',
    'Inflation Reduction Act': 'A 2022 US law that, among other things, lets Medicare negotiate prices directly for some of its most expensive drugs.',
    'persistence': 'How long patients keep taking a drug once they start. For chronic drugs it drives revenue as much as the number of new patients does; think of it as the opposite of churn.',
  },
  sections: [
    // ---------------- 1. COLD OPEN ----------------
    {type: 'story', kicker: 'Cold open', title: 'A lab with nobody in it', tocTitle: 'Cold open', html: `
<p>In the 1990s, Lotte Bjerre Knudsen came back to work at Novo Nordisk after maternity leave and found her lab nearly empty. She was a biochemist who had started her career at the Danish company working on enzymes for laundry detergent, and had moved into drug research. Her new boss, the head of research Mads Krogsgaard Thomsen, gave her a blunt assignment: work out what to do with a gut hormone called [[GLP-1]]. And do it now, because this was the last chance.</p>
<p>GLP-1 was an odd thing to bet a career on. Scientists in Boston and Copenhagen had shown a few years earlier that this small [[peptide]], released by the gut after a meal, made the [[pancreas]] pour out [[insulin]]. That was exciting for [[type 2 diabetes]]. But natural GLP-1 falls apart in the bloodstream within a couple of minutes. A drug that disappears that quickly would need to be dripped into a vein around the clock. Nobody takes a diabetes drug that way.</p>
<p>Knudsen's team spent the next two decades solving that problem. Their first answer, liraglutide, lasted about 13 hours and became a once-a-day injection. Their second, semaglutide, lasted about a week. Along the way, Knudsen became convinced of something much of the industry doubted: that GLP-1 also acted on the brain, and that a long-lasting version could treat [[obesity]], a condition whose drugs had a history of disappointing sales and safety withdrawals.</p>
<p>Fast forward to <b>1 September 2023</b>. Novo Nordisk, a century-old Danish insulin maker, closed the trading day worth about $428 billion, passing the French luxury group LVMH to become the most valuable listed company in Europe. The reason had two brand names. <b>Ozempic</b>, semaglutide for type 2 diabetes, and <b>Wegovy</b>, the same molecule at a higher dose for obesity. People were queuing at pharmacies, pens were in short supply, and "Ozempic" had become a household word.</p>
<p>Two years later, the story looked different again. A rival from Eli Lilly was winning head-to-head trials, copycat versions made by pharmacies had flooded the US market, the White House was pressing on price, and Novo had replaced its CEO. Lilly, not Novo, became the first healthcare company worth a trillion dollars.</p>
<p>This case follows the whole arc: the biology of blood sugar and appetite, the contested discovery, the engineering that turned a two-minute hormone into a weekly shot, the trials that surprised even the people running them, and the business lessons of being first to a vast market and then having to defend it.</p>`},

    // ---------------- 2. DISEASE FROM ZERO ----------------
    {type: 'story', kicker: 'The disease from zero', title: 'Sugar, insulin and a system that drifts', tocTitle: 'Blood sugar from zero', html: `
<p>Start with the fuel. Almost every cell in your body burns a sugar called [[glucose]]. It arrives from food, and the liver also makes and stores it. The striking thing is how little is in circulation at any moment: in a 70 kg adult, the entire bloodstream holds only about <b>4 grams</b> of glucose, roughly a teaspoon. Eat a bowl of pasta and you absorb many times that. So the body runs a tight control loop to keep the level steady.</p>
<p>The main controller is a [[hormone]] called [[insulin]], made by the [[beta cell|beta cells]] of the pancreas. When blood sugar rises, beta cells release insulin. Insulin is a key that tells muscle, fat and liver cells to pull glucose out of the blood and store it. When sugar falls, a second pancreatic hormone, [[glucagon]], tells the liver to release some back. Two hormones pulling in opposite directions keep the teaspoon about right.</p>
<h3>What goes wrong in type 2 diabetes</h3>
<p>In [[type 2 diabetes]], the loop drifts. First, the body's tissues become less responsive to insulin, a state called [[insulin resistance]]. Excess body fat, especially around the organs, is the strongest driver, alongside genes, age and inactivity. The pancreas compensates by making more insulin, sometimes for years. Eventually beta cells can't keep up, and blood sugar stays high. Doctors track this with a blood test, [[HbA1c]], that reflects the average over the past two to three months.</p>
<p>High sugar is not dangerous because it feels bad; most people feel fine for years. It is dangerous because, over a decade or two, it damages blood vessels: in the eyes (blindness), kidneys (dialysis), nerves (amputations) and heart and brain (heart attacks and strokes). The Lasker Foundation puts the global number with type 2 diabetes at nearly 400 million people.</p>
<h3>The treatments before GLP-1</h3>
<p>For decades, the toolkit was: diet and exercise; metformin, a cheap pill that makes the liver release less sugar; drugs called sulfonylureas that force the pancreas to release insulin (which can push sugar too low); and eventually insulin injections. Many of these caused weight <i>gain</i>, which made the underlying problem worse. Doctors wanted something that lowered sugar, didn't cause dangerous lows, and ideally helped people lose weight.</p>
<h3>Obesity: the bigger, stranger problem</h3>
<p>Obesity is usually defined by [[BMI]], weight divided by height squared: 30 or more counts as obesity. In the US, about <b>40% of adults</b> met that bar in 2021–2023, according to the CDC, and about 9% had severe obesity. Globally, the Lasker Foundation estimates about a billion people live with obesity.</p>
<p>The key biological fact is that body weight is <i>defended</i>. When someone loses weight by dieting, hunger hormones rise and energy use falls, pushing weight back up. That is why most diets work for a few months and then stop working. Obesity drugs had tried to override this system for 60 years. Most were modest, and several were pulled from the market for harming the heart, the lungs or the mind. We'll come back to that history, because it shaped every decision Novo made.</p>`},

    {type: 'figure', title: 'The body\'s fuel system, and where GLP-1 plugs in', intro: 'The organs involved in blood sugar and appetite. Hover or tap each one.',
      svg: `<svg viewBox="0 0 900 430">
        <g data-part="blood"><path d="M30 250 H870" class="st-7 flow il-none" stroke-width="6"/><text x="36" y="274" class="il-text-2">bloodstream</text></g>
        <g data-part="brain"><ellipse cx="150" cy="110" rx="100" ry="64" class="il-5s il-line"/>
          <path d="M90 95 C105 75 125 90 140 75 C155 60 175 85 195 72 M85 125 C110 110 130 130 155 115 C175 105 195 125 215 112" class="il-line il-none"/>
          <circle cx="160" cy="150" r="9" class="il-5"/><text x="150" y="40" text-anchor="middle" class="il-title">Brain</text>
          <text x="176" y="190" class="il-text-2">hypothalamus and brainstem</text></g>
        <g data-part="stomach"><path d="M330 55 C298 66 298 124 330 152 C360 180 420 176 432 142 C442 112 412 102 397 116 C386 126 366 116 366 92 C366 68 356 50 330 55Z" class="il-2s il-line"/>
          <text x="445" y="86" class="il-text">Stomach</text></g>
        <g data-part="gut"><path d="M290 345 C330 315 370 375 410 345 C450 315 490 375 530 345" style="stroke:var(--il-3s)" stroke-width="30" stroke-linecap="round" fill="none"/>
          <path d="M290 345 C330 315 370 375 410 345 C450 315 490 375 530 345" class="il-line il-none"/>
          <circle cx="330" cy="332" r="7" class="il-3"/><circle cx="410" cy="345" r="7" class="il-3"/><circle cx="490" cy="358" r="7" class="il-3"/>
          <text x="290" y="405" class="il-text">Lower gut: L-cells release GLP-1</text></g>
        <g data-part="pancreas"><path d="M545 150 C565 110 645 105 705 120 C745 128 750 160 720 170 C665 185 605 190 565 180 C545 175 540 162 545 150Z" class="il-4s il-line"/>
          <circle cx="600" cy="150" r="6" class="il-3"/><circle cx="650" cy="140" r="6" class="il-3"/><circle cx="695" cy="152" r="6" class="il-3"/>
          <text x="600" y="96" class="il-text">Pancreas</text></g>
        <g data-part="liver"><path d="M565 320 C585 290 705 285 745 305 C765 318 745 362 705 372 C655 382 585 372 570 352Z" class="il-8s il-line"/>
          <text x="655" y="338" text-anchor="middle" class="il-text">Liver</text></g>
        <g data-part="tissue"><ellipse cx="815" cy="140" rx="52" ry="38" class="il-7s il-line"/><text x="815" y="145" text-anchor="middle" class="il-text">Muscle</text>
          <circle cx="795" cy="340" r="24" class="il-4s il-line"/><circle cx="838" cy="330" r="22" class="il-4s il-line"/><circle cx="820" cy="372" r="22" class="il-4s il-line"/><text x="818" y="410" text-anchor="middle" class="il-text">Fat</text></g>
        <path d="M410 318 V262" class="st-4 flow il-none" stroke-width="3"/>
        <path d="M170 248 V168" class="st-4 flow il-none" stroke-width="3"/>
        <path d="M640 248 V192" class="st-4 flow il-none" stroke-width="3"/>
        <path d="M372 248 V182" class="st-4 flow il-none" stroke-width="3"/>
        <text x="420" y="300" class="il-small">GLP-1 enters blood</text>
      </svg>`,
      hotspots: {
        gut: {title: 'Lower gut (L-cells)', text: 'Specialised [[L-cell|L-cells]] in the gut lining sense sugars and fats passing by and release [[GLP-1]] into the blood. Because it comes from the far end of the small intestine, Jens Juul Holst has described GLP-1 as an "ileal brake": a signal that food has arrived and the system should slow down.'},
        pancreas: {title: 'Pancreas', text: 'Beta cells make [[insulin]]; alpha cells make [[glucagon]]. GLP-1 makes beta cells release more insulin, but only when glucose is high, and it lowers glucagon. That glucose-dependence is why GLP-1 drugs rarely push sugar dangerously low on their own.'},
        stomach: {title: 'Stomach', text: 'GLP-1 slows [[gastric emptying]]: food leaves the stomach more slowly, so sugar enters the blood more gradually and you feel full for longer. It also contributes to the nausea that is the drugs\' commonest side effect.'},
        brain: {title: 'Brain', text: 'GLP-1 signals reach appetite centers in the [[hypothalamus]] and brainstem, partly via nerves from the gut. Long-acting drugs appear to act on these circuits directly: people feel full sooner and report fewer food cravings. This is the part that turns a diabetes drug into an obesity drug.'},
        liver: {title: 'Liver', text: 'The liver stores glucose and releases it when glucagon tells it to. In type 2 diabetes it releases too much, even when blood sugar is already high. Less glucagon means less of this overflow.'},
        tissue: {title: 'Muscle and fat', text: 'The main destinations for glucose when insulin says "store it". In [[insulin resistance]] they respond weakly, so the pancreas has to shout louder.'},
        blood: {title: 'Bloodstream', text: 'Carries about 4 grams of glucose in a 70 kg adult, plus the hormones that regulate it. Natural GLP-1 survives here for only a minute or two before the enzyme [[DPP-4]] inactivates it.'},
      },
      caption: 'Schematic, not anatomical. Dashed yellow lines show GLP-1 travelling from the gut to its targets.'},

    {type: 'callout', variant: 'misconception', heading: '"Obesity is just a willpower problem"', html: `<p>The trials in this case make this hard to sustain. In STEP 1, people on placebo received the same diet and exercise counselling as people on semaglutide and lost about 2.4% of their weight in 68 weeks; the drug group lost about 14.9%. When the drug stopped, most of the weight came back within a year. Nothing about the people's character changed; a hormone signal did. Body weight is regulated, like blood pressure or blood sugar, and the regulator can be turned.</p>`},

    // ---------------- 3. KEY INSIGHT ----------------
    {type: 'story', kicker: 'The key insight', title: 'The gut talks to the pancreas', tocTitle: 'Discovery and credit', html: `
<p>The idea behind GLP-1 is more than a century old. In 1906, researchers in Liverpool found that an extract of intestine could lower blood sugar and called the active ingredient "incretine". The idea faded until the 1960s, when new blood tests for insulin allowed a clean experiment: give people the same amount of glucose by mouth or by vein, and measure insulin. Swallowed sugar triggered far more insulin. By 1964, as Holst summarizes the history, it was clear that insulin release after a meal is largely driven by gut hormones. This is the <b>[[incretin effect]]</b>. In people with type 2 diabetes it is much weaker, which hinted that restoring it could help.</p>
<p>One incretin, [[GIP]], was found in the 1970s, but it turned out to work poorly in people with diabetes. The other had to be discovered by reading genes.</p>
<h3>An anglerfish, a hamster and a peptide chemist</h3>
<p>In the late 1970s, Joel Habener, an endocrinologist at Massachusetts General Hospital (MGH), set out to clone the gene for glucagon. Rules on recombinant DNA work with mammalian genes were strict at the time, so he used the anglerfish, which has an organ packed with glucagon-making cells. In 1982, his team reported that the gene encoded a larger precursor, [[proglucagon]], containing glucagon plus a second, glucagon-like peptide. In 1983, Graeme Bell's group at Chiron found that the hamster version carried two such peptides, and called one glucagon-like peptide-1.</p>
<p>The question was which piece, exactly, was the active hormone. That work fell largely to <b>Svetlana Mojsov</b>, a peptide chemist trained at Rockefeller University in solid-phase synthesis under Bruce Merrifield, who ran MGH's peptide synthesis facility from 1983. She made the candidate peptides and antibodies to detect them. In 1986 she and Habener reported that a shortened form, GLP-1(7–37), was a major form in the intestine. In 1987, Mojsov, Gordon Weir and Habener showed in the <i>Journal of Clinical Investigation</i> that tiny amounts of synthetic GLP-1(7–37), at concentrations like those in blood, strongly stimulated insulin release from a rat pancreas, while the longer form did nothing even at vastly higher doses. The same year, Daniel Drucker, then a fellow in Habener's lab, showed with Mojsov and Habener that GLP-1 switched on insulin production in cultured cells. In Copenhagen, <b>Jens Juul Holst</b>'s group independently identified the truncated peptide in the gut and showed its insulin-releasing effect.</p>
<h3>Whose discovery was it?</h3>
<p>Credit for GLP-1 has been contested for decades, and it is worth being even-handed. Habener's lab conceived the gene work and led the research program. Mojsov was first author on the key 1987 paper and did the chemistry that identified the active form. Holst's group reached the same answer from a different direction. Drucker went on to build much of the field's biology at the University of Toronto.</p>
<p>In 1992, two MGH patents on GLP-1 were issued naming Habener as sole inventor. Mojsov challenged them with lawyers' help in 1997 and was added as a co-inventor on four patents between 2004 and 2006, according to reporting in <i>Science</i>. For years, major prizes went to combinations of Habener, Drucker and Holst without her. After <i>Science</i> and STAT published detailed accounts in September 2023, the picture shifted. In 2024 the <b>Lasker~DeBakey Clinical Medical Research Award</b> went to Habener and Mojsov "for the discovery" of GLP-1(7–37), and to Knudsen for turning it into long-acting medicines for obesity. Drucker and Holst, who share many other honours, were not included that year. The lesson for an outsider is that "who discovered it" often has several true answers.</p>
<h3>The Gila monster</h3>
<p>The first GLP-1 drug came from a lizard. John Eng, an endocrinologist at the Veterans Affairs medical center in the Bronx, became curious about the Gila monster, a lizard that can go long periods without eating yet keeps its blood sugar steady. He analyzed its venom, and in 1992 reported a peptide he called [[exendin-4]]. Exendin-4 resembled GLP-1 closely and activated the same [[receptor]], but a small difference near its front end made it immune to the enzyme that destroys GLP-1. Its half-life in people was about 2.4 hours instead of 2 minutes.</p>
<p>In 1996, Eng licensed it to a San Diego company, Amylin Pharmaceuticals. Developed with Eli Lilly, it was approved in April 2005 as <b>Byetta (exenatide)</b>, a twice-daily injection. It lowered blood sugar and produced modest weight loss, about 1.6 kg on average. It proved the idea worked in patients. It also showed its limits: twice-daily shots, nausea and a small effect on weight.</p>`},

    {type: 'table', title: 'Who did what', intro: 'The GLP-1 story has many authors. A simplified map, with the recognition each has received.',
      columns: ['Person', 'Where', 'Contribution', 'Recognition (selected)'],
      rows: [
        ['Joel Habener', 'Massachusetts General Hospital', 'Cloned the anglerfish [[proglucagon]] gene (1982); led the MGH program; senior author on the 1987 papers', 'Lasker Award 2024; Harrington Prize 2017 (with Drucker and Holst)'],
        ['Svetlana Mojsov', 'MGH, later Rockefeller University', 'Synthesised the peptides; identified GLP-1(7–37) as the active form; first author of the 1987 JCI paper', 'Lasker Award 2024; added as co-inventor on MGH patents 2004–2006'],
        ['Daniel Drucker', 'MGH, then University of Toronto', 'Showed GLP-1 switches on insulin genes (1987); decades of work on GLP-1 and GLP-2 biology', 'Harrington Prize 2017'],
        ['Jens Juul Holst', 'University of Copenhagen', 'Independently identified truncated GLP-1 in the gut and its insulin effect (1987); showed [[DPP-4]] breakdown', 'Harrington Prize 2017'],
        ['John Eng', 'VA Medical Center, Bronx', 'Discovered [[exendin-4]] in Gila monster venom (1992); licensed it to Amylin', 'Golden Goose Award 2013'],
        ['Lotte Bjerre Knudsen', 'Novo Nordisk', 'Led GLP-1 drug discovery; the fatty-acid and [[albumin]] strategy behind liraglutide; pushed obesity', 'Lasker Award 2024'],
        ['Jesper Lau, Thomas Kruse and team', 'Novo Nordisk', 'Medicinal chemistry that produced semaglutide', 'Lead authors of the 2015 J Med Chem discovery paper'],
      ],
      caption: 'Sources: Lasker Foundation; Drucker, Habener and Holst, JCI 2017; Science (2023) and STAT (2023) reporting on Mojsov; Golden Goose Award; Lau et al., J Med Chem 2015.'},

    // ---------------- 4. MECHANISM ----------------
    {type: 'mechanism', title: 'How GLP-1 works, and what semaglutide changes', intro: 'Step through one meal, then see what a week-long drug does differently.',
      svg: `<svg viewBox="0 0 760 440" class="ozmech"><style>.ozmech .il-text{font-size:21px}.ozmech .il-text-2,.ozmech .il-small{font-size:18px}</style>
        <g data-part="blood"><path d="M20 250 H740" class="st-7 flow il-none" stroke-width="5"/><text x="24" y="240" class="il-small">bloodstream</text></g>
        <g data-part="brain"><ellipse cx="380" cy="72" rx="100" ry="52" class="il-5s il-line"/>
          <path d="M320 62 C335 45 355 60 370 48 C385 38 405 58 425 46 M315 90 C340 78 360 96 385 84 C405 74 425 92 445 82" class="il-line il-none"/>
          <text x="492" y="50" class="il-text">Brain: appetite centers</text><text x="492" y="74" class="il-small">fuller sooner, fewer cravings</text></g>
        <g data-part="stomach"><path d="M90 128 C62 138 62 188 90 212 C116 236 168 232 178 202 C186 176 160 168 148 180 C138 188 122 180 122 158 C122 138 112 122 90 128Z" class="il-2s il-line"/>
          <text x="40" y="118" class="il-text">Stomach</text><text x="186" y="194" class="il-small">empties more slowly</text></g>
        <g data-part="pancreas"><path d="M545 172 C565 132 640 128 700 140 C738 148 742 180 712 190 C660 204 600 208 562 198 C544 194 540 182 545 172Z" class="il-4s il-line"/>
          <circle cx="660" cy="170" r="20" class="il-3s il-line"/><text x="660" y="175" text-anchor="middle" class="il-text">β</text>
          <text x="540" y="128" class="il-text">Pancreas</text></g>
        <g data-part="receptor"><rect x="634" y="158" width="8" height="26" rx="3" class="il-2"/><path d="M690 106 L644 158" class="il-line il-none"/><text x="690" y="100" text-anchor="middle" class="il-small">GLP-1 receptor</text></g>
        <g data-part="insulin"><circle cx="700" cy="220" r="6" class="il-5"/><circle cx="716" cy="232" r="6" class="il-5"/><circle cx="690" cy="236" r="6" class="il-5"/>
          <text x="450" y="284" class="il-text">more insulin, less glucagon</text><text x="450" y="304" class="il-small">only when blood sugar is high</text></g>
        <g data-part="gut"><path d="M250 385 C295 355 335 415 380 385 C425 355 465 415 510 385" style="stroke:var(--il-3s)" stroke-width="30" stroke-linecap="round" fill="none"/>
          <path d="M250 385 C295 355 335 415 380 385 C425 355 465 415 510 385" class="il-line il-none"/><text x="260" y="432" class="il-text-2">gut lining</text></g>
        <g data-part="lcell"><circle cx="300" cy="376" r="9" class="il-3"/><circle cx="380" cy="385" r="9" class="il-3"/><circle cx="460" cy="394" r="9" class="il-3"/><text x="532" y="395" class="il-text">L-cells</text></g>
        <g data-part="food"><circle cx="315" cy="332" r="7" class="il-2"/><circle cx="345" cy="322" r="6" class="il-2"/><circle cx="405" cy="334" r="7" class="il-2"/><circle cx="440" cy="322" r="5" class="il-2"/><text x="300" y="310" class="il-small">sugars and fats from a meal</text></g>
        <g data-part="glp1"><circle cx="365" cy="302" r="8" class="il-4"/><circle cx="392" cy="292" r="8" class="il-4"/><circle cx="418" cy="304" r="8" class="il-4"/></g>
        <g data-part="glp1label"><text x="440" y="232" class="il-text">GLP-1 enters the blood</text></g>
        <g data-part="dpp4"><path d="M230 250 L250 238 A22 22 0 1 0 250 262 Z" class="il-7"/><text x="200" y="292" class="il-text">DPP-4 enzyme</text><text x="200" y="309" class="il-small">cuts GLP-1 in ~2 minutes</text></g>
        <g data-part="drug"><ellipse cx="110" cy="380" rx="78" ry="36" class="il-8s il-line"/><text x="110" y="394" text-anchor="middle" class="il-small">albumin</text>
          <path d="M112 340 L104 350 L114 358 L104 366" class="st-4 il-none" stroke-width="4" stroke-linecap="round"/>
          <circle cx="62" cy="332" r="8" class="il-1"/><circle cx="80" cy="328" r="8" class="il-1"/><circle cx="98" cy="327" r="8" class="il-1"/><circle cx="116" cy="330" r="8" class="il-1"/><circle cx="134" cy="334" r="8" class="il-1"/><circle cx="152" cy="339" r="8" class="il-1"/>
          <text x="40" y="310" class="il-text">semaglutide</text></g>
      </svg>`,
      steps: [
        {title: 'A meal reaches the gut', text: 'Sugars and fats pass along the intestine. Hormone-making [[L-cell|L-cells]] in the lining sense them.', show: ['gut', 'lcell', 'food', 'blood'], focus: ['food']},
        {title: 'The gut releases GLP-1', text: 'L-cells release [[GLP-1]] into the bloodstream. It is a message to several organs at once: food has arrived.', show: ['gut', 'lcell', 'glp1', 'glp1label', 'blood'], move: {glp1: 'translate(0px, -45px)'}, pulse: ['glp1']},
        {title: 'Within about two minutes, it is gone', text: 'An enzyme in the blood, [[DPP-4]], snips two [[amino acid|amino acids]] off the front of GLP-1 and inactivates it. The kidneys clear the rest. The natural signal is a short burst, not a steady tone.', show: ['gut', 'lcell', 'blood', 'dpp4'], dim: ['glp1'], move: {glp1: 'translate(-150px, -45px)'}, focus: ['dpp4']},
        {title: 'Pancreas: insulin on demand', text: 'GLP-1 docks on its [[receptor]] on [[beta cell|beta cells]]. If blood sugar is high, they release more [[insulin]]; alpha cells release less [[glucagon]]. If sugar is normal, the effect fades, which limits the risk of dangerous lows.', show: ['blood', 'pancreas', 'receptor', 'insulin', 'glp1'], move: {glp1: 'translate(220px, -115px)'}, focus: ['receptor'], pulse: ['insulin']},
        {title: 'Stomach: slow down', text: 'GLP-1 slows [[gastric emptying]]. Food trickles into the intestine, sugar rises more gently, and fullness lasts longer. Too much of this effect is felt as nausea.', show: ['blood', 'stomach', 'glp1'], move: {glp1: 'translate(-245px, -115px)'}, focus: ['stomach']},
        {title: 'Brain: I\'ve had enough', text: 'Signals reach appetite centers in the [[hypothalamus]] and brainstem, partly through nerves from the gut. People feel satisfied with less food. Natural GLP-1 is too brief to do much here; a long-acting drug keeps these circuits engaged.', show: ['blood', 'brain', 'glp1'], move: {glp1: 'translate(-5px, -205px)'}, focus: ['brain']},
        {title: 'Semaglutide keeps the message on all week', text: 'Semaglutide is GLP-1 re-engineered to resist DPP-4 and to hitch a ride on [[albumin]], the blood\'s most abundant protein. One injection keeps the receptor signal on for days, at all three targets: pancreas, stomach and brain. That persistence is the whole trick.', show: ['blood', 'gut', 'lcell', 'dpp4', 'pancreas', 'receptor', 'insulin', 'stomach', 'brain', 'drug'], focus: ['drug'], pulse: ['insulin']},
      ]},

    {type: 'callout', variant: 'product', heading: 'A conditional trigger, not a firehose', html: `<p>Older diabetes pills called sulfonylureas push the pancreas to release insulin whatever the blood sugar. That is like a cron job that fires every hour regardless of load: it works, and sometimes it takes the system down (dangerously low sugar). GLP-1 is closer to an autoscaling rule with a condition attached: add insulin <i>only when</i> glucose is high. Conditional logic is safer to leave running all the time, which is why a week-long GLP-1 drug is feasible at all.</p><p><b>Where the analogy breaks:</b> you can unit-test a rule. Biology has no spec. The same receptor also sits in the stomach and brain, so "turn up GLP-1" also means nausea, slower digestion and less appetite. In software you would call those side effects bugs. Here, the appetite "side effect" turned out to be the biggest product of all.</p>`},

    // ---------------- 5. TIMELINE ----------------
    {type: 'timeline', title: 'Timeline', intro: 'From an intestinal extract in Liverpool to a pill for obesity. Filter by kind.',
      events: [
        {year: 1906, title: 'The "incretine" idea', kind: 'science', text: 'Liverpool researchers find that an intestinal extract lowers blood sugar.'},
        {year: 1964, title: 'The incretin effect is established', kind: 'science', text: 'Oral glucose triggers much more insulin than intravenous glucose: gut hormones drive the difference.'},
        {year: 1982, title: 'Habener clones the anglerfish proglucagon gene', kind: 'science', text: 'It encodes glucagon plus a second glucagon-like peptide.'},
        {year: 1987, title: 'GLP-1(7–37) shown to release insulin', kind: 'science', text: 'Mojsov, Weir and Habener (JCI); Drucker et al. (PNAS); Holst\'s group in Copenhagen, independently.'},
        {year: 1992, title: 'John Eng isolates exendin-4 from Gila monster venom', kind: 'science'},
        {year: 1992, title: 'GLP-1 patents issued to Habener alone', kind: 'people', text: 'Mojsov later challenges them and is added as co-inventor on four patents (2004–2006).'},
        {year: 1996, title: 'Eng licenses exendin-4 to Amylin', kind: 'business'},
        {year: 2005.25, date: 'Apr 2005', title: 'Byetta (exenatide) approved', kind: 'regulatory', text: 'First GLP-1 drug: twice-daily injection. Amylin and Lilly.'},
        {year: 2010.0, date: 'Jan 2010', title: 'Victoza (liraglutide) approved in the US', kind: 'regulatory', text: 'Novo\'s once-daily GLP-1 with a fatty-acid tail.'},
        {year: 2013.083, date: 'Feb 2013', title: 'SUSTAIN 6 cardiovascular trial begins', kind: 'clinical'},
        {year: 2014.917, date: 'Dec 2014', title: 'Saxenda (liraglutide 3 mg) approved for obesity', kind: 'regulatory'},
        {year: 2017.917, date: 'Dec 2017', title: 'FDA approves Ozempic for type 2 diabetes', kind: 'regulatory'},
        {year: 2018.75, date: 'Oct 2018', title: 'SELECT outcomes trial starts', kind: 'clinical', text: 'Eventually 17,604 people with obesity and heart disease, but no diabetes.'},
        {year: 2019.667, date: 'Sep 2019', title: 'Rybelsus: the first GLP-1 pill', kind: 'regulatory'},
        {year: 2021.083, date: 'Feb 2021', title: 'STEP 1 published: 14.9% average weight loss', kind: 'clinical'},
        {year: 2021.417, date: 'Jun 2021', title: 'FDA approves Wegovy for chronic weight management', kind: 'regulatory', text: 'The first new obesity drug approved since 2014.'},
        {year: 2021.917, date: 'Dec 2021', title: 'Contract manufacturer halts Wegovy syringe filling', kind: 'setback', text: 'Manufacturing-quality problems at a supplier; supply constrained well into 2022.'},
        {year: 2022.333, date: 'May 2022', title: 'Lilly\'s tirzepatide (Mounjaro) approved for diabetes', kind: 'business'},
        {year: 2023.667, date: 'Sep 2023', title: 'Novo becomes Europe\'s most valuable company', kind: 'business', text: 'About $428B at the close on 1 September.'},
        {year: 2023.833, date: 'Nov 2023', title: 'SELECT published; Zepbound approved', kind: 'clinical', text: '20% fewer major cardiovascular events. The same month, Lilly\'s tirzepatide is approved for obesity.'},
        {year: 2024.167, date: 'Mar 2024', title: 'Wegovy label adds heart-risk reduction', kind: 'regulatory', text: 'Opens a route to Medicare coverage.'},
        {year: 2024.667, date: 'Sep 2024', title: 'Lasker Award: Habener, Mojsov, Knudsen', kind: 'people'},
        {year: 2024.917, date: 'Dec 2024', title: 'CagriSema misses expectations; Novo shares fall about 20%', kind: 'setback'},
        {year: 2025.083, date: 'Feb 2025', title: 'FDA declares the semaglutide shortage over', kind: 'regulatory', text: 'Compounders given until April/May 2025 to stop making copies.'},
        {year: 2025.333, date: 'May 2025', title: 'Novo announces CEO change; tirzepatide beats semaglutide head to head', kind: 'setback'},
        {year: 2025.833, date: 'Nov 2025', title: 'White House pricing deal; Medicare negotiated price set', kind: 'business', text: '$245 a month for Medicare and Medicaid under the deal; a $274 negotiated Medicare price from 2027.'},
        {year: 2025.917, date: 'Dec 2025', title: 'Wegovy pill approved', kind: 'regulatory'},
        {year: 2026.083, date: 'Feb 2026', title: 'CagriSema fails to match tirzepatide in REDEFINE 4', kind: 'setback'},
        {year: 2026.25, date: 'Apr 2026', title: 'Lilly\'s oral orforglipron (Foundayo) approved', kind: 'business'},
      ]},

    // ---------------- 6. BUILDING THE DRUG ----------------
    {type: 'story', kicker: 'Building the drug', title: 'Turning two minutes into a week', tocTitle: 'Engineering the molecule', html: `
<p>Natural GLP-1 is a chain of about 30 [[amino acid|amino acids]]. In blood it has a [[half-life]] of one to two minutes. Two things destroy it. The enzyme [[DPP-4]] clips off the first two amino acids, which inactivates it. And because it is small, the kidneys filter it out. A drug version needed to beat both.</p>
<p>There were three broad strategies, and different companies chose each.</p>
<ul>
<li><b>Find a naturally resistant molecule.</b> That was exenatide, from the Gila monster: about 2.4 hours, so two shots a day.</li>
<li><b>Block the enzyme instead.</b> Merck's sitagliptin (Januvia, 2006) is a pill that inhibits DPP-4, so the body's own GLP-1 lasts longer. It lowers blood sugar modestly and does little for weight, because natural GLP-1 levels never get very high.</li>
<li><b>Rebuild GLP-1 so the body can't clear it.</b> This was Novo's path.</li>
</ul>
<h3>The albumin trick</h3>
<p>Knudsen's idea was to borrow a transport system the body already has. [[albumin|Albumin]], the most abundant protein in blood, carries [[fatty acid|fatty acids]] around. Attach a fatty acid to GLP-1, and the drug would stick loosely to albumin. Bound to a big protein, it would be too large for the kidneys to filter and partly shielded from enzymes. It would slowly let go, a little at a time.</p>
<p>The team tested analogues that varied the fatty acid's length, where it was attached and the chemical linker, published in papers in 2000 and 2007. Their winner, <b>liraglutide</b>, carried a 16-carbon fatty acid on the lysine at position 26 and swapped the lysine at position 34 for arginine, so the fatty acid could attach at only one site. Its half-life was about 13 hours after injection under the skin: good enough for once a day. It was approved as <b>Victoza</b> for diabetes in January 2010 and, at a higher 3 mg dose, as <b>Saxenda</b> for obesity in December 2014. In the SCALE trial, people on Saxenda lost about 8 kg over 56 weeks versus about 3 kg on placebo.</p>
<h3>From daily to weekly</h3>
<p>A weekly drug needed a different balance. It had to bind albumin much more tightly, resist DPP-4 completely, and still switch on the receptor. A team led by chemists Jesper Lau and Thomas Kruse worked through thousands of variants. The Lasker Foundation puts it at about 4,000 compounds. Their 2015 paper in the <i>Journal of Medicinal Chemistry</i> describes the result, semaglutide, as having three changes from human GLP-1:</p>
<ul>
<li><b>Position 8: alanine swapped for [[Aib]]</b>, an amino acid the body doesn't use in proteins. DPP-4 can no longer cut there.</li>
<li><b>Position 34: lysine swapped for arginine</b>, as in liraglutide, leaving one attachment point.</li>
<li><b>Position 26: a longer, stickier tail</b>: a hydrophilic linker plus an 18-carbon fatty <i>di</i>acid (an acid group at both ends), chosen for much stronger albumin binding.</li>
</ul>
<p>The half-life in people came out at about 165 hours, roughly a week and some 2,000 times longer than natural GLP-1. The explorable diagram below shows where each change sits.</p>
<aside class="note">Why not just make a small-molecule pill? Mimicking a peptide hormone with a small molecule is hard, because the receptor is designed to grip a large, flexible chain. The first small-molecule GLP-1 drug for obesity, Lilly's orforglipron, was approved only in 2026.</aside>`},

    {type: 'figure', title: 'Semaglutide, amino acid by amino acid', intro: 'The 31 amino acids of GLP-1(7–37), with semaglutide\'s changes highlighted. Hover or tap the colored parts.',
      svg: `<svg viewBox="0 0 900 430">
        <text x="30" y="40" class="il-title">Human GLP-1(7–37) backbone</text>
        <text x="30" y="62" class="il-text-2">with semaglutide's three changes</text>
        <g data-part="albumin"><ellipse cx="610" cy="62" rx="140" ry="44" class="il-8s il-line"/><text x="610" y="58" text-anchor="middle" class="il-text">albumin</text><text x="610" y="78" text-anchor="middle" class="il-small">blood's most abundant protein</text></g>
        <g data-part="fatty"><path d="M564 178 L550 164 L566 150 L550 136 L566 122 L552 108" class="st-4 il-none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/><text x="590" y="140" class="il-text">C18 fatty diacid</text></g>
        <g data-part="linker"><path d="M556 236 L548 222 L564 208 L550 194 L564 180" class="st-ink il-none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="538" y="214" text-anchor="end" class="il-text">hydrophilic linker</text></g>
        ${OZ_BEADS}
        <g data-part="helix"><path d="M370 285 V295 H830 V285" class="il-line il-none"/><text x="600" y="315" text-anchor="middle" class="il-text-2">most of the chain folds into a helix that grips the receptor</text></g>
        <g data-part="dpp4"><path d="M80 350 L100 338 A22 22 0 1 0 100 362 Z" class="il-7"/><path d="M86 330 L86 272" class="il-line il-dash il-none"/><text x="130" y="348" class="il-text">DPP-4 cuts natural GLP-1 here</text><text x="130" y="366" class="il-small">(after position 8)</text></g>
        <text x="30" y="410" class="il-small">Letters are one-letter amino acid codes. Positions are numbered 7 to 37, following the proglucagon convention.</text>
      </svg>`,
      hotspots: {
        aib: {title: 'Position 8: Aib', text: 'Natural GLP-1 has alanine (A) here. [[DPP-4]] recognizes the first two amino acids and cuts them off. Replacing alanine with [[Aib]] makes that cut impossible. Liraglutide kept alanine and relied on albumin binding for protection; semaglutide does both.'},
        dpp4: {title: 'The DPP-4 cut site', text: 'Losing the first two amino acids (H and A) turns GLP-1 into an inactive fragment. This is the main reason the natural hormone lasts only a minute or two in blood, and why Merck built a pill (sitagliptin) to block this enzyme instead.'},
        lys26: {title: 'Position 26: the attachment point', text: 'The side chain of this lysine (K) carries the linker and fatty acid. Choosing where to attach mattered: too close to the receptor-binding parts and the drug stops working.'},
        linker: {title: 'The linker', text: 'A water-loving spacer (two small repeating units plus a glutamic acid) between the peptide and the fatty acid. Lau\'s team found that the linker chemistry, not just the fatty acid, controlled both albumin binding and potency.'},
        fatty: {title: 'The C18 fatty diacid', text: 'An 18-carbon chain with an acid group at each end. It binds [[albumin]] much more strongly than liraglutide\'s 16-carbon fatty acid, which stretches the half-life from about 13 hours to about 165 hours.'},
        albumin: {title: 'Albumin', text: 'The drug spends most of its time loosely bound to albumin. Bound drug is too big for the kidneys to filter and partly shielded from enzymes; a small free fraction does the signaling. Think of albumin as a slow-release reservoir circulating in the blood.'},
        arg34: {title: 'Position 34: lysine → arginine', text: 'GLP-1 has two lysines (26 and 34). Swapping 34 for the similar arginine (R) leaves only one site for the fatty acid, so every molecule is made the same way. Liraglutide used the same swap.'},
        helix: {title: 'The receptor-gripping helix', text: 'Most of the chain folds into a helix that grips the outer part of the GLP-1 [[receptor]], while the front end reaches in to switch it on. Every change had to leave this intact, which is why only three positions were altered.'},
      },
      caption: 'Sequence and modifications from Lau et al., J Med Chem 2015. Half-lives from the Lasker Foundation and Drucker, Habener and Holst, JCI 2017. Schematic, not to scale.'},

    {type: 'custom', title: 'Half-life explorer: why "once a week" is an engineering spec', intro: 'Each dose adds drug; the body clears a fixed fraction per hour. Slide the [[half-life]], pick daily or weekly dosing, and watch blood levels over four weeks.',
      html: `<div class="card" id="hlx">
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px" id="hlPresets">
          <button class="btn" data-h="0.033">Natural GLP-1 (~2 min)</button>
          <button class="btn" data-h="2.4">Exenatide (~2.4 h)</button>
          <button class="btn" data-h="13">Liraglutide (~13 h)</button>
          <button class="btn" data-h="165">Semaglutide (~165 h)</button>
        </div>
        <label style="display:flex;gap:12px;align-items:center;flex-wrap:wrap"><span style="min-width:120px">Half-life</span><input type="range" id="hlSlider" min="0" max="100" value="80" style="flex:1;min-width:200px"><b id="hlVal"></b></label>
        <div style="display:flex;gap:8px;margin:10px 0;flex-wrap:wrap;align-items:center">
          <span>Dose every:</span><button class="btn" id="hlDaily">Day</button><button class="btn" id="hlWeekly">Week</button>
          <label style="margin-left:16px"><input type="checkbox" id="hlMiss"> Miss one dose around day 14</label>
        </div>
        <div id="hlChart"></div>
        <div id="hlOut" style="margin-top:8px"></div>
      </div>`,
      init(root, api) {
        const $ = s => root.querySelector(s);
        const lo = Math.log(1 / 60), hi = Math.log(400);
        const toH = x => Math.exp(lo + (hi - lo) * x / 100), toX = h => 100 * (Math.log(h) - lo) / (hi - lo);
        let tau = 168;
        const fmtH = h => h < 1 ? Math.round(h * 60) + ' minutes' : h < 48 ? (h < 10 ? h.toFixed(1) : Math.round(h)) + ' hours' : (h / 24).toFixed(1) + ' days';
        function draw() {
          const h = toH(+$('#hlSlider').value), k = Math.log(2) / h, miss = $('#hlMiss').checked;
          $('#hlVal').textContent = fmtH(h);
          $('#hlDaily').classList.toggle('primary', tau === 24); $('#hlWeekly').classList.toggle('primary', tau === 168);
          const T = 28 * 24, doses = [];
          for (let t = 0; t < T; t += tau) { if (miss && Math.abs(t - 14 * 24) < tau / 2 + 0.01 && t > 0) continue; doses.push(t); }
          const times = new Set();
          for (let t = 0; t <= T; t += 2) times.add(t);
          doses.forEach(d => { times.add(d); times.add(Math.max(0, d - 0.001)); [0.02, 0.05, 0.1, 0.25, 0.5, 1].forEach(f => times.add(d + f * Math.min(h * 3, tau))); });
          const ts = [...times].filter(t => t <= T).sort((a, b) => a - b);
          const C = t => doses.reduce((s, d) => s + (d <= t ? Math.exp(-k * (t - d)) : 0), 0);
          const vals = ts.map(C), max = Math.max(...vals);
          const W = 720, H = 240, L = 50, R = 16, Tp = 12, B = 34;
          const X = t => L + (W - L - R) * t / T, Y = v => Tp + (H - Tp - B) * (1 - v / max);
          let s = `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Simulated drug levels">`;
          [0, 0.5, 1].forEach(f => { s += `<line x1="${L}" x2="${W - R}" y1="${Y(f * max)}" y2="${Y(f * max)}" class="il-line" stroke-dasharray="2 4" opacity="0.5"/><text x="${L - 6}" y="${Y(f * max) + 4}" text-anchor="end" class="il-small">${Math.round(f * 100)}%</text>`; });
          for (let d = 0; d <= 28; d += 7) s += `<text x="${X(d * 24)}" y="${H - 12}" text-anchor="${d === 28 ? 'end' : d === 0 ? 'start' : 'middle'}" class="il-small">day ${d}</text>`;
          let path = '';
          ts.forEach((t, i) => { path += (i ? 'L' : 'M') + X(t).toFixed(1) + ',' + Y(vals[i]).toFixed(1); });
          s += `<path d="${path} L${X(T)},${Y(0)} L${X(0)},${Y(0)} Z" style="fill:var(--il-1s)"/>`;
          s += `<path d="${path}" class="st-1 il-none" stroke-width="2.2" stroke-linejoin="round"/>`;
          doses.forEach(d => s += `<circle cx="${X(d)}" cy="${H - B + 4}" r="3" class="il-2"/>`);
          s += `</svg><div style="font-size:13px;color:var(--ink-3);margin-top:2px">Orange dots mark doses. Level shown as % of the highest level reached in four weeks.</div>`;
          $('#hlChart').innerHTML = s;
          const ratio = Math.exp(k * tau), within = Math.min(1, h / tau), ssDays = 4.5 * h / 24;
          const ratioTxt = ratio > 1e6 ? 'more than a million to one' : ratio > 100 ? Math.round(ratio).toLocaleString() + ' to 1' : ratio.toFixed(1) + ' to 1';
          $('#hlOut').innerHTML = `<p style="margin:0">At steady state, the peak is <b>${ratioTxt}</b> above the trough. Levels stay within a factor of two of the peak for about <b>${Math.round(within * 100)}%</b> of each dosing interval. Reaching [[steady state]] takes about 4–5 half-lives: <b>${ssDays < 1 ? Math.max(1, Math.round(ssDays * 24)) + ' hours' : ssDays.toFixed(ssDays < 10 ? 1 : 0) + ' days'}</b>.</p>
            <p style="margin:6px 0 0;color:var(--ink-3);font-size:14px">${h < 0.5 ? 'With a half-life of minutes, each injection is a brief spike and the drug is absent almost all the time. This is why natural GLP-1 could never be a drug.' : h < 20 && tau === 168 ? 'Weekly dosing with this half-life means days with almost no drug on board.' : h > 100 && tau === 168 ? 'A week-long half-life with weekly dosing gives a gentle wave. A missed dose barely dents the level; the flip side is that side effects also take weeks to wash out, and it takes weeks to reach full effect.' : 'Try the presets to compare real molecules.'}</p>`;
          api.terms && ($('#hlOut').innerHTML = api.terms($('#hlOut').innerHTML));
        }
        root.querySelectorAll('#hlPresets button').forEach(b => b.onclick = () => { const h = +b.dataset.h; $('#hlSlider').value = toX(h); tau = h >= 100 ? 168 : h > 5 ? 24 : 24; draw(); });
        $('#hlSlider').oninput = draw; $('#hlMiss').onchange = draw;
        $('#hlDaily').onclick = () => { tau = 24; draw(); }; $('#hlWeekly').onclick = () => { tau = 168; draw(); };
        $('#hlSlider').value = toX(165); draw();
      }},

    {type: 'callout', variant: 'product', heading: 'Half-life is a product decision, like a cache TTL', html: `<p>Engineers tune a cache's time-to-live: too short and you hammer the backend; too long and stale data lingers. Half-life is the same trade-off. Daily liraglutide and weekly semaglutide were both technically possible. Weekly won in the market because it removed friction: 52 injections a year instead of 365, and a missed dose barely matters. For chronic drugs, convenience is a feature that drives [[persistence]], and persistence drives revenue.</p><p><b>Where the analogy breaks:</b> you can flush a cache in a second. You cannot flush a week-long drug. If someone has bad nausea, it lingers for days, and anyone who stops needs weeks to clear it. There is no rollback button, so the "TTL" has to be chosen years before launch, in [[preclinical]] chemistry, and then lived with for the life of the product.</p>`},

    // ---------------- 7. OZEMPIC ----------------
    {type: 'story', kicker: 'The diabetes launch', title: 'Ozempic, and a pill that shouldn\'t work', tocTitle: 'Ozempic and Rybelsus', html: `
<p>Before semaglutide could be sold for diabetes, Novo had to clear a hurdle that had not existed a decade earlier. After safety scares with an earlier diabetes drug, regulators from 2008 onwards asked companies to show that new diabetes medicines did not raise heart risk. That meant a [[cardiovascular outcomes trial]]: thousands of patients, followed for years, counting heart attacks, strokes and deaths.</p>
<p>Novo's was <b>SUSTAIN 6</b>. It randomized 3,297 people with type 2 diabetes, most of them with existing heart or kidney disease, to weekly semaglutide or placebo for two years. It was designed as a [[noninferiority]] trial: the goal was just to rule out harm. It did better than that. Major cardiovascular events ([[MACE]]) occurred in 6.6% of the semaglutide group and 8.9% of the placebo group, a [[hazard ratio]] of 0.74. There was a warning sign too: complications of diabetic eye disease ([[retinopathy]]) were more common on semaglutide (hazard ratio 1.76), which experts attributed mainly to blood sugar falling quickly in people who already had eye damage.</p>
<p>Alongside it, the SUSTAIN efficacy trials compared semaglutide with placebo and with rival drugs, and showed strong falls in [[HbA1c]] and consistent weight loss. An FDA [[advisory committee]] backed approval in October 2017, and the FDA approved <b>Ozempic</b> on 5 December 2017, as a once-weekly pen. A cardiovascular risk-reduction claim was added to the label in January 2020.</p>
<h3>Rybelsus: a peptide you can swallow</h3>
<p>Peptides are normally destroyed in the gut and too large to cross its lining. Oral peptide drugs had been a dream for decades. Novo had collaborated since 2007 with a small US company, Emisphere Technologies, whose absorption enhancer [[SNAC]] could be co-formulated with a peptide. Novo scientists later showed, in <i>Science Translational Medicine</i> (2018), that the tablet works in the stomach: SNAC locally buffers acid and enzymes around the dissolving tablet and briefly helps semaglutide cross the stomach lining.</p>
<p>It is inefficient. Only a small fraction of each tablet gets through, so the daily pill contains milligrams of drug where the weekly injection holds about a milligram, and it must be taken on an empty stomach with a sip of water. But semaglutide's week-long half-life smooths out the day-to-day variation. The FDA approved <b>Rybelsus</b> on 20 September 2019, the first GLP-1 pill. In November 2020 Novo bought Emisphere for $1.8 billion, including its SNAC royalty stream.</p>
<p>By then something else was obvious in the diabetes trials. People were losing weight, more than on any previous GLP-1 drug. Novo had been here before with liraglutide and Saxenda. The question was whether to go much bigger.</p>`},

    {type: 'chart', title: 'The signal that launched the obesity program', intro: 'In a phase 2 trial published in 2018, 957 adults with obesity took daily semaglutide at five doses, daily liraglutide 3 mg (Saxenda), or placebo for 52 weeks.',
      chart: {kind: 'bar', title: 'Average weight loss at 52 weeks', unit: '%', categories: ['Placebo', 'Semaglutide 0.05 mg/day', '0.1 mg/day', '0.2 mg/day', '0.3 mg/day', '0.4 mg/day', 'Liraglutide 3.0 mg/day'],
        series: [{name: 'Weight loss', values: [2.3, 6.0, 8.6, 11.6, 11.2, 13.8, 7.8]}], horizontal: true, labelWidth: 190,
        note: 'Source: O\'Neil et al., Lancet 2018. Estimated mean weight loss; different doses were tested in separate arms of about 100 people each.'},
      takeaway: 'Higher doses meant more weight loss, and the top doses nearly doubled Saxenda\'s effect. The later obesity product used a weekly dose of 2.4 mg, more than twice the top Ozempic dose then in use (1 mg).'},

    {type: 'decision', title: 'Decision: bet the company\'s future on obesity?', role: 'You are on Novo Nordisk\'s leadership team, around 2016–2017',
      scenario: `Semaglutide is heading for approval in diabetes, a large and proven market. The phase 2 obesity data look remarkable. But obesity is where drugs go to die. Fenfluramine ("fen-phen") was withdrawn in 1997 for damaging heart valves. Sibutramine came off the market in 2010 after heart attacks and strokes. Rimonabant was withdrawn in Europe over depression and suicidal thoughts. Two new pills launched in the US in 2012 sold poorly. Insurers see obesity as lifestyle; US Medicare is barred by law from paying for weight-loss drugs. Your own Saxenda works, but it is a daily injection with modest weight loss. What do you do?`,
      options: [
        {label: 'Keep semaglutide focused on diabetes. Maximise Ozempic; let doctors discover the weight loss.', outcome: 'This is the safe, capital-efficient choice, and it is roughly what several competitors did with their GLP-1 drugs. You avoid a costly program in a market with no proven willingness to pay. But you leave the biggest opportunity to someone else, and off-label use of a diabetes brand for weight loss creates its own supply and reputational problems.'},
        {label: 'Run a full obesity program at a higher dose, and plan a heart-outcomes trial to change how payers see obesity.', outcome: 'Expensive and slow: thousands of patients, years of follow-up, and a real risk that a large trial exposes a safety signal that sinks both the obesity and diabetes franchises. But if it works, you own a new category and the data to argue that obesity drugs prevent disease, not just shrink waistlines.'},
        {label: 'Partner or out-license obesity rights to a company with consumer-marketing muscle.', outcome: 'Shares the risk and cost, but obesity is the same molecule as your diabetes brand. Splitting control of dosing, safety data, manufacturing and pricing across two companies is hard, and you would give away much of the upside if it works.'},
        {label: 'Wait for the oral version and launch obesity as a pill.', outcome: 'A pill is more appealing to consumers, but oral semaglutide needs far more drug per patient and was years behind. Waiting would have handed the lead to whoever moved first with an injection.'},
      ],
      reality: `Novo went all in. It launched the STEP phase 3 program in 2018 using 2.4 mg once weekly, and in October 2018 started <b>SELECT</b>, a 17,604-person heart-outcomes trial in people with obesity but no diabetes. Knudsen and Novo's research leadership had spent two decades building the biology case for GLP-1 in appetite; Saxenda had already shown that doctors would prescribe an injectable obesity drug. The bet made Novo, for a time, Europe's most valuable company.`},

    // ---------------- 8. STEP TRIALS ----------------
    {type: 'story', kicker: 'The trials', title: 'Designing STEP 1', tocTitle: 'Designing STEP', html: `
<p>STEP 1 was designed to answer a simple question cleanly: in adults with obesity, or overweight plus a weight-related health problem, and <i>without</i> diabetes, how much weight does 2.4 mg of weekly semaglutide take off compared with placebo, when both groups get the same lifestyle support?</p>
<p>Several design choices matter to anyone who later reads the results.</p>
<ul>
<li><b>Everyone got lifestyle counselling.</b> Both groups received advice on a reduced-calorie diet and more physical activity. So the placebo arm shows what intensive standard care achieves, and the difference isolates the drug.</li>
<li><b>2:1 randomization.</b> Two people got semaglutide for every one on placebo. That gave more safety data on the drug and made enrolment easier, since volunteers were more likely to get the active treatment.</li>
<li><b>Slow dose escalation.</b> Participants started at 0.25 mg and stepped up every four weeks to 2.4 mg by week 16. GLP-1 nausea is dose-dependent and fades with time, so [[dose escalation]] is essential.</li>
<li><b>68 weeks.</b> Long enough to see the weight plateau, not just the early drop.</li>
<li><b>Two co-primary endpoints:</b> percentage change in body weight, and the share of people losing at least 5%. The FDA's guidance for obesity drugs used thresholds like 5% as a marker of meaningful loss.</li>
<li><b>A careful [[estimand]].</b> The headline analysis counted everyone as randomized, whether or not they kept taking the drug. That gives a conservative, real-world-style number. A second "trial product" analysis estimated what happens if people stay on treatment, which gives a bigger number. Press coverage often mixes the two; always check which one you are reading.</li>
</ul>
<p>What could have gone wrong? Plenty. The nausea could have driven so many dropouts that the treatment-policy result collapsed. The weight loss could have plateaued at 8–10%, making Wegovy "a weekly Saxenda". Or a rare but serious side effect, such as pancreatitis, could have appeared at the higher dose.</p>`},

    {type: 'trial', title: 'STEP 1: semaglutide 2.4 mg for obesity', intro: 'The design first, then your prediction, then the result.',
      design: {name: 'STEP 1', phase: 'Phase 3', blinding: 'Double-blind', years: '2018–2020', n: 1961,
        population: 'Adults with BMI 30 or more (or 27 or more with a weight-related condition), without diabetes', randomization: '2:1',
        arms: [{name: 'Semaglutide 2.4 mg', n: 1306, desc: 'Weekly injection + lifestyle counselling'}, {name: 'Placebo', n: 655, desc: 'Weekly injection + lifestyle counselling', control: true}],
        endpoint: '% change in body weight at week 68',
        details: {'Co-primary endpoints': '% change in body weight, and share losing at least 5%, at week 68', 'Dose escalation': '0.25 mg rising every 4 weeks to 2.4 mg by week 16', 'Estimand': 'Treatment policy: everyone counted as randomized, whether or not they kept taking the drug', 'Published': 'Wilding et al., <i>New England Journal of Medicine</i>, February 2021'}},
      predict: {q: 'Older obesity drugs typically took off about 5–10% of body weight, and liraglutide 3 mg about 8%. What was the average weight loss on semaglutide 2.4 mg at 68 weeks?',
        options: ['About 6%, no better than older drugs', 'About 9%, similar to Saxenda', 'About 15%', 'About 25%, similar to bariatric surgery'], answer: 2,
        explain: 'Semaglutide averaged 14.9% versus 2.4% on placebo, counting everyone as randomized. Half of the semaglutide group lost at least 15% of their body weight. For a drug, this was a different category of result.'},
      results: [
        {kind: 'bar', title: 'Average change in body weight at week 68', unit: '%', categories: ['Semaglutide 2.4 mg', 'Placebo'], series: [{name: 'Weight lost', values: [14.9, 2.4], notes: ['About 15.3 kg on average', 'About 2.6 kg on average']}], colorByCategory: true,
          note: 'Shown as weight lost (positive numbers). Treatment-policy estimand. Source: Wilding et al., NEJM 2021.'},
        {kind: 'bar', title: 'Share of participants reaching each weight-loss threshold', unit: '%', categories: ['Lost ≥5%', 'Lost ≥10%', 'Lost ≥15%'],
          series: [{name: 'Semaglutide 2.4 mg', values: [86.4, 69.1, 50.5]}, {name: 'Placebo', values: [31.5, 12.0, 4.9], color: 8}],
          note: 'Source: Wilding et al., NEJM 2021.'},
      ],
      takeaway: 'The effect was large and consistent: 86% of people on semaglutide lost at least 5%. The main cost was gastrointestinal: nausea and diarrhoea were the commonest side effects, and 4.5% of the semaglutide group stopped because of GI events, versus 0.8% on placebo.'},

    {type: 'chart', title: 'What happens when you stop', intro: 'After 68 weeks, STEP 1 stopped both the drug and the lifestyle program, and followed a subset of 327 participants for another year.',
      chart: {kind: 'line', title: 'Average weight lost from the start of STEP 1 (%)', unit: '%', xTicks: [0, 20, 40, 68, 100, 120], xFmt: v => 'wk ' + v,
        series: [{name: 'Semaglutide, then stopped', short: 'Semaglutide', labelDy: -12, points: [[0, 0], [68, 17.3], [120, 5.6]]}, {name: 'Placebo, then stopped', short: 'Placebo', points: [[0, 0], [68, 2.0], [120, 0.1]], color: 8, labelDy: -12}],
        annotations: [{x: 68, label: 'Treatment stopped'}],
        note: 'Only three time points are plotted (start, week 68, week 120); the real curves are not straight lines. This subset lost more by week 68 (17.3%) than the full trial (14.9%). Source: Wilding et al., Diabetes Obes Metab 2022.'},
      takeaway: 'Within a year of stopping, people regained about two-thirds of the weight they had lost, and blood pressure, blood sugar and cholesterol improvements drifted back too. The drug treats a chronic condition; it doesn\'t cure it. That single fact shapes the drug\'s economics, its politics and its ethics.'},

    {type: 'custom', title: 'How semaglutide compares with other obesity treatments', intro: 'Each drug\'s own pivotal trial result, with its own placebo group. Toggle to subtract placebo, which is fairer because trials differ in how much the placebo group lost.',
      html: `<div class="card"><div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap"><button class="btn primary" id="wcRaw">As reported</button><button class="btn" id="wcNet">Minus placebo</button></div><div id="wcChart"></div></div>`,
      init(root, api) {
        const cats = ['Orlistat (pill)', 'Lorcaserin (pill, withdrawn 2020)', 'Naltrexone/bupropion (pill)', 'Phentermine/topiramate (pill)', 'Liraglutide 3 mg (Saxenda)', 'Semaglutide 2.4 mg (Wegovy)', 'Tirzepatide 15 mg (Zepbound)'];
        const drug = [10.2, 5.8, 6.1, 9.3, 8.0, 14.9, 20.9], plac = [6.1, 2.2, 1.3, 1.2, 2.6, 2.4, 3.1];
        const note = 'Trials differ in length (roughly one to one-and-a-half years), populations and analysis methods, so this is not a head-to-head comparison. Top dose shown where several were tested. Sources: Müller et al., Nat Rev Drug Discov 2022 (Table 1); Jastreboff et al., NEJM 2022 (SURMOUNT-1).';
        const show = net => {
          root.querySelector('#wcRaw').classList.toggle('primary', !net); root.querySelector('#wcNet').classList.toggle('primary', net);
          const spec = net ? {kind: 'bar', title: 'Average weight loss beyond placebo', unit: '%', categories: cats, horizontal: true, labelWidth: 250, series: [{name: 'Drug minus placebo', values: drug.map((d, i) => +(d - plac[i]).toFixed(1))}], note}
            : {kind: 'bar', title: 'Average weight loss in each drug\'s pivotal trial', unit: '%', categories: cats, horizontal: true, labelWidth: 250, series: [{name: 'Drug', values: drug}, {name: 'Placebo', values: plac, color: 8}], note};
          api.mountChart(root.querySelector('#wcChart'), spec);
        };
        root.querySelector('#wcRaw').onclick = () => show(false); root.querySelector('#wcNet').onclick = () => show(true); show(false);
      }},

    // ---------------- 9. WEGOVY LAUNCH ----------------
    {type: 'story', kicker: 'Launch', title: 'Wegovy: demand nobody could supply', tocTitle: 'Wegovy launch', html: `
<p>The FDA approved <b>Wegovy</b> on 4 June 2021 for chronic weight management in adults with obesity, or overweight with at least one weight-related condition, alongside diet and exercise. It was reviewed under [[priority review]], and it was the first new drug for general weight management approved since 2014. The approval rested on the STEP trials; there were no heart-outcome data yet.</p>
<p>Then the supply chain broke. In December 2021, a contract manufacturer that filled Wegovy syringes stopped deliveries after problems with good manufacturing practice. Novo warned that fewer new patients could start in the first half of 2022. Injectable drugs are often limited not by making the molecule but by [[fill-finish]]: filling sterile pens on specialised high-speed lines, which take years to build and qualify. All Wegovy doses were not fully available again in the US until December 2022.</p>
<p>Meanwhile demand kept climbing. Some of it spilled onto Ozempic, which contains the same molecule at lower doses and which some doctors prescribed off-label for weight loss. Celebrity speculation and social media made "Ozempic" shorthand for the whole class. The FDA placed semaglutide on its drug [[shortage list]] in 2022.</p>
<h3>The compounding loophole</h3>
<p>Being on the shortage list had a legal consequence. US law allows [[compounding pharmacy|compounding pharmacies]] to make copies of an approved drug while it is in shortage. Telehealth start-ups and med spas began selling compounded semaglutide at a fraction of the branded price. Some products used chemical salt forms of semaglutide that the FDA said had not been shown to be safe and effective. Counterfeit Ozempic pens also appeared in Europe and the US in 2023.</p>
<p>Novo invested heavily in capacity. In February 2024, its controlling shareholder, Novo Holdings, agreed to buy the contract manufacturer Catalent for $16.5 billion, with Novo Nordisk buying three of Catalent's fill-finish sites for $11 billion. On 21 February 2025 the FDA declared the semaglutide shortage resolved, giving pharmacies until April 22 and larger outsourcing facilities until May 22 to stop making copies. Even so, Novo reported in early 2026 that mass compounding had continued at broadly unchanged levels, and its CEO estimated about 1.5 million Americans were using compounded GLP-1s.</p>`},

    {type: 'callout', variant: 'numbers', heading: 'Semaglutide by the numbers', html: `<ul>
<li><b>4 grams</b>: glucose in the whole bloodstream of a 70 kg adult, about a teaspoon.</li>
<li><b>31</b> amino acids in semaglutide's backbone; <b>3</b> changes from human GLP-1.</li>
<li><b>~165 hours</b>: semaglutide's half-life, versus 1–2 minutes for natural GLP-1.</li>
<li><b>1,961</b> people in STEP 1; <b>17,604</b> in SELECT, about as many as a small-town population.</li>
<li><b>40.3%</b>: share of US adults with obesity in 2021–2023 (CDC), more than 100 million people.</li>
<li><b>$0.89–$4.73</b>: estimated monthly cost to manufacture the diabetes dose of injectable semaglutide, including a profit margin (Barber et al., 2024), against a US list price near $1,000.</li>
<li><b>DKK 309 billion</b>: Novo Nordisk's total 2025 sales, of which semaglutide brands made about three-quarters.</li>
</ul>`},

    {type: 'figure', title: 'Why the US price is hard to pin down', intro: 'The US drug channel has many hands between the factory and the patient. Hover or tap each one.',
      svg: `<svg viewBox="0 0 900 360">
        <defs><marker id="arrOz" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" style="fill:var(--il-line)"/></marker></defs>
        <g data-part="maker"><rect x="20" y="60" width="150" height="70" rx="14" class="il-1s il-line"/><text x="95" y="92" text-anchor="middle" class="il-text">Novo Nordisk</text><text x="95" y="112" text-anchor="middle" class="il-small">sets list price</text></g>
        <g data-part="wholesaler"><rect x="250" y="60" width="150" height="70" rx="14" class="il-paper il-line"/><text x="325" y="92" text-anchor="middle" class="il-text">Wholesaler</text><text x="325" y="112" text-anchor="middle" class="il-small">moves the pens</text></g>
        <g data-part="pharmacy"><rect x="480" y="60" width="150" height="70" rx="14" class="il-paper il-line"/><text x="555" y="92" text-anchor="middle" class="il-text">Pharmacy</text><text x="555" y="112" text-anchor="middle" class="il-small">dispenses</text></g>
        <g data-part="patient"><rect x="710" y="60" width="170" height="70" rx="14" class="il-3s il-line"/><text x="795" y="92" text-anchor="middle" class="il-text">Patient</text><text x="795" y="112" text-anchor="middle" class="il-small">pays copay or cash</text></g>
        <path d="M172 95 H246" class="il-line il-none" marker-end="url(#arrOz)"/><path d="M402 95 H476" class="il-line il-none" marker-end="url(#arrOz)"/><path d="M632 95 H706" class="il-line il-none" marker-end="url(#arrOz)"/>
        <g data-part="insurer"><rect x="480" y="230" width="150" height="70" rx="14" class="il-6s il-line"/><text x="555" y="262" text-anchor="middle" class="il-text">Insurer or Medicare</text><text x="555" y="282" text-anchor="middle" class="il-small">pays most of the bill</text></g>
        <g data-part="pbm"><rect x="250" y="230" width="150" height="70" rx="14" class="il-6s il-line"/><text x="325" y="262" text-anchor="middle" class="il-text">PBM</text><text x="325" y="282" text-anchor="middle" class="il-small">formulary + rebates</text></g>
        <g data-part="rebate"><path d="M95 132 C95 200 180 265 246 265" class="st-6 il-dash il-none" stroke-width="2.5" marker-end="url(#arrOz)"/><text x="40" y="215" class="il-text">rebates</text><text x="40" y="232" class="il-small">(confidential)</text></g>
        <path d="M402 265 H476" class="il-line il-none" marker-end="url(#arrOz)"/><path d="M630 230 C680 190 740 170 790 134" class="il-line il-none" marker-end="url(#arrOz)"/>
        <text x="880" y="330" text-anchor="end" class="il-text-2">Coverage decides what the patient pays</text>
      </svg>`,
      hotspots: {
        maker: {title: 'Manufacturer', text: 'Sets the [[list price]]: about $969 a month for Ozempic and $1,349 for Wegovy in 2024, according to the Senate HELP Committee. What Novo actually keeps, the [[net price]], is lower after rebates. The committee cited a US net price for Ozempic of about $600, still well above other countries.'},
        wholesaler: {title: 'Wholesaler', text: 'Distributes pens from factories to pharmacies. Wholesalers take a small margin. Their prices are usually based on the list price.'},
        pharmacy: {title: 'Pharmacy', text: 'Dispenses the pens, and during the shortage became the front line: patients called pharmacy after pharmacy to find a starter dose. [[compounding pharmacy|Compounding pharmacies]] sat in a separate channel altogether.'},
        pbm: {title: 'Pharmacy benefit manager', text: 'A [[PBM]] negotiates confidential rebates from manufacturers in exchange for good placement on insurers\' [[formulary|formularies]], and often requires [[prior authorization]]. Higher list prices can mean bigger rebates, one reason list prices stay high.'},
        insurer: {title: 'Insurer or Medicare', text: 'Many employer plans chose not to cover obesity drugs because of cost. [[Medicare Part D]] was barred by law from covering drugs used for weight loss; the heart-outcomes label and, later, special pilot programs changed that.'},
        patient: {title: 'Patient', text: 'Pays a copay if covered, or cash if not. Uninsured cash buyers faced the full list price, which pushed many towards compounded copies and, later, cheaper direct-to-consumer offers.'},
        rebate: {title: 'Rebates', text: 'Money flowing back from the manufacturer to PBMs and insurers after the sale. Rebates are confidential and are why "the price" of a US drug is really a range. Patients\' out-of-pocket costs are often based on the list price, not the net.'},
      },
      caption: 'Simplified. Prices from the US Senate HELP Committee (April and September 2024).'},

    // ---------------- 10. SELECT ----------------
    {type: 'story', kicker: 'The trial that changed the argument', title: 'Does weight loss save lives?', tocTitle: 'SELECT and outcomes', html: `
<p>Weight is a [[surrogate endpoint]]. It is easy to measure, but payers and doctors care about what it leads to: heart attacks, strokes, kidney failure, death. Plenty of drugs have improved a number without improving lives. Several earlier obesity drugs had actually raised heart risk. Until someone showed that drug-induced weight loss prevented disease, insurers could treat obesity drugs as cosmetic, and US Medicare law excluded them outright.</p>
<p>SELECT was Novo's answer. It enrolled 17,604 people aged 45 or older with established cardiovascular disease, such as a previous heart attack or stroke, and a BMI of 27 or more, <i>without</i> diabetes. They were randomized 1:1 to weekly semaglutide 2.4 mg or placebo, on top of standard heart care. It was event-driven: it would run until enough heart attacks, strokes and cardiovascular deaths had accumulated to give a clear answer. Average follow-up ended up at almost 40 months.</p>
<p>The design carried real risk. Participants were already receiving standard heart care, which lowers risk, so it would be hard to show extra benefit. A neutral result would have been used against the entire category for years. And a trial this big is powerful enough to expose rare harms.</p>
<p>The results were published in the <i>New England Journal of Medicine</i> in November 2023.</p>`},

    {type: 'trial', title: 'SELECT: heart outcomes in obesity without diabetes',
      design: {name: 'SELECT', phase: 'Phase 3 outcomes', blinding: 'Double-blind', years: '2018–2023', n: 17604,
        population: 'Age 45+, established cardiovascular disease, BMI 27 or more, no diabetes', randomization: '1:1',
        arms: [{name: 'Semaglutide 2.4 mg', n: 8803, desc: 'Weekly injection + standard care'}, {name: 'Placebo', n: 8801, desc: 'Weekly injection + standard care', control: true}],
        endpoint: 'MACE: CV death, heart attack or stroke',
        details: {'Primary endpoint': 'First [[MACE]] event: cardiovascular death, non-fatal heart attack or non-fatal stroke', 'Design': 'Event-driven superiority trial; mean follow-up 39.8 months', 'Published': 'Lincoff et al., <i>NEJM</i>, November 2023'}},
      predict: {q: 'Participants were already on modern heart medicines. What did semaglutide do to the rate of heart attacks, strokes and cardiovascular deaths?',
        options: ['No measurable difference', 'About 5% fewer, not statistically significant', 'About 20% fewer', 'About 50% fewer'], answer: 2,
        explain: 'Events fell by 20% (hazard ratio 0.80; 95% confidence interval 0.72 to 0.90): 6.5% of the semaglutide group versus 8.0% on placebo over about three and a half years. In absolute terms, roughly one event prevented for every 67 people treated over that period.'},
      results: [
        {kind: 'bar', title: 'People with a primary cardiovascular event', unit: '%', categories: ['Semaglutide 2.4 mg', 'Placebo'], series: [{name: 'Had a MACE event', values: [6.5, 8.0], notes: ['569 of 8,803', '701 of 8,801']}], colorByCategory: true, note: 'Mean follow-up 39.8 months. Source: Lincoff et al., NEJM 2023.'},
        {kind: 'bar', title: 'Stopped treatment permanently because of an adverse event', unit: '%', categories: ['Semaglutide 2.4 mg', 'Placebo'], series: [{name: 'Discontinued for adverse events', values: [16.6, 8.2]}], colorByCategory: true, note: 'Mostly gastrointestinal. Source: Lincoff et al., NEJM 2023.'},
      ],
      takeaway: 'SELECT turned an obesity drug into a heart drug. It did not settle how much of the benefit comes from weight loss itself versus direct effects of GLP-1 on blood vessels and inflammation. That question is still debated.'},

    {type: 'chart', title: 'Three outcome trials, one direction', intro: 'Each trial\'s primary composite outcome, as a relative risk reduction (1 minus the [[hazard ratio]]). A hazard ratio of 0.80 means 20% lower risk.',
      chart: {kind: 'bar', title: 'Lower risk of the primary outcome vs placebo (%)', unit: '%', categories: ['SUSTAIN 6 (diabetes, 2016)', 'SELECT (obesity, no diabetes, 2023)', 'FLOW (diabetes + kidney disease, 2024)'],
        series: [{name: 'Risk reduction', values: [26, 20, 24], notes: ['Hazard ratio 0.74; major cardiovascular events; 3,297 patients', 'Hazard ratio 0.80; major cardiovascular events; 17,604 patients', 'Hazard ratio 0.76; major kidney events, kidney or CV death; 3,533 patients']}], horizontal: true, labelWidth: 280,
        note: 'The outcomes differ: SUSTAIN 6 and SELECT counted heart attacks, strokes and CV deaths; FLOW counted kidney failure, large loss of kidney function, and kidney or CV death. FLOW (1 mg dose) was stopped early for efficacy. Sources: Marso et al., NEJM 2016; Lincoff et al., NEJM 2023; Perkovic et al., NEJM 2024.'},
      takeaway: 'FLOW also found 18% fewer major cardiovascular events and 20% fewer deaths from any cause. It led to a kidney indication for Ozempic in January 2025. The label kept growing: heart risk for Wegovy (March 2024) and a liver-disease indication, [[MASH]], in August 2025.'},

    {type: 'decision', title: 'Decision: how do you fix the supply problem?', role: 'You run Novo Nordisk\'s supply strategy, late 2023',
      scenario: `Wegovy has been rationed for two years. Every month without supply sends patients to compounded copies or to Lilly's newly approved Zepbound. Your own plants are expanding, but new sterile fill-finish lines take years. The biggest contract manufacturer with suitable lines, Catalent, also fills drugs for many other companies, including competitors. What do you do?`,
      options: [
        {label: 'Build your own plants, however long it takes.', outcome: 'Full control and no dependence on suppliers, and Novo was doing this anyway. But new sterile facilities take years to design, build and get approved. The shortage would continue, and compounders and Lilly would keep taking share.'},
        {label: 'Sign more contract-manufacturing deals and ration starter doses meanwhile.', outcome: 'Cheaper and flexible, but you compete for the same scarce capacity as every other company, including Lilly. A single supplier\'s quality failure, like December 2021, can stop your launch again.'},
        {label: 'Buy the contract manufacturer outright.', outcome: 'The fastest route to a lot of qualified capacity, at a very high price. It invites antitrust scrutiny and complaints from rivals who depend on the same plants, and you inherit a company with its own quality problems and other customers.'},
      ],
      reality: `Novo chose the acquisition route through its parent. In February 2024 Novo Holdings agreed to buy Catalent for $16.5 billion, and Novo Nordisk agreed to buy three fill-finish sites from its parent for $11 billion, while continuing to build its own plants. The FDA declared the semaglutide shortage over in February 2025. By then Lilly had also scaled up its own supply, and compounded copies had become entrenched: a reminder that capacity is a competitive weapon, and that lost time is hard to win back.`},

    // ---------------- 11. REGULATORY ----------------
    {type: 'table', title: 'The approval path', intro: 'One molecule, many labels. US FDA approvals, from the FDA\'s own records.',
      columns: ['Date', 'Product', 'Approval', 'Key evidence'],
      rows: [
        ['25 Jan 2010', 'Victoza (liraglutide)', 'Type 2 diabetes, once daily', 'Phase 3 diabetes trials'],
        ['23 Dec 2014', 'Saxenda (liraglutide 3 mg)', 'Chronic weight management', 'SCALE trials'],
        ['5 Dec 2017', 'Ozempic (semaglutide)', 'Type 2 diabetes, once weekly', 'SUSTAIN 1–6'],
        ['20 Sep 2019', 'Rybelsus (oral semaglutide)', 'Type 2 diabetes, daily tablet; [[priority review]]', 'PIONEER trials'],
        ['16 Jan 2020', 'Ozempic', 'Adds cardiovascular risk reduction in type 2 diabetes', 'SUSTAIN 6'],
        ['4 Jun 2021', 'Wegovy (semaglutide 2.4 mg)', 'Chronic weight management; priority review', 'STEP 1–4'],
        ['23 Dec 2022', 'Wegovy', 'Adds adolescents aged 12 and over', 'Adolescent trial'],
        ['8 Mar 2024', 'Wegovy', 'Adds reduction of heart attack, stroke and CV death in adults with heart disease and obesity or overweight', 'SELECT'],
        ['28 Jan 2025', 'Ozempic', 'Adds kidney-disease outcomes in type 2 diabetes', 'FLOW'],
        ['15 Aug 2025', 'Wegovy', 'Adds [[MASH]] (fatty liver disease with scarring); priority review', 'Liver-biopsy trial'],
        ['22 Dec 2025', 'Wegovy pill (oral semaglutide 25 mg)', 'Chronic weight management, daily tablet', 'OASIS trials'],
      ],
      caption: 'Dates from Drugs@FDA via openFDA. The Ozempic, Wegovy and Rybelsus labels carry a [[black box warning]] about thyroid C-cell tumors, based on rodent studies; people with a personal or family history of medullary thyroid cancer should not use them.'},

    // ---------------- 12. MONEY ----------------
    {type: 'story', kicker: 'The money', title: 'The most valuable company in Europe, for a while', tocTitle: 'The money', html: `
<p>Semaglutide changed Novo Nordisk's scale. Company-reported sales of Ozempic rose from DKK 21 billion in 2020 to DKK 127 billion in 2025. Wegovy went from DKK 6 billion in 2022, its first full year of broad supply, to DKK 79 billion in 2025. Add Rybelsus and the three semaglutide brands made about DKK 228 billion in 2025, roughly three-quarters of Novo's total sales of DKK 309 billion, and well over $30 billion at 2025 exchange rates.</p>
<p>Investors priced in much more. On 1 September 2023 Novo overtook LVMH as Europe's most valuable listed company. Its market value passed $600 billion in 2024, larger than Denmark's entire annual economic output. Novo is controlled by a charitable foundation, the Novo Nordisk Foundation, which through Novo Holdings holds about three-quarters of the votes, so much of the windfall flowed to the foundation.</p>
<h3>Why the US pays so much more</h3>
<p>The US market generates most of the profit, and US prices are an outlier. In 2024, the Senate HELP Committee under Bernie Sanders reported that Ozempic had a US [[list price]] of $969 a month against $155 in Canada, $122 in Denmark, $71 in France and $59 in Germany. Wegovy listed at $1,349 in the US against $140 in Germany and $92 in the UK. A 2024 study in <i>JAMA Network Open</i> estimated that the diabetes dose of injectable semaglutide could be manufactured and sold at a profit for $0.89 to $4.73 a month. List prices overstate what Novo keeps, because of rebates, but the committee put Ozempic's US net price at about $600, still several times other countries'.</p>
<p>Several forces explain the gap. Other rich countries have a single national buyer that can say no. The US has fragmented buyers, rebate-driven [[PBM|PBMs]] and, until recently, no power for Medicare to negotiate. Novo would add that US prices fund the research and the vast trials, such as SELECT, that other countries benefit from.</p>
<h3>Medicare: from banned to negotiated</h3>
<p>For two decades, the law creating [[Medicare Part D]] barred it from covering drugs used for weight loss. That excluded most Americans over 65, the group with the most obesity-related heart disease. The SELECT label changed the rules at the edges: in March 2024, Medicare allowed Part D plans to cover Wegovy for people with heart disease and overweight or obesity, because heart-risk reduction is not an excluded use. KFF estimated that about 3.6 million Medicare beneficiaries fit that description.</p>
<p>Then politics moved quickly. Semaglutide was selected for Medicare price negotiation under the [[Inflation Reduction Act]], and in November 2025 CMS announced a negotiated price of $274 a month for Ozempic, Rybelsus and Wegovy from January 2027, 71% below the list price. The same month, Novo and Lilly struck deals with the White House: GLP-1s for Medicare and Medicaid at $245 a month, cash prices through a government website starting at $350 and falling towards $245, a $50 copay for eligible Medicare patients, and Medicare coverage of obesity drugs for some patients through a pilot program. In return, Novo said it expected a three-year exemption from tariffs. CMS set out a Medicare GLP-1 demonstration beginning in July 2026, with broader coverage models to follow.</p>
<p>The price cuts arrived just as competition bit. Novo guided that its 2026 sales would <i>fall</i> by 5 to 13% at constant exchange rates. It cut about 7,500 full-time jobs in 2025, around a tenth of its workforce. By early 2026 its market value had fallen by roughly two-thirds from the peak.</p>`},

    {type: 'chart', title: 'Semaglutide sales', intro: 'Company-reported worldwide sales, in Danish kroner.',
      chart: {kind: 'line', title: 'Annual sales by brand (DKK billion)', unit: 'bn', xTicks: [2020, 2021, 2022, 2023, 2024, 2025],
        series: [
          {name: 'Ozempic (diabetes, injection)', short: 'Ozempic', points: [[2020, 21.2], [2021, 33.7], [2022, 59.8], [2023, 95.7], [2024, 120.3], [2025, 127.1]]},
          {name: 'Wegovy (obesity)', short: 'Wegovy', points: [[2022, 6.2], [2023, 31.3], [2024, 58.2], [2025, 79.1]], color: 3},
          {name: 'Rybelsus (diabetes, pill)', short: 'Rybelsus', points: [[2020, 1.9], [2021, 4.8], [2022, 11.3], [2023, 18.8], [2024, 23.3], [2025, 22.1]], color: 4},
        ],
        annotations: [{x: 2022.4, label: 'Tirzepatide approved', dy: 0}],
        note: 'Wegovy launched in June 2021, but 2021 sales were reported only within "Obesity care" (DKK 8.4B including Saxenda), so its line starts in 2022. Sources: Novo Nordisk annual financial reports (Form 6-K) for 2021, 2023 and 2025.'},
      takeaway: 'Ozempic growth flattened in 2025, and Rybelsus fell, as tirzepatide, compounding and US price pressure took effect. Wegovy was still growing, but its growth slowed from 86% in 2024 to 36% in 2025 (in kroner).'},

    {type: 'chart', title: 'One pen, many prices', intro: 'Monthly list price of Ozempic in 2024, and an estimate of what it could cost if made and sold like a generic.',
      chart: {kind: 'bar', title: 'Ozempic, list price per month (US dollars, 2024)', unit: 'USD', categories: ['United States', 'Canada', 'Denmark', 'France', 'Germany', 'Estimated cost-based price'],
        series: [{name: 'Monthly price', values: [969, 155, 122, 71, 59, 4.73], notes: ['List price, before rebates; US net price about $600', '', '', '', '', 'Upper end of the $0.89–$4.73 range, including a profit margin (diabetes dose)']}], horizontal: true, labelWidth: 200, colorByCategory: false,
        note: 'List prices from the US Senate HELP Committee (September 2024). Cost-based estimate from Barber et al., JAMA Netw Open 2024 (2023 US dollars).'}},

    {type: 'explorer', title: 'Market-size explorer: why investors went wild, and then cooled', intro: 'A toy model of annual US revenue for one obesity drug. Move the sliders. The point is to see which assumptions matter most.',
      inputs: [
        {id: 'pop', label: 'Eligible US adults (millions)', min: 20, max: 120, step: 5, value: 100, fmt: v => v + 'M'},
        {id: 'share', label: 'Share of eligible people treated', min: 1, max: 40, value: 8, fmt: v => v + '%'},
        {id: 'price', label: 'Net price per month', min: 100, max: 1000, step: 25, value: 500, fmt: v => '$' + v},
        {id: 'months', label: 'Months on drug per patient-year (persistence)', min: 2, max: 12, value: 7, fmt: v => v + ' mo'},
      ],
      compute: v => {
        const rev = v.pop * 1e6 * v.share / 100 * v.price * v.months / 1e9;
        const people = v.pop * v.share / 100;
        const cmp = rev > 36.5 ? 'more than' : 'less than';
        return `<p style="margin:0 0 6px"><b>${people.toFixed(1)} million</b> people treated × $${v.price} × ${v.months} months ≈ <b style="font-size:1.3em">$${rev.toFixed(1)}B a year</b>.</p>
        <p style="margin:0 0 6px">That is ${cmp} the $36.5B Lilly reported for Mounjaro and Zepbound combined in 2025.</p>
        <p style="margin:0;color:var(--ink-3);font-size:14px">Try this: cut the price from $500 to $250, as government deals pushed prices in 2025–26. Revenue halves unless the number treated doubles. And note that [[persistence]] matters as much as price: the STEP 1 extension shows that people who stop tend to regain weight, so every month a patient stays on the drug is both revenue and health. The CDC\'s 40.3% adult obesity rate means more than 100 million people; not all would qualify under a label or want treatment. Toy model only: it ignores competitors, rebates, supply limits and growth over time.</p>`;
      }},

    {type: 'decision', title: 'Decision: take the White House deal?', role: 'You are Novo Nordisk\'s new CEO, autumn 2025',
      scenario: `Your shares have fallen by more than half from the peak, and Lilly's tirzepatide has beaten semaglutide head to head. Medicare has already set a negotiated semaglutide price of $274 a month, starting in 2027. Now the administration offers a deal: sell GLP-1s to Medicare and Medicaid at about $245 a month, sell directly to cash-paying patients at steeply lower prices through a government website, and in return get Medicare coverage for obesity for the first time, plus relief from threatened pharmaceutical tariffs. Lilly is being offered the same terms. What do you do?`,
      options: [
        {label: 'Sign. Volume and Medicare access matter more than price per pen.', outcome: 'You trade margin for access to tens of millions of older Americans who were legally shut out, and you avoid tariffs. But you lock in low US prices that other buyers, from employers to foreign governments, will point to, and you still have to win against Lilly within the new system.'},
        {label: 'Refuse and defend price. Your drug has outcomes data no rival can match.', outcome: 'You protect margin in the short term, but Lilly signs alone, gets the Medicare pilot and the political goodwill, and you face tariffs and hostile headlines. Medicare negotiation is coming anyway under the Inflation Reduction Act.'},
        {label: 'Sign, but shift the fight to new products: pills and next-generation drugs priced outside the deal.', outcome: 'A reasonable hedge, but next-generation products only matter if they win on data. In practice the deal also set low starter prices for pills, and your next-generation drug, CagriSema, was trailing tirzepatide.'},
      ],
      reality: `Both companies signed on 6 November 2025. Novo said it expected a direct, negative low-single-digit impact on 2026 sales growth and a three-year tariff exemption. Three months later it guided that 2026 sales would fall by 5–13% at constant exchange rates, citing lower US prices, competition, compounding and patent expiry abroad. Whether the volume from Medicare coverage makes up for the price cuts is one of the big open questions in the industry.`},
    {type: 'callout', variant: 'product', heading: 'Persistence is churn, and churn is the business model', html: `<p>Subscription businesses live and die by retention. Obesity drugs turn out to be subscriptions: the benefit lasts only while you keep taking them, as the STEP 1 extension showed. So the revenue model is not "one sale per patient" but "monthly recurring revenue × months retained". That is why investors modeled Wegovy like a consumer subscription with a 100-million-person addressable market, and why every point of churn (nausea, cost, supply gaps, insurance denials) mattered.</p><p><b>Where the analogy breaks:</b> in software, high retention is pure upside. In medicine, "people must pay for life" raises questions of fairness, public budgets and consent that a SaaS company never faces. Governments can and did step in on price. Your customers' health depends on not churning, and they didn't choose the disease. And a price that looks fine per user can break a national budget when a hundred million people qualify.</p>`},

    // ---------------- 13. COMPETITION ----------------
    {type: 'story', kicker: 'What came next', title: 'The race Novo started and Lilly is winning', tocTitle: 'Competition', html: `
<p>Eli Lilly had been in GLP-1s since co-developing Byetta and then its own weekly drug, dulaglutide (Trulicity). Its next move was a single peptide that activates two receptors: GLP-1 and the other incretin, [[GIP]]. GIP had been written off as a drug target because it worked poorly in diabetes. Combined with GLP-1 in one molecule, it seemed to add to the effect. <b>[[tirzepatide|Tirzepatide]]</b> was approved as Mounjaro for type 2 diabetes in May 2022 and as Zepbound for obesity in November 2023.</p>
<p>In its pivotal obesity trial, SURMOUNT-1, the top 15 mg dose produced an average 20.9% weight loss at 72 weeks versus 3.1% on placebo. Then Lilly ran a direct comparison. In SURMOUNT-5, an open-label trial in 751 adults with obesity, tirzepatide produced 20.2% average weight loss at 72 weeks against 13.7% for semaglutide. Published in May 2025, it made "second-best" official. In 2025, Mounjaro and Zepbound together sold $36.5 billion, and Lilly passed $1 trillion in market value in November 2025, the first healthcare company to do so.</p>
<p>Novo's answer was <b>CagriSema</b>, semaglutide combined with [[cagrilintide]], a long-acting version of another satiety hormone, amylin. Novo had signalled it expected about 25% weight loss. In December 2024, the REDEFINE 1 trial reported 22.7% at 68 weeks, and Novo shares fell about 20% in a day. In February 2026, REDEFINE 4, a head-to-head against tirzepatide over 84 weeks, found 23.0% versus 25.5% and failed its primary goal of showing CagriSema was not worse. Novo had filed CagriSema with the FDA in December 2025 based on earlier trials.</p>
<h3>Pills, generics and a new CEO</h3>
<p>The next front is pills. Novo's oral <b>Wegovy pill</b>, a 25 mg daily tablet of semaglutide, was approved in December 2025, with about 16.6% weight loss in people who kept taking it in the OASIS 4 trial. Lilly's <b>orforglipron</b> (Foundayo), a small molecule rather than a peptide, was approved in April 2026. Its average weight loss was lower, a little over 12% at the top dose in ATTAIN-1, but it can be taken at any time of day without food or water restrictions and, as a small molecule, should be simpler to manufacture at scale than a peptide.</p>
<p>Outside the US, semaglutide's patents have begun to expire. In 2026, according to press reports, generic versions were approved in Canada and Brazil, and many brands were expected in India after the patent there expired in March, and Novo cited "patent expiry of the semaglutide molecule in certain" international markets as a drag on sales. In the US, Europe and Japan, key patents run to about 2031–2032.</p>
<p>In May 2025, Novo announced that CEO Lars Fruergaard Jørgensen would step down by mutual agreement with the board. Maziar Mike Doustdar, who had run its international business, took over in August 2025. The company that had created the market for obesity drugs was now fighting on price, on efficacy and against its own copies.</p>`},

    {type: 'chart', title: 'Head to head: Novo vs Lilly', intro: 'The two direct comparisons so far: semaglutide vs tirzepatide (SURMOUNT-5) and CagriSema vs tirzepatide (REDEFINE 4). Average weight loss by the end of each trial.',
      chart: {kind: 'bar', title: 'Average weight loss (%)', unit: '%', categories: ['SURMOUNT-5 (72 weeks)', 'REDEFINE 4 (84 weeks)'],
        series: [{name: 'Novo drug (semaglutide / CagriSema)', values: [13.7, 23.0]}, {name: 'Lilly tirzepatide', values: [20.2, 25.5], color: 2}], labelWidth: 200,
        note: 'SURMOUNT-5 (751 people, open-label, funded by Lilly): Aronne et al., NEJM 2025. REDEFINE 4 (809 people): Novo Nordisk company announcement, February 2026, trial-product analysis; with the treatment-policy analysis, 20.2% vs 23.6%.'}},

    {type: 'callout', variant: 'product', heading: 'First mover, then fast follower', html: `<p>Novo did the category-creation work: two decades of biology, the first weekly GLP-1, the first big obesity trials, the outcomes data that got payers to take obesity seriously, and the supply chain. Lilly then launched a better-performing product into a market Novo had educated, and scaled supply faster. It is the classic platform story: the pioneer proves demand and the [[fast follower]] wins on the next version.</p><p><b>Where the analogy breaks:</b> in software, a follower can ship a better version in months. Tirzepatide came from years of Lilly research and a large trial program, and it was already in late-stage trials when Wegovy launched; it was approved for diabetes 11 months later. Nobody "copied" Wegovy after seeing it succeed; both companies placed their bets years before anyone knew who would win. And the patents mean the pioneer keeps a protected franchise far longer than any software moat.</p>`},

    // ---------------- 14. SIDE EFFECTS & OPEN QUESTIONS ----------------
    {type: 'story', kicker: 'Open questions', title: 'Side effects, muscle and forever', tocTitle: 'Side effects and open questions', html: `
<p><b>The gut.</b> The commonest side effects are nausea, diarrhoea, vomiting and constipation, strongest during dose escalation and usually fading. In STEP 1, 4.5% of people on semaglutide stopped because of gastrointestinal side effects. In the longer SELECT trial, 16.6% stopped the drug permanently because of adverse events, against 8.2% on placebo. Because the drug slows the stomach, rare cases of severely delayed emptying and bowel obstruction have been reported.</p>
<p><b>Other signals.</b> Gallbladder problems such as gallstones are more common, a known consequence of rapid weight loss. SUSTAIN 6 found more diabetic eye complications in people with existing eye disease. The labels carry a boxed warning about thyroid C-cell tumors based on rodent studies; large human trials have not shown a clear increase, but the warning stays. Pancreatitis has been monitored closely since the first GLP-1 drugs; big outcome trials have not shown a significant increase.</p>
<p><b>Muscle.</b> When anyone loses weight, some of it is [[lean mass]]: muscle, organ tissue and water, not just fat. In a [[DXA]] body-composition substudy of STEP 1, people on semaglutide lost about 10.4 kg of fat and 6.9 kg of lean mass, so lean tissue made up roughly 40% of the weight lost, while the proportion of lean tissue in the body went up. Whether this matters depends on who you are: probably little for a 45-year-old with severe obesity, possibly a lot for a frail 75-year-old. Researchers are now studying how to preserve muscle during treatment.</p>
<p><b>Forever.</b> The STEP 1 extension showed that most weight returns within a year of stopping. Health systems are being asked to pay for a lifelong treatment for a very large share of the population. Whether that is affordable depends on prices, which are now falling, and on whether prevented heart attacks, kidney failure and other disease pay back the cost, which will take many years of [[real-world evidence]] to know.</p>`},

    {type: 'callout', variant: 'whatif', heading: 'What if Novo had stopped at a daily drug?', html: `<p>Liraglutide worked. Saxenda sold DKK 10.7 billion in 2022, without a heart-outcomes label and as a daily injection. Novo could reasonably have milked it and put its chemists elsewhere. Instead it paid for thousands more compounds, a second round of trials and a weekly molecule, while its own daily drug was still growing. Without semaglutide, the obesity market would likely have opened later, with a weaker product that took off about 8% of body weight, and with tirzepatide as the first truly effective obesity drug. Novo's willingness to make its own product obsolete is the less-told part of this story.</p>`},

    {type: 'callout', variant: 'lesson', heading: 'The biology surprise at the center of the case', html: `<p>GLP-1 was studied for 20 years as an insulin hormone for diabetes. The appetite effect, from the brain and the stomach, was a secondary observation that Knudsen's team took seriously when many didn't. The biggest commercial use of the molecule came from what had looked like a side effect. The same pattern appears in drugs as different as sildenafil (Viagra, first tested for heart pain) and minoxidil (a blood-pressure pill that grew hair). Watch what patients' bodies do, not just what the protocol measures.</p>`},

    // ---------------- 15. QUIZ ----------------
    {type: 'quiz', title: 'Check your understanding', questions: [
      {q: 'Why could natural GLP-1 never be used as a drug on its own?', options: ['It causes dangerously low blood sugar', 'It is destroyed by the enzyme DPP-4 and cleared by the kidneys within a couple of minutes', 'It cannot cross into the bloodstream from the gut', 'It only works in animals'], answer: 1,
        explain: 'Its half-life is one to two minutes. Every successful GLP-1 drug is, at heart, a solution to that clearance problem: a venom peptide that resists DPP-4, an enzyme blocker, or an albumin-binding analogue.'},
      {q: 'What does the fatty-acid chain on liraglutide and semaglutide do?', options: ['It lets the drug bind to albumin, which slows kidney clearance and shields it from enzymes', 'It activates the receptor more strongly', 'It helps the drug dissolve in the stomach', 'It makes the drug burn fat directly'], answer: 0,
        explain: 'Albumin carries fatty acids naturally. Bound to albumin, the drug is too large for the kidneys to filter, and slowly releases a small active fraction. Semaglutide\'s longer C18 diacid binds more tightly than liraglutide\'s C16 fatty acid.'},
      {q: 'Why do GLP-1 drugs rarely cause dangerously low blood sugar on their own, unlike sulfonylureas?', options: ['They don\'t affect insulin at all', 'They are given at very low doses', 'Their insulin-boosting effect depends on blood sugar being high', 'They raise glucagon'], answer: 2,
        explain: 'GLP-1 amplifies insulin release only when glucose is elevated, and it lowers glucagon. Combined with insulin or sulfonylureas, lows can still happen.'},
      {q: 'STEP 1 reported 14.9% weight loss on semaglutide. Why does it matter that this used a "treatment policy" estimand?', options: ['It means the number only includes people who took every dose', 'It means the placebo group was excluded', 'It is a statistical trick to inflate the result', 'It counts everyone as randomized, including people who stopped the drug, so it is a conservative, real-world-style estimate'], answer: 3,
        explain: 'Treatment-policy analyses include dropouts, so they usually show a smaller effect than "on-treatment" analyses. When comparing drugs, check that both numbers use the same estimand.'},
      {q: 'Why was SELECT so important commercially, even though Wegovy was already approved?', options: ['It showed more weight loss than STEP 1', 'It showed semaglutide reduced heart attacks, strokes and CV deaths, turning a weight surrogate into hard outcomes that payers value', 'It was required for approval in Europe', 'It proved the drug was safe in children'], answer: 1,
        explain: 'Weight is a surrogate endpoint. SELECT showed a 20% reduction in major cardiovascular events, which led to a new label and opened Medicare Part D coverage for people with heart disease.'},
      {q: 'After stopping semaglutide in the STEP 1 extension, what happened?', options: ['Weight stayed off for good', 'People gained more than they had lost', 'People regained about two-thirds of the weight lost within a year', 'Only people in the placebo group regained weight'], answer: 2,
        explain: 'Weight and cardiometabolic markers drifted back towards baseline. This is why the drugs are thought of as chronic therapy, with major consequences for cost and pricing.'},
      {q: 'Why were compounding pharmacies legally able to sell semaglutide copies in the US from 2022 to 2025?', options: ['Semaglutide was on the FDA drug shortage list, which lets compounders copy approved drugs', 'Novo Nordisk\'s patents had expired', 'The FDA approved them as generics', 'Compounding is unregulated in all circumstances'], answer: 0,
        explain: 'The shortage-list exemption is the key. Once the FDA declared the shortage over in February 2025, compounders were given a grace period to stop, though Novo says mass compounding continued.'},
      {q: 'Tirzepatide beat semaglutide head to head. Which statement best describes why Lilly was able to challenge Novo?', options: ['Lilly copied semaglutide after Wegovy launched', 'Tirzepatide is a pill, which patients prefer', 'Novo withdrew Wegovy', 'Lilly had invested in a dual GIP/GLP-1 agonist years earlier, so a better-performing product was ready as the market Novo created took off'], answer: 3,
        explain: 'Tirzepatide was approved for diabetes in 2022, only a year after Wegovy. Drug races are decided by bets placed a decade earlier, not by reacting to a competitor\'s launch.'},
      {q: 'The oral Rybelsus tablet contains many times more semaglutide than a weekly injection. Why?', options: ['Pills are always higher dose', 'The tablet is a different molecule', 'Only a small fraction of a swallowed peptide is absorbed, even with the SNAC enhancer, and the tablet is taken daily', 'The stomach converts it into a stronger form'], answer: 2,
        explain: 'Low bioavailability is the price of oral delivery. Semaglutide\'s week-long half-life smooths out day-to-day variation in absorption, one reason it could work as a pill where most peptides fail.'},
    ]},

    // ---------------- 16. LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'The engineering is often the invention', text: 'GLP-1 biology was known by 1987. The drug came from solving a clearance problem, with a fatty-acid tail and one swapped amino acid. Many great drugs are old biology plus new delivery.', links: ['spinraza', 'enhertu', 'comirnaty']},
      {title: 'Surrogates open the door; outcomes open the wallet', text: 'Weight loss got Wegovy approved. Heart and kidney outcomes changed how payers and Medicare saw it. The opposite case, a surrogate that moved while patients did not benefit, is just as instructive.', links: ['torcetrapib', 'aduhelm', 'vioxx']},
      {title: 'Take the "side effect" seriously', text: 'The appetite effect of a diabetes hormone became the biggest market in pharma. Surprising biology is often the most valuable signal in a program.', links: ['keytruda', 'gleevec']},
      {title: 'Capacity and delivery format are competitive weapons', text: 'Shortages sent patients to compounders and rivals; a needle-free pill and fill-finish capacity became strategic. An earlier inhaled insulin shows that convenience alone isn\'t enough if the product is worse.', links: ['exubera', 'comirnaty', 'humira']},
      {title: 'Pioneers set prices; followers and governments reset them', text: 'Being first let Novo set high US prices. Competition, negotiation and public pressure brought them down fast. Similar arcs played out with hepatitis C cures and high-priced biologics.', links: ['sovaldi', 'humira', 'zolgensma']},
    ]},

    // ---------------- 17. SOURCES ----------------
    {type: 'sources', title: 'Sources', items: [
      {text: 'Lasker Foundation. GLP-1-based therapy for obesity: 2024 Lasker~DeBakey Clinical Medical Research Award (Habener, Mojsov, Knudsen).', url: 'https://laskerfoundation.org/winners/glp-1-based-therapy-for-obesity/'},
      {text: 'Drucker DJ, Habener JF, Holst JJ. Discovery, characterization, and clinical development of the glucagon-like peptides. J Clin Invest 2017;127:4217–27.', url: 'https://www.jci.org/articles/view/97233'},
      {text: 'Friedman JM. The discovery and development of GLP-1 based drugs that have revolutionized the treatment of obesity. PNAS 2024;121:e2415550121.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11441540/'},
      {text: 'Holst JJ. Annual Prize Lecture 2024: Endogenous physiological mechanisms as basis for the treatment of obesity and type 2 diabetes. J Physiol 2024.', url: 'https://pubmed.ncbi.nlm.nih.gov/39520693/'},
      {text: 'Mojsov S, Weir GC, Habener JF. Insulinotropin: glucagon-like peptide I (7-37) ... is a potent stimulator of insulin release in the perfused rat pancreas. J Clin Invest 1987;79:616–9.', url: 'https://pubmed.ncbi.nlm.nih.gov/3543057/'},
      {text: 'Drucker DJ, Philippe J, Mojsov S, Chick WL, Habener JF. Glucagon-like peptide I stimulates insulin gene expression and increases cyclic AMP levels in a rat islet cell line. PNAS 1987;84:3434–8.', url: 'https://pubmed.ncbi.nlm.nih.gov/3033647/'},
      {text: 'Science (2023). Her work paved the way for blockbuster obesity drugs. Now, she\'s fighting for recognition; and STAT (27 Sep 2023) on Svetlana Mojsov.', url: 'https://www.science.org/content/article/her-work-paved-way-blockbuster-obesity-drugs-now-she-s-fighting-recognition'},
      {text: 'STAT (17 Oct 2023). How one scientist\'s determination made Novo Nordisk an obesity-drug powerhouse (Lotte Bjerre Knudsen); CBS News 60 Minutes profile of Knudsen.', url: 'https://www.statnews.com/2023/10/17/lotte-knudsen-novo-nordisk-obesity-drug-liraglutide-ozempic-wegovy/'},
      {text: 'National Institute on Aging. Exendin-4: from lizard to laboratory...and beyond; Golden Goose Award 2013 (John Eng).', url: 'https://www.nia.nih.gov/news/exendin-4-lizard-laboratory-and-beyond'},
      {text: 'Lau J, Bloch P, Schäffer L, et al. Discovery of the once-weekly glucagon-like peptide-1 (GLP-1) analogue semaglutide. J Med Chem 2015;58:7370–80.', url: 'https://pubs.acs.org/doi/10.1021/acs.jmedchem.5b00726'},
      {text: 'Wasserman DH. Four grams of glucose. Am J Physiol Endocrinol Metab 2009;296:E11–21.', url: 'https://pubmed.ncbi.nlm.nih.gov/18840763/'},
      {text: 'CDC National Center for Health Statistics. Obesity and severe obesity prevalence in adults: United States, August 2021–August 2023 (Data Brief 508).', url: 'https://www.cdc.gov/nchs/products/databriefs/db508.htm'},
      {text: 'Marso SP, et al. Semaglutide and cardiovascular outcomes in patients with type 2 diabetes (SUSTAIN-6). NEJM 2016;375:1834–44.', url: 'https://pubmed.ncbi.nlm.nih.gov/27633186/'},
      {text: 'Buckley ST, et al. Transcellular stomach absorption of a derivatized glucagon-like peptide-1 receptor agonist. Sci Transl Med 2018;10:eaar7047.', url: 'https://pubmed.ncbi.nlm.nih.gov/30429357/'},
      {text: 'Pi-Sunyer X, et al. A randomized, controlled trial of 3.0 mg of liraglutide in weight management (SCALE). NEJM 2015;373:11–22.', url: 'https://pubmed.ncbi.nlm.nih.gov/26132939/'},
      {text: 'O\'Neil PM, et al. Efficacy and safety of semaglutide compared with liraglutide and placebo for weight loss: a dose-ranging phase 2 trial. Lancet 2018;392:637–49.', url: 'https://pubmed.ncbi.nlm.nih.gov/30122305/'},
      {text: 'Wilding JPH, et al. Once-weekly semaglutide in adults with overweight or obesity (STEP 1). NEJM 2021;384:989–1002.', url: 'https://pubmed.ncbi.nlm.nih.gov/33567185/'},
      {text: 'Wilding JPH, et al. Weight regain and cardiometabolic effects after withdrawal of semaglutide: the STEP 1 trial extension. Diabetes Obes Metab 2022;24:1553–64.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9542252/'},
      {text: 'Lincoff AM, et al. Semaglutide and cardiovascular outcomes in obesity without diabetes (SELECT). NEJM 2023;389:2221–32.', url: 'https://pubmed.ncbi.nlm.nih.gov/37952131/'},
      {text: 'Perkovic V, et al. Effects of semaglutide on chronic kidney disease in patients with type 2 diabetes (FLOW). NEJM 2024;391:109–21.', url: 'https://pubmed.ncbi.nlm.nih.gov/38785209/'},
      {text: 'Jastreboff AM, et al. Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1). NEJM 2022;387:205–16.', url: 'https://pubmed.ncbi.nlm.nih.gov/35658024/'},
      {text: 'Aronne LJ, et al. Tirzepatide as compared with semaglutide for the treatment of obesity (SURMOUNT-5). NEJM 2025;393:26–36.', url: 'https://pubmed.ncbi.nlm.nih.gov/40353578/'},
      {text: 'Müller TD, Blüher M, Tschöp MH, DiMarchi RD. Anti-obesity drug discovery: advances and challenges. Nat Rev Drug Discov 2022;21:201–23 (history and Table 1 of obesity drugs).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8609996/'},
      {text: 'Kim JY, Kim NH. Beyond fat loss: addressing the sarcopenia challenge of incretin-based therapies. Diabetes Metab J 2026 (summarises the STEP 1 DXA substudy).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13561646/'},
      {text: 'US FDA, Drugs@FDA (via openFDA): approval dates for Victoza, Saxenda, Ozempic, Rybelsus, Wegovy, Wegovy tablets, Byetta, Mounjaro and Zepbound; FDA bulletin on Wegovy approval, June 2021.', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/'},
      {text: 'US FDA. FDA clarifies policies for compounders as national GLP-1 supply begins to stabilize (semaglutide shortage resolved, 21 Feb 2025).', url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize'},
      {text: 'Novo Nordisk annual financial reports (Form 6-K): 2021 (Wegovy supply disruption, product sales), 2023 and 2025 (product sales, headcount, 2026 outlook, compounding, patent expiry, leadership).', url: 'https://www.sec.gov/Archives/edgar/data/353278/000035327826000006/caq42025.htm'},
      {text: 'Novo Nordisk company announcements: REDEFINE 4 results (23 Feb 2026); US agreement with the Administration (6 Nov 2025); CEO transition (16 May 2025); Emisphere acquisition (6 Nov 2020).', url: 'https://www.sec.gov/Archives/edgar/data/353278/000117184326000996/f6k_022326.htm'},
      {text: 'Eli Lilly. Q4 2025 results (Mounjaro $22.97B, Zepbound $13.54B); FDA approval of Foundayo (orforglipron), 1 Apr 2026.', url: 'https://investor.lilly.com/news-releases/news-release-details/fda-approves-lillys-foundayotm-orforglipron-only-glp-1-pill'},
      {text: 'US Senate HELP Committee / Sen. Bernie Sanders: investigation into Ozempic and Wegovy prices (April 2024) and report (September 2024).', url: 'https://www.sanders.senate.gov/press-releases/news-chairman-sanders-launches-investigation-into-outrageously-high-price-of-ozempic-and-wegovy-in-the-united-states/'},
      {text: 'Barber MJ, Gotham D, Bygrave H, Cepuch C. Estimated sustainable cost-based prices for diabetes medicines. JAMA Netw Open 2024;7:e243474.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10973901/'},
      {text: 'KFF. A new use for Wegovy opens the door to Medicare coverage for millions of people with obesity (2024).', url: 'https://www.kff.org/medicare/issue-brief/a-new-use-for-wegovy-opens-the-door-to-medicare-coverage-for-millions-of-people-with-obesity/'},
      {text: 'CMS (Dec 2025): BALANCE model and Medicare GLP-1 demonstration; Fierce Pharma / BioPharma Dive (Nov 2025): Medicare negotiated price for semaglutide, $274 from 2027.', url: 'https://www.cms.gov/newsroom/press-releases/cms-launches-voluntary-model-expand-access-life-changing-medicines-promote-healthier-living'},
      {text: 'CNBC (6 Nov 2025). Trump announces deals with Eli Lilly, Novo Nordisk to slash weight loss drug prices, offer some Medicare coverage.', url: 'https://www.cnbc.com/2025/11/06/trump-eli-lilly-novo-nordisk-deal-obesity-drug-prices.html'},
      {text: 'CNBC (1 Sep 2023). Novo Nordisk becomes Europe\'s most valuable firm, toppling LVMH; Fortune (Jan 2025) on LVMH reclaiming the title; Euronews (Dec 2024) on the CagriSema share fall.', url: 'https://www.cnbc.com/2023/09/01/ozempic-maker-novo-nordisk-briefly-becomes-europes-most-valuable-firm.html'},
      {text: 'Wikipedia: Semaglutide; Novo Nordisk; Eli Lilly and Company (used for patent-expiry and generic launches abroad, peak market value, Catalent deal terms, Lilly $1 trillion; each traced to cited press reports).', url: 'https://en.wikipedia.org/wiki/Semaglutide'},
    ]},
  ],
});

