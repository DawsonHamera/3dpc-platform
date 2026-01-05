import { useEffect, MutableRefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


// Removed duplicate interface declaration

  export interface UseSimpleGSAPProps {
    chevronRef: MutableRefObject<HTMLDivElement | null>;
    widgetRefs: MutableRefObject<HTMLDivElement[]>;
    contentRef: MutableRefObject<HTMLIonContentElement | null>;
    heroRef: MutableRefObject<HTMLDivElement | null>;
    widgetsContainerRef: MutableRefObject<HTMLDivElement | null>;
    isDataLoaded: boolean;
  }

export const useSimpleGSAP = (props: UseSimpleGSAPProps) => {
  const { chevronRef, widgetRefs, contentRef, heroRef, widgetsContainerRef, isDataLoaded } = props;
  
  useEffect(() => {
    if (!isDataLoaded) return;

    const timer = setTimeout(async () => {
      let scrollElement: HTMLElement | null = null;
      
      try {
        scrollElement = await contentRef.current?.getScrollElement() || null;
      } catch (error) {
        console.warn('Failed to get scroll element:', error);
      }
      
      if (!scrollElement) return;

      // Sticky hero scroll behavior
  if (heroRef.current && widgetsContainerRef.current) {
        let isHeroSticky = true;
        let pullDistance = 0;
        let startY = 0;
        let currentY = 0;
        const snapThreshold = 80;
        
        const handleTouchStart = (e: TouchEvent) => {
          if (isHeroSticky) {
            startY = e.touches[0].clientY;
          }
        };
        
        const handleTouchMove = (e: TouchEvent) => {
          if (!isHeroSticky) return;
          
          currentY = e.touches[0].clientY;
          const deltaY = startY - currentY;
          
          if (deltaY > 0) {
            e.preventDefault();
            pullDistance = Math.min(deltaY, snapThreshold * 1.5);
            
            if (chevronRef.current) {
              const progress = pullDistance / snapThreshold;
              gsap.set(chevronRef.current, {
                opacity: Math.min(progress * 2, 1),
                y: 20 - (pullDistance * 0.1)
              });
            }
          }
        };
        
        const handleTouchEnd = () => {
          if (!isHeroSticky) return;
          
          if (pullDistance >= snapThreshold) {
            isHeroSticky = false;
            
            if (widgetsContainerRef.current) {
              widgetsContainerRef.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          } else {
            if (chevronRef.current) {
              gsap.to(chevronRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.4,
                ease: "power2.out"
              });
            }
          }
          
          pullDistance = 0;
        };
        
        const handleScroll = () => {
          const scrollTop = scrollElement!.scrollTop;
          
          if (!isHeroSticky && scrollTop === 0) {
            isHeroSticky = true;
            pullDistance = 0;
            
            if (chevronRef.current) {
              gsap.to(chevronRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          }
        };
        
        if (heroRef.current) {
          heroRef.current.addEventListener('touchstart', handleTouchStart, { passive: false });
          heroRef.current.addEventListener('touchmove', handleTouchMove, { passive: false });
          heroRef.current.addEventListener('touchend', handleTouchEnd, { passive: true });
        }
        
        scrollElement.addEventListener('scroll', handleScroll);
      }

      // Widget scroll animations
      const allWidgets = [
        ...widgetRefs.current,
        ...Array.from(document.querySelectorAll('.widget-wrapper'))
      ].filter((widget, index, arr) => arr.indexOf(widget) === index);

      if (allWidgets.length > 0) {
        gsap.set(allWidgets, { 
          opacity: 0, 
          y: 80,
          scale: 0.8
        });

        allWidgets.forEach((widget) => {
          ScrollTrigger.create({
            trigger: widget,
            start: "top 80%",
            end: "bottom 20%",
            scroller: scrollElement,
            onEnter: () => {
              gsap.to(widget, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                ease: "back.out(1.2)"
              });
            },
            // onLeave: () => {
            //   gsap.to(widget, {
            //     opacity: 0,
            //     y: -50,
            //     scale: 0.9,
            //     duration: 0.8,
            //     ease: "power2.in"
            //   });
            // },
            // onEnterBack: () => {
            //   gsap.to(widget, {
            //     opacity: 1,
            //     y: 0,
            //     scale: 1,
            //     duration: 1.0,
            //     ease: "back.out(1.1)"
            //   });
            // },
            // onLeaveBack: () => {
            //   gsap.to(widget, {
            //     opacity: 0,
            //     y: 80,
            //     scale: 0.8,
            //     duration: 0.8,
            //     ease: "power2.in"
            //   });
            // }
          });
        });
      }

      // Set initial chevron state
      if (chevronRef.current) {
        gsap.set(chevronRef.current, {
          opacity: 0,
          y: 20
        });
      }

      // Hero section parallax effect
      if (heroRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "80% top",
          scroller: scrollElement,
          scrub: 0.5,
          onUpdate: (self) => {
            const progress = self.progress;
            if (heroRef.current) {
              gsap.to(heroRef.current, {
                opacity: 1 - progress * 1.2,
                duration: 0.05,
                ease: "none"
              });
            }
          }
        });
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      gsap.killTweensOf("*");
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isDataLoaded, chevronRef, widgetRefs, contentRef, heroRef, widgetsContainerRef]);
};
