# Onepiece Design Direction

## Thesis

The portfolio should feel like meeting the designer at his desk, not browsing a generic agency landing page. Banu is the persistent guide: he rests when the visitor is idle, follows the page journey, works when a case study is explored, and sends the final message.

## Visual system

- Canvas: Ink Navy `#0c1017`
- Surface: Deck `#151c25`
- Primary text: Paper `#f3efe5`
- Muted text: Fog `#a8b0bd`
- Signature: Hoodie Green `#9cdb3b`
- Warm counterpoint: Cargo Sand `#d5b98b`
- Focus: Signal Cyan `#75e6da`

Typography uses Space Grotesk for expressive headlines and Inter for body and utility text, with robust system fallbacks. The signature composition is the desk-edge guide: the mascot occupies a quiet side rail and changes posture according to visitor intent.

## Layout and motion

- Desktop: 12-column editorial grid, content within 1200px, persistent mascot rail.
- Tablet: 8-column grid; mascot becomes a floating companion.
- Mobile: single column; mascot docks above the bottom safe area and never blocks controls.
- Case studies alternate editorial layouts instead of repeating identical cards.
- One orchestrated intro, followed by restrained reveal motion.
- `prefers-reduced-motion` removes travel, parallax, and automatic mascot repositioning.

## Accessibility contract

- WCAG 2.2 AA contrast target and visible keyboard focus.
- Semantic landmarks, native controls, and 44px minimum touch targets.
- Mascot is decorative; system status is never conveyed only by animation.
- Contact flow includes explicit visible status text.
