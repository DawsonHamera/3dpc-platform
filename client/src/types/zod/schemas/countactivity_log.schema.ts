import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logOrderByWithRelationInputObjectSchema as activity_logOrderByWithRelationInputObjectSchema } from './objects/activity_logOrderByWithRelationInput.schema';
import { activity_logWhereInputObjectSchema as activity_logWhereInputObjectSchema } from './objects/activity_logWhereInput.schema';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './objects/activity_logWhereUniqueInput.schema';
import { Activity_logCountAggregateInputObjectSchema as Activity_logCountAggregateInputObjectSchema } from './objects/Activity_logCountAggregateInput.schema';

export const activity_logCountSchema: z.ZodType<Prisma.activity_logCountArgs> = z.object({ orderBy: z.union([activity_logOrderByWithRelationInputObjectSchema, activity_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: activity_logWhereInputObjectSchema.optional(), cursor: activity_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Activity_logCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.activity_logCountArgs>;

export const activity_logCountZodSchema = z.object({ orderBy: z.union([activity_logOrderByWithRelationInputObjectSchema, activity_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: activity_logWhereInputObjectSchema.optional(), cursor: activity_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Activity_logCountAggregateInputObjectSchema ]).optional() }).strict();