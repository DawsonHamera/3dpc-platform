import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateWithoutUsersInputObjectSchema as error_reportsCreateWithoutUsersInputObjectSchema } from './error_reportsCreateWithoutUsersInput.schema';
import { error_reportsUncheckedCreateWithoutUsersInputObjectSchema as error_reportsUncheckedCreateWithoutUsersInputObjectSchema } from './error_reportsUncheckedCreateWithoutUsersInput.schema';
import { error_reportsCreateOrConnectWithoutUsersInputObjectSchema as error_reportsCreateOrConnectWithoutUsersInputObjectSchema } from './error_reportsCreateOrConnectWithoutUsersInput.schema';
import { error_reportsCreateManyUsersInputEnvelopeObjectSchema as error_reportsCreateManyUsersInputEnvelopeObjectSchema } from './error_reportsCreateManyUsersInputEnvelope.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => error_reportsCreateWithoutUsersInputObjectSchema), z.lazy(() => error_reportsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => error_reportsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => error_reportsCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => error_reportsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => error_reportsCreateManyUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const error_reportsCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.error_reportsCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateNestedManyWithoutUsersInput>;
export const error_reportsCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
