import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printersOrderByWithRelationInputObjectSchema as printersOrderByWithRelationInputObjectSchema } from './objects/printersOrderByWithRelationInput.schema';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './objects/printersWhereInput.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './objects/printersWhereUniqueInput.schema';
import { PrintersCountAggregateInputObjectSchema as PrintersCountAggregateInputObjectSchema } from './objects/PrintersCountAggregateInput.schema';

export const printersCountSchema: z.ZodType<Prisma.printersCountArgs> = z.object({ orderBy: z.union([printersOrderByWithRelationInputObjectSchema, printersOrderByWithRelationInputObjectSchema.array()]).optional(), where: printersWhereInputObjectSchema.optional(), cursor: printersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PrintersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.printersCountArgs>;

export const printersCountZodSchema = z.object({ orderBy: z.union([printersOrderByWithRelationInputObjectSchema, printersOrderByWithRelationInputObjectSchema.array()]).optional(), where: printersWhereInputObjectSchema.optional(), cursor: printersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), PrintersCountAggregateInputObjectSchema ]).optional() }).strict();