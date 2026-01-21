import {
    IonButton,
    IonIcon,
    IonImg,
    IonItem,
    IonSkeletonText,
    IonText,
    IonToolbar,
    useIonRouter,
} from "@ionic/react";
import { calendar, construct, hammer, location, pricetag, trophy } from "ionicons/icons";
import AvatarStack from "../../../shared/components/AvatarStack/AvatarStack";
import { Event } from "../../features/events/eventsApi";
import styles from "./EventCardSmall.module.css";

type EventCardProps = {
    event: Event;
};

export const EventCardSmall: React.FC<EventCardProps> = ({ event }) => {
    const router = useIonRouter();
    const iconMap: { [key: string]: string } = {
        workshop: construct,
        competition: trophy,
        fundraiser: pricetag,
        work_day: hammer,
        meeting: calendar
    };

    if (!event) {
        return (
            <div className={styles.card}>
                <IonSkeletonText
                    animated
                    style={{ width: "150px", height: "200px" }}
                />
            </div>
        );
    }

    return (
        <div className={styles.card}>
            <IonImg
                className={styles.image}
                src={
                    event.image_file?.path || "https://via.placeholder.com/150"
                }
            />
            <div className={styles.date}>
                <p>
                    {new Date(event.start_time).toLocaleDateString("en-US", {
                        month: "short",
                    })}
                </p>
                <h2>{new Date(event.start_time).getDate()}</h2>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    {/* <IonIcon
                        icon={iconMap[event?.event_type] || calendar}
                        style={{ marginRight: "8px" }}
                    /> */}
                    {event.title}</h3>
                <div className={styles.location}>
                    <IonIcon icon={location} color="primary" />
                    <IonText color="medium">{event.location}</IonText>
                </div>
            </div>
            <IonToolbar className={styles.footer}>
                <IonItem lines="none" slot="start" className={styles.attendees}>
                    <AvatarStack
                        avatars={event.attendances
                            .filter(
                                (attendance) =>
                                    attendance.status === "maybe" ||
                                    attendance.status === "going"
                            )
                            .map((attendance: any) => ({
                                id: attendance.user.id,
                                name: attendance.user.name,
                            }))}
                        size={50}
                    />
                </IonItem>
                <IonButton
                    fill="solid"
                    expand="block"
                    shape="round"
                    onClick={() =>
                        router.push(
                            `/dashboard/events/${event.id}`,
                            "forward",
                            "push"
                        )
                    }
                >
                    View event
                </IonButton>
            </IonToolbar>
        </div>
    );
};

export default EventCardSmall;
