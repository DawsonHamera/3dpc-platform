import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseApi";

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: baseQuery,
    tagTypes: ["Tasks"],
    endpoints: (builder) => ({
        getTasks: builder.query<any, void>({
            query: () => "tasks",
            providesTags: ["Tasks"],
        }),
        getTaskById: builder.query({
            query: (id) => `tasks/${id}`,
            providesTags: (result, error, id) => [{ type: "Tasks", id }],
        }),
        getAllByUsers: builder.query<any, void>({
            query: () => `tasks/users`,
            providesTags: ["Tasks"],
        }),
        getUserTasks: builder.query<any, void>({
            query: () => `tasks/user`,
            providesTags: ["Tasks"],
        }),
        getOpenTasks: builder.query<any, void>({
            query: () => `tasks/open`,
            providesTags: ["Tasks"],
        }),
        createTask: builder.mutation({
            query: (newTask) => ({
                url: "tasks",
                method: "POST",
                body: newTask,
            }),
            invalidatesTags: ["Tasks"],
        }),
        updateTask: builder.mutation({
            query: ({ id, ...patch }) => ({
                url: `tasks/${id}`,
                method: "PATCH",
                body: patch,
            }),
            invalidatesTags: ["Tasks"],
        }),
        updateTaskStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `tasks/${id}/status`,
                method: "PATCH",
                body: { status },
            }),
            invalidatesTags: ["Tasks"],
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Tasks"],
        }),
        claimTask: builder.mutation({
            query: ({ id }) => ({
                url: `tasks/${id}/claim`,
                method: "PATCH",
            }),
            invalidatesTags: ["Tasks"],
        }),
        releaseTask: builder.mutation({
            query: ({ id }) => ({
                url: `tasks/${id}/release`,
                method: "PATCH",
            }),
            invalidatesTags: ["Tasks"],
        }),
    }),
});

export const {
    useGetTasksQuery,
    useGetTaskByIdQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useGetUserTasksQuery,
    useUpdateTaskStatusMutation,
    useGetOpenTasksQuery,
    useReleaseTaskMutation,
    useClaimTaskMutation,
    useGetAllByUsersQuery,
} = tasksApi;
