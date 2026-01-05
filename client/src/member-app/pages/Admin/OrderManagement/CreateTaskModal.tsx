import React, { useState } from "react";
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonDatetime,
    IonText,
    IonIcon,
    IonLoading,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { Order } from "./types";
import { useCreateTaskMutation } from "../../../../member-app/features/tasks/tasksApi";
import "./CreateTaskModal.css";

interface CreateTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    order: Order | null;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
    isOpen,
    onClose,
    order,
}) => {
    const [createTask, { isLoading }] = useCreateTaskMutation();

    const [taskData, setTaskData] = useState({
        title: "",
        type: "printing" as
            | "printing"
            | "assembly"
            | "packaging"
            | "shipping"
            | "other",
        scheduled_date: new Date().toISOString(),
        is_required: true,
        is_open: true,
    });

    const [notes, setNotes] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        if (!taskData.title.trim()) {
            setError("Task title is required");
            return;
        }

        if (!order) {
            setError("No order selected");
            return;
        }

        try {
            const details = {
                order_id: order.id,
                order_key: order.key,
                customer_email: order.email,
                customer_name: `${order.first_name} ${order.last_name}`,
                delivery_method: order.delivery_method,
                notes: notes,
                order_items: order.order_items?.map((item) => ({
                    product_id: item.product_id,
                    variant_id: item.product_variant_id,
                    quantity: item.quantity,
                })),
            };

            await createTask({
                ...taskData,
                details,
            }).unwrap();

            // Reset form
            setTaskData({
                title: "",
                type: "printing",
                scheduled_date: new Date().toISOString(),
                is_required: true,
                is_open: true,
            });
            setNotes("");
            setError("");
            onClose();
        } catch (err) {
            setError("Failed to create task. Please try again.");
            console.error("Task creation error:", err);
        }
    };

    const handleClose = () => {
        setError("");
        onClose();
    };

    return (
        <IonModal isOpen={isOpen} onDidDismiss={handleClose}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Create Task from Order</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleClose}>
                            <IonIcon icon={closeOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="task-modal-content">
                <div className="task-form">
                    {order && (
                        <div className="order-info-section">
                            <h3>Order Information</h3>
                            <IonText>
                                <p>
                                    <strong>Order ID:</strong> #{order.id}
                                </p>
                                <p>
                                    <strong>Customer:</strong>{" "}
                                    {order.first_name} {order.last_name}
                                </p>
                                <p>
                                    <strong>Email:</strong> {order.email}
                                </p>
                                <p>
                                    <strong>Delivery:</strong>{" "}
                                    {order.delivery_method}
                                </p>
                            </IonText>
                        </div>
                    )}

                    {error && (
                        <IonText color="danger">
                            <p className="error-message">{error}</p>
                        </IonText>
                    )}

                    <IonItem>
                        <IonLabel position="stacked">Task Title *</IonLabel>
                        <IonInput
                            value={taskData.title}
                            onIonInput={(e) =>
                                setTaskData({
                                    ...taskData,
                                    title: e.detail.value!,
                                })
                            }
                            placeholder="e.g., Print order items for #123"
                        />
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Task Type</IonLabel>
                        <IonSelect
                            value={taskData.type}
                            onIonChange={(e) =>
                                setTaskData({
                                    ...taskData,
                                    type: e.detail.value,
                                })
                            }
                        >
                            <IonSelectOption value="printing">
                                Printing
                            </IonSelectOption>
                            <IonSelectOption value="assembly">
                                Assembly
                            </IonSelectOption>
                            <IonSelectOption value="packaging">
                                Packaging
                            </IonSelectOption>
                            <IonSelectOption value="shipping">
                                Shipping
                            </IonSelectOption>
                            <IonSelectOption value="other">
                                Other
                            </IonSelectOption>
                        </IonSelect>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Scheduled Date</IonLabel>
                        <IonDatetime
                            value={taskData.scheduled_date}
                            onIonChange={(e) =>
                                setTaskData({
                                    ...taskData,
                                    scheduled_date: e.detail.value as string,
                                })
                            }
                            presentation="date-time"
                        />
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">Notes</IonLabel>
                        <IonTextarea
                            value={notes}
                            onIonInput={(e) => setNotes(e.detail.value!)}
                            placeholder="Add any additional notes for this task..."
                            rows={4}
                        />
                    </IonItem>

                    <div className="modal-actions">
                        <IonButton
                            expand="block"
                            color="medium"
                            onClick={handleClose}
                        >
                            Cancel
                        </IonButton>
                        <IonButton
                            expand="block"
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            Create Task
                        </IonButton>
                    </div>
                </div>
            </IonContent>

            <IonLoading isOpen={isLoading} message="Creating task..." />
        </IonModal>
    );
};

export default CreateTaskModal;
