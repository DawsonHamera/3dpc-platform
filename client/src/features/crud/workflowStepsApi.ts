import { createCrudApi } from '../baseApi'

export interface WorkflowStep {
    id: number;
    title: string;
    description: string;
    order: number;
    is_critical: boolean;
    created_at: string;
    updated_at: string;
};

export const workflowStepsApi = createCrudApi<WorkflowStep>({
    reducerPath: 'workflowSteps',
    tagType: 'WorkflowStep',
    endpoint: 'workflowsteps'
})

export const {
    useGetAllQuery: useGetWorkflowStepsQuery, 
    useGetOneQuery: useGetWorkflowStepQuery, 
    useUpdateMutation: useUpdateWorkflowStepMutation,
    useCreateMutation: useAddWorkflowStepMutation, 
    useDeleteMutation: useRemoveWorkflowStepMutation
} = workflowStepsApi
