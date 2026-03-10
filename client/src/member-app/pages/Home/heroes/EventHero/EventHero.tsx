import {
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonInput,
    IonItem,
    IonModal,
    IonTitle,
    IonToast,
    IonToolbar,
} from "@ionic/react";
import { location } from "ionicons/icons";
import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import QRCodeScanner from "../../../../../shared/components/QRCode/QRCodeScanner";
import {
    Event,
    useAttendEventMutation,
    useGetUserAttendanceQuery,
} from "../../../../../shared/features";
import {
    formatLocalTime,
    isFuture,
} from "../../../../../shared/utility/datetime";
import styles from "./EventHero.module.css";

const EventHero: React.FC<{ event: Event }> = ({ event }) => {
    const [scannerOpen, setScannerOpen] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [toast, setToast] = useState<{
        message: string;
        color: string;
    } | null>(null);

    const { data: attendance } = useGetUserAttendanceQuery(event?.id, {
        skip: !event?.id,
    });
    const hasCheckedIn = attendance?.status === "attended";

    // Handle case when event is undefined
    if (!event) {
        return null;
    }

    const [attendEvent] = useAttendEventMutation();
    const handleScan = (text: string) => {
        verifyCode(text);
    };

    const verifyCode = async (data: string) => {
        const verified = await attendEvent({ eventId: event.id, code: data });
        if (verified.data) {
            setToast({
                message: "You have successfully checked in!",
                color: "success",
            });
            setScannerOpen(false);
        } else {
            setToast({
                message: "Error: " + (verified.error as any).data.message,
                color: "danger",
            });
            setVerificationCode("");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <IonImg
                    src={event.image_file?.path}
                    alt={event.title}
                    className={styles.image}
                />
                <div className={styles.overlay}>
                    <h1 className={styles.title}>
                        {isFuture(event.start_time)
                            ? formatLocalTime(event.start_time, {
                                  hour: "numeric",
                                  minute: "2-digit",
                                  hour12: true,
                              })
                            : "Event in progress"}
                    </h1>
                    <h2 className={styles.subtitle}>{event.title}</h2>
                    <div className={styles.chipContainer}>
                        <IonChip color="primary">
                            <IonIcon
                                icon={location}
                                className={styles.chipIcon}
                            />
                            {event.location}
                        </IonChip>
                        {/* <IonChip color="success" style={{ fontWeight: 700 }}>
                            <IonIcon icon={people} style={{ margin: '0.4rem' }} />
                            12 Attending
                        </IonChip> */}
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.description}>{event.description}</p>
                {!hasCheckedIn && (
                    <IonButton
                        onClick={() => setScannerOpen(true)}
                        color="light"
                        size="large"
                        className={styles.checkInButton}
                    >
                        Check In
                    </IonButton>
                )}
            </div>
            <IonModal
                isOpen={scannerOpen}
                onDidDismiss={() => setScannerOpen(false)}
            >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Check In</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => setScannerOpen(false)}>
                                Close
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <QRCodeScanner onScan={handleScan} />

                    <IonItem lines="none" color="primary">
                        <IonInput
                            type="text"
                            fill="outline"
                            placeholder="Enter code manually"
                            value={verificationCode}
                            onIonInput={(e) =>
                                setVerificationCode(
                                    e.detail.value!.toUpperCase(),
                                )
                            }
                        />
                        <IonButton
                            slot="end"
                            onClick={() => verifyCode(verificationCode)}
                        >
                            Submit
                        </IonButton>
                    </IonItem>
                </IonContent>
            </IonModal>
            <IonToast
                isOpen={!!toast}
                message={toast?.message}
                duration={3000}
                onDidDismiss={() => setToast(null)}
                color={toast?.color}
            ></IonToast>
        </div>
    );
};

export default EventHero;
