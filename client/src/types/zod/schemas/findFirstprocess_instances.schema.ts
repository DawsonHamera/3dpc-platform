import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instancesIncludeObjectSchema as process_instancesIncludeObjectSchema } from './objects/process_instancesInclude.schema';
import { process_instancesOrderByWithRelationInputObjectSchema as process_instancesOrderByWithRelationInputObjectSchema } from './objects/process_instancesOrderByWithRelationInput.schema';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './objects/process_instancesWhereInput.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './objects/process_instancesWhereUniqueInput.schema';
import { ProcessInstancesScalarFieldEnumSchema } from './enums/ProcessInstancesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const process_instancesFindFirstSelectSchema: z.ZodType<Prisma.process_instancesSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    process_template_id: z.boolean().optional(),
    status: z.boolean().optional(),
    priority: z.boolean().optional(),
    assigned_user_id: z.boolean().optional(),
    current_step_order: z.boolean().optional(),
    estimated_duration: z.boolean().optional(),
    actual_duration: z.boolean().optional(),
    started_at: z.boolean().optional(),
    completed_at: z.boolean().optional(),
    due_date: z.boolean().optional(),
    metadata: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    process_instance_steps: z.boolean().optional(),
    process_templates: z.boolean().optional(),
    users: z.boolean().optional(),
    process_logs: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.process_instancesSelect>;

export const process_instancesFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    process_template_id: z.boolean().optional(),
    status: z.boolean().optional(),
    priority: z.boolean().optional(),
    assigned_user_id: z.boolean().optional(),
    current_step_order: z.boolean().optional(),
    estimated_duration: z.boolean().optional(),
    actual_duration: z.boolean().optional(),
    started_at: z.boolean().optional(),
    completed_at: z.boolean().optional(),
    due_date: z.boolean().optional(),
    metadata: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    process_instance_steps: z.boolean().optional(),
    process_templates: z.boolean().optional(),
    users: z.boolean().optional(),
    process_logs: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const process_instancesFindFirstSchema: z.ZodType<Prisma.process_instancesFindFirstArgs> = z.object({ select: process_instancesFindFirstSelectSchema.optional(), include: z.lazy(() => process_instancesIncludeObjectSchema.optional()), orderBy: z.union([process_instancesOrderByWithRelationInputObjectSchema, process_instancesOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_instancesWhereInputObjectSchema.optional(), cursor: process_instancesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessInstancesScalarFieldEnumSchema, ProcessInstancesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.process_instancesFindFirstArgs>;

export const process_instancesFindFirstZodSchema = z.object({ select: process_instancesFindFirstSelectSchema.optional(), include: z.lazy(() => process_instancesIncludeObjectSchema.optional()), orderBy: z.union([process_instancesOrderByWithRelationInputObjectSchema, process_instancesOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_instancesWhereInputObjectSchema.optional(), cursor: process_instancesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessInstancesScalarFieldEnumSchema, ProcessInstancesScalarFieldEnumSchema.array()]).optional() }).strict();