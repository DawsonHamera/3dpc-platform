import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutUsersInputObjectSchema as process_instancesCreateWithoutUsersInputObjectSchema } from './process_instancesCreateWithoutUsersInput.schema';
import { process_instancesUncheckedCreateWithoutUsersInputObjectSchema as process_instancesUncheckedCreateWithoutUsersInputObjectSchema } from './process_instancesUncheckedCreateWithoutUsersInput.schema';
import { process_instancesCreateOrConnectWithoutUsersInputObjectSchema as process_instancesCreateOrConnectWithoutUsersInputObjectSchema } from './process_instancesCreateOrConnectWithoutUsersInput.schema';
import { process_instancesCreateManyUsersInputEnvelopeObjectSchema as process_instancesCreateManyUsersInputEnvelopeObjectSchema } from './process_instancesCreateManyUsersInputEnvelope.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instancesCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => process_instancesUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instancesCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => process_instancesCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instancesCreateManyUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => process_instancesWhereUniqueInputObjectSchema), z.lazy(() => process_instancesWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const process_instancesCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_instancesCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateNestedManyWithoutUsersInput>;
export const process_instancesCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
