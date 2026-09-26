// Spinraza (nusinersen): Ionis / Biogen. See GUIDE.md.
registerCase({
  id: 'spinraza', kind: 'success',
  brand: 'Spinraza', generic: 'nusinersen', company: 'Ionis Pharmaceuticals (discovery) and Biogen (marketing)',
  tagline: 'The first treatment for spinal muscular atrophy did not replace the broken gene. It changed how a nearly identical backup gene gets [[splicing|edited]] inside the cell.',
  chips: [['Disease', 'Spinal muscular atrophy (SMA)'], ['Modality', '[[antisense oligonucleotide]]'], ['Target', '[[SMN2]] RNA ([[ISS-N1]])'], ['Approved', 'December 2016 (US)']],
  readingTime: 35,
  stats: [
    {v: '1 letter', l: 'The C-to-T difference that makes the backup gene skip [[exon]] 7', n: 'Lorson et al., PNAS 1999'},
    {v: '51% vs 0%', l: 'Infants reaching new motor milestones in ENDEAR, nusinersen vs [[sham procedure|sham]]', n: 'Finkel et al., NEJM 2017'},
    {v: '<3 months', l: 'From filing to FDA approval under [[priority review]]', n: 'FDA and Ionis, Dec 2016'},
    {v: '$125,000', l: 'US [[list price]] per injection at launch: $750,000 in year one, $375,000 a year after', n: 'CBS News, Dec 2016'},
    {v: '$2.1B', l: 'Worldwide sales in 2019, the peak year', n: 'Biogen 10-K'},
  ],
  emblem: `<svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="136" class="il-1s"/>
    <path d="M30 150 q10 -9 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" class="il-none il-line2"/>
    <rect x="38" y="126" width="56" height="48" rx="12" class="il-8s il-line"/>
    <rect x="118" y="120" width="62" height="60" rx="14" class="il-2"/>
    <text x="149" y="156" text-anchor="middle" class="il-white" style="font-size:18px">7</text>
    <rect x="212" y="126" width="56" height="48" rx="12" class="il-8s il-line"/>
    <path d="M186 196 q8 7 16 0 t16 0 t16 0" class="il-none st-1" stroke-width="7" stroke-linecap="round"/>
    <path d="M190 174 V190 M204 174 V190 M218 174 V190 M232 174 V190" class="st-1" stroke-width="3" stroke-linecap="round"/>
    <circle cx="150" cy="238" r="16" class="il-3"/><circle cx="178" cy="238" r="12" class="il-3"/><circle cx="122" cy="238" r="12" class="il-3"/>
  </svg>`,
  facts: {start: 2004, firstHuman: 2011, approval: 2016, end: null, peakSalesB: 2.1, pivotalN: 122,
    area: 'rare', modality: 'antisense oligonucleotide', target: 'SMN2 pre-mRNA'},
  themes: ['patient-advocacy', 'pricing', 'competition', 'platform'],
  glossary: {
    'SMA': 'Spinal muscular atrophy: an inherited disease in which the motor neurons of the spinal cord die, so muscles weaken and waste. The severest form kills most untreated babies before age two.',
    'spinal muscular atrophy': 'An inherited disease in which the motor neurons of the spinal cord die, so muscles weaken and waste. Caused by missing or broken SMN1 genes.',
    'SMN1': 'Survival motor neuron 1, the main gene for the SMN protein. People with SMA have lost or broken both copies.',
    'SMN2': 'Survival motor neuron 2, a near-identical backup of SMN1. One letter differs, which makes it skip exon 7 most of the time, so it makes only a little working protein.',
    'SMN protein': 'Survival motor neuron protein. It helps assemble parts of the cell\'s splicing machinery, and motor neurons are especially sensitive to running short of it.',
    'exon': 'A stretch of a gene that is kept in the final RNA message and used to build the protein.',
    'intron': 'A stretch of a gene that is copied into RNA and then cut out before the message is used.',
    'pre-mRNA': 'The raw RNA copy of a gene, still containing introns, before splicing turns it into finished mRNA.',
    'spliceosome': 'The cell\'s splicing machine: a large complex of RNA and proteins that recognizes exon edges, cuts out introns and joins exons.',
    'ISS-N1': 'Intronic splicing silencer N1: a short stretch of intron 7, just after exon 7, that tells the splicing machinery to skip exon 7. Nusinersen covers it up.',
    'splicing silencer': 'A short RNA sequence that recruits proteins which discourage the splicing machinery from using a nearby exon.',
    'hnRNP A1': 'A common RNA-binding protein that acts as a splicing repressor. Its binding near SMN2 exon 7 helps push the exon out.',
    'copy number': 'How many copies of a gene a person carries. SMN2 copy number varies from person to person, usually between one and four or more.',
    'intrathecal': 'Injected into the fluid-filled space around the spinal cord, so a drug reaches the brain and cord directly.',
    'lumbar puncture': 'A needle placed between two vertebrae in the lower back to reach the spinal fluid. Also called a spinal tap.',
    'cerebrospinal fluid': 'CSF: the clear fluid that bathes the brain and spinal cord.',
    'CSF': 'Cerebrospinal fluid: the clear fluid that bathes the brain and spinal cord.',
    'blood-brain barrier': 'Tightly sealed blood vessel walls in the brain and spinal cord that keep most large or charged molecules in the blood out of nerve tissue.',
    'phosphorothioate': 'A backbone modification in which one oxygen on each linking phosphate is swapped for sulfur. It resists enzymes that chew up nucleic acids and makes the strand stick to proteins, which helps it spread through tissue.',
    "2'-MOE": "2'-O-methoxyethyl: a chemical cap on each sugar of an antisense strand. It makes the strand bind its RNA target more tightly, resist breakdown, and stops the cell from cutting the target RNA.",
    'RNase H': 'An enzyme that cuts RNA when it is paired with DNA. Some antisense drugs use it to destroy their target; a splice-switching drug like nusinersen is designed to avoid it.',
    'sham procedure': 'A fake procedure that mimics the real one (here, a small needle prick on the lower back with no injection) so that families and assessors cannot tell who got the drug.',
    'HINE': 'Hammersmith Infant Neurological Examination. Section 2 scores motor milestones such as head control, kicking, rolling, sitting, crawling, standing and walking.',
    'CHOP INTEND': 'A 64-point motor function test designed for weak infants with neuromuscular disease.',
    'HFMSE': 'Hammersmith Functional Motor Scale Expanded: a 66-point scale of motor skills for children with SMA who can sit. A 3-point gain is considered clinically meaningful.',
    'event-free survival': 'Here, the time a patient lives without dying or needing permanent breathing support.',
    'natural history study': 'An observational study of how a disease progresses without treatment. It gives trial designers a baseline to compare against.',
    'newborn screening': 'Tests run on a few drops of blood from every newborn\'s heel to catch serious treatable conditions before symptoms appear.',
    'RUSP': 'Recommended Uniform Screening Panel: the US federal list of conditions that states are advised to include in newborn screening.',
    'presymptomatic': 'Diagnosed by a genetic test before any symptoms have appeared.',
    'option deal': 'A partnership in which a large company pays a smaller one now for the right, but not the obligation, to license a drug later, usually after a key trial.',
    'priority review voucher': 'A transferable coupon the FDA awards for some rare pediatric disease approvals. It entitles any later drug to a faster review, and can be sold.',
    'fast track': 'An FDA designation for drugs addressing serious unmet needs. It allows more frequent meetings and a rolling submission.',
    'splice-switching': 'Changing which exons a cell keeps in a gene\'s message, without changing the gene itself.',
    'SHINE': 'The open-label extension study into which ENDEAR and CHERISH participants could move, so that everyone received nusinersen.',
    'Zolgensma': 'Onasemnogene abeparvovec, Novartis\'s one-time gene therapy for SMA, approved in 2019. A virus delivers a working copy of SMN1.',
    'Evrysdi': 'Risdiplam, an oral small-molecule drug from Roche and PTC Therapeutics, approved in 2020. Like nusinersen, it pushes SMN2 to keep exon 7.',
    'Bayh-Dole Act': 'The 1980 US law that lets universities patent inventions made with federal funding, on condition that they disclose that funding and give the government certain rights.',
  },
  sections: [
    // ---------------- 1. Cold open ----------------
    {type: 'story', kicker: 'Cold open', title: 'The baby who stopped kicking', tocTitle: 'Cold open', html: `
<p>The story usually begins the same way. A baby is born and seems perfect. In the first weeks the parents notice nothing unusual. Then, somewhere around two or three months, something is off. The baby's legs, which used to kick at the mobile above the crib, lie still. The head flops back when she is lifted. Her chest seems to cave in with each breath while her belly pushes out. Feeding takes longer and longer.</p>
<p>A pediatrician refers them to a neurologist. A blood test comes back. The diagnosis is <strong>[[spinal muscular atrophy]] type 1</strong>, and until the end of 2016 the conversation that followed was one of the hardest in medicine. There was no treatment. Families were offered choices about breathing machines, feeding tubes and palliative care. In a careful study published in 2014, infants with type 1 SMA reached death or round-the-clock breathing support at a median age of 13.5 months. A later study of babies with the most common genetic makeup put the median at 8 months.</p>
<p>Then, in August 2016, a trial called ENDEAR was stopped early. Its planned [[interim analysis]] found that 41 percent of infants getting an experimental drug had gained motor milestones they were not supposed to gain: holding up their heads, rolling over, a few even sitting. In the comparison group, which had received a needle prick and no drug, the number was zero. Four months later the FDA approved the drug, nusinersen, under the brand name Spinraza. It was the first treatment ever approved for SMA.</p>
<p>What makes this story worth half an hour of your time is <em>how</em> the drug works. It does not replace the broken gene. It does not add anything the body lacks. People with SMA have lost a gene called [[SMN1]], but almost all of them still carry a near-identical backup called [[SMN2]]. The backup is crippled by a single letter of DNA that causes the cell to cut out a crucial piece of its message. Nusinersen is a short strand of chemically armored RNA-like material, 18 letters long, that sticks to exactly the right spot and stops that cut from happening. It edits the edit.</p>
<p>Along the way this case touches almost every theme in biotech: a quiet university discovery and a fight over credit, a small company's twenty-year bet on an unfashionable technology, parents who raised money to build a research field, a trial design question that is really an ethics question, one of the highest drug prices of its day, and then, within four years, two competitors that attacked the same disease in completely different ways.</p>`},

    // ---------------- 2. Disease from zero ----------------
    {type: 'story', kicker: 'The disease from zero', title: 'Wires that fail between the spine and the muscles', tocTitle: 'What SMA is', html: `
<p>To move a finger you need a chain of two nerve cells. The first starts in the brain and runs down into the spinal cord. The second, the <strong>[[motor neuron]]</strong>, sits in the front part of the spinal cord and sends a single long fiber, the axon, all the way out to a muscle. Where the axon meets the muscle, it releases a chemical signal and the muscle contracts. Every movement you make, including every breath and every swallow, depends on motor neurons firing.</p>
<p>In spinal muscular atrophy, those motor neurons in the spinal cord (and the lower brainstem) slowly die. Muscles that lose their motor neuron stop receiving signals, weaken and waste away. That is what "muscular atrophy" means. The brain itself is untouched. Children with SMA are typically bright, alert and socially engaged; it is their bodies that cannot keep up.</p>
<p>SMA is one of the more common rare diseases. It affects roughly 1 in 10,000 births, and about 1 in 50 people silently carries one faulty copy. It is recessive: a child is affected only when both parents pass on a faulty copy, so most families have no history of it. Before treatments, SMA was the leading genetic cause of death in infants.</p>
<h3>Types, and why they matter</h3>
<p>Doctors sort SMA into types by the age symptoms start and the best motor skill a child reaches:</p>
<ul>
<li><strong>Type 1</strong> (roughly half of cases): symptoms before 6 months; the child never sits unsupported. Without treatment, most die or need permanent ventilation before age two, because the muscles for breathing and swallowing fail.</li>
<li><strong>Type 2</strong>: symptoms between about 6 and 18 months; the child sits but never walks. Many live into adulthood.</li>
<li><strong>Type 3</strong>: symptoms after about 12 months; the child walks, but may lose that ability later.</li>
<li><strong>Type 4</strong>: adult onset, milder weakness.</li>
</ul>
<p>These labels are useful but blurry. SMA is really one disease on a spectrum, and as you will see, where a child falls on the spectrum is mostly set by how many copies of the backup gene they happen to carry.</p>
<h3>Before 2016</h3>
<p>Care meant support, not treatment: physical therapy, braces, spinal surgery for curvature, feeding tubes, and machines that help with breathing and coughing. These extended and improved lives, but nothing slowed the loss of motor neurons. Every family knew the direction of travel.</p>`},

    {type: 'figure', title: 'From spinal cord to muscle', intro: 'Hover or tap each part to see what it does and what goes wrong in SMA.',
      svg: `<svg viewBox="0 0 900 420">
        <g data-part="csf"><rect x="86" y="128" width="68" height="280" rx="34" class="il-3s"/><text x="30" y="412" class="il-small">Spinal fluid (CSF)</text></g>
        <g data-part="brain"><ellipse cx="120" cy="74" rx="92" ry="58" class="il-5s il-line"/><path d="M70 60 q20 -18 40 0 t40 0 M78 90 q20 -14 40 0 t40 0" class="il-none il-line"/><text x="222" y="40" class="il-text">Brain</text></g>
        <g data-part="cord"><rect x="102" y="120" width="36" height="270" rx="18" class="il-5s il-line"/><text x="30" y="300" class="il-text" transform="rotate(-90 30 300)">Spinal cord</text></g>
        <g data-part="axon">
          <path d="M146 176 C 300 176, 420 110, 640 104" class="il-none st-2" stroke-width="4"/>
          <path d="M146 252 C 320 252, 420 262, 640 250" class="il-none st-2" stroke-width="4"/>
          <text x="330" y="236" class="il-text-2">axon: the long wire</text>
        </g>
        <g data-part="neuron">
          <circle cx="132" cy="176" r="15" class="il-2"/><path d="M122 164 l-10 -10 M126 190 l-8 10 M140 164 l6 -12" class="st-2" stroke-width="3"/>
          <circle cx="132" cy="252" r="15" class="il-2"/><path d="M122 240 l-10 -10 M126 266 l-8 10 M140 240 l6 -12" class="st-2" stroke-width="3"/>
          <text x="170" y="210" class="il-text">Motor neurons</text>
        </g>
        <g data-part="junction"><circle cx="640" cy="104" r="9" class="il-4"/><circle cx="640" cy="250" r="9" class="il-4"/><text x="470" y="292" class="il-small">junction: signal hand-off</text></g>
        <g data-part="breath"><rect x="652" y="60" width="210" height="88" rx="40" class="il-7s il-line"/><path d="M690 78 v52 M720 74 v60 M750 72 v64 M780 72 v64 M810 74 v60" class="st-7 il-none" stroke-width="1.5"/><text x="757" y="170" text-anchor="middle" class="il-text">Breathing and swallowing muscles</text></g>
        <g data-part="muscle"><rect x="652" y="206" width="210" height="100" rx="46" class="il-7s il-line"/><path d="M690 222 v68 M720 216 v80 M750 214 v84 M780 214 v84 M810 216 v80" class="st-7 il-none" stroke-width="1.5"/><text x="757" y="328" text-anchor="middle" class="il-text">Limb and trunk muscles</text></g>
        <g data-part="smn"><rect x="300" y="330" width="290" height="70" rx="16" class="il-paper il-line"/><text x="316" y="354" class="il-text">Inside each motor neuron:</text><text x="316" y="376" class="il-text-2">SMN protein keeps it alive</text>
          <circle cx="520" cy="366" r="8" class="il-3"/><circle cx="542" cy="356" r="6" class="il-3"/><circle cx="556" cy="374" r="7" class="il-3"/></g>
      </svg>`,
      hotspots: {
        brain: {title: 'Brain', text: 'Thinking, sensing and the decision to move all happen here, and all are unaffected in SMA. The brain sends "move" commands down to the spinal cord through upper nerve cells, which also survive.'},
        cord: {title: 'Spinal cord', text: 'A cable of nerve tissue running down the spine. The motor neurons that die in SMA sit in its front (anterior) part, with a few more in the lower brainstem.'},
        neuron: {title: 'Motor neurons', text: 'Each one controls a group of muscle fibers. In SMA they die because they don\'t make enough [[SMN protein]]. Once a motor neuron is gone it does not come back, which is why timing of treatment turns out to matter so much.'},
        axon: {title: 'Axon', text: 'The motor neuron\'s single long fiber that carries the signal out to the muscle. As the neuron sickens, axons withdraw from muscle.'},
        junction: {title: 'Neuromuscular junction', text: 'Where the axon meets the muscle and releases a chemical messenger that makes the muscle contract. Without a working motor neuron, nothing is released.'},
        breath: {title: 'Breathing and swallowing muscles', text: 'In type 1 SMA, weakness of the muscles between the ribs, plus swallowing trouble, is what makes the disease deadly: pneumonia, choking and breathing failure.'},
        muscle: {title: 'Limb and trunk muscles', text: 'Muscles closest to the body\'s center (hips, shoulders, trunk) are usually hit hardest, so babies lose head control and the ability to kick, and children struggle to sit or walk.'},
        smn: {title: 'SMN protein', text: 'Survival motor neuron protein helps build the parts of the cell\'s splicing machinery. Every cell needs some, but motor neurons seem to be the most sensitive to shortage, and exactly why is still debated.'},
        csf: {title: 'Cerebrospinal fluid (CSF)', text: 'A clear fluid that bathes the brain and spinal cord. Keep it in mind: it is the route nusinersen takes to reach motor neurons.'},
      },
      caption: 'Simplified. Two motor neurons stand in for the tens of thousands in the spinal cord. The brain is spared in SMA; the motor neurons in the cord are lost.'},

    // ---------------- 3. Two genes ----------------
    {type: 'story', kicker: 'The genetics', title: 'Two genes, one letter apart', tocTitle: 'SMN1 and SMN2', html: `
<p>In 1995 a team led by Judith Melki in Paris found the gene behind SMA. They named it <strong>survival motor neuron</strong>, or SMN. It sits on chromosome 5, in a region that is unusually messy: a stretch of DNA about 500,000 letters long has been duplicated and flipped, so most people carry two very similar versions of the gene side by side. The team found that one version, now called <strong>[[SMN1]]</strong>, was missing or broken in 226 of the 229 patients they studied. The other version, <strong>[[SMN2]]</strong>, was still there.</p>
<p>That raised an obvious question. If SMN2 is nearly identical, why doesn't it cover for the missing SMN1? In 1999 Christian Lorson and Elliot Androphy in the United States, together with Brunhilde Wirth's group in Germany, answered it. SMN1 and SMN2 differ at only a handful of letters, and just one of them matters. In the part of the gene called <strong>[[exon]] 7</strong>, SMN1 has a C where SMN2 has a T. The change does not even alter the protein recipe (both code for the same amino acid). What it changes is how the cell <em>edits</em> the gene's message. Because of that single letter, the cell usually cuts exon 7 out of the SMN2 message.</p>
<p>A protein made without exon 7 is shorter and unstable; the cell breaks it down quickly. So SMN2 produces mostly useless protein and only a little of the working, full-length kind. In a person with SMN1, that doesn't matter. In a person without SMN1, that little bit from SMN2 is all that stands between them and the disease.</p>
<h3>More backup copies, milder disease</h3>
<p>Here is where it gets interesting. The duplicated region of chromosome 5 is unstable, so the number of SMN2 copies varies between people, usually from one to four or more. Each copy contributes its small share of working protein. More copies means more protein, which means motor neurons last longer.</p>
<p>A 2002 study of 375 patients by Brunhilde Wirth's lab made the pattern concrete: 80 percent of people with type 1 SMA had one or two SMN2 copies, 82 percent of those with type 2 had three, and 96 percent of those with type 3 had three or four. It is a strong tendency, not a law; other genetic modifiers exist. But it gave the field two gifts. It explained the spectrum of SMA. And it pointed at a treatment. Every patient already carried the right gene. It just had to be persuaded to keep exon 7.</p>
<p>Scientists still argue about exactly <em>why</em> the C-to-T change causes skipping. Adrian Krainer's lab at Cold Spring Harbor showed in 2002 that it breaks a "keep me" signal (a splicing enhancer that a helper protein called SF2/ASF reads). James Manley's lab at Columbia argued it creates a "skip me" signal read by a repressor protein called [[hnRNP A1]]. Both effects may contribute. For the drug, it did not matter: the goal was to tip the balance back.</p>`},

    {type: 'figure', title: 'SMN1 and SMN2 side by side', intro: 'Hover or tap the parts. The two genes are nearly identical; the difference that matters is one letter in exon 7.',
      svg: `<svg viewBox="0 0 900 420">
        <g data-part="chrom">
          <rect x="60" y="26" width="760" height="26" rx="13" class="il-8s il-line"/>
          <path d="M292 26 q8 13 0 26 M308 26 q-8 13 0 26" class="il-none il-line"/>
          <rect x="520" y="26" width="44" height="26" class="il-4"/>
          <text x="60" y="18" class="il-text">Chromosome 5</text><text x="542" y="18" text-anchor="middle" class="il-text">5q13</text>
          <path d="M520 52 L90 96 M564 52 L800 96" class="il-none il-line il-dash"/>
        </g>
        <g data-part="smn1">
          <text x="60" y="126" class="il-text">SMN1 (main gene)</text>
          <path d="M70 150 H700" class="il-none il-line2"/>
          <rect x="80" y="138" width="30" height="24" rx="5" class="il-3s il-line"/><rect x="140" y="138" width="30" height="24" rx="5" class="il-3s il-line"/><rect x="200" y="138" width="30" height="24" rx="5" class="il-3s il-line"/><rect x="260" y="138" width="30" height="24" rx="5" class="il-3s il-line"/><rect x="320" y="138" width="30" height="24" rx="5" class="il-3s il-line"/><rect x="380" y="138" width="30" height="24" rx="5" class="il-3s il-line"/><rect x="440" y="138" width="30" height="24" rx="5" class="il-3s il-line"/>
          <rect x="640" y="138" width="30" height="24" rx="5" class="il-3s il-line"/>
          <text x="95" y="178" text-anchor="middle" class="il-small">1</text><text x="455" y="178" text-anchor="middle" class="il-small">6</text><text x="655" y="178" text-anchor="middle" class="il-small">8</text>
        </g>
        <g data-part="c"><rect x="516" y="134" width="44" height="32" rx="6" class="il-3"/><text x="538" y="155" text-anchor="middle" class="il-white">7</text><circle cx="524" cy="120" r="11" class="il-paper st-3" stroke-width="2"/><text x="524" y="125" text-anchor="middle" class="il-text">C</text></g>
        <g data-part="smn2">
          <text x="60" y="236" class="il-text">SMN2 (backup copy)</text>
          <path d="M70 260 H700" class="il-none il-line2"/>
          <rect x="80" y="248" width="30" height="24" rx="5" class="il-8s il-line"/><rect x="140" y="248" width="30" height="24" rx="5" class="il-8s il-line"/><rect x="200" y="248" width="30" height="24" rx="5" class="il-8s il-line"/><rect x="260" y="248" width="30" height="24" rx="5" class="il-8s il-line"/><rect x="320" y="248" width="30" height="24" rx="5" class="il-8s il-line"/><rect x="380" y="248" width="30" height="24" rx="5" class="il-8s il-line"/><rect x="440" y="248" width="30" height="24" rx="5" class="il-8s il-line"/>
          <rect x="640" y="248" width="30" height="24" rx="5" class="il-8s il-line"/>
          <text x="95" y="288" text-anchor="middle" class="il-small">1</text><text x="455" y="288" text-anchor="middle" class="il-small">6</text><text x="655" y="288" text-anchor="middle" class="il-small">8</text>
        </g>
        <g data-part="t"><rect x="516" y="244" width="44" height="32" rx="6" class="il-2"/><text x="538" y="265" text-anchor="middle" class="il-white">7</text><circle cx="524" cy="230" r="11" class="il-paper st-2" stroke-width="2"/><text x="524" y="235" text-anchor="middle" class="il-text">T</text></g>
        <g data-part="iss"><rect x="566" y="144" width="34" height="12" rx="3" class="il-7s st-7" stroke-width="1.2"/><rect x="566" y="254" width="34" height="12" rx="3" class="il-7" /><text x="583" y="298" text-anchor="middle" class="il-small">ISS-N1</text></g>
        <g data-part="out1"><rect x="722" y="136" width="150" height="28" rx="8" class="il-3"/><text x="797" y="155" text-anchor="middle" class="il-white">full-length SMN</text></g>
        <g data-part="out2"><rect x="722" y="246" width="128" height="28" rx="8" class="il-2s st-2" stroke-width="1.5"/><rect x="850" y="246" width="22" height="28" rx="6" class="il-3"/><text x="786" y="265" text-anchor="middle" class="il-text">mostly short</text></g>
        <g data-part="del"><rect x="52" y="106" width="660" height="84" rx="14" class="il-none st-7 il-dash" stroke-width="2"/><text x="382" y="206" text-anchor="middle" class="il-text" style="fill:var(--il-7)">In SMA: SMN1 deleted or broken on both chromosomes</text></g>
        <g data-part="copies"><text x="60" y="350" class="il-text">SMN2 copies vary from person to person:</text>
          <g><rect x="360" y="336" width="44" height="18" rx="5" class="il-8s il-line"/><rect x="376" y="336" width="12" height="18" class="il-2"/></g>
          <g><rect x="414" y="336" width="44" height="18" rx="5" class="il-8s il-line"/><rect x="430" y="336" width="12" height="18" class="il-2"/></g>
          <g><rect x="468" y="336" width="44" height="18" rx="5" class="il-8s il-line"/><rect x="484" y="336" width="12" height="18" class="il-2"/></g>
          <g opacity=".45"><rect x="522" y="336" width="44" height="18" rx="5" class="il-8s il-line"/><rect x="538" y="336" width="12" height="18" class="il-2"/></g>
          <text x="580" y="350" class="il-text-2">1 to 4 or more; more copies, milder disease</text></g>
        <text x="60" y="396" class="il-small">Exons 2a–5 shown unlabeled. Diagram not to scale: the SMN gene spans about 20,000 DNA letters.</text>
      </svg>`,
      hotspots: {
        chrom: {title: 'Chromosome 5, region 5q13', text: 'A stretch of about 500,000 DNA letters here is duplicated and inverted, which is why most people carry both SMN1 and SMN2 side by side, and why the number of SMN2 copies varies.'},
        smn1: {title: 'SMN1', text: 'The main gene. Its message keeps exon 7 almost every time, so it makes plenty of full-length [[SMN protein]].'},
        c: {title: 'Exon 7 in SMN1: a C', text: 'At the sixth letter of exon 7, SMN1 carries a C. The splicing machinery reads exon 7 as a keeper.'},
        smn2: {title: 'SMN2', text: 'The backup. It codes for exactly the same protein as SMN1, but most of its messages lose exon 7 during splicing.'},
        t: {title: 'Exon 7 in SMN2: a T', text: 'The single C-to-T change. It is "silent" for the protein recipe but weakens the signals that tell the cell to keep exon 7. Shown by Lorson and colleagues in 1999.'},
        iss: {title: 'ISS-N1: the silencer next door', text: 'A 15-letter stretch at the start of intron 7, found in both genes, that pushes the cell to skip exon 7. In SMN1 the strong exon wins anyway; in SMN2, with its weakened exon, the silencer tips the balance. Discovered by Ravindra Singh\'s lab at UMass in 2004. Nusinersen sits on top of it.'},
        out1: {title: 'What SMN1 makes', text: 'Full-length, stable SMN protein.'},
        out2: {title: 'What SMN2 makes', text: 'Mostly a short protein missing exon 7 (the orange part), which is unstable and quickly destroyed, plus a small amount of full-length protein (the aqua sliver).'},
        del: {title: 'What goes wrong in SMA', text: 'In almost all patients both copies of SMN1 (one from each parent) are deleted or broken. The patient survives on whatever SMN2 can make.'},
        copies: {title: 'Copy number', text: 'Because the region is unstable, people carry different numbers of SMN2 copies. It is the single strongest predictor of how severe SMA will be.'},
      },
      caption: 'Sources: Lefebvre et al., Cell 1995; Lorson et al., PNAS 1999; Singh et al., Mol Cell Biol 2006.'},

    {type: 'custom', title: 'Copy number explorer', kicker: 'Try it', intro: 'Choose how many SMN2 copies a child with no working SMN1 carries. The bar shows the idea (more copies, more working protein); the text shows what real patient data say.',
      html: `<div class="card"><div class="cn-btns" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px"></div><div class="cn-svg"></div><div class="cn-txt" style="font:400 16.5px/1.6 var(--serif);margin-top:10px"></div></div>`,
      init(root, api) {
        const data = {
          1: {type: 'Usually type 1, often the severest end (sometimes called type 0)', note: 'In the 2002 Wirth lab study, all 9 type 1 patients with a single SMN2 copy died before 11 months.', types: [0, 1]},
          2: {type: 'Usually type 1', note: 'The most common genotype in type 1. In the same study, 88 of 94 type 1 patients with two copies died before 21 months. Almost all infants in the ENDEAR trial had two copies.', types: [1]},
          3: {type: 'Usually type 2, sometimes type 1 or 3', note: '82% of type 2 patients carried three copies. Of 10 type 1 patients with three copies, 8 lived between 33 and 66 months, far longer than those with two.', types: [2, 3]},
          4: {type: 'Usually type 3, sometimes type 4', note: '96% of type 3 patients carried three or four copies. Adults with the mild type 4 form typically carry four or more.', types: [3, 4]},
        };
        const btns = root.querySelector('.cn-btns');
        [1, 2, 3, 4].forEach(n => { const b = document.createElement('button'); b.className = 'btn'; b.textContent = n + (n === 1 ? ' copy' : ' copies'); b.dataset.n = n; btns.appendChild(b); });
        const draw = n => {
          btns.querySelectorAll('button').forEach(b => b.className = 'btn' + (+b.dataset.n === n ? ' primary' : ''));
          let s = '<svg viewBox="0 0 760 250" style="width:100%;height:auto;display:block">';
          s += '<text x="20" y="28" class="il-text">SMN2 copies</text>';
          for (let i = 0; i < n; i++) { const x = 20 + i * 62; s += `<rect x="${x}" y="42" width="52" height="24" rx="6" class="il-8s il-line"/><rect x="${x + 20}" y="42" width="14" height="24" class="il-2"/>`; }
          s += '<text x="20" y="104" class="il-text">Working SMN protein (schematic)</text>';
          s += '<rect x="20" y="114" width="600" height="26" rx="8" class="il-bg il-line il-dash"/><text x="628" y="132" class="il-small">someone with SMN1</text>';
          const w = [0, 70, 140, 210, 280][n];
          s += `<rect x="20" y="114" width="${w}" height="26" rx="8" class="il-3"/>`;
          s += '<text x="20" y="176" class="il-text">Typical type</text>';
          ['0', '1', '2', '3', '4'].forEach((t, i) => { const on = data[n].types.includes(i); s += `<rect x="${20 + i * 120}" y="188" width="108" height="36" rx="10" class="${on ? 'il-2' : 'il-paper il-line'}"/><text x="${74 + i * 120}" y="211" text-anchor="middle" class="${on ? 'il-white' : 'il-text-2'}">Type ${t}</text>`; });
          s += '<text x="20" y="244" class="il-small">Bar lengths illustrate the direction of the effect, not measured protein levels.</text></svg>';
          root.querySelector('.cn-svg').innerHTML = s;
          root.querySelector('.cn-txt').innerHTML = `<b>${data[n].type}.</b> ${data[n].note}`;
        };
        btns.addEventListener('click', e => { const b = e.target.closest('button'); if (b) draw(+b.dataset.n); });
        draw(2);
      }},

    {type: 'callout', variant: 'misconception', heading: '"Spinraza fixes the broken gene"', html: `<p>It doesn't touch DNA at all. The patient's [[SMN1]] genes stay missing for life. Nusinersen works one step later, on the RNA copy of the <em>other</em> gene, SMN2, and changes how that copy is edited. That has three consequences people often miss: it only works because patients have SMN2; its effect wears off as the drug is cleared, so it has to be re-dosed every four months; and a child with few SMN2 copies has less raw material for it to work with.</p>`},

    // ---------------- 4. Splicing ----------------
    {type: 'story', kicker: 'The key concept', title: 'Splicing: the cell\'s film editor', tocTitle: 'Splicing explained', html: `
<p>To understand the drug you need one idea from molecular biology: <strong>[[splicing]]</strong>.</p>
<p>A gene is a recipe written in DNA. When a cell wants to make a protein, it copies the gene into a working message made of RNA. But genes in humans are not written as one continuous recipe. They come in pieces. The useful pieces are called <strong>[[exon|exons]]</strong>. Between them sit long stretches called <strong>[[intron|introns]]</strong> that are copied into RNA and then thrown away. The SMN gene has nine exons (numbered 1, 2a, 2b, and 3 through 8) spread across roughly 20,000 letters of DNA.</p>
<p>The raw copy, the [[pre-mRNA]], is like raw film footage. Before it can be used, a large molecular machine called the <strong>[[spliceosome]]</strong> cuts out the introns and joins the exons end to end, like a film editor splicing together the takes that make the final cut. The finished message then leaves the nucleus and is translated into protein.</p>
<p>How does the spliceosome know where an exon starts and ends? It reads short signals in the RNA: at each exon edge, and in "keep me" and "skip me" sequences scattered through exons and introns. Helper proteins bind to these signals and either attract the spliceosome or push it away. Most exons have strong enough signals to be kept every time. Some sit on a knife edge, and a small change can tip them either way.</p>
<p>SMN2's exon 7 is one of those. The C-to-T change weakens the "keep me" signals at the start of the exon. And just past the end of exon 7, at the start of the next intron, sits a strong "skip me" signal: the <strong>[[ISS-N1]]</strong> silencer, which attracts repressor proteins. The result is that the spliceosome usually jumps from exon 6 straight to exon 8.</p>
<p>That knife edge is also the opportunity. If you could block the "skip me" signal, the balance might tip back toward keeping exon 7. And there is a class of molecule designed to sit on a precise stretch of RNA and block whatever normally binds there: an <strong>[[antisense oligonucleotide]]</strong>, or ASO. Its letters are the mirror image of the target, so it pairs with only that sequence, the same way the two strands of DNA pair up.</p>
<p>There is a pleasing irony here. The job of the [[SMN protein]] itself is to help assemble parts of the splicing machinery. So SMA is a disease in which a splicing defect starves cells of a protein needed for splicing, and the treatment is a drug that corrects splicing.</p>`},

    {type: 'mechanism', title: 'How nusinersen changes the edit', intro: 'Step through what happens to SMN2\'s message with and without the drug. Use the arrows or your keyboard.',
      svg: `<svg viewBox="45 5 700 415" class="mx" style="width:100%;height:auto;display:block"><style>.mx .il-text{font-size:21px}.mx .il-text-2,.mx .il-small{font-size:17px}.mx .il-white{font-size:19px}</style>
        <g data-part="dna"><text x="60" y="24" class="il-text">SMN2 gene (DNA), in the nucleus</text>
          <path d="M60 38 H700 M60 60 H700" class="il-none il-line2"/>
          <path d="M80 38 V60 M110 38 V60 M140 38 V60 M170 38 V60 M200 38 V60 M230 38 V60 M260 38 V60 M290 38 V60 M320 38 V60 M350 38 V60 M380 38 V60 M410 38 V60 M440 38 V60 M470 38 V60 M500 38 V60 M530 38 V60 M560 38 V60 M590 38 V60 M620 38 V60 M650 38 V60 M680 38 V60" class="il-line"/></g>
        <g data-part="arrow1"><path d="M380 68 V112" class="il-none st-ink flow" stroke-width="2"/><text x="392" y="96" class="il-text-2">copied into RNA</text></g>
        <g data-part="pre">
          <text x="60" y="194" class="il-text-2">pre-mRNA (raw copy)</text>
          <path d="M60 150 q10 -7 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" class="il-none il-line2"/>
          <rect x="90" y="132" width="90" height="36" rx="8" class="il-8s il-line"/><text x="135" y="155" text-anchor="middle" class="il-text">Exon 6</text>
          <rect x="320" y="132" width="90" height="36" rx="8" class="il-2"/><text x="365" y="155" text-anchor="middle" class="il-white">Exon 7</text>
          <rect x="560" y="132" width="90" height="36" rx="8" class="il-8s il-line"/><text x="605" y="155" text-anchor="middle" class="il-text">Exon 8</text>
          <text x="250" y="124" text-anchor="middle" class="il-small">intron 6</text><text x="525" y="124" text-anchor="middle" class="il-small">intron 7</text>
        </g>
        <g data-part="lbl2"><text x="60" y="226" class="il-text">Exons (boxes) are kept. Introns (wavy lines) are cut out.</text></g>
        <g data-part="spl">
          <circle cx="180" cy="150" r="13" class="il-4 il-line"/><circle cx="320" cy="150" r="13" class="il-4 il-line"/><circle cx="410" cy="150" r="13" class="il-4 il-line"/><circle cx="560" cy="150" r="13" class="il-4 il-line"/>
          <text x="60" y="226" class="il-text">Spliceosome parts gather at exon edges</text>
        </g>
        <g data-part="c6t"><circle cx="332" cy="122" r="10" class="il-paper st-7" stroke-width="2"/><text x="332" y="127" text-anchor="middle" class="il-text">T</text><text x="300" y="104" text-anchor="middle" class="il-small">one letter differs from SMN1</text></g>
        <g data-part="iss"><rect x="416" y="141" width="62" height="18" rx="4" class="il-7s st-7" stroke-width="1.5"/><text x="447" y="128" text-anchor="middle" class="il-small">ISS-N1</text></g>
        <g data-part="a1">
          <ellipse cx="447" cy="180" rx="24" ry="13" class="il-7"/><ellipse cx="350" cy="182" rx="19" ry="12" class="il-7"/>
          <text x="447" y="214" text-anchor="middle" class="il-small">hnRNP A1: "skip me" proteins</text>
        </g>
        <g data-part="arrow2"><path d="M160 204 V262" class="il-none st-ink flow" stroke-width="2"/><text x="172" y="246" class="il-small">cut out introns, join exons</text></g>
        <g data-part="skip">
          <text x="60" y="312" class="il-text-2">Finished mRNA</text>
          <rect x="250" y="290" width="90" height="36" rx="8" class="il-8s il-line"/><text x="295" y="313" text-anchor="middle" class="il-text">Exon 6</text>
          <rect x="340" y="290" width="90" height="36" rx="8" class="il-8s il-line"/><text x="385" y="313" text-anchor="middle" class="il-text">Exon 8</text>
          <text x="450" y="313" class="il-text-2">exon 7 missing</text>
        </g>
        <g data-part="skipprot">
          <circle cx="280" cy="380" r="11" class="il-8"/><circle cx="302" cy="376" r="9" class="il-8"/><circle cx="322" cy="384" r="10" class="il-8"/><circle cx="342" cy="378" r="8" class="il-8"/>
          <path d="M356 366 l10 -8 M358 386 l12 6" class="st-7" stroke-width="2"/>
          <text x="378" y="376" class="il-text-2">short protein: unstable,</text><text x="378" y="396" class="il-text-2">quickly destroyed</text>
        </g>
        <g data-part="aso"><path d="M418 168 H478" class="st-1" stroke-width="7" stroke-linecap="round"/><path d="M424 168 V159 M436 168 V159 M448 168 V159 M460 168 V159 M472 168 V159" class="st-1" stroke-width="2.5"/>
          <text x="488" y="184" class="il-text" style="fill:var(--il-1)">nusinersen</text><text x="488" y="202" class="il-small">18-letter ASO on ISS-N1</text></g>
        <g data-part="incl">
          <text x="60" y="312" class="il-text-2">Finished mRNA</text>
          <rect x="205" y="290" width="90" height="36" rx="8" class="il-8s il-line"/><text x="250" y="313" text-anchor="middle" class="il-text">Exon 6</text>
          <rect x="295" y="290" width="90" height="36" rx="8" class="il-2"/><text x="340" y="313" text-anchor="middle" class="il-white">Exon 7</text>
          <rect x="385" y="290" width="90" height="36" rx="8" class="il-8s il-line"/><text x="430" y="313" text-anchor="middle" class="il-text">Exon 8</text>
        </g>
        <g data-part="fullprot">
          <circle cx="250" cy="380" r="11" class="il-3"/><circle cx="272" cy="374" r="9" class="il-3"/><circle cx="292" cy="382" r="10" class="il-3"/><circle cx="313" cy="376" r="9" class="il-3"/><circle cx="334" cy="384" r="11" class="il-3"/><circle cx="356" cy="376" r="9" class="il-3"/><circle cx="376" cy="382" r="10" class="il-3"/>
          <text x="400" y="378" class="il-text">full-length SMN protein</text>
          <text x="400" y="400" class="il-small">stable, and it works</text>
        </g>
      </svg>`,
      steps: [
        {title: 'The gene is copied into RNA', text: 'Inside the nucleus of a motor neuron, the cell copies the [[SMN2]] gene into a raw RNA message, the [[pre-mRNA]]. It contains every exon and every intron.', show: ['dna', 'arrow1', 'pre'], focus: ['pre']},
        {title: 'Exons and introns', text: 'Only three of SMN2\'s nine exons are drawn here: 6, 7 and 8. The boxes are [[exon|exons]], the parts that will be kept. The wavy stretches are [[intron|introns]], which will be cut out. Exon 7 (orange) carries the end of the protein recipe; without it the protein is unstable.', show: ['pre', 'lbl2'], focus: ['pre']},
        {title: 'The splicing machinery looks for exon edges', text: 'Pieces of the [[spliceosome]] gather at the edges of exons, guided by short signals in the RNA and by helper proteins that say "keep this" or "skip this". Where they assemble decides which exons end up in the final message.', show: ['pre', 'spl'], pulse: ['spl']},
        {title: 'SMN2\'s two problems', text: 'At the sixth letter of exon 7, SMN2 has a T where SMN1 has a C, which weakens the "keep me" signal. Just after the exon sits [[ISS-N1]], a silencer that attracts repressor proteins such as [[hnRNP A1]] (red). Together they make exon 7 hard for the machinery to see.', show: ['pre', 'c6t', 'iss', 'a1'], focus: ['c6t', 'iss']},
        {title: 'Exon 7 gets skipped', text: 'Most of the time the spliceosome jumps straight from exon 6 to exon 8. The finished message lacks exon 7, and the protein made from it is unstable and quickly destroyed. Only a small fraction of SMN2 messages keep exon 7. Without [[SMN1]], that is not enough for motor neurons.', show: ['a1', 'arrow2', 'skip', 'skipprot'], dim: ['pre', 'c6t', 'iss'], pulse: ['skipprot']},
        {title: 'Nusinersen covers the silencer', text: 'Nusinersen is an 18-letter [[antisense oligonucleotide]] whose sequence is the mirror image of the stretch of intron 7 that includes ISS-N1. It pairs with that stretch tightly, and the repressor proteins can no longer sit there. It does not cut the RNA; it just occupies the spot.', show: ['pre', 'iss', 'aso'], dim: ['a1', 'c6t'], move: {a1: 'translate(0px, 70px)'}, focus: ['aso']},
        {title: 'Exon 7 is kept', text: 'With the "skip me" signal masked, the balance tips: the spliceosome now includes exon 7 far more often. More finished messages carry exon 7, so motor neurons make more stable, full-length [[SMN protein]]. It is still SMN2 doing the work; the drug just changes how its message is edited.', show: ['aso', 'arrow2', 'incl', 'fullprot'], dim: ['pre', 'iss'], focus: ['fullprot']},
      ]},

    {type: 'callout', variant: 'product', heading: 'A config change, not a rewrite', html: `<p>If SMA were a software bug, [[gene therapy]] would be shipping a new binary: install a correct copy of SMN1. Nusinersen is more like a config flag that changes how an existing, nearly-correct module is parsed. The code (DNA) is untouched; a runtime setting (splicing) is overridden so the backup module produces the right output.</p><p>Where the analogy breaks: the "flag" is a physical molecule that the body slowly clears, so it has to be re-applied by needle every four months. It only works if the backup module exists, and how much it helps depends on how many copies of it the patient happens to have. And there is no staging environment: the first humans were children with a fatal disease.</p>`},

    // ---------------- 5. Key insight and credit ----------------
    {type: 'story', kicker: 'The key insight', title: 'Who found the switch', tocTitle: 'Discovery and credit', html: `
<p>By the early 2000s, the logic was clear to everyone in the field: make SMN2 keep exon 7 and you might treat SMA. Several groups went looking for the best way to do it. Two strands of work, in two very different places, ended up converging on the same 15 letters of RNA.</p>
<h3>Worcester: a silencer in the intron</h3>
<p>At the University of Massachusetts Medical School in Worcester, Ravindra Singh, working with his wife Natalia Singh and alongside Elliot Androphy's lab (the same Androphy who co-authored the 1999 C-to-T paper), was systematically mapping which bits of RNA around exon 7 controlled its fate. The work was funded in part by Families of SMA, the parent group now called Cure SMA, which provided seed grants from 2003 to 2006, and in part by the National Institutes of Health.</p>
<p>In 2004 the team found that deleting a short stretch at the very start of intron 7, right after exon 7, made SMN2 keep the exon. They named it <strong>intronic splicing silencer N1</strong>, or [[ISS-N1]]. Better still, when they made an antisense strand that covered ISS-N1, exon 7 came back, and cells from SMA patients made more SMN protein. Singh later told the <em>Boston Globe</em> that the team was dumbfounded by how strong the effect was. UMass filed patent applications in 2004 and the paper came out in <em>Molecular and Cellular Biology</em> in 2006. Its final sentence pointed straight at a drug: ISS-N1, it said, provides a very specific and efficient therapeutic target.</p>
<h3>Cold Spring Harbor and Carlsbad: a screen of every position</h3>
<p>Meanwhile, Adrian Krainer, an RNA splicing expert at Cold Spring Harbor Laboratory on Long Island, had been studying SMN2 exon 7 since at least 2002, when his lab published its account of how the C-to-T change broke a "keep me" signal. He formed a collaboration with Isis Pharmaceuticals (renamed Ionis in 2015), a Carlsbad, California company that had spent years developing antisense chemistry. The Ionis side was led by C. Frank Bennett, with Frank Rigo and others.</p>
<p>The partnership brought complementary strengths: Krainer's lab knew splicing; Bennett's team knew how to make antisense strands that survive in the body. Krainer's colleague Yimin Hua ran a brute-force approach: make dozens of antisense strands, each shifted a few letters along the RNA, "tiling" the regions around exon 7, and see which ones worked best. In the 2008 paper (<em>American Journal of Human Genetics</em>), they screened 31 strands in the intron 7 region alone. The winner, called <strong>ASO 10-27</strong> because it covers positions 10 to 27 of intron 7, sat right on the intron 7 silencer, which the 2008 paper itself acknowledged had been "recently described" by others. ASO 10-27 would become nusinersen.</p>
<p>Over the next three years the Cold Spring Harbor and Ionis teams, with collaborators at Genzyme, showed the compound worked in animals. Injected into the fluid of the brain in SMA mice, it rescued the disease's signs. Infused into the spinal fluid of monkeys, it reached the whole length of the spinal cord. In a 2011 <em>Nature</em> paper, injections under the skin of newborn mice with severe SMA extended their median lifespan 25-fold.</p>
<blockquote class="pull">It was like two streams of basic research coming together. It was almost magic, the way things ended up working.<cite>C. Frank Bennett of Ionis, on his collaboration with Adrian Krainer, quoted by Cure SMA, 2018</cite></blockquote>
<h3>Credit, fairly told</h3>
<p>Both strands were real, and both were needed. Singh's lab found and named the target first and patented it. The Krainer and Ionis teams, by their account, found the same region independently through their own screen, optimized the molecule, showed it worked in animals, and carried it to the clinic. Ionis took an exclusive license to the UMass ISS-N1 patents in 2010, which tells you something about how the company valued them. The <em>Boston Globe</em> reported that UMass and Singh share a royalty of 2 percent of net US sales, with UMass taking a little over two-thirds; STAT estimated in 2018 that the university had received about $10.5 million so far.</p>
<p>Public recognition flowed unevenly. The 2019 Breakthrough Prize in Life Sciences, one of science's richest awards, went to Krainer and Bennett for developing the drug. Singh, who later moved to Iowa State University, has written several historical accounts emphasizing that ISS-N1 was discovered in his lab in 2004 and describing the later work as independent validation of his target. Cure SMA, for its part, publicly thanked both groups, crediting UMass and Cold Spring Harbor for the intellectual property licensed to Ionis.</p>
<p>There was one more wrinkle. In January 2017 the advocacy group Knowledge Ecology International asked federal investigators to look at two nusinersen patents held by Ionis and Cold Spring Harbor, arguing that they failed to disclose NIH funding that had supported Krainer's work, which under the [[Bayh-Dole Act]] can put patent rights at risk. (The two UMass patents did disclose federal funding.) The complaint mattered less for its outcome than for what it showed: once a drug costs $750,000 a year, the question of who paid for the underlying science becomes a political one.</p>
<aside class="note">This pattern is common in biotech. The person who finds a target, the team that turns it into a molecule, and the company that carries the risk of trials are often different people, and prizes, patents and royalties rarely line up neatly with contribution.</aside>`},

    {type: 'timeline', title: 'Timeline', intro: 'From a gene hunt to a crowded market. Filter by kind of event.', events: [
      {year: 1984, title: 'Parents found Families of SMA', kind: 'people', text: 'A small group of US parents start the volunteer group that will later be renamed Cure SMA.'},
      {year: 1995, title: 'SMN1 identified', kind: 'science', text: 'Judith Melki\'s team in Paris finds the gene missing or broken in 226 of 229 patients, and a near-identical copy beside it.'},
      {year: 1999, title: 'One letter explains SMN2', kind: 'science', text: 'Lorson, Androphy, Wirth and colleagues show a single C-to-T change in exon 7 makes SMN2 skip the exon.'},
      {year: 2002, title: 'Copy number predicts severity', kind: 'science', text: 'Wirth\'s lab links SMN2 copy number to SMA type in 375 patients. Krainer\'s lab shows how the C-to-T change breaks a splicing enhancer.'},
      {year: 2003, title: 'SMA Foundation founded', kind: 'people', text: 'Loren Eng and Dinakar Singh, parents of a child with SMA, start a foundation to fund drug development. Families of SMA begins seed grants to Singh, Androphy and Krainer (2003–2006).'},
      {year: 2004, title: 'ISS-N1 discovered at UMass', kind: 'science', text: 'Ravindra Singh\'s lab finds the silencer in intron 7; UMass files patents. Published in 2006.'},
      {year: 2008, title: 'ASO tiling screen picks ASO 10-27', kind: 'science', text: 'Hua, Krainer, Bennett and colleagues screen antisense strands around exon 7; the best covers ISS-N1.'},
      {year: 2010, title: 'Isis licenses the UMass patents', kind: 'business', text: 'Exclusive license to ISS-N1-targeting antisense drugs.'},
      {year: 2011, date: 'Nov 2011', title: 'First patient dosed', kind: 'clinical', text: 'Phase 1 in 28 children aged 2 to 14 with type 2 or 3 SMA; single intrathecal doses of 1 to 9 mg.'},
      {year: 2012, date: 'Jan 2012', title: 'Biogen Idec option deal', kind: 'business', text: '$29 million upfront for an option to license the drug after a successful late-stage trial.'},
      {year: 2013, date: 'May 2013', title: 'First infants treated', kind: 'clinical', text: 'Open-label phase 2 enrolls 20 infants with type 1 SMA.'},
      {year: 2014, date: 'Aug 2014', title: 'ENDEAR begins', kind: 'clinical', text: 'Sham-controlled phase 3 in infants. CHERISH, in older children, starts in November. Families of SMA renames itself Cure SMA.'},
      {year: 2015, date: 'May 2015', title: 'NURTURE begins', kind: 'clinical', text: 'Open-label study in babies diagnosed genetically before any symptoms.'},
      {year: 2016, date: 'Aug 1, 2016', title: 'ENDEAR stopped early; Biogen opts in', kind: 'clinical', text: 'Interim analysis: 41% vs 0% motor-milestone responders. Biogen pays a $75 million license fee.'},
      {year: 2016, date: 'Nov 2016', title: 'CHERISH also succeeds at interim', kind: 'clinical', text: 'Later-onset children gain motor function; trial stopped early.'},
      {year: 2016, date: 'Dec 23, 2016', title: 'FDA approval', kind: 'regulatory', text: 'Priority review; approved for children and adults with SMA. Price announced days later: $125,000 per injection.'},
      {year: 2017, title: 'Europe approves; ENDEAR published', kind: 'regulatory', text: 'EU approval in mid-2017. ENDEAR appears in NEJM, as does the first gene therapy trial in SMA.'},
      {year: 2018, date: 'July 2018', title: 'SMA added to newborn screening panel', kind: 'regulatory', text: 'US Health Secretary approves adding SMA to the federal recommended list.'},
      {year: 2018, date: 'Oct 2018', title: 'Breakthrough Prize for Krainer and Bennett', kind: 'people'},
      {year: 2019, date: 'Apr 2019', title: 'ICER: price far above cost-effectiveness', kind: 'business', text: 'Independent panel votes unanimously that Spinraza\'s price exceeds common thresholds.'},
      {year: 2019, date: 'May 2019', title: 'Zolgensma approved', kind: 'setback', text: 'Novartis\'s one-time gene therapy, $2.125 million list price. Spinraza sales peak this year at $2.1 billion.'},
      {year: 2020, date: 'Aug 2020', title: 'Evrysdi approved', kind: 'setback', text: 'Roche\'s oral SMN2 splicing modifier: a daily drink instead of spinal injections.'},
      {year: 2024, title: 'All 50 states screen newborns for SMA', kind: 'regulatory'},
      {year: 2025, date: 'Nov 2025', title: 'Intrathecal gene therapy approved', kind: 'setback', text: 'Itvisma, a spinal-fluid version of the Zolgensma gene therapy, approved for patients aged two and older.'},
      {year: 2026, date: 'Mar 2026', title: 'High-dose Spinraza approved', kind: 'regulatory', text: 'FDA approves a 50 mg / 28 mg regimen, after a first rejection for manufacturing paperwork in 2025.'},
    ]},

    // ---------------- 6. Building the drug ----------------
    {type: 'story', kicker: 'Building the drug', title: 'Armor for a fragile molecule', tocTitle: 'Chemistry and delivery', html: `
<p>Finding the right 18 letters was half the problem. The other half was making a strand of nucleic acid that could survive in a human body for months and get to the right cells. This is where Ionis's two decades of antisense chemistry paid off.</p>
<p>Natural RNA and DNA are delicate. The body is full of enzymes, called nucleases, that chew them up in minutes. Unmodified strands also do not stick well to proteins, so they are filtered out by the kidneys fast. And a plain DNA strand paired with RNA has a side effect that is fatal to this particular plan: it summons an enzyme called [[RNase H]], which cuts the RNA. Some antisense drugs are built to exploit that, deliberately destroying a harmful RNA. But nusinersen needs the SMN2 message intact. It has to sit on the RNA like a piece of tape over a word, not scissors.</p>
<p>Nusinersen gets two kinds of armor, both described on the FDA label:</p>
<ul>
<li><strong>A [[phosphorothioate]] backbone.</strong> The links between letters normally carry a phosphate group. Swap one oxygen atom in each for sulfur and nucleases struggle to cut it. As a bonus, the sulfur makes the strand stickier toward proteins, which slows its removal and helps it spread through tissue and get into cells.</li>
<li><strong>[[2'-MOE]] sugars on every letter.</strong> Each letter's sugar gets a small chemical cap (2'-O-methoxyethyl). This makes the strand bind its RNA target more tightly, adds more resistance to nucleases, and, because the whole strand is modified, stops RNase H from cutting the target.</li>
</ul>
<p>The result is a molecule of about 7,500 daltons, 15 to 25 times heavier than a typical pill-type drug, that lingers in the spinal fluid with a half-life of roughly 135 to 177 days. That long persistence is why dosing every four months works.</p>`},

    {type: 'custom', title: 'Build an antisense strand', kicker: 'Try it', intro: 'Pick a sugar and a backbone. Watch what happens to the properties a splice-switching drug needs. Nusinersen uses 2\'-MOE sugars with a phosphorothioate backbone.',
      html: `<div class="card">
        <div style="display:flex;flex-wrap:wrap;gap:22px;margin-bottom:12px">
          <div><div style="font:650 13px var(--sans);color:var(--ink-3);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">Sugar</div><span class="aso-sugar"><button class="btn" data-v="dna">Plain DNA</button> <button class="btn" data-v="moe">2'-MOE</button></span></div>
          <div><div style="font:650 13px var(--sans);color:var(--ink-3);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px">Backbone</div><span class="aso-bb"><button class="btn" data-v="po">Phosphate (natural)</button> <button class="btn" data-v="ps">Phosphorothioate</button></span></div>
        </div>
        <div class="aso-svg"></div><div class="aso-txt" style="font:400 16.5px/1.6 var(--serif);margin-top:8px"></div></div>`,
      init(root) {
        const st = {sugar: 'dna', bb: 'po'};
        const props = {
          'dna-po': {s: 1, a: 2, cut: true, p: 1, v: '<b>A plain DNA strand.</b> Nucleases chew it up within minutes, and when it does pair with RNA it summons [[RNase H]] to cut the message. Useless here: it would destroy the very SMN2 RNA you want to rescue.'},
          'dna-ps': {s: 3, a: 2, cut: true, p: 4, v: '<b>First-generation antisense.</b> The sulfur backbone survives much longer and sticks to proteins, so it spreads through tissue. But it still triggers RNase H cutting. Good for drugs meant to destroy an RNA; wrong for splice-switching.'},
          'moe-po': {s: 3, a: 4, cut: false, p: 1, v: '<b>MOE sugars, natural backbone.</b> Grips the target tightly and no longer triggers cutting, so it could block a splicing signal. But it is less protected and sticks poorly to proteins, so it is cleared faster and gets into cells less well.'},
          'moe-ps': {s: 5, a: 4, cut: false, p: 4, v: '<b>This is nusinersen\'s design.</b> Every sugar is 2\'-MOE and every link is phosphorothioate: very stable, a tight grip on ISS-N1, no cutting of the SMN2 message, and enough protein binding to linger and reach cells. In spinal fluid it lasts months.'},
        };
        const pips = (n, cls) => Array.from({length: 5}, (_, i) => `<rect x="${i * 22}" y="0" width="18" height="14" rx="3" class="${i < n ? cls : 'il-8s'}"/>`).join('');
        const draw = () => {
          root.querySelectorAll('.aso-sugar button').forEach(b => b.className = 'btn' + (b.dataset.v === st.sugar ? ' primary' : ''));
          root.querySelectorAll('.aso-bb button').forEach(b => b.className = 'btn' + (b.dataset.v === st.bb ? ' primary' : ''));
          const P = props[st.sugar + '-' + st.bb];
          let s = '<svg viewBox="0 0 760 250" style="width:100%;height:auto;display:block">';
          s += '<text x="20" y="22" class="il-text">18 letters, each with a sugar (big bead) and a link (small bead)</text>';
          for (let i = 0; i < 18; i++) {
            const x = 40 + i * 38, y = 58 + (i % 2 ? 6 : -6);
            if (i < 17) s += `<line x1="${x}" y1="${y}" x2="${x + 38}" y2="${58 + ((i + 1) % 2 ? 6 : -6)}" class="il-line"/>`;
          }
          for (let i = 0; i < 18; i++) {
            const x = 40 + i * 38, y = 58 + (i % 2 ? 6 : -6);
            s += `<circle cx="${x}" cy="${y}" r="11" class="${st.sugar === 'moe' ? 'il-1' : 'il-8s il-line'}"/>`;
            if (i < 17) s += `<circle cx="${x + 19}" cy="58" r="5" class="${st.bb === 'ps' ? 'il-4' : 'il-paper il-line'}"/>`;
          }
          const rows = [['Survives nucleases', P.s, 'il-3'], ['Grip on the target RNA', P.a, 'il-3'], ['Sticks to proteins (lingers, reaches cells)', P.p, 'il-3']];
          rows.forEach((r, i) => { const y = 110 + i * 32; s += `<text x="20" y="${y + 12}" class="il-text-2">${r[0]}</text><g transform="translate(330 ${y})">${pips(r[1], r[2])}</g>`; });
          const y = 110 + 3 * 32;
          s += `<text x="20" y="${y + 12}" class="il-text-2">Leaves the SMN2 message intact</text>`;
          s += `<rect x="330" y="${y - 2}" width="120" height="20" rx="6" class="${P.cut ? 'il-7' : 'il-3'}"/><text x="390" y="${y + 12}" text-anchor="middle" class="il-white">${P.cut ? 'No: RNase H cuts' : 'Yes'}</text>`;
          s += '<text x="480" y="130" class="il-small">Ratings are qualitative, to show the</text><text x="480" y="146" class="il-small">direction of each effect. After Bennett et al.,</text><text x="480" y="162" class="il-small">Annu Rev Pharmacol Toxicol 2017.</text>';
          s += '</svg>';
          root.querySelector('.aso-svg').innerHTML = s;
          root.querySelector('.aso-txt').innerHTML = P.v.replace('[[RNase H]]', 'RNase H');
        };
        root.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; if (b.closest('.aso-sugar')) st.sugar = b.dataset.v; else if (b.closest('.aso-bb')) st.bb = b.dataset.v; draw(); });
        draw();
      }},

    {type: 'story', title: 'Getting past the barrier', tocTitle: 'Why a spinal injection', html: `
<p>Nusinersen's biggest practical drawback is how it gets in. It is given by <strong>[[lumbar puncture]]</strong>, the same procedure as a spinal tap: a needle slipped between two vertebrae in the lower back into the fluid-filled sac around the spinal cord. The label tells doctors to remove 5 milliliters of [[cerebrospinal fluid]] first, then inject 12 milligrams of drug in 5 milliliters over one to three minutes. Small children may need sedation, and the label suggests ultrasound or other imaging to guide the needle. This route is called <strong>[[intrathecal]]</strong>.</p>
<p>Why not a pill or an arm injection? Because the brain and spinal cord are walled off. The blood vessels that supply them are sealed much more tightly than elsewhere in the body, forming the <strong>[[blood-brain barrier]]</strong>. It keeps toxins and germs out of nerve tissue, and it also keeps out almost anything large and electrically charged, which describes an antisense strand exactly. Give nusinersen into a vein and very little would reach the motor neurons.</p>
<p>The spinal fluid is a back door. It flows around the cord and brain, and a drug placed in it can soak into the tissue it bathes. In 2011 a team at Genzyme, with Krainer's and Bennett's groups, showed that infusing the compound into the spinal fluid of monkeys spread it along the whole spinal cord. Later, autopsies of three infants treated in trials found the drug distributed through the central nervous system and more exon-7-containing SMN2 message in the spinal cord than in untreated babies.</p>
<p>The trade-off is real. Every treatment means a hospital visit and a needle in the back, six times in the first year and three times a year after that, for life. For a child with severe scoliosis or spinal fusion surgery, reaching the fluid can be technically hard. That burden would become one of the main openings for competitors.</p>`},

    {type: 'figure', title: 'Why the drug goes into the spinal fluid', intro: 'Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 420">
        <g data-part="csf"><path d="M200 18 C 290 18, 320 70, 300 110 C 285 135, 240 140, 232 150 L 232 382 Q 200 404 168 382 L 168 150 C 160 140, 115 135, 100 110 C 80 70, 110 18, 200 18 Z" class="il-3s"/></g>
        <g data-part="brain"><ellipse cx="200" cy="72" rx="86" ry="50" class="il-5s il-line"/><text x="200" y="77" text-anchor="middle" class="il-text">Brain</text></g>
        <g data-part="cord"><path d="M186 118 H214 V300 Q200 322 186 300 Z" class="il-5s il-line"/><text x="248" y="212" class="il-text">Spinal cord</text></g>
        <g data-part="vert">
          <rect x="112" y="136" width="44" height="30" rx="8" class="il-8s il-line"/><rect x="112" y="174" width="44" height="30" rx="8" class="il-8s il-line"/><rect x="112" y="212" width="44" height="30" rx="8" class="il-8s il-line"/><rect x="112" y="250" width="44" height="30" rx="8" class="il-8s il-line"/><rect x="112" y="288" width="44" height="30" rx="8" class="il-8s il-line"/><rect x="112" y="326" width="44" height="30" rx="8" class="il-8s il-line"/><rect x="112" y="364" width="44" height="30" rx="8" class="il-8s il-line"/>
          <text x="104" y="300" text-anchor="end" class="il-small">vertebrae</text></g>
        <g data-part="needle"><path d="M236 347 L360 332" class="st-ink" stroke-width="3" stroke-linecap="round"/><rect x="360" y="318" width="96" height="26" rx="6" class="il-paper il-line" transform="rotate(-7 408 331)"/><rect x="368" y="322" width="58" height="18" rx="4" class="il-1" transform="rotate(-7 408 331)"/>
          <text x="300" y="376" class="il-text">Lumbar puncture, lower back</text><text x="300" y="394" class="il-small">below where the spinal cord ends</text></g>
        <g data-part="flow"><path d="M224 340 V150 C 250 130, 280 100, 270 60" class="il-none st-1 flow" stroke-width="2.5"/><path d="M176 340 V150 C 150 130, 120 100, 130 60" class="il-none st-1 flow" stroke-width="2.5"/></g>
        <g data-part="blood"><rect x="520" y="86" width="340" height="56" rx="28" class="il-7s il-line"/><text x="540" y="76" class="il-text">Blood vessel</text>
          <path d="M560 114 q6 -6 12 0 t12 0" class="il-none st-1" stroke-width="4" stroke-linecap="round"/><path d="M640 106 q6 -6 12 0 t12 0" class="il-none st-1" stroke-width="4" stroke-linecap="round"/><path d="M720 118 q6 -6 12 0 t12 0" class="il-none st-1" stroke-width="4" stroke-linecap="round"/><path d="M800 108 q6 -6 12 0 t12 0" class="il-none st-1" stroke-width="4" stroke-linecap="round"/></g>
        <g data-part="bbb"><path d="M520 152 H860 M520 160 H860" class="il-none st-ink" stroke-width="2.5"/><path d="M652 146 l10 10 M662 146 l-10 10 M742 146 l10 10 M752 146 l-10 10" class="st-7" stroke-width="2.5"/><text x="690" y="182" text-anchor="middle" class="il-text">Blood-brain barrier: ASOs mostly blocked</text></g>
        <g data-part="tissue"><rect x="520" y="196" width="340" height="96" rx="18" class="il-5s il-line"/><circle cx="580" cy="240" r="12" class="il-2"/><circle cx="660" cy="250" r="12" class="il-2"/><circle cx="740" cy="236" r="12" class="il-2"/><circle cx="810" cy="252" r="12" class="il-2"/><text x="540" y="282" class="il-small">motor neurons in cord tissue</text></g>
        <g data-part="depot"><rect x="520" y="310" width="340" height="84" rx="14" class="il-paper il-line"/><text x="536" y="336" class="il-text">Lasts months in spinal fluid</text><text x="536" y="358" class="il-text-2">half-life about 135 to 177 days</text><text x="536" y="380" class="il-text-2">so a dose every 4 months suffices</text></g>
      </svg>`,
      hotspots: {
        csf: {title: 'Cerebrospinal fluid (CSF)', text: 'The fluid sac surrounds the brain and cord and extends below the bottom of the cord. Drug injected into it spreads upward and soaks into the tissue it bathes.'},
        brain: {title: 'Brain', text: 'Nusinersen reaches parts of the brain too, but the targets that matter most for SMA are motor neurons in the spinal cord and brainstem.'},
        cord: {title: 'Spinal cord', text: 'Where most of the at-risk motor neurons live. In trial autopsies, treated infants had more exon-7-containing SMN2 message in the spinal cord than untreated infants.'},
        vert: {title: 'Vertebrae', text: 'The bones of the spine. The needle passes between two of them in the lower back. Scoliosis or spinal fusion surgery, common in SMA, can make this hard.'},
        needle: {title: 'Lumbar puncture', text: 'Remove 5 mL of spinal fluid, inject 12 mg of nusinersen in 5 mL over 1 to 3 minutes. Done in hospital; small children may be sedated, and imaging can guide the needle.'},
        flow: {title: 'Spread through the fluid', text: 'From the injection site the drug distributes up the spinal canal. Monkey studies in 2011 showed that spinal-fluid infusion reached all regions of the cord.'},
        blood: {title: 'Why not a vein?', text: 'Blue squiggles are antisense strands. Given into blood, they would mostly end up in liver and kidney, not in nerve tissue.'},
        bbb: {title: 'Blood-brain barrier', text: 'Tightly sealed vessel walls keep large, charged molecules like ASOs out of the brain and cord. That is why the drug goes around the barrier via the spinal fluid.'},
        tissue: {title: 'Target cells', text: 'Motor neurons (orange) take up the drug from the surrounding fluid and tissue.'},
        depot: {title: 'A long-acting depot', text: 'The FDA label gives a terminal half-life of 135 to 177 days in spinal fluid, which is why maintenance doses are only needed every four months.'},
      },
      caption: 'Schematic, not anatomically exact. Source: Spinraza prescribing information; Passini et al., Sci Transl Med 2011.'},

    {type: 'callout', variant: 'product', heading: 'The platform play, and the new runtime', html: `<p>Ionis had spent more than two decades building antisense chemistry as a platform: the same backbone and sugar modifications, the same manufacturing, the same safety knowledge, reused across many targets. Think of it as a mature SDK. Once the team knew which 18 letters to write, the rest of the stack already existed. That is why the company could go from a mouse result to a first patient in about three years.</p><p>Where it breaks: a platform lowers the cost of each new attempt but does not remove the biology risk of each target. And the central nervous system was effectively a new runtime. Intrathecal delivery of an antisense drug had to be proven safe and effective from scratch, in children. Success here then made the platform more valuable for everything that followed, including Biogen's later ALS drug, Qalsody.</p>`},

    // ---------------- 7. Patient foundations ----------------
    {type: 'story', kicker: 'The families', title: 'Parents who built a research field', tocTitle: 'Patient foundations', html: `
<p>Rare diseases often have no market until someone makes one. In SMA, parents did a lot of the making.</p>
<p><strong>Families of SMA</strong> started in 1984 as a volunteer group of parents across the United States who wanted to understand what was killing their children. It set up a scientific advisory board within two years and funded researchers at Columbia and Ohio State in the early 1990s, around the time the disease was mapped to chromosome 5. When the gene was found, it helped fund work on the SMN protein and carrier testing. From 2003 to 2006 it gave the very first grants for the therapeutic approach behind nusinersen, to Singh and Androphy at UMass and to Krainer's lab. It renamed itself <strong>Cure SMA</strong> in 2014. Later it would lead the campaign to add SMA to every state's newborn screening program.</p>
<p>The <strong>SMA Foundation</strong> took a different approach. It was founded in 2003 by Loren Eng and Dinakar Singh, parents of a child with SMA, and it describes itself as a blend of nonprofit, venture capital and biotech. Instead of only giving grants, it built the things companies need before they will invest: validated mouse models and lab assays, tests to measure SMN protein, a biobank, [[natural history study|natural history studies]] of how the disease progresses untreated, and a network of clinical sites ready to run trials. It says it has spent around $150 million on SMA research. It was also a partner, with PTC Therapeutics and Roche, in the program that produced one of Spinraza's competitors.</p>
<p>Why does that infrastructure matter so much? Because in a disease nobody has treated before, a company does not know how to measure success. Which motor scale detects change in a floppy infant? How fast do untreated babies decline? How many patients can be enrolled, and where? Every one of those questions adds risk and years. Foundations that answer them in advance make a program cheaper and faster, which is exactly the lever you can pull if you cannot write a billion-dollar check. This model is sometimes called [[venture philanthropy]].</p>
<p>Families also carried the trials themselves. Enrolling your infant in a study where they might get a needle prick instead of the drug is an extraordinary act. And they were a powerful voice at the FDA and, later, in the debates over price and access.</p>`},

    {type: 'decision', title: 'Decision: how should Biogen get in?', role: 'You run business development at Biogen Idec, January 2012',
      scenario: `Isis Pharmaceuticals has an antisense drug for SMA just entering its first human study. The mouse data are striking, the disease is devastating, and there is no competition. But the drug has to be injected into the spinal fluid, antisense has never been proven in the central nervous system, SMA is rare, and nobody knows how to run a pivotal trial in dying infants. Isis wants a partner to share the cost. What deal do you do?`,
      options: [
        {label: 'Buy full rights now with a large upfront payment, and run development yourself.', outcome: 'You get control and all the upside. But you pay a premium for an asset that has not dosed a single child, and you take over a platform you do not know as well as Isis does. If the spinal route fails or the first trials disappoint, you have paid heavily for nothing. Your board will ask why you did not wait for data.'},
        {label: 'Sign an option deal: modest upfront, pay for development milestones, keep the right to license the drug after a successful late-stage trial.', outcome: 'You pay a small entry price, let the company that knows the chemistry run the trials, and buy the right to decide later with far better information. The cost: if the drug works, the license fee at that point is higher, Isis keeps a significant royalty, and another bidder cannot be blocked from courting Isis in areas outside the deal.'},
        {label: 'Pass. Rare disease, spinal injections, unproven modality in the brain. Revisit if phase 2 is spectacular.', outcome: 'You save the money and the management attention. But if the data are good, the price of entry will rise sharply and a competitor may lock up the asset first. In rare disease, the first approved drug often builds deep relationships with treatment centers and patient groups.'},
      ],
      reality: `Biogen Idec took the option. In January 2012 it paid Isis $29 million upfront and agreed to up to $45 million in development milestones, with the option to license the drug for $75 million after a successful late-stage trial, plus up to $150 million in regulatory milestones and royalties. The deal was amended in 2014. Isis ran the trials with Biogen advising on design. When ENDEAR hit at its interim analysis in August 2016, Biogen exercised the option and paid the $75 million. It then paid $150 million in approval milestones in 2017 and royalties of 11 to 15 percent of sales, and booked $884 million of Spinraza revenue in its first full year. For Isis, the option structure funded the program without giving it away before the data were in. It is one of the cleanest examples of an [[option deal]] working for both sides.`},

    // ---------------- 8. Trials ----------------
    {type: 'story', kicker: 'The trials', title: 'Testing a drug in dying babies', tocTitle: 'Trial design', html: `
<p>The first human study began at the end of November 2011. It was deliberately cautious: 28 children aged 2 to 14 with the milder types 2 and 3, each given a single spinal injection of 1, 3, 6 or 9 milligrams. The goal was safety, but two findings stood out. The drug lingered in the spinal fluid with a half-life of four to six months, and children on the highest dose improved on the [[HFMSE]] motor scale by an average of 3.1 points at three months and 5.8 points later on. Untreated children with SMA usually decline.</p>
<p>In May 2013 an open-label phase 2 began in 20 infants with type 1 disease, the population where the need was most urgent. Some babies gained milestones that natural history said they should never reach. But without a comparison group, it was hard to be sure. Babies vary, diagnoses vary, and supportive care had been improving.</p>
<h3>The hard choice: a control group</h3>
<p>For the pivotal trial in infants, Ionis and Biogen chose the most rigorous design available: randomized, double-blind, with a control group that received a [[sham procedure]]. Two out of three infants would get nusinersen; one in three would get a small needle prick on the lower back where the injection would normally go, with no drug. Parents would not know which their child received, and neither would the clinicians who assessed motor function.</p>
<p>That is a hard thing to ask of families whose children have a fatal disease. The case for it was that the open-label data, however encouraging, could not answer the question regulators and payers would ask: how much of the change is the drug? A clean randomized result would be unarguable, would speed approval and coverage, and would protect future patients from a drug that might not work. The designers also built in a planned interim analysis, so that if the drug worked clearly, the trial could stop early and everyone could move to active treatment.</p>
<h3>What to measure</h3>
<p>Choosing the [[endpoint|endpoints]] was its own problem. The infant trial, called ENDEAR, used two primary endpoints. The first was a motor-milestone response on the [[HINE]] scale: did the baby gain milestones like head control, kicking, rolling or sitting, and gain more than they lost? The second was [[event-free survival]]: time to death or permanent breathing support. The first could be tested early; the second needed longer follow-up. Only the milestone endpoint was tested at the interim analysis, and the statisticians set a strict order for testing the rest to avoid cherry-picking.</p>
<p>A second trial, CHERISH, used the same sham design in 126 older children with later-onset SMA (types 2 and 3), measuring change on the HFMSE motor scale after 15 months.</p>`},

    {type: 'trial', title: 'ENDEAR: infants with type 1 SMA', intro: 'Read the design, then predict the result before it is revealed.',
      design: {name: 'ENDEAR', phase: 'Phase 3', blinding: 'Double-blind, sham-controlled', years: '2014–2016', n: 122,
        population: 'Infants up to 7 months old, symptoms before 6 months, almost all with 2 SMN2 copies', randomization: '2:1',
        arms: [{name: 'Nusinersen', n: 80, desc: '12 mg intrathecal, then maintenance'}, {name: 'Sham procedure', n: 41, desc: 'Needle prick only, no drug', control: true}],
        endpoint: 'Motor milestones (HINE) and event-free survival',
        details: {
          'Enrolled': '122 randomized; 121 treated (80 nusinersen, 41 sham) in the intention-to-treat analysis',
          'Primary endpoints': '1) Motor-milestone response on [[HINE]] section 2. 2) [[event-free survival|Event-free survival]]: time to death or permanent ventilation',
          'Interim analysis': 'Planned; only the milestone endpoint was tested. Positive result stopped the trial and moved infants to the [[SHINE]] extension',
          'Key secondary': 'Overall survival; [[CHOP INTEND]] motor score',
        }},
      predict: {q: 'At the final analysis, what share of infants on nusinersen met the motor-milestone response definition, compared with the sham group?',
        options: ['About 15% vs 5%: a small but real edge', 'About 51% vs 0%', 'About 90% vs 10%: nearly everyone responded', 'No clear difference in milestones, but fewer deaths'],
        answer: 1,
        explain: 'In the final analysis 37 of 73 evaluable infants on nusinersen (51%) were milestone responders, versus 0 of 37 on sham. The interim result, 21 of 51 (41%) vs 0 of 27, had already stopped the trial. Note what this means: about half of treated infants did <em>not</em> meet the definition. Nusinersen changed the course of the disease, but did not make these babies typical.'},
      results: [
        {kind: 'bar', title: 'Motor-milestone responders (final analysis)', unit: '%', categories: ['Nusinersen (n=73)', 'Sham (n=37)'], series: [{name: 'Responders', values: [51, 0]}], colorByCategory: true, note: 'Finkel et al., NEJM 2017; FDA label.'},
        {kind: 'bar', title: 'Deaths and permanent ventilation', subtitle: 'Share of infants with each outcome, intention-to-treat (80 vs 41)', unit: '%', categories: ['Death or perm. ventilation', 'Death'],
          series: [{name: 'Nusinersen', values: [39, 16]}, {name: 'Sham', values: [68, 39], color: 2}], note: 'Hazard ratios: 0.53 for death or permanent ventilation (a 47% lower risk), 0.37 for death. FDA label, 2020.'},
        {kind: 'km', title: 'Event-free survival (schematic)', subtitle: 'Schematic curves drawn from reported figures (sham median 22.6 weeks; 39% vs 68% with an event), not digitized from the paper.', xLabel: 'Weeks on study', unit: '%', yMax: 100, xMax: 56,
          series: [{name: 'Nusinersen', points: [[0, 100], [8, 92], [16, 83], [26, 74], [36, 67], [46, 63], [56, 61]]}, {name: 'Sham', points: [[0, 100], [8, 84], [16, 63], [22.6, 50], [30, 42], [42, 36], [56, 32]], color: 2}],
          markers: [{x: 22.6, y: 50, label: 'sham median 22.6 wk', series: 1}], note: 'Median time to death or permanent ventilation was not reached with nusinersen.'},
      ],
      takeaway: 'A randomized, blinded result this large is rare in any disease. It also carried a clear sub-message: infants who had been sick for a shorter time at screening benefited more. That finding pointed straight at treating earlier.'},

    {type: 'callout', variant: 'whatif', heading: 'What if there had been no interim analysis?', html: `<p>ENDEAR's statisticians planned to look at the milestone data once a set number of infants had been followed for about six months. Without that look, the trial would have run to its end with a third of the babies still getting sham procedures, during months when motor neurons were dying. Because the interim result was clear, the trial stopped in August 2016 and every participant could move to the [[SHINE]] extension on the drug. The planned look also gave Biogen the data it needed to exercise its option and file with regulators months earlier. The design choice that made the trial ethically bearable also made it faster.</p>`},

    {type: 'trial', title: 'CHERISH: children with later-onset SMA', intro: 'Older children who could sit but had never walked. Did the drug help once the disease was established?',
      design: {name: 'CHERISH', phase: 'Phase 3', blinding: 'Double-blind, sham-controlled', years: '2014–2017', n: 126,
        population: 'Children aged 2 to 9 at screening, symptoms after 6 months, able to sit, never walked', randomization: '2:1',
        arms: [{name: 'Nusinersen', n: 84, desc: '12 mg on days 1, 29, 85, 274'}, {name: 'Sham procedure', n: 42, desc: 'Same schedule, no drug', control: true}],
        endpoint: 'HFMSE motor score change at 15 months',
        details: {
          'Primary endpoint': 'Change from baseline in [[HFMSE]] score (0 to 66) at month 15',
          'Key secondary': 'Share of children gaining at least 3 points, a clinically meaningful change',
          'Interim analysis': 'Positive; trial stopped early in late 2016',
          'Baseline': 'Median age 3; mean HFMSE 21.6; all sat independently; none walked',
        }},
      predict: {q: 'On the 66-point HFMSE scale, what happened over 15 months?',
        options: ['Both groups declined, the drug group more slowly', 'Nusinersen children gained about 4 points; sham children lost about 1', 'Nusinersen children gained about 20 points', 'No difference; the drug only works in infants'],
        answer: 1,
        explain: 'In the final analysis the nusinersen group improved by a mean of 3.9 points while the sham group fell by 1.0. 57% of treated children gained at least 3 points, against 26% on sham. Modest-sounding numbers, but in a disease defined by steady decline, going up at all is the finding.'},
      results: [
        {kind: 'bar', title: 'Children gaining 3 or more HFMSE points at 15 months', unit: '%', categories: ['Nusinersen (n=84)', 'Sham (n=42)'], series: [{name: '3+ point gain', values: [57, 26]}], colorByCategory: true, note: 'Mercuri et al., NEJM 2018; FDA label (56.8% vs 26.3%). Mean change: +3.9 vs -1.0 points.'},
      ],
      takeaway: 'CHERISH mattered commercially as much as medically. It supported a broad label covering children and adults, which let Biogen sell to the much larger population living with types 2 and 3, not only to infants.'},

    {type: 'story', title: 'NURTURE: treating before symptoms', tocTitle: 'NURTURE', html: `
<p>The third study asked the question ENDEAR had raised. If treating earlier helps, what happens if you treat before any symptoms appear at all?</p>
<p>NURTURE started in May 2015. It enrolled 25 babies who had been diagnosed through genetic testing, usually because an older sibling had SMA, and who were still [[presymptomatic]]. Fifteen had two SMN2 copies, the genotype that usually means type 1; ten had three. They received their first dose in the first weeks of life. There was no control group; the comparison is with what natural history says happens to children with those genotypes.</p>
<p>The interim report from March 2019, at a median of 2.9 years of follow-up, was striking. All 25 children were alive, and none needed permanent ventilation. All 25 could sit without support. Twenty-three walked with help and 22 walked on their own. Babies whose genes predicted they would never sit were walking.</p>
<p>That result reshaped the whole field. It turned SMA from a disease you treat after diagnosis into one you try to catch at birth. And it made the timing of treatment, not just the choice of drug, the most important variable.</p>`},

    {type: 'chart', title: 'NURTURE: 25 babies treated before symptoms', chart: {kind: 'bar', title: 'Share of children reaching each outcome (median follow-up 2.9 years)', unit: '%', horizontal: true, labelWidth: 230,
      categories: ['Alive, no permanent ventilation', 'Sat without support', 'Walked with assistance', 'Walked independently'],
      series: [{name: 'NURTURE (n=25)', values: [100, 100, 92, 88]}], note: 'Open-label, single arm; 15 with two SMN2 copies, 10 with three. De Vivo et al., Neuromuscular Disorders 2019.'},
      takeaway: 'Without treatment, most babies with two SMN2 copies would never sit. The single-arm design means these numbers are compared with history, not with a control group, but the gap is too large to be chance.'},

    {type: 'custom', title: 'The timing window', kicker: 'Try it', intro: 'Drag the slider to choose the age at which a baby with two SMN2 copies gets a first dose. The curve is illustrative: it shows the shape of the problem, not measured data.',
      html: `<div class="card"><label style="display:grid;grid-template-columns:200px 1fr 90px;gap:12px;align-items:center;font-size:15px">Age at first dose<input type="range" min="0" max="300" step="5" value="30" class="tw-in" style="width:100%;accent-color:var(--accent)"><span class="tw-out" style="font-weight:600;text-align:right"></span></label><div class="tw-svg" style="margin-top:8px"></div><div class="tw-txt" style="font:400 16.5px/1.6 var(--serif);margin-top:8px"></div></div>`,
      init(root) {
        const W = 760, H = 300, L = 60, R = 20, T = 30, B = 50, maxD = 300;
        const X = d => L + (W - L - R) * d / maxD;
        const f = d => 100 / (1 + Math.exp((d - 110) / 28));
        const Y = v => T + (H - T - B) * (1 - v / 100);
        const inp = root.querySelector('.tw-in');
        const draw = () => {
          const d = +inp.value;
          root.querySelector('.tw-out').textContent = d + ' days';
          let s = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;display:block">`;
          s += `<rect x="${X(8)}" y="${T}" width="${X(42) - X(8)}" height="${H - T - B}" class="il-3s"/>`;
          s += `<text x="${X(25)}" y="${T - 8}" text-anchor="middle" class="il-small">NURTURE: first dose at 8–42 days</text>`;
          s += `<line x1="${X(175)}" x2="${X(175)}" y1="${T}" y2="${H - B}" class="il-line il-dash"/><text x="${X(175) + 6}" y="${T + 14}" class="il-small">ENDEAR: median first dose ~175 days</text>`;
          s += `<line x1="${X(183)}" x2="${X(183)}" y1="${T + 40}" y2="${H - B}" class="st-2 il-dash" stroke-width="1.5"/><text x="${X(183) + 6}" y="${T + 54}" class="il-small">type 1 symptoms begin before 6 months</text>`;
          let p = ''; for (let i = 0; i <= maxD; i += 5) p += (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(f(i)).toFixed(1) + ' ';
          s += `<path d="${p}" class="il-none st-2" stroke-width="3"/>`;
          s += `<line x1="${L}" x2="${W - R}" y1="${H - B}" y2="${H - B}" class="il-line"/><line x1="${L}" x2="${L}" y1="${T}" y2="${H - B}" class="il-line"/>`;
          [0, 60, 120, 180, 240, 300].forEach(t => s += `<text x="${X(t)}" y="${H - B + 18}" text-anchor="middle" class="il-small">${t}</text>`);
          s += `<text x="${(L + W - R) / 2}" y="${H - 8}" text-anchor="middle" class="il-small">age in days</text>`;
          s += `<text x="${L - 8}" y="${T + 10}" text-anchor="end" class="il-small">many</text><text x="${L - 8}" y="${H - B}" text-anchor="end" class="il-small">few</text>`;
          s += `<text x="${X(200)}" y="${H - B - 30}" class="il-small">working motor neurons (illustrative)</text>`;
          s += `<line x1="${X(d)}" x2="${X(d)}" y1="${T}" y2="${H - B}" class="st-1" stroke-width="2"/><circle cx="${X(d)}" cy="${Y(f(d))}" r="8" class="il-1"/>`;
          s += '</svg>';
          root.querySelector('.tw-svg').innerHTML = s;
          let t;
          if (d <= 42) t = '<b>Presymptomatic window.</b> This is where NURTURE treated. In that study all 25 children sat unaided and 22 walked on their own at a median 2.9 years. Reaching this window routinely requires [[newborn screening]], because parents see nothing wrong yet.';
          else if (d < 150) t = '<b>Early, but symptoms may be starting.</b> Some motor neurons are already lost. In ENDEAR, infants with a shorter disease duration at screening were more likely to benefit than those who had been sick longer.';
          else if (d <= 210) t = '<b>Typical diagnosis in the pre-screening era.</b> ENDEAR infants started at a median of about six months. About half became milestone responders; many still needed breathing and feeding support.';
          else t = '<b>Late.</b> Much of the motor neuron pool is gone and cannot be regrown. Treatment can still stabilize or improve function, but the ceiling is lower. In natural history studies, infants with two SMN2 copies reached death or permanent ventilation at a median age of about 8 months.';
          root.querySelector('.tw-txt').innerHTML = t.replace('[[newborn screening]]', 'newborn screening');
        };
        inp.addEventListener('input', draw); draw();
      }},

    {type: 'callout', variant: 'lesson', heading: 'Motor neurons are a non-renewable resource', html: `<p>Every SMA therapy, however clever, can only protect motor neurons that are still alive. That single fact explains the ENDEAR subgroup result, the NURTURE result, the push for newborn screening, and why comparing drugs across trials that treated children at different ages is so misleading. In SMA, <em>when</em> you treat often matters more than <em>what</em> you treat with.</p>`},

    {type: 'decision', title: 'Decision: sham control or not?', role: 'You are on the ENDEAR design team, 2014',
      scenario: `Your open-label infant study looks promising: some babies are reaching milestones that natural history says they should not. You now need a pivotal trial for infants with type 1 SMA, a disease where most untreated babies die or need permanent ventilation before age two. Regulators will accept a well-designed trial, but you choose the design.`,
      options: [
        {label: 'Randomize 2:1 against a sham procedure, double-blind, with a planned interim analysis that can stop the trial early.', outcome: 'You get the most convincing possible evidence, fast approval, and an unarguable case for payers. The price: one in three infants gets a needle prick instead of the drug for as long as the trial runs. Families and some clinicians will find that painful, and some may refuse to enroll.'},
        {label: 'Single-arm, open-label: treat every infant and compare with published natural history data.', outcome: 'Every child in the trial gets the drug, and recruitment is easier. But historical comparisons are vulnerable: supportive care has improved, diagnosis criteria differ, and the outcome measures are partly subjective. If the effect is modest, regulators and payers may doubt it, and you may need another trial later.'},
        {label: 'Randomize, but open-label with no sham: the control group simply gets standard care.', outcome: 'You avoid needle pricks with no drug, but everyone knows who got treatment. Motor assessments in infants involve judgment, so unblinded evaluators and hopeful parents could bias the results. Critics will discount the milestone data.'},
      ],
      reality: `Ionis and Biogen chose the sham-controlled, double-blind design with a planned interim look. The interim analysis stopped the trial in August 2016 and every participant moved to open-label drug. The FDA approved the drug four months later. Two and a half years later, Novartis's gene therapy was approved on the basis of single-arm studies compared with natural history, because its effect in 15 early patients was so large (all alive and free of permanent ventilation at 20 months, against 8% in a historical cohort). Both approaches worked; which one is right depends on how big you expect the effect to be and how much uncertainty regulators and payers will tolerate.`},

    // ---------------- 9. Regulators ----------------
    {type: 'story', kicker: 'Regulators', title: 'Approval in under three months', tocTitle: 'FDA approval', html: `
<p>The FDA gave nusinersen nearly every tool it has for speeding up a drug for a serious rare disease. It had [[orphan drug]] status, which brings seven years of US market exclusivity and tax credits. It had [[fast track]] designation, which allowed the application to be submitted in pieces. The application, filed in the autumn of 2016 on the strength of the ENDEAR interim analysis, got [[priority review]], and approval came on December 23, 2016, within three months of filing according to Ionis.</p>
<p>Two decisions in that approval were consequential.</p>
<p>First, the <strong>breadth of the label</strong>. The pivotal evidence at the time came from infants with type 1 SMA; CHERISH's interim result had arrived only weeks earlier. Yet the FDA approved Spinraza "for the treatment of spinal muscular atrophy in pediatric and adult patients", without restricting it by type, age or SMN2 copy number. Supporting open-label studies had included patients up to 15 years old and presymptomatic newborns. A narrower label would have limited Biogen's market to infants. The broad one covered the thousands of older children and adults living with SMA, and set up the arguments with insurers that followed.</p>
<p>Second, the <strong>[[priority review voucher]]</strong>. Because Spinraza treated a rare pediatric disease, the FDA awarded Biogen a voucher that can shorten the review of any future drug. It was only the eighth such voucher issued. These vouchers are tradable; Biogen sold this one in April 2024 for $103 million, passing about $14 million of that to Ionis.</p>
<p>The label also carried warnings. Some antisense drugs lower platelet counts and damage the kidneys, so doctors must check platelets, blood clotting and urine protein before each dose. In the sham-controlled studies, 58 percent of treated patients had raised urine protein, against 34 percent of controls. The most common side effects in infants were respiratory infections and constipation, which are common in SMA anyway. Europe approved the drug in mid-2017, and Japan shortly after.</p>`},

    {type: 'table', title: 'The regulatory toolkit, applied', columns: ['Tool', 'What it does', 'How it applied to Spinraza'],
      rows: [
        ['[[orphan drug|Orphan drug designation]]', 'Seven years of US exclusivity for a disease with fewer than 200,000 US patients, plus tax credits and fee waivers', 'Granted; SMA affects roughly 1 in 10,000 births'],
        ['[[fast track|Fast track]]', 'More FDA meetings; the application can be submitted in parts', 'Granted'],
        ['[[priority review|Priority review]]', 'FDA aims to decide in six months instead of ten', 'Approved within three months of filing'],
        ['[[priority review voucher|Rare pediatric disease voucher]]', 'A tradeable coupon for a faster review of any future drug', 'The eighth ever issued; sold by Biogen in 2024 for $103 million'],
        ['[[label|Label]] breadth', 'Defines who can be prescribed the drug and who insurers must consider', 'All SMA patients, children and adults, despite pivotal data in infants'],
      ],
      caption: 'Sources: FDA announcement, Dec 23 2016; Ionis press release; Biogen 10-K for 2025.'},

    // ---------------- 10. Money ----------------
    {type: 'story', kicker: 'The money', title: '$125,000 an injection', tocTitle: 'Price and payers', html: `
<p>Six days after approval, Biogen announced the price: $125,000 per injection. Because the first year needs six injections (four loading doses plus two maintenance doses), that meant <strong>$750,000 in year one and $375,000 every year after</strong>, for life. These were US [[list price|list prices]], before any rebates; the hospital costs of each lumbar puncture came on top.</p>
<p>Biogen said the price was in line with other drugs for rare diseases and reflected the value to patients. Its chief executive, Michel Vounatsos, later told the <em>Boston Globe</em> the company had invested close to a billion dollars in the drug, though he gave no breakdown, and said the price was based on value rather than development cost. Biogen's own filings show roughly $567 million in program costs from 2015 through 2017, plus the $29 million upfront, the $75 million license fee and $150 million in approval milestones paid to Ionis.</p>
<p>The reaction was immediate. A Wall Street analyst at Leerink predicted a storm of criticizm and wondered whether Spinraza would be the rare-disease drug that broke the camel's back. The comparison everyone reached for was Sovaldi, the $1,000-a-pill hepatitis C cure that had caused an uproar two years earlier. The difference was that Sovaldi was a 12-week cure; Spinraza was a lifelong subscription.</p>
<h3>The payers push back</h3>
<p>Insurers could not easily refuse to cover the first treatment for a fatal childhood disease. Instead, they argued about <em>which</em> patients. Because the pivotal data at launch came from infants, some insurers and state Medicaid programs restricted coverage for older or sicker patients. NPR reported in 2017 that Oklahoma's Medicaid program approved rules barring coverage for patients on permanent ventilators, while Washington state covered them. Washington's Medicaid pharmacy chief said she had told Biogen directly that she considered the price unethical. One family NPR followed was denied twice by Medicaid before getting the drug through Biogen's patient assistance program, eight months after approval.</p>
<p>In 2019 the Institute for Clinical and Economic Review ([[ICER]]), a nonprofit that estimates what drugs are worth, examined Spinraza and Zolgensma. It found that both "dramatically improve" the lives of children with SMA. But it judged that Spinraza's price was far above common [[cost-effectiveness]] thresholds of $100,000 to $150,000 per [[QALY|quality-adjusted life year]]. For presymptomatic infants, ICER calculated that a value-based price would be roughly $72,000 to $130,000 for the first year and $36,000 to $65,000 a year after, which is about 83 to 90 percent below the list price. In April 2019 its independent panel voted unanimously that the price far exceeded those thresholds. ICER also noted that US insurers would cover the drug regardless, which is exactly the point: in rare disease, the usual market brake on price barely exists.</p>
<p>Outside the US, health systems with formal cost-effectiveness rules held out longer. England's NICE initially recommended against funding it in 2018, then reversed course in 2019 under a five-year arrangement. Norway's first decision called the price unethically high. In China, the price per vial fell by about 95 percent when the drug joined the national insurance list at the end of 2021.</p>`},

    {type: 'chart', title: 'Spinraza worldwide sales', chart: {kind: 'line', title: 'Annual product revenue reported by Biogen', subtitle: 'US dollars, billions, company-reported worldwide net revenue', unit: '$B',
      series: [{name: 'Spinraza', points: [[2017, 0.88], [2018, 1.72], [2019, 2.10], [2020, 2.05], [2021, 1.91], [2022, 1.79], [2023, 1.74], [2024, 1.57], [2025, 1.55]]}],
      annotations: [{x: 2019.4, label: 'Zolgensma approved'}, {x: 2020.6, label: 'Evrysdi approved', dy: 18}], yMax: 2.5, note: 'Biogen 10-K filings for 2017, 2019, 2021, 2023 and 2025. 2016 revenue was $4.6 million (one week on the market).'},
      takeaway: 'Sales peaked in 2019 and then eased as two competitors arrived, currency moved and prices were cut in some markets. Still, Spinraza earned roughly $15 billion over nine years, and Biogen paid Ionis royalties of 11 to 15 percent on every dollar.'},

    {type: 'callout', variant: 'numbers', heading: 'Spinraza by the numbers', html: `<p><b>1</b> DNA letter (C to T) separates SMN1 from its backup in the way that matters. <b>15</b> letters make up the ISS-N1 silencer. <b>18</b> letters make up nusinersen. <b>12 mg</b> in <b>5 mL</b> per injection. <b>135–177 days</b>: half-life in spinal fluid. <b>6</b> injections in year one, <b>3</b> a year after. <b>122</b> infants in ENDEAR, stopped early at <b>41% vs 0%</b>. <b>$125,000</b> list price per injection in 2016. <b>2%</b> of net US sales shared by UMass and Ravindra Singh, as reported by the <em>Boston Globe</em>. <b>11–15%</b> royalty rate paid by Biogen to Ionis. <b>$2.1 billion</b> in peak sales, 2019.</p>`},

    {type: 'explorer', title: 'Lifetime cost: subscription vs one-time', intro: 'Compare cumulative US list-price drug costs for Spinraza (standard 12 mg regimen) with Zolgensma\'s one-time infusion. Adjust the years of treatment and a hypothetical discount off list, applied to both.',
      inputs: [
        {id: 'yrs', label: 'Years of Spinraza treatment', min: 1, max: 30, value: 10, fmt: v => v + (v === 1 ? ' year' : ' years')},
        {id: 'disc', label: 'Discount off list (both)', min: 0, max: 60, step: 5, value: 0, fmt: v => v + '%'},
      ],
      compute(v, api, el) {
        const k = 1 - v.disc / 100, pts = [[0, 0]], z = [[0, 2125 * k]];
        let cum = 0;
        for (let y = 1; y <= v.yrs; y++) { cum += (y === 1 ? 750 : 375) * k; pts.push([y, Math.round(cum)]); z.push([y, Math.round(2125 * k)]); }
        const cross = 2125 * k <= 750 * k ? 1 : 1 + (2125 - 750) / 375;
        el.innerHTML = `<p style="margin:0 0 10px">After <b>${v.yrs}</b> ${v.yrs === 1 ? 'year' : 'years'}, Spinraza drug costs total about <b>$${(cum / 1000).toFixed(2)} million</b>, versus <b>$${(2.125 * k).toFixed(3)} million</b> for one Zolgensma infusion. At list prices the lines cross during year ${Math.ceil(cross)}, whatever the discount, as long as both drugs get the same one. Not counted: hospital costs for each spinal injection, time off work, differences in effect, and the fact that some children receive more than one therapy.</p><div class="cf-c"></div>`;
        api.mountChart(el.querySelector('.cf-c'), {kind: 'line', title: 'Cumulative drug cost', subtitle: 'US list prices at launch (2016 and 2019 dollars), not inflation-adjusted or discounted over time', unit: '$M',
          series: [{name: 'Spinraza (cumulative)', points: pts.map(p => [p[0], p[1] / 1000])}, {name: 'Zolgensma (one-time)', points: z.map(p => [p[0], p[1] / 1000]), color: 2, dashed: true}],
          xFmt: x => 'yr ' + x, note: 'Spinraza: $750,000 in year one, $375,000 a year after (CBS News, 2016). Zolgensma: $2.125 million per treatment (JMCP, 2021). Evrysdi is omitted because its weight-based price was not verified for this page.'});
      }},

    {type: 'callout', variant: 'product', heading: 'Subscription vs perpetual license', html: `<p>Spinraza is priced like SaaS: a big onboarding year, then a recurring fee forever. Zolgensma is priced like a perpetual license: one enormous payment up front. Defenders of the gene therapy's $2.125 million price compared it with years of chronic treatment, just as a software vendor compares a license to years of subscription fees. Which one a buyer prefers depends on the discount rate, the budget cycle, and whether they trust the one-time product to keep working.</p><p>Where the analogy breaks: the "customer" who chooses (a family and a doctor) is not the one who pays (an insurer or health system), so price barely shifts demand. Churn is not free: once a child has had a virus-based gene therapy, their immune system usually rules out a second dose, so the choice is effectively irreversible. And the insurer paying for year one may not be the one covering the child in year five, which makes long-term value hard for any single payer to capture.</p>`},

    // ---------------- 11. What came next ----------------
    {type: 'story', kicker: 'What came next', title: 'Three ways to fix the same shortage', tocTitle: 'Competition', html: `
<p>Spinraza had the market to itself for about two and a half years. Then the two other obvious ways to attack SMN shortage both arrived.</p>
<h3>Zolgensma: replace the gene (2019)</h3>
<p>If SMA is caused by a missing SMN1 gene, why not deliver a new one? That was the approach of AveXis, a small company whose first trial was led by Jerry Mendell in Ohio, and which Novartis bought in 2018. Its drug, [[Zolgensma]], uses a harmless virus called [[AAV]] to carry a working SMN gene into cells, after a single intravenous infusion. In the first study, published in NEJM in late 2017, all 15 infants with type 1 SMA were alive and free of permanent ventilation at 20 months of age, compared with 8 percent in a historical cohort. Eleven of the 12 on the high dose sat unaided.</p>
<p>The FDA approved Zolgensma on May 24, 2019, for children under two. It carries a boxed warning for serious liver injury, and not every child is eligible (some already have antibodies to the virus). At $2.125 million, it was widely called the most expensive drug ever. In November 2025 the FDA also approved an intrathecal version, Itvisma, for patients aged two and older, taking gene therapy into Spinraza's older-patient territory.</p>
<h3>Evrysdi: a pill-sized splicing fix (2020)</h3>
<p>The third approach went after the same splicing switch as nusinersen, but with a [[small molecule]]. PTC Therapeutics, in a collaboration with Roche and the SMA Foundation, screened for chemicals that make SMN2 keep exon 7. An earlier candidate was stopped when it caused eye damage in monkeys given it for months; the follow-up, risdiplam, was optimized to avoid that. Because it is small, it spreads through the whole body, crosses into the brain and cord, and can be taken by mouth once a day at home.</p>
<p>The FDA approved [[Evrysdi]] on August 7, 2020, for patients two months and older. In an infant study, 41 percent of 21 babies could sit on their own for five seconds after a year, and 81 percent were alive without permanent ventilation after at least 23 months. In a placebo-controlled study of 180 people aged 2 to 25, it produced a small but significant motor improvement. A tablet version followed in 2025.</p>
<h3>Newborn screening changes everything</h3>
<p>With effective drugs available, the case for finding babies at birth became overwhelming. In July 2018 the US Health Secretary approved adding SMA to the federal [[RUSP|Recommended Uniform Screening Panel]]. Cure SMA then pushed state by state, and by 2024 every US state screened newborns for SMA. Today, many children with SMA in the US are diagnosed from a heel-prick blood test shortly after birth, and treated before symptoms.</p>
<p>Competition hit Spinraza's sales. Biogen's filings cite increased competition, lower demand in some European markets and price cuts. Biogen fought back on two fronts. It tested a higher dose in a trial called DEVOTE; after an FDA rejection in September 2025 over manufacturing paperwork (the agency cited no problems with the clinical data), the high-dose regimen of 50 mg loading and 28 mg maintenance doses was approved in the US in March 2026, after Europe and Japan. And it is developing a successor ASO, salanersen, which received breakthrough therapy designation in June 2026 after early data in children previously treated with gene therapy. Meanwhile it has sued would-be generic makers over patents on the drug.</p>`},

    {type: 'table', title: 'Three SMA treatments compared', intro: 'The three first-generation therapies, as approved in the US. There is no head-to-head randomized trial.',
      columns: ['', 'Spinraza (nusinersen)', 'Zolgensma (onasemnogene abeparvovec)', 'Evrysdi (risdiplam)'],
      rows: [
        ['Company', 'Biogen (discovered by Ionis)', 'Novartis (from AveXis)', 'Roche/Genentech with PTC Therapeutics'],
        ['Approach', 'Antisense: makes SMN2 keep exon 7', 'Gene therapy: adds a working SMN gene', 'Small molecule: makes SMN2 keep exon 7'],
        ['[[modality|Modality]]', '[[antisense oligonucleotide]]', '[[AAV]] [[gene therapy]]', '[[small molecule]]'],
        ['How given', '[[lumbar puncture]]: 4 loading doses, then every 4 months, for life', 'One intravenous infusion (intrathecal version for age 2+ approved 2025)', 'By mouth, once a day, for life'],
        ['First US approval', 'December 2016', 'May 2019', 'August 2020'],
        ['US label at approval', 'Children and adults', 'Under 2 years', '2 months and older'],
        ['Key safety issues', 'Low platelets, kidney toxicity; procedure risks', 'Boxed warning: acute serious liver injury', 'Common: fever, diarrhea, rash'],
        ['US list price at launch', '$125,000 per dose; $750,000 year 1, $375,000/yr after', '$2.125 million, once', 'Weight-based (not verified here)'],
        ['Main advantage', 'Longest track record; direct delivery to the nervous system', 'One treatment', 'At home, no needles'],
        ['Main burden', 'Repeated spinal injections', 'Liver risk; one chance only', 'Daily dosing forever; whole-body exposure'],
      ],
      caption: 'Sources: FDA labels and announcements; CBS News 2016; JMCP 2021. Trial populations differ in age and disease stage, so outcome numbers cannot be compared directly across drugs.'},

    {type: 'decision', title: 'Decision: which therapy for your baby?', role: 'You are a parent, early 2020s',
      scenario: `Your daughter is five days old and looks perfectly healthy. Her newborn screening test has come back positive: she has no working SMN1 gene and two copies of SMN2, which usually means type 1 SMA. She has no symptoms yet. The neurologist explains that all three approved treatments are options, that insurance will likely cover whichever you choose, and that the most important thing is to start soon.`,
      options: [
        {label: 'Spinraza: start the injections now.', outcome: 'You choose the therapy with the longest track record, including the NURTURE study in babies like yours, where every child sat and most walked. It acts directly in the nervous system and can be stopped. The cost to your family is a lifetime of hospital visits and spinal injections, six in the first year and three a year after, which can get harder if she later needs spinal surgery.'},
        {label: 'Zolgensma: one infusion, then (hopefully) done.', outcome: 'One hospital visit could provide lasting SMN production, with no repeat procedures. You accept a known risk of serious liver injury, which requires steroids and monitoring, and the fact that she can probably never receive another AAV gene therapy. She must first test negative for antibodies to the virus. Long-term durability over decades is not yet known.'},
        {label: 'Evrysdi: a daily oral dose at home.', outcome: 'No needles and no hospital procedures; the drug reaches the whole body, not only the nervous system. But it has to be given every single day for life, and missing doses matters. Its data in presymptomatic babies arrived later than for the other two, and long-term effects of lifelong whole-body exposure are still being studied.'},
      ],
      reality: `There is no single right answer, which is why the choice sits with families and their clinicians. No randomized trial has compared the three head to head, and their pivotal studies enrolled different children at different ages, so cross-trial comparisons are unreliable. What experts agree on is timing: treat as early as possible, ideally before symptoms. In practice, some children now receive more than one therapy over time; Biogen's newest ASO, salanersen, was tested in children who had already had gene therapy. The decision is a product decision too: families weigh efficacy they cannot directly compare against burdens they can see very clearly.`},

    {type: 'callout', variant: 'product', heading: 'First to market, then out-competed on user experience', html: `<p>Spinraza won the first-mover race and then faced two rivals whose main selling point was not better biology but a better experience: one treatment instead of dozens, or a daily drink instead of spinal injections. Sales peaked within three years. It is a familiar pattern in software: the pioneer proves the market, then fast followers compete on onboarding friction and convenience.</p><p>Where it breaks: switching costs are medical, not contractual. Moving a stable child off a drug that is working is a risk few doctors or parents want to take, which kept many patients on Spinraza. And the "users" are babies who cannot tell you which experience they prefer; their parents and doctors decide, with very incomplete comparative data.</p>`},

    // ---------------- 12. Quiz ----------------
    {type: 'quiz', title: 'Check yourself', questions: [
      {q: 'Why doesn\'t SMN2 fully compensate for a missing SMN1?', options: ['SMN2 codes for a different protein that motor neurons cannot use', 'A one-letter change makes the cell usually cut exon 7 out of SMN2\'s message, so most of its protein is short and unstable', 'SMN2 is switched off in motor neurons', 'SMN2 is only present in a minority of people'], answer: 1, explain: 'SMN1 and SMN2 code for the same protein. The C-to-T change in exon 7 does not alter the recipe; it alters splicing, so most SMN2 messages lose exon 7.'},
      {q: 'What does nusinersen physically do?', options: ['Inserts a working SMN1 gene into motor neurons', 'Cuts and destroys the faulty SMN2 RNA', 'Binds a silencer sequence in intron 7 of SMN2 RNA so the splicing machinery keeps exon 7', 'Replaces the SMN protein by infusion'], answer: 2, explain: 'It pairs with the stretch of intron 7 containing ISS-N1 and blocks repressor proteins. Its chemistry is chosen specifically so it does not trigger RNA cutting.'},
      {q: 'Two infants have no SMN1. One has two SMN2 copies, the other four. What would you predict?', options: ['Identical disease, since both lack SMN1', 'The child with four copies probably has milder disease', 'The child with four copies probably has more severe disease', 'Copy number only matters for adults'], answer: 1, explain: 'Each SMN2 copy contributes a little working protein. More copies generally means milder disease, a strong tendency though not an absolute rule.'},
      {q: 'Why is nusinersen injected into the spinal fluid rather than a vein?', options: ['Because the drug is too expensive to give in larger doses', 'Because the blood-brain barrier keeps large, charged molecules like ASOs from reaching the spinal cord from the blood', 'Because it would be digested in the bloodstream within seconds regardless of chemistry', 'Because motor neurons have no blood supply'], answer: 1, explain: 'The spinal fluid bathes the cord directly, bypassing the barrier. The chemical armor handles stability; the route handles access.'},
      {q: 'Why did nusinersen\'s designers want every sugar modified with 2\'-MOE instead of using a plain DNA backbone?', options: ['To make it cheaper to manufacture', 'To make it fluorescent for imaging', 'To grip the RNA tightly, resist breakdown and avoid triggering RNase H, which would cut the very RNA the drug is meant to rescue', 'So that it could be taken by mouth'], answer: 2, explain: 'Splice-switching needs the target RNA intact. DNA-RNA pairs recruit RNase H; a fully 2\'-MOE strand does not.'},
      {q: 'ENDEAR used a sham needle prick in the control group. What was the main reason?', options: ['Regulators require a sham in every rare disease trial', 'To keep families and assessors blinded, because motor assessments in infants involve judgment and hope can bias them', 'To reduce the cost of the trial', 'Because the sham procedure itself has therapeutic effects'], answer: 1, explain: 'Blinding protects the milestone endpoint from bias. The planned interim analysis limited how long infants stayed on sham.'},
      {q: 'The biggest single lesson of NURTURE and the ENDEAR subgroup analysis was:', options: ['Higher doses are always better', 'Nusinersen works only in babies with three SMN2 copies', 'Treating before or soon after symptoms begin leads to much better outcomes, because lost motor neurons do not come back', 'Open-label trials are more reliable than randomized ones'], answer: 2, explain: 'All 25 NURTURE babies sat unaided, and ENDEAR infants with a shorter disease duration benefited more. This drove newborn screening.'},
      {q: 'Why could Biogen charge $375,000 a year with limited pushback on demand, even after ICER judged the price far above cost-effectiveness thresholds?', options: ['Because the FDA sets drug prices in the US', 'Because there was no alternative for a fatal disease, orphan exclusivity blocked copies, and US insurers generally cover such drugs even while restricting who qualifies', 'Because ICER\'s recommendations are legally binding', 'Because the drug was cheap to make, so the price reflected cost'], answer: 1, explain: 'With no competitor and a devastating disease, payers argued about which patients qualified rather than whether to cover. Competition in 2019 and 2020 changed the dynamics more than cost-effectiveness reports did.'},
      {q: 'Biogen signed an option deal in 2012 rather than buying the drug outright. What did the option mainly buy them?', options: ['Ownership of Ionis', 'The right to decide on a large license payment after seeing late-stage trial results, while Ionis ran and funded much of the development', 'Exclusive rights to all antisense drugs forever', 'A guarantee of FDA approval'], answer: 1, explain: 'Biogen paid $29 million upfront, then $75 million only after ENDEAR succeeded. It bought information before committing most of the money.'},
    ]},

    // ---------------- 13. Lessons ----------------
    {type: 'lessons', title: 'What this case teaches', items: [
      {title: 'Look for the backup system', text: 'The treatment came from understanding why a nearly working gene fails, then nudging it. Many diseases have a partial compensating pathway that a drug can amplify rather than replace.', links: ['trikafta', 'zolgensma']},
      {title: 'In degenerative disease, timing beats chemistry', text: 'Lost motor neurons do not return. NURTURE showed that presymptomatic treatment changes outcomes, and newborn screening became as important as the drugs themselves.', links: ['leqembi', 'aduhelm']},
      {title: 'Option deals buy information', text: 'Biogen paid a little early and a lot only after the data were in; Ionis funded the work without selling the asset cheap. Structuring a deal around a key readout is often worth more than the headline price.', links: ['humira', 'keytruda']},
      {title: 'Platforms compound', text: 'Two decades of antisense chemistry let Ionis move fast once the target was known, and the success made the platform more valuable for every later program.', links: ['comirnaty', 'enhertu']},
      {title: 'Patients can build the market', text: 'Parent-led foundations funded early science, built research tools and trial networks, and later won newborn screening. In rare disease, advocacy is part of the development engine.', links: ['kymriah', 'trikafta']},
      {title: 'The first price sets the terms of debate', text: 'Spinraza\'s subscription price made a $2.1 million one-time gene therapy look reasonable by comparison, and competition later did more to shift the market than cost-effectiveness reports.', links: ['sovaldi', 'zolgensma']},
    ]},

    // ---------------- 14. Sources ----------------
    {type: 'sources', title: 'Sources', items: [
      {text: 'Lefebvre S, et al. Identification and characterization of a spinal muscular atrophy-determining gene. Cell 1995;80:155–165.', url: 'https://pubmed.ncbi.nlm.nih.gov/7813012/'},
      {text: 'Lorson CL, Hahnen E, Androphy EJ, Wirth B. A single nucleotide in the SMN gene regulates splicing and is responsible for spinal muscular atrophy. PNAS 1999.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC26877/'},
      {text: 'Cartegni L, Krainer AR. Disruption of an SF2/ASF-dependent exonic splicing enhancer in SMN2 causes spinal muscular atrophy in the absence of SMN1. Nature Genetics 2002.', url: 'https://pubmed.ncbi.nlm.nih.gov/11925564/'},
      {text: 'Kashima T, et al. hnRNP A1 functions with specificity in repression of SMN2 exon 7 splicing. Human Molecular Genetics 2007.', url: 'https://pubmed.ncbi.nlm.nih.gov/17884807/'},
      {text: 'Feldkötter M, et al. Quantitative analyses of SMN1 and SMN2 based on real-time LightCycler PCR. American Journal of Human Genetics 2002 (SMN2 copy number vs SMA type).', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC419987/'},
      {text: 'Finkel RS, et al. Observational study of spinal muscular atrophy type I and implications for clinical trials. Neurology 2014 (median 13.5 months).', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4155049/'},
      {text: 'Kolb SJ, et al. Natural history of infantile-onset spinal muscular atrophy. Annals of Neurology 2017 (median 8 months with two SMN2 copies).', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5776712/'},
      {text: 'Singh NK, Singh NN, Androphy EJ, Singh RN. Splicing of a critical exon of human Survival Motor Neuron is regulated by a unique silencer element located in the last intron. Molecular and Cellular Biology 2006.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1367187/'},
      {text: 'Hua Y, Vickers TA, Okunola HL, Bennett CF, Krainer AR. Antisense masking of an hnRNP A1/A2 intronic splicing silencer corrects SMN2 splicing in transgenic mice. American Journal of Human Genetics 2008.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2427210/'},
      {text: 'Hua Y, et al. Antisense correction of SMN2 splicing in the CNS rescues necrosis in a type III SMA mouse model. Genes & Development 2010.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2912561/'},
      {text: 'Passini MA, et al. Antisense oligonucleotides delivered to the mouse CNS ameliorate symptoms of severe spinal muscular atrophy. Science Translational Medicine 2011.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3140425/'},
      {text: 'Hua Y, et al. Peripheral SMN restoration is essential for long-term rescue of a severe spinal muscular atrophy mouse model. Nature 2011.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3191865/'},
      {text: 'Singh NN, Howell MD, Androphy EJ, Singh RN. How the discovery of ISS-N1 led to the first medical therapy for spinal muscular atrophy. Gene Therapy 2017.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5623086/'},
      {text: 'Singh RN, et al. ISS-N1 makes the first FDA-approved drug for spinal muscular atrophy (review with 2010 licensing history).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5382937/'},
      {text: 'Bennett CF, Baker BF, Pham N, Swayze E, Geary RS. Pharmacology of antisense drugs. Annual Review of Pharmacology and Toxicology 2017.', url: 'https://pubmed.ncbi.nlm.nih.gov/27732800/'},
      {text: 'Chiriboga CA, et al. Results from a phase 1 study of nusinersen (ISIS-SMNRx) in children with spinal muscular atrophy. Neurology 2016.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4782111/'},
      {text: 'Finkel RS, et al. Treatment of infantile-onset spinal muscular atrophy with nusinersen: a phase 2, open-label, dose-escalation study. Lancet 2016.', url: 'https://pubmed.ncbi.nlm.nih.gov/27939059/'},
      {text: 'Finkel RS, et al. Nusinersen versus sham control in infantile-onset spinal muscular atrophy (ENDEAR). NEJM 2017;377:1723–1732.', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1702752'},
      {text: 'Mercuri E, et al. Nusinersen versus sham control in later-onset spinal muscular atrophy (CHERISH). NEJM 2018.', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1710504'},
      {text: 'De Vivo DC, et al. Nusinersen initiated in infants during the presymptomatic stage of SMA: interim results from the phase 2 NURTURE study. Neuromuscular Disorders 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/31704158/'},
      {text: 'ClinicalTrials.gov records NCT01494701 (phase 1), NCT01839656 (phase 2), NCT02193074 (ENDEAR, incl. sham procedure description), NCT02292537 (CHERISH), NCT02386553 (NURTURE).', url: 'https://clinicaltrials.gov/study/NCT02193074'},
      {text: 'Spinraza (nusinersen) US prescribing information, December 2016 and 2020 revisions (dosing, warnings, ENDEAR and CHERISH final results, pharmacokinetics).', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2020/209531s010lbl.pdf'},
      {text: 'FDA. FDA approves first drug for spinal muscular atrophy. News release, December 23, 2016.', url: 'https://www.prnewswire.com/news-releases/fda-approves-first-drug-for-spinal-muscular-atrophy-300383505.html'},
      {text: 'Ionis Pharmaceuticals. SPINRAZA (nusinersen) approved in U.S. to treat broad range of patients with SMA. December 2016.', url: 'https://ir.ionis.com/news-releases/news-release-details/spinrazatm-nusinersen-approved-us-treat-broad-range-patients'},
      {text: 'Biogen Idec 10-Q filings, 2012 (terms of the January 2012 Isis option agreement).', url: 'https://www.sec.gov/Archives/edgar/data/0000875045/000119312512200855/d314125d10q.htm'},
      {text: 'BioSpace. Biogen pays Ionis $75 million for successful late-stage nusinersen data. August 1, 2016.', url: 'https://www.biospace.com/biogen-pays-ionis-pharma-75-million-for-successful-late-stage-nusinersen-data'},
      {text: 'BioPharma Dive. Biogen eyes quick launch for SMA drug. November 7, 2016 (CHERISH interim; filings).', url: 'https://www.biopharmadive.com/news/biogen-nusinersen-sma-phase3-fda/429867/'},
      {text: 'Biogen Inc. Form 10-K for 2017, 2019, 2021, 2023 and 2025 (Spinraza revenue, royalties, option exercise, milestones, PRV sale, high-dose regimen); Form 10-Q for Q2 2026 (US high-dose approval, salanersen).', url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000875045&type=10-K'},
      {text: 'CBS News. Biogen\'s new drug Spinraza will cost $750,000 per patient. December 29, 2016.', url: 'https://www.cbsnews.com/news/the-cost-of-biogens-new-drug-spinraza-750000-per-patient/'},
      {text: 'NPR / Kaiser Health News. Drug puts a $750,000 "price tag on life." August 2017.', url: 'https://www.npr.org/sections/health-shots/2017/08/01/540100976/drug-puts-a-750-000-price-tag-on-life'},
      {text: 'Boston Globe. At a UMass lab, a eureka moment; The new price of hope. December 16, 2017.', url: 'https://www.bostonglobe.com/business/2017/12/16/spinrazasidecopy/CgWVLcXzZNI3b8nPAyWzHL/story.html'},
      {text: 'STAT. For UMass Medical School, Spinraza sales add millions to the budget. July 30, 2018.', url: 'https://www.statnews.com/2018/07/30/spinraza-umass-medical-royalties/'},
      {text: 'Knowledge Ecology International. Request to HHS OIG to investigate failure to disclose federal funding in nusinersen patents. January 2017.', url: 'https://www.keionline.org/23249'},
      {text: 'Cure SMA. Breakthrough Prize awarded to Adrian Krainer and Frank Bennett (includes quotes and seed-funding acknowledgements). October 17, 2018.', url: 'https://www.curesma.org/breakthrough-prize-awarded-to-adrian-krainer-and-frank-bennett-for-sma-research-leading-to-spinraza/'},
      {text: 'Cure SMA. Our history; Newborn screening for SMA.', url: 'https://www.curesma.org/our-history/'},
      {text: 'SMA Foundation. About us (founding, research spending, model).', url: 'https://smafoundation.org/about-us/'},
      {text: 'ICER. Assessment finds Spinraza and Zolgensma provide substantial health benefits (draft evidence report, Feb 22, 2019) and Final report (Apr 3, 2019).', url: 'https://icer.org/assessment/spinal-muscular-atrophy-2019/'},
      {text: 'Mendell JR, et al. Single-dose gene-replacement therapy for spinal muscular atrophy. NEJM 2017.', url: 'https://pubmed.ncbi.nlm.nih.gov/29091557/'},
      {text: 'FDA. FDA approves innovative gene therapy to treat pediatric patients with SMA. May 24, 2019.', url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-innovative-gene-therapy-treat-pediatric-patients-spinal-muscular-atrophy-rare-disease'},
      {text: 'Journal of Managed Care & Specialty Pharmacy 2021. Gene therapy may not be as expensive as people think (Zolgensma $2.125 million price).', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10391299/'},
      {text: 'FDA. FDA approves oral treatment for spinal muscular atrophy (Evrysdi). August 7, 2020.', url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-oral-treatment-spinal-muscular-atrophy'},
      {text: 'Ratni H, et al. Discovery of risdiplam. Journal of Medicinal Chemistry 2018.', url: 'https://pubmed.ncbi.nlm.nih.gov/30044619/'},
      {text: 'Wikipedia. Nusinersen (reimbursement decisions in England, Norway and China, with cited sources).', url: 'https://en.wikipedia.org/wiki/Nusinersen'},
      {text: 'Bloomberg Law. Biogen patent suits target Somerset and Cipla copies of Spinraza. 2026.', url: 'https://news.bloomberglaw.com/ip-law/biogen-patent-suit-targets-somersets-copy-of-spinraza-therapy'},
    ]},
  ],
});
