import { IonChip, IonIcon, IonLabel } from "@ionic/react";
import {
    calendar,
    construct,
    hammer,
    location,
    pricetags,
    trophy,
} from "ionicons/icons";
import { useGetUserAttendanceQuery } from "../../../features";
import "./EventHeader.css";

type EventHeaderProps = {
    event: any;
    children?: React.ReactNode;
};

const EventHeader: React.FC<EventHeaderProps> = ({ event, children }) => {
    const { data: attendance } = useGetUserAttendanceQuery(event.id);

    const renderTypeChip = (eventType: string) => {
        switch (eventType) {
            case "workshop":
                return (
                    <IonChip className="opaque">
                        <IonIcon icon={construct} color="light" />
                        <IonLabel>Workshop</IonLabel>
                    </IonChip>
                );
            case "competition":
                return (
                    <IonChip className="opaque">
                        <IonIcon icon={trophy} color="light" />
                        <IonLabel>Competition</IonLabel>
                    </IonChip>
                );
            case "fundraiser":
                return (
                    <IonChip className="opaque">
                        <IonIcon icon={pricetags} color="light" />
                        <IonLabel>Fundraiser</IonLabel>
                    </IonChip>
                );
            case "work_day":
                return (
                    <IonChip className="opaque">
                        <IonIcon icon={hammer} color="light" />
                        <IonLabel>Work Day</IonLabel>
                    </IonChip>
                );
            case "meeting":
                return (
                    <IonChip className="opaque">
                        <IonIcon icon={calendar} color="light" />
                        <IonLabel>Meeting</IonLabel>
                    </IonChip>
                );
            default:
                return null;
        }
    };

    return (
        <div className="event-card-header">
            <div className="image-container">
                {children}
                <div className="date-badge">
                    <p>
                        {new Date(event.start_time).toLocaleDateString(
                            "en-US",
                            {
                                month: "short",
                            },
                        )}
                    </p>
                    <h2>{new Date(event.start_time).getDate()}</h2>
                </div>
                <img src={event.image_file?.path} />

                {/* Status chips */}
                {new Date() >= new Date(event.start_time) &&
                    new Date() <= new Date(event.end_time) &&
                    attendance?.status === "attended" && (
                        <IonChip
                            color="success"
                            style={{
                                margin: "auto",
                                position: "absolute",
                                left: "10px",
                                bottom: "10px",
                            }}
                        >
                            Attending
                        </IonChip>
                    )}
                <div
                    style={{
                        margin: "auto",
                        position: "absolute",
                        left: "5px",
                        bottom: "5px",
                    }}
                >
                    {renderTypeChip(event.event_type)}
                </div>
            </div>
            <div className="event-details">
                <div className="event-info">
                    <h2 className="event-title">{event.title}</h2>
                    <div className="location-chip">
                        <IonIcon color="primary" icon={location} />
                        <p>{event.location}</p>
                    </div>
                    <div className="time-range">
                        <p>
                            {new Date(event.start_time).toLocaleTimeString(
                                "en-US",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                },
                            )}
                            {" - "}
                            {new Date(event.end_time).toLocaleTimeString(
                                "en-US",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                },
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventHeader;
