import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_triggersSelectObjectSchema as step_triggersSelectObjectSchema } from './objects/step_triggersSelect.schema';
import { step_triggersIncludeObjectSchema as step_triggersIncludeObjectSchema } from './objects/step_triggersInclude.schema';
import { step_triggersUpdateInputObjectSchema as step_triggersUpdateInputObjectSchema } from './objects/step_triggersUpdateInput.schema';
import { step_triggersUncheckedUpdateInputObjectSchema as step_triggersUncheckedUpdateInputObjectSchema } from './objects/step_triggersUncheckedUpdateInput.schema';
import { step_triggersWhereUniqueInputObjectSchema as step_triggersWhereUniqueInputObjectSchema } from './objects/step_triggersWhereUniqueInput.schema';

export const step_triggersUpdateOneSchema: z.ZodType<Prisma.step_triggersUpdateArgs> = z.object({ select: step_triggersSelectObjectSchema.optional(), include: step_triggersIncludeObjectSchema.optional(), data: z.union([step_triggersUpdateInputObjectSchema, step_triggersUncheckedUpdateInputObjectSchema]), where: step_triggersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.step_triggersUpdateArgs>;

export const step_triggersUpdateOneZodSchema = z.object({ select: step_triggersSelectObjectSchema.optional(), include: step_triggersIncludeObjectSchema.optional(), data: z.union([step_triggersUpdateInputObjectSchema, step_triggersUncheckedUpdateInputObjectSchema]), where: step_triggersWhereUniqueInputObjectSchema }).strict();