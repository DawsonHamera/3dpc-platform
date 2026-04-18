import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../lib/baseApi";

export interface CreateErrorReportRequest {
    description: string;
    type?: "bug" | "feature_request" | "task_issue" | "other";
}

export const errorReportsApi = createApi({
    reducerPath: "errorReportsApi",
    baseQuery,
    tagTypes: ["ErrorReports"],
    endpoints: (builder) => ({
        createErrorReport: builder.mutation<void, CreateErrorReportRequest>({
            query: (report) => ({
                url: "error-reports",
                method: "POST",
                body: report,
            }),
            invalidatesTags: ["ErrorReports"],
        }),
    }),
});

export const { useCreateErrorReportMutation } = errorReportsApi;
