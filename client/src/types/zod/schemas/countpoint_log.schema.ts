import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { point_logOrderByWithRelationInputObjectSchema as point_logOrderByWithRelationInputObjectSchema } from './objects/point_logOrderByWithRelationInput.schema';
import { point_logWhereInputObjectSchema as point_logWhereInputObjectSchema } from './objects/point_logWhereInput.schema';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './objects/point_logWhereUniqueInput.schema';
import { Point_logCountAggregateInputObjectSchema as Point_logCountAggregateInputObjectSchema } from './objects/Point_logCountAggregateInput.schema';

export const point_logCountSchema: z.ZodType<Prisma.point_logCountArgs> = z.object({ orderBy: z.union([point_logOrderByWithRelationInputObjectSchema, point_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: point_logWhereInputObjectSchema.optional(), cursor: point_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Point_logCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.point_logCountArgs>;

export const point_logCountZodSchema = z.object({ orderBy: z.union([point_logOrderByWithRelationInputObjectSchema, point_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: point_logWhereInputObjectSchema.optional(), cursor: point_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Point_logCountAggregateInputObjectSchema ]).optional() }).strict();