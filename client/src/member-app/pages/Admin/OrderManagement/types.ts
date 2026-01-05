export interface OrderStatistics {
    totalOrders: number;
    pendingOrders: number;
    completedOrders: number;
    cancelledOrders: number;
    totalRevenue: number;
    averageOrderValue: number;
}

export interface OrderFilters {
    status?: string;
    searchQuery?: string;
    sortBy?: "created_at" | "total_price" | "status";
    sortOrder?: "asc" | "desc";
}
