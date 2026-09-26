// DEMO case: a fictional drug that exercises every section type. Copy patterns from here; see GUIDE.md.
registerCase({
  id: 'demo', kind: 'success',
  brand: 'Examplimab', generic: 'examplimab (fictional)', company: 'Demo Bio',
  tagline: 'A made-up [[antibody]] used to show every building block of a case file.',
  chips: [['Disease', 'Demo disease'], ['Modality', '[[monoclonal antibody]]'], ['Target', 'Receptor X'], ['Approved', '2020']],
  readingTime: 5,
  stats: [{v: '12 yrs', l: 'From discovery to approval'}, {v: '640', l: 'Patients in the [[pivotal trial]]'}, {v: '0.62', l: '[[hazard ratio]] for death', n: 'Illustrative only'}, {v: '$4.1B', l: 'Peak annual sales'}],
  emblem: `<svg viewBox="0 0 300 300"><circle cx="150" cy="150" r="130" class="il-1s"/><path d="M150 230 V150 M150 150 L100 90 M150 150 L200 90" class="il-line2 st-1" stroke-linecap="round" fill="none" stroke-width="16"/><circle cx="100" cy="90" r="18" class="il-2"/><circle cx="200" cy="90" r="18" class="il-2"/></svg>`,
  facts: {start: 2008, approval: 2020, peakSalesB: 4.1, pivotalN: 640},
  themes: ['biomarkers'],
  glossary: {'Receptor X': 'The fictional receptor examplimab blocks.'},
  sections: [
    {type: 'story', title: 'The problem', html: `<p>Demo disease is driven by an overactive [[receptor]] called [[Receptor X]]. Two sentences of story go here, written for a reader with no biology background.</p><blockquote class="pull">A pull quote for emphasis.<cite>Someone, 2019</cite></blockquote>`},
    {type: 'figure', title: 'Anatomy of an antibody', intro: 'Hover or tap each part.',
      svg: `<svg viewBox="0 0 700 320">
        <g data-part="arms"><path d="M350 170 L270 70 M350 170 L430 70" class="il-line2 st-1" stroke-width="22" stroke-linecap="round" fill="none"/></g>
        <g data-part="stem"><path d="M350 170 V290" class="st-6" stroke-width="22" stroke-linecap="round"/></g>
        <g data-part="tips"><circle cx="270" cy="70" r="20" class="il-2"/><circle cx="430" cy="70" r="20" class="il-2"/></g>
        <text x="470" y="75" class="il-text">Binding tips</text><text x="120" y="130" class="il-text">Arms</text><text x="380" y="270" class="il-text">Stem (Fc)</text></svg>`,
      hotspots: {tips: {title: 'Binding tips', text: 'The part that grabs the [[antigen]].'}, arms: {title: 'Arms', text: 'Two identical arms, so one antibody can hold two targets.'}, stem: {title: 'Stem (Fc)', text: 'Signals to the immune system and sets the [[half-life]].'}},
      caption: 'A figure with hotspots. Colours come from the il-* classes so dark mode works.'},
    {type: 'mechanism', title: 'How it works', intro: 'Step through it.',
      svg: `<svg viewBox="0 0 700 360">
        <rect x="0" y="230" width="700" height="130" class="il-3s" data-part="cell"/><text x="20" y="340" class="il-text-2" data-part="cell">Inside the cell</text>
        <g data-part="receptor"><rect x="330" y="170" width="40" height="110" rx="10" class="il-6"/><text x="380" y="200" class="il-text">Receptor X</text></g>
        <g data-part="signal"><circle cx="350" cy="120" r="16" class="il-4"/><text x="372" y="125" class="il-text-2">growth signal</text></g>
        <g data-part="drug"><path d="M350 40 V0 M350 40 L320 10 M350 40 L380 10" class="st-1" stroke-width="10" stroke-linecap="round"/></g>
        <g data-part="arrows"><path d="M350 290 V340" class="il-line2 st-7 flow" fill="none"/></g></svg>`,
      steps: [
        {title: 'The cell and its receptor', text: 'A [[receptor]] sits in the membrane.', show: ['cell', 'receptor']},
        {title: 'The signal arrives', text: 'A growth signal docks and switches the receptor on.', show: ['cell', 'receptor', 'signal', 'arrows'], focus: ['signal'], move: {signal: 'translate(0px, 40px)'}, pulse: ['arrows']},
        {title: 'The drug blocks it', text: 'Examplimab binds first, so the signal can\'t dock.', show: ['cell', 'receptor', 'signal', 'drug'], dim: ['arrows'], move: {drug: 'translate(0px, 95px)', signal: 'translate(-120px, 0px)'}, focus: ['drug']},
      ]},
    {type: 'callout', variant: 'product', heading: 'Like rate-limiting an API', html: '<p>A software analogy, and exactly where it breaks.</p>'},
    {type: 'timeline', title: 'Timeline', events: [
      {year: 2008, title: 'Receptor X discovered', kind: 'science', text: 'A lab finds it.'},
      {year: 2012, title: 'First patient dosed', kind: 'clinical'},
      {year: 2015, date: 'Mar 2015', title: 'Licensing deal', kind: 'business', text: '$50M upfront.'},
      {year: 2017, title: 'Phase 2 miss in wrong patients', kind: 'setback'},
      {year: 2020, title: 'FDA approval', kind: 'regulatory'}]},
    {type: 'trial', title: 'The pivotal trial', intro: 'Design first, then predict, then see.',
      design: {name: 'DEMO-1', phase: 'Phase 3', blinding: 'Double-blind', years: '2016–2019', n: 640, population: 'Adults with demo disease who had one prior treatment', randomization: '1:1',
        arms: [{name: 'Examplimab', n: 320, desc: 'IV every 3 weeks'}, {name: 'Placebo', n: 320, desc: 'IV every 3 weeks', control: true}], endpoint: 'Overall survival',
        details: {'Primary endpoint': '[[overall survival]]', 'Key secondary': '[[progression-free survival]]'}},
      predict: {q: 'What do you think happened?', options: ['No difference', 'A modest survival gain', 'Everyone was cured'], answer: 1, explain: 'A modest but real gain, typical of a first-in-class drug.'},
      results: [
        {kind: 'km', title: 'Overall survival', subtitle: 'Schematic curves drawn from the reported medians', xLabel: 'Months', unit: '%', yMax: 100, xMax: 36,
          series: [{name: 'Examplimab', points: [[0, 100], [6, 88], [12, 72], [18, 60], [24, 50], [30, 44], [36, 40]]}, {name: 'Placebo', points: [[0, 100], [6, 80], [12, 58], [18, 45], [24, 35], [30, 29], [36, 26]], color: 8}],
          markers: [{x: 24, y: 50, label: 'median 24 mo', series: 0}], note: 'Illustrative.'},
        {kind: 'bar', title: 'Response rate', unit: '%', categories: ['Examplimab', 'Placebo'], series: [{name: 'Response', values: [41, 12]}], colorByCategory: true}],
      takeaway: 'The takeaway in one or two sentences.'},
    {type: 'chart', title: 'Sales', chart: {kind: 'line', title: 'Annual sales', unit: '$B', series: [{name: 'Examplimab', points: [[2020, 0.4], [2021, 1.5], [2022, 2.9], [2023, 4.1], [2024, 3.2]]}], annotations: [{x: 2023.5, label: 'Competitor launches'}], note: 'Fictional.'}},
    {type: 'decision', title: 'You decide', role: 'You are the CEO, 2017', scenario: 'Phase 2 missed. Do you...', options: [
      {label: 'Kill the programme', outcome: 'You save money but miss the drug.'},
      {label: 'Re-run phase 2 in biomarker-positive patients', outcome: 'Costly but targeted.'}], reality: 'They re-ran it in [[biomarker]]-selected patients.'},
    {type: 'table', title: 'Compare', columns: ['', 'Examplimab', 'Old drug'], rows: [['Dosing', 'Every 3 weeks', 'Daily'], ['Response', '41%', '12%']]},
    {type: 'explorer', title: 'What is it worth?', intro: 'A toy [[rNPV]].', inputs: [
      {id: 'p', label: 'Chance of approval', min: 5, max: 95, value: 40, fmt: v => v + '%'},
      {id: 'peak', label: 'Peak sales', min: 1, max: 10, value: 4, fmt: v => '$' + v + 'B'}],
      compute: v => `Risk-adjusted value ≈ <b>$${(v.p / 100 * v.peak * 3).toFixed(1)}B</b> (toy formula).`},
    {type: 'custom', title: 'Custom interactive', html: '<div class="card">Anything bespoke: <button class="btn" id="demoBtn">Click</button> <span id="demoOut"></span></div>',
      init: (root) => { root.querySelector('#demoBtn').onclick = () => root.querySelector('#demoOut').textContent = 'It works.'; }},
    {type: 'quiz', title: 'Check yourself', questions: [
      {q: 'What does examplimab block?', options: ['Receptor X', 'Receptor Y'], answer: 0, explain: 'Receptor X.'}]},
    {type: 'lessons', title: 'What this case teaches', items: [{title: 'Pick patients with a biomarker', text: 'One sentence.', links: ['keytruda']}]},
    {type: 'sources', title: 'Sources', items: [{text: 'Example source, Journal 2020', url: 'https://example.org'}]},
  ],
});
