import { Prisma } from "@prisma/client";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../../shared/lib/baseApi";

export type Event = Prisma.eventGetPayload<{
    include: {
        image_file: true;
        attendances: { include: { user: true } };
        created_by: true;
    };
}>;
export type Attendance = Prisma.attendanceGetPayload<{
    include: { user: true; event: true };
}>;
export type CreateEvent = Prisma.eventCreateInput;
export type UpdateEvent = Prisma.eventUpdateInput;

export const eventsApi = createApi({
    reducerPath: "eventsApi",
    baseQuery: baseQuery,
    tagTypes: ["Event", "Attendance"],
    endpoints: (builder) => ({
        getEvents: builder.query<Event[], void>({
            query: () => ({
                url: "/events",
                method: "GET",
            }),
            providesTags: ["Event"],
        }),
        getEvent: builder.query<Event, number>({
            query: (id) => ({
                url: `/events/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "Event", id }],
        }),
        getUserAttendance: builder.query<Attendance, number>({
            query: (eventId) => ({
                url: `/events/${eventId}/attendance/`,
                method: "GET",
            }),
            providesTags: ["Attendance"],
        }),
        getEventCode: builder.query<{ verification_code: string }, number>({
            query: (id) => ({
                url: `/events/${id}/code`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "Event", id }],
        }),
        createEvent: builder.mutation<Event, CreateEvent>({
            query: (body) => ({
                url: "/events",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Event"],
        }),
        updateEvent: builder.mutation<Event, { id: number; data: UpdateEvent }>({
            query: ({ id, data }) => ({
                url: `/events/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Event"],
        }),
        deleteEvent: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `/events/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Event"],
        }),
        attendEvent: builder.mutation<
            Attendance,
            { eventId: number; code?: string; status?: string }
        >({
            query: ({ eventId, code, status }) => {
                const params = new URLSearchParams();
                if (code) params.append("code", code);
                if (status) params.append("status", status);
                return {
                    url: `/events/${eventId}/attendance?${params.toString()}`,
                    method: "POST",
                };
            },
            invalidatesTags: ["Attendance", "Event"],
        }),
    }),
});

export const {
    useGetEventsQuery,
    useGetEventQuery,
    useGetUserAttendanceQuery,
    useCreateEventMutation,
    useUpdateEventMutation,
    useDeleteEventMutation,
    useAttendEventMutation,
    useGetEventCodeQuery,
} = eventsApi;
