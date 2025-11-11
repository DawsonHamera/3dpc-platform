import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksIncludeObjectSchema as tasksIncludeObjectSchema } from './objects/tasksInclude.schema';
import { tasksOrderByWithRelationInputObjectSchema as tasksOrderByWithRelationInputObjectSchema } from './objects/tasksOrderByWithRelationInput.schema';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './objects/tasksWhereInput.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './objects/tasksWhereUniqueInput.schema';
import { TasksScalarFieldEnumSchema } from './enums/TasksScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const tasksFindFirstSelectSchema: z.ZodType<Prisma.tasksSelect> = z.object({
    id: z.boolean().optional(),
    request_id: z.boolean().optional(),
    model_id: z.boolean().optional(),
    printer_id: z.boolean().optional(),
    material_slots: z.boolean().optional(),
    quality: z.boolean().optional(),
    quantity: z.boolean().optional(),
    status_id: z.boolean().optional(),
    assigned_user_id: z.boolean().optional(),
    comments: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    scheduled_start_time: z.boolean().optional(),
    scheduled_end_time: z.boolean().optional(),
    process_instance_id: z.boolean().optional(),
    error_reports: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    users: z.boolean().optional(),
    models: z.boolean().optional(),
    printers: z.boolean().optional(),
    requests: z.boolean().optional(),
    task_statuses: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.tasksSelect>;

export const tasksFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    request_id: z.boolean().optional(),
    model_id: z.boolean().optional(),
    printer_id: z.boolean().optional(),
    material_slots: z.boolean().optional(),
    quality: z.boolean().optional(),
    quantity: z.boolean().optional(),
    status_id: z.boolean().optional(),
    assigned_user_id: z.boolean().optional(),
    comments: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    scheduled_start_time: z.boolean().optional(),
    scheduled_end_time: z.boolean().optional(),
    process_instance_id: z.boolean().optional(),
    error_reports: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    users: z.boolean().optional(),
    models: z.boolean().optional(),
    printers: z.boolean().optional(),
    requests: z.boolean().optional(),
    task_statuses: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const tasksFindFirstSchema: z.ZodType<Prisma.tasksFindFirstArgs> = z.object({ select: tasksFindFirstSelectSchema.optional(), include: z.lazy(() => tasksIncludeObjectSchema.optional()), orderBy: z.union([tasksOrderByWithRelationInputObjectSchema, tasksOrderByWithRelationInputObjectSchema.array()]).optional(), where: tasksWhereInputObjectSchema.optional(), cursor: tasksWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TasksScalarFieldEnumSchema, TasksScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.tasksFindFirstArgs>;

export const tasksFindFirstZodSchema = z.object({ select: tasksFindFirstSelectSchema.optional(), include: z.lazy(() => tasksIncludeObjectSchema.optional()), orderBy: z.union([tasksOrderByWithRelationInputObjectSchema, tasksOrderByWithRelationInputObjectSchema.array()]).optional(), where: tasksWhereInputObjectSchema.optional(), cursor: tasksWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TasksScalarFieldEnumSchema, TasksScalarFieldEnumSchema.array()]).optional() }).strict();