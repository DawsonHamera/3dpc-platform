import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsCreateWithoutStepsInputObjectSchema as process_template_stepsCreateWithoutStepsInputObjectSchema } from './process_template_stepsCreateWithoutStepsInput.schema';
import { process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema as process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema } from './process_template_stepsUncheckedCreateWithoutStepsInput.schema';
import { process_template_stepsCreateOrConnectWithoutStepsInputObjectSchema as process_template_stepsCreateOrConnectWithoutStepsInputObjectSchema } from './process_template_stepsCreateOrConnectWithoutStepsInput.schema';
import { process_template_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema as process_template_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema } from './process_template_stepsUpsertWithWhereUniqueWithoutStepsInput.schema';
import { process_template_stepsCreateManyStepsInputEnvelopeObjectSchema as process_template_stepsCreateManyStepsInputEnvelopeObjectSchema } from './process_template_stepsCreateManyStepsInputEnvelope.schema';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './process_template_stepsWhereUniqueInput.schema';
import { process_template_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema as process_template_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema } from './process_template_stepsUpdateWithWhereUniqueWithoutStepsInput.schema';
import { process_template_stepsUpdateManyWithWhereWithoutStepsInputObjectSchema as process_template_stepsUpdateManyWithWhereWithoutStepsInputObjectSchema } from './process_template_stepsUpdateManyWithWhereWithoutStepsInput.schema';
import { process_template_stepsScalarWhereInputObjectSchema as process_template_stepsScalarWhereInputObjectSchema } from './process_template_stepsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_template_stepsCreateWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_template_stepsCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => process_template_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_template_stepsCreateManyStepsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => process_template_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => process_template_stepsUpdateManyWithWhereWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsUpdateManyWithWhereWithoutStepsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => process_template_stepsScalarWhereInputObjectSchema), z.lazy(() => process_template_stepsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const process_template_stepsUpdateManyWithoutStepsNestedInputObjectSchema: z.ZodType<Prisma.process_template_stepsUpdateManyWithoutStepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUpdateManyWithoutStepsNestedInput>;
export const process_template_stepsUpdateManyWithoutStepsNestedInputObjectZodSchema = makeSchema();
