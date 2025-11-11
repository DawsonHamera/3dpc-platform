import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsOrderByWithRelationInputObjectSchema as stepsOrderByWithRelationInputObjectSchema } from './objects/stepsOrderByWithRelationInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './objects/stepsWhereInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './objects/stepsWhereUniqueInput.schema';
import { StepsCountAggregateInputObjectSchema as StepsCountAggregateInputObjectSchema } from './objects/StepsCountAggregateInput.schema';

export const stepsCountSchema: z.ZodType<Prisma.stepsCountArgs> = z.object({ orderBy: z.union([stepsOrderByWithRelationInputObjectSchema, stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: stepsWhereInputObjectSchema.optional(), cursor: stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StepsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.stepsCountArgs>;

export const stepsCountZodSchema = z.object({ orderBy: z.union([stepsOrderByWithRelationInputObjectSchema, stepsOrderByWithRelationInputObjectSchema.array()]).optional(), where: stepsWhereInputObjectSchema.optional(), cursor: stepsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), StepsCountAggregateInputObjectSchema ]).optional() }).strict();