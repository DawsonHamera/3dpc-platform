import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_templatesIncludeObjectSchema as process_templatesIncludeObjectSchema } from './objects/process_templatesInclude.schema';
import { process_templatesOrderByWithRelationInputObjectSchema as process_templatesOrderByWithRelationInputObjectSchema } from './objects/process_templatesOrderByWithRelationInput.schema';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './objects/process_templatesWhereInput.schema';
import { process_templatesWhereUniqueInputObjectSchema as process_templatesWhereUniqueInputObjectSchema } from './objects/process_templatesWhereUniqueInput.schema';
import { ProcessTemplatesScalarFieldEnumSchema } from './enums/ProcessTemplatesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const process_templatesFindFirstOrThrowSelectSchema: z.ZodType<Prisma.process_templatesSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    version: z.boolean().optional(),
    category: z.boolean().optional(),
    estimated_duration: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    printers: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    process_template_steps: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.process_templatesSelect>;

export const process_templatesFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    version: z.boolean().optional(),
    category: z.boolean().optional(),
    estimated_duration: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    deleted_at: z.boolean().optional(),
    printers: z.boolean().optional(),
    process_instances: z.boolean().optional(),
    process_template_steps: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const process_templatesFindFirstOrThrowSchema: z.ZodType<Prisma.process_templatesFindFirstOrThrowArgs> = z.object({ select: process_templatesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => process_templatesIncludeObjectSchema.optional()), orderBy: z.union([process_templatesOrderByWithRelationInputObjectSchema, process_templatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_templatesWhereInputObjectSchema.optional(), cursor: process_templatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessTemplatesScalarFieldEnumSchema, ProcessTemplatesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.process_templatesFindFirstOrThrowArgs>;

export const process_templatesFindFirstOrThrowZodSchema = z.object({ select: process_templatesFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => process_templatesIncludeObjectSchema.optional()), orderBy: z.union([process_templatesOrderByWithRelationInputObjectSchema, process_templatesOrderByWithRelationInputObjectSchema.array()]).optional(), where: process_templatesWhereInputObjectSchema.optional(), cursor: process_templatesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ProcessTemplatesScalarFieldEnumSchema, ProcessTemplatesScalarFieldEnumSchema.array()]).optional() }).strict();