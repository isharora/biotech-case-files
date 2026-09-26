# Case Files

Eighteen long-form interactive case studies for learning biotech from a software/product background: 12 landmark drugs and 6 famous failures. Each takes about 30–40 minutes.

**Open `index.html` in a browser.** Everything works offline from the file; there is no build step and no network access.

- Landmarks: Gleevec, Humira, Sovaldi, Keytruda, Spinraza, Kymriah, Ozempic & Wegovy, Zolgensma, Trikafta, Enhertu, Comirnaty, Leqembi
- Cautionary tales: Vioxx, TGN1412, Exubera, Torcetrapib, Epacadostat, Aduhelm

Each case includes a step-through illustrated mechanism, explorable diagrams, a filterable timeline, trials where you predict the result before seeing it, "you decide" moments at real historical forks, the money (sales, pricing, deals), product-lens callouts, a quiz and cited sources. Hover any dotted word for a definition. Reading progress and quiz scores are saved in your browser only.

## How it's built
- `shared/engine.js` renders a case from its data file; `shared/style.css` defines the house style (light and dark); `shared/glossary.js` holds the shared glossary.
- `cases/<id>.js`: one file per case. `cases/demo.js` shows every section type.
- `GUIDE.md`: the authoring contract (structure, illustration rules, accuracy rules).
- `shared/check.sh <id>`: renders a case headlessly and prints errors, missing glossary terms and word counts, with screenshots in `/tmp/cf_<id>/`.

Survival curves are schematic, drawn from reported results rather than digitized. Figures come from the sources listed in each case.
