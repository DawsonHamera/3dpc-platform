import { IonContent, IonItem, IonLabel, IonList, IonPage, IonChi, IonChipp, IonChip, IonSegmentButton, IonSegment, IonToolbar, IonToast, IonText } from "@ionic/react";
import Header from "../../../components/Header/Header";
import { useAttendEventMutation, useGetEventQuery, useGetUserAttendanceQuery } from "../../../features/events/eventsApi";
import { useParams } from "react-router";
import EventCard from "../../../components/EventSlider/EventCard/EventCard";
import EventHeader from "../../../components/EventSlider/EventCard/EventHeader";
import { useState } from "react";

const EventDetailsPage: React.FC = () => {

    const { eventId } = useParams<{ eventId: string }>();

    const { data: event } = useGetEventQuery(parseInt(eventId));
    const { data: attendance } = useGetUserAttendanceQuery(parseInt(eventId));
    const [toastMessage, setToastMessage] = useState<string>("");
    const [isError, setIsError] = useState(false);

    const [updateAttendance] = useAttendEventMutation();

    const handleUpdateStatus = (status: string) => {
        if (status && event) {
            console.log("Update attendance event " + eventId + 'status' + status)
            updateAttendance({ eventId: event.id, status })
            setToastMessage("Attendance status updated");
        }
    }

    if (!event) {
        return <IonPage>
            <IonContent>Loading attendance...</IonContent>
        </IonPage>
    }

    const renderAttendanceStatus = (status: string) => {
        switch (status) {
            case 'going':
                return <IonChip color="success">Going</IonChip>;
            case 'maybe':
                return <IonChip color="warning">Maybe</IonChip>;
            case 'not_going':
                return <IonChip color="danger">Not going</IonChip>;
            case 'unknown':
                return <IonChip color="medium">Unknown</IonChip>;
            default:
                return <IonChip color="danger">Error</IonChip>;
        }
    }

    return (
        <IonPage>
            <Header title='Event Overview' type="back"/>
            <IonContent>
                <EventHeader event={event} />
                <div style={{padding: '0 20px'}}>
                    <IonText><p>{event.description}</p></IonText>
                </div>
                <IonToolbar>
                    <IonSegment value={attendance?.status} onIonChange={(e) => handleUpdateStatus(e.detail.value)}>
                        <IonSegmentButton value="not_going">
                            <IonLabel>Not Going</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="maybe">
                            <IonLabel>Maybe</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="going">
                            <IonLabel>Going</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>
                <IonList style={{border: '1px solid var(--ion-color-light-shade)', borderRadius: '20px', margin: '20px'}}>
                    {event.attendances.map((attendance: any) => (
                        <IonItem key={attendance.id}>
                            <IonLabel>
                                <b>{attendance.user.name}</b>
                            </IonLabel>
                            <IonLabel slot='end'>{renderAttendanceStatus(attendance.status)}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
            <IonToast
                isOpen={!!toastMessage}
                onDidDismiss={() => setToastMessage("")}
                message={toastMessage}
                duration={2000}
                color={isError ? "danger" : "success"}
            />
        </IonPage>
    )
};

export default EventDetailsPage;