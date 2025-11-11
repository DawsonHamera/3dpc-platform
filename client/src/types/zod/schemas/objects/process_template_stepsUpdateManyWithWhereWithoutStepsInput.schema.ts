import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsScalarWhereInputObjectSchema as process_template_stepsScalarWhereInputObjectSchema } from './process_template_stepsScalarWhereInput.schema';
import { process_template_stepsUpdateManyMutationInputObjectSchema as process_template_stepsUpdateManyMutationInputObjectSchema } from './process_template_stepsUpdateManyMutationInput.schema';
import { process_template_stepsUncheckedUpdateManyWithoutStepsInputObjectSchema as process_template_stepsUncheckedUpdateManyWithoutStepsInputObjectSchema } from './process_template_stepsUncheckedUpdateManyWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_template_stepsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => process_template_stepsUpdateManyMutationInputObjectSchema), z.lazy(() => process_template_stepsUncheckedUpdateManyWithoutStepsInputObjectSchema)])
}).strict();
export const process_template_stepsUpdateManyWithWhereWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_template_stepsUpdateManyWithWhereWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUpdateManyWithWhereWithoutStepsInput>;
export const process_template_stepsUpdateManyWithWhereWithoutStepsInputObjectZodSchema = makeSchema();
