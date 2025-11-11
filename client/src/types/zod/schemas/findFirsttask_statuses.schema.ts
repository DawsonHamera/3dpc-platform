import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { task_statusesIncludeObjectSchema as task_statusesIncludeObjectSchema } from './objects/task_statusesInclude.schema';
import { task_statusesOrderByWithRelationInputObjectSchema as task_statusesOrderByWithRelationInputObjectSchema } from './objects/task_statusesOrderByWithRelationInput.schema';
import { task_statusesWhereInputObjectSchema as task_statusesWhereInputObjectSchema } from './objects/task_statusesWhereInput.schema';
import { task_statusesWhereUniqueInputObjectSchema as task_statusesWhereUniqueInputObjectSchema } from './objects/task_statusesWhereUniqueInput.schema';
import { TaskStatusesScalarFieldEnumSchema } from './enums/TaskStatusesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const task_statusesFindFirstSelectSchema: z.ZodType<Prisma.task_statusesSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.task_statusesSelect>;

export const task_statusesFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    tasks: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const task_statusesFindFirstSchema: z.ZodType<Prisma.task_statusesFindFirstArgs> = z.object({ select: task_statusesFindFirstSelectSchema.optional(), include: z.lazy(() => task_statusesIncludeObjectSchema.optional()), orderBy: z.union([task_statusesOrderByWithRelationInputObjectSchema, task_statusesOrderByWithRelationInputObjectSchema.array()]).optional(), where: task_statusesWhereInputObjectSchema.optional(), cursor: task_statusesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskStatusesScalarFieldEnumSchema, TaskStatusesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.task_statusesFindFirstArgs>;

export const task_statusesFindFirstZodSchema = z.object({ select: task_statusesFindFirstSelectSchema.optional(), include: z.lazy(() => task_statusesIncludeObjectSchema.optional()), orderBy: z.union([task_statusesOrderByWithRelationInputObjectSchema, task_statusesOrderByWithRelationInputObjectSchema.array()]).optional(), where: task_statusesWhereInputObjectSchema.optional(), cursor: task_statusesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TaskStatusesScalarFieldEnumSchema, TaskStatusesScalarFieldEnumSchema.array()]).optional() }).strict();