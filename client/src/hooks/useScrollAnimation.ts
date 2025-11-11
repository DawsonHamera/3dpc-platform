import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

export interface AnimationState {
    /** Animation properties when element is out of view (before entering) */
    from: gsap.TweenVars;
    /** Animation properties when element is in view */
    to: gsap.TweenVars;
}

export interface ScrollAnimationConfig {
    /** CSS selector for elements to animate */
    selector: string;
    /** Animation when scrolling into view */
    enter: AnimationState;
    /** Animation when scrolling out of view (optional, defaults to reversing enter) */
    exit?: AnimationState;
    /** When to start the animation (default: "top 85%") */
    start?: string;
    /** When to end/reverse the animation (default: "top 20%") */
    end?: string;
    /** Show debug markers */
    markers?: boolean;
    /** Link animation progress to scroll position */
    scrub?: boolean | number;
    /** Animation duration in seconds (default: 0.8) */
    duration?: number;
    /** Easing function (default: "power2.out") */
    ease?: string;
    /** Stagger delay between multiple elements (default: 0) */
    stagger?: number;
}

/**
 * Main hook for scroll-triggered animations in Ionic
 * Supports custom enter and exit animations with full control
 */
export function useScrollAnimation(
    contentRef: RefObject<HTMLIonContentElement>,
    containerRef: RefObject<HTMLElement>,
    config: ScrollAnimationConfig
) {
    useGSAP(() => {
        if (!containerRef.current || !contentRef.current) return;

        contentRef.current.getScrollElement().then((scrollElement) => {
            const elements = gsap.utils.toArray(config.selector, containerRef.current);

            elements.forEach((el, index) => {
                const element = el as HTMLElement;
                const staggerDelay = (config.stagger || 0) * index;

                // Create the main timeline for enter animation
                const enterTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: config.start || "top 85%",
                        end: config.end || "top 20%",
                        markers: config.markers ?? false,
                        scrub: config.scrub ?? false,
                        scroller: scrollElement,
                        onEnter: () => {
                            // Animate from -> to when entering
                            gsap.fromTo(
                                element,
                                { ...config.enter.from },
                                {
                                    ...config.enter.to,
                                    duration: config.duration || 0.8,
                                    ease: config.ease || "power2.out",
                                    delay: staggerDelay,
                                }
                            );
                        },
                        onLeaveBack: () => {
                            // Animate back to exit state when scrolling back up
                            if (config.exit) {
                                gsap.to(element, {
                                    ...config.exit.to,
                                    duration: config.duration || 0.8,
                                    ease: config.ease || "power2.out",
                                    delay: staggerDelay,
                                });
                            } else {
                                // Default: reverse the enter animation
                                gsap.to(element, {
                                    ...config.enter.from,
                                    duration: config.duration || 0.8,
                                    ease: config.ease || "power2.out",
                                    delay: staggerDelay,
                                });
                            }
                        },
                        onEnterBack: () => {
                            // Re-enter from bottom
                            if (config.exit) {
                                gsap.fromTo(
                                    element,
                                    { ...config.exit.from },
                                    {
                                        ...config.enter.to,
                                        duration: config.duration || 0.8,
                                        ease: config.ease || "power2.out",
                                        delay: staggerDelay,
                                    }
                                );
                            } else {
                                gsap.to(element, {
                                    ...config.enter.to,
                                    duration: config.duration || 0.8,
                                    ease: config.ease || "power2.out",
                                    delay: staggerDelay,
                                });
                            }
                        },
                        onLeave: () => {
                            // Exit animation when scrolling past
                            if (config.exit) {
                                gsap.fromTo(
                                    element,
                                    { ...config.exit.from },
                                    {
                                        ...config.exit.to,
                                        duration: config.duration || 0.8,
                                        ease: config.ease || "power2.out",
                                        delay: staggerDelay,
                                    }
                                );
                            }
                        },
                    },
                });

                // Set initial state
                gsap.set(element, config.enter.from);
            });
        });
    }, { scope: containerRef, dependencies: [config.selector] });
}

/**
 * Hook for multiple scroll animations
 * Use this when you have different animation types on the same page
 */
export function useScrollAnimations(
    contentRef: RefObject<HTMLIonContentElement>,
    containerRef: RefObject<HTMLElement>,
    configs: ScrollAnimationConfig[]
) {
    useGSAP(() => {
        if (!containerRef.current || !contentRef.current) return;

        contentRef.current.getScrollElement().then((scrollElement) => {
            configs.forEach((config) => {
                const elements = gsap.utils.toArray(config.selector, containerRef.current);

                elements.forEach((el, index) => {
                    const element = el as HTMLElement;
                    const staggerDelay = (config.stagger || 0) * index;

                    gsap.set(element, config.enter.from);

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: element,
                            start: config.start || "top 85%",
                            end: config.end || "top 20%",
                            markers: config.markers ?? false,
                            scrub: config.scrub ?? false,
                            scroller: scrollElement,
                            onEnter: () => {
                                gsap.fromTo(
                                    element,
                                    { ...config.enter.from },
                                    {
                                        ...config.enter.to,
                                        duration: config.duration || 0.8,
                                        ease: config.ease || "power2.out",
                                        delay: staggerDelay,
                                    }
                                );
                            },
                            onLeaveBack: () => {
                                if (config.exit) {
                                    gsap.to(element, {
                                        ...config.exit.to,
                                        duration: config.duration || 0.8,
                                        ease: config.ease || "power2.out",
                                        delay: staggerDelay,
                                    });
                                } else {
                                    gsap.to(element, {
                                        ...config.enter.from,
                                        duration: config.duration || 0.8,
                                        ease: config.ease || "power2.out",
                                        delay: staggerDelay,
                                    });
                                }
                            },
                            onEnterBack: () => {
                                if (config.exit) {
                                    gsap.fromTo(
                                        element,
                                        { ...config.exit.from },
                                        {
                                            ...config.enter.to,
                                            duration: config.duration || 0.8,
                                            ease: config.ease || "power2.out",
                                            delay: staggerDelay,
                                        }
                                    );
                                } else {
                                    gsap.to(element, {
                                        ...config.enter.to,
                                        duration: config.duration || 0.8,
                                        ease: config.ease || "power2.out",
                                        delay: staggerDelay,
                                    });
                                }
                            },
                            onLeave: () => {
                                if (config.exit) {
                                    gsap.fromTo(
                                        element,
                                        { ...config.exit.from },
                                        {
                                            ...config.exit.to,
                                            duration: config.duration || 0.8,
                                            ease: config.ease || "power2.out",
                                            delay: staggerDelay,
                                        }
                                    );
                                }
                            },
                        },
                    });
                });
            });
        });
    }, { scope: containerRef, dependencies: [configs.map(c => c.selector).join(',')] });
}
