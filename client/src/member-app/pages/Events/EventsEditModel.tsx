import {
    IonButton,
    IonContent,
    IonDatetime,
    IonFooter,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import {
    CreateEvent,
    UpdateEvent,
    useUpdateEventMutation,
} from "../../../member-app/features/events/eventsApi";
import FileSelector from "../../../shared/components/FileSelector/FileSelector";

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
    const [formData, setFormData] = useState<CreateEvent>(activeEvent || {});

    useEffect(() => {
        if (activeEvent) {
            // Only include the fields needed for editing
            setFormData({
                title: activeEvent.title,
                description: activeEvent.description,
                event_type: activeEvent.event_type,
                location: activeEvent.location,
                start_time: activeEvent.start_time,
                end_time: activeEvent.end_time,
                image_file_id: activeEvent.image_file_id,
            });
        } else {
            setFormData({});
        }
    }, [activeEvent]);

    // Convert datetime object to local time for display in IonDatetime
    const getLocalTimeForDatetime = (
        datetime: Date | string | null | undefined
    ) => {
        if (!datetime) return "";
        const date = datetime instanceof Date ? datetime : new Date(datetime);
        // Format as ISO string but treat as local time by removing the Z
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    };

    const handleSubmit = async () => {
        // Only send the fields that can be updated
        const dataToSubmit: UpdateEvent = {
            title: formData.title,
            description: formData.description,
            event_type: formData.event_type,
            location: formData.location,
            start_time:
                formData.start_time instanceof Date
                    ? formData.start_time.toISOString()
                    : new Date(formData.start_time).toISOString(),
            end_time:
                formData.end_time instanceof Date
                    ? formData.end_time.toISOString()
                    : new Date(formData.end_time).toISOString(),
            image_file_id: formData.image_file_id,
        };

        await updateEvent({
            id: activeEvent?.id,
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
