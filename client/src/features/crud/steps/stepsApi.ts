import { createApi } from '@reduxjs/toolkit/query/react';
import { CreateStep, Step, StepContent, StepAction, StepTrigger } from './types';
import { baseQueryWithAuth } from '../../baseApi';
import { add } from 'date-fns';

export const stepsApi = createApi({
    reducerPath: 'stepsApi',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Step'],
    endpoints: (builder) => ({
        getSteps: builder.query<Step[], void>({
            query: () => '/steps',
            providesTags: ['Step'],
        }),
        getStep: builder.query<Step, number>({
            query: (id) => `/${id}`,
            providesTags: ['Step'],
        }),
        addStep: builder.mutation<Step, CreateStep>({
            query: (body) => ({
                url: '/steps',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Step'],
        }),
        addStepContent: builder.mutation<StepContent, { stepId: number; content: string }>({
            query: ({ stepId, content }) => ({
                url: `/steps/${stepId}/content`,
                method: 'POST',
                body: { content },
            }),
            invalidatesTags: ['Step'],
        }),
        addStepAction: builder.mutation<StepAction, { stepId: number; action: CreateStep }>({
            query: ({ stepId, action }) => ({
                url: `/steps/${stepId}/actions`,
                method: 'POST',
                body: action,
            }),
            invalidatesTags: ['Step'],
        }),
        addStepTrigger: builder.mutation<StepTrigger, { actionId: number; trigger: CreateStep }>({
            query: ({ actionId, trigger }) => ({
                url: `/steps/actions/${actionId}/triggers`,
                method: 'POST',
                body: trigger,
            }),
            invalidatesTags: ['Step'],
        }),
        updateStep: builder.mutation<Step, { id: number, data: CreateStep }>({
            query: ({ id, data }) => ({
                url: `/steps/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Step'],
        }),
        deleteStep: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/steps/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Step'],
        }),
        deleteStepContent: builder.mutation<{ success: boolean; id: number }, { id: number }>({
            query: ({ id }) => ({
                url: `/steps/content/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Step'],
        }),
        deleteStepAction: builder.mutation<{ success: boolean; id: number }, { id: number }>({
            query: ({ id }) => ({
                url: `/steps/actions/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Step'],
        }),
        deleteStepTrigger: builder.mutation<{ success: boolean; id: number }, { id: number }>({
            query: ({ id }) => ({
                url: `/steps/trigger/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Step'],
        }),
        updateStepContents: builder.mutation<Step, { stepId: number, contents: StepContent[] }>({
            query: ({ stepId, contents }) => ({
                url: `/steps/${stepId}/contents`,
                method: 'PATCH',
                body: { contents },
            }),
            invalidatesTags: ['Step'],
        }),
        updateStepActions: builder.mutation<Step, { stepId: number, actions: StepAction[] }>({
            query: ({ stepId, actions }) => ({
                url: `/steps/${stepId}/actions`,
                method: 'PATCH',
                body: { actions },
            }),
            invalidatesTags: ['Step'],
        }),
    }),
});

export const {
    useGetStepsQuery,
    useGetStepQuery,
    useAddStepMutation,
    useUpdateStepMutation,
    useUpdateStepContentsMutation,
    useUpdateStepActionsMutation,
    useDeleteStepMutation,
} = stepsApi;
