import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsUpdateWithoutStep_triggersInputObjectSchema as step_actionsUpdateWithoutStep_triggersInputObjectSchema } from './step_actionsUpdateWithoutStep_triggersInput.schema';
import { step_actionsUncheckedUpdateWithoutStep_triggersInputObjectSchema as step_actionsUncheckedUpdateWithoutStep_triggersInputObjectSchema } from './step_actionsUncheckedUpdateWithoutStep_triggersInput.schema';
import { step_actionsCreateWithoutStep_triggersInputObjectSchema as step_actionsCreateWithoutStep_triggersInputObjectSchema } from './step_actionsCreateWithoutStep_triggersInput.schema';
import { step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema as step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema } from './step_actionsUncheckedCreateWithoutStep_triggersInput.schema';
import { step_actionsWhereInputObjectSchema as step_actionsWhereInputObjectSchema } from './step_actionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => step_actionsUpdateWithoutStep_triggersInputObjectSchema), z.lazy(() => step_actionsUncheckedUpdateWithoutStep_triggersInputObjectSchema)]),
  create: z.union([z.lazy(() => step_actionsCreateWithoutStep_triggersInputObjectSchema), z.lazy(() => step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema)]),
  where: z.lazy(() => step_actionsWhereInputObjectSchema).optional()
}).strict();
export const step_actionsUpsertWithoutStep_triggersInputObjectSchema: z.ZodType<Prisma.step_actionsUpsertWithoutStep_triggersInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUpsertWithoutStep_triggersInput>;
export const step_actionsUpsertWithoutStep_triggersInputObjectZodSchema = makeSchema();
