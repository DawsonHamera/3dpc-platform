import { useEffect, useState } from "react";
import {
    useCreateModelMutation,
    useDeleteModelMutation,
    useUpdateModelMutation,
} from "../../../../member-app/features/models/modelsApi";
import "./Modal.css";
import WorkstationFileSelector from "../components/WorkstationFileSelector";

interface ModelModalProps {
    isOpen: boolean;
    onClose: () => void;
    model?: any;
}

const ModelModal: React.FC<ModelModalProps> = ({ isOpen, onClose, model }) => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        file_id: undefined as number | undefined,
        image_file_id: undefined as number | undefined,
    });

    const [errors, setErrors] = useState({ name: "", file_id: "" });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const [createModel, { isLoading: isAdding }] = useCreateModelMutation();
    const [updateModel, { isLoading: isUpdating }] = useUpdateModelMutation();
    const [deleteModel, { isLoading: isDeleting }] = useDeleteModelMutation();

    useEffect(() => {
        if (model) {
            setFormData({
                name: model.name || "",
                description: model.description || "",
                file_id: model.file_id || undefined,
                image_file_id: model.image_file_id || undefined,
            });
        } else {
            setFormData({
                name: "",
                description: "",
                file_id: undefined,
                image_file_id: undefined,
            });
        }
    }, [model, isOpen]);

    const validateForm = () => {
        const newErrors = { name: "", file_id: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.file_id) {
            newErrors.file_id = "Model file is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            if (model) {
                await updateModel({ id: model.id, ...formData }).unwrap();
                setToastMessage("Model updated successfully!");
            } else {
                await createModel({
                    ...formData,
                    file_id: formData.file_id!,
                }).unwrap();
                setToastMessage("Model added successfully!");
            }
            setShowToast(true);
            setTimeout(onClose, 1500);
        } catch (error) {
            setToastMessage("Failed to save model");
            setShowToast(true);
        }
    };

    const handleDelete = async () => {
        if (
            !model ||
            !window.confirm("Are you sure you want to delete this model?")
        )
            return;

        try {
            await deleteModel(model.id).unwrap();
            setToastMessage("Model deleted successfully!");
            setShowToast(true);
            setTimeout(onClose, 1500);
        } catch (error) {
            setToastMessage("Failed to delete model");
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
                    <h2>{model ? "Edit Model" : "Add Model"}</h2>
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
                            placeholder="Enter model name"
                            className={errors.name ? "error" : ""}
                        />
                        {errors.name && (
                            <span className="error-text">{errors.name}</span>
                        )}
                    </div>

                    <WorkstationFileSelector
                        selectedFileId={formData.file_id}
                        onFileSelect={(fileId: number | undefined) =>
                            setFormData({ ...formData, file_id: fileId })
                        }
                        fileType="model"
                        label="Model File *"
                        allowUpload={true}
                    />
                    {errors.file_id && (
                        <div className="modal-field">
                            <span className="error-text">{errors.file_id}</span>
                        </div>
                    )}

                    <WorkstationFileSelector
                        selectedFileId={formData.image_file_id}
                        onFileSelect={(fileId: number | undefined) =>
                            setFormData({ ...formData, image_file_id: fileId })
                        }
                        fileType="image"
                        label="Model Image"
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
                                : model
                                ? "Update"
                                : "Add"}{" "}
                            Model
                        </button>
                        {model && (
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

export default ModelModal;
