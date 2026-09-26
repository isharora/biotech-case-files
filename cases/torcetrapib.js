// Torcetrapib (Pfizer): the drug that raised "good cholesterol" and increased deaths.
registerCase({
  id: 'torcetrapib', kind: 'failure',
  brand: 'Torcetrapib', generic: 'torcetrapib (CP-529,414), never approved', company: 'Pfizer',
  tagline: `It raised "good cholesterol" more than any pill before it, and more patients on it died. How a perfect blood test and a reasonable-sounding theory walked Pfizer into a failure that cost about $21 billion in market value in one day.`,
  chips: [['Disease', 'Coronary heart disease'], ['Modality', '[[small molecule]]'], ['Target', '[[CETP]]'], ['Stopped', 'December 2, 2006']],
  readingTime: 32,
  stats: [
    {v: '+72%', l: '[[HDL]] cholesterol at 12 months on torcetrapib in ILLUMINATE', n: 'Barter et al., NEJM 2007'},
    {v: '93 vs 59', l: 'Deaths, torcetrapib vs atorvastatin alone ([[hazard ratio]] 1.58)', n: 'Final published count; 82 vs 51 at the stop'},
    {v: '15,067', l: 'Patients in ILLUMINATE, the outcomes trial that stopped it', n: 'Barter et al., NEJM 2007'},
    {v: '~$800M', l: 'What Pfizer said it was spending on clinical development', n: 'Pfizer press release, June 2005'},
    {v: '~$21B', l: 'Pfizer market value lost on the first trading day after the stop', n: 'PharmaTimes, Dec 2006'},
  ],
  emblem: `<svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="138" class="il-1s"/>
    <path d="M92 228 V118" class="st-1" stroke-width="22" stroke-linecap="round" fill="none"/>
    <path d="M56 134 L92 80 L128 134 Z" class="il-1"/>
    <text x="92" y="262" text-anchor="middle" class="il-title">HDL</text>
    <path d="M205 234 C170 207 145 187 145 160 C145 140 160 127 177 127 C190 127 200 135 205 145 C210 135 220 127 233 127 C250 127 265 140 265 160 C265 187 240 207 205 234 Z" class="il-7"/>
    <path d="M205 146 L195 172 L213 188 L199 214" class="il-none" style="stroke:var(--il-paper)" stroke-width="5" stroke-linejoin="round" fill="none"/>
    <text x="205" y="262" text-anchor="middle" class="il-title">Deaths</text>
  </svg>`,
  facts: {start: 1990, firstHuman: 1999, approval: null, end: 2006, peakSalesB: null, pivotalN: 15067,
    area: 'cardio', modality: 'small molecule', target: 'CETP'},
  themes: ['surrogate-endpoints', 'biology-surprise', 'safety'],
  glossary: {
    'lipoprotein': 'A particle that carries fats through the blood: a shell of protein and phospholipid around a core of cholesterol and triglycerides. LDL, HDL and VLDL are all lipoproteins.',
    'VLDL': 'Very-low-density lipoprotein. Made by the liver and loaded with triglycerides; as it unloads them it shrinks into LDL.',
    'atherosclerosis': 'The slow build-up of fatty, inflamed plaque inside artery walls. It is the underlying cause of most heart attacks and many strokes.',
    'plaque': 'A lump of cholesterol, dead cells and scar tissue inside an artery wall. If its cap tears, a clot forms that can block the artery.',
    'statin': 'A class of pills (atorvastatin, simvastatin and others) that block a liver enzyme needed to make cholesterol, which makes the liver pull more LDL out of the blood.',
    'HMG-CoA reductase': 'The liver enzyme that controls the rate of cholesterol production. Statins block it.',
    'atorvastatin': 'The statin sold by Pfizer as Lipitor, the world\'s best-selling drug in the 2000s.',
    'CETP': 'Cholesteryl ester transfer protein: a protein in the blood that moves cholesterol out of HDL particles and into LDL and VLDL particles, taking triglycerides back in exchange.',
    'cholesteryl ester': 'The storage form of cholesterol, with a fatty acid attached. It is what fills the core of a lipoprotein particle.',
    'triglycerides': 'The main form of fat in food and body fat, carried in the blood inside lipoproteins.',
    'apoB': 'Apolipoprotein B, the protein that wraps each LDL and VLDL particle, one copy per particle. Counting apoB counts the particles that can lodge in artery walls.',
    'non-HDL cholesterol': 'Total cholesterol minus HDL cholesterol: the cholesterol carried in all the particles that can cause atherosclerosis (LDL, VLDL and their remnants).',
    'reverse cholesterol transport': 'The idea that HDL collects surplus cholesterol from tissues, including artery walls, and brings it back to the liver for disposal.',
    'foam cell': 'An immune cell in the artery wall that has swallowed so much cholesterol it looks foamy under a microscope. Foam cells are the seed of a plaque.',
    'macrophage': 'A large immune cell that swallows debris and microbes. In artery walls it swallows cholesterol-laden LDL and turns into a foam cell.',
    'endothelium': 'The single layer of cells lining the inside of every blood vessel.',
    'aldosterone': 'A hormone made by the adrenal glands that tells the kidneys to hold on to sodium (and water) and let potassium go. Too much raises blood pressure.',
    'cortisol': 'A stress hormone made by the adrenal glands.',
    'adrenal gland': 'A small gland on top of each kidney that makes hormones including aldosterone, cortisol and adrenaline.',
    'mmHg': 'Millimeters of mercury, the unit for blood pressure. A 5 mmHg rise in systolic (upper-number) pressure is modest for one person but meaningful across a population.',
    'mg/dL': 'Milligrams per deciliter, the US unit for cholesterol on a blood test. Typical HDL is about 40–60 mg/dL; 1 mmol/L equals about 39 mg/dL of cholesterol.',
    'epidemiology': 'The study of patterns of disease in populations: who gets sick, and what they have in common. It finds associations, not necessarily causes.',
    'confounder': 'A hidden factor that affects both the thing you measure and the outcome, creating an association between them that is not cause and effect.',
    'Mendelian randomization': 'Using gene variants that people are born with as a natural randomized trial: if a variant that raises a biomarker also changes disease risk, the biomarker is probably causal. If it doesn\'t, it probably isn\'t.',
    'allele': 'One version of a gene. You inherit one allele from each parent.',
    'homozygous': 'Carrying two copies of the same allele, one from each parent.',
    'heterozygous': 'Carrying two different alleles of a gene, for example one normal and one mutated copy.',
    'founder effect': 'When a gene variant becomes common in a population because it traces back to a small number of ancestors.',
    'odds ratio': 'A measure of association: 1.0 means no difference, 0.87 means about 13% lower odds, 1.5 means 50% higher odds.',
    'post hoc analysis': 'An analysis decided after seeing the data. Useful for generating ideas, weak as proof, because with enough slices something always looks significant.',
    'composite endpoint': 'A trial endpoint that counts any one of several events (for example heart attack, stroke or cardiac death), so the trial accumulates events faster.',
    'unstable angina': 'Chest pain at rest or getting quickly worse, a warning sign that a coronary artery is close to blocking.',
    'intravascular ultrasound': 'IVUS: a tiny ultrasound probe threaded into a heart artery to measure the volume of plaque in its wall.',
    'carotid intima-media thickness': 'CIMT: the thickness of the inner layers of the neck arteries, measured by ultrasound, used as a proxy for how fast atherosclerosis is progressing.',
    'familial hypercholesterolemia': 'An inherited condition, usually caused by a faulty LDL receptor gene, that causes very high LDL from birth and early heart disease.',
    'fixed-dose combination': 'Two drugs combined in one pill at set doses.',
    'relative risk': 'The risk in the treated group divided by the risk in the control group. 0.70 means 30% lower risk.',
    'CHMP': 'The EMA\'s Committee for Medicinal Products for Human Use, which recommends whether the European Commission should approve a drug.',
    'Goodhart\'s law': '"When a measure becomes a target, it ceases to be a good measure." Optimizing a proxy can break its link to the real goal.',
    'ILLUMINATE': 'The 15,067-patient outcomes trial of torcetrapib plus atorvastatin versus atorvastatin alone, stopped on December 2, 2006, because of excess deaths.',
  },
  sections: [
    // ---------------- COLD OPEN ----------------
    {type: 'story', kicker: 'Cold open', title: 'Thursday in Groton, Saturday night in New York', tocTitle: 'Cold open', html: `
      <p>On Thursday, November 30, 2006, Pfizer hosted investors and Wall Street analysts at its research campus in Groton, Connecticut. Pfizer was the biggest drug company in the world, with 106,000 employees and $51 billion in sales the year before, and it had a problem everyone in the room understood. Its best seller, the cholesterol pill Lipitor, was expected to face cheap copies within a few years. The company needed a successor, and it had one it was ready to talk about.</p>
      <p>Jeffrey Kindler, who had been chief executive for only about four months, told the room: <em>"This will be one of the most important compounds of our generation."</em> The compound was <strong>torcetrapib</strong>. In clinical studies it raised HDL, the so-called "good cholesterol", by more than any drug had before. Pfizer had built a $90 million plant in Ireland to make it before it was even approved. The company said it was spending about $800 million on the clinical program. Pfizer planned to ask the FDA for approval in 2007.</p>
      <p>Two days later, on Saturday morning, the news reached Pfizer executives. An independent board of experts, the only people allowed to look at the unblinded results of a 15,000-patient trial called [[ILLUMINATE]], had counted the deaths. Among patients taking torcetrapib with Lipitor, 82 had died. Among those taking Lipitor alone, 51. The board recommended stopping the trial.</p>
      <p>The FDA says Pfizer told it at 4 p.m. that Saturday. About five hours later, Pfizer put out a press release saying that it was ending torcetrapib's development entirely, in the interest of patient safety. Researchers around the world began phoning patients to tell them to stop taking their study pills.</p>
      <p>On Monday, Pfizer's stock fell about 11%, erasing more than $21 billion of market value. That is roughly 26 times what the company had said it was spending to test the drug. Moody's later downgraded Pfizer's credit rating, citing the loss of torcetrapib.</p>
      <p>This case is about a drug that did exactly what it was designed to do and still hurt people. Torcetrapib blocked its target. It moved the blood test in the right direction, by a lot. And the patients who took it did worse. For someone coming from software, it teaches one of the most important ideas in drug development: <strong>the number you can measure is not the outcome you care about</strong>. It also poses a harder question that took the field another decade and nearly 60,000 more trial patients to answer: was "good cholesterol" ever the right thing to raise?</p>`},

    // ---------------- CHOLESTEROL FROM ZERO ----------------
    {type: 'story', kicker: 'The biology from zero', title: 'Cholesterol, and the trucks that carry it', tocTitle: 'Cholesterol from zero', html: `
      <p>[[cholesterol|Cholesterol]] has a bad reputation, but it isn't poison. It is a waxy, fatty molecule that every cell in your body needs. It stiffens cell membranes, it is the raw material for hormones such as estrogen and testosterone, and the liver turns it into bile to digest fat. Your liver makes most of the cholesterol in your body. Food supplies the rest.</p>
      <p>The trouble is transport. Cholesterol is a fat, and blood is mostly water. Fat and water don't mix. So the body packs cholesterol into delivery vehicles called [[lipoprotein|lipoproteins]]: tiny particles with a skin of protein and fat-friendly molecules wrapped around a cargo hold. The cargo is cholesterol, stored as [[cholesteryl ester]], and [[triglycerides]], the fat you eat and store. Think of them as trucks on the highway of your bloodstream.</p>
      <h3>The main trucks</h3>
      <ul>
        <li><strong>[[VLDL]] and [[LDL]]</strong>. The liver sends out VLDL trucks full of triglycerides. As they drop fat off at muscles and fat tissue, they shrink into LDL, which is mostly cholesterol. LDL trucks deliver cholesterol to cells around the body. Each one carries a single copy of a protein called [[apoB]], which works like a license plate: count the apoB and you've counted the trucks.</li>
        <li><strong>[[HDL]]</strong>. HDL starts out as a nearly empty disc of protein. It roams the body picking up surplus cholesterol from cells, including cells in artery walls, and eventually hands it back to the liver for disposal. Scientists call this route [[reverse cholesterol transport]]. If LDL is the delivery truck, HDL is the garbage truck.</li>
      </ul>
      <p>A standard blood test reports "LDL cholesterol" and "HDL cholesterol". Those numbers mean <em>how much cholesterol is riding in each kind of truck</em>. The cholesterol molecule is the same in both. "Bad" and "good" describe the truck and where it is heading, not the cargo. Keep that in mind. It matters later.</p>
      <h3>How arteries clog</h3>
      <p>Arteries are lined with a thin sheet of cells called the [[endothelium]]. When there are many LDL particles in the blood, some of them slip through this lining and get stuck in the artery wall. There, they are chemically damaged and treated as intruders. Immune cells called [[macrophage|macrophages]] swallow them, fill up with cholesterol droplets, and become bloated [[foam cell|foam cells]]. Over decades, foam cells, dead cells, cholesterol crystals and scar tissue build up into a [[plaque]]. This slow process is [[atherosclerosis]].</p>
      <p>Most plaques don't kill you by slowly blocking the pipe. They kill you when the thin fibrous cap over the plaque tears. Blood meets the fatty core, a clot forms in minutes, and if that happens in an artery feeding the heart muscle, part of the heart starves of oxygen and dies. That is a heart attack. The same process in the arteries of the brain causes many strokes. Heart attacks and strokes together were, and still are, the leading killer in the Western world.</p>
      <h3>Why LDL is the prime suspect</h3>
      <p>The case against LDL is about as strong as evidence in medicine gets. In the Scandinavian Simvastatin Survival Study (4S), published in 1994, 4,444 heart patients were randomly assigned to a statin or a placebo. The statin cut LDL by 35%. Over about five years, 12% of the placebo group died, compared with 8% of the statin group: a 30% lower risk of death. Later, the Cholesterol Treatment Trialists pooled 26 trials with about 170,000 people and found a steady rule: every 1 mmol/L drop in LDL (about 39 [[mg/dL]]) cuts major heart attacks and strokes by about a fifth, whatever drug or patient you start with.</p>
      <p>That is what a validated [[surrogate endpoint]] looks like. Lower LDL, in almost any safe way, and people have fewer heart attacks. It is so reliable that regulators approve cholesterol drugs on their LDL effect alone. The question in this case is whether HDL deserved the same trust.</p>`},

    {type: 'figure', title: 'Inside a clogging artery', intro: 'Hover or tap each labeled part to see what happens where.',
      svg: `<svg viewBox="0 0 900 420">
        <rect x="20" y="24" width="860" height="190" rx="18" class="il-7s"/>
        <text x="40" y="52" class="il-title">Bloodstream (inside of the artery)</text>
        <rect x="20" y="214" width="860" height="182" rx="18" class="il-8s"/>
        <text x="40" y="382" class="il-title">Artery wall</text>
        <g data-part="endo"><path d="M20 210 H368 M652 210 H880" class="il-line2 st-3" fill="none"/><path d="M20 218 H362 M658 218 H880" class="il-line st-3" fill="none"/><text x="668" y="240" class="il-text-2">endothelium (lining)</text></g>
        <g data-part="ldl">
          <circle cx="90" cy="118" r="12" class="il-7"/><circle cx="150" cy="150" r="12" class="il-7"/><circle cx="208" cy="106" r="12" class="il-7"/><circle cx="118" cy="180" r="12" class="il-7"/>
          <path d="M158 160 C190 200 220 238 250 270" class="il-none st-7 flow" stroke-width="2.5" fill="none"/>
          <text x="70" y="88" class="il-text">LDL particles slip in</text></g>
        <g data-part="foam">
          <path d="M235 285 C235 262 262 250 285 256 C310 262 322 285 314 306 C306 330 270 336 250 322 C238 314 235 300 235 285 Z" class="il-2s il-line"/>
          <circle cx="262" cy="282" r="6" class="il-4"/><circle cx="284" cy="298" r="7" class="il-4"/><circle cx="296" cy="276" r="5" class="il-4"/><circle cx="265" cy="308" r="5" class="il-4"/>
          <text x="226" y="356" class="il-text">foam cell (stuffed macrophage)</text></g>
        <g data-part="plaque">
          <path d="M360 214 C410 82 610 82 660 214 Z" class="il-4s il-line"/>
          <ellipse cx="510" cy="178" rx="92" ry="24" class="il-4"/>
          <text x="420" y="262" class="il-text">plaque: fatty core in the wall</text></g>
        <g data-part="cap"><path d="M372 204 C428 96 592 96 648 204" class="il-none st-7" stroke-width="4" fill="none"/><text x="430" y="80" class="il-text">thin fibrous cap</text></g>
        <g data-part="clot"><path d="M612 122 C630 108 660 116 662 136 C664 156 640 166 622 156 C606 148 600 132 612 122 Z" class="il-7"/><text x="672" y="120" class="il-text">clot if the cap tears</text></g>
        <g data-part="hdl"><circle cx="842" cy="336" r="9" class="il-3"/><circle cx="852" cy="150" r="9" class="il-3"/><path d="M843 322 C846 260 849 200 851 164" class="il-none st-3 flow" stroke-width="2.5" fill="none"/><text x="826" y="310" text-anchor="end" class="il-text">HDL carries some away</text></g>
      </svg>`,
      hotspots: {
        ldl: {title: 'LDL gets in', text: 'The more LDL particles in the blood, the more squeeze through the lining and get trapped in the wall. This is why LDL is the prime cause of [[atherosclerosis]]: genetics, statin trials and other drugs all agree.'},
        endo: {title: 'The lining', text: 'The [[endothelium]] is one cell thick. High blood pressure, smoking and high blood sugar damage it and make it leakier.'},
        foam: {title: 'Foam cells', text: 'Trapped LDL is chemically damaged. [[macrophage|Macrophages]] swallow it and swell into [[foam cell|foam cells]], which release inflammatory signals that recruit more immune cells. The plaque grows by feeding on its own inflammation.'},
        plaque: {title: 'The plaque', text: 'Decades of build-up: cholesterol crystals, dead foam cells and scar tissue. Plaque volume is what imaging trials such as ILLUSTRATE measure with [[intravascular ultrasound]].'},
        cap: {title: 'The fibrous cap', text: 'A layer of scar tissue over the fatty core. Thin, inflamed caps are the dangerous ones, and they aren\'t always in the biggest plaques.'},
        clot: {title: 'Rupture and clot', text: 'When the cap tears, blood meets the core and clots within minutes. If the clot blocks a heart artery, the heart muscle beyond it dies: a heart attack.'},
        hdl: {title: 'HDL, the garbage truck', text: 'HDL can pull surplus cholesterol out of foam cells and carry it back toward the liver. This clean-up role is the biological story behind the hope that more HDL means less plaque. Whether HDL <em>levels</em> reflect how much clean-up is happening is the question this case turns on.'},
      },
      caption: 'Schematic, not to scale. Plaque builds inside the wall over decades; most heart attacks come from a cap tearing, not from a slow blockage.'},

    // ---------------- LIPITOR ----------------
    {type: 'story', kicker: 'The business stakes', title: 'Lipitor, and the clock', tocTitle: 'Lipitor and the clock', html: `
      <p>[[statin|Statins]] work by blocking [[HMG-CoA reductase]], the [[enzyme]] that sets the pace of cholesterol production in the liver. Starved of its own supply, the liver puts more LDL receptors on its surface and pulls LDL particles out of the blood. LDL falls by a third or more.</p>
      <p>[[atorvastatin|Atorvastatin]], sold as Lipitor, was developed by Warner-Lambert and approved by the FDA on December 17, 1996. In 2000, Pfizer bought Warner-Lambert in a hostile takeover that gave it full rights to the drug. Lipitor was not the first statin, but it was potent, and it became the best-selling medicine in the world. In 2006, Lipitor brought in about $12.9 billion in worldwide sales, about a quarter of Pfizer's revenue.</p>
      <p>Every [[blockbuster]] has a [[patent cliff]]. When the key patents expire, [[generic]] copies arrive at a fraction of the price and sales collapse within months. In 2006 the Lipitor cliff was expected around 2010. It finally came on November 30, 2011, the date agreed in a 2008 settlement with Ranbaxy, the first generic maker. Competition was already arriving: generic versions of two older statins, pravastatin and simvastatin (Merck's Zocor), launched in the US in April and June 2006. A cheap statin that was "good enough" was a direct threat.</p>
      <p>Pfizer's research budget was about $7 billion a year, yet its pipeline of new drugs close to launch was thin. That week it had announced it would cut about 20% of its US sales force. Torcetrapib was the plan. Tied to Lipitor in a single pill, it could create a new, patent-protected product that did something no statin could: raise good cholesterol while lowering bad. If doctors moved patients onto the combination, the franchise could carry on past the cliff. In 2001, Kindler's predecessor, Henry McKinnell, had called torcetrapib "an enormous opportunity."</p>
      <p>None of that made the science wrong. But it explains the pressure on every decision that followed: a successor had to be ready before 2010, and every year of delay cost billions.</p>`},

    {type: 'chart', title: 'The franchise torcetrapib was meant to protect', intro: 'Lipitor worldwide revenue as reported by Pfizer. Hover for values.',
      chart: {kind: 'line', title: 'Lipitor worldwide revenue', subtitle: 'US$ billions, company-reported, nominal', unit: '$B',
        series: [{name: 'Lipitor', points: [[2004, 10.862], [2005, 12.187], [2006, 12.886], [2007, 12.675], [2008, 12.401], [2009, 11.434], [2010, 10.733], [2011, 9.577], [2012, 3.948]]}],
        annotations: [{x: 2006.92, label: 'Torcetrapib stopped (Dec 2006)'}, {x: 2011.92, label: 'US generics (Nov 30, 2011)', dy: 18}],
        yMax: 14, xTicks: [2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        note: 'Source: Pfizer annual financial reports (2006, 2008, 2011, 2012). Sales fell by 59% in 2012, the first full year of US generic competition.'},
      takeaway: 'Lipitor sales were flat before the cliff and fell off it afterward. Torcetrapib was supposed to be the bridge.'},

    {type: 'callout', variant: 'numbers', heading: 'Lipitor by the numbers', html: `<ul>
      <li><b>$12.9 billion</b>: Lipitor worldwide sales in 2006, the world\'s best-selling drug.</li>
      <li><b>About 25%</b>: Lipitor\'s share of Pfizer\'s revenue that year.</li>
      <li><b>$3.9 billion</b>: Lipitor sales in 2012, after US generics arrived on November 30, 2011.</li>
      <li><b>$800 million</b>: what Pfizer said the torcetrapib/atorvastatin clinical program would cost, spread across about 25,000 patients.</li>
    </ul><p>A successor that kept even a fraction of Lipitor's patients would have paid for its development many times over. That's why the bet was so big, and why the pressure was so intense.</p>`},

    // ---------------- HDL HYPOTHESIS ----------------
    {type: 'story', kicker: 'What everyone believed', title: 'The HDL hypothesis', html: `
      <p>In 1948, researchers began following the residents of Framingham, a town outside Boston, measuring their blood pressure, cholesterol and habits and waiting to see who had heart attacks. The Framingham Heart Study gave medicine the idea of a "risk factor". In 1977, Gordon, Castelli and colleagues reported that one blood fat stood out for the opposite reason: people with <em>high</em> HDL cholesterol had <em>fewer</em> heart attacks. The title of their paper called HDL "a protective factor."</p>
      <p>The finding held up again and again. In 1989, a team of NIH-led researchers pooled four large American studies and found that each 1 mg/dL of extra HDL was associated with about a 2% lower risk of coronary heart disease in men and 3% in women. That held even after adjusting for LDL, blood pressure, smoking and weight. Few findings in heart [[epidemiology]] were more consistent.</p>
      <p>There was also a mechanism, and it made intuitive sense. If HDL is the garbage truck, more garbage trucks should mean cleaner arteries. Experiments in rabbits looked promising. Doctors started calling HDL "good cholesterol", and the name stuck in public health messages for decades.</p>
      <p>But one detail in the 1989 paper deserved more attention than it got. Its opening sentence noted that a British study had found, in 1986, that much of HDL's protective link disappeared once other risk factors were accounted for. Gordon's team concluded the British result was mostly a matter of methods. Even so, the argument showed that HDL might be a <em>marker</em> of health rather than a <em>cause</em> of it. Low HDL tends to travel with a cluster of other problems, such as high triglycerides, extra weight and insulin resistance. An observational study can adjust for the factors it measures, never for the ones it doesn't.</p>
      <h3>Nature's experiment, in Japan</h3>
      <p>In 1985, Koizumi, Mabuchi and colleagues at Kanazawa University described a healthy 58-year-old Japanese man with an HDL cholesterol of 301 mg/dL. A typical value is 40 to 60. His sister's was 174. Their blood had no detectable activity of a protein that normally moves cholesterol out of HDL. The family members who had died had not died of heart disease.</p>
      <p>That protein was [[CETP]], cholesteryl ester transfer protein. It floats in the blood and acts like a cargo-swap crew between trucks: it takes [[cholesteryl ester]] out of HDL and loads it into LDL and VLDL, taking triglycerides back in exchange. In 1989, Alan Tall's lab at Columbia University, working with Akihiro Inazu and the Kanazawa group, reported in <em>Nature</em> that two Japanese siblings with this condition carried two broken copies of the CETP [[gene]]: a single-letter [[mutation]] that wrecked the gene's [[splicing]]. In 1990, in the <em>New England Journal of Medicine</em>, they found the same mutation in four more families from three regions of Japan. People with two broken copies had HDL around three to four times the typical level (about 164 mg/dL on average) and lower LDL. The authors found "no evidence of premature atherosclerosis" and suggested this profile might even be associated with longer life.</p>
      <p>Here was the logic that launched a drug class:</p>
      <ul>
        <li>High HDL is associated with fewer heart attacks.</li>
        <li>People born without working CETP have very high HDL, lower LDL, and seem healthy.</li>
        <li>So a pill that blocks CETP should copy that profile and prevent heart attacks, on top of a statin.</li>
      </ul>
      <p>Mice gave some support: they naturally lack CETP, and mice engineered to make human CETP developed more atherosclerosis. Pfizer started its CETP program around 1990. Merck, Roche and, later, Eli Lilly followed. It was not a crazy bet. It was, by the standards of the time, one of the best-supported ideas in cardiology.</p>`},

    {type: 'figure', title: 'The chain of reasoning, link by link', intro: 'Every drug program rests on a chain of inferences. Hover or tap each box and arrow to see how strong each link really was in 2003.',
      svg: `<svg viewBox="0 0 900 400">
        <g data-part="obs"><rect x="30" y="30" width="250" height="130" rx="16" class="il-3s il-line"/><circle cx="62" cy="62" r="16" class="il-3"/><text x="62" y="67" text-anchor="middle" class="il-white">1</text><text x="88" y="67" class="il-title">Observation</text><text x="50" y="104" class="il-text-2">High HDL, fewer heart attacks</text><text x="50" y="126" class="il-text-2">(Framingham, 1977; many since)</text></g>
        <g data-part="gap"><path d="M284 95 H318" class="il-none st-7 il-dash" stroke-width="3" fill="none"/><path d="M314 86 L326 95 L314 104 Z" class="il-7"/><text x="302" y="80" text-anchor="middle" class="il-small">cause?</text></g>
        <g data-part="story"><rect x="328" y="30" width="250" height="130" rx="16" class="il-4s il-line"/><circle cx="360" cy="62" r="16" class="il-4"/><text x="360" y="67" text-anchor="middle" class="il-white">2</text><text x="386" y="67" class="il-title">Mechanism story</text><text x="348" y="104" class="il-text-2">HDL hauls cholesterol out of</text><text x="348" y="126" class="il-text-2">artery walls to the liver</text></g>
        <path d="M582 95 H616" class="il-none st-3" stroke-width="3" fill="none"/><path d="M612 86 L624 95 L612 104 Z" class="il-3"/>
        <g data-part="nature"><rect x="626" y="30" width="250" height="130" rx="16" class="il-3s il-line"/><circle cx="658" cy="62" r="16" class="il-3"/><text x="658" y="67" text-anchor="middle" class="il-white">3</text><text x="684" y="67" class="il-title">Nature's experiment</text><text x="646" y="104" class="il-text-2">Japanese families without CETP:</text><text x="646" y="126" class="il-text-2">HDL sky-high, seemed healthy</text></g>
        <path d="M751 164 V218" class="il-none st-3" stroke-width="3" fill="none"/><path d="M742 214 L751 226 L760 214 Z" class="il-3"/>
        <g data-part="drug"><rect x="626" y="230" width="250" height="130" rx="16" class="il-1s il-line"/><circle cx="658" cy="262" r="16" class="il-1"/><text x="658" y="267" text-anchor="middle" class="il-white">4</text><text x="684" y="267" class="il-title">The drug</text><text x="646" y="304" class="il-text-2">Torcetrapib blocks CETP</text><text x="646" y="326" class="il-text-2">in the blood</text></g>
        <path d="M622 295 H588" class="il-none st-3" stroke-width="3" fill="none"/><path d="M592 286 L580 295 L592 304 Z" class="il-3"/>
        <g data-part="surrogate"><rect x="328" y="230" width="250" height="130" rx="16" class="il-1s il-line"/><circle cx="360" cy="262" r="16" class="il-1"/><text x="360" y="267" text-anchor="middle" class="il-white">5</text><text x="386" y="267" class="il-title">The surrogate</text><text x="348" y="304" class="il-text-2">HDL up 60–70% on</text><text x="348" y="326" class="il-text-2">the blood test</text></g>
        <g data-part="leap"><path d="M324 295 H290" class="il-none st-7 il-dash" stroke-width="3" fill="none"/><path d="M294 286 L282 295 L294 304 Z" class="il-7"/><text x="306" y="280" text-anchor="middle" class="il-small">?</text></g>
        <g data-part="outcome"><rect x="30" y="230" width="250" height="130" rx="16" class="il-7s il-line"/><circle cx="62" cy="262" r="16" class="il-7"/><text x="62" y="267" text-anchor="middle" class="il-white">6</text><text x="88" y="267" class="il-title">The outcome</text><text x="50" y="304" class="il-text-2">Fewer heart attacks</text><text x="50" y="326" class="il-text-2">and deaths?</text></g>
        <text x="450" y="392" text-anchor="middle" class="il-small">solid arrow = well supported in 2003 · dashed red arrow = assumed, not tested</text>
      </svg>`,
      hotspots: {
        obs: {title: '1. The observation', text: 'Very consistent across studies: about 2–3% lower coronary risk per 1 mg/dL of HDL in pooled US data (Gordon 1989). But it is an association in people who weren\'t randomized.'},
        gap: {title: 'The weak link: association to cause', text: 'People with high HDL also tend to be leaner, less insulin-resistant, with lower triglycerides. A British study in 1986 found much of the link vanished after adjustment. Nobody could yet test whether HDL itself was doing the protecting.'},
        story: {title: '2. The mechanism story', text: '[[reverse cholesterol transport|Reverse cholesterol transport]] is real biology. But the HDL <em>cholesterol</em> number on a blood test measures how much cholesterol is sitting in HDL trucks, not how fast the trucks are clearing arteries. A traffic jam also raises the number of cars on the road.'},
        nature: {title: '3. Nature\'s experiment', text: 'Striking, but tiny: a handful of families. Worse, a 1996 study of 3,469 Japanese-American men in Honolulu found that carriers of CETP mutations had <em>more</em> coronary disease, despite higher HDL. Later studies conflicted. The genetic evidence was suggestive, not settled.'},
        drug: {title: '4. The drug hits its target', text: 'Strong: torcetrapib is a potent CETP inhibitor. The problem is that a molecule can do other things too, and those don\'t show up on the lipid panel.'},
        surrogate: {title: '5. The surrogate moves', text: 'Strong: HDL rose 61% at 120 mg daily in a small 2004 study, and by 72% in ILLUMINATE. This is the link everyone could see and the one that made the drug look like a winner.'},
        leap: {title: 'The leap: surrogate to outcome', text: 'The only way to test this link is a large outcomes trial, which takes years. Pfizer ran one (ILLUMINATE), but planned to file for approval on lipid and imaging data before it finished.'},
        outcome: {title: '6. The outcome', text: 'What patients care about. For LDL, dozens of trials had proven that moving the surrogate moves the outcome. For HDL, no trial ever had.'},
      },
      caption: 'Links 3 → 4 → 5 were solid. Links 1 → 2 and 5 → 6 carried the whole bet, and they were the ones nobody had tested.'},

    // ---------------- MECHANISM ----------------
    {type: 'mechanism', title: 'How torcetrapib works: the lipoprotein traffic', intro: 'Step through the cholesterol traffic in your blood, what CETP does, and what torcetrapib changes. Use the arrows or the dots.',
      svg: `<svg viewBox="0 0 760 440">
        <g data-part="blood"><rect x="175" y="62" width="430" height="290" rx="20" class="il-7s"/><text x="310" y="96" class="il-title" style="font-size:20px">Bloodstream</text></g>
        <g data-part="liver"><path d="M28 118 C16 170 22 292 70 324 C120 356 178 322 188 270 C198 210 190 142 152 114 C112 88 44 92 28 118 Z" class="il-8s il-line"/><text x="58" y="204" class="il-title" style="font-size:20px">Liver</text><text x="40" y="230" class="il-text-2" style="font-size:15px">makes and</text><text x="40" y="250" class="il-text-2" style="font-size:15px">clears trucks</text></g>
        <g data-part="wall"><rect x="600" y="62" width="145" height="290" rx="22" class="il-5s"/><text x="630" y="96" class="il-title" style="font-size:18px">Artery</text><text x="630" y="118" class="il-title" style="font-size:18px">wall</text></g>
        <g data-part="plaque"><path d="M602 178 C556 196 556 276 602 294 Z" class="il-4s il-line"/><circle cx="584" cy="220" r="5" class="il-4"/><circle cx="578" cy="244" r="5" class="il-4"/><circle cx="588" cy="266" r="5" class="il-4"/><text x="612" y="242" class="il-text-2" style="font-size:15px">plaque</text></g>
        <g data-part="deliver"><path d="M286 150 C390 120 500 150 552 206" class="il-none st-7 flow" stroke-width="3" fill="none"/></g>
        <g data-part="return"><path d="M570 318 C470 346 300 346 196 300" class="il-none st-3 flow" stroke-width="3" fill="none"/><text x="440" y="322" class="il-text-2" style="font-size:15px">back to the liver</text></g>
        <g data-part="ldl"><circle cx="250" cy="150" r="34" class="il-7"/><circle cx="228" cy="130" r="6" class="il-4"/><circle cx="272" cy="130" r="6" class="il-4"/><circle cx="228" cy="170" r="6" class="il-4"/><circle cx="272" cy="170" r="6" class="il-4"/><text x="250" y="156" text-anchor="middle" class="il-white" style="font-size:17px">LDL</text></g>
        <g data-part="hdl"><circle cx="540" cy="296" r="25" class="il-3"/><circle cx="558" cy="279" r="6" class="il-4"/><text x="540" y="302" text-anchor="middle" class="il-white" style="font-size:15px">HDL</text></g>
        <g data-part="cetp"><ellipse cx="395" cy="232" rx="48" ry="22" class="il-2"/><text x="395" y="238" text-anchor="middle" class="il-white" style="font-size:17px">CETP</text></g>
        <g data-part="swap"><path d="M444 250 C428 206 384 196 356 186" class="il-none st-4" stroke-width="3.5" fill="none"/><path d="M362 178 L350 185 L360 194 Z" class="il-4"/><path d="M344 208 C360 262 414 276 440 270" class="il-none il-line2" fill="none"/><path d="M434 262 L446 270 L435 278 Z" class="il-8"/><text x="420" y="196" class="il-text-2" style="font-size:15px">cholesterol → LDL</text><text x="220" y="292" class="il-text-2" style="font-size:15px">triglyceride → HDL</text></g>
        <g data-part="drug"><path d="M395 384 l16 9 v18 l-16 9 l-16 -9 v-18 Z" class="il-1"/><text x="372" y="408" text-anchor="end" class="il-text" style="font-size:17px">torcetrapib</text></g>
        <g data-part="block"><path d="M384 186 L408 210 M408 186 L384 210" class="il-none st-7" stroke-width="5" stroke-linecap="round" fill="none"/></g>
        <g data-part="readout"><rect x="246" y="362" width="350" height="64" rx="12" class="il-paper il-line"/><text x="262" y="386" class="il-text-2" style="font-size:15px">Blood test at 12 months (ILLUMINATE)</text><text x="262" y="412" class="il-title" style="font-size:20px">HDL ▲ 72%</text><text x="420" y="412" class="il-title" style="font-size:20px">LDL ▼ 25%</text></g>
        <g data-part="question"><text x="206" y="292" class="il-num" style="font-size:40px">?</text></g>
        <g data-part="adrenal"><path d="M34 424 L66 368 L98 424 Z" class="il-6s il-line"/><text x="104" y="384" class="il-text" style="font-size:16px">adrenal</text><text x="104" y="403" class="il-text-2" style="font-size:14px">aldosterone ▲</text><text x="104" y="421" class="il-text-2" style="font-size:14px">BP ▲</text></g>
        <g data-part="offarrow"><path d="M378 292 C300 330 160 340 72 364" class="il-none st-6 il-dash" stroke-width="2.5" fill="none"/></g>
      </svg>`,
      steps: [
        {title: 'Two-way traffic', text: 'Cholesterol can\'t dissolve in blood, so it travels in [[lipoprotein]] "trucks". LDL (red, loaded with yellow cholesterol) carries it out from the liver to the body. HDL (aqua) is the small garbage truck that collects surplus cholesterol.', show: ['blood', 'liver', 'wall', 'ldl', 'hdl']},
        {title: 'LDL delivers, sometimes to the wrong place', text: 'LDL drops cholesterol off at cells. When there is too much LDL, particles lodge in the artery wall and feed a growing [[plaque]]. This is the part statins fix: lower LDL, fewer particles get stuck, fewer heart attacks.', show: ['blood', 'liver', 'wall', 'plaque', 'ldl', 'hdl', 'deliver'], dim: ['hdl'], focus: ['ldl'], pulse: ['plaque'], move: {ldl: 'translate(250px, 40px)'}},
        {title: 'HDL collects and heads home', text: 'HDL picks up surplus cholesterol from tissues, including foam cells in the artery wall, and carries it toward the liver. This is [[reverse cholesterol transport]], the biology behind the name "good cholesterol".', show: ['blood', 'liver', 'wall', 'plaque', 'ldl', 'hdl', 'return'], dim: ['ldl'], focus: ['hdl'], move: {hdl: 'translate(-300px, -6px)'}},
        {title: 'CETP swaps the cargo', text: '[[CETP]], a protein floating in the blood, moves [[cholesteryl ester]] out of HDL and into LDL and VLDL, and takes [[triglycerides]] back the other way. The net effect: cholesterol that HDL collected ends up in LDL-type particles, and some of it heads back out.', show: ['blood', 'liver', 'wall', 'plaque', 'ldl', 'hdl', 'cetp', 'swap'], focus: ['cetp'], pulse: ['swap'], move: {ldl: 'translate(80px, 30px)', hdl: 'translate(-80px, -40px)'}},
        {title: 'Torcetrapib jams CETP', text: 'Torcetrapib is a [[small molecule]] that binds CETP and stops the swap. It copies, with a pill, what the Japanese families with broken CETP genes were born with.', show: ['blood', 'liver', 'wall', 'plaque', 'ldl', 'hdl', 'cetp', 'swap', 'drug', 'block'], dim: ['swap'], focus: ['drug'], move: {ldl: 'translate(80px, 30px)', hdl: 'translate(-80px, -40px)', drug: 'translate(0px, -128px)'}},
        {title: 'What the blood test sees', text: 'Cholesterol piles up in HDL, which swells. Less cholesterol reaches LDL, which shrinks. In ILLUMINATE, HDL cholesterol rose 72% and LDL cholesterol fell 25% at 12 months. By the lab report alone, it looked like the most powerful cholesterol drug yet.', show: ['blood', 'liver', 'wall', 'plaque', 'ldl', 'hdl', 'cetp', 'drug', 'block', 'readout'], dim: ['cetp', 'block'], focus: ['readout'], move: {ldl: 'translate(80px, 30px) scale(0.8)', hdl: 'translate(-80px, -40px) scale(1.5)', drug: 'translate(0px, -128px)'}},
        {title: 'Two things the lab report couldn\'t show', text: 'First, a bigger HDL <em>number</em> doesn\'t prove more cholesterol is being carried out of artery walls: blocking the swap could just mean cholesterol sits in HDL trucks longer. Second, the molecule also hit the [[adrenal gland|adrenal glands]], raising [[aldosterone]] and blood pressure. Neither shows up on a cholesterol test.', show: ['blood', 'liver', 'wall', 'plaque', 'ldl', 'hdl', 'cetp', 'drug', 'return', 'question', 'adrenal', 'offarrow', 'readout'], dim: ['cetp', 'readout'], focus: ['question'], pulse: ['adrenal'], move: {ldl: 'translate(80px, 30px) scale(0.8)', hdl: 'translate(-80px, -40px) scale(1.5)', drug: 'translate(0px, -128px)'}},
      ]},

    {type: 'callout', variant: 'misconception', heading: '"HDL is the good cholesterol"', html: `<p>HDL and LDL carry <em>the same cholesterol molecule</em>. "HDL cholesterol" on a lab report is simply the amount of cholesterol riding in HDL particles at one moment. It says nothing direct about how many particles there are, how well they work, or how fast they are clearing arteries.</p><p>That's why a drug can push the HDL number up by blocking the exit, like counting full garbage trucks stuck in traffic and calling it great sanitation. "Good" describes the truck's usual direction, not what a drug is doing to it.</p>`},

    // ---------------- CORRELATION VS CAUSATION ----------------
    {type: 'custom', title: 'Correlation vs causation: a population you control', kicker: 'Try it',
      intro: 'This is a simulated population of 400 people. Each has a hidden "metabolic health" score that raises their HDL and, separately, protects their heart. You decide how much of HDL\'s protective link is truly causal. Then run a randomized trial of a drug that raises HDL by 25 mg/dL and touches nothing else.',
      html: `<div class="card">
        <div class="explorer" style="border:0;padding:0;background:none">
          <label><span>How much of HDL\'s link is <b>causal</b>?</span><input type="range" min="0" max="100" step="10" value="0" id="ccC"><span class="out" id="ccCo"></span></label>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 10px">
          <button class="btn primary" id="ccRun">Run the randomized trial</button>
          <button class="btn" id="ccReset">Hide trial</button>
        </div>
        <div id="ccSvg"></div>
        <div id="ccTxt" style="font:400 16.5px/1.6 var(--serif);margin-top:8px"></div>
      </div>`,
      init: (root, api) => {
        let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
        const gauss = () => { let u = 0, v = 0; while (!u) u = rnd(); while (!v) v = rnd(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
        const people = [];
        for (let i = 0; i < 400; i++) { const H = gauss(); people.push({H, hdl: 50 + 12 * H + 3 * gauss(), drug: rnd() < 0.5}); }
        let trial = false;
        const risk = (p, c, extra) => { const z = (p.hdl + extra - 50) / 12; const L = -1.75 - 0.7 * ((1 - c) * p.H + c * z); return 1 / (1 + Math.exp(-L)); };
        const cIn = root.querySelector('#ccC'), cOut = root.querySelector('#ccCo'), box = root.querySelector('#ccSvg'), txt = root.querySelector('#ccTxt');
        function draw() {
          const c = +cIn.value / 100; cOut.textContent = cIn.value + '%';
          const sorted = people.slice().sort((a, b) => a.hdl - b.hdl);
          const q = [0, 1, 2, 3, 4].map(k => { const g = sorted.slice(k * 80, (k + 1) * 80); return {r: g.reduce((s, p) => s + risk(p, c, 0), 0) / g.length, lo: g[0].hdl, hi: g[g.length - 1].hdl}; });
          const plac = people.filter(p => !p.drug), dr = people.filter(p => p.drug);
          const rp = plac.reduce((s, p) => s + risk(p, c, 0), 0) / plac.length, rd = dr.reduce((s, p) => s + risk(p, c, 25), 0) / dr.length;
          const Y = v => 250 - v / 0.35 * 200;
          let s = '<svg viewBox="0 0 720 300" style="width:100%;height:auto;display:block">';
          s += '<text x="40" y="22" class="il-title">Observational study: risk by HDL fifth</text>';
          [0, 0.1, 0.2, 0.3].forEach(v => { s += '<line x1="40" x2="400" y1="' + Y(v) + '" y2="' + Y(v) + '" class="il-line" style="stroke:var(--grid)"/><text x="34" y="' + (Y(v) + 4) + '" text-anchor="end" class="il-small">' + Math.round(v * 100) + '%</text>'; });
          q.forEach((d, k) => { const x = 56 + k * 68; s += '<rect x="' + x + '" y="' + Y(d.r) + '" width="48" height="' + (250 - Y(d.r)) + '" rx="4" class="il-8" data-tip="HDL ' + Math.round(d.lo) + '–' + Math.round(d.hi) + ' mg/dL: risk ' + (d.r * 100).toFixed(1) + '%"/><text x="' + (x + 24) + '" y="' + (Y(d.r) - 6) + '" text-anchor="middle" class="il-small">' + (d.r * 100).toFixed(0) + '%</text><text x="' + (x + 24) + '" y="268" text-anchor="middle" class="il-small">' + ['lowest', '2nd', '3rd', '4th', 'highest'][k] + '</text>'; });
          s += '<text x="220" y="290" text-anchor="middle" class="il-small">HDL fifth (no drug)</text>';
          s += '<text x="470" y="22" class="il-title">Randomized trial</text>';
          if (trial) {
            [[rp, 'Placebo', 'il-2', 490], [rd, 'HDL drug', 'il-1', 590]].forEach(([v, n, cl, x]) => { s += '<rect x="' + x + '" y="' + Y(v) + '" width="64" height="' + (250 - Y(v)) + '" rx="4" class="' + cl + '"/><text x="' + (x + 32) + '" y="' + (Y(v) - 6) + '" text-anchor="middle" class="il-text">' + (v * 100).toFixed(1) + '%</text><text x="' + (x + 32) + '" y="268" text-anchor="middle" class="il-small">' + n + '</text>'; });
            s += '<text x="572" y="290" text-anchor="middle" class="il-small">drug arm HDL +25 mg/dL</text>';
          } else {
            s += '<rect x="470" y="60" width="230" height="190" rx="12" class="il-paper il-line" style="stroke-dasharray:5 4"/><text x="585" y="150" text-anchor="middle" class="il-text-2">Press "Run the randomized</text><text x="585" y="170" text-anchor="middle" class="il-text-2">trial" to see the outcome</text>';
          }
          s += '</svg>';
          box.innerHTML = s;
          const rel = (rd / rp - 1) * 100;
          txt.innerHTML = 'In the observational data, the lowest HDL fifth has <b>' + (q[0].r * 100).toFixed(0) + '%</b> risk and the highest has <b>' + (q[4].r * 100).toFixed(0) + '%</b>. Move the slider: that picture barely changes, because HDL and the hidden health score rise together.' +
            (trial ? ' In the trial, risk is <b>' + (rp * 100).toFixed(1) + '%</b> on placebo and <b>' + (rd * 100).toFixed(1) + '%</b> on the drug: a <b>' + (rel <= -0.5 ? Math.abs(rel).toFixed(0) + '% reduction' : 'no meaningful change') + '</b>. Only the randomized trial reveals how much of the link was causal.' : ' The observational chart alone cannot tell you where the slider is.');
        }
        cIn.addEventListener('input', draw);
        root.querySelector('#ccRun').onclick = () => { trial = true; draw(); };
        root.querySelector('#ccReset').onclick = () => { trial = false; draw(); };
        draw();
      }},

    {type: 'callout', variant: 'product', heading: 'The proxy metric trap', html: `<p>Every product team knows the pattern. Retention is slow to measure, so you optimize daily active users. Revenue is lagging, so you optimize sign-ups. It works as long as the proxy and the goal move together for the same reason. Then someone finds a way to move the proxy that doesn't move the goal: notifications that spike opens but drive uninstalls. That is [[Goodhart's law]], and HDL is its most expensive example. HDL tracked heart health in the wild; a drug that forced HDL up by jamming CETP broke the link.</p><p><b>Where the analogy breaks:</b> a product team can run an A/B test on the real goal in weeks and roll back a bad change overnight. In cardiology the "real goal" test needs 10,000 to 30,000 patients and years of follow-up, and harm can't be rolled back. You might be stuck with the proxy for a decade before you learn it lied.</p>`},

    // ---------------- BUILDING THE DRUG ----------------
    {type: 'story', kicker: 'Building the bet', title: 'An $800 million program, a factory, and a bundling fight', tocTitle: 'Building the bet', html: `
      <p>According to Pfizer's own timeline, its chemists found a promising CETP-blocking compound in 1993 and modified it in 1994 into a molecule code-named CP-529,414. They showed it worked in cells and animals in 1995 and kept improving it. Journalists at the time credited Pfizer researchers Mark Bamberger and Ron Clark with pushing the project forward. In 1999, the molecule, now called torcetrapib, was given to a person for the first time.</p>
      <p>Making it into a usable pill was its own project. Pfizer developed a new dosage-form technology with a partner, Bend Research, called spray-dried dispersion: the drug is dissolved with a polymer and sprayed into fine particles, a technique used to help poorly soluble drugs dissolve in the gut.</p>
      <p>The early human results were striking. In a 2004 study in the <em>New England Journal of Medicine</em>, Brousseau and colleagues gave torcetrapib to 19 people with low HDL. At 120 mg a day, HDL rose by 61%, or by 46% in those also taking atorvastatin. At 120 mg twice a day, it rose 106%. The paper noted that no existing therapy substantially raised HDL. The HDL and LDL particles also grew larger, a change whose meaning nobody fully understood.</p>
      <p>There was one wrinkle. On its own, torcetrapib didn't lower LDL much, and in some patients LDL even crept up. Since LDL was the proven target, Pfizer said, after talking with outside experts, that torcetrapib should be given together with atorvastatin. It planned to sell the two as a single [[fixed-dose combination]] pill.</p>
      <h3>Going big</h3>
      <p>In June 2005, Pfizer opened a $90 million plant expansion in Loughbeg, County Cork, Ireland, to make torcetrapib. It described the clinical program as "the largest and most comprehensive" it had ever undertaken: about 25,000 patients at hundreds of medical centers, at a cost of about $800 million. Phase 3 trials began in 2003, and enrollment for ILLUMINATE, the trial designed to count heart attacks and deaths, began in 2004. The head of manufacturing explained building the plant early: "Having the operation up and running before our regulatory filings should facilitate the review process."</p>
      <p>Pfizer's head of research, John LaMattina, was candid about the risk in the same press release:</p>
      <blockquote class="pull">Nothing is certain except our huge investment. Even if this fails as a new medicine, we will have advanced scientific understanding in this area.<cite>John L. LaMattina, president of Pfizer Global Research and Development, June 2005</cite></blockquote>
      <h3>The bundling fight</h3>
      <p>The combination-only plan drew fire. If torcetrapib came only inside a Lipitor pill, a patient on another statin, such as Merck's Zocor, would have to switch to Lipitor to get it. Some patients can't switch easily, and some can't take statins at all. In June 2005, Harvard's Jerry Avorn wrote a commentary in the <em>New England Journal of Medicine</em> titled "Torcetrapib and atorvastatin: should marketing drive the research agenda?" Lawyers raised antitrust questions. LaMattina defended the plan, arguing that testing torcetrapib with every statin would be prohibitively expensive.</p>
      <p>Then the market moved. Zocor went generic in June 2006, and Lipitor started losing share to it. In July 2006, Pfizer reversed course: it would apply to sell torcetrapib as a stand-alone pill too. Its chief medical officer, Joseph Feczko, told the <em>New York Times</em>, "We didn't appreciate how this would be perceived." Pfizer planned to file the combination with the FDA in the second half of 2007, based largely on trials that measured cholesterol and plaque, not heart attacks and deaths. ILLUMINATE itself wasn't scheduled to finish until 2009.</p>`},

    {type: 'callout', variant: 'product', heading: 'Bundling a new feature to protect the old product', html: `<p>This is a classic platform move: ship your hot new feature only inside your flagship tier, so customers who want it can't churn to a cheaper competitor. Enterprise software does it constantly. Pfizer tried to use torcetrapib to lock patients onto Lipitor ahead of the patent cliff.</p><p><b>Where the analogy breaks:</b> in medicine, the buyer isn't the chooser. Doctors act for patients under ethical duties, and forcing a statin switch for commercial reasons struck many as wrong. Regulators also want evidence for each part of a combination, and antitrust law treats tying differently when the customer is sick. The backlash forced a reversal before the product even existed. Bundling also tied the franchise to the new drug: if torcetrapib had turned out mildly harmful after approval, it could have damaged confidence in Lipitor itself.</p>`},

    {type: 'decision', title: 'How do you prove it works?', role: 'You are Pfizer\'s head of R&D, 2003',
      scenario: `Torcetrapib raises HDL 50–100% in small studies. Lipitor, a quarter of company revenue, loses exclusivity around 2010. You can prove the drug works in two ways. <b>Imaging trials</b> measure plaque in about 900–1,200 patients over two years with ultrasound: faster and cheaper, and the FDA has accepted lipid changes before. A <b>hard-outcomes trial</b> counting heart attacks and deaths needs about 15,000 patients and would probably not finish before 2009 or later. What's your plan?`,
      options: [
        {label: `File on HDL and imaging data, run the outcomes trial after approval`, outcome: `This gets you to market around 2008, just in time for the cliff. The FDA has approved lipid drugs on their lipid effect before, and imaging is a real measure of disease. But you would be selling a drug to millions on the strength of an untested surrogate. If the outcomes trial later showed harm, you would have exposed far more people than any trial, and the Lipitor franchise would share the blame.`},
        {label: `Run imaging and outcomes trials in parallel; plan to file on imaging, keep the outcomes trial running`, outcome: `This hedges: imaging data could support an early filing while the outcomes trial keeps going. It costs a lot (about $800 million), but the outcomes trial acts as a safety net, as long as it has an independent monitoring board with the power to stop it. The risk is that you commit a factory, a sales plan and your reputation before the one experiment that matters has reported.`},
        {label: `Wait for the outcomes trial before any filing`, outcome: `Scientifically the cleanest: the only question that matters is answered before anyone outside a trial takes the pill. But filing in 2009 or later means the successor misses the Lipitor cliff by years. Investors would punish you, and a competitor (Merck and Roche had their own CETP drugs) could get there first with imaging data alone.`},
      ],
      reality: `Pfizer chose the parallel route. It launched ILLUMINATE (15,067 patients) alongside imaging trials (ILLUSTRATE, RADIANCE 1 and RADIANCE 2), built a factory, and planned to file in 2007 on lipid and imaging data. The outcomes trial, watched by an independent data safety monitoring board, found the harm before approval. Had Pfizer filed on HDL alone and skipped ILLUMINATE, the excess deaths would have appeared in patients who were not in a trial.`},

    // ---------------- TIMELINE ----------------
    {type: 'timeline', title: 'Timeline: from Framingham to the CETP revival', events: [
      {year: 1948, title: 'Framingham Heart Study begins', kind: 'science', text: 'A town outside Boston becomes the world\'s most famous heart-disease cohort.'},
      {year: 1977, title: 'HDL called "a protective factor"', kind: 'science', text: 'Gordon, Castelli and colleagues report that Framingham residents with high HDL have fewer coronary events.'},
      {year: 1985, title: 'A man with HDL of 301 mg/dL', kind: 'science', text: 'Koizumi, Mabuchi and colleagues in Kanazawa, Japan, describe siblings with sky-high HDL and no CETP activity.'},
      {year: 1989, title: 'The CETP gene defect is found', kind: 'science', text: 'Brown, Inazu, Tall and colleagues (Columbia and Kanazawa) show two Japanese siblings with the condition carry a splicing mutation in the CETP gene. Gordon\'s pooled analysis finds about 2–3% lower risk per 1 mg/dL of HDL.'},
      {year: 1990, title: 'CETP deficiency common in Japan; Pfizer program starts', kind: 'science', text: 'Inazu et al. (NEJM) find the mutation in several families and no sign of early atherosclerosis. Pfizer begins its CETP program around this time.'},
      {year: 1994, title: '4S proves statins save lives', kind: 'clinical', text: 'Simvastatin cuts deaths by 30% in 4,444 heart patients. LDL becomes a validated surrogate.'},
      {year: 1996.45, date: 'Jun 1996', title: 'A warning from Honolulu', kind: 'setback', text: 'Zhong, Tall and colleagues find more coronary disease in Japanese-American men carrying CETP mutations, despite higher HDL.'},
      {year: 1996.96, date: 'Dec 17, 1996', title: 'Lipitor approved', kind: 'regulatory', text: 'Warner-Lambert\'s atorvastatin wins FDA approval.'},
      {year: 1999, title: 'Torcetrapib first given to a person', kind: 'clinical'},
      {year: 2000, title: 'Pfizer takes over Warner-Lambert', kind: 'business', text: 'The hostile takeover gives Pfizer full rights to Lipitor.'},
      {year: 2003, title: 'Phase 3 program begins', kind: 'clinical', text: 'Pfizer puts the program\'s cost at about $800 million across about 25,000 patients.'},
      {year: 2004.3, date: 'Apr 2004', title: 'HDL +61% in NEJM', kind: 'clinical', text: 'Brousseau et al. report large HDL rises in 19 people. ILLUMINATE enrollment begins this year.'},
      {year: 2005.45, date: 'Jun 2005', title: '$90M plant opens in Ireland; combination plan criticized', kind: 'business', text: 'The Loughbeg plant starts production. Avorn\'s NEJM commentary asks whether marketing is driving the research agenda.'},
      {year: 2006.55, date: 'Jul 2006', title: 'Pfizer drops "combination only"', kind: 'business', text: 'Torcetrapib will also be sold as a stand-alone pill.'},
      {year: 2006.91, date: 'Nov 30, 2006', title: '"One of the most important compounds of our generation"', kind: 'people', text: 'Jeff Kindler at Pfizer\'s research day in Groton.'},
      {year: 2006.92, date: 'Dec 2, 2006', title: 'ILLUMINATE stopped', kind: 'setback', text: 'The monitoring board finds 82 deaths vs 51. Pfizer ends all torcetrapib development that evening.'},
      {year: 2006.93, date: 'Dec 4, 2006', title: 'About $21 billion in market value lost', kind: 'business', text: 'Shares fall about 11% on the first trading day.'},
      {year: 2007.2, date: 'Mar 2007', title: 'Imaging trials show no plaque benefit', kind: 'clinical', text: 'ILLUSTRATE and RADIANCE 1 are published; RADIANCE 2 follows in July.'},
      {year: 2007.85, date: 'Nov 2007', title: 'ILLUMINATE published: 93 vs 59 deaths', kind: 'clinical', text: 'Blood pressure, aldosterone and electrolyte changes point to off-target effects.'},
      {year: 2009, title: 'Pfizer scientists pin down the adrenal effect', kind: 'science', text: 'Hu et al. show torcetrapib triggers aldosterone and cortisol release in adrenal cells, independently of CETP.'},
      {year: 2011, date: 'Nov 30, 2011', title: 'Lipitor goes generic in the US', kind: 'business'},
      {year: 2012, title: 'Dalcetrapib fails; genetics says HDL isn\'t causal', kind: 'setback', text: 'Roche\'s dal-OUTCOMES is stopped for futility. A Lancet Mendelian randomization study finds HDL-raising gene variants don\'t lower heart-attack risk.'},
      {year: 2015, date: 'Oct 2015', title: 'Lilly stops evacetrapib', kind: 'setback', text: 'HDL up 133%, no benefit.'},
      {year: 2017, date: 'Oct 11, 2017', title: 'Merck won\'t file anacetrapib', kind: 'regulatory', text: 'Despite a modest benefit in the 30,449-patient REVEAL trial.'},
      {year: 2025, date: 'May 2025', title: 'Obicetrapib cuts LDL by about 30%', kind: 'clinical', text: 'The BROADWAY trial (NEJM) repositions CETP inhibition as an LDL-lowering strategy.'},
      {year: 2026, date: 'Jul 2026', title: 'EMA committee backs obicetrapib', kind: 'regulatory', text: 'The CHMP recommends approval of Ubeslo (obicetrapib) for high cholesterol, based on LDL lowering.'},
    ]},

    // ---------------- WARNING SIGNS ----------------
    {type: 'story', kicker: 'Hindsight, used fairly', title: 'The warning signs', html: `
      <p>It's easy to read a failure backward and see only red flags. In real time, the evidence was mixed, and smart people read it differently. Here is what was on the table before December 2006.</p>
      <p><strong>Blood pressure.</strong> Torcetrapib raised blood pressure in some patients, a serious side effect for a heart drug, since high blood pressure causes heart attacks and strokes. Cardiologists raised this publicly. Pfizer argued that the drug's effect on HDL would far outweigh a rise of a few [[mmHg]]. That was a reasonable bet if the HDL hypothesis was right. It was a terrible one if it wasn't.</p>
      <p><strong>A conflicting genetic study.</strong> In 1996, Alan Tall's lab, one of the groups behind the CETP story, published a study of 3,469 Japanese-American men in the Honolulu Heart Program. Men carrying CETP mutations had <em>more</em> coronary heart disease (21% vs 16%), even though their HDL was higher. After adjusting for HDL, their risk was 68% higher. Later analyses of the same population found the opposite trend, not statistically significant. Yuji Matsuzawa's group in Osaka suggested that the HDL built up in CETP deficiency might be defective. Nature's experiment, in other words, did not speak with one voice.</p>
      <p><strong>Tiny numbers.</strong> The families that inspired the drug numbered in the dozens of people. Nobody had followed thousands of CETP-deficient people for decades to count their heart attacks.</p>
      <p><strong>Strange particles.</strong> CETP inhibition made HDL particles unusually large and full of cholesterol. Whether these particles did the "garbage truck" job as well as normal HDL was unknown.</p>
      <p><strong>No proof that raising HDL helps.</strong> For LDL, dozens of trials showed that lowering it by any safe means cut heart attacks. For HDL, not a single trial had yet shown that raising it improved outcomes. The surrogate had never been validated.</p>
      <p>None of these, alone, proved the drug would fail. Together, they meant the drug was a large bet on an untested link. The problem was less that people ignored the signals than that the organization had arranged itself (a factory, a filing date, a CEO's promise to investors) as if the bet had already paid off.</p>`},

    {type: 'custom', title: 'Spot the warning sign', kicker: 'Practice judgment',
      intro: 'You are on Pfizer\'s portfolio review board in 2005. For each piece of evidence, decide: was it a real warning sign, or reassuring? Then compare with what hindsight says.',
      html: `<div id="wsList"></div><div id="wsScore" style="font:650 17px var(--sans);margin-top:12px"></div>`,
      init: (root, api) => {
        const items = [
          {t: 'Torcetrapib raised systolic blood pressure by several mmHg in some patients.', a: 1, e: 'Red flag. Blood pressure is a proven cause of heart attacks and strokes. ILLUMINATE later showed +5.4 mmHg on average, along with hormone changes that suggested something beyond the intended target.'},
          {t: 'HDL rose 61% in a small 2004 study.', a: 0, e: 'Neither, really: this is the surrogate doing what the drug was designed to do. It feels like reassurance, which is exactly the trap. It says nothing about outcomes.'},
          {t: 'A 1996 Honolulu study found more heart disease in men carrying CETP mutations, despite higher HDL.', a: 1, e: 'Red flag, though a contested one. It came from the same lab that discovered the CETP families. Later analyses conflicted, but it showed that CETP deficiency and heart protection were not cleanly linked.'},
          {t: 'Homozygous CETP-deficient Japanese families showed no sign of early atherosclerosis.', a: 0, e: 'Reassuring, but weak: dozens of people, not thousands followed for decades. Absence of evidence of harm is not evidence of benefit.'},
          {t: 'Torcetrapib alone barely lowered LDL; in some patients LDL rose.', a: 1, e: 'A quiet red flag. LDL is the proven driver of heart disease. A drug whose benefit rests entirely on HDL, with no LDL help, is a pure test of the unproven half of the story.'},
          {t: 'Mice engineered to make human CETP develop more atherosclerosis.', a: 0, e: 'Reassuring for the mechanism, but mice are poor models of human heart disease; they don\'t naturally have CETP at all.'},
          {t: 'No trial had ever shown that raising HDL, by any means, reduces heart attacks.', a: 1, e: 'The biggest red flag, and the easiest to overlook because it is an absence. The surrogate had never been validated.'},
          {t: 'Pfizer had built a $90 million plant and planned to file in 2007 before the outcomes trial finished.', a: 1, e: 'An organizational red flag. Sunk costs and public commitments make it harder to read ambiguous data neutrally. Not a scientific signal, but a judgment risk.'},
        ];
        const list = root.querySelector('#wsList'), score = root.querySelector('#wsScore');
        let done = 0, right = 0;
        items.forEach((it, i) => {
          const card = document.createElement('div'); card.className = 'card'; card.style.margin = '0 0 10px'; card.style.padding = '14px 16px';
          card.innerHTML = '<div style="font:500 16px/1.5 var(--sans);margin-bottom:8px">' + (i + 1) + '. ' + api.esc(it.t) + '</div><div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-v="1">Red flag</button><button class="btn" data-v="0">Reassuring / not a warning</button></div><div class="ex hidden" style="margin-top:8px;font:400 15.5px/1.55 var(--serif)"></div>';
          card.addEventListener('click', e => {
            const b = e.target.closest('button'); if (!b || card.dataset.done) return;
            card.dataset.done = 1; done++; const ok = +b.dataset.v === it.a; if (ok) right++;
            card.querySelectorAll('button').forEach(x => { x.disabled = true; if (+x.dataset.v === it.a) x.style.outline = '2px solid var(--win)'; });
            const ex = card.querySelector('.ex'); ex.classList.remove('hidden');
            ex.innerHTML = '<b style="color:' + (ok ? 'var(--good)' : 'var(--bad)') + '">' + (ok ? 'Agreed. ' : 'Hindsight disagrees. ') + '</b>' + it.e;
            if (done === items.length) score.textContent = 'You matched hindsight on ' + right + ' of ' + items.length + '. Notice that several red flags were absences or organizational, not lab results.';
          });
          list.appendChild(card);
        });
      }},

    // ---------------- ILLUMINATE ----------------
    {type: 'story', kicker: 'The moment of failure', title: 'ILLUMINATE: the trial built to settle it', tocTitle: 'ILLUMINATE', html: `
      <p>ILLUMINATE (Investigation of Lipid Level Management to Understand its Impact in Atherosclerotic Events) enrolled 15,067 people at high risk of heart attack: people who already had coronary heart disease or conditions carrying similar risk. Their average age was 61, and 78% were men. Everyone took atorvastatin. Half were randomly assigned to also take 60 mg of torcetrapib a day. The trial was [[double-blind]]: neither patients nor their doctors knew who was getting what.</p>
      <p>The [[primary endpoint]] was the time to a first major cardiovascular event: death from coronary heart disease, a nonfatal heart attack, a stroke, or hospitalization for [[unstable angina]]. This kind of [[composite endpoint]] lets a trial collect enough events to reach a verdict sooner.</p>
      <p>This design is what made ILLUMINATE both expensive and valuable. It tested the question patients care about, in the people who would actually take the drug, against the best existing treatment. It was also the only one of Pfizer's trials that could detect harm the lipid panel couldn't see.</p>
      <p>While a trial runs, the company is blind to the results. Only an independent [[data monitoring committee]] sees the unblinded data, at pre-planned [[interim analysis|interim analyses]]. Its job is to protect patients: stop the trial early if the drug is clearly working, clearly hopeless, or clearly harmful. For ILLUMINATE, that board met in late 2006, about 18 months into the average patient's follow-up.</p>
      <p>Before you see what it found, make two predictions. First, the blood test.</p>`},

    {type: 'custom', title: 'Predict the blood test first', kicker: 'Predict',
      intro: 'At 12 months, how much did HDL and LDL cholesterol change in patients taking torcetrapib plus atorvastatin, compared with their levels at the start? Set your guesses, then reveal.',
      html: `<div class="explorer">
        <label><span>HDL change</span><input type="range" min="-20" max="150" step="1" value="20" id="lpH"><span class="out" id="lpHo"></span></label>
        <label><span>LDL change</span><input type="range" min="-60" max="30" step="1" value="0" id="lpL"><span class="out" id="lpLo"></span></label>
        <div style="margin-top:10px"><button class="btn primary" id="lpGo">Reveal the blood test</button></div>
        <div class="result" id="lpOut"></div></div>`,
      init: (root) => {
        const h = root.querySelector('#lpH'), l = root.querySelector('#lpL'), ho = root.querySelector('#lpHo'), lo = root.querySelector('#lpLo'), out = root.querySelector('#lpOut');
        const f = v => (v > 0 ? '+' : '') + v + '%';
        const upd = () => { ho.textContent = f(+h.value); lo.textContent = f(+l.value); };
        h.oninput = upd; l.oninput = upd; upd();
        root.querySelector('#lpGo').onclick = () => {
          const dh = Math.abs(+h.value - 72.1), dl = Math.abs(+l.value + 24.9);
          out.innerHTML = 'Actual: <b>HDL +72.1%</b> and <b>LDL −24.9%</b> (on top of atorvastatin). You were off by ' + dh.toFixed(0) + ' and ' + dl.toFixed(0) + ' points. ' +
            (dh < 20 ? 'You expected a big HDL effect, like the cardiologists who were rooting for this drug. ' : 'Most people underestimate it: no approved drug came close to this HDL effect. ') +
            'By any lipid standard, this was a spectacular result. Now predict the deaths below.';
        };
      }},

    {type: 'trial', title: 'The ILLUMINATE results', intro: 'The trial design is below. Answer the question to see what the monitoring board found.',
      design: {name: 'ILLUMINATE', phase: 'Phase 3', blinding: 'Double-blind', years: '2004–2006 (stopped early)', n: 15067,
        population: 'High-risk heart patients, all on atorvastatin',
        randomization: '1:1',
        arms: [{name: 'Torcetrapib + atorvastatin', n: 7533, desc: 'Plus 60 mg a day'}, {name: 'Atorvastatin alone', n: 7534, desc: 'Standard of care', control: true}],
        endpoint: 'First major heart event',
        details: {
          'Primary endpoint': 'Death from coronary heart disease, nonfatal heart attack, stroke, or hospitalization for [[unstable angina]] (a [[composite endpoint]])',
          'Follow-up': 'Median about 550 days when stopped',
          'Stopped': 'December 2, 2006, on the recommendation of the independent [[data monitoring committee]], because of an imbalance of deaths and cardiovascular events',
          'Registry': 'ClinicalTrials.gov NCT00134264',
        }},
      predict: {q: 'HDL rose 72% and LDL fell 25% on top of Lipitor. What happened to deaths from any cause?',
        options: ['Deaths fell by about a quarter, roughly what the lipid changes predicted', 'No meaningful difference: the drug was neutral', 'More people died on torcetrapib: about 58% higher risk of death', 'The trial ran to completion in 2009 and showed a small benefit'],
        answer: 2,
        explain: `The monitoring board saw 82 deaths on torcetrapib versus 51 on atorvastatin alone when it stopped the trial. The final published count was 93 versus 59 (hazard ratio 1.58, 95% confidence interval 1.14–2.19). Major cardiovascular events were also 25% more frequent (464 vs 373). The drug moved every lipid number the right way and made patients worse.`},
      results: [
        {kind: 'bar', title: 'Cholesterol changes at 12 months (torcetrapib arm, vs baseline)', subtitle: 'Percent change; LDL shown as the size of the fall', unit: '%', categories: ['HDL rise', 'LDL fall'], series: [{name: 'Change', values: [72.1, 24.9], notes: ['+72.1% (P<0.001)', '−24.9% (P<0.001)']}], colorByCategory: true, yMax: 80},
        {kind: 'bar', title: 'Deaths from any cause', subtitle: 'Final published counts. Hazard ratio 1.58 (95% CI 1.14–2.19), P=0.006', unit: '', categories: ['Torcetrapib + atorvastatin', 'Atorvastatin alone'], series: [{name: 'Deaths', values: [93, 59], notes: ['82 at the time the trial was stopped', '51 at the time the trial was stopped']}], colorByCategory: true, yMax: 100},
        {kind: 'bar', title: 'Major cardiovascular events (primary endpoint)', subtitle: 'Hazard ratio 1.25 (95% CI 1.09–1.44), P=0.001', unit: '', categories: ['Torcetrapib + atorvastatin', 'Atorvastatin alone'], series: [{name: 'Events', values: [464, 373]}], colorByCategory: true, yMax: 500, note: 'Sources: Barter et al., NEJM 2007 (hazard ratios, lipid changes); event and death counts as reported in the published trial and summarized by Mabuchi et al., Mol Cells 2014. Interim counts (82 vs 51) from contemporaneous reporting.'},
      ],
      takeaway: 'A perfect surrogate result, a harmful clinical result. Systolic blood pressure rose 5.4 mmHg, potassium fell, and sodium, bicarbonate and aldosterone rose: signs that the molecule was doing something beyond blocking CETP. The authors concluded torcetrapib increased death and illness "of unknown mechanism" and could not rule out harm from CETP inhibition itself.'},

    {type: 'decision', title: 'Saturday, December 2, 2006', role: 'You are Pfizer\'s leadership team',
      scenario: `The independent monitoring board has told you ILLUMINATE shows 82 deaths on torcetrapib versus 51 on atorvastatin alone, and recommends stopping that trial. You have other torcetrapib trials running, including imaging studies due to report in a few months, and a filing planned for 2007. Blood pressure rises are already known; it's possible the excess deaths are a blood-pressure problem that a different dose or patient selection could manage. Markets open Monday. What do you do?`,
      options: [
        {label: `Stop ILLUMINATE and every other torcetrapib trial, end development, tell the FDA and announce tonight`, outcome: `Maximum safety and transparency, at maximum cost: you abandon a drug you've spent 16 years and hundreds of millions on, based on an interim look, and the market will punish you on Monday. You also give up the chance to learn from the imaging trials under controlled conditions. But no patient keeps taking a pill with an unexplained excess of deaths, and your credibility with regulators and doctors stays intact.`},
        {label: `Stop ILLUMINATE but let the imaging trials finish so you can learn why`, outcome: `Scientifically tempting: those trials are nearly done, and their plaque data could show whether the problem is the molecule or the mechanism. But you would be asking patients to keep taking a drug linked to excess deaths so that you can learn something. Ethics boards and the FDA would likely object, and if more patients died, the damage to trust would be severe.`},
        {label: `Ask the board for a few weeks of deeper analysis before deciding`, outcome: `It sounds prudent: interim data can mislead, and 31 extra deaths in 15,000 patients could be partly chance. But the board has already judged the imbalance unlikely to be chance, and every week of delay means thousands of patients keep taking the drug. Delay also invites leaks and looks like a company protecting its stock price.`},
      ],
      reality: `Pfizer told the FDA at about 4 p.m. and about five hours later announced it was stopping all torcetrapib trials and ending development, asking investigators to tell patients to stop the study medication immediately. Its 2006 annual report said the decision was made "in the interests of public safety." The two-year imaging trials were largely complete; their results were published in 2007. The speed of the decision is still often cited as the right way to handle a safety signal.`},

    {type: 'callout', variant: 'product', heading: 'The monitoring board as a circuit breaker', html: `<p>An independent data monitoring board works like an automated circuit breaker in a production system: a pre-agreed rule, run by someone other than the team shipping the change, that trips when error rates cross a threshold. The team can't override it and doesn't even see the dashboard. That separation is the point. Kindler was praising torcetrapib two days before the board tripped.</p><p><b>Where the analogy breaks:</b> a circuit breaker trips after milliseconds of errors, and the errors are failed requests. Here the "errors" were deaths, the breaker could only check at planned intervals months apart, and the "canary" users were 7,533 patients who had agreed to take the risk. There is no rollback, only stopping.</p>`},

    // ---------------- FALLOUT & IMAGING ----------------
    {type: 'story', kicker: 'The aftermath', title: 'Monday, and the imaging trials', html: `
      <p>On Monday, December 4, Pfizer's shares fell about 11%, wiping out more than $21 billion in market value. Several major brokers cut their ratings. Analysts noted who gained: AstraZeneca, whose statin Crestor had been expected to face torcetrapib as its biggest future competitor. Pfizer said it would speed up its restructuring. On December 19, Moody's downgraded Pfizer's long-term debt from its top rating, saying the balance between Pfizer's expiring patents and its pipeline was no longer consistent with a triple-A.</p>
      <p>Steven Nissen of the Cleveland Clinic, then president of the American College of Cardiology and the lead investigator of one of the imaging trials, framed the question that would occupy the field for the next decade. Speaking to NPR that Monday, he said: "Either something else was causing harm or the cholesterol, the HDL levels that we were building up weren't protecting the patients."</p>
      <p>The imaging trials, the ones Pfizer had planned to file on, were published from March 2007 onward. They were two-year studies that were largely complete by the time of the stop, so they gave a clean look at what torcetrapib did to plaque. The answer: nothing useful.</p>
      <ul>
        <li><strong>ILLUSTRATE</strong> (Nissen) used [[intravascular ultrasound]] in 1,188 patients with coronary disease. After 24 months, HDL was about 61% higher and LDL 20% lower than with atorvastatin alone, but plaque volume grew about the same in both groups. Blood pressure rose 4.6 mmHg.</li>
        <li><strong>RADIANCE 1</strong> measured [[carotid intima-media thickness]] in 850 patients with [[familial hypercholesterolemia]]. HDL averaged 81.5 vs 52.4 mg/dL, yet neck-artery thickening was no slower, and one segment progressed <em>faster</em> on torcetrapib.</li>
        <li><strong>RADIANCE 2</strong> found the same in 752 patients with mixed high cholesterol and triglycerides: no benefit on artery thickness, and a 5.4 mmHg rise in systolic pressure.</li>
      </ul>
      <p>Pause on that. If Pfizer had filed on imaging, as planned, the imaging would have said no. The imaging endpoint worked as an early check. But imaging can't see everything. The deaths in ILLUMINATE weren't only about plaque.</p>
      <p>The full ILLUMINATE paper appeared in the <em>New England Journal of Medicine</em> in November 2007, led by Philip Barter of the Heart Research Institute in Sydney. Its co-authors included Alan Tall, whose lab had discovered the CETP families. It confirmed 93 deaths versus 59 and a 25% increase in major cardiovascular events. It also documented a pattern that pointed somewhere unexpected: lower potassium, higher sodium and bicarbonate, and higher [[aldosterone]], a hormone from the adrenal glands.</p>`},

    {type: 'table', title: 'The imaging trials: HDL soared, plaque didn\'t budge', intro: 'All three compared torcetrapib 60 mg plus atorvastatin with atorvastatin alone, for about two years.',
      columns: ['Trial', 'Patients', 'What it measured', 'Lipid effect of torcetrapib', 'Plaque result', 'Blood pressure'],
      rows: [
        ['ILLUSTRATE (NEJM, Mar 2007)', '1,188 with coronary disease (910 with both scans)', 'Plaque volume in heart arteries by [[intravascular ultrasound]]', 'HDL about +61%, LDL about −20% vs atorvastatin alone', 'No significant slowing of plaque growth', '+4.6 mmHg systolic'],
        ['RADIANCE 1 (NEJM, Apr 2007)', '850 with [[familial hypercholesterolemia]]', '[[carotid intima-media thickness]]', 'HDL 81.5 vs 52.4 mg/dL; LDL 115 vs 143 mg/dL at 24 months', 'No difference overall (P=0.87); common carotid segment progressed faster (P=0.005)', '+2.8 mmHg systolic'],
        ['RADIANCE 2 (Lancet, Jul 2007)', '752 with mixed dyslipidemia', '[[carotid intima-media thickness]]', 'HDL +63.4%, LDL −17.7% vs control', 'No difference (P=0.46)', '+5.4 mmHg systolic difference'],
      ],
      caption: 'Sources: Nissen et al., NEJM 2007; Kastelein et al., NEJM 2007; Bots et al., Lancet 2007.'},

    {type: 'callout', variant: 'numbers', heading: 'ILLUMINATE by the numbers', html: `<ul>
      <li><b>15,067</b> patients, about the population of a small town, randomized 1:1.</li>
      <li><b>+72.1%</b> HDL and <b>−24.9%</b> LDL at 12 months on torcetrapib.</li>
      <li><b>93 vs 59</b> deaths: a 58% higher risk of death (hazard ratio 1.58).</li>
      <li><b>464 vs 373</b> major cardiovascular events: 25% higher risk.</li>
      <li><b>+5.4 mmHg</b> systolic blood pressure.</li>
      <li><b>About 16 years</b> from the start of Pfizer's CETP program (around 1990) to the stop.</li>
    </ul>`},

    // ---------------- POST-MORTEM 1 ----------------
    {type: 'story', kicker: 'The post-mortem, part 1', title: 'A bug in the molecule', tocTitle: 'Post-mortem: the molecule', html: `
      <p>The first explanation was that torcetrapib the molecule, not CETP inhibition the idea, was the problem. Every drug binds its intended target and, to some degree, other things. When the other things matter, that's an [[off-target effect]].</p>
      <p>The clues were in the blood chemistry. [[aldosterone|Aldosterone]] is a hormone made by the [[adrenal gland|adrenal glands]], small glands on top of the kidneys. It tells the kidneys to hold on to sodium, and water with it, and to let potassium go. Too much aldosterone raises blood pressure and can cause heart rhythm problems when potassium drops. ILLUMINATE showed exactly that fingerprint: higher sodium, bicarbonate and aldosterone, lower potassium, higher blood pressure. In a [[post hoc analysis]], patients on torcetrapib whose potassium fell or bicarbonate rose more than the median had a higher risk of death.</p>
      <p>In 2009, Pfizer scientists led by Xiao Hu published the mechanism in <em>Endocrinology</em>. In human adrenal cells grown in the lab, torcetrapib switched on the genes for the final steps of aldosterone and [[cortisol]] production, by raising calcium inside the cells. Calcium-channel blockers stopped the effect. Crucially, related molecules that did not block CETP had the same adrenal effect. The authors concluded that the blood-pressure and adrenal effects were "independent of CETP inhibition." It was a bug in the implementation, not the spec.</p>
      <p>A re-analysis of ILLUSTRATE, published by Stephen Nicholls and colleagues in 2008, offered a sliver of hope for the idea. Among patients on torcetrapib, those with the largest HDL rises showed the least plaque progression, and the top quarter showed some regression. The authors suggested other CETP inhibitors, if they lacked the off-target toxicity, might succeed.</p>
      <p>But that re-analysis had the weakness of every within-arm comparison: the patients whose HDL rose most might differ in other ways. And the off-target story, while real, left an uncomfortable gap. A 5 mmHg rise in blood pressure is bad, but it's hard to see how it alone could produce 58% more deaths in 18 months. Some reviewers have argued that the excess deaths may have had more to do with infection or cancer than with heart disease. The ILLUMINATE authors themselves wrote that they could not rule out harm from blocking CETP. The only way to find out was to test other CETP inhibitors that didn't touch the adrenal glands.</p>`},

    {type: 'figure', title: 'One molecule, two effects', intro: 'Torcetrapib hit its intended target and something it was never meant to touch. Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 380">
        <g data-part="drug"><path d="M92 158 l30 17 v34 l-30 17 l-30 -17 v-34 Z" class="il-1"/><text x="92" y="250" text-anchor="middle" class="il-title">torcetrapib</text></g>
        <path d="M126 170 C170 120 200 100 226 96" class="il-none st-1" stroke-width="3" fill="none"/>
        <path d="M126 214 C170 264 200 284 226 288" class="il-none st-6 il-dash" stroke-width="3" fill="none"/>
        <text x="176" y="152" class="il-small">intended</text><text x="176" y="242" class="il-small">off-target</text>
        <g data-part="cetp"><ellipse cx="280" cy="96" rx="52" ry="24" class="il-2"/><text x="280" y="101" text-anchor="middle" class="il-white">CETP</text></g>
        <path d="M334 96 H372" class="il-none il-line2" fill="none"/><path d="M368 88 L380 96 L368 104 Z" class="il-8"/>
        <g data-part="lipids"><rect x="384" y="62" width="220" height="68" rx="12" class="il-1s il-line"/><text x="400" y="90" class="il-title">HDL ▲ 72%</text><text x="400" y="114" class="il-title">LDL ▼ 25%</text></g>
        <path d="M608 96 H646" class="il-none st-7 il-dash" stroke-width="2.5" fill="none"/><text x="612" y="84" class="il-small">?</text>
        <g data-part="benefit"><rect x="654" y="62" width="226" height="68" rx="12" class="il-paper il-line" style="stroke-dasharray:5 4"/><text x="670" y="90" class="il-text">Fewer heart attacks?</text><text x="670" y="114" class="il-text-2">never shown</text></g>
        <g data-part="adrenal"><path d="M240 318 L280 252 L320 318 Z" class="il-6s il-line"/><text x="280" y="342" text-anchor="middle" class="il-text">adrenal gland</text></g>
        <path d="M324 290 H356" class="il-none il-line2" fill="none"/><path d="M352 282 L364 290 L352 298 Z" class="il-8"/>
        <g data-part="aldo"><rect x="368" y="262" width="170" height="56" rx="12" class="il-4s il-line"/><text x="384" y="286" class="il-text">aldosterone ▲</text><text x="384" y="306" class="il-small">(and cortisol)</text></g>
        <path d="M542 290 H574" class="il-none il-line2" fill="none"/><path d="M570 282 L582 290 L570 298 Z" class="il-8"/>
        <g data-part="kidney"><ellipse cx="634" cy="290" rx="32" ry="26" class="il-5s il-line"/><text x="634" y="344" text-anchor="middle" class="il-text">kidney</text></g>
        <path d="M672 290 H704" class="il-none il-line2" fill="none"/><path d="M700 282 L712 290 L700 298 Z" class="il-8"/>
        <g data-part="bp"><rect x="716" y="258" width="164" height="64" rx="12" class="il-7s il-line"/><text x="730" y="284" class="il-text">blood pressure ▲</text><text x="730" y="306" class="il-small">+5.4 mmHg systolic</text></g>
        <g data-part="posthoc"><rect x="384" y="166" width="496" height="52" rx="12" class="il-paper il-line" style="stroke-dasharray:5 4"/><text x="400" y="190" class="il-text">Post hoc: deaths highest where potassium fell</text><text x="400" y="208" class="il-text-2">or bicarbonate rose most (sodium kept, potassium lost)</text></g>
      </svg>`,
      hotspots: {
        drug: {title: 'Torcetrapib', text: 'A potent, very fat-soluble [[small molecule]]. Potency against CETP was never the problem.'},
        cetp: {title: 'The intended target', text: 'Torcetrapib binds [[CETP]] and blocks the cholesterol swap between HDL and LDL. This part worked as designed.'},
        lipids: {title: 'The surrogate', text: 'The lipid panel, the number the whole program was built around, looked better than any drug in history.'},
        benefit: {title: 'The assumed benefit', text: 'The imaging trials showed no slowing of plaque. The outcomes trial showed harm. The benefit that the surrogate promised never appeared.'},
        adrenal: {title: 'The off-target hit', text: 'In lab-grown human adrenal cells, torcetrapib raised calcium inside the cells and switched on aldosterone and cortisol production. Related compounds that don\'t block CETP did the same, so the effect belongs to the molecule, not the mechanism (Hu et al., 2009).'},
        aldo: {title: 'Aldosterone', text: 'ILLUMINATE measured higher aldosterone on torcetrapib. It is the hormone that tells the kidneys to retain salt and water.'},
        kidney: {title: 'The kidneys respond', text: 'More sodium kept, more potassium lost, more bicarbonate: the blood-chemistry fingerprint of excess aldosterone, all seen in ILLUMINATE.'},
        bp: {title: 'Blood pressure', text: 'Up 5.4 mmHg on average in ILLUMINATE. Bad for a heart drug, but many experts doubted it could explain all of the 58% excess in deaths.'},
        posthoc: {title: 'A post hoc clue', text: 'Patients whose potassium fell or bicarbonate rose more than the median had higher death rates. It is a [[post hoc analysis]], suggestive but not proof, and it fits the aldosterone explanation.'},
      },
      caption: 'The blood-pressure and hormone effects were off-target. Whether blocking CETP itself was harmful, neutral or helpful needed other molecules to answer.'},

    // ---------------- POST-MORTEM 2 / CLASS ----------------
    {type: 'story', kicker: 'The post-mortem, part 2', title: 'Or a bug in the spec? The rest of the class', tocTitle: 'Post-mortem: the idea', html: `
      <p>If torcetrapib failed because of its adrenal side effect, a clean CETP inhibitor should succeed. Three companies spent the next decade finding out, in three of the largest cardiovascular trials ever run. Dalcetrapib barely moved blood pressure (0.6 mmHg), and none of the three repeated torcetrapib's excess of deaths.</p>
      <p><strong>Dalcetrapib (Roche).</strong> A weaker CETP inhibitor, originally from Japan Tobacco. The dal-OUTCOMES trial enrolled 15,871 patients who had recently had a heart attack or unstable angina. Dalcetrapib raised HDL by about 31–40% (versus 4–11% on placebo) and barely changed LDL. In May 2012, at a pre-planned interim analysis, the monitoring board stopped the trial for [[futility analysis|futility]]: events occurred in 8.0% on dalcetrapib versus 8.3% on placebo (hazard ratio 1.04). No harm, and no benefit.</p>
      <p><strong>Evacetrapib (Eli Lilly).</strong> A potent inhibitor: it more than doubled HDL. In the ACCELERATE trial of 12,092 high-risk patients, it raised HDL by 133% and lowered LDL by 31% at three months. That should have been enough to show benefit through LDL alone. In October 2015, Lilly stopped the trial for insufficient efficacy. Primary events: 12.9% on evacetrapib, 12.8% on placebo (hazard ratio 1.01). This was the result that shocked the field most, because even the LDL drop didn't seem to help.</p>
      <p><strong>Anacetrapib (Merck).</strong> Merck took the most patient approach: REVEAL enrolled 30,449 patients already on intensive atorvastatin and followed them for a median of 4.1 years. At the midpoint, HDL was 104% higher on anacetrapib and non-HDL cholesterol 18% lower. In 2017, REVEAL reported a real benefit: major coronary events in 10.8% versus 11.8% (rate ratio 0.91), with no excess of deaths or cancer. But the benefit was modest, about what the reduction in LDL-type particles alone would predict. The doubling of HDL seemed to add nothing. On October 11, 2017, Merck announced it would not seek approval. "The clinical profile for anacetrapib does not support regulatory filings," said Roger Perlmutter, head of Merck's research labs.</p>
      <p>Why did evacetrapib's 31% LDL drop do nothing while anacetrapib's smaller drop helped? Several explanations have been offered: ACCELERATE was shorter (a median 26 months versus 4.1 years), and statin trials show benefit grows over time. Another explanation is that CETP inhibitors lower the <em>cholesterol</em> in LDL more than they lower the <em>number</em> of LDL particles ([[apoB]]). A 2017 genetic study led by Brian Ference found that what predicted benefit was the drop in apoB, the count of trucks, not the cholesterol they carried. By that measure, CETP inhibitors were weaker than their LDL numbers suggested.</p>
      <p>Put together, the class results answered Nissen's question. The HDL levels "we were building up" weren't protecting anyone. Four drugs raised HDL by 30% to 133%. Not one showed a benefit that couldn't be explained by its effect on LDL-type particles.</p>`},

    {type: 'table', title: 'The CETP inhibitor class: HDL up, outcomes not', intro: 'Each row is one company\'s multi-year test of the same idea.',
      columns: ['Drug (company)', 'Outcomes trial', 'HDL change', 'LDL change', 'Result', 'Fate'],
      rows: [
        ['<b>Torcetrapib</b> (Pfizer)', 'ILLUMINATE, 15,067 patients', '+72% vs baseline', '−25% vs baseline', 'Deaths up (HR 1.58); major CV events up (HR 1.25)', 'Stopped Dec 2006; off-target aldosterone and blood-pressure effects'],
        ['<b>Dalcetrapib</b> (Roche)', 'dal-OUTCOMES, 15,871', '+31–40% (placebo +4–11%)', 'Minimal', 'HR 1.04: no benefit', 'Stopped for futility, May 2012. DalCor later tested it in a genetically selected subgroup'],
        ['<b>Evacetrapib</b> (Eli Lilly)', 'ACCELERATE, 12,092', '+133% (placebo +1.6%)', '−31% (placebo +6%)', 'HR 1.01: no benefit', 'Stopped for lack of efficacy, Oct 2015'],
        ['<b>Anacetrapib</b> (Merck)', 'REVEAL, 30,449', '+104% vs placebo', 'Non-HDL −18% vs placebo', 'Rate ratio 0.91: modest benefit, in line with non-HDL lowering', 'Merck chose not to file, Oct 2017'],
        ['<b>Obicetrapib</b> (NewAmsterdam; Menarini in Europe)', 'PREVAIL, 9,541 (ongoing); BROADWAY 2,530 for LDL', 'Rises (not the goal)', 'About −30% at 12 weeks (BROADWAY)', 'Outcomes pending', 'EMA CHMP positive opinion July 2026 as an LDL-lowering drug'],
      ],
      caption: 'Percent changes are not directly comparable: some trials report change from baseline, others versus placebo. Sources: Barter 2007; Schwartz 2012; Lincoff 2017; HPS3/TIMI55–REVEAL 2017; Nicholls 2025; EMA; ClinicalTrials.gov NCT05202509.'},

    {type: 'decision', title: 'REVEAL is positive. Do you file?', role: 'You are Merck\'s head of research, 2017',
      scenario: `After a decade and 30,449 patients, REVEAL met its primary endpoint: anacetrapib cut major coronary events by 9% (rate ratio 0.91, P=0.004) on top of intensive statin therapy, with no excess deaths or cancer. It is the first CETP inhibitor to show benefit. But the benefit is modest, cheap generic statins and other LDL-lowering drugs exist, and the drug's story (a big HDL rise) no longer impresses cardiologists. Do you file for approval?`,
      options: [
        {label: `File: a positive outcomes trial is rare and valuable`, outcome: `A 30,000-patient trial with a positive primary endpoint is a strong regulatory package, and some patients who can\'t reach LDL goals could benefit. But you would then need to launch, price and market a drug that offers a small benefit, in a crowded field, to doctors who have been burned by this class three times. Payers would ask why they should pay a branded price for a benefit you could get from generics.`},
        {label: `Don\'t file: the commercial and clinical case is too thin`, outcome: `You write off a decade of work but avoid spending hundreds of millions on a launch unlikely to pay back. The science still gets published, and the field learns from it. The cost is that a modestly effective, apparently safe drug never reaches patients.`},
      ],
      reality: `Merck announced on October 11, 2017, that it would not submit anacetrapib for approval, saying its clinical profile "does not support regulatory filings." It did not give detailed reasons. Outcomes data in hand, the field's conclusion was that CETP inhibition helps only as far as it lowers LDL-type particles.`},

    // ---------------- MENDELIAN RANDOMIZATION ----------------
    {type: 'story', kicker: 'The deeper answer', title: 'Nature\'s randomized trial: Mendelian randomization', tocTitle: 'Mendelian randomization', html: `
      <p>Drug trials are the gold standard for causation, but they take a decade and cost billions. Could anyone have tested the HDL hypothesis more cheaply? By 2012, the answer was yes, using genetics.</p>
      <p>The idea is called [[Mendelian randomization]], after Gregor Mendel, the monk who worked out how traits are inherited. When a child is conceived, each parent passes on one of their two copies of every gene, essentially at random. So whether you inherit a gene variant that nudges your HDL up is like a coin flip made before you were born. It doesn't depend on whether you exercise, what you eat, how much you earn, or whether you smoke. That makes a gene variant work like a lifelong randomized trial.</p>
      <p>The logic runs like this. If HDL truly protects the heart, people who inherit HDL-raising variants should have fewer heart attacks, in proportion to how much their HDL is raised. If they don't, HDL is probably a marker that rides along with health rather than a cause of it.</p>
      <p>In 2012, a large international team led by Benjamin Voight and Sekar Kathiresan published that test in the <em>Lancet</em>. First they looked at a variant in a gene called <em>LIPG</em> (endothelial lipase), an uncommon variant (about 2.6% of copies of the gene in the population carry it). Carriers had higher HDL (by 0.14 mmol/L, about 5 mg/dL) but no difference in LDL, triglycerides, blood pressure or other risk factors. Based on the observational link, that HDL difference should have lowered heart-attack risk by about 13%. Across 20,913 heart-attack cases and 95,407 controls, it didn't lower it at all ([[odds ratio]] 0.99, meaning no difference).</p>
      <p>Then they built a score from 14 common variants that each raise HDL and nothing else. In observational data, one standard deviation higher HDL came with 38% lower odds of heart attack. In the genetic data, one standard deviation higher HDL <em>due to genes</em> came with no significant change (odds ratio 0.93, with a confidence interval running from 0.68 to 1.26). As a check that the method works, they ran the same analysis for LDL. Genes that raise LDL raised heart-attack risk, at least as strongly as the observational data predicted. The method could detect a causal factor. It just found that HDL wasn't one.</p>
      <p>The authors concluded, carefully, that "some genetic mechanisms that raise plasma HDL cholesterol do not seem to lower risk of myocardial infarction." Read with the CETP trial results, the message was plain: HDL cholesterol is a marker, a thermometer rather than a thermostat. Raising the reading doesn't change the temperature.</p>
      <aside class="note"><b>Why not do this in 2003?</b> Mendelian randomization needs tens of thousands of genotyped people with recorded heart attacks. Those resources arrived with genome-wide association studies and large biobanks from the late 2000s onward. The tool that could have saved the CETP class was just arriving as the class was failing.</aside>`},

    {type: 'figure', title: 'How Mendelian randomization tested HDL', intro: 'Genes are dealt at conception, before lifestyle can interfere. Hover or tap each part to follow the logic of the 2012 Lancet study.',
      svg: `<svg viewBox="0 0 900 420">
        <g data-part="confound"><rect x="320" y="16" width="260" height="66" rx="14" class="il-8s il-line"/><text x="450" y="42" text-anchor="middle" class="il-text">Lifestyle and metabolism</text><text x="450" y="64" text-anchor="middle" class="il-small">weight, insulin resistance, exercise, smoking</text></g>
        <path d="M400 86 L430 150" class="il-none il-line2" fill="none"/><path d="M500 86 L700 150" class="il-none il-line2" fill="none"/>
        <path d="M320 70 C250 90 200 110 170 150" class="il-none il-line il-dash" fill="none"/>
        <path d="M232 98 L256 122 M256 98 L232 122" class="il-none st-7" stroke-width="4" stroke-linecap="round" fill="none"/>
        <text x="266" y="120" class="il-small">can&apos;t change your genes</text>
        <g data-part="gene"><rect x="30" y="160" width="230" height="74" rx="14" class="il-6s il-line"/><text x="145" y="190" text-anchor="middle" class="il-title">Gene variant</text><text x="145" y="214" text-anchor="middle" class="il-text-2">LIPG 396Ser (2.6% of alleles)</text></g>
        <path d="M264 197 H342" class="il-none st-3" stroke-width="3" fill="none"/><path d="M338 188 L350 197 L338 206 Z" class="il-3"/>
        <g data-part="hdl"><rect x="352" y="160" width="200" height="74" rx="14" class="il-3s il-line"/><text x="452" y="190" text-anchor="middle" class="il-title">HDL higher</text><text x="452" y="214" text-anchor="middle" class="il-text-2">+0.14 mmol/L, nothing else</text></g>
        <path d="M556 197 H634" class="il-none st-7 il-dash" stroke-width="3" fill="none"/><path d="M630 188 L642 197 L630 206 Z" class="il-7"/><text x="596" y="186" text-anchor="middle" class="il-small">?</text>
        <g data-part="mi"><rect x="644" y="160" width="226" height="74" rx="14" class="il-7s il-line"/><text x="757" y="190" text-anchor="middle" class="il-title">Heart-attack risk</text><text x="757" y="214" text-anchor="middle" class="il-text-2">20,913 cases vs 95,407 controls</text></g>
        <line x1="620" y1="268" x2="620" y2="378" class="il-line il-dash"/>
        <text x="620" y="398" text-anchor="middle" class="il-small">no effect (1.0)</text><text x="440" y="398" text-anchor="middle" class="il-small">lower risk</text><text x="800" y="398" text-anchor="middle" class="il-small">higher risk</text>
        <g data-part="expected"><text x="30" y="300" class="il-text">Predicted if HDL were causal</text><line x1="460" y1="296" x2="530" y2="296" class="st-3" stroke-width="3"/><circle cx="490" cy="296" r="8" class="il-3"/><text x="546" y="301" class="il-small">OR 0.87</text></g>
        <g data-part="observed"><text x="30" y="350" class="il-text">Actually observed in carriers</text><line x1="500" y1="346" x2="730" y2="346" class="st-7" stroke-width="3"/><circle cx="610" cy="346" r="8" class="il-7"/><text x="746" y="351" class="il-small">OR 0.99</text></g>
        <g data-part="ldlctrl"><rect x="640" y="16" width="240" height="66" rx="14" class="il-paper il-line"/><text x="760" y="42" text-anchor="middle" class="il-text">Positive control: LDL genes</text><text x="760" y="64" text-anchor="middle" class="il-small">raise heart-attack risk, as predicted</text></g>
      </svg>`,
      hotspots: {
        confound: {title: 'The confounders', text: 'In observational data, lifestyle and metabolism push HDL up and heart risk down at the same time, creating a link even if HDL does nothing. These [[confounder|confounders]] can\'t reach back and change which gene variants you were born with.'},
        gene: {title: 'The instrument', text: 'A variant in the endothelial lipase gene (<em>LIPG</em> Asn396Ser), with an allele frequency of about 2.6%. Inheriting it is effectively a coin flip at conception. The team also used a score of 14 common HDL-only variants.'},
        hdl: {title: 'HDL goes up, nothing else', text: 'Carriers had HDL higher by 0.14 mmol/L (about 5 mg/dL), with similar LDL, triglycerides, blood pressure and other risk factors. A clean natural experiment.'},
        mi: {title: 'The outcome', text: 'Tested across 20 studies. If HDL protects, carriers should have fewer heart attacks.'},
        expected: {title: 'What the HDL hypothesis predicted', text: 'From the observational link, a 0.14 mmol/L HDL rise should cut risk by about 13% ([[odds ratio]] 0.87, 95% CI 0.84–0.91).'},
        observed: {title: 'What actually happened', text: 'Odds ratio 0.99 (95% CI 0.88–1.11): no detectable effect. The 14-variant score agreed (OR 0.93 per standard deviation, CI 0.68–1.26), while observational data suggested 0.62.'},
        ldlctrl: {title: 'The positive control', text: 'The same method applied to 13 LDL-raising variants found higher heart-attack risk (OR 2.13 per standard deviation), consistent with observational data. The method can detect causes. HDL just isn\'t one.'},
      },
      caption: 'Schematic forest plot drawn from the odds ratios and confidence intervals in Voight et al., Lancet 2012; horizontal positions are approximate.'},

    {type: 'custom', title: 'Two rules of thumb, tested against reality', kicker: 'Calculator',
      intro: 'Suppose you only had the epidemiology. The HDL rule (Gordon 1989): each 1 mg/dL of HDL goes with about 2% lower coronary risk. The LDL rule (Cholesterol Treatment Trialists, 2010): each 39 mg/dL (1 mmol/L) drop in LDL cuts major events by about 22%. Pick a real trial or set your own lipid changes, and compare both predictions with what happened.',
      html: `<div class="explorer">
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px"><button class="btn" data-p="dal">Dalcetrapib (dal-OUTCOMES)</button><button class="btn" data-p="ana">Anacetrapib (REVEAL)</button><button class="btn" data-p="sta">A statin-sized LDL drop</button></div>
        <label><span>HDL rise (mg/dL)</span><input type="range" min="0" max="60" step="1" value="43" id="rtH"><span class="out" id="rtHo"></span></label>
        <label><span>LDL-type cholesterol fall (mg/dL)</span><input type="range" min="0" max="80" step="1" value="17" id="rtL"><span class="out" id="rtLo"></span></label>
        <div class="result" id="rtOut"></div></div>`,
      init: (root) => {
        const P = {
          dal: {h: 12, l: 0, obs: -4, name: 'dal-OUTCOMES (dalcetrapib)', note: 'HDL rise approximated as about 12 mg/dL: roughly 28 percentage points more than placebo on a baseline of 42 mg/dL. LDL change was minimal. Observed hazard ratio 1.04.'},
          ana: {h: 43, l: 17, obs: 9, name: 'REVEAL (anacetrapib)', note: 'HDL +43 mg/dL and non-HDL cholesterol −17 mg/dL versus placebo at the trial midpoint. Observed rate ratio 0.91. The LDL rule is applied to non-HDL cholesterol here, an approximation.'},
          sta: {h: 3, l: 39, obs: null, name: 'A statin-sized LDL drop', note: 'About 1 mmol/L of LDL lowering, with a small HDL rise. The LDL rule comes from 26 statin trials, so it is calibrated by randomized evidence.'},
        };
        const h = root.querySelector('#rtH'), l = root.querySelector('#rtL'), out = root.querySelector('#rtOut');
        let cur = 'ana';
        const bar = (label, v, cls, sub) => { const w = Math.max(0, Math.min(100, Math.abs(v))); return '<div style="display:grid;grid-template-columns:190px 1fr 70px;gap:10px;align-items:center;margin:6px 0;font:14.5px var(--sans)"><span>' + label + '</span><span style="background:var(--panel-2);border-radius:6px;height:18px;position:relative"><span style="position:absolute;left:0;top:0;bottom:0;width:' + w + '%;background:var(' + cls + ');border-radius:6px"></span></span><b style="text-align:right">' + (v < 0 ? '+' + Math.abs(v).toFixed(0) + '% risk' : v < 0.5 ? '0%' : '−' + v.toFixed(0) + '%') + '</b></div>' + (sub ? '<div style="font-size:13px;color:var(--ink-3);margin:-2px 0 6px 200px">' + sub + '</div>' : ''); };
        function upd() {
          root.querySelector('#rtHo').textContent = '+' + h.value; root.querySelector('#rtLo').textContent = +l.value ? '−' + l.value : '0';
          const hr = (1 - Math.pow(0.98, +h.value)) * 100, lr = (1 - Math.pow(0.78, +l.value / 38.7)) * 100;
          const p = cur ? P[cur] : null;
          let s = bar('HDL rule predicts', hr, '--s2', 'observational association, treated as if causal') + bar('LDL rule predicts', lr, '--s1', 'calibrated on randomized trials');
          if (p && p.obs != null) s += bar('Actually observed', p.obs, p.obs < 0 ? '--s8' : '--s3', p.obs < 0 ? 'slightly more events than placebo (not significant)' : 'from the outcomes trial');
          s += '<p style="margin-top:10px">' + (p ? '<b>' + p.name + ':</b> ' + p.note + ' ' : 'Custom settings. ') + (p && p.obs != null ? 'The LDL rule lands close to reality; the HDL rule overshoots badly. That is what a marker, rather than a cause, looks like in data.' : 'Try the REVEAL preset: the HDL rule predicts a risk cut of more than half; the trial found 9%.') + '</p>';
          out.innerHTML = s;
        }
        root.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { cur = b.dataset.p; h.value = P[cur].h; l.value = P[cur].l; upd(); });
        [h, l].forEach(x => x.addEventListener('input', () => { cur = null; upd(); }));
        upd();
      }},

    {type: 'callout', variant: 'lesson', heading: 'A marker is not a lever', html: `<p>A biomarker can predict an outcome perfectly well and still be useless as a target. HDL predicts heart attacks because it reflects metabolic health, not because it produces it. LDL predicts heart attacks <em>and</em> causes them, which is why lowering it works almost regardless of the drug. The test that distinguishes the two is not a bigger observational study. It is randomization: by a trial, or by nature through genetics.</p>`},

    // ---------------- WHAT CAME NEXT ----------------
    {type: 'story', kicker: 'Legacy', title: 'What came next: the CETP comeback, and what the field changed', tocTitle: 'What came next', html: `
      <p>The CETP story has an odd epilogue. The same genetic studies that doomed the HDL hypothesis pointed to a narrower one. Ference's 2017 analysis found that people with CETP gene variants did have fewer cardiovascular events, in proportion to how much their LDL-type particles (apoB) fell. The benefit of blocking CETP, if there is one, runs through LDL, not HDL. What was needed was an inhibitor potent enough to cut LDL substantially and clean enough to avoid torcetrapib's adrenal effects.</p>
      <p>Obicetrapib is that attempt. It was first developed by Amgen, which shelved it in 2017, and licensed in 2020 to NewAmsterdam Pharma; Menarini holds European rights. NewAmsterdam pitches it as an LDL drug, not an HDL drug. In the BROADWAY trial of 2,530 high-risk patients already on maximum tolerated cholesterol treatment, published in 2025, obicetrapib lowered LDL cholesterol by 29.9% at 12 weeks, compared with a 2.7% rise on placebo, with side effects similar to placebo. In July 2026, the EMA's [[CHMP]] recommended approval in Europe, under the name Ubeslo, for high cholesterol, based on LDL lowering in two year-long trials. The real test is PREVAIL, an outcomes trial of about 9,500 patients, expected to finish around the end of 2026. After torcetrapib, nobody expects doctors to trust a CETP inhibitor on lipid numbers alone.</p>
      <h3>How the field changed</h3>
      <ul>
        <li><strong>Surrogates must be validated, not assumed.</strong> Torcetrapib made this concrete for lipids: a new mechanism needs outcomes data, even if it moves a familiar number. Every later CETP drug ran a trial of 12,000 to 30,000 patients.</li>
        <li><strong>Genetics moved to the front of target selection.</strong> Mendelian randomization and large biobanks became standard tools for asking "is this target causal?" before spending a decade on it. The same genetic tools that sank HDL confirmed LDL, and later pointed CETP research back toward LDL.</li>
        <li><strong>Off-target screening got sharper.</strong> Torcetrapib showed that a drug's "side" pharmacology can decide its fate. Pfizer's own scientists traced the adrenal effect to the molecule, a reminder that a drug's full pharmacology, not just its target, has to be profiled early.</li>
        <li><strong>HDL was demoted.</strong> After the CETP trials and the genetic results, raising HDL stopped being a serious drug-development goal. HDL remains a useful risk marker. It's just not a target.</li>
      </ul>
      <p>For Pfizer, there was no second act for the franchise. Lipitor went generic in the US on November 30, 2011, and its sales fell 59% the next year, with no successor in place.</p>`},

    {type: 'callout', variant: 'whatif', heading: 'What if Pfizer had filed on HDL alone?', html: `<p>Suppose Pfizer had skipped ILLUMINATE, filed on lipid data in 2007, and won approval (the imaging results, which showed no benefit, make that less likely). Millions of patients were on Lipitor. If even a fraction had moved to the combination pill, the excess risk seen in ILLUMINATE would have played out outside a trial, in people with no monitoring board watching. It might have taken years of [[pharmacovigilance]] to detect a rise in deaths among patients who were already at high risk of dying.</p><p>Vioxx, a few years earlier, had shown how long a cardiovascular risk can hide in a widely used drug. The expensive outcomes trial wasn't a luxury. It was the only part of the program that protected patients from the assumption everyone shared.</p>`},

    {type: 'callout', variant: 'product', heading: 'Post-mortem: bug in the build, or bug in the spec?', html: `<p>Good engineering post-mortems separate implementation bugs from design flaws. Torcetrapib had both: an implementation bug (the molecule's adrenal side effect) and a spec bug (the assumption that raising HDL helps). The first was traced within a few years. The second took four molecules and a decade, because each "rebuild" needed a new drug and a new trial of 12,000 to 30,000 patients.</p><p><b>Where the analogy breaks:</b> in software, you can fix the implementation bug, redeploy, and see if the problem persists within days, so the two failure modes separate quickly. In drug development, every rebuild costs years and a very large trial, which is why companies should test the spec, with genetics and small human experiments, before building.</p>`},

    // ---------------- QUIZ ----------------
    {type: 'quiz', title: 'Check your understanding', questions: [
      {q: 'What does CETP normally do in the blood?', options: ['It breaks down LDL particles in the liver', 'It moves cholesteryl ester from HDL into LDL and VLDL, taking triglycerides back', 'It makes new HDL particles from scratch', 'It pulls cholesterol out of artery walls into HDL'], answer: 1, explain: 'CETP is a cargo-swap protein. Blocking it traps cholesterol in HDL (HDL rises) and starves LDL of cholesterol (LDL falls).'},
      {q: 'Why was the Framingham finding (high HDL, fewer heart attacks) not enough to justify a drug?', options: ['The link was weak and inconsistent across studies', 'HDL couldn\'t be measured reliably at the time', 'The studies never adjusted for LDL or blood pressure', 'Observational links can be driven by confounders: people with high HDL differ in many other ways'], answer: 3, explain: 'Association isn\'t causation. Low HDL travels with obesity, insulin resistance and high triglycerides. Only randomization, by trial or genetics, can separate a marker from a cause.'},
      {q: 'ILLUMINATE showed HDL +72%, LDL −25%, and more deaths. Which is the best summary?', options: ['The surrogate moved strongly in the "right" direction while the clinical outcome got worse', 'The drug failed to block its target', 'The trial was too small to tell', 'The dose was too low to help'], answer: 0, explain: 'That is the textbook surrogate endpoint failure: the drug did exactly what it was designed to do to the blood test, and patients did worse.'},
      {q: 'Which finding most strongly pointed to an off-target effect of the torcetrapib molecule?', options: ['HDL particles became larger', 'LDL fell by 25%', 'Aldosterone rose; related compounds that don\'t block CETP raised aldosterone in adrenal cells too', 'The trial enrolled mostly men'], answer: 2, explain: 'If molecules that don\'t block CETP cause the same adrenal effect, the effect belongs to the chemistry, not the mechanism (Hu et al., 2009).'},
      {q: 'Dalcetrapib and evacetrapib didn\'t raise blood pressure like torcetrapib. What did their outcomes trials show?', options: ['Both cut heart attacks by about 30%', 'Both showed harm like torcetrapib', 'Neither showed benefit, despite HDL rising 30–133%', 'Only evacetrapib helped, because of its bigger HDL rise'], answer: 2, explain: 'Removing the off-target effect removed the harm, but not the lack of benefit. That pointed at the HDL hypothesis itself.'},
      {q: 'REVEAL showed anacetrapib reduced major coronary events by 9%. What is the most accepted explanation?', options: ['Its large HDL rise', 'Chance: the result wasn\'t significant', 'Its reduction in LDL-type (non-HDL) particles, about what the LDL rule predicts', 'A lower blood pressure on the drug'], answer: 2, explain: 'Non-HDL cholesterol fell 17 mg/dL, and the benefit was in line with that reduction. The doubling of HDL seemed to add nothing.'},
      {q: 'In the 2012 Lancet Mendelian randomization study, why did it matter that LDL-raising gene variants DID raise heart-attack risk?', options: ['It proved LDL and HDL are the same', 'It was a positive control: the method can detect a causal factor, so HDL\'s null result is meaningful', 'It showed genes cause all heart attacks', 'It had nothing to do with the HDL result'], answer: 1, explain: 'Without a positive control, a null result could mean the method just doesn\'t work. With one, it means HDL probably isn\'t causal.'},
      {q: 'On December 2, 2006, why was stopping all torcetrapib trials immediately the defensible choice?', options: ['The FDA had already banned the drug', 'An independent board judged the excess deaths unlikely to be chance; continuing would expose patients to an unexplained risk for the sake of learning', 'The imaging trials had already shown harm', 'Pfizer wanted to protect its share price'], answer: 1, explain: 'Once a monitoring board sees a credible harm signal, the ethical default is to stop dosing. Pfizer acted within hours.'},
      {q: 'Obicetrapib is now being developed as a CETP inhibitor. What is different about the pitch?', options: ['It raises HDL even more than torcetrapib', 'It was approved in the US on HDL data', 'It has no effect on HDL at all', 'It is pitched on LDL lowering, with a large outcomes trial (PREVAIL) to test heart attacks directly'], answer: 3, explain: 'The rationale flipped from HDL to LDL/apoB, the one surrogate proven to be causal, and it still needs outcomes data to earn doctors\' trust.'},
      {q: 'Which software situation is the closest analogy to torcetrapib?', options: ['A server outage caused by a hardware fault', 'Optimizing a proxy metric (like notification opens) in a way that breaks its link to the real goal (retention)', 'A pricing experiment that lowered revenue', 'Shipping a feature late'], answer: 1, explain: 'That is Goodhart\'s law. HDL tracked heart health in the wild; forcing it up by jamming CETP broke the link, just like gaming a proxy metric.'},
    ]},

    // ---------------- LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'A surrogate is only as good as the causal chain behind it', text: 'LDL earned its status through dozens of trials. HDL borrowed trust from an observational association. Before betting on a biomarker, ask whether anyone has ever moved it and changed outcomes.', links: ['aduhelm', 'leqembi', 'epacadostat']},
      {title: 'Human genetics is the cheapest randomized trial', text: 'Mendelian randomization could, in principle, have told the field that HDL wasn\'t causal before nearly 60,000 more patients were enrolled. Genetic evidence is now one of the strongest predictors that a target will work.', links: ['trikafta', 'spinraza']},
      {title: 'A drug can fail for reasons unrelated to its target', text: 'Torcetrapib\'s adrenal effect was a property of the molecule. Separate "the idea is wrong" from "this compound is wrong", and test both.', links: ['tgn1412', 'vioxx']},
      {title: 'Commercial deadlines distort how evidence gets read', text: 'A patent cliff, a factory, a filing date and a CEO\'s promise made the untested link feel settled. Build decision processes that are protected from the calendar.', links: ['exubera', 'vioxx']},
      {title: 'The expensive outcomes trial is the safety net', text: 'ILLUMINATE cost the most and found the harm before approval. Outcomes trials and independent monitoring boards protect patients from assumptions everyone shares.', links: ['ozempic', 'vioxx']},
      {title: 'A class failure teaches the whole field', text: 'Four CETP drugs, four answers, one conclusion. Watching how a hypothesis dies across competitors is as instructive as watching a drug succeed.', links: ['aduhelm', 'leqembi']},
    ]},

    // ---------------- SOURCES ----------------
    {type: 'sources', title: 'Sources', items: [
      {text: 'Barter PJ et al. Effects of torcetrapib in patients at high risk for coronary events (ILLUMINATE). N Engl J Med 2007;357:2109–22.', url: 'https://pubmed.ncbi.nlm.nih.gov/17984165/'},
      {text: 'Nissen SE et al. Effect of torcetrapib on the progression of coronary atherosclerosis (ILLUSTRATE). N Engl J Med 2007;356:1304–16; and Nicholls SJ et al. Insights from ILLUSTRATE. Circulation 2008;118:2506–14 (PMID 19029466).', url: 'https://pubmed.ncbi.nlm.nih.gov/17387129/'},
      {text: 'Kastelein JJ et al. Effect of torcetrapib on carotid atherosclerosis in familial hypercholesterolemia (RADIANCE 1). N Engl J Med 2007;356:1620–30.', url: 'https://pubmed.ncbi.nlm.nih.gov/17387131/'},
      {text: 'Bots ML et al. Torcetrapib and carotid intima-media thickness in mixed dyslipidaemia (RADIANCE 2). Lancet 2007;370:153–60.', url: 'https://pubmed.ncbi.nlm.nih.gov/17630038/'},
      {text: 'Hu X et al. Torcetrapib induces aldosterone and cortisol production by an intracellular calcium-mediated mechanism independently of CETP inhibition. Endocrinology 2009;150:2211–9.', url: 'https://pubmed.ncbi.nlm.nih.gov/19164467/'},
      {text: 'Brousseau ME et al. Effects of an inhibitor of cholesteryl ester transfer protein on HDL cholesterol. N Engl J Med 2004;350:1505–15.', url: 'https://pubmed.ncbi.nlm.nih.gov/15071125/'},
      {text: 'Gordon T, Castelli WP et al. High density lipoprotein as a protective factor against coronary heart disease: the Framingham Study. Am J Med 1977;62:707–14. (Framingham start date: Framingham Heart Study research milestones.)', url: 'https://pubmed.ncbi.nlm.nih.gov/193398/'},
      {text: 'Gordon DJ et al. High-density lipoprotein cholesterol and cardiovascular disease: four prospective American studies. Circulation 1989;79:8–15.', url: 'https://pubmed.ncbi.nlm.nih.gov/2642759/'},
      {text: 'Koizumi J et al. Deficiency of serum cholesteryl-ester transfer activity in patients with familial hyperalphalipoproteinaemia. Atherosclerosis 1985;58:175–86; and Brown ML, Inazu A et al. Molecular basis of lipid transfer protein deficiency in a family with increased high-density lipoproteins. Nature 1989;342:448–51 (PMID 2586614).', url: 'https://pubmed.ncbi.nlm.nih.gov/3937535/'},
      {text: 'Inazu A et al. Increased high-density lipoprotein levels caused by a common cholesteryl-ester transfer protein gene mutation. N Engl J Med 1990;323:1234–8.', url: 'https://pubmed.ncbi.nlm.nih.gov/2215607/'},
      {text: 'Zhong S et al. Increased coronary heart disease in Japanese-American men with mutation in the CETP gene despite increased HDL levels. J Clin Invest 1996;97:2917–23.', url: 'https://pubmed.ncbi.nlm.nih.gov/8675707/'},
      {text: 'Mabuchi H, Nohara A, Inazu A. Cholesteryl ester transfer protein (CETP) deficiency and CETP inhibitors. Mol Cells 2014;37:777–84 (ILLUMINATE death and event counts; Honolulu follow-up).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4255097/'},
      {text: 'Scandinavian Simvastatin Survival Study Group. Randomised trial of cholesterol lowering in 4444 patients with coronary heart disease (4S). Lancet 1994;344:1383–9.', url: 'https://pubmed.ncbi.nlm.nih.gov/7968073/'},
      {text: 'Cholesterol Treatment Trialists\' Collaboration. Efficacy and safety of more intensive lowering of LDL cholesterol: meta-analysis of 170,000 participants. Lancet 2010;376:1670–81.', url: 'https://pubmed.ncbi.nlm.nih.gov/21067804/'},
      {text: 'Schwartz GG et al. Effects of dalcetrapib in patients with a recent acute coronary syndrome (dal-OUTCOMES). N Engl J Med 2012;367:2089–99.', url: 'https://pubmed.ncbi.nlm.nih.gov/23126252/'},
      {text: 'Lincoff AM et al. Evacetrapib and cardiovascular outcomes in high-risk vascular disease (ACCELERATE). N Engl J Med 2017;376:1933–42.', url: 'https://pubmed.ncbi.nlm.nih.gov/28514624/'},
      {text: 'HPS3/TIMI55–REVEAL Collaborative Group. Effects of anacetrapib in patients with atherosclerotic vascular disease. N Engl J Med 2017;377:1217–27.', url: 'https://pubmed.ncbi.nlm.nih.gov/28847206/'},
      {text: 'Voight BF et al. Plasma HDL cholesterol and risk of myocardial infarction: a mendelian randomisation study. Lancet 2012;380:572–80.', url: 'https://pubmed.ncbi.nlm.nih.gov/22607825/'},
      {text: 'Ference BA et al. Association of genetic variants related to CETP inhibitors and statins with lipoprotein levels and cardiovascular risk. JAMA 2017;318:947–56.', url: 'https://pubmed.ncbi.nlm.nih.gov/28846118/'},
      {text: 'Nicholls SJ et al. Safety and efficacy of obicetrapib in patients at high cardiovascular risk (BROADWAY). N Engl J Med 2025;393:51–61.', url: 'https://pubmed.ncbi.nlm.nih.gov/40337982/'},
      {text: 'Avorn J. Torcetrapib and atorvastatin: should marketing drive the research agenda? N Engl J Med 2005;352:2573–6.', url: 'https://pubmed.ncbi.nlm.nih.gov/15972861/'},
      {text: 'Pfizer press release, June 22, 2005: Pfizer begins production at torcetrapib/atorvastatin facility expansion in Loughbeg, Ireland ($90M plant; ~$800M, 25,000-patient program; program milestones; LaMattina and Ricciardi quotes).', url: 'http://web.archive.org/web/20070418070408/http://www.pfizer.com:80/pfizer/are/investors_releases/2005pr/mn_2005_0622.jsp'},
      {text: 'Berenson A. Heart pill to be sold by itself. New York Times, July 26, 2006 (combination-only reversal; Feczko quote; filing plans).', url: 'https://www.nytimes.com/2006/07/26/business/26drug.html'},
      {text: 'Berenson A. Pfizer ends studies on drug for heart disease. New York Times, December 3, 2006 (Kindler quote; Groton meeting; $7B R&D budget; Lipitor sales).', url: 'https://www.nytimes.com/2006/12/03/health/03pfizer.html'},
      {text: 'Herper M. Behind Pfizer\'s failure. Forbes, December 4, 2006 (82 vs 51 deaths; FDA notified 4 p.m.; $800M; Lipitor a quarter of sales; Bamberger and Clark; McKinnell quote; filing on imaging).', url: 'https://www.forbes.com/2006/12/03/pfizer-heartdisease-drug-biz-cx_mh_1204torcetrapib.html'},
      {text: 'Silberner J. Deaths prompted withdrawal of cholesterol drug. NPR All Things Considered, December 4, 2006 (Nissen quote; 82 vs 51 deaths).', url: 'https://www.npr.org/transcripts/6577591'},
      {text: 'PharmaTimes. Pfizer\'s value plummets $21 billion. December 2006 (share fall of almost 11%; broker downgrades; AstraZeneca/Crestor comment).', url: 'https://pharmatimes.com/news/pfizers_value_plummets_21_billion_995588/'},
      {text: 'Pfizer Inc. Annual financial reports and Form 10-K filings, 2006, 2008, 2011 and 2012 (Lipitor revenue 2004–2012; December 2, 2006 statement; Moody\'s downgrade; US exclusivity lost November 30, 2011; Ranbaxy agreement). US FDA Drugs@FDA, NDA 020702 (Lipitor approval, December 17, 1996).', url: 'https://www.sec.gov/Archives/edgar/data/78003/000093041307001807/c46660_ex13.htm'},
      {text: 'Eli Lilly, Q3 2015 results release (termination of evacetrapib phase 3 trials); Merck press release, October 11, 2017 (anacetrapib; Perlmutter quote).', url: 'https://www.merck.com/news/merck-provides-update-on-anacetrapib-development-program/'},
      {text: 'European Medicines Agency. Ubeslo (obicetrapib): CHMP opinion, July 23, 2026; ClinicalTrials.gov NCT05202509 (PREVAIL); Obicetrapib licensing history (Amgen, NewAmsterdam, Menarini) as summarized on Wikipedia.', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/ubeslo'},
    ]},
  ],
});
