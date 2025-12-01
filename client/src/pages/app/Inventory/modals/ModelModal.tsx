import React, { useState, useEffect } from "react";
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonInput,
    IonButton,
    IonButtons,
    IonTextarea,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { Model } from "../../../../types/inventory";
import FileSelector from "../components/FileSelector";
import "./Modal.css";

interface ModelModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
    initialData?: Model | null;
}

const ModelModal: React.FC<ModelModalProps> = ({
    isOpen,
    onClose,
    onSave,
    initialData,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        file_id: 0,
        image_file_id: undefined as number | undefined,
    });

    const [errors, setErrors] = useState({
        name: "",
        file_id: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || "",
                description: initialData.description || "",
                file_id: initialData.file_id || 0,
                image_file_id: initialData.image_file_id || undefined,
            });
        } else {
            setFormData({
                name: "",
                description: "",
                file_id: 0,
                image_file_id: undefined,
            });
        }
        setErrors({ name: "", file_id: "" });
    }, [initialData, isOpen]);

    const validateForm = () => {
        const newErrors = { name: "", file_id: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.file_id || formData.file_id === 0) {
            newErrors.file_id = "Model file is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSave = () => {
        if (validateForm()) {
            const dataToSave: any = {
                name: formData.name,
                description: formData.description || undefined,
                file_id: formData.file_id,
            };

            if (formData.image_file_id) {
                dataToSave.image_file_id = formData.image_file_id;
            }

            onSave(dataToSave);
        }
    };

    const handleClose = () => {
        setFormData({
            name: "",
            description: "",
            file_id: 0,
            image_file_id: undefined,
        });
        setErrors({ name: "", file_id: "" });
        onClose();
    };

    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={handleClose}
            className="inventory-modal"
        >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        {initialData ? "Edit Model" : "Create Model"}
                    </IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleClose}>
                            <IonIcon icon={closeOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <div className="inventory-modal-content ion-padding">
                <IonList>
                    <IonItem className={errors.name ? "ion-invalid" : ""}>
                        <IonLabel position="stacked">
                            Name <span className="required-asterisk">*</span>
                        </IonLabel>
                        <IonInput
                            value={formData.name}
                            onIonInput={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.detail.value!,
                                })
                            }
                            placeholder="Enter model name"
                        />
                        {errors.name && (
                            <div className="error-text">{errors.name}</div>
                        )}
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Description</IonLabel>
                        <IonTextarea
                            value={formData.description}
                            onIonInput={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.detail.value!,
                                })
                            }
                            placeholder="Enter model description"
                            rows={4}
                        />
                    </IonItem>

                    <FileSelector
                        selectedFileId={formData.file_id || undefined}
                        onFileSelect={(fileId) =>
                            setFormData({
                                ...formData,
                                file_id: fileId || 0,
                            })
                        }
                        fileType="model"
                        label="Model File *"
                        allowUpload={true}
                    />
                    {errors.file_id && (
                        <div
                            className="error-text"
                            style={{ marginTop: "-8px", marginBottom: "16px" }}
                        >
                            {errors.file_id}
                        </div>
                    )}

                    <FileSelector
                        selectedFileId={formData.image_file_id}
                        onFileSelect={(fileId) =>
                            setFormData({
                                ...formData,
                                image_file_id: fileId,
                            })
                        }
                        fileType="image"
                        label="Preview Image (Optional)"
                        allowUpload={true}
                    />
                </IonList>

                <div className="modal-button-container">
                    <IonButton expand="block" onClick={handleSave}>
                        {initialData ? "Update Model" : "Create Model"}
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
    );
};

export default ModelModal;
