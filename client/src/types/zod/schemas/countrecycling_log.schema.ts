import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { recycling_logOrderByWithRelationInputObjectSchema as recycling_logOrderByWithRelationInputObjectSchema } from './objects/recycling_logOrderByWithRelationInput.schema';
import { recycling_logWhereInputObjectSchema as recycling_logWhereInputObjectSchema } from './objects/recycling_logWhereInput.schema';
import { recycling_logWhereUniqueInputObjectSchema as recycling_logWhereUniqueInputObjectSchema } from './objects/recycling_logWhereUniqueInput.schema';
import { Recycling_logCountAggregateInputObjectSchema as Recycling_logCountAggregateInputObjectSchema } from './objects/Recycling_logCountAggregateInput.schema';

export const recycling_logCountSchema: z.ZodType<Prisma.recycling_logCountArgs> = z.object({ orderBy: z.union([recycling_logOrderByWithRelationInputObjectSchema, recycling_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: recycling_logWhereInputObjectSchema.optional(), cursor: recycling_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Recycling_logCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.recycling_logCountArgs>;

export const recycling_logCountZodSchema = z.object({ orderBy: z.union([recycling_logOrderByWithRelationInputObjectSchema, recycling_logOrderByWithRelationInputObjectSchema.array()]).optional(), where: recycling_logWhereInputObjectSchema.optional(), cursor: recycling_logWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Recycling_logCountAggregateInputObjectSchema ]).optional() }).strict();