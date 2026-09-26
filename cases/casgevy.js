// Casgevy (exagamglogene autotemcel): case file. See GUIDE.md for the contract.
registerCase({
  id: 'casgevy', kind: 'success',
  brand: 'Casgevy', generic: 'exagamglogene autotemcel (exa-cel)', company: 'Vertex Pharmaceuticals and CRISPR Therapeutics',
  tagline: `The first approved medicine that edits a person's own DNA: it cuts one switch in a patient's blood stem cells so their body restarts a hemoglobin it last made in the womb, and stops [[sickle cell disease|sickling]] in its tracks.`,
  chips: [['Disease', '[[sickle cell disease]] and [[beta-thalassemia]]'], ['Modality', '[[ex vivo]] [[CRISPR]]-edited [[cell therapy]]'], ['Target', '[[BCL11A]] erythroid [[enhancer]]'], ['Approved', 'Nov 2023 (UK), Dec 2023 (US)']],
  readingTime: 35,
  stats: [
    {v: '29 of 31', l: 'patients free of [[vaso-occlusive crisis|pain crises]] for at least 12 months in the pivotal sickle cell trial (93.5%)', n: 'FDA label, Trial 1 (CLIMB SCD-121)'},
    {v: '32 of 35', l: 'patients with [[beta-thalassemia]] who stopped needing blood transfusions for at least 12 months (91%)', n: 'Locatelli et al., NEJM 2024'},
    {v: '$2.2M', l: 'US [[list price]] at launch; the rival gene therapy Lyfgenia was priced at $3.1M', n: 'Vertex and bluebird bio 8-K filings, Dec 2023'},
    {v: '~7.7M', l: 'people living with sickle cell disease worldwide in 2021, most of them in Africa and India', n: 'Global Burden of Disease 2021'},
    {v: '64', l: 'patients infused worldwide in all of 2025, two years after approval', n: 'Vertex Q4 2025 results'},
    {v: '15 yrs', l: 'follow-up the FDA requires, because nobody knows what an unintended edit does decades later', n: 'FDA Summary Basis for Regulatory Action'},
  ],
  emblem: `<svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="132" class="il-1s"/>
    <g>
      <path d="M96 40 C 150 70, 150 110, 96 140 M204 40 C 150 70, 150 110, 204 140" class="st-1" stroke-width="7" fill="none" stroke-linecap="round"/>
      <path d="M110 56 H190 M104 74 H196 M104 106 H196 M110 124 H190" class="st-1" stroke-width="5" stroke-linecap="round"/>
      <path d="M150 34 V146" class="st-7" stroke-width="4" stroke-dasharray="8 6"/>
    </g>
    <path d="M112 176 C 62 206, 58 268, 108 292 C 80 258, 82 208, 112 176 Z" class="il-7"/>
    <circle cx="206" cy="234" r="46" class="il-3"/>
    <circle cx="206" cy="234" r="24" class="il-3s"/>
    <path d="M140 234 H166" class="il-line2 st-ink" fill="none" stroke-linecap="round"/>
    <path d="M160 227 L172 234 L160 241 Z" class="il-8"/>
  </svg>`,
  facts: {start: 2008, firstHuman: 2019, approval: 2023, end: null, peakSalesB: 0.12, pivotalN: 44,
    area: 'rare', modality: 'gene editing (ex vivo cell therapy)', target: 'BCL11A erythroid enhancer'},
  themes: ['manufacturing', 'pricing', 'platform', 'patient-advocacy'],
  glossary: {
    'sickle cell disease': 'An inherited blood disease in which a single DNA change makes hemoglobin clump into stiff fibers when it gives up its oxygen, deforming red cells into rigid crescents that block small blood vessels.',
    'sickle cell trait': 'Carrying one sickle gene and one normal one. Carriers are healthy in ordinary life and are partly protected against severe malaria, which is why the gene became common.',
    'hemoglobin': 'The protein that fills a red blood cell and carries oxygen. Each molecule is four protein chains, each wrapped around an iron-containing group called heme.',
    'alpha-globin': 'One of the two kinds of protein chain in hemoglobin. Every hemoglobin molecule, fetal or adult, contains two alpha chains.',
    'beta-globin': 'The adult partner chain in hemoglobin. Two alpha plus two beta chains make adult hemoglobin (HbA). The sickle mutation is in the beta-globin gene, HBB.',
    'gamma-globin': 'The fetal partner chain. Two alpha plus two gamma chains make fetal hemoglobin. The gamma genes are switched off in the months after birth.',
    'HbS': 'Sickle hemoglobin: hemoglobin built with the mutated beta chain. When it releases oxygen it can stack into long fibers that stiffen the red cell.',
    'fetal hemoglobin': 'HbF: the hemoglobin a fetus makes, built from gamma chains instead of beta chains. It grips oxygen more tightly than adult hemoglobin and, crucially, cannot join a sickle fiber.',
    'HPFH': 'Hereditary persistence of fetal hemoglobin: an inherited quirk in which the fetal hemoglobin switch never fully closes. People who have it along with the sickle mutation can be almost symptom-free.',
    'F-cells': 'Red blood cells that contain a detectable amount of fetal hemoglobin. What matters clinically is not only how many F-cells there are but how much fetal hemoglobin each one holds.',
    'pancellular': 'Spread evenly across all red cells, rather than concentrated in a few. Pancellular fetal hemoglobin protects every cell; the same average packed into a minority of cells does not.',
    'vaso-occlusive crisis': 'The signature event of sickle cell disease: sickled cells and inflamed vessel walls block blood flow, starving tissue of oxygen and causing sudden, severe pain that often needs opioids and hospital care.',
    'acute chest syndrome': 'A sickle cell emergency in which vessels in the lung block up, causing fever, chest pain and falling oxygen. A leading cause of death in the disease.',
    'beta-thalassemia': 'An inherited disease in which the beta-globin gene makes too little or no protein, so red cells cannot be filled properly. The severe form needs blood transfusions every few weeks for life.',
    'transfusion-dependent': 'Needing regular blood transfusions to survive, typically every three to five weeks, with the iron overload and chelation drugs that come with them.',
    'iron chelation': 'Drugs that pull excess iron out of the body. Regularly transfused patients accumulate iron that damages the heart and liver, so chelation is lifelong.',
    'hydroxyurea': 'An old chemotherapy pill, repurposed for sickle cell disease. It raises fetal hemoglobin in most patients and roughly halves the rate of pain crises, but responses vary and it is badly underused.',
    'voxelotor': 'A pill (Oxbryta) that made hemoglobin hold on to oxygen longer, approved in 2019 and voluntarily withdrawn worldwide in September 2024 after safety data showed more deaths and pain crises than expected.',
    'crizanlizumab': 'An antibody (Adakveo) against P-selectin, a sticky molecule on blood vessel walls, given monthly to reduce pain crises.',
    'hematopoietic stem cell': 'The rare cell in bone marrow that makes every blood cell: red cells, white cells and platelets. Replace them and you replace the blood factory.',
    'CD34+': 'The surface marker used to identify and sort hematopoietic stem and progenitor cells. "CD34-positive cells" is the working definition of the stem cell product.',
    'bone marrow': 'The soft tissue inside bones where blood cells are made.',
    'allogeneic': 'Using cells from another person, which means finding a matched donor and suppressing the immune system.',
    'autologous': 'Using the patient\'s own cells, so there is no rejection and no donor to find.',
    'HLA': 'Human leukocyte antigen: the set of molecules that lets the immune system tell self from non-self. A stem cell transplant needs donor and patient HLA types to match closely.',
    'graft-versus-host disease': 'When immune cells in a donor graft attack the recipient\'s own tissues: skin, gut and liver. The main reason allogeneic transplants can kill.',
    'mobilization': 'Coaxing stem cells out of the bone marrow into the bloodstream with drugs so they can be collected from a vein.',
    'plerixafor': 'A drug that releases stem cells from the marrow into the blood by blocking the anchor (CXCR4) that holds them in place. The only mobilizer used in sickle cell disease.',
    'G-CSF': 'Granulocyte colony-stimulating factor: the usual stem cell mobilizing drug. It is banned in sickle cell disease because it has triggered fatal crises.',
    'apheresis': 'A procedure in which blood runs from a vein through a machine that skims off one component and returns the rest. Here, it harvests stem cells.',
    'myeloablative conditioning': 'Chemotherapy strong enough to destroy the existing bone marrow, clearing space so transplanted stem cells can take over. It causes infertility and weeks of severe illness.',
    'busulfan': 'The chemotherapy drug used to empty the marrow before Casgevy. Its dose has to be tuned by blood tests, and it causes mouth sores, infections, and usually permanent infertility.',
    'engraftment': 'The moment transplanted stem cells settle in the marrow and start producing blood cells again, measured by neutrophil and platelet counts recovering.',
    'veno-occlusive disease': 'VOD: small veins in the liver swell shut after conditioning chemotherapy, causing liver failure. A known, sometimes fatal complication of transplants.',
    'mucositis': 'Painful breakdown of the lining of the mouth and gut caused by chemotherapy. Patients often cannot eat and need intravenous nutrition and opioids.',
    'neutropenia': 'A dangerously low count of neutrophils, the white cells that fight bacteria. Every Casgevy patient goes through it after conditioning.',
    'ex vivo': 'Outside the body. Casgevy edits cells in a factory and puts them back, rather than editing cells inside the patient.',
    'in vivo': 'Inside the body. The next generation of editing aims to inject the editing machinery and have it find the right cells itself.',
    'CRISPR': 'A bacterial defense system repurposed as a gene-editing tool: a short RNA guide steers a cutting protein to a matching stretch of DNA.',
    'Cas9': 'The DNA-cutting protein of the CRISPR system, borrowed from Streptococcus pyogenes. Given a guide RNA, it clamps onto the matching DNA and cuts both strands.',
    'guide RNA': 'A short RNA, about 20 letters of it matching the target, that tells Cas9 where to cut.',
    'PAM': 'Protospacer adjacent motif: a tiny sequence (for this Cas9, the letters "NGG") that must sit right next to the target. Without a PAM, Cas9 will not cut, however good the match.',
    'double-strand break': 'A clean cut through both strands of the DNA helix. Cells panic and repair it, usually sloppily, which is how an editor disables a piece of DNA.',
    'NHEJ': 'Non-homologous end joining: the cell\'s fast, sloppy way of gluing a cut in DNA back together. It usually adds or deletes a few letters, which is enough to destroy a binding site.',
    'ribonucleoprotein': 'A complex of protein and RNA. Casgevy is made by delivering Cas9 already loaded with its guide RNA, so it works immediately and then degrades.',
    'electroporation': 'A brief electrical pulse that opens temporary holes in cell membranes so large molecules can get inside. How the Cas9 complex gets into the stem cells.',
    'enhancer': 'A stretch of DNA that is not a gene but controls one: proteins landing on it turn a nearby gene up. An enhancer can be active in one cell type and silent in another.',
    'transcription factor': 'A protein that binds a specific DNA sequence and turns genes on or off.',
    'GATA1': 'A master transcription factor of red blood cell development. Casgevy\'s cut destroys one GATA1 landing site inside the BCL11A enhancer.',
    'BCL11A': 'The protein that shuts off fetal hemoglobin in adult red cells. It is also needed by brain and immune cells, which is why the therapy targets its red-cell-only enhancer rather than the gene itself.',
    'off-target editing': 'A cut made somewhere in the genome other than the intended site, because the sequence there resembles the target closely enough.',
    'base editing': 'A newer form of editing that chemically converts one DNA letter into another without cutting both strands of the helix.',
    'allele': 'One of the two copies of a stretch of DNA a person carries, one from each parent.',
    'WAC': 'Wholesale acquisition cost: the US list price a manufacturer publishes, before the rebates and discounts payers negotiate.',
    'outcomes-based agreement': 'A contract in which the manufacturer refunds part of the price if the patient does not reach agreed results.',
    'CGT Access Model': 'A Medicare and Medicaid Innovation Center program, focused first on sickle cell disease, in which the federal government negotiates outcomes-based gene therapy contracts on behalf of state Medicaid programs.',
    'RMAT': 'Regenerative Medicine Advanced Therapy designation: an FDA status for cell and gene therapies with early evidence of benefit, bringing extra meetings and faster review.',
    'priority review voucher': 'A transferable FDA coupon, earned for treating a rare pediatric disease, that buys a faster review for any future drug. Vouchers have sold for around $100 million.',
    'authorized treatment center': 'A hospital qualified and contracted by the manufacturer to collect cells, give the conditioning chemotherapy and infuse the product. There is no other way to get the therapy.',
    'lentivirus': 'An engineered virus, derived from HIV with its disease-causing genes removed, used to insert a new gene permanently into a cell\'s chromosomes.',
  },
  sections: [
    // ---------------- 1. COLD OPEN ----------------
    {type: 'story', kicker: 'Nashville, July 2019', title: 'A bag of your own cells, rewritten', tocTitle: 'Cold open',
      html: `<p>Victoria Gray was 34 years old, a mother of four from Forest, Mississippi, and she had spent her life being interrupted. She was diagnosed with [[sickle cell disease]] as a baby, when she started screaming in the bath. As an adult the pain came in attacks she described to NPR as lightning strikes in her chest. "Sometimes, I will be just balled up and crying, not able to do anything for myself," she said. Her heart had already been damaged. Her oldest son had started acting out at school because he believed his mother was going to die.</p>
      <p>On a July day in 2019, in a hospital room at TriStar Centennial Medical Center in Nashville, a nurse hung a small bag of pale liquid and ran it into her vein. It took under an hour. The bag held billions of her own [[hematopoietic stem cell|blood stem cells]], collected from her blood weeks earlier, flown to a factory, and returned with one stretch of their DNA deliberately cut.</p>
      <p>To get to that moment she had already been through the hard part. Drugs to shake the stem cells loose from her bones. Days on an [[apheresis]] machine. Then four days of [[busulfan]], chemotherapy strong enough to destroy the [[bone marrow]] she was born with, which meant mouth sores, infections, a long stay in hospital, and near-certain infertility. The infusion was the easy part. The bag was just the delivery.</p>
      <p>The cut itself was almost absurdly small. Out of about 3 billion letters of DNA in each cell, the target was a stretch of a few dozen letters, in a piece of DNA that is not even a gene. It is a switch. Closing that switch does not repair Gray's sickle mutation; her sickle gene is still there, still broken, in every cell of her body. What the edit does is restart a second hemoglobin that she last made before she was born, one that physically cannot take part in sickling.</p>
      <p>A year later Gray told NPR that the pain crises had stopped: "It's the change I've been waiting on my whole life." She was the first patient in the United States treated with [[CRISPR]] for a genetic disease. Four and a half years after her infusion, on 8 December 2023, the FDA approved the therapy as Casgevy, the first CRISPR medicine anywhere in the world.</p>
      <p>This case is about what that took: a 70-year detective story about one amino acid, a switch found by geneticists studying people who are accidentally healthy, a patent war over a bacterial immune system, a $2.2 million price, and a launch so slow that two years after approval the company had infused 64 patients in a year, in a disease that affects about 100,000 Americans and nearly 8 million people worldwide.</p>`},

    // ---------------- 2. THE DISEASE FROM ZERO ----------------
    {type: 'story', kicker: 'The disease', title: 'Sickle cell disease from zero', tocTitle: 'The disease',
      html: `<p>Start with the cargo problem. Every cell in your body burns oxygen, and oxygen does not dissolve well in water. So blood carries it in specialized containers: red blood cells, about 25 trillion of them, each one essentially a flexible bag stuffed with a single [[protein]] called [[hemoglobin]]. A red cell is roughly 96% hemoglobin by dry weight. It has thrown out its nucleus to make room.</p>
      <p>Each hemoglobin molecule is four protein chains clasped together: two [[alpha-globin|alpha]] chains and two [[beta-globin|beta]] chains, each wrapped around an iron-containing ring that actually grabs the oxygen. In the lungs it loads up. In a working muscle it lets go. Loading and unloading changes the molecule's shape slightly, and that shape change is where the disease lives.</p>
      <h3>One letter</h3>
      <p>In [[sickle cell disease]], the [[gene]] for beta-globin carries a single letter change: an A becomes a T. That switches the sixth amino acid of the beta chain from glutamic acid, which carries a negative charge and likes water, to valine, which is greasy and does not. The result is a tiny sticky patch on the surface of the molecule. James Herrick described the strange elongated cells in 1910. Linus Pauling and Harvey Itano showed in 1949 that the hemoglobin itself was electrically different, coining the phrase "molecular disease." In 1957 Vernon Ingram identified the exact swap, the first time a human disease had ever been traced to one amino acid in one protein.</p>
      <p>Here is the cruel part. When [[HbS|sickle hemoglobin]] is carrying oxygen, it behaves almost normally. When it hands the oxygen over, the shape change exposes a pocket on a neighboring molecule that the sticky valine patch fits into perfectly. One molecule grabs the next, which grabs the next. Within seconds, long stiff fibers grow inside the cell and shove it out of shape into the crescent that gives the disease its name. Re-oxygenate the blood and the fibers melt and the cell springs back. Do this a few thousand times and the membrane is wrecked for good.</p>
      <h3>What that does to a person</h3>
      <ul>
        <li><b>Pain.</b> Stiff, sticky cells jam capillaries and inflame vessel walls. Tissue downstream is starved of oxygen. The result is a [[vaso-occlusive crisis]]: sudden, severe pain in bones, chest, back or abdomen, usually for days, often needing hospital care and opioids.</li>
        <li><b>Anemia.</b> A sickled cell survives 10 to 20 days instead of 120. The marrow cannot keep up, so patients are permanently short of blood and tired.</li>
        <li><b>Organ damage.</b> [[acute chest syndrome|Acute chest syndrome]] fills the lungs. The spleen dies in childhood, leaving children vulnerable to bacterial infection. Blocked vessels in the brain cause strokes, including silent ones that cost IQ points. Kidneys, hips, eyes and lungs all wear out early.</li>
        <li><b>A shortened life.</b> A 1994 US cohort found a median age at death of 42 for men and 48 for women with sickle cell anemia. A 2019 modeling study put average life expectancy at 54 years, against 76 for matched Americans without the disease, along with about $695,000 of lost lifetime income.</li>
      </ul>
      <h3>Why the gene is common</h3>
      <p>A mutation this damaging should have been weeded out. It was not, because carrying one copy is protective. People with [[sickle cell trait]] make both normal and sickle hemoglobin, are clinically fine, and are strikingly resistant to severe malaria; a meta-analysis of 44 studies found roughly a 90% lower risk of severe <i>Plasmodium falciparum</i> malaria in carriers. Anthony Allison pinned the connection down in East Africa in 1954. Where malaria was endemic, the gene paid for itself: carriers survived childhood, and one child in four of two carriers paid the price.</p>
      <p>That history is written on the map. Sickle hemoglobin is common across sub-Saharan Africa, parts of the Middle East and India, and in populations descended from them. In 2021 about 7.7 million people were living with sickle cell disease worldwide and roughly 515,000 babies were born with it. Half of all affected newborns are born in just three countries: Nigeria, India and the Democratic Republic of Congo. In the United States the disease affects about 100,000 people: roughly 1 in 365 Black American births, and about 1 in 16,300 Hispanic American births. About 1 in 13 Black American babies carries the trait.</p>
      <h3>The sibling disease</h3>
      <p>[[beta-thalassemia|Beta-thalassemia]] is the same gene failing a different way. Instead of making a faulty beta chain, the gene makes too few, or none. Alpha chains then pile up unpartnered and poison the developing red cell. Children with the severe form become [[transfusion-dependent]]: a blood transfusion every three to five weeks for life, plus daily [[iron chelation]] drugs to clear the iron the transfusions deposit in the heart and liver. It is common around the Mediterranean, the Middle East, South Asia and Southeast Asia. Both diseases share one feature that turns out to be the key to this whole story: they only become a problem after birth.</p>`},

    {type: 'figure', title: 'Hemoglobin, and the one letter that breaks it', tocTitle: 'Hemoglobin',
      intro: 'The oxygen container, the fault, and the fetal version that does not have the fault. Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 430">
        <text x="20" y="28" class="il-title">Adult hemoglobin (HbA)</text>
        <g data-part="alpha">
          <circle cx="110" cy="102" r="40" class="il-1s il-line"/><circle cx="208" cy="102" r="40" class="il-1s il-line"/>
          <text x="110" y="122" text-anchor="middle" class="il-text">alpha</text><text x="208" y="122" text-anchor="middle" class="il-text">alpha</text>
        </g>
        <g data-part="beta">
          <circle cx="110" cy="198" r="40" class="il-2s il-line"/><circle cx="208" cy="198" r="40" class="il-2s il-line"/>
          <text x="110" y="218" text-anchor="middle" class="il-text">beta</text><text x="208" y="218" text-anchor="middle" class="il-text">beta</text>
        </g>
        <g data-part="heme">
          <rect x="97" y="72" width="26" height="26" rx="6" class="il-7"/><rect x="195" y="72" width="26" height="26" rx="6" class="il-7"/>
          <rect x="97" y="168" width="26" height="26" rx="6" class="il-7"/><rect x="195" y="168" width="26" height="26" rx="6" class="il-7"/>
          <text x="286" y="108" class="il-text-2">heme + iron</text>
        </g>
        <g data-part="oxygen">
          <circle cx="110" cy="46" r="9" class="il-3"/><circle cx="208" cy="46" r="9" class="il-3"/>
          <circle cx="54" cy="198" r="9" class="il-3"/><circle cx="264" cy="198" r="9" class="il-3"/>
          <text x="286" y="202" class="il-text-2">4 oxygens per molecule</text>
        </g>
        <g data-part="patch">
          <circle cx="238" cy="226" r="13" class="il-4"/>
          <text x="20" y="266" class="il-text">Position 6: valine</text>
          <text x="20" y="286" class="il-text-2">a greasy patch where glutamic acid should be</text>
        </g>
        <g data-part="gene">
          <rect x="20" y="312" width="352" height="96" rx="12" class="il-paper il-line"/>
          <text x="36" y="338" class="il-small">beta-globin gene (HBB), codons 3 to 7</text>
          <rect x="250" y="352" width="20" height="24" rx="4" class="il-7s il-line"/>
          <text x="40" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">C</text>
          <text x="62" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">T</text>
          <text x="84" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">G</text>
          <text x="106" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">A</text>
          <text x="128" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">C</text>
          <text x="150" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">T</text>
          <text x="172" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">C</text>
          <text x="194" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">C</text>
          <text x="216" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">T</text>
          <text x="238" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">G</text>
          <text x="260" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">A</text>
          <text x="282" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">G</text>
          <text x="304" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">G</text>
          <text x="326" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">A</text>
          <text x="348" y="370" text-anchor="middle" class="il-text" style="font-family: var(--mono)">G</text>
          <text x="36" y="398" class="il-small">that A becomes T: GAG (Glu) to GTG (Val)</text>
        </g>
        <text x="420" y="28" class="il-title">What happens when the oxygen leaves</text>
        <g data-part="polymer">
          <ellipse cx="572" cy="140" rx="112" ry="82" class="il-7s il-line"/>
          <path d="M504 112 L640 158 M498 142 L634 188 M510 176 L646 126" class="st-7" stroke-width="7" stroke-linecap="round"/>
          <text x="572" y="248" text-anchor="middle" class="il-text">Fibers of HbS stack up inside the cell</text>
        </g>
        <g data-part="sickled">
          <path d="M818 76 C 754 114, 750 192, 812 230 C 776 190, 776 118, 818 76 Z" class="il-7"/>
          <text x="790" y="256" text-anchor="middle" class="il-text">stiff crescent</text>
          <text x="790" y="274" text-anchor="middle" class="il-text-2">jams small vessels</text>
        </g>
        <g data-part="hbf">
          <rect x="420" y="300" width="460" height="110" rx="12" class="il-3s il-line"/>
          <circle cx="470" cy="336" r="21" class="il-1s il-line"/><circle cx="518" cy="336" r="21" class="il-1s il-line"/>
          <circle cx="470" cy="380" r="21" class="il-3 il-line"/><circle cx="518" cy="380" r="21" class="il-3 il-line"/>
          <text x="470" y="341" text-anchor="middle" class="il-small">alpha</text><text x="518" y="341" text-anchor="middle" class="il-small">alpha</text>
          <text x="470" y="385" text-anchor="middle" class="il-white" style="font-size: 10px">gamma</text><text x="518" y="385" text-anchor="middle" class="il-white" style="font-size: 10px">gamma</text>
          <text x="556" y="330" class="il-title">Fetal hemoglobin (HbF)</text>
          <text x="556" y="354" class="il-text-2">Gamma chains instead of beta chains.</text>
          <text x="556" y="374" class="il-text-2">No sticky patch, no pocket to grab:</text>
          <text x="556" y="394" class="il-text-2">it cannot join a sickle fiber.</text>
        </g>
      </svg>`,
      hotspots: {
        alpha: {title: 'The alpha chains', text: 'Two of them in every hemoglobin molecule, fetal or adult, made from genes on chromosome 16. They are not affected in sickle cell disease, which is why the therapy never touches them.'},
        beta: {title: 'The beta chains', text: 'The adult partner chains, from the HBB gene on chromosome 11. One letter in this gene is the entire cause of sickle cell disease. In [[beta-thalassemia]] the same gene instead makes too little protein.'},
        heme: {title: 'Heme and iron', text: 'Each chain cradles a flat ring with an iron atom at its center. The iron binds the oxygen. This is also why blood is red and why repeated transfusions overload the body with iron.'},
        oxygen: {title: 'Loading and unloading', text: 'Picking up oxygen in the lungs and letting go in the tissues changes hemoglobin\'s shape. Sickle hemoglobin is nearly harmless in its oxygen-loaded shape; it is the unloaded shape that stacks.'},
        patch: {title: 'The sticky patch', text: 'Glutamic acid (negatively charged, water-loving) becomes valine (greasy). The patch fits a pocket that opens up on a neighboring deoxygenated molecule. That single fit is the whole disease.'},
        gene: {title: 'The mutation in the DNA', text: 'A single A-to-T substitution in codon 6 of HBB. In modern notation HBB c.20A>T. Everything downstream, from the crescent cells to a 20-year loss of life expectancy, follows from that one letter.'},
        polymer: {title: 'Polymerization', text: 'Fibers of stacked HbS grow inside the cell within seconds of deoxygenation. Whether they form at all depends steeply on concentration: a small dilution of HbS delays fiber formation enormously, which is the loophole this therapy exploits.'},
        sickled: {title: 'The sickled cell', text: 'Stiff, sticky and short-lived. It blocks capillaries, sticks to inflamed vessel walls, drags white cells and platelets into the jam, and dies early, leaving the patient anemic.'},
        hbf: {title: 'Fetal hemoglobin: the built-in escape route', text: 'Every human makes HbF in the womb. Gamma chains lack the pocket that the sickle patch grabs, so HbF molecules cannot be recruited into a fiber and they dilute the HbS that is left. Babies with sickle cell disease are healthy for their first months for exactly this reason.'},
      },
      caption: 'Schematic. Color key used throughout this case: the therapy and stem cells blue, sickle hemoglobin and disease red, fetal hemoglobin and healthy cells aqua, molecules and switches yellow, money violet.'},

    {type: 'callout', variant: 'misconception', heading: '"It is one letter, so it should be the easiest disease to fix"',
      html: `<p>Sickle cell disease has been the textbook example of a simple genetic disease since 1957. That simplicity is exactly what made it a graveyard. One letter is easy to <i>describe</i> and brutally hard to <i>reach</i>: it sits in a gene that has to be read at enormous volume, only in one cell type, only after birth, in stem cells buried in bone. Gene therapy corrected sickle cell disease in mouse models in 2001 (Pawliuk and colleagues, <i>Science</i>). The first approved human therapy came 22 years later, and even then it does not correct the letter. It works around it.</p>`},

    // ---------------- 3. MECHANISM ----------------
    {type: 'mechanism', title: 'From one letter to a blocked vessel, and how an edit undoes it', tocTitle: 'How it works',
      intro: 'Eight steps: the fault, the damage, and the workaround. Use the arrows or the dots.',
      svg: `<svg viewBox="0 0 760 440">
        <g data-part="genepanel">
          <rect x="14" y="40" width="244" height="150" rx="14" class="il-paper il-line"/>
          <text x="30" y="66" class="il-title">The gene</text>
          <path d="M40 92 H232 M40 140 H232" class="il-line2 st-ink" fill="none"/>
          <path d="M60 92 V140 M92 92 V140 M124 92 V140 M156 92 V140 M188 92 V140 M220 92 V140" class="il-line"/>
          <text x="30" y="172" class="il-small">beta-globin (HBB), codon 6</text>
        </g>
        <g data-part="normalcodon">
          <rect x="108" y="98" width="70" height="36" rx="7" class="il-3s"/>
          <text x="143" y="123" text-anchor="middle" class="il-text" style="font-family: var(--mono)">GAG</text>
        </g>
        <g data-part="mutcodon">
          <rect x="108" y="98" width="70" height="36" rx="7" class="il-7s"/>
          <text x="143" y="123" text-anchor="middle" class="il-text" style="font-family: var(--mono)">GTG</text>
          <text x="143" y="212" text-anchor="middle" class="il-text-2">A to T: Glu becomes Val</text>
        </g>
        <g data-part="cell">
          <circle cx="400" cy="200" r="86" class="il-7s il-line2"/>
          <circle cx="400" cy="200" r="46" class="il-bg"/>
          <text x="400" y="310" text-anchor="middle" class="il-text">A red blood cell</text>
        </g>
        <g data-part="hbdots">
          <circle cx="360" cy="160" r="11" class="il-4"/><circle cx="440" cy="162" r="11" class="il-4"/>
          <circle cx="356" cy="240" r="11" class="il-4"/><circle cx="444" cy="238" r="11" class="il-4"/>
          <circle cx="400" cy="132" r="11" class="il-4"/><circle cx="400" cy="268" r="11" class="il-4"/>
        </g>
        <g data-part="fibers">
          <path d="M338 168 L462 212 M332 200 L456 244 M348 236 L470 184" class="st-7" stroke-width="9" stroke-linecap="round"/>
        </g>
        <g data-part="sickle">
          <path d="M432 118 C 336 168, 332 250, 428 296 C 376 240, 376 174, 432 118 Z" class="il-7"/>
          <text x="400" y="330" text-anchor="middle" class="il-text-2">stiff, sticky, short-lived</text>
        </g>
        <g data-part="vessel">
          <path d="M556 46 C 640 46, 640 132, 596 168 C 552 204, 552 300, 640 330" style="stroke: var(--il-2s); stroke-width: 38" fill="none" stroke-linecap="round"/>
          <text x="640" y="40" class="il-text">blood vessel</text>
        </g>
        <g data-part="flow">
          <circle cx="592" cy="52" r="11" class="il-3"/><circle cx="624" cy="96" r="11" class="il-3"/><circle cx="600" cy="150" r="11" class="il-3"/><circle cx="566" cy="230" r="11" class="il-3"/><circle cx="596" cy="300" r="11" class="il-3"/>
        </g>
        <g data-part="jam">
          <path d="M576 176 C 560 190, 556 208, 558 226" class="st-7" stroke-width="9" fill="none" stroke-linecap="round"/>
          <path d="M590 168 C 574 182, 570 200, 572 218" class="st-7" stroke-width="9" fill="none" stroke-linecap="round"/>
          <path d="M604 184 C 588 198, 584 216, 586 234" class="st-7" stroke-width="9" fill="none" stroke-linecap="round"/>
          <path d="M642 196 l26 -14 M648 214 l30 0 M642 232 l26 14" class="st-7" stroke-width="4" stroke-linecap="round" fill="none"/>
          <text x="690" y="220" class="il-text">pain</text>
          <text x="430" y="404" class="il-text-2">tissue downstream starved of oxygen</text>
        </g>
        <g data-part="editpanel">
          <rect x="170" y="110" width="430" height="300" rx="14" class="il-paper il-line"/>
          <text x="192" y="146" class="il-title">The fix: one cut</text>
          <text x="192" y="172" class="il-text-2">the BCL11A erythroid enhancer</text>
          <path d="M196 296 H576 M196 340 H576" class="il-line2 st-ink" fill="none"/>
          <path d="M236 296 V340 M276 296 V340 M316 296 V340 M436 296 V340 M476 296 V340 M516 296 V340 M556 296 V340" class="il-line"/>
          <rect x="350" y="296" width="70" height="44" rx="7" class="il-4"/>
          <text x="385" y="324" text-anchor="middle" class="il-white">GATA1</text>
        </g>
        <g data-part="cas9">
          <path d="M385 226 m-48 0 a48 36 0 1 0 96 0 a48 36 0 1 0 -96 0" class="il-1"/>
          <text x="385" y="232" text-anchor="middle" class="il-white">Cas9</text>
          <path d="M385 262 c -14 8, 14 16, 0 26" class="st-4" stroke-width="4" fill="none"/>
          <text x="444" y="270" class="il-small">guide RNA: 20 letters that match</text>
        </g>
        <g data-part="cut">
          <path d="M385 288 V352" class="st-7" stroke-width="4" stroke-dasharray="6 4"/>
          <text x="192" y="378" class="il-text-2">GATA1 site destroyed: no BCL11A in red cells</text>
          <text x="192" y="398" class="il-text-2">the gamma-globin genes switch back on</text>
        </g>
        <g data-part="hbfdots">
          <circle cx="360" cy="160" r="11" class="il-3"/><circle cx="440" cy="162" r="11" class="il-3"/>
          <circle cx="356" cy="240" r="11" class="il-3"/><circle cx="400" cy="132" r="11" class="il-3"/>
          <circle cx="444" cy="238" r="11" class="il-4"/><circle cx="400" cy="268" r="11" class="il-4"/>
          <text x="400" y="352" text-anchor="middle" class="il-text-2">about 44% of the hemoglobin is now fetal</text>
        </g>
      </svg>`,
      steps: [
        {title: '1. A cell full of hemoglobin', text: 'A red blood cell is a flexible bag carrying about 270 million [[hemoglobin]] molecules (yellow). Normal beta-globin comes from a gene whose sixth codon reads GAG: glutamic acid. Cells flow single file through capillaries thinner than they are, folding to fit.',
          show: ['genepanel', 'normalcodon', 'cell', 'hbdots', 'vessel', 'flow']},
        {title: '2. One letter changes', text: 'A single A becomes a T. The sixth amino acid becomes valine, leaving a greasy patch on the outside of every hemoglobin molecule the cell makes. With oxygen on board, almost nothing happens. This is why the disease is invisible in an arterial blood sample.',
          show: ['genepanel', 'mutcodon', 'cell', 'hbdots', 'vessel', 'flow'], focus: ['mutcodon'], pulse: ['mutcodon']},
        {title: '3. Oxygen leaves, fibers grow', text: 'In the tissues, hemoglobin gives up its oxygen and changes shape, opening a pocket that the greasy patch fits. Molecules stack into long fibers. How fast this happens depends steeply on the concentration of [[HbS]]: dilute it and the fibers may never form before the cell is back in the lungs.',
          show: ['genepanel', 'mutcodon', 'cell', 'hbdots', 'fibers'], focus: ['fibers'], dim: ['hbdots']},
        {title: '4. The cell deforms', text: 'The growing fibers shove the membrane out of shape into a crescent. Early on the change reverses with each breath of oxygen. After thousands of cycles the membrane is permanently damaged: the cell is stiff, sticky, leaky, and lives 10 to 20 days instead of 120.',
          show: ['genepanel', 'mutcodon', 'sickle'], focus: ['sickle']},
        {title: '5. The jam, and the pain', text: 'Stiff cells cannot fold through capillaries, and damaged cells stick to inflamed vessel walls, pulling in white cells and platelets. Flow stops. The tissue downstream is starved of oxygen, which is what a [[vaso-occlusive crisis]] actually is. In the lung it is [[acute chest syndrome]]; in the brain it is a stroke.',
          show: ['sickle', 'vessel', 'jam'], dim: ['sickle'], focus: ['jam'], pulse: ['jam']},
        {title: '6. The edit: one cut in a switch', text: 'Casgevy never touches the sickle mutation. In a factory, [[Cas9]] loaded with a [[guide RNA]] is delivered into the patient\'s own blood stem cells and cuts a stretch of DNA called the erythroid [[enhancer]] of [[BCL11A]]: a control element that works only in red-cell precursors. The cut lands on a [[GATA1]] landing site.',
          show: ['editpanel', 'cas9'], focus: ['cas9'], pulse: ['cas9']},
        {title: '7. The switch breaks, the fetal genes wake up', text: 'The cell repairs the cut sloppily, adding or deleting a few letters. The GATA1 site is destroyed, so the enhancer goes quiet and red-cell precursors stop making the BCL11A protein. BCL11A is the repressor that shuts off the fetal [[gamma-globin]] genes after birth. Without it, they switch back on.',
          show: ['editpanel', 'cut'], focus: ['cut']},
        {title: '8. Fetal hemoglobin returns, and the cell stays round', text: 'The edited stem cells rebuild the whole blood factory. Their red cells fill with [[fetal hemoglobin]], which cannot join a sickle fiber and dilutes the HbS that remains. In the trial, fetal hemoglobin averaged about 44% of total hemoglobin at 6 months and was present in around 94% of red cells. The cells stay round; the jams stop.',
          show: ['cell', 'hbfdots', 'vessel', 'flow'], focus: ['hbfdots']},
      ]},

    {type: 'callout', variant: 'product', heading: 'Patching the config, not the source code',
      html: `<p>The bug is in one line of source (the HBB gene). The fix ships a change to a completely different file: a feature flag that controls which of two implementations of the oxygen-carrier module gets loaded, and only in one service. You are not fixing the defect, you are re-enabling the legacy code path that does not contain it. Product people do this all the time when the real fix is too risky to make in production.</p>
      <p>Where it breaks: you cannot roll the flag back. The edit is written into stem cells that will repopulate the patient for life, and the patient has been through chemotherapy that destroyed the previous deployment. There is no blue-green, no canary, no rollback plan. And the "legacy code path" was written by evolution for a fetus attached to a placenta, not an adult, which is why researchers had to check carefully that turning it on all the time does no harm.</p>`},
    // ---------------- 4. NEGLECT AND THE OLD TREATMENTS ----------------
    {type: 'story', kicker: 'Before 2023', title: 'The best-understood disease nobody funded', tocTitle: 'Neglect and mistrust',
      html: `<p>Sickle cell disease was the first disease traced to a single molecule, and then it was left alone for half a century. Between 2008 and 2018, US federal research funding ran at about $812 a year per person with sickle cell disease, against $2,807 per person with cystic fibrosis. Private foundation money was not close: about $102 per person per year for sickle cell, about $7,690 for cystic fibrosis. Cystic fibrosis got four new FDA-approved drugs in that decade; sickle cell got one. The two diseases are comparably severe. One affects roughly 100,000 mostly Black Americans, the other roughly 30,000 mostly white Americans.</p>
      <p>The history of the care itself is worse. Advocacy in the early 1970s produced the National Sickle Cell Anemia Control Act of 1972, which funded screening and education. Several states then turned screening into a requirement, testing Black citizens for the harmless <i>trait</i> without offering counseling, and the results were used against them: insurers raised premiums, employers turned people away, and the US Air Force barred people with sickle cell trait from flying. The lesson many families took from the 1970s was that genetic information about them would be used to categorize them, not to treat them.</p>
      <p>That sits on top of a longer history that includes the Tuskegee syphilis study, and it continues in the emergency room today. Sickle cell pain has no visible sign, no scan, no blood test that shows it. Patients arriving in crisis and asking for opioids are routinely labeled drug-seeking; studies have found they wait significantly longer for pain relief than other patients with comparable pain. Many adults describe avoiding hospitals until they cannot stand it.</p>
      <p>Two consequences matter for this case. First, the people who most need an expensive new therapy are disproportionately on Medicaid: between 50% and 60% of Americans with sickle cell disease, by CMS's estimate. Second, a therapy that requires you to hand over your stem cells, take chemotherapy that will probably make you infertile, and trust a company and a hospital for fifteen years of follow-up is being offered to a community with excellent historical reasons for caution.</p>
      <h3>What treatment looked like before</h3>
      <p>Not nothing, but not much.</p>
      <ul>
        <li><b>Penicillin and vaccination</b> in early childhood, after newborn screening, which is the single biggest reason US childhood survival improved.</li>
        <li><b>[[hydroxyurea|Hydroxyurea]]</b>, a cheap old chemotherapy pill that happens to raise [[fetal hemoglobin]]. The 1995 Multicenter Study of Hydroxyurea found a median of 2.5 crises a year versus 4.5 on placebo, with fewer episodes of acute chest syndrome and fewer transfusions. It works, it is generic, and it remains badly underused; a 2019 trial in four sub-Saharan African countries showed it is feasible and safe there too, cutting pain events, malaria and deaths.</li>
        <li><b>Transfusions</b>, regular or exchange, to dilute the sickle cells. Effective, and they bring iron overload, alloimmunization and a lifetime tether to a transfusion center.</li>
        <li><b>Newer drugs</b>: L-glutamine (2017), [[crizanlizumab]] (2019), and [[voxelotor]] (2019). Voxelotor was pulled from the world market in September 2024 after post-marketing data showed more deaths and crises than expected, a reminder of how thin this shelf is.</li>
        <li><b>A cure, for a few.</b> An [[allogeneic]] bone marrow transplant from an [[HLA]]-matched sibling genuinely cures sickle cell disease: an international series of 1,000 such transplants reported 5-year event-free survival of 91.4% and overall survival of 92.9%. The problem is arithmetic. A 1996 survey of 4,848 children found that only about 14% of those eligible had an HLA-identical sibling. And a donor graft brings [[graft-versus-host disease]], which an [[autologous]] one cannot.</li>
      </ul>`},

    {type: 'callout', variant: 'numbers', heading: 'Sickle cell disease by the numbers',
      html: `<ul>
        <li><b>~7.7 million</b> people living with the disease worldwide in 2021, up 41% since 2000, mostly through population growth.</li>
        <li><b>~515,000</b> babies born with it in 2021; half of them in Nigeria, India and DR Congo.</li>
        <li><b>376,000</b> deaths in 2021 when sickle cell disease is counted as a contributing cause, against 34,400 when only the single underlying cause is counted. 81,100 of those deaths were in children under 5.</li>
        <li><b>~100,000</b> people in the United States; about 1 in 365 Black American births.</li>
        <li><b>54 years</b> estimated average US life expectancy with the disease, against 76 for matched peers.</li>
        <li><b>$1.6M–$1.7M</b> in lifetime medical costs attributable to the disease for a commercially insured American, ages 0 to 64.</li>
      </ul>`},

    // ---------------- 5. THE KEY INSIGHT ----------------
    {type: 'story', kicker: 'The key insight', title: 'The escape hatch we are all born with', tocTitle: 'Fetal hemoglobin',
      html: `<p>In 1948 a New York physician named Janet Watson noticed something that should have been obvious and was not: the blood of newborns with sickle cell disease barely sickles. The babies have the mutation in every cell. They are not yet making much of the protein it damages. A fetus runs on [[fetal hemoglobin]], built from [[gamma-globin]] chains, and only switches over to the adult beta version in the months after birth. Symptoms appear as the switch completes, usually between 6 and 12 months of age.</p>
      <p>Gamma chains do not carry the sickle patch and, more importantly, they do not have the pocket that the patch grabs. Fetal hemoglobin cannot be recruited into a sickle fiber, and every fetal molecule in the cell is one fewer sickle molecule, which matters disproportionately because fiber formation depends so steeply on concentration.</p>
      <h3>The natural experiment</h3>
      <p>Then there are the people whose switch never fully closes. [[HPFH|Hereditary persistence of fetal hemoglobin]] is an inherited quirk, usually a deletion or a promoter change, that leaves the gamma genes partly on in adulthood. When someone inherits the sickle mutation from one parent and this quirk from the other, they typically have around 30% fetal hemoglobin spread evenly across essentially every red cell. They do not have hemolytic anemia. They are usually symptom-free. They are, in effect, walking proof of concept: the sickle gene is survivable if you never switch off the fetal one.</p>
      <p>The population data pointed the same way. In a 1984 study of 272 patients, Darleen Powars found thresholds: roughly 10% fetal hemoglobin above which major organ failure fell away, roughly 20% for recurrent crises. The 1994 US cooperative study found low fetal hemoglobin among the strongest predictors of early death. Hydroxyurea's entire benefit is thought to run through the same channel.</p>
      <aside class="note"><b>The subtlety that matters.</b> An average can lie. Two patients can both report 20% fetal hemoglobin: one with a little in every cell, one with a lot in a quarter of cells and none in the rest. Only the first is protected in every cell. Martin Steinberg's group has argued that what counts is fetal hemoglobin <i>per cell</i>, and that a cell needs roughly 10 picograms of it to be safe from polymer. This is why the trials report not just the percentage but the share of cells containing it, and why "[[pancellular]]" appears in the results.</aside>
      <h3>Finding the switch</h3>
      <p>Knowing that fetal hemoglobin helps is useless unless you can turn it back on deliberately. The hunt for the switch ran through human genetics, not biochemistry.</p>
      <p>In 2007 Swee Lay Thein's group in London mapped a chunk of the natural variation in fetal hemoglobin levels to a gene on chromosome 2 called [[BCL11A]]. In 2008 a Sardinian study led by Manuela Uda and colleagues, including Guillaume Lettre and Vijay Sankaran, tied the same gene to milder beta-thalassemia. Later in 2008 Sankaran, then a graduate student in Stuart Orkin's lab at Boston Children's Hospital, showed what BCL11A actually does: it is a [[transcription factor]] that appears in adult red-cell precursors and represses the gamma-globin genes. Knock it down in human adult cells and fetal hemoglobin comes roaring back. In 2011 Jian Xu and Orkin's group deleted BCL11A in sickle cell mice and corrected the disease.</p>
      <p>That created a new problem. BCL11A is not a spare part. It is needed in developing B cells and in the brain; mice without it die. You cannot simply delete the gene in a person.</p>
      <h3>The enhancer</h3>
      <p>The solution, published in <i>Science</i> in 2013 by Daniel Bauer with Orkin and colleagues, was to attack the gene's control panel instead. They found that the common genetic variants associated with fetal hemoglobin levels sat in a region inside BCL11A that is not a gene at all, but an [[enhancer]]: a stretch of DNA that turns the gene up, and does so <b>only in red-cell precursors</b>. Delete the enhancer in red cells and they lose BCL11A and make fetal hemoglobin. Delete it in B cells and nothing happens, because B cells run BCL11A from a different control element.</p>
      <p>In 2015 Matthew Canver, with Bauer, Orkin and Feng Zhang, used pooled CRISPR libraries to chop the enhancer apart systematically, a technique called saturating mutagenesis: thousands of guide RNAs, each cutting a slightly different spot, to find which few dozen letters actually matter. The answer was a narrow window containing a landing site for [[GATA1]], the master regulator of red cell development. That window, roughly 58,000 letters downstream of the start of BCL11A, is the target of Casgevy. It is a beautiful piece of targeting: the smallest possible lesion, in a tissue-specific switch, to reinstate a gene the body already knows how to use.</p>`},

    {type: 'explorer', title: 'Fetal hemoglobin explorer: how much is enough?', tocTitle: 'HbF explorer',
      intro: 'Drag the level of [[fetal hemoglobin]] and how evenly it is spread across red cells, and compare with the landmarks reported in the literature. This is a teaching sketch of published relationships, not a clinical calculator.',
      inputs: [
        {id: 'hbf', label: 'Fetal hemoglobin (% of total)', min: 0, max: 60, step: 1, value: 8, fmt: v => v + '%'},
        {id: 'even', label: 'Share of red cells containing it', min: 10, max: 100, step: 5, value: 40, fmt: v => v + '%'},
      ],
      compute: (v) => {
        const perCell = v.even > 0 ? (v.hbf / v.even) * 100 : 0;     // % HbF inside an F-cell
        const protectedCells = perCell >= 33 ? v.even : perCell >= 20 ? v.even * 0.45 : 0;
        const band = protectedCells >= 70 ? ['Almost no polymer in most cells', 'var(--win)']
          : protectedCells >= 30 ? ['Many protected cells; crises much rarer', 'var(--il-3)']
          : v.hbf >= 20 ? ['Average looks reassuring, but protection is patchy', 'var(--warn)']
          : v.hbf >= 10 ? ['Organ damage less likely; crises still common', 'var(--warn)']
          : ['Little protection', 'var(--loss)'];
        const where = v.hbf < 1 ? 'untreated sickle cell anemia with low HbF'
          : v.hbf <= 10 ? 'typical untreated sickle cell anemia (mean about 8%)'
          : v.hbf <= 25 ? 'a good response to hydroxyurea'
          : v.hbf <= 35 ? 'sickle cell disease inherited alongside HPFH: usually symptom-free'
          : 'the range Casgevy patients reached (mean about 44% at 6 months, in about 94% of cells)';
        return '<div style="font-size:16px"><b>Roughly ' + Math.round(perCell) + '%</b> fetal hemoglobin inside each cell that has any, and on this sketch about <b>' + Math.round(protectedCells) + '%</b> of all red cells carry enough to resist polymer.' +
          '<div style="margin:10px 0;height:14px;border-radius:7px;background:var(--panel-2);overflow:hidden"><div style="height:100%;width:' + Math.min(100, protectedCells) + '%;background:' + band[1] + '"></div></div>' +
          '<b style="color:' + band[1] + '">' + band[0] + '.</b> This combination looks like ' + where + '.' +
          '<div style="margin-top:10px;color:var(--ink-3);font-size:14.5px">Landmarks: Powars (1984) suggested thresholds near 10% HbF for organ failure and 20% for recurrent crises; Estepp (2017) found children above 20% on hydroxyurea had half the odds of hospitalization; Steinberg has argued a cell needs roughly 10 pg of HbF, about a third of its hemoglobin, to be protected, which is why an even ([[pancellular]]) spread matters more than the average. The protected-cell figure here is a simplified illustration of that argument, not a published model.</div></div>';
      }},

    // ---------------- 6. CRISPR FROM ZERO ----------------
    {type: 'story', kicker: 'The tool', title: 'CRISPR from zero: a bacterial immune system with a search box', tocTitle: 'CRISPR from zero',
      html: `<p>Bacteria get infected by viruses, and they fight back. In the 1980s and 1990s microbiologists kept noticing odd repeated sequences in bacterial genomes with unique spacers in between; they were named clustered regularly interspaced short palindromic repeats, or [[CRISPR]]. By 2007 it was clear what they were: a filing cabinet of virus fragments. A bacterium that survives an infection keeps a snippet of the invader's DNA, transcribes it into a short RNA, and uses that RNA as a wanted poster.</p>
      <p>In 2012, Martin Jinek, Krzysztof Chylinski and colleagues in the labs of Jennifer Doudna at Berkeley and Emmanuelle Charpentier, then in Umea, Sweden, published in <i>Science</i> how the simplest version works. A protein called [[Cas9]] carries two RNAs; they show it which 20 letters of DNA to find; it cuts both strands there. Then they did the engineering step that made it a tool: they fused the two RNAs into one "single guide" RNA. Change 20 letters of that guide, and you change where the protein cuts. A search-and-destroy function with a programmable search string.</p>
      <p>In January 2013, Feng Zhang's group at the Broad Institute and George Church's at Harvard published, back to back in <i>Science</i>, that this worked inside human and mouse cells, which is not a trivial extension: the protein has to be imported into a nucleus and survive in the alien chemistry of a eukaryotic cell. A field detonated. Within two years there were CRISPR companies: Editas (Zhang, Church), CRISPR Therapeutics (Charpentier), Intellia (Doudna).</p>
      <h3>Two mechanical details that decide everything</h3>
      <p>First, the [[PAM]]. Cas9 will not cut unless a tiny motif sits immediately next to the target: for this Cas9, any letter followed by two Gs. No PAM, no cut, even with a perfect 20-letter match. This will matter enormously later.</p>
      <p>Second, what happens after the cut. Cas9 makes a [[double-strand break]] and then the cell repairs it, usually by [[NHEJ|the sloppy route]], gluing the ends back with a few letters added or lost. For inserting a correct sequence that is a nuisance. For destroying a [[transcription factor]] landing site inside an [[enhancer]], it is exactly what you want. Casgevy is a disruption, not a correction, which is why it was achievable in 2019 and a true correction of the sickle mutation still is not routine.</p>
      <h3>The patent war</h3>
      <p>Who owns CRISPR in human cells has been litigated for a decade. The University of California, the University of Vienna and Charpentier filed first, in May 2012, on the general system. The Broad Institute, MIT and Harvard filed later on its use in eukaryotic cells, paid for fast-track examination, and got patents first. The US Patent and Trademark Office's appeal board sided with Broad in 2022, holding that Broad had priority for CRISPR-Cas9 with a single guide RNA in eukaryotic cells.</p>
      <p>On 12 May 2025 the Federal Circuit affirmed part of that decision, but held that the board had applied the wrong legal standard for "conception" of an invention, vacated the priority finding and sent it back. Both sides claim vindication; the question is genuinely open. The practical effect on this case was blunt and commercial: on 12 December 2023, four days after FDA approval, Vertex took a non-exclusive license to Editas's Cas9 patents, for $50 million up front plus a further $50 million contingent payment and annual license fees of $10 million to $40 million through 2034. Editas passes a mid-double-digit share of that to the Broad and Harvard. Vertex bought its way out of the argument rather than waiting for the courts.</p>
      <p>Charpentier and Doudna received the 2020 Nobel Prize in Chemistry "for the development of a method for genome editing." The prize is not a patent, and the Nobel committee does not adjudicate priority in US law.</p>`},

    {type: 'custom', title: 'How CRISPR finds its target, and how it misses', tocTitle: 'Target finder', wide: true,
      intro: 'A toy version of the search Cas9 performs, and of the off-target analysis regulators spent an advisory committee meeting on. The sequences are illustrative, not the real clinical guide.',
      html: `<div class="card">
        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:12px">
          <span style="font-size:14px;color:var(--ink-3)">Cutting protein:</span>
          <button class="btn primary" data-fid="std">Standard Cas9</button>
          <button class="btn" data-fid="hifi">High-fidelity Cas9</button>
        </div>
        <div class="tf-stage"></div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 6px">
          <button class="btn primary" data-scan="ref">Scan the reference genome</button>
          <button class="btn" data-scan="var">Scan again, including common human variants</button>
        </div>
        <div class="tf-out" style="font-size:15.5px;line-height:1.55;margin-top:6px"></div>
      </div>`,
      init: (root, api) => {
        const guide = 'CTAACAGTTGCTTTTATCAC';
        const sites = [
          {name: 'BCL11A erythroid enhancer (the intended target)', seq: 'CTAACAGTTGCTTTTATCAC', pam: 'TGG', note: 'The GATA1 landing site. Perfect match, good PAM: this is the cut you want, and high-fidelity Cas9 still makes it.', variant: false},
          {name: 'A site on chromosome 7', seq: 'CTAACAGTTGCTTTTATCAC', pam: 'TAA', note: 'A perfect 20-letter match, but no NGG beside it. Cas9 clamps on and lets go. No cut.', variant: false},
          {name: 'A site on chromosome 12', seq: 'CTAACAGTTGCTTGTATCAC', pam: 'AGG', note: 'One mismatch, far from the PAM end, where Cas9 is tolerant. Low but real risk with standard Cas9; this is exactly the kind of site companies test in the laboratory.', variant: false},
          {name: 'A site on chromosome 3', seq: 'CTAACTGTTGCTTTTAACAC', pam: 'CGG', note: 'Three mismatches, two of them in the "seed" letters nearest the PAM, where Cas9 is unforgiving. Essentially no cutting.', variant: false},
          {name: 'A site on chromosome 2 — present only in some people', seq: 'CTAACAGTTGCTTTTATCAC', pam: 'TGG', note: 'A near-match that in the reference genome has no PAM. A single-letter variant carried by roughly 4.5% of people of African ancestry creates one. In carriers, standard Cas9 cuts here as well; high-fidelity Cas9 largely does not.', variant: true},
        ];
        const stage = root.querySelector('.tf-stage'), out = root.querySelector('.tf-out');
        let mode = null, fid = 'std';
        const cmp = (a, b) => { let m = 0; for (let i = 0; i < 20; i++) if (a[i] !== b[i]) m++; return m; };
        function verdict(site) {
          const pamOk = /^.GG$/.test(site.pam);
          const mism = cmp(site.seq, guide);
          if (!pamOk) return 'no cut';
          if (mism === 0 && !site.variant) return 'CUT';
          if (site.variant) return fid === 'hifi' ? 'largely avoided' : 'CUT';
          if (mism === 1) return fid === 'hifi' ? 'no cut' : 'possible';
          return 'no cut';
        }
        function row(site) {
          let seq = '';
          for (let i = 0; i < 20; i++) {
            const bad = site.seq[i] !== guide[i];
            seq += '<span style="color:' + (bad ? 'var(--loss)' : 'var(--ink)') + ';font-weight:' + (bad ? 700 : 400) + '">' + site.seq[i] + '</span>';
          }
          const pamOk = /^.GG$/.test(site.pam);
          const mism = cmp(site.seq, guide);
          const v = mode ? verdict(site) : '';
          const col = v === 'CUT' ? 'var(--loss)' : v === 'possible' ? 'var(--warn)' : v === 'largely avoided' ? 'var(--il-3)' : 'var(--ink-3)';
          return '<div style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;border-top:1px solid var(--rule-2);padding:9px 0">' +
            '<div><div style="font-family:var(--mono);font-size:15px;letter-spacing:.06em">' + seq +
            ' <span style="color:' + (pamOk ? 'var(--il-3)' : 'var(--ink-3)') + ';font-weight:700">' + site.pam + '</span>' +
            ' <span style="font-family:var(--sans);font-size:12px;color:var(--ink-3)">PAM</span></div>' +
            '<div style="font-size:13.5px;color:var(--ink-2);margin-top:2px">' + site.name + (mode ? '. ' + site.note : '') + '</div></div>' +
            '<div style="font-weight:700;font-size:13px;color:' + col + ';text-align:right">' + (mode ? mism + ' mismatch' + (mism === 1 ? '' : 'es') + '<br>' + v : '') + '</div></div>';
        }
        function draw() {
          let s = '<div style="font-family:var(--mono);font-size:16px;letter-spacing:.06em;margin-bottom:4px"><span style="color:var(--il-1);font-weight:700">' + guide + '</span> <span style="font-family:var(--sans);font-size:12.5px;color:var(--ink-3)">the 20-letter guide RNA, carried by Cas9</span></div>';
          sites.filter(x => !x.variant || mode === 'var').forEach(x => { s += row(x); });
          stage.innerHTML = s;
          root.querySelectorAll('[data-fid]').forEach(b => b.className = 'btn' + (b.dataset.fid === fid ? ' primary' : ''));
          root.querySelectorAll('[data-scan]').forEach(b => b.className = 'btn' + (b.dataset.scan === mode ? ' primary' : ''));
          if (mode === null) out.innerHTML = '<span style="color:var(--ink-3)">Cas9 does not read the genome end to end. It bumps into DNA at random, checks for a PAM (any letter, then GG), and only then tries to unzip the helix and match its guide, starting from the PAM end. Mismatches near that end are fatal to binding; mismatches at the far end are often tolerated. Press a scan button.</span>';
          else if (mode === 'ref') out.innerHTML = 'Against the <b>reference genome</b> the guide looks clean: one intended cut, one perfect match saved only by a missing PAM, and two sites with mismatches in the wrong places. For years, this was the analysis.';
          else out.innerHTML = 'Now add <b>common human variants</b>. The reference genome is one composite sequence; real people differ from it at millions of positions. A 2023 analysis by Cancellieri and colleagues, using a tool called CRISPRme, found that the top off-target candidate for the BCL11A enhancer guide is created by a variant carried by about 4.5% of people of African ancestry, because the variant <i>creates a PAM</i> where the reference has none. In cells carrying it, Cas9 cut there and produced allele-specific deletions and chromosome inversions; a high-fidelity Cas9 largely avoided it. The population most affected by sickle cell disease was the population least represented in the reference. That is why the FDA required a post-approval analysis covering every variant present at 0.5% or more in any of five continental population groups.';
        }
        root.querySelectorAll('[data-fid]').forEach(b => b.addEventListener('click', () => { fid = b.dataset.fid; draw(); }));
        root.querySelectorAll('[data-scan]').forEach(b => b.addEventListener('click', () => { mode = b.dataset.scan; draw(); }));
        draw();
      }},

    {type: 'callout', variant: 'product', heading: 'Your test data is not your user data',
      html: `<p>Every engineer has shipped something that passed on the test fixture and failed on real traffic. CRISPR off-target prediction had the same bug at a civilizational scale: the search was validated against the human reference genome, a composite sequence built mostly from people of European ancestry, while the product was aimed at a disease that is overwhelmingly African in origin. The most dangerous predicted off-target site for Casgevy's guide simply does not exist in the reference. It exists in the patients.</p>
      <p>Where the analogy breaks: you cannot ship a hotfix. A wrong cut is copied into every blood cell that stem cell ever makes, for the rest of the patient's life, and the readout for "did this cause leukemia" is measured in decades. That is why the FDA's answer was not a recall plan but a 15-year, 250-patient observational study running to 2042.</p>`},
    {type: 'figure', title: 'The switch, and why the cut lands where it does', tocTitle: 'The switch',
      intro: 'Two clusters of globin genes, one repressor, and a control element that only works in red cells. Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 430">
        <text x="20" y="26" class="il-title">Chromosome 11: the beta-globin cluster</text>
        <text x="200" y="62" text-anchor="middle" class="il-text-2">gamma genes: fetal hemoglobin</text>
        <text x="520" y="62" text-anchor="middle" class="il-text-2">beta gene: the sickle letter</text>
        <g data-part="locus">
          <path d="M20 96 H620" class="il-line2 st-ink" fill="none"/>
        </g>
        <g data-part="gamma">
          <rect x="130" y="76" width="66" height="40" rx="8" class="il-3"/><rect x="206" y="76" width="66" height="40" rx="8" class="il-3"/>
          <text x="163" y="102" text-anchor="middle" class="il-white">HBG2</text><text x="239" y="102" text-anchor="middle" class="il-white">HBG1</text>
        </g>
        <g data-part="beta">
          <rect x="486" y="76" width="66" height="40" rx="8" class="il-7"/>
          <text x="519" y="102" text-anchor="middle" class="il-white">HBB</text>
        </g>
        <g data-part="repress">
          <path d="M150 238 C 172 200, 180 168, 196 144" class="st-6" stroke-width="3" fill="none" stroke-dasharray="6 5"/>
          <path d="M182 134 H226" class="st-6" stroke-width="6" stroke-linecap="round"/>
          <text x="244" y="142" class="il-text-2">BCL11A protein shuts the gamma genes off</text>
        </g>
        <text x="20" y="188" class="il-title">Chromosome 2: BCL11A, the repressor</text>
        <g data-part="bcl">
          <path d="M20 256 H620" class="il-line2 st-ink" fill="none"/>
          <rect x="60" y="236" width="90" height="40" rx="8" class="il-6"/>
          <text x="105" y="262" text-anchor="middle" class="il-white">BCL11A</text>
        </g>
        <g data-part="enh">
          <rect x="330" y="236" width="150" height="40" rx="8" class="il-4"/>
          <path d="M326 244 C 262 216, 214 214, 156 228" class="il-line il-dash" fill="none"/>
          <path d="M166 222 L150 229 L166 236 Z" class="il-8"/>
          <text x="405" y="302" text-anchor="middle" class="il-text">+58 erythroid enhancer</text>
          <text x="405" y="322" text-anchor="middle" class="il-text-2">works only in red-cell precursors</text>
        </g>
        <g data-part="gata">
          <rect x="386" y="242" width="46" height="28" rx="5" class="il-paper il-line"/>
          <text x="409" y="262" text-anchor="middle" class="il-small">GATA1</text>
        </g>
        <g data-part="cut">
          <path d="M409 222 V286" class="st-7" stroke-width="3" stroke-dasharray="7 5"/>
          <path d="M396 200 L422 224 M422 200 L396 224" class="st-7" stroke-width="4" stroke-linecap="round"/>
          <text x="440" y="216" class="il-text">Casgevy cuts here</text>
        </g>
        <g data-part="other">
          <rect x="650" y="60" width="230" height="150" rx="14" class="il-bg il-line"/>
          <text x="666" y="88" class="il-text">BCL11A is also needed in:</text>
          <circle cx="690" cy="122" r="16" class="il-1s il-line"/><text x="716" y="128" class="il-text-2">B cells</text>
          <circle cx="690" cy="166" r="16" class="il-1s il-line"/><text x="716" y="172" class="il-text-2">brain development</text>
          <text x="666" y="200" class="il-small">They use different control elements.</text>
        </g>
        <g data-part="timeline">
          <rect x="650" y="240" width="230" height="170" rx="14" class="il-paper il-line"/>
          <text x="666" y="268" class="il-text">The switch, over time</text>
          <path d="M666 380 H862" class="il-line"/>
          <path d="M666 300 C 706 300, 726 300, 746 330 C 766 360, 800 366, 862 368" class="st-3" stroke-width="4" fill="none"/>
          <path d="M666 372 C 706 372, 726 368, 746 340 C 766 312, 800 300, 862 298" class="st-7" stroke-width="4" fill="none"/>
          <text x="672" y="296" class="il-small">fetal</text><text x="826" y="294" class="il-small">adult</text>
          <text x="666" y="398" class="il-small">birth</text><text x="770" y="398" class="il-small">6 months</text>
        </g>
      </svg>`,
      hotspots: {
        gamma: {title: 'The gamma genes (HBG1, HBG2)', text: 'Two near-identical genes that make the fetal partner chain. They are not deleted or broken in adults: they are switched off, sitting there in every cell, which is what makes reactivation possible at all.'},
        beta: {title: 'The beta gene (HBB)', text: 'Where the sickle letter lives, and where beta-thalassemia mutations live. Casgevy never touches it. The patient keeps the mutation and passes it on to their children exactly as before.'},
        bcl: {title: 'BCL11A', text: 'A [[transcription factor]] found in 2007-2008 through human genetics, not biochemistry. In adult red-cell precursors it binds the beta-globin cluster and keeps the gamma genes silent. Remove it and fetal hemoglobin returns.'},
        enh: {title: 'The +58 erythroid enhancer', text: 'A stretch of DNA about 58,000 letters inside BCL11A that is not a gene. Proteins landing on it turn BCL11A up, but only in red-cell precursors. Daniel Bauer and Stuart Orkin identified it in 2013 by following the common genetic variants associated with fetal hemoglobin levels.'},
        gata: {title: 'The GATA1 landing site', text: 'Matthew Canver\'s 2015 saturating mutagenesis experiment cut the enhancer at thousands of positions and found the few dozen letters that matter: a binding site for [[GATA1]], the master regulator of red cell development. This is Casgevy\'s bullseye.'},
        cut: {title: 'The cut', text: 'A single [[double-strand break]] on the GATA1 site. The cell repairs it sloppily, adding or deleting a few letters, which is enough to stop GATA1 binding. In treated patients, about 78-80% of the [[allele|alleles]] in bone marrow stem cells carry the intended edit, and the proportion stayed stable for as long as they have been followed.'},
        repress: {title: 'Repression, and its removal', text: 'Less BCL11A in red-cell precursors means less repression of the gamma genes, which means more [[gamma-globin]] and more [[fetal hemoglobin]] in every red cell those precursors make.'},
        other: {title: 'Why not just delete BCL11A?', text: 'Because it is not spare. BCL11A is required for B-cell development and for the brain; mice lacking it die. Targeting the red-cell-only enhancer is what makes the edit survivable: other tissues keep their BCL11A because they drive it from other control elements.'},
        timeline: {title: 'The natural switch', text: 'Every human runs this switch in the months after birth: gamma down, beta up. It is why babies with sickle cell disease are well for their first months, and why people with [[HPFH]], whose switch never fully closes, can carry the sickle mutation almost without symptoms.'},
      },
      caption: 'Positions are schematic, not to scale. The enhancer sits within intron 2 of BCL11A; the therapeutic guide RNA (called SPY101) targets the GATA1 motif in the +58 element.'},

    // ---------------- 7. TIMELINE ----------------
    {type: 'timeline', title: 'Timeline', intro: 'From a Chicago case report in 1910 to a $2.2 million medicine that fewer than a hundred people a year receive.',
      events: [
        {year: 1910, title: 'Herrick describes "peculiar elongated" red cells', kind: 'science', text: 'In a dental student from Grenada, Walter Noel, treated in Chicago.'},
        {year: 1948, title: 'Janet Watson notices newborns barely sickle', kind: 'science', text: 'The first clue that fetal hemoglobin protects, 75 years before a therapy used it.'},
        {year: 1949, title: 'Pauling and Itano: "sickle cell anemia, a molecular disease"', kind: 'science', text: 'Sickle hemoglobin moves differently in an electric field. The concept of a molecular disease is born.'},
        {year: 1954, title: 'Allison links sickle trait to malaria protection', kind: 'science', text: 'Explains why a lethal mutation became common across Africa, the Middle East and India.'},
        {year: 1957, title: 'Ingram finds the single amino acid swap', kind: 'science', text: 'Glutamic acid to valine at position 6 of the beta chain.'},
        {year: 1972, title: 'US National Sickle Cell Anemia Control Act', kind: 'people', text: 'Funds screening and education. Some states turn it into mandatory testing used against Black citizens by insurers and employers.'},
        {year: 1984, title: 'Powars proposes fetal hemoglobin thresholds', kind: 'science', text: 'About 10% for organ failure, about 20% for recurrent crises.'},
        {year: 1995, title: 'Hydroxyurea works', kind: 'clinical', text: 'The Multicenter Study of Hydroxyurea: median 2.5 crises a year versus 4.5 on placebo. Approved for sickle cell disease in 1998.'},
        {year: 2007, title: 'BCL11A appears in a genome-wide association study', kind: 'science', text: 'Swee Lay Thein\'s group maps fetal hemoglobin variation to chromosome 2p15.'},
        {year: 2008, title: 'Sankaran and Orkin show BCL11A is the switch', kind: 'science', text: 'Knock it down in adult human red-cell precursors and fetal hemoglobin comes back.'},
        {year: 2011, title: 'Deleting BCL11A corrects sickle cell mice', kind: 'science', text: 'Xu, Orkin and colleagues. But BCL11A is needed elsewhere in the body.'},
        {year: 2012, date: 'Jun 2012', title: 'Jinek, Charpentier and Doudna publish programmable Cas9', kind: 'science', text: 'Two RNAs fused into one guide: a cutting protein you can aim.'},
        {year: 2013, date: 'Jan 2013', title: 'Zhang and Church show CRISPR works in human cells', kind: 'science', text: 'The patent fight starts here.'},
        {year: 2013, date: 'Oct 2013', title: 'Bauer and Orkin find the erythroid enhancer of BCL11A', kind: 'science', text: 'A red-cell-only control element: a target you can destroy without harming the brain or B cells.'},
        {year: 2015, date: 'Oct 2015', title: 'Vertex and CRISPR Therapeutics sign', kind: 'business', text: '$75 million up front for a collaboration on hemoglobin diseases and cystic fibrosis.'},
        {year: 2015, date: 'Nov 2015', title: 'Canver maps the enhancer letter by letter', kind: 'science', text: 'Saturating CRISPR mutagenesis narrows the target to a GATA1 binding site.'},
        {year: 2018, date: 'Apr 2018', title: 'Investigational New Drug application filed', kind: 'regulatory'},
        {year: 2019, date: 'Feb 2019', title: 'First patient dosed, in Germany, for beta-thalassemia', kind: 'clinical'},
        {year: 2019, date: 'Jul 2019', title: 'Victoria Gray is infused in Nashville', kind: 'clinical', text: 'The first US patient treated with CRISPR for a genetic disease, and the first to be publicly identified.'},
        {year: 2020, date: 'Oct 2020', title: 'Nobel Prize in Chemistry to Charpentier and Doudna', kind: 'people'},
        {year: 2020, date: 'Dec 2020', title: 'First two patients published in the NEJM', kind: 'clinical', text: 'About 80% of alleles edited, fetal hemoglobin up, transfusions and crises gone.'},
        {year: 2021, date: 'Apr 2021', title: 'Vertex takes the lead', kind: 'business', text: 'Vertex pays CRISPR Therapeutics $900 million up front to restructure the deal: Vertex runs development and commercialization and takes 60% of profits and losses, CRISPR 40%.'},
        {year: 2023, date: 'Apr 2023', title: 'BLA submitted to the FDA', kind: 'regulatory', text: 'Filed in June; priority review; action date 8 December.'},
        {year: 2023, date: 'Aug 2023', title: 'ICER sets a value benchmark of $1.35M to $2.05M', kind: 'business'},
        {year: 2023, date: 'Oct 31, 2023', title: 'FDA advisory committee debates off-target editing', kind: 'regulatory', text: 'No vote taken. The committee accepted 15 years of follow-up as the answer to what nobody can measure today.'},
        {year: 2023, date: 'Nov 16, 2023', title: 'UK MHRA authorizes Casgevy: a world first', kind: 'regulatory', text: 'For both sickle cell disease and transfusion-dependent beta-thalassemia, ages 12 and up.'},
        {year: 2023, date: 'Dec 8, 2023', title: 'FDA approves Casgevy for sickle cell disease', kind: 'regulatory', text: 'The same day it approves bluebird bio\'s Lyfgenia, a lentiviral gene therapy with a boxed warning for blood cancer. Prices: $2.2M and $3.1M.'},
        {year: 2023, date: 'Dec 12, 2023', title: 'Vertex licenses Cas9 patents from Editas', kind: 'business', text: '$50M up front, plus annual fees to 2034, to settle the intellectual property question commercially.'},
        {year: 2024, date: 'Jan 16, 2024', title: 'FDA approves Casgevy for beta-thalassemia', kind: 'regulatory'},
        {year: 2024, date: 'Sep 2024', title: 'Voxelotor withdrawn worldwide', kind: 'setback', text: 'The sickle cell drug shelf gets thinner just as gene therapy arrives.'},
        {year: 2025, date: 'May 12, 2025', title: 'Federal Circuit reopens the CRISPR priority fight', kind: 'business', text: 'The Broad keeps its patents for now, but the conception ruling is vacated and remanded.'},
        {year: 2025, date: 'Jul 2025', title: 'CMS launches the Cell and Gene Therapy Access Model', kind: 'business', text: '33 states plus DC and Puerto Rico, covering about 84% of Medicaid beneficiaries with sickle cell disease.'},
        {year: 2025, title: '64 patients infused worldwide in the year', kind: 'business', text: '147 more started cell collection. Revenue for the year: $116 million.'},
        {year: 2026, date: 'Jul 1, 2026', title: 'FDA extends Casgevy down to age 2', kind: 'regulatory', text: 'Approved 53 days after filing. About 5,500 more patients become eligible.'},
      ]},

    // ---------------- 8. MAKING IT: THE PATIENT JOURNEY ----------------
    {type: 'story', kicker: 'Building the drug', title: 'The product is a procedure', tocTitle: 'Making the medicine',
      html: `<p>Casgevy is not a vial of anything you could stock. Like <a href="case.html?id=kymriah">Kymriah</a>, it is manufactured one patient at a time out of that patient's own cells, and the batch is irreplaceable. What makes it harder than a CAR-T is the cargo and the clearing.</p>
      <h3>Getting the cells out</h3>
      <p>The therapy needs [[hematopoietic stem cell|blood stem cells]], which live in bone marrow. Rather than drilling into hips, doctors coax them into the bloodstream with [[mobilization]] drugs and skim them off by [[apheresis]]. In most diseases the mobilizer is [[G-CSF]]. In sickle cell disease G-CSF is forbidden: it has triggered severe, sometimes fatal crises. So patients get [[plerixafor]], which knocks the stem cells loose by blocking the anchor that holds them in the marrow, and before any of that they are transfused for at least eight weeks to push their sickle hemoglobin below 30% of total. [[hydroxyurea|Hydroxyurea]] has to stop eight weeks before mobilization.</p>
      <p>Then the arithmetic of the collection. The label asks for at least 20 million CD34+ cells per kilogram, with a minimum final dose of 3 million per kilogram, plus a separate back-up collection of at least 2 million per kilogram of untouched cells kept frozen in case the edited product fails. Each cycle is up to three consecutive days on the machine, and cycles must be at least 14 days apart. In the pivotal sickle cell trial, patients needed a mean of 2.3 cycles, with a range from 1 to 6. Six of the 58 patients who started (about 10%) never got enough cells and could not be treated at all. Marrow damaged by a lifetime of sickling does not give cells up easily.</p>
      <h3>Editing, in a factory</h3>
      <p>The cells are shipped frozen to a manufacturing site, thawed, sorted for [[CD34+]], and given a jolt of electricity: [[electroporation]] opens temporary holes in the membrane so a pre-assembled complex of [[Cas9]] protein and the SPY101 [[guide RNA]] can slip inside. Delivering the editor as a [[ribonucleoprotein]] rather than as DNA is a deliberate safety choice: it cuts for a few hours and is then degraded, so there is no lingering nuclease and nothing to integrate into the genome. The cells are then re-frozen, tested, and shipped back in vials stored in liquid nitrogen vapor below -135 C. A dose can be several vials across several lots; each vial is thawed and infused within 20 minutes.</p>
      <h3>Clearing the old factory</h3>
      <p>Here is the part that no amount of clever editing has yet removed. Edited stem cells cannot simply move in; there is no room. The patient's existing marrow has to be destroyed first, with four days of intravenous [[busulfan]] dosed by blood levels. [[myeloablative conditioning|Myeloablative conditioning]] means weeks of [[neutropenia]] with no working immune system, [[mucositis]] severe enough that eating becomes impossible (Grade 3 or 4 in 86% of sickle cell patients in the trial), fevers, infections, and a real risk of [[veno-occlusive disease]] in the liver. Every patient in the trial had Grade 3 or 4 neutropenia and low platelets, because that is the point of the drug.</p>
      <p>And it usually causes permanent infertility. The label tells doctors to discuss fertility preservation before treatment. For a 22-year-old being offered a one-time therapy, that conversation is not a footnote; it is often the decision.</p>
      <p>The whole path, from first clinic visit to going home, runs several months: weeks of transfusions, one to several rounds of collection, a wait of months while the cells are edited and released, then about 35 to 45 days at the treatment center for chemotherapy, infusion and recovery, followed by 15 years of follow-up. CMS's own patient journey map for the therapy lists childcare, travel and housing support alongside the medicine.</p>`},

    {type: 'custom', title: 'The Casgevy calendar: what a patient actually signs up for', tocTitle: 'Patient calendar', wide: true,
      intro: 'Set how many collection cycles are needed and see how the year fills up. Pick a stage for the detail.',
      html: `<div class="card">
        <div class="cal-ctl" style="display:flex;flex-wrap:wrap;gap:18px;align-items:center;margin-bottom:14px">
          <label style="display:flex;gap:10px;align-items:center;font-size:15px">Mobilization and apheresis cycles
            <input type="range" min="1" max="6" step="1" value="2" data-k="cycles" style="width:170px;accent-color:var(--accent)">
            <b class="cal-cycles" style="min-width:16px"></b></label>
          <label style="display:flex;gap:8px;align-items:center;font-size:15px"><input type="checkbox" data-k="fert"> Add fertility preservation</label>
        </div>
        <div class="cal-stage"></div>
        <div class="hotlist cal-keys"></div>
        <div class="cal-out" style="margin-top:12px;font-size:15.5px;line-height:1.55"></div>
      </div>`,
      init: (root, api) => {
        const st = {cycles: 2, fert: false, sel: 0};
        const stage = root.querySelector('.cal-stage'), out = root.querySelector('.cal-out'), keys = root.querySelector('.cal-keys');
        function stages() {
          const s = [
            {n: 'Evaluation', w: 6, c: 'il-8s', t: 'Confirming the diagnosis and the severity criteria, checking the heart, liver, kidneys and brain, and ruling out a matched sibling donor: the trials excluded anyone who had one, because a sibling transplant is a proven cure.'},
            {n: 'Transfusions', w: 9, c: 'il-2s', t: 'At least eight weeks of red cell transfusions or exchange, to hold sickle hemoglobin under 30% of total before anything else happens. Hydroxyurea stops eight weeks before mobilization.'},
            {n: 'Collection', w: 3 * st.cycles, c: 'il-1s', t: 'Plerixafor injections, then up to three consecutive days on an apheresis machine per cycle, with at least 14 days between cycles. Target: 20 million CD34+ cells per kilogram, plus a separate back-up collection. In the trial the mean was 2.3 cycles, and about 10% of patients never collected enough.'},
            {n: 'Manufacturing', w: 14, c: 'il-6s', t: 'The cells travel frozen to a factory, are sorted, electroporated with the Cas9 complex, re-frozen and tested before release. Months, not days, and the patient waits at home with the disease they still have.'},
            {n: 'Busulfan', w: 2, c: 'il-7s', t: 'Four days of intravenous chemotherapy, dosed by blood levels, that destroys the existing bone marrow. It usually causes permanent infertility, and it is why eligibility is limited to people well enough to survive a transplant.'},
            {n: 'Infusion and recovery', w: 7, c: 'il-3s', t: 'The bag itself takes under an hour. Then weeks in hospital with no immune system: mouth sores, fevers, infections, transfusions. In adults, neutrophils recovered at a median of 26 days and platelets at 32.5 days.'},
            {n: 'Follow-up', w: 8, c: 'il-4s', t: 'Weekly visits, then monthly, then annually for 15 years under the FDA-required long-term study of secondary cancers and off-target effects.'},
          ];
          if (st.fert) s.splice(2, 0, {n: 'Fertility preservation', w: 6, c: 'il-5s', t: 'Harvesting and freezing eggs or sperm before the chemotherapy. It adds weeks to months and, outside the CMS access model, often thousands of dollars that insurance will not cover. CMS made manufacturers pay for it precisely because it was stopping patients from accepting treatment.'});
          return s;
        }
        function draw() {
          root.querySelector('.cal-cycles').textContent = st.cycles;
          const s = stages(), total = s.reduce((a, b) => a + b.w, 0);
          st.sel = Math.min(st.sel, s.length - 1);
          let x = 0, svg = '<svg viewBox="0 0 900 118" style="width:100%;height:auto;display:block">';
          svg += '<text x="0" y="16" class="il-small">one bar = the whole path; each block is time, in weeks</text>';
          s.forEach((seg, i) => {
            const w = seg.w / total * 900;
            svg += '<g data-i="' + i + '" style="cursor:pointer"><rect x="' + x.toFixed(1) + '" y="30" width="' + Math.max(w - 3, 4).toFixed(1) + '" height="60" rx="7" class="' + seg.c + '"/>';
            if (i === st.sel) svg += '<rect x="' + (x + 1).toFixed(1) + '" y="31" width="' + Math.max(w - 5, 3).toFixed(1) + '" height="58" rx="6" fill="none" class="il-line2 st-ink"/>';
            if (w > 40) svg += '<text x="' + (x + w / 2 - 1.5).toFixed(1) + '" y="66" text-anchor="middle" class="il-small">' + seg.w + 'w</text>';
            svg += '</g>';
            x += w;
          });
          const months = Math.round(total / 4.345);
          svg += '<text x="0" y="112" class="il-text">About ' + months + ' months from the first clinic visit to going home, then 15 years of follow-up.</text>';
          svg += '</svg>';
          stage.innerHTML = svg;
          keys.innerHTML = s.map((seg, i) => '<button data-i="' + i + '" aria-pressed="' + (i === st.sel) + '">' + seg.n + '</button>').join('');
          root.querySelectorAll('[data-i]').forEach(g => g.addEventListener('click', () => { st.sel = +g.dataset.i; draw(); }));
          const sel = s[st.sel];
          out.innerHTML = '<b>' + sel.n + ' — about ' + sel.w + ' week' + (sel.w === 1 ? '' : 's') + '.</b> ' + sel.t;
        }
        root.querySelector('[data-k=cycles]').addEventListener('input', e => { st.cycles = +e.target.value; draw(); });
        root.querySelector('[data-k=fert]').addEventListener('change', e => { st.fert = e.target.checked; st.sel = 0; draw(); });
        draw();
      }},

    {type: 'callout', variant: 'product', heading: 'The bottleneck is not the technology',
      html: `<p>Everything novel about Casgevy, the guide design, the Cas9 complex, the factory, happens in a window of a few weeks. Everything slow about it is old transplant medicine: mobilizing cells from damaged marrow, finding hospital beds, clearing marrow with 1950s chemotherapy, keeping someone alive through a month of no immune system. The innovation is a small module wrapped in a legacy system it cannot replace.</p>
      <p>Product teams will recognize the shape: the new engine ships, and adoption is still gated by onboarding, integration and a manual approval step nobody owns. Where it breaks: you cannot route around the legacy system with a growth hack. Removing the conditioning chemotherapy means a new drug, new trials and another decade, which is exactly what Vertex and Beam are now attempting.</p>`},
    // ---------------- 9. THE TRIALS ----------------
    {type: 'story', kicker: 'The trials', title: 'How do you prove you have stopped an invisible event?', tocTitle: 'Designing the trials',
      html: `<p>There is no scan for a sickle cell crisis. The endpoint had to be an event definition that a regulator could audit: an acute pain event requiring a visit to a medical facility and opioids or intravenous anti-inflammatories or a transfusion, or [[acute chest syndrome]], or priapism over two hours needing care, or splenic sequestration. Patients had to have had at least two such events in each of the two years before screening, documented in their records.</p>
      <p>The primary endpoint was then deliberately binary and brutal: did the patient go at least 12 consecutive months, within the first 24 months after infusion, with <b>zero</b> severe crises? Not a reduction, not a median. Zero. In a disease where the trial population averaged 3.5 crises a year, that is a high bar, and it removes the argument that a modest reduction might be regression to the mean.</p>
      <p>Both pivotal studies were single-arm and open-label. There was no [[placebo]] and no randomization, for the usual reason in transplant-like therapies: you cannot sham-administer [[myeloablative conditioning]]. Instead, each patient is their own control, compared with their documented crisis history. The comparison is imperfect, which is why the effect had to be enormous to be believed.</p>
      <p>One eligibility rule is worth noticing. Anyone with a fully matched sibling donor was excluded, because for them a conventional transplant is an established cure. Casgevy was tested, from the start, only in people who had no better option.</p>`},

    {type: 'trial', title: 'CLIMB SCD-121: sickle cell disease', tocTitle: 'CLIMB-121 trial',
      intro: 'Read the design, then predict the result before you look.',
      design: {name: 'CLIMB SCD-121 (Trial 1, NCT03745287)', phase: 'Phase 2/3', blinding: 'Open-label', years: '2018–2023', n: 44,
        population: 'Ages 12 to 35, at least two severe crises in each of the two prior years. Median age 21; 87% Black; 97% homozygous sickle genotype. Excluded if a matched sibling donor was available.',
        randomization: null,
        arms: [{name: 'Casgevy (exa-cel)', n: 44, desc: 'One infusion of the patient\'s own edited cells, after busulfan'}],
        endpoint: 'No severe crisis for 12 months in a row',
        details: {'Primary endpoint': 'No severe crisis for 12 months in a row within the first 24 months after infusion', 'Key secondary': 'No hospitalization for a severe crisis for 12 months in a row', 'Baseline burden': 'Median 3.5 severe crises and 2.0 crisis hospitalizations per year in the two years before enrollment', 'Funnel': '63 enrolled, 58 started mobilization, 44 infused; 6 patients (10%) never collected enough cells', 'Dose': 'Median 4.0 million CD34+ cells per kg; median 2.3 mobilization cycles', 'Published': 'Frangoul et al., <i>New England Journal of Medicine</i>, 2 May 2024'}},
      predict: {q: 'These patients averaged 3.5 documented severe crises a year. What share went a full 12 months with none?',
        options: ['About 40%: a real but partial effect', 'About two thirds', 'About 93%, with a couple of failures', 'Every single patient'],
        answer: 2,
        explain: 'In the FDA\'s efficacy population, 29 of 31 patients (93.5%) had no severe crisis for at least 12 consecutive months, with a median crisis-free stretch of 22.2 months. All 30 evaluable patients (100%) avoided any hospitalization for a crisis over 12 months. One of the two "failures" had a crisis at month 22.8 during a parvovirus B19 infection, which shuts down red cell production in anyone.'},
      results: [
        {kind: 'bar', title: 'Sickle cell results, and the denominator question', unit: '%',
          categories: ['Crisis-free (FDA count, n=31)', 'Crisis-free (NEJM count, n=30)', 'No crisis admission (n=30)'],
          series: [{name: 'Patients achieving the endpoint', values: [93.5, 96.7, 100]}], horizontal: true, colorByCategory: true, labelWidth: 190,
          note: 'The same trial, two headline numbers. The NEJM paper counted the 30 patients with enough follow-up to be evaluated: 29 of 30, or 97%. The FDA added a 31st patient who had less than 16 months of follow-up and had already had a crisis, counting them as a non-responder: 29 of 31, or 93.5%.'},
        {kind: 'line', title: 'Fetal hemoglobin after the infusion (all 44 infused patients)', unit: '%', xLabel: 'Months after infusion', yMax: 100,
          series: [
            {name: 'Red cells containing fetal hemoglobin (F-cells)', short: 'F-cells', points: [[3, 70.1], [6, 94.0], [12, 94.0], [24, 94.0]], color: 3},
            {name: 'Fetal hemoglobin as a share of total hemoglobin', short: 'HbF %', points: [[3, 36.9], [6, 43.9], [12, 43.4], [18, 42.3], [24, 42.1]], color: 1}],
          xTicks: [3, 6, 12, 18, 24],
          note: 'Means from the FDA label. The F-cell line is flat after month 6 because the label reports it as stable at that level rather than month by month. Total hemoglobin rose from anemia to a mean of about 13 g/dL.'}],
      takeaway: 'Two numbers carry the approval: nearly every treated patient stopped having crises, and the fetal hemoglobin they now make is spread across essentially every red cell, which is what distinguishes this from an average that hides unprotected cells.'},

    {type: 'callout', variant: 'product', heading: 'Choose your denominator, choose your headline',
      html: `<p>93.5% or 97%? Both are honest. The company\'s paper reports the evaluable population; the regulator insists on counting a patient who failed early even though he had not been followed long enough to qualify. <a href="case.html?id=kymriah">Kymriah</a> had the same argument in sharper form, where the gap between "of those infused" and "of those enrolled" was the difference between a triumph and a manufacturing problem.</p>
      <p>Here the honest full-funnel number is different again: 63 patients enrolled, 44 infused. Roughly one in three people who signed up did not get the therapy, mostly because their marrow would not give up enough cells. If you are modeling this as a business, the funnel, not the response rate, is the metric that predicts revenue.</p>`},

    {type: 'trial', title: 'CLIMB THAL-111: transfusion-dependent beta-thalassemia', tocTitle: 'CLIMB-111 trial',
      intro: 'The same edit, a different disease: here the goal is not stopping pain but stopping transfusions.',
      design: {name: 'CLIMB THAL-111 (Trial 2, NCT03655678)', phase: 'Phase 2/3', blinding: 'Open-label', years: '2018–2023', n: 52,
        population: 'Ages 12 to 35, needing at least 100 mL/kg or 10 units of red cells a year. Median age 20; 57% beta-zero-like genotype; median 17 transfusion episodes a year at baseline.',
        randomization: null,
        arms: [{name: 'Casgevy (exa-cel)', n: 52, desc: 'One infusion of the patient\'s own edited cells, after busulfan'}],
        endpoint: 'Transfusion-free for 12 months in a row',
        details: {'Primary endpoint': 'TI12, assessed from 60 days after the last post-transplant support transfusion', 'Funnel': '59 enrolled, all 59 mobilized, 52 infused', 'Collection': 'Mean 1.3 mobilization cycles, far easier than in sickle cell disease, because G-CSF can be used', 'Follow-up': 'Median 20.4 months (range 2.1 to 48.1)', 'Published': 'Locatelli et al., <i>New England Journal of Medicine</i>, 2 May 2024'}},
      predict: {q: 'Among the 35 patients with enough follow-up to be evaluated, how many stopped needing transfusions for at least a year?',
        options: ['About half', '32 of 35 (91%)', 'All 35', '21 of 35 (60%)'],
        answer: 1,
        explain: 'Thirty-two of 35 (91%) achieved transfusion independence, with a mean total hemoglobin of 13.1 g/dL, which is a normal value. The three who did not still cut their transfusion volume by 80%, 84% and 98%. Fetal hemoglobin made up at least 88% of their total hemoglobin: in thalassemia the edit is not diluting a bad protein, it is supplying a missing one.'},
      results: [
        {kind: 'bar', title: 'Transfusion independence and hemoglobin', unit: 'g/dL',
          categories: ['Baseline (transfusion-dependent)', 'After treatment, mean total Hb', 'of which fetal hemoglobin'],
          series: [{name: 'Hemoglobin', values: [9.0, 13.1, 11.9]}], colorByCategory: true,
          note: 'Baseline shown at the 9 g/dL threshold that defines the endpoint, not a measured mean; the post-treatment figures are means during transfusion independence from the NEJM paper and FDA label.'}],
      takeaway: '91% of evaluable patients walked away from a transfusion schedule they had kept every three to five weeks since infancy. For thalassemia the therapy is closer to a replacement than a workaround: fetal hemoglobin simply fills the gap the beta gene cannot.'},

    {type: 'story', kicker: 'Safety', title: 'The chemotherapy is the side-effect profile', tocTitle: 'Safety',
      html: `<p>Read the adverse event tables and you are mostly reading about [[busulfan]]. Every single patient had Grade 3 or 4 [[neutropenia]] and low platelets. [[mucositis|Mouth and gut mucositis]] hit 86% of sickle cell patients at Grade 3 or 4, febrile neutropenia 48%. Serious adverse events occurred in 45% of sickle cell patients and 33% of thalassemia patients. One patient with sickle cell disease died of COVID-19 and respiratory failure, judged unrelated. In the pediatric thalassemia study one child developed [[veno-occlusive disease]] of the liver and a severe immune complication, and died of pneumonia and multi-organ failure.</p>
      <p>Note what is <i>not</i> in the table. No graft failure. No rejection. No [[graft-versus-host disease]], because the cells are the patient's own. No insertional cancer reported so far, which matters because the competing lentiviral product carries a boxed warning for exactly that.</p>
      <p>The risk that cannot be tabulated is [[off-target editing]]. The label's warning says it plainly: the risk of unintended editing in an individual's cells cannot be ruled out because of genetic variants, and the clinical significance is unknown. You cannot run a trial for that. You can only follow people for a very long time, which is what the FDA required.</p>`},

    // ---------------- 10. DECISION 1 ----------------
    {type: 'decision', title: 'You are 24, and you have been offered this', role: 'You have severe sickle cell disease, 2024',
      scenario: `You have had four crises in the past year, two of them needing hospital admission, and an [[acute chest syndrome]] episode that frightened your family. You have no matched sibling donor. Your hematologist offers you Casgevy: about a year of your life, chemotherapy that will very probably leave you infertile, a few weeks in a hospital 300 miles away, and a roughly 1-in-3 chance you never get infused at all because your marrow will not give up enough cells. Against that: in the trial, 29 of 31 patients stopped having crises. You are also told that in three to five years there may be versions that skip the chemotherapy. What do you do?`,
      options: [
        {label: 'Take it now', outcome: 'You accept a hard year and a permanent, irreversible decision about fertility, in exchange for the best-documented chance of never having another crisis. You also accept that you are, in effect, part of the long-term safety study: nobody knows what an off-target edit does in year 20, and you will be followed until 2039 or later.'},
        {label: 'Wait for gentler conditioning', outcome: 'You keep your fertility and avoid weeks of hospital misery. You also keep the disease, and every year of waiting carries its own risk: strokes, organ damage that does not reverse, and the slow accumulation that makes you less eligible later. Antibody-based conditioning is in phase 1; "three to five years" in biotech has a wide error bar.'},
        {label: 'Optimize what exists: maximum-dose hydroxyurea and transfusions', outcome: 'Cheap, reversible, available anywhere, and genuinely effective for many people: children who reach above 20% fetal hemoglobin on hydroxyurea have roughly half the odds of hospitalization. But 10 to 20% of adults do not respond, adherence over decades is hard, and it does not stop organ damage in everyone.'},
        {label: 'Bank sperm or eggs first, then take it', outcome: 'The most common real answer, and the reason CMS made manufacturers pay for fertility preservation in its Medicaid model. It adds weeks to months and, outside that model, often thousands of dollars that insurance will not cover.'},
      ],
      reality: `Uptake tells you what people are choosing. Two years after approval, with more than 75 [[authorized treatment center|authorized treatment centers]] open and tens of thousands of eligible patients, 147 people worldwide started cell collection during 2025 and 64 were infused. Hematologists report that the conditioning chemotherapy and the fertility consequences are the two most common reasons patients decline, followed by the sheer logistics of living near a treatment center for six weeks.`},
    // ---------------- 11. REGULATORS ----------------
    {type: 'story', kicker: 'The regulators', title: 'Two approvals in one day, and a meeting about what nobody can measure', tocTitle: 'Regulators',
      html: `<p>Britain moved first. On 16 November 2023 the MHRA authorized Casgevy for both sickle cell disease and transfusion-dependent beta-thalassemia in patients 12 and over: the first approval of a CRISPR medicine anywhere. The agency's statement was unusually plain about the alternative: until then, "a bone marrow transplant, which must come from a closely matched donor and carries a risk of rejection, has been the only permanent treatment option."</p>
      <p>The FDA's review had the usual accelerators: Fast Track designation in January 2019, [[RMAT]] in May 2020, [[orphan drug]] designation days later, priority review of the application filed in April 2023, and a rare pediatric disease [[priority review voucher]] on approval. The decision date was 8 December 2023 and the FDA hit it.</p>
      <h3>The advisory committee that did not vote</h3>
      <p>On 31 October 2023 the Cellular, Tissue and Gene Therapies Advisory Committee met for a single topic: was Vertex's off-target analysis good enough? There was no voting question, which is itself a signal. The FDA was not asking "does this work"; the efficacy was not in doubt. It was asking a room of experts how to reason about a risk with no measurement.</p>
      <p>The discussion turned on the problem the CRISPRme analysis had exposed a few months earlier: that predicted off-target sites depend on whose genome you predict against, and that the guide's worst candidate site is created by a variant common in people of African ancestry. The committee discussed screening patients for that variant and better laboratory methods, and concluded that 15 years of follow-up after approval would be sufficient monitoring.</p>
      <p>So the FDA approved and wrote the uncertainty into the obligations. Two post-marketing requirements: a 250-patient observational study of sickle cell patients, each followed 15 years for cancers and off-target effects, with a completion date of 31 December 2042; and a new computational off-target analysis including every genetic variant present at 0.5% or more in any of five continental population groups, with laboratory confirmation of the sites it nominates. In August 2025 the label gained a new warning section spelling out that unintended off-target editing cannot be ruled out.</p>
      <h3>The other approval that day</h3>
      <p>The same afternoon, the FDA approved Lyfgenia (lovotibeglogene autotemcel) from bluebird bio: the same disease, the same chemotherapy, the same apheresis, but a completely different genetic strategy. Instead of editing a switch, Lyfgenia uses a [[lentivirus]] to insert a modified beta-globin gene that makes an anti-sickling hemoglobin. In its pivotal group, 28 of 32 evaluable patients (88%) had complete resolution of vaso-occlusive events between 6 and 18 months.</p>
      <p>Lyfgenia carries a boxed warning: blood cancers have occurred in treated patients, and lifelong monitoring is required. Inserting a gene at semi-random positions in the genome can disturb the neighborhood; the field has known this since the X-linked SCID trials of the early 2000s. Casgevy's cut is precise in intent, but it cannot be proven innocent either, which is why both products carry 15-year follow-up. Two answers to one disease, approved the same day, with opposite risk stories and a $900,000 price gap.</p>`},

    {type: 'table', title: 'Four ways to change the course of sickle cell disease', tocTitle: 'Comparison',
      intro: 'All prices are US list prices; none of them are what payers actually pay.',
      columns: ['', 'Casgevy', 'Lyfgenia', 'Matched sibling transplant', 'Hydroxyurea'],
      rows: [
        ['What it does', 'CRISPR cut in the [[BCL11A]] enhancer; the patient\'s own cells restart [[fetal hemoglobin]]', 'A [[lentivirus]] inserts a modified beta-globin gene making an anti-sickling hemoglobin', 'Replaces the marrow with a healthy donor\'s', 'A daily pill that raises fetal hemoglobin'],
        ['Cells used', '[[autologous|The patient\'s own]]', 'The patient\'s own', '[[allogeneic|A matched donor\'s]]', 'None'],
        ['Who can have it', 'Ages 2+ with recurrent crises or transfusion-dependent thalassemia, fit enough for chemotherapy', 'Ages 12+ with a history of vaso-occlusive events', 'Roughly 14% of eligible patients have a matched sibling', 'Almost anyone'],
        ['Conditioning', '[[busulfan|Busulfan]], [[myeloablative conditioning|myeloablative]]', 'Busulfan, myeloablative', 'Myeloablative or reduced-intensity', 'None'],
        ['Key result', '29 of 31 (93.5%) crisis-free for 12+ months; 32 of 35 (91%) transfusion-independent in thalassemia', '28 of 32 (88%) with complete resolution of vaso-occlusive events at 6–18 months', '5-year event-free survival 91.4%, overall survival 92.9% in 1,000 sibling transplants', 'Median 2.5 crises a year versus 4.5 on placebo'],
        ['Main risk', 'Chemotherapy toxicity and infertility; unquantified [[off-target editing|off-target editing]] risk', 'Chemotherapy toxicity and infertility; <b>boxed warning for blood cancer</b>', '[[graft-versus-host disease|Graft-versus-host disease]], rejection, death', 'Low blood counts; unclear long-term fertility effects'],
        ['US list price', '$2.2 million, one time', '$3.1 million, one time', 'Roughly $100,000–$400,000 for the episode', 'Generic: a few hundred dollars a year'],
        ['Available where', '39 countries as of mid-2026, through certified treatment centers only', 'US only', 'Any transplant center, if you have a donor', 'Anywhere, including sub-Saharan Africa'],
      ],
      caption: 'Transplant episode costs vary enormously by center and country and are given as a rough order of magnitude, not a quoted figure.'},

    // ---------------- 12. MONEY ----------------
    {type: 'story', kicker: 'The money', title: 'Pricing a cure for a disease the system has always underfunded', tocTitle: 'The price',
      html: `<p>Vertex set the US [[WAC|list price]] at $2.2 million, disclosed in a one-paragraph filing on the day of approval. bluebird set Lyfgenia at $3.1 million and argued that its price reflected a larger clinical effect; Vertex, pointedly, was the cheaper option. ICER, the US value watchdog, had already published a benchmark in August 2023: a price between $1.35 million and $2.05 million would meet conventional cost-effectiveness thresholds. Casgevy landed just above the top of that range; Lyfgenia landed 50% above it.</p>
      <p>The case for a large number is the one <a href="case.html?id=zolgensma">Zolgensma</a> made: you are buying decades of avoided cost in one transaction. Lifetime medical costs attributable to sickle cell disease for a commercially insured American run about $1.6 to $1.7 million between birth and 65, before you count lost income of roughly $695,000 and the 22 years of life. On paper the arithmetic works.</p>
      <p>In practice the arithmetic lands on the wrong balance sheet. Between 50% and 60% of Americans with sickle cell disease are covered by Medicaid, a program run state by state, with budgets set annually by legislatures. A single state with 2,000 eligible patients faces a theoretical liability many times its entire annual pharmacy budget, for savings that accrue over 40 years to whoever covers the patient then. Medicaid churn is high; people move between plans and states. It is the perpetual-license-versus-subscription problem from the Zolgensma case, except that the buyer is a state government with a balanced-budget requirement.</p>
      <h3>What CMS built</h3>
      <p>The federal response was the [[CGT Access Model]], run by the CMS Innovation Center. For the first time, the federal government negotiated [[outcomes-based agreement|outcomes-based agreements]] with gene therapy manufacturers on behalf of state Medicaid programs, instead of leaving each state to negotiate alone. Both manufacturers joined: Vertex, and Genetix Biotherapeutics, the company that now holds Lyfgenia after bluebird bio was taken private in 2025.</p>
      <p>Announced in July 2025, the model covers 33 states plus the District of Columbia and Puerto Rico, about 84% of Medicaid beneficiaries with sickle cell disease. States get guaranteed discounts and rebates if the therapy does not deliver agreed outcomes, technical help with tracking those outcomes, and up to $9.55 million each in federal implementation funding. In exchange they must adopt a standard access policy, including standardized prior authorization and paying out-of-state treatment centers. And the manufacturers must pay for fertility preservation services and the travel and lodging around them, because infertility was a direct barrier to patients accepting the treatment.</p>
      <p>Note what this is: a government agency acting as a group purchasing organization and a data intermediary at once, because a market of 50 separate buyers could not transact with a product like this. The specific rebate terms are confidential.</p>`},

    {type: 'decision', title: 'You are Vertex, late 2023: set the price', role: 'Head of US pricing and access, Vertex',
      scenario: `You are days from the first CRISPR approval in history. ICER says $1.35M to $2.05M is cost-effective. Lifetime costs of the disease are around $1.6M to $1.7M in commercial claims. Your rival, bluebird, will launch the same week; you do not know their number. Most of your patients are on Medicaid, and your product requires a hospital, a factory slot and a year of a patient's life. Your investors have watched several one-time therapies fail commercially, and bluebird itself is close to running out of money. What do you price at?`,
      options: [
        {label: '$1.5 million, at the bottom of the ICER range', outcome: 'You buy goodwill, take the cost-effectiveness argument off the table, and make it harder for a state to say no. You also set a permanent ceiling for every gene therapy that follows yours, and in a market where fewer than 100 patients a year are infused, a 30% lower price means the program may never repay its development cost.'},
        {label: '$2.2 million, just above the ICER range', outcome: 'You can defend it with the lifetime-cost arithmetic and the ICER band, and you are cheaper than your only direct competitor. You accept that every article about your therapy will lead with the price, and that "$2.2 million" becomes the single fact most people know about CRISPR medicine.'},
        {label: '$3.5 million, and argue this is a cure', outcome: 'It maximizes revenue per patient and matches what some analysts had modeled. It also invites Congressional letters, makes state Medicaid directors dig in, and risks the access model never happening. In a disease with this specific history of neglect, it would be read as a statement about whose lives are billable.'},
        {label: 'An annuity: $300,000 a year for ten years, stopping if crises return', outcome: 'Economically the cleanest answer to the churn problem, and closest to what payers say they want. It is also close to unworkable in US Medicaid: best-price rules, state accounting that cannot carry multi-year obligations, and patients who move between plans all get in the way. Companies have tried and mostly given up.'},
      ],
      reality: `Vertex chose $2.2 million, and bluebird chose $3.1 million for Lyfgenia. Both offered outcomes-based contracts to payers. Two years later Vertex's revenue from Casgevy was $116 million for all of 2025: about the value of 53 list-price doses, in a US market of roughly 100,000 patients. The price was not the binding constraint on uptake. The 45 days in hospital were.`},

    {type: 'explorer', title: 'A state Medicaid director\'s budget problem', tocTitle: 'Medicaid explorer',
      intro: 'You run a mid-sized state Medicaid pharmacy program. Move the sliders and watch the one-year budget hit against the long-run offset. Toy model, real structure.',
      inputs: [
        {id: 'pts', label: 'Eligible severe patients in your state', min: 50, max: 2000, step: 50, value: 400, fmt: v => v.toLocaleString()},
        {id: 'take', label: 'Share treated in one year', min: 1, max: 30, step: 1, value: 5, fmt: v => v + '%'},
        {id: 'net', label: 'Net price after rebate', min: 800, max: 2200, step: 50, value: 1700, fmt: v => '$' + (v / 1000).toFixed(2) + 'M'},
        {id: 'care', label: 'Current annual cost of care per severe patient', min: 10, max: 120, step: 5, value: 45, fmt: v => '$' + v + 'k'},
        {id: 'churn', label: 'Patients who leave your program each year', min: 0, max: 25, step: 1, value: 10, fmt: v => v + '%'},
      ],
      compute: (v) => {
        const n = Math.max(1, Math.round(v.pts * v.take / 100));
        const cost = n * v.net / 1000;                  // $M
        const annualSaved = n * v.care / 1000;          // $M per year if they stay
        let pv = 0, stay = 1;
        for (let t = 1; t <= 20; t++) { stay *= (1 - v.churn / 100); pv += annualSaved * stay / Math.pow(1.03, t); }
        const payback = annualSaved > 0 ? (cost / annualSaved) : 999;
        const capture = Math.round(pv / cost * 100);
        return '<div style="font-size:16px">Treating <b>' + n + '</b> patients this year costs your program <b>$' + cost.toFixed(1) + ' million</b>, up front, in one budget cycle.' +
          '<div style="margin:12px 0;display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
          '<div style="background:var(--panel-2);border-radius:10px;padding:10px 12px"><div style="font-size:13px;color:var(--ink-3)">Undiscounted payback, if nobody left</div><div style="font-size:22px;font-weight:650">' + (payback > 60 ? '60+' : payback.toFixed(1)) + ' years</div></div>' +
          '<div style="background:var(--panel-2);border-radius:10px;padding:10px 12px"><div style="font-size:13px;color:var(--ink-3)">Savings your program actually captures</div><div style="font-size:22px;font-weight:650;color:' + (capture >= 100 ? 'var(--win)' : capture >= 50 ? 'var(--warn)' : 'var(--loss)') + '">' + capture + '% of the cost</div></div></div>' +
          'Over 20 years, at 3% discounting and ' + v.churn + '% of patients leaving your program each year, you keep about <b>$' + pv.toFixed(1) + ' million</b> of the avoided care costs. ' +
          (capture >= 100 ? 'On these assumptions the state comes out ahead, eventually.' : 'The rest of the benefit lands on some other payer, or on the patient\'s employer, or on nobody\'s balance sheet at all.') +
          '<div style="margin-top:10px;color:var(--ink-3);font-size:14.5px">Why this is the real obstacle: the cost is a lump in one fiscal year and the savings are a trickle across decades, collected by whoever insures the patient then. That mismatch, not the headline price, is what the CMS [[CGT Access Model]] was built to soften. List price $2.2M; the rebated net price is confidential, and the care-cost slider brackets published Medicaid estimates.</div></div>';
      }},
    // ---------------- 13. THE SLOW LAUNCH ----------------
    {type: 'story', kicker: 'The launch', title: 'A first in medicine, and a funnel that barely moves', tocTitle: 'The slow launch',
      html: `<p>Vertex did the industrial work properly. By the end of 2023 it had activated 12 [[authorized treatment center|authorized treatment centers]] in the US and three in Europe, aiming at about 50 in the US and 25 in Europe. By mid-2025 it had passed 75 globally. Reimbursement deals followed in England, Saudi Arabia, the Gulf states, Canada, Switzerland and eventually Germany, and by mid-2026 the product was approved in 39 countries with about 60,000 eligible patients in them.</p>
      <p>Then look at the patients. In all of 2024, more than 50 people worldwide had started cell collection, and revenue for the year was $10 million. In 2025, 147 people started collection and 64 were infused, for $116 million. In the second quarter of 2026 revenue reached $76 million, growing fast in percentage terms and still, in absolute terms, a rounding error against a disease that affects 100,000 Americans.</p>
      <p>Why so slow? Every step of the funnel leaks. Patients have to live near a treatment center or move for six weeks. They have to be well enough for [[myeloablative conditioning|myeloablative chemotherapy]] but sick enough to qualify. They have to accept probable infertility. Their insurer has to approve a seven-figure claim, then a hospital has to schedule a transplant bed, an apheresis slot and a manufacturing slot in sequence. Roughly one in ten sickle cell patients cannot give up enough stem cells however many times they try. And the gap between starting collection and being infused is measured in many months, which is why the gap between the two columns below never closes.</p>
      <p>There is a lesson here that the industry keeps relearning: approval is not adoption, and for a therapy that is really a procedure, the constraint is capacity and consent, not demand or even price.</p>`},

    {type: 'chart', title: 'The funnel, two years in', tocTitle: 'Uptake',
      intro: 'Cumulative since launch, worldwide, as reported by Vertex in its quarterly results. Cell collection is the start of the process; infusion is the end of it, many months later.',
      chart: {kind: 'bar', title: 'Patients who have started cell collection vs. patients infused', unit: 'patients',
        categories: ['End of 2024', 'Mid-2025', 'End of Sep 2025', 'End of 2025'],
        series: [
          {name: 'Started cell collection', values: [50, 115, 165, 197]},
          {name: 'Infused', values: [5, 29, 39, 69]}],
        note: 'Figures from Vertex quarterly reports; "more than 50" and the end-2025 totals are derived by adding the 147 collections and 64 infusions reported for calendar 2025 to the cumulative figures reported at the end of 2024, so the last pair is approximate.'},
      takeaway: 'Two years after the first CRISPR approval in history, fewer than 200 people worldwide had begun the process and fewer than 70 had finished it. The therapy works; the pathway does not scale.'},

    {type: 'chart', title: 'Revenue: real, and small', tocTitle: 'Revenue',
      intro: 'Quarterly Casgevy revenue as reported by Vertex. Because each patient is a single seven-figure event recognized on infusion, the line is lumpy by construction.',
      chart: {kind: 'line', title: 'Casgevy net revenue by quarter', unit: '$M',
        series: [{name: 'Casgevy revenue', points: [[2024.9, 8.0], [2025.1, 14.2], [2025.4, 30.4], [2025.6, 16.9], [2025.9, 54.3], [2026.1, 43.0], [2026.4, 76.0]]}],
        annotations: [{x: 2025.6, label: 'A quarter with fewer infusions'}],
        xFmt: x => ['Q4 24', 'Q1 25', 'Q2 25', 'Q3 25', 'Q4 25', 'Q1 26', 'Q2 26'][[2024.9, 2025.1, 2025.4, 2025.6, 2025.9, 2026.1, 2026.4].indexOf(x)] || '',
        note: 'Source: Vertex quarterly results (8-K exhibits). 2024 full-year Casgevy revenue was $10.0M; 2025 full-year was $115.8M.'},
      takeaway: 'Vertex guided to "$500 million or more" from non-cystic-fibrosis products in 2026, with Casgevy a growing part of that. For context, Vertex\'s total 2025 revenue was about $12 billion, almost all of it from <a href="case.html?id=trikafta">cystic fibrosis medicines</a>. Casgevy is a landmark that the company can afford to be patient with.'},

    {type: 'story', kicker: 'Access', title: 'The patients are in Africa and India. The therapy is not.', tocTitle: 'Global access',
      html: `<p>Most babies born with sickle cell disease are born in sub-Saharan Africa, and half of all affected newborns worldwide are born in Nigeria, India and the Democratic Republic of Congo. Casgevy requires apheresis machines, liquid nitrogen shipping, transplant beds, pharmacokinetically dosed busulfan, months of specialist follow-up and a seven-figure payment. Nigeria's total government health spending per person is in the tens of dollars a year.</p>
      <p>The one market where this has been squared is the Gulf. Saudi Arabia and Bahrain approved Casgevy early, and Vertex counts more than 23,000 eligible patients in the Middle East against roughly 37,000 in North America and Europe. Wealthy states with national payers, concentrated populations and a high burden of both diseases can simply buy it. That is not a template for Kano or Kinshasa.</p>
      <p>What can travel is less glamorous and probably saves more lives per dollar: newborn screening, penicillin prophylaxis, vaccination, and [[hydroxyurea|hydroxyurea]]. The REACH trial showed in 2019 that hydroxyurea is feasible and safe for children in Angola, DR Congo, Kenya and Uganda, cutting pain events, transfusions, malaria and deaths. A year of hydroxyurea costs less than a hundred dollars. The therapy that ends crises in 93% of patients and the therapy that halves them for a dollar a day are aimed at almost entirely separate populations, and only one of them scales today.</p>
      <p>That is the uncomfortable framing for anyone entering this industry. Casgevy is a genuine scientific triumph and a distribution failure by design: not because anyone intended it, but because the delivery pathway was inherited from transplant medicine and nobody has yet rebuilt it for the places where the disease actually is.</p>`},

    {type: 'callout', variant: 'whatif', heading: 'What if the conditioning chemotherapy had not been necessary?',
      html: `<p>Strip out [[busulfan]] and nearly everything difficult about this case disappears. No infertility conversation, so the decision stops being existential for young adults. No weeks of [[neutropenia]], so the treatment does not need a transplant unit, which multiplies the number of centers that could offer it. No 45-day stay, so patients do not have to move cities. The eligible population widens from "people well enough for a transplant" to almost everyone with the disease. Vertex has said in its own results that gentler conditioning could expand the eligible population beyond 150,000 people.</p>
      <p>It would also change the economics. A shorter, cheaper, outpatient-ish procedure with far higher throughput would turn a product that treats 64 people a year into one that treats thousands, and would put real pressure on a $2.2 million price that is partly justified by scarcity. The version of Casgevy that reaches millions of people is probably not this one.</p>`},

    // ---------------- 14. WHAT COMES NEXT ----------------
    {type: 'story', kicker: 'What came next', title: 'Three ways to make this easier', tocTitle: 'What comes next',
      html: `<h3>1. Gentler conditioning</h3>
      <p>The idea is to clear marrow space with an antibody instead of chemotherapy. An antibody against CD117, the receptor that marks blood stem cells, can strip them out selectively while leaving the gut, hair and gonads alone. Beam Therapeutics has run this approach, which it calls ESCAPE, alongside its editing program, and has taken an anti-CD117 antibody (BEAM-103) through a healthy-volunteer study. Vertex has said repeatedly since 2023 that it is advancing preclinical gentler-conditioning assets toward the clinic. Nobody has yet shown it works in patients.</p>
      <h3>2. Base editing</h3>
      <p>Casgevy cuts. A [[base editing|base editor]] chemically converts one DNA letter into another without a [[double-strand break]], which avoids the chromosomal rearrangements a cut can occasionally cause. Beam's lead program, BEAM-101 (now called risto-cel), edits the promoters of the gamma-globin genes themselves to recreate the exact letters found in people with [[HPFH]], rather than disabling the BCL11A enhancer. At the 2024 ASH meeting Beam reported the first seven patients: fetal hemoglobin above 60% of total, sickle hemoglobin below 40%, anemia resolved, no crises after engraftment. It still uses busulfan, and one patient died four months after infusion of respiratory failure that the investigator judged likely related to the conditioning, not the edited cells. Beam has since completed dosing and said it could file for approval as early as the end of 2026.</p>
      <p>Note what that comparison implies. A better edit inside the same procedure gets you higher fetal hemoglobin, and a patient still died of the chemotherapy. The edit was never the hard part.</p>
      <h3>3. In vivo editing</h3>
      <p>The prize is to skip the factory altogether: inject a particle that finds blood stem cells inside the body and edits them there. No apheresis, no manufacturing slot, no conditioning, in principle a vial that could ship to Lagos. Several groups, including Beam, are working on targeted lipid nanoparticles for exactly this. It is early, the delivery problem is unsolved, and the safety bar is higher because you cannot inspect the cells before putting them back. But it is the only version of this therapy that could ever reach the 7.7 million people who have the disease.</p>
      <h3>And the disease that isn't going away</h3>
      <p>Meanwhile the everyday shelf got thinner: [[voxelotor]] was pulled worldwide in September 2024. The most consequential near-term interventions for global sickle cell mortality remain newborn screening and hydroxyurea. It is entirely possible for Casgevy to be the most important medicine of its decade scientifically and for the number of children dying of sickle cell disease worldwide to be unchanged by it.</p>`},

    {type: 'callout', variant: 'lesson', heading: 'The edit is the easy part',
      html: `<p>Every constraint that limits Casgevy today is outside the CRISPR complex: mobilizing stem cells from damaged marrow, clearing space with chemotherapy, hospital capacity, fertility, payment models, and geography. The gene editing itself worked essentially on the first try in humans, at about 80% of alleles, durably, in both diseases. When a platform technology finally arrives, the bottleneck moves immediately to the boring infrastructure around it.</p>`},

    // ---------------- QUIZ ----------------
    {type: 'quiz', title: 'Check your understanding',
      questions: [
        {q: 'What does Casgevy actually change in a patient\'s DNA?', options: ['It corrects the sickle mutation in the beta-globin gene', 'It inserts a working copy of the beta-globin gene', 'It cuts an enhancer that controls BCL11A, so red cells stop switching off fetal hemoglobin', 'It deletes the BCL11A gene'], answer: 2, explain: 'The sickle mutation is left untouched, and BCL11A itself is not deleted because it is needed in B cells and the brain. The cut destroys a GATA1 binding site in a red-cell-only enhancer inside BCL11A, which silences the repressor in red-cell precursors only.'},
        {q: 'Why does fetal hemoglobin help at all?', options: ['It carries more oxygen per molecule', 'It lacks the pocket that the sickle patch grabs, so it cannot join a sickle fiber and it dilutes HbS', 'It makes red cells more flexible directly', 'It destroys sickle hemoglobin'], answer: 1, explain: 'Gamma chains cannot be recruited into the polymer, and because fiber formation depends steeply on HbS concentration, dilution has an outsized effect. People who inherit both the sickle mutation and hereditary persistence of fetal hemoglobin are usually symptom-free.'},
        {q: 'Why is a patient\'s average fetal hemoglobin percentage a misleading number on its own?', options: ['Because laboratory tests for it are unreliable', 'Because it changes hour to hour', 'Because the same average can be a little in every cell or a lot in a few cells, and only the even spread protects every cell', 'Because it does not correlate with crises at all'], answer: 2, explain: 'A cell needs roughly a third of its hemoglobin to be fetal to resist polymer. That is why the trials reported both the percentage and the share of cells containing it: about 94% of red cells, a pancellular distribution.'},
        {q: 'Why is G-CSF, the standard stem cell mobilizing drug, banned in sickle cell disease?', options: ['It interferes with CRISPR editing', 'It has triggered severe, sometimes fatal vaso-occlusive crises', 'It is too expensive', 'It damages the fetal hemoglobin genes'], answer: 1, explain: 'Patients with sickle cell disease receive plerixafor alone, plus weeks of transfusions beforehand to push sickle hemoglobin below 30%. Thalassemia patients, who do not sickle, can receive G-CSF and need far fewer collection cycles as a result.'},
        {q: 'In the pivotal sickle cell trial, 63 patients enrolled and 44 were infused. What happened to most of the difference?', options: ['They withdrew consent after learning the price', 'They failed to collect enough CD34+ stem cells despite repeated cycles', 'Their edited cells failed quality control', 'They were found ineligible on genotype'], answer: 1, explain: 'Six of the 58 who started mobilization (about 10%) never collected enough cells. Marrow damaged by a lifetime of sickling gives up stem cells reluctantly, which is a manufacturing and eligibility problem no amount of editing precision solves.'},
        {q: 'The FDA\'s advisory committee met specifically to discuss off-target editing and took no vote. What was the core problem?', options: ['The efficacy data were too weak to judge', 'Off-target risk cannot be measured in a trial, and predictions depend on whose genome you predict against', 'The manufacturing site had failed inspection', 'The guide RNA sequence was not disclosed'], answer: 1, explain: 'A 2023 analysis found that the guide\'s top off-target candidate is created by a variant carried by about 4.5% of people of African ancestry, which does not exist in the reference genome. The FDA answered with post-marketing requirements: a variant-aware bioinformatics study and 250 patients followed for 15 years.'},
        {q: 'Lyfgenia, approved the same day, carries a boxed warning that Casgevy does not. For what?', options: ['Infertility', 'Liver failure', 'Blood cancers in treated patients', 'Graft-versus-host disease'], answer: 2, explain: 'Lyfgenia uses a lentivirus to insert a gene at semi-random positions, and blood cancers have occurred in treated patients. Casgevy makes a targeted cut instead, but its off-target risk is unproven rather than absent, which is why both require 15-year follow-up.'},
        {q: 'Why is a $2.2 million one-time price especially hard for US Medicaid specifically?', options: ['Medicaid is legally barred from covering gene therapies', 'The whole cost lands in one state budget year while savings accrue over decades, often to a different payer after the patient moves or changes plans', 'Medicaid pays list price with no rebates', 'Gene therapies are excluded from the Medicaid Drug Rebate Program'], answer: 1, explain: 'Between 50% and 60% of Americans with sickle cell disease are on Medicaid. The CMS Cell and Gene Therapy Access Model exists to soften exactly this mismatch, by negotiating outcomes-based rebates centrally for states covering about 84% of affected beneficiaries.'},
        {q: 'Two years after approval, roughly how many patients worldwide were infused with Casgevy during 2025?', options: ['About 60', 'About 600', 'About 6,000', 'About 20,000'], answer: 0, explain: '64 patients were infused in 2025 and 147 started cell collection. The constraint is not price or demand but capacity, conditioning chemotherapy and the willingness of patients to accept infertility and weeks in hospital.'},
        {q: 'What would most change the reach of this therapy?', options: ['A lower list price', 'Approval in more countries', 'Replacing busulfan conditioning with something gentler, and eventually editing inside the body', 'A more efficient guide RNA'], answer: 2, explain: 'The editing already works at about 80% of alleles. Removing the chemotherapy would widen eligibility, multiply the number of centers that could deliver it and shorten the process; in vivo editing would remove the factory altogether. Both are early-stage.'},
      ]},

    // ---------------- LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches',
      items: [
        {title: 'The best drug targets come from healthy outliers', text: 'BCL11A was found by asking why some people with sickle cell disease are barely ill. Human genetics pointed at a switch, and the people with hereditary persistence of fetal hemoglobin were a living phase 3 trial of what happens when you flip it. Look for the humans who already have the phenotype you want.', links: ['repatha', 'trikafta', 'spinraza']},
        {title: 'Work around the broken part rather than fixing it', text: 'Casgevy never touches the sickle mutation. Reactivating a gene the body already owns was achievable years before precisely correcting a letter would be. The elegant fix and the shippable fix are rarely the same thing.', links: ['spinraza', 'zolgensma']},
        {title: 'When the therapy is a procedure, the procedure is the product', text: 'Apheresis slots, transplant beds, busulfan, six weeks away from home: none of it is CRISPR, and all of it determines who gets treated. Cell therapies live or die on the pathway around them, as CAR-T found first.', links: ['kymriah', 'zolgensma']},
        {title: 'Validate on the population you will treat, not the one in the reference dataset', text: 'The most dangerous predicted off-target site for this guide exists only in people of African ancestry, and was invisible in a reference genome built mostly from Europeans. Whose data your safety analysis is built on is a safety question.', links: ['comirnaty', 'aduhelm']},
        {title: 'One-time therapies break the payment system, and someone has to build a new one', text: 'A seven-figure lump sum against savings spread over 40 years, in a program that people churn out of, needed a federal purchasing model to be transactable at all. Expect the financing innovation to take as long as the science.', links: ['zolgensma', 'sovaldi', 'kymriah']},
        {title: 'Approval is not access, and access is not equity', text: 'The disease is concentrated in Africa and India; the therapy is available in 39 wealthy countries through certified centers. Meanwhile a generic pill that halves crises remains underused everywhere. A scientific first can coexist with almost no effect on global mortality.', links: ['sovaldi', 'trikafta']},
      ]},

    // ---------------- SOURCES ----------------
    {type: 'sources', title: 'Sources',
      items: [
        {text: 'Frangoul H, Locatelli F, Sharma A, et al. Exagamglogene autotemcel for severe sickle cell disease. N Engl J Med 2024;390:1649–62 (CLIMB SCD-121 design and results, 44 infused, 29 of 30 evaluable free of crises, median follow-up 19.3 months).', url: 'https://doi.org/10.1056/NEJMoa2309676'},
        {text: 'Locatelli F, Lang P, Wall D, et al. Exagamglogene autotemcel for transfusion-dependent beta-thalassemia. N Engl J Med 2024;390:1663–76 (CLIMB THAL-111: 52 infused, 32 of 35 transfusion-independent, mean Hb 13.1 g/dL, HbF 11.9 g/dL).', url: 'https://doi.org/10.1056/NEJMoa2309673'},
        {text: 'CASGEVY (exagamglogene autotemcel) US Prescribing Information, revised July 2026 (mechanism, mobilization and apheresis, busulfan, adverse reactions, engraftment times, HbF and allelic editing tables, trial funnels, off-target warning).', url: 'https://www.fda.gov/media/174615/download'},
        {text: 'US FDA. Summary Basis for Regulatory Action: CASGEVY, 8 December 2023 (regulatory history, designations, advisory committee summary, off-target postmarketing requirements, 250-patient 15-year study).', url: 'https://www.fda.gov/media/175179/download'},
        {text: 'US FDA. FDA approves first gene therapies to treat patients with sickle cell disease, 8 December 2023 (approval of Casgevy and Lyfgenia, US prevalence, Lyfgenia results and boxed warning).', url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-gene-therapies-treat-patients-sickle-cell-disease'},
        {text: 'MHRA. MHRA authorises world-first gene therapy that aims to cure sickle-cell disease and transfusion-dependent beta-thalassemia, 16 November 2023.', url: 'https://www.gov.uk/government/news/mhra-authorises-world-first-gene-therapy-that-aims-to-cure-sickle-cell-disease-and-transfusion-dependent-thalassemia'},
        {text: 'Frangoul H, Altshuler D, Cappellini MD, et al. CRISPR-Cas9 gene editing for sickle cell disease and beta-thalassemia. N Engl J Med 2021;384:252–60 (the first two patients, about 80% of alleles edited).', url: 'https://doi.org/10.1056/NEJMoa2031054'},
        {text: 'Sankaran VG, Menne TF, Xu J, et al., Orkin SH. Human fetal hemoglobin expression is regulated by the developmental stage-specific repressor BCL11A. Science 2008;322:1839–42.', url: 'https://doi.org/10.1126/science.1165409'},
        {text: 'Bauer DE, Kamran SC, Lessard S, et al., Orkin SH. An erythroid enhancer of BCL11A subject to genetic variation determines fetal hemoglobin level. Science 2013;342:253–7.', url: 'https://doi.org/10.1126/science.1242088'},
        {text: 'Canver MC, Smith EC, Sher F, et al., Orkin SH, Bauer DE. BCL11A enhancer dissection by Cas9-mediated in situ saturating mutagenesis. Nature 2015;527:192–7 (identifying the GATA1 motif).', url: 'https://doi.org/10.1038/nature15521'},
        {text: 'Menzel S, Garner C, Gut I, et al., Thein SL. A QTL influencing F cell production maps to a gene encoding a zinc-finger protein on chromosome 2p15. Nat Genet 2007;39:1197–9; and Uda M, et al. PNAS 2008;105:1620–5.', url: 'https://doi.org/10.1038/ng2108'},
        {text: 'Xu J, Peng C, Sankaran VG, et al., Orkin SH. Correction of sickle cell disease in adult mice by interference with fetal hemoglobin silencing. Science 2011;334:993–6.', url: 'https://doi.org/10.1126/science.1211053'},
        {text: 'Jinek M, Chylinski K, Fonfara I, Hauer M, Doudna JA, Charpentier E. A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity. Science 2012;337:816–21.', url: 'https://doi.org/10.1126/science.1225829'},
        {text: 'Cong L, Ran FA, Cox D, et al., Zhang F. Multiplex genome engineering using CRISPR/Cas systems. Science 2013;339:819–23.', url: 'https://doi.org/10.1126/science.1231143'},
        {text: 'The Nobel Prize in Chemistry 2020 press release: Emmanuelle Charpentier and Jennifer A. Doudna, 7 October 2020.', url: 'https://www.nobelprize.org/prizes/chemistry/2020/press-release/'},
        {text: 'Regents of the University of California v. Broad Institute, Nos. 2022-1594, 2022-1653 (Fed. Cir., 12 May 2025): written description affirmed, conception determination vacated and remanded.', url: 'https://cafc.uscourts.gov/opinions-orders/22-1653.OPINION.5-12-2025_2512679.pdf'},
        {text: 'Cancellieri S, Zeng J, Lin LY, et al., Bauer DE, Pinello L. Human genetic diversity alters off-target outcomes of therapeutic gene editing. Nat Genet 2023;55:34–43 (CRISPRme; a PAM-creating variant with 4.5% allele frequency in African-ancestry populations).', url: 'https://doi.org/10.1038/s41588-022-01257-y'},
        {text: 'Editas Medicine 8-K, 13 December 2023: non-exclusive Cas9 license to Vertex, $50M up front plus contingent and annual fees through 2034.', url: 'https://www.sec.gov/Archives/edgar/data/1650664/000165066423000038/0001650664-23-000038-index.htm'},
        {text: 'Vertex Pharmaceuticals 8-K, 8 December 2023: US wholesale acquisition cost of $2.2 million; bluebird bio 8-K, 11 December 2023: Lyfgenia at $3.1 million with outcomes-based contracts and a boxed warning.', url: 'https://www.sec.gov/Archives/edgar/data/875320/000087532023000054/0000875320-23-000054-index.htm'},
        {text: 'Vertex Pharmaceuticals quarterly and annual results (8-K exhibit 99.1), Q4 2023 through Q2 2026: treatment center activation, cell collections, infusions, quarterly and annual Casgevy revenue, eligible-patient estimates, pediatric approval in 53 days, gentler conditioning programs.', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000875320&type=8-K'},
        {text: 'CRISPR Therapeutics 10-K for 2025: the 2015 Vertex collaboration, the $900 million up-front payment in 2021, the 60/40 profit split, the $200 million approval milestone, and the CRISPR patent interference landscape.', url: 'https://www.sec.gov/Archives/edgar/data/1674416/000119312526048957/crsp-20251231.htm'},
        {text: 'CMS Innovation Center. Cell and Gene Therapy Access Model: model page, FAQs, and press release "CMS Expands Access to Lifesaving Gene Therapies Through Innovative State Agreements", 15 July 2025 (the July 2025 release lists 33 states plus DC and Puerto Rico; the model page and FAQ list 32 states plus DC and Puerto Rico, together about 84% of Medicaid beneficiaries with SCD; up to $9.55M per state; fertility preservation requirement; 50–60% of patients on Medicaid).', url: 'https://www.cms.gov/priorities/innovation/innovation-models/cgt'},
        {text: 'ICER. Gene therapy for sickle cell disease: final evidence report, 21 August 2023 (health-benefit price benchmark of $1.35M to $2.05M).', url: 'https://icer.org/assessment/sickle-cell-disease-2023/'},
        {text: 'GBD 2021 Sickle Cell Disease Collaborators. Global, regional, and national prevalence and mortality burden of sickle cell disease, 2000–2021. Lancet Haematol 2023;10:e585–99 (7.74 million prevalent cases, 515,000 births, 376,000 total deaths).', url: 'https://doi.org/10.1016/S2352-3026(23)00118-7'},
        {text: 'Piel FB, Patil AP, Howes RE, et al. Global epidemiology of sickle haemoglobin in neonates. Lancet 2013;381:142–51 (Nigeria, India and DR Congo account for half of affected newborns).', url: 'https://doi.org/10.1016/S0140-6736(12)61229-X'},
        {text: 'CDC. Data and statistics on sickle cell disease (about 100,000 Americans; 1 in 365 Black births; 1 in 16,300 Hispanic births; 1 in 13 Black babies with sickle cell trait).', url: 'https://www.cdc.gov/sickle-cell/data/index.html'},
        {text: 'Platt OS, Brambilla DJ, Rosse WF, et al. Mortality in sickle cell disease: life expectancy and risk factors for early death. N Engl J Med 1994;330:1639–44; and Lubeck D, et al. JAMA Netw Open 2019;2:e1915374 (life expectancy 54 vs 76 years; $695,000 of lost income).', url: 'https://doi.org/10.1001/jamanetworkopen.2019.15374'},
        {text: 'Taylor SM, Parobek CM, Fairhurst RM. Haemoglobinopathies and the clinical epidemiology of malaria. Lancet Infect Dis 2012;12:457–68 (odds ratio 0.09 for severe falciparum malaria with sickle trait); Allison AC. BMJ 1954;1:290–4.', url: 'https://doi.org/10.1016/S1473-3099(12)70055-5'},
        {text: 'Charache S, Terrin ML, Moore RD, et al. Effect of hydroxyurea on the frequency of painful crises in sickle cell anemia. N Engl J Med 1995;332:1317–22; and Tshilolo L, et al. Hydroxyurea for children with sickle cell anemia in sub-Saharan Africa. N Engl J Med 2019;380:121–31 (REACH).', url: 'https://doi.org/10.1056/NEJMoa1813598'},
        {text: 'Powars DR, Weiss JN, Chan LS, Schroeder WA. Is there a threshold level of fetal hemoglobin that ameliorates morbidity in sickle cell anemia? Blood 1984;63:921–6; Estepp JH, et al. Am J Hematol 2017;92:1333–9; Steinberg MH. Fetal hemoglobin in sickle cell anemia. Blood 2020;136:2392–400 (HbS-HPFH at about 30% HbF, pancellular, usually asymptomatic).', url: 'https://doi.org/10.1182/blood.2020007645'},
        {text: 'Gluckman E, Cappelli B, Bernaudin F, et al. Sickle cell disease: an international survey of results of HLA-identical sibling hematopoietic stem cell transplantation. Blood 2017;129:1548–56; Walters MC, et al. Barriers to bone marrow transplantation for sickle cell anemia. Biol Blood Marrow Transplant 1996;2:100–4.', url: 'https://doi.org/10.1182/blood-2016-10-745711'},
        {text: 'Pawliuk R, Westerman KA, Fabry ME, et al. Correction of sickle cell disease in transgenic mouse models by gene therapy. Science 2001;294:2368–71.', url: 'https://doi.org/10.1126/science.1065806'},
        {text: 'Kanter J, Walters MC, Krishnamurti L, et al. Biologic and clinical efficacy of LentiGlobin for sickle cell disease. N Engl J Med 2022;386:617–28 (lovo-cel, the product approved as Lyfgenia).', url: 'https://doi.org/10.1056/NEJMoa2117175'},
        {text: 'Farooq F, Mogayzel PJ, Lanzkron S, Haywood C, Strouse JJ. Comparison of US federal and foundation funding of research for sickle cell disease and cystic fibrosis. JAMA Netw Open 2020;3:e201737.', url: 'https://doi.org/10.1001/jamanetworkopen.2020.1737'},
        {text: 'Anderson D, Lien K, Agwu C, Ang PS, Abou Baker N. The bias of medicine in sickle cell disease. J Gen Intern Med 2023;38:3247–51 (the 1972 Act, mandatory trait testing, employment and Air Force exclusions, emergency department wait times).', url: 'https://doi.org/10.1007/s11606-023-08392-0'},
        {text: 'Johnson KM, Jiao B, Ramsey SD, et al. Lifetime medical costs attributable to sickle cell disease among nonelderly individuals with commercial insurance. Blood Adv 2023;7:365–74 ($1.6M–$1.7M ages 0–64).', url: 'https://doi.org/10.1182/bloodadvances.2021006281'},
        {text: 'Stein R. NPR: "A year in, 1st patient to get gene editing for sickle cell disease is thriving" (23 June 2020) and "Sickle cell patient reveals why she is volunteering for landmark gene-editing study" (29 July 2019): Victoria Gray, Sarah Cannon Research Institute, quotes.', url: 'https://www.npr.org/sections/health-shots/2019/07/29/744826505/sickle-cell-patient-reveals-why-she-is-volunteering-for-landmark-gene-editing-st'},
        {text: 'Beam Therapeutics 8-K, 6 December 2024 (BEACON trial: seven patients, HbF above 60%, HbS below 40%, one death from respiratory failure attributed to busulfan; ESCAPE non-genotoxic conditioning) and 4 August 2026 (dosing complete, BLA as early as end of 2026, anti-CD117 antibody BEAM-103).', url: 'https://www.sec.gov/Archives/edgar/data/1745999/000119312524272860/d903914dex991.htm'},
        {text: 'US FDA. FDA is alerting patients and health care professionals about the voluntary withdrawal of Oxbryta from the market, 26 September 2024.', url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-alerting-patients-and-health-care-professionals-about-voluntary-withdrawal-oxbryta-market-due'},
        {text: 'CMS. Sickle Cell Disease Gene Therapy Care Journey (patient pathway: 2–3 months of transfusions, 3–9 days of apheresis, 35–45 days for infusion and recovery, 15 years of follow-up).', url: 'https://www.cms.gov/files/document/cgt-model-journey-map.pdf'},
      ]},
  ],
});
