import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseApi";

export interface Image {
    path: string;
    original_name: string;
}

export interface Variant {
    id: number;
    product_id: number;
    name: string;
    type: string;
    image_file_id: number;
    color: string;
    background_color: string;
    price: number;
    customizations: Record<string, unknown>;
    created_at: string;
    updated_at: string;
    image: Image;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    variants: Variant[];
}

export enum ProductType {
    DEFAULT = "DEFAULT",
    STANDARD = "STANDARD",
    CUSTOM = "CUSTOM",
}


export interface Section {
    id: number;
    name: string;
    items: {
        product_id: number;
        variant_id: number;
    }[];
}

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: baseQuery,
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products",
        }),
        getSections: builder.query<Section[], void>({
            query: () => "/products/sections",
        }),
        getProductById: builder.query<Product, string>({
            query: (id) => `/products/${id}`,
        }),
        getVariantById: builder.query<
            Variant,
            { id: string; variantId: string }
        >({
            query: ({ id, variantId }) =>
                `/products/${id}/variants/${variantId}`,
        }),
        createProduct: builder.mutation<Product, Partial<Product>>({
            query: (data) => ({
                url: "/products",
                method: "POST",
                body: data,
            }),
        }),
        createVariant: builder.mutation<
            Variant,
            { id: string; data: Partial<Variant> }
        >({
            query: ({ id, data }) => ({
                url: `/products/${id}/variant`,
                method: "POST",
                body: data,
            }),
        }),
        createSection: builder.mutation<Section, Partial<Section>>({
            query: (data) => ({
                url: "/products/section",
                method: "POST",
                body: data,
            }),
        }),
        updateSection: builder.mutation<
            Section,
            { id: string; data: Partial<Section> }
        >({
            query: ({ id, data }) => ({
                url: `/products/section/${id}`,
                method: "PATCH",
                body: data,
            }),
        }),
        updateVariant: builder.mutation<
            Variant,
            { id: string; variantId: string; data: Partial<Variant> }
        >({
            query: ({ id, variantId, data }) => ({
                url: `/products/${id}/variant/${variantId}`,
                method: "PATCH",
                body: data,
            }),
        }),
        updateProduct: builder.mutation<
            Product,
            { id: string; data: Partial<Product> }
        >({
            query: ({ id, data }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body: data,
            }),
        }),
        deleteSection: builder.mutation<void, string>({
            query: (id) => ({
                url: `/products/section/${id}`,
                method: "DELETE",
            }),
        }),
        deleteVariant: builder.mutation<
            void,
            { id: string; variantId: string }
        >({
            query: ({ id, variantId }) => ({
                url: `/products/${id}/variant/${variantId}`,
                method: "DELETE",
            }),
        }),
        deleteProduct: builder.mutation<void, string>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetSectionsQuery,
    useGetProductByIdQuery,
    useGetVariantByIdQuery,
    useCreateProductMutation,
    useCreateVariantMutation,
    useCreateSectionMutation,
    useUpdateSectionMutation,
    useUpdateVariantMutation,
    useUpdateProductMutation,
    useDeleteSectionMutation,
    useDeleteVariantMutation,
    useDeleteProductMutation,
} = productsApi;
