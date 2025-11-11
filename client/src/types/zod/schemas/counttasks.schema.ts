import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksOrderByWithRelationInputObjectSchema as tasksOrderByWithRelationInputObjectSchema } from './objects/tasksOrderByWithRelationInput.schema';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './objects/tasksWhereInput.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './objects/tasksWhereUniqueInput.schema';
import { TasksCountAggregateInputObjectSchema as TasksCountAggregateInputObjectSchema } from './objects/TasksCountAggregateInput.schema';

export const tasksCountSchema: z.ZodType<Prisma.tasksCountArgs> = z.object({ orderBy: z.union([tasksOrderByWithRelationInputObjectSchema, tasksOrderByWithRelationInputObjectSchema.array()]).optional(), where: tasksWhereInputObjectSchema.optional(), cursor: tasksWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TasksCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.tasksCountArgs>;

export const tasksCountZodSchema = z.object({ orderBy: z.union([tasksOrderByWithRelationInputObjectSchema, tasksOrderByWithRelationInputObjectSchema.array()]).optional(), where: tasksWhereInputObjectSchema.optional(), cursor: tasksWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), TasksCountAggregateInputObjectSchema ]).optional() }).strict();