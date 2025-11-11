import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './step_actionsWhereUniqueInput.schema';
import { step_actionsUpdateWithoutStepsInputObjectSchema as step_actionsUpdateWithoutStepsInputObjectSchema } from './step_actionsUpdateWithoutStepsInput.schema';
import { step_actionsUncheckedUpdateWithoutStepsInputObjectSchema as step_actionsUncheckedUpdateWithoutStepsInputObjectSchema } from './step_actionsUncheckedUpdateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_actionsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => step_actionsUpdateWithoutStepsInputObjectSchema), z.lazy(() => step_actionsUncheckedUpdateWithoutStepsInputObjectSchema)])
}).strict();
export const step_actionsUpdateWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_actionsUpdateWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUpdateWithWhereUniqueWithoutStepsInput>;
export const step_actionsUpdateWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
