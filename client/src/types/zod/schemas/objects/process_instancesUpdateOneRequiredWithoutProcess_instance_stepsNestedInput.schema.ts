import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema as process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesCreateWithoutProcess_instance_stepsInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_instance_stepsInput.schema';
import { process_instancesCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema as process_instancesCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesCreateOrConnectWithoutProcess_instance_stepsInput.schema';
import { process_instancesUpsertWithoutProcess_instance_stepsInputObjectSchema as process_instancesUpsertWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUpsertWithoutProcess_instance_stepsInput.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema as process_instancesUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUpdateToOneWithWhereWithoutProcess_instance_stepsInput.schema';
import { process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUpdateWithoutProcess_instance_stepsInput.schema';
import { process_instancesUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUncheckedUpdateWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_instancesCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema).optional(),
  upsert: z.lazy(() => process_instancesUpsertWithoutProcess_instance_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => process_instancesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => process_instancesUpdateToOneWithWhereWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => process_instancesUpdateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutProcess_instance_stepsInputObjectSchema)]).optional()
}).strict();
export const process_instancesUpdateOneRequiredWithoutProcess_instance_stepsNestedInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateOneRequiredWithoutProcess_instance_stepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateOneRequiredWithoutProcess_instance_stepsNestedInput>;
export const process_instancesUpdateOneRequiredWithoutProcess_instance_stepsNestedInputObjectZodSchema = makeSchema();
