import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './objects/tasksWhereInput.schema';
import { tasksOrderByWithAggregationInputObjectSchema as tasksOrderByWithAggregationInputObjectSchema } from './objects/tasksOrderByWithAggregationInput.schema';
import { tasksScalarWhereWithAggregatesInputObjectSchema as tasksScalarWhereWithAggregatesInputObjectSchema } from './objects/tasksScalarWhereWithAggregatesInput.schema';
import { TasksScalarFieldEnumSchema } from './enums/TasksScalarFieldEnum.schema';
import { TasksCountAggregateInputObjectSchema as TasksCountAggregateInputObjectSchema } from './objects/TasksCountAggregateInput.schema';
import { TasksMinAggregateInputObjectSchema as TasksMinAggregateInputObjectSchema } from './objects/TasksMinAggregateInput.schema';
import { TasksMaxAggregateInputObjectSchema as TasksMaxAggregateInputObjectSchema } from './objects/TasksMaxAggregateInput.schema';
import { TasksAvgAggregateInputObjectSchema as TasksAvgAggregateInputObjectSchema } from './objects/TasksAvgAggregateInput.schema';
import { TasksSumAggregateInputObjectSchema as TasksSumAggregateInputObjectSchema } from './objects/TasksSumAggregateInput.schema';

export const tasksGroupBySchema: z.ZodType<Prisma.tasksGroupByArgs> = z.object({ where: tasksWhereInputObjectSchema.optional(), orderBy: z.union([tasksOrderByWithAggregationInputObjectSchema, tasksOrderByWithAggregationInputObjectSchema.array()]).optional(), having: tasksScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TasksScalarFieldEnumSchema), _count: z.union([ z.literal(true), TasksCountAggregateInputObjectSchema ]).optional(), _min: TasksMinAggregateInputObjectSchema.optional(), _max: TasksMaxAggregateInputObjectSchema.optional(), _avg: TasksAvgAggregateInputObjectSchema.optional(), _sum: TasksSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tasksGroupByArgs>;

export const tasksGroupByZodSchema = z.object({ where: tasksWhereInputObjectSchema.optional(), orderBy: z.union([tasksOrderByWithAggregationInputObjectSchema, tasksOrderByWithAggregationInputObjectSchema.array()]).optional(), having: tasksScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TasksScalarFieldEnumSchema), _count: z.union([ z.literal(true), TasksCountAggregateInputObjectSchema ]).optional(), _min: TasksMinAggregateInputObjectSchema.optional(), _max: TasksMaxAggregateInputObjectSchema.optional(), _avg: TasksAvgAggregateInputObjectSchema.optional(), _sum: TasksSumAggregateInputObjectSchema.optional() }).strict();