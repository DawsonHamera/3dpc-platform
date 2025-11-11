import * as z from 'zod';
import { process_instances_statusSchema } from '../../enums/process_instances_status.schema';
import { process_instances_prioritySchema } from '../../enums/process_instances_priority.schema';
// prettier-ignore
export const process_instancesInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().optional().nullable(),
    process_template_id: z.number().int(),
    status: process_instances_statusSchema,
    priority: process_instances_prioritySchema,
    assigned_user_id: z.number().int().optional().nullable(),
    current_step_order: z.number().int(),
    estimated_duration: z.number().int().optional().nullable(),
    actual_duration: z.number().int().optional().nullable(),
    started_at: z.date().optional().nullable(),
    completed_at: z.date().optional().nullable(),
    due_date: z.date().optional().nullable(),
    metadata: z.string().optional().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    deleted_at: z.date().optional().nullable(),
    process_instance_steps: z.array(z.unknown()),
    process_templates: z.unknown(),
    users: z.unknown().optional().nullable(),
    process_logs: z.array(z.unknown()),
    tasks: z.array(z.unknown())
}).strict();

export type process_instancesInputType = z.infer<typeof process_instancesInputSchema>;
