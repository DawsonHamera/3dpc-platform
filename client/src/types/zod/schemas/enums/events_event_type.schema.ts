import * as z from 'zod';

export const events_event_typeSchema = z.enum(['meeting', 'workshop', 'competition', 'maintenance'])

export type events_event_type = z.infer<typeof events_event_typeSchema>;