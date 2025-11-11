import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsCreateWithoutStepsInputObjectSchema as step_actionsCreateWithoutStepsInputObjectSchema } from './step_actionsCreateWithoutStepsInput.schema';
import { step_actionsUncheckedCreateWithoutStepsInputObjectSchema as step_actionsUncheckedCreateWithoutStepsInputObjectSchema } from './step_actionsUncheckedCreateWithoutStepsInput.schema';
import { step_actionsCreateOrConnectWithoutStepsInputObjectSchema as step_actionsCreateOrConnectWithoutStepsInputObjectSchema } from './step_actionsCreateOrConnectWithoutStepsInput.schema';
import { step_actionsCreateManyStepsInputEnvelopeObjectSchema as step_actionsCreateManyStepsInputEnvelopeObjectSchema } from './step_actionsCreateManyStepsInputEnvelope.schema';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './step_actionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => step_actionsCreateWithoutStepsInputObjectSchema), z.lazy(() => step_actionsCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => step_actionsUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => step_actionsUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => step_actionsCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => step_actionsCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => step_actionsCreateManyStepsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => step_actionsWhereUniqueInputObjectSchema), z.lazy(() => step_actionsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const step_actionsCreateNestedManyWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_actionsCreateNestedManyWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsCreateNestedManyWithoutStepsInput>;
export const step_actionsCreateNestedManyWithoutStepsInputObjectZodSchema = makeSchema();
