import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema as process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesCreateWithoutProcess_instance_stepsInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_instance_stepsInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema)])
}).strict();
export const process_instancesCreateOrConnectWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.process_instancesCreateOrConnectWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateOrConnectWithoutProcess_instance_stepsInput>;
export const process_instancesCreateOrConnectWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
