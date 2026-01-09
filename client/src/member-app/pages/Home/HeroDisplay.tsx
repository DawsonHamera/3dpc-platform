import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { isPWAInstalled } from "../../../shared/hooks/useUtils";
import { useOneSignal } from "../../../shared/services/OneSignalProvider";
import { useGetEventsQuery } from "../../features/events/eventsApi";
import DefaultHero from "./heroes/DefaultHero";
import EventHero from "./heroes/EventHero";
import InstallHero from "./heroes/InstallHero";
import SubscribeHero from "./heroes/SubscribeHero";

type HeroType = "default" | "event" | "install" | "subscribe";

const HeroDisplay: React.FC = () => {
    const { data: eventData } = useGetEventsQuery({
        filter: "current",
        limit: 1,
    });

    const { isSubscribed, loading: loadingOneSignal } = useOneSignal();

    const currentEvent = eventData?.[0];

    const [displayedHeroType, setDisplayedHeroType] =
        useState<HeroType>("default");
    const heroRef = useRef<HTMLDivElement>(null);

    const updateHero = (heroType: HeroType) => {
        const timeline = gsap.timeline();

        timeline
            .to(heroRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.in",
            })
            .call(() => {
                setDisplayedHeroType(heroType);
            })
            .to({}, { duration: 0.1 })
            .to(heroRef.current, {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
            });
    };

    useEffect(() => {
        if (currentEvent) {
            updateHero("event");
        } else if (!isPWAInstalled()) {
            updateHero("install");
        } else if (!isSubscribed && !loadingOneSignal) {
            updateHero("subscribe");
        } else {
            updateHero("default");
        }
    }, [currentEvent, isPWAInstalled(), isSubscribed, loadingOneSignal]);

    // Map hero types to components
    const heroComponents: Record<HeroType, React.ReactNode> = {
        default: <DefaultHero />,
        event: <EventHero event={currentEvent!} />,
        install: <InstallHero />,
        subscribe: <SubscribeHero />,
    };

    return <div ref={heroRef}>{heroComponents[displayedHeroType]}</div>;
};

export default HeroDisplay;
