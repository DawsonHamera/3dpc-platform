import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instance_stepsIncludeObjectSchema as process_instance_stepsIncludeObjectSchema } from './objects/process_instance_stepsInclude.schema';
import { process_instance_stepsOrderByWithRelationInputObjectSchema as process_instance_stepsOrderByWithRelationInputObjectSchema } from './objects/process_instance_stepsOrderByWithRelationInput.schema';
import { process_instance_stepsWhereInputObjectSchema as process_instance_stepsWhereInputObjectSchema } from './objects/process_instance_stepsWhereInput.schema';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './objects/process_instance_stepsWhereUniqueInput.schema';
import { ProcessInstanceStepsScalarFieldEnumSchema } from './enums/ProcessInstanceStepsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const process_instance_stepsFindManySelectSchema: z.ZodType<Prisma.process_instance_stepsSelect> = z.object({
    id: z.boolean().optional(),
    process_instance_id: z.boolean().optional(),
    step_id: z.boolean().optional(),
    step_order: z.boolean().optional(),
    status: z.boolean().optional(),
    started_at: z.boolean().optional(),
    completed_at: z.boolean().optional(),
    assigned_user_id: z.boolean().optional(),
    is_required: z.boolean().optional(),
    input_data: z.boolean().optional(),
    output_data: z.boolean().optional(),
    metadata: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    due_date: z.boolean().optional(),
    notes: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    steps: z.boolean().optional(),
    users: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.process_instance_stepsSelect>;

export const process_instance_stepsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    process_instance_id: z.boolean().optional(),
    step_id: z.boolean().optional(),
    step_order: z.boolean().optional(),
    status: z.boolean().optional(),
    started_at: z.boolean().optional(),
    completed_at: z.boolean().optional(),
    assigned_user_id: z.boolean().optional(),
    is_required: z.boolean().optional(),
    input_data: z.boolean().optional(),
    output_data: z.boolean().optional(),
    metadata: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    due_date: z.boolean().optional(),
    notes: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    steps: z.boolean().optional(),
    users: z.boolean().optional()
  }).strict();

export const process_instance_stepsFindManySchema: z.ZodType<Prisma.process_instance_stepsFindManyArgs> = z.object({ select: process_instance_stepsFindManySelectSchema.optional(), include: z.lazy(() => process_instance_stepsIncludeObjectSchema.optional()), orderBy: z.union([process_instance_stepsOrderByWithRelationInputObjectSchema, process_instance_stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_instance_stepsWhereInputObjectSchema.optional(), cursor: process_instance_stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessInstanceStepsScalarFieldEnumSchema, ProcessInstanceStepsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.process_instance_stepsFindManyArgs>;

export const process_instance_stepsFindManyZodSchema = z.object({ select: process_instance_stepsFindManySelectSchema.optional(), include: z.lazy(() => process_instance_stepsIncludeObjectSchema.optional()), orderBy: z.union([process_instance_stepsOrderByWithRelationInputObjectSchema, process_instance_stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_instance_stepsWhereInputObjectSchema.optional(), cursor: process_instance_stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessInstanceStepsScalarFieldEnumSchema, ProcessInstanceStepsScalarFieldEnumSchema.array()]).optional() }).strict();