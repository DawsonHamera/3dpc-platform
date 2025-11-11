import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsOrderByWithRelationInputObjectSchema as materialsOrderByWithRelationInputObjectSchema } from './objects/materialsOrderByWithRelationInput.schema';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './objects/materialsWhereInput.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './objects/materialsWhereUniqueInput.schema';
import { MaterialsCountAggregateInputObjectSchema as MaterialsCountAggregateInputObjectSchema } from './objects/MaterialsCountAggregateInput.schema';

export const materialsCountSchema: z.ZodType<Prisma.materialsCountArgs> = z.object({ orderBy: z.union([materialsOrderByWithRelationInputObjectSchema, materialsOrderByWithRelationInputObjectSchema.array()]).optional(), where: materialsWhereInputObjectSchema.optional(), cursor: materialsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MaterialsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.materialsCountArgs>;

export const materialsCountZodSchema = z.object({ orderBy: z.union([materialsOrderByWithRelationInputObjectSchema, materialsOrderByWithRelationInputObjectSchema.array()]).optional(), where: materialsWhereInputObjectSchema.optional(), cursor: materialsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MaterialsCountAggregateInputObjectSchema ]).optional() }).strict();