# Product Requirements Document (PRD)

## Project
**Password Hygiene and Personal Data Protection Campaign**

## Objective
Create a responsive, educational single-page website that helps college students, educators, and general internet users build safer password, phishing, and personal-data habits through clear guidance and three practical, browser-only tools.

## Target users
College students, educators, and general internet users who need approachable digital-safety guidance without an account, a data-collection flow, or fear-based messaging.

## Core features
The campaign shell includes anchored navigation, a responsive mobile menu, a hero message, and educational sections. The Password Strength Checker evaluates a sample password locally, shows weak/fair/good/strong feedback, provides suggestions, supports show/hide, and clears input. The Phishing Awareness Quiz presents five fictional scenarios with non-clickable links, multiple-choice answers, immediate explanations, score tracking, and restart. The Personal Data Safety Checklist covers eight habits, displays count and animated progress, and resets without persistence.

## Content requirements
The guide covers password hygiene, phishing prevention, privacy settings, safe browsing, and responsible sharing. The Take Action section provides a numbered response for a potentially compromised account: change the affected password, change reused passwords, review sessions and recovery settings, enable MFA, and contact the official provider through verified channels. The footer contains campaign identity, navigation, and an educational-use disclaimer; it does not include a newsletter or personal-data collection.

## Privacy and security requirements
No accounts, database, backend, analytics, or external API calls are used. The password value is read only in the browser, never logged or transmitted, never analyzed remotely, and never written to local or session storage, cookies, or URLs. Visitors are explicitly instructed to enter a made-up sample and never a current password. Quiz examples are fictional and their links are plain text rather than clickable destinations. Checklist state is held in memory only and disappears on refresh.

## Accessibility and interaction requirements
Use semantic landmarks, labeled inputs, keyboard-operable buttons, visible focus indicators, sufficient contrast, text labels alongside color, live regions for strength and quiz feedback, and `prefers-reduced-motion` support. Navigation and all feature controls must work on mobile, tablet, and desktop without horizontal overflow.

## Acceptance criteria
- The supplied hero headline, description, actions, visual direction, and navigation are present.
- All three interactive features work on desktop and mobile, including reset controls.
- Password feedback updates live, shows/hides correctly, and never persists or sends the input.
- Quiz scoring and checklist progress update correctly.
- Fictional links are non-clickable and explanations teach sender, URL, attachment, urgency, and OTP signals.
- Section reveals, button states, progress animation, quiz feedback, and reduced motion behave as specified.
- Source is modular (`index.html`, `css/styles.css`, and the three requested feature modules plus `main.js`).
- Documentation matches the actual implementation.

## Reference inspiration
- https://dribbble.com/search/password-security
- https://dribbble.com/search/password-dashboard
- https://dribbble.com/search/password-manager-dashboard

These are inspiration searches only. The delivered interface is an original design and does not copy a proprietary template.
