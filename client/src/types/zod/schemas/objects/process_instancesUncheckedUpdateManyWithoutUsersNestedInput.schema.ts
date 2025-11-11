import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutUsersInputObjectSchema as process_instancesCreateWithoutUsersInputObjectSchema } from './process_instancesCreateWithoutUsersInput.schema';
import { process_instancesUncheckedCreateWithoutUsersInputObjectSchema as process_instancesUncheckedCreateWithoutUsersInputObjectSchema } from './process_instancesUncheckedCreateWithoutUsersInput.schema';
import { process_instancesCreateOrConnectWithoutUsersInputObjectSchema as process_instancesCreateOrConnectWithoutUsersInputObjectSchema } from './process_instancesCreateOrConnectWithoutUsersInput.schema';
import { process_instancesUpsertWithWhereUniqueWithoutUsersInputObjectSchema as process_instancesUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './process_instancesUpsertWithWhereUniqueWithoutUsersInput.schema';
import { process_instancesCreateManyUsersInputEnvelopeObjectSchema as process_instancesCreateManyUsersInputEnvelopeObjectSchema } from './process_instancesCreateManyUsersInputEnvelope.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesUpdateWithWhereUniqueWithoutUsersInputObjectSchema as process_instancesUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './process_instancesUpdateWithWhereUniqueWithoutUsersInput.schema';
import { process_instancesUpdateManyWithWhereWithoutUsersInputObjectSchema as process_instancesUpdateManyWithWhereWithoutUsersInputObjectSchema } from './process_instancesUpdateManyWithWhereWithoutUsersInput.schema';
import { process_instancesScalarWhereInputObjectSchema as process_instancesScalarWhereInputObjectSchema } from './process_instancesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instancesCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => process_instancesUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instancesCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => process_instancesCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => process_instancesUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => process_instancesUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instancesCreateManyUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => process_instancesUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => process_instancesUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => process_instancesUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => process_instancesUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => process_instancesScalarWhereInputObjectSchema), z.lazy(() => process_instancesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const process_instancesUncheckedUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.process_instancesUncheckedUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUncheckedUpdateManyWithoutUsersNestedInput>;
export const process_instancesUncheckedUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
