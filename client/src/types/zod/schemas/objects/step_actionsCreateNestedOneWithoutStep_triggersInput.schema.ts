import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsCreateWithoutStep_triggersInputObjectSchema as step_actionsCreateWithoutStep_triggersInputObjectSchema } from './step_actionsCreateWithoutStep_triggersInput.schema';
import { step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema as step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema } from './step_actionsUncheckedCreateWithoutStep_triggersInput.schema';
import { step_actionsCreateOrConnectWithoutStep_triggersInputObjectSchema as step_actionsCreateOrConnectWithoutStep_triggersInputObjectSchema } from './step_actionsCreateOrConnectWithoutStep_triggersInput.schema';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './step_actionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => step_actionsCreateWithoutStep_triggersInputObjectSchema), z.lazy(() => step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => step_actionsCreateOrConnectWithoutStep_triggersInputObjectSchema).optional(),
  connect: z.lazy(() => step_actionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const step_actionsCreateNestedOneWithoutStep_triggersInputObjectSchema: z.ZodType<Prisma.step_actionsCreateNestedOneWithoutStep_triggersInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsCreateNestedOneWithoutStep_triggersInput>;
export const step_actionsCreateNestedOneWithoutStep_triggersInputObjectZodSchema = makeSchema();
