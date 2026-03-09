import {
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonList,
    IonButton,
} from "@ionic/react";
import FileSelector from "../../../shared/components/FileSelector/FileSelector";

const getLocalTimeForDatetime = (
    datetime: Date | string | null | undefined,
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

type props = {
    formData: any;
    setFormData: (key: string, value: any) => void;
    onSubmit: (data: any) => void;
    onCancel: () => void;
};

const EventForm = ({ formData, setFormData, onSubmit, onCancel }: props) => {
    return (
        <IonList>
            <IonItem>
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput
                    value={formData?.title}
                    onIonInput={(e) => setFormData?.("title", e.detail.value!)}
                />
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Description</IonLabel>
                <IonTextarea
                    value={formData?.description}
                    onIonInput={(e) =>
                        setFormData?.("description", e.detail.value!)
                    }
                />
            </IonItem>
            <IonItem>
                <IonSelect
                    value={formData?.event_type}
                    onIonChange={(e) =>
                        setFormData?.("event_type", e.detail.value!)
                    }
                    placeholder="Select Event Type"
                >
                    <IonSelectOption value="meeting">Meeting</IonSelectOption>
                    <IonSelectOption value="workshop">Workshop</IonSelectOption>
                    <IonSelectOption value="fundraiser">
                        Fundraiser
                    </IonSelectOption>
                    <IonSelectOption value="workday">Work Day</IonSelectOption>
                    <IonSelectOption value="other">Other</IonSelectOption>
                </IonSelect>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Location</IonLabel>
                <IonInput
                    value={formData?.location}
                    onIonInput={(e) =>
                        setFormData?.("location", e.detail.value!)
                    }
                />
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Start Time</IonLabel>
                <IonDatetime
                    showAdjacentDays
                    presentation="date-time"
                    value={getLocalTimeForDatetime(formData?.start_time)}
                    onIonChange={(e) =>
                        setFormData?.(
                            "start_time",
                            Array.isArray(e.detail.value)
                                ? (e.detail.value[0] ?? "")
                                : (e.detail.value ?? ""),
                        )
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
                        setFormData?.(
                            "end_time",
                            Array.isArray(e.detail.value)
                                ? (e.detail.value[0] ?? "")
                                : (e.detail.value ?? ""),
                        )
                    }
                />
            </IonItem>
            <IonItem>
                <FileSelector
                    fileId={formData?.image_file_id}
                    onChange={(id) => setFormData?.("image_file_id", id)}
                />
            </IonItem>
            <IonButton expand="block" onClick={() => onSubmit(formData)}>
                Save
            </IonButton>
        </IonList>
    );
};

export default EventForm;