import * as z from 'zod';
import { events_event_typeSchema } from '../../enums/events_event_type.schema';
// prettier-ignore
export const eventModelSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string(),
    location: z.string(),
    start_time: z.date(),
    end_time: z.date(),
    image_file_id: z.number().int().nullable(),
    is_featured: z.boolean().nullable(),
    event_type: events_event_typeSchema.nullable(),
    user_id: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    verification_code: z.string(),
    attendances: z.array(z.unknown()),
    image_file: z.unknown().nullable(),
    created_by: z.unknown().nullable()
}).strict();

export type eventPureType = z.infer<typeof eventModelSchema>;
