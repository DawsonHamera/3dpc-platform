import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsOrderByWithRelationInputObjectSchema as modelsOrderByWithRelationInputObjectSchema } from './objects/modelsOrderByWithRelationInput.schema';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './objects/modelsWhereInput.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './objects/modelsWhereUniqueInput.schema';
import { ModelsCountAggregateInputObjectSchema as ModelsCountAggregateInputObjectSchema } from './objects/ModelsCountAggregateInput.schema';

export const modelsCountSchema: z.ZodType<Prisma.modelsCountArgs> = z.object({ orderBy: z.union([modelsOrderByWithRelationInputObjectSchema, modelsOrderByWithRelationInputObjectSchema.array()]).optional(), where: modelsWhereInputObjectSchema.optional(), cursor: modelsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.modelsCountArgs>;

export const modelsCountZodSchema = z.object({ orderBy: z.union([modelsOrderByWithRelationInputObjectSchema, modelsOrderByWithRelationInputObjectSchema.array()]).optional(), where: modelsWhereInputObjectSchema.optional(), cursor: modelsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ModelsCountAggregateInputObjectSchema ]).optional() }).strict();