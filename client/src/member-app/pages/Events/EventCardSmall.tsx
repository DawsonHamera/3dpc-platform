import { IonIcon, useIonRouter } from "@ionic/react";
import { arrowForwardCircleOutline, calendarOutline, settingsOutline } from "ionicons/icons";
import AvatarStack from "../../../shared/components/AvatarStack/AvatarStack";
import { Event } from "../../../shared/features";
import "./EventCardSmall.css";

type EventCardProps = {
    event: Event;
    editMode?: boolean;
    editEvent?: (id: any) => void;
};

const EventCardSmall: React.FC<EventCardProps> = ({ event, editMode, editEvent }) => {
    const router = useIonRouter();

    const eventDate = new Date(event.start_time);
    const day = eventDate.getDate();
    const month = eventDate.toLocaleDateString("en-US", { month: "short" });

    const bgImage = event?.image_file?.path
        ? `url(${event.image_file.path})`
        : "linear-gradient(135deg, var(--ion-color-primary) 0%, var(--ion-color-secondary) 100%)";

    return (
        <div className="event-card-small">
            <div className="event-card-image" style={{ backgroundImage: bgImage }} />

            <div className="event-card-small-content">
                <div className="event-top">
                    <div className="date-badge-small">
                        <IonIcon icon={calendarOutline} className="calendar-icon" />
                        <span className="date-text">{month} {day}</span>
                    </div>

                    {editMode && (
                        <div
                            className="edit-badge-small"
                            onClick={(e) => { e.stopPropagation(); editEvent?.(event.id); }}
                        >
                            <IonIcon icon={settingsOutline} />
                        </div>
                    )}
                </div>

                <div className="event-bottom">
                    <h3 className="event-title-small">{event.title}</h3>

                    <div className="event-footer-small">
                        <AvatarStack
                            avatars={event.attendances.map((a: any) => ({ id: a.user.id, name: a.user.name }))}
                            maxVisible={3}
                        />
                        <div className="view-details-btn" onClick={() => router.push(`/dashboard/events/${event.id}`)}>
                            <IonIcon icon={arrowForwardCircleOutline} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCardSmall;
