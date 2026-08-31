# Design QA

- Selected target: `upload/66fedd2a-b31b-44f8-bef7-4424546a9684.png`
- Rejected live result: `upload/4a023e0c-1061-4f27-9390-7bfa5b48c329.png`
- Scope: homepage case-study card layout, typography, padding, and mockup containment.

## Corrections

- Rebuilt the information band as two independent columns: project identity on the left and thesis on the right.
- Moved number and category above the title to match the selected rough board.
- Reduced the title scale and added a dedicated width so long names cannot collide with the thesis.
- Kept the CTA beneath the title and aligned it to the same left edge.
- Reduced and contained product mockups inside the coloured stage.
- Removed the black hover label that was not present in the selected target.
- Preserved whole-card navigation, keyboard focus, touch behavior, reduced motion, and subtle mockup depth.

## Verification

- Production build passed.
- Strict premium UI audit passed.
- CSS diff check passed.
- Four semantic case-study links remain intact.

## Blocker

- The cloud browser could not connect to the local preview service, so a same-viewport screenshot comparison could not be completed in this runtime.

final result: blocked
