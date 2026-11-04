# Design

Direction A, "Systems diagram": a dark, technical page where the person is shown wired to the tools she connects. Chosen from three directions explored on the redesign canvas (Nov 2026).

## Theme

- Dark is the default (`html.dark`); light is an opt-in toggle saved in `localStorage.theme`.
- All colours are CSS variables in `src/index.css`, mapped to Tailwind names in `tailwind.config.js`.

| Token | Dark | Light | Use |
|---|---|---|---|
| `paper` | #0d1117 | #f6f7f9 | page background |
| `paper-alt` | #121821 | #eceff3 | alternating section bands |
| `card` | #121821 | #ffffff | diagrams, raised surfaces |
| `line` | #263040 | #d6dbe2 | borders, dividers, wires |
| `ink` | #e8ecf1 | #0d1117 | headings, primary text |
| `body` | #c8d0da | #282f38 | paragraphs |
| `muted` | #b9c3cf | #3d4652 | secondary text |
| `faint` | #8b98a8 | #586270 | metadata (still ≥4.5:1) |
| `accent` | #ff8a3d | #b4450a | primary actions, highlights, focus ring |
| `on-accent` | #0d1117 | #ffffff | text on accent |

## Type

- Display and text: Bricolage Grotesque (variable, self-hosted via `@fontsource-variable`). Headings 700–800, tight tracking (-0.03em on the hero).
- Data: IBM Plex Mono 400 (one weight), only for dates, tech lists and diagram labels. Never as decoration.
- No uppercase tracked kickers above headings, no section numbers.

## Components

- **Flow diagram** (`Projects.jsx`): vertical steps joined by 1px wires; signature integrations get an accent border.
- **Avatar** (`Avatar.jsx`): Goodness's own illustrated portrait (`public/goodness.webp`, background removed) in a hub ring; six tool nodes are wired to the ring. Ring and wires draw in once on load, the portrait rises in, then tilts a few degrees toward the pointer. No looping motion.
- **Buttons**: pill, min 44px (primary 52px). Primary = accent fill; secondary = `line` border.
- **Lists over cards**: Services, Stack groups and Experience use bordered rows, not card grids.
- **Results strip** (`Projects.jsx`): four measured outcomes at the top of Case studies. Experience may mention them in context; the hero and About do not repeat them.
- **Case study**: name and role, then the visual, then Problem / What I built / Result (or "Shipped" when there is no measured outcome). Only the first sentence of a result is bold.
- **External links** carry a screen-reader "(opens in a new tab)" note (`NewTab` in `Icons.jsx`). Contact details live in `src/contact.js`.

## Motion

- The hero wiring draws in once on load. Tool labels around the portrait are buttons: mouse hover or keyboard focus previews a tool, and a click or tap toggles it (one tap opens on touch). The active tool lights its wire and opens a card under the portrait, floating over the caption, with links to the case studies that use that tool (never covers her face; Escape or a click elsewhere closes it).
- Flow diagrams play step by step once when first seen, and again only from Replay (about 2 s, never loops). Steps not yet reached get a dashed border (text stays full contrast); accent marks the current step and completed signature steps.
- The results strip counts up once. Live-site screenshots scroll through the page on hover or keyboard focus.
- Cards and images use `<Reveal>` once; body text never animates. Nothing loops, so no pause control is needed.
- Ease: `cubic-bezier(0.16, 1, 0.3, 1)`. Everything honours `prefers-reduced-motion`.

## Accessibility

- Focus ring: 2px accent outline, 3px offset, on every focusable element.
- Touch targets ≥44px; skip link to the case studies; `noscript` fallback with contact links.
