import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../baseApi'
import { fileCreateInputObjectSchema, fileModelSchema, fileUpdateInputObjectSchema } from '../../types/zod/schemas';
import z from 'zod';

export type File = z.infer<typeof fileModelSchema>;
export type CreateFile = z.infer<typeof fileCreateInputObjectSchema>;
export type UpdateFile = z.infer<typeof fileUpdateInputObjectSchema>;


export const filesApi = createApi({
    reducerPath: 'files',
    baseQuery: baseQuery,
    tagTypes: ['File'],
    endpoints: (builder) => ({
        getFiles: builder.query<File[], void>({
            query: () => ({
                url: 'files',
                method: 'GET',
            }),
            providesTags: ['File'],
        }),
        getFile: builder.query<File, number>({
            query: (id) => ({
                url: `files/${id}`,
                method: 'GET',
            }),
            providesTags: ['File'],
        }),
        addFile: builder.mutation<File, FormData>({
            query: (file) => ({
                url: 'files',
                method: 'POST',
                body: file,
            }),
            invalidatesTags: ['File'],
        }),
        removeFile: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `files/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['File'],
        }),
    }),
})

export const { 
    useGetFilesQuery, 
    useGetFileQuery, 
    useAddFileMutation, 
    useRemoveFileMutation 
} = filesApi
