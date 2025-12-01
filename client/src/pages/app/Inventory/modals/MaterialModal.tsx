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
    IonSelect,
    IonSelectOption,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { Material, MaterialType } from "../../../../types/inventory";
import FileSelector from "../components/FileSelector";
import "./Modal.css";

interface MaterialModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
    initialData?: Material | null;
}

const MATERIAL_TYPES: MaterialType[] = [
    "PLA",
    "ABS",
    "PETG",
    "NYLON",
    "TPU",
    "WOODFILL",
    "METALFILL",
    "CARBONFIBER",
    "HIPS",
    "PVA",
    "POLYCARBONATE",
    "RINO",
    "STANDARD_RESIN",
    "TOUGH_RESIN",
    "FLEXIBLE_RESIN",
    "OTHER",
];

const MaterialModal: React.FC<MaterialModalProps> = ({
    isOpen,
    onClose,
    onSave,
    initialData,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "PLA" as MaterialType,
        description: "",
        quantity: 0,
        color: "",
        image_file_id: undefined as number | undefined,
    });

    const [errors, setErrors] = useState({
        name: "",
        type: "",
        quantity: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || "",
                type: initialData.type || "PLA",
                description: initialData.description || "",
                quantity: initialData.quantity || 0,
                color: initialData.color || "",
                image_file_id: initialData.image_file_id || undefined,
            });
        } else {
            setFormData({
                name: "",
                type: "PLA",
                description: "",
                quantity: 0,
                color: "",
                image_file_id: undefined,
            });
        }
        setErrors({ name: "", type: "", quantity: "" });
    }, [initialData, isOpen]);

    const validateForm = () => {
        const newErrors = { name: "", type: "", quantity: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.type) {
            newErrors.type = "Material type is required";
            isValid = false;
        }

        if (formData.quantity < 0) {
            newErrors.quantity = "Quantity cannot be negative";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSave = () => {
        if (validateForm()) {
            const dataToSave: any = {
                name: formData.name,
                type: formData.type,
                quantity: formData.quantity,
                description: formData.description || undefined,
                color: formData.color || undefined,
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
            type: "PLA",
            description: "",
            quantity: 0,
            color: "",
            image_file_id: undefined,
        });
        setErrors({ name: "", type: "", quantity: "" });
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
                        {initialData ? "Edit Material" : "Create Material"}
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
                            placeholder="Enter material name"
                        />
                        {errors.name && (
                            <div className="error-text">{errors.name}</div>
                        )}
                    </IonItem>

                    <IonItem className={errors.type ? "ion-invalid" : ""}>
                        <IonLabel position="stacked">
                            Type <span className="required-asterisk">*</span>
                        </IonLabel>
                        <IonSelect
                            value={formData.type}
                            onIonChange={(e) =>
                                setFormData({
                                    ...formData,
                                    type: e.detail.value,
                                })
                            }
                            placeholder="Select material type"
                        >
                            {MATERIAL_TYPES.map((type) => (
                                <IonSelectOption key={type} value={type}>
                                    {type}
                                </IonSelectOption>
                            ))}
                        </IonSelect>
                        {errors.type && (
                            <div className="error-text">{errors.type}</div>
                        )}
                    </IonItem>

                    <IonItem className={errors.quantity ? "ion-invalid" : ""}>
                        <IonLabel position="stacked">
                            Quantity{" "}
                            <span className="required-asterisk">*</span>
                        </IonLabel>
                        <IonInput
                            type="number"
                            value={formData.quantity}
                            onIonInput={(e) =>
                                setFormData({
                                    ...formData,
                                    quantity:
                                        parseInt(e.detail.value!, 10) || 0,
                                })
                            }
                            placeholder="Enter quantity"
                            min="0"
                        />
                        {errors.quantity && (
                            <div className="error-text">{errors.quantity}</div>
                        )}
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Color</IonLabel>
                        <IonInput
                            type="text"
                            value={formData.color}
                            onIonInput={(e) =>
                                setFormData({
                                    ...formData,
                                    color: e.detail.value!,
                                })
                            }
                            placeholder="Enter color (e.g., #FF5733 or Red)"
                        />
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
                            placeholder="Enter material description"
                            rows={4}
                        />
                    </IonItem>

                    <FileSelector
                        selectedFileId={formData.image_file_id}
                        onFileSelect={(fileId: number | undefined) =>
                            setFormData({
                                ...formData,
                                image_file_id: fileId,
                            })
                        }
                        fileType="image"
                        label="Image File"
                        allowUpload={true}
                    />
                </IonList>

                <div className="modal-button-container">
                    <IonButton expand="block" onClick={handleSave}>
                        {initialData ? "Update Material" : "Create Material"}
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

export default MaterialModal;
