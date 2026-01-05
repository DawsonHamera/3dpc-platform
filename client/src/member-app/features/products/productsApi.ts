import { Prisma } from "@prisma/client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/lib/baseApi";
import { product_variant_type } from "@prisma/client";

// Response types with relations
export type Product = Prisma.productGetPayload<{
    include: { variants: { include: { image: true; model: true } } };
}>;

export type ProductVariant = Prisma.product_variantGetPayload<{
    include: { image: true; model: true; product: true };
}>;

// Input types
export type CreateProduct = Prisma.productCreateInput;
export type UpdateProduct = Prisma.productUpdateInput;
export type CreateProductVariant = Prisma.product_variantCreateInput;
export type UpdateProductVariant = Prisma.product_variantUpdateInput;
export type ProductVariantType = product_variant_type;
// Section type remains custom as it's not in Prisma schema
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
    tagTypes: ["Products", "Sections"],
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/products",
            providesTags: (result) =>
                result
                    ? [
                          { type: "Products", id: "LIST" },
                          ...result.map(({ id }) => ({
                              type: "Products" as const,
                              id,
                          })),
                      ]
                    : [{ type: "Products", id: "LIST" }],
        }),
        getSections: builder.query<Section[], void>({
            query: () => "/products/sections",
            providesTags: (result) =>
                result
                    ? [
                          { type: "Sections", id: "LIST" },
                          ...result.map(({ id }) => ({
                              type: "Sections" as const,
                              id,
                          })),
                      ]
                    : [{ type: "Sections", id: "LIST" }],
        }),
        getProductById: builder.query<Product, number>({
            query: (id) => `/products/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Products", id }],
        }),
        getVariantById: builder.query<
            ProductVariant,
            { id: string; variantId: string }
        >({
            query: ({ id, variantId }) =>
                `/products/${id}/variants/${variantId}`,
            providesTags: (_result, _error, { id }) => [
                { type: "Products", id },
            ],
        }),
        createProduct: builder.mutation<Product, Partial<Product>>({
            query: (data) => ({
                url: "/products",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [{ type: "Products", id: "LIST" }],
        }),
        createVariant: builder.mutation<
            ProductVariant,
            { id: string; data: Partial<ProductVariant> }
        >({
            query: ({ id, data }) => ({
                url: `/products/${id}/variant`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: "Products", id },
            ],
        }),
        createSection: builder.mutation<Section, Partial<Section>>({
            query: (data) => ({
                url: "/products/section",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [{ type: "Sections", id: "LIST" }],
        }),
        updateSection: builder.mutation<
            Section,
            { id: number; data: UpdateProduct }
        >({
            query: ({ id, data }) => ({
                url: `/products/section/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: "Sections", id },
            ],
        }),
        updateVariant: builder.mutation<
            ProductVariant,
            { id: number; variantId: number; data: Partial<ProductVariant> }
        >({
            query: ({ id, variantId, data }) => ({
                url: `/products/${id}/variant/${variantId}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: "Products", id },
            ],
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
            invalidatesTags: (_result, _error, { id }) => [
                { type: "Products", id },
            ],
        }),
        deleteSection: builder.mutation<void, number>({
            query: (id) => ({
                url: `/products/section/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Sections", id: "LIST" }],
        }),
        deleteVariant: builder.mutation<
            void,
            { id: string; variantId: string }
        >({
            query: ({ id, variantId }) => ({
                url: `/products/${id}/variant/${variantId}`,
                method: "DELETE",
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: "Products", id },
            ],
        }),
        deleteProduct: builder.mutation<void, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{ type: "Products", id: "LIST" }],
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
