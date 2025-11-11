import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsWhereInputObjectSchema as step_actionsWhereInputObjectSchema } from './step_actionsWhereInput.schema';
import { step_actionsUpdateWithoutStep_triggersInputObjectSchema as step_actionsUpdateWithoutStep_triggersInputObjectSchema } from './step_actionsUpdateWithoutStep_triggersInput.schema';
import { step_actionsUncheckedUpdateWithoutStep_triggersInputObjectSchema as step_actionsUncheckedUpdateWithoutStep_triggersInputObjectSchema } from './step_actionsUncheckedUpdateWithoutStep_triggersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_actionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => step_actionsUpdateWithoutStep_triggersInputObjectSchema), z.lazy(() => step_actionsUncheckedUpdateWithoutStep_triggersInputObjectSchema)])
}).strict();
export const step_actionsUpdateToOneWithWhereWithoutStep_triggersInputObjectSchema: z.ZodType<Prisma.step_actionsUpdateToOneWithWhereWithoutStep_triggersInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUpdateToOneWithWhereWithoutStep_triggersInput>;
export const step_actionsUpdateToOneWithWhereWithoutStep_triggersInputObjectZodSchema = makeSchema();
