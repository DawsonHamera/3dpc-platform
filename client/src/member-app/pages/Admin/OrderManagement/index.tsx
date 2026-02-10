import {
    IonButton,
    IonContent,
    IonIcon,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonSpinner,
    IonText,
    RefresherEventDetail,
} from "@ionic/react";
import { storefrontOutline } from "ionicons/icons";
import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../../../shared/components/Header/Header";
import { Order, useGetOrdersQuery } from "../../../../shared/features";
import { OrderCard, OrderFilters, OrderStatisticsCard } from "./components";
import { OrderDetailsModal } from "./modals";
import "./OrderManagementPage.css";
import { calculateStatistics, filterOrders } from "./utils";

const OrderManagementPage: React.FC = () => {
    const history = useHistory();

    // Filter and sort states
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState<string | undefined>(
        undefined,
    );
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    // Modal states
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const {
        data: orders = [],
        isLoading,
        error,
        refetch,
    } = useGetOrdersQuery({
        status: statusFilter,
        order: sortOrder,
    });

    // Memoized computed values
    const statistics = useMemo(() => calculateStatistics(orders), [orders]);

    const filteredOrders = useMemo(() => {
        // Backend handles sorting by created_at, frontend only filters by search
        return filterOrders(orders, searchQuery);
    }, [orders, searchQuery]);

    // Handlers
    const handleViewDetails = (order: Order) => {
        setSelectedOrder(order);
        setIsDetailsModalOpen(true);
    };

    const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        await refetch();
        event.detail.complete();
    };

    const handleCloseDetailsModal = () => {
        setIsDetailsModalOpen(false);
        setSelectedOrder(null);
    };

    const handleGoToShop = () => {
        history.push("/shop");
    };

    return (
        <IonPage>
            <Header title="Order Management" type="back" />
            <IonContent className="order-management-content">
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent />
                </IonRefresher>

                <div className="page-container">
                    <div className="page-header">
                        <div className="page-header-content">
                            <div className="page-header-text">
                                <h1 className="page-title">Order Management</h1>
                                <p className="page-subtitle">
                                    View, manage, and track all customer orders
                                </p>
                            </div>
                            <IonButton
                                onClick={handleGoToShop}
                                className="shop-link-button"
                            >
                                <IonIcon
                                    slot="start"
                                    icon={storefrontOutline}
                                />
                                Go to Shop
                            </IonButton>
                        </div>
                    </div>

                    {error && (
                        <div className="error-container">
                            <IonText color="danger">
                                <p>
                                    Failed to load orders. Please try refreshing
                                    the page.
                                </p>
                            </IonText>
                        </div>
                    )}

                    {isLoading ? (
                        <div className="loading-container">
                            <IonSpinner name="crescent" />
                            <IonText color="medium">Loading orders...</IonText>
                        </div>
                    ) : (
                        <>
                            <OrderStatisticsCard statistics={statistics} />

                            <OrderFilters
                                searchQuery={searchQuery}
                                onSearchChange={setSearchQuery}
                                statusFilter={statusFilter}
                                onStatusFilterChange={setStatusFilter}
                                sortOrder={sortOrder}
                                onSortOrderChange={setSortOrder}
                            />

                            <div className="orders-section">
                                <div className="section-header">
                                    <h2 className="section-title">
                                        Orders ({filteredOrders.length})
                                    </h2>
                                </div>

                                {filteredOrders.length === 0 ? (
                                    <div className="empty-state">
                                        <IonText color="medium">
                                            <p>
                                                No orders found matching your
                                                criteria.
                                            </p>
                                        </IonText>
                                    </div>
                                ) : (
                                    <div className="orders-grid">
                                        {filteredOrders.map((order) => (
                                            <OrderCard
                                                key={order.id}
                                                order={order}
                                                onViewDetails={
                                                    handleViewDetails
                                                }
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                <OrderDetailsModal
                    isOpen={isDetailsModalOpen}
                    onClose={handleCloseDetailsModal}
                    order={selectedOrder}
                />
            </IonContent>
        </IonPage>
    );
};

export default OrderManagementPage;
