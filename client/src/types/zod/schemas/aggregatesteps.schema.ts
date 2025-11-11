import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsOrderByWithRelationInputObjectSchema as stepsOrderByWithRelationInputObjectSchema } from './objects/stepsOrderByWithRelationInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './objects/stepsWhereInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './objects/stepsWhereUniqueInput.schema';
import { StepsCountAggregateInputObjectSchema as StepsCountAggregateInputObjectSchema } from './objects/StepsCountAggregateInput.schema';
import { StepsMinAggregateInputObjectSchema as StepsMinAggregateInputObjectSchema } from './objects/StepsMinAggregateInput.schema';
import { StepsMaxAggregateInputObjectSchema as StepsMaxAggregateInputObjectSchema } from './objects/StepsMaxAggregateInput.schema';
import { StepsAvgAggregateInputObjectSchema as StepsAvgAggregateInputObjectSchema } from './objects/StepsAvgAggregateInput.schema';
import { StepsSumAggregateInputObjectSchema as StepsSumAggregateInputObjectSchema } from './objects/StepsSumAggregateInput.schema';

export const stepsAggregateSchema: z.ZodType<Prisma.stepsAggregateArgs> = z.object({ orderBy: z.union([stepsOrderByWithRelationInputObjectSchema, stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: stepsWhereInputObjectSchema.optional(), cursor: stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StepsCountAggregateInputObjectSchema ]).optional(), _min: StepsMinAggregateInputObjectSchema.optional(), _max: StepsMaxAggregateInputObjectSchema.optional(), _avg: StepsAvgAggregateInputObjectSchema.optional(), _sum: StepsSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.stepsAggregateArgs>;

export const stepsAggregateZodSchema = z.object({ orderBy: z.union([stepsOrderByWithRelationInputObjectSchema, stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: stepsWhereInputObjectSchema.optional(), cursor: stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), StepsCountAggregateInputObjectSchema ]).optional(), _min: StepsMinAggregateInputObjectSchema.optional(), _max: StepsMaxAggregateInputObjectSchema.optional(), _avg: StepsAvgAggregateInputObjectSchema.optional(), _sum: StepsSumAggregateInputObjectSchema.optional() }).strict();