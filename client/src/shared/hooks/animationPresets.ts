/**
 * Common animation presets for scroll animations
 * Import and use these for quick, consistent animations across your app
 */

import { ScrollAnimationConfig } from "./useScrollAnimation";

type AnimationPreset = Omit<ScrollAnimationConfig, 'selector'>;

/**
 * Simple fade in from bottom
 */
export const fadeIn: AnimationPreset = {
    enter: {
        from: { opacity: 0, y: 30 },
        to: { opacity: 1, y: 0 },
    },
    duration: 0.8,
    ease: "power2.out",
};

/**
 * Fade in with exit animation
 */
export const fadeInOut: AnimationPreset = {
    enter: {
        from: { opacity: 0, y: 40 },
        to: { opacity: 1, y: 0 },
    },
    exit: {
        from: { opacity: 1, y: 0 },
        to: { opacity: 0, y: -20 },
    },
    duration: 0.8,
    ease: "power2.out",
};

/**
 * Slide in from left
 */
export const slideInLeft: AnimationPreset = {
    enter: {
        from: { x: -100, opacity: 0 },
        to: { x: 0, opacity: 1 },
    },
    duration: 0.8,
    ease: "power2.out",
};

/**
 * Slide in from right
 */
export const slideInRight: AnimationPreset = {
    enter: {
        from: { x: 100, opacity: 0 },
        to: { x: 0, opacity: 1 },
    },
    duration: 0.8,
    ease: "power2.out",
};

/**
 * Scale up from center
 */
export const scaleUp: AnimationPreset = {
    enter: {
        from: { scale: 0.5, opacity: 0 },
        to: { scale: 1, opacity: 1 },
    },
    duration: 0.8,
    ease: "back.out(1.2)",
};

/**
 * Rotate in with scale
 */
export const rotateIn: AnimationPreset = {
    enter: {
        from: { rotation: -45, scale: 0.8, opacity: 0 },
        to: { rotation: 0, scale: 1, opacity: 1 },
    },
    duration: 1,
    ease: "power3.out",
};

/**
 * Bounce in effect
 */
export const bounceIn: AnimationPreset = {
    enter: {
        from: { y: -100, opacity: 0 },
        to: { y: 0, opacity: 1 },
    },
    duration: 1.2,
    ease: "bounce.out",
};

/**
 * Elastic zoom
 */
export const elasticZoom: AnimationPreset = {
    enter: {
        from: { scale: 0, opacity: 0 },
        to: { scale: 1, opacity: 1 },
    },
    duration: 1.5,
    ease: "elastic.out(1, 0.5)",
};

/**
 * Blur to clear
 */
export const blurIn: AnimationPreset = {
    enter: {
        from: { filter: 'blur(10px)', opacity: 0 },
        to: { filter: 'blur(0px)', opacity: 1 },
    },
    duration: 1,
    ease: "power2.out",
};

/**
 * Flip in (3D effect)
 */
export const flipIn: AnimationPreset = {
    enter: {
        from: { rotationY: -90, opacity: 0 },
        to: { rotationY: 0, opacity: 1 },
    },
    duration: 1,
    ease: "power2.out",
};

/**
 * Parallax background (use with scrub)
 */
export const parallax: AnimationPreset = {
    enter: {
        from: { y: 0 },
        to: { y: -150 },
    },
    scrub: true,
    start: "top bottom",
    end: "bottom top",
};

/**
 * Staggered card entrance
 */
export const staggerCards: AnimationPreset = {
    enter: {
        from: { y: 50, opacity: 0, scale: 0.95 },
        to: { y: 0, opacity: 1, scale: 1 },
    },
    stagger: 0.15,
    duration: 0.6,
    ease: "power2.out",
};

/**
 * Text reveal from bottom
 */
export const textReveal: AnimationPreset = {
    enter: {
        from: { y: 20, opacity: 0 },
        to: { y: 0, opacity: 1 },
    },
    duration: 0.6,
    ease: "power2.out",
};

/**
 * Glow effect
 */
export const glowIn: AnimationPreset = {
    enter: {
        from: { opacity: 0, filter: 'brightness(0)' },
        to: { opacity: 1, filter: 'brightness(1)' },
    },
    duration: 1.2,
    ease: "power2.out",
};
