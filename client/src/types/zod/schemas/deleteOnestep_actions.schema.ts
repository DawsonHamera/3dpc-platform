import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_actionsSelectObjectSchema as step_actionsSelectObjectSchema } from './objects/step_actionsSelect.schema';
import { step_actionsIncludeObjectSchema as step_actionsIncludeObjectSchema } from './objects/step_actionsInclude.schema';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './objects/step_actionsWhereUniqueInput.schema';

export const step_actionsDeleteOneSchema: z.ZodType<Prisma.step_actionsDeleteArgs> = z.object({ select: step_actionsSelectObjectSchema.optional(), include: step_actionsIncludeObjectSchema.optional(), where: step_actionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.step_actionsDeleteArgs>;

export const step_actionsDeleteOneZodSchema = z.object({ select: step_actionsSelectObjectSchema.optional(), include: step_actionsIncludeObjectSchema.optional(), where: step_actionsWhereUniqueInputObjectSchema }).strict();