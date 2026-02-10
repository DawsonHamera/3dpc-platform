import {
    IonButton,
    IonButtons,
    IonCheckbox,
    IonDatetime,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonTitle,
    IonToast,
    IonToolbar,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React, { useState } from "react";
import {
    useCreateTaskMutation,
    useGetMaterialsQuery,
    useGetModelsQuery,
    useGetPrintersQuery,
} from "../../../shared/features";
import "./CreateTaskModal.css";
import ItemSelectField from "./ItemSelectField";

interface CreateTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [formData, setFormData] = useState({
        title: "New Print Job",
        type: "print_job",
        scheduled_date: new Date().toISOString(),
        details: {
            printer_id: 0,
            model_id: 0,
            material_id: 0,
            estimated_hours: 1,
        },
        status: "pending",
        is_required: true,
        is_open: true,
    });

    const [errors, setErrors] = useState({
        title: "",
        printer_id: "",
        model_id: "",
        material_id: "",
    });

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const { data: printers } = useGetPrintersQuery();
    const { data: materials } = useGetMaterialsQuery();
    const { data: models } = useGetModelsQuery();
    const [createTask, { isLoading }] = useCreateTaskMutation();

    const handleChange = (e: any) => {
        const { name, value, checked, type } = e.target;

        if (name.startsWith("details.")) {
            const key = name.split(".")[1];
            setFormData((prev) => ({
                ...prev,
                details: {
                    ...prev.details,
                    [key]:
                        type === "number"
                            ? parseFloat(value) || 0
                            : parseInt(value) || 0,
                },
            }));
        } else if (name === "is_required" || name === "is_open") {
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
        setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const convertLocalToUTC = (localString: string) => {
        if (!localString) return "";
        const date = new Date(localString);
        return date.toISOString();
    };

    const validateForm = () => {
        const newErrors = {
            title: "",
            printer_id: "",
            model_id: "",
            material_id: "",
        };
        let isValid = true;

        if (!formData.title.trim()) {
            newErrors.title = "Title is required";
            isValid = false;
        }

        if (!formData.details.printer_id || formData.details.printer_id === 0) {
            newErrors.printer_id = "Please select a printer";
            isValid = false;
        }

        if (!formData.details.model_id || formData.details.model_id === 0) {
            newErrors.model_id = "Please select a model";
            isValid = false;
        }

        if (
            !formData.details.material_id ||
            formData.details.material_id === 0
        ) {
            newErrors.material_id = "Please select a material";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        const dataToSubmit = {
            ...formData,
            scheduled_date: convertLocalToUTC(formData.scheduled_date),
        };

        try {
            await createTask(dataToSubmit).unwrap();
            setToastMessage("Task created successfully!");
            setShowToast(true);
            handleClose();
        } catch (error) {
            setToastMessage("Failed to create task. Please try again.");
            setShowToast(true);
        }
    };

    const handleClose = () => {
        setFormData({
            title: "New Print Job",
            type: "print_job",
            scheduled_date: new Date().toISOString(),
            details: {
                printer_id: 0,
                model_id: 0,
                material_id: 0,
                estimated_hours: 1,
            },
            status: "pending",
            is_required: true,
            is_open: true,
        });
        setErrors({
            title: "",
            printer_id: "",
            model_id: "",
            material_id: "",
        });
        onClose();
    };

    return (
        <>
            <IonModal
                isOpen={isOpen}
                onDidDismiss={handleClose}
                className="create-task-modal"
            >
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Create Print Task</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={handleClose}>
                                <IonIcon icon={closeOutline} />
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <div className="create-task-modal-content">
                    <IonList>
                        <IonItem className={errors.title ? "ion-invalid" : ""}>
                            <IonLabel position="stacked">
                                Title{" "}
                                <span className="required-asterisk">*</span>
                            </IonLabel>
                            <IonInput
                                type="text"
                                name="title"
                                value={formData.title}
                                onIonInput={handleChange}
                                placeholder="Enter task title"
                            />
                            {errors.title && (
                                <div className="error-text">{errors.title}</div>
                            )}
                        </IonItem>

                        <div className="select-field-container">
                            <IonLabel className="select-field-label">
                                Printer{" "}
                                <span className="required-asterisk">*</span>
                            </IonLabel>
                            <ItemSelectField
                                items={printers?.map((printer: any) => ({
                                    id: printer.id,
                                    url: printer.image_file?.path,
                                    name: printer.name,
                                }))}
                                onSelect={(id) =>
                                    handleSelectChange("printer_id", id)
                                }
                                selectedItem={formData.details.printer_id}
                            />
                            {errors.printer_id && (
                                <div className="error-text">
                                    {errors.printer_id}
                                </div>
                            )}
                        </div>

                        <div className="select-field-container">
                            <IonLabel className="select-field-label">
                                Model{" "}
                                <span className="required-asterisk">*</span>
                            </IonLabel>
                            <ItemSelectField
                                items={models?.map((model: any) => ({
                                    id: model.id,
                                    url: model.image_file?.path,
                                    name: model.name,
                                }))}
                                onSelect={(id) =>
                                    handleSelectChange("model_id", id)
                                }
                                selectedItem={formData.details.model_id}
                            />
                            {errors.model_id && (
                                <div className="error-text">
                                    {errors.model_id}
                                </div>
                            )}
                        </div>

                        <div className="select-field-container">
                            <IonLabel className="select-field-label">
                                Material{" "}
                                <span className="required-asterisk">*</span>
                            </IonLabel>
                            <ItemSelectField
                                items={materials?.map((material: any) => ({
                                    id: material.id,
                                    url: material.image_file?.path,
                                    name: material.name,
                                }))}
                                onSelect={(id) =>
                                    handleSelectChange("material_id", id)
                                }
                                selectedItem={formData.details.material_id}
                            />
                            {errors.material_id && (
                                <div className="error-text">
                                    {errors.material_id}
                                </div>
                            )}
                        </div>

                        <IonItem>
                            <IonLabel position="stacked">
                                Estimated Hours
                            </IonLabel>
                            <IonInput
                                type="number"
                                name="details.estimated_hours"
                                value={formData.details.estimated_hours}
                                onIonInput={handleChange}
                                min="0.5"
                                step="0.5"
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
                                            scheduled_date: Array.isArray(value)
                                                ? value[0]
                                                : value || prev.scheduled_date,
                                        }));
                                    }
                                }}
                            />
                        </IonItem>

                        <IonItem lines="none">
                            <IonCheckbox
                                slot="start"
                                name="is_required"
                                checked={formData.is_required}
                                onIonChange={handleChange}
                            />
                            <IonLabel>Required Task</IonLabel>
                        </IonItem>

                        <IonItem lines="none">
                            <IonCheckbox
                                slot="start"
                                name="is_open"
                                checked={formData.is_open}
                                onIonChange={handleChange}
                            />
                            <IonLabel>Open to All Users</IonLabel>
                        </IonItem>
                    </IonList>

                    <div className="modal-button-container">
                        <IonButton
                            expand="block"
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            {isLoading ? "Creating..." : "Create Task"}
                        </IonButton>
                        <IonButton
                            expand="block"
                            fill="outline"
                            color="medium"
                            onClick={handleClose}
                        >
                            Cancel
                        </IonButton>
                    </div>
                </div>
            </IonModal>

            <IonToast
                isOpen={showToast}
                onDidDismiss={() => setShowToast(false)}
                message={toastMessage}
                duration={3000}
                position="top"
                color={toastMessage.includes("success") ? "success" : "danger"}
            />
        </>
    );
};

export default CreateTaskModal;
