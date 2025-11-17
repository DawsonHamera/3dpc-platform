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
} from "@ionic/react";
import {
    at,
    checkmark,
    checkmarkCircle,
    checkmarkDone,
    create,
    createOutline,
    location,
    pencil,
    settings,
    settingsOutline,
} from "ionicons/icons";
import "./EventCard.css";
import { attendanceResultType } from "../../../types/zod/schemas";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../hooks/useAuth";
import { act, useState } from "react";
import { useAttendEventMutation } from "../../../features/events/eventsApi";
import QRCodeScanner from "../../QRCode/QRCodeScanner";
import { title } from "process";
import Card from "../../Card/Card";

type EventCardProps = {
    event: {
        id: number;
        title: string;
        start_time: string;
        end_time: string;
        location: string;
        image_file?: {
            path: string;
        };
        attendances: attendanceResultType[];
    };
    editMode?: boolean;
    editEvent?: (event: any) => void;
};

const EventCard: React.FC<EventCardProps> = ({ event, editMode, editEvent }) => {
    const getInitials = (name: string) => {
        const names = name.split(" ");
        const initials = names.map((n) => n.charAt(0).toUpperCase());
        return initials.join("");
    };

    const [scannerOpen, setScannerOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState<string>("");
    const [isError, setIsError] = useState(false);

    const user = useAuth().user;

    const attending = event.attendances.find(
        (attendance) => attendance.user.id === user.id
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

    const actionButton = () => {
        const now = new Date();
        const startTime = new Date(event.start_time);
        if (
            attending?.status === "rsvp" &&
            now >= startTime &&
            now <= new Date(event.end_time)
        ) {
            return (
                <IonText onClick={handleAttend} color="primary">
                    Record attendance
                </IonText>
            );
        }
        if (!attending && now >= startTime && now <= new Date(event.end_time)) {
            return (
                <IonText onClick={handleAttend} color="primary">
                    Attend event
                </IonText>
            );
        }
        if (attending?.status === "attended") {
            return (
                <IonText color="success">
                    <IonIcon
                        icon={checkmarkDone}
                        color="success"
                        style={{
                            verticalAlign: "middle",
                            marginRight: 6,
                            fontSize: 20,
                        }}
                    />
                    Attended
                </IonText>
            );
        }
        if (now < startTime && !attending) {
            return (
                <IonText onClick={handleRSVP} color="primary">
                    RSVP for Event
                </IonText>
            );
        }
        if (attending?.status === "rsvp" && now < startTime) {
            return (
                <IonText color="primary">
                    Event starts on{" "}
                    {new Date(event.start_time).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                    })}
                </IonText>
            );
        }
        return "Event Passed";
    };

    return (
        <Card className="event-card">
            <div className="date-badge">
                <p>
                    {new Date(event.start_time).toLocaleDateString("en-US", {
                        month: "short",
                    })}
                </p>
                <h2>{new Date(event.start_time).getDate()}</h2>
            </div>
            {editMode && (
                <div className="edit-badge">
                    <IonIcon onClick={() => editEvent?.({
                        title: event.title,
                        description: event.description,
                        id: event.id,
                        start_time: event.start_time,
                        end_time: event.end_time,
                        location: event.location,
                        image_file_id: event.image_file?.id,

                    })} color="primary" icon={settingsOutline} size='large' />
                </div>
            )}
            <div className="image-container">
                <img src={event.image_file?.path} />
            </div>
            <div className="event-card-content">
                <div className="event-details">
                    <div className="event-info">
                        <h2 className="event-title">{event.title}</h2>
                        <div className="location-chip">
                            <IonIcon color="primary" icon={location} />
                            <p>{event.location}</p>
                        </div>
                    </div>
                    <div className="time-range">
                        <p>
                            {new Date(event.start_time).toLocaleTimeString(
                                "en-US",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }
                            )}{" "}
                        </p>
                        <p>|</p>
                        <p>
                            {" "}
                            {new Date(event.end_time).toLocaleTimeString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <div className="attending">
                        {(
                            event.attendances.slice(0, 4) as attendanceResultType[]
                        ).map((attendance) => (
                            <div className="default-avatar">
                                {getInitials(attendance.user.name)}
                            </div>
                        ))}
                        {event.attendances.length > 4 && (
                            <div className="more-attendees">
                                +{event.attendances.length - 4}
                            </div>
                        )}
                    </div>
                    {actionButton()}
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
        </Card>
    );
};

export default EventCard;
