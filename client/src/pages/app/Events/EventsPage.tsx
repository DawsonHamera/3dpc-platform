import { IonPage, IonContent, IonRefresher, IonRefresherContent, IonHeader, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import Header from "../../../components/Header/Header";
import EventSlider from "../../../components/EventSlider/EventSlider";
import { useGetEventsQuery } from "../../../features/events/eventsApi";
import { eventResultType } from "../../../types/zod/schemas";
import EventCard from "../../../components/EventSlider/EventCard/EventCard";
import "./EventsPage.css";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";
import EventsEditModel from "./EventsEditModel";

const EventsPage: React.FC = () => {

    const { data: events, isLoading, isError, refetch } = useGetEventsQuery();

    const user = useAuth().user;
    const [ editingEvent, setEditingEvent ] = useState<Event | null>(null);

    const handleRefresh = (e: CustomEvent) => {
        refetch();
        e.detail.complete();
    };

    const handleEditEvent = (event: any) => {
        setEditingEvent(event);
        // Implement your edit event logic here
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
                    {events?.map((event: eventResultType) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            editMode={user?.role.name === "admin"}
                            editEvent={handleEditEvent}
                        />
                    ))}
                </div>
            </IonContent>
            <EventsEditModel editingEvent={editingEvent} setEditingEvent={setEditingEvent} />
        </IonPage>
    );
};

export default EventsPage;
