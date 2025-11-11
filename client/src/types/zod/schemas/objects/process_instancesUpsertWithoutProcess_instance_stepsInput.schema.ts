import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUpdateWithoutProcess_instance_stepsInput.schema';
import { process_instancesUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUncheckedUpdateWithoutProcess_instance_stepsInput.schema';
import { process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema as process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesCreateWithoutProcess_instance_stepsInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_instance_stepsInput.schema';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema)]),
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)]),
  where: z.lazy(() => process_instancesWhereInputObjectSchema).optional()
}).strict();
export const process_instancesUpsertWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.process_instancesUpsertWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpsertWithoutProcess_instance_stepsInput>;
export const process_instancesUpsertWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
