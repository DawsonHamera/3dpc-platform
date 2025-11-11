import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_actionsSelectObjectSchema as step_actionsSelectObjectSchema } from './objects/step_actionsSelect.schema';
import { step_actionsIncludeObjectSchema as step_actionsIncludeObjectSchema } from './objects/step_actionsInclude.schema';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './objects/step_actionsWhereUniqueInput.schema';
import { step_actionsCreateInputObjectSchema as step_actionsCreateInputObjectSchema } from './objects/step_actionsCreateInput.schema';
import { step_actionsUncheckedCreateInputObjectSchema as step_actionsUncheckedCreateInputObjectSchema } from './objects/step_actionsUncheckedCreateInput.schema';
import { step_actionsUpdateInputObjectSchema as step_actionsUpdateInputObjectSchema } from './objects/step_actionsUpdateInput.schema';
import { step_actionsUncheckedUpdateInputObjectSchema as step_actionsUncheckedUpdateInputObjectSchema } from './objects/step_actionsUncheckedUpdateInput.schema';

export const step_actionsUpsertOneSchema: z.ZodType<Prisma.step_actionsUpsertArgs> = z.object({ select: step_actionsSelectObjectSchema.optional(), include: step_actionsIncludeObjectSchema.optional(), where: step_actionsWhereUniqueInputObjectSchema, create: z.union([ step_actionsCreateInputObjectSchema, step_actionsUncheckedCreateInputObjectSchema ]), update: z.union([ step_actionsUpdateInputObjectSchema, step_actionsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.step_actionsUpsertArgs>;

export const step_actionsUpsertOneZodSchema = z.object({ select: step_actionsSelectObjectSchema.optional(), include: step_actionsIncludeObjectSchema.optional(), where: step_actionsWhereUniqueInputObjectSchema, create: z.union([ step_actionsCreateInputObjectSchema, step_actionsUncheckedCreateInputObjectSchema ]), update: z.union([ step_actionsUpdateInputObjectSchema, step_actionsUncheckedUpdateInputObjectSchema ]) }).strict();