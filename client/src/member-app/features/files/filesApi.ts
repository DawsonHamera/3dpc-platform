import { Prisma } from "@prisma/client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/lib/baseApi";

export type File = Prisma.fileGetPayload<{}>;
export type CreateFile = Prisma.fileCreateInput;
export type UpdateFile = Prisma.fileUpdateInput;

export const filesApi = createApi({
    reducerPath: "files",
    baseQuery: baseQuery,
    tagTypes: ["File"],
    endpoints: (builder) => ({
        getFiles: builder.query<File[], void>({
            query: () => ({
                url: "files",
                method: "GET",
            }),
            providesTags: ["File"],
        }),
        getFile: builder.query<File, number>({
            query: (id) => ({
                url: `files/${id}`,
                method: "GET",
            }),
            providesTags: ["File"],
        }),
        addFile: builder.mutation<File, FormData>({
            query: (file) => ({
                url: "files",
                method: "POST",
                body: file,
            }),
            invalidatesTags: ["File"],
        }),
        removeFile: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `files/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["File"],
        }),
    }),
});

export const {
    useGetFilesQuery,
    useGetFileQuery,
    useAddFileMutation,
    useRemoveFileMutation,
} = filesApi;
