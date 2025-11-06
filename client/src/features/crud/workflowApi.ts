import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { 
  StepDefinition, 
  ProcessTemplate, 
  ProcessTemplateStep,
  CreateStepDefinitionData, 
  CreateProcessTemplateData,
  ProcessTemplateStepData
} from '../../types';

// Create a separate base query for the NestJS backend
const nestBaseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3001',
  prepareHeaders: (headers, { getState }) => {
    // Add auth headers if needed
    // const token = selectAccessToken(getState() as RootState);
    // if (token) {
    //   headers.set('Authorization', `Bearer ${token}`);
    // }
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

export const workflowApi = createApi({
  reducerPath: 'workflowApi',
  baseQuery: nestBaseQuery,
  tagTypes: ['StepDefinition', 'ProcessTemplate', 'Process'],
  endpoints: (builder) => ({
    // Step Definitions
    getStepDefinitions: builder.query<StepDefinition[], { category?: string; tags?: string[] }>({
      query: (params = {}) => {
        const searchParams = new URLSearchParams();
        if (params.category) searchParams.append('category', params.category);
        if (params.tags && params.tags.length > 0) {
          params.tags.forEach(tag => searchParams.append('tags', tag));
        }
        return {
          url: `step-definitions?${searchParams.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['StepDefinition'],
    }),
    
    getStepDefinition: builder.query<StepDefinition, number>({
      query: (id) => ({
        url: `step-definitions/${id}`,
        method: 'GET',
      }),
      providesTags: ['StepDefinition'],
    }),
    
    createStepDefinition: builder.mutation<StepDefinition, CreateStepDefinitionData>({
      query: (stepDefinition) => ({
        url: 'step-definitions',
        method: 'POST',
        body: stepDefinition,
      }),
      invalidatesTags: ['StepDefinition'],
    }),
    
    updateStepDefinition: builder.mutation<StepDefinition, { id: number; data: Partial<CreateStepDefinitionData> }>({
      query: ({ id, data }) => ({
        url: `step-definitions/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['StepDefinition'],
    }),
    
    deleteStepDefinition: builder.mutation<{ message: string }, number>({
      query: (id) => ({
        url: `step-definitions/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['StepDefinition'],
    }),

    // Process Templates
    getProcessTemplates: builder.query<ProcessTemplate[], { category?: string; isActive?: boolean }>({
      query: (params = {}) => {
        const searchParams = new URLSearchParams();
        if (params.category) searchParams.append('category', params.category);
        if (params.isActive !== undefined) searchParams.append('isActive', params.isActive.toString());
        return {
          url: `process-templates?${searchParams.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['ProcessTemplate'],
    }),
    
    getProcessTemplate: builder.query<ProcessTemplate, number>({
      query: (id) => ({
        url: `process-templates/${id}`,
        method: 'GET',
      }),
      providesTags: ['ProcessTemplate'],
    }),
    
    createProcessTemplate: builder.mutation<ProcessTemplate, CreateProcessTemplateData>({
      query: (template) => ({
        url: 'process-templates',
        method: 'POST',
        body: template,
      }),
      invalidatesTags: ['ProcessTemplate'],
    }),
    
    updateProcessTemplate: builder.mutation<ProcessTemplate, { id: number; data: Partial<CreateProcessTemplateData> }>({
      query: ({ id, data }) => ({
        url: `process-templates/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['ProcessTemplate'],
    }),
    
    deleteProcessTemplate: builder.mutation<{ message: string }, number>({
      query: (id) => ({
        url: `process-templates/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ProcessTemplate'],
    }),

    // Process Template Steps
    addStepToTemplate: builder.mutation<ProcessTemplateStep, { templateId: number; stepData: ProcessTemplateStepData }>({
      query: ({ templateId, stepData }) => ({
        url: `process-templates/${templateId}/steps`,
        method: 'POST',
        body: stepData,
      }),
      invalidatesTags: ['ProcessTemplate'],
    }),
    
    updateTemplateStep: builder.mutation<ProcessTemplateStep, { templateId: number; stepId: number; data: Partial<ProcessTemplateStepData> }>({
      query: ({ templateId, stepId, data }) => ({
        url: `process-templates/${templateId}/steps/${stepId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['ProcessTemplate'],
    }),
    
    removeStepFromTemplate: builder.mutation<{ message: string }, { templateId: number; stepId: number }>({
      query: ({ templateId, stepId }) => ({
        url: `process-templates/${templateId}/steps/${stepId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['ProcessTemplate'],
    }),
    
    reorderTemplateSteps: builder.mutation<ProcessTemplate, { templateId: number; stepIds: number[] }>({
      query: ({ templateId, stepIds }) => ({
        url: `process-templates/${templateId}/reorder-steps`,
        method: 'PATCH',
        body: { stepIds },
      }),
      invalidatesTags: ['ProcessTemplate'],
    }),

    // Workflow Scheduling
    scheduleWorkflow: builder.mutation<any, { templateId: number; taskId: number; scheduledAt?: string; priority?: number }>({
      query: (data) => ({
        url: 'workflow/schedule',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Process'],
    }),
    
    getProcessesByTask: builder.query<any[], number>({
      query: (taskId) => ({
        url: `processes/by-task/${taskId}`,
        method: 'GET',
      }),
      providesTags: ['Process'],
    }),
  }),
});

export const {
  // Step Definitions
  useGetStepDefinitionsQuery,
  useGetStepDefinitionQuery,
  useCreateStepDefinitionMutation,
  useUpdateStepDefinitionMutation,
  useDeleteStepDefinitionMutation,
  
  // Process Templates
  useGetProcessTemplatesQuery,
  useGetProcessTemplateQuery,
  useCreateProcessTemplateMutation,
  useUpdateProcessTemplateMutation,
  useDeleteProcessTemplateMutation,
  
  // Process Template Steps
  useAddStepToTemplateMutation,
  useUpdateTemplateStepMutation,
  useRemoveStepFromTemplateMutation,
  useReorderTemplateStepsMutation,
  
  // Workflow Scheduling
  useScheduleWorkflowMutation,
  useGetProcessesByTaskQuery,
} = workflowApi;
