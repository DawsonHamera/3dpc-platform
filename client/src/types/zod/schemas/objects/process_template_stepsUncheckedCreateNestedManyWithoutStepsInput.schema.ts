import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsCreateWithoutStepsInputObjectSchema as process_template_stepsCreateWithoutStepsInputObjectSchema } from './process_template_stepsCreateWithoutStepsInput.schema';
import { process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema as process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema } from './process_template_stepsUncheckedCreateWithoutStepsInput.schema';
import { process_template_stepsCreateOrConnectWithoutStepsInputObjectSchema as process_template_stepsCreateOrConnectWithoutStepsInputObjectSchema } from './process_template_stepsCreateOrConnectWithoutStepsInput.schema';
import { process_template_stepsCreateManyStepsInputEnvelopeObjectSchema as process_template_stepsCreateManyStepsInputEnvelopeObjectSchema } from './process_template_stepsCreateManyStepsInputEnvelope.schema';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './process_template_stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_template_stepsCreateWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_template_stepsCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_template_stepsCreateManyStepsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const process_template_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_template_stepsUncheckedCreateNestedManyWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUncheckedCreateNestedManyWithoutStepsInput>;
export const process_template_stepsUncheckedCreateNestedManyWithoutStepsInputObjectZodSchema = makeSchema();
