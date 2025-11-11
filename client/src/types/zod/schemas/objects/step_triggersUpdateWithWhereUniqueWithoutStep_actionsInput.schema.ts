import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggersWhereUniqueInputObjectSchema as step_triggersWhereUniqueInputObjectSchema } from './step_triggersWhereUniqueInput.schema';
import { step_triggersUpdateWithoutStep_actionsInputObjectSchema as step_triggersUpdateWithoutStep_actionsInputObjectSchema } from './step_triggersUpdateWithoutStep_actionsInput.schema';
import { step_triggersUncheckedUpdateWithoutStep_actionsInputObjectSchema as step_triggersUncheckedUpdateWithoutStep_actionsInputObjectSchema } from './step_triggersUncheckedUpdateWithoutStep_actionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_triggersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => step_triggersUpdateWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersUncheckedUpdateWithoutStep_actionsInputObjectSchema)])
}).strict();
export const step_triggersUpdateWithWhereUniqueWithoutStep_actionsInputObjectSchema: z.ZodType<Prisma.step_triggersUpdateWithWhereUniqueWithoutStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersUpdateWithWhereUniqueWithoutStep_actionsInput>;
export const step_triggersUpdateWithWhereUniqueWithoutStep_actionsInputObjectZodSchema = makeSchema();
