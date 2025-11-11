import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggersWhereUniqueInputObjectSchema as step_triggersWhereUniqueInputObjectSchema } from './step_triggersWhereUniqueInput.schema';
import { step_triggersUpdateWithoutStep_actionsInputObjectSchema as step_triggersUpdateWithoutStep_actionsInputObjectSchema } from './step_triggersUpdateWithoutStep_actionsInput.schema';
import { step_triggersUncheckedUpdateWithoutStep_actionsInputObjectSchema as step_triggersUncheckedUpdateWithoutStep_actionsInputObjectSchema } from './step_triggersUncheckedUpdateWithoutStep_actionsInput.schema';
import { step_triggersCreateWithoutStep_actionsInputObjectSchema as step_triggersCreateWithoutStep_actionsInputObjectSchema } from './step_triggersCreateWithoutStep_actionsInput.schema';
import { step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema as step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema } from './step_triggersUncheckedCreateWithoutStep_actionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_triggersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => step_triggersUpdateWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersUncheckedUpdateWithoutStep_actionsInputObjectSchema)]),
  create: z.union([z.lazy(() => step_triggersCreateWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema)])
}).strict();
export const step_triggersUpsertWithWhereUniqueWithoutStep_actionsInputObjectSchema: z.ZodType<Prisma.step_triggersUpsertWithWhereUniqueWithoutStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersUpsertWithWhereUniqueWithoutStep_actionsInput>;
export const step_triggersUpsertWithWhereUniqueWithoutStep_actionsInputObjectZodSchema = makeSchema();
