import { IonContent, IonPage } from '@ionic/react';
import React, { useRef } from 'react';
import { useScrollAnimations } from '../hooks/useScrollAnimation';
import { fadeIn, slideInLeft, slideInRight, scaleUp, rotateIn } from '../hooks/animationPresets';
import './AnimationExamples.css';

/**
 * Example page demonstrating various scroll animations
 * Use this as a reference for implementing animations in your own pages
 */
const AnimationExamples: React.FC = () => {
    const contentRef = useRef<HTMLIonContentElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Set up multiple animations at once
    useScrollAnimations(contentRef, containerRef, [
        {
            selector: '.fade-in',
            ...fadeIn,
        },
        {
            selector: '.slide-left',
            ...slideInLeft,
        },
        {
            selector: '.slide-right',
            ...slideInRight,
        },
        {
            selector: '.scale-up',
            ...scaleUp,
        },
        {
            selector: '.rotate-in',
            ...rotateIn,
        },
        {
            selector: '.custom',
            enter: {
                from: { y: 50, opacity: 0, scale: 0.8, rotation: -10 },
                to: { y: 0, opacity: 1, scale: 1, rotation: 0 },
            },
            exit: {
                from: { y: 0, opacity: 1, scale: 1 },
                to: { y: -30, opacity: 0, scale: 1.1 },
            },
            duration: 1,
            ease: "power3.out",
        },
        {
            selector: '.stagger-item',
            enter: {
                from: { y: 30, opacity: 0 },
                to: { y: 0, opacity: 1 },
            },
            stagger: 0.15,
            duration: 0.6,
        },
    ]);

    return (
        <IonPage>
            <IonContent ref={contentRef} className="ion-padding">
                <div ref={containerRef}>
                    <h1>Scroll Animation Examples</h1>
                    <p>Scroll down to see various animation effects</p>

                    <div className="spacer"></div>

                    <div className="fade-in demo-box">
                        <h2>Fade In</h2>
                        <p>Simple fade in from bottom</p>
                    </div>

                    <div className="spacer"></div>

                    <div className="slide-left demo-box">
                        <h2>Slide In Left</h2>
                        <p>Slides in from the left side</p>
                    </div>

                    <div className="spacer"></div>

                    <div className="slide-right demo-box">
                        <h2>Slide In Right</h2>
                        <p>Slides in from the right side</p>
                    </div>

                    <div className="spacer"></div>

                    <div className="scale-up demo-box">
                        <h2>Scale Up</h2>
                        <p>Scales up from center with back ease</p>
                    </div>

                    <div className="spacer"></div>

                    <div className="rotate-in demo-box">
                        <h2>Rotate In</h2>
                        <p>Rotates and scales into view</p>
                    </div>

                    <div className="spacer"></div>

                    <div className="custom demo-box">
                        <h2>Custom Animation</h2>
                        <p>Custom enter and exit animations</p>
                    </div>

                    <div className="spacer"></div>

                    <div>
                        <h2>Staggered Items</h2>
                        <div className="stagger-container">
                            <div className="stagger-item demo-box-small">Item 1</div>
                            <div className="stagger-item demo-box-small">Item 2</div>
                            <div className="stagger-item demo-box-small">Item 3</div>
                            <div className="stagger-item demo-box-small">Item 4</div>
                        </div>
                    </div>

                    <div className="spacer-large"></div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default AnimationExamples;
