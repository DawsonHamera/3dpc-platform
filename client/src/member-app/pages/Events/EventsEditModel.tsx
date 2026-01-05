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
    IonAlert,
    IonSelect,
    IonSelectOption,
} from "@ionic/react";
import { useEffect, useState } from "react";
import FileSelector from "../../../shared/components/FileSelector/FileSelector";
import QRCode from "react-qr-code";
import { close, remove, trash } from "ionicons/icons";
import { Event, useDeleteEventMutation, useUpdateEventMutation } from "../../../member-app/features/events/eventsApi";

type EventsEditModelProps = {
    activeEvent: any;
    isOpen: boolean;
    onClose: () => void;
};

const EventsEditModel: React.FC<EventsEditModelProps> = ({
    activeEvent,
    isOpen,
    onClose,
}) => {
    const [updateEvent] = useUpdateEventMutation();
    const [formData, setFormData] = useState<any>(activeEvent || {});

    useEffect(() => {
        setFormData(activeEvent || {});
    }, [activeEvent]);

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
            ...formData,
            start_time: convertLocalToUTC(formData.start_time),
            end_time: convertLocalToUTC(formData.end_time),
        };

        delete dataToSubmit.id;

        await updateEvent({
            id: formData?.id,
            data: dataToSubmit,
        });

        onClose();
    };

    return (
        <div>
            <IonModal isOpen={isOpen} onDidDismiss={onClose}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            {activeEvent ? "Edit Event" : "Create Event"}
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonItem>
                        <IonLabel position="stacked">Title</IonLabel>
                        <IonInput
                            value={formData?.title}
                            onIonInput={(e) =>
                                setFormData?.((f) => ({
                                    ...f,
                                    title: e.detail.value!,
                                }))
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Description</IonLabel>
                        <IonTextarea
                            value={formData?.description}
                            onIonInput={(e) =>
                                setFormData?.((f) => ({
                                    ...f,
                                    description: e.detail.value!,
                                }))
                            }
                        />
                    </IonItem>
                    <IonItem>
                        <IonSelect
                            value={formData?.event_type}
                            onIonChange={(e) =>
                                setFormData?.((f) => ({
                                    ...f,
                                    event_type: e.detail.value!,
                                }))
                            }
                            placeholder="Select Event Type"
                        >
                            <IonSelectOption value="meeting">
                                Meeting
                            </IonSelectOption>
                            <IonSelectOption value="workshop">
                                Workshop
                            </IonSelectOption>
                            <IonSelectOption value="fundraiser">
                                Fundraiser
                            </IonSelectOption>
                            <IonSelectOption value="workday">
                                Work Day
                            </IonSelectOption>
                            <IonSelectOption value="other">
                                Other
                            </IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Location</IonLabel>
                        <IonInput
                            value={formData?.location}
                            onIonInput={(e) =>
                                setFormData?.((f) => ({
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
                                formData?.start_time
                            )}
                            onIonChange={(e) =>
                                setFormData?.((f: any) => ({
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
                            value={getLocalTimeForDatetime(formData?.end_time)}
                            onIonChange={(e) =>
                                setFormData?.((f: any) => ({
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
                                setFormData?.((f) => ({
                                    ...f,
                                    image_file_id: file.id,
                                }))
                            }
                        />
                    </IonItem>
                    {/* <IonItem>
                        <IonLabel>Featured Event?</IonLabel>
                        <IonRadioGroup
                            value={formData?.isFeatured}
                            onIonChange={(e) =>
                                setFormData?.((f) => ({
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
                    </IonItem> */}
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonButton expand="block" onClick={handleSubmit}>
                            {activeEvent ? "Update" : "Create"}
                        </IonButton>
                        <IonButton
                            expand="block"
                            color="medium"
                            onClick={onClose}
                        >
                            Cancel
                        </IonButton>
                    </IonToolbar>
                </IonFooter>
            </IonModal>
        </div>
    );
};

export default EventsEditModel;
