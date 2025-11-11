import * as z from 'zod';

export const EventsScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'location', 'start_time', 'end_time', 'image_file_id', 'is_featured', 'event_type', 'created_by', 'created_at', 'updated_at', 'deleted_at', 'verification_code'])

export type EventsScalarFieldEnum = z.infer<typeof EventsScalarFieldEnumSchema>;