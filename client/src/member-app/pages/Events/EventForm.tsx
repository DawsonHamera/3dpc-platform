import {
    IonButton,
    IonDatetime,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonSelect,
    IonSelectOption,
    IonTextarea,
} from "@ionic/react";
import { useEffect, useState } from "react";
import FileSelector from "../../../shared/components/FileSelector/FileSelector";
import { toLocalISOString } from "../../../shared/utility/datetime";

type props = {
    formData: any;
    setFormData: (key: string, value: any) => void;
    onSubmit: (data: any) => void;
    onCancel: () => void;
};

/**
 * EventForm Component
 *
 * DATETIME STANDARD:
 * - Displays datetime in user's local timezone using IonDatetime
 * - Converts UTC datetimes from API to local ISO strings for display
 * - Stores datetime values in formData as they are entered (local ISO strings)
 * - Parent component must convert to UTC before sending to API
 */
const EventForm = ({ formData, setFormData, onSubmit, onCancel }: props) => {
    // Local state to track if we've converted the initial UTC times to local
    const [localStartTime, setLocalStartTime] = useState<string>("");
    const [localEndTime, setLocalEndTime] = useState<string>("");

    useEffect(() => {
        // When formData changes (e.g., when editing an existing event),
        // convert UTC times to local ISO strings for IonDatetime
        if (formData?.start_time) {
            try {
                const localISO = toLocalISOString(formData.start_time);
                setLocalStartTime(localISO);
            } catch (e) {
                // If conversion fails, use the value as-is
                setLocalStartTime(formData.start_time);
            }
        }
        if (formData?.end_time) {
            try {
                const localISO = toLocalISOString(formData.end_time);
                setLocalEndTime(localISO);
            } catch (e) {
                // If conversion fails, use the value as-is
                setLocalEndTime(formData.end_time);
            }
        }
    }, [formData?.start_time, formData?.end_time]);

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
                <IonLabel position="stacked">Start Time (Local)</IonLabel>
                <IonDatetime
                    showAdjacentDays
                    presentation="date-time"
                    value={localStartTime || formData?.start_time}
                    onIonChange={(e) => {
                        const value = Array.isArray(e.detail.value)
                            ? (e.detail.value[0] ?? "")
                            : (e.detail.value ?? "");
                        setLocalStartTime(value);
                        setFormData?.("start_time", value);
                    }}
                />
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">End Time (Local)</IonLabel>
                <IonDatetime
                    showAdjacentDays
                    presentation="date-time"
                    value={localEndTime || formData?.end_time}
                    onIonChange={(e) => {
                        const value = Array.isArray(e.detail.value)
                            ? (e.detail.value[0] ?? "")
                            : (e.detail.value ?? "");
                        setLocalEndTime(value);
                        setFormData?.("end_time", value);
                    }}
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
