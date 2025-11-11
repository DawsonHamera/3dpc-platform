import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksOrderByWithRelationInputObjectSchema as tasksOrderByWithRelationInputObjectSchema } from './objects/tasksOrderByWithRelationInput.schema';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './objects/tasksWhereInput.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './objects/tasksWhereUniqueInput.schema';
import { TasksCountAggregateInputObjectSchema as TasksCountAggregateInputObjectSchema } from './objects/TasksCountAggregateInput.schema';
import { TasksMinAggregateInputObjectSchema as TasksMinAggregateInputObjectSchema } from './objects/TasksMinAggregateInput.schema';
import { TasksMaxAggregateInputObjectSchema as TasksMaxAggregateInputObjectSchema } from './objects/TasksMaxAggregateInput.schema';
import { TasksAvgAggregateInputObjectSchema as TasksAvgAggregateInputObjectSchema } from './objects/TasksAvgAggregateInput.schema';
import { TasksSumAggregateInputObjectSchema as TasksSumAggregateInputObjectSchema } from './objects/TasksSumAggregateInput.schema';

export const tasksAggregateSchema: z.ZodType<Prisma.tasksAggregateArgs> = z.object({ orderBy: z.union([tasksOrderByWithRelationInputObjectSchema, tasksOrderByWithRelationInputObjectSchema.array()]).optional(), where: tasksWhereInputObjectSchema.optional(), cursor: tasksWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TasksCountAggregateInputObjectSchema ]).optional(), _min: TasksMinAggregateInputObjectSchema.optional(), _max: TasksMaxAggregateInputObjectSchema.optional(), _avg: TasksAvgAggregateInputObjectSchema.optional(), _sum: TasksSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tasksAggregateArgs>;

export const tasksAggregateZodSchema = z.object({ orderBy: z.union([tasksOrderByWithRelationInputObjectSchema, tasksOrderByWithRelationInputObjectSchema.array()]).optional(), where: tasksWhereInputObjectSchema.optional(), cursor: tasksWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), TasksCountAggregateInputObjectSchema ]).optional(), _min: TasksMinAggregateInputObjectSchema.optional(), _max: TasksMaxAggregateInputObjectSchema.optional(), _avg: TasksAvgAggregateInputObjectSchema.optional(), _sum: TasksSumAggregateInputObjectSchema.optional() }).strict();