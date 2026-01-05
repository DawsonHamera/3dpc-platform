import { Prisma } from "@prisma/client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/lib/baseApi";

// Response types with relations
export type Order = Prisma.orderGetPayload<{
    include: {
        order_items: { include: { product: true; product_variant: true } };
    };
}>;

export type OrderItem = Prisma.order_itemGetPayload<{
    include: { product: true; product_variant: true; order: true };
}>;

// Input types
export type CreateOrder = Prisma.orderCreateInput;
export type UpdateOrder = Prisma.orderUpdateInput;
export type CreateOrderItem = Prisma.order_itemCreateInput;
export type UpdateOrderItem = Prisma.order_itemUpdateInput;

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: baseQuery,
    tagTypes: ["Orders", "OrderItems"],
    endpoints: (builder) => ({
        getOrders: builder.query<Order[], void>({
            query: () => "orders",
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
        createOrder: builder.mutation<Order, Partial<CreateOrder> & {cart: any[]}>({
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
} = ordersApi;
