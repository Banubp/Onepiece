# Onepiece Design Direction

## Thesis

The portfolio should feel like meeting the designer at his desk, not browsing a generic agency landing page. Banu is the persistent guide: he rests when the visitor is idle, follows the page journey, works when a case study is explored, and sends the final message.

## Visual system

- Canvas: Lavender Mist `#f1f0ff`
- Surface: Warm Paper `#fffefb`
- Primary text: Ink `#171629`
- Muted text: Slate `#69677a`
- Signature: Iris `#5746e8`
- Warm counterpoint: Coral `#ff806f`
- Focus: Deep Teal `#1a7872`

Typography uses Manrope for oversized editorial headlines and DM Sans for body and utility text. The direction is a new light editorial system informed by the supplied Dribbble references: generous spacing, central character focus, layered cards and a structured CV narrative. It does not inherit the legacy portfolio's styling or layout.

## Layout and motion

- Desktop: 12-column editorial grid, content within 1240px, mascot centred above the hero tagline.
- Tablet: 8-column grid with a stacked case-study rhythm.
- Mobile: single column; the mascot stays above the tagline and never blocks controls.
- Case studies use an asymmetric 7/5 card composition and collapse into a clear reading sequence.
- One orchestrated intro, followed by restrained reveal motion.
- `prefers-reduced-motion` removes travel, parallax, and automatic mascot repositioning.

## Accessibility contract

- WCAG 2.2 AA contrast target and visible keyboard focus.
- Semantic landmarks, native controls, and 44px minimum touch targets.
- Mascot is decorative; system status is never conveyed only by animation.
- Contact flow includes explicit visible status text.
