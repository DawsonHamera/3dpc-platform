import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema';
import { process_instance_stepsUpdateWithoutStepsInputObjectSchema as process_instance_stepsUpdateWithoutStepsInputObjectSchema } from './process_instance_stepsUpdateWithoutStepsInput.schema';
import { process_instance_stepsUncheckedUpdateWithoutStepsInputObjectSchema as process_instance_stepsUncheckedUpdateWithoutStepsInputObjectSchema } from './process_instance_stepsUncheckedUpdateWithoutStepsInput.schema';
import { process_instance_stepsCreateWithoutStepsInputObjectSchema as process_instance_stepsCreateWithoutStepsInputObjectSchema } from './process_instance_stepsCreateWithoutStepsInput.schema';
import { process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema as process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema } from './process_instance_stepsUncheckedCreateWithoutStepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => process_instance_stepsUpdateWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedUpdateWithoutStepsInputObjectSchema)]),
  create: z.union([z.lazy(() => process_instance_stepsCreateWithoutStepsInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedCreateWithoutStepsInputObjectSchema)])
}).strict();
export const process_instance_stepsUpsertWithWhereUniqueWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUpsertWithWhereUniqueWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUpsertWithWhereUniqueWithoutStepsInput>;
export const process_instance_stepsUpsertWithWhereUniqueWithoutStepsInputObjectZodSchema = makeSchema();
