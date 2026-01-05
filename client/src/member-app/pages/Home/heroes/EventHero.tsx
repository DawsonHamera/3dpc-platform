import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Pagination, EffectCoverflow, Parallax, Autoplay } from "swiper/modules";
import { Printer } from "../../../../member-app/features/crud/printersApi";
import { IonButton, IonButtons, IonChip, IonContent, IonHeader, IonIcon, IonImg, IonModal, IonTitle, IonToast, IonToolbar } from "@ionic/react";
import { useGetTasksQuery } from "../../../../member-app/features/crud/tasksApi";
import { useEffect, useMemo, useState } from "react";
import { eventCard } from "../../Events/EventCarousel";
import { location, people } from "ionicons/icons";
import QRCodeScanner from "../../../../shared/components/QRCode/QRCodeScanner";
import { Event } from "../../../../member-app/features/crud/events/event.types";
import { useAttendEventMutation, useGetAllAttendancesQuery, useGetAttendancesQuery } from "../../../../member-app/features/crud/events/eventsApi";

const EventHero: React.FC<{ event: Event }> = ({ event }) => {

    const [scannerOpen, setScannerOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<string>('');
    const [checkedIn, setCheckedIn] = useState(false);

    const [attendEvent] = useAttendEventMutation();
    // const { data: attendances } = useGetAllAttendancesQuery();

    // useEffect(() => {
    //     if (attendances) {
    //         const userAttendance = attendances.data.find((a:any) => a.event.id === event.id);
    //         if (userAttendance) {
    //             setCheckedIn(true);
    //         }
    //     }
    // }, [attendances, event.id]);

    const handleScan = (text: string) => {
        verifyCode(text)
    };

    const verifyCode = async (data: string) => {
        const verified = await attendEvent({ eventId: event.id, code: data });
        if (verified.data?.success) {
            setToastMessage("You have successfully checked in!");
            setScannerOpen(false);
            setCheckedIn(true);
        } else {
            setToastMessage("Error: " + (verified.error as any).data.message);
        }
    };

    return (
        <div
            style={{
                width: '100%',
                height: '98%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                // borderBottomLeftRadius: '60px',
                // borderBottomRightRadius: '60px',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '60vh',
                    overflow: 'hidden',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.2)',
                }}
            >
                <IonImg
                    src={event.imageFile?.url}
                    alt={event.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.7)',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'linear-gradient(180deg, rgba(34,34,34,0.5) 60%, rgba(34,34,34,0.1) 100%)',
                        padding: '2.5rem 1.5rem 2rem 1.5rem',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '2.4rem',
                            fontWeight: 900,
                            textAlign: 'center',
                            color: 'var(--ion-color-light)',
                            textShadow: '0 4px 18px rgba(0,0,0,0.4)',
                            letterSpacing: '0.04em',
                            lineHeight: 1.1,
                            fontFamily: "'Outfit', sans-serif",
                            marginBottom: '0.5rem',
                        }}
                    >
                        {new Date() >= new Date(event.startTime)
                            ? "Event in progress"
                            : new Date(event.startTime).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })}
                    </h1>
                    <h2
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            color: 'var(--ion-color-primary)',
                            margin: '0.5rem 0 0.5rem 0',
                            textAlign: 'center',
                        }}
                    >
                        {event.title}
                    </h2>
                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
                        <IonChip color="primary" style={{ fontWeight: 700 }}>
                            <IonIcon icon={location} style={{ margin: '0.4rem' }} />
                            {event.location}
                        </IonChip>
                       {/* <IonChip color="success" style={{ fontWeight: 700 }}>
                            <IonIcon icon={people} style={{ margin: '0.4rem' }} />
                            12 Attending
                        </IonChip> */} 
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: '100%',
                    padding: '2rem 1.5rem 2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                }}
            >
                <p
                    style={{
                        fontSize: '1.1rem',
                        color: 'var(--ion-color-light)',
                        textAlign: 'center',
                        marginBottom: '1.5rem',
                        maxWidth: '600px',
                    }}
                >
                    {event.description}
                </p>
                {!checkedIn &&
                    <IonButton onClick={() => setScannerOpen(true)} color="primary" size="large" style={{ fontWeight: 700, marginBottom: '1rem' }}>
                        Check In
                    </IonButton>
                }
            </div>
            <IonModal isOpen={scannerOpen} onDidDismiss={() => setScannerOpen(false)}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Check In</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setScannerOpen(false)}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <QRCodeScanner onScan={handleScan} />
                </IonContent>
            </IonModal>
            <IonToast
                isOpen={!!toastMessage}
                message={toastMessage}
                duration={3000}
                onDidDismiss={() => setToastMessage('')}
                color="success"
            >
            </IonToast>
        </div>
    );
};

export default EventHero;
