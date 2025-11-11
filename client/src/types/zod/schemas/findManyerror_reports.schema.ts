import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { error_reportsIncludeObjectSchema as error_reportsIncludeObjectSchema } from './objects/error_reportsInclude.schema';
import { error_reportsOrderByWithRelationInputObjectSchema as error_reportsOrderByWithRelationInputObjectSchema } from './objects/error_reportsOrderByWithRelationInput.schema';
import { error_reportsWhereInputObjectSchema as error_reportsWhereInputObjectSchema } from './objects/error_reportsWhereInput.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './objects/error_reportsWhereUniqueInput.schema';
import { ErrorReportsScalarFieldEnumSchema } from './enums/ErrorReportsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const error_reportsFindManySelectSchema: z.ZodType<Prisma.error_reportsSelect> = z.object({
    id: z.boolean().optional(),
    task_id: z.boolean().optional(),
    submitted_by: z.boolean().optional(),
    step_id: z.boolean().optional(),
    description: z.boolean().optional(),
    image_url: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    steps: z.boolean().optional(),
    users: z.boolean().optional(),
    tasks: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.error_reportsSelect>;

export const error_reportsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    task_id: z.boolean().optional(),
    submitted_by: z.boolean().optional(),
    step_id: z.boolean().optional(),
    description: z.boolean().optional(),
    image_url: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    steps: z.boolean().optional(),
    users: z.boolean().optional(),
    tasks: z.boolean().optional()
  }).strict();

export const error_reportsFindManySchema: z.ZodType<Prisma.error_reportsFindManyArgs> = z.object({ select: error_reportsFindManySelectSchema.optional(), include: z.lazy(() => error_reportsIncludeObjectSchema.optional()), orderBy: z.union([error_reportsOrderByWithRelationInputObjectSchema, error_reportsOrderByWithRelationInputObjectSchema.array()]).optional(), where: error_reportsWhereInputObjectSchema.optional(), cursor: error_reportsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ErrorReportsScalarFieldEnumSchema, ErrorReportsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.error_reportsFindManyArgs>;

export const error_reportsFindManyZodSchema = z.object({ select: error_reportsFindManySelectSchema.optional(), include: z.lazy(() => error_reportsIncludeObjectSchema.optional()), orderBy: z.union([error_reportsOrderByWithRelationInputObjectSchema, error_reportsOrderByWithRelationInputObjectSchema.array()]).optional(), where: error_reportsWhereInputObjectSchema.optional(), cursor: error_reportsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ErrorReportsScalarFieldEnumSchema, ErrorReportsScalarFieldEnumSchema.array()]).optional() }).strict();