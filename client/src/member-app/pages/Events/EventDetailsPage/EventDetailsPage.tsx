import {
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonPage,
    IonSegment,
    IonSegmentButton,
    IonText,
    IonTitle,
    IonToast,
    IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useParams } from "react-router";
import Header from "../../../../shared/components/Header/Header";
import QRCodeScanner from "../../../../shared/components/QRCode/QRCodeScanner";
import {
    useAttendEventMutation,
    useGetEventQuery,
    useGetUserAttendanceQuery,
} from "../../../../shared/features";
import {
    isFuture,
    isPast,
    isTimeBetween,
} from "../../../../shared/utility/datetime";
import EventHeader from "../EventCard/EventHeader";
import styles from "./EventDetailsPage.module.css";

const EventDetailsPage: React.FC = () => {
    const { eventId } = useParams<{ eventId: string }>();

    const { data: event } = useGetEventQuery(parseInt(eventId));
    const { data: attendance } = useGetUserAttendanceQuery(parseInt(eventId));
    const [toast, setToast] = useState<{
        message: string;
        color: string;
    } | null>(null);
    const [scannerOpen, setScannerOpen] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");

    const [updateAttendance] = useAttendEventMutation();

    const handleUpdateStatus = (status: string) => {
        if (status && event) {
            console.log(
                "Update attendance event " + eventId + " status " + status,
            );
            updateAttendance({ eventId: event.id, status });
            setToast({
                message: "Attendance status updated",
                color: "success",
            });
        }
    };

    const handleScan = (text: string) => {
        verifyCode(text);
    };

    const verifyCode = async (data: string) => {
        if (!event) return;

        const verified = await updateAttendance({
            eventId: event.id,
            code: data,
        });

        if (verified.data) {
            setToast({
                message: "You have successfully checked in!",
                color: "success",
            });
            setScannerOpen(false);
            setVerificationCode("");
        } else {
            setToast({
                message:
                    "Error: " +
                    ((verified.error as any)?.data?.message ||
                        "Failed to verify code"),
                color: "danger",
            });
        }
    };

    if (!event) {
        return (
            <IonPage>
                <IonContent>Loading attendance...</IonContent>
            </IonPage>
        );
    }

    const renderAttendanceStatus = (status: string, eventEnd: string) => {
        const eventEnded = isPast(eventEnd);

        switch (status) {
            case "going":
                if (eventEnded) {
                    return <IonChip color="danger">Absent</IonChip>;
                }
                return <IonChip color="success">Going</IonChip>;
            case "maybe":
                if (eventEnded) {
                    return <IonChip color="danger">Absent</IonChip>;
                }
                return <IonChip color="warning">Maybe</IonChip>;
            case "not_going":
                if (eventEnded) {
                    return <IonChip color="danger">Absent</IonChip>;
                }
                return <IonChip color="danger">Not going</IonChip>;
            case "unknown":
                return <IonChip color="medium">Unknown</IonChip>;
            case "attended":
                if (eventEnded) {
                    return <IonChip color="success">Attended</IonChip>;
                }
                return <IonChip color="primary">Attending</IonChip>;
            default:
                return <IonChip color="danger">Error</IonChip>;
        }
    };

    return (
        <IonPage>
            <Header title="Event Overview" type="back" />
            <IonContent>
                <EventHeader event={event} />
                <div className={styles.description}>
                    <IonText>
                        <p>{event.description}</p>
                    </IonText>
                </div>
                {isFuture(event.start_time) && (
                    <IonToolbar>
                        <IonSegment
                            value={attendance?.status}
                            onIonChange={(e) =>
                                e.detail.value &&
                                handleUpdateStatus(e.detail.value as string)
                            }
                        >
                            <IonSegmentButton value="not_going">
                                <IonLabel>Not Going</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="maybe">
                                <IonLabel>Maybe</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="going">
                                <IonLabel>Going</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>
                )}
                {isTimeBetween(event.start_time, event.end_time) &&
                    attendance?.status !== "attended" && (
                        <IonButton
                            expand="block"
                            className={styles.checkInButton}
                            onClick={() => setScannerOpen(true)}
                        >
                            Mark as Attended
                        </IonButton>
                    )}
                {event.attendances.length > 0 && (
                    <IonList lines="none" className={styles.attendanceList}>
                        {event.attendances.map((attendance: any) => (
                            <IonItem key={attendance.id}>
                                <IonLabel>
                                    <b>{attendance.user.name}</b>
                                </IonLabel>
                                <IonLabel slot="end">
                                    {renderAttendanceStatus(
                                        attendance.status,
                                        event.end_time.toString(),
                                    )}
                                </IonLabel>
                            </IonItem>
                        ))}
                    </IonList>
                )}
                {event.attendances.length === 0 && (
                    <div className={styles.emptyState}>
                        <p>No one has registered for this event yet.</p>
                    </div>
                )}
            </IonContent>
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

                    <IonItem
                        lines="none"
                        color="primary"
                        className={styles.codeInput}
                    >
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
                onDidDismiss={() => setToast(null)}
                message={toast?.message}
                duration={3000}
                color={toast?.color}
            />
        </IonPage>
    );
};

export default EventDetailsPage;
