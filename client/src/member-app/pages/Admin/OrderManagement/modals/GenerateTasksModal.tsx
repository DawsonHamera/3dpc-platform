import {
    IonButton,
    IonButtons,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonSpinner,
    IonText,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { closeOutline, warningOutline } from "ionicons/icons";
import React from "react";
import {
    type Order,
    type OrderItem,
} from "../../../../../shared/features/orders/ordersApi";
import { type Printer } from "../../../../../shared/features/printers/printersApi";
import { formatCurrency } from "../utils";
import styles from "./GenerateTasksModal.module.css";

interface GenerateTasksModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => Promise<void> | void;
    isSubmitting: boolean;
    order: Order;
    orderItemCount: number;
    linkedTaskCount: number;
    remainingTaskCapacity: number;
    eligibleOrderItems: OrderItem[];
    printers: Printer[];
    selectedPrinterByOrderItemId: Record<number, number>;
    onPrinterSelect: (orderItemId: number, printerId: number) => void;
}

const GenerateTasksModal: React.FC<GenerateTasksModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    isSubmitting,
    order,
    orderItemCount,
    linkedTaskCount,
    remainingTaskCapacity,
    eligibleOrderItems,
    printers,
    selectedPrinterByOrderItemId,
    onPrinterSelect,
}) => {
    const hasPrinterSelectionForAllEligibleItems = eligibleOrderItems.every(
        (item) => typeof selectedPrinterByOrderItemId[item.id] === "number",
    );

    const canSubmit =
        orderItemCount > 0 &&
        remainingTaskCapacity > 0 &&
        hasPrinterSelectionForAllEligibleItems &&
        !isSubmitting;

    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={onClose}
            canDismiss={!isSubmitting}
        >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Generate Tasks</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onClose} disabled={isSubmitting}>
                            <IonIcon icon={closeOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className={styles.content}>
                <div className={styles.container}>
                    <IonText color="medium">
                        <p className={styles.description}>
                            Select a printer for each order item. Model and
                            material will be inferred automatically from the
                            selected product variant.
                        </p>
                    </IonText>

                    <IonList inset>
                        <IonItem>
                            <IonLabel>
                                <h3>Order</h3>
                                <p>#{order.id}</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <h3>Customer</h3>
                                <p>
                                    {order.first_name} {order.last_name}
                                </p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <h3>Total</h3>
                                <p>
                                    {formatCurrency(Number(order.total_price))}
                                </p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <h3>Linked Tasks</h3>
                                <p>{linkedTaskCount}</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <h3>Remaining Tasks To Generate</h3>
                                <p>{remainingTaskCapacity}</p>
                            </IonLabel>
                        </IonItem>
                        <IonItem>
                            <IonLabel>
                                <h3>Order Items</h3>
                                <p>{orderItemCount}</p>
                            </IonLabel>
                        </IonItem>
                    </IonList>

                    {eligibleOrderItems.length > 0 && (
                        <div className={styles.assignmentsSection}>
                            <IonText color="medium">
                                <p className={styles.assignmentsTitle}>
                                    Printer Assignment
                                </p>
                            </IonText>
                            <IonList inset>
                                {eligibleOrderItems.map((item) => {
                                    const selectedPrinterId =
                                        selectedPrinterByOrderItemId[item.id];

                                    return (
                                        <IonItem key={item.id}>
                                            <IonLabel>
                                                <h3>
                                                    {item.product?.name ||
                                                        "Product"}
                                                    {item.product_variant?.name
                                                        ? ` - ${item.product_variant.name}`
                                                        : ""}
                                                </h3>
                                                <p>
                                                    Item #{item.id} | Qty{" "}
                                                    {item.quantity}
                                                </p>
                                            </IonLabel>
                                            <IonSelect
                                                aria-label={`Select printer for order item ${item.id}`}
                                                interface="popover"
                                                placeholder="Select printer"
                                                value={selectedPrinterId}
                                                onIonChange={(event) =>
                                                    onPrinterSelect(
                                                        item.id,
                                                        Number(
                                                            event.detail.value,
                                                        ),
                                                    )
                                                }
                                            >
                                                {printers.map((printer) => (
                                                    <IonSelectOption
                                                        key={printer.id}
                                                        value={printer.id}
                                                    >
                                                        {printer.name}
                                                    </IonSelectOption>
                                                ))}
                                            </IonSelect>
                                        </IonItem>
                                    );
                                })}
                            </IonList>
                        </div>
                    )}

                    {(orderItemCount === 0 || remainingTaskCapacity === 0) && (
                        <div className={styles.warning}>
                            <IonIcon icon={warningOutline} />
                            <IonText color="warning">
                                {orderItemCount === 0
                                    ? "This order has no items. Tasks cannot be generated."
                                    : "All order items already have linked print tasks. No additional tasks are needed."}
                            </IonText>
                        </div>
                    )}

                    {eligibleOrderItems.length > 0 &&
                        !hasPrinterSelectionForAllEligibleItems && (
                            <div className={styles.warning}>
                                <IonIcon icon={warningOutline} />
                                <IonText color="warning">
                                    Please select a printer for each order item
                                    before generating tasks.
                                </IonText>
                            </div>
                        )}
                </div>
            </IonContent>

            <IonFooter>
                <IonToolbar>
                    <IonButtons slot="end">
                        <IonButton
                            fill="outline"
                            onClick={onClose}
                            disabled={isSubmitting}
                        >
                            Cancel
                        </IonButton>
                        <IonButton
                            color="primary"
                            onClick={onConfirm}
                            disabled={!canSubmit}
                        >
                            {isSubmitting && (
                                <IonSpinner slot="start" name="crescent" />
                            )}
                            Confirm Generate
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonFooter>
        </IonModal>
    );
};

export default GenerateTasksModal;
