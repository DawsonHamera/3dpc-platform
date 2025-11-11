import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggersScalarWhereInputObjectSchema as step_triggersScalarWhereInputObjectSchema } from './step_triggersScalarWhereInput.schema';
import { step_triggersUpdateManyMutationInputObjectSchema as step_triggersUpdateManyMutationInputObjectSchema } from './step_triggersUpdateManyMutationInput.schema';
import { step_triggersUncheckedUpdateManyWithoutStep_actionsInputObjectSchema as step_triggersUncheckedUpdateManyWithoutStep_actionsInputObjectSchema } from './step_triggersUncheckedUpdateManyWithoutStep_actionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_triggersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => step_triggersUpdateManyMutationInputObjectSchema), z.lazy(() => step_triggersUncheckedUpdateManyWithoutStep_actionsInputObjectSchema)])
}).strict();
export const step_triggersUpdateManyWithWhereWithoutStep_actionsInputObjectSchema: z.ZodType<Prisma.step_triggersUpdateManyWithWhereWithoutStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersUpdateManyWithWhereWithoutStep_actionsInput>;
export const step_triggersUpdateManyWithWhereWithoutStep_actionsInputObjectZodSchema = makeSchema();
