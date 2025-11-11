import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logsOrderByWithRelationInputObjectSchema as activity_logsOrderByWithRelationInputObjectSchema } from './objects/activity_logsOrderByWithRelationInput.schema';
import { activity_logsWhereInputObjectSchema as activity_logsWhereInputObjectSchema } from './objects/activity_logsWhereInput.schema';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './objects/activity_logsWhereUniqueInput.schema';
import { Activity_logsCountAggregateInputObjectSchema as Activity_logsCountAggregateInputObjectSchema } from './objects/Activity_logsCountAggregateInput.schema';

export const activity_logsCountSchema: z.ZodType<Prisma.activity_logsCountArgs> = z.object({ orderBy: z.union([activity_logsOrderByWithRelationInputObjectSchema, activity_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: activity_logsWhereInputObjectSchema.optional(), cursor: activity_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Activity_logsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.activity_logsCountArgs>;

export const activity_logsCountZodSchema = z.object({ orderBy: z.union([activity_logsOrderByWithRelationInputObjectSchema, activity_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: activity_logsWhereInputObjectSchema.optional(), cursor: activity_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Activity_logsCountAggregateInputObjectSchema ]).optional() }).strict();