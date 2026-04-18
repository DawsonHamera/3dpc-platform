import {
    IonCard,
    IonCardContent,
    IonLabel,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonSelect,
    IonSelectOption,
} from "@ionic/react";
import React from "react";
import "./OrderFilters.css";

interface OrderFiltersProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    statusFilter: string | undefined;
    onStatusFilterChange: (status: string | undefined) => void;
    sortOrder: "asc" | "desc";
    onSortOrderChange: (order: "asc" | "desc") => void;
}

const OrderFilters: React.FC<OrderFiltersProps> = ({
    searchQuery,
    onSearchChange,
    statusFilter,
    onStatusFilterChange,
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
                            value={statusFilter || "all"}
                            onIonChange={(e) => {
                                const val = e.detail.value as string;
                                onStatusFilterChange(
                                    val === "all" ? undefined : val,
                                );
                            }}
                            className="status-segment"
                        >
                            <IonSegmentButton value="all">
                                <IonLabel>All</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="pending">
                                <IonLabel>Pending</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="processing">
                                <IonLabel>In Progress</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="completed">
                                <IonLabel>Completed</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="failed">
                                <IonLabel>Failed</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </div>
                </div>

                <div className="filter-row">
                    <div className="filter-group">
                        <IonLabel className="filter-label">Sort Order</IonLabel>
                        <IonSelect
                            value={sortOrder}
                            onIonChange={(e) =>
                                onSortOrderChange(e.detail.value)
                            }
                            className="sort-select"
                            interface="popover"
                        >
                            <IonSelectOption value="desc">
                                Newest First
                            </IonSelectOption>
                            <IonSelectOption value="asc">
                                Oldest First
                            </IonSelectOption>
                        </IonSelect>
                    </div>
                </div>
            </IonCardContent>
        </IonCard>
    );
};

export default OrderFilters;
