# Camille Mohsenin Portfolio — Brand Guide

Design system as implemented in `css/style.css`.

## Color Palette

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F6F5F2` | Base background |
| `--ink` | `#1C1C1C` | Base text, near-black |
| `--line` | `#DDDACE` | Hairline borders, grid lines, dividers |
| `--muted` | `#8a8578` | Secondary/caption text |
| `--denim` | `#3A5478` | Primary accent (nav "current page" state, links, stat numbers) |
| `--sage` | `#6FA05A` | Pop accent — "Sage+" (top bar, eyebrow bars, bullets, primary CTA button) |
| `--intro-panel` | `#3D5135` | Homepage dark panel — sage mixed ~40% into near-black |

### Derived hover states
Not tokenized as CSS variables, used inline where needed:
- `#2e435f` — darker denim, gate button hover
- `#5a8a47` — darker sage, Contact page primary button hover

### System color
Not part of the brand palette — functional only:
- `#b3432f` — error red, password-gate "incorrect password" message

## Typography

- **Body/UI**: system sans stack — `-apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif`
- **Display serif** (homepage only, used sparingly): `Georgia, "Iowan Old Style", "Palatino Linotype", serif` — bold uppercase for name, italic for the pull-quote

## Direction: Clean Minimalist

Two-part system:

1. **Base pages** (Work, About, Contact) — paper/ink/line neutral. Sage is used only as a *graphic device*, never a fill:
   - Thin sage bar above every eyebrow label
   - Sage square bullets before each overview project title
   - Filled sage primary button (Contact page)
   - Thin sage line along the site's top edge (header)

2. **Homepage** — the one deliberately different visual world: a split-screen editorial spread. Dark sage-tinted panel (`--intro-panel`) on one side holding name/statement in serif display type; a real project photo carries the color on the other side, with a headshot and minimal contact icons.

## Photography

Every image on the site is sourced from real campaign material (kiosk activations, barricade murals, billboard flights, event stills) — no stock photography or decorative gradients. Color and visual energy come from the work itself, not from applied graphic treatment.
