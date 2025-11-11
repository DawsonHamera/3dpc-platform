import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './process_template_stepsWhereUniqueInput.schema';
import { process_template_stepsCreateWithoutStepsInputObjectSchema as process_template_stepsCreateWithoutStepsInputObjectSchema } from './process_template_stepsCreateWithoutStepsInput.schema';
import { process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema as process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema } from './process_template_stepsUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_template_stepsCreateWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const process_template_stepsCreateOrConnectWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_template_stepsCreateOrConnectWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsCreateOrConnectWithoutStepsInput>;
export const process_template_stepsCreateOrConnectWithoutStepsInputObjectZodSchema = makeSchema();
