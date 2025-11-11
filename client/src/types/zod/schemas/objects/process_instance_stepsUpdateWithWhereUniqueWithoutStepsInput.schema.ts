import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema';
import { process_instance_stepsUpdateWithoutStepsInputObjectSchema as process_instance_stepsUpdateWithoutStepsInputObjectSchema } from './process_instance_stepsUpdateWithoutStepsInput.schema';
import { process_instance_stepsUncheckedUpdateWithoutStepsInputObjectSchema as process_instance_stepsUncheckedUpdateWithoutStepsInputObjectSchema } from './process_instance_stepsUncheckedUpdateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => process_instance_stepsUpdateWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedUpdateWithoutStepsInputObjectSchema)])
}).strict();
export const process_instance_stepsUpdateWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUpdateWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUpdateWithWhereUniqueWithoutStepsInput>;
export const process_instance_stepsUpdateWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
