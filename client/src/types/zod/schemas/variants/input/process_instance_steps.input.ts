import * as z from 'zod';
import { process_instance_steps_statusSchema } from '../../enums/process_instance_steps_status.schema';
// prettier-ignore
export const process_instance_stepsInputSchema = z.object({
    id: z.number().int(),
    process_instance_id: z.number().int(),
    step_id: z.number().int(),
    step_order: z.number().int(),
    status: process_instance_steps_statusSchema,
    started_at: z.date().optional().nullable(),
    completed_at: z.date().optional().nullable(),
    assigned_user_id: z.number().int().optional().nullable(),
    is_required: z.boolean(),
    input_data: z.string().optional().nullable(),
    output_data: z.string().optional().nullable(),
    metadata: z.string().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    deleted_at: z.date().optional().nullable(),
    due_date: z.date().optional().nullable(),
    notes: z.string().optional().nullable(),
    process_instances: z.unknown(),
    steps: z.unknown(),
    users: z.unknown().optional().nullable()
}).strict();

export type process_instance_stepsInputType = z.infer<typeof process_instance_stepsInputSchema>;
