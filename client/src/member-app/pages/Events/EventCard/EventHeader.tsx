import { IonChip, IonIcon, IonLabel } from "@ionic/react";
import {
    calendar,
    construct,
    hammer,
    location,
    pricetags,
    trophy,
} from "ionicons/icons";
import { useGetUserAttendanceQuery } from "../../../../shared/features";
import {
    formatLocalDate,
    formatLocalTime,
    isTimeBetween,
} from "../../../../shared/utility/datetime";
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
                        {formatLocalDate(event.start_time, {
                            month: "short",
                        })}
                    </p>
                    <h2>{new Date(event.start_time).getDate()}</h2>
                </div>
                <img src={event.image_file?.path} className="image" />

                {/* Status chips */}
                {isTimeBetween(event.start_time, event.end_time) &&
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
                            {formatLocalTime(event.start_time, {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                            {" - "}
                            {formatLocalTime(event.end_time, {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default EventHeader;
