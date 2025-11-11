# Scroll Animation System - Quick Start

A flexible, fully customizable scroll animation system for Ionic React applications using GSAP.

## 🚀 Quick Start

```tsx
import { useRef } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeIn } from '../hooks/animationPresets';

const MyPage = () => {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.animate',
        ...fadeIn,
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="animate">This will animate!</div>
                </div>
            </IonContent>
        </IonPage>
    );
};
```

## 📁 Files

- **`useScrollAnimation.ts`** - Main hooks for scroll animations
- **`animationPresets.ts`** - Pre-built animation configurations
- **`SCROLL_ANIMATION_HOOKS.md`** - Detailed documentation
- **`AnimationExamples.tsx`** - Live examples of all animations

## ✨ Features

### 1. Customizable Enter/Exit Animations
Control exactly how elements animate when entering and leaving the viewport:

```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.card',
    enter: {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0 },
    },
    exit: {
        from: { opacity: 1, y: 0 },
        to: { opacity: 0, y: -30 },
    },
});
```

### 2. Multiple Animations Per Page
Set up different animations for different elements:

```tsx
useScrollAnimations(contentRef, containerRef, [
    {
        selector: '.hero',
        ...fadeIn,
    },
    {
        selector: '.card',
        ...slideInLeft,
        stagger: 0.2,
    },
]);
```

### 3. Stagger Effects
Automatically delay animations for multiple elements:

```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.list-item',
    ...fadeIn,
    stagger: 0.15, // Each item delayed by 0.15s
});
```

### 4. Pre-built Presets
Use ready-made animations or customize them:

```tsx
import { fadeIn, slideInLeft, scaleUp, bounceIn } from '../hooks/animationPresets';

// Use as-is
useScrollAnimation(contentRef, containerRef, {
    selector: '.element',
    ...fadeIn,
});

// Or customize
useScrollAnimation(contentRef, containerRef, {
    selector: '.element',
    ...fadeIn,
    duration: 1.5, // Override preset duration
    markers: true,
});
```

## 🎨 Available Presets

| Preset | Description |
|--------|-------------|
| `fadeIn` | Simple fade from bottom |
| `fadeInOut` | Fade in with exit animation |
| `slideInLeft` | Slide from left |
| `slideInRight` | Slide from right |
| `scaleUp` | Scale from center |
| `rotateIn` | Rotate with scale |
| `bounceIn` | Bounce effect |
| `elasticZoom` | Elastic scale |
| `blurIn` | Blur to clear |
| `flipIn` | 3D flip effect |
| `parallax` | Background parallax |
| `staggerCards` | Cards with stagger |
| `textReveal` | Subtle text entrance |
| `glowIn` | Brightness fade |

## �️ Animation Helpers

Use helper functions to quickly create common animations:

```tsx
import { createFadeAnimation, createSlideAnimation, createStaggerAnimation } from '../hooks/animationHelpers';

// Simple fade with one line
useScrollAnimation(contentRef, containerRef, 
    createFadeAnimation('.fade', 50, { duration: 1 })
);

// Slide from any direction
useScrollAnimation(contentRef, containerRef,
    createSlideAnimation('.slide', 'left', 100)
);

// Stagger animation
useScrollAnimation(contentRef, containerRef,
    createStaggerAnimation('.items', 0.15)
);
```

## �📖 Common Patterns

### Hero Section
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.hero-title',
    enter: {
        from: { y: 100, opacity: 0 },
        to: { y: 0, opacity: 1 },
    },
    duration: 1.2,
    ease: "power3.out",
});

// Or use helper:
import { createFadeAnimation } from '../hooks/animationHelpers';
useScrollAnimation(contentRef, containerRef,
    createFadeAnimation('.hero-title', 100, { duration: 1.2, ease: "power3.out" })
);
```

### Feature Cards
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.feature-card',
    enter: {
        from: { y: 50, opacity: 0, scale: 0.95 },
        to: { y: 0, opacity: 1, scale: 1 },
    },
    stagger: 0.2,
    duration: 0.6,
});
```

### Parallax Background
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.bg-layer',
    enter: {
        from: { y: 0 },
        to: { y: -200 },
    },
    scrub: true,
    start: "top bottom",
    end: "bottom top",
});
```

## 🔧 Configuration Options

```typescript
interface ScrollAnimationConfig {
    selector: string;              // CSS selector
    enter: AnimationState;         // Enter animation
    exit?: AnimationState;         // Exit animation (optional)
    start?: string;                // Trigger start (default: "top 85%")
    end?: string;                  // Trigger end (default: "top 20%")
    markers?: boolean;             // Debug markers
    scrub?: boolean | number;      // Link to scroll
    duration?: number;             // Duration in seconds
    ease?: string;                 // Easing function
    stagger?: number;              // Delay between elements
}
```

## 💡 Tips

1. **Always set refs**: Both `contentRef` and `containerRef` are required
2. **Use markers for debugging**: Set `markers: true` while developing
3. **Optimize with will-change**: Add `will-change: transform` CSS for better performance
4. **Start with presets**: Customize presets instead of building from scratch
5. **Test scroll behavior**: Animations trigger based on viewport position

## 📝 Example Page

See `AnimationExamples.tsx` for a complete working example with all animation types.

## 🎯 Basic Template

```tsx
import { useRef } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MyPage: React.FC = () => {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.animate-me',
        enter: {
            from: { /* initial state */ },
            to: { /* final state */ },
        },
        // Optional: add exit animation
        // Optional: adjust duration, ease, stagger, etc.
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    {/* Your animated content */}
                    <div className="animate-me">Content</div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default MyPage;
```

## 🐛 Troubleshooting

**Animations not triggering?**
- Ensure both refs are properly set
- Check that the selector matches your elements
- Enable `markers: true` to see trigger points
- Verify ScrollTrigger is registered (it auto-registers in the hook)

**Animations too fast/slow?**
- Adjust the `duration` property
- Try different easing functions

**Multiple elements not staggering?**
- Add the `stagger` property with a delay value (e.g., 0.15)

For more details, see `SCROLL_ANIMATION_HOOKS.md`.
