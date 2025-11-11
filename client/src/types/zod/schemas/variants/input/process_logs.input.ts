import * as z from 'zod';
import { process_logs_levelSchema } from '../../enums/process_logs_level.schema';
import { process_logs_actionSchema } from '../../enums/process_logs_action.schema';
// prettier-ignore
export const process_logsInputSchema = z.object({
    id: z.number().int(),
    process_instance_id: z.number().int(),
    step_order: z.number().int().optional().nullable(),
    level: process_logs_levelSchema,
    action: process_logs_actionSchema,
    message: z.string(),
    data: z.string().optional().nullable(),
    user_id: z.number().int().optional().nullable(),
    created_at: z.date(),
    deleted_at: z.date().optional().nullable(),
    updated_at: z.date(),
    process_instances: z.unknown(),
    users: z.unknown().optional().nullable()
}).strict();

export type process_logsInputType = z.infer<typeof process_logsInputSchema>;
