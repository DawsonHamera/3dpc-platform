import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../../baseApi';

export const shopApi = createApi({
    reducerPath: 'shopApi',
    tagTypes: ['Products', 'Orders'],
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        getProducts: builder.query<any[], void>({
            query: () => '/shop/products',
            providesTags: ['Products'],
        }),
        getProductById: builder.query<any, string>({
            query: (id) => `/shop/products/${id}`,
            providesTags: (result, error, id) => [{ type: 'Products', id }],
        }),
        createProduct: builder.mutation<any, Partial<any>>({
            query: (shop) => ({
                url: '/shop/products',
                method: 'POST',
                body: shop,
            }),
            invalidatesTags: ['Products'],
        }),
        removeProduct: builder.mutation<void, string>({
            query: (id) => ({
                url: `/shop/products/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Products'],
        }),
        addItemToCart: builder.mutation<any, Partial<any>>({
            query: (order) => ({
                url: '/shop/cart',
                method: 'POST',
                body: order,
            }),
            invalidatesTags: ['Orders'],
        }),
        getCartItems: builder.query<any[], void>({
            query: () => '/shop/cart',
            providesTags: ['Orders'],
        }),
        deleteOrderItem: builder.mutation<void, { orderId: number; itemId: number }>({
            query: ({ orderId, itemId }) => ({
                url: `/shop/${orderId}/items/${itemId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Orders'],
        }),
        checkout: builder.mutation<any, any>({
            query: (body) => ({
                url: '/shop/checkout',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Orders'],
        }),
        updateProduct: builder.mutation<any, { id: number; data: any }>({
            query: ({ id, data }) => ({
                url: `/shop/products/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ["Products"],
        }),
        getSections: builder.query<any[], void>({
            query: () => '/shop/sections',
            providesTags: ['Products'],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation,
    useAddItemToCartMutation,
    useGetCartItemsQuery,
    useDeleteOrderItemMutation,
    useCheckoutMutation,
    useGetSectionsQuery,
} = shopApi;