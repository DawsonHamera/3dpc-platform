import { IonChip, IonIcon } from "@ionic/react";
import { location } from "ionicons/icons";
import { useGetUserAttendanceQuery } from "../../../features/events/eventsApi";

type EventHeaderProps = {
    event: any;
    children?: React.ReactNode;
};

const EventHeader: React.FC<EventHeaderProps> = ({ event, children }) => {

    const { data: attendance } = useGetUserAttendanceQuery(event.id);

    return (
        <div className="event-card-header">

            <div className="image-container">
                {children}
                <div className="date-badge">
                    <p>
                        {new Date(event.start_time).toLocaleDateString("en-US", {
                            month: "short",
                        })}
                    </p>
                    <h2>{new Date(event.start_time).getDate()}</h2>
                </div>
                <img src={event.image_file?.path} />

                {/* Status chips */}
                {new Date() >= new Date(event.start_time) && new Date() <= new Date(event.end_time) && attendance?.status === 'attended' &&
                    <IonChip color='success' style={{
                        margin: 'auto',
                        position: 'absolute',
                        left: '10px',
                        bottom: '10px',

                    }}>
                        Attending
                    </IonChip>
                }
                {new Date() >= new Date(event.end_time) &&
                    <IonChip color='light' style={{
                        margin: 'auto',
                        position: 'absolute',
                        left: '10px',
                        bottom: '10px',
                    }}>
                        Event Ended
                    </IonChip>
                }
            </div>
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
        </div>
    );
};

export default EventHeader;