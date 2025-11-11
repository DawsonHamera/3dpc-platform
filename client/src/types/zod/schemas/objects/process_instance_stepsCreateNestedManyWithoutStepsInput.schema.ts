import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsCreateWithoutStepsInputObjectSchema as process_instance_stepsCreateWithoutStepsInputObjectSchema } from './process_instance_stepsCreateWithoutStepsInput.schema';
import { process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema as process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema } from './process_instance_stepsUncheckedCreateWithoutStepsInput.schema';
import { process_instance_stepsCreateOrConnectWithoutStepsInputObjectSchema as process_instance_stepsCreateOrConnectWithoutStepsInputObjectSchema } from './process_instance_stepsCreateOrConnectWithoutStepsInput.schema';
import { process_instance_stepsCreateManyStepsInputEnvelopeObjectSchema as process_instance_stepsCreateManyStepsInputEnvelopeObjectSchema } from './process_instance_stepsCreateManyStepsInputEnvelope.schema';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instance_stepsCreateWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instance_stepsCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instance_stepsCreateManyStepsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const process_instance_stepsCreateNestedManyWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_instance_stepsCreateNestedManyWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsCreateNestedManyWithoutStepsInput>;
export const process_instance_stepsCreateNestedManyWithoutStepsInputObjectZodSchema = makeSchema();
