import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema as process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesCreateWithoutProcess_instance_stepsInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_instance_stepsInput.schema';
import { process_instancesCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema as process_instancesCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesCreateOrConnectWithoutProcess_instance_stepsInput.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_instancesCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => process_instancesWhereUniqueInputObjectSchema).optional()
}).strict();
export const process_instancesCreateNestedOneWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.process_instancesCreateNestedOneWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateNestedOneWithoutProcess_instance_stepsInput>;
export const process_instancesCreateNestedOneWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
