import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './process_template_stepsWhereUniqueInput.schema';
import { process_template_stepsUpdateWithoutStepsInputObjectSchema as process_template_stepsUpdateWithoutStepsInputObjectSchema } from './process_template_stepsUpdateWithoutStepsInput.schema';
import { process_template_stepsUncheckedUpdateWithoutStepsInputObjectSchema as process_template_stepsUncheckedUpdateWithoutStepsInputObjectSchema } from './process_template_stepsUncheckedUpdateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_template_stepsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => process_template_stepsUpdateWithoutStepsInputObjectSchema), z.lazy(() => process_template_stepsUncheckedUpdateWithoutStepsInputObjectSchema)])
}).strict();
export const process_template_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_template_stepsUpdateWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUpdateWithWhereUniqueWithoutStepsInput>;
export const process_template_stepsUpdateWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
