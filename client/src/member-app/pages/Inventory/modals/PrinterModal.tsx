import {
    IonButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { Printer, PrinterStatus } from "../../../../shared/types";
import FileSelector from "../components/FileSelector";
import "./Modal.css";

interface PrinterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: any) => void;
    initialData?: Printer | null;
}

const PRINTER_STATUSES: PrinterStatus[] = [
    "available",
    "queued",
    "in_use",
    "maintenance",
    "out_of_order",
];

const PrinterModal: React.FC<PrinterModalProps> = ({
    isOpen,
    onClose,
    onSave,
    initialData,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        model: "",
        location: "",
        status: "available" as PrinterStatus,
        loaded_material_id: undefined as number | undefined,
        image_file_id: undefined as number | undefined,
    });

    const [errors, setErrors] = useState({
        name: "",
        model: "",
        status: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || "",
                model: initialData.model || "",
                location: initialData.location || "",
                status: initialData.status || "available",
                loaded_material_id: initialData.loaded_material_id || undefined,
                image_file_id: initialData.image_file_id || undefined,
            });
        } else {
            setFormData({
                name: "",
                model: "",
                location: "",
                status: "available",
                loaded_material_id: undefined,
                image_file_id: undefined,
            });
        }
        setErrors({ name: "", model: "", status: "" });
    }, [initialData, isOpen]);

    const validateForm = () => {
        const newErrors = { name: "", model: "", status: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.model.trim()) {
            newErrors.model = "Model is required";
            isValid = false;
        }

        if (!formData.status) {
            newErrors.status = "Status is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSave = () => {
        if (validateForm()) {
            const dataToSave: any = {
                name: formData.name,
                model: formData.model,
                status: formData.status,
                location: formData.location || undefined,
            };

            if (formData.loaded_material_id) {
                dataToSave.loaded_material_id = formData.loaded_material_id;
            }

            if (formData.image_file_id) {
                dataToSave.image_file_id = formData.image_file_id;
            }

            onSave(dataToSave);
        }
    };

    const handleClose = () => {
        setFormData({
            name: "",
            model: "",
            location: "",
            status: "available",
            loaded_material_id: undefined,
            image_file_id: undefined,
        });
        setErrors({ name: "", model: "", status: "" });
        onClose();
    };

    const formatStatusLabel = (status: string) => {
        return status
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
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
                        {initialData ? "Edit Printer" : "Create Printer"}
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
                            placeholder="Enter printer name"
                        />
                        {errors.name && (
                            <div className="error-text">{errors.name}</div>
                        )}
                    </IonItem>

                    <IonItem className={errors.model ? "ion-invalid" : ""}>
                        <IonLabel position="stacked">
                            Model <span className="required-asterisk">*</span>
                        </IonLabel>
                        <IonInput
                            value={formData.model}
                            onIonInput={(e) =>
                                setFormData({
                                    ...formData,
                                    model: e.detail.value!,
                                })
                            }
                            placeholder="Enter printer model"
                        />
                        {errors.model && (
                            <div className="error-text">{errors.model}</div>
                        )}
                    </IonItem>

                    <IonItem className={errors.status ? "ion-invalid" : ""}>
                        <IonLabel position="stacked">
                            Status <span className="required-asterisk">*</span>
                        </IonLabel>
                        <IonSelect
                            value={formData.status}
                            onIonChange={(e) =>
                                setFormData({
                                    ...formData,
                                    status: e.detail.value,
                                })
                            }
                            placeholder="Select printer status"
                        >
                            {PRINTER_STATUSES.map((status) => (
                                <IonSelectOption key={status} value={status}>
                                    {formatStatusLabel(status)}
                                </IonSelectOption>
                            ))}
                        </IonSelect>
                        {errors.status && (
                            <div className="error-text">{errors.status}</div>
                        )}
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Location</IonLabel>
                        <IonInput
                            value={formData.location}
                            onIonInput={(e) =>
                                setFormData({
                                    ...formData,
                                    location: e.detail.value!,
                                })
                            }
                            placeholder="Enter printer location"
                        />
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">
                            Loaded Material ID (Optional)
                        </IonLabel>
                        <IonInput
                            type="number"
                            value={formData.loaded_material_id}
                            onIonInput={(e) =>
                                setFormData({
                                    ...formData,
                                    loaded_material_id: e.detail.value
                                        ? parseInt(e.detail.value, 10)
                                        : undefined,
                                })
                            }
                            placeholder="Enter material ID"
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
                        {initialData ? "Update Printer" : "Create Printer"}
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

export default PrinterModal;
