# Banu Mascot Interaction System

Banu wears brown-beige cargo trousers and an olive hoodie. The illustration is rendered live on canvas rather than loaded as a static image, allowing the eyes, posture, breathing, typing and mail action to animate independently.

| State | Trigger | Visual behavior |
|---|---|---|
| `sleep` | Visitor idle for 7 seconds | Hood up, seated, subtle breathing |
| `awake` | Pointer approaches, keyboard, touch, or scroll | Hood down, pupils track the cursor |
| `work` | Case study receives hover, focus, or click | Laptop opens and posture becomes focused |
| `send` | Contact action activates | Paper plane leaves the laptop |
| `celebrate` | Email action opens | Short approving bounce, then awake |

Scroll changes the mascot posture with a short hop and updates the page progress indicator. The mascot remains in its intentional hero position instead of becoming a floating obstruction. Reduced-motion users receive immediate state changes without positional travel.

Hover behavior is duplicated for keyboard focus, and touch invokes the same state. Contact animation supports feedback; visible labels and a live status carry the meaning.
