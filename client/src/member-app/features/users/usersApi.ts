import { Prisma } from "@prisma/client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/lib/baseApi";

export type User = Prisma.userGetPayload<{
    include: { role: true };
}>;
export type CreateUser = Prisma.userCreateInput;
export type UpdateUser = Prisma.userUpdateInput;

export const usersApi = createApi({
    reducerPath: "users",
    baseQuery: baseQuery,
    tagTypes: ["User"],
    endpoints: (build) => ({
        // Get all users
        getAll: build.query<User[], void>({
            query: () => "/users",
            providesTags: ["User"],
        }),

        // Get a single user by ID
        getOne: build.query<User, number>({
            query: (id) => `/users/${id}`,
            providesTags: ["User"],
        }),

        getPoints: build.query<{ name: string; points: number }[], void>({
            query: () => "/users/points",
            providesTags: ["User"],
        }),

        // Create a new user
        create: build.mutation<User, CreateUser>({
            query: (body) => ({
                url: "/users",
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),

        // Update an existing user
        update: build.mutation<User, { id: number; body: UpdateUser }>({
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
        sendHeartbeat: build.mutation<any, void>({
            query: () => ({
                url: `/users/heartbeat`,
                method: "POST",
            }),
            invalidatesTags: () => [], // Don't trigger cache invalidation
        }),

        updatePoints: build.mutation<
            void,
            { id: number; points: number; reason: string; details?: string }
        >({
            query: ({ id, points, reason, details }) => ({
                url: `/users/${id}/points`,
                method: "POST",
                body: { points, reason, details },
            }),
            invalidatesTags: ["User"],
        }),

        getUserPointsLogs: build.query<any[], number>({
            query: (id) => `/users/${id}/points/logs`,
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
    useGetPointsQuery: useGetUserPointsQuery,
    useUpdatePointsMutation: useUpdateUserPointsMutation,
    useGetUserPointsLogsQuery: useGetUserPointsLogsQuery,
} = usersApi;
