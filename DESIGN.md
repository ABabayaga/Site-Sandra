---
name: Galeria Sandra Novas
description: Marketing site for visual artist Sandra Novas — a quiet, gallery-toned showcase for her paintings, series, and delivered work.
colors:
  deep-harbor-navy: "#08284E"
  antique-gold: "#C9A96E"
  antique-gold-deep: "#B8956A"
  amber-ochre: "#FBA13B"
  gallery-linen: "#F9F2EC"
  soft-ink: "#1A1A1A"
  warm-sand: "#D9BC9A"
  aged-bronze: "#6E4C0D"
  deep-umber: "#4B3102"
  charcoal: "#2A2A28"
  sand-placeholder: "#E7DDCF"
  pale-sand: "#F0E4D4"
  quiet-gray: "#4B5563"
  quiet-gray-deep: "#374151"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontWeight: 700
    letterSpacing: "0.12em"
  label:
    fontFamily: "Mirza, serif"
    fontWeight: 500
    letterSpacing: "0.28em"
  headline:
    fontFamily: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"
    fontWeight: 400
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  pill: "9999px"
  card: "16px"
  card-compact: "12px"
  button: "8px"
  hero-frame: "24px"
components:
  button-primary:
    backgroundColor: "{colors.deep-harbor-navy}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#0D3A6B"
  button-gold:
    backgroundColor: "{colors.antique-gold}"
    textColor: "{colors.deep-harbor-navy}"
    rounded: "{rounded.button}"
    padding: "12px 24px"
  button-gold-hover:
    backgroundColor: "{colors.antique-gold-deep}"
  button-ghost-icon:
    backgroundColor: "rgba(0,0,0,0.3)"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    height: "44px"
    width: "44px"
  card:
    backgroundColor: "{colors.gallery-linen}"
    rounded: "{rounded.card}"
---

# Design System: Galeria Sandra Novas

## Overview

**Creative North Star: "The Quiet Atelier"**

The site behaves like a private studio visit rather than a storefront: one long cream canvas, generous vertical breathing room, and a floating navy nav that fades from view the moment the visitor stops moving. Nothing competes for attention with the paintings themselves — chrome is deliberately quiet (a soft `shadow-sm` at rest, muted-gold accents used sparingly) so color and drama stay reserved for the artwork photography and the full-bleed hero video.

The palette does the emotional work: deep navy (`#08284E`) for anything that needs to feel grounded and permanent (nav, footer, card captions), antique gold (`#C9A96E`) for anything that should feel considered rather than loud, and warm linen (`#F9F2EC`) as the constant backdrop every section shares. Section titles are wrapped in an em dash on both sides ("— Explorar a coleção —"), a small, consistent editorial tic that reads as a catalogue label rather than a web-app heading.

**Key Characteristics:**
- One continuous warm-linen canvas from the "Artista" section through the footer — sections are not visually alternated or boxed, they're one long room.
- Deep navy is the anchor color for anything structural (nav, footer, card captions, primary CTAs); gold is reserved for accents, hover states, and secondary actions.
- Flat by default; shadow appears only on floating chrome (nav pill, modals, the Hero CTA bar) to signal "this detaches from the page."
- Uppercase, wide-tracked labels (`tracking-[0.15em]` to `tracking-[0.4em]`) are the default voice for anything that isn't a heading or body paragraph.

## Colors

Warm and restrained: one dominant dark neutral (navy), one warm light neutral (linen), one considered accent (gold), and a small supporting cast of bronze and sand tones that only ever appear in small doses (kicker labels, dividers, placeholders).

### Primary
- **Deep Harbor Navy** (`#08284E`): The site's structural anchor. Fixed nav pill, footer, série/entrega card caption blocks, primary button fills, and most on-linen headline text-on-dark contexts. Appears in some form on every screen.

### Secondary
- **Antique Gold** (`#C9A96E`): The considered accent — kicker/label text, hairline dividers, the "SAIBA MAIS" button fill, hover color for links on navy. Its darker sibling **Antique Gold Deep** (`#B8956A`) is the hover/active state for anything filled with Antique Gold.
- **Amber Ochre** (`#FBA13B`): A narrower role than it looks — this is specifically the idle-state color for the desktop nav links in the floating header pill. Don't reach for it outside that context; it reads as a different, brighter accent than Antique Gold and mixing the two in the same view looks accidental.

### Neutral
- **Gallery Linen** (`#F9F2EC`): The canvas. Every section background from "Artista" onward, including both detail routes (`/series/:slug`, `/entregas`).
- **Soft Ink** (`#1A1A1A`): Primary heading and emphasis-text color on Gallery Linen.
- **Quiet Gray** (`#4B5563`) / **Quiet Gray Deep** (`#374151`): Tailwind's stock `gray-600`/`gray-700` — secondary body copy (paragraph text under headings) on Gallery Linen. Not a custom brand color, but the de facto body-text neutral.
- **Warm Sand** (`#D9BC9A`): Idle-state link/label color on Deep Harbor Navy surfaces (mobile menu items, footer copy).
- **Aged Bronze** (`#6E4C0D`) / **Deep Umber** (`#4B3102`): Small kicker labels ("GALERIA SANDRA NOVAS") and their flanking hairline dividers. Always small-scale, never a fill color.
- **Charcoal** (`#2A2A28`): The footer's bottom credit bar — the one surface darker than Deep Harbor Navy on the whole site.
- **Sand Placeholder** (`#E7DDCF`) / **Pale Sand** (`#F0E4D4`): Not decorative — these are functional background colors that only show while an image is loading or has failed to load (entrega photo tiles, série hero fallback). If a visitor ever sees these as a fill rather than a flash, something's broken.

### Named Rules
**The One-Gold Rule.** Antique Gold is the only accent color reused across unrelated components. When a new component needs an accent, reach for it before introducing a new hue — the palette stays coherent because gold never has to compete with a second accent.

**The Off-Palette Yellow/Blue Don't.** Two existing spots — the Hero primary CTA (`bg-yellow-700`/`hover:bg-yellow-600`, plus the `bg-yellow-400` divider lines flanking "Sandra Novas") and the "VER MAIS" badge in Colecao (`bg-blue-700/50`) — use Tailwind's stock `yellow`/`blue` scales instead of Antique Gold or Deep Harbor Navy. These are legacy one-offs, not a second accent family; don't extend them elsewhere. See Do's and Don'ts.

## Typography

**Display Font:** Poppins (with sans-serif fallback) — bold weight only (700), the sole face loaded at that weight.
**Label Font:** Mirza (with serif fallback) — a serif face used exclusively for small, uppercase, wide-tracked eyebrow lines.
**Headline Font:** the browser's default serif stack via Tailwind's `font-serif` utility (`ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`) — this is what every section `h1`/`h2`/`h3` actually renders in today.
**Body Font:** the browser's default sans-serif stack via Tailwind's Preflight base (`ui-sans-serif, system-ui, sans-serif`) — every paragraph, unlabeled.

**Character:** Restrained and unhurried. Display type appears exactly once (the Hero name-mark) and everywhere else defers to quiet, uppercase, wide-tracked labels or plain serif headlines — the pairing never tries to look "designed," it tries to look like it isn't trying.

### Hierarchy
- **Display** (Poppins, 700, `text-4xl`→`md:text-8xl`, `tracking-[0.12em]`): The Hero name-mark ("Sandra Novas") only. Appears once per page.
- **Headline** (system serif, 400, `text-2xl`→`sm:text-5xl`): Every section title and route `h1`/`h2`/`h3` outside the Hero — always the em-dash-framed pattern ("— Section Name —") except the Artista intro, which drops the dashes for a plainer two-line statement.
- **Label** (Mirza, 500, `text-[10px]`→`text-xs`, `tracking-[0.22em]`–`tracking-[0.35em]`, uppercase): The two small lines flanking the Hero name-mark.
- **Eyebrow / Nav Label** (system sans, `text-[10px]`–`text-xs`, `tracking-[0.15em]`–`tracking-[0.4em]`, uppercase): Nav links, kicker labels, button copy, card captions, counters — the single most-used type role on the site by instance count.
- **Body** (system sans, 400, `text-sm`/`text-base`, `leading-relaxed`, Quiet Gray): Paragraph copy under headlines.

### Named Rules
**The Loaded-Not-Live Rule.** Gilda Display is imported via Google Fonts and declared in `@theme` as `--font-gilda`, but no component currently applies `font-gilda`. Every headline renders in the system serif stack via Tailwind's generic `font-serif` instead. Treat Gilda Display as reserved/available, not as the system's actual headline face, until a component is deliberately wired to it.

**The One-Display-Moment Rule.** Poppins Display appears exactly once per page (the Hero name-mark). Don't introduce a second Display-weight moment elsewhere — the rarity is what makes the Hero read as the page's single loud beat in an otherwise quiet system.

## Layout

Single continuous column, no alternating section backgrounds. `max-w-6xl mx-auto` is the standard content container for full sections (Artista, Colecao, Collab, Entregas, Instagram, Conexoes); the two detail routes (`SeriePage`, `EntregaPage`) use a slightly narrower `max-w-5xl` since they're single-topic reading views rather than card grids. Section side padding is mobile-first: `px-4 sm:px-6`.

Card grids step by content, not by a fixed device grid: séries run `grid-cols-1 → sm:grid-cols-2 → md:grid-cols-4`, the "Artista" trio runs `grid-cols-1 → md:grid-cols-3`, connections run `grid-cols-1 → md:grid-cols-2`. Vertical rhythm leans on `mb-*` spacing between a section's internal blocks rather than uniform section padding — several sections carry `py-5 sm:py-0` and do their real spacing work with margins on the title block and card grid instead.

The Hero is the one full-bleed exception: `min-h-screen`, video background, content vertically centered, with a navy CTA bar breaking out of the section's bottom edge (`translate-y-1/2`) to bridge into the next section.

## Elevation & Depth

Flat by default, shadow reserved for anything meant to feel detached from the page. Cards, photos, and content blocks at rest carry only `shadow-sm` — nearly invisible, just enough to lift them off Gallery Linen. Real shadow (`shadow-xl`/`shadow-2xl`, plus one custom soft navy-tinted shadow on the nav) is reserved for floating or overlay chrome: the fixed nav pill, all four lightbox/detail modals, the Hero's breakout CTA bar, and the Instagram collage's floating photo tiles. If an element sits in the normal document flow, it should not carry more than `shadow-sm`.

### Shadow Vocabulary
- **Resting** (`shadow-sm`): Default for cards, photos, and content blocks in normal flow.
- **Floating chrome** (`shadow-xl` / `shadow-2xl`): Nav pill, modals, dropdown-style overlays, the Hero CTA bar, the Instagram collage tiles.
- **Nav ambient** (`box-shadow: 0 10px 40px rgba(8,40,78,0.25)`): The fixed nav pill's specific soft, navy-tinted shadow — a one-off, more diffuse than the standard `shadow-xl` scale, used nowhere else.
- **Text legibility shadow** (`drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]` / `drop-shadow-lg`): Hero text over the video background only — a functional legibility aid, not a decorative elevation cue.

### Named Rules
**The Flat-At-Rest Rule.** Nothing in the normal document flow gets more than `shadow-sm`. A stronger shadow is a signal that the element floats above or outside the page's normal stacking — reserve it for that meaning.

## Shapes

Three radius tiers, applied by role rather than by component size. Full-radius pills (`rounded-full`) mark anything that acts like a badge, tag, dot, or icon-only control (CTA badges, modal nav/close/dot buttons). `rounded-2xl` (16px) is the default card corner — série cards, collab rows, connection photos, modal panels. `rounded-xl` (12px) is the compact variant for smaller thumbnails and grid tiles (Instagram posts, entrega grid photos, header dropdown panels). The série hero image on `/series/:slug` is the one outlier at `rounded-3xl` (24px), reflecting its larger, more editorial framing.

Buttons default to `rounded-lg` (8px) — except the two Hero CTAs, which use `rounded-md` (6px), a small, likely-unintentional inconsistency worth normalizing to `rounded-lg` the next time that component is touched (see Do's and Don'ts) rather than treating as a second legitimate button-radius tier.

## Components

Controls feel restrained and unhurried: hover states fade in over ~200-300ms rather than snap, nothing scales or bounces except the deliberate `hover:scale-105` on photo tiles (Instagram, série cards) signaling "this opens something."

### Buttons
- **Shape:** `rounded-lg` (8px) is the standard; `rounded-full` for badge-style and icon-only buttons (see Shapes).
- **Primary (navy fill):** Deep Harbor Navy background, white text, e.g. "SEGUIR NO INSTAGRAM". Hover darkens slightly lighter/warmer (`#0D3A6B`), never inverts.
- **Gold fill:** Antique Gold background, Deep Harbor Navy text, e.g. "SAIBA MAIS". Hover darkens to Antique Gold Deep (`#B8956A`).
- **Outline / ghost (Hero secondary):** `border border-white`, `bg-black/60`, `backdrop-blur-sm`; hover inverts to solid white background with dark text — the one button that inverts rather than darkens.
- **Ghost icon (modal chrome):** `rounded-full`, `border border-white/30`, `bg-black/30`, white icon (react-icons/fa, 16px), 44×44px minimum tap target, hover fades to `bg-white/20`. Used identically for close/prev/next across every lightbox modal.
- **All buttons:** uppercase label, `tracking-[0.15em]`–`tracking-[0.22em]`, `text-[10px]`–`text-xs`. No button on the site uses sentence case.

### Cards / Containers
- **Corner Style:** `rounded-2xl` default (see Shapes).
- **Background:** White or Gallery Linen at rest; a Deep Harbor Navy caption block anchors one corner (série/entrega cards) or spans the full card (collab rows).
- **Shadow Strategy:** `shadow-sm` at rest only (see Elevation & Depth).
- **Border:** None at rest; `border border-white/30` appears only inside dark/photo overlays (modal chrome, entrega badges), never on a plain linen card.
- **Internal Padding:** Caption blocks run `px-4 py-3 sm:px-5 sm:py-4`; card bodies typically `p-6 sm:p-8`.

### Navigation
Fixed, centered, floating pill (`rounded-2xl`, `bg-[#08284E]/80`, `backdrop-blur-xl`, `border border-white/10`), offset from the viewport edge rather than edge-to-edge. Idle-state link color is Amber Ochre; hover goes to white with an underline that grows from 0 to full width (`transition-all duration-300`). The pill auto-hides after 1s of no scroll/mouse activity and reappears instantly on the next input — deliberately gets out of the way of the artwork. Mobile collapses to a hamburger + dropdown panel in the same floating-pill chrome; the panel is inert (unfocusable, `aria-hidden`) while collapsed.

### Lightbox Modal (signature component)
The site's most-repeated custom pattern — one convention implemented four times (série slideshow, entrega slideshow, collab gallery, single-image viewer): full-screen `bg-black` (or `bg-black/90` for the collab variant, which keeps a text panel visible beside the image), fade-in on mount via `requestAnimationFrame` + a `visible` state flip, `role="dialog"` with a focus trap and Escape-to-close, ghost-icon close/prev/next buttons (see Buttons), and small pill dot-indicators for position. Any new full-screen viewer should reuse this convention rather than inventing a new modal treatment.

## Do's and Don'ts

### Do:
- **Do** treat Deep Harbor Navy as the only structural/chrome color and Antique Gold as the only accent — see **The One-Gold Rule**.
- **Do** keep new headlines in the system serif stack (`font-serif`) to match every existing section title, unless a deliberate decision is made to wire up Gilda Display sitewide (see **The Loaded-Not-Live Rule**) — don't apply Gilda Display to a single new component in isolation.
- **Do** wrap new top-level section titles in the em-dash pattern ("— Title —") to match every existing section except the Artista intro.
- **Do** give every icon-only control a real `aria-label` and a 44×44px minimum tap target — the established convention across all four lightbox modals and the nav hamburger.
- **Do** keep new cards flat (`shadow-sm`) at rest and reserve stronger shadows for chrome that visually floats above the page (see **The Flat-At-Rest Rule**).

### Don't:
- **Don't** introduce a second accent hue alongside Antique Gold. If a component needs more visual weight, use Deep Harbor Navy or increase scale/contrast rather than adding a new color family.
- **Don't** replicate the Hero CTA's `bg-yellow-700` or the "VER MAIS" badge's `bg-blue-700/50` elsewhere — these are legacy Tailwind-stock-color one-offs outside the brand palette, not a sanctioned secondary accent (see **The Off-Palette Yellow/Blue Don't**).
- **Don't** build a new full-screen image viewer from scratch — extend the existing Lightbox Modal convention (and its shared `useFocusTrap` hook) instead of writing a fifth implementation.
- **Don't** assume Gilda Display governs anything just because it's loaded — verify a component actually applies `font-gilda` before treating it as live.
