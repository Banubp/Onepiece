# Onepiece project-page blueprint

Status: content and layout plan only. Do not connect these pages to the homepage until the project inventory and content are approved.

## 1. Purpose

The homepage keeps its current six-card project grid. Each approved card will eventually open a dedicated page at `/projects/<project-slug>.html`.

A project page has a different job from a full case study:

- A case study proves deep product investigation and end-to-end reasoning.
- A project page proves range, craft, ownership and the quality of selected decisions quickly.
- It must show enough process to establish credibility, but it must not force every project through the same research template.

The primary reader is a recruiter, hiring manager or product-design peer. Nielsen Norman Group recommends making portfolio content scannable, curating a small number of strong projects, showing process artifacts as well as final screens, and explaining real constraints and candidate solutions. Adobe also recommends giving individual projects their own pages and discussing facts, UX and outcomes instead of relying only on visual polish.

Research basis:

- https://www.nngroup.com/articles/ux-design-portfolios/
- https://www.nngroup.com/articles/ux-internship-tips/
- https://www.nngroup.com/articles/problem-statements/
- https://blog.adobe.com/en/publish/2017/01/11/how-to-create-your-2017-ready-web-design-portfolio
- https://www.interaction-design.org/literature/article/how-to-write-great-case-studies-for-your-ux-design-portfolio

## 2. Project selection gate

Do not create a long page just because a homepage card exists. Score each project from 0–2 on every criterion.

| Criterion | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Ownership | Role is unclear | Partial contribution known | Exact decisions and collaboration known |
| Problem | No real problem stated | Opportunity is broad | User and business problem is specific |
| Evidence | Claims only | Some artifacts exist | Research, tests, analytics or observable feedback exists |
| Decisions | Final UI only | One decision can be explained | Multiple trade-offs and alternatives are documented |
| Visual proof | No usable material | A few screens exist | Mockups, flows and process artifacts exist |
| Outcome | No outcome or learning | Intended result is stated | Shipped result, validation or honest learning exists |
| Relevance | Repeats another project | Adds some range | Demonstrates a distinct senior-product skill |

- `11–14`: full project page.
- `7–10`: compact project page.
- `0–6`: keep as a homepage card or archive item until stronger evidence is available.

Never invent users, personas, research, metrics, shipping status or business impact to raise a score.

## 3. Recommended page anatomy

### A. Hero — understand it in ten seconds

Purpose: establish the project, its value and Banu's role before the reader scrolls.

Content:

- Project number and category.
- Project title.
- One-sentence outcome or product promise, not a generic description.
- Status label: `Shipped`, `Concept`, `Prototype`, `Client work` or `In progress`.
- Role, collaborators, timeline and platform.
- One dominant mockup or short muted interaction preview.

Layout:

- Desktop: 12-column grid; copy uses columns 1–5 and mockup uses columns 6–12.
- Mobile: copy first, mockup second.
- Mockup is the primary focal point; metadata is compact and never competes with it.

### B. Project snapshot — why it mattered

Purpose: give a skimmable answer to what, why and ownership.

Content:

- `Problem`: who was affected, what happened and why it mattered.
- `My responsibility`: what Banu personally owned.
- `Constraints`: time, technology, data, stakeholders, scope or access.
- `Goal`: the change the project intended to create.

Rule: the problem statement must describe the problem, not hide a solution inside it.

### C. Context or evidence — what informed the work

Purpose: support the project decisions with the most relevant evidence.

Choose only the modules the real project needs:

- Research synthesis and key quotes.
- Existing-flow audit.
- Competitive or analogous-product analysis.
- Persona or job-to-be-done, only when grounded in evidence.
- Journey map, only when sequence or handoffs are central.
- Technical/system map, when architecture shaped the experience.
- Accessibility or safety requirements.

Do not add a decorative persona, generic empathy map or unused research wall.

### D. Selected decisions — how the design became better

Purpose: demonstrate product judgment rather than a generic process timeline.

Show two to four decisions. Each decision uses the same compact structure:

1. Evidence or constraint.
2. Alternatives considered.
3. Chosen direction and trade-off.
4. What changed in the interface or journey.

Visual material can include sketches, rejected directions, flow fragments, annotated wireframes and before/after comparisons.

### E. Product walkthrough — what was designed

Purpose: give the final experience enough space to be understood.

Content:

- A simple end-to-end flow or three to five key moments.
- Large, readable mockups rather than many tiny screens.
- Short annotations tied to user intent and system response.
- Relevant empty, loading, error, success and responsive states.
- A motion clip only when interaction or transition is part of the design decision.

### F. System and craft — how it holds together

Purpose: expose detail appropriate to the project.

Optional modules:

- Components and interaction states.
- Information architecture.
- Content design.
- Accessibility decisions.
- Responsive behaviour.
- Design-to-development handoff.
- Brand or visual-system rules.

### G. Validation and outcome — what changed

Purpose: close the evidence loop honestly.

Use the strongest available level:

1. Shipped metric or operational result.
2. Usability-test result or behavioural observation.
3. Stakeholder/client acceptance.
4. Prototype learning.
5. Intended metric and measurement plan, clearly labelled as proposed.

Include one or two guardrails where relevant. Never present a target as an achieved result.

### H. Reflection and navigation

Content:

- What worked.
- What Banu would change with more time or evidence.
- One meaningful lesson.
- `Previous project`, `All projects` and `Next project` navigation.

## 4. Page length variants

### Full project page

Use when the project scores 11–14.

- Hero
- Snapshot
- Context/evidence
- 2–4 selected decisions
- Product walkthrough
- System/craft
- Validation/outcome
- Reflection

### Compact project page

Use when the project scores 7–10.

- Hero
- Snapshot
- One evidence or context module
- 1–2 selected decisions
- Product walkthrough
- Outcome/learning
- Reflection

The compact page should feel intentional, not incomplete.

## 5. Onepiece visual system

Preserve the current portfolio's paper, ink, serif/sans/mono typography and restrained colour accents. Each project receives one project-specific accent and media background.

### Grid and spacing

- Maximum content width: `1280px`.
- Desktop grid: `12 columns`, `24px` gutters.
- Desktop side padding: `clamp(32px, 5vw, 80px)`.
- Tablet side padding: `32px`.
- Mobile side padding: `20–24px`.
- Major section rhythm: `96–120px` desktop, `64–80px` tablet, `48–64px` mobile.
- Module gap: `24–32px`.
- Body measure: `45–75 characters`.
- Large media can break out to the page grid; prose never stretches with it.

### Hierarchy

- One primary focal point per section.
- The hero mockup carries more visual weight than the project title.
- Labels and numbering encode real category or sequence information.
- Keep annotations quiet; they support the mockup rather than compete with it.
- Avoid equal-sized tiles inside long pages when one screen or decision is more important.

## 6. UX and interaction contract

### Homepage project cards

Keep the existing visual layout, but when pages are approved:

- Convert the whole tile to one semantic link.
- Retain the visible project title and category at rest.
- On hover/focus: shift the accent surface, move the preview slightly, reveal `View project`, and animate the arrow within `180–240ms`.
- Do not enlarge text enough to reflow the card.
- Provide an equally clear keyboard focus state.
- On touch devices, keep all essential information visible without hover.

### Project pages

- Sticky local navigation only for full pages with enough sections.
- Reading progress may be used as orientation, not decoration.
- Keep critical content outside carousels.
- Images open into an accessible zoom/lightbox only when detail requires it.
- Previous/next project links are visible before the footer.
- Preserve browser Back behaviour and deep-linkable section anchors.
- Respect `prefers-reduced-motion`.
- No scroll hijacking, custom cursor dependency or hidden navigation.

## 7. Content inventory required before implementation

For every current homepage project, collect:

| Field | Required |
| --- | --- |
| Correct project name and category | Yes |
| Status: shipped/concept/prototype/client | Yes |
| One-sentence value/outcome | Yes |
| Banu's exact role and ownership | Yes |
| Team/collaborators | Yes |
| Timeline and platform | Yes |
| Problem and affected users | Yes |
| Constraints | Yes |
| 2–4 meaningful decisions | Full page |
| Research/evidence artifacts | When available |
| Final screens/mockups | Yes |
| Edge states/responsive screens | When relevant |
| Validation or honest learning | Yes |
| Achieved metrics with source | When available |
| Reflection/next step | Yes |
| Confidentiality restrictions | When applicable |

## 8. Current inventory to evaluate

The homepage currently lists:

1. Hobby Ghar — Community platform.
2. CTF Platform — Cybersecurity.
3. Job & Skill — Career technology.
4. Molly.CO — Digital product.
5. MedTrack — Healthcare.
6. Solar — Sustainability.

Before building, score each project using Section 2 and confirm which content and artifacts actually exist. This prevents six visually polished but shallow pages.

## 9. Acceptance checks for every built page

- A reviewer understands product, role, status and value from the hero alone.
- The page separates Banu's contribution from team output.
- Every process artifact supports a later decision.
- At least one real constraint or trade-off is visible.
- Final mockups are large enough to inspect.
- Outcomes are evidence-based and truthfully labelled.
- Headings remain understandable when scanned alone.
- Keyboard, touch and reduced-motion experiences work.
- No horizontal overflow at 320px.
- No broken links, missing images or inaccessible controls.
- Page works without hover.
- The design still belongs to Onepiece while the project accent remains distinctive.

## 10. Build sequence after approval

1. Complete and score the six-project content inventory.
2. Select full, compact or homepage-only treatment for each project.
3. Build one approved representative page first.
4. Test its hierarchy, mockup scale, responsiveness and navigation.
5. Refine the shared project-page system.
6. Build remaining approved pages.
7. Connect homepage cards only after all target pages pass QA.

