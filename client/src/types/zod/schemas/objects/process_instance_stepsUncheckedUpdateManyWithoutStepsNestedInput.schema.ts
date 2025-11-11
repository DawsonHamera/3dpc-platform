import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsCreateWithoutStepsInputObjectSchema as process_instance_stepsCreateWithoutStepsInputObjectSchema } from './process_instance_stepsCreateWithoutStepsInput.schema';
import { process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema as process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema } from './process_instance_stepsUncheckedCreateWithoutStepsInput.schema';
import { process_instance_stepsCreateOrConnectWithoutStepsInputObjectSchema as process_instance_stepsCreateOrConnectWithoutStepsInputObjectSchema } from './process_instance_stepsCreateOrConnectWithoutStepsInput.schema';
import { process_instance_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema as process_instance_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema } from './process_instance_stepsUpsertWithWhereUniqueWithoutStepsInput.schema';
import { process_instance_stepsCreateManyStepsInputEnvelopeObjectSchema as process_instance_stepsCreateManyStepsInputEnvelopeObjectSchema } from './process_instance_stepsCreateManyStepsInputEnvelope.schema';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema';
import { process_instance_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema as process_instance_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema } from './process_instance_stepsUpdateWithWhereUniqueWithoutStepsInput.schema';
import { process_instance_stepsUpdateManyWithWhereWithoutStepsInputObjectSchema as process_instance_stepsUpdateManyWithWhereWithoutStepsInputObjectSchema } from './process_instance_stepsUpdateManyWithWhereWithoutStepsInput.schema';
import { process_instance_stepsScalarWhereInputObjectSchema as process_instance_stepsScalarWhereInputObjectSchema } from './process_instance_stepsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instance_stepsCreateWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instance_stepsCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => process_instance_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instance_stepsCreateManyStepsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => process_instance_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => process_instance_stepsUpdateManyWithWhereWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsUpdateManyWithWhereWithoutStepsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema), z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const process_instance_stepsUncheckedUpdateManyWithoutStepsNestedInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUncheckedUpdateManyWithoutStepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUncheckedUpdateManyWithoutStepsNestedInput>;
export const process_instance_stepsUncheckedUpdateManyWithoutStepsNestedInputObjectZodSchema = makeSchema();
