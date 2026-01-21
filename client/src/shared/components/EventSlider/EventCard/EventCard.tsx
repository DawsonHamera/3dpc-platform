import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonModal,
    IonText,
    IonTitle,
    IonToast,
    IonToolbar,
    useIonRouter,
} from "@ionic/react";
import { checkmarkDone, settingsOutline } from "ionicons/icons";
import { useState } from "react";
import {
    Attendance,
    Event,
    useAttendEventMutation,
} from "../../../../member-app";
import { useAuth } from "../../../hooks/useAuth";
import AvatarStack from "../../AvatarStack/AvatarStack";
import QRCodeScanner from "../../QRCode/QRCodeScanner";
import "./EventCard.css";
import EventHeader from "./EventHeader";

// Extend the type to include "rsvp" if it's a valid status
type ExtendedAttendanceStatus =
    | "rsvp"
    | "unknown"
    | "going"
    | "maybe"
    | "not_going"
    | "attended";

type EventCardProps = {
    event: Event;
    editMode?: boolean;
    editEvent?: (event: any) => void;
};

const EventCard: React.FC<EventCardProps> = ({
    event,
    editMode,
    editEvent,
}) => {
    const getInitials = (name: string) => {
        const names = name.split(" ");
        const initials = names.map((n) => n.charAt(0).toUpperCase());
        return initials.join("");
    };

    const [scannerOpen, setScannerOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<string>("");
    const [isError, setIsError] = useState(false);
    const router = useIonRouter();
    const user = useAuth().user;

    const attending = (event.attendances as Attendance[]).find(
        (attendance: Attendance) => {
            const attendanceUser = attendance.user as { id: number } | null;
            return attendanceUser?.id === user?.id;
        }
    );
    const [attendEvent] = useAttendEventMutation();

    const handleRSVP = () => {
        attendEvent({ eventId: event.id });
    };

    const handleAttend = () => {
        setScannerOpen(true);
    };

    const handleScan = async (scannedCode: string) => {
        try {
            await attendEvent({
                eventId: event.id,
                code: scannedCode,
            }).unwrap();
            setIsError(false);
            setToastMessage("Attendance recorded successfully!");
            setScannerOpen(false);
        } catch (error: any) {
            setIsError(true);
            setToastMessage(
                error?.data?.message || "Failed to record attendance."
            );
        }
    };

    return (
        <div className="event-card">
            <EventHeader event={event}>
                {editMode && (
                    <div className="edit-badge">
                        <IonIcon
                            onClick={() =>
                                editEvent?.(event)
                            }
                            color="primary"
                            icon={settingsOutline}
                            size="large"
                        />
                    </div>
                )}
            </EventHeader>
            <div className="event-card-content">
                <div className="footer">
                    <AvatarStack
                        avatars={event.attendances.map((attendance: any) => ({id: attendance.user.id, name: attendance.user.name}))}
                    />
                    <IonButton
                        fill="clear"
                        onClick={() =>
                            router.push(`/dashboard/events/${event.id}`)
                        }
                    >
                        View event
                    </IonButton>
                </div>
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
                </IonContent>
            </IonModal>
            <IonToast
                isOpen={!!toastMessage}
                message={toastMessage}
                duration={3000}
                onDidDismiss={() => setToastMessage("")}
                color={isError ? "danger" : "success"}
            ></IonToast>
        </div>
    );
};

export default EventCard;
