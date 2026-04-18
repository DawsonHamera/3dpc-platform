import {
    IonBadge,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonModal,
    IonSpinner,
    IonText,
    IonTitle,
    IonToast,
    IonToolbar,
} from "@ionic/react";
import { skipToken } from "@reduxjs/toolkit/query";
import {
    calendarOutline,
    closeOutline,
    constructOutline,
    mailOutline,
    personOutline,
} from "ionicons/icons";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../../shared/features/auth/authSlice";
import {
    type Order,
    type OrderItem,
    useGenerateOrderTasksMutation,
    useGetOrderItemsQuery,
} from "../../../../../shared/features/orders/ordersApi";
import { useGetPrintersQuery } from "../../../../../shared/features/printers/printersApi";
import { formatCurrency, formatDate, getStatusColor } from "../utils";
import GenerateTasksModal from "./GenerateTasksModal";
import styles from "./OrderDetailsModal.module.css";

interface OrderDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    order: Order | null;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
    isOpen,
    onClose,
    order,
}) => {
    const currentUser = useSelector(selectCurrentUser);
    const isAdmin = currentUser?.role?.name === "admin";
    const [isGenerateTasksModalOpen, setIsGenerateTasksModalOpen] =
        useState(false);
    const [selectedPrinterByOrderItemId, setSelectedPrinterByOrderItemId] =
        useState<Record<number, number>>({});
    const [isGenerateTasksLocked, setIsGenerateTasksLocked] = useState(false);
    const generateTasksClickLockRef = useRef(false);
    const [toastState, setToastState] = useState<{
        isOpen: boolean;
        message: string;
        color: "success" | "danger";
    }>({
        isOpen: false,
        message: "",
        color: "success",
    });

    const { data: orderItems, isLoading } = useGetOrderItemsQuery(
        order?.id ?? skipToken,
    );
    const { data: printers = [], isLoading: isPrintersLoading } =
        useGetPrintersQuery();
    const [generateOrderTasks, { isLoading: isGeneratingTasks }] =
        useGenerateOrderTasksMutation();

    if (!order) return null;

    const itemCount = orderItems?.length ?? 0;
    const eligibleOrderItems: OrderItem[] = (orderItems ?? []).filter(
        (item) => !item.tasks?.length,
    );
    const linkedTaskCount =
        orderItems?.reduce((sum, item) => sum + (item.tasks?.length ?? 0), 0) ??
        0;
    const remainingTaskCapacity = Math.max(itemCount - linkedTaskCount, 0);
    const canOpenGenerateTasksModal =
        isAdmin &&
        itemCount > 0 &&
        remainingTaskCapacity > 0 &&
        !isLoading &&
        !isPrintersLoading;

    const handlePrinterSelection = (orderItemId: number, printerId: number) => {
        setSelectedPrinterByOrderItemId((current) => ({
            ...current,
            [orderItemId]: printerId,
        }));
    };

    const handleGenerateTasks = async () => {
        if (
            !order?.id ||
            isGeneratingTasks ||
            isGenerateTasksLocked ||
            generateTasksClickLockRef.current ||
            !isAdmin
        ) {
            return;
        }

        generateTasksClickLockRef.current = true;
        setIsGenerateTasksLocked(true);

        try {
            const response = await generateOrderTasks({
                orderId: order.id,
                printer_assignments: eligibleOrderItems.map((item) => ({
                    order_item_id: item.id,
                    printer_id: selectedPrinterByOrderItemId[item.id],
                })),
            }).unwrap();
            const generatedTaskCount =
                typeof response.created_count === "number"
                    ? response.created_count
                    : undefined;
            setToastState({
                isOpen: true,
                message:
                    generatedTaskCount !== undefined
                        ? `Generated ${generatedTaskCount} task${
                              generatedTaskCount === 1 ? "" : "s"
                          } for order #${order.id}.`
                        : `Tasks generated successfully for order #${order.id}.`,
                color: "success",
            });
            setIsGenerateTasksModalOpen(false);
        } catch {
            setToastState({
                isOpen: true,
                message:
                    "Failed to generate tasks for this order. Please try again.",
                color: "danger",
            });
        } finally {
            generateTasksClickLockRef.current = false;
            setIsGenerateTasksLocked(false);
        }
    };

    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={onClose}
            canDismiss={!isGeneratingTasks}
        >
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Order Details - #{order.id}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton
                            onClick={onClose}
                            disabled={isGeneratingTasks}
                        >
                            <IonIcon icon={closeOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className={styles.orderDetailsContent}>
                <div className={styles.detailsContainer}>
                    <IonCard>
                        <IonCardHeader>
                            <div className={styles.detailsHeader}>
                                <IonCardTitle>Order</IonCardTitle>
                                <IonBadge color={getStatusColor(order.status)}>
                                    {order.status}
                                </IonBadge>
                            </div>
                        </IonCardHeader>
                        <IonCardContent>
                            <div className={styles.infoGrid}>
                                <div className={styles.infoItem}>
                                    <IonIcon
                                        icon={personOutline}
                                        className={styles.infoIcon}
                                    />
                                    <div>
                                        <div className={styles.infoLabel}>
                                            Customer Name
                                        </div>
                                        <div className={styles.infoValue}>
                                            {order.first_name} {order.last_name}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <IonIcon
                                        icon={mailOutline}
                                        className={styles.infoIcon}
                                    />
                                    <div>
                                        <div className={styles.infoLabel}>
                                            Email
                                        </div>
                                        <a
                                            href={`mailto:${order.email}`}
                                            className={styles.infoValue}
                                        >
                                            {order.email}
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <IonIcon
                                        icon={calendarOutline}
                                        className={styles.infoIcon}
                                    />
                                    <div>
                                        <div className={styles.infoLabel}>
                                            Order Date
                                        </div>
                                        <div className={styles.infoValue}>
                                            {formatDate(order.created_at)}
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoLabel}>
                                        Order Key
                                    </div>
                                    <div
                                        className={`${styles.infoValue} ${styles.keyValue}`}
                                    >
                                        {order.key}
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoLabel}>
                                        Delivery Method
                                    </div>
                                    <div className={styles.infoValue}>
                                        {order.delivery_method}
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.infoLabel}>
                                        Total Price
                                    </div>
                                    <div
                                        className={`${styles.infoValue} ${styles.priceValue}`}
                                    >
                                        {formatCurrency(
                                            Number(order.total_price),
                                        )}
                                    </div>
                                </div>
                            </div>
                        </IonCardContent>
                    </IonCard>

                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>Order Items</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            {isLoading ? (
                                <div className={styles.loadingContainer}>
                                    <IonSpinner />
                                    <IonText>Loading order items...</IonText>
                                </div>
                            ) : orderItems && orderItems.length > 0 ? (
                                <>
                                    <div className={styles.taskSummaryRow}>
                                        <IonBadge color="tertiary">
                                            Linked Tasks: {linkedTaskCount}
                                        </IonBadge>
                                        <IonBadge
                                            color={
                                                remainingTaskCapacity > 0
                                                    ? "warning"
                                                    : "success"
                                            }
                                        >
                                            Remaining to Generate:{" "}
                                            {remainingTaskCapacity}
                                        </IonBadge>
                                    </div>
                                    <IonList>
                                        {orderItems.map((item, index) => (
                                            <IonItem
                                                key={index}
                                                className={
                                                    styles.orderItemDetail
                                                }
                                            >
                                                <IonImg
                                                    src={
                                                        item.product_variant
                                                            ?.image?.path
                                                    }
                                                    alt="Item Image"
                                                    className={styles.itemImage}
                                                />
                                                <IonLabel>
                                                    <div
                                                        className={
                                                            styles.itemInfo
                                                        }
                                                    >
                                                        <h3>
                                                            {item.product
                                                                ?.name ||
                                                                "Product"}{" "}
                                                            -{" "}
                                                            {item
                                                                .product_variant
                                                                ?.name ||
                                                                "Variant"}
                                                        </h3>
                                                        <p>
                                                            Quantity:{" "}
                                                            {item.quantity} ×{" "}
                                                            {formatCurrency(
                                                                item
                                                                    .product_variant
                                                                    ?.price ||
                                                                    0,
                                                            )}
                                                        </p>
                                                        <IonBadge
                                                            color={getStatusColor(
                                                                item.status,
                                                            )}
                                                            className={
                                                                styles.itemStatus
                                                            }
                                                        >
                                                            {item.status}
                                                        </IonBadge>
                                                        <div
                                                            className={
                                                                styles.itemTaskMeta
                                                            }
                                                        >
                                                            <IonBadge
                                                                color={
                                                                    item.tasks
                                                                        ?.length
                                                                        ? "tertiary"
                                                                        : "medium"
                                                                }
                                                            >
                                                                {item.tasks
                                                                    ?.length
                                                                    ? `Task #${item.tasks[0].id}`
                                                                    : "No task linked"}
                                                            </IonBadge>
                                                            {item.tasks
                                                                ?.length ? (
                                                                <IonText color="medium">
                                                                    <small>
                                                                        {
                                                                            item
                                                                                .tasks[0]
                                                                                .status
                                                                        }
                                                                    </small>
                                                                </IonText>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                </IonLabel>
                                                <div
                                                    slot="end"
                                                    className={styles.itemTotal}
                                                >
                                                    {formatCurrency(
                                                        (item.product_variant
                                                            ?.price || 0) *
                                                            item.quantity,
                                                    )}
                                                </div>
                                            </IonItem>
                                        ))}
                                    </IonList>
                                </>
                            ) : (
                                <IonText color="medium">
                                    <p className={styles.noItems}>
                                        No items found for this order.
                                    </p>
                                </IonText>
                            )}
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    {isAdmin && (
                        <IonButton
                            slot="end"
                            color="primary"
                            fill="solid"
                            onClick={() => setIsGenerateTasksModalOpen(true)}
                            disabled={
                                !canOpenGenerateTasksModal || isGeneratingTasks
                            }
                        >
                            {isGeneratingTasks ? (
                                <IonSpinner slot="start" name="crescent" />
                            ) : (
                                <IonIcon slot="start" icon={constructOutline} />
                            )}
                            Generate Tasks
                        </IonButton>
                    )}
                </IonToolbar>
            </IonFooter>

            {isAdmin && (
                <GenerateTasksModal
                    isOpen={isGenerateTasksModalOpen}
                    onClose={() => setIsGenerateTasksModalOpen(false)}
                    onConfirm={handleGenerateTasks}
                    isSubmitting={isGeneratingTasks || isGenerateTasksLocked}
                    order={order}
                    orderItemCount={itemCount}
                    linkedTaskCount={linkedTaskCount}
                    remainingTaskCapacity={remainingTaskCapacity}
                    eligibleOrderItems={eligibleOrderItems}
                    printers={printers}
                    selectedPrinterByOrderItemId={selectedPrinterByOrderItemId}
                    onPrinterSelect={handlePrinterSelection}
                />
            )}
            <IonToast
                isOpen={toastState.isOpen}
                message={toastState.message}
                color={toastState.color}
                duration={3000}
                position="top"
                onDidDismiss={() =>
                    setToastState((current) => ({ ...current, isOpen: false }))
                }
            />
        </IonModal>
    );
};

export default OrderDetailsModal;
