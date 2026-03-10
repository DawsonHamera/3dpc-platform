import { IonButton, IonIcon, useIonRouter } from "@ionic/react";
import { settingsOutline } from "ionicons/icons";
import AvatarStack from "../../../../shared/components/AvatarStack/AvatarStack";
import { Event } from "../../../../shared/features";
import { useAuth } from "../../../../shared/hooks/useAuth";
import { Attendance } from "../../../../shared/types";
import "./EventCard.css";
import EventHeader from "./EventHeader";

type EventCardProps = {
    event: Event;
    editMode?: boolean;
    editEvent?: (id: any) => void;
};

const EventCard: React.FC<EventCardProps> = ({
    event,
    editMode,
    editEvent,
}) => {
    const router = useIonRouter();
    const user = useAuth().user;

    const attending = (event.attendances as Attendance[]).find(
        (attendance: Attendance) => {
            const attendanceUser = attendance.user as { id: number } | null;
            return attendanceUser?.id === user?.id;
        },
    );

    return (
        <div className="event-card">
            <EventHeader event={event}>
                {editMode && (
                    <div className="edit-badge">
                        <IonIcon
                            onClick={() => editEvent?.(event.id)}
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
                        avatars={event.attendances.map((attendance: any) => ({
                            id: attendance.user.id,
                            name: attendance.user.name,
                        }))}
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
        </div>
    );
};

export default EventCard;
