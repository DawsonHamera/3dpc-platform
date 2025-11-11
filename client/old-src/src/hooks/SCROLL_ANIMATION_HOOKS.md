# GSAP Scroll Animation Hooks for Ionic

Fully customizable React hooks for scroll-triggered GSAP animations in Ionic applications. Control both **enter** and **exit** animations independently.

## Available Hooks

### `useScrollAnimation`
Main hook for single animation configuration with full control over enter and exit states.

**Basic Fade In:**
```tsx
import { useRef } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MyPage = () => {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.fade-in',
        enter: {
            from: { opacity: 0, y: 50 },
            to: { opacity: 1, y: 0 },
        },
        duration: 0.8,
        markers: false,
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="fade-in">Fades in on scroll</div>
                </div>
            </IonContent>
        </IonPage>
    );
};
```

**With Custom Exit Animation:**
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.fade-in-out',
    enter: {
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 },
    },
    exit: {
        from: { opacity: 1, y: 0 },
        to: { opacity: 0, y: -20 },
    },
    duration: 1,
    ease: "power3.inOut",
});
```

### `useScrollAnimations`
Hook for multiple different animations on the same page.

**Usage:**
```tsx
import { useScrollAnimations } from '../hooks/useScrollAnimation';

const MyPage = () => {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimations(contentRef, containerRef, [
        {
            selector: '.scale-up',
            enter: {
                from: { scale: 0.5, opacity: 0 },
                to: { scale: 1, opacity: 1 },
            },
            duration: 1,
        },
        {
            selector: '.rotate-in',
            enter: {
                from: { rotation: -90, opacity: 0 },
                to: { rotation: 0, opacity: 1 },
            },
            exit: {
                from: { rotation: 0, opacity: 1 },
                to: { rotation: 90, opacity: 0 },
            },
            duration: 1.2,
        },
        {
            selector: '.slide-left',
            enter: {
                from: { x: -100, opacity: 0 },
                to: { x: 0, opacity: 1 },
            },
            stagger: 0.2, // Delay each element by 0.2s
        }
    ]);

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="scale-up">Scales up</div>
                    <div className="rotate-in">Rotates in and out</div>
                    <div className="slide-left">Slides 1</div>
                    <div className="slide-left">Slides 2</div>
                    <div className="slide-left">Slides 3</div>
                </div>
            </IonContent>
        </IonPage>
    );
};
```

## Configuration Options

### ScrollAnimationConfig
```typescript
interface AnimationState {
    from: gsap.TweenVars;  // Starting properties
    to: gsap.TweenVars;    // Ending properties
}

interface ScrollAnimationConfig {
    selector: string;              // CSS selector for elements to animate
    enter: AnimationState;         // Animation when entering view
    exit?: AnimationState;         // Animation when leaving view (optional)
    start?: string;                // When to start (default: "top 85%")
    end?: string;                  // When to end (default: "top 20%")
    markers?: boolean;             // Show debug markers
    scrub?: boolean | number;      // Link animation to scroll position
    duration?: number;             // Animation duration in seconds (default: 0.8)
    ease?: string;                 // Easing function (default: "power2.out")
    stagger?: number;              // Delay between multiple elements (default: 0)
}
```

### Animation Properties (gsap.TweenVars)
You can use any GSAP-compatible properties:
- **Position**: `x`, `y`, `z`
- **Opacity**: `opacity`
- **Scale**: `scale`, `scaleX`, `scaleY`
- **Rotation**: `rotation`, `rotationX`, `rotationY`, `rotationZ`
- **Transform Origin**: `transformOrigin`
- **Filters**: `blur`, `brightness`, `contrast`, etc.
- **And many more!**

### Common ScrollTrigger Values

**start/end positions:**
- `"top top"` - When element's top hits viewport's top
- `"top center"` - When element's top hits viewport's center
- `"top 80%"` - When element's top hits 80% down the viewport
- `"bottom top"` - When element's bottom hits viewport's top

**Common Easing Functions:**
- `"power1.out"` - Gentle ease out
- `"power2.out"` - Medium ease out (default)
- `"power3.out"` - Strong ease out
- `"power2.inOut"` - Ease in and out
- `"elastic.out"` - Bouncy effect
- `"back.out"` - Slight overshoot
- `"bounce.out"` - Bouncing effect

## Using Animation Presets

For quick setup, use the pre-built animation presets:

```tsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { fadeIn, slideInLeft, scaleUp } from '../hooks/animationPresets';

const MyPage = () => {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.fade-in',
        ...fadeIn, // Use preset
    });

    useScrollAnimation(contentRef, containerRef, {
        selector: '.slide',
        ...slideInLeft,
        markers: true, // Override preset options
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="fade-in">Uses fadeIn preset</div>
                    <div className="slide">Uses slideInLeft preset</div>
                </div>
            </IonContent>
        </IonPage>
    );
};
```

**Available Presets:**
- `fadeIn` - Simple fade in from bottom
- `fadeInOut` - Fade in with exit animation
- `slideInLeft` / `slideInRight` - Slide from sides
- `scaleUp` - Scale from center with back ease
- `rotateIn` - Rotate with scale
- `bounceIn` - Bounce effect
- `elasticZoom` - Elastic scale effect
- `blurIn` - Blur to clear
- `flipIn` - 3D flip effect
- `parallax` - Background parallax (use with scrub)
- `staggerCards` - Cards with stagger delay
- `textReveal` - Subtle text entrance
- `glowIn` - Brightness fade

## Tips

1. **Always use refs:** You need both a `contentRef` for the IonContent and a `containerRef` for the animated elements' container.

2. **Set markers to false in production:** Debug markers should only be used during development.

3. **Performance:** Avoid animating too many elements at once. Consider using `will-change: transform` CSS for better performance.

4. **Scope animations:** Keep the `containerRef` scoped to only the section with animations to avoid performance issues.

5. **Use presets:** Start with presets and customize as needed for consistent animations across your app.

## Examples

### Fade In (Simple)
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.fade-in',
    enter: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
    },
});
```

### Slide In From Left
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.slide-left',
    enter: {
        from: { x: -100, opacity: 0 },
        to: { x: 0, opacity: 1 },
    },
    duration: 1,
    ease: "power3.out",
});
```

### Scale Up with Rotation
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.scale-rotate',
    enter: {
        from: { scale: 0.5, rotation: -45, opacity: 0 },
        to: { scale: 1, rotation: 0, opacity: 1 },
    },
    exit: {
        from: { scale: 1, rotation: 0, opacity: 1 },
        to: { scale: 0.8, rotation: 45, opacity: 0 },
    },
    duration: 1.2,
    ease: "back.out",
});
```

### Parallax Effect (Scrub)
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.parallax-bg',
    enter: {
        from: { y: 0 },
        to: { y: -100 },
    },
    scrub: true, // Links animation to scroll position
    start: "top bottom",
    end: "bottom top",
});
```

### Staggered Cards
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.card',
    enter: {
        from: { y: 50, opacity: 0, scale: 0.9 },
        to: { y: 0, opacity: 1, scale: 1 },
    },
    stagger: 0.15, // Each card animates 0.15s after the previous
    duration: 0.6,
});
```

### Blur to Clear
```tsx
useScrollAnimation(contentRef, containerRef, {
    selector: '.blur-in',
    enter: {
        from: { filter: 'blur(10px)', opacity: 0 },
        to: { filter: 'blur(0px)', opacity: 1 },
    },
    duration: 1,
});
```

### Multiple Different Animations
```tsx
useScrollAnimations(contentRef, containerRef, [
    {
        selector: '.hero-text',
        enter: {
            from: { y: 100, opacity: 0 },
            to: { y: 0, opacity: 1 },
        },
        duration: 1.2,
        ease: "power3.out",
    },
    {
        selector: '.feature-card',
        enter: {
            from: { x: -50, opacity: 0, rotationY: -45 },
            to: { x: 0, opacity: 1, rotationY: 0 },
        },
        stagger: 0.2,
    },
    {
        selector: '.background-shape',
        enter: {
            from: { scale: 0, rotation: -180 },
            to: { scale: 1, rotation: 0 },
        },
        duration: 2,
        ease: "elastic.out",
    },
]);
```
