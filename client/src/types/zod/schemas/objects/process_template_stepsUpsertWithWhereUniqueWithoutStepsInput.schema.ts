import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './process_template_stepsWhereUniqueInput.schema';
import { process_template_stepsUpdateWithoutStepsInputObjectSchema as process_template_stepsUpdateWithoutStepsInputObjectSchema } from './process_template_stepsUpdateWithoutStepsInput.schema';
import { process_template_stepsUncheckedUpdateWithoutStepsInputObjectSchema as process_template_stepsUncheckedUpdateWithoutStepsInputObjectSchema } from './process_template_stepsUncheckedUpdateWithoutStepsInput.schema';
import { process_template_stepsCreateWithoutStepsInputObjectSchema as process_template_stepsCreateWithoutStepsInputObjectSchema } from './process_template_stepsCreateWithoutStepsInput.schema';
import { process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema as process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema } from './process_template_stepsUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => process_template_stepsUpdateWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsUncheckedUpdateWithoutStepsInputObjectSchema)]),
  create: z.union([z.lazy(() => process_template_stepsCreateWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const process_template_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_template_stepsUpsertWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUpsertWithWhereUniqueWithoutStepsInput>;
export const process_template_stepsUpsertWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
