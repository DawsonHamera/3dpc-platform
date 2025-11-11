import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsUpdateWithoutStep_actionsInputObjectSchema as stepsUpdateWithoutStep_actionsInputObjectSchema } from './stepsUpdateWithoutStep_actionsInput.schema';
import { stepsUncheckedUpdateWithoutStep_actionsInputObjectSchema as stepsUncheckedUpdateWithoutStep_actionsInputObjectSchema } from './stepsUncheckedUpdateWithoutStep_actionsInput.schema';
import { stepsCreateWithoutStep_actionsInputObjectSchema as stepsCreateWithoutStep_actionsInputObjectSchema } from './stepsCreateWithoutStep_actionsInput.schema';
import { stepsUncheckedCreateWithoutStep_actionsInputObjectSchema as stepsUncheckedCreateWithoutStep_actionsInputObjectSchema } from './stepsUncheckedCreateWithoutStep_actionsInput.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => stepsUpdateWithoutStep_actionsInputObjectSchema), z.lazy(() => stepsUncheckedUpdateWithoutStep_actionsInputObjectSchema)]),
  create: z.union([z.lazy(() => stepsCreateWithoutStep_actionsInputObjectSchema), z.lazy(() => stepsUncheckedCreateWithoutStep_actionsInputObjectSchema)]),
  where: z.lazy(() => stepsWhereInputObjectSchema).optional()
}).strict();
export const stepsUpsertWithoutStep_actionsInputObjectSchema: z.ZodType<Prisma.stepsUpsertWithoutStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUpsertWithoutStep_actionsInput>;
export const stepsUpsertWithoutStep_actionsInputObjectZodSchema = makeSchema();
