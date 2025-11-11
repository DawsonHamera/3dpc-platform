import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_template_stepsIncludeObjectSchema as process_template_stepsIncludeObjectSchema } from './objects/process_template_stepsInclude.schema';
import { process_template_stepsOrderByWithRelationInputObjectSchema as process_template_stepsOrderByWithRelationInputObjectSchema } from './objects/process_template_stepsOrderByWithRelationInput.schema';
import { process_template_stepsWhereInputObjectSchema as process_template_stepsWhereInputObjectSchema } from './objects/process_template_stepsWhereInput.schema';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './objects/process_template_stepsWhereUniqueInput.schema';
import { ProcessTemplateStepsScalarFieldEnumSchema } from './enums/ProcessTemplateStepsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const process_template_stepsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.process_template_stepsSelect> = z.object({
    id: z.boolean().optional(),
    process_template_id: z.boolean().optional(),
    step_id: z.boolean().optional(),
    step_order: z.boolean().optional(),
    is_required: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    process_templates: z.boolean().optional(),
    steps: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.process_template_stepsSelect>;

export const process_template_stepsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    process_template_id: z.boolean().optional(),
    step_id: z.boolean().optional(),
    step_order: z.boolean().optional(),
    is_required: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    process_templates: z.boolean().optional(),
    steps: z.boolean().optional()
  }).strict();

export const process_template_stepsFindFirstOrThrowSchema: z.ZodType<Prisma.process_template_stepsFindFirstOrThrowArgs> = z.object({ select: process_template_stepsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => process_template_stepsIncludeObjectSchema.optional()), orderBy: z.union([process_template_stepsOrderByWithRelationInputObjectSchema, process_template_stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_template_stepsWhereInputObjectSchema.optional(), cursor: process_template_stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessTemplateStepsScalarFieldEnumSchema, ProcessTemplateStepsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.process_template_stepsFindFirstOrThrowArgs>;

export const process_template_stepsFindFirstOrThrowZodSchema = z.object({ select: process_template_stepsFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => process_template_stepsIncludeObjectSchema.optional()), orderBy: z.union([process_template_stepsOrderByWithRelationInputObjectSchema, process_template_stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_template_stepsWhereInputObjectSchema.optional(), cursor: process_template_stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessTemplateStepsScalarFieldEnumSchema, ProcessTemplateStepsScalarFieldEnumSchema.array()]).optional() }).strict();