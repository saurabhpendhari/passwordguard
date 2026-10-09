# Implementation Plan

## Product
**Password Hygiene and Personal Data Protection Campaign** — a responsive, static educational website for college students, educators, and general internet users.

## Implementation approach
- Use semantic HTML5 for a single-page campaign with anchored sections and accessible landmarks.
- Use CSS3 with custom properties, responsive layout primitives, editorial typography, restrained borders/shadows, and reduced-motion overrides.
- Use modular browser-only JavaScript: `main.js` for navigation/reveal behavior, `password-checker.js` for local strength analysis, `phishing-quiz.js` for in-memory quiz state, and `safety-checklist.js` for in-memory checklist state.
- Serve the repository as a no-build static site on the configured port 3000. No backend, database, authentication, analytics, external API calls, or persistence are required.
- Include a static `public/manus-routes.json` route manifest for the root page.

## Design direction
- **Design movement:** quiet editorial cyber-utility — the clarity of a print field guide combined with the precision of a security dashboard.
- **Core principles:** explain before decorating; use hierarchy instead of visual noise; make privacy visible at the moment of interaction; keep every control tactile and understandable.
- **Color philosophy:** warm off-white creates a calm reading canvas, forest green signals grounded action and trust, charcoal preserves editorial authority, and pale green surfaces mark safe progress without implying guarantees.
- **Layout paradigm:** a left-rail editorial rhythm for section labels and metadata paired with asymmetric content blocks; tool areas use a practical two-column workspace rather than centered marketing cards.
- **Signature elements:** a compact monogram mark built from bracketed initials; numbered section eyebrows; thin “signal line” rules and compact status pills for tool feedback.
- **Interaction philosophy:** every interaction answers a question immediately. Password feedback is plain-language and non-judgmental; quiz explanations teach the detection rule; checklist progress makes next action visible without storing state.
- **Animation:** 250–400ms section reveals, 150–200ms control transitions, 250–350ms progress changes, and 180–250ms quiz feedback. Motion is subtle, never blocks content, and is disabled for `prefers-reduced-motion: reduce`.
- **Typography system:** use a high-contrast editorial serif for display headlines with a clean system sans-serif for body and controls. Headings are tight and expressive; body copy stays at 16–18px with generous line height.
- **Brand essence:** a practical, student-friendly field guide for building safer digital habits without fear or surveillance. Personality: grounded, clear, quietly confident.
- **Brand voice:** direct, reassuring, and specific. Example lines: “Pause before you trust the message.” / “Use a sample password here — never a password you rely on.”
- **Wordmark & logo:** “P/” monogram in a square frame, paired with the campaign title and a small `CEP / DIGITAL SAFETY` kicker.
- **Signature brand color:** forest green `#245C43`, used as the action color and progress signal.

## Project structure
```text
passwordguard/
├── index.html                     # Single-page semantic campaign shell
├── css/styles.css                 # Design tokens, responsive layout, motion, focus states
├── js/main.js                     # Navigation, mobile menu, reveal animations, footer year
├── js/password-checker.js         # Browser-only sample password evaluation and feedback
├── js/phishing-quiz.js            # Fictional question data, answer state, scoring, feedback
├── js/safety-checklist.js         # In-memory checklist state, progress and reset
├── public/manus-routes.json       # Root route declaration for preview/publishing
├── docs/                          # Requested project documentation
├── prd.md                         # Product requirements
├── techstack.md                   # Technical stack and implementation notes
├── designdoc.md                   # Visual system and interaction documentation
└── TODO.md                        # Acceptance outcomes carried from the brief
```

## Delivery constraints
- No real password, OTP, recovery code, or personal data is requested.
- Password input is not logged, transmitted, analyzed remotely, or placed in storage/cookies.
- Fictional links remain plain text/non-clickable.
- Use the supplied Dribbble searches only as visual inspiration; do not copy layouts or assets.
