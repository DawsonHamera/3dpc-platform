import * as z from 'zod';

export const process_instances_prioritySchema = z.enum(['low', 'normal', 'high', 'critical'])

export type process_instances_priority = z.infer<typeof process_instances_prioritySchema>;