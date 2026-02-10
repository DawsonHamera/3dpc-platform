import { Prisma } from "@prisma/client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../lib/baseApi";

export type ActivityLog = Prisma.activity_logGetPayload<{
    include: { user: true };
}>;

export const activityApi = createApi({
    reducerPath: "activityApi",
    baseQuery: baseQuery,
    tagTypes: ["ActivityLog"],
    endpoints: (builder) => ({
        getActivityLogs: builder.query<ActivityLog[], { limit: number, filter?: string }>({
            query: (args) => {
                const params = new URLSearchParams();
                if (args?.limit) params.append("limit", args.limit.toString());
                if (args?.filter) params.append("filter", args.filter);

                return {
                    url: `/activity?${params.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["ActivityLog"],
        }),
        getActivityLogsByUser: builder.query<ActivityLog[], number>({
            query: (userId) => ({
                url: `/activity/user/${userId}`,
                method: "GET",
            }),
            providesTags: ["ActivityLog"],
        }),
    }),
});

export const { useGetActivityLogsQuery, useGetActivityLogsByUserQuery } =
    activityApi;
