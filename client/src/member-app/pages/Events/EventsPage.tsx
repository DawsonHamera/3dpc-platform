import {
    IonContent,
    IonPage,
    IonRefresher,
    IonRefresherContent,
} from "@ionic/react";
import { useState } from "react";
import EventCard from "../../../shared/components/EventSlider/EventCard/EventCard";
import Header from "../../../shared/components/Header/Header";
import ResourceManager from "../../../shared/components/ResourceManager/ResourceManager";
import {
    Event,
    useCreateEventMutation,
    useDeleteEventMutation,
    useGetEventsQuery,
    useUpdateEventMutation,
} from "../../../shared/features";
import { useAuth } from "../../../shared/hooks/useAuth";
import EventForm from "./EventForm";
import EventSettingsModal from "./EventSettingsModel";
import EventsCreateModal from "./EventsCreateModal";
import NotificationSettings from "./NotificationSettings";
import "./EventsPage.css";
import EventVerification from "./EventVerification";

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

    const [createEvent] = useCreateEventMutation();
    const [updateEvent] = useUpdateEventMutation();
    const [deleteEvent] = useDeleteEventMutation();

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
                <ResourceManager
                    items={events?.upcoming || []}
                    renderItem={(event, triggerEdit, triggerDelete, editAccess) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            editMode={editAccess}
                            editEvent={triggerEdit}
                        />
                    )}
                    Form={EventForm}
                    editAccess={user?.role.name === "admin"}
                    customSettings={[
                        {
                            label: "Notifications",
                            View: (id: number) => (
                                <NotificationSettings id={id} />
                            ),
                        },
                        {
                            label: "Verification",
                            View: (id: number) => <EventVerification id={id} />,
                        },
                    ]}
                    onCreate={(data) => {
                        createEvent(data).then(() => refetch());
                    }}
                    onUpdate={(id, data) => {
                        updateEvent({ id, data }).then(() => refetch());
                    }}
                    onDelete={(id) => {
                        deleteEvent(id).then(() => refetch());
                    }}
                />
                {events?.past && events.past.length > 0 && (
                    <span className="section-divider">Past Events</span>
                )}
                <ResourceManager
                    items={events.past || []}
                    renderItem={(
                        event,
                        triggerEdit,
                        triggerDelete,
                        editAccess,
                    ) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            editMode={editAccess}
                            editEvent={triggerEdit}
                        />
                    )}
                    Form={EventForm}
                    editAccess={user?.role.name === "admin"}
                    customSettings={[
                        {
                            label: "Notifications",
                            View: (id: number) => (
                                <NotificationSettings id={id} />
                            ),
                        },
                        {
                            label: "Verification",
                            View: (id: number) => <EventVerification id={id} />,
                        },
                    ]}
                    onCreate={(data) => {
                        createEvent(data).then(() => refetch());
                    }}
                    onUpdate={(id, data) => {
                        updateEvent({ id, data }).then(() => refetch());
                    }}
                    onDelete={(id) => {
                        deleteEvent(id).then(() => refetch());
                    }}
                />
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
