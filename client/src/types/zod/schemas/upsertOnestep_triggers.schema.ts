import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_triggersSelectObjectSchema as step_triggersSelectObjectSchema } from './objects/step_triggersSelect.schema';
import { step_triggersIncludeObjectSchema as step_triggersIncludeObjectSchema } from './objects/step_triggersInclude.schema';
import { step_triggersWhereUniqueInputObjectSchema as step_triggersWhereUniqueInputObjectSchema } from './objects/step_triggersWhereUniqueInput.schema';
import { step_triggersCreateInputObjectSchema as step_triggersCreateInputObjectSchema } from './objects/step_triggersCreateInput.schema';
import { step_triggersUncheckedCreateInputObjectSchema as step_triggersUncheckedCreateInputObjectSchema } from './objects/step_triggersUncheckedCreateInput.schema';
import { step_triggersUpdateInputObjectSchema as step_triggersUpdateInputObjectSchema } from './objects/step_triggersUpdateInput.schema';
import { step_triggersUncheckedUpdateInputObjectSchema as step_triggersUncheckedUpdateInputObjectSchema } from './objects/step_triggersUncheckedUpdateInput.schema';

export const step_triggersUpsertOneSchema: z.ZodType<Prisma.step_triggersUpsertArgs> = z.object({ select: step_triggersSelectObjectSchema.optional(), include: step_triggersIncludeObjectSchema.optional(), where: step_triggersWhereUniqueInputObjectSchema, create: z.union([ step_triggersCreateInputObjectSchema, step_triggersUncheckedCreateInputObjectSchema ]), update: z.union([ step_triggersUpdateInputObjectSchema, step_triggersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.step_triggersUpsertArgs>;

export const step_triggersUpsertOneZodSchema = z.object({ select: step_triggersSelectObjectSchema.optional(), include: step_triggersIncludeObjectSchema.optional(), where: step_triggersWhereUniqueInputObjectSchema, create: z.union([ step_triggersCreateInputObjectSchema, step_triggersUncheckedCreateInputObjectSchema ]), update: z.union([ step_triggersUpdateInputObjectSchema, step_triggersUncheckedUpdateInputObjectSchema ]) }).strict();