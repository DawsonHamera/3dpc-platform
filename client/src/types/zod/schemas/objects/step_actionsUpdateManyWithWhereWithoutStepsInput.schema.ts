import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsScalarWhereInputObjectSchema as step_actionsScalarWhereInputObjectSchema } from './step_actionsScalarWhereInput.schema';
import { step_actionsUpdateManyMutationInputObjectSchema as step_actionsUpdateManyMutationInputObjectSchema } from './step_actionsUpdateManyMutationInput.schema';
import { step_actionsUncheckedUpdateManyWithoutStepsInputObjectSchema as step_actionsUncheckedUpdateManyWithoutStepsInputObjectSchema } from './step_actionsUncheckedUpdateManyWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_actionsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => step_actionsUpdateManyMutationInputObjectSchema), z.lazy(() => step_actionsUncheckedUpdateManyWithoutStepsInputObjectSchema)])
}).strict();
export const step_actionsUpdateManyWithWhereWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_actionsUpdateManyWithWhereWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUpdateManyWithWhereWithoutStepsInput>;
export const step_actionsUpdateManyWithWhereWithoutStepsInputObjectZodSchema = makeSchema();
