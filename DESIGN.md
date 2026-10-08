---
name: Arsyacoo
description: A bilingual applied-AI studio site shaped like an evidence board and product workbench.
colors:
  ink: "#0b1220"
  ink-raised: "#131e30"
  paper: "#f8fbf9"
  fog: "#eef3f4"
  fog-deep: "#dce6e8"
  muted: "#647182"
  signal: "#c5f04c"
  coral: "#f16f5d"
  teal: "#8de4dc"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(4rem, 8vw, 7.7rem)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.065em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.94
    letterSpacing: "-0.06em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  surface: "14px"
  control: "7px"
spacing:
  gutter: "20px"
  container: "1180px"
  section: "120px"
---

# Design System: Arsyacoo

## Overview

**Creative north star: “AI workbench / evidence board.”**

Arsyacoo is presented as a focused product studio, not as an abstract AI promise. The page borrows the visual discipline of a research bench: dark ink surfaces hold the brand and a source-grounded demo; cool paper sections hold evidence, open project rows, and the stack; coral closes the loop with a direct conversation. The hero panel shows the mechanism in miniature: question, source-grounded answer, human review, and a path to action.

The design is intentionally flat and precise. The memorable move is the lime signal mark and the evidence-panel language, not a gradient, glass card, or fake product metric.

## Visual rules

- Dark ink is the product surface; cool paper and fog are the reading surfaces.
- Acid lime is a signal, not a wash: use it for active states, short labels, dots, and the primary action.
- Coral owns the closing CTA, creating a clear change of state without adding another component style.
- Keep projects as open rows with hairline separators. The featured proof gets one large screenshot; supporting projects stay scannable.
- Use one authored motion: the hero signal panel enters with a short upward reveal and a blinking cursor. Respect `prefers-reduced-motion`.
- Use Bricolage Grotesque for display and Hanken Grotesk for body copy. Display text is bold and tightly tracked; body text stays readable.
- Use 14px corner radii for the hero evidence panel and project media, 7px for controls. No pills except compact language segments and stack tags.
- No gradients, glass, decorative blur, fake performance numbers, customer logos, testimonials, or invented company claims.

## Composition

1. Sticky dark navigation: Arsyacoo mark, four anchors, EN/ID switch, and resume/profile link.
2. Hero: oversized “AI for work that matters.” statement beside the PDF Insight AI evidence panel. The first viewport answers what Arsyacoo does and gives two clear next actions.
3. Approach: three open principles — make information usable, keep the edges honest, ship the whole loop.
4. Proof: one featured AI document project followed by five open project rows with year, contribution, stack, screenshot, and source/live links.
5. Stack: readable definition list of technologies, not a logo cloud.
6. Founder: human context and portrait, connected to the existing resume.
7. Contact: coral close with email as the primary action and the existing social paths as secondary routes.

## Interaction and accessibility

- Navigation uses real anchors and keeps the contact route visible.
- External project links declare their destination through accessible labels.
- Images use meaningful alt text; decorative signal marks are hidden from assistive technology.
- Focus rings use the lime signal color and remain visible against every surface.
- Minimum body text is 16px-equivalent, with responsive type and no intentional horizontal overflow.
