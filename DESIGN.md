---
name: Lavina Arsya Aryanto
description: A one-page bilingual portfolio dyed like a length of batik cap cloth, bath by bath.
colors:
  nila: "#1f3a6b"
  nila-deep: "#172d55"
  nila-mid: "#2b4a80"
  nila-pale: "#d6e1ee"
  mori: "#eef2f6"
  ink: "#182c52"
  ink-soft: "#3d5277"
  wax: "#f4f1ea"
  soga: "#6b3f22"
  soga-deep: "#55311a"
  isen: "#e0b25a"
  isen-light: "#e9c272"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8.5vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  cap: "3px"
  full: "9999px"
spacing:
  gutter: "20px"
  container: "1180px"
  bath-top: "64px"
  bath-bottom: "96px"
  row: "56px"
  stamp-gap: "10px"
components:
  button-primary:
    backgroundColor: "{colors.isen}"
    textColor: "{colors.nila-deep}"
    rounded: "{rounded.cap}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.wax}"
    textColor: "{colors.nila-deep}"
  button-resist:
    textColor: "{colors.wax}"
    rounded: "{rounded.cap}"
    padding: "0 24px"
    height: "48px"
  button-wax:
    backgroundColor: "{colors.wax}"
    textColor: "{colors.soga-deep}"
    rounded: "{rounded.cap}"
    padding: "0 20px"
    height: "44px"
  button-wax-hover:
    backgroundColor: "{colors.isen}"
  nav-bar:
    backgroundColor: "{colors.nila-deep}"
    textColor: "{colors.wax}"
    height: "64px"
  lang-toggle-active:
    backgroundColor: "{colors.wax}"
    textColor: "{colors.nila-deep}"
    rounded: "{rounded.cap}"
    padding: "4px 10px"
  screenshot-mat:
    backgroundColor: "{colors.nila-pale}"
    padding: "16px"
---

# Design System: Lavina Arsya Aryanto

## Overview

**Creative North Star: "Celup Batik Cap"**

The page is one length of batik cap cloth taken through its dye baths. Every section is a full-bleed bath of flat dye, and the order of the baths is the order of the story: deep nila for the name, unwaxed mori cloth where the work is read, a pale first dip for the path, a second nila dip for skills, and a final soga bath for contact. Type sits on the dyed grounds the way wax resist sits on cloth: wax-white on dark baths, nila ink on pale ones.

The only ornament is the cap stamp itself. A row of kawung stamps, the pinggiran, is pressed along every seam where one bath meets the next, each stamp at a slightly different angle and ink load so the band reads as hand-pressed. Everywhere else the cloth is quiet: generous empty bands, hairline rules, a strict margin column, one unbroken timeline. Markers inside a bath are small isen cecek dots. The header logo carries a single kawung as the maker's cap mark, the one place the stamp appears outside a pinggiran.

Calm and colourful at once: colour comes from the dye fields themselves, not from accents sprinkled on a neutral page. The previous cream, pastel and serif-italic direction was rejected and is not this world.

**Key Characteristics:**
- Full-bleed flat dye baths, one per section, in a fixed nila → mori → pale nila → nila-mid → soga sequence.
- Pinggiran kawung band at every bath seam; the stamps press in one by one on first scroll.
- Wax-white resist type on dark baths, nila ink on pale ones.
- Bricolage Grotesque display set tight and heavy; Hanken Grotesk body.
- Near-square 3px corners, hairline rules, no cards, no gradients, no glass.
- Isen cecek dots as markers; the kawung logo is the single exception.

## Colors

A cloth palette of three dye families (nila indigo, soga brown, isen gold) on cool unwaxed cotton, with warm wax-white for resist type.

### Primary
- **Nila Drench** (`nila`): the hero bath and the colour of links and timeline rules on pale grounds. The page's dominant dye.
- **Deep Nila** (`nila-deep`): the sticky header, the html overscroll ground and theme colour, and text on gold buttons.
- **Second-Dip Nila** (`nila-mid`): the skills bath.
- **First-Dip Nila** (`nila-pale`): the path bath and the mat behind project screenshots (hover darkens it to #c8d6e8).

### Secondary
- **Soga Brown** (`soga`): the final contact bath.
- **Deep Soga** (`soga-deep`): the footer and text on the wax button in the contact bath.

### Tertiary
- **Isen Gold** (`isen`): the primary action fill, the hero subtitle, the contact email, cecek dots, the logo stamp, selection highlight and the focus ring.
- **Pale Isen** (`isen-light`): skill-group labels on the nila-mid bath, where full isen would sit too heavy.

### Neutral
- **Unwaxed Mori** (`mori`): the work bath and the body ground; cool-tinted, never cream.
- **Wax Resist** (`wax`): all type on dark baths, the active language segment, and the inverse button. Used at reduced opacity for secondary copy (80%, 75%, 60%) and hairlines (15% to 35%).
- **Nila Ink** (`ink`): body text and headings on mori and pale nila; hairlines at 15% opacity.
- **Faded Ink** (`ink-soft`): taglines, intros, years and secondary metadata on pale grounds.

### Named Rules
**The Dye Bath Rule.** A section's background is one flat dye from the palette, edge to edge. Colour lives in the ground, not in accents laid over a neutral page.

**The Resist Rule.** Type on a dark bath is wax; type on a pale bath is ink. Gold is for emphasis only: the primary action, the one line a bath must land (hero title, contact email), and cecek dots. It never fills a ground or sets running text.

**The Darkening Order Rule.** Baths run nila, mori, pale nila, nila-mid, soga. New sections slot into this sequence; they do not introduce a new dye.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif), loaded with its optical-size axis.
**Body Font:** Hanken Grotesk (with system-ui, sans-serif).

**Character:** A heavy, slightly quirky grotesque for names and section titles, tracked tight like a carved cap block, over a plain and warm grotesque that keeps the reading calm.

### Hierarchy
- **Display** (700, clamp(3rem, 8.5vw, 6rem), 0.92, -0.035em): the name in the hero only. The contact headline uses a sibling ramp (clamp(2.5rem, 6vw, 4.75rem), line-height 1).
- **Headline** (700, 3rem mobile / 3.75rem desktop, 1, -0.03em): bath titles (Work, Path, Skills).
- **Title** (700, 1.875rem mobile / 2.25rem desktop, 1.25, -0.02em): project names. Path step titles drop to Hanken 600 at 1.125rem.
- **Lead** (400, 1.125rem, 1.625): section intros and taglines, max ~34 to 40rem.
- **Body** (400, 1.0625rem, 1.6): running text; project points at 16.5px.
- **Label** (600, 15px): roles, stack lines, nav, index links, contact chips. Years use tabular numerals.

Display-family secondary lines (hero subtitle in isen at 1.25 to 1.5rem/500; contact email at clamp(1.5rem, 4.2vw, 3rem)/600; path years at 1.25rem/700) keep the display voice for the few lines that must carry weight.

### Named Rules
**The Carved Block Rule.** Display sizes are always bold and negatively tracked (-0.02em to -0.035em) with `text-wrap: balance`. Never light, never italic.

**The No Eyebrow Rule.** Sections open on their headline. No small uppercase kicker above titles.

## Layout

A single centred column, `min(100% - 40px, 1180px)`, inside full-bleed baths. Baths breathe: 48px top / 80px bottom on mobile, 64px top / 96 to 112px bottom on desktop. Project rows are 40px tall padding on mobile and 56px on desktop, separated by ink hairlines.

The work bath uses a strict margin column (170px) carrying role and year beside each project on desktop; on mobile the role and year collapse into one line under the tagline. Projects with a screenshot split into text and image at the large breakpoint. The path is one unbroken line: a 2px nila rule running down the left on mobile and across the top in four columns on desktop, with hollow nodes on the rule. Skills are a definition list with a 180px label column inside hairline dividers.

The hero is a two-column grid (text, then a 260 to 380px portrait) that stacks on mobile, with a project index along its bottom edge behind a hairline. The header is sticky at 64px and the scroll offset is 4.5rem.

### Named Rules
**The Active Emptiness Rule.** Leave the bath empty around content rather than filling it. One idea per band; no decorative fills in the gaps.

## Elevation & Depth

Flat. Depth comes from the darkening order of the baths, hairline rules, and the pinggiran seams, not from shadow. The single exception is the project screenshot, which sits on a pale nila mat with a soft drop (`0 6px 18px -6px rgba(23,45,85,0.35)`) so a white app screenshot reads as a print laid on the cloth. The hero portrait uses a 1px wax ring offset 8px from the photo instead of a shadow.

### Named Rules
**The Flat Cloth Rule.** No gradients, no glass, no blur surfaces, no shadows on text or controls. The screenshot drop is the only shadow in the system.

## Shapes

Near-square everywhere: 3px corners on buttons, chips, the language toggle and the portrait frame. Round shapes appear only as cecek dots and timeline nodes. The kawung motif (four palm-fruit ovals around a centre point, with resist holes punched in the ground colour) is the one figurative shape. Rules are 1px hairlines at 15% opacity, or 2px solid nila for the timeline.

## Components

### Buttons
Tactile but plain: solid dye blocks with a near-square edge.
- **Shape:** near-square (3px).
- **Primary (isen):** isen fill, deep nila text, 48px tall, 24px side padding, Hanken 600 with an 18px stroke icon. Full-width on mobile, auto from small screens. Hover fills to wax.
- **Resist (outline):** transparent with a 35% wax hairline and wax text; hover brightens the border to full wax and adds a 10% wax wash.
- **Wax (contact bath):** wax fill, deep soga text, 44px tall; hover fills to isen.
- **Header resume:** isen, 36px tall, icon-only below the small breakpoint.
- **Focus:** a 2px isen outline offset 3px, globally.

### Chips
- **Contact chips:** 44px tall, 20px padding, 30% wax hairline, wax text, same hover as the resist button.

### Navigation
- **Bar:** sticky, deep nila, 64px. Kawung logo stamp in isen with nila-deep resist holes beside "Lavina Arsya" in display 600.
- **Links:** 15px Hanken at 80% wax, full wax on hover; hidden below the medium breakpoint.
- **Language toggle:** a 36px segmented control with a 25% wax hairline; the active segment is a wax block with deep nila text, the inactive one 70% wax. Copy swaps in place.

### Project Row
An open row, not a card: hairline above and below, margin column with role (ink 600) and year (ink-soft, tabular), title, tagline, bulleted points, a "Stack:" line, and underlined Repo/Live links in nila with an up-right arrow. Links use a 1px underline at 40% current colour, offset 0.25em, going solid on hover.

### Pinggiran (signature)
A full-width band of 64 kawung stamps (30px, 10px apart, 14px vertical padding) on the ground of the bath below it, in a stamp colour drawn from the same family (nila on mori, nila-mid on pale nila, pale nila on nila-mid, isen on soga). Each stamp carries a deterministic tilt (±2°), ink load (0.86 to 1.0 opacity) and 1px vertical jitter. On first scroll into view the stamps arm (transparent, 1.35 scale, 2px blur) and press in from the centre outward, 420ms `cubic-bezier(0.16, 1, 0.3, 1)` with 28ms stagger. Bands already on screen at load, and reduced-motion visitors, see them pressed with no animation. Decorative and hidden from assistive tech.

### Cecek Index
The hero project index: 15px links at 80% wax, each led by a 6px isen dot that scales 1.5× on hover.

## Do's and Don'ts

### Do:
- **Do** give every new section a whole flat bath from the palette and place it in the darkening order.
- **Do** put a pinggiran band at every seam between two baths, coloured from the incoming bath's family.
- **Do** use wax type on nila, nila-mid and soga; ink type on mori and pale nila.
- **Do** use isen cecek dots (6px, round) for markers and index bullets.
- **Do** keep corners at 3px and rules at 1px hairlines.
- **Do** honour `prefers-reduced-motion`: stamps appear pressed, smooth scroll is off.

### Don't:
- **Don't** use the kawung stamp anywhere except the pinggiran band and the header logo.
- **Don't** put content in cards, add gradients, glass, or blur surfaces, or add shadows beyond the screenshot drop.
- **Don't** introduce a neutral cream ground, pastels, or serif italics; that direction was rejected.
- **Don't** add uppercase kickers or eyebrows above headlines.
- **Don't** set running text or fill a bath in isen gold.
