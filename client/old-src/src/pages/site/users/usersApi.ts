import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../baseApi';
import type { users } from '@prisma/client'

export const usersApi = createApi({
    reducerPath: "users",
    baseQuery: baseQueryWithAuth,
    tagTypes: ["User"],
    endpoints: (build) => ({
        // Get all users
        getAll: build.query<users[], void>({
            query: () => "/users",
            providesTags: ["User"],
        }),

        // Get a single user by ID
        getOne: build.query<User, number>({
            query: (id) => `/users/${id}`,
            providesTags: ["User"],
        }),

        getScores: build.query<{ name: string; score: number }[], void>({
            query: () => "/users/scores",
            providesTags: ["User"],
        }),

        // Create a new user
        create: build.mutation<User, Partial<User>>({
            query: (body) => ({
                url: "/users",
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),

        // Update an existing user
        update: build.mutation<User, { id: number; body: Partial<User> }>({
            query: ({ id, body }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["User"],
        }),

        // Delete a user
        delete: build.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["User"],
        }),

        // Custom endpoint to send heartbeat and update last active
        sendHeartbeat: build.mutation<any, { id: number }>({
            query: (id) => ({
                url: `/users/${id}/heartbeat`,
                method: "POST",
                body: { last_active: new Date().toISOString() }, // Updating last active timestamp
            }),
            invalidatesTags: () => [], // Don't trigger cache invalidation
        }),

        updateScore: build.mutation<
            void,
            { id: number; points: number; reason: string; details?: string }
        >({
            query: ({ id, points, reason, details }) => ({
                url: `/users/${id}/score`,
                method: "POST",
                body: { points, reason, details },
            }),
            invalidatesTags: ["User"],
        }),

        getUserScoreLogs: build.query<any[], number>({
            query: (id) => `/users/${id}/score/logs`,
            providesTags: ["User"],
        }),
    }),
});

export const {
  useSendHeartbeatMutation: useSendHeartbeatMutation,
  useGetAllQuery: useGetUsersQuery,
  useGetOneQuery: useGetUserQuery,
  useCreateMutation: useAddUserMutation,
  useUpdateMutation: useUpdateUserMutation,
  useDeleteMutation: useRemoveUserMutation,
  useGetScoresQuery: useGetUserScoresQuery,
  useUpdateScoreMutation: useUpdateUserScoreMutation,
  useGetUserScoreLogsQuery: useGetUserScoreLogsQuery,
} = usersApi;
