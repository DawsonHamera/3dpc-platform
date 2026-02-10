import {
    IonBadge,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonIcon,
    IonImg,
    IonItem,
    IonNote,
    IonPage,
    IonRow,
    IonSkeletonText,
    IonText,
    IonToast,
    useIonRouter,
} from "@ionic/react";
import {
    checkmarkCircle,
    closeCircle,
    constructOutline,
    copyOutline,
    returnDownBack,
    timeOutline,
} from "ionicons/icons";
import { useState } from "react";
import { useParams } from "react-router";
import { useGetOrderByKeyQuery } from "../../../shared/features";
import { ShopHeader } from "../shared";

const OrderStatusPage: React.FC = () => {
    const { orderKey } = useParams<{ orderKey: string }>();
    const {
        data: order,
        isLoading,
        isError,
    } = useGetOrderByKeyQuery(orderKey || "");

    const router = useIonRouter();

    const [toast, setToast] = useState<{
        message: string;
        color: string;
    } | null>(null);

    const handleCopyLink = () => {
        const orderUrl = `${window.location.origin}/shop/order/${orderKey}`;
        navigator.clipboard.writeText(orderUrl).then(
            () => {
                setToast({
                    message: "Order link copied to clipboard!",
                    color: "success",
                });
            },
            (err) => {
                setToast({ message: "Failed to copy link.", color: "danger" });
            },
        );
    };

    const getStatusColor = (status: string) => {
        switch (status?.toLowerCase()) {
            case "completed":
            case "delivered":
            case "shipped":
                return "success";
            case "processing":
            case "printing":
                return "warning";
            case "pending":
                return "medium";
            case "cancelled":
            case "failed":
                return "danger";
            default:
                return "primary";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status?.toLowerCase()) {
            case "completed":
            case "delivered":
            case "shipped":
                return checkmarkCircle;
            case "processing":
            case "printing":
                return constructOutline;
            case "pending":
                return timeOutline;
            case "cancelled":
            case "failed":
                return closeCircle;
            default:
                return timeOutline;
        }
    };

    return (
        <IonPage>
            <ShopHeader title="Order Status" />

            <IonContent className="ion-padding">
                {isLoading && (
                    <div>
                        <IonCard>
                            <IonCardHeader>
                                <IonSkeletonText
                                    animated
                                    style={{ width: "60%" }}
                                />
                            </IonCardHeader>
                            <IonCardContent>
                                <IonSkeletonText
                                    animated
                                    style={{ width: "100%" }}
                                />
                                <IonSkeletonText
                                    animated
                                    style={{ width: "80%" }}
                                />
                            </IonCardContent>
                        </IonCard>
                    </div>
                )}

                {isError && (
                    <IonCard color="danger">
                        <IonCardContent>
                            <IonText color="light">
                                <h2>Error Loading Order</h2>
                                <p>
                                    We couldn't load your order details. Please
                                    check your url and try again.
                                </p>
                            </IonText>
                        </IonCardContent>
                    </IonCard>
                )}

                {order && (
                    <>
                        {/* Success Header */}
                        <IonCard color="success" className="ion-margin-bottom">
                            <IonCardContent className="ion-text-center">
                                <IonIcon
                                    icon={checkmarkCircle}
                                    style={{ fontSize: "64px", color: "white" }}
                                />
                                <h1
                                    style={{
                                        color: "white",
                                        margin: "16px 0 8px",
                                    }}
                                >
                                    Thank You!
                                </h1>
                                <p style={{ color: "white", margin: 0 }}>
                                    Your order has been received and is being
                                    processed.
                                </p>
                                <IonButton
                                    expand="full"
                                    fill="solid"
                                    color="light"
                                    onClick={() => router.push("/shop")}
                                    className="ion-margin-top"
                                >
                                    <IonIcon
                                        slot="start"
                                        icon={returnDownBack}
                                    />
                                    Keep shopping
                                </IonButton>
                            </IonCardContent>
                        </IonCard>

                        {/* Order Summary */}
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Order Summary</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonGrid className="ion-no-padding">
                                    <IonRow>
                                        <IonCol size="6">
                                            <IonText color="medium">
                                                <small>Order ID</small>
                                            </IonText>
                                            <p
                                                style={{
                                                    margin: "4px 0 16px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                #{order.id}
                                            </p>
                                        </IonCol>
                                        <IonCol size="6">
                                            <IonText color="medium">
                                                <small>Status</small>
                                            </IonText>
                                            <div style={{ marginTop: "4px" }}>
                                                <IonBadge
                                                    color={getStatusColor(
                                                        order.status,
                                                    )}
                                                >
                                                    <IonIcon
                                                        icon={getStatusIcon(
                                                            order.status,
                                                        )}
                                                        style={{
                                                            marginRight: "4px",
                                                        }}
                                                    />
                                                    {order.status}
                                                </IonBadge>
                                            </div>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="12">
                                            <IonText color="medium">
                                                <small>Customer</small>
                                            </IonText>
                                            <p style={{ margin: "4px 0 16px" }}>
                                                {order.first_name}{" "}
                                                {order.last_name}
                                            </p>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="12">
                                            <IonText color="medium">
                                                <small>Email</small>
                                            </IonText>
                                            <p style={{ margin: "4px 0 16px" }}>
                                                {order.email}
                                            </p>
                                        </IonCol>
                                    </IonRow>
                                    <IonRow>
                                        <IonCol size="12">
                                            <IonText color="medium">
                                                <small>Total</small>
                                            </IonText>
                                            <h2
                                                style={{
                                                    margin: "4px 0 0",
                                                    color: "var(--ion-color-primary)",
                                                }}
                                            >
                                                $
                                                {parseFloat(
                                                    order.total_price,
                                                ).toFixed(2)}
                                            </h2>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>

                        {/* Order Items */}
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>
                                    Order Items ({order.order_items.length})
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent className="ion-no-padding">
                                {order.order_items.map(
                                    (item: any, index: number) => (
                                        <IonItem
                                            key={item.id}
                                            lines={
                                                index <
                                                order.order_items.length - 1
                                                    ? "full"
                                                    : "none"
                                            }
                                        >
                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "16px",
                                                    width: "100%",
                                                    alignItems: "center",
                                                    padding: "12px 0",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        minWidth: "80px",
                                                        borderRadius: "8px",
                                                        overflow: "hidden",
                                                        backgroundColor:
                                                            "#f5f5f5",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                    }}
                                                >
                                                    {item.product_variant?.image
                                                        .path ? (
                                                        <IonImg
                                                            src={
                                                                item
                                                                    .product_variant
                                                                    .image.path
                                                            }
                                                            alt={
                                                                item.product
                                                                    .name
                                                            }
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                                objectFit:
                                                                    "cover",
                                                            }}
                                                        />
                                                    ) : (
                                                        <IonText color="medium">
                                                            <small>
                                                                No image
                                                            </small>
                                                        </IonText>
                                                    )}
                                                </div>
                                                <div
                                                    style={{
                                                        flex: 1,
                                                        minWidth: 0,
                                                    }}
                                                >
                                                    <h3
                                                        style={{
                                                            margin: "0 0 4px",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {item.product.name}
                                                    </h3>
                                                    <IonNote
                                                        color="medium"
                                                        style={{
                                                            display: "block",
                                                            marginBottom: "8px",
                                                        }}
                                                    >
                                                        {
                                                            item.product_variant
                                                                .name
                                                        }
                                                    </IonNote>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "space-between",
                                                            alignItems:
                                                                "center",
                                                            marginBottom: "8px",
                                                        }}
                                                    >
                                                        <IonText color="medium">
                                                            <small>
                                                                Qty:{" "}
                                                                {item.quantity}{" "}
                                                                × $
                                                                {item.product_variant.price.toFixed(
                                                                    2,
                                                                )}
                                                            </small>
                                                        </IonText>
                                                        <IonText color="dark">
                                                            <strong>
                                                                $
                                                                {(
                                                                    item.quantity *
                                                                    item
                                                                        .product_variant
                                                                        .price
                                                                ).toFixed(2)}
                                                            </strong>
                                                        </IonText>
                                                    </div>
                                                    {item.status && (
                                                        <IonBadge
                                                            color={getStatusColor(
                                                                item.status,
                                                            )}
                                                            style={{
                                                                fontSize:
                                                                    "0.75rem",
                                                            }}
                                                        >
                                                            <IonIcon
                                                                icon={getStatusIcon(
                                                                    item.status,
                                                                )}
                                                                style={{
                                                                    marginRight:
                                                                        "4px",
                                                                    fontSize:
                                                                        "12px",
                                                                }}
                                                            />
                                                            {item.status}
                                                        </IonBadge>
                                                    )}
                                                </div>
                                            </div>
                                        </IonItem>
                                    ),
                                )}
                            </IonCardContent>
                        </IonCard>

                        {/* Next Steps */}
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>What's Next?</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonText color="medium">
                                    <p style={{ margin: "0 0 12px" }}>
                                        We'll send you an email confirmation and
                                        updates as your order progresses. You
                                        can use this page to check your order
                                        status at any time.
                                    </p>
                                    <p style={{ margin: 0 }}>
                                        <strong>Save this link:</strong> You can
                                        bookmark this page to track your order.
                                    </p>
                                </IonText>
                                <IonButton
                                    fill="clear"
                                    style={{ marginTop: "16px" }}
                                    onClick={() => handleCopyLink()}
                                >
                                    <IonIcon icon={copyOutline} slot="start" />
                                    Copy to clipboard
                                </IonButton>
                            </IonCardContent>
                        </IonCard>
                    </>
                )}
            </IonContent>
            {toast && (
                <IonToast
                    isOpen={true}
                    message={toast.message}
                    duration={2000}
                    color={toast.color}
                    onDidDismiss={() => setToast(null)}
                />
            )}
        </IonPage>
    );
};

export default OrderStatusPage;
