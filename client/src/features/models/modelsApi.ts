import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseApi";
import { Model, CreateModelDto, UpdateModelDto } from "../../types/inventory";

export const modelsApi = createApi({
    reducerPath: "modelsApi",
    baseQuery: baseQuery,
    tagTypes: ["Model"],
    endpoints: (builder) => ({
        getModels: builder.query<Model[], void>({
            query: () => "models",
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: "Model" as const,
                              id,
                          })),
                          { type: "Model", id: "LIST" },
                      ]
                    : [{ type: "Model", id: "LIST" }],
        }),
        getModelById: builder.query<Model, number>({
            query: (id) => `models/${id}`,
            providesTags: (result, error, id) => [{ type: "Model", id }],
        }),
        createModel: builder.mutation<Model, CreateModelDto>({
            query: (newModel) => ({
                url: "models",
                method: "POST",
                body: newModel,
            }),
            invalidatesTags: [{ type: "Model", id: "LIST" }],
        }),
        updateModel: builder.mutation<Model, { id: number } & UpdateModelDto>({
            query: ({ id, ...patch }) => ({
                url: `models/${id}`,
                method: "PATCH",
                body: patch,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: "Model", id },
                { type: "Model", id: "LIST" },
            ],
        }),
        deleteModel: builder.mutation<void, number>({
            query: (id) => ({
                url: `models/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => [
                { type: "Model", id },
                { type: "Model", id: "LIST" },
            ],
        }),
    }),
});

export const {
    useGetModelsQuery,
    useGetModelByIdQuery,
    useCreateModelMutation,
    useUpdateModelMutation,
    useDeleteModelMutation,
} = modelsApi;
