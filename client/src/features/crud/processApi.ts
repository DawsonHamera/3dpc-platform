import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../baseApi';
import { Process } from '../../types';

export const processApi = createApi({
    reducerPath: 'processes',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Process'],
    endpoints: (builder) => ({
        getProcesses: builder.query<Process[], void>({
            query: () => ({
                url: 'processes',
                method: 'GET',
            }),
            providesTags: ['Process'],
        }),
        getProcess: builder.query<Process, number>({
            query: (id) => ({
                url: `processes/${id}`,
                method: 'GET',
            }),
            providesTags: ['Process'],
        }),
        addProcess: builder.mutation<Process, Partial<Process>>({
            query: (process) => ({
                url: 'processes',
                method: 'POST',
                body: process,
            }),
            invalidatesTags: ['Process'],
        }),
        removeProcess: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `processes/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Process'],
        }),
        updateCurrentStep: builder.mutation<
            { message: string; processId: number; currentStepId: number },
            { id: number; newStepId: number }
        >({
            query: ({ id, newStepId }) => ({
                url: `processes/${id}/current-step`,
                method: 'PATCH',
                body: { newStepId },
            }),
            invalidatesTags: ['Process'],
        }),
        updateProcessStatus: builder.mutation<
            Process,
            { processId: number; status: string }
        >({
            query: ({ processId, status }) => ({
                url: `processes/${processId}/status`,
                method: 'PATCH',
                body: { status },
            }),
            invalidatesTags: ['Process'],
        }),
        completeStep: builder.mutation<
            any,
            { processId: number; stepId: number; executionData: any }
        >({
            query: ({ processId, stepId, executionData }) => ({
                url: `processes/${processId}/steps/${stepId}/complete`,
                method: 'POST',
                body: { executionData },
            }),
            invalidatesTags: ['Process'],
        }),
        skipStep: builder.mutation<
            any,
            { processId: number; stepId: number; reason: string }
        >({
            query: ({ processId, stepId, reason }) => ({
                url: `processes/${processId}/steps/${stepId}/skip`,
                method: 'POST',
                body: { reason },
            }),
            invalidatesTags: ['Process'],
        }),
    }),
});

export const { 
    useGetProcessesQuery,
    useGetProcessQuery,
    useAddProcessMutation,
    useRemoveProcessMutation,
    useUpdateCurrentStepMutation,
    useUpdateProcessStatusMutation,
    useCompleteStepMutation,
    useSkipStepMutation
} = processApi;

export type { Process } from '../../types';

