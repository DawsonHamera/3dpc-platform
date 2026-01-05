import {
    IonContent,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonSpinner,
    IonText,
    RefresherEventDetail,
} from "@ionic/react";
import React, { useMemo, useState } from "react";
import { Order, useGetOrdersQuery } from "../../../../member-app/features/orders/ordersApi";
import Header from "../../../../shared/components/Header/Header";
import CreateTaskModal from "./CreateTaskModal";
import OrderCard from "./OrderCard";
import OrderDetailsModal from "./OrderDetailsModal";
import OrderFilters from "./OrderFilters";
import "./OrderManagementPage.css";
import OrderStatisticsCard from "./OrderStatisticsCard";
import { calculateStatistics, filterOrders, sortOrders } from "./utils";

const OrderManagementPage: React.FC = () => {
    const {
        data: orders = [],
        isLoading,
        error,
        refetch,
    } = useGetOrdersQuery(undefined);

    // Filter and sort states
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [sortBy, setSortBy] = useState<
        "created_at" | "total_price" | "status"
    >("created_at");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    // Modal states
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    // Memoized computed values
    const statistics = useMemo(() => calculateStatistics(orders), [orders]);

    const filteredAndSortedOrders = useMemo(() => {
        const filtered = filterOrders(orders, searchQuery, statusFilter);
        return sortOrders(filtered, sortBy, sortOrder);
    }, [orders, searchQuery, statusFilter, sortBy, sortOrder]);

    // Handlers
    const handleCreateTask = (order: Order) => {
        setSelectedOrder(order);
        setIsTaskModalOpen(true);
    };

    const handleViewDetails = (order: Order) => {
        setSelectedOrder(order);
        setIsDetailsModalOpen(true);
    };

    const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        await refetch();
        event.detail.complete();
    };

    const handleCloseTaskModal = () => {
        setIsTaskModalOpen(false);
        setSelectedOrder(null);
    };

    const handleCloseDetailsModal = () => {
        setIsDetailsModalOpen(false);
        setSelectedOrder(null);
    };

    return (
        <IonPage>
            <Header title="Order Management" />
            <IonContent className="order-management-content">
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent />
                </IonRefresher>

                <div className="page-container">
                    <div className="page-header">
                        <h1 className="page-title">Order Management</h1>
                        <p className="page-subtitle">
                            View, manage, and track all customer orders
                        </p>
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
                                sortBy={sortBy}
                                onSortByChange={setSortBy}
                                sortOrder={sortOrder}
                                onSortOrderChange={setSortOrder}
                            />

                            <div className="orders-section">
                                <div className="section-header">
                                    <h2 className="section-title">
                                        Orders ({filteredAndSortedOrders.length}
                                        )
                                    </h2>
                                </div>

                                {filteredAndSortedOrders.length === 0 ? (
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
                                        {filteredAndSortedOrders.map(
                                            (order) => (
                                                <OrderCard
                                                    key={order.id}
                                                    order={order}
                                                    onCreateTask={
                                                        handleCreateTask
                                                    }
                                                    onViewDetails={
                                                        handleViewDetails
                                                    }
                                                />
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>

                <CreateTaskModal
                    isOpen={isTaskModalOpen}
                    onClose={handleCloseTaskModal}
                    order={selectedOrder}
                />

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
