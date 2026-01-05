import {
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonChip,
    IonIcon,
    IonLabel,
    IonText,
} from "@ionic/react";
import {
    addCircleOutline,
    calendarOutline,
    cartOutline,
    eyeOutline,
    mailOutline,
    personOutline,
} from "ionicons/icons";
import React from "react";
import { Order } from "../../../features/orders/ordersApi";
import "./OrderCard.css";
import { formatCurrency, formatDate, getStatusColor } from "./utils";

interface OrderCardProps {
    order: Order;
    onCreateTask: (order: Order) => void;
    onViewDetails: (order: Order) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
    order,
    onCreateTask,
    onViewDetails,
}) => {
    const itemCount =
        order.order_items?.reduce((sum, item: any) => sum + item.quantity, 0) ||
        0;

    return (
        <IonCard className="order-card">
            <IonCardHeader>
                <div className="order-card-header">
                    <div className="order-header-left">
                        <IonCardTitle className="order-title">
                            Order #{order.id}
                        </IonCardTitle>
                        <IonText color="medium" className="order-key">
                            Key: {order.key}
                        </IonText>
                    </div>
                    <IonBadge
                        color={getStatusColor(order.status)}
                        className="order-status-badge"
                    >
                        {order.status}
                    </IonBadge>
                </div>
            </IonCardHeader>

            <IonCardContent>
                <div className="order-details">
                    <div className="order-detail-item">
                        <IonIcon icon={personOutline} className="detail-icon" />
                        <div className="detail-content">
                            <div className="detail-label">Customer</div>
                            <div className="detail-value">
                                {order.first_name} {order.last_name}
                            </div>
                        </div>
                    </div>

                    <div className="order-detail-item">
                        <IonIcon icon={mailOutline} className="detail-icon" />
                        <div className="detail-content">
                            <div className="detail-label">Email</div>
                            <a
                                href={`mailto:${order.email}`}
                                className="detail-value email-link"
                            >
                                {order.email}
                            </a>
                        </div>
                    </div>

                    <div className="order-detail-item">
                        <IonIcon
                            icon={calendarOutline}
                            className="detail-icon"
                        />
                        <div className="detail-content">
                            <div className="detail-label">Created</div>
                            <div className="detail-value">
                                {formatDate(order.created_at!)}
                            </div>
                        </div>
                    </div>

                    <div className="order-detail-item">
                        <IonIcon icon={cartOutline} className="detail-icon" />
                        <div className="detail-content">
                            <div className="detail-label">Items</div>
                            <div className="detail-value">
                                {`${itemCount} item(s)`}
                            </div>
                        </div>
                    </div>

                    <div className="order-info-chips">
                        <IonChip color="primary" outline>
                            <IonLabel>{order.delivery_method}</IonLabel>
                        </IonChip>
                        <IonChip color="success">
                            <IonLabel className="price-label">
                                {formatCurrency(Number(order.total_price))}
                            </IonLabel>
                        </IonChip>
                    </div>
                </div>

                <div className="order-actions">
                    <IonButton
                        expand="block"
                        fill="outline"
                        onClick={() => onViewDetails(order)}
                        className="action-button"
                    >
                        <IonIcon icon={eyeOutline} slot="start" />
                        View Details
                    </IonButton>
                    <IonButton
                        expand="block"
                        onClick={() => onCreateTask(order)}
                        className="action-button"
                    >
                        <IonIcon icon={addCircleOutline} slot="start" />
                        Create Task
                    </IonButton>
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default OrderCard;
