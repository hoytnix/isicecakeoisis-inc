# System Patterns: ISICECAKEOISIS INC.

## Architecture & Modular File Tree
The previous monolithic HTML document has been decomposed into distinct, isolated modules:

```
src/
├── types/
│   └── index.ts                 # SlideInfo, ThesisPillar, SiblingHub, CanonWork, InvestorInquiryPayload
├── data/
│   └── ecosystemData.ts         # All slides, thesis pillars, sibling hubs, canon works, and raw llms.txt
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Fixed glass header with live pulse, B2A badge, and modal triggers
│   │   ├── SideDotNav.tsx       # Dynamic 9-dot vertical navigation with hover titles & active indicators
│   │   ├── SlideIndicator.tsx   # Floating 01/09 slide counter and title
│   │   └── AmbientGlow.tsx      # Pulse glow backdrop effects
│   ├── diagrams/
│   │   ├── AgentMeshDiagram.tsx # FIG 02.A B2A Agent Mesh with animated glow and MCP/API nodes
│   │   ├── RadarAnimation.tsx   # FIG 03.A On-device radar simulation on iPhone frame
│   │   ├── NfcRippleDiagram.tsx # FIG 04.A NTAG215 tap ripple with 5-star bloom
│   │   ├── ChromatographyDiagram.tsx # FIG 05.A Real-time capillary elution animation
│   │   ├── MarkdownEditorDiagram.tsx # FIG 06.A CaffeineMD local-first editor and graph
│   │   └── GamesInteractivePreview.tsx # FIG 07.A Multi-game interactive simulator
│   ├── slides/
│   │   ├── Slide01Origin.tsx    # Goomba origin story & CTAs
│   │   ├── Slide02Thesis.tsx    # 4 thesis pillars & Agent Mesh
│   │   ├── Slide03Yuli.tsx      # Yuli on-device AI SDK (Beta): Qwen2.5-0.5B & Gemma 4 E2B
│   │   ├── Slide04Aevloc.tsx    # Aevloc SaaS & NTAG215 NFC stands
│   │   ├── Slide05PurpleCanary.tsx # Purple Canary free scanner app & free companion e-book
│   │   ├── Slide06CaffeineMD.tsx # CaffeineMD FLOSS knowledge operating system
│   │   ├── Slide07Games.tsx     # TehWiz mobile games: Ramen Nights, Fuck Ur Neighbor, $!#?
│   │   ├── Slide08Investor.tsx  # Accredited investor overview & securities compliance
│   │   └── Slide09Colophon.tsx  # Six sibling hubs & low-power toggle
│   └── modals/
│       ├── MenuModal.tsx        # System directory modal with keyboard shortcuts
│       └── InvestorModal.tsx    # Accredited investor inquiry modal
└── App.tsx                      # Root deck controller with IntersectionObserver & keyboard listeners
```

## State & Event Patterns
- **Active Viewport Sync**: IntersectionObserver automatically observes each snap-section and updates the active slide index.
- **Accessible Modals**: ARIA attributes (`role="dialog"`, `aria-modal="true"`, focus states), keyboard listeners (`Escape` to close, `Cmd/Ctrl+M` to toggle menu, Arrow navigation).
- **Zero-Pill Restraint**: Text kickers and typographic separators (`//`, `·`) rather than nested pill badges.
- **Low-Power Toggle**: Toggles CSS class `low-power` on `document.body` to disable heavy animations and ambient glows.
