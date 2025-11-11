import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logsOrderByWithRelationInputObjectSchema as point_logsOrderByWithRelationInputObjectSchema } from './objects/point_logsOrderByWithRelationInput.schema';
import { point_logsWhereInputObjectSchema as point_logsWhereInputObjectSchema } from './objects/point_logsWhereInput.schema';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './objects/point_logsWhereUniqueInput.schema';
import { Point_logsCountAggregateInputObjectSchema as Point_logsCountAggregateInputObjectSchema } from './objects/Point_logsCountAggregateInput.schema';

export const point_logsCountSchema: z.ZodType<Prisma.point_logsCountArgs> = z.object({ orderBy: z.union([point_logsOrderByWithRelationInputObjectSchema, point_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: point_logsWhereInputObjectSchema.optional(), cursor: point_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Point_logsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.point_logsCountArgs>;

export const point_logsCountZodSchema = z.object({ orderBy: z.union([point_logsOrderByWithRelationInputObjectSchema, point_logsOrderByWithRelationInputObjectSchema.array()]).optional(), where: point_logsWhereInputObjectSchema.optional(), cursor: point_logsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Point_logsCountAggregateInputObjectSchema ]).optional() }).strict();