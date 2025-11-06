/**
 * COMPREHENSIVE USAGE EXAMPLES
 * Copy and adapt these examples for your own pages
 */

import { useRef } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { useScrollAnimation, useScrollAnimations } from './useScrollAnimation';
import { fadeIn, slideInLeft, scaleUp } from './animationPresets';
import { createFadeAnimation, createSlideAnimation } from './animationHelpers';

// ============================================================================
// EXAMPLE 1: Basic Fade In
// ============================================================================
export function Example1_BasicFade() {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.fade-in',
        enter: {
            from: { opacity: 0, y: 40 },
            to: { opacity: 1, y: 0 },
        },
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="fade-in">This fades in</div>
                </div>
            </IonContent>
        </IonPage>
    );
}

// ============================================================================
// EXAMPLE 2: Using Presets
// ============================================================================
export function Example2_UsingPresets() {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.hero',
        ...fadeIn,
        duration: 1.2, // Override preset duration
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="hero">Hero Section</div>
                </div>
            </IonContent>
        </IonPage>
    );
}

// ============================================================================
// EXAMPLE 3: Multiple Animations
// ============================================================================
export function Example3_MultipleAnimations() {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimations(contentRef, containerRef, [
        {
            selector: '.hero',
            ...fadeIn,
        },
        {
            selector: '.card',
            ...slideInLeft,
        },
        {
            selector: '.button',
            ...scaleUp,
        },
    ]);

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="hero">Hero</div>
                    <div className="card">Card</div>
                    <div className="button">Button</div>
                </div>
            </IonContent>
        </IonPage>
    );
}

// ============================================================================
// EXAMPLE 4: Custom Enter and Exit
// ============================================================================
export function Example4_EnterExit() {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.card',
        enter: {
            from: { opacity: 0, y: 50, scale: 0.9 },
            to: { opacity: 1, y: 0, scale: 1 },
        },
        exit: {
            from: { opacity: 1, y: 0 },
            to: { opacity: 0, y: -30 },
        },
        duration: 0.8,
        ease: "power2.out",
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="card">Animates in and out</div>
                </div>
            </IonContent>
        </IonPage>
    );
}

// ============================================================================
// EXAMPLE 5: Staggered Items
// ============================================================================
export function Example5_Stagger() {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.list-item',
        enter: {
            from: { y: 30, opacity: 0 },
            to: { y: 0, opacity: 1 },
        },
        stagger: 0.15, // Delay each item by 0.15s
        duration: 0.6,
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="list-item">Item 1</div>
                    <div className="list-item">Item 2</div>
                    <div className="list-item">Item 3</div>
                    <div className="list-item">Item 4</div>
                </div>
            </IonContent>
        </IonPage>
    );
}

// ============================================================================
// EXAMPLE 6: Using Helper Functions
// ============================================================================
export function Example6_Helpers() {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimations(contentRef, containerRef, [
        createFadeAnimation('.fade', 50),
        createSlideAnimation('.slide', 'left', 100),
        createSlideAnimation('.slide-right', 'right', 100),
    ]);

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="fade">Fades in</div>
                    <div className="slide">Slides from left</div>
                    <div className="slide-right">Slides from right</div>
                </div>
            </IonContent>
        </IonPage>
    );
}

// ============================================================================
// EXAMPLE 7: Complex Animation
// ============================================================================
export function Example7_Complex() {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.complex',
        enter: {
            from: { 
                y: 100, 
                opacity: 0, 
                scale: 0.8, 
                rotation: -15,
                filter: 'blur(5px)'
            },
            to: { 
                y: 0, 
                opacity: 1, 
                scale: 1, 
                rotation: 0,
                filter: 'blur(0px)'
            },
        },
        duration: 1.5,
        ease: "power3.out",
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="complex">Complex animation</div>
                </div>
            </IonContent>
        </IonPage>
    );
}

// ============================================================================
// EXAMPLE 8: Parallax Background
// ============================================================================
export function Example8_Parallax() {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimation(contentRef, containerRef, {
        selector: '.bg-layer',
        enter: {
            from: { y: 0 },
            to: { y: -200 },
        },
        scrub: true, // Link to scroll position
        start: "top bottom",
        end: "bottom top",
    });

    return (
        <IonPage>
            <IonContent ref={contentRef}>
                <div ref={containerRef}>
                    <div className="bg-layer" style={{ 
                        position: 'absolute', 
                        top: 0, 
                        width: '100%', 
                        height: '100%',
                        background: 'linear-gradient(to bottom, blue, purple)',
                        zIndex: -1
                    }}></div>
                    <div style={{ height: '200vh' }}>
                        Scroll to see parallax effect
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

// ============================================================================
// EXAMPLE 9: Landing Page (Complete Example)
// ============================================================================
export function Example9_LandingPage() {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollAnimations(contentRef, containerRef, [
        // Hero section
        {
            selector: '.hero-title',
            enter: {
                from: { y: 100, opacity: 0 },
                to: { y: 0, opacity: 1 },
            },
            duration: 1.2,
            ease: "power3.out",
        },
        // Feature cards
        {
            selector: '.feature-card',
            enter: {
                from: { y: 50, opacity: 0, scale: 0.95 },
                to: { y: 0, opacity: 1, scale: 1 },
            },
            stagger: 0.2,
            duration: 0.8,
        },
        // CTA button
        {
            selector: '.cta-button',
            enter: {
                from: { scale: 0, opacity: 0 },
                to: { scale: 1, opacity: 1 },
            },
            duration: 0.6,
            ease: "back.out(1.5)",
        },
    ]);

    return (
        <IonPage>
            <IonContent ref={contentRef} className="ion-padding">
                <div ref={containerRef}>
                    <div className="hero-title" style={{ marginBottom: '500px' }}>
                        <h1>Welcome to Our App</h1>
                    </div>

                    <div className="feature-card" style={{ marginBottom: '100px', padding: '20px', background: '#f0f0f0' }}>
                        Feature 1
                    </div>
                    <div className="feature-card" style={{ marginBottom: '100px', padding: '20px', background: '#f0f0f0' }}>
                        Feature 2
                    </div>
                    <div className="feature-card" style={{ marginBottom: '100px', padding: '20px', background: '#f0f0f0' }}>
                        Feature 3
                    </div>

                    <div className="cta-button" style={{ marginBottom: '200px', padding: '20px', background: 'blue', color: 'white', textAlign: 'center' }}>
                        Get Started
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}
