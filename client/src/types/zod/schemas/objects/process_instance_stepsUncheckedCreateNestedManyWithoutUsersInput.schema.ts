import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsCreateWithoutUsersInputObjectSchema as process_instance_stepsCreateWithoutUsersInputObjectSchema } from './process_instance_stepsCreateWithoutUsersInput.schema';
import { process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema as process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema } from './process_instance_stepsUncheckedCreateWithoutUsersInput.schema';
import { process_instance_stepsCreateOrConnectWithoutUsersInputObjectSchema as process_instance_stepsCreateOrConnectWithoutUsersInputObjectSchema } from './process_instance_stepsCreateOrConnectWithoutUsersInput.schema';
import { process_instance_stepsCreateManyUsersInputEnvelopeObjectSchema as process_instance_stepsCreateManyUsersInputEnvelopeObjectSchema } from './process_instance_stepsCreateManyUsersInputEnvelope.schema';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instance_stepsCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instance_stepsCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instance_stepsCreateManyUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const process_instance_stepsUncheckedCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUncheckedCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUncheckedCreateNestedManyWithoutUsersInput>;
export const process_instance_stepsUncheckedCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
