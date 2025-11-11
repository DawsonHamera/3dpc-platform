import * as z from 'zod';
import { process_instance_steps_statusSchema } from '../../enums/process_instance_steps_status.schema';
// prettier-ignore
export const process_instance_stepsModelSchema = z.object({
    id: z.number().int(),
    process_instance_id: z.number().int(),
    step_id: z.number().int(),
    step_order: z.number().int(),
    status: process_instance_steps_statusSchema,
    started_at: z.date().nullable(),
    completed_at: z.date().nullable(),
    assigned_user_id: z.number().int().nullable(),
    is_required: z.boolean(),
    input_data: z.string().nullable(),
    output_data: z.string().nullable(),
    metadata: z.string().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    deleted_at: z.date().nullable(),
    due_date: z.date().nullable(),
    notes: z.string().nullable(),
    process_instances: z.unknown(),
    steps: z.unknown(),
    users: z.unknown().nullable()
}).strict();

export type process_instance_stepsPureType = z.infer<typeof process_instance_stepsModelSchema>;
