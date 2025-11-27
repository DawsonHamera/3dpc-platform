import { IonIcon } from "@ionic/react";
import { location } from "ionicons/icons";

type EventHeaderProps = {
    event: any;
    children?: React.ReactNode;
};

const EventHeader: React.FC<EventHeaderProps> = ({ event, children }) => {
    return (
        <div className="event-card-header">
            <div className="date-badge">
                <p>
                    {new Date(event.start_time).toLocaleDateString("en-US", {
                        month: "short",
                    })}
                </p>
                <h2>{new Date(event.start_time).getDate()}</h2>
            </div>
            {children}
            <div className="image-container">
                <img src={event.image_file?.path} />
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