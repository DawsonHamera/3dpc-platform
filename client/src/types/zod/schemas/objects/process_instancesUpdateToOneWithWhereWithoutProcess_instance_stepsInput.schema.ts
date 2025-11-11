import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema';
import { process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUpdateWithoutProcess_instance_stepsInput.schema';
import { process_instancesUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUncheckedUpdateWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema)])
}).strict();
export const process_instancesUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateToOneWithWhereWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateToOneWithWhereWithoutProcess_instance_stepsInput>;
export const process_instancesUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
