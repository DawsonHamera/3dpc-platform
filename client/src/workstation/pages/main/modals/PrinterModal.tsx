import { useEffect, useState } from "react";
import {
    useCreatePrinterMutation,
    useDeletePrinterMutation,
    useGetMaterialsQuery,
    useUpdatePrinterMutation,
} from "../../../../shared/features";
import { PrinterStatus } from "../../../../shared/types";
import WorkstationFileSelector from "../components/WorkstationFileSelector";
import "./Modal.css";

interface PrinterModalProps {
    isOpen: boolean;
    onClose: () => void;
    printer?: any;
}

const PrinterModal: React.FC<PrinterModalProps> = ({
    isOpen,
    onClose,
    printer,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        model: "",
        status: "available" as PrinterStatus,
        location: "",
        loaded_material_id: undefined as number | undefined,
        image_file_id: undefined as number | undefined,
        control_interface_url: undefined as string | undefined,
    });

    const [errors, setErrors] = useState({ name: "", model: "" });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const { data: materials } = useGetMaterialsQuery();
    const [createPrinter, { isLoading: isAdding }] = useCreatePrinterMutation();
    const [updatePrinter, { isLoading: isUpdating }] =
        useUpdatePrinterMutation();
    const [deletePrinter, { isLoading: isDeleting }] =
        useDeletePrinterMutation();

    useEffect(() => {
        if (printer) {
            setFormData({
                name: printer.name || "",
                model: printer.model || "",
                status: (printer.status || "available") as PrinterStatus,
                location: printer.location || "",
                loaded_material_id: printer.loaded_material_id || undefined,
                image_file_id: printer.image_file_id || undefined,
                control_interface_url:
                    printer.control_interface_url || undefined,
            });
        } else {
            setFormData({
                name: "",
                model: "",
                status: "available",
                location: "",
                loaded_material_id: undefined,
                image_file_id: undefined,
                control_interface_url: undefined,
            });
        }
    }, [printer, isOpen]);

    const validateForm = () => {
        const newErrors = { name: "", model: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.model.trim()) {
            newErrors.model = "Model is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            if (printer) {
                await updatePrinter({ id: printer.id, ...formData }).unwrap();
                setToastMessage("Printer updated successfully!");
            } else {
                await createPrinter(formData).unwrap();
                setToastMessage("Printer added successfully!");
            }
            setShowToast(true);
            setTimeout(onClose, 1500);
        } catch (error) {
            setToastMessage("Failed to save printer");
            setShowToast(true);
        }
    };

    const handleDelete = async () => {
        if (
            !printer ||
            !window.confirm("Are you sure you want to delete this printer?")
        )
            return;

        try {
            await deletePrinter(printer.id).unwrap();
            setToastMessage("Printer deleted successfully!");
            setShowToast(true);
            setTimeout(onClose, 1500);
        } catch (error) {
            setToastMessage("Failed to delete printer");
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
                    <h2>{printer ? "Edit Printer" : "Add Printer"}</h2>
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
                            placeholder="Enter printer name"
                            className={errors.name ? "error" : ""}
                        />
                        {errors.name && (
                            <span className="error-text">{errors.name}</span>
                        )}
                    </div>

                    <div className="modal-field">
                        <label>
                            Model <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            value={formData.model}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    model: e.target.value,
                                })
                            }
                            placeholder="Enter printer model"
                            className={errors.model ? "error" : ""}
                        />
                        {errors.model && (
                            <span className="error-text">{errors.model}</span>
                        )}
                    </div>

                    <div className="modal-field">
                        <label>Control Interface URL</label>
                        <input
                            type="text"
                            value={formData.control_interface_url}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    control_interface_url: e.target.value,
                                })
                            }
                            placeholder="Enter control interface URL"
                        />
                    </div>

                    <div className="modal-field">
                        <label>Status</label>
                        <select
                            value={formData.status}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    status: e.target.value as PrinterStatus,
                                })
                            }
                        >
                            <option value="available">Available</option>
                            <option value="in_use">In Use</option>
                            <option value="queued">Queued</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="out_of_order">Out of Order</option>
                        </select>
                    </div>

                    <WorkstationFileSelector
                        selectedFileId={formData.image_file_id}
                        onFileSelect={(fileId: number | undefined) =>
                            setFormData({ ...formData, image_file_id: fileId })
                        }
                        fileType="image"
                        label="Printer Image"
                        allowUpload={true}
                    />

                    <div className="modal-field">
                        <label>Location</label>
                        <input
                            type="text"
                            value={formData.location}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    location: e.target.value,
                                })
                            }
                            placeholder="Enter location"
                        />
                    </div>

                    <div className="modal-field">
                        <label>Loaded Material</label>
                        <select
                            value={formData.loaded_material_id || ""}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    loaded_material_id: e.target.value
                                        ? parseInt(e.target.value)
                                        : undefined,
                                })
                            }
                        >
                            <option value="">None</option>
                            {materials?.map((material: any) => (
                                <option key={material.id} value={material.id}>
                                    {material.name} ({material.type})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="modal-actions">
                        <button
                            type="submit"
                            className="modal-button primary"
                            disabled={isAdding || isUpdating}
                        >
                            {isAdding || isUpdating
                                ? "Saving..."
                                : printer
                                  ? "Update"
                                  : "Add"}{" "}
                            Printer
                        </button>
                        {printer && (
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

export default PrinterModal;
