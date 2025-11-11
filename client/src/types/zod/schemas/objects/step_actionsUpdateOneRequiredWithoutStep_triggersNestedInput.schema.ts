import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsCreateWithoutStep_triggersInputObjectSchema as step_actionsCreateWithoutStep_triggersInputObjectSchema } from './step_actionsCreateWithoutStep_triggersInput.schema';
import { step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema as step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema } from './step_actionsUncheckedCreateWithoutStep_triggersInput.schema';
import { step_actionsCreateOrConnectWithoutStep_triggersInputObjectSchema as step_actionsCreateOrConnectWithoutStep_triggersInputObjectSchema } from './step_actionsCreateOrConnectWithoutStep_triggersInput.schema';
import { step_actionsUpsertWithoutStep_triggersInputObjectSchema as step_actionsUpsertWithoutStep_triggersInputObjectSchema } from './step_actionsUpsertWithoutStep_triggersInput.schema';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './step_actionsWhereUniqueInput.schema';
import { step_actionsUpdateToOneWithWhereWithoutStep_triggersInputObjectSchema as step_actionsUpdateToOneWithWhereWithoutStep_triggersInputObjectSchema } from './step_actionsUpdateToOneWithWhereWithoutStep_triggersInput.schema';
import { step_actionsUpdateWithoutStep_triggersInputObjectSchema as step_actionsUpdateWithoutStep_triggersInputObjectSchema } from './step_actionsUpdateWithoutStep_triggersInput.schema';
import { step_actionsUncheckedUpdateWithoutStep_triggersInputObjectSchema as step_actionsUncheckedUpdateWithoutStep_triggersInputObjectSchema } from './step_actionsUncheckedUpdateWithoutStep_triggersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => step_actionsCreateWithoutStep_triggersInputObjectSchema), z.lazy(() => step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => step_actionsCreateOrConnectWithoutStep_triggersInputObjectSchema).optional(),
  upsert: z.lazy(() => step_actionsUpsertWithoutStep_triggersInputObjectSchema).optional(),
  connect: z.lazy(() => step_actionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => step_actionsUpdateToOneWithWhereWithoutStep_triggersInputObjectSchema), z.lazy(() => step_actionsUpdateWithoutStep_triggersInputObjectSchema), z.lazy(() => step_actionsUncheckedUpdateWithoutStep_triggersInputObjectSchema)]).optional()
}).strict();
export const step_actionsUpdateOneRequiredWithoutStep_triggersNestedInputObjectSchema: z.ZodType<Prisma.step_actionsUpdateOneRequiredWithoutStep_triggersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUpdateOneRequiredWithoutStep_triggersNestedInput>;
export const step_actionsUpdateOneRequiredWithoutStep_triggersNestedInputObjectZodSchema = makeSchema();
