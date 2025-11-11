import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsCreateWithoutStepsInputObjectSchema as step_actionsCreateWithoutStepsInputObjectSchema } from './step_actionsCreateWithoutStepsInput.schema';
import { step_actionsUncheckedCreateWithoutStepsInputObjectSchema as step_actionsUncheckedCreateWithoutStepsInputObjectSchema } from './step_actionsUncheckedCreateWithoutStepsInput.schema';
import { step_actionsCreateOrConnectWithoutStepsInputObjectSchema as step_actionsCreateOrConnectWithoutStepsInputObjectSchema } from './step_actionsCreateOrConnectWithoutStepsInput.schema';
import { step_actionsUpsertWithWhereUniqueWithoutStepsInputObjectSchema as step_actionsUpsertWithWhereUniqueWithoutStepsInputObjectSchema } from './step_actionsUpsertWithWhereUniqueWithoutStepsInput.schema';
import { step_actionsCreateManyStepsInputEnvelopeObjectSchema as step_actionsCreateManyStepsInputEnvelopeObjectSchema } from './step_actionsCreateManyStepsInputEnvelope.schema';
import { step_actionsWhereUniqueInputObjectSchema as step_actionsWhereUniqueInputObjectSchema } from './step_actionsWhereUniqueInput.schema';
import { step_actionsUpdateWithWhereUniqueWithoutStepsInputObjectSchema as step_actionsUpdateWithWhereUniqueWithoutStepsInputObjectSchema } from './step_actionsUpdateWithWhereUniqueWithoutStepsInput.schema';
import { step_actionsUpdateManyWithWhereWithoutStepsInputObjectSchema as step_actionsUpdateManyWithWhereWithoutStepsInputObjectSchema } from './step_actionsUpdateManyWithWhereWithoutStepsInput.schema';
import { step_actionsScalarWhereInputObjectSchema as step_actionsScalarWhereInputObjectSchema } from './step_actionsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => step_actionsCreateWithoutStepsInputObjectSchema), z.lazy(() => step_actionsCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => step_actionsUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => step_actionsUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => step_actionsCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => step_actionsCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => step_actionsUpsertWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => step_actionsUpsertWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => step_actionsCreateManyStepsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => step_actionsWhereUniqueInputObjectSchema), z.lazy(() => step_actionsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => step_actionsWhereUniqueInputObjectSchema), z.lazy(() => step_actionsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => step_actionsWhereUniqueInputObjectSchema), z.lazy(() => step_actionsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => step_actionsWhereUniqueInputObjectSchema), z.lazy(() => step_actionsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => step_actionsUpdateWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => step_actionsUpdateWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => step_actionsUpdateManyWithWhereWithoutStepsInputObjectSchema), z.lazy(() => step_actionsUpdateManyWithWhereWithoutStepsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => step_actionsScalarWhereInputObjectSchema), z.lazy(() => step_actionsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const step_actionsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema: z.ZodType<Prisma.step_actionsUncheckedUpdateManyWithoutStepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsUncheckedUpdateManyWithoutStepsNestedInput>;
export const step_actionsUncheckedUpdateManyWithoutStepsNestedInputObjectZodSchema = makeSchema();
