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
- Data: IBM Plex Mono 400/500, only for dates, tech lists and diagram labels. Never as decoration.
- No uppercase tracked kickers above headings, no section numbers.

## Components

- **Flow diagram** (`Projects.jsx`): vertical steps joined by 1px wires; signature integrations get an accent border.
- **Avatar** (`Avatar.jsx`): SVG illustration, fixed character colours. Wires draw in once on load, eyes follow the pointer, blinks twice on load and on hover. No looping motion.
- **Buttons**: pill, min 44px (primary 52px). Primary = accent fill; secondary = `line` border.
- **Lists over cards**: Services, Stack groups, Experience and results use bordered rows, not card grids.

## Motion

- One authored moment: the hero wiring. Cards and images use `<Reveal>` once; body text never animates.
- Ease: `cubic-bezier(0.16, 1, 0.3, 1)`. Everything honours `prefers-reduced-motion`.

## Accessibility

- Focus ring: 2px accent outline, 3px offset, on every focusable element.
- Touch targets ≥44px; skip link to the case studies; `noscript` fallback with contact links.
