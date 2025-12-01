import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productTemplatesApi = createApi({
    reducerPath: "productTemplatesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        getProductTemplates: builder.query({
            query: () => "product-templates",
        }),
        getProductTemplateById: builder.query({
            query: (id) => `product-templates/${id}`,
        }),
        createProductTemplate: builder.mutation({
            query: (newTemplate) => ({
                url: "product-templates",
                method: "POST",
                body: newTemplate,
            }),
        }),
        updateProductTemplate: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `product-templates/${id}`,
                method: "PATCH",
                body: patch,
            }),
        }),
        deleteProductTemplate: builder.mutation({
            query: (id) => ({
                url: `product-templates/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetProductTemplatesQuery,
    useGetProductTemplateByIdQuery,
    useCreateProductTemplateMutation,
    useUpdateProductTemplateMutation,
    useDeleteProductTemplateMutation,
} = productTemplatesApi;
