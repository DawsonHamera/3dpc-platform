import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../baseApi';
import { Request, CreateRequestData } from '../../types';

export const requestsApi = createApi({
    reducerPath: 'requests',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Request'],
    endpoints: (build) => ({
        // Standard CRUD endpoints
        getAll: build.query<Request[], void>({
            query: () => '/requests',
            providesTags: ['Request']
        }),
        getOne: build.query<Request, number>({
            query: (id) => `/requests/${id}`,
            providesTags: (result, error, id) => [{ type: 'Request', id }],
        }),
        create: build.mutation<Request, CreateRequestData>({
            query: (body) => ({
                url: '/requests',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'Request', id: 'LIST' }],
        }),
        update: build.mutation<Request, { id: number; body: Partial<Request> }>({
            query: ({ id, body }) => ({
                url: `/requests/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Request', id }],
        }),
        delete: build.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `/requests/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Request', id },
                { type: 'Request', id: 'LIST' },
            ],
        }),
        // Custom approve endpoint
        approve: build.mutation<void, number>({
            query: (id) => ({
                url: `requests/${id}/approve`,
                method: 'POST',
            }),
            invalidatesTags: (result, error, id) => [
                { type: 'Request', id },
                { type: 'Request', id: 'LIST' },
            ],
        }),
    }),
});

export const {
    useGetAllQuery: useGetRequestsQuery, 
    useGetOneQuery: useGetRequestQuery, 
    useUpdateMutation: useUpdateRequestMutation,
    useCreateMutation: useAddRequestMutation, 
    useDeleteMutation: useRemoveRequestMutation,
    useApproveMutation: useApproveRequestMutation,
} = requestsApi;

export type { Request, CreateRequestData } from '../../types';
