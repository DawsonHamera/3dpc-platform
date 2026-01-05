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
    IonFooter,
    IonButton,
    IonSelect,
    IonSelectOption,
} from "@ionic/react";
import { useState } from "react";
import FileSelector from "../../../shared/components/FileSelector/FileSelector";
import { useCreateEventMutation } from "../../../member-app/features/events/eventsApi";

type EventsCreateModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const EventsCreateModal: React.FC<EventsCreateModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [createEvent] = useCreateEventMutation();
    const [formData, setFormData] = useState<any>({});

    // Convert local time from IonDatetime back to UTC for API
    const convertLocalToUTC = (localString: string) => {
        if (!localString) return "";
        const date = new Date(localString);
        return date.toISOString();
    };

    const handleSubmit = async () => {
        // Convert local times to UTC before submitting
        const dataToSubmit = {
            ...formData,
            start_time: convertLocalToUTC(formData.start_time),
            end_time: convertLocalToUTC(formData.end_time),
        };

        await createEvent(dataToSubmit);
        onClose();
    };

    return (
        <div>
            <IonModal isOpen={isOpen} onDidDismiss={onClose}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Create Event</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonItem>
                        <IonLabel position="stacked">Title</IonLabel>
                        <IonInput
                            value={formData?.title}
                            onIonInput={(e) =>
                                setFormData((f) => ({
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
                                setFormData((f) => ({
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
                            placeholder="Select Event Type">
                            <IonSelectOption value="meeting">Meeting</IonSelectOption>
                            <IonSelectOption value="workshop">Workshop</IonSelectOption>
                            <IonSelectOption value="fundraiser">Fundraiser</IonSelectOption>
                            <IonSelectOption value="workday">Work Day</IonSelectOption>
                            <IonSelectOption value="other">Other</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Location</IonLabel>
                        <IonInput
                            value={formData?.location}
                            onIonInput={(e) =>
                                setFormData((f) => ({
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
                            value={formData?.start_time}
                            onIonChange={(e) =>
                                setFormData((f: any) => ({
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
                            value={formData?.end_time}
                            onIonChange={(e) =>
                                setFormData((f: any) => ({
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
                                setFormData((f) => ({
                                    ...f,
                                    image_file_id: file.id,
                                }))
                            }
                        />
                    </IonItem>
                </IonContent>
                <IonFooter>
                    <IonToolbar>
                        <IonButton expand="block" onClick={handleSubmit}>
                            Create
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

export default EventsCreateModal;
