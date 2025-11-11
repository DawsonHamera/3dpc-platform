import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './step_actionsWhereUniqueInput.schema';
import { step_actionsCreateWithoutStepsInputObjectSchema as step_actionsCreateWithoutStepsInputObjectSchema } from './step_actionsCreateWithoutStepsInput.schema';
import { step_actionsUncheckedCreateWithoutStepsInputObjectSchema as step_actionsUncheckedCreateWithoutStepsInputObjectSchema } from './step_actionsUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => step_actionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => step_actionsCreateWithoutStepsInputObjectSchema), z.lazy(() => step_actionsUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const step_actionsCreateOrConnectWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_actionsCreateOrConnectWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsCreateOrConnectWithoutStepsInput>;
export const step_actionsCreateOrConnectWithoutStepsInputObjectZodSchema = makeSchema();
