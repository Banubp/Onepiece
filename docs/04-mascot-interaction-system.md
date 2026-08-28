# Banu Mascot Interaction System

Banu wears beige cargo trousers and a green hoodie. The illustration is deliberately graphic and clean rather than sketch-like.

| State | Trigger | Visual behavior |
|---|---|---|
| `sleep` | Visitor idle for 8 seconds | Hood up, seated, subtle breathing |
| `awake` | Pointer, keyboard, touch, or scroll | Hood down, looks toward active content |
| `work` | Case study receives hover, focus, or click | Laptop opens and posture becomes focused |
| `send` | Contact action activates | Paper plane leaves the laptop |
| `celebrate` | Email action opens | Short approving bounce, then awake |

Scroll progress maps to the mascot rail from 12% to 78% of the viewport. Movement is damped and clamped so the character never collides with navigation or footer controls. Reduced-motion users receive immediate state changes without positional travel.

Hover behavior is duplicated for keyboard focus, and touch invokes the same state. Contact animation supports feedback; visible labels and a live status carry the meaning.
