import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithAuth } from '../../baseApi';
import { Event } from './event.types';



export const eventsApi = createApi({
    reducerPath: 'eventsApi',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['Event', 'Attendance'],
    endpoints: (builder) => ({
        getEvents: builder.query<Event[], void>({
            query: () => ({
                url: '/events',
                method: 'GET',
            }),
            providesTags: ['Event'],
        }),
        getEvent: builder.query<Event, number>({
            query: (id) => ({
                url: `/events/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, id) => [{ type: 'Event', id }],
        }),
        createEvent: builder.mutation<Event, Partial<Event>>({
            query: (body) => ({
                url: '/events',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Event'],
        }),
        updateEvent: builder.mutation<Event, { id: number; data: Partial<Event> }>({
            query: ({ id, data }) => ({
                url: `/events/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Event', id }],
        }),
        deleteEvent: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `/events/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Event'],
        }),
        attendEvent: builder.mutation<{ success: boolean; message: string }, { eventId: number; code: string }>({
            query: ({ eventId, code }) => ({
                url: `/events/${eventId}/attend`,
                method: 'POST',
                body: { code },
            }),
            invalidatesTags: ['Attendance'],
        }),
        getAttendances: builder.query<{ success: boolean; data: any }, void>({
            query: () => ({
                url: `/events/my-attendances`,
                method: 'GET',
            }),
            providesTags: ['Attendance'],
        }),

        getAllAttendances: builder.query<{ success: boolean; data: any }, void>({
            query: () => ({
                url: `/events/all-attendances`,
                method: 'GET',
            }),
            providesTags: ['Attendance'],
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
    useGetAttendancesQuery,
    useGetAllAttendancesQuery,
} = eventsApi;