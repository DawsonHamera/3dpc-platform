import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_contentIncludeObjectSchema as step_contentIncludeObjectSchema } from './objects/step_contentInclude.schema';
import { step_contentOrderByWithRelationInputObjectSchema as step_contentOrderByWithRelationInputObjectSchema } from './objects/step_contentOrderByWithRelationInput.schema';
import { step_contentWhereInputObjectSchema as step_contentWhereInputObjectSchema } from './objects/step_contentWhereInput.schema';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './objects/step_contentWhereUniqueInput.schema';
import { StepContentScalarFieldEnumSchema } from './enums/StepContentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const step_contentFindManySelectSchema: z.ZodType<Prisma.step_contentSelect> = z.object({
    id: z.boolean().optional(),
    step_id: z.boolean().optional(),
    content_order: z.boolean().optional(),
    content_type: z.boolean().optional(),
    content_data: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    steps: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.step_contentSelect>;

export const step_contentFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    step_id: z.boolean().optional(),
    content_order: z.boolean().optional(),
    content_type: z.boolean().optional(),
    content_data: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    steps: z.boolean().optional()
  }).strict();

export const step_contentFindManySchema: z.ZodType<Prisma.step_contentFindManyArgs> = z.object({ select: step_contentFindManySelectSchema.optional(), include: z.lazy(() => step_contentIncludeObjectSchema.optional()), orderBy: z.union([step_contentOrderByWithRelationInputObjectSchema, step_contentOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_contentWhereInputObjectSchema.optional(), cursor: step_contentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StepContentScalarFieldEnumSchema, StepContentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.step_contentFindManyArgs>;

export const step_contentFindManyZodSchema = z.object({ select: step_contentFindManySelectSchema.optional(), include: z.lazy(() => step_contentIncludeObjectSchema.optional()), orderBy: z.union([step_contentOrderByWithRelationInputObjectSchema, step_contentOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_contentWhereInputObjectSchema.optional(), cursor: step_contentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StepContentScalarFieldEnumSchema, StepContentScalarFieldEnumSchema.array()]).optional() }).strict();