import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_actionsSelectObjectSchema as step_actionsSelectObjectSchema } from './objects/step_actionsSelect.schema';
import { step_actionsIncludeObjectSchema as step_actionsIncludeObjectSchema } from './objects/step_actionsInclude.schema';
import { step_actionsUpdateInputObjectSchema as step_actionsUpdateInputObjectSchema } from './objects/step_actionsUpdateInput.schema';
import { step_actionsUncheckedUpdateInputObjectSchema as step_actionsUncheckedUpdateInputObjectSchema } from './objects/step_actionsUncheckedUpdateInput.schema';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './objects/step_actionsWhereUniqueInput.schema';

export const step_actionsUpdateOneSchema: z.ZodType<Prisma.step_actionsUpdateArgs> = z.object({ select: step_actionsSelectObjectSchema.optional(), include: step_actionsIncludeObjectSchema.optional(), data: z.union([step_actionsUpdateInputObjectSchema, step_actionsUncheckedUpdateInputObjectSchema]), where: step_actionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.step_actionsUpdateArgs>;

export const step_actionsUpdateOneZodSchema = z.object({ select: step_actionsSelectObjectSchema.optional(), include: step_actionsIncludeObjectSchema.optional(), data: z.union([step_actionsUpdateInputObjectSchema, step_actionsUncheckedUpdateInputObjectSchema]), where: step_actionsWhereUniqueInputObjectSchema }).strict();