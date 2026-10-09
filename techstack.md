# Technical Stack Document

## Technologies
- **HTML5** for semantic page structure, landmarks, form labeling, ordered action steps, and accessible live regions.
- **CSS3** for custom properties, editorial typography, responsive grids, borders, surfaces, focus states, reduced-motion behavior, and transitions.
- **Vanilla JavaScript modules** for navigation, section reveals, password assessment, phishing quiz state, and checklist progress.
- **Inline SVG is not required**; the visual identity uses CSS and lightweight text marks rather than decorative image assets.
- **No runtime dependencies** and no backend, database, authentication, analytics, or external API calls.

## Project structure
```text
passwordguard/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── password-checker.js
│   ├── phishing-quiz.js
│   └── safety-checklist.js
├── public/
│   └── manus-routes.json
├── docs/
├── prd.md
├── techstack.md
├── designdoc.md
├── plan.md
└── TODO.md
```

## Runtime and serving
The project is a no-build static site served on the configured port 3000 and bound to `0.0.0.0` for Preview. The route manifest declares the root page. Static files are loaded with relative URLs so the app remains valid inside the managed Preview proxy and in static hosting such as GitHub Pages or Netlify.

## Module responsibilities
`main.js` imports the feature modules, controls the mobile menu, closes it on navigation or Escape, adds the scrolled header state, and enables IntersectionObserver section reveals with a reduced-motion fallback. `password-checker.js` uses deterministic local checks for length, character variety, common patterns, and repeated characters; it updates the strength meter and suggestions without any network or storage APIs. `phishing-quiz.js` stores five fictional scenarios in a module-local array and keeps current question, score, and answer state in memory. `safety-checklist.js` updates count and progress from checkbox state held only in the current page session.

## Privacy controls
There are no fetch calls, form submissions, tracking scripts, storage calls, cookies, URL updates, or server routes in the feature modules. The password input uses `autocomplete="off"`, and the copy explicitly tells users to use a sample only. Fictional links render as spans so the quiz cannot navigate to a fake destination.

## Deployment guidance
Use HTTPS hosting for any public deployment. Because the site is fully static, a simple static host is sufficient; no server or database capability is needed.
