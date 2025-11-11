import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../baseApi';
import { ProcessInstance, ProcessInstanceStep, ProcessLog } from '../../types';

// Request/Response types for process instance creation
export interface CreateProcessInstanceRequest {
  templateId: number;
  name: string;
  description?: string;
  assignedUserId?: number;
  dueDate?: string;
  priority?: 'low' | 'normal' | 'high' | 'critical';
  metadata?: Record<string, any>;
}

export interface CompleteStepRequest {
  data?: Record<string, any>;
  userId?: number;
}

export const processInstancesApi = createApi({
  reducerPath: 'processInstances',
  baseQuery: baseQueryWithAuth,
  tagTypes: ['ProcessInstance', 'ProcessInstanceStep', 'ProcessLog'],
  endpoints: (build) => ({
    // GET /process-instances
    getProcessInstances: build.query<ProcessInstance[], void>({
      query: () => 'process-instances',
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'ProcessInstance' as const, id })),
            { type: 'ProcessInstance', id: 'LIST' },
          ]
          : [{ type: 'ProcessInstance', id: 'LIST' }],
    }),

    // GET /process-instances/:id
    getProcessInstance: build.query<ProcessInstance, number>({
      query: (id) => `process-instances/${id}`,
      providesTags: (result, error, id) => [{ type: 'ProcessInstance', id }],
    }),

    // GET /process-instances/:id/steps
    getProcessSteps: build.query<ProcessInstanceStep[], number>({
      query: (processInstanceId) => `process-instances/${processInstanceId}/steps`,
      providesTags: (result, error, processInstanceId) => [
        { type: 'ProcessInstanceStep', id: 'LIST' },
        { type: 'ProcessInstance', id: processInstanceId },
      ],
    }),

    // GET /process-instances/:id/logs
    getProcessLogs: build.query<ProcessLog[], number>({
      query: (processInstanceId) => `process-instances/${processInstanceId}/logs`,
      providesTags: (result, error, processInstanceId) => [
        { type: 'ProcessLog', id: 'LIST' },
        { type: 'ProcessInstance', id: processInstanceId },
      ],
    }),

    // POST /process-instances (create and start new process instance)
    createProcessInstance: build.mutation<ProcessInstance, CreateProcessInstanceRequest>({
      query: (body) => ({
        url: 'process-instances',
        method: 'POST',
        body,
      }),
      invalidatesTags: [
        { type: 'ProcessInstance', id: 'LIST' },
        { type: 'ProcessInstanceStep', id: 'LIST' },
      ],
    }),

    // PATCH /process-instances/:id/steps/:stepId/complete
    completeStep: build.mutation<ProcessInstanceStep, { processInstanceId: number; stepId: number; body: CompleteStepRequest }>({
      query: ({ processInstanceId, stepId, body }) => ({
        url: `process-instances/${processInstanceId}/steps/${stepId}/complete`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, { processInstanceId, stepId }) => [
        { type: 'ProcessInstance', id: processInstanceId },
        { type: 'ProcessInstanceStep', id: 'LIST' },
        { type: 'ProcessLog', id: 'LIST' },
      ],
    }),

    // PATCH /process-instances/:id/pause
    pauseProcess: build.mutation<ProcessInstance, number>({
      query: (id) => ({
        url: `process-instances/${id}/pause`,
        method: 'PATCH',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'ProcessInstance', id },
        { type: 'ProcessInstance', id: 'LIST' },
      ],
    }),

    // PATCH /process-instances/:id/resume
    resumeProcess: build.mutation<ProcessInstance, number>({
      query: (id) => ({
        url: `process-instances/${id}/resume`,
        method: 'PATCH',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'ProcessInstance', id },
        { type: 'ProcessInstance', id: 'LIST' },
      ],
    }),

    // PATCH /process-instances/:id/cancel
    cancelProcess: build.mutation<ProcessInstance, number>({
      query: (id) => ({
        url: `process-instances/${id}/cancel`,
        method: 'PATCH',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'ProcessInstance', id },
        { type: 'ProcessInstance', id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useGetProcessInstancesQuery,
  useGetProcessInstanceQuery,
  useGetProcessStepsQuery,
  useGetProcessLogsQuery,
  useCreateProcessInstanceMutation,
  useCompleteStepMutation,
  usePauseProcessMutation,
  useResumeProcessMutation,
  useCancelProcessMutation,
} = processInstancesApi;
