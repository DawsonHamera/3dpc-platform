import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonDatetime,
    IonRadioGroup,
    IonRadio,
    IonFooter,
    IonButton,
    IonIcon,
} from "@ionic/react";
import { useState } from "react";
import FileSelector from "../../../components/FileSelector/FileSelector";
import QRCode from "react-qr-code";
import { close } from "ionicons/icons";
import { Event, useUpdateEventMutation } from "../../../features/events/eventsApi";

type EventsEditModelProps = {
    editingEvent: any;
    setEditingEvent: (event: any | null) => void;
};

const EventsEditModel: React.FC<EventsEditModelProps> = ({
    editingEvent,
    setEditingEvent,
}) => {
    const [openQrCode, setOpenQrCode] = useState<string | null>(null);
    const [updateEvent] = useUpdateEventMutation();
    
    // Convert UTC time to local time for display in IonDatetime
    const getLocalTimeForDatetime = (utcString: string) => {
        if (!utcString) return "";
        const date = new Date(utcString);
        // Format as ISO string but treat as local time by removing the Z
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };
    
    // Convert local time from IonDatetime back to UTC for API
    const convertLocalToUTC = (localString: string) => {
        if (!localString) return "";
        const date = new Date(localString);
        return date.toISOString();
    };
    
    const handleSubmit = async () => {
        // Convert local times back to UTC before submitting
        const dataToSubmit = {
            ...editingEvent,
            start_time: convertLocalToUTC(editingEvent.start_time),
            end_time: convertLocalToUTC(editingEvent.end_time),
        };

        delete dataToSubmit.id;
        
        await updateEvent({
            id: editingEvent?.id,
            data: dataToSubmit,
        });

        setEditingEvent(null);
    };

    return (
        <div>
            <IonModal
                isOpen={editingEvent !== null}
                onDidDismiss={() => setEditingEvent(null)}
            >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            {editingEvent ? "Edit Event" : "Create Event"}
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonItem>
                        <IonLabel position="stacked">Title</IonLabel>
                        <IonInput
                            value={editingEvent?.title}
                            onIonInput={(e) =>
                                setEditingEvent?.((f) => ({
                                    ...f,
                                    title: e.detail.value!,
                                }))
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Description</IonLabel>
                        <IonTextarea
                            value={editingEvent?.description}
                            onIonInput={(e) =>
                                setEditingEvent?.((f) => ({
                                    ...f,
                                    description: e.detail.value!,
                                }))
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Location</IonLabel>
                        <IonInput
                            value={editingEvent?.location}
                            onIonInput={(e) =>
                                setEditingEvent?.((f) => ({
                                    ...f,
                                    location: e.detail.value!,
                                }))
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Start Time</IonLabel>
                        <IonDatetime
                            showAdjacentDays
                            presentation="date-time"
                            value={getLocalTimeForDatetime(
                                editingEvent?.start_time
                            )}
                            onIonChange={(e) =>
                                setEditingEvent?.((f: any) => ({
                                    ...f,
                                    start_time: Array.isArray(e.detail.value)
                                        ? e.detail.value[0] ?? ""
                                        : e.detail.value ?? "",
                                }))
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">End Time</IonLabel>
                        <IonDatetime
                            showAdjacentDays
                            presentation="date-time"
                            value={getLocalTimeForDatetime(
                                editingEvent?.end_time
                            )}
                            onIonChange={(e) =>
                                setEditingEvent?.((f: any) => ({
                                    ...f,
                                    end_time: Array.isArray(e.detail.value)
                                        ? e.detail.value[0] ?? ""
                                        : e.detail.value ?? "",
                                }))
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <FileSelector
                            onChange={(file) =>
                                setEditingEvent?.((f) => ({
                                    ...f,
                                    image_file_id: file.id,
                                }))
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel>Featured Event?</IonLabel>
                        <IonRadioGroup
                            value={editingEvent?.isFeatured}
                            onIonChange={(e) =>
                                setEditingEvent?.((f) => ({
                                    ...f,
                                    isFeatured: e.detail.value,
                                }))
                            }
                        >
                            <IonItem>
                                <IonLabel>Yes</IonLabel>
                                <IonRadio slot="start" value={true} />
                            </IonItem>
                            <IonItem>
                                <IonLabel>No</IonLabel>
                                <IonRadio slot="start" value={false} />
                            </IonItem>
                        </IonRadioGroup>
                    </IonItem>
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonButton expand="block" onClick={handleSubmit}>
                            {editingEvent ? "Update" : "Create"}
                        </IonButton>
                        <IonButton
                            expand="block"
                            color="medium"
                            onClick={() => setEditingEvent(null)}
                        >
                            Cancel
                        </IonButton>
                    </IonToolbar>
                </IonFooter>
            </IonModal>
            <IonModal
                isOpen={!!openQrCode}
                onDidDismiss={() => setOpenQrCode(null)}
            >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>{editingEvent?.title} QR Code</IonTitle>
                        <IonButton
                            slot="end"
                            fill="clear"
                            onClick={() => setOpenQrCode(null)}
                        >
                            <IonIcon icon={close} />
                        </IonButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {openQrCode && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <QRCode value={openQrCode} size={256} />
                            <h1>{openQrCode}</h1>
                        </div>
                    )}
                </IonContent>
            </IonModal>
        </div>
    );
};

export default EventsEditModel;
