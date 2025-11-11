import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './objects/stepsWhereInput.schema';
import { stepsOrderByWithAggregationInputObjectSchema as stepsOrderByWithAggregationInputObjectSchema } from './objects/stepsOrderByWithAggregationInput.schema';
import { stepsScalarWhereWithAggregatesInputObjectSchema as stepsScalarWhereWithAggregatesInputObjectSchema } from './objects/stepsScalarWhereWithAggregatesInput.schema';
import { StepsScalarFieldEnumSchema } from './enums/StepsScalarFieldEnum.schema';
import { StepsCountAggregateInputObjectSchema as StepsCountAggregateInputObjectSchema } from './objects/StepsCountAggregateInput.schema';
import { StepsMinAggregateInputObjectSchema as StepsMinAggregateInputObjectSchema } from './objects/StepsMinAggregateInput.schema';
import { StepsMaxAggregateInputObjectSchema as StepsMaxAggregateInputObjectSchema } from './objects/StepsMaxAggregateInput.schema';
import { StepsAvgAggregateInputObjectSchema as StepsAvgAggregateInputObjectSchema } from './objects/StepsAvgAggregateInput.schema';
import { StepsSumAggregateInputObjectSchema as StepsSumAggregateInputObjectSchema } from './objects/StepsSumAggregateInput.schema';

export const stepsGroupBySchema: z.ZodType<Prisma.stepsGroupByArgs> = z.object({ where: stepsWhereInputObjectSchema.optional(), orderBy: z.union([stepsOrderByWithAggregationInputObjectSchema, stepsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: stepsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StepsScalarFieldEnumSchema), _count: z.union([ z.literal(true), StepsCountAggregateInputObjectSchema ]).optional(), _min: StepsMinAggregateInputObjectSchema.optional(), _max: StepsMaxAggregateInputObjectSchema.optional(), _avg: StepsAvgAggregateInputObjectSchema.optional(), _sum: StepsSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.stepsGroupByArgs>;

export const stepsGroupByZodSchema = z.object({ where: stepsWhereInputObjectSchema.optional(), orderBy: z.union([stepsOrderByWithAggregationInputObjectSchema, stepsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: stepsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(StepsScalarFieldEnumSchema), _count: z.union([ z.literal(true), StepsCountAggregateInputObjectSchema ]).optional(), _min: StepsMinAggregateInputObjectSchema.optional(), _max: StepsMaxAggregateInputObjectSchema.optional(), _avg: StepsAvgAggregateInputObjectSchema.optional(), _sum: StepsSumAggregateInputObjectSchema.optional() }).strict();