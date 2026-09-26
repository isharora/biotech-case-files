// Thalidomide: Chemie Grünenthal's 1957 sedative, the birth-defect disaster that built modern drug regulation,
// and the drug's second life as Celgene's Thalomid and Revlimid, which led to the discovery of molecular glues.
registerCase({
  id: 'thalidomide', kind: 'failure',
  brand: 'Thalidomide', generic: 'thalidomide (later lenalidomide and pomalidomide)', company: 'Chemie Grünenthal; later Celgene and Bristol Myers Squibb',
  tagline: 'A sleeping pill sold as harmless damaged more than 10,000 babies and gave the world its modern drug laws. Forty years later the same molecule became a cancer drug, and fifty years later scientists finally learned what it does: it makes the cell destroy its own proteins.',
  chips: [['Original use', 'Sedative, 1957–1961'], ['Modality', '[[small molecule]]'], ['Target', '[[cereblon]] (found in 2010)'], ['Second life', 'Leprosy complication, [[multiple myeloma]]'], ['Legacy', 'Kefauver–Harris, [[molecular glue|molecular glues]]']],
  readingTime: 34,
  stats: [
    {v: '~10,000+', l: 'Babies born with thalidomide damage worldwide, roughly 40–50% of whom died in infancy (estimates)', n: 'Contergan Foundation; Vargesson 2015'},
    {v: '17', l: 'US babies with confirmed thalidomide defects, although about 20,000 Americans got the unapproved drug', n: 'FDA Consumer, 2001'},
    {v: '12 days', l: 'From Widukind Lenz\'s warning to Grünenthal\'s withdrawal in November 1961', n: 'Grünenthal'},
    {v: '53 years', l: 'From launch (1957) to the discovery of its target, cereblon (2010)', n: 'Ito et al., Science 2010'},
    {v: '$12.8B', l: 'Revlimid (lenalidomide) worldwide sales at their 2021 peak', n: 'BMS 2022 Form 10-K'},
  ],
  emblem: `<svg viewBox="0 0 300 300" role="img" aria-label="A capsule split by a mirror line, with two mirror-image molecules">
    <circle cx="150" cy="150" r="132" class="il-1s"/>
    <line x1="150" y1="30" x2="150" y2="270" class="il-line2 il-dash"/>
    <g transform="rotate(-28 150 150)">
      <rect x="62" y="122" width="176" height="56" rx="28" class="il-paper il-line2"/>
      <path d="M150 122 H 90 A 28 28 0 0 0 90 178 H 150 Z" class="il-1"/>
      <path d="M150 122 H 210 A 28 28 0 0 1 210 178 H 150 Z" class="il-2"/>
    </g>
    <g class="il-line2" fill="none" stroke-linejoin="round" transform="translate(0,-14)">
      <path d="M96 62 l17 10 v20 l-17 10 l-17 -10 v-20 z" class="il-paper"/>
      <path d="M113 72 l18 -6 l10 14 l-10 14 l-18 -2" class="il-paper"/>
      <path d="M204 62 l-17 10 v20 l17 10 l17 -10 v-20 z" class="il-paper"/>
      <path d="M187 72 l-18 -6 l-10 14 l10 14 l18 -2" class="il-paper"/>
    </g>
    <circle cx="100" cy="222" r="9" class="il-4"/><circle cx="116" cy="236" r="9" class="il-4"/><circle cx="134" cy="244" r="9" class="il-4"/>
    <text x="150" y="292" text-anchor="middle" class="il-small">mirror images, one molecule</text>
  </svg>`,
  facts: {start: 1954, firstHuman: null, approval: 1957, end: 1961, peakSalesB: 12.8, pivotalN: null, area: 'oncology', modality: 'small molecule', target: 'cereblon'},
  themes: ['safety', 'regulatory', 'biology-surprise', 'pricing'],
  glossary: {
    'teratogen': 'Anything (a drug, an infection, radiation) that causes birth defects when an embryo or fetus is exposed to it.',
    'teratogenicity': 'The capacity of a substance to cause birth defects.',
    'embryo': 'The developing human in roughly the first eight weeks after fertilization, when organs and limbs are laid down. After that it is called a fetus.',
    'phocomelia': 'A limb defect in which the long bones of the arm or leg are missing or very short, so that the hand or foot sits close to the body. It was the signature defect of thalidomide.',
    'amelia': 'Complete absence of a limb.',
    'limb bud': 'The small paddle of tissue on the side of an early embryo that grows into an arm or a leg. Arm buds appear about 26 days after fertilization, leg buds a day or so later.',
    'sensitive window': 'The short period of development when an organ is being built and can be damaged by a teratogen. For thalidomide, roughly days 20 to 36 after fertilization.',
    'miscarriage': 'Loss of a pregnancy before the fetus can survive outside the womb.',
    'sedative': 'A drug that calms or induces sleep.',
    'barbiturate': 'An older class of sleeping pills. Effective, but addictive and deadly in overdose, which made a "safe" alternative commercially attractive in the 1950s.',
    'over the counter': 'Sold without a prescription.',
    'LD50': 'The dose that kills half of the test animals. In the 1950s, failing to find one was read as a sign that a drug was harmless.',
    'peripheral neuropathy': 'Damage to the nerves of the hands and feet, causing tingling, numbness and pain. Long-term thalidomide use caused it, sometimes permanently.',
    'investigational drug': 'A drug being tested in people before approval. Before 1962 US companies could hand such drugs to doctors with few controls and no requirement for patient consent.',
    'informed consent': 'A person\'s voluntary agreement to take part in research after being told its purpose, risks and alternatives. Required in US drug trials since the 1962 amendments.',
    'Kefauver–Harris Amendments': 'The 1962 US law that required proof of effectiveness from "adequate and well-controlled investigations" before approval, informed consent in drug trials, reporting of side effects, and tighter control of testing in people.',
    'DESI': 'Drug Efficacy Study Implementation: the FDA program that re-reviewed drugs approved between 1938 and 1962 for proof that they worked. About 600 were eventually classed as ineffective.',
    'Yellow Card scheme': 'The UK system, begun in 1964, through which doctors (and later patients) report suspected side effects of medicines to the regulator.',
    'reproductive toxicity study': 'An animal study that checks whether a drug harms fertility, pregnancy or the developing embryo. Thalidomide made these standard before approval.',
    'enantiomer': 'One of two forms of a molecule that are mirror images of each other, like left and right hands. They have the same atoms and bonds but can behave differently in the body.',
    'chiral': 'Having a "handedness": a molecule that cannot be superimposed on its mirror image. Thalidomide has one chiral carbon atom.',
    'racemic': 'A 50:50 mixture of the two mirror-image forms of a molecule. Thalidomide was sold, and is still sold, as a racemic mixture.',
    'chiral inversion': 'The conversion of one mirror-image form of a molecule into the other. Thalidomide does this in the body within hours.',
    'leprosy': 'A chronic bacterial infection (also called Hansen\'s disease) that damages the skin and nerves. Curable with antibiotics.',
    'erythema nodosum leprosum': 'ENL: a painful inflammatory complication of leprosy, with crops of tender skin lumps, fever and nerve pain. Thalidomide\'s first modern use.',
    'ENL': 'Erythema nodosum leprosum, a painful inflammatory complication of leprosy.',
    'TNF': 'Tumor necrosis factor: a cytokine that drives inflammation. Blocking it is the basis of drugs such as Humira.',
    'angiogenesis': 'The growth of new blood vessels. Tumors need it to grow beyond a tiny size, and embryos need it to build limbs.',
    'multiple myeloma': 'A blood cancer of plasma cells in the bone marrow. It weakens bones, damages kidneys and suppresses normal blood cells. About 30,000 Americans are diagnosed each year.',
    'plasma cell': 'A mature B cell that pumps out antibodies. In myeloma one plasma cell multiplies out of control.',
    'paraprotein': 'Also called M protein: the single antibody made in excess by myeloma cells. Its level in blood or urine is the standard way to track the disease.',
    'myelodysplastic syndrome': 'MDS: a group of bone-marrow disorders in which blood cells are made badly, causing anemia and a risk of leukemia.',
    'del(5q)': 'A form of MDS in which part of the long arm of chromosome 5 is missing. It responds unusually well to lenalidomide.',
    'transfusion independence': 'No longer needing regular blood transfusions: the key benefit measured in lenalidomide\'s MDS trials.',
    'dexamethasone': 'A steroid that kills myeloma cells and is a backbone of many myeloma regimens.',
    'time to progression': 'How long until the disease gets worse. Similar to progression-free survival but not counting deaths from other causes.',
    'lenalidomide': 'Revlimid: a thalidomide derivative with an added amino group and one less oxygen. Much more potent against myeloma, approved in 2005 (MDS) and 2006 (myeloma).',
    'pomalidomide': 'Pomalyst: a thalidomide derivative with an added amino group, approved in 2013 for myeloma that has stopped responding to other drugs.',
    'IMiD': 'Immunomodulatory drug: the family name used for thalidomide, lenalidomide and pomalidomide.',
    'cereblon': 'CRBN: the protein thalidomide binds, identified in 2010. It is the "picker" part of an enzyme machine that tags proteins for destruction.',
    'ubiquitin': 'A small protein that cells attach in chains to other proteins as a "destroy me" tag.',
    'E3 ubiquitin ligase': 'The enzyme that chooses which proteins get a ubiquitin tag. Humans have about 600 of them, each recognizing its own set of proteins.',
    'CRL4': 'Cullin-RING ligase 4: a family of ubiquitin-tagging machines built on the scaffold protein cullin 4. Cereblon is one of its interchangeable "pickers".',
    'proteasome': 'The barrel-shaped protein shredder that destroys proteins carrying a ubiquitin chain.',
    'neosubstrate': 'A protein that an E3 ligase tags only when a drug is bound: a new victim created by the drug.',
    'molecular glue': 'A small molecule that sticks two proteins together that would not normally touch. Thalidomide and its cousins glue cereblon to specific proteins so they are destroyed.',
    'PROTAC': 'Proteolysis-targeting chimera: a two-headed molecule with one end that grabs a target protein and one that grabs an E3 ligase, joined by a linker, so the target is tagged and destroyed.',
    'targeted protein degradation': 'The drug strategy of eliminating a disease protein altogether, by steering it to the cell\'s own disposal system, rather than blocking it.',
    'transcription factor': 'A protein that switches genes on or off by binding DNA. Long considered "undruggable" because they lack a pocket for a drug to block.',
    'zinc finger': 'A small fold in a protein, held together by a zinc atom, often used to grip DNA. The proteins that thalidomide-type drugs destroy share a similar zinc-finger loop.',
    'IKZF1': 'Ikaros: a transcription factor that myeloma cells depend on. Lenalidomide makes cereblon destroy it.',
    'IKZF3': 'Aiolos: Ikaros\'s sister protein, also destroyed by lenalidomide and pomalidomide.',
    'IRF4': 'A transcription factor that keeps myeloma cells alive. Its levels fall when IKZF1 and IKZF3 are destroyed.',
    'SALL4': 'A transcription factor needed to build limbs, ears, eyes, heart and kidneys. Thalidomide makes cereblon destroy it in human (but not mouse) cells: the best current explanation of the birth defects.',
    'CK1α': 'Casein kinase 1 alpha. Lenalidomide makes cereblon destroy it, which is especially lethal to MDS cells that have lost one copy of its gene in del(5q).',
    'Duane-radial ray syndrome': 'A rare inherited condition caused by faulty SALL4, with missing thumbs, forearm defects, eye-movement problems and heart defects, strikingly like thalidomide damage.',
    'S.T.E.P.S.': 'System for Thalidomide Education and Prescribing Safety: Celgene\'s 1998 restricted-distribution program (registration of every prescriber, pharmacy and patient, pregnancy tests, two forms of contraception). The model for later REMS programs.',
    'compassionate use': 'Giving an unapproved drug to a seriously ill patient outside a trial, when there is no good alternative.',
    'wholesale acquisition cost': 'WAC: the manufacturer\'s list price to wholesalers, before rebates and discounts.',
    'contingent value right': 'A payment promised to a target company\'s shareholders if future milestones (such as approvals) are hit by a deadline.',
    'volume-limited license': 'A patent settlement term that lets a generic company sell only a capped share of the market until a later date.',
    'CREATES Act': 'A 2019 US law that lets generic makers sue brand companies that refuse to sell them samples, including samples held back under a REMS.',
    'phase 2': 'Trials in a few hundred patients (sometimes fewer) to see whether a drug seems to work and at what dose.',
  },
  sections: [
    // ---------------- 1. COLD OPEN ----------------
    {type: 'story', kicker: 'Cold open', title: 'Hamburg, November 1961', html: `
<p>In the autumn of 1961, a pediatrician and human geneticist in Hamburg named Widukind Lenz was doing detective work nobody had asked him to do. West German hospitals were seeing babies born with arms so short that the hands grew almost from the shoulders, with missing ears, with malformed hearts and bowels. One or two such children would have been a medical rarity. There were now hundreds. One pediatrician had publicly blamed nuclear weapons tests.</p>
<p>Lenz interviewed the mothers. Again and again, one name came up: Contergan, a sleeping pill so popular and so apparently harmless that it could be bought without a prescription. On November 15, 1961, he told Grünenthal, the company that made it, that he suspected the drug. Twelve days later, on November 27, Grünenthal took it off the market.</p>
<p>By then the damage was done. Most estimates put the number of babies born with thalidomide injuries at around 10,000 or more across more than 40 countries, roughly half of whom died in infancy. Nobody counted the pregnancies that ended in [[miscarriage]]. In the United States, where a new FDA reviewer named Frances Kelsey had refused for more than a year to approve the drug, 17 affected babies were confirmed.</p>
<p>That is the first half of this story, and it is the reason every drug you will ever work on is tested the way it is. The US requirement to prove that a drug works, informed consent in clinical trials, animal studies of pregnancy, national side-effect reporting systems: all were built or rebuilt in the shadow of thalidomide.</p>
<p>The second half is stranger. In 1964 a doctor in Jerusalem gave thalidomide to a leprosy patient who could not sleep, and the patient's skin lesions melted away. In the 1990s it turned out to fight [[multiple myeloma]], a blood cancer. A chemically tweaked version, [[lenalidomide]] (Revlimid), became one of the best-selling drugs in the world and anchored a $74 billion acquisition. And in 2010, 53 years after launch, a Japanese team finally found what the molecule binds. The answer, [[cereblon]], opened a new way to make medicines: not blocking a disease protein but making the cell destroy it.</p>
<p>This case asks you to hold both halves at once: a drug sold on assumptions instead of evidence, and a lesson in biological humility, since the property that maimed children in 1961 now keeps people with myeloma alive.</p>`},

    // ---------------- 2. THE PROMISE ----------------
    {type: 'story', kicker: 'The promise', title: 'A sleeping pill that seemed too safe to hurt anyone', html: `
<p>In the 1950s the standard sleeping pills were [[barbiturate|barbiturates]]: effective, but addictive and deadly in overdose. A sleeping pill that could not kill you would be a very good business.</p>
<p>At Chemie Grünenthal, a family-owned company in Stolberg near Aachen, the chemists Wilhelm Kunz and Herbert Keller first made thalidomide in early 1954, by the company's own account almost by chance, while working on derivatives of glutamic acid. In animal experiments it made the animals calm and drowsy, and the researchers could not find a dose that killed them. In the thinking of the time, a drug without a measurable [[LD50]] was about as safe as a drug could be. Grünenthal applied for a patent in May 1954.</p>
<p>On October 1, 1957, Grünenthal launched Contergan across West Germany as an [[over the counter]] sleeping and calming medicine, later also as syrup and suppositories. It sold very well. According to Grünenthal, about five million people in West Germany took it, around 300 million daily doses between 1957 and 1961. Through its own subsidiaries, distributors and licensees, the drug was sold in more than 40 countries under dozens of names: Softenon in Austria and Switzerland, Distaval in the United Kingdom and Australia (made under license by Distillers Biochemicals, part of the whisky company Distillers), and Kevadon in the planned American version, licensed to the Richardson-Merrell company of Cincinnati.</p>
<h3>Safe "for pregnant women and nursing mothers"</h3>
<p>Women found that the drug eased morning sickness as well as sleeplessness, and doctors prescribed or recommended it in early pregnancy. How the drug was promoted for that use differs by country and is still argued about. Grünenthal says it never recommended or advertised Contergan for morning sickness, and the German court that later heard the criminal case noted that there had been no explicit advertising for use in pregnancy. In Britain, Distillers' advertising was explicit. One Distaval advertisement, now held by the Science Museum in London, read: "Distaval can be given with complete safety to pregnant women and nursing mothers without adverse effect on mother or child."</p>
<p>That sentence is the core of the failure. Nobody had tested it. By Grünenthal's own account, it was not standard practice in the 1950s to test new drugs for harm to unborn children, and Contergan was not tested for that. According to Germany's federal Contergan Foundation, a university clinic that Grünenthal asked in 1957 to test the drug in pregnant women declined. The claim of safety in pregnancy was an inference from the absence of evidence.</p>
<aside class="note">Keep one idea in mind for the rest of the case: "we found no harm" and "we showed it is safe" are different statements. Almost every reform that followed thalidomide is a way of forcing the second one.</aside>`},

    // ---------------- 3. BIOLOGY FROM ZERO ----------------
    {type: 'story', kicker: 'The biology from zero', title: 'How an embryo builds an arm, and when it can be broken', html: `
<p>To see why a single sleeping pill could do so much damage, you need three facts about early pregnancy.</p>
<p><b>First, the body plan is laid down very early.</b> Between about the third and eighth weeks after fertilization, the [[embryo]] builds almost every organ it will ever have, often before a woman knows she is pregnant. Morning sickness, which usually starts around the fourth week, overlaps this period closely.</p>
<p><b>Second, each organ has its own short building phase.</b> An arm starts as a [[limb bud]], a small paddle of cells on the side of the embryo that appears about 26 days after fertilization; the leg buds follow about a day later. Signals at the tip of the bud lay down the pattern, shoulder first and fingers last, while a network of blood vessels grows in. Disrupt the process while it runs and the part being built is lost or malformed; before it starts or after it finishes, the same disruption does little.</p>
<p><b>Third, the embryo is not protected by the placenta the way people assumed.</b> In the 1950s many doctors believed the placenta acted as a barrier that kept drugs away from the baby. Some drugs are blocked; many, including thalidomide, cross freely.</p>
<h3>What thalidomide did</h3>
<p>Thalidomide acts during a [[sensitive window]] of roughly days 20 to 36 after fertilization, which is 34 to 50 days after the first day of the last menstrual period, the way pregnancy is usually dated. Reviews of the original German and British cases report that a single 50 mg tablet in that window could be enough. Researchers reconstructed the timing in the early 1960s by interviewing parents and their doctors and matching the dates of tablets to the defects the children had.</p>
<p>The signature injury was [[phocomelia]]: the long bones of the arms, and sometimes the legs, missing or very short, so that the hands or feet sat close to the body. Some children had [[amelia]], a limb missing entirely. Ears could be missing or malformed, with deafness; eyes could be small or damaged; faces could be partly paralyzed. Many children had damage to the heart, kidneys, bowel or genitals, and this internal damage is a large part of why so many died in the first months of life. Reviews put infant mortality among severely affected babies at 30 to 40%, and Grünenthal itself now says around half of the roughly 10,000 affected babies died at birth or soon after.</p>
<p>The timing explains the pattern. Early exposure, around days 20 to 24, tended to destroy the outer ear. Exposure from about day 24 damaged the arms, and from about day 27 the legs, because arm buds form slightly before leg buds. Thumbs could be affected over a longer span, from about day 24 into the early 30s. Use the explorer below to see the published ranges.</p>`},

    {type: 'explorer', title: 'The sensitive window', intro: 'Move the slider to a day of pregnancy (counted from fertilization) to see which structures were being built, and which defects were reported after exposure on that day. Ranges are approximate and come from the reconstructions of Lenz and later reviews.',
      inputs: [{id: 'd', label: 'Day after fertilization', min: 14, max: 44, value: 26, fmt: v => 'day ' + v}],
      compute(v) {
        const bands = [
          {n: 'Outer ear (missing ears, deafness)', a: 20, b: 24, c: 'il-2'},
          {n: 'Arms (phocomelia, amelia)', a: 24, b: 30, c: 'il-7'},
          {n: 'Hip dislocation', a: 24, b: 34, c: 'il-5'},
          {n: 'Legs', a: 27, b: 34, c: 'il-6'},
          {n: 'Thumbs', a: 24, b: 33, c: 'il-4', lab: '24 to after 31'},
        ];
        const W = 860, L = 250, R = 20, x0 = 14, x1 = 44, X = d => L + (W - L - R) * (d - x0) / (x1 - x0);
        let s = `<svg viewBox="0 0 ${W} 300" role="img" aria-label="Sensitive windows for thalidomide damage">`;
        s += `<rect x="${X(20)}" y="10" width="${X(36) - X(20)}" height="236" rx="8" class="il-7s"/>`;
        s += `<text x="${(X(20) + X(36)) / 2}" y="30" text-anchor="middle" class="il-text-2">whole sensitive window, days 20–36</text>`;
        bands.forEach((b, i) => {
          const y = 52 + i * 38, on = v.d >= b.a && v.d <= b.b;
          s += `<text x="${L - 12}" y="${y + 17}" text-anchor="end" class="il-text">${b.n}</text>`;
          s += `<rect x="${X(b.a)}" y="${y}" width="${X(b.b) - X(b.a)}" height="24" rx="12" class="${b.c}" opacity="${on ? 1 : 0.35}"/>`;
          s += `<text x="${X(b.b) + 8}" y="${y + 17}" class="il-small">${b.lab || (b.a + '–' + b.b)}</text>`;
        });
        for (let d = 14; d <= 44; d += 2) s += `<text x="${X(d)}" y="268" text-anchor="middle" class="il-small">${d}</text>`;
        s += `<text x="${(L + W - R) / 2}" y="292" text-anchor="middle" class="il-small">days after fertilization</text>`;
        s += `<line x1="${X(v.d)}" x2="${X(v.d)}" y1="8" y2="252" class="st-ink" stroke-width="2.5"/>`;
        s += '</svg>';
        const hit = bands.filter(b => v.d >= b.a && v.d <= b.b).map(b => b.n.replace(/ \(.*\)$/, '').toLowerCase());
        let t;
        if (v.d < 20) t = 'Before about day 20, the classic thalidomide malformations were not reported. That is not the same as safe: reviews note that early exposure can cause miscarriage, in people and in rats.';
        else if (v.d > 36) t = 'After about day 36 the main structures are laid down and the classic malformations were not seen. Reviews still caution that there is probably no truly safe time: animal studies found brain damage after late exposure.';
        else t = `Day ${v.d} after fertilization is about day ${v.d + 14} counted from the last menstrual period. On this day, exposure was linked to damage to: <b>${hit.length ? hit.join(', ') : 'eyes, inner ear and internal organs (outside the external-defect bands shown)'}</b>. Earlier exposure within the window generally meant more severe damage, including to internal organs such as the kidneys and heart.`;
        return s + `<p style="margin:.6em 0 0">${t}</p>`;
      }},

    {type: 'callout', variant: 'lesson', heading: 'Harm depends on timing, not just dose', html: `<p>Most toxicity is a matter of how much. Developmental toxicity is also a matter of <i>when</i>. A dose that does nothing on day 15 or day 40 can remove an arm on day 26. That is why modern reproductive studies expose animals across defined stages of pregnancy, and why drugs such as thalidomide, lenalidomide and isotretinoin (for acne) require regular pregnancy tests, not just a warning on the box.</p>`},

    // ---------------- 4. WARNING SIGNS ----------------
    {type: 'story', kicker: 'The warning signs', title: 'Four years of signals, read one way', html: `
<p>Fairness matters here. In the 1950s, drug laws in West Germany were minimal: approval to manufacture Contergan came from a state interior ministry in 1956, and nothing required a company to prove safety in pregnancy. Most drugs have side effects that surface only after millions of people take them. The question is not whether Grünenthal could have predicted birth defects in 1957. It is how the company and the system responded to signals as they arrived.</p>
<p>The first signal had nothing to do with pregnancy. From 1959, reports came in of nerve damage in people who had taken the drug for months: tingling, numbness and pain in the hands and feet, sometimes permanent. Doctors call this [[peripheral neuropathy]]. According to the Contergan Foundation, by the end of November 1961 about 1,500 doctors and pharmacists and more than 300 consumers had told Grünenthal about more than 3,000 cases. In March 1961, a Grünenthal letter to doctors linked the nerve damage to abuse of sleeping pills and alcohol. Neurologists disagreed publicly. Grünenthal added a warning to the German package insert in November 1960, and in May 1961 it applied for prescription-only status, which some German states introduced that summer and others never did before the withdrawal.</p>
<p>The nerve damage mattered for another reason. A drug that could damage nerves was, by definition, not "non-toxic". In early 1961, according to the Foundation's timeline, Distillers told Grünenthal that it had now found a lethal dose; the "harmless" claim could no longer be made. And, as you will see, an FDA reviewer in Washington read the same neuropathy reports and wondered what the drug might do to an embryo.</p>
<p>Signals about birth defects were scattered and easy to explain away. The first affected child was born in December 1956, before the launch. In September 1961 the pediatrician Hans-Rudolf Wiedemann published the first report of a wave of limb malformations in German newborns, without naming a cause. You can judge several of these signals yourself below.</p>
<p>After Lenz spoke up, events moved fast, but not smoothly. At a meeting at the North Rhine-Westphalia interior ministry on November 24, 1961, attended by Lenz, officials asked Grünenthal to withdraw all thalidomide products at once. According to the Foundation's account, the company refused, threatened to claim damages, and proposed instead a label saying "not to be taken during pregnancy". The same day, Grünenthal learned from Distillers that a doctor in Australia had raised the same suspicion. On November 26 the company told the health authority it would withdraw the drug, and on November 27 it did. Grünenthal's own account emphasizes that only twelve days passed between the first indication and the withdrawal, and that the court later called this a relatively short response for the time.</p>`},

    {type: 'custom', title: 'Spot the warning signs', intro: 'Here are eight things that happened between 1956 and 1961. For each, decide: was this a signal that should have changed what people did at the time, or only obvious in hindsight? Then reveal the verdicts.',
      html: `<div class="card"><div class="th-ws-list"></div><div style="margin-top:12px;display:flex;gap:10px;align-items:center;flex-wrap:wrap"><button class="btn primary th-ws-go">Reveal verdicts</button><span class="th-ws-score" style="font-size:15px;color:var(--ink-2)"></span></div></div>`,
      init(root, api) {
        const E = [
          {d: '1955–57', t: 'In animal tests, researchers cannot find a dose of thalidomide that kills rodents.', v: 's', x: 'A signal, but of the opposite of what people took from it. It showed only that rodents tolerate the drug, and nobody tested pregnant animals. Treating "no lethal dose" as proof of safety was the central error.'},
          {d: 'Dec 1956', t: 'A Grünenthal employee\'s child is born with malformations; his wife had taken a sample of the drug.', v: 'h', x: 'Only hindsight. One malformed baby is, sadly, not unusual, and no one linked it to the drug for years. Single cases rarely reveal a teratogen; clusters do.'},
          {d: '1959', t: 'A gynecologist tells Grünenthal he connects his own son\'s malformations with thalidomide.', v: 's', x: 'A real signal: a physician making a specific causal claim. It deserved follow-up, such as asking obstetric clinics about exposures. According to the Contergan Foundation timeline, it did not lead to action.'},
          {d: '1959–61', t: 'Thousands of reports of nerve damage in long-term users reach the company.', v: 's', x: 'A strong signal. It disproved "non-toxic", and a drug that damages developing nerves might damage developing tissue. The company\'s early response was to attribute it to misuse.'},
          {d: 'Dec 1960', t: 'A British doctor, Leslie Florence, reports nerve damage from the drug in a letter to the British Medical Journal.', v: 's', x: 'A signal that was acted on, in Washington. Frances Kelsey at the FDA read it and pressed the US licensee for data, including on use in pregnancy.'},
          {d: 'Early 1961', t: 'Distillers tells Grünenthal it has now measured a lethal dose.', v: 's', x: 'A signal. The core marketing premise, that the drug could not hurt anyone, was now false by the company\'s own licensee\'s measurements.'},
          {d: 'Sep 1961', t: 'A German pediatrician publishes a report of a rise in limb malformations in newborns, without naming a cause.', v: 's', x: 'A strong population-level signal. A sudden rise in a rare defect is exactly what a new teratogen produces. The missing step was linking it to exposures, which Lenz did within weeks.'},
          {d: 'Nov 24, 1961', t: 'At a ministry meeting, Grünenthal proposes adding "not to be taken in pregnancy" to the label instead of withdrawing.', v: 's', x: 'A signal about the organization, not the drug. A label cannot protect women who do not yet know they are pregnant, and the drug was sold without prescription in much of the country. Three days later it was withdrawn.'},
        ];
        const list = api.$('.th-ws-list', root), picks = {};
        E.forEach((e, i) => {
          const row = api.el('div', '', `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--rule)"><b style="min-width:92px;font-size:14px">${api.esc(e.d)}</b><div style="flex:1"><div style="font-size:15.5px;line-height:1.5">${api.esc(e.t)}</div><div class="th-ws-x" style="display:none;margin-top:6px;font-size:14.5px;color:var(--ink-2);line-height:1.5"></div></div><div style="display:flex;gap:6px;flex-wrap:wrap"><button class="btn" data-v="s">Signal</button><button class="btn" data-v="h">Hindsight</button></div></div>`);
          row.querySelectorAll('button').forEach(b => b.onclick = () => { picks[i] = b.dataset.v; row.querySelectorAll('button').forEach(x => x.setAttribute('aria-pressed', x === b)); });
          list.appendChild(row);
        });
        const st = document.createElement('style'); st.textContent = '.th-ws-list .btn[aria-pressed="true"]{background:var(--ink);color:var(--paper);border-color:var(--ink)}'; root.appendChild(st);
        api.$('.th-ws-go', root).onclick = () => {
          let right = 0;
          list.querySelectorAll('.th-ws-x').forEach((x, i) => { const ok = picks[i] === E[i].v; if (ok) right++; x.style.display = 'block'; x.innerHTML = `<b>${E[i].v === 's' ? 'Signal.' : 'Hindsight.'}</b> ${picks[i] ? (ok ? '(You agreed.) ' : '(You picked differently.) ') : ''}${api.esc(E[i].x)}`; });
          api.$('.th-ws-score', root).textContent = `You matched ${right} of ${E.length}. Most events were real signals; what was missing was a system that collected them and a duty to act.`;
        };
      }},

    // ---------------- 5. THE ALARM ----------------
    {type: 'story', kicker: 'The moment of failure', title: 'Two doctors, two continents, one conclusion', html: `
<p>Lenz was not the only one. In Sydney, the obstetrician William McBride had noticed severe malformations in babies born to mothers who had been given Distaval for morning sickness. Distillers, the drug's licensee in Australia, passed his concern on, and Grünenthal received a letter from Distillers about it on November 24, 1961. McBride's short letter, "Thalidomide and congenital abnormalities", appeared in <i>The Lancet</i> in December 1961. Lenz published his own analysis in 1962. Between them, working independently, they had done what no system at the time was set up to do: link a cluster of rare defects to a specific exposure.</p>
<p>Withdrawal followed quickly once the link was public. Distillers withdrew Distaval in Britain on December 2, 1961, and within months the drug was off the market in most countries, though not everywhere at once: in some countries, including Canada, sales continued into 1962. Only after the withdrawal did the scale become clear. The Contergan Foundation estimates that about 5,000 babies were born with thalidomide damage in West Germany, of whom about 2,800 survived. In Britain about 2,000 affected babies were born; around half died within months. In Austria, where the drug had been prescription-only from the start, relatively few affected children were born.</p>
<p>How many in total? The honest answer is that nobody knows precisely. The figure most often cited, by the FDA, the Contergan Foundation, Grünenthal and academic reviews, is about 10,000 or "more than 10,000" babies born with defects. Some estimates run higher. None includes miscarriages and stillbirths, which reviews believe were also increased and which were never counted. Many affected children who survived faced decades of surgery, prosthetics and discrimination, and as they age many face growing problems with health and mobility.</p>
<h3>A footnote about McBride</h3>
<p>McBride was celebrated for decades. In 1993 he was struck off the New South Wales medical register after a four-year inquiry by the state's Medical Tribunal found that he had published spurious results in 1982 from experiments on pregnant rabbits given the drug scopolamine, and had persisted in denying it. The finding concerned that later, unrelated research, not his 1961 observation about thalidomide, which has been confirmed many times. He was reinstated to the register in 1998. The episode is a reminder that credit for one discovery is not a certificate for all later work.</p>`},

    {type: 'callout', variant: 'numbers', heading: 'Thalidomide by the numbers', html: `<p><b>1 October 1957:</b> Contergan goes on sale in West Germany without prescription. <b>About 5 million</b> West Germans took it, <b>300 million</b> daily doses (Grünenthal). <b>More than 40 countries</b> sold it under various names. <b>About 10,000</b> babies born with thalidomide damage worldwide, most often cited as a minimum; <b>about 5,000</b> in West Germany and <b>about 2,000</b> in the UK. <b>30–50%</b> died in infancy. <b>5,000–6,000</b> survivors were alive worldwide in 2012 (BBC). <b>12 days</b> from Lenz's warning to withdrawal. <b>17</b> confirmed affected babies in the United States.</p>`},

    // ---------------- 6. THE US NEAR-MISS ----------------
    {type: 'story', kicker: 'The near miss', title: 'Frances Kelsey\'s first assignment', html: `
<p>In September 1960, Richardson-Merrell submitted a New Drug Application to the FDA to sell thalidomide in the United States as Kevadon. It went to a medical officer who had joined the agency one month earlier. It was her first drug review.</p>
<p>Frances Oldham Kelsey was a Canadian-born pharmacologist and physician. She had earned a PhD at the University of Chicago, where in 1937 she helped investigate the Elixir Sulfanilamide disaster (a drug dissolved in a toxic solvent that killed more than 100 people and led to the 1938 law requiring proof of safety). During wartime malaria research she had learned that rabbits broke down quinine quickly, that pregnant rabbits did so more slowly, and that rabbit embryos could not break it down at all. Drugs, she knew, could cross into an embryo and behave differently there.</p>
<p>Under the law of the time, the FDA had 60 days to act on an application; if it did nothing, the drug was automatically approved. If the reviewer declared the application incomplete, the company had to resubmit, and the clock restarted. Kelsey, with a pharmacologist and a chemist on the review, found the file thin. The chronic toxicity studies were not long enough, the data on absorption and excretion were inadequate, and manufacturing controls had gaps. "The clinical reports were more on the nature of testimonials," she later told <i>FDA Consumer</i>, "rather than the results of well-designed, well-executed studies."</p>
<p>The company pushed back. Its representative, Dr. Joseph Murray, called and visited repeatedly and complained to her superiors that she was being unreasonable. Kelsey recalled being told that the company wanted the drug on the market before Christmas, the best season for sleeping pills. In December 1960 a letter from a British doctor, Leslie Florence, in the <i>British Medical Journal</i> described nerve damage in long-term users. Kelsey asked the company for more data on this, and, thinking back to her quinine work, began to wonder what a drug that damaged nerves might do to a fetus. According to Germany's Contergan Foundation, in September 1961 the FDA told the company that any approval would have to carry a warning against use in pregnancy, because no studies existed. The application was still pending when Lenz raised the alarm. Richardson-Merrell withdrew it in March 1962.</p>`},

    {type: 'decision', title: 'You are the FDA reviewer', role: 'FDA medical officer, Washington, late 1960', scenario: 'Kevadon is already sold in dozens of countries and widely described as one of the safest sedatives ever made. No one has died of an overdose. The file is thin, but there is no evidence of serious harm except a new letter describing nerve damage in long-term users. The company calls you constantly and your superiors are hearing complaints. Under current law, if you do nothing for 60 days the drug is approved. What do you do?', options: [
      {label: 'Approve it. Millions of people have used it abroad without deaths, the law only requires evidence of safety, and delaying a widely used drug on paperwork grounds is hard to justify.', outcome: 'This is what regulators in most countries effectively did, and by 1960 standards it was defensible: foreign use looked like a huge safety database. But nobody in that database had been looking for birth defects, and the babies being born abroad had not yet been linked to the drug. You would have approved it months before the alarm.'},
      {label: 'Approve it, but add a warning about nerve damage with long-term use.', outcome: 'A reasonable-sounding compromise that addresses the signal in front of you. It would not have protected a single embryo, because nothing in the label would have discouraged use in early pregnancy, and the drug would have been on American shelves when the European cases peaked.'},
      {label: 'Declare the application incomplete again and ask for longer toxicity studies and better absorption data. It restarts the clock, angers the company and your managers, and may look like obstruction of a drug the world already uses.', outcome: 'This is what Kelsey did, repeatedly, for more than a year. It looked like bureaucratic stubbornness at the time. It meant the drug was still unapproved when the link to birth defects was made.'},
    ], reality: 'Kelsey kept asking for data until the European evidence arrived, and Richardson-Merrell withdrew its application in March 1962. On July 15, 1962, a front-page story by Morton Mintz in <i>The Washington Post</i> made her a national figure, and on August 7, 1962, President John F. Kennedy gave her the President\'s Award for Distinguished Federal Civilian Service. But the United States was not untouched: see below.'},

    {type: 'story', title: 'The part of the story that was not a near miss', html: `
<p>While Kelsey held the application, Richardson-Merrell ran what it called an [[investigational drug|investigational]] program. According to the FDA's own account, the company distributed more than 2.5 million thalidomide tablets to more than 1,000 American doctors, who gave the drug to nearly 20,000 patients, several hundred of them pregnant women. Nothing in the law of the time required the patients to be told they were receiving an experimental drug, or required the doctors to keep records. When the alarm came, FDA field staff tracked down the doctors and urged them to contact their patients, but not all had kept records, and the FDA said it was unlikely that all the women were reached. Seventeen American children were confirmed to have thalidomide-associated defects, with more suspected.</p>
<p>So the US escaped a disaster not because its rules were good, but because one reviewer used the little discretion they gave her. The "trials" through which the drug reached American women were marketing by another name, and that gap is what the next law went after.</p>`},

    {type: 'callout', variant: 'product', heading: 'An unconsented beta program', html: `<p>Merrell's "investigational" program looks a lot like a growth team's seeding strategy: put the product in the hands of influential users (doctors) before launch, build familiarity, and collect testimonials. Kelsey noticed that the reports she received read like testimonials, not data. Many software launches still blur the line between a beta test and early marketing.</p><p><b>Where the analogy breaks:</b> beta users of software can see the product and opt out. Patients given Kevadon did not know they were in a test, could not weigh the risk, and the harm, to a third person who had no say at all, could not be rolled back. That is why the 1962 law made informed consent and controlled investigation a condition of testing drugs in people, not a courtesy.</p>`},

    {type: 'callout', variant: 'whatif', heading: 'What if Kevadon had been approved in 1960?', html: `<p>The drug would have been on American pharmacy shelves for about a year before the link was made, in a country of 180 million people with heavy use of sedatives. Mintz's 1962 article spoke of what "could have been an appalling American tragedy, the birth of hundreds or indeed thousands of armless and legless children." Nobody can know the real number; the European experience suggests it would have been large. It is also likely that the 1962 law would have passed anyway, with a different hero and more grief behind it.</p>`},

    // ---------------- 7. TIMELINE ----------------
    {type: 'timeline', title: 'Timeline: two lives of one molecule', intro: 'The first era runs from synthesis to withdrawal and reform (1954–1973); the second from a leprosy ward to molecular glues (1964–2026). Filter by kind of event.', events: [
      {year: 1954, title: 'Thalidomide synthesized at Grünenthal', kind: 'science', text: 'Wilhelm Kunz and Herbert Keller make it while working on glutamic acid derivatives; patent filed in May 1954.'},
      {year: 1956, date: 'Dec 1956', title: 'First affected child born', kind: 'people', text: 'The child of a Grünenthal employee who had taken a sample home. The link was made only years later.'},
      {year: 1957, date: 'Oct 1, 1957', title: 'Contergan launched without prescription', kind: 'business', text: 'Sold across West Germany as a sleeping and calming medicine; soon licensed or distributed in more than 40 countries.'},
      {year: 1959, title: 'Reports of nerve damage begin', kind: 'setback', text: 'By late 1961, more than 3,000 cases had been reported to Grünenthal.'},
      {year: 1960, date: 'Sep 1960', title: 'Kevadon application reaches the FDA', kind: 'regulatory', text: 'Assigned to Frances Kelsey, one month into her FDA job.'},
      {year: 1961, date: 'Nov 15, 1961', title: 'Lenz warns Grünenthal', kind: 'people', text: 'Widukind Lenz tells the company he suspects Contergan of causing malformations.'},
      {year: 1961, date: 'Nov 27, 1961', title: 'Contergan withdrawn in West Germany', kind: 'setback', text: 'Distillers withdraws Distaval in the UK on December 2. McBride\'s letter appears in The Lancet in December.'},
      {year: 1962, date: 'Aug 7, 1962', title: 'Kennedy honors Kelsey', kind: 'people', text: 'President\'s Award for Distinguished Federal Civilian Service.'},
      {year: 1962, date: 'Oct 10, 1962', title: 'Kefauver–Harris Amendments signed', kind: 'regulatory', text: 'Proof of efficacy, informed consent, adverse-event reporting.'},
      {year: 1964, title: 'Sheskin sees thalidomide clear leprosy lesions', kind: 'clinical', text: 'Jacob Sheskin in Jerusalem gives it as a sedative to a patient with ENL; the skin lesions resolve within about two days. Reported in 1965.'},
      {year: 1970, date: 'Apr 10, 1970', title: 'German settlement', kind: 'business', text: 'During a criminal trial that opened in 1968, Grünenthal agrees to pay DM 100 million; the case is discontinued in December without a verdict.'},
      {year: 1973, title: 'UK Thalidomide Trust founded', kind: 'people', text: 'After a £20 million settlement between Distillers and 429 survivors.'},
      {year: 1991, date: 'Mar 1991', title: 'Kaplan: thalidomide lowers TNF', kind: 'science', text: 'Gilla Kaplan\'s lab at Rockefeller University shows it selectively cuts TNF production by immune cells.'},
      {year: 1994, date: 'Apr 1994', title: 'Folkman lab: thalidomide blocks blood-vessel growth', kind: 'science', text: 'Robert D\'Amato and Judah Folkman report anti-angiogenic activity in rabbits.'},
      {year: 1998, date: 'Jul 16, 1998', title: 'FDA approves Thalomid for ENL', kind: 'regulatory', text: 'With the S.T.E.P.S. restricted-distribution program.'},
      {year: 1999, date: 'Nov 18, 1999', title: 'Arkansas myeloma study in NEJM', kind: 'clinical', text: '32% of 84 patients with refractory myeloma respond to thalidomide alone.'},
      {year: 2005, date: 'Dec 27, 2005', title: 'Revlimid approved for del(5q) MDS', kind: 'regulatory'},
      {year: 2006, date: 'Jun 29, 2006', title: 'Revlimid approved for myeloma', kind: 'regulatory', text: 'Thalomid gets a myeloma approval a month earlier, on May 25.'},
      {year: 2010, date: 'Mar 2010', title: 'Cereblon identified as the target', kind: 'science', text: 'Takumi Ito, Hiroshi Handa and colleagues, Science.'},
      {year: 2012, date: 'Aug 31, 2012', title: 'Grünenthal apologizes', kind: 'people', text: 'First public apology, for 50 years of silence. Survivor groups call it inadequate.'},
      {year: 2014, date: 'Jan 2014', title: 'The glue mechanism revealed', kind: 'science', text: 'Ebert and Kaelin labs: lenalidomide makes cereblon destroy IKZF1 and IKZF3.'},
      {year: 2018, title: 'SALL4 linked to the birth defects', kind: 'science', text: 'Two groups show thalidomide makes human, but not mouse, cereblon destroy SALL4.'},
      {year: 2019, date: 'Nov 20, 2019', title: 'Bristol Myers Squibb completes Celgene deal', kind: 'business', text: 'Announced in January at about $74 billion.'},
      {year: 2022, date: 'Mar 2022', title: 'Generic lenalidomide enters the US', kind: 'business', text: 'Under volume-limited licenses from patent settlements; unlimited entry from January 31, 2026.'},
      {year: 2026, date: 'May 1, 2026', title: 'First PROTAC degrader approved', kind: 'regulatory', text: 'Vepdegestrant (Veppanu), which uses a thalidomide-like piece to recruit cereblon.'},
    ]},

    // ---------------- 8. POST-MORTEM: SPECIES ----------------
    {type: 'story', kicker: 'The post-mortem', title: 'Why the animal tests would have missed it', tocTitle: 'Why animal tests missed it', html: `
<p>A common version of the story says thalidomide would have been caught if only it had been tested in pregnant animals. The truth is more uncomfortable. Grünenthal did not test it in pregnant animals, and in hindsight it should have. But if it had used the obvious species, it would probably have been reassured.</p>
<p>Rats and mice, the workhorses of toxicology, are strikingly resistant to thalidomide. A 2020 review by Hiroshi Handa's group notes that thalidomide did not cause limb defects in rats even at doses up to 4,000 milligrams per kilogram, thousands of times the human dose. After the disaster, researchers found that some rabbit strains, and monkeys, develop the same kinds of limb defects that human babies had. Chick and zebrafish embryos also show limb or fin defects in the laboratory, which made them useful research models later.</p>
<p>For fifty years nobody could explain the difference. The explanation arrived only in 2018, and it comes from the mechanism you will meet later in this case: thalidomide causes the destruction of a protein called [[SALL4]] in human, primate and rabbit cells, but mouse SALL4 differs at a key spot and escapes. Rodents were never going to be a good model for this particular drug.</p>
<p>The lesson regulators drew was not "test in rabbits". It was that a single species tells you about that species. After thalidomide, [[reproductive toxicity study|reproductive toxicity studies]] became a routine requirement before approval in Germany, the US, the UK and elsewhere, and they typically use a rodent and a non-rodent species, often the rabbit. Even so, a negative animal result is still treated as weak reassurance, which is why drugs with any suspicion of harm in pregnancy carry warnings until human data exist.</p>`},

    {type: 'figure', title: 'Same drug, different species', intro: 'How sensitive each species is to thalidomide\'s effects on the embryo. Hover or tap a row.',
      svg: `<svg viewBox="0 0 900 400" role="img" aria-label="Species sensitivity to thalidomide">
        <text x="210" y="30" class="il-title">Sensitivity to limb defects</text>
        <text x="620" y="30" class="il-title">Does thalidomide destroy SALL4?</text>
        <g data-part="human">
          <rect x="20" y="50" width="860" height="56" rx="14" class="il-paper il-line"/>
          <text x="40" y="84" class="il-title">Humans</text>
          <rect x="210" y="66" width="340" height="24" rx="12" class="il-8s"/><rect x="210" y="66" width="340" height="24" rx="12" class="il-7"/>
          <text x="380" y="83" text-anchor="middle" class="il-white">very high: one 50 mg tablet can suffice</text>
          <text x="620" y="84" class="il-text">Yes</text>
        </g>
        <g data-part="monkey">
          <rect x="20" y="116" width="860" height="56" rx="14" class="il-paper il-line"/>
          <text x="40" y="150" class="il-title">Monkeys</text>
          <rect x="210" y="132" width="340" height="24" rx="12" class="il-8s"/><rect x="210" y="132" width="290" height="24" rx="12" class="il-7"/>
          <text x="355" y="149" text-anchor="middle" class="il-white">high: phocomelia and amelia</text>
          <text x="620" y="150" class="il-text">Yes (primate cells)</text>
        </g>
        <g data-part="rabbit">
          <rect x="20" y="182" width="860" height="56" rx="14" class="il-paper il-line"/>
          <text x="40" y="216" class="il-title">Rabbits</text>
          <rect x="210" y="198" width="340" height="24" rx="12" class="il-8s"/><rect x="210" y="198" width="210" height="24" rx="12" class="il-2"/>
          <text x="315" y="215" text-anchor="middle" class="il-white">sensitive (some strains)</text>
          <text x="620" y="216" class="il-text">Yes</text>
        </g>
        <g data-part="lab">
          <rect x="20" y="248" width="860" height="56" rx="14" class="il-paper il-line"/>
          <text x="40" y="282" class="il-title">Chick, zebrafish</text>
          <rect x="210" y="264" width="340" height="24" rx="12" class="il-8s"/><rect x="210" y="264" width="160" height="24" rx="12" class="il-4"/>
          <text x="290" y="281" text-anchor="middle" class="il-text">lab models</text>
          <text x="620" y="282" class="il-text">Not in fish; other routes likely</text>
        </g>
        <g data-part="rodent">
          <rect x="20" y="314" width="860" height="56" rx="14" class="il-paper il-line"/>
          <text x="40" y="348" class="il-title">Rats, mice</text>
          <rect x="210" y="330" width="340" height="24" rx="12" class="il-8s"/><rect x="210" y="330" width="34" height="24" rx="12" class="il-3"/>
          <text x="256" y="347" class="il-text">resistant: no limb defects</text>
          <text x="620" y="348" class="il-text">No: mouse SALL4 escapes</text>
        </g>
        <text x="450" y="392" text-anchor="middle" class="il-small">Bar lengths are qualitative rankings from published reviews, not measured doses.</text>
      </svg>`,
      hotspots: {
        human: {title: 'Humans', text: 'The most sensitive species known. Reviews of the 1960s cases report that a single 50 mg tablet during the [[sensitive window]] could cause defects. Human [[cereblon]] bound to thalidomide recognizes human [[SALL4]] and tags it for destruction.'},
        monkey: {title: 'Monkeys', text: 'Primates develop both [[phocomelia]] and [[amelia]] after exposure, and thalidomide degrades SALL4 in primate cells (Donovan et al., 2018). Monkeys became part of the post-disaster testing toolkit for drugs of special concern.'},
        rabbit: {title: 'Rabbits', text: 'Some rabbit strains develop limb defects, and a 2018 Celgene study found SALL4 was degraded in rabbit embryos (Matyskiela et al.). Rabbits became the usual non-rodent species in reproductive toxicity testing. Kelsey\'s own wartime research had been in rabbits.'},
        lab: {title: 'Chick and zebrafish embryos', text: 'These embryos show limb or fin defects in the laboratory and were used in the 2010 experiments that proved cereblon matters. But thalidomide does not degrade fish SALL4 (Donovan et al., 2018), so other targets, such as the protein p63, probably contribute in these models.'},
        rodent: {title: 'Rats and mice', text: 'Resistant: no limb defects in rats even at 4,000 mg/kg, according to a 2020 review. Even mice engineered to carry human cereblon did not get the birth defects (Matyskiela et al., 2018), because mouse SALL4 differs at the key spot. The standard toxicology species were the wrong model for this drug.'},
      },
      caption: 'Sources: Asatsuma-Okumura, Ito and Handa, 2020; Donovan et al., eLife 2018; Matyskiela et al., Nature Chemical Biology 2018; Vargesson, 2015.'},

    {type: 'callout', variant: 'product', heading: 'A staging environment that does not match production', html: `<p>Engineers know the bug that passes every test in staging and breaks in production because staging runs a different database version. Animal studies are drug development's staging environment: indispensable, but a model of the real system, not the system. Thalidomide passed the environment it was tested in (non-pregnant rodents), and the environment it was never tested in (pregnant humans) was the one that mattered.</p><p><b>Where the analogy breaks:</b> you can make staging identical to production by copying it. You cannot make a mouse into a human, and you cannot test in pregnant women first. Drug developers can only stack imperfect models (several species, human cells, stem-cell embryo models) and then watch real-world use closely, which is why post-market surveillance matters as much as pre-market tests.</p>`},

    // ---------------- 9. MIRROR MOLECULES ----------------
    {type: 'story', kicker: 'The chemistry', title: 'A molecule with a left and a right hand', html: `
<p>Thalidomide is a small molecule: two rings joined by a single bond. One half, the phthalimide, is flat. The other half, the glutarimide, contains one carbon atom attached to four different groups. A carbon like that is [[chiral]]: it can be arranged in two ways that are mirror images of each other, like your left and right hands. The two versions are called [[enantiomer|enantiomers]], labeled R and S.</p>
<p>Thalidomide has always been sold as a [[racemic]] mixture, 50% of each. In the late 1970s a German group reported experiments in rodents suggesting that the R form carried the sedative effect and the S form the birth defects. It became one of the most famous stories in chemistry, repeated in textbooks as a warning: if only Grünenthal had sold the "good" hand.</p>
<p>It would not have worked. First, the R form also causes defects in rabbits. Second, and decisively, the hydrogen atom on that chiral carbon is loosely held, and in water at body pH it comes off and goes back on from either side. The molecule flips between R and S. In 1995 Swedish researchers gave healthy volunteers pure R or pure S thalidomide and found rapid [[chiral inversion]] in the body, and concluded that any difference between the two forms would largely be abolished. Whatever you swallow, you end up with a mixture within hours.</p>
<p>Modern work adds a twist. In 2018 a Japanese team including Handa's group used a trick to stop the flipping (swapping the loose hydrogen for heavier deuterium) and showed that the S form binds [[cereblon]] about ten times more tightly than the R form, and causes more fin damage in zebrafish. So the old intuition was partly right about which hand is more dangerous, and completely wrong about whether you could sell only the other one.</p>`},

    {type: 'figure', title: 'The two hands of thalidomide', intro: 'The two enantiomers drawn as mirror images. Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 400" role="img" aria-label="R and S thalidomide as mirror images">
        <g data-part="mirror"><line x1="450" y1="40" x2="450" y2="360" class="il-line2 il-dash"/><text x="450" y="380" text-anchor="middle" class="il-text-2">mirror</text></g>
        <g data-part="phthal">
          <path d="M110 170 L144.6 190 L144.6 230 L110 250 L75.4 230 L75.4 190 Z" class="il-1s il-line2" stroke-linejoin="round"/>
          <path d="M144.6 190 L182.6 177.6 L206.1 210 L182.6 242.4 L144.6 230" class="il-1s il-line2" stroke-linejoin="round"/>
          <path d="M114 181 L133 192 M133 228 L114 239 M83 221 L83 199" class="il-line2" fill="none"/>
          <path d="M182.6 177.6 L192 144 M188 176 L197 145" class="il-line2" fill="none"/><text x="196" y="138" class="il-text">O</text>
          <path d="M182.6 242.4 L192 276 M188 244 L197 275" class="il-line2" fill="none"/><text x="196" y="294" class="il-text">O</text>
          <text x="208" y="232" class="il-text">N</text>
        </g>
        <g data-part="phthal">
          <path d="M790 170 L755.4 190 L755.4 230 L790 250 L824.6 230 L824.6 190 Z" class="il-1s il-line2" stroke-linejoin="round"/>
          <path d="M755.4 190 L717.4 177.6 L693.9 210 L717.4 242.4 L755.4 230" class="il-1s il-line2" stroke-linejoin="round"/>
          <path d="M786 181 L767 192 M767 228 L786 239 M817 221 L817 199" class="il-line2" fill="none"/>
          <path d="M717.4 177.6 L708 144 M712 176 L703 145" class="il-line2" fill="none"/><text x="694" y="138" class="il-text">O</text>
          <path d="M717.4 242.4 L708 276 M712 244 L703 275" class="il-line2" fill="none"/><text x="694" y="294" class="il-text">O</text>
          <text x="680" y="232" class="il-text">N</text>
        </g>
        <g data-part="glut">
          <path d="M206.1 210 L246 210" class="il-line2"/>
          <path d="M246 210 L266 175.4 L306 175.4 L326 210 L306 244.6 L266 244.6 Z" class="il-2s il-line2" stroke-linejoin="round"/>
          <path d="M266 175.4 L256 142 M272 174 L262 141" class="il-line2" fill="none"/><text x="244" y="134" class="il-text">O</text>
          <path d="M326 210 L360 210 M326 216 L360 216" class="il-line2" fill="none"/><text x="364" y="218" class="il-text">O</text>
          <text x="296" y="166" class="il-text">NH</text>
        </g>
        <g data-part="glut">
          <path d="M693.9 210 L654 210" class="il-line2"/>
          <path d="M654 210 L634 175.4 L594 175.4 L574 210 L594 244.6 L634 244.6 Z" class="il-2s il-line2" stroke-linejoin="round"/>
          <path d="M634 175.4 L644 142 M628 174 L638 141" class="il-line2" fill="none"/><text x="644" y="134" class="il-text">O</text>
          <path d="M574 210 L540 210 M574 216 L540 216" class="il-line2" fill="none"/><text x="522" y="218" class="il-text">O</text>
          <text x="582" y="166" class="il-text">NH</text>
        </g>
        <g data-part="chiral">
          <circle cx="246" cy="210" r="9" class="il-4"/>
          <path d="M246 210 L230 250 L240 252 Z" class="il-line2" style="fill:var(--il-line)"/>
          <text x="222" y="270" class="il-text">H</text>
        </g>
        <g data-part="chiral">
          <circle cx="654" cy="210" r="9" class="il-4"/>
          <path d="M654 210 L670 250 L660 252 Z" class="il-line2" style="fill:var(--il-line)"/>
          <text x="666" y="270" class="il-text">H</text>
        </g>
        <text x="210" y="60" text-anchor="middle" class="il-title">(R)-thalidomide</text>
        <text x="210" y="80" text-anchor="middle" class="il-text-2">linked to sedation in human studies</text>
        <text x="690" y="60" text-anchor="middle" class="il-title">(S)-thalidomide</text>
        <text x="690" y="80" text-anchor="middle" class="il-text-2">binds cereblon about 10x more tightly</text>
        <path d="M300 320 C 380 350 520 350 600 320" class="il-line2 flow" fill="none"/>
        <path d="M590 314 L602 320 L592 330" class="il-line2" fill="none"/>
        <path d="M310 326 L298 320 L308 312" class="il-line2" fill="none"/>
        <rect x="345" y="296" width="210" height="26" rx="8" class="il-bg"/><text x="450" y="314" text-anchor="middle" class="il-text">flip in the body within hours</text>
      </svg>`,
      hotspots: {
        phthal: {title: 'Phthalimide (the flat half)', text: 'When the drug sits in [[cereblon]], this half sticks out and changes cereblon\'s surface. Chemists later swapped groups on this ring to make [[lenalidomide]] (an added amino group, one less oxygen) and [[pomalidomide]] (an added amino group). Small changes here change which proteins get glued.'},
        glut: {title: 'Glutarimide (the ring that docks)', text: 'This ring slides into a pocket in cereblon lined by three tryptophan amino acids. Every cereblon-binding drug, including modern degraders, keeps a version of it.'},
        chiral: {title: 'The chiral carbon and its loose hydrogen', text: 'The carbon joining the two halves has four different groups, so it has a handedness. Its hydrogen comes off easily at body pH, and when it returns from the other side the molecule has flipped. Swedish volunteers given pure R or pure S thalidomide had both forms in their blood within hours (Eriksson et al., 1995).'},
        mirror: {title: 'Mirror images', text: 'The two forms have identical atoms and bonds, like left and right gloves. Proteins are themselves handed, so they can tell the two apart, which is why the S form binds cereblon more tightly.'},
      },
      caption: 'Simplified skeletal drawings: ring corners are carbon atoms; hydrogens on ring carbons are omitted. The wedge shows the hydrogen on the chiral carbon pointing toward the viewer.'},

    {type: 'explorer', title: 'Try to sell only one hand', intro: 'Pick which pure enantiomer a patient swallows and watch what is in the blood over the following hours. Uses the average rate constants measured in healthy volunteers (Eriksson et al., Chirality 1995); a simplified two-compartment model, for illustration.',
      inputs: [
        {id: 'start', label: 'The pill contains', min: 0, max: 1, value: 0, fmt: v => v ? 'pure S' : 'pure R'},
        {id: 'h', label: 'Hours after the dose', min: 0, max: 24, value: 4, fmt: v => v + ' h'},
      ],
      compute(v) {
        const kRS = 0.17, kSR = 0.12, kR = 0.079, kS = 0.24, dt = 0.01;
        let R = v.start ? 0 : 1, S = v.start ? 1 : 0;
        for (let t = 0; t < v.h - 1e-9; t += dt) { const dR = -kRS * R + kSR * S - kR * R, dS = kRS * R - kSR * S - kS * S; R += dR * dt; S += dS * dt; }
        const tot = R + S, fS = S / tot, W = 820, bw = 640, x0 = 150;
        let s = `<svg viewBox="0 0 ${W} 190" role="img" aria-label="Share of each enantiomer in blood">`;
        s += `<text x="${x0 - 12}" y="52" text-anchor="end" class="il-text">in the blood</text>`;
        s += `<rect x="${x0}" y="30" width="${bw * (1 - fS)}" height="36" rx="6" class="il-1"/>`;
        s += `<rect x="${x0 + bw * (1 - fS)}" y="30" width="${bw * fS}" height="36" rx="6" class="il-2"/>`;
        if (1 - fS > 0.12) s += `<text x="${x0 + 10}" y="53" class="il-white">R ${Math.round((1 - fS) * 100)}%</text>`;
        if (fS > 0.12) s += `<text x="${x0 + bw - 10}" y="53" text-anchor="end" class="il-white">S ${Math.round(fS * 100)}%</text>`;
        s += `<text x="${x0 - 12}" y="122" text-anchor="end" class="il-text">drug left</text>`;
        s += `<rect x="${x0}" y="100" width="${bw}" height="36" rx="6" class="il-8s"/><rect x="${x0}" y="100" width="${bw * tot}" height="36" rx="6" class="il-3"/>`;
        s += `<text x="${x0 + Math.max(bw * tot, 0) + 10}" y="123" class="il-text">${Math.round(tot * 100)}% of the dose</text>`;
        s += `<text x="${x0}" y="170" class="il-small">Blue = R form, orange = S form. Share shown is of the drug still present.</text></svg>`;
        const other = v.start ? 'R' : 'S', pct = Math.round((v.start ? 1 - fS : fS) * 100);
        const msg = v.h === 0 ? 'At the moment of swallowing, the pill is pure. Move the hours slider.' : `After ${v.h} hour${v.h === 1 ? '' : 's'}, about <b>${pct}%</b> of the thalidomide in the blood is the ${other} form, even though the pill contained none. ${v.h >= 8 ? 'The mixture is approaching its steady ratio, whatever you started with.' : ''}`;
        return s + `<p style="margin:.4em 0 0">${msg} This is why a single-enantiomer thalidomide would not have prevented the birth defects.</p>`;
      }},

    {type: 'callout', variant: 'misconception', heading: '"The disaster happened because they sold the wrong mirror image"', html: `<p>This is one of the most repeated stories in chemistry classes, and it is wrong in the way that matters. The two forms interconvert in the body within hours, and the R form also causes defects in rabbits. A pure "safe" enantiomer would have become a mixture after swallowing. What actually caused the disaster was simpler and more general: a drug was marketed as safe in pregnancy without anyone testing whether it was.</p><p>Chirality does matter for many other drugs whose mirror images are stable (esomeprazole, the single-enantiomer version of omeprazole, is one). Thalidomide is the exception that makes the rule harder to apply.</p>`},

    // ---------------- 10. THE LAW ----------------
    {type: 'story', kicker: 'What the field changed', title: 'The 1962 law, and a bill that almost died', html: `
<p>It is tempting to think Congress wrote the modern drug law in response to thalidomide. In fact the bill already existed, and it had been gutted. Senator Estes Kefauver of Tennessee had held 17 months of hearings on drug prices, beginning in late 1959. His bill, S.1552, would have required proof that drugs worked, given the FDA oversight of prescription-drug advertising, and, most controversially, forced companies to license important drugs to competitors after three years and denied patents to minor "me-too" modifications unless they were clearly better. As historians Jeremy Greene and Scott Podolsky recount, the patent provisions provoked fierce opposition; in June 1962 the Kennedy administration and industry offered a weaker alternative, and the bill looked dead.</p>
<p>Then came Mintz's story about Kelsey in July 1962 and a wave of coverage of the European babies. Public outrage revived the bill. President Kennedy signed the [[Kefauver–Harris Amendments]] on October 10, 1962. They did four big things:</p>
<ul>
<li><b>Proof of efficacy.</b> For the first time, companies had to show that a new drug works, through "adequate and well-controlled investigations", not just that it is safe. This is the legal root of the phase 1, 2 and 3 trial sequence.</li>
<li><b>Control of testing in people.</b> The FDA gained power over investigational drugs, leading to the modern [[IND]] system: permission, protocols and records before a drug is given to people.</li>
<li><b>[[informed consent|Informed consent]].</b> People in drug trials had to be told they were getting an experimental drug and agree to it.</li>
<li><b>Side-effect reporting.</b> Companies had to report adverse reactions to the FDA.</li>
</ul>
<p>The law also ended automatic approval after 60 days of inaction, and it reached backward: the [[DESI]] program re-reviewed drugs approved between 1938 and 1962, and by the early 1970s about 600 had been classed as ineffective and removed. Kelsey herself was made head of the FDA branch created to oversee investigational drugs.</p>
<p>What was left out also matters. The compulsory licensing and comparative-effectiveness provisions died. Proving efficacy made development slower and more expensive, critics later blamed a "drug lag" behind Europe, and in 1984 the Hatch–Waxman Act extended patent terms in exchange for an easier path for generics: the opposite of the patent reform Kefauver had wanted.</p>
<p>Other countries moved too. Britain set up a Committee on Safety of Drugs in 1963, launched the [[Yellow Card scheme]] for reporting suspected side effects in 1964, and passed the Medicines Act in 1968. The European Economic Community required authorization before marketing from 1965, and West Germany made reproductive toxicity testing mandatory. The table after the next figure summarizes the changes.</p>`},

    {type: 'decision', title: 'Design the 1962 law', role: 'Senate committee staff, summer 1962', scenario: 'The thalidomide story has broken. Your senator has one chance to turn outrage into law, and the votes are there for something, but not for everything. Industry is fighting hardest against anything that touches patents. Which package do you push?', options: [
      {label: 'Close the loophole that hurt Americans: control investigational drugs, require consent and records, and give the FDA more time. Leave the approval standard (safety only) alone.', outcome: 'This fixes what actually went wrong in the US and passes easily. But it leaves the market full of drugs that were never shown to work, and future reviewers without the power to demand evidence of benefit to weigh against risk. Kelsey\'s victory relied on the burden being on the company; this package does not strengthen that burden much.'},
      {label: 'Add proof of efficacy from "adequate and well-controlled investigations" to the safety fixes, and let the patent reforms go.', outcome: 'This is roughly what passed. It created the modern clinical-trial system: benefit must be demonstrated, so risk can be weighed against it. The costs were real: development became slower and more expensive, and the patent and pricing questions Kefauver raised were left for later.'},
      {label: 'Hold out for the whole Kefauver package: efficacy, advertising control, compulsory licensing after three years, and patents only for clear improvements.', outcome: 'This would have tackled prices as well as safety, and many of today\'s debates about me-too drugs and patent thickets trace back to its defeat. But in 1962 it had already lost the administration\'s support once. Holding out risked getting nothing at all.'},
    ], reality: 'The law signed on October 10, 1962 required proof of efficacy, informed consent, adverse-event reporting and FDA control of investigational drugs, and moved prescription-drug advertising oversight to the FDA. Compulsory licensing and comparative-effectiveness requirements were dropped. Greene and Podolsky argue that the price and patent problems Kefauver raised never went away, which you will see again in the Revlimid part of this story.'},

    {type: 'figure', title: 'Before and after thalidomide', intro: 'The path from lab to patient for a new drug in the US, around 1957 and after the 1962 law and the regulations that followed. Hover or tap each stage.',
      svg: `<svg viewBox="0 0 900 400" role="img" aria-label="Drug development path before and after 1962">
        <text x="20" y="36" class="il-title">Around 1957</text>
        <g data-part="old_animal"><rect x="20" y="52" width="170" height="64" rx="14" class="il-8s il-line"/><text x="105" y="80" text-anchor="middle" class="il-text">Short animal tests</text><text x="105" y="100" text-anchor="middle" class="il-small">no pregnancy studies</text></g>
        <path d="M194 84 H 226" class="il-line2" fill="none"/><path d="M220 78 L228 84 L220 90" class="il-line2" fill="none"/>
        <g data-part="old_invest"><rect x="232" y="52" width="200" height="64" rx="14" class="il-7s il-line"/><text x="332" y="80" text-anchor="middle" class="il-text">"Investigational" use</text><text x="332" y="100" text-anchor="middle" class="il-small">no consent, few records</text></g>
        <path d="M436 84 H 468" class="il-line2" fill="none"/><path d="M462 78 L470 84 L462 90" class="il-line2" fill="none"/>
        <g data-part="old_nda"><rect x="474" y="52" width="190" height="64" rx="14" class="il-8s il-line"/><text x="569" y="80" text-anchor="middle" class="il-text">Application: safety</text><text x="569" y="100" text-anchor="middle" class="il-small">approved if FDA silent 60 days</text></g>
        <path d="M668 84 H 700" class="il-line2" fill="none"/><path d="M694 78 L702 84 L694 90" class="il-line2" fill="none"/>
        <g data-part="old_market"><rect x="706" y="52" width="174" height="64" rx="14" class="il-8s il-line"/><text x="793" y="80" text-anchor="middle" class="il-text">Market</text><text x="793" y="100" text-anchor="middle" class="il-small">no duty to report harms</text></g>
        <text x="20" y="176" class="il-title">After 1962</text>
        <g data-part="new_animal"><rect x="20" y="192" width="150" height="80" rx="14" class="il-3s il-line"/><text x="95" y="222" text-anchor="middle" class="il-text">Animal tests</text><text x="95" y="242" text-anchor="middle" class="il-small">incl. reproductive,</text><text x="95" y="258" text-anchor="middle" class="il-small">2 species</text></g>
        <path d="M172 232 H 190" class="il-line2" fill="none"/>
        <g data-part="new_ind"><rect x="192" y="192" width="100" height="80" rx="14" class="il-1s il-line"/><text x="242" y="228" text-anchor="middle" class="il-text">IND</text><text x="242" y="248" text-anchor="middle" class="il-small">permission</text></g>
        <path d="M294 232 H 312" class="il-line2" fill="none"/>
        <g data-part="new_phases"><rect x="314" y="192" width="250" height="80" rx="14" class="il-1s il-line"/><text x="439" y="222" text-anchor="middle" class="il-text">Phase 1 → 2 → 3</text><text x="439" y="242" text-anchor="middle" class="il-small">informed consent;</text><text x="439" y="258" text-anchor="middle" class="il-small">well-controlled trials</text></g>
        <path d="M566 232 H 584" class="il-line2" fill="none"/>
        <g data-part="new_nda"><rect x="586" y="192" width="140" height="80" rx="14" class="il-1s il-line"/><text x="656" y="222" text-anchor="middle" class="il-text">NDA review</text><text x="656" y="242" text-anchor="middle" class="il-small">safety and</text><text x="656" y="258" text-anchor="middle" class="il-small">efficacy</text></g>
        <path d="M728 232 H 746" class="il-line2" fill="none"/>
        <g data-part="new_post"><rect x="748" y="192" width="132" height="80" rx="14" class="il-3s il-line"/><text x="814" y="222" text-anchor="middle" class="il-text">Market</text><text x="814" y="242" text-anchor="middle" class="il-small">adverse-event</text><text x="814" y="258" text-anchor="middle" class="il-small">reporting</text></g>
        <g data-part="desi"><rect x="20" y="304" width="860" height="64" rx="14" class="il-4s il-line"/><text x="450" y="332" text-anchor="middle" class="il-text">Looking backward: DESI re-reviews drugs approved 1938–1962 for evidence they work</text><text x="450" y="352" text-anchor="middle" class="il-small">about 600 classed as ineffective by the early 1970s</text></g>
      </svg>`,
      hotspots: {
        old_animal: {title: 'Animal tests, 1950s', text: 'Mostly short studies of acute toxicity in rodents. Failing to find a lethal dose ([[LD50]]) was read as evidence of safety. Nobody was required to test effects on pregnancy.'},
        old_invest: {title: '"Investigational" distribution', text: 'Companies could ship unapproved drugs to doctors for "investigation". Merrell sent 2.5 million tablets to more than 1,000 doctors, reaching about 20,000 patients who were not required to be told.'},
        old_nda: {title: 'Approval on safety alone, by default', text: 'The 1938 law required evidence of safety, not effectiveness. If the FDA did not act within 60 days, the application took effect. Kelsey used the only tool she had: declaring the file incomplete to restart the clock.'},
        old_market: {title: 'After launch', text: 'No legal duty to report side effects to the FDA. Signals reached companies through doctors\' letters, if at all.'},
        new_animal: {title: 'Preclinical testing', text: '[[reproductive toxicity study|Reproductive toxicity studies]], typically in a rodent and a non-rodent such as the rabbit, became standard before drugs are given to large numbers of women who could become pregnant.'},
        new_ind: {title: 'The IND', text: 'An [[IND|Investigational New Drug application]] must be filed before testing in people, with animal data, a protocol and investigator commitments. The FDA can put trials on hold.'},
        new_phases: {title: 'Phased trials with consent', text: 'The requirement for "adequate and well-controlled investigations" turned into the familiar [[phase 1]], [[phase 2]], [[phase 3]] sequence. Participants must give [[informed consent]].'},
        new_nda: {title: 'Approval on safety and efficacy', text: 'The FDA must find substantial evidence that the drug works, so that benefits can be weighed against risks. No more approval by silence.'},
        new_post: {title: 'After approval', text: 'Companies must report adverse events. Later laws added more: [[REMS]] programs, postmarketing study requirements and active surveillance (see the Vioxx case).'},
        desi: {title: 'DESI', text: 'The [[DESI|Drug Efficacy Study Implementation]] applied the new efficacy standard to drugs already on the market. By the early 1970s about 600 had been classified as ineffective and removed, according to Greene and Podolsky.'},
      },
      caption: 'Simplified. Several of these changes came through FDA regulations issued after the 1962 law (for example, the IND rules of 1963), not the statute alone.'},

    {type: 'table', title: 'The reforms, country by country', intro: 'Thalidomide shaped drug regulation well beyond the United States.', columns: ['Where', 'What changed', 'When'],
      rows: [
        ['United States', 'Kefauver–Harris Amendments: proof of efficacy, informed consent, adverse-event reporting, investigational-drug controls; DESI review of older drugs', '1962 onward'],
        ['United Kingdom', 'Committee on Safety of Drugs (1963); [[Yellow Card scheme]] for side-effect reports (1964); Medicines Act licensing system (1968)', '1963–1968'],
        ['European Economic Community', 'Directive 65/65/EEC: medicines need authorization before marketing', 'January 1965'],
        ['West Germany', 'Reproductive toxicity testing made a mandatory part of approval of new drugs', 'Following the disaster'],
        ['International', 'WHO Program for International Drug Monitoring pools side-effect reports across countries', '1968'],
      ],
      caption: 'Sources: FDA; Greene and Podolsky, NEJM 2012; Ferner and Aronson, Br J Clin Pharmacol 2023; MHRA; EUR-Lex; Contergan Foundation; Uppsala Monitoring Center.'},

    // ---------------- 11. SURVIVORS ----------------
    {type: 'story', kicker: 'The people', title: 'Sixty years of fighting for recognition', html: `
<p>The children born with thalidomide injuries are now in their sixties. Many call themselves thalidomiders. Their fight for compensation has lasted most of their lives, and it has been shaped less by courts than by persistence, journalism and politics.</p>
<p>In West Germany, a criminal trial of senior Grünenthal employees opened in Alsdorf near Aachen on May 27, 1968. Among the families' lawyers was Karl-Hermann Schulte-Hillen, himself the father of an affected child, who represented 143 children. On April 10, 1970, the families and the company agreed a settlement: Grünenthal paid 100 million Deutschmarks, and the German government added the same amount to create what is now the Contergan Foundation. In December 1970 the court discontinued the criminal case without a verdict, saying individual guilt would have been minor and the settlement served the victims better. Critics have argued ever since that this let the company escape a public reckoning. A 1982 change in the law required claims to be filed by the end of 1983, excluding people who came forward later. Since 1997 the foundation's pensions have been paid from the federal budget; Grünenthal added 50 million euros in 2009.</p>
<p>In Britain, families spent years in litigation against Distillers. After a campaign by <i>The Sunday Times</i> under its editor Harold Evans, a settlement of £20 million with 429 survivors in 1973 created the Thalidomide Trust, which still supports survivors. On January 14, 2010, the UK health minister Mike O'Brien made a statement of regret in the House of Commons, saying the government wished "to express their deep sympathy for the injury and suffering endured by all those affected", and announced a £20 million health grant, run through the Trust. At that time the Trust had 466 beneficiaries.</p>
<p>Grünenthal stayed publicly silent for fifty years. On August 31, 2012, at the unveiling of a memorial statue of a child without arms in Stolberg, its chief executive Harald Stock apologized: "We also apologise for not having found a way to reach out to you, person to person, for 50 years. Instead, we remained silent. I am truly sorry for that." Survivors' groups were not moved. Nick Dobrik of the UK Thalidomide Trust's advisory council said it "should be an unreserved apology, not a conditional apology", and Freddie Astbury of Thalidomide UK said apologies were no good without talks on compensation. Grünenthal describes the apology as the start of a dialogue: a company foundation set up in 2012 pays for home adaptations and mobility aids, and in 2021 a member of the owning family apologized personally to the German survivors' association. In November 2023 Australia's government announced a national apology.</p>
<p>Nor is the story over. In Brazil, where leprosy remains common and thalidomide is used to treat it, children with thalidomide damage were still being born in the 2000s. Researchers warned that pictograms on packets were not enough where literacy was low and dispensing poorly controlled.</p>`},

    {type: 'callout', variant: 'lesson', heading: 'The costs of a drug disaster last a lifetime', html: `<p>Drug-safety failures are usually told as a story of a withdrawal date. For thalidomide, the withdrawal was the beginning. Survivors needed surgery, prosthetics, education and, as they aged, care for joints and nerves worn out by decades of compensation. Compensation schemes had to be renegotiated repeatedly, and several countries only apologized formally after 2010. When you estimate the cost of a safety failure, count the decades, not the recall.</p>`},

    // ---------------- 12. SECOND LIFE ----------------
    {type: 'story', kicker: 'The biology surprise', title: 'A leprosy ward in Jerusalem', html: `
<p>In 1964, at the Hadassah University Hospital in Jerusalem, a doctor named Jacob Sheskin was treating a man with [[leprosy]] who was suffering from [[erythema nodosum leprosum]] (ENL), an agonizing inflammatory complication: crops of painful lumps in the skin, fever, nerve pain, and no sleep. Looking for something to help him rest, Sheskin gave him thalidomide as a sedative. The patient slept. And within about 48 hours, the skin lesions had dramatically resolved. Sheskin repeated the observation in other patients and reported it in 1965. A World Health Organization trial published in 1971 confirmed the effect.</p>
<p>So thalidomide was not merely a sedative. It did something to inflammation, and nobody knew what. For two decades it stayed a niche drug for leprosy, available in some countries, unapproved in most.</p>
<h3>Three clues</h3>
<p><b>TNF.</b> In 1991, Gilla Kaplan's laboratory at Rockefeller University in New York, which studied leprosy, showed that thalidomide selectively reduced production of [[TNF|tumor necrosis factor]] (TNF), a powerful inflammatory signal, by stimulated human immune cells, while leaving other signals largely alone. That seemed to explain ENL, which is driven by TNF, and suggested uses in other inflammatory conditions and in the wasting seen in AIDS. Rockefeller patented uses of the drug, and in 1992 a small New Jersey company, Celgene, licensed those rights.</p>
<p><b>Blood vessels.</b> Judah Folkman at Boston Children's Hospital had argued since 1971 that tumors cannot grow beyond a tiny size without recruiting new blood vessels, a process called [[angiogenesis]], and that blocking it could treat cancer. His colleague Robert D'Amato wondered whether thalidomide's damage to limbs might come from damage to the blood vessels growing into a [[limb bud]]. In 1994 they reported that thalidomide taken by mouth blocked new vessel growth in the rabbit eye, and that among related compounds, anti-angiogenic activity tracked the birth defects, not the sedation.</p>
<p><b>A patient's wife.</b> The third clue was a person. According to a 2020 staff report of the US House Oversight Committee, drawing on Boston Children's Hospital's own account, in 1996 the Boston researchers, at the request of the wife of a man dying of [[multiple myeloma]], persuaded Bart Barlogie of the University of Arkansas to try thalidomide in myeloma patients who had exhausted other options.</p>
<p>None of these clues turned out to be the real mechanism. Together they were enough to justify trying.</p>`},

    {type: 'decision', title: 'You are the FDA, 1997', role: 'FDA Center for Drug Evaluation and Research', scenario: 'Celgene asks you to approve thalidomide, under the brand name Thalomid, for ENL, a painful complication of leprosy that affects few Americans. The drug works for it; that has been known for 30 years. You also know that doctors will prescribe it off-label for AIDS wasting, cancers and much else, and that a single dose in early pregnancy can maim a child. Kelsey, now in her eighties, still works at the agency. What do you do?', options: [
      {label: 'Refuse. After 1961, no agency should approve thalidomide for anything, and ENL patients can get it through special access.', outcome: 'Understandable and politically safe. But refusing would not have erased the drug: it remained in use abroad and in research, and a US approval with conditions gave the FDA control over how it was used. Refusal would also have made the myeloma trials that followed harder to run and to scale.'},
      {label: 'Approve it the way other dangerous drugs are approved: a boxed warning, a patient leaflet, and a requirement that doctors counsel women about contraception. Doctors are professionals; trust them.', outcome: 'This is how most dangerous drugs are handled, and it relies on doctors and patients reading warnings. For a drug where one missed dose of contraception can mean a devastating birth defect, a warning alone felt inadequate to almost everyone involved.'},
      {label: 'Approve it only inside a restricted system: every prescriber, pharmacy and patient registered, pregnancy tests before and during treatment, two forms of contraception, and monitoring of compliance.', outcome: 'This is what happened. It worked: over its first six years, about 124,000 patients were registered and one woman became pregnant while on the drug (the pregnancy ended in miscarriage). It also created something nobody fully anticipated: a distribution system controlled by the manufacturer.'},
    ], reality: 'The FDA approved Thalomid on July 16, 1998 for ENL, with Celgene\'s [[S.T.E.P.S.]] program, built partly on experience with isotretinoin and clozapine. A 2006 FDA-Celgene review found that by the end of 2004 more than 88% of use was in cancer. S.T.E.P.S. became the template for the FDA\'s later [[REMS]] programs, and, as you will see, for a controversial way of keeping generics off the market.'},

    {type: 'callout', variant: 'product', heading: 'The pivot', html: `<p>Thalidomide\'s second life is the ultimate pivot: a failed consumer product becomes a specialist tool for a tiny market (ENL), which turns out to be the wedge into a much bigger one (myeloma). Many software companies find their real market the same way, after an early user does something unexpected with the product.</p><p><b>Where the analogy breaks:</b> a software pivot leaves the old product behind. Thalidomide carried its defect into every new market, forever. The business was viable only because a restricted-distribution system contained the risk, and each new indication had to be proven in formal trials, not discovered by growth metrics.</p>`},

    // ---------------- 13. MYELOMA ----------------
    {type: 'story', kicker: 'The trials', title: 'Myeloma: a cancer that needed something new', html: `
<p>[[multiple myeloma|Multiple myeloma]] is a cancer of [[plasma cell|plasma cells]], the cells in bone marrow that make antibodies. One plasma cell starts multiplying out of control and its descendants fill the marrow. They eat away at bone, causing fractures and pain; they crowd out normal blood cells; and they all make the same antibody, called the [[paraprotein]] or M protein, which can damage the kidneys. The level of paraprotein in blood or urine is a convenient measure of how much cancer there is: when treatment works, it falls.</p>
<p>In the late 1990s, treatment meant chemotherapy and steroids, and for fit patients high-dose chemotherapy followed by a transplant of the patient's own stem cells. Barlogie's program in Little Rock was known for this aggressive approach. But almost everyone relapsed eventually, and patients who relapsed after a transplant had very few options.</p>
<p>Myeloma also has a feature that made Folkman's idea attractive: bone marrow in myeloma is unusually full of blood vessels, and more vessels predict worse outcomes. If thalidomide blocked angiogenesis, myeloma was a sensible place to test it.</p>
<p>Barlogie's team, with Seema Singhal as first author, gave thalidomide alone to 84 patients with refractory myeloma, 76 of whom had already relapsed after high-dose chemotherapy. The dose started at 200 mg a day and rose by 200 mg every two weeks up to 800 mg, as tolerated. The trial had no control group: in refractory myeloma, any substantial fall in paraprotein on a single oral drug would itself be news.</p>`},

    {type: 'trial', title: 'The Arkansas thalidomide study', intro: 'A single-arm study in patients who had run out of options. Predict before you look.',
      design: {name: 'Singhal et al. (Barlogie group), NEJM 1999', phase: 'Single-arm study', blinding: 'Open-label', years: 'Published November 1999', n: 84, population: 'Refractory multiple myeloma; 76 of 84 had relapsed after high-dose chemotherapy', randomization: null,
        arms: [{name: 'Thalidomide alone', n: 84, desc: '200 mg a day, raised 200 mg every two weeks to 800 mg'}],
        endpoint: 'Paraprotein fall lasting at least six weeks',
        details: {'Primary measure': 'Response: reduction of myeloma protein in blood or urine lasting at least 6 weeks (25% or more counted)', 'Median time on drug': '80 days (range 2 to 465)', 'Rationale': 'Anti-[[angiogenesis]]: myeloma marrow is rich in new blood vessels', 'Why no control arm': 'In refractory disease, spontaneous falls in paraprotein are rare, so a single-arm signal can be read, cautiously'}},
      predict: {q: 'In patients whose myeloma had come back after everything else, what share had their paraprotein fall by at least 25%?', options: ['About 5%, a curiosity', 'About a third', 'About 80%'], answer: 1, explain: 'The overall response rate was 32% (27 of 84). Eight patients had a reduction of 90% or more, two of them complete remissions. In refractory myeloma in 1999, that was remarkable for a single pill. Curiously, bone marrow blood-vessel density did not change significantly in responders: an early hint that angiogenesis was not the whole story.'},
      results: [
        {kind: 'bar', title: 'Depth of paraprotein reduction', subtitle: '84 patients; response had to last at least 6 weeks', unit: 'patients', categories: ['90% or more', '75–89%', '50–74%', '25–49%', 'Less than 25%'], series: [{name: 'Patients', values: [8, 6, 7, 6, 57]}], colorByCategory: false, note: 'Singhal et al., NEJM 1999. Categories computed from the reported counts at each threshold.'},
        {kind: 'bar', title: 'Survival estimates at 12 months', unit: '%', categories: ['Event-free survival', 'Overall survival'], series: [{name: 'All 84 patients', values: [22, 58]}], note: 'Kaplan-Meier estimates reported in the paper (±5%).'},
      ],
      takeaway: 'A third of patients with no options responded to an oral drug. Within a few years thalidomide, usually combined with [[dexamethasone]], was widely used in myeloma, and the FDA approved Thalomid for myeloma in May 2006. Follow-up trials also showed its costs: blood clots, nerve damage with long use, drowsiness and constipation.'},

    // ---------------- 14. LENALIDOMIDE ----------------
    {type: 'story', kicker: 'Building a better molecule', title: 'Revlimid: stronger, and still dangerous', html: `
<p>Thalidomide had obvious drawbacks as a cancer drug: sedation, constipation, nerve damage with long use, and of course the risk to pregnancies. Celgene chemists led by George Muller, working with David Stirling and with Kaplan's lab, had been making analogs designed to block TNF more potently. In 1999 they reported that adding an amino group to the flat ring made the compounds far more potent. Two of these became drugs: [[lenalidomide]] (CC-5013, Revlimid), which also lacks one of the ring's oxygen atoms, and [[pomalidomide]] (Pomalyst).</p>
<p>Lenalidomide was much less sedating and less likely to damage nerves. Its first approval, on December 27, 2005, came in an unexpected disease: [[myelodysplastic syndrome]] (MDS) with a missing piece of chromosome 5, called [[del(5q)]]. In a trial of 148 such patients led by Alan List, 67% stopped needing blood transfusions. Nobody knew why this subtype responded so well; the answer came a decade later.</p>
<p>The myeloma approval followed on June 29, 2006, based on two large randomized trials comparing lenalidomide plus [[dexamethasone]] with dexamethasone plus placebo. Both were double-blind: a real test of the added drug.</p>
<p>Lenalidomide is chemically a close cousin of thalidomide, so the FDA required a restricted-distribution program for it too. In a monkey study it caused thalidomide-type limb defects, and patients who can become pregnant must still have regular pregnancy tests and use contraception to receive it.</p>`},

    {type: 'trial', title: 'MM-009: lenalidomide in relapsed myeloma', intro: 'One of the two pivotal trials. Predict the effect on time to progression.',
      design: {name: 'MM-009 (North America)', phase: 'Phase 3', blinding: 'Double-blind', years: 'Published November 2007', n: 353, population: 'Myeloma needing treatment after at least one prior therapy (US and Canada)', randomization: '1:1',
        arms: [{name: 'Lenalidomide + dex', n: 177, desc: 'Lenalidomide 25 mg days 1–21 of 28, plus dexamethasone'}, {name: 'Placebo + dex', n: 176, desc: 'Placebo days 1–21 of 28, plus the same dexamethasone', control: true}],
        endpoint: 'Time to progression',
        details: {'Primary endpoint': '[[time to progression]]', 'Secondary': 'Response rate, [[overall survival]], safety', 'Dexamethasone': '40 mg on days 1–4, 9–12 and 17–20 for four cycles, then days 1–4 only', 'Sister trial': 'MM-010 in Europe, Israel and Australia, with a similar design and result'}},
      predict: {q: 'With dexamethasone alone, the median time until the myeloma worsened was 4.7 months. What was it with lenalidomide added?', options: ['About 5.5 months', 'About 11 months', 'About 30 months'], answer: 1, explain: 'Median time to progression was 11.1 months with lenalidomide versus 4.7 months with placebo, more than double. Responses were 61% versus 20%, and median overall survival 29.6 versus 20.2 months, even though many placebo patients later received lenalidomide. The costs: severe neutropenia (41% vs 5%) and blood clots (15% vs 3%).'},
      results: [
        {kind: 'km', title: 'Time to progression', subtitle: 'Schematic curves drawn from the reported medians (11.1 vs 4.7 months) assuming a constant hazard; not digitized from the paper.', xLabel: 'Months', unit: '%', yMax: 100, xMax: 24,
          series: [
            {name: 'Lenalidomide + dex', points: [[0, 100], [2, 88], [4, 78], [6, 69], [8, 61], [10, 54], [12, 47], [14, 42], [16, 37], [18, 32], [20, 29], [22, 25], [24, 22]]},
            {name: 'Placebo + dex', points: [[0, 100], [2, 74], [4, 55], [6, 41], [8, 31], [10, 23], [12, 17], [14, 13], [16, 9], [18, 7], [20, 5], [22, 4], [24, 3]], color: 8}],
          markers: [{x: 11.1, y: 50, label: 'median 11.1 mo', series: 0}, {x: 4.7, y: 50, label: 'median 4.7 mo', series: 1}]},
        {kind: 'bar', title: 'Response rate', unit: '%', categories: ['Lenalidomide + dex', 'Placebo + dex'], series: [{name: 'Complete, near-complete or partial response', values: [61.0, 19.9]}], colorByCategory: true, note: 'Weber et al., NEJM 2007.'},
      ],
      takeaway: 'A randomized, double-blind trial showed that lenalidomide more than doubled the time before myeloma worsened. Over the following years lenalidomide moved earlier in treatment, including long-term maintenance after transplant, which is one reason its sales grew so large: patients took it for years.'},

    // ---------------- 15. MECHANISM ----------------
    {type: 'story', kicker: 'The key insight', title: 'Fifty-three years to find the target', html: `
<p>By 2009, thalidomide and lenalidomide were treating tens of thousands of people and nobody knew how they worked. Anti-TNF, anti-angiogenesis and immune effects were all real, but none explained why a pill could remove a limb.</p>
<p>Hiroshi Handa's group at the Tokyo Institute of Technology had developed tiny magnetic beads to which they could attach a drug and then fish out whatever proteins stuck to it from a soup of cell contents. In March 2010, Takumi Ito, Handa and colleagues reported in <i>Science</i> that thalidomide beads pulled out two proteins: one called DDB1 and a little-studied protein called [[cereblon]] (CRBN). Cereblon was known mainly because a mutation in its gene caused a mild intellectual disability. DDB1 was the clue: it is part of an [[E3 ubiquitin ligase]], one of the cell's machines for marking proteins for destruction. The team showed that cereblon mattered for fin and limb growth in zebrafish and chick embryos, and that a version of cereblon that could not bind thalidomide protected the embryos from the drug.</p>
<p>Handa's team thought thalidomide was <i>blocking</i> the machine. Four years later came the twist. In January 2014, two papers in the same issue of <i>Science</i>, one from Benjamin Ebert's laboratory (first author Jan Krönke) and one from William Kaelin's (first author Gang Lu), showed the opposite: lenalidomide does not block cereblon; it redirects it. With the drug bound, cereblon grabs two proteins it normally ignores, [[IKZF1]] (Ikaros) and [[IKZF3]] (Aiolos), tags them with [[ubiquitin]] and sends them to be destroyed. Myeloma cells depend on these two [[transcription factor|transcription factors]]. A single amino-acid change in IKZF3 made it immune to the drug and rescued myeloma cells. The drug was a [[molecular glue]].</p>
<p>The same principle explained the rest. In 2015 Ebert's group showed that lenalidomide also makes cereblon destroy [[CK1α]]; cells with [[del(5q)]] have only one copy of its gene, which is why that form of MDS is so sensitive. And in 2018, two groups, Eric Fischer and Ebert's at Dana-Farber, and Philip Chamberlain's at Celgene, showed that thalidomide makes human cereblon destroy [[SALL4]], a transcription factor needed to build limbs, ears, eyes and hearts. People born with one faulty copy of SALL4 have [[Duane-radial ray syndrome]], whose features (missing thumbs, forearm defects, ear, eye and heart problems) strikingly resemble thalidomide damage. Mouse and fish SALL4 differ at the key spot and escape. Step through the mechanism below.</p>`},

    {type: 'mechanism', title: 'How a molecular glue works', intro: 'The same drug, bound to the same protein, destroys different targets in different cells. Step through it.',
      svg: `<svg viewBox="0 0 760 440" role="img" aria-label="Cereblon, lenalidomide and target protein degradation">
        <rect x="16" y="40" width="728" height="388" rx="36" class="il-3s"/>
        <g data-part="lblMyeloma"><text x="22" y="26" class="il-title">Inside a myeloma cell</text></g>
        <g data-part="lblEmbryo"><text x="22" y="26" class="il-title">Inside a cell of an embryo's limb bud</text></g>
        <g data-part="ligase">
          <path d="M150 208 C 108 262 108 330 168 372" class="il-none" style="stroke:var(--il-8)" stroke-width="24" stroke-linecap="round" fill="none"/>
          <text x="40" y="300" class="il-text-2">cullin 4</text>
          <ellipse cx="190" cy="172" rx="60" ry="46" class="il-8s il-line2"/>
          <text x="172" y="177" text-anchor="middle" class="il-text">DDB1</text>
          <circle cx="190" cy="384" r="17" class="il-8"/>
          <text x="190" y="420" text-anchor="middle" class="il-small">RBX1</text>
        </g>
        <g data-part="e2">
          <circle cx="248" cy="384" r="20" class="il-6s il-line"/>
          <text x="248" y="389" text-anchor="middle" class="il-small">E2</text>
          <circle cx="276" cy="366" r="8" class="il-4 il-line"/><circle cx="290" cy="352" r="8" class="il-4 il-line"/>
          <text x="302" y="360" class="il-small">ubiquitin</text>
        </g>
        <g data-part="crbn">
          <path d="M252 150 C 300 118 362 138 366 184 L 342 200 L 366 216 C 362 262 300 282 256 252 C 232 232 230 170 252 150 Z" class="il-2"/>
          <text x="300" y="206" text-anchor="middle" class="il-white">cereblon</text>
        </g>
        <g data-part="drug">
          <path d="M352 188 l12 7 v14 l-12 7 l-12 -7 v-14 z" class="il-1 il-line"/>
          <text x="366" y="170" class="il-text" style="fill:var(--il-1)">drug</text>
        </g>
        <g data-part="nofit">
          <text x="440" y="160" class="il-text-2">no drug: cereblon</text>
          <text x="440" y="178" class="il-text-2">ignores IKZF1/3</text>
        </g>
        <g data-part="ikzf">
          <path d="M392 190 C 430 176 474 180 484 214 C 494 252 462 282 420 276 C 392 272 380 250 384 232 L 368 222 L 368 206 Z" class="il-7"/>
          <text x="436" y="236" text-anchor="middle" class="il-white">IKZF1/3</text>
        </g>
        <g data-part="sall4">
          <path d="M392 190 C 430 176 474 180 484 214 C 494 252 462 282 420 276 C 392 272 380 250 384 232 L 368 222 L 368 206 Z" class="il-5"/>
          <text x="436" y="236" text-anchor="middle" class="il-white">SALL4</text>
        </g>
        <g data-part="ub">
          <line x1="478" y1="196" x2="532" y2="148" class="il-line"/>
          <circle cx="486" cy="188" r="8" class="il-4 il-line"/><circle cx="500" cy="175" r="8" class="il-4 il-line"/><circle cx="514" cy="162" r="8" class="il-4 il-line"/><circle cx="528" cy="149" r="8" class="il-4 il-line"/>
          <text x="520" y="132" text-anchor="end" class="il-small">ubiquitin chain</text>
        </g>
        <g data-part="proteasome">
          <rect x="600" y="300" width="96" height="22" rx="10" class="il-8s il-line"/>
          <rect x="600" y="324" width="96" height="22" rx="10" class="il-8s il-line"/>
          <rect x="600" y="348" width="96" height="22" rx="10" class="il-8s il-line"/>
          <rect x="600" y="372" width="96" height="22" rx="10" class="il-8s il-line"/>
          <text x="648" y="414" text-anchor="middle" class="il-text">proteasome</text>
        </g>
        <g data-part="bits">
          <circle cx="712" cy="318" r="5" class="il-7"/><circle cx="722" cy="340" r="4" class="il-7"/><circle cx="710" cy="360" r="5" class="il-7"/><circle cx="724" cy="378" r="4" class="il-7"/>
        </g>
        <g data-part="effM">
          <rect x="556" y="56" width="176" height="92" rx="12" class="il-paper il-line"/>
          <text x="568" y="78" class="il-text">IKZF1/3 gone:</text>
          <text x="568" y="98" class="il-small">IRF4 and MYC fall,</text>
          <text x="568" y="116" class="il-small">myeloma cell dies;</text>
          <text x="568" y="134" class="il-small">T cells make more IL-2</text>
        </g>
        <g data-part="effE">
          <rect x="556" y="56" width="176" height="92" rx="12" class="il-paper il-line"/>
          <text x="568" y="78" class="il-text">SALL4 gone:</text>
          <text x="568" y="98" class="il-small">limb, ear, eye and</text>
          <text x="568" y="116" class="il-small">heart patterning fails</text>
          <text x="568" y="134" class="il-small">(days ~20–36)</text>
        </g>
        <g data-part="mouse">
          <rect x="378" y="310" width="214" height="84" rx="12" class="il-paper il-line"/>
          <text x="390" y="332" class="il-text">In a mouse embryo:</text>
          <text x="390" y="352" class="il-small">mouse SALL4 differs at the key</text>
          <text x="390" y="370" class="il-small">spot, so the glue fails and the</text>
          <text x="390" y="388" class="il-small">embryo is spared</text>
        </g>
      </svg>`,
      steps: [
        {title: 'The cell\'s disposal system', text: 'Cells constantly destroy proteins they no longer need. An [[E3 ubiquitin ligase]] picks the victim; an E2 enzyme hands over [[ubiquitin]], a small protein tag; a chain of ubiquitin marks the victim for the [[proteasome]], a barrel-shaped shredder. Here the ligase is [[CRL4]]: a scaffold (cullin 4), an adaptor (DDB1), and a swappable "picker", [[cereblon]].', show: ['lblMyeloma', 'ligase', 'e2', 'crbn', 'proteasome'], focus: ['crbn']},
        {title: 'Cereblon is picky', text: 'Each picker recognizes only certain shapes. On its own, cereblon does not recognize [[IKZF1]] or [[IKZF3]], two [[transcription factor|transcription factors]] that myeloma cells need to survive. They float past untouched.', show: ['lblMyeloma', 'ligase', 'e2', 'crbn', 'proteasome', 'ikzf', 'nofit', 'drug'], move: {ikzf: 'translate(190px, -10px)', drug: 'translate(90px, -110px)'}},
        {title: 'The drug docks', text: 'Lenalidomide (or thalidomide, or pomalidomide) slides into a pocket on cereblon\'s surface lined by three tryptophans. The glutarimide ring goes in; the flat phthalimide ring sticks out. Cereblon now has a new bump on its surface.', show: ['lblMyeloma', 'ligase', 'e2', 'crbn', 'proteasome', 'ikzf', 'drug'], move: {ikzf: 'translate(190px, -10px)'}, focus: ['drug']},
        {title: 'A new surface, a new victim', text: 'The drug plus cereblon form a combined surface that fits a small loop on IKZF1 and IKZF3, a [[zinc finger]] hairpin with a key glycine. The drug is a [[molecular glue]]: it holds together two proteins that would not otherwise touch. The captured protein is called a [[neosubstrate]].', show: ['lblMyeloma', 'ligase', 'e2', 'crbn', 'proteasome', 'ikzf', 'drug'], focus: ['ikzf', 'drug']},
        {title: 'Tagged for destruction', text: 'Because IKZF1/3 is now held by the ligase, the E2 enzyme can build a ubiquitin chain on it. The drug is not used up: after one target is released, cereblon can capture another, so a small amount of drug can clear a lot of protein.', show: ['lblMyeloma', 'ligase', 'e2', 'crbn', 'proteasome', 'ikzf', 'drug', 'ub'], pulse: ['ub'], focus: ['ub']},
        {title: 'Shredded', text: 'The proteasome destroys the tagged proteins. Without IKZF1 and IKZF3, levels of [[IRF4]] and MYC fall and myeloma cells die. In T cells, loss of the same proteins raises production of the immune signal IL-2, one reason these drugs were called immunomodulatory.', show: ['lblMyeloma', 'ligase', 'e2', 'crbn', 'proteasome', 'drug', 'bits', 'effM', 'ikzf'], dim: ['ikzf'], move: {ikzf: 'translate(210px, 90px) scale(0.5)'}, pulse: ['proteasome']},
        {title: 'Same glue, different victim', text: 'In an embryo, thalidomide-bound cereblon grabs [[SALL4]], a transcription factor that directs limb, ear, eye and heart development, and it is destroyed during the [[sensitive window]]. Mouse SALL4 differs at the key spot, so the glue fails: this is why rodent tests missed the danger. The cancer benefit and the birth defects are the same mechanism aimed at different proteins.', show: ['lblEmbryo', 'ligase', 'e2', 'crbn', 'proteasome', 'drug', 'sall4', 'ub', 'effE', 'mouse'], focus: ['sall4']},
      ]},

    {type: 'figure', title: 'What cereblon destroys depends on the drug', intro: 'Different glues on the same cereblon capture different proteins. Hover or tap each one.',
      svg: `<svg viewBox="0 0 900 420" role="img" aria-label="Cereblon neosubstrates">
        <g class="il-line" fill="none" stroke-dasharray="5 5">
          <path d="M450 210 L180 90"/><path d="M450 210 L180 330"/><path d="M450 210 L720 90"/><path d="M450 210 L720 330"/><path d="M450 210 L450 60"/><path d="M450 210 L450 370"/>
        </g>
        <g data-part="center">
          <circle cx="450" cy="210" r="70" class="il-2"/>
          <text x="450" y="206" text-anchor="middle" class="il-white">cereblon</text>
          <text x="450" y="226" text-anchor="middle" class="il-white">+ drug</text>
          <path d="M500 250 l10 6 v12 l-10 6 l-10 -6 v-12 z" class="il-1 il-line"/>
        </g>
        <g data-part="ikzf"><rect x="70" y="60" width="220" height="60" rx="14" class="il-7s il-line"/><text x="180" y="86" text-anchor="middle" class="il-text">IKZF1 and IKZF3</text><text x="180" y="106" text-anchor="middle" class="il-small">myeloma; all three drugs</text></g>
        <g data-part="ck1a"><rect x="70" y="300" width="220" height="60" rx="14" class="il-6s il-line"/><text x="180" y="326" text-anchor="middle" class="il-text">CK1α</text><text x="180" y="346" text-anchor="middle" class="il-small">del(5q) MDS; lenalidomide</text></g>
        <g data-part="sall4"><rect x="610" y="60" width="220" height="60" rx="14" class="il-5s il-line"/><text x="720" y="86" text-anchor="middle" class="il-text">SALL4</text><text x="720" y="106" text-anchor="middle" class="il-small">embryo; birth defects</text></g>
        <g data-part="p63"><rect x="610" y="300" width="220" height="60" rx="14" class="il-5s il-line"/><text x="720" y="326" text-anchor="middle" class="il-text">p63</text><text x="720" y="346" text-anchor="middle" class="il-small">limbs, ears (candidate)</text></g>
        <g data-part="gspt1"><rect x="350" y="16" width="200" height="56" rx="14" class="il-4s il-line"/><text x="450" y="40" text-anchor="middle" class="il-text">GSPT1</text><text x="450" y="60" text-anchor="middle" class="il-small">leukemia; newer glues</text></g>
        <g data-part="zf"><rect x="340" y="348" width="220" height="56" rx="14" class="il-8s il-line"/><text x="450" y="372" text-anchor="middle" class="il-text">Other zinc-finger proteins</text><text x="450" y="392" text-anchor="middle" class="il-small">ZFP91, ZNF692 and more</text></g>
      </svg>`,
      hotspots: {
        center: {title: 'One ligase, many targets', text: 'All of these drugs dock their glutarimide ring in the same pocket of [[cereblon]]. What differs is the part that sticks out, which shapes the new surface and so decides which protein gets captured. Crystal structures (2014–2016) showed the drug sandwiched between cereblon and the target.'},
        ikzf: {title: 'IKZF1 and IKZF3 (Ikaros and Aiolos)', text: 'Destroyed by lenalidomide, pomalidomide and thalidomide. This explains the anti-myeloma effect and the boost to T cells (Krönke et al.; Lu et al.; Science 2014). Other members of the same family escape because of a single amino-acid difference in the zinc-finger loop.'},
        ck1a: {title: 'CK1α', text: 'Degraded well by lenalidomide but much less by thalidomide or pomalidomide, thanks to lenalidomide\'s missing oxygen. Cells with [[del(5q)]] have only one copy of the gene, so losing the rest is lethal to them (Krönke et al., Nature 2015). This is why only lenalidomide is approved for this form of MDS.'},
        sall4: {title: 'SALL4', text: 'Degraded by thalidomide in human, primate and rabbit cells, not in rodents or fish (Donovan et al., eLife 2018; Matyskiela et al., Nat Chem Biol 2018). Inherited SALL4 defects cause conditions resembling thalidomide embryopathy. It is the leading explanation for the limb defects.'},
        p63: {title: 'p63', text: 'A protein needed for limb and ear development; Handa\'s and Guerrini\'s groups reported it as a thalidomide-dependent cereblon target. Birth defects probably involve several destroyed proteins, not one.'},
        gspt1: {title: 'GSPT1', text: 'A protein needed to end protein synthesis. Celgene\'s experimental glue CC-885 degrades it, which kills acute myeloid leukemia cells, and later molecules such as CC-90009 were tested in trials. It is also a troublesome off-target for some degrader designs.'},
        zf: {title: 'Many zinc fingers', text: 'Proteome-wide screens found that cereblon glues can capture many proteins that share a similar [[zinc finger]] loop. These were long considered "undruggable" because they have no pocket to block, which is what made the glue idea so exciting.'},
      },
      caption: 'Sources: Asatsuma-Okumura, Ito and Handa, Pharmaceuticals 2020, and the primary papers cited in the hotspots.'},

    // ---------------- 16. THE FIELD ----------------
    {type: 'story', kicker: 'What came next', title: 'From accident to design: molecular glues and PROTACs', html: `
<p>For most of drug discovery's history, a drug has worked by occupying a pocket on a protein and blocking it. That leaves out most of the proteins in the body: estimates vary, but a large majority have no suitable pocket, including many [[transcription factor|transcription factors]] that drive cancer. The thalidomide story showed a different option. A drug does not need to block a protein if it can make the cell destroy it.</p>
<p>Two design strategies grew from this idea, and both use cereblon heavily.</p>
<p><b>Molecular glues</b> are small molecules, like lenalidomide, that change the surface of a ligase so that it grabs a new target. They are small and behave like conventional pills, but they are hard to design on purpose; most were found by luck or by screening. Bristol Myers Squibb, which inherited Celgene's cereblon chemistry, has moved newer glues such as iberdomide and mezigdomide into large myeloma trials, and phase 3 results for mezigdomide were published in 2026.</p>
<p><b>[[PROTAC|PROTACs]]</b> (proteolysis-targeting chimeras) are two-headed molecules: one end binds the target protein, the other binds a ligase, and a linker holds them together. Craig Crews at Yale and Raymond Deshaies at Caltech published the first PROTAC in 2001, using a peptide to recruit the ligase. The approach became practical after 2014, when chemists realized that thalidomide-like pieces made ideal ligase grabbers: in 2015 James Bradner's lab at Dana-Farber attached a thalidomide-like piece to a cancer drug and showed the resulting molecule, dBET1, destroyed its target in mice. Arvinas, founded on Crews's Yale work, licensed in 2013, took the approach to the clinic with Pfizer. On May 1, 2026, the FDA approved their vepdegestrant (Veppanu) for a form of estrogen-receptor-positive breast cancer. Reviewers in the <i>Journal of Medicinal Chemistry</i> called it the first PROTAC ever approved. It recruits cereblon with a thalidomide-derived piece.</p>
<p>There is a sobering thread through this field. Every cereblon-based drug inherits a possible link to thalidomide's harms. Whether a new molecule degrades SALL4 is now one of the safety questions asked of cereblon-based drugs, the vepdegestrant label, like lenalidomide's, carries a warning about embryo-fetal toxicity, and a 2026 review in <i>Nature Reviews Drug Discovery</i> is devoted to safety considerations for cereblon-recruiting degraders. The shadow of 1961 falls on the newest drugs.</p>`},

    {type: 'custom', title: 'Glue or PROTAC?', intro: 'Two ways to make a ligase destroy a target. Switch between them to compare.',
      html: `<div class="card"><div class="th-gp-btns" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px"></div><div class="th-gp-svg"></div><div class="th-gp-txt" style="font:400 16.5px/1.6 var(--serif);margin-top:10px;min-height:120px"></div></div>`,
      init(root, api) {
        const M = {
          glue: {label: 'Molecular glue (e.g. lenalidomide)', t: '<b>Molecular glue.</b> One small piece sits in a pocket on cereblon and reshapes its surface so the target sticks directly to cereblon. Small (lenalidomide weighs about 259 daltons), so it is easy to absorb as a pill. The catch: the target must have a surface that happens to fit, usually a zinc-finger loop with a key glycine, and most glues were found by accident or large screens rather than designed.'},
          protac: {label: 'PROTAC (e.g. dBET1, vepdegestrant)', t: '<b>PROTAC.</b> Two heads on a linker: one binds the target, the other (often a thalidomide-like piece) binds cereblon. Any protein with a binding site can in principle be degraded, and the design is modular. The catch: the molecules are large (vepdegestrant weighs about 724 daltons), which makes absorption, dosing and drug-likeness harder, and the thalidomide-like head can still glue unintended proteins such as GSPT1 or SALL4.'},
        };
        const btns = api.$('.th-gp-btns', root), box = api.$('.th-gp-svg', root), txt = api.$('.th-gp-txt', root);
        const crbn = '<path d="M150 70 C 230 30 330 60 336 130 L 306 150 L 336 170 C 330 240 230 270 156 230 C 116 200 114 100 150 70 Z" class="il-2"/><text x="220" y="156" text-anchor="middle" class="il-white">cereblon</text>';
        const draw = k => {
          let s = '<svg viewBox="0 0 760 300" role="img" aria-label="Glue versus PROTAC"><rect x="0" y="0" width="760" height="300" rx="14" class="il-bg"/>' + crbn;
          if (k === 'glue') {
            s += '<path d="M322 136 l14 8 v16 l-14 8 l-14 -8 v-16 z" class="il-1 il-line"/><line x1="322" y1="44" x2="322" y2="132" class="st-1" stroke-width="1.5"/><text x="322" y="36" text-anchor="middle" class="il-text" style="fill:var(--il-1)">glue</text>';
            s += '<path d="M352 110 C 420 90 500 100 510 150 C 520 210 460 240 400 230 C 360 224 346 196 350 176 L 336 160 L 338 132 Z" class="il-7"/><text x="430" y="170" text-anchor="middle" class="il-white">target</text>';
            s += '<text x="560" y="120" class="il-text">touches cereblon</text><text x="560" y="140" class="il-text">directly</text><text x="560" y="170" class="il-small">small molecule, one piece</text>';
          } else {
            s += '<path d="M322 136 l14 8 v16 l-14 8 l-14 -8 v-16 z" class="il-1 il-line"/>';
            s += '<path d="M336 152 C 390 152 400 110 450 110 C 500 110 500 152 540 152" class="st-1" stroke-width="5" fill="none" stroke-dasharray="2 6" stroke-linecap="round"/>';
            s += '<rect x="534" y="138" width="28" height="28" rx="6" class="il-1"/>';
            s += '<path d="M566 100 C 640 80 720 100 724 150 C 728 210 670 236 614 226 C 580 220 566 196 568 176 L 562 166 L 562 140 Z" class="il-7"/><text x="648" y="170" text-anchor="middle" class="il-white">target</text>';
            s += '<text x="322" y="100" text-anchor="middle" class="il-small">cereblon binder</text><text x="450" y="96" text-anchor="middle" class="il-small">linker</text><text x="548" y="196" text-anchor="middle" class="il-small">target binder</text>';
          }
          s += '<circle cx="120" cy="266" r="8" class="il-4 il-line"/><circle cx="138" cy="262" r="8" class="il-4 il-line"/><circle cx="156" cy="258" r="8" class="il-4 il-line"/><text x="174" y="266" class="il-small">either way: target gets a ubiquitin chain and goes to the proteasome</text></svg>';
          box.innerHTML = s; txt.innerHTML = api.terms(M[k].t);
          api.$$('button', btns).forEach(b => b.setAttribute('aria-pressed', b.dataset.k === k));
        };
        Object.keys(M).forEach(k => { const b = api.el('button', 'btn', api.esc(M[k].label)); b.dataset.k = k; b.onclick = () => draw(k); btns.appendChild(b); });
        const st = document.createElement('style'); st.textContent = '.th-gp-btns .btn[aria-pressed="true"]{background:var(--ink);color:var(--paper);border-color:var(--ink)}'; root.appendChild(st);
        draw('glue');
      }},

    {type: 'callout', variant: 'product', heading: 'Built on someone else\'s platform', html: `<p>Degrader companies are building on a platform they did not create: the cell\'s own ubiquitin system, and in most cases cereblon specifically. It resembles building a product on another company\'s API: fast to start, because the hard infrastructure already exists, but you inherit its quirks, including behaviors you cannot switch off. For cereblon, the inherited behavior is the risk of destroying SALL4 and other proteins nobody intended.</p><p><b>Where the analogy breaks:</b> you cannot read the documentation for cereblon; it took 53 years to learn what the "API" even does, and new side effects are still being discovered. There are about 600 E3 ligases in human cells, and finding new ones that drugs can recruit, with fewer inherited risks, is one of the field's main goals.</p>`},

    // ---------------- 17. THE MONEY ----------------
    {type: 'story', kicker: 'The money', title: 'From a notorious drug to a $12.8 billion product', html: `
<p>Thalomid's sales peaked at about $505 million in 2008. Revlimid was another matter: its worldwide sales grew every year from $321 million in 2006 to $9.7 billion in 2018, according to Celgene's annual reports, and Pomalyst added billions more. Myeloma patients increasingly took lenalidomide continuously for years, so each patient generated revenue for a long time.</p>
<p>Price mattered as much as volume. According to a September 2020 staff report of the US House Committee on Oversight and Reform, written by its Democratic majority, Celgene raised Revlimid's US list price 22 times after the 2005 launch, sometimes three times in a single year, from $215 per capsule to $719 in 2019. After acquiring Celgene, Bristol Myers Squibb raised it again, to $763. A monthly course that cost $4,515 at launch cost $16,023, at [[wholesale acquisition cost]] for a typical 21-day cycle. The report quoted internal documents showing price increases timed to meet revenue targets. It also noted that the key scientific discoveries behind thalidomide's use in myeloma came from academic and publicly funded research, while Celgene said it had invested $800 million in Revlimid's research and development.</p>
<h3>The safety program as a moat</h3>
<p>The same report, and litigation by the generic company Mylan, alleged that Celgene used its restricted-distribution program to block generics. A generic maker must test its copy against samples of the brand drug; Celgene cited safety and its distribution controls in refusing to sell them. The FDA wrote to Celgene in 2014 saying it expected the company to provide samples to Mylan; according to the FDA, the company prevented or delayed 14 generic makers from obtaining samples. An internal Celgene presentation, cited in the litigation, listed "prevention of generic encroachment" as a benefit of a similar program for Thalomid. Congress responded in 2019 with the [[CREATES Act]], which lets generic makers sue for samples.</p>
<p>Patents were the final layer. Rather than fight to the end, Celgene settled patent suits with generic makers. Under a settlement with Natco and its partners, generic lenalidomide could enter the US in March 2022 in limited volumes, with unlimited entry from January 31, 2026. Other generic companies got similar [[volume-limited license|volume-limited licenses]]. The effect was to turn a patent cliff into a slope.</p>
<h3>The deal</h3>
<p>On January 3, 2019, Bristol Myers Squibb announced that it would buy Celgene for about $74 billion in equity value: $50 in cash and one BMS share for each Celgene share, plus a [[contingent value right]] that would pay $9 if certain pipeline drugs were approved by set deadlines. When the deal closed on November 20, 2019, the purchase price was about $80 billion. The companies' merger filings acknowledged that Revlimid was so important that losing its patent protection early "would be harmful to the combined company". Under BMS, Revlimid peaked at $12.8 billion in 2021 and then declined as the volume-limited generics grew: $10.0 billion in 2022, $5.8 billion in 2024 and $3.0 billion in 2025.</p>`},

    {type: 'chart', title: 'Revlimid and Thalomid sales', intro: 'Worldwide net sales, as reported by Celgene (2006–2018) and Bristol Myers Squibb (2020–2025), in US dollars.',
      chart: {kind: 'line', title: 'Annual worldwide sales', unit: '$B', series: [
        {name: 'Revlimid (lenalidomide)', short: 'Revlimid', points: [[2006, 0.32], [2007, 0.77], [2008, 1.32], [2009, 1.71], [2010, 2.47], [2011, 3.21], [2012, 3.77], [2013, 4.28], [2014, 4.98], [2015, 5.80], [2016, 6.97], [2017, 8.19], [2018, 9.69], [2020, 12.11], [2021, 12.82], [2022, 9.98], [2023, 6.10], [2024, 5.77], [2025, 2.95]]},
        {name: 'Thalomid (thalidomide)', short: 'Thalomid', points: [[2006, 0.43], [2007, 0.45], [2008, 0.50], [2009, 0.44], [2010, 0.39], [2011, 0.34], [2012, 0.30], [2013, 0.24], [2014, 0.22], [2015, 0.19]], color: 2},
      ], annotations: [{x: 2019, label: 'BMS buys Celgene', dy: 200}, {x: 2022.2, label: 'Limited generics', dy: 165}], yMax: 14,
      note: '2019 omitted because sales were split between Celgene (to November 20) and BMS. Thalomid shown through 2015. Sources: Celgene Form 10-K filings for 2008, 2010, 2013, 2015 and 2018; BMS Form 10-K filings for 2020, 2022 and 2025.'},
      takeaway: 'A drug approved in 2005 was still growing sixteen years later, driven by longer treatment and higher prices. Settlements that allowed only limited generic volumes from 2022 produced a managed decline rather than a cliff.'},

    {type: 'explorer', title: 'What a year of Revlimid cost', intro: 'US list price (wholesale acquisition cost) per capsule, from the House Oversight report, for a common 21-capsule monthly cycle. List price is not what insurers paid after rebates; the report found Celgene\'s rebates were small (no negotiated Medicare Part D discounts, and at most 5% commercially).',
      inputs: [
        {id: 'era', label: 'Price at', min: 0, max: 2, value: 2, fmt: v => ['launch, 2005', '2019 (Celgene)', '2020 (BMS)'][v]},
        {id: 'm', label: 'Months of treatment', min: 1, max: 60, value: 24, fmt: v => v + ' months'},
      ],
      compute(v, api) {
        const P = [215, 719, 763], p = P[v.era], month = p * 21, total = month * v.m;
        const infl = 215 * 258.811 / 195.3;
        const W = 820, max = 763 * 21 * 60, bw = 560, x0 = 220;
        const bar = (y, val, cls, lab) => `<text x="${x0 - 12}" y="${y + 21}" text-anchor="end" class="il-text">${lab}</text><rect x="${x0}" y="${y}" width="${Math.max(2, bw * val / max)}" height="30" rx="6" class="${cls}"/><text x="${x0 + Math.max(2, bw * val / max) + 8}" y="${y + 21}" class="il-text">$${api.fmt(Math.round(val))}</text>`;
        let s = `<svg viewBox="0 0 ${W} 140" role="img" aria-label="Revlimid cost">`;
        s += bar(14, total, 'il-6', 'this scenario');
        s += bar(62, 215 * 21 * v.m, 'il-8', 'same months at 2005 price');
        s += `<text x="${x0}" y="126" class="il-small">Scale: 60 months at the 2020 price = full width.</text></svg>`;
        return s + `<p style="margin:.4em 0 0">At <b>$${p}</b> a capsule, one month costs about <b>$${api.fmt(month)}</b>, and ${v.m} months cost about <b>$${api.fmt(total)}</b> at list price. For comparison, the 2005 launch price of $215, adjusted for general US inflation (CPI-U), would be about <b>$${Math.round(infl)}</b> in 2020 dollars. The 2020 price was about ${(763 / infl).toFixed(1)} times that.</p>`;
      }},

    {type: 'callout', variant: 'product', heading: 'When the safety feature becomes the moat', html: `<p>Platform companies know the move: a feature introduced for trust and safety (verified accounts, app-store review, API rate limits) also happens to make it harder for competitors to interoperate. S.T.E.P.S. and its successors were genuinely needed and genuinely worked; they also gave Celgene control of every channel through which the drug moved, including the samples a competitor needed.</p><p><b>Where the analogy breaks:</b> in software, regulators usually arrive years after the fact. Here the prohibition was written in advance: the law that created REMS says one may not be used to block or delay generic approval, and the FDA reminded Celgene of this when it approved the Revlimid program in 2010. Enforcement still took years, a lawsuit and, eventually, a new law, while patients paid a monopoly price in the meantime.</p>`},

    // ---------------- 18. WRAP ----------------
    {type: 'story', kicker: 'The post-mortem', title: 'What was actually wrong', html: `
<p>Put the whole story together and the failure was not one bad decision but a chain of assumptions that no system existed to challenge:</p>
<ul>
<li><b>Absence of evidence was treated as evidence of absence.</b> No lethal dose in rodents became "non-toxic"; no reports of harm in pregnancy became "safe for pregnant women". Nobody had looked.</li>
<li><b>The test species was assumed to stand in for people.</b> Even a pregnancy study in rats would probably have missed it. The mechanism that explains why was discovered only in 2018.</li>
<li><b>Signals had no home.</b> Nerve-damage reports went to the company, which had every incentive to explain them away. Birth-defect reports were scattered across hospitals. It took individual doctors, Lenz and McBride, to connect them.</li>
<li><b>Distribution outran knowledge.</b> An over-the-counter launch, licensees in many countries and "investigational" handouts spread the drug faster than anyone could learn about it.</li>
<li><b>The burden of proof sat in the wrong place,</b> except where one reviewer, Kelsey, used her discretion to put it back on the company.</li>
</ul>
<p>Each post-thalidomide reform attacks one link: reproductive studies in more than one species, phased trials with consent, mandatory side-effect reporting, restricted distribution for drugs of known danger, and a legal standard that makes the company prove benefit and safety.</p>
<p>And then there is the surprise. The biology that made thalidomide a catastrophe also made its descendants some of the most important cancer drugs of the past 25 years, and the seed of a new way to make medicines. Both halves come from one fact: when you put a new molecule into a living system, you do not fully know what it does. Thalidomide took 53 years to reveal its target.</p>`},

    // ---------------- QUIZ ----------------
    {type: 'quiz', title: 'Check your understanding', questions: [
      {q: 'Why did standard 1950s animal testing fail to warn about thalidomide\'s birth defects?', options: ['Grünenthal hid positive animal results', 'Pregnant animals were not tested, and the usual species (rats and mice) are resistant anyway', 'Animals metabolize thalidomide too quickly to be harmed by any drug', 'The birth defects only appeared in the second generation'], answer: 1, explain: 'Nobody was required to test pregnant animals, and Grünenthal did not. Even if it had, rodents do not develop thalidomide limb defects; rabbits and primates do. The explanation, that mouse SALL4 escapes the cereblon glue, came only in 2018.'},
      {q: 'Frances Kelsey\'s decisive power in 1960–61 came mainly from:', options: ['A legal requirement that drugs prove efficacy', 'Declaring the application incomplete, which restarted the 60-day clock, and repeatedly asking for better data', 'A presidential order banning thalidomide', 'An advisory committee vote against approval'], answer: 1, explain: 'The efficacy requirement did not exist until October 1962. Kelsey used the one tool the 1938 law gave her: finding the file inadequate, which reset the automatic-approval clock, again and again.'},
      {q: 'Why would selling only the R enantiomer not have prevented the disaster?', options: ['The R form is more toxic', 'The body converts R into S (and back) within hours, and the R form is also teratogenic in rabbits', 'Only the racemic mixture can be absorbed', 'The S form was needed for the sedative effect'], answer: 1, explain: 'Thalidomide\'s chiral hydrogen exchanges readily at body pH, so the forms interconvert in the blood. Whatever enantiomer is swallowed, a mixture results.'},
      {q: 'Which part of the Kefauver–Harris Amendments addressed what happened with Merrell\'s 20,000 American patients most directly?', options: ['Proof of efficacy', 'Informed consent and FDA control of investigational drugs', 'The DESI review of older drugs', 'Moving drug advertising oversight to the FDA'], answer: 1, explain: 'Americans were exposed through an uncontrolled "investigational" program in which patients were not told they were getting an experimental drug and records were poor. Consent and investigational controls closed that gap. Proof of efficacy was the bigger long-term change, but it addressed a different problem.'},
      {q: 'What did the 2014 Ebert and Kaelin papers show about how lenalidomide works?', options: ['It blocks cereblon\'s enzyme activity, like a conventional inhibitor', 'It makes cereblon capture and tag IKZF1 and IKZF3, so they are destroyed', 'It blocks TNF directly', 'It prevents blood vessels from growing into tumors'], answer: 1, explain: 'Rather than inhibiting cereblon, the drug redirects it, gluing it to new targets. Myeloma cells need IKZF1 and IKZF3; a single amino-acid change in IKZF3 made cells resistant.'},
      {q: 'The birth defects and the anti-myeloma effect are best described as:', options: ['Two unrelated effects of the same molecule', 'The same mechanism (a glue on cereblon) acting on different proteins in different cells', 'Effects of different enantiomers', 'The result of impurities in the 1950s manufacturing'], answer: 1, explain: 'In myeloma cells the glue destroys IKZF1/3; in the embryo it destroys SALL4 (and probably others). That is why every cereblon-based drug is screened for embryo-fetal risk.'},
      {q: 'A myeloma drug trial has no control group. When is that design most defensible?', options: ['Whenever the drug is already approved for another disease', 'When patients have refractory disease in which spontaneous improvement is rare, so a clear response signal can be read', 'When the company wants a faster approval', 'Never; single-arm trials are not informative'], answer: 1, explain: 'In refractory myeloma, a 32% response rate on a single oral drug could not plausibly be chance or natural fluctuation. Approval for broader use still came from randomized trials such as MM-009.'},
      {q: 'Why did lenalidomide work so strikingly in MDS with del(5q)?', options: ['It repairs the missing chromosome', 'It degrades CK1α, and del(5q) cells have only one copy of that gene, so they are especially vulnerable', 'It stimulates new blood vessel growth in bone marrow', 'Patients with del(5q) absorb more of the drug'], answer: 1, explain: 'Cells that start with half the normal amount of CK1α cannot survive losing the rest. Lenalidomide degrades CK1α much better than thalidomide or pomalidomide, which is why it is the one approved in this disease.'},
      {q: 'According to the House Oversight report and litigation, how was Revlimid\'s restricted-distribution program used against competitors?', options: ['It barred generics from being prescribed', 'Celgene cited it to refuse or delay selling brand samples that generic makers needed for testing', 'It set a minimum price for all lenalidomide', 'It required generics to run new efficacy trials'], answer: 1, explain: 'Generic makers must test against the brand product. By controlling distribution, Celgene controlled access to samples. The CREATES Act of 2019 gave generic makers a legal route to obtain them.'},
      {q: 'What is the main practical difference between a molecular glue and a PROTAC?', options: ['Glues destroy proteins; PROTACs only block them', 'A glue is one small piece that reshapes the ligase surface; a PROTAC links a target binder to a ligase binder, so it can be designed for any target with a binding site but is much larger', 'PROTACs do not use the proteasome', 'Glues work only in embryos'], answer: 1, explain: 'Both end with ubiquitin tagging and the proteasome. Glues are small and pill-like but hard to design; PROTACs are modular but large, which makes them harder to turn into oral drugs.'},
    ]},

    // ---------------- LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: '"No evidence of harm" is not evidence of safety', text: 'Thalidomide was called safe in pregnancy because nobody had looked. Modern development forces companies to go looking, in the right species and the right populations, before making claims.', links: ['tgn1412', 'vioxx', 'torcetrapib']},
      {title: 'Models are not the system', text: 'Rodents were the wrong model for thalidomide, for reasons found only in 2018. Every preclinical model has blind spots; the defense is several models plus close observation of real-world use.', links: ['tgn1412', 'epacadostat', 'aduhelm']},
      {title: 'Signals need an owner and a duty to act', text: 'The warning signs existed but were scattered or held by a company motivated to explain them away. Mandatory reporting and independent reviewers exist to give signals a home.', links: ['vioxx', 'aduhelm']},
      {title: 'The same mechanism can heal and harm', text: 'Destroying IKZF1/3 kills myeloma; destroying SALL4 disrupts limbs. A drug\'s benefit and its worst side effect often come from one mechanism, so risk management means controlling who is exposed, not just the dose.', links: ['vioxx', 'kymriah', 'humira']},
      {title: 'Understanding the mechanism opens a platform', text: 'Once cereblon was found, a one-off drug became a platform: glues, PROTACs and a new class of targets. Mechanism knowledge often matters more commercially than the original molecule.', links: ['enhertu', 'comirnaty', 'spinraza']},
      {title: 'Safety systems can become business moats', text: 'Restricted distribution was essential for thalidomide and lenalidomide, and it was also used to slow generics while prices rose 22 times. Access and pricing are part of a drug\'s story, not an afterthought.', links: ['sovaldi', 'humira', 'zolgensma']},
    ]},

    // ---------------- SOURCES ----------------
    {type: 'sources', title: 'Sources', items: [
      {text: 'Grünenthal. The Thalidomide tragedy; Historical review; Building a bridge (company account of launch, sales volumes, withdrawal dates, trial, settlement and 2012 apology).', url: 'https://www.thalidomide-tragedy.com/the-thalidomide-tragedy'},
      {text: 'Conterganstiftung (German federal Contergan Foundation). Contergan-Zeitstrahl (timeline, in German): warning signs 1956–1961, numbers affected in Germany, trial and foundation history.', url: 'https://contergan-infoportal.de/stiftung/historie/contergan-zeitstrahl/'},
      {text: 'Vargesson N. Thalidomide-induced teratogenesis: history and mechanisms. Birth Defects Res C 2015;105:140–156.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4737249/'},
      {text: 'Asatsuma-Okumura T, Ito T, Handa H. Molecular mechanisms of the teratogenic effects of thalidomide. Pharmaceuticals 2020;13:95 (sensitive window, species, neosubstrates).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7281272/'},
      {text: 'Malik S, Cohen PR. Thalidomide—then and now. Cureus 2021;13:e16994 (timing of defects by day after fertilization).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8428198/'},
      {text: 'Kim JH, Scialli AR. Thalidomide: the tragedy of birth defects and the effective treatment of disease. Toxicol Sci 2011;122:1–6.', url: 'https://doi.org/10.1093/toxsci/kfr088'},
      {text: 'Bren L. Frances Oldham Kelsey: FDA medical reviewer leaves her mark on history. FDA Consumer, March–April 2001 (Kevadon review, US distribution figures, quotes).', url: 'https://web.archive.org/web/20061020043712/https://www.fda.gov/fdac/features/2001/201_kelsey.html'},
      {text: 'FDA. Frances Oldham Kelsey: medical reviewer famous for averting a public health tragedy.', url: 'https://www.fda.gov/about-fda/fda-history-exhibits/frances-oldham-kelsey-medical-reviewer-famous-averting-public-health-tragedy'},
      {text: 'FDA. Milestones in U.S. Food and Drug Law.', url: 'https://www.fda.gov/about-fda/fda-history/milestones-us-food-and-drug-law'},
      {text: 'Greene JA, Podolsky SH. Reform, regulation, and pharmaceuticals—the Kefauver–Harris Amendments at 50. N Engl J Med 2012;367:1481–1483.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4101807/'},
      {text: 'Ferner RE, Aronson JK. Medicines legislation and regulation in the United Kingdom 1500–2020. Br J Clin Pharmacol 2023 (Committee on Safety of Drugs, Medicines Act 1968).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10087031/'},
      {text: 'MHRA. Yellow Card Scheme looks to the future at 50th anniversary forum (2014).', url: 'https://www.gov.uk/government/news/yellow-card-scheme-looks-to-the-future-at-50th-anniversary-forum'},
      {text: 'Council Directive 65/65/EEC of 26 January 1965 (EUR-Lex).', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:31965L0065'},
      {text: 'Uppsala Monitoring Centre. About the WHO Programme for International Drug Monitoring (launched 1968).', url: 'https://who-umc.org/about-the-who-programme-for-international-drug-monitoring/'},
      {text: 'Science Museum, London. Thalidomide (Distaval advertisement text, UK withdrawal date, UK survivors).', url: 'https://www.sciencemuseum.org.uk/objects-and-stories/medicine/thalidomide'},
      {text: 'UK House of Commons, Hansard, 14 January 2010: Mike O\'Brien statement on thalidomide survivors.', url: 'https://hansard.parliament.uk/'},
      {text: 'BBC News. Thalidomide apology insulting, campaigners say. 1 September 2012.', url: 'https://www.bbc.com/news/health-19448046'},
      {text: 'Humphrey GF. Scientific fraud: the McBride case—judgment. Med Sci Law 1994;34:299–306.', url: 'https://doi.org/10.1177/002580249403400405'},
      {text: 'Eriksson T, et al. Stereospecific determination, chiral inversion in vitro and pharmacokinetics in humans of the enantiomers of thalidomide. Chirality 1995;7:44–52.', url: 'https://doi.org/10.1002/chir.530070109'},
      {text: 'Mori T, et al. Structural basis of thalidomide enantiomer binding to cereblon. Sci Rep 2018;8:1294.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5778007/'},
      {text: 'Rehman W, Arfons LM, Lazarus HM. The rise, fall and subsequent triumph of thalidomide. Ther Adv Hematol 2011 (Sheskin 1964, enantiomer interconversion, myeloma history).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3573415/'},
      {text: 'Sampaio EP, et al. Thalidomide selectively inhibits tumor necrosis factor alpha production by stimulated human monocytes. J Exp Med 1991;173:699–703.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2118820/'},
      {text: 'D\'Amato RJ, Loughnan MS, Flynn E, Folkman J. Thalidomide is an inhibitor of angiogenesis. PNAS 1994;91:4082–4085.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC43727/'},
      {text: 'Zeldis JB, et al. S.T.E.P.S.: a comprehensive program for controlling and monitoring access to thalidomide. Clin Ther 1999;21:319–330; Uhl K, et al. Thalidomide use in the US: experience with pregnancy testing in the S.T.E.P.S. programme. Drug Saf 2006;29:321–329.', url: 'https://doi.org/10.2165/00002018-200629040-00003'},
      {text: 'Singhal S, et al. Antitumor activity of thalidomide in refractory multiple myeloma. N Engl J Med 1999;341:1565–1571.', url: 'https://doi.org/10.1056/NEJM199911183412102'},
      {text: 'Muller GW, et al. Amino-substituted thalidomide analogs: potent inhibitors of TNF-alpha production. Bioorg Med Chem Lett 1999;9:1625–1630.', url: 'https://pubmed.ncbi.nlm.nih.gov/10386948/'},
      {text: 'List A, et al. Lenalidomide in the myelodysplastic syndrome with chromosome 5q deletion. N Engl J Med 2006;355:1456–1465.', url: 'https://doi.org/10.1056/NEJMoa061292'},
      {text: 'Weber DM, et al. Lenalidomide plus dexamethasone for relapsed multiple myeloma in North America (MM-009). N Engl J Med 2007;357:2133–2142.', url: 'https://doi.org/10.1056/NEJMoa070596'},
      {text: 'FDA Drugs@FDA: Thalomid NDA 020785 (approved July 16, 1998), NDA 021430 (myeloma, May 25, 2006); Revlimid NDA 021880 (December 27, 2005; myeloma June 29, 2006); Pomalyst NDA 204026 (February 8, 2013).', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/'},
      {text: 'Ito T, et al. Identification of a primary target of thalidomide teratogenicity. Science 2010;327:1345–1350.', url: 'https://doi.org/10.1126/science.1177319'},
      {text: 'Krönke J, et al. Lenalidomide causes selective degradation of IKZF1 and IKZF3 in multiple myeloma cells. Science 2014;343:301–305.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4077049/'},
      {text: 'Lu G, et al. The myeloma drug lenalidomide promotes the cereblon-dependent destruction of Ikaros proteins. Science 2014;343:305–309.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4070318/'},
      {text: 'Donovan KA, et al. Thalidomide promotes degradation of SALL4, a transcription factor implicated in Duane Radial Ray syndrome. eLife 2018;7:e38430.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6156078/'},
      {text: 'Matyskiela ME, et al. SALL4 mediates teratogenicity as a thalidomide-dependent cereblon substrate. Nat Chem Biol 2018;14:981–987.', url: 'https://doi.org/10.1038/s41589-018-0129-x'},
      {text: 'Sakamoto KM, et al. Protacs: chimeric molecules that target proteins to the Skp1–Cullin–F box complex for ubiquitination and degradation. PNAS 2001;98:8554–8559.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC37474/'},
      {text: 'Winter GE, et al. Phthalimide conjugation as a strategy for in vivo target protein degradation. Science 2015;348:1376–1381.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4937790/'},
      {text: 'Fung S. Vepdegestrant: first approval. Drugs 2026; Kumar A, et al. FDA approval of the first-ever PROTAC: vepdegestrant (ARV-471). J Med Chem 2026; MacLeod RS, Liu CJ. Vepdegestrant for ESR1-mutated breast cancer. Trends Pharmacol Sci 2026.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13360994/'},
      {text: 'Garside H, et al. Safety considerations for cereblon-recruiting targeted protein degraders. Nat Rev Drug Discov 2026.', url: 'https://pubmed.ncbi.nlm.nih.gov/42009768/'},
      {text: 'Arvinas, Inc. Form 10-K for 2025 (Yale license of Crews PROTAC work, July 2013).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001655759&type=10-K'},
      {text: 'US House Committee on Oversight and Reform, majority staff. Drug Pricing Investigation: Celgene and Bristol Myers Squibb—Revlimid. September 2020 (price history, REMS and samples, research funding).', url: 'https://oversightdemocrats.house.gov/sites/evo-subsites/democrats-oversight.house.gov/files/Celgene%20BMS%20Staff%20Report%2009-30-2020.pdf'},
      {text: 'Celgene Corporation, Form 10-K filings for 2008, 2010, 2013, 2015 and 2018 (Revlimid and Thalomid net sales).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000816284&type=10-K'},
      {text: 'Bristol Myers Squibb, Form 10-K filings for 2019, 2020, 2022 and 2025 (Celgene acquisition terms, Revlimid sales, generic settlement terms).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000014272&type=10-K'},
      {text: 'Bristol-Myers Squibb and Celgene press release, January 3, 2019: Bristol-Myers Squibb to acquire Celgene (about $74 billion equity value).', url: 'https://www.sec.gov/Archives/edgar/data/816284/000114420419000237/tv510262_ex99-1.htm'},
      {text: 'Vianna FS, et al. Epidemiological surveillance of birth defects compatible with thalidomide embryopathy in Brazil. PLoS One 2011;6:e21735; Schuler-Faccini L, et al. New cases of thalidomide embryopathy in Brazil. Birth Defects Res A 2007;79:671–672.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3130769/'},
      {text: 'US Bureau of Labor Statistics. Consumer Price Index for All Urban Consumers (CPI-U), annual averages 2005 (195.3) and 2020 (258.811).', url: 'https://www.bls.gov/cpi/'},
    ]},
  ],
});
