import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../baseApi';
import { Task, CreateTaskData } from '../../types';

export const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: baseQueryWithAuth,
  tagTypes: ['Task'],
  endpoints: (build) => ({
    // GET /tasks
    getTasks: build.query<Task[], void>({
      query: () => 'tasks',
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Task' as const, id })),
            { type: 'Task', id: 'LIST' },
          ]
          : [{ type: 'Task', id: 'LIST' }],
    }),

    // GET /tasks/:id
    getTask: build.query<Task, number>({
      query: (id) => `tasks/${id}`,
      providesTags: (result, error, id) => [{ type: 'Task', id }],
    }),


    // POST /tasks
    addTask: build.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: 'tasks',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Task', id: 'LIST' }],
    }),

    // PUT /tasks/:id
    updateTask: build.mutation<Task, { id: number; body: Partial<Task> }>({
      query: ({ id, body }) => ({
        url: `tasks/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Task', id },
        { type: 'Task', id: 'LIST' },
      ],
    }),

    // DELETE /tasks/:id
    removeTask: build.mutation<void, number>({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Task', id },
        { type: 'Task', id: 'LIST' },
      ],
    }),

    // PUT /tasks/schedule/:id
    scheduleTask: build.mutation<Task, { id: number; body: Partial<Task> }>({
      query: ({ id, body }) => ({
        url: `tasks/${id}/schedule`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Task', id },
        { type: 'Task', id: 'LIST' },
      ],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useRemoveTaskMutation,
  useScheduleTaskMutation,
} = tasksApi;

export type { Task, CreateTaskData } from '../../types';
