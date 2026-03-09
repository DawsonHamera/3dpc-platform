import {
    IonAlert,
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonModal,
    IonTitle,
    IonToolbar,
    useIonRouter,
} from "@ionic/react";
import { closeCircle } from "ionicons/icons";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import {
    useDeleteEventMutation,
    useGetEventCodeQuery,
} from "../../../shared/features";
import EventsEditModel from "./EventsEditModel";

interface EventSettingsModalProps {
    activeEvent: any;
    open: boolean;
    onClose: () => void;
}

const EventSettingsModal: React.FC<EventSettingsModalProps> = ({
    activeEvent,
    open,
    onClose,
}) => {
    const { data: verificationCodeData } = useGetEventCodeQuery(
        activeEvent?.id,
        { skip: !activeEvent?.id },
    );

    const [showEventEditor, setShowEventEditor] = useState(false);
    const [deleteEvent] = useDeleteEventMutation();
    const [deleteEventAlert, setDeleteEventAlert] = useState(false);

    const router = useIonRouter();
    console.log("Active event in settings modal:", activeEvent);

    return (
        <>
            <IonModal isOpen={open} onDidDismiss={onClose}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Event settings</IonTitle>
                        <IonButton
                            slot="end"
                            fill="clear"
                            onClick={() => onClose()}
                        >
                            <IonIcon icon={closeCircle} />
                        </IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "20px",
                        }}
                    >
                        <b style={{ margin: "10px" }}>{activeEvent?.title}</b>
                        <QRCode
                            value={
                                verificationCodeData?.verification_code || ""
                            }
                            size={200}
                        />
                        <p>{verificationCodeData?.verification_code}</p>
                    </div>
                    <IonToolbar>
                        <IonButton onClick={() => setShowEventEditor(true)}>
                            Edit event
                        </IonButton>
                        <IonButton onClick={() => setDeleteEventAlert(true)}>
                            Delete Event
                        </IonButton>
                        <IonButton disabled>
                            Send out reminders (Coming soon)
                        </IonButton>
                        <IonButton disabled>Reset Code (Coming soon)</IonButton>
                    </IonToolbar>
                </IonContent>
            </IonModal>
            <EventsEditModel
                activeEvent={activeEvent}
                isOpen={showEventEditor}
                onClose={() => {
                    setShowEventEditor(false);
                    onClose();
                }}
            />
            
            <IonAlert
                isOpen={deleteEventAlert}
                onDidDismiss={() => setDeleteEventAlert(false)}
                header={"Confirm Delete"}
                message={"Are you sure you want to delete this event?"}
                buttons={[
                    {
                        text: "Cancel",
                        role: "cancel",
                        handler: () => setDeleteEventAlert(false),
                    },
                    {
                        text: "Delete",
                        handler: () => {
                            deleteEvent(activeEvent?.id);
                            setDeleteEventAlert(false);
                            onClose();
                        },
                    },
                ]}
            />
        </>
    );
};

export default EventSettingsModal;
