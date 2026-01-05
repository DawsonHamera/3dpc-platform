import { Prisma } from "@prisma/client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/lib/baseApi";

export type RecyclingLog = Prisma.recycling_logGetPayload<{
    include: { created_by: true };
}>;
export type CreateRecyclingLog = Prisma.recycling_logCreateInput;

export const recyclingLogsApi = createApi({
    reducerPath: "recyclingLogsApi",
    baseQuery: baseQuery,
    tagTypes: ["RecyclingLog"],
    endpoints: (builder) => ({
        getRecycleLogs: builder.query<RecyclingLog[], void>({
            query: () => ({
                url: "/recycling",
                method: "GET",
            }),
            providesTags: ["RecyclingLog"],
        }),
        getRecyclingStats: builder.query<
            { bottles: number; filamentCreated: number; filamentUsed: number },
            void
        >({
            query: () => ({
                url: "/recycling/stats",
                method: "GET",
            }),
            providesTags: ["RecyclingLog"],
        }),
        getRecyclingLog: builder.query<RecyclingLog, number>({
            query: (id) => ({
                url: `/recycling/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "RecyclingLog", id }],
        }),
        createRecyclingLog: builder.mutation<RecyclingLog, CreateRecyclingLog>({
            query: (body) => ({
                url: "/recycling",
                method: "POST",
                body,
            }),
            invalidatesTags: ["RecyclingLog"],
        }),
        deleteRecyclingLog: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `/recycling/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["RecyclingLog"],
        }),
    }),
});

export const {
    useGetRecyclingStatsQuery,
    useGetRecyclingLogQuery,
    useCreateRecyclingLogMutation,
    useDeleteRecyclingLogMutation,
    useGetRecycleLogsQuery,
} = recyclingLogsApi;
