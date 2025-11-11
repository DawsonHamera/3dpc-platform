import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { error_reportsOrderByWithRelationInputObjectSchema as error_reportsOrderByWithRelationInputObjectSchema } from './objects/error_reportsOrderByWithRelationInput.schema';
import { error_reportsWhereInputObjectSchema as error_reportsWhereInputObjectSchema } from './objects/error_reportsWhereInput.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './objects/error_reportsWhereUniqueInput.schema';
import { Error_reportsCountAggregateInputObjectSchema as Error_reportsCountAggregateInputObjectSchema } from './objects/Error_reportsCountAggregateInput.schema';

export const error_reportsCountSchema: z.ZodType<Prisma.error_reportsCountArgs> = z.object({ orderBy: z.union([error_reportsOrderByWithRelationInputObjectSchema, error_reportsOrderByWithRelationInputObjectSchema.array()]).optional(), where: error_reportsWhereInputObjectSchema.optional(), cursor: error_reportsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Error_reportsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.error_reportsCountArgs>;

export const error_reportsCountZodSchema = z.object({ orderBy: z.union([error_reportsOrderByWithRelationInputObjectSchema, error_reportsOrderByWithRelationInputObjectSchema.array()]).optional(), where: error_reportsWhereInputObjectSchema.optional(), cursor: error_reportsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Error_reportsCountAggregateInputObjectSchema ]).optional() }).strict();