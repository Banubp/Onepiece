# Design QA

- Source visual truth: `/workspace/scratch/a57a9d22ade3/upload/d3507a83-acab-49f4-a025-79419a5c643d.png`
- Implementation: `http://terminal.local:4173/`
- Evidence: browser-rendered desktop captures inspected in the connected cloud browser
- Viewport: 1365 × 958 CSS px, device scale 1
- Source pixels: 1536 × 1024
- State: hero default/sleep, case-study hover/work, Booking.com dialog open/closed

## Fidelity review

- Fonts and typography: Instrument Serif reproduces the high-contrast editorial hero; DM Sans and DM Mono preserve the supporting and annotation roles. Semantic wrapping follows the approved three-line headline.
- Spacing and layout: framed paper canvas, header rhythm, mascot/annotation zone, right-side note, and horizontal work rows match the approved composition. Final measured horizontal overflow is 0px.
- Colors and tokens: natural paper, ink, restrained purple and editor-red accents match the source hierarchy.
- Image quality: the mascot is a dedicated transparent raster state sheet in a consistent hand-drawn editorial style. Nexa and Booking.com media use the supplied portfolio content only.
- Copy and content: approved hero copy is preserved; four case studies, six projects, three experience entries, About, CV and contact are present.

## Interaction evidence

- Mascot sleep, proximity wake, wave, scroll/work, send and celebrate states are implemented.
- Case-study hover changes the mascot to work and animates layered product media.
- Booking.com dialog opened with the correct title and closed successfully.
- Mobile menu and responsive single-column rules are implemented at the 850px breakpoint.
- App console produced no site-origin errors; observed extension metadata errors were browser-extension-origin only.

## Comparison history

- Earlier P1: unrelated lavender card direction replaced the approved fixed composition.
- Fix: restored paper frame, serif hierarchy, annotations, side note and horizontal case-study rows.
- Earlier P1: crude inline mascot did not match the illustration language.
- Fix: replaced it with a consistent four-state hand-drawn raster asset.
- Earlier P2: 11px horizontal overflow.
- Fix: bounded major page regions to 100%; post-fix measurement is 0px.

## Follow-up polish

- Mail-client navigation could not be opened inside the cloud browser because `mailto:` is blocked by its URL policy; the visible status change and event handler remain implemented.

final result: passed
