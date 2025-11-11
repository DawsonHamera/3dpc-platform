import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { task_statusesOrderByWithRelationInputObjectSchema as task_statusesOrderByWithRelationInputObjectSchema } from './objects/task_statusesOrderByWithRelationInput.schema';
import { task_statusesWhereInputObjectSchema as task_statusesWhereInputObjectSchema } from './objects/task_statusesWhereInput.schema';
import { task_statusesWhereUniqueInputObjectSchema as task_statusesWhereUniqueInputObjectSchema } from './objects/task_statusesWhereUniqueInput.schema';
import { Task_statusesCountAggregateInputObjectSchema as Task_statusesCountAggregateInputObjectSchema } from './objects/Task_statusesCountAggregateInput.schema';

export const task_statusesCountSchema: z.ZodType<Prisma.task_statusesCountArgs> = z.object({ orderBy: z.union([task_statusesOrderByWithRelationInputObjectSchema, task_statusesOrderByWithRelationInputObjectSchema.array()]).optional(), where: task_statusesWhereInputObjectSchema.optional(), cursor: task_statusesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Task_statusesCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.task_statusesCountArgs>;

export const task_statusesCountZodSchema = z.object({ orderBy: z.union([task_statusesOrderByWithRelationInputObjectSchema, task_statusesOrderByWithRelationInputObjectSchema.array()]).optional(), where: task_statusesWhereInputObjectSchema.optional(), cursor: task_statusesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Task_statusesCountAggregateInputObjectSchema ]).optional() }).strict();