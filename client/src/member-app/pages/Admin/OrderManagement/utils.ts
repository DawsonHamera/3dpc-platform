import { Order } from "../../../../shared/features";
import { OrderStatistics } from "./types";

export const calculateStatistics = (orders: Order[]): OrderStatistics => {
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(
        (order) => order.status.toLowerCase() === "pending",
    ).length;
    const completedOrders = orders.filter(
        (order) =>
            order.status.toLowerCase() === "completed" ||
            order.status.toLowerCase() === "delivered",
    ).length;
    const cancelledOrders = orders.filter(
        (order) => order.status.toLowerCase() === "cancelled",
    ).length;

    const totalRevenue = orders
        .filter(
            (order) =>
                order.status.toLowerCase() === "completed" ||
                order.status.toLowerCase() === "delivered",
        )
        .reduce((sum, order) => sum + Number(order.total_price), 0);

    const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

    return {
        totalOrders,
        pendingOrders,
        completedOrders,
        cancelledOrders,
        totalRevenue,
        averageOrderValue,
    };
};

export const filterOrders = (orders: Order[], searchQuery: string): Order[] => {
    let filtered = [...orders];

    // Filter by search query (backend handles status filtering)
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(
            (order) =>
                order.email.toLowerCase().includes(query) ||
                order.first_name.toLowerCase().includes(query) ||
                order.last_name.toLowerCase().includes(query) ||
                order.key.toLowerCase().includes(query) ||
                order.id.toString().includes(query),
        );
    }

    return filtered;
};

export const sortOrders = (
    orders: Order[],
    sortBy: "created_at" | "total_price" | "status",
    sortOrder: "asc" | "desc",
): Order[] => {
    return [...orders].sort((a, b) => {
        let comparison = 0;

        switch (sortBy) {
            case "created_at":
                comparison =
                    new Date(a.created_at!).getTime() -
                    new Date(b.created_at!).getTime();
                break;
            case "total_price":
                comparison = Number(a.total_price) - Number(b.total_price);
                break;
            case "status":
                comparison = a.status.localeCompare(b.status);
                break;
        }

        return sortOrder === "asc" ? comparison : -comparison;
    });
};

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amount);
};

export const formatDate = (date: string): string => {
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(date));
};

export const getStatusColor = (status: string): string => {
    const statusLower = status.toLowerCase();

    switch (statusLower) {
        case "pending":
            return "warning";
        case "processing":
            return "primary";
        case "completed":
        case "delivered":
            return "success";
        case "cancelled":
            return "danger";
        default:
            return "medium";
    }
};
