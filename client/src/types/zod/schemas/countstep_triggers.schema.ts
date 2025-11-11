import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_triggersOrderByWithRelationInputObjectSchema as step_triggersOrderByWithRelationInputObjectSchema } from './objects/step_triggersOrderByWithRelationInput.schema';
import { step_triggersWhereInputObjectSchema as step_triggersWhereInputObjectSchema } from './objects/step_triggersWhereInput.schema';
import { step_triggersWhereUniqueInputObjectSchema as step_triggersWhereUniqueInputObjectSchema } from './objects/step_triggersWhereUniqueInput.schema';
import { Step_triggersCountAggregateInputObjectSchema as Step_triggersCountAggregateInputObjectSchema } from './objects/Step_triggersCountAggregateInput.schema';

export const step_triggersCountSchema: z.ZodType<Prisma.step_triggersCountArgs> = z.object({ orderBy: z.union([step_triggersOrderByWithRelationInputObjectSchema, step_triggersOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_triggersWhereInputObjectSchema.optional(), cursor: step_triggersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Step_triggersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.step_triggersCountArgs>;

export const step_triggersCountZodSchema = z.object({ orderBy: z.union([step_triggersOrderByWithRelationInputObjectSchema, step_triggersOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_triggersWhereInputObjectSchema.optional(), cursor: step_triggersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Step_triggersCountAggregateInputObjectSchema ]).optional() }).strict();