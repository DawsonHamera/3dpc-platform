import { IonPage, IonContent, IonRefresher, IonRefresherContent, IonHeader, IonModal, IonTitle, IonToolbar, IonIcon } from "@ionic/react";
import Header from "../../../components/Header/Header";
import EventSlider from "../../../components/EventSlider/EventSlider";
import { useGetEventsQuery } from "../../../features/events/eventsApi";
import { eventResultType } from "../../../types/zod/schemas";
import EventCard from "../../../components/EventSlider/EventCard/EventCard";
import "./EventsPage.css";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";
import EventsEditModel from "./EventsEditModel";
import Card from "../../../components/Card/Card";
import { add } from "ionicons/icons";
import EventSettingsModal from "./EventSettingsModel";
import EventsCreateModal from "./EventsCreateModal";

const EventsPage: React.FC = () => {

    const { data: events, isLoading, isError, refetch } = useGetEventsQuery();

    const user = useAuth().user;
    const [ activeEvent, setActiveEvent ] = useState<Event | null>(null);
    const [ showEventEditor, setShowEventEditor ] = useState(false);
    const [ showEventSettings, setShowEventSettings ] = useState(false);
    const [ showEventCreate, setShowEventCreate ] = useState(false);

    const handleRefresh = (e: CustomEvent) => {
        refetch();
        e.detail.complete();
    };

    const handleEditEvent = (event: any) => {
        setActiveEvent(event);
        setShowEventSettings(true);
    }


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
                   {user?.role.name === "admin" && <div className="new-event-card" onClick={() => setShowEventCreate(true)}>
                        <IonIcon icon={add} style={{margin: '0 10px'}}/>
                        <h1 style={{ margin: 0 }}> New event</h1>
                    </div>}
                    {events?.map((event: eventResultType) => (
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
