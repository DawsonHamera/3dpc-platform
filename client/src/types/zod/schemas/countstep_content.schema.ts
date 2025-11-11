import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_contentOrderByWithRelationInputObjectSchema as step_contentOrderByWithRelationInputObjectSchema } from './objects/step_contentOrderByWithRelationInput.schema';
import { step_contentWhereInputObjectSchema as step_contentWhereInputObjectSchema } from './objects/step_contentWhereInput.schema';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './objects/step_contentWhereUniqueInput.schema';
import { Step_contentCountAggregateInputObjectSchema as Step_contentCountAggregateInputObjectSchema } from './objects/Step_contentCountAggregateInput.schema';

export const step_contentCountSchema: z.ZodType<Prisma.step_contentCountArgs> = z.object({ orderBy: z.union([step_contentOrderByWithRelationInputObjectSchema, step_contentOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_contentWhereInputObjectSchema.optional(), cursor: step_contentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Step_contentCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.step_contentCountArgs>;

export const step_contentCountZodSchema = z.object({ orderBy: z.union([step_contentOrderByWithRelationInputObjectSchema, step_contentOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_contentWhereInputObjectSchema.optional(), cursor: step_contentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Step_contentCountAggregateInputObjectSchema ]).optional() }).strict();