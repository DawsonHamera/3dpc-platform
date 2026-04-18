// @ts-nocheck
import {
    IonContent,
    IonIcon,
    IonLabel,
    IonLoading,
    IonPage,
    useIonRouter,
} from "@ionic/react";
import { chevronDownOutline, warningOutline } from "ionicons/icons";
import React, {
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "swiper/css"; // core Swiper styles
import "swiper/css/free-mode";
import Header from "../../../shared/components/Header/Header";
import Card from "../../../shared/components/UI/Card/Card";
import {
    useGetEventsQuery,
    useGetPrintersQuery,
} from "../../../shared/features";
import { useAuth } from "../../../shared/hooks/useAuth";
import { useSimpleGSAP } from "../../../shared/hooks/useSimpleGSAP";
import { useOneSignal } from "../../../shared/services/OneSignalProvider";
import "./HomePage.css";
import DefaultHero from "./heroes/DefaultHero";
import EventHero from "./heroes/EventHero/EventHero";
import InstallHero from "./heroes/InstallHero";
import { LeaderboardWidget, TipsWidget } from "./widgets/LeaderBoardWidget";

const HomePage: React.FC = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const history = useHistory();
    const { data: printers, isLoading } = useGetPrintersQuery();
    const { data: events, isLoading: isLoadingEvents } = useGetEventsQuery();
    const { isSubscribed, loading: isOneSignalLoading } = useOneSignal();

    // Refs for GSAP animations
    const heroRef = useRef<HTMLDivElement>(null);
    const chevronRef = useRef<HTMLDivElement>(null);
    const widgetsContainerRef = useRef<HTMLDivElement>(null);
    const widgetRefs = useRef<HTMLDivElement[]>([]);
    const contentRef = useRef<HTMLIonContentElement>(null);
    const printerCarouselRef = useRef<HTMLDivElement>(null);

    const router = useIonRouter();

    // State for hero visibility using Intersection Observer and sentinel
    const [isHeroVisible, setIsHeroVisible] = useState(true);
    const heroSentinelRef = useRef<HTMLDivElement>(null);

    // Use simple GSAP animations
    useSimpleGSAP({
        chevronRef,
        widgetRefs,
        contentRef,
        heroRef,
        widgetsContainerRef,
        isDataLoaded: !isLoading && !!printers,
    });

    const addToWidgetRefs = (el: HTMLDivElement | null) => {
        if (el && !widgetRefs.current.includes(el)) {
            widgetRefs.current.push(el);
        }
    };

    useLayoutEffect(() => {
        let observer: IntersectionObserver | null = null;
        let scrollListener: (() => void) | null = null;
        const checkHeroManual = () => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const visible = rect.bottom > 40; // 40px from top
            setIsHeroVisible(visible);
        };
        if (heroSentinelRef.current) {
            const sentinelEl = heroSentinelRef.current;
            observer = new window.IntersectionObserver(
                ([entry]) => {
                    setIsHeroVisible(entry.isIntersecting);
                },
                {
                    root: null,
                    threshold: 0.01,
                },
            );
            observer.observe(sentinelEl);
        } else {
        }
        // Fallback: listen to scroll events and manually check hero position
        if (contentRef.current) {
            contentRef.current.addEventListener("ionScroll", checkHeroManual);
            scrollListener = checkHeroManual;
        } else {
            window.addEventListener("scroll", checkHeroManual);
            scrollListener = checkHeroManual;
        }
        // Initial manual check
        setTimeout(checkHeroManual, 100);
        return () => {
            if (observer) {
                observer.disconnect();
            }
            if (contentRef.current && scrollListener) {
                contentRef.current.removeEventListener(
                    "ionScroll",
                    scrollListener,
                );
            } else if (scrollListener) {
                window.removeEventListener("scroll", scrollListener);
            }
        };
    }, [heroSentinelRef.current]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const tabBar = document.getElementById("ion-tab-bar");
            if (isHeroVisible) {
                tabBar?.classList.add("hide");
            } else {
                tabBar?.classList.remove("hide");
            }
        }, 0);

        // Cleanup: always show tab bar on unmount
        return () => {
            clearTimeout(timer);
            const tabBar = document.getElementById("ion-tab-bar");
            if (tabBar) {
                tabBar.classList.remove("hide");
            }
        };
    }, [isHeroVisible]);

    const ongoingEvent = useMemo(() => {
        if (!events) return null;

        const ongoingEvents = events.filter((event) => {
            const today = new Date();
            const start = new Date(event.startTime);
            const end = new Date(event.endTime);
            return (
                today.getFullYear() === start.getFullYear() &&
                today.getMonth() === start.getMonth() &&
                today.getDate() === start.getDate()
            );
        });
        return ongoingEvents[0] || null;
    }, [events]);

    if (isLoading || isLoadingEvents) {
        return <IonLoading />;
    }

    function isPWAInstalled() {
        return window.matchMedia("(display-mode: standalone)").matches;
    }

    const chosenEvent = () => {
        // if (isSubscribed === false && !isOneSignalLoading) {
        //   return <SubscribeHero />;

        // } else
        if (ongoingEvent) {
            return <EventHero key={ongoingEvent.id} event={ongoingEvent} />;
        } else if (!isPWAInstalled()) {
            return <InstallHero />;
        } else if (printers) {
            // return  <PrinterHero printers={printers} />;
            return <DefaultHero />;
        }
    };

    return (
        <IonPage className="home-page" style={{ background: "transparent" }}>
            {!isHeroVisible && <Header title="Home" />}
            <IonContent
                ref={contentRef}
                scrollY={true}
                style={{
                    background: "transparent",
                    "--background": "transparent",
                }}
            >
                {/* Hero Section with Printer Carousel */}
                <div
                    ref={heroRef}
                    className="hero-section"
                    style={{
                        height: "100vh",
                        width: "100%",
                        position: "relative",
                        overflow: "hidden",
                        backgroundColor: "var(--ion-color-dark)",
                    }}
                >
                    <div
                        ref={printerCarouselRef}
                        style={{
                            width: "100%",
                            height: "100%",
                            willChange: "transform",
                        }}
                    >
                        {chosenEvent()}
                    </div>

                    {/* Sentinel for Intersection Observer (now larger for reliability) */}
                    <div
                        ref={heroSentinelRef}
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "40px", // larger sentinel
                            pointerEvents: "none",
                            background: "transparent",
                            zIndex: 1,
                        }}
                    />

                    {/* Scroll Indicator */}
                    <div
                        ref={chevronRef}
                        className="scroll-chevron"
                        style={{
                            position: "absolute",
                            bottom: 30,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 100,
                            color: "rgba(255, 255, 255, 0.9)",
                            fontSize: "2rem",
                            cursor: "pointer",
                            padding: "10px",
                        }}
                        onClick={() => {
                            widgetsContainerRef.current?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        <IonIcon icon={chevronDownOutline} />
                    </div>
                </div>

                {/* Widgets Section */}
                <div
                    ref={widgetsContainerRef}
                    className="widgets-container"
                    style={{
                        minHeight: "100vh",
                        // background: 'rgba(0, 0, 0, 0.1)',
                        backdropFilter: "blur(5px)",
                        position: "relative",
                        zIndex: 10,
                        marginTop: "50px",
                    }}
                >
                    <div
                        style={{
                            gap: 20,
                            display: "flex",
                            flexFlow: "column",
                        }}
                    >
                        <div ref={addToWidgetRefs} className="widget-wrapper">
                            <LeaderboardWidget />
                        </div>
                        <div ref={addToWidgetRefs} className="widget-wrapper">
                            <TipsWidget />
                        </div>
                        {/* <div ref={addToWidgetRefs} className="widget-wrapper">
              <QuickLinksWidget />
            </div> */}

                        {/* <div ref={addToWidgetRefs} className="widget-wrapper">
              <ProcessQuickWidget />
            </div> */}

                        {/* Development Notice */}
                        <div ref={addToWidgetRefs} className="widget-wrapper">
                            <Card>
                                <IonLabel>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <IonIcon
                                            icon={warningOutline}
                                            style={{ marginRight: 10 }}
                                        />
                                        <p>
                                            The user dashboard is still in
                                            development
                                        </p>
                                    </div>
                                    <p style={{ padding: 20 }}>
                                        If you have questions or ideas
                                        concerning the development of our club
                                        app, please contact us at{" "}
                                        <i>hamerad27@puhsd.k12.ca.us</i> or{" "}
                                        <i>frankb27@puhsd.k12.ca.us</i>
                                    </p>
                                </IonLabel>
                            </Card>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default HomePage;
