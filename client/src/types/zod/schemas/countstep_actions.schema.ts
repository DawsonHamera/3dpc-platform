import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_actionsOrderByWithRelationInputObjectSchema as step_actionsOrderByWithRelationInputObjectSchema } from './objects/step_actionsOrderByWithRelationInput.schema';
import { step_actionsWhereInputObjectSchema as step_actionsWhereInputObjectSchema } from './objects/step_actionsWhereInput.schema';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './objects/step_actionsWhereUniqueInput.schema';
import { Step_actionsCountAggregateInputObjectSchema as Step_actionsCountAggregateInputObjectSchema } from './objects/Step_actionsCountAggregateInput.schema';

export const step_actionsCountSchema: z.ZodType<Prisma.step_actionsCountArgs> = z.object({ orderBy: z.union([step_actionsOrderByWithRelationInputObjectSchema, step_actionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_actionsWhereInputObjectSchema.optional(), cursor: step_actionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Step_actionsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.step_actionsCountArgs>;

export const step_actionsCountZodSchema = z.object({ orderBy: z.union([step_actionsOrderByWithRelationInputObjectSchema, step_actionsOrderByWithRelationInputObjectSchema.array()]).optional(), where: step_actionsWhereInputObjectSchema.optional(), cursor: step_actionsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), Step_actionsCountAggregateInputObjectSchema ]).optional() }).strict();