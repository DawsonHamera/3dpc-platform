import * as z from 'zod';
import { events_event_typeSchema } from '../../enums/events_event_type.schema';
// prettier-ignore
export const eventInputSchema = z.object({
    id: z.number().int(),
    title: z.string(),
    description: z.string(),
    location: z.string(),
    start_time: z.date(),
    end_time: z.date(),
    image_file_id: z.number().int().optional().nullable(),
    is_featured: z.boolean().optional().nullable(),
    event_type: events_event_typeSchema.optional().nullable(),
    created_by: z.number().int(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    deleted_at: z.date().optional().nullable(),
    verification_code: z.string(),
    attendances: z.array(z.unknown()),
    files: z.unknown().optional().nullable(),
    users: z.unknown()
}).strict();

export type eventInputType = z.infer<typeof eventInputSchema>;
