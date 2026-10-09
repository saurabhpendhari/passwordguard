# Design Document

## Design direction
The campaign uses a quiet editorial cyber-utility aesthetic: a calm field guide with the precision of a security dashboard. It is intentionally original, with typography, whitespace, thin rules, practical controls, and small status signals doing the visual work. It avoids gradients, glassmorphism, glowing elements, blobs, excessive emojis, stock shields, robots, and generic AI imagery.

## Dribbble references
- https://dribbble.com/search/password-security
- https://dribbble.com/search/password-dashboard
- https://dribbble.com/search/password-manager-dashboard

These searches guided the restraint, density, and dashboard-like utility of the composition. They are inspiration only, not copied templates or verified endorsements.

## Color palette
| Token | Value | Use |
|---|---|---|
| Warm background | `#F7F7F2` | Reading canvas and quiet surfaces |
| Surface | `#FFFFFF` | Tool panels, cards, and navigation |
| Main text | `#20231F` | Editorial headlines and primary copy |
| Secondary text | `#697068` | Supporting copy and descriptions |
| Borders | `#D9DDD6` | Thin structure lines and control boundaries |
| Primary green | `#245C43` | Brand mark, actions, progress, and safe status |
| Deep green | `#1A4633` | Take Action section and high-contrast action state |
| Pale green | `#E8F0E9` | Privacy notes, completed states, and tool feedback |
| Warning | `#8A4B16` | Fair password feedback |
| Error | `#A52D2D` | Weak/incorrect feedback, paired with text |

The warm background reduces the clinical feel common to security interfaces. Forest green communicates grounded action without implying a guarantee of safety. Pale green surfaces make progress visible while keeping the page calm.

## Typography and hierarchy
Headlines use a restrained Georgia serif for human, editorial emphasis; body and controls use a system sans-serif for clarity and performance. Hero type scales from 52–88px, section headings from 38–64px, body copy from 11–17px depending on role, and metadata uses a compact monospace treatment.

## Layout
The hero pairs a large text block with an original CSS-built security checklist sheet. Section headings use a split editorial layout with an eyebrow on the left and an explanatory paragraph on the right. Tool panels use a practical workspace layout: inputs and readouts share a surface, the quiz pairs a fictional message with answer controls, and the checklist pairs a green progress summary with an ordered list. Guide cards collapse from four columns to two and then one. On mobile, the nav becomes an accessible toggle menu and all feature sections become single-column.

## Signature UI elements
The `P/` monogram appears in the header and checklist illustration. Eyebrows combine green numbering with a thin signal line. Metadata, score, and indexes use compact monospace labels. Content surfaces have 6–12px corners, thin grey borders, and restrained shadows rather than decorative effects.

## Interaction and motion
Controls use 150–200ms color, border, and lift transitions. Section reveals fade and rise 18px over 380ms when entering the viewport. Checklist progress changes over 350ms. Quiz feedback fades in over 200ms and color is always paired with a plain-language explanation. `prefers-reduced-motion: reduce` disables reveal transforms and shortens transitions without hiding content.

## Accessibility
The site uses skip navigation, semantic header/nav/main/section/footer landmarks, labeled form controls, visible `:focus-visible` rings, keyboard-operable buttons, `aria-expanded` for the mobile menu, `aria-live` for password and quiz feedback, `role="progressbar"` for checklist progress, and non-clickable fictional links. All color-coded states have text labels.

## Quality standard
Every visual component serves orientation, teaching, or action. The page avoids collecting data, avoids claiming the checker guarantees security, and keeps the tools useful without an account or external service.
