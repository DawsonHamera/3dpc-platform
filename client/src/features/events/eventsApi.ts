import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseApi";
import z from "zod";
import {
    attendancesModelSchema,
    eventsCreateInputObjectSchema,
    eventsModelSchema,
    eventsUpdateInputObjectSchema,
} from "../../types/zod/schemas";

type Event = z.infer<typeof eventsModelSchema>;
type Attendance = z.infer<typeof attendancesModelSchema>;
type CreateEvent = z.infer<typeof eventsCreateInputObjectSchema>;
type UpdateEvent = z.infer<typeof eventsUpdateInputObjectSchema>;

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
        createEvent: builder.mutation<Event, CreateEvent>({
            query: (body) => ({
                url: "/events",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Event"],
        }),
        updateEvent: builder.mutation<Event, UpdateEvent>({
            query: ({ id, data }) => ({
                url: `/events/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Event", id }],
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
            { eventId: number; code: string }
        >({
            query: ({ eventId, code }) => ({
                url: `/events/${eventId}/attendance/${code}`,
                method: "POST",
            }),
            invalidatesTags: ["Attendance"],
        }),
    }),
});

export const {
    useGetEventsQuery,
    useGetEventQuery,
    useCreateEventMutation,
    useUpdateEventMutation,
    useDeleteEventMutation,
    useAttendEventMutation,
} = eventsApi;
