import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './step_actionsWhereUniqueInput.schema';
import { step_actionsCreateWithoutStep_triggersInputObjectSchema as step_actionsCreateWithoutStep_triggersInputObjectSchema } from './step_actionsCreateWithoutStep_triggersInput.schema';
import { step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema as step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema } from './step_actionsUncheckedCreateWithoutStep_triggersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_actionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => step_actionsCreateWithoutStep_triggersInputObjectSchema), z.lazy(() => step_actionsUncheckedCreateWithoutStep_triggersInputObjectSchema)])
}).strict();
export const step_actionsCreateOrConnectWithoutStep_triggersInputObjectSchema: z.ZodType<Prisma.step_actionsCreateOrConnectWithoutStep_triggersInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsCreateOrConnectWithoutStep_triggersInput>;
export const step_actionsCreateOrConnectWithoutStep_triggersInputObjectZodSchema = makeSchema();
