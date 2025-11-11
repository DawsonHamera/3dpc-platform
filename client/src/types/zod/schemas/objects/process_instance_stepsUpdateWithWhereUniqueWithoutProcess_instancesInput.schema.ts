import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema';
import { process_instance_stepsUpdateWithoutProcess_instancesInputObjectSchema as process_instance_stepsUpdateWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUpdateWithoutProcess_instancesInput.schema';
import { process_instance_stepsUncheckedUpdateWithoutProcess_instancesInputObjectSchema as process_instance_stepsUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUncheckedUpdateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => process_instance_stepsUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedUpdateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const process_instance_stepsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUpdateWithWhereUniqueWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUpdateWithWhereUniqueWithoutProcess_instancesInput>;
export const process_instance_stepsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectZodSchema = makeSchema();
