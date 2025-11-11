import * as z from 'zod';

export const process_instances_statusSchema = z.enum(['pending', 'running', 'paused', 'completed', 'failed', 'cancelled'])

export type process_instances_status = z.infer<typeof process_instances_statusSchema>;