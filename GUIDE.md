# Case Files: writing guide

Each case is a long-form interactive web page (about 30 minutes) that teaches one landmark drug, or one famous failure, to a smart reader who has a **software product background and no biology background**. The reader wants to break into biotech. Every page should leave them understanding the biology, the science, the trials, the regulators, the money, and the judgment calls, well enough to talk about the case with someone who works in the industry.

Everything is static: `case.html?id=<id>` loads `shared/engine.js` and then `cases/<id>.js`. **You write exactly one file: `cases/<id>.js`.** Do not edit anything in `shared/`. If you find an engine bug or need a missing feature, work around it (a `custom` section can do almost anything) and mention it in your final report.

Open `cases/demo.js` to see every section type used once. Render it with `shared/check.sh demo`.

---

## 1. The file

```js
registerCase({
  id: 'keytruda',                 // must match the file name and the id in shared/cases-index.js
  kind: 'success',                // 'success' | 'failure'
  brand: 'Keytruda', generic: 'pembrolizumab', company: 'Merck & Co. (MSD)',
  tagline: 'One sentence that makes the reader want to keep going. May use [[terms]].',
  chips: [['Disease', '...'], ['Modality', '[[monoclonal antibody]]'], ['Target', 'PD-1'], ['Approved', '2014']],
  readingTime: 30,
  stats: [ {v: '$29.5B', l: '2024 sales, the best-selling drug in the world', n: 'Merck annual report'} , ... ],   // 4–6 tiles
  emblem: `<svg viewBox="0 0 300 300">...</svg>`,    // a hero illustration, iconic, simple
  facts: {start: 1992, firstHuman: 2011, approval: 2014, end: null, peakSalesB: 29.5, pivotalN: 305,
          area: 'oncology', modality: 'antibody', target: 'PD-1'},   // used by the hub; null when not applicable
  themes: ['biomarkers', 'competition'],   // 2–4 from the fixed list below
  glossary: { 'PD-1': 'definition', ... }, // every case-specific term you mark with [[ ]]
  sections: [ ... ],
});
```

**Themes (fixed list):** `biomarkers`, `surrogate-endpoints`, `pricing`, `platform`, `speed`, `safety`, `regulatory`, `dealmaking`, `manufacturing`, `patient-advocacy`, `competition`, `biology-surprise`.

**Hub `facts.area`:** one of `oncology`, `immunology`, `metabolic`, `neuro`, `rare`, `infectious`, `cardio`.

---

## 2. Section types

All text fields accept HTML and the glossary markup `[[term]]` or `[[term|shown text]]`. Terms are looked up case-insensitively in `shared/glossary.js` (about 150 general terms, so check there first) and then in your `glossary`. The console warns `CF_MISSING_TERMS` for any term that isn't defined; fix every one.

| type | fields | notes |
|---|---|---|
| `story` | `title?, kicker?, intro?, html` | Long-form prose. Use `<p>`, `<h3>`, `<ul>`, `<blockquote class="pull">…<cite>…</cite></blockquote>`, `<aside class="note">`. |
| `figure` | `title, intro?, svg, caption?, hotspots?: {part: {title, text}}, hint?` | Explorable diagram. Elements with `data-part="x"` become hoverable/clickable when `hotspots.x` exists. |
| `mechanism` | `title, intro?, svg, steps: [{title, text, show?, dim?, focus?, pulse?, move?}], interval?` | Step-through animation. Every element with `data-part` is controlled per step: in `show` = visible; in `dim` = faint; neither (when `show` is given) = hidden. `focus` = glow; `pulse` = blink; `move: {part: 'translate(40px, 10px) scale(1.2)'}` animates position (px = SVG user units). Omit `show` to show everything. Moves are not cumulative: each step states its own transforms. |
| `timeline` | `title, intro?, events: [{year, date?, title, text?, kind}]` | `kind`: `science`, `clinical`, `regulatory`, `business`, `setback`, `people`. Filter chips and a year strip are automatic. |
| `trial` | `title, intro?, design, predict?, results: [chartSpec], takeaway?` | `design: {name, phase, blinding, years, n, population, randomization ('1:1' or null for single-arm), arms: [{name, n, desc, control?}], endpoint, details: {label: html}}`. The engine draws the design diagram. With `predict: {q, options, answer, explain}` the results stay hidden until the reader predicts. |
| `chart` | `title, intro?, chart: chartSpec, takeaway?` | |
| `callout` | `variant, heading?, html, label?` | `variant`: `lesson` (key idea), `product` (**product lens**: a software/product analogy AND where it breaks), `misconception`, `numbers` (by the numbers), `whatif` (counterfactual). A callout without a `title` sits snugly under the previous section. |
| `decision` | `title, role, scenario, options: [{label, outcome}], reality` | A real fork in the history. The reader picks; the outcome of their choice appears, then what actually happened. Make the options genuinely tempting; no strawmen. |
| `table` | `title, intro?, columns, rows, caption?` | Cells accept HTML and terms. |
| `explorer` | `title, intro?, inputs: [{id, label, min, max, step?, value, fmt?}], compute(v, api, el)` | Sliders. `compute` returns an HTML string, or draws into `el` itself (e.g. `api.mountChart(el, spec)`). |
| `custom` | `title, intro?, html, init(root, api), wide?` | Anything bespoke: simulators, drag-and-drop, calculators, animated SVG. `api` has `esc, fmt, terms, chart, mountChart, showTip, hideTip, store, color, unitFmt, el, $, $$`. Give elements `data-tip="html"` for hover tooltips. |
| `quiz` | `title, questions: [{q, options, answer (0-based), explain}]` | 8–10 questions at the end. Test understanding and judgment, not trivia. Wrong options should be plausible misconceptions. |
| `lessons` | `title, items: [{title, text, links: [caseIds]}]` | 4–6 transferable lessons, each linked to 1–3 other cases that echo or contrast it. |
| `sources` | `title, items: [{text, url?}]` | Last section. |

Any section can have `kicker` (small caps label above the title), `anchor` (custom id), `tocTitle` (short name for the sidebar) and `toc: false`.

**chartSpec**
- `{kind: 'line', title, subtitle?, unit ('$B' | '$M' | '%' | 'text unit'), series: [{name, short?, points: [[x, y], …], color? (1–8), dashed?}], annotations?: [{x, label, dy?}], yMax?, xTicks?, xFmt?, note?}`
- `{kind: 'km', …same…, xLabel: 'Months', unit: '%', yMax: 100, xMax, markers?: [{x, y, label, series}]}`: step curves for survival data. **Always** set `subtitle` or `note` to say they are schematic, e.g. "Schematic curves drawn from the reported medians and landmark rates, not digitized from the paper."
- `{kind: 'bar', title, unit, categories: [...], series: [{name, values: [...], notes?: [...]}], horizontal?, colorByCategory?, labelWidth?}`

Colours: series use the validated categorical order automatically (1 blue, 2 orange, 3 aqua, 4 yellow, 5 magenta, 6 green, 7 violet, 8 red). Put the drug in slot 1 and the control or placebo in slot 8 (red) or 2 (orange). Keep to four or fewer series per chart.

---

## 3. The arc (about 30 minutes)

Aim for **5,500–7,500 words of prose** (the check script prints `words`; at 230 words a minute plus the interactives that's about 30–35 minutes) and **at least 10 interactive pieces** (mechanism, figures with hotspots, trial with predict, decisions, explorers, custom, quiz). Vary the rhythm: never more than about 900 words of prose without a visual or an interaction.

**Landmark drugs**, roughly in this order (adapt to the story):
1. **Cold open** (story, 300–500 words): a concrete scene: a patient, a lab moment, a boardroom. Make the stakes human.
2. **The disease from zero** (story + figure with hotspots): what goes wrong in the body, for someone who last did biology at school. What treatment looked like before.
3. **The key insight** (story): the science that made the drug possible. Who saw it, and why others didn't.
4. **How it works** (mechanism, 5–8 steps): the centrepiece illustration.
5. **Timeline** (15–25 events across science, clinical, regulatory, business, setbacks, people).
6. **Building the drug** (story + figure/custom): the chemistry or engineering problem and how it was solved.
7. **The trials** (1–2 trial sections with predict + results; plus story on design choices, endpoints, and what could have gone wrong).
8. **Decision points** (2–3 decisions placed where they happened, not bunched together).
9. **Regulators** (story or table): the approval path, designations, advisory committees, label.
10. **The money** (chart of annual sales or prices; explorer or custom for pricing, market size, or deal value; story on deals and pricing).
11. **What came next** (competition, new indications, patents, copies, legacy).
12. **Callouts spread throughout**: at least 3 `product` lens, 1 `misconception`, 1 `numbers`, 1 `whatif`.
13. **Quiz** (8–10), **Lessons** (4–6, cross-linked), **Sources** (12–30).

**Failures** use the same components with a different arc: the promise, what everyone believed and why it was reasonable, the warning signs (with hindsight but fairly), the moment of failure (make the reader feel it), the post-mortem (what was actually wrong, scientifically and organisationally), what would have caught it earlier, and what the field changed afterwards. Failures deserve as much depth and as many visuals as the successes, and they are often more instructive.

**Product lens callouts** are where this reader gets the most value. Tie the case to something they know (roadmaps and kill decisions, platform vs point solution, beta programmes and staged rollout, pricing and willingness to pay, network effects, technical debt, metrics that can be gamed, launch vs adoption), then say precisely where the analogy breaks (irreversibility, decade-long iteration loops, regulators, the ethics of testing on people).

---

## 4. Illustration rules

Illustrations are the heart of these pages. Draw them as inline SVG by hand:
- **Colours only through classes or vars**, never hex: fills `il-1`…`il-8` (strong), `il-1s`…`il-8s` (soft tints), `il-paper`, `il-bg`, `il-none`; strokes `il-line`, `il-line2`, `st-1`…`st-7`, `st-ink`, `il-dash`; text `il-title`, `il-text`, `il-text-2`, `il-small`, `il-num`, `il-white` (white text on strong fills). Inside `style=""` you may use `var(--il-1)` etc. This is what makes dark mode work.
- Colour roles (keep them consistent within a case): drug = `il-1` blue; target, receptor or disease = `il-2` orange or `il-7` red; healthy or immune = `il-3` aqua; signals or molecules = `il-4` yellow; cells and tissue = soft tints; money = `il-6` violet.
- Use a `viewBox` (mechanism about 760×440; figures about 900×420; emblem 300×300). Text at least 12 user units. Label things directly on the diagram rather than with a legend.
- Style: flat, friendly, precise. Rounded shapes, 1.5–2.5 stroke lines, generous whitespace. Draw cells as big soft rounded shapes, membranes as double lines, proteins as simple distinct silhouettes (Y for antibodies, ribbon or blob for enzymes, bar in the membrane for receptors), DNA as a ladder or helix, RNA as a single wavy strand. Keep a consistent visual vocabulary across the case.
- Animations: `class="flow"` on a stroked path gives a moving dashed flow; `pulse` in a step pulses a part; `move` transitions positions. Respect reduced motion (the CSS handles it).
- **Minimum per case:** emblem, 1 mechanism (5–8 steps), 2–3 figures with hotspots, plus at least 2 bespoke visual interactives (`custom` or `explorer`). Examples: a dose-response slider, a manufacturing-line animation, a patient-journey stepper, a trial-size and power calculator, a patent-cliff price simulator, a "spot the warning sign" exercise, a molecule you can assemble, a before/after comparison slider, a survival-curve reader.
- In `custom` code, build SVG strings and use the same classes. Keep code self-contained (no external libraries, no network, no images, no fonts).

---

## 5. Accuracy (non-negotiable)

This is a study resource; a wrong fact is worse than a missing one.
- **Research first.** Use web search and fetch to check every date, trial name, patient number, endpoint result, price, sales figure, deal term and quote. Prefer primary sources: journal papers (NEJM, Lancet, Nature, JCO), FDA approval letters, labels and review documents, EMA reports, company annual reports and 10-Ks, press releases, then reputable journalism (STAT, Endpoints, Reuters, NYT, Science, Nature News) and well-sourced books.
- Every number in `stats`, charts, tables and trial results must come from a source listed in `sources`. Where precision isn't possible, round and say so ("about", "roughly") in the text or the chart `note`.
- **Survival curves are schematic**: build them from reported medians, landmark rates (e.g. 12-month survival) and hazard ratios, and label them that way. Never present made-up precision.
- **Quotes**: only verbatim quotes you verified, with a source. Otherwise paraphrase ("Druker later recalled that…").
- Keep contested history even-handed: say who claims what.
- Money: say which currency and year; say whether a price is list or net; sales are company-reported worldwide revenue unless stated.
- If you can't verify something important, leave it out, and list it in your final report.

---

## 6. Writing style

- Plain, vivid, concrete. Explain like a great science journalist: short sentences where it's hard, a story where it can be. Assume intelligence, not knowledge.
- Define every technical word the first time (glossary `[[terms]]` help, but the prose should still make sense without hovering).
- Use American English, since most of these stories run through the FDA.
- Numbers: give them scale ("about the number of people in Chicago") and a comparison.
- No hype, no marketing language, no "revolutionary". Let the facts impress.
- Name the people who did the work, including the ones history forgets.
- Every section should earn its place: either it teaches something new or it lets the reader practise judgment.

---

## 7. Check your work (required, repeatedly)

```bash
cd ~/biotech-case-files && shared/check.sh <id>          # light and dark; or: shared/check.sh <id> light
```
It prints `CF_STATS` (words, reading minutes, section types, SVG count, sources), `CF_MISSING_TERMS`, any JS errors and "Render error" boxes, and writes 1300×1500 screenshots, top to bottom, to `/tmp/cf_<id>/light_NN.png` and `dark_NN.png`. **Look at every screenshot** (use the Read tool on the PNGs) and fix: overlapping or clipped labels, text too small, illustrations that don't make sense, broken layout, dark-mode colours that disappear, empty areas. Screenshots show every mechanism at step 1 and trials unlocked (`reveal=1`). To check other mechanism steps, temporarily reorder the steps or reason about the `show` lists carefully.

JS syntax errors show up as `Uncaught SyntaxError` in the console output with a line number. Template literals containing backticks, or `${` inside SVG strings, are the usual culprits.

Done means:
- 0 JS errors, 0 render errors, 0 missing terms
- 5,500+ words and 10+ interactive pieces
- every screenshot reviewed in both themes
- sources listed for every number

Your final message (under 250 words) should give: the word count, number of interactives, source count, anything you could not verify, and any engine limitations you worked around.
