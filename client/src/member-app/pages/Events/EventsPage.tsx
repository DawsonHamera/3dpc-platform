import {
    IonContent,
    IonPage,
    IonRefresher,
    IonRefresherContent,
} from "@ionic/react";
import { useState } from "react";
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
import { toUTC } from "../../../shared/utility/datetime";
import EventCard from "./EventCard/EventCard";
import EventForm from "./EventForm";
import EventVerification from "./EventVerification";
import "./EventsPage.css";
import NotificationSettings from "./NotificationSettings";

const EventsPage: React.FC = () => {
    const {
        data: events,
        isLoading,
        isError,
        refetch,
    } = useGetEventsQuery({
        groupBy: "time-relative",
        sort: "start_time:asc",
    }) as {
        data:
            | {
                  upcoming: Event[] | undefined;
                  current: Event[] | undefined;
                  past: Event[] | undefined;
              }
            | undefined;
        isLoading: boolean;
        isError: boolean;
        refetch: () => void;
    };

    const user = useAuth().user;
    const [activeEvent, setActiveEvent] = useState<Event | null>(null);
    const [showEventEditor, setShowEventEditor] = useState(false);
    const [showEventSettings, setShowEventSettings] = useState(false);
    const [showEventCreate, setShowEventCreate] = useState(false);

    const [createEvent] = useCreateEventMutation();
    const [updateEvent] = useUpdateEventMutation();
    const [deleteEvent] = useDeleteEventMutation();

    /**
     * Convert local datetime fields to UTC before sending to API
     * DATETIME STANDARD: Client sends UTC ISO strings to API
     */
    const convertEventDateTimesToUTC = (data: any) => {
        const converted = { ...data };
        if (converted.start_time) {
            converted.start_time = toUTC(converted.start_time);
        }
        if (converted.end_time) {
            converted.end_time = toUTC(converted.end_time);
        }
        return converted;
    };

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
                    items={events?.current || []}
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
                        const utcData = convertEventDateTimesToUTC(data);
                        createEvent(utcData).then(() => refetch());
                    }}
                    onUpdate={(id, data) => {
                        const utcData = convertEventDateTimesToUTC(data);
                        updateEvent({ id, data: utcData }).then(() =>
                            refetch(),
                        );
                    }}
                    onDelete={(id) => {
                        deleteEvent(id).then(() => refetch());
                    }}
                />
                {events?.current &&
                    events.upcoming &&
                    events.upcoming.length > 0 && (
                        <div className="section-divider">Upcoming Events</div>
                    )}
                <ResourceManager
                    items={events?.upcoming || []}
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
                        const utcData = convertEventDateTimesToUTC(data);
                        createEvent(utcData).then(() => refetch());
                    }}
                    onUpdate={(id, data) => {
                        const utcData = convertEventDateTimesToUTC(data);
                        updateEvent({ id, data: utcData }).then(() =>
                            refetch(),
                        );
                    }}
                    onDelete={(id) => {
                        deleteEvent(id).then(() => refetch());
                    }}
                />
                {events?.past && events.past.length > 0 && (
                    <div className="section-divider">Past Events</div>
                )}
                <ResourceManager
                    items={events?.past || []}
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
                        const utcData = convertEventDateTimesToUTC(data);
                        createEvent(utcData).then(() => refetch());
                    }}
                    onUpdate={(id, data) => {
                        const utcData = convertEventDateTimesToUTC(data);
                        updateEvent({ id, data: utcData }).then(() =>
                            refetch(),
                        );
                    }}
                    onDelete={(id) => {
                        deleteEvent(id).then(() => refetch());
                    }}
                />
            </IonContent>
        </IonPage>
    );
};

export default EventsPage;
