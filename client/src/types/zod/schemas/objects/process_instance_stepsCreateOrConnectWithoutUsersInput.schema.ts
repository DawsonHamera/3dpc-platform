import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema';
import { process_instance_stepsCreateWithoutUsersInputObjectSchema as process_instance_stepsCreateWithoutUsersInputObjectSchema } from './process_instance_stepsCreateWithoutUsersInput.schema';
import { process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema as process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema } from './process_instance_stepsUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_instance_stepsCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const process_instance_stepsCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_instance_stepsCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsCreateOrConnectWithoutUsersInput>;
export const process_instance_stepsCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
