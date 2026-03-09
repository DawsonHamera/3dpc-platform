import {
    IonButton,
    IonButtons,
    IonChip,
    IonContent,
    IonHeader,
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
import Header from "../../../shared/components/Header/Header";
import QRCodeScanner from "../../../shared/components/QRCode/QRCodeScanner";
import {
    useAttendEventMutation,
    useGetEventQuery,
    useGetUserAttendanceQuery,
} from "../../../shared/features";
import EventHeader from "./EventCard/EventHeader";

const EventDetailsPage: React.FC = () => {
    const { eventId } = useParams<{ eventId: string }>();

    const { data: event } = useGetEventQuery(parseInt(eventId));
    const { data: attendance } = useGetUserAttendanceQuery(parseInt(eventId));
    const [toastMessage, setToastMessage] = useState<string>("");
    const [isError, setIsError] = useState(false);
    const [scannerOpen, setScannerOpen] = useState(false);

    const [updateAttendance] = useAttendEventMutation();

    const handleUpdateStatus = (status: string) => {
        if (status && event) {
            console.log(
                "Update attendance event " + eventId + "status" + status,
            );
            updateAttendance({ eventId: event.id, status });
            setToastMessage("Attendance status updated");
        }
    };

    const handleScan = (text: string) => {
        verifyCode(text);
    };

    const verifyCode = async (data: string) => {
        try {
            const verified = await updateAttendance({
                eventId: event.id,
                code: data,
            }).unwrap();
            if (verified.data) {
                setIsError(false);
                setToastMessage(verified.data);
                setScannerOpen(false);
            } else {
                setToastMessage("An unexpected error occurred.");
                setIsError(true);
            }
        } catch (error: any) {
            console.error("Error verifying code:", error);
            setToastMessage(
                error?.data?.message ||
                    "Failed to verify the code. Please try again.",
            );
            setIsError(true);
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
        switch (status) {
            case "going":
                if (new Date() > new Date(eventEnd)) {
                    return <IonChip color="danger">Absent</IonChip>;
                }
                return <IonChip color="success">Going</IonChip>;
            case "maybe":
                if (new Date() > new Date(eventEnd)) {
                    return <IonChip color="danger">Absent</IonChip>;
                }
                return <IonChip color="warning">Maybe</IonChip>;
            case "not_going":
                if (new Date() > new Date(eventEnd)) {
                    return <IonChip color="danger">Absent</IonChip>;
                }
                return <IonChip color="danger">Not going</IonChip>;
            case "unknown":
                return <IonChip color="medium">Unknown</IonChip>;
            case "attended":
                if (new Date() > new Date(eventEnd)) {
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
                <div style={{ padding: "0 20px" }}>
                    <IonText>
                        <p>{event.description}</p>
                    </IonText>
                </div>
                {new Date() < new Date(event.start_time) && (
                    <IonToolbar>
                        <IonSegment
                            value={attendance?.status}
                            onIonChange={(e) =>
                                handleUpdateStatus(e.detail.value)
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
                {new Date() >= new Date(event.start_time) &&
                    new Date() <= new Date(event.end_time) &&
                    attendance?.status != "attended" && (
                        <IonButton
                            expand="block"
                            style={{ margin: "20px" }}
                            onClick={() => setScannerOpen(true)}
                        >
                            Mark as Attended
                        </IonButton>
                    )}
                <IonList
                    style={{
                        border: "1px solid var(--ion-color-light-shade)",
                        borderRadius: "20px",
                        margin: "20px",
                    }}
                >
                    {event.attendances.map((attendance: any) => (
                        <IonItem key={attendance.id}>
                            <IonLabel>
                                <b>{attendance.user.name}</b>
                            </IonLabel>
                            <IonLabel slot="end">
                                {renderAttendanceStatus(
                                    attendance.status,
                                    event.end_time,
                                )}
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonList>
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
                </IonContent>
            </IonModal>
            <IonToast
                isOpen={!!toastMessage}
                onDidDismiss={() => setToastMessage("")}
                message={toastMessage}
                duration={2000}
                color={isError ? "danger" : "success"}
            />
        </IonPage>
    );
};

export default EventDetailsPage;
