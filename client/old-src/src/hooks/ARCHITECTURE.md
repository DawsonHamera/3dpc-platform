# Scroll Animation System Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         YOUR IONIC PAGE                              │
│                                                                      │
│  import { useScrollAnimation, fadeIn } from '../hooks';             │
│                                                                      │
│  const contentRef = useRef<HTMLIonContentElement>(null);            │
│  const containerRef = useRef<HTMLDivElement>(null);                 │
│                                                                      │
│  useScrollAnimation(contentRef, containerRef, {                     │
│      selector: '.animate',                                          │
│      ...fadeIn  // or custom config                                 │
│  });                                                                 │
│                                                                      │
│  <IonContent ref={contentRef}>                                      │
│      <div ref={containerRef}>                                       │
│          <div className="animate">Content</div>                     │
│      </div>                                                          │
│  </IonContent>                                                       │
└──────────────────────────────────────────────────────────────────────┘
                                  │
                                  │ imports from
                                  ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        hooks/index.ts                                │
│                     (Single Import Point)                            │
│                                                                      │
│  Exports:                                                            │
│    - useScrollAnimation()                                            │
│    - useScrollAnimations()                                           │
│    - All presets (fadeIn, slideInLeft, etc.)                        │
│    - All helpers (createFadeAnimation, etc.)                        │
└─────────────────────────────────────────────────────────────────────┘
                  │                │                │
        ┌─────────┴────────┬───────┴────────┬───────┴─────────┐
        ▼                  ▼                ▼                  ▼
┌──────────────┐  ┌────────────────┐  ┌───────────────┐  ┌─────────────┐
│useScrollAnim │  │ animationPre-  │  │  animation    │  │   USAGE     │
│ation.ts      │  │ sets.ts        │  │  Helpers.ts   │  │  EXAMPLES   │
│              │  │                │  │               │  │             │
│ Core Hooks:  │  │ 14 Presets:    │  │ Helpers:      │  │ 9 Examples: │
│              │  │                │  │               │  │             │
│ • useScroll  │  │ • fadeIn       │  │ • createFade  │  │ • Basic     │
│   Animation  │  │ • fadeInOut    │  │ • createSlide │  │ • Presets   │
│              │  │ • slideInLeft  │  │ • createScale │  │ • Multiple  │
│ • useScroll  │  │ • slideInRight │  │ • createRotate│  │ • Stagger   │
│   Animations │  │ • scaleUp      │  │ • createFlip  │  │ • Complex   │
│              │  │ • rotateIn     │  │ • createPara  │  │ • Parallax  │
│ Handles:     │  │ • bounceIn     │  │   llax        │  │ • Landing   │
│ • Ionic      │  │ • elasticZoom  │  │ • createBlur  │  │ • etc.      │
│   scroll     │  │ • blurIn       │  │ • createStag  │  │             │
│   element    │  │ • flipIn       │  │   ger         │  │ Copy &      │
│ • GSAP       │  │ • parallax     │  │ • combine     │  │ Adapt!      │
│   ScrollTrig │  │ • staggerCards │  │   Animations  │  │             │
│   ger        │  │ • textReveal   │  │ • createEnter │  │             │
│ • Enter/Exit │  │ • glowIn       │  │   Exit        │  │             │
│   states     │  │                │  │               │  │             │
└──────────────┘  └────────────────┘  └───────────────┘  └─────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                      ANIMATION FLOW                                  │
│                                                                      │
│  1. Page scrolls                                                    │
│  2. Ionic scroll element detected                                   │
│  3. ScrollTrigger watches element position                          │
│  4. Element enters viewport (at "start" position)                   │
│  5. GSAP animates from "enter.from" to "enter.to"                  │
│  6. Element exits viewport (scrolling past)                         │
│  7. Optional: GSAP animates to "exit.to" state                     │
│  8. Element re-enters (scrolling back)                              │
│  9. Animation reverses or plays again                               │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    CUSTOMIZATION LEVELS                              │
│                                                                      │
│  Level 1: USE PRESETS (Easiest)                                    │
│  ┌─────────────────────────────────────────────────────────┐       │
│  │ useScrollAnimation(refs..., { selector: '.x', ...fadeIn })      │
│  └─────────────────────────────────────────────────────────┘       │
│                                                                      │
│  Level 2: USE HELPERS (Quick Custom)                               │
│  ┌─────────────────────────────────────────────────────────┐       │
│  │ useScrollAnimation(refs..., createFadeAnimation('.x', 50))      │
│  └─────────────────────────────────────────────────────────┘       │
│                                                                      │
│  Level 3: CUSTOMIZE PRESETS (Flexible)                             │
│  ┌─────────────────────────────────────────────────────────┐       │
│  │ useScrollAnimation(refs..., {                                   │
│  │     selector: '.x',                                             │
│  │     ...fadeIn,                                                  │
│  │     duration: 1.5,  // Override                                 │
│  │     stagger: 0.2    // Add stagger                              │
│  │ })                                                              │
│  └─────────────────────────────────────────────────────────┘       │
│                                                                      │
│  Level 4: FULL CUSTOM (Complete Control)                           │
│  ┌─────────────────────────────────────────────────────────┐       │
│  │ useScrollAnimation(refs..., {                                   │
│  │     selector: '.x',                                             │
│  │     enter: {                                                    │
│  │         from: { y: 100, opacity: 0, rotation: -45 },           │
│  │         to: { y: 0, opacity: 1, rotation: 0 }                  │
│  │     },                                                          │
│  │     exit: {                                                     │
│  │         from: { y: 0, opacity: 1 },                            │
│  │         to: { y: -50, opacity: 0, scale: 0.9 }                 │
│  │     },                                                          │
│  │     duration: 1.2,                                              │
│  │     ease: "power3.out"                                          │
│  │ })                                                              │
│  └─────────────────────────────────────────────────────────┘       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                      BEST PRACTICES                                  │
│                                                                      │
│  ✅ Always set both contentRef and containerRef                     │
│  ✅ Use markers: true during development                            │
│  ✅ Set markers: false in production                                │
│  ✅ Start with presets, customize as needed                         │
│  ✅ Use stagger for multiple similar elements                       │
│  ✅ Keep animations subtle (0.6-1.2s duration)                      │
│  ✅ Test on mobile devices                                          │
│  ✅ Use will-change: transform CSS for performance                  │
│  ✅ Limit animations to ~10-20 per page                             │
│  ✅ Check USAGE_EXAMPLES.tsx for patterns                           │
└─────────────────────────────────────────────────────────────────────┘
```

## File Relationships

```
YOUR PAGE
    ↓ imports from
hooks/index.ts
    ↓ exports from
    ├── useScrollAnimation.ts (core hooks)
    ├── animationPresets.ts (14 presets)
    ├── animationHelpers.ts (helper functions)
    └── USAGE_EXAMPLES.tsx (copy-paste examples)

DOCUMENTATION
    ├── README.md (quick start)
    ├── SCROLL_ANIMATION_HOOKS.md (detailed API)
    ├── SETUP_COMPLETE.md (this setup guide)
    └── ARCHITECTURE.md (this file)

DEMO
    └── AnimationExamples.tsx (live demo page)
```

## Quick Reference Card

```typescript
// Import
import { useScrollAnimation, fadeIn } from '../hooks';

// Setup refs
const contentRef = useRef<HTMLIonContentElement>(null);
const containerRef = useRef<HTMLDivElement>(null);

// Basic usage
useScrollAnimation(contentRef, containerRef, {
    selector: '.animate',
    ...fadeIn,
});

// Custom
useScrollAnimation(contentRef, containerRef, {
    selector: '.custom',
    enter: { from: {...}, to: {...} },
    exit: { from: {...}, to: {...} },  // optional
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,  // for multiple elements
    markers: true,  // debug mode
});

// JSX
<IonContent ref={contentRef}>
    <div ref={containerRef}>
        <div className="animate">Content</div>
    </div>
</IonContent>
```
