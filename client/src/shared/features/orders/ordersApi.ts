import { Prisma } from "@prisma/client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../lib/baseApi";

// Response types with relations
export type Order = Prisma.orderGetPayload<{
    include: {
        order_items: {
            include: {
                product: true;
                product_variant: { include: { image: true } };
            };
        };
    };
}>;

export type OrderItem = Prisma.order_itemGetPayload<{
    include: {
        product: true;
        product_variant: { include: { image: true } };
        order: true;
        tasks: {
            select: {
                id: true;
                title: true;
                status: true;
                assigned_to: true;
                scheduled_date: true;
            };
        };
    };
}>;

// Input types
export type CreateOrder = Prisma.orderCreateInput;
export type UpdateOrder = Prisma.orderUpdateInput;
export type CreateOrderItem = Prisma.order_itemCreateInput;
export type UpdateOrderItem = Prisma.order_itemUpdateInput;
export type OrderTaskPrinterAssignment = {
    order_item_id: number;
    printer_id: number;
};
export type GenerateOrderTasksRequest = {
    orderId: number;
    force?: boolean;
    printer_assignments?: OrderTaskPrinterAssignment[];
};
export type GenerateOrderTasksResponse = {
    message?: string;
    order_id?: number;
    created_count?: number;
    skipped_count?: number;
    eligible_item_count?: number;
    already_linked_item_count?: number;
    tasks?: unknown[];
    [key: string]: unknown;
};

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: baseQuery,
    tagTypes: ["Orders", "OrderItems"],
    endpoints: (builder) => ({
        getOrders: builder.query<
            Order[],
            {
                status?: string;
                limit?: number;
                order?: "asc" | "desc";
            } | void
        >({
            query: (args) => {
                const params = new URLSearchParams();
                if (args?.status) params.append("status", args.status);
                if (args?.limit) params.append("limit", args.limit.toString());
                if (args?.order) params.append("order", args.order);
                return `orders?${params.toString()}`;
            },
            providesTags: ["Orders"],
        }),
        getOrderById: builder.query<Order, number>({
            query: (id) => `orders/${id}`,
            providesTags: (result, error, id) => [{ type: "Orders", id }],
        }),
        getOrderByKey: builder.query<Order, string>({
            query: (key) => `orders/key/${key}`,
            providesTags: (result, error, key) => [{ type: "Orders", id: key }],
        }),
        createOrder: builder.mutation<
            Order,
            Partial<CreateOrder> & { cart: any[] }
        >({
            query: (newOrder) => ({
                url: "orders",
                method: "POST",
                body: newOrder,
            }),
            invalidatesTags: ["Orders"],
        }),
        updateOrder: builder.mutation<Order, { id: number } & UpdateOrder>({
            query: ({ id, ...patch }) => ({
                url: `orders/${id}`,
                method: "PATCH",
                body: patch,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: "Orders", id },
                "Orders",
            ],
        }),
        deleteOrder: builder.mutation<void, number>({
            query: (id) => ({
                url: `orders/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Orders"],
        }),
        getOrderItems: builder.query<OrderItem[], number>({
            query: (orderId) => `orders/${orderId}/items`,
            providesTags: (result, error, orderId) => [
                { type: "OrderItems", id: orderId },
            ],
        }),
        addOrderItem: builder.mutation<
            OrderItem,
            { orderId: number } & CreateOrderItem
        >({
            query: ({ orderId, ...newItem }) => ({
                url: `orders/${orderId}/items`,
                method: "POST",
                body: newItem,
            }),
            invalidatesTags: (result, error, { orderId }) => [
                { type: "OrderItems", id: orderId },
                { type: "Orders", id: orderId },
            ],
        }),
        updateOrderItem: builder.mutation<
            OrderItem,
            { orderId: number; itemId: number } & UpdateOrderItem
        >({
            query: ({ orderId, itemId, ...patch }) => ({
                url: `orders/${orderId}/items/${itemId}`,
                method: "PATCH",
                body: patch,
            }),
            invalidatesTags: (result, error, { orderId }) => [
                { type: "OrderItems", id: orderId },
                { type: "Orders", id: orderId },
            ],
        }),
        deleteOrderItem: builder.mutation<
            void,
            { orderId: number; itemId: number }
        >({
            query: ({ orderId, itemId }) => ({
                url: `orders/${orderId}/items/${itemId}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, { orderId }) => [
                { type: "OrderItems", id: orderId },
                { type: "Orders", id: orderId },
            ],
        }),
        generateOrderTasks: builder.mutation<
            GenerateOrderTasksResponse,
            GenerateOrderTasksRequest
        >({
            query: ({ orderId, force, printer_assignments }) => ({
                url: `orders/${orderId}/generate-tasks`,
                method: "POST",
                body:
                    force !== undefined || printer_assignments !== undefined
                        ? { force, printer_assignments }
                        : undefined,
            }),
            invalidatesTags: (result, error, { orderId }) => [
                { type: "Orders", id: orderId },
                { type: "OrderItems", id: orderId },
                "Orders",
                "OrderItems",
            ],
        }),
    }),
});

export const {
    useGetOrdersQuery,
    useGetOrderByIdQuery,
    useGetOrderByKeyQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
    useGetOrderItemsQuery,
    useAddOrderItemMutation,
    useUpdateOrderItemMutation,
    useDeleteOrderItemMutation,
    useGenerateOrderTasksMutation,
} = ordersApi;
