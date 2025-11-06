/**
 * Utility functions for creating custom scroll animations
 */

import { ScrollAnimationConfig } from './useScrollAnimation';

/**
 * Creates a simple fade animation config
 */
export const createFadeAnimation = (
    selector: string,
    distance: number = 40,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => ({
    selector,
    enter: {
        from: { opacity: 0, y: distance },
        to: { opacity: 1, y: 0 },
    },
    duration: 0.8,
    ease: "power2.out",
    ...options,
});

/**
 * Creates a slide animation config
 */
export const createSlideAnimation = (
    selector: string,
    direction: 'left' | 'right' | 'up' | 'down',
    distance: number = 100,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => {
    const from: any = { opacity: 0 };
    const to: any = { opacity: 1 };

    switch (direction) {
        case 'left':
            from.x = -distance;
            to.x = 0;
            break;
        case 'right':
            from.x = distance;
            to.x = 0;
            break;
        case 'up':
            from.y = distance;
            to.y = 0;
            break;
        case 'down':
            from.y = -distance;
            to.y = 0;
            break;
    }

    return {
        selector,
        enter: { from, to },
        duration: 0.8,
        ease: "power2.out",
        ...options,
    };
};

/**
 * Creates a scale animation config
 */
export const createScaleAnimation = (
    selector: string,
    fromScale: number = 0.5,
    toScale: number = 1,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => ({
    selector,
    enter: {
        from: { scale: fromScale, opacity: 0 },
        to: { scale: toScale, opacity: 1 },
    },
    duration: 0.8,
    ease: "back.out(1.2)",
    ...options,
});

/**
 * Creates a rotation animation config
 */
export const createRotateAnimation = (
    selector: string,
    rotation: number = 90,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => ({
    selector,
    enter: {
        from: { rotation: -rotation, opacity: 0 },
        to: { rotation: 0, opacity: 1 },
    },
    duration: 1,
    ease: "power2.out",
    ...options,
});

/**
 * Creates a flip animation config (3D)
 */
export const createFlipAnimation = (
    selector: string,
    axis: 'x' | 'y' = 'y',
    degrees: number = 90,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => {
    const rotationProp = axis === 'x' ? 'rotationX' : 'rotationY';

    return {
        selector,
        enter: {
            from: { [rotationProp]: -degrees, opacity: 0 },
            to: { [rotationProp]: 0, opacity: 1 },
        },
        duration: 1,
        ease: "power2.out",
        ...options,
    };
};

/**
 * Creates a parallax animation config
 */
export const createParallaxAnimation = (
    selector: string,
    distance: number = -150,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => ({
    selector,
    enter: {
        from: { y: 0 },
        to: { y: distance },
    },
    scrub: true,
    start: "top bottom",
    end: "bottom top",
    ...options,
});

/**
 * Creates a blur animation config
 */
export const createBlurAnimation = (
    selector: string,
    blurAmount: number = 10,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => ({
    selector,
    enter: {
        from: { filter: `blur(${blurAmount}px)`, opacity: 0 },
        to: { filter: 'blur(0px)', opacity: 1 },
    },
    duration: 1,
    ease: "power2.out",
    ...options,
});

/**
 * Creates a stagger animation config for multiple elements
 */
export const createStaggerAnimation = (
    selector: string,
    staggerDelay: number = 0.15,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => ({
    selector,
    enter: {
        from: { y: 40, opacity: 0 },
        to: { y: 0, opacity: 1 },
    },
    stagger: staggerDelay,
    duration: 0.6,
    ease: "power2.out",
    ...options,
});

/**
 * Combines multiple animation properties
 */
export const combineAnimations = (
    selector: string,
    animations: Array<{
        property: string;
        from: any;
        to: any;
    }>,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => {
    const from: any = {};
    const to: any = {};

    animations.forEach(({ property, from: fromVal, to: toVal }) => {
        from[property] = fromVal;
        to[property] = toVal;
    });

    return {
        selector,
        enter: { from, to },
        duration: 0.8,
        ease: "power2.out",
        ...options,
    };
};

/**
 * Creates an animation with enter and exit states
 */
export const createEnterExitAnimation = (
    selector: string,
    enterFrom: any,
    enterTo: any,
    exitFrom: any,
    exitTo: any,
    options?: Partial<ScrollAnimationConfig>
): ScrollAnimationConfig => ({
    selector,
    enter: {
        from: enterFrom,
        to: enterTo,
    },
    exit: {
        from: exitFrom,
        to: exitTo,
    },
    duration: 0.8,
    ease: "power2.out",
    ...options,
});

/**
 * Type-safe helper to ensure valid GSAP properties
 */
export type GSAPProperty = 
    | 'x' | 'y' | 'z'
    | 'rotation' | 'rotationX' | 'rotationY' | 'rotationZ'
    | 'scale' | 'scaleX' | 'scaleY'
    | 'opacity'
    | 'filter'
    | 'transformOrigin'
    | 'blur' | 'brightness' | 'contrast'
    | 'skewX' | 'skewY';
