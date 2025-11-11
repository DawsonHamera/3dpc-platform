import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../../baseApi';
import { BaseEntity } from '../../../types';
import { Step } from '../steps/types';

export enum ProcessCategory {
    PRINTING = 'printing',
    MAINTENANCE = 'maintenance',
    QUALITY_CHECK = 'quality_check',
    POST_PROCESSING = 'post_processing',
    DESIGN = 'design',
    TESTING = 'testing',
    TRAINING = 'training',
    OTHER = 'other',
}

export interface ProcessTemplateStep {
    id: number;
    processTemplateId: number;
    stepId: number;
    stepOrder: number;
    isRequired: boolean;
    createdAt: string;
    updatedAt: string;
    step: Step;
}

export interface ProcessTemplate extends BaseEntity {
    name: string;
    description?: string;
    version: string;
    category: ProcessCategory;
    estimatedDuration?: number;
    processTemplateSteps?: ProcessTemplateStep[];
}

export interface CreateProcessTemplate {
    name: string;
    description?: string;
    version?: string;
    category?: ProcessCategory;
    estimatedDuration?: number;
}

export const processTemplatesApi = createApi({
    reducerPath: 'processTemplatesApi',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['ProcessTemplate'],
    endpoints: (builder) => ({
        getProcessTemplates: builder.query<ProcessTemplate[], void>({
            query: () => '/process-templates',
            providesTags: (result) =>
                result
                    ? [
                            ...result.map(({ id }) => ({ type: 'ProcessTemplate' as const, id })),
                            { type: 'ProcessTemplate', id: 'LIST' },
                        ]
                    : [{ type: 'ProcessTemplate', id: 'LIST' }],
        }),
        getProcessTemplate: builder.query<ProcessTemplate, number>({
            query: (id) => `/process-templates/${id}`,
            providesTags: (result, error, id) => [{ type: 'ProcessTemplate', id }],
        }),
        createProcessTemplate: builder.mutation<ProcessTemplate, CreateProcessTemplate>({
            query: (body) => ({
                url: '/process-templates',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ type: 'ProcessTemplate', id: 'LIST' }],
        }),
        updateProcessTemplate: builder.mutation<ProcessTemplate, { id: number; data: Partial<CreateProcessTemplate> }>({
            query: ({ id, data }) => ({
                url: `/process-templates/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'ProcessTemplate', id }],
        }),
        deleteProcessTemplate: builder.mutation<{ success: boolean; id: number }, number>({
            query: (id) => ({
                url: `/process-templates/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'ProcessTemplate', id }],
        }),
        addStepToTemplate: builder.mutation<ProcessTemplateStep, { templateId: number; stepId: number; stepOrder: number; isRequired?: boolean }>({
            query: ({ templateId, ...body }) => ({
                url: `/process-templates/${templateId}/steps`,
                method: 'POST',
                body,
            }),
            invalidatesTags: (result, error, { templateId }) => [{ type: 'ProcessTemplate', id: templateId }],
        }),
        removeStepFromTemplate: builder.mutation<void, { templateId: number; stepId: number }>({
            query: ({ templateId, stepId }) => ({
                url: `/process-templates/${templateId}/steps/${stepId}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, { templateId }) => [{ type: 'ProcessTemplate', id: templateId }],
        }),
        reorderTemplateSteps: builder.mutation<void, { templateId: number; stepOrderUpdates: { stepId: number; stepOrder: number }[] }>({
            query: ({ templateId, stepOrderUpdates }) => ({
                url: `/process-templates/${templateId}/steps/reorder`,
                method: 'PATCH',
                body: stepOrderUpdates,
            }),
            invalidatesTags: (result, error, { templateId }) => [{ type: 'ProcessTemplate', id: templateId }],
        }),
    }),
});
           
export const {
    useGetProcessTemplatesQuery,
    useGetProcessTemplateQuery,
    useCreateProcessTemplateMutation,
    useUpdateProcessTemplateMutation,
    useDeleteProcessTemplateMutation,
    useAddStepToTemplateMutation,
    useRemoveStepFromTemplateMutation,
    useReorderTemplateStepsMutation,
} = processTemplatesApi;