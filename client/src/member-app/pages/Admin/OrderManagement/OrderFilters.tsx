import React from "react";
import {
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonCardContent,
} from "@ionic/react";
import "./OrderFilters.css";

interface OrderFiltersProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    statusFilter: string;
    onStatusFilterChange: (status: string) => void;
    sortBy: "created_at" | "total_price" | "status";
    onSortByChange: (sortBy: "created_at" | "total_price" | "status") => void;
    sortOrder: "asc" | "desc";
    onSortOrderChange: (order: "asc" | "desc") => void;
}

const OrderFilters: React.FC<OrderFiltersProps> = ({
    searchQuery,
    onSearchChange,
    statusFilter,
    onStatusFilterChange,
    sortBy,
    onSortByChange,
    sortOrder,
    onSortOrderChange,
}) => {
    return (
        <IonCard className="filters-card">
            <IonCardContent>
                <IonSearchbar
                    value={searchQuery}
                    onIonInput={(e) => onSearchChange(e.detail.value!)}
                    placeholder="Search by name, email, or order ID..."
                    className="order-searchbar"
                    debounce={300}
                />

                <div className="filter-row">
                    <div className="filter-group">
                        <IonLabel className="filter-label">Status</IonLabel>
                        <IonSegment
                            value={statusFilter}
                            onIonChange={(e) =>
                                onStatusFilterChange(e.detail.value as string)
                            }
                            className="status-segment"
                        >
                            <IonSegmentButton value="all">
                                <IonLabel>All</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="pending">
                                <IonLabel>Pending</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="processing">
                                <IonLabel>Processing</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="completed">
                                <IonLabel>Completed</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="cancelled">
                                <IonLabel>Cancelled</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </div>
                </div>

                <div className="filter-row">
                    <div className="filter-group">
                        <IonLabel className="filter-label">Sort By</IonLabel>
                        <IonSelect
                            value={sortBy}
                            onIonChange={(e) => onSortByChange(e.detail.value)}
                            className="sort-select"
                            interface="popover"
                        >
                            <IonSelectOption value="created_at">
                                Date Created
                            </IonSelectOption>
                            <IonSelectOption value="total_price">
                                Total Price
                            </IonSelectOption>
                            <IonSelectOption value="status">
                                Status
                            </IonSelectOption>
                        </IonSelect>
                    </div>

                    <div className="filter-group">
                        <IonLabel className="filter-label">Order</IonLabel>
                        <IonSelect
                            value={sortOrder}
                            onIonChange={(e) =>
                                onSortOrderChange(e.detail.value)
                            }
                            className="sort-select"
                            interface="popover"
                        >
                            <IonSelectOption value="desc">
                                Descending
                            </IonSelectOption>
                            <IonSelectOption value="asc">
                                Ascending
                            </IonSelectOption>
                        </IonSelect>
                    </div>
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default OrderFilters;
