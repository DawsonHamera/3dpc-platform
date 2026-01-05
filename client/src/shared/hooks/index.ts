/**
 * Scroll Animation System - Main Export
 * Import everything you need from this single file
 */

// Main hooks
export { useScrollAnimation, useScrollAnimations } from "./useScrollAnimation";
export type { ScrollAnimationConfig, AnimationState } from "./useScrollAnimation";

// Pre-built animation presets
export {
    fadeIn,
    fadeInOut,
    slideInLeft,
    slideInRight,
    scaleUp,
    rotateIn,
    bounceIn,
    elasticZoom,
    blurIn,
    flipIn,
    parallax,
    staggerCards,
    textReveal,
    glowIn,
} from "./animationPresets";

// Helper functions for creating custom animations
export {
    createFadeAnimation,
    createSlideAnimation,
    createScaleAnimation,
    createRotateAnimation,
    createFlipAnimation,
    createParallaxAnimation,
    createBlurAnimation,
    createStaggerAnimation,
    combineAnimations,
    createEnterExitAnimation,
} from "./animationHelpers";
export type { GSAPProperty } from "./animationHelpers";
