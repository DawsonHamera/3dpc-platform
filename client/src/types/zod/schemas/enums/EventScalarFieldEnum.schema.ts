import * as z from 'zod';

export const EventScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'location', 'start_time', 'end_time', 'image_file_id', 'is_featured', 'event_type', 'user_id', 'created_at', 'updated_at', 'deleted_at', 'verification_code'])

export type EventScalarFieldEnum = z.infer<typeof EventScalarFieldEnumSchema>;