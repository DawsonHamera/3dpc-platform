import React, { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonCheckbox,
    IonButton,
    IonDatetime,
} from "@ionic/react";
import ItemSelectField from "./ItemSelectField";
import { useGetPrintersQuery } from "../../../features/printers/printersApi";
import { useGetMaterialsQuery } from "../../../features/materials/materialsApi";
import { useGetModelsQuery } from "../../../features/models/modelsApi";
import { useCreateTaskMutation } from "../../../features/tasks/tasksApi";

const CreatePrintTask: React.FC = () => {
    const [formData, setFormData] = useState({
        title: "New Print Job",
        type: "print_job",
        scheduled_date: new Date().toISOString(),
        details: {
            printer_id: 1,
            model_id: 3,
            material_id: 1,
            estimated_hours: 5,
        },
        status: "pending",
        is_required: true,
        is_open: true,
    });

    const { data: printers } = useGetPrintersQuery();
    const { data: materials } = useGetMaterialsQuery();
    const { data: models } = useGetModelsQuery();

    const [createTask] = useCreateTaskMutation();

    const handleChange = (e: any) => {
        const { name, value, checked, type } = e.target;

        if (name.startsWith("details.")) {
            const key = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                details: {
                    ...prev.details,
                    [key]:
                        type === "number" ? parseFloat(value) : parseInt(value),
                },
            }));
        } else if (name === "is_required") {
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSelectChange = (name: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            details: {
                ...prev.details,
                [name]: value,
            },
        }));
    };

       const convertLocalToUTC = (localString: string) => {
           if (!localString) return "";
           const date = new Date(localString);
           return date.toISOString();
       };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const dataToSubmit = {
            ...formData,
            scheduled_date: convertLocalToUTC(formData.scheduled_date),
        };
        console.log("Form submitted:", formData);
        createTask(dataToSubmit);
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Create Print Task</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Task Details</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <form onSubmit={handleSubmit}>
                            <IonItem>
                                <IonLabel position="stacked">Title</IonLabel>
                                <IonInput
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onIonChange={handleChange}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Printer</IonLabel>
                                <ItemSelectField
                                    items={printers?.map((printer: any) => ({
                                        id: printer.id,
                                        url: printer.image_file.path,
                                    }))}
                                    onSelect={(id) =>
                                        handleSelectChange("printer_id", id)
                                    }
                                    selectedItem={formData.details.printer_id}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Model</IonLabel>
                                <ItemSelectField
                                    items={models?.map((model: any) => ({
                                        id: model.id,
                                        url: model.image_file?.path,
                                    }))}
                                    onSelect={(id) =>
                                        handleSelectChange("model_id", id)
                                    }
                                    selectedItem={formData.details.model_id}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">Material</IonLabel>
                                <ItemSelectField
                                    items={materials?.map((material: any) => ({
                                        id: material.id,
                                        url: material.image_file?.path,
                                    }))}
                                    onSelect={(id) =>
                                        handleSelectChange("material_id", id)
                                    }
                                    selectedItem={formData.details.material_id}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">
                                    Estimated Hours
                                </IonLabel>
                                <IonInput
                                    type="number"
                                    name="details.estimated_hours"
                                    value={formData.details.estimated_hours}
                                    onIonChange={handleChange}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel position="stacked">
                                    Scheduled Date
                                </IonLabel>
                                <IonDatetime
                                    name="scheduled_date"
                                    value={formData.scheduled_date}
                                    onIonChange={(e) => {
                                        const value = e.detail.value;
                                        if (value) {
                                            setFormData((prev) => ({
                                                ...prev,
                                                scheduled_date: Array.isArray(value) ? value[0] : value || prev.scheduled_date,
                                            }));
                                        }
                                    }}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel>Is Required</IonLabel>
                                <IonCheckbox
                                    slot="start"
                                    name="is_required"
                                    checked={formData.is_required}
                                    onIonChange={handleChange}
                                />
                            </IonItem>
                            <IonItem>
                                <IonLabel>Is Open</IonLabel>
                                <IonCheckbox
                                    slot="start"
                                    name="is_open"
                                    checked={formData.is_open}
                                    onIonChange={handleChange}
                                />
                            </IonItem>
                            <IonButton expand="block" type="submit">
                                Create Task
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default CreatePrintTask;
