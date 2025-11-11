import * as z from 'zod';
import { process_instances_statusSchema } from '../../enums/process_instances_status.schema';
import { process_instances_prioritySchema } from '../../enums/process_instances_priority.schema';
// prettier-ignore
export const process_instancesModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    process_template_id: z.number().int(),
    status: process_instances_statusSchema,
    priority: process_instances_prioritySchema,
    assigned_user_id: z.number().int().nullable(),
    current_step_order: z.number().int(),
    estimated_duration: z.number().int().nullable(),
    actual_duration: z.number().int().nullable(),
    started_at: z.date().nullable(),
    completed_at: z.date().nullable(),
    due_date: z.date().nullable(),
    metadata: z.string().nullable(),
    created_at: z.date(),
    updated_at: z.date(),
    deleted_at: z.date().nullable(),
    process_instance_steps: z.array(z.unknown()),
    process_templates: z.unknown(),
    users: z.unknown().nullable(),
    process_logs: z.array(z.unknown()),
    tasks: z.array(z.unknown())
}).strict();

export type process_instancesPureType = z.infer<typeof process_instancesModelSchema>;
