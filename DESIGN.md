# Onepiece Design Direction

## Thesis

The portfolio should feel like meeting the designer at his desk, not browsing a generic agency landing page. Banu is the persistent guide: he rests when the visitor is idle, follows the page journey, works when a case study is explored, and sends the final message.

## Visual system

- Canvas: Natural Paper `#f5f2eb`
- Primary text: Ink `#11110f`
- Muted text: Graphite `#5f5d59`
- Signature: Pen Purple `#6847e8`
- Annotation: Editor Red `#df4e2d`

Typography uses Instrument Serif for the defining editorial headline, DM Sans for readable body copy and DM Mono for annotations and product metadata. The attached approved design is the visual source of truth. Dribbble references contribute only transferable ideas for motion, hierarchy and polish. The legacy portfolio contributes content only.

## Layout and motion

- Desktop: framed editorial canvas with the illustrated mascot above the hero headline.
- Tablet: 8-column grid with a stacked case-study rhythm.
- Mobile: single column; the mascot stays above the tagline and never blocks controls.
- Case studies use full-width horizontal numbered rows with image layering and focused hover motion.
- One orchestrated intro, followed by restrained reveal motion.
- `prefers-reduced-motion` removes travel, parallax, and automatic mascot repositioning.

## Accessibility contract

- WCAG 2.2 AA contrast target and visible keyboard focus.
- Semantic landmarks, native controls, and 44px minimum touch targets.
- Mascot is decorative; system status is never conveyed only by animation.
- Contact flow includes explicit visible status text.
