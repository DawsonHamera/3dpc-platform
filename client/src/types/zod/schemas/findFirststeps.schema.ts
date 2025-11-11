import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsIncludeObjectSchema as stepsIncludeObjectSchema } from './objects/stepsInclude.schema';
import { stepsOrderByWithRelationInputObjectSchema as stepsOrderByWithRelationInputObjectSchema } from './objects/stepsOrderByWithRelationInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './objects/stepsWhereInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './objects/stepsWhereUniqueInput.schema';
import { StepsScalarFieldEnumSchema } from './enums/StepsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const stepsFindFirstSelectSchema: z.ZodType<Prisma.stepsSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    is_critical: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    step_type: z.boolean().optional(),
    is_required: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    error_reports: z.boolean().optional(),
    process_instance_steps: z.boolean().optional(),
    process_template_steps: z.boolean().optional(),
    step_actions: z.boolean().optional(),
    step_content: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.stepsSelect>;

export const stepsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    is_critical: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    step_type: z.boolean().optional(),
    is_required: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    error_reports: z.boolean().optional(),
    process_instance_steps: z.boolean().optional(),
    process_template_steps: z.boolean().optional(),
    step_actions: z.boolean().optional(),
    step_content: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const stepsFindFirstSchema: z.ZodType<Prisma.stepsFindFirstArgs> = z.object({ select: stepsFindFirstSelectSchema.optional(), include: z.lazy(() => stepsIncludeObjectSchema.optional()), orderBy: z.union([stepsOrderByWithRelationInputObjectSchema, stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: stepsWhereInputObjectSchema.optional(), cursor: stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StepsScalarFieldEnumSchema, StepsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.stepsFindFirstArgs>;

export const stepsFindFirstZodSchema = z.object({ select: stepsFindFirstSelectSchema.optional(), include: z.lazy(() => stepsIncludeObjectSchema.optional()), orderBy: z.union([stepsOrderByWithRelationInputObjectSchema, stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: stepsWhereInputObjectSchema.optional(), cursor: stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StepsScalarFieldEnumSchema, StepsScalarFieldEnumSchema.array()]).optional() }).strict();