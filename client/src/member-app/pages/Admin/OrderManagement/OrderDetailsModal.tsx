import React, { useState } from "react";
import {
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonIcon,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonBadge,
    IonList,
    IonItem,
    IonLabel,
    IonSpinner,
    IonImg,
} from "@ionic/react";
import {
    closeOutline,
    mailOutline,
    personOutline,
    calendarOutline,
} from "ionicons/icons";
import { Order } from "./types";
import { useGetOrderItemsQuery } from "../../../../member-app/features/orders/ordersApi";
import { formatCurrency, formatDate, getStatusColor } from "./utils";
import "./OrderDetailsModal.css";

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
    const { data: orderItems, isLoading } = useGetOrderItemsQuery(order?.id, {
        skip: !order?.id,
    });

    console.log("Order Items:", orderItems);

    if (!order) return null;

    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Order Details - #{order.id}</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={onClose}>
                            <IonIcon icon={closeOutline} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent className="order-details-content">
                <div className="details-container">
                    <IonCard>
                        <IonCardHeader>
                            <div className="details-header">
                                <IonCardTitle>Order</IonCardTitle>
                                <IonBadge color={getStatusColor(order.status)}>
                                    {order.status}
                                </IonBadge>
                            </div>
                        </IonCardHeader>
                        <IonCardContent>
                            <div className="info-grid">
                                <div className="info-item">
                                    <IonIcon
                                        icon={personOutline}
                                        className="info-icon"
                                    />
                                    <div>
                                        <div className="info-label">
                                            Customer Name
                                        </div>
                                        <div className="info-value">
                                            {order.first_name} {order.last_name}
                                        </div>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <IonIcon
                                        icon={mailOutline}
                                        className="info-icon"
                                    />
                                    <div>
                                        <div className="info-label">Email</div>
                                        <a
                                            href={`mailto:${order.email}`}
                                            className="info-value email-link"
                                        >
                                            {order.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <IonIcon
                                        icon={calendarOutline}
                                        className="info-icon"
                                    />
                                    <div>
                                        <div className="info-label">
                                            Order Date
                                        </div>
                                        <div className="info-value">
                                            {formatDate(order.created_at)}
                                        </div>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-label">Order Key</div>
                                    <div className="info-value key-value">
                                        {order.key}
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-label">
                                        Delivery Method
                                    </div>
                                    <div className="info-value">
                                        {order.delivery_method}
                                    </div>
                                </div>

                                <div className="info-item">
                                    <div className="info-label">
                                        Total Price
                                    </div>
                                    <div className="info-value price-value">
                                        {formatCurrency(
                                            Number(order.total_price)
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
                                <div className="loading-container">
                                    <IonSpinner />
                                    <IonText>Loading order items...</IonText>
                                </div>
                            ) : orderItems && orderItems.length > 0 ? (
                                <IonList>
                                    {orderItems.map(
                                        (item: any, index: number) => (
                                            <IonItem
                                                key={index}
                                                className="order-item-detail"
                                            >
                                                <IonImg
                                                    src={
                                                        item.product_variant
                                                            ?.image?.path
                                                    }
                                                    alt="Item Image"
                                                    className="item-image"
                                                />
                                                <IonLabel>
                                                    <div className="item-info">
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
                                                                    ?.price || 0
                                                            )}
                                                        </p>
                                                        <IonBadge
                                                            color={getStatusColor(
                                                                item.status
                                                            )}
                                                            className="item-status"
                                                        >
                                                            {item.status}
                                                        </IonBadge>
                                                    </div>
                                                </IonLabel>
                                                <div
                                                    slot="end"
                                                    className="item-total"
                                                >
                                                    {formatCurrency(
                                                        (item.product_variant
                                                            ?.price || 0) *
                                                            item.quantity
                                                    )}
                                                </div>
                                            </IonItem>
                                        )
                                    )}
                                </IonList>
                            ) : (
                                <IonText color="medium">
                                    <p className="no-items">
                                        No items found for this order.
                                    </p>
                                </IonText>
                            )}
                        </IonCardContent>
                    </IonCard>
                </div>
            </IonContent>
        </IonModal>
    );
};

export default OrderDetailsModal;
