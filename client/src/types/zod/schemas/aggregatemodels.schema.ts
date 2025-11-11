import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsOrderByWithRelationInputObjectSchema as modelsOrderByWithRelationInputObjectSchema } from './objects/modelsOrderByWithRelationInput.schema';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './objects/modelsWhereInput.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './objects/modelsWhereUniqueInput.schema';
import { ModelsCountAggregateInputObjectSchema as ModelsCountAggregateInputObjectSchema } from './objects/ModelsCountAggregateInput.schema';
import { ModelsMinAggregateInputObjectSchema as ModelsMinAggregateInputObjectSchema } from './objects/ModelsMinAggregateInput.schema';
import { ModelsMaxAggregateInputObjectSchema as ModelsMaxAggregateInputObjectSchema } from './objects/ModelsMaxAggregateInput.schema';
import { ModelsAvgAggregateInputObjectSchema as ModelsAvgAggregateInputObjectSchema } from './objects/ModelsAvgAggregateInput.schema';
import { ModelsSumAggregateInputObjectSchema as ModelsSumAggregateInputObjectSchema } from './objects/ModelsSumAggregateInput.schema';

export const modelsAggregateSchema: z.ZodType<Prisma.modelsAggregateArgs> = z.object({ orderBy: z.union([modelsOrderByWithRelationInputObjectSchema, modelsOrderByWithRelationInputObjectSchema.array()]).optional(), where: modelsWhereInputObjectSchema.optional(), cursor: modelsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ModelsCountAggregateInputObjectSchema ]).optional(), _min: ModelsMinAggregateInputObjectSchema.optional(), _max: ModelsMaxAggregateInputObjectSchema.optional(), _avg: ModelsAvgAggregateInputObjectSchema.optional(), _sum: ModelsSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.modelsAggregateArgs>;

export const modelsAggregateZodSchema = z.object({ orderBy: z.union([modelsOrderByWithRelationInputObjectSchema, modelsOrderByWithRelationInputObjectSchema.array()]).optional(), where: modelsWhereInputObjectSchema.optional(), cursor: modelsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ModelsCountAggregateInputObjectSchema ]).optional(), _min: ModelsMinAggregateInputObjectSchema.optional(), _max: ModelsMaxAggregateInputObjectSchema.optional(), _avg: ModelsAvgAggregateInputObjectSchema.optional(), _sum: ModelsSumAggregateInputObjectSchema.optional() }).strict();