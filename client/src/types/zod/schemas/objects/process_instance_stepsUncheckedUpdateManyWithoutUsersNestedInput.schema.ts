import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsCreateWithoutUsersInputObjectSchema as process_instance_stepsCreateWithoutUsersInputObjectSchema } from './process_instance_stepsCreateWithoutUsersInput.schema';
import { process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema as process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema } from './process_instance_stepsUncheckedCreateWithoutUsersInput.schema';
import { process_instance_stepsCreateOrConnectWithoutUsersInputObjectSchema as process_instance_stepsCreateOrConnectWithoutUsersInputObjectSchema } from './process_instance_stepsCreateOrConnectWithoutUsersInput.schema';
import { process_instance_stepsUpsertWithWhereUniqueWithoutUsersInputObjectSchema as process_instance_stepsUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './process_instance_stepsUpsertWithWhereUniqueWithoutUsersInput.schema';
import { process_instance_stepsCreateManyUsersInputEnvelopeObjectSchema as process_instance_stepsCreateManyUsersInputEnvelopeObjectSchema } from './process_instance_stepsCreateManyUsersInputEnvelope.schema';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema';
import { process_instance_stepsUpdateWithWhereUniqueWithoutUsersInputObjectSchema as process_instance_stepsUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './process_instance_stepsUpdateWithWhereUniqueWithoutUsersInput.schema';
import { process_instance_stepsUpdateManyWithWhereWithoutUsersInputObjectSchema as process_instance_stepsUpdateManyWithWhereWithoutUsersInputObjectSchema } from './process_instance_stepsUpdateManyWithWhereWithoutUsersInput.schema';
import { process_instance_stepsScalarWhereInputObjectSchema as process_instance_stepsScalarWhereInputObjectSchema } from './process_instance_stepsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instance_stepsCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instance_stepsCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => process_instance_stepsUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instance_stepsCreateManyUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => process_instance_stepsUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => process_instance_stepsUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => process_instance_stepsUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema), z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const process_instance_stepsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUncheckedUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUncheckedUpdateManyWithoutUsersNestedInput>;
export const process_instance_stepsUncheckedUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
