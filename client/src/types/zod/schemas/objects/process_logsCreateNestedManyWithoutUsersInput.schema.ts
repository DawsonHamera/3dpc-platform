import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsCreateWithoutUsersInputObjectSchema as process_logsCreateWithoutUsersInputObjectSchema } from './process_logsCreateWithoutUsersInput.schema';
import { process_logsUncheckedCreateWithoutUsersInputObjectSchema as process_logsUncheckedCreateWithoutUsersInputObjectSchema } from './process_logsUncheckedCreateWithoutUsersInput.schema';
import { process_logsCreateOrConnectWithoutUsersInputObjectSchema as process_logsCreateOrConnectWithoutUsersInputObjectSchema } from './process_logsCreateOrConnectWithoutUsersInput.schema';
import { process_logsCreateManyUsersInputEnvelopeObjectSchema as process_logsCreateManyUsersInputEnvelopeObjectSchema } from './process_logsCreateManyUsersInputEnvelope.schema';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './process_logsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_logsCreateWithoutUsersInputObjectSchema), z.lazy(() => process_logsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => process_logsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => process_logsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_logsCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => process_logsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_logsCreateManyUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => process_logsWhereUniqueInputObjectSchema), z.lazy(() => process_logsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const process_logsCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_logsCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsCreateNestedManyWithoutUsersInput>;
export const process_logsCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
