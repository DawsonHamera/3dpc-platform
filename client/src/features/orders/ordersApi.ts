import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ordersApi = createApi({
    reducerPath: "ordersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => "orders",
        }),
        getOrderById: builder.query({
            query: (id) => `orders/${id}`,
        }),
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "orders",
                method: "POST",
                body: newOrder,
            }),
        }),
        updateOrder: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `orders/${id}`,
                method: "PATCH",
                body: patch,
            }),
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `orders/${id}`,
                method: "DELETE",
            }),
        }),
        getOrderItems: builder.query({
            query: (orderId) => `orders/${orderId}/items`,
        }),
        addOrderItem: builder.mutation({
            query: ({ orderId, ...newItem }) => ({
                url: `orders/${orderId}/items`,
                method: "POST",
                body: newItem,
            }),
        }),
        updateOrderItem: builder.mutation({
            query: ({ orderId, itemId, ...patch }) => ({
                url: `orders/${orderId}/items/${itemId}`,
                method: "PATCH",
                body: patch,
            }),
        }),
        deleteOrderItem: builder.mutation({
            query: ({ orderId, itemId }) => ({
                url: `orders/${orderId}/items/${itemId}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetOrdersQuery,
    useGetOrderByIdQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
    useGetOrderItemsQuery,
    useAddOrderItemMutation,
    useUpdateOrderItemMutation,
    useDeleteOrderItemMutation,
} = ordersApi;
