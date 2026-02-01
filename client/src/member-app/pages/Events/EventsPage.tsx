import {
    IonContent,
    IonIcon,
    IonPage,
    IonRefresher,
    IonRefresherContent,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useState } from "react";
import {
    Event,
    useGetEventsQuery,
} from "../../../member-app/features/events/eventsApi";
import EventCard from "../../../shared/components/EventSlider/EventCard/EventCard";
import Header from "../../../shared/components/Header/Header";
import { useAuth } from "../../../shared/hooks/useAuth";
import EventCardSmall from "./EventCardSmall";
import EventSettingsModal from "./EventSettingsModel";
import EventsCreateModal from "./EventsCreateModal";
import "./EventsPage.css";

const EventsPage: React.FC = () => {
    const {
        data: events,
        isLoading,
        isError,
        refetch,
    } = useGetEventsQuery({ groupBy: "time-relative", sort: "start_time:asc" });

    const user = useAuth().user;
    const [activeEvent, setActiveEvent] = useState<Event | null>(null);
    const [showEventEditor, setShowEventEditor] = useState(false);
    const [showEventSettings, setShowEventSettings] = useState(false);
    const [showEventCreate, setShowEventCreate] = useState(false);

    const handleRefresh = (e: CustomEvent) => {
        refetch();
        e.detail.complete();
    };

    const handleEditEvent = (event: any) => {
        setActiveEvent(event);
        setShowEventSettings(true);
    };

    if (isLoading) {
        return (
            <IonPage>
                <IonContent>Loading events...</IonContent>
            </IonPage>
        );
    }
    if (isError) {
        return (
            <IonPage>
                <IonContent>Error loading events</IonContent>
            </IonPage>
        );
    }

    return (
        <IonPage>
            <Header title="Events" />
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <div className="events-page-content">
                    {user?.role.name === "admin" && (
                        <div
                            className="new-event-card"
                            onClick={() => setShowEventCreate(true)}
                        >
                            <IonIcon icon={add} style={{ margin: "0 10px" }} />
                            <h1 style={{ margin: 0 }}> New event</h1>
                        </div>
                    )}
                    {events?.upcoming?.map((event: Event) => (
                        <div key={event.id}>
                            <EventCard
                                key={event.id}
                                event={event}
                                editMode={user?.role.name === "admin"}
                                editEvent={handleEditEvent}
                            />
                        </div>
                    ))}
                    {events?.past && events.past.length > 0 && (
                        <span className="section-divider">Past Events</span>
                    )}
                    {events?.past?.map((event: Event) => (
                        <div key={event.id}>
                            <EventCard
                                key={event.id}
                                event={event}
                                editMode={user?.role.name === "admin"}
                                editEvent={handleEditEvent}
                            />
                        </div>
                    ))}
                </div>
            </IonContent>
            <EventSettingsModal
                activeEvent={activeEvent}
                open={showEventSettings}
                onClose={() => setShowEventSettings(false)}
            />
            <EventsCreateModal
                isOpen={showEventCreate}
                onClose={() => setShowEventCreate(false)}
            />
        </IonPage>
    );
};

export default EventsPage;
