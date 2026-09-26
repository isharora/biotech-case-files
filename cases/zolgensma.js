// Zolgensma (onasemnogene abeparvovec): case file. See GUIDE.md for the contract.
registerCase({
  id: 'zolgensma', kind: 'success',
  brand: 'Zolgensma', generic: 'onasemnogene abeparvovec', company: 'AveXis, then Novartis',
  tagline: `One hour-long infusion of a harmless virus carrying a single [[gene]] turned the most common genetic killer of infants into a disease many children now outgrow, and forced the industry to price a medicine you only ever take once.`,
  chips: [['Disease', '[[spinal muscular atrophy]]'], ['Modality', '[[gene therapy]] ([[AAV9]])'], ['Target', 'Replaces [[SMN1]]'], ['Approved', 'May 2019 (US)']],
  readingTime: 40,
  stats: [
    {v: '15 of 15', l: 'infants in the first trial alive without permanent ventilation at 20 months, versus 8% in a historical group', n: 'Mendell et al., NEJM 2017'},
    {v: '$2.125M', l: 'US list price at launch in 2019, then the most expensive drug in the world', n: 'Novartis; STAT'},
    {v: '$8.7B', l: 'what Novartis paid for AveXis in 2018, before approval', n: 'Novartis, April 2018'},
    {v: '$1.37B', l: 'peak annual sales (2022); about $1.2B a year since', n: 'Novartis financial reports'},
    {v: '4,500+', l: 'patients treated in 58 countries by the end of 2024', n: 'Novartis Q4 2024 report'},
    {v: '1', l: 'dose, ever: the immune response to the virus rules out a second one', n: 'FDA review, 2019'},
  ],
  emblem: `<svg viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="132" class="il-1s"/>
    <polygon points="150,52 235,101 235,199 150,248 65,199 65,101" class="il-1"/>
    <path d="M150 52 L150 150 M235 101 L150 150 M235 199 L150 150 M150 248 L150 150 M65 199 L150 150 M65 101 L150 150" class="il-line" style="stroke: var(--il-paper); stroke-width: 2; opacity: .55" fill="none"/>
    <circle cx="150" cy="150" r="54" class="il-paper"/>
    <path d="M112 132 C 126 112, 140 112, 150 132 S 174 152, 188 132" fill="none" class="st-2" stroke-width="6" stroke-linecap="round"/>
    <path d="M112 168 C 126 188, 140 188, 150 168 S 174 148, 188 168" fill="none" class="st-4" stroke-width="6" stroke-linecap="round"/>
    <path d="M124 124 V176 M150 132 V168 M176 124 V176" class="il-line2" fill="none"/>
    <circle cx="232" cy="236" r="26" class="il-3"/><text x="232" y="243" text-anchor="middle" class="il-white" style="font-size: 20px">1×</text>
  </svg>`,
  facts: {start: 2009, firstHuman: 2014, approval: 2019, end: null, peakSalesB: 1.37, pivotalN: 22,
    area: 'rare', modality: 'gene therapy', target: 'SMN1 (gene replacement)'},
  themes: ['pricing', 'manufacturing', 'dealmaking', 'safety'],
  glossary: {
    'spinal muscular atrophy': 'SMA: an inherited disease in which the motor neurons of the spinal cord die because the body lacks enough SMN protein. Muscles weaken and waste. The most severe form (type 1) begins in the first months of life.',
    'SMA': 'Spinal muscular atrophy: an inherited disease in which motor neurons die for lack of SMN protein.',
    'SMA type 1': 'The most severe, infant-onset form of SMA. Babies never sit alone; without treatment most die or need permanent breathing support before age 2.',
    'SMN1': 'Survival motor neuron 1: the gene that makes most of the body\'s SMN protein. People with SMA have lost both copies.',
    'SMN2': 'A near-identical backup of SMN1. Because of a one-letter difference, most of its RNA is spliced wrongly and only a small fraction makes working SMN protein. More SMN2 copies mean milder SMA.',
    'SMN protein': 'Survival motor neuron protein, a housekeeping protein every cell needs. Motor neurons are the cells most sensitive to running short of it.',
    'AAV9': 'Adeno-associated virus serotype 9: a natural AAV variant whose protein shell lets it travel from the bloodstream into the brain and spinal cord, especially in newborns.',
    'serotype': 'A natural variant of a virus with a differently shaped protein shell. Different AAV serotypes stick to different tissues.',
    'capsid': 'The protein shell of a virus. In AAV it is made of 60 protein subunits and decides which cells the virus can enter.',
    'transgene': 'The gene a gene therapy delivers. In Zolgensma, a working copy of the human SMN1 coding sequence.',
    'promoter': 'A stretch of DNA in front of a gene that acts as its on-switch, telling the cell how strongly and where to read it.',
    'cDNA': 'Complementary DNA: a compact copy of a gene\'s coding sequence with the non-coding pieces removed, small enough to fit inside a viral vector.',
    'self-complementary': 'A vector design in which the DNA folds back on itself into a ready-to-read double strand, so the cell does not have to build the second strand first. Faster, stronger expression, at the cost of carrying half as much genetic cargo.',
    'ITR': 'Inverted terminal repeat: short DNA sequences at each end of the AAV genome, the only viral DNA kept in a vector. They let the DNA be packaged into the capsid.',
    'episome': 'A loop of DNA that sits in the cell nucleus alongside the chromosomes without becoming part of them. AAV vector DNA mostly stays episomal.',
    'blood-brain barrier': 'The tightly sealed lining of blood vessels in the brain and spinal cord that keeps most molecules and microbes out of the nervous system.',
    'intrathecal': 'Injected into the fluid around the spinal cord, usually by lumbar puncture.',
    'vector genomes': 'The unit of dose for viral gene therapies (vg): the number of viral particles that actually contain the therapeutic DNA.',
    'titer': 'The concentration of a viral product, for example vector genomes per millilitre. Measuring it accurately is surprisingly hard.',
    'neutralizing antibodies': 'Antibodies that bind a virus and stop it entering cells. Antibodies against AAV9, from a past natural infection or a previous dose, can block the therapy.',
    'aminotransferases': 'Liver enzymes (ALT and AST) that leak into the blood when liver cells are damaged. The standard early warning of liver injury.',
    'corticosteroid': 'A steroid drug, such as prednisolone, that dampens the immune system and inflammation.',
    'prednisolone': 'A corticosteroid. Zolgensma patients take it for at least 30 days, starting the day before infusion, to dampen the immune reaction in the liver.',
    'thrombotic microangiopathy': 'TMA: tiny blood clots forming in small vessels, using up platelets, destroying red cells and damaging the kidneys. A rare, dangerous reaction reported after Zolgensma.',
    'CHOP INTEND': 'A 0 to 64 point scale of motor function designed for very weak infants. Untreated babies with SMA type 1 almost never score above 40 after 6 months of age.',
    'HFMSE': 'Hammersmith Functional Motor Scale Expanded: a 66-point motor function scale used for older children with SMA who can sit.',
    'natural history': 'How a disease progresses without treatment, recorded in observational studies. Used as the comparison group when a placebo arm would be unethical.',
    'historical control': 'A comparison group drawn from past patients rather than randomized at the same time. Cheaper and faster, but vulnerable to differences in who was included and how they were cared for.',
    'single-arm trial': 'A trial in which every participant gets the treatment and there is no concurrent control group.',
    'presymptomatic': 'Treated after a genetic diagnosis but before any symptoms appear, typically found by newborn screening.',
    'newborn screening': 'A heel-prick blood test on every newborn that looks for treatable diseases. SMA was added to the US recommended panel in July 2018.',
    'HEK293': 'A human embryonic kidney cell line, grown in factories to manufacture viral vectors and some proteins.',
    'plasmid': 'A small circle of DNA that can be made in bulk in bacteria. AAV factories feed cells several plasmids carrying the pieces needed to build the virus.',
    'triple transfection': 'The standard way to make AAV: getting three plasmids (the therapeutic gene, the AAV packaging genes, and helper genes) into the same factory cells at once.',
    'empty capsid': 'A viral shell that was assembled without DNA inside. Useless as a medicine, and it adds to the immune load, so manufacturers try to remove it.',
    'potency assay': 'A test that checks each manufactured batch does what it should biologically. For Zolgensma one such test measured how long treated SMA mice survived.',
    'Form 483': 'The list of problems an FDA inspector hands a company at the end of an inspection. It can lead to warnings or sanctions, or to no action.',
    'dorsal root ganglia': 'Clusters of sensory nerve cells beside the spinal cord. High doses of AAV can inflame them, seen in monkey studies.',
    'nusinersen': 'The generic name of Spinraza, an antisense drug injected into spinal fluid every four months that makes the SMN2 backup gene produce more working protein.',
    'risdiplam': 'The generic name of Evrysdi, a daily oral small molecule that, like nusinersen, corrects SMN2 splicing. First US approval August 2020.',
    'outcomes-based agreement': 'A contract in which the manufacturer refunds part of a drug\'s price if the patient does not reach agreed results.',
    'managed access program': 'A company scheme giving a medicine to patients where it is not yet approved or paid for, outside a trial.',
    'discount rate': 'The annual rate used to convert future payments into today\'s money. A dollar paid in ten years is worth less than a dollar paid now.',
    'priority review voucher': 'A transferable FDA coupon, earned by approving a drug for a rare pediatric disease, that buys a faster review for any future drug. Vouchers have sold for around $100 million.',
    'Process A': 'The European regulators\' name for the single research-lab batch of Zolgensma used in the first trial, which they judged not comparable to the commercial product.',
    'Process B': 'The scaled-up commercial manufacturing process for Zolgensma, used for all later batches. European regulators concluded it could not be shown comparable to the original Process A batch, so the benefit-risk judgment had to rest on trials using Process B material.',
  },
  sections: [
    // ---------------- 1. COLD OPEN ----------------
    {type: 'story', kicker: 'Columbus, Ohio, May 2014', title: 'An hour in a vein', tocTitle: 'Cold open',
      html: `<p>The first baby to receive the treatment that would become Zolgensma was about six months old. Like every infant in the study, the child had [[SMA type 1]], the most severe form of [[spinal muscular atrophy]]. Babies with it are born looking healthy. Within weeks their muscles go slack. They cannot lift their heads. They never sit up. Swallowing and then breathing fail, because the nerve cells that tell those muscles to move are dying one by one.</p>
      <p>Parents who had searched online knew the numbers that the doctors at Nationwide Children's Hospital knew. In one study of untreated infants like this, half had died or needed breathing support around the clock by about 10 and a half months of age. By 20 months, only 8% were alive and still breathing on their own. There was no approved treatment at all in 2014.</p>
      <p>What the child received that day did not look like much: a bag of salt water, infused into a vein in an arm or leg over about an hour. Suspended in it were trillions of tiny particles built from a harmless virus. Each one carried the same thing, a working copy of the single gene the child was missing. The idea was simple enough to explain to a parent in a sentence. The virus is a delivery truck. The gene is the parcel. The address is the spinal cord.</p>
      <p>Whether a virus dripped into an arm could reach the spinal cord of a human baby, deliver its parcel, and keep it working for years had never been shown. The science behind it was about five years old and had been done in mice. The dose was, in effect, a guess scaled up from those mice. The neurologist running the study, Jerry Mendell, and the scientist who had designed the virus, Brian Kaspar, would enrol 15 children over the next 19 months.</p>
      <p>By August 2017 every one of the 15 was alive and none needed permanent breathing support. Eleven of the 12 who got the higher dose could sit on their own. Two were walking. None of this had ever been recorded in untreated children with SMA type 1.</p>
      <p>This is the story of how that happened. It is also a story about what came after: a Swiss drug giant paying $8.7 billion for a company with one product and no approval, a price of $2.125 million for a single infusion, a lottery for free doses, falsified mouse data disclosed a month after approval, children who died of liver failure, and a whole field that discovered that curing people once is a very hard business.</p>`},

    // ---------------- 2. DISEASE FROM ZERO ----------------
    {type: 'story', kicker: 'The disease', title: 'SMA from zero', tocTitle: 'SMA from zero',
      html: `<p>To move a finger, your brain sends a signal down your spinal cord. There it is handed to a [[motor neuron]], a nerve cell whose body sits in the spinal cord and whose long wire, the axon, runs all the way out to a muscle. When the motor neuron fires, the muscle contracts. If the motor neuron dies, the muscle it served goes quiet and wastes away. Nothing else can take over the job.</p>
      <p>In spinal muscular atrophy, motor neurons die because they run short of one [[protein]], called [[SMN protein|SMN]] (survival motor neuron). Every cell in the body uses SMN for basic housekeeping, but motor neurons seem to be the most sensitive to running low. SMA is one of the most common serious inherited diseases of infancy: it affects about 1 in 10,000 babies, and about 1 in 54 people silently carry one broken copy of the gene.</p>
      <p>The gene responsible was pinned down in 1995 by Judith Melki's group in Paris. It is called [[SMN1]]. Everyone inherits two copies, one from each parent. A child with SMA has lost both, usually because a chunk of DNA containing the gene is simply missing. That makes SMA recessive: carriers with one working copy are fine, and when two carriers have a child there is a one-in-four chance the child gets two broken copies.</p>
      <h3>The backup gene</h3>
      <p>Humans have a quirk that explains why SMA is not always fatal. Next to SMN1 sits a near-identical duplicate, [[SMN2]]. It differs by a single DNA letter in a critical spot. That one letter causes the cell's RNA editing machinery (a process called [[splicing]]) to skip a piece of the message most of the time, so SMN2 produces mostly a short, unstable protein that is quickly destroyed. Only a small fraction of its output is the real thing.</p>
      <p>People carry different numbers of SMN2 copies, and the count matters enormously. With only two copies, a baby almost certainly develops type 1 disease (one study put the risk at 97%). Three or four copies usually means a later, milder course: type 2 children who sit but never walk, or type 3 who walk and then gradually lose strength. That is why the SMA types are really points on a spectrum set largely by how much SMN protein the backup genes can scrape together.</p>
      <p>The first drug for SMA, Spinraza (nusinersen), approved in December 2016, works entirely on that backup. It is a short strand of synthetic genetic material that corrects the splicing mistake so SMN2 makes more working protein. The <a href="case.html?id=spinraza">Spinraza case file</a> tells that story. Zolgensma takes the opposite approach: forget the backup and put the missing original back.</p>
      <h3>What care looked like before</h3>
      <p>Before 2016, care for type 1 babies was supportive: feeding tubes when swallowing failed, machines to help them cough, masks to push air into their lungs at night and then all day, and eventually the choice between a tracheostomy with a ventilator and palliative care. The clock was set by the motor neurons. Once they die, they are gone. Every week of delay costs neurons that no drug can bring back, and that single fact shapes everything in this case: the trials, the price, the push for newborn screening, and the rush to treat.</p>`},

    {type: 'figure', title: 'What goes wrong in SMA', intro: 'Hover or tap each part. The problem starts with a missing gene and ends with a silent muscle.',
      svg: `<svg viewBox="0 0 900 430">
        <g data-part="cord">
          <ellipse cx="170" cy="150" rx="130" ry="110" class="il-8s il-line"/>
          <path d="M120 80 C 150 110, 150 130, 158 150 C 150 170, 150 190, 120 220 C 95 200, 90 170, 110 150 C 90 130, 95 100, 120 80 Z M220 80 C 190 110, 190 130, 182 150 C 190 170, 190 190, 220 220 C 245 200, 250 170, 230 150 C 250 130, 245 100, 220 80 Z" class="il-3s il-line"/>
          <text x="170" y="285" text-anchor="middle" class="il-text">Spinal cord (cross-section)</text>
        </g>
        <g data-part="neuron">
          <circle cx="228" cy="192" r="18" class="il-3"/>
          <path d="M214 180 l-14 -14 M216 202 l-16 10 M234 176 l4 -18" class="st-3" stroke-width="3" stroke-linecap="round" fill="none"/>
          <text x="262" y="222" class="il-text-2">motor neuron</text>
        </g>
        <g data-part="axon">
          <path d="M246 192 C 330 192, 380 150, 470 150 C 540 150, 560 170, 610 170" class="st-3" stroke-width="4" fill="none" stroke-linecap="round"/>
          <path d="M246 192 C 330 192, 380 150, 470 150 C 540 150, 560 170, 610 170" class="il-line flow" fill="none" style="stroke: var(--il-4)"/>
          <text x="420" y="135" text-anchor="middle" class="il-text-2">axon: a wire up to a meter long</text>
        </g>
        <g data-part="muscle">
          <rect x="612" y="110" width="230" height="120" rx="50" class="il-2s il-line"/>
          <path d="M640 140 H815 M640 160 H815 M640 180 H815 M640 200 H815" class="st-2" stroke-width="2" fill="none"/>
          <text x="727" y="255" text-anchor="middle" class="il-text">Muscle</text>
        </g>
        <g data-part="genes">
          <rect x="40" y="318" width="820" height="96" rx="16" class="il-paper il-line"/>
          <text x="62" y="346" class="il-title">Chromosome 5</text>
          <rect x="200" y="330" width="180" height="30" rx="8" class="il-7s il-line"/>
          <text x="290" y="351" text-anchor="middle" class="il-text">SMN1</text>
          <path d="M210 330 L370 360 M370 330 L210 360" class="st-7" stroke-width="2.5" opacity=".45"/>
          <text x="290" y="386" text-anchor="middle" class="il-text-2">both copies missing in SMA</text>
          <rect x="470" y="330" width="180" height="30" rx="8" class="il-3s il-line"/>
          <text x="560" y="351" text-anchor="middle" class="il-text">SMN2 (backup)</text>
          <text x="560" y="386" text-anchor="middle" class="il-text-2">mostly makes a short, broken protein</text>
        </g>
        <g data-part="copies">
          <rect x="690" y="330" width="44" height="30" rx="8" class="il-3s il-line"/><rect x="742" y="330" width="44" height="30" rx="8" class="il-3s il-line"/><rect x="794" y="330" width="44" height="30" rx="8" class="il-3s il-line il-dash"/>
          <text x="764" y="386" text-anchor="middle" class="il-text-2">copy number varies</text>
        </g>
        <g data-part="protein">
          <circle cx="300" cy="70" r="9" class="il-4"/><circle cx="322" cy="58" r="9" class="il-4" opacity=".4"/><circle cx="342" cy="78" r="9" class="il-4" opacity=".2"/>
          <text x="360" y="62" class="il-text-2">SMN protein runs low</text>
        </g>
      </svg>`,
      hotspots: {
        cord: {title: 'Spinal cord', text: 'The butterfly-shaped gray matter holds the bodies of the motor neurons. In SMA the ones in the front "horns" of the butterfly die first.'},
        neuron: {title: 'Motor neuron', text: 'The cell that SMA kills. Its body sits in the spinal cord; its axon runs to a muscle. Once it dies it is not replaced, which is why timing matters so much.'},
        axon: {title: 'Axon', text: 'The long wire carrying the "contract" signal to the muscle. In an adult, a motor axon to the foot can be about a meter long, a huge structure for one cell to maintain.'},
        muscle: {title: 'Muscle', text: 'The muscle itself is not the primary problem. It weakens and wastes (atrophies) because it loses its nerve supply. The breathing and swallowing muscles are the ones that make type 1 fatal.'},
        genes: {title: 'SMN1 and SMN2', text: 'SMN1 makes most of the body\'s SMN protein. In about 19 of 20 cases a stretch containing it is deleted on both chromosomes. SMN2 differs by one letter that makes most of its RNA skip a crucial section during [[splicing]].'},
        copies: {title: 'SMN2 copy number', text: 'Two copies of SMN2 almost always means type 1. Three or four usually mean milder disease. Spinraza and Evrysdi boost SMN2; Zolgensma ignores it and adds a working SMN1.'},
        protein: {title: 'Too little SMN protein', text: 'Every cell needs some SMN protein. Motor neurons are the most vulnerable to shortage. The whole therapeutic question in SMA is how to get more SMN into motor neurons, fast.'},
      },
      caption: 'Schematic, not to scale. Color key used throughout: nerve cells aqua, muscle and disease orange/red, the therapy blue, proteins yellow.'},

    // ---------------- 3. GENE THERAPY FROM ZERO ----------------
    {type: 'story', kicker: 'The key insight', title: 'Gene therapy from zero: the courier problem', tocTitle: 'Gene therapy from zero',
      html: `<p>If a disease is caused by a missing gene, the obvious fix is to put the gene back. The hard part has always been delivery. DNA is a large, fragile molecule. Swallowed, it is digested. Injected, it is chewed up in the blood and cannot get through the fatty membrane that wraps every cell, let alone into the nucleus where genes are read.</p>
      <p>Viruses solved this problem long before we did. A [[virus]] is little more than genetic instructions packed inside a protein shell, the [[capsid]]. It survives the blood, sticks to particular cells, gets itself swallowed, and delivers its genes to the nucleus. The idea of [[gene therapy]] is to hollow out a virus, remove the genes that let it copy itself, and pack a therapeutic gene inside instead. The engineered virus is called a [[vector]].</p>
      <h3>Why AAV</h3>
      <p>The favorite courier for this job is [[AAV|adeno-associated virus]], or AAV. It is small, it is not known to cause disease in people, and it cannot copy itself even in its natural form. It needs a second virus to help it. Stripped for gene therapy, it keeps only its shell and two short "handles" at the ends of its DNA, called [[ITR|ITRs]], that let the DNA be packed into the shell. Everything else is replaced by the therapeutic cargo.</p>
      <p>AAV also has a useful habit. Its delivered DNA mostly does not stitch itself into the cell's chromosomes. It floats in the nucleus as a separate loop, an [[episome]]. In a cell that divides, the loop gets diluted away over time. But motor neurons do not divide. A loop delivered to a motor neuron in infancy can in principle keep working for the life of the cell. That is the biological basis for a one-time treatment.</p>
      <p>The trade-off is size. The AAV shell holds only about 4.7 thousand DNA letters. Zolgensma's cargo is about 4.6 thousand, which is why it carries a trimmed version of the gene, called a [[cDNA]], rather than the full SMN1 gene, which spans about 20 thousand letters in the genome.</p>
      <h3>The address problem, and AAV9</h3>
      <p>There are many natural variants of AAV, called [[serotype|serotypes]], each with a slightly different shell that sticks to different tissues. For SMA the address was brutally difficult: motor neurons are inside the spinal cord, behind the [[blood-brain barrier]], the tight lining of the blood vessels that keeps most things in the blood out of the nervous system. Earlier gene therapy work on the brain meant drilling holes in the skull and injecting directly, which reaches only the cells near the needle.</p>
      <p>In 2009, Kevin Foust, Brian Kaspar and colleagues at Nationwide Children's Hospital and Ohio State University reported in <i>Nature Biotechnology</i> that one serotype, [[AAV9]], behaved differently. Injected into a vein of newborn mice, it spread widely into the brain and, crucially, into motor neurons all along the spinal cord. In adult mice it mostly reached support cells instead. A commentary on the paper was titled "Crossing the Rubicon". How exactly AAV9 gets across is still debated; other researchers argued at the time that the newborn barrier is not simply leaky. But the practical point was clear. A single intravenous injection could, in principle, reach every motor neuron in a young body.</p>
      <p>That set up the SMA plan. SMA hits infants, whose neurons AAV9 reaches best. SMN protein is needed everywhere, so a vector that also lands in muscle, heart and other organs is a feature rather than a bug. And the gene is small enough to fit.</p>
      <aside class="note"><b>An important footnote.</b> A 2010 follow-up paper by the same group, reporting that the vector rescued SMA mice, was retracted by <i>Nature Biotechnology</i> in October 2022 after the authors themselves reported errors in a key survival chart. The original data showed that only one treated mouse, not six, survived beyond 250 days. The authors disagreed with the retraction. Later clinical results did not depend on that figure, but it is a reminder that foundational papers are not always as solid as their citation counts suggest. The 2010 paper had been cited more than 500 times.</aside>`},

    {type: 'figure', title: 'Anatomy of the Zolgensma vector', intro: 'A virus shell with the viral genes removed and a human gene packed inside. Hover or tap each part.',
      svg: `<svg viewBox="0 0 900 430">
        <g data-part="capsid">
          <polygon points="190,70 305,136 305,268 190,334 75,268 75,136" class="il-1"/>
          <path d="M190 70 L190 202 M305 136 L190 202 M305 268 L190 202 M190 334 L190 202 M75 268 L190 202 M75 136 L190 202" fill="none" style="stroke: var(--il-paper); stroke-width: 2; opacity: .5"/>
          <text x="190" y="372" text-anchor="middle" class="il-text">AAV9 capsid (protein shell)</text>
          <text x="190" y="392" text-anchor="middle" class="il-text-2">about 25 nm: 1/3,000 the width of a hair</text>
        </g>
        <g data-part="inside">
          <circle cx="190" cy="202" r="58" class="il-paper"/>
          <path d="M150 190 C 165 170, 180 170, 190 190 S 215 210, 230 190" fill="none" class="st-2" stroke-width="5" stroke-linecap="round"/>
          <path d="M150 214 C 165 234, 180 234, 190 214 S 215 194, 230 214" fill="none" class="st-4" stroke-width="5" stroke-linecap="round"/>
        </g>
        <path d="M250 202 C 300 202, 320 150, 370 150" class="il-line il-dash" fill="none"/>
        <text x="600" y="60" text-anchor="middle" class="il-title">The DNA cargo, unfolded (about 4,600 letters)</text>
        <g data-part="itr">
          <rect x="380" y="130" width="40" height="40" rx="8" class="il-8"/>
          <rect x="800" y="130" width="40" height="40" rx="8" class="il-8"/>
          <text x="400" y="195" text-anchor="middle" class="il-small">ITR</text>
          <text x="820" y="195" text-anchor="middle" class="il-small">ITR</text>
        </g>
        <g data-part="enhancer">
          <rect x="425" y="130" width="90" height="40" rx="8" class="il-6s il-line"/>
          <text x="470" y="155" text-anchor="middle" class="il-text">CMV enh.</text>
        </g>
        <g data-part="promoter">
          <rect x="520" y="130" width="90" height="40" rx="8" class="il-6"/>
          <text x="565" y="155" text-anchor="middle" class="il-white">CB promoter</text>
          <path d="M565 118 V100 H600" class="st-6" stroke-width="3" fill="none"/><path d="M596 94 L606 100 L596 106 Z" class="il-6"/>
        </g>
        <g data-part="smn">
          <rect x="615" y="130" width="180" height="40" rx="8" class="il-3"/>
          <text x="705" y="155" text-anchor="middle" class="il-white">human SMN1 cDNA</text>
        </g>
        <g data-part="selfcomp">
          <path d="M400 250 H790" class="st-2" stroke-width="5" stroke-linecap="round"/>
          <path d="M400 280 H790" class="st-4" stroke-width="5" stroke-linecap="round"/>
          <path d="M790 250 C 830 250, 830 280, 790 280" class="st-2" stroke-width="5" fill="none"/>
          <path d="M430 250 V280 M470 250 V280 M510 250 V280 M550 250 V280 M590 250 V280 M630 250 V280 M670 250 V280 M710 250 V280 M750 250 V280" class="il-line" fill="none"/>
          <text x="595" y="315" text-anchor="middle" class="il-text">Self-complementary: the strand folds back on itself</text>
          <text x="595" y="335" text-anchor="middle" class="il-text-2">into a ready-to-read double helix</text>
        </g>
        <g data-part="missing">
          <rect x="420" y="360" width="360" height="44" rx="10" class="il-bg il-line il-dash"/>
          <text x="600" y="387" text-anchor="middle" class="il-text-2">Not inside: any viral genes (it cannot copy itself)</text>
        </g>
      </svg>`,
      hotspots: {
        capsid: {title: 'The AAV9 capsid', text: 'Sixty protein subunits (three versions called VP1, VP2 and VP3) assembled into a 20-sided shell. The shell, not the DNA, decides where the vector goes. AAV9\'s shell can reach motor neurons from the blood. It is also what the immune system learns to recognize.'},
        inside: {title: 'The payload', text: 'Only the DNA cargo is inside. No viral genes, so the particle can enter a cell once and deliver its gene, but it cannot make more of itself.'},
        itr: {title: 'Inverted terminal repeats (ITRs)', text: 'The only pieces of the original virus DNA that remain: short handles at each end that let the DNA be packaged. In Zolgensma one ITR is deliberately altered so the strand folds back into a double strand.'},
        enhancer: {title: 'CMV enhancer', text: 'A booster sequence borrowed from cytomegalovirus that turns up the volume on the promoter next to it.'},
        promoter: {title: 'Chicken beta-actin (CB) promoter', text: 'The on-switch. A promoter from a gene that is active in almost every cell, so SMN gets made strongly and in every tissue the vector reaches, not just neurons. The team chose it for rapid and sustained expression.'},
        smn: {title: 'The transgene: human SMN1', text: 'A compact coding copy (cDNA) of the human SMN1 gene. Once in the nucleus, the cell reads it like any of its own genes and makes normal, full-length SMN protein. It does not repair the broken genes; it adds a working copy alongside them.'},
        selfcomp: {title: 'Self-complementary design', text: 'Normal AAV carries a single strand of DNA, and the cell must build the second strand before it can read the gene, which is slow. Zolgensma\'s DNA folds into a double strand on arrival, so expression starts faster and stronger. The cost: the cargo space is halved, which only works because SMN is small.'},
        missing: {title: 'What was taken out', text: 'The virus genes needed to copy itself and build new shells are supplied only in the factory, on separate DNA circles, and never packaged. This is why AAV vectors are called non-replicating.'},
      },
      caption: 'Construct details from the FDA and EMA reviews: a self-complementary AAV9 vector carrying human SMN cDNA under a CMV enhancer and chicken beta-actin hybrid promoter, genome about 4.6 kb, capsid of 60 VP1/VP2/VP3 subunits.'},

    // ---------------- 4. MECHANISM ----------------
    {type: 'mechanism', title: 'How one infusion reaches a motor neuron', tocTitle: 'How it works',
      intro: 'Step through the journey of a single dose, from the arm vein to a working protein, and why it can only be given once.',
      svg: `<svg viewBox="0 0 760 440">
        <g data-part="vessel">
          <rect x="20" y="40" width="720" height="70" rx="35" class="il-7s il-line"/>
          <text x="40" y="30" class="il-text-2">Bloodstream</text>
        </g>
        <g data-part="capsids">
          <polygon points="80,62 92,69 92,83 80,90 68,83 68,69" class="il-1"/>
          <polygon points="130,70 142,77 142,91 130,98 118,91 118,77" class="il-1"/>
          <polygon points="178,56 190,63 190,77 178,84 166,77 166,63" class="il-1"/>
          <polygon points="226,68 238,75 238,89 226,96 214,89 214,75" class="il-1"/>
          <polygon points="270,58 282,65 282,79 270,86 258,79 258,65" class="il-1"/>
        </g>
        <g data-part="liver">
          <path d="M40 180 C 60 150, 200 140, 230 170 C 250 195, 220 250, 170 260 C 110 272, 30 240, 40 180 Z" class="il-2s il-line"/>
          <text x="135" y="290" text-anchor="middle" class="il-text">Liver</text>
        </g>
        <g data-part="liverhit">
          <polygon points="110,190 120,196 120,208 110,214 100,208 100,196" class="il-1"/>
          <polygon points="150,210 160,216 160,228 150,234 140,228 140,216" class="il-1"/>
          <polygon points="186,184 196,190 196,202 186,208 176,202 176,190" class="il-1"/>
          <path d="M110 120 V180 M150 120 V200 M186 120 V176" class="st-1 flow" stroke-width="2" fill="none"/>
        </g>
        <g data-part="steroid">
          <rect x="40" y="310" width="190" height="56" rx="12" class="il-paper il-line"/>
          <text x="135" y="334" text-anchor="middle" class="il-text">Prednisolone</text>
          <text x="135" y="354" text-anchor="middle" class="il-text-2">calms liver inflammation</text>
        </g>
        <g data-part="bbb">
          <path d="M300 120 V420 M310 120 V420" class="st-3" stroke-width="3"/>
          <text x="318" y="140" class="il-text-2">blood-brain</text><text x="318" y="156" class="il-text-2">barrier</text>
        </g>
        <g data-part="neuron">
          <path d="M470 150 C 560 130, 640 170, 650 240 C 660 320, 580 360, 500 350 C 420 340, 380 290, 390 230 C 396 190, 420 160, 470 150 Z" class="il-3s il-line2"/>
          <path d="M420 340 L400 420 M430 170 L400 130 M640 200 L700 160" class="st-3" stroke-width="5" stroke-linecap="round" fill="none"/>
          <text x="545" y="378" text-anchor="middle" class="il-text">Motor neuron (spinal cord)</text>
        </g>
        <g data-part="nucleus">
          <ellipse cx="530" cy="245" rx="70" ry="55" class="il-paper il-line"/>
          <text x="530" y="212" text-anchor="middle" class="il-small">nucleus</text>
        </g>
        <g data-part="capsidIn">
          <circle cx="445" cy="230" r="17" class="il-3s il-line il-dash"/>
          <polygon points="445,220 454,225 454,235 445,240 436,235 436,225" class="il-1"/>
        </g>
        <g data-part="dna">
          <ellipse cx="515" cy="250" rx="22" ry="16" fill="none" class="st-2" stroke-width="4"/>
          <ellipse cx="515" cy="250" rx="15" ry="9" fill="none" class="st-4" stroke-width="3"/>
          <text x="515" y="286" text-anchor="middle" class="il-small">episome</text>
        </g>
        <g data-part="mrna">
          <path d="M540 248 C 550 238, 560 258, 570 248 S 590 238, 600 248 S 620 258, 632 248" class="st-2" stroke-width="3" fill="none"/>
        </g>
        <g data-part="protein">
          <circle cx="620" cy="300" r="8" class="il-4"/><circle cx="600" cy="318" r="8" class="il-4"/><circle cx="636" cy="276" r="8" class="il-4"/><circle cx="580" cy="306" r="8" class="il-4"/>
          <text x="660" y="312" class="il-text-2">SMN protein</text>
        </g>
        <g data-part="signal">
          <path d="M702 158 C 720 200, 720 260, 700 300" class="st-4 flow" stroke-width="3" fill="none"/>
          <rect x="660" y="300" width="80" height="50" rx="20" class="il-2s il-line"/>
          <text x="700" y="330" text-anchor="middle" class="il-small">muscle</text>
        </g>
        <g data-part="immune">
          <path d="M360 90 V75 M360 75 L350 62 M360 75 L370 62" class="st-7" stroke-width="4" stroke-linecap="round" fill="none"/>
          <path d="M420 90 V75 M420 75 L410 62 M420 75 L430 62" class="st-7" stroke-width="4" stroke-linecap="round" fill="none"/>
          <path d="M480 90 V75 M480 75 L470 62 M480 75 L490 62" class="st-7" stroke-width="4" stroke-linecap="round" fill="none"/>
          <path d="M540 90 V75 M540 75 L530 62 M540 75 L550 62" class="st-7" stroke-width="4" stroke-linecap="round" fill="none"/>
          <text x="600" y="82" class="il-text">anti-AAV9 antibodies</text>
        </g>
      </svg>`,
      steps: [
        {title: '1. The infusion', text: 'The dose is set by weight: 1.1 × 10<sup>14</sup> [[vector genomes]] per kilogram. For a typical 5.5 kg infant that is about 6 × 10<sup>14</sup> particles, roughly 30 mL of product, diluted and infused into a vein over about an hour. The shells tumble through the bloodstream to every organ.', show: ['vessel', 'capsids'], pulse: ['capsids']},
        {title: '2. Most of it lands in the liver', text: 'The liver filters the blood and soaks up much of the dose. When two treated children who died of other causes were examined, the liver had the highest levels of vector DNA. Liver cells that display viral proteins can be attacked by the immune system, which is why every patient takes [[prednisolone]], a [[corticosteroid]], for at least a month, starting the day before the infusion.', show: ['vessel', 'capsids', 'liver', 'liverhit', 'steroid'], dim: ['capsids'], focus: ['liver']},
        {title: '3. Crossing into the nervous system', text: 'The AAV9 shell can cross the [[blood-brain barrier]] that stops most viruses and drugs, most effectively in infants. A fraction of the dose reaches the spinal cord. Exactly how AAV9 crosses is still being worked out.', show: ['vessel', 'capsids', 'bbb', 'neuron', 'liver'], dim: ['liver'], move: {capsids: 'translate(170px, 150px) scale(0.8)'}, focus: ['bbb']},
        {title: '4. Entering a motor neuron', text: 'A shell sticks to the neuron\'s surface, is swallowed inside a small bubble of membrane, and is carried towards the nucleus. Only a tiny share of all the particles infused will end up in motor neurons, which is one reason the dose is so enormous.', show: ['bbb', 'neuron', 'nucleus', 'capsidIn'], focus: ['capsidIn'], pulse: ['capsidIn']},
        {title: '5. Unpacking in the nucleus', text: 'In the nucleus the shell opens. Because the DNA is [[self-complementary]], it snaps straight into a double strand. It mostly does not join the chromosomes; it sits beside them as a loop, an [[episome]]. Motor neurons do not divide, so the loop is not diluted away.', show: ['bbb', 'neuron', 'nucleus', 'dna'], focus: ['dna']},
        {title: '6. Making SMN protein', text: 'The always-on [[promoter]] tells the cell to read the new gene. The cell copies it into [[mRNA]] and builds normal, full-length [[SMN protein]], the thing the child\'s own genes could not supply. The patient\'s broken SMN1 genes are still broken; the therapy adds a working copy rather than repairing anything.', show: ['bbb', 'neuron', 'nucleus', 'dna', 'mrna', 'protein'], focus: ['protein'], pulse: ['mrna']},
        {title: '7. The neuron survives; the muscle hears it', text: 'With enough SMN, a motor neuron that was still alive stays alive and keeps signaling to its muscle. Neurons that had already died do not come back. That is why the same infusion gives very different results at 3 weeks of age and at 7 months.', show: ['bbb', 'neuron', 'nucleus', 'dna', 'protein', 'signal'], focus: ['signal']},
        {title: '8. The immune system remembers: one dose only', text: 'Within weeks the body makes antibodies against the AAV9 shell. In the first trial, antibody levels rose in every child to at least 100,000 times dilution, often past 800,000. Those [[neutralizing antibodies]] would destroy a second dose before it could deliver anything. The FDA\'s reviewers concluded they are expected to rule out giving any AAV9 therapy again.', show: ['vessel', 'immune', 'bbb', 'neuron', 'nucleus', 'dna', 'protein'], dim: ['neuron', 'nucleus', 'dna', 'protein'], focus: ['immune'], pulse: ['immune']},
      ]},

    {type: 'callout', variant: 'product', heading: 'Like shipping a firmware update over the air, once, to devices you can never touch again',
      html: `<p>A gene therapy looks a lot like an over-the-air update. You package new code (the transgene) with a bootloader (the promoter) inside a delivery envelope (the capsid) that the target device will accept. Once installed, it runs without further action from you. Your "install rate" depends on how well the envelope reaches each device class: the liver takes far more than its share, the motor neurons you care about take a small fraction.</p>
      <p>Where it breaks: there is no rollback, no patch release and no second attempt. The first install trains the device's firewall (the immune system) to block that envelope forever. You cannot A/B test on a baby, you cannot remotely uninstall a bad payload, and a bug found in year five is in every patient ever treated. Imagine shipping to production when you get exactly one push per user for life, and the users are six months old.</p>`},

    // ---------------- 5. THE PEOPLE AND THE FIRST TRIAL ----------------
    {type: 'story', kicker: 'The people', title: 'A lab, a neurologist, a charity and a single batch', tocTitle: 'The people',
      html: `<p>The work happened in Columbus, Ohio, in the Center for Gene Therapy at the research institute of Nationwide Children's Hospital, working closely with Ohio State University. Brian Kaspar was the neuroscientist whose lab had shown that AAV9 could reach the spinal cord from the blood. Kevin Foust, first author of that paper, ran many of the key mouse experiments. Arthur Burghes, an Ohio State biochemist and long-time SMA researcher, was a co-author on the clinical paper. Jerry Mendell, a neuromuscular neurologist at Nationwide Children's, led the clinical study as principal investigator, with a team of physicians, physical therapists and coordinators whose names fill the author list of the eventual NEJM paper.</p>
      <p>Money for a first-in-human study of a new kind of drug in dying infants was not easy to find. Part of it came from a small family charity, Sophia's Cure Foundation, which according to ProPublica raised about $2 million, including a $550,000 grant in 2012 for the phase 1 trial that the hospital's foundation matched. The US National Institutes of Health had put more than $450 million over the years into SMA-related science. The first human batch of vector was made at the hospital's own manufacturing facility, not in an industrial plant.</p>
      <p>A company was formed to take the product forward. ProPublica reports that in 2012 an entrepreneur named John Carbona turned a small cord-blood storage business, BioLife Cell Bank, into AveXis, licensed the Nationwide Children's technology, and brought Kaspar in as a part owner. AveXis became the trial's sponsor and paid for data management and analysis. The product was given the code name AVXS-101.</p>
      <h3>How you run a trial in a disease this lethal</h3>
      <p>The study, later nicknamed START, was a [[phase 1]] trial whose official primary goal was safety. It enrolled only infants with SMA type 1 who had lost both SMN1 copies and had exactly two copies of SMN2, the group whose outcomes without treatment were best documented. There was no [[placebo]] group. Giving dying babies a sham infusion was not considered ethical, and the course of the untreated disease was well described in [[natural history]] studies. So the trial compared its patients with [[historical control|historical controls]]: published records of untreated babies with the same genetics.</p>
      <p>Two doses were tested. Three infants, enrolled from May to September 2014, got a low dose. Twelve, enrolled from December 2014 to December 2015, got a dose three times higher. After the first child's liver enzymes rose sharply (to 31 times the normal upper limit for one of them) without symptoms, the protocol was changed: every later child got prednisolone for about 30 days, starting the day before infusion. One child screened for the trial was turned away because they already had antibodies to AAV9, a hint of a limit that would matter later.</p>`},

    {type: 'trial', title: 'START: the first 15 infants', tocTitle: 'START trial',
      intro: 'A 15-patient, open-label phase 1 study with no control group. Read the design, then predict what the data showed by August 2017.',
      design: {name: 'START (AVXS-101-CL-101)', phase: 'Phase 1', blinding: 'Open-label', years: '2014–2017', n: 15,
        population: 'Infants with SMA type 1: both SMN1 copies deleted, exactly two SMN2 copies, symptomatic; mean age at dosing 3.4 months in the high-dose group',
        randomization: null,
        arms: [{name: 'Low dose', n: 3, desc: 'Single IV infusion, 6.7 × 10¹³ vg/kg as then measured'}, {name: 'High dose', n: 12, desc: 'Single IV infusion, 2.0 × 10¹⁴ vg/kg as then measured (later restated as about 1.1 × 10¹⁴)'}],
        endpoint: 'Safety (primary); time to death or permanent ventilation (secondary)',
        details: {'Primary outcome': 'Safety', 'Key secondary': 'Survival without permanent ventilation (at least 16 hours a day of breathing support for at least 14 days in a row, or death)', 'Exploratory': '[[CHOP INTEND]] motor scores and motor milestones versus [[natural history]] cohorts', 'Comparison': 'A historical cohort in which 8% of similar infants survived without permanent ventilation to 20 months', 'Published': 'Mendell et al., <i>New England Journal of Medicine</i>, 2 November 2017'}},
      predict: {q: 'In the historical cohort, 8% of these infants reached 20 months of age alive and free of permanent ventilation. What share of the 15 treated infants did?',
        options: ['About 15 to 25%: a real but modest gain, like most first trials', 'About half', 'About 80%, with two or three deaths', 'All 15'],
        answer: 3,
        explain: 'All 15 were alive and free of permanent ventilation at 20 months or older as of the August 2017 data cutoff. In the high-dose group, 11 of 12 could sit unassisted (9 of them for at least 30 seconds), 11 could speak and feed by mouth, 9 could roll over, and 2 could crawl, stand and walk on their own. None of these motor milestones had been seen in the historical cohorts.'},
      results: [
        {kind: 'bar', title: 'Alive without permanent ventilation at 20 months', unit: '%', categories: ['START, all 15 treated infants', 'Historical cohort (untreated)'],
          series: [{name: 'Event-free at 20 months', values: [100, 8], notes: ['15 of 15 as of 7 Aug 2017', 'Published natural history data']}], colorByCategory: true},
        {kind: 'bar', title: 'Motor milestones in the 12 high-dose infants', unit: 'of 12 infants', horizontal: true, labelWidth: 230,
          categories: ['Head control', 'Sat unassisted ≥5 s', 'Sat unassisted ≥30 s', 'Rolled over', 'Spoke', 'Fed by mouth', 'Walked alone'],
          series: [{name: 'Children (of 12)', values: [11, 11, 9, 9, 11, 11, 2]}], },
      ],
      takeaway: 'The high-dose infants also gained an average of 9.8 points on the 64-point CHOP INTEND motor scale within one month and 15.4 points within three, while untreated infants typically lose points. Four children had raised liver enzymes, which prednisolone brought down. The two who walked had been diagnosed early because an older sibling had SMA, the first clinical hint that timing mattered most.'},

    {type: 'callout', variant: 'numbers', heading: 'START by the numbers',
      html: `<p><b>15</b> infants, about the size of a school class, treated with <b>one</b> manufacturing batch made in a hospital lab. <b>8%</b>: the historical chance of reaching 20 months without a ventilator. <b>100%</b>: the treated rate. <b>0</b>: untreated type 1 babies in the natural history studies who had ever sat unassisted; <b>11 of 12</b> high-dose infants did. <b>31×</b>: the peak liver enzyme level, over the normal limit, in patient 1, the reason every later child got steroids. <b>1 in 16</b> children screened who was excluded for pre-existing antibodies to AAV9.</p>`},

    {type: 'story', kicker: 'Reading the fine print', title: 'What could have gone wrong, and what nearly did', tocTitle: 'Fine print',
      html: `<p>START was a spectacular result, but it is worth reading like a sceptical investor or regulator. Three weaknesses stand out, and all three came back later.</p>
      <h3>1. No concurrent control</h3>
      <p>A [[single-arm trial]] compared with historical records is vulnerable to hidden differences. Were the treated babies diagnosed earlier, cared for better, or selected to be a bit stronger? Supportive care for SMA had improved over the years, and families who find their way into a pioneering trial are not typical. The honest answer is that when the effect is this large (8% versus 100% on survival, and milestones that had never been recorded at all), no plausible bias explains it. The same logic would not rescue a modest effect. Regulators accepted historical controls here because the gap was enormous and the untreated disease was so well documented.</p>
      <h3>2. Nobody knew the exact dose</h3>
      <p>This one surprised even insiders. The first trial used a single batch of vector, and the test originally used to measure its concentration (its [[titer]]) turned out to be, in the FDA's words, "inaccurate and imprecise." Forty-four months after the batch was made, it was re-measured with a better method, and the doses were restated: the "high dose" of 2.0 × 10<sup>14</sup> vector genomes per kilogram became about 1.1 × 10<sup>14</sup>. Because the product slowly degrades in the freezer, the FDA said it could not determine exactly what the START children had received; its reviewers estimated a range starting at about 1.1 × 10<sup>14</sup>. The commercial dose is 1.1 × 10<sup>14</sup> vg/kg, measured with the newer assay.</p>
      <h3>3. The commercial product was not the trial product</h3>
      <p>The START batch was made in a research facility. The commercial product is made by a different, scaled-up process in a different plant. Europe's regulators later called the original batch [[Process A]] and concluded that the commercial [[Process B]] batches could not be shown to be comparable to it. Their verdict: the benefit and risk of Zolgensma had to be judged on trials using the commercial product. That is why the phase 3 trial, STR1VE, carried so much weight. In software terms, the demo ran on a hand-built prototype, and the company had to prove the production build behaved the same.</p>
      <p>None of this undermines the core finding, which later trials replicated. But it explains why manufacturing and measurement, not biology, became the hardest part of Zolgensma's story.</p>`},

    // ---------------- TIMELINE ----------------
    {type: 'timeline', title: 'Timeline', intro: 'From a gene found in Paris to a one-time therapy sold in 58 countries.',
      events: [
        {year: 1995, title: 'SMN1 identified as the SMA gene', kind: 'science', text: 'Judith Melki\'s group in Paris reports that the gene is missing or broken in 226 of 229 patients, and finds its near-copy, SMN2.'},
        {year: 2009, date: 'Jan 2009', title: 'AAV9 shown to reach motor neurons from the blood', kind: 'science', text: 'Foust, Kaspar and colleagues report in <i>Nature Biotechnology</i> that intravenous AAV9 reaches neurons throughout the brain and spinal cord of newborn mice.'},
        {year: 2010, title: 'Mouse rescue paper published', kind: 'science', text: 'A follow-up reports that the SMN vector rescues SMA mice. It is retracted in 2022.'},
        {year: 2012, title: 'AveXis formed; Sophia\'s Cure funds the trial', kind: 'business', text: 'A cord-blood company is repurposed as AveXis to develop the Nationwide Children\'s vector. A family charity grants $550,000 towards the first trial, matched by the hospital\'s foundation.'},
        {year: 2013.6, date: 'Aug–Sep 2013', title: 'IND filed; Fast Track granted', kind: 'regulatory'},
        {year: 2014.4, date: 'May 2014', title: 'First infant dosed in START', kind: 'clinical', text: 'Low-dose cohort enrolled May to September 2014; high-dose cohort December 2014 to December 2015.'},
        {year: 2016, title: 'AveXis goes public; Breakthrough designation', kind: 'business', text: 'The company lists on Nasdaq; in July the FDA grants Breakthrough Therapy designation.'},
        {year: 2016.5, date: 'Dec 2016', title: 'Spinraza approved', kind: 'regulatory', text: 'The first SMA drug, an antisense treatment injected into the spinal fluid for life. <a href="case.html?id=spinraza">See the Spinraza case</a>.'},
        {year: 2017.1, date: 'Oct 2017', title: 'STR1VE phase 3 begins', kind: 'clinical', text: '22 symptomatic infants dosed at 12 US sites with commercial-process product.'},
        {year: 2017.2, date: 'Nov 2017', title: 'START published in NEJM', kind: 'clinical', text: 'All 15 alive without permanent ventilation at 20 months, versus 8% historically.'},
        {year: 2018.1, date: 'Apr 2018', title: 'Novartis agrees to buy AveXis for $8.7B', kind: 'business', text: '$218 a share in cash, an 88% premium. The deal closes on 15 May 2018.'},
        {year: 2018.2, date: 'Jul 2018', title: 'SMA added to US newborn screening panel', kind: 'regulatory'},
        {year: 2018.3, date: 'Oct 2018', title: 'BLA submitted', kind: 'regulatory', text: 'Accepted with priority review in November.'},
        {year: 2019.1, date: 'Apr 2019', title: 'ICER report', kind: 'business', text: 'Cost-effectiveness watchdog puts a value-based price at $310,000 to $900,000 on standard measures, up to $1.5 million on alternative ones.'},
        {year: 2019.2, date: '24 May 2019', title: 'FDA approval, $2.125M list price', kind: 'regulatory', text: 'Approved for children under 2 with a boxed warning for liver injury. Instalments over five years and outcomes-based deals offered.'},
        {year: 2019.3, date: 'Jun–Aug 2019', title: 'Data manipulation disclosed', kind: 'setback', text: 'AveXis tells the FDA on 28 June about manipulated animal test data it knew of before approval. The FDA goes public on 6 August. The Kaspar brothers leave the company and deny wrongdoing.'},
        {year: 2019.4, date: 'Oct 2019', title: 'Intrathecal study paused', kind: 'setback', text: 'A study in older patients stops after safety findings in monkeys given the vector into the spinal fluid.'},
        {year: 2019.5, date: 'Dec 2019', title: 'Global lottery for free doses', kind: 'business', text: 'Novartis announces up to 100 free doses a year, allocated by random draw. Patient groups object.'},
        {year: 2020.1, date: 'Mar–Apr 2020', title: 'FDA closes inquiry without penalties', kind: 'regulatory', text: 'Inspection classified "voluntary action indicated".'},
        {year: 2020.2, date: 'May 2020', title: 'EU conditional approval', kind: 'regulatory'},
        {year: 2020.3, date: 'Aug 2020', title: 'Evrysdi approved', kind: 'business', text: 'A daily oral pill for SMA from Roche and PTC Therapeutics adds a third option.'},
        {year: 2022.1, date: 'Jun 2022', title: 'SPR1NT results published', kind: 'clinical', text: 'All 14 infants treated before symptoms sit on their own.'},
        {year: 2022.2, date: 'Aug 2022', title: 'Two deaths from acute liver failure', kind: 'setback', text: 'Children in Russia and Kazakhstan die 5 to 6 weeks after infusion. The label is updated.'},
        {year: 2022.3, date: 'Oct 2022', title: '2010 mouse paper retracted', kind: 'people', text: 'Errors in the survival curve; the authors disagree with the retraction.'},
        {year: 2025.9, date: 'Nov 2025', title: 'Itvisma approved for ages 2 and up', kind: 'regulatory', text: 'The same vector, concentrated and given as a fixed dose into the spinal fluid.'},
      ]},

    // ---------------- AVEXIS & NOVARTIS ----------------
    {type: 'story', kicker: 'The money, part 1', title: 'From cord-blood bank to an $8.7 billion exit', tocTitle: 'AveXis and Novartis',
      html: `<p>AveXis went public on Nasdaq in 2016 on the strength of the START data as it came in, before the NEJM paper. For investors it was an almost ideal biotech story: a lethal childhood disease, a single product with a dramatic effect visible without statistics, a one-time treatment, and orphan-drug protections. The company began building its own manufacturing plant in Libertyville, Illinois, north of Chicago, a bet that it would need to control production rather than rent it.</p>
      <p>By early 2018 the question was who would own it. Spinraza had been approved at the end of 2016 and was selling fast, which proved two things at once: families and payers would accept a very expensive SMA therapy, and there was an incumbent to beat. The phase 3 study, STR1VE, was enrolling. A filing with the FDA was planned for the second half of 2018.</p>
      <p>Novartis had just installed a new chief executive, Vas Narasimhan, a physician and former head of drug development who wanted the company to lead in "advanced therapy platforms". Novartis already owned Kymriah, the first CAR-T cell therapy approved in the US (see the <a href="case.html?id=kymriah">Kymriah case</a>). What it did not have was a gene therapy platform or an AAV factory.</p>`},

    {type: 'decision', title: 'You are Novartis, April 2018', role: 'Chief executive, Novartis',
      scenario: `AveXis has one product. It has worked spectacularly in 15 babies, using a single hand-made batch whose dose is now being re-measured. The phase 3 trial with the commercial product has not read out. AveXis stock closed at about $116 last Friday. Its bankers will want a large premium, and at least one rival big pharma company is likely to be interested. Your analysts estimate a few thousand newly diagnosed SMA babies a year in countries that can pay, plus a larger group of older, already-diagnosed patients if the therapy can be extended to them. Spinraza is already on the market. What do you do?`,
      options: [
        {label: 'Pay up now: about $8.7 billion in cash, $218 a share, before phase 3 or approval', outcome: 'You get the product, the Libertyville plant, the team and two other programs (in Rett syndrome and a genetic form of ALS) before anyone else can. You also take on all of the risk: phase 3, manufacturing scale-up, the FDA review and whatever is in the files. The premium is 88% over last Friday\'s price.'},
        {label: 'Wait for the phase 3 STR1VE data and the FDA decision, then bid', outcome: 'You avoid paying for risks that may not come true. But if STR1VE reads out well, the price goes up sharply and a competitor may move first. Big pharma companies routinely pay more for "de-risked" assets, and pay it happily.'},
        {label: 'Offer a licensing partnership for ex-US rights with milestones instead of a takeover', outcome: 'Much cheaper up front, and you share the risk. But you do not get the factory, the platform or control, and AveXis has little reason to accept when an outright sale is on the table.'},
        {label: 'Pass, and build your own AAV programs internally', outcome: 'You save $8.7 billion and years of integration headaches. You also cede SMA gene therapy, a flagship for the whole field, to whoever buys AveXis, and you start your gene therapy platform several years behind.'},
      ],
      reality: `Novartis agreed on 9 April 2018 to pay $218 a share, about $8.7 billion in cash, an 88% premium, and closed on 15 May 2018. Narasimhan said the deal offered "an extraordinary opportunity to transform the care of SMA." Approval came a year later. Measured against revenue, the bet has been slow: Zolgensma's cumulative sales from 2019 to 2025 were about $7.7 billion, still below the purchase price (and revenue is not profit). ProPublica reported that Kaspar's payout from the sale was more than $400 million. The deal also bought Novartis a scandal a year later, discussed below.`},

    {type: 'callout', variant: 'product', heading: 'Buying a product, a platform or a factory?',
      html: `<p>In software, an acquirer might say it is buying a product (the app), a platform (the reusable stack) or a team (an acqui-hire). Novartis's press release sold the AveXis deal on all three: the lead product, "state of the art AAV9 gene therapy manufacturing capabilities", and a pipeline that could reuse the same vector for other neurological diseases.</p>
      <p>Where the analogy breaks: in software the platform value usually shows up quickly, because code can be reused. In gene therapy, each new disease needs its own decade of trials, and "platform" manufacturing turned out to be less transferable than hoped. By 2025, Novartis's revenue from the AveXis acquisition still came almost entirely from one product family: Zolgensma and its spinal-fluid version, Itvisma.</p>`},

    // ---------------- REGULATORS ----------------
    {type: 'story', kicker: 'The regulators', title: 'Approval on 22 babies', tocTitle: 'Regulators',
      html: `<p>AveXis submitted its [[BLA]], the application to license a biologic, on 1 October 2018. By then the product had collected almost every FDA acceleration tool available: Fast Track (2013), [[orphan drug]] designation (2014), [[breakthrough therapy designation|Breakthrough Therapy]] designation (2016), rare pediatric disease designation (August 2018), and [[priority review]]. No [[advisory committee]] meeting was held; the FDA wrote that the application "did not raise concerns or controversial issues" that needed one.</p>
      <p>The evidence was unusually thin by the standards of most drugs and unusually strong in effect size. The key trial was the ongoing phase 3, STR1VE, in 21 infants at the time of the review, all given commercial-process product at 1.1 × 10<sup>14</sup> vg/kg. It was again single-arm, against natural history. The completed phase 1 was treated as supporting evidence because of the dosing uncertainty. The safety database was 44 patients in total.</p>
      <p>On 24 May 2019 the FDA granted full ("regular") approval for children under 2 years old with SMA caused by mutations in both SMN1 copies. Note what the label did not say: it did not restrict use to type 1 or to two SMN2 copies, even though almost all the data came from that group. Children with three copies, who would have developed milder disease, could be treated too, which matters for newborn screening.</p>
      <p>The label carried a [[black box warning]] for acute serious liver injury and required liver tests before treatment, steroids around the infusion, and monitoring for at least three months. As part of the approval, AveXis also received a [[priority review voucher]], a transferable coupon for faster review of a future drug.</p>
      <p>Europe was slower and tougher. The EMA had initially agreed to an accelerated review, then dropped it because of "major objections" on the quality dossier (control of the vector's genetic integrity, comparability between manufacturing processes, and the potency assay) and on how much data existed with the commercial process. It granted a conditional approval in May 2020, for SMA type 1 or patients with up to three SMN2 copies.</p>`},

    {type: 'trial', title: 'STR1VE: the commercial product in 22 infants', tocTitle: 'STR1VE trial',
      intro: 'The phase 3 trial that the approval leaned on. Same kind of patients as START, commercial-process product, 12 US centers.',
      design: {name: 'STR1VE-US (CL-303)', phase: 'Phase 3', blinding: 'Open-label', years: '2017–2019', n: 22,
        population: 'Symptomatic infants under 6 months with SMA type 1 (both SMN1 copies lost, one or two SMN2 copies)',
        randomization: null,
        arms: [{name: 'Onasemnogene abeparvovec', n: 22, desc: 'Single IV infusion, 1.1 × 10¹⁴ vg/kg over 30–60 minutes'}, {name: 'Untreated natural history (PNCR)', n: 23, desc: 'Historical comparison group', control: true}],
        endpoint: 'Co-primary: sitting alone ≥30 s at the 18-month visit; survival without permanent ventilation at 14 months',
        details: {'Co-primary 1': 'Independent sitting for at least 30 seconds (Bayley-III item 26) at the 18-months-of-age visit', 'Co-primary 2': 'Alive without permanent ventilation at 14 months of age', 'Comparator': '23 untreated infants with the same genetics from the Pediatric Neuromuscular Clinical Research (PNCR) dataset', 'Published': 'Day et al., <i>Lancet Neurology</i>, 2021'}},
      predict: {q: 'None of the 23 untreated infants ever sat alone. In START, 9 of 12 high-dose infants sat for 30 seconds. What share of the 22 STR1VE infants sat alone for 30 seconds at their 18-month visit?',
        options: ['About 90 to 100%, matching or beating START', 'About 60%', 'About 25%', 'Under 10%: the commercial product was much weaker'],
        answer: 1,
        explain: '13 of 22 (59%) sat alone for at least 30 seconds at the 18-month visit, versus 0 of 23 untreated infants; 20 of 22 (91%) were alive without permanent ventilation at 14 months, versus 26%. Somewhat lower than START on sitting, which is what you would expect from a larger, more varied group, but a result of the same kind. Three serious side effects were judged related or possibly related to treatment: two liver enzyme elevations and one case of fluid build-up in the brain (hydrocephalus).'},
      results: [
        {kind: 'bar', title: 'STR1VE co-primary endpoints versus untreated infants', unit: '%',
          categories: ['Sat alone ≥30 s', 'Alive without ventilator'],
          series: [{name: 'Treated (n=22)', values: [59, 91], notes: ['13 of 22, at the 18-month visit', '20 of 22, free of permanent ventilation at 14 months']}, {name: 'Untreated PNCR cohort (n=23)', values: [0, 26], notes: ['0 of 23', '6 of 23']}],
          note: 'Sitting measured at the 18-month-of-age visit; survival free of permanent ventilation measured at 14 months of age.'},
      ],
      takeaway: 'The commercial product did what the hand-made batch did, in a multicentre trial. That replication, more than START itself, is what convinced regulators on both sides of the Atlantic.'},

    // ---------------- PRICE ----------------
    {type: 'story', kicker: 'The money, part 2', title: 'Pricing something you only buy once', tocTitle: 'The $2 million price',
      html: `<p>Pricing a one-time therapy breaks the usual logic of drug pricing. Most expensive drugs are paid for month by month for years, so their cost to any one insurer is spread out, and if a patient switches insurer the next one picks up the bill. A one-time therapy puts the entire lifetime cost on whichever payer happens to cover the child on the day of the infusion, while the benefits (and the avoided costs) land over decades, often with other payers.</p>
      <p>Novartis spent months signaling that the price would be high and argued it was justified. AveXis's president, Dave Lennon, told ProPublica the company had "shown through other studies that we are cost-effective in the range of $4 million to $5 million." The obvious reference point was Spinraza, at a list price of $750,000 in the first year and $375,000 a year after that, for life.</p>
      <p>The Institute for Clinical and Economic Review ([[ICER]]), an independent US non-profit that estimates what price would make a drug cost-effective, published its final report on SMA on 3 April 2019, before Zolgensma's price was known. On its standard measure, cost per [[QALY]] (a year of life in full health), it put Zolgensma's value-based price at $310,000 to $900,000. On an alternative measure that counts every year of life equally regardless of disability, it came out at $710,000 to $1.5 million. ICER's panel voted unanimously that Spinraza at its list price represented low long-term value for money.</p>`},

    {type: 'decision', title: 'You are Novartis, May 2019: set the price', role: 'Head of pricing, AveXis / Novartis Gene Therapies',
      scenario: `Approval is days away. Your health-economics consultants argue the therapy is worth $4 to $5 million, based on lives saved, lifetime care avoided and the ten-year cost of chronic treatment. ICER\'s published benchmark is at most $1.5 million, though ICER has signalled it will update its numbers with new data on babies treated before symptoms. Spinraza costs about $4.1 million over ten years at list price. Politicians of both parties are attacking drug prices. You also need insurers, including state Medicaid programs, to actually pay. Where do you set the US list price?`,
      options: [
        {label: '$4 to $5 million: what your value models say it is worth', outcome: 'Defensible on paper and it maximises revenue per patient. But you become the face of drug-price outrage, insurers resist, and ICER and Congress have a ready-made headline. Novartis\'s own adviser later said the company avoided this price because of the political backlash it would have drawn.'},
        {label: 'About $2.1 million: half of ten years of Spinraza, with instalments and outcomes guarantees', outcome: 'You can frame it as a 50% discount on the alternative, and it may squeak inside ICER\'s updated range. It will still be the most expensive drug in the world, and critics will point out that much of the underlying science was publicly and charitably funded.'},
        {label: 'Around $1 to $1.5 million: inside ICER\'s original range', outcome: 'You win praise from payers and watchdogs, and faster coverage. But you leave value on the table that your shareholders just paid $8.7 billion for, and you set a low anchor for every future gene therapy, including your own.'},
      ],
      reality: `Novartis set a wholesale list price of $2.125 million, describing it as 50% of the estimated $4.1 million ten-year cost of chronic SMA therapy. Insurers could pay $425,000 a year for five years, and Novartis offered outcomes-based agreements of up to five years in which part of the cost was at risk if the therapy did not keep working. ICER, after updating its model with new data on babies treated before symptoms, put the value-based range at $1.1 to $1.9 million per QALY gained, or $1.2 to $2.1 million per life-year gained. Its president, Steven Pearson, said the price fell "within the upper bound" of that range. STAT called Zolgensma the world\'s most expensive drug.`},

    {type: 'custom', title: 'One dose or a lifetime of doses? A cost explorer', tocTitle: 'Cost explorer',
      intro: 'Compare the cumulative US list-price cost of Zolgensma with Spinraza over a time horizon you choose. Money in the future is worth less than money today, so the explorer lets you apply a [[discount rate]].',
      html: `<div class="card">
        <div style="display:grid;grid-template-columns:200px 1fr 70px;gap:10px;align-items:center;font-size:15px">
          <span>Years of treatment</span><input type="range" min="1" max="20" value="10" data-k="years" style="accent-color:var(--accent)"><b data-o="years"></b>
          <span>Discount rate</span><input type="range" min="0" max="10" step="0.5" value="3" data-k="rate" style="accent-color:var(--accent)"><b data-o="rate"></b>
        </div>
        <div style="margin:12px 0 4px;font-size:15px">How Zolgensma is paid:
          <button class="btn" data-mode="upfront" aria-pressed="true">All up front ($2.125M)</button>
          <button class="btn" data-mode="annuity" aria-pressed="false">Five instalments of $425,000</button>
        </div>
        <div class="cost-chart" style="margin-top:10px"></div>
        <div class="cost-out" style="margin-top:12px;font:400 17px/1.6 var(--serif)"></div>
      </div>`,
      init: (root, api) => {
        const st = {years: 10, rate: 3, mode: 'upfront'};
        const chartEl = root.querySelector('.cost-chart'), out = root.querySelector('.cost-out');
        const pv = (amt, t) => amt / Math.pow(1 + st.rate / 100, t);
        function series() {
          const z = [], s = []; let zc = 0, sc = 0, cross = null;
          for (let t = 0; t < st.years; t++) {
            sc += pv(t === 0 ? 0.75 : 0.375, t);
            if (st.mode === 'upfront') zc += t === 0 ? pv(2.125, 0) : 0; else zc += t < 5 ? pv(0.425, t) : 0;
            z.push([t + 1, +zc.toFixed(3)]); s.push([t + 1, +sc.toFixed(3)]);
            if (cross === null && sc >= zc) cross = t + 1;
          }
          return {z, s, zc, sc, cross};
        }
        function draw() {
          root.querySelectorAll('[data-o]').forEach(o => o.textContent = o.dataset.o === 'years' ? st.years + ' yrs' : st.rate + '%');
          root.querySelectorAll('[data-mode]').forEach(b => b.setAttribute('aria-pressed', b.dataset.mode === st.mode));
          const r = series();
          api.mountChart(chartEl, {kind: 'line', title: 'Cumulative cost per patient, present value (US list prices)', unit: '$M',
            series: [{name: 'Zolgensma', short: 'Zolgensma', points: [[0, 0]].concat(r.z), color: 1}, {name: 'Spinraza', short: 'Spinraza', points: [[0, 0]].concat(r.s), color: 2}],
            annotations: r.cross ? [{x: r.cross, label: 'Spinraza costs more from year ' + r.cross}] : [],
            xLabel: 'Years since diagnosis', note: 'Axis in millions of US dollars. Spinraza: $750,000 in year 1 and $375,000 a year after (list, per ICER 2019). Zolgensma: $2.125M list, or $425,000 a year for 5 years. Payments assumed at the start of each year. List prices, not the confidential net prices insurers actually pay.'});
          const m = v => '$' + api.fmt(v, 2) + 'M';
          out.innerHTML = 'Over <b>' + st.years + ' years</b> at a <b>' + st.rate + '%</b> discount rate: Zolgensma costs <b>' + m(r.zc) + '</b>, Spinraza <b>' + m(r.sc) + '</b> in today\'s money. ' +
            (r.cross ? 'Spinraza\'s running total overtakes Zolgensma in <b>year ' + r.cross + '</b>.' : 'Over this horizon Spinraza stays cheaper at list price.') +
            ' <span style="color:var(--ink-3)">The comparison assumes both drugs give similar benefit and that the patient keeps taking Spinraza. In reality they are different drugs with different results, some children get both, and a price comparison is not a value comparison.</span>';
        }
        root.querySelectorAll('input[type=range]').forEach(i => i.addEventListener('input', () => { st[i.dataset.k] = +i.value; draw(); }));
        root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => { st.mode = b.dataset.mode; draw(); }));
        draw();
      }},

    {type: 'callout', variant: 'product', heading: 'Perpetual license versus subscription',
      html: `<p>Software people will recognize this fight. Spinraza is a subscription; Zolgensma is a perpetual license. Novartis priced the license off the subscription's lifetime value, a standard SaaS move, and then offered a payment plan (five annual instalments) and a service-level refund (the outcomes-based agreement) to make it easier to buy.</p>
      <p>Where it breaks: your customer (the insurer) may churn long before the "lifetime" ends, so it pays for value that a competitor insurer collects. Nobody knows yet how long the product works, because the oldest treated children are only about 12. The refund clause depends on measuring outcomes in children for years, across doctors and insurers who may not share data. And unlike software, the buyer cannot trial the product and cancel. Once it is infused, it is in the child for good.</p>`},

    {type: 'story', kicker: 'Access', title: 'Instalments, refunds and a lottery', tocTitle: 'Access and the lottery',
      html: `<p>In the US, most insurers covered Zolgensma for the infants in the label, often after [[prior authorization]]. Novartis ran a "Time is Neurons" campaign aimed at getting approval within two weeks of diagnosis, a reminder that for this disease delay in paperwork means dead motor neurons.</p>
      <p>Outside the US, where the drug was not yet approved or paid for, parents started crowdfunding campaigns for millions of dollars, and governments came under pressure. In December 2019 Novartis announced a global [[managed access program]]: it would give away up to 100 doses a year, for children under 2 in countries where the drug was not approved, allocated by a random draw rather than by clinical need. An independent bioethics committee helped design the rules, and Novartis cited limited production capacity as the reason for the cap.</p>
      <p>The reaction was harsh. Patient groups said a lottery ignored how urgently each child needed treatment. A father in Canada quoted by <i>The Scientist</i> said, "It's a lottery where we're leaving children's lives up to chance." Critics described it as a company rationing a life-saving medicine by chance while charging $2 million elsewhere. Supporters of the design argued that with a fixed number of free doses and no fair way to rank dying babies against each other, a random draw was the least bad rule. The episode became a case study in how not to communicate even a well-meant access program.</p>`},

    {type: 'chart', title: 'Sales: fast rise, then a plateau', tocTitle: 'Sales',
      intro: 'Company-reported worldwide net sales. Launch uptake was fast because there was a backlog of eligible children; after that, sales were set by the number of newly diagnosed babies each year.',
      chart: {kind: 'line', title: 'Zolgensma worldwide net sales', unit: '$B',
        series: [{name: 'Zolgensma (from 2025 includes Itvisma)', points: [[2019, 0.361], [2020, 0.920], [2021, 1.351], [2022, 1.370], [2023, 1.214], [2024, 1.214], [2025, 1.232]]}],
        annotations: [{x: 2020.6, label: 'Evrysdi (oral) approved'}, {x: 2022.6, label: 'Liver-failure deaths reported', dy: 18}],
        note: 'Source: Novartis annual and quarterly financial reports (USD). 2019 is a partial year from the May launch. 2025 is reported as the "Zolgensma Group", which includes the first weeks of Itvisma.'},
      takeaway: 'A one-time therapy for a rare disease has a ceiling: once the backlog of existing patients is treated, sales depend on births. Zolgensma settled at about $1.2 billion a year, a blockbuster, but it cumulatively earned about $7.7 billion in revenue through 2025 against an $8.7 billion purchase price.'},

    // ---------------- MANUFACTURING ----------------
    {type: 'story', kicker: 'Building the drug', title: 'Why making trillions of viruses is hard', tocTitle: 'Manufacturing',
      html: `<p>A small-molecule pill is made by chemistry, in steps you can write down and repeat exactly. An antibody is made by living cells, which is harder. A viral vector is harder still, because the cells have to assemble a complete, correctly filled virus particle, and most of what comes out is not usable.</p>
      <p>According to the European assessment, Zolgensma is made at Novartis's plant in Libertyville, Illinois. The process starts with a frozen vial of [[HEK293]] cells, a human cell line. The cells are grown up and moved into a bioreactor. Then they are fed three circles of DNA, called [[plasmid|plasmids]], at once, a technique called [[triple transfection]]: one carries the SMN gene cassette, one carries AAV genes that build the AAV9 shell, and one carries helper genes borrowed from adenovirus that AAV normally needs. Cells that take up all three become tiny virus factories for a few days. The cells are then broken open, the soup is clarified, and the vector is purified by chromatography, filtration and centrifugation. No reprocessing is allowed: a batch that fails is thrown away.</p>
      <h3>Where it gets difficult</h3>
      <ul>
        <li><b>Yield.</b> Each cell makes a limited number of particles, and only some cells take up all three plasmids. Published lab-scale yields range across two orders of magnitude, roughly 10<sup>12</sup> to 10<sup>14</sup> vector genomes per liter of culture. At Zolgensma's dose, a single 5.5 kg baby needs about 6 × 10<sup>14</sup>.</li>
        <li><b>Empty shells.</b> Many assembled capsids contain no DNA. These [[empty capsid|empty capsids]] do nothing useful but still add to the load of viral protein the immune system sees, so they have to be measured and controlled.</li>
        <li><b>Measuring what you made.</b> As the START dose restatement showed, even counting vector genomes accurately is hard. Different assays can disagree by nearly twofold.</li>
        <li><b>Proving it works.</b> Each batch needs a [[potency assay]] showing it does what it should in biology, not just in chemistry. Zolgensma used several, including a cell test of SMN production and, as the FDA review describes, a test measuring how long injected SMA mice survived. Mouse assays are slow and noisy, and that one sits at the center of the scandal below.</li>
        <li><b>Stability.</b> The frozen product slowly loses strength. Late in the review the FDA found that concentration, activity and potency decline over time in the freezer, and limited frozen shelf life to 12 months.</li>
      </ul>
      <p>Every dose is also a custom kit. The volume depends on the child's weight, so each order is assembled from vials of two sizes (the current label lists kits of 2 to 14 vials), shipped frozen, and must be used within 14 days of arriving in the hospital refrigerator.</p>`},

    {type: 'custom', title: 'Manufacturing yield: how many doses per batch?', tocTitle: 'Yield widget',
      intro: 'Move the sliders to see how bioreactor size, cell productivity and purification losses decide how many doses one batch can supply. The ranges are illustrative, drawn from published figures; Novartis does not disclose its commercial yields.',
      html: `<div class="card">
        <div style="display:grid;grid-template-columns:230px 1fr 110px;gap:10px;align-items:center;font-size:15px">
          <span>Bioreactor volume</span><input type="range" min="50" max="2000" step="50" value="500" data-k="vol" style="accent-color:var(--accent)"><b data-o="vol"></b>
          <span>Upstream yield (vg per liter)</span><input type="range" min="12" max="14.5" step="0.1" value="13.5" data-k="yield" style="accent-color:var(--accent)"><b data-o="yield"></b>
          <span>Recovered after purification</span><input type="range" min="10" max="70" step="5" value="30" data-k="rec" style="accent-color:var(--accent)"><b data-o="rec"></b>
          <span>Batch passes quality control</span><input type="range" min="50" max="100" step="5" value="85" data-k="qc" style="accent-color:var(--accent)"><b data-o="qc"></b>
          <span>Patient weight</span><input type="range" min="3" max="13" step="0.5" value="5.5" data-k="wt" style="accent-color:var(--accent)"><b data-o="wt"></b>
        </div>
        <div class="yield-viz" style="margin-top:14px"></div>
        <div class="yield-out" style="margin-top:10px;font:400 17px/1.6 var(--serif)"></div>
      </div>`,
      init: (root, api) => {
        const st = {vol: 500, yield: 13.5, rec: 30, qc: 85, wt: 5.5};
        const viz = root.querySelector('.yield-viz'), out = root.querySelector('.yield-out');
        const sci = v => { const e = Math.floor(Math.log10(v)); const m = v / Math.pow(10, e); return m.toFixed(1) + ' × 10<sup>' + e + '</sup>'; };
        function baby(x, y, cls) {
          return '<g transform="translate(' + x + ',' + y + ')"><circle cx="13" cy="9" r="8" class="' + cls + '"/><rect x="4" y="20" width="18" height="22" rx="9" class="' + cls + '"/></g>';
        }
        function draw() {
          const f = {vol: v => v + ' L', yield: v => '10^' + v.toFixed(1), rec: v => v + '%', qc: v => v + '%', wt: v => v + ' kg'};
          root.querySelectorAll('[data-o]').forEach(o => o.textContent = f[o.dataset.o](st[o.dataset.o]));
          const made = st.vol * Math.pow(10, st.yield), purified = made * st.rec / 100, expected = purified * st.qc / 100;
          const dose = st.wt * 1.1e14, doses = Math.floor(purified / dose), expDoses = expected / dose;
          const itDoses = Math.floor(purified / 1.2e14);
          const shown = Math.min(doses, 120);
          let s = '<svg viewBox="0 0 900 290" style="width:100%;height:auto;display:block">';
          s += '<text x="0" y="16" class="il-text">Doses from one successful batch (each figure = one dose for a ' + st.wt + ' kg infant' + (doses > 120 ? ', first 120 shown' : '') + ')</text>';
          for (let i = 0; i < 120; i++) { const col = i % 30, row = Math.floor(i / 30); s += baby(col * 29, 30 + row * 58, i < shown ? 'il-1' : 'il-8s'); }
          s += '<text x="0" y="284" class="il-text-2">Gray figures: capacity you do not have at these settings.</text></svg>';
          viz.innerHTML = s;
          out.innerHTML = 'The batch produces about <b>' + sci(made) + '</b> vector genomes; about <b>' + sci(purified) + '</b> survive purification. One IV dose for a ' + st.wt + ' kg infant is <b>' + sci(dose) + '</b> (1.1 × 10<sup>14</sup> per kg). ' +
            'So a batch that passes supplies <b>' + api.fmt(doses) + ' dose' + (doses === 1 ? '' : 's') + '</b>, or about <b>' + api.fmt(expDoses, 1) + '</b> per batch started once failures are counted. ' +
            'The same material would supply about <b>' + api.fmt(itDoses) + '</b> fixed spinal-fluid (Itvisma) doses of 1.2 × 10<sup>14</sup>: because IV dosing scales with body weight, a 20 kg child would need ' + sci(20 * 1.1e14) + ' by vein, about 18 times the spinal-fluid dose.' +
            ' <span style="color:var(--ink-3)">Toy model. Real processes also lose material to empty capsids, testing samples and fill losses.</span>';
        }
        root.querySelectorAll('input[type=range]').forEach(i => i.addEventListener('input', () => { st[i.dataset.k] = +i.value; draw(); }));
        draw();
      }},

    // ---------------- SCANDAL ----------------
    {type: 'story', kicker: 'The setback', title: 'Manipulated mouse data, disclosed a month too late', tocTitle: 'Data scandal',
      html: `<p>On 28 June 2019, five weeks after approval, AveXis and Novartis told the FDA about "a data manipulation issue that impacts the accuracy of certain data from product testing performed in animals" in the approval dossier. The affected data came from the mouse [[potency assay]] work used to support the development of the manufacturing process. The FDA made it public on 6 August.</p>
      <p>The damaging part was the timing. The FDA stated that AveXis "became aware of the issue of the data manipulation that created inaccuracies in their BLA before the FDA approved the product, yet did not inform the FDA until after the product was approved." Peter Marks, head of the FDA's biologics center, said the agency would use its full authorities, "which may include civil or criminal penalties." Senator Chuck Grassley wrote to Novartis calling the conduct "reprehensible."</p>
      <p>At the same time, the FDA was clear about what the problem was not. Its concerns were limited to "only a small portion of the product testing data," and the human clinical data were not affected. The agency concluded that Zolgensma "should remain on the market" and that the totality of evidence still supported a favorable balance of benefit and risk. Marks later called it an "isolated incident."</p>
      <p>Novartis said it had ended its relationship with Brian Kaspar and his brother Allan Kaspar, AveXis's head of research and development. In its response to the FDA's inspection findings, according to Fierce Pharma, Novartis said the two had altered data or instructed others to. Brian Kaspar, through his lawyer, denied wrongdoing.</p>
      <p>The FDA inspected the San Diego site where the testing had been done and issued a [[Form 483]] listing problems, including failure to report the data issues promptly. In March 2020 it closed the matter as "voluntary action indicated": objectionable conditions were found, but they did not cross the threshold for regulatory action. No penalties were imposed. Novartis committed to retraining, stronger quality oversight, and a policy of notifying the FDA within five business days of any future data integrity concerns in a pending application.</p>
      <p>Two years later, in October 2022, <i>Nature Biotechnology</i> retracted the 2010 SMA mouse paper by Foust, Kaspar and colleagues because of errors in its survival data, a separate episode that the authors contested.</p>`},

    {type: 'decision', title: 'You are Novartis, spring 2019: what do you tell the FDA?', role: 'Head of development and quality, AveXis / Novartis',
      scenario: `Your team has learned that some animal potency data in your application to the FDA were manipulated. The human trial data appear sound, and the FDA's decision is due within weeks. Children are dying of SMA every week that the drug is not available. You do not yet know how far the problem goes. What do you do?`,
      options: [
        {label: 'Tell the FDA now, even though it may delay approval', outcome: 'You lose weeks or months, and you may face a harder review and a public story before launch. But you keep the regulator\'s trust, the one asset every future application depends on, and you control the narrative.'},
        {label: 'Complete the internal investigation first, then tell the FDA with full facts', outcome: 'You arrive with a complete picture instead of a half-understood problem. But if approval happens in the meantime, it will look like you sat on bad news to get the drug across the line, whatever your intent.'},
        {label: 'Quietly correct the data and move on, since the human data are unaffected', outcome: 'This is the option that ends careers and can bring criminal charges. Regulators treat undisclosed data integrity problems in an application as a fundamental breach, however small the data.'},
      ],
      reality: `The FDA approved Zolgensma on 24 May 2019; AveXis informed it of the manipulation on 28 June. The FDA publicly rebuked the company for knowing before approval and not saying so, and a US senator demanded answers. In the end the product stayed on the market and no penalties were imposed, because the human data held up. Novartis adopted a rule to notify the FDA within five business days of any future data integrity concern. The reputational cost landed at the worst moment, weeks into the launch of the world's most expensive drug.`},

    {type: 'callout', variant: 'whatif', heading: 'What if the manipulated data had touched the human trials?',
      html: `<p>The FDA's calm response rested entirely on one fact: the problem was in a few mouse experiments used for manufacturing development, not in the infant trials. Had the manipulated data involved clinical outcomes, the entire approval would have been in question, and with it the treatment of hundreds of children then waiting. Regulators could have suspended the license while re-auditing every trial site.</p>
      <p>It also shows why data integrity is a manufacturing issue as much as a research one. The potency assay is how a company proves each commercial batch matches what was tested in patients. If that measurement cannot be trusted, neither can the claim that the product in the vial is the product that worked.</p>`},

    // ---------------- SAFETY ----------------
    {type: 'story', kicker: 'Safety', title: 'The price of a very large dose', tocTitle: 'Safety',
      html: `<p>Zolgensma is given at one of the highest doses of any approved AAV therapy: 10<sup>14</sup> particles for every kilogram of body weight. Almost all the known risks follow from that.</p>
      <h3>The liver</h3>
      <p>Because the liver takes up so much of the dose, and because liver cells displaying viral proteins can come under immune attack, liver injury was seen from the first patient. The label carries a boxed warning. After approval, cases of acute liver failure were reported. In August 2022 Novartis disclosed that two children, aged 4 months and 28 months, in Russia and Kazakhstan, had died of acute liver failure about five to six weeks after infusion, within days of their steroid doses being tapered. Novartis said these were the first fatal liver cases, that more than 2,300 patients had been treated worldwide, and that it did not regard them as a new safety signal. The US label's boxed warning now states that "cases of acute liver failure with fatal outcomes have been reported", and the dosing instructions tell doctors to continue steroids until liver tests are normal and then taper slowly.</p>
      <h3>Blood clots and kidneys</h3>
      <p>After approval, doctors also reported [[thrombotic microangiopathy]] (TMA), in which tiny clots form in small blood vessels, platelets are used up and the kidneys are damaged, usually within two weeks of infusion. The label warns it can be fatal, notes that an infection or vaccination at the same time was present in some cases, and requires close platelet monitoring.</p>
      <h3>Heart and nerves</h3>
      <p>Transient rises in troponin, a marker of heart muscle stress, were seen in trials without clinical consequences; mouse studies at higher doses showed heart damage. In young monkeys given the clinical dose, the label reports inflammation and nerve-cell degeneration in the [[dorsal root ganglia]], clusters of sensory neurons beside the spinal cord. Similar findings in monkeys given the vector into the spinal fluid led to a pause of the study in older patients in October 2019.</p>
      <h3>One dose, forever</h3>
      <p>Finally, the immune system. About 1 in 16 children screened for START already had antibodies to AAV9 from natural exposure, and the trials excluded children with levels above a set threshold. After the infusion every child makes very high levels of antibodies to the vector. The FDA's reviewers concluded these "are expected to preclude the possibility of re-administration of AAV9 vector-based gene therapy." If the effect wanes, or if a child was dosed too late, there is no second shot, and possibly no future AAV9 treatment for anything else.</p>`},

    {type: 'figure', title: 'Where the virus goes, and what it can harm', intro: 'An intravenous vector reaches far more than motor neurons. Hover or tap each organ for the risk it carries and how doctors manage it.',
      svg: `<svg viewBox="0 0 900 430">
        <circle cx="450" cy="70" r="46" class="il-8s il-line"/>
        <rect x="380" y="120" width="140" height="210" rx="60" class="il-8s il-line"/>
        <path d="M385 160 L320 260 M515 160 L580 260 M420 320 L405 410 M480 320 L495 410" class="il-line2" stroke-width="16" stroke-linecap="round" style="stroke: var(--il-8s)"/>
        <g data-part="cns">
          <ellipse cx="450" cy="64" rx="30" ry="24" class="il-3s il-line"/>
          <path d="M450 88 V300" class="st-3" stroke-width="7" stroke-linecap="round"/>
          <text x="250" y="60" class="il-text">Brain and spinal cord</text>
          <path d="M395 56 H415" class="il-line"/>
        </g>
        <g data-part="drg">
          <circle cx="436" cy="200" r="6" class="il-5"/><circle cx="464" cy="200" r="6" class="il-5"/><circle cx="436" cy="240" r="6" class="il-5"/><circle cx="464" cy="240" r="6" class="il-5"/>
          <text x="600" y="224" class="il-text">Sensory ganglia (DRG)</text>
          <path d="M472 220 H592" class="il-line"/>
        </g>
        <g data-part="heart">
          <path d="M420 160 C 405 145, 385 160, 400 178 L420 196 L440 178 C 455 160, 435 145, 420 160 Z" class="il-7"/>
          <text x="210" y="170" class="il-text">Heart</text>
          <path d="M255 165 H392" class="il-line"/>
        </g>
        <g data-part="liver">
          <path d="M445 250 C 460 236, 510 238, 512 256 C 514 276, 480 284, 460 280 C 440 276, 432 262, 445 250 Z" class="il-2"/>
          <text x="600" y="276" class="il-text">Liver (boxed warning)</text>
          <path d="M514 266 H592" class="il-line"/>
        </g>
        <g data-part="blood">
          <circle cx="250" cy="330" r="10" class="il-7s il-line"/><circle cx="275" cy="345" r="7" class="il-4"/><circle cx="232" cy="352" r="7" class="il-4"/>
          <text x="140" y="390" class="il-text">Blood, platelets, kidneys</text>
          <path d="M290 330 L395 290" class="il-line il-dash"/>
        </g>
        <g data-part="immune">
          <path d="M650 340 V320 M650 320 L638 304 M650 320 L662 304" class="st-7" stroke-width="5" stroke-linecap="round" fill="none"/>
          <path d="M690 350 V330 M690 330 L678 314 M690 330 L702 314" class="st-7" stroke-width="5" stroke-linecap="round" fill="none"/>
          <text x="620" y="385" class="il-text">Immune memory</text>
        </g>
      </svg>`,
      hotspots: {
        cns: {title: 'Brain and spinal cord: the target', text: 'The intended destination. The vector reaches motor neurons along the whole spinal cord, and SMN protein was found in spinal motor neurons and brain cells of treated children examined after death from other causes.'},
        drg: {title: 'Dorsal root ganglia', text: 'In young monkeys given the clinical IV dose, the label reports inflammation and degeneration of sensory neurons here. Similar findings after spinal-fluid dosing paused the older-patient program in 2019. The Itvisma label now warns of sensory nerve problems.'},
        heart: {title: 'Heart', text: 'Troponin, a marker of heart muscle stress, rose transiently in some trial patients without clinical effects. In mice, heart damage and fatal clots in the atria appeared at doses about twice the clinical dose. Doctors check troponin before and after infusion.'},
        liver: {title: 'Liver', text: 'The organ that absorbs the most vector. Raised liver enzymes are common; acute liver failure, including fatal cases, has been reported. Management: liver tests before dosing, prednisolone for at least 30 days, slow tapering, and monitoring for at least three months.'},
        blood: {title: 'Blood and kidneys: TMA', text: 'Platelet counts often dip in the first weeks. Rarely, thrombotic microangiopathy develops, usually within two weeks: small-vessel clots, destroyed red cells and kidney injury. It can be fatal; the label requires close platelet monitoring.'},
        immune: {title: 'Immune memory', text: 'Every treated child makes very high levels of antibodies to AAV9. Children with pre-existing antibodies above a threshold were excluded from trials. After treatment, a second dose of this or any AAV9 therapy is not expected to be possible.'},
      },
      caption: 'Sources: FDA Summary Basis for Regulatory Action (2019) and current US prescribing information for Zolgensma and Itvisma. Schematic.'},

    {type: 'callout', variant: 'misconception', heading: '"One-time treatment" means "cure"',
      html: `<p>Not quite. Zolgensma stops motor neurons dying; it does not bring back the ones already lost. Children treated after symptoms often keep significant weakness, and many need physiotherapy, breathing support, feeding help or orthopaedic surgery. In STR1VE, 59% sat alone at 18 months, which is remarkable against 0%, but it also means 41% did not.</p>
      <p>"One-time" also describes the dose, not the proof of durability. The FDA required 15 years of follow-up for trial patients. Some families and doctors add Spinraza or Evrysdi on top of gene therapy, hoping to add more SMN, although the evidence for combining them is still limited. The honest description is a one-time treatment whose effects have so far lasted as long as anyone has been able to measure.</p>`},

    // ---------------- WHAT CAME NEXT ----------------
    {type: 'story', kicker: 'What came next', title: 'Earlier is better: SPR1NT and newborn screening', tocTitle: 'Treating before symptoms',
      html: `<p>If motor neurons die before diagnosis, the logical move is to treat before there are symptoms at all. That requires finding babies with SMA at birth, before they look sick.</p>
      <p>The SPR1NT trial did exactly that. It enrolled newborns whose genetic tests showed SMA, found through [[newborn screening]] or prenatal testing, and dosed them within six weeks of birth. In the group with two SMN2 copies, children who would otherwise have developed type 1 disease, 14 infants were treated at a median age of 21 days. All 14 sat on their own for at least 30 seconds, 11 of them within the normal age range for healthy babies. By 18 months, 64% were walking alone. None needed permanent breathing support or a feeding tube. In the group with three SMN2 copies, all 15 children stood alone and 14 walked, most within the normal developmental window.</p>
      <p>Compare that with the symptomatic infants in STR1VE: 59% sat at 18 months, and only about 1 in 20 walked. The drug was the same. The difference was the number of motor neurons still alive on the day of the infusion.</p>
      <p>Those results turned newborn screening from a nice-to-have into a moral argument. SMA was added to the US Recommended Uniform Screening Panel in July 2018. Cure SMA, the patient advocacy group that led state-by-state campaigns, reports that within six years every US state was screening, so essentially every baby born in the US is now tested for SMA at birth. Many European countries followed, unevenly.</p>
      <p>Screening also changed the economics. A treatment given at three weeks, which may let a child walk, is worth far more than the same treatment given at seven months. ICER's own price benchmark for Zolgensma rose from at most $1.5 million to up to $2.1 million once the presymptomatic data arrived.</p>`},

    {type: 'explorer', title: 'Treatment age explorer: what the trials reported', tocTitle: 'Treatment age explorer',
      intro: 'Slide from no treatment to treatment in the first weeks of life. Each position shows a real trial group of infants with two SMN2 copies (the type 1 genetics). These were separate single-arm trials, not a randomized comparison, so read the pattern rather than the precise gaps.',
      inputs: [{id: 'stage', label: 'When treated', min: 0, max: 3, step: 1, value: 2, fmt: v => ['Never treated', 'START: ~3.4 mo', 'STR1VE: <6 mo', 'SPR1NT: ~3 wks'][v]}],
      compute: (v, api, el) => {
        const groups = [
          {name: 'Untreated (natural history)', desc: 'Infants with SMA type 1 in the PNCR natural history dataset (n=23), used as the comparison group in STR1VE and SPR1NT.', vals: [26, 0, 0], notes: ['6 of 23 at 14 months', '0 of 23', 'none']},
          {name: 'START high dose (symptomatic)', desc: '12 symptomatic infants, mean age 3.4 months at dosing (range 0.9 to 7.9), hand-made trial batch. Survival measured at 20 months; milestones as of August 2017.', vals: [100, 75, 17], notes: ['12 of 12 at 20 months', '9 of 12', '2 of 12']},
          {name: 'STR1VE-US (symptomatic)', desc: '22 symptomatic infants under 6 months at dosing, commercial product. Survival at 14 months; sitting at the 18-month visit; walking by 18 months as reported in the SPR1NT paper.', vals: [91, 59, 5], notes: ['20 of 22 at 14 months', '13 of 22 at the 18-month visit', 'about 1 in 20']},
          {name: 'SPR1NT (presymptomatic)', desc: '14 infants found by screening or prenatal testing, median age 21 days at dosing. Survival at 14 months; sitting and walking by 18 months.', vals: [100, 100, 64], notes: ['14 of 14', '14 of 14 (11 in the normal age window)', '9 of 14']},
        ];
        const g = groups[v.stage];
        el.innerHTML = '<div style="font:650 17px var(--sans)">' + g.name + '</div><div style="color:var(--ink-2);font-size:15.5px;margin:4px 0 10px">' + g.desc + '</div><div class="age-chart"></div>';
        const series = [{name: g.name, values: g.vals, notes: g.notes}];
        if (v.stage > 0) series.push({name: 'Untreated', values: groups[0].vals, notes: groups[0].notes});
        api.mountChart(el.querySelector('.age-chart'), {kind: 'bar', title: 'Share of infants reaching each outcome', unit: '%',
          categories: ['Alive without ventilator', 'Sat alone ≥30 s', 'Walked alone'],
          series: series.map((s, i) => Object.assign(s, {color: i === 0 ? 1 : 8})), yMax: 100,
          note: 'Sources: Mendell 2017 (START), Day 2021 (STR1VE), Strauss 2022 (SPR1NT). Timepoints differ slightly between trials, as described above.'});
      }},

    {type: 'story', kicker: 'Competition', title: 'Three drugs, one disease, and the older children', tocTitle: 'Competition',
      html: `<p>SMA went from no treatments in 2016 to three by 2020. Spinraza (nusinersen, Biogen and Ionis) is injected into the spinal fluid four times in the first two months and then every four months for life. Evrysdi (risdiplam, Roche with PTC Therapeutics and the SMA Foundation), approved in August 2020, is a liquid taken by mouth every day; it also corrects SMN2 splicing, but reaches the whole body. Zolgensma is one infusion.</p>
      <p>Each has a niche. For a newborn found by screening, a one-time gene therapy is attractive: one hospital visit and the earliest possible boost to SMN. For older children and adults, Zolgensma was not an option at all, because the US label stops at age 2 and the intravenous dose, which scales with body weight, would have been enormous for a bigger child, with liver risk rising with it.</p>
      <p>The answer was to use the same vector but put it where it is needed. Instead of an arm vein, a fixed dose is injected into the fluid around the spinal cord ([[intrathecal]] injection), the way Spinraza is given. The program, called OAV101 IT, was paused in October 2019 over the monkey nerve findings, then resumed. Its phase 3 trial, STEER, randomized 126 treatment-naive patients aged 2 to 17 who could sit but had never walked, to the gene therapy (75) or a sham procedure (51). After 52 weeks the treated group improved by 1.88 points more on the [[HFMSE]] motor scale than the sham group (least-squares mean difference; 95% confidence interval 0.51 to 3.25). That is a statistically significant but modest gain, consistent with stabilizing older patients rather than transforming them. The FDA approved it as Itvisma on 24 November 2025 for SMA patients aged 2 and older: one fixed dose of 1.2 × 10<sup>14</sup> vector genomes, whatever the patient's size, with the same boxed liver warning.</p>
      <p>Commercially, the market divided. Zolgensma's sales flattened at about $1.2 billion a year from 2023, treating mostly newly diagnosed infants, while the chronic therapies kept the larger population of older patients.</p>
      <h3>The wider field</h3>
      <p>Zolgensma is the gene therapy that worked commercially, and even it has not yet earned back its purchase price in revenue. Others fared worse. Glybera, the first gene therapy approved in the West, in 2012, was priced at about $1 million and by 2016 had been used in only one paying patient; its maker let the license lapse in 2017. bluebird bio, once a flagship of the field with several approved gene therapies, struggled to sell them and was taken private by Carlyle and SK Capital in 2025. The recurring problems are the ones in this case: tiny patient populations, very high manufacturing costs, payers who must pay everything up front for benefits spread over decades, and competition from chronic drugs that are easier to switch on and off.</p>`},

    {type: 'table', title: 'The three SMA drugs side by side', tocTitle: 'Drug comparison',
      columns: ['', 'Spinraza (nusinersen)', 'Evrysdi (risdiplam)', 'Zolgensma (onasemnogene abeparvovec)'],
      rows: [
        ['How it works', 'Corrects [[SMN2]] splicing ([[antisense oligonucleotide]])', 'Corrects SMN2 splicing ([[small molecule]])', 'Adds a working [[SMN1]] copy ([[AAV9]] [[gene therapy]])'],
        ['How given', 'Injection into spinal fluid; 4 loading doses, then every 4 months', 'Liquid by mouth, daily', 'One IV infusion (Itvisma: one [[intrathecal]] injection)'],
        ['First US approval', 'December 2016', 'August 2020', 'May 2019 (Itvisma: November 2025)'],
        ['Who (US label)', 'All ages', 'All ages', 'Under 2 years (Itvisma: 2 and older)'],
        ['US list price at launch', '$750,000 first year, then $375,000 a year', 'Not covered in this case', '$2.125 million once'],
        ['Main downsides', 'Repeated lumbar punctures for life', 'Daily dosing for life', 'Liver injury and TMA risk; cannot be repeated'],
      ],
      caption: 'Spinraza price from ICER\'s 2019 report; Zolgensma price from Novartis. List prices, not net.'},

    {type: 'callout', variant: 'product', heading: 'Sequencing the launch: beachhead first, then expand',
      html: `<p>Zolgensma's path looks like a classic product strategy. Launch in the narrowest segment where the value is overwhelming and the competition weakest (infants under 2, where a one-time product beats lifelong injections). Use that beachhead to fund a second product (the spinal-fluid formulation) aimed at a larger, harder segment (older patients). Meanwhile, push for a change in the distribution channel (newborn screening) that sends more customers to the segment you win.</p>
      <p>Where it breaks: each expansion needed its own randomized trial, took six years, and delivered a much smaller effect. Newborn screening was driven by patient advocates and public-health bodies, not a marketing budget. And the "customers" in the beachhead segment are dying babies whose families face a two-week window, which puts ethical limits on any growth playbook.</p>`},

    // ---------------- QUIZ ----------------
    {type: 'quiz', title: 'Check your understanding',
      questions: [
        {q: 'Why could an intravenous gene therapy work for SMA when earlier brain gene therapies needed injections through the skull?', options: ['Because SMN protein can travel from the blood into neurons', 'Because the AAV9 capsid can cross from the bloodstream into the spinal cord, especially in infants', 'Because SMA damages the blood-brain barrier', 'Because the vector copies itself once it reaches the spinal cord'], answer: 1, explain: 'The 2009 Foust and Kaspar paper showed that AAV9 injected into a vein reached motor neurons in newborn mice. The vector does not replicate, and SMN protein itself does not cross into neurons from the blood.'},
        {q: 'Why is Zolgensma given only once?', options: ['Because one dose is enough to fix the SMN1 gene permanently in every cell', 'Because a second dose would be too expensive', 'Because the body makes strong antibodies against the AAV9 shell that would neutralize a second dose', 'Because the FDA only approved one vial per patient'], answer: 2, explain: 'Antibody levels rose to at least 1:102,400 in every START patient. The FDA\'s reviewers expected this to rule out re-dosing. The vector adds a copy of the gene alongside the broken ones; it does not repair them, and it persists mainly in cells that do not divide.'},
        {q: 'START had no control group. Why did regulators nonetheless accept its comparison with historical patients as meaningful?', options: ['Because historical controls are always as good as randomization', 'Because the untreated disease was well documented and the effect was enormous (8% versus 100% event-free survival, milestones never seen before)', 'Because the trial was double-blind', 'Because the FDA does not require efficacy evidence for rare diseases'], answer: 1, explain: 'Historical controls are vulnerable to bias, but a bias big enough to explain this gap is implausible. The same design would not have been convincing for a small effect, and the FDA still relied mainly on the phase 3 trial with commercial product.'},
        {q: 'What did the FDA discover about the doses used in START?', options: ['That the babies received ten times the intended dose', 'That the original assay measuring the batch concentration was inaccurate, so the doses were restated from 2.0 × 10¹⁴ to about 1.1 × 10¹⁴ vg/kg and could not be determined precisely', 'That two different batches were mixed', 'That the doses were correct but the patients\' weights were wrong'], answer: 1, explain: 'A single batch was used. Remeasured with a better assay 44 months after manufacture, and given that the product degrades in storage, the FDA could only estimate the dose range.'},
        {q: 'Novartis set the price at $2.125 million. Which argument did it lead with?', options: ['The cost of manufacturing one dose', 'About half the estimated $4.1 million ten-year cost of chronic SMA therapy', 'The cost of the $8.7 billion acquisition divided by expected patients', 'ICER\'s original benchmark'], answer: 1, explain: 'Novartis compared the price with ten years of chronic therapy (essentially Spinraza at list price) and cited internal studies valuing the drug at $4 to $5 million. ICER\'s initial range topped out at $1.5 million; after updating with presymptomatic data, it said the price was within the upper bound of its range.'},
        {q: 'Why is paying for a one-time therapy particularly hard for a US insurer?', options: ['Because insurers cannot legally pay more than $1 million for any one treatment', 'Because the whole cost lands at once, on whichever insurer covers the child that day, while benefits accrue over decades, possibly after the child has moved to another insurer', 'Because gene therapies are not covered by Medicaid', 'Because the price rises every year'], answer: 1, explain: 'This mismatch is why Novartis offered five-year instalments and outcomes-based refunds, and why these models are debated for every new gene therapy.'},
        {q: 'What was actually wrong in the 2019 data manipulation disclosure?', options: ['Infant survival data in START were altered', 'Some mouse potency test data in the approval dossier were manipulated, and AveXis knew before approval but told the FDA only afterwards', 'The company hid deaths in the phase 3 trial', 'The drug\'s price was misreported to Medicaid'], answer: 1, explain: 'The FDA said the human data were unaffected and the product stayed on the market. It closed the inspection as "voluntary action indicated" without penalties in 2020, but publicly criticized the late disclosure.'},
        {q: 'In SPR1NT, all 14 presymptomatic infants with two SMN2 copies sat alone, versus 59% of symptomatic infants in STR1VE. What is the best explanation?', options: ['SPR1NT used a stronger version of the drug', 'Treating before symptoms preserves motor neurons that would otherwise have died before the infusion', 'SPR1NT infants had milder genetics', 'SPR1NT measured sitting for a shorter time'], answer: 1, explain: 'Same product and dose, same two-copy genetics. The difference is how many motor neurons were still alive on treatment day, which is why newborn screening became so important.'},
        {q: 'Why was a spinal-fluid (intrathecal) version needed for older patients rather than simply giving them the IV drug?', options: ['Older patients have no blood-brain barrier', 'The IV dose scales with body weight, so a bigger child would need a far larger dose, with more vector going to the liver and more manufacturing needed; a fixed spinal-fluid dose puts the vector where it is needed', 'Because IV infusions are illegal after age 2', 'Because Spinraza owns the IV route'], answer: 1, explain: 'A 20 kg child would need about 2.2 × 10¹⁵ vector genomes by vein, versus a fixed 1.2 × 10¹⁴ for Itvisma. AAV9 also reaches neurons less efficiently from the blood after infancy. The STEER trial showed a modest but significant benefit.'},
      ]},

    // ---------------- LESSONS ----------------
    {type: 'lessons', title: 'What this case teaches',
      items: [
        {title: 'Delivery is the product', text: 'The SMN gene was known from 1995. What made Zolgensma possible was a 2009 discovery about a virus shell. In modalities from antisense to mRNA to ADCs, the courier is often the breakthrough, and the source of the side effects.', links: ['spinraza', 'comirnaty', 'enhertu']},
        {title: 'In irreversible diseases, timing beats potency', text: 'The same infusion let most babies walk when given at three weeks and left most unable to walk at four months. When damage cannot be undone, diagnosis and screening can matter as much as the drug, a lesson Alzheimer\'s drugs have run into too.', links: ['leqembi', 'aduhelm', 'spinraza']},
        {title: 'One-time therapies break payment models', text: 'Payers built for monthly bills struggle with a single $2 million charge whose benefits last decades. Instalments, outcomes-based refunds and value benchmarks are all attempts to fit a cure into a subscription world, as hepatitis C cures and CAR-T also showed.', links: ['sovaldi', 'kymriah', 'humira']},
        {title: 'For biologics, the process is the product', text: 'Europe judged Zolgensma on its commercial batches, not the hand-made trial batch; the FDA could not pin down the phase 1 dose; the data scandal sat in a manufacturing assay. For living medicines, measurement and manufacturing are part of the evidence.', links: ['kymriah', 'exubera', 'humira']},
        {title: 'Trust with regulators is a long-term asset', text: 'Late disclosure of manipulated mouse data cost Novartis little in penalties but much in reputation, at the worst moment. Cases where companies hid or delayed bad news show how expensive that can become.', links: ['vioxx', 'aduhelm', 'tgn1412']},
        {title: 'Huge effects can justify small, uncontrolled trials, but only huge effects', text: 'Zolgensma was approved on single-arm trials against natural history because the gap was enormous. Modest effects need randomized controls; the intrathecal version, with a smaller effect, needed a sham-controlled trial.', links: ['gleevec', 'keytruda', 'epacadostat']},
      ]},

    // ---------------- SOURCES ----------------
    {type: 'sources', title: 'Sources',
      items: [
        {text: 'Mendell JR, Al-Zaidy S, Shell R, et al. Single-dose gene-replacement therapy for spinal muscular atrophy. N Engl J Med 2017;377:1713–22 (START results, historical comparison, dosing, enrolment dates, liver findings, funding).', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1706198'},
        {text: 'Foust KD, Nurre E, Montgomery CL, et al., Kaspar BK. Intravascular AAV9 preferentially targets neonatal neurons and adult astrocytes. Nat Biotechnol 2009;27:59–65.', url: 'https://www.nature.com/articles/nbt.1515'},
        {text: 'Retraction Note: Rescue of the spinal muscular atrophy phenotype in a mouse model by early postnatal delivery of SMN. Nat Biotechnol, October 2022; and Retraction Watch coverage, 7 October 2022.', url: 'https://retractionwatch.com/2022/10/07/paper-by-gene-therapy-zolgensma-developer-retracted-because-of-discrepancies-in-mouse-survival-rates'},
        {text: 'Lefebvre S, Bürglen L, Reboullet S, et al., Melki J. Identification and characterization of a spinal muscular atrophy-determining gene. Cell 1995;80:155–65.', url: 'https://doi.org/10.1016/0092-8674(95)90460-3'},
        {text: 'US FDA. Summary Basis for Regulatory Action: Zolgensma, 24 May 2019 (regulatory history, construct, dose restatement, stability, potency assays, safety database, antibodies, no advisory committee).', url: 'https://www.fda.gov/media/127961/download'},
        {text: 'US FDA. FDA approves innovative gene therapy to treat pediatric patients with spinal muscular atrophy (press release, 24 May 2019).', url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-innovative-gene-therapy-treat-pediatric-patients-spinal-muscular-atrophy-rare-disease'},
        {text: 'Zolgensma (onasemnogene abeparvovec-xioi) US Prescribing Information, revised 2026 (boxed warning, dosing, kits, TMA, biodistribution, nonclinical toxicology).', url: 'https://www.fda.gov/media/126109/download'},
        {text: 'European Medicines Agency. Zolgensma EPAR public assessment report, EMA/200482/2020 (manufacturing process, HEK293 triple transfection, Process A versus B, major objections, conditional authorisation).', url: 'https://www.ema.europa.eu/en/documents/assessment-report/zolgensma-epar-public-assessment-report_en.pdf'},
        {text: 'US FDA. Statement on data accuracy issues with recently approved gene therapy, 6 August 2019.', url: 'https://www.fda.gov/news-events/press-announcements/statement-data-accuracy-issues-recently-approved-gene-therapy'},
        {text: 'BioPharma Dive. No sanctions for Novartis as FDA ends review of gene therapy violations, 2020; BioSpace, FDA ends Zolgensma data manipulation investigation, 2020; Fierce Pharma, Novartis to FDA: ousted AveXis execs doctored Zolgensma data themselves, 2019.', url: 'https://www.biopharmadive.com/news/novartis-zolgensma-fda-data-review-form-483/575142/'},
        {text: 'US Senate Finance Committee. Grassley pressures drug manufacturer over data manipulation, 12 August 2019.', url: 'https://www.finance.senate.gov/chairmans-news/grassley-pressures-drug-manufacturer-over-data-manipulation'},
        {text: 'Dolgin E. News Feature: Gene therapy successes point to better therapies. PNAS, 26 November 2019 (intrathecal study pause, Marks "isolated incident").', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6883820'},
        {text: 'Novartis. Novartis enters agreement to acquire AveXis Inc. for USD 8.7 bn, 9 April 2018; AveXis press release on GlobeNewswire (88% premium); Novartis Form 20-F 2018 (closing 15 May 2018).', url: 'https://www.novartis.com/news/media-releases/novartis-enters-agreement-acquire-avexis-inc-usd-87-bn-transform-care-sma-and-expand-position-gene-therapy-and-neuroscience-leader'},
        {text: 'Novartis. AveXis announces innovative Zolgensma gene therapy access programs for US payers and families, 24 May 2019 ($2.125M, $425,000 over five years, outcomes-based agreements, $4.1M ten-year comparison).', url: 'https://www.novartis.com/news/media-releases/avexis-announces-innovative-zolgensma-gene-therapy-access-programs-us-payers-and-families'},
        {text: 'Novartis. AveXis receives FDA approval for Zolgensma, 24 May 2019 (START and STR1VE interim data, Mendell quote).', url: 'https://www.novartis.com/news/media-releases/avexis-receives-fda-approval-zolgensma-first-and-only-gene-therapy-pediatric-patients-spinal-muscular-atrophy-sma'},
        {text: 'STAT. At $2.1 million, newly approved Novartis gene therapy will be world\'s most expensive drug, 24 May 2019.', url: 'https://www.statnews.com/2019/05/24/hold-novartis-zolgensma-approval/'},
        {text: 'ICER. ICER issues final report on Spinraza and Zolgensma, 3 April 2019; and ICER comments on the FDA approval of Zolgensma, 24 May 2019.', url: 'https://icer.org/news-insights/press-releases/icer_comment_on_zolgensma_approval/'},
        {text: 'ProPublica. What a $2 million per dose gene therapy reveals about drug pricing, 2019 (public and charity funding, AveXis origins, Lennon quote, acquisition payouts).', url: 'https://www.propublica.org/article/zolgensma-sma-novartis-drug-prices-gene-therapy-avexis'},
        {text: 'The Scientist. Lottery underway for rare muscle-wasting disease gene therapy, 2020; Axios, Novartis is offering a lottery for Zolgensma, 20 December 2019.', url: 'https://www.the-scientist.com/lottery-underway-for-rare-muscle-wasting-disease-gene-therapy-66930'},
        {text: 'BioPharma Dive. Novartis reports deaths of two patients treated with Zolgensma gene therapy, 11 August 2022; STAT, same date (ages, timing).', url: 'https://www.biopharmadive.com/news/novartis-zolgensma-patient-death-liver-injury/629542/'},
        {text: 'Day JW, Finkel RS, Chiriboga CA, et al. Onasemnogene abeparvovec gene therapy for symptomatic infantile-onset SMA in patients with two copies of SMN2 (STR1VE). Lancet Neurol 2021;20:284–93.', url: 'https://doi.org/10.1016/S1474-4422(21)00001-6'},
        {text: 'Strauss KA, Farrar MA, Muntoni F, et al. Onasemnogene abeparvovec for presymptomatic infants with two copies of SMN2 (SPR1NT). Nat Med 2022;28:1381–9; and the companion paper on three SMN2 copies, Nat Med 2022;28:1390–7.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9205281/'},
        {text: 'Intrathecal onasemnogene abeparvovec in treatment-naive patients with SMA: a phase 3, randomized controlled trial (STEER). Nat Med, December 2025.', url: 'https://doi.org/10.1038/s41591-025-04103-w'},
        {text: 'US FDA. FDA approves gene therapy treatment for spinal muscular atrophy (Itvisma), 24 November 2025; Novartis press release, same date; Cure SMA Itvisma page (dose 1.2 × 10¹⁴ vg).', url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-gene-therapy-treatment-spinal-muscular-atrophy'},
        {text: 'Novartis quarterly and annual financial reports: Q4 2020, Q4 2021 (SEC Form 6-K), Q4 2023, Q4 2024 and Q4 2025 (Zolgensma net sales 2019–2025; 58 countries and 4,500+ patients).', url: 'https://www.novartis.com/sites/novartis_com/files/q4-2025-interim-financial-report-en.pdf'},
        {text: 'Cure SMA. Newborn screening for SMA (RUSP addition July 2018; all US states screening).', url: 'https://www.curesma.org/newborn-screening-for-sma/'},
        {text: 'Dhillon S. Risdiplam: first approval. Drugs 2020;80:1853–8.', url: 'https://doi.org/10.1007/s40265-020-01410-z'},
        {text: 'MIT Technology Review. The world\'s most expensive medicine is a bust (Glybera), 4 May 2016; bluebird bio, Announces completion of acquisition by Carlyle and SK Capital, Business Wire, 2 June 2025.', url: 'https://www.technologyreview.com/2016/05/04/245988/the-worlds-most-expensive-medicine-is-a-bust/'},
        {text: 'Published AAV manufacturing yields: Improving AAV production yield and quality for different serotypes, ACS Omega 2025 (lab-scale yields of about 10¹² to 10¹⁴ vg/L); Advancing AAV vector manufacturing, Front Mol Med 2025.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12163755/'},
      ]},
  ],
});
