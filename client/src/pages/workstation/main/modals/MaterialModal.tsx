import { useState, useEffect } from "react";
import {
    useCreateMaterialMutation,
    useUpdateMaterialMutation,
    useDeleteMaterialMutation,
} from "../../../../features/materials/materialsApi";
import { MaterialType } from "../../../../types/inventory";
import WorkstationFileSelector from "../components/WorkstationFileSelector";
import "./Modal.css";

interface MaterialModalProps {
    isOpen: boolean;
    onClose: () => void;
    material?: any;
}

const MATERIAL_TYPES = [
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
    material,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        type: "PLA" as MaterialType,
        description: "",
        quantity: 0,
        color: "",
        image_file_id: undefined as number | undefined,
    });

    const [errors, setErrors] = useState({ name: "", type: "", quantity: "" });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const [createMaterial, { isLoading: isAdding }] =
        useCreateMaterialMutation();
    const [updateMaterial, { isLoading: isUpdating }] =
        useUpdateMaterialMutation();
    const [deleteMaterial, { isLoading: isDeleting }] =
        useDeleteMaterialMutation();

    useEffect(() => {
        if (material) {
            setFormData({
                name: material.name || "",
                type: (material.type || "PLA") as MaterialType,
                description: material.description || "",
                quantity: material.quantity || 0,
                color: material.color || "",
                image_file_id: material.image_file_id || undefined,
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
    }, [material, isOpen]);

    const validateForm = () => {
        const newErrors = { name: "", type: "", quantity: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.type) {
            newErrors.type = "Type is required";
            isValid = false;
        }

        if (formData.quantity < 0) {
            newErrors.quantity = "Quantity cannot be negative";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            if (material) {
                await updateMaterial({ id: material.id, ...formData }).unwrap();
                setToastMessage("Material updated successfully!");
            } else {
                await createMaterial(formData).unwrap();
                setToastMessage("Material added successfully!");
            }
            setShowToast(true);
            setTimeout(onClose, 1500);
        } catch (error) {
            setToastMessage("Failed to save material");
            setShowToast(true);
        }
    };

    const handleDelete = async () => {
        if (
            !material ||
            !window.confirm("Are you sure you want to delete this material?")
        )
            return;

        try {
            await deleteMaterial(material.id).unwrap();
            setToastMessage("Material deleted successfully!");
            setShowToast(true);
            setTimeout(onClose, 1500);
        } catch (error) {
            setToastMessage("Failed to delete material");
            setShowToast(true);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h2>{material ? "Edit Material" : "Add Material"}</h2>
                    <button className="modal-close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="modal-field">
                        <label>
                            Name <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                            placeholder="Enter material name"
                            className={errors.name ? "error" : ""}
                        />
                        {errors.name && (
                            <span className="error-text">{errors.name}</span>
                        )}
                    </div>

                    <div className="modal-field">
                        <label>
                            Type <span className="required">*</span>
                        </label>
                        <select
                            value={formData.type}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    type: e.target.value as MaterialType,
                                })
                            }
                            className={errors.type ? "error" : ""}
                        >
                            {MATERIAL_TYPES.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        {errors.type && (
                            <span className="error-text">{errors.type}</span>
                        )}
                    </div>

                    <div className="modal-field">
                        <label>
                            Quantity <span className="required">*</span>
                        </label>
                        <input
                            type="number"
                            value={formData.quantity}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    quantity: parseInt(e.target.value) || 0,
                                })
                            }
                            placeholder="Enter quantity"
                            min="0"
                            className={errors.quantity ? "error" : ""}
                        />
                        {errors.quantity && (
                            <span className="error-text">
                                {errors.quantity}
                            </span>
                        )}
                    </div>

                    <div className="modal-field">
                        <label>Color</label>
                        <input
                            type="text"
                            value={formData.color}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    color: e.target.value,
                                })
                            }
                            placeholder="Enter color (e.g., #FF5733 or Red)"
                        />
                    </div>

                    <WorkstationFileSelector
                        selectedFileId={formData.image_file_id}
                        onFileSelect={(fileId: number | undefined) =>
                            setFormData({ ...formData, image_file_id: fileId })
                        }
                        fileType="image"
                        label="Material Image"
                        allowUpload={true}
                    />

                    <div className="modal-field">
                        <label>Description</label>
                        <textarea
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                            placeholder="Enter description"
                            rows={4}
                        />
                    </div>

                    <div className="modal-actions">
                        <button
                            type="submit"
                            className="modal-button primary"
                            disabled={isAdding || isUpdating}
                        >
                            {isAdding || isUpdating
                                ? "Saving..."
                                : material
                                ? "Update"
                                : "Add"}{" "}
                            Material
                        </button>
                        {material && (
                            <button
                                type="button"
                                className="modal-button danger"
                                onClick={handleDelete}
                                disabled={isDeleting}
                            >
                                {isDeleting ? "Deleting..." : "Delete"}
                            </button>
                        )}
                        <button
                            type="button"
                            className="modal-button secondary"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>

                {showToast && <div className="modal-toast">{toastMessage}</div>}
            </div>
        </div>
    );
};

export default MaterialModal;
