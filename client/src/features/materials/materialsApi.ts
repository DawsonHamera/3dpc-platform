import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseApi";
import {
    Material,
    CreateMaterialDto,
    UpdateMaterialDto,
} from "../../types/inventory";

export const materialsApi = createApi({
    reducerPath: "materialsApi",
    baseQuery: baseQuery,
    tagTypes: ["Material"],
    endpoints: (builder) => ({
        getMaterials: builder.query<Material[], void>({
            query: () => "materials",
            providesTags: (result) =>
                result
                    ? [
                          ...result.map(({ id }) => ({
                              type: "Material" as const,
                              id,
                          })),
                          { type: "Material", id: "LIST" },
                      ]
                    : [{ type: "Material", id: "LIST" }],
        }),
        getMaterialById: builder.query<Material, number>({
            query: (id) => `materials/${id}`,
            providesTags: (result, error, id) => [{ type: "Material", id }],
        }),
        createMaterial: builder.mutation<Material, CreateMaterialDto>({
            query: (newMaterial) => ({
                url: "materials",
                method: "POST",
                body: newMaterial,
            }),
            invalidatesTags: [{ type: "Material", id: "LIST" }],
        }),
        updateMaterial: builder.mutation<
            Material,
            { id: number } & UpdateMaterialDto
        >({
            query: ({ id, ...patch }) => ({
                url: `materials/${id}`,
                method: "PATCH",
                body: patch,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: "Material", id },
                { type: "Material", id: "LIST" },
            ],
        }),
        deleteMaterial: builder.mutation<void, number>({
            query: (id) => ({
                url: `materials/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) => [
                { type: "Material", id },
                { type: "Material", id: "LIST" },
            ],
        }),
    }),
});

export const {
    useGetMaterialsQuery,
    useGetMaterialByIdQuery,
    useCreateMaterialMutation,
    useUpdateMaterialMutation,
    useDeleteMaterialMutation,
} = materialsApi;
