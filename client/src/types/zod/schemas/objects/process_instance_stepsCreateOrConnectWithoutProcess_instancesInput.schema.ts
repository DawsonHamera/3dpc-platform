import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema';
import { process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema as process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsCreateWithoutProcess_instancesInput.schema';
import { process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUncheckedCreateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_instance_stepsCreateOrConnectWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsCreateOrConnectWithoutProcess_instancesInput>;
export const process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectZodSchema = makeSchema();
