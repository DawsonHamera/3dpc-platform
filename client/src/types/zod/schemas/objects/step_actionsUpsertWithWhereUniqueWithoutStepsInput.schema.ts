import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './step_actionsWhereUniqueInput.schema';
import { step_actionsUpdateWithoutStepsInputObjectSchema as step_actionsUpdateWithoutStepsInputObjectSchema } from './step_actionsUpdateWithoutStepsInput.schema';
import { step_actionsUncheckedUpdateWithoutStepsInputObjectSchema as step_actionsUncheckedUpdateWithoutStepsInputObjectSchema } from './step_actionsUncheckedUpdateWithoutStepsInput.schema';
import { step_actionsCreateWithoutStepsInputObjectSchema as step_actionsCreateWithoutStepsInputObjectSchema } from './step_actionsCreateWithoutStepsInput.schema';
import { step_actionsUncheckedCreateWithoutStepsInputObjectSchema as step_actionsUncheckedCreateWithoutStepsInputObjectSchema } from './step_actionsUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_actionsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => step_actionsUpdateWithoutStepsInputObjectSchema), z.lazy(() => step_actionsUncheckedUpdateWithoutStepsInputObjectSchema)]),
  create: z.union([z.lazy(() => step_actionsCreateWithoutStepsInputObjectSchema), z.lazy(() => step_actionsUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const step_actionsUpsertWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_actionsUpsertWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUpsertWithWhereUniqueWithoutStepsInput>;
export const step_actionsUpsertWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
