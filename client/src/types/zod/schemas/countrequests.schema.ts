import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsOrderByWithRelationInputObjectSchema as requestsOrderByWithRelationInputObjectSchema } from './objects/requestsOrderByWithRelationInput.schema';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './objects/requestsWhereInput.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './objects/requestsWhereUniqueInput.schema';
import { RequestsCountAggregateInputObjectSchema as RequestsCountAggregateInputObjectSchema } from './objects/RequestsCountAggregateInput.schema';

export const requestsCountSchema: z.ZodType<Prisma.requestsCountArgs> = z.object({ orderBy: z.union([requestsOrderByWithRelationInputObjectSchema, requestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: requestsWhereInputObjectSchema.optional(), cursor: requestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RequestsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.requestsCountArgs>;

export const requestsCountZodSchema = z.object({ orderBy: z.union([requestsOrderByWithRelationInputObjectSchema, requestsOrderByWithRelationInputObjectSchema.array()]).optional(), where: requestsWhereInputObjectSchema.optional(), cursor: requestsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), RequestsCountAggregateInputObjectSchema ]).optional() }).strict();