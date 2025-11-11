import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logsCreateWithoutUsersInputObjectSchema as point_logsCreateWithoutUsersInputObjectSchema } from './point_logsCreateWithoutUsersInput.schema';
import { point_logsUncheckedCreateWithoutUsersInputObjectSchema as point_logsUncheckedCreateWithoutUsersInputObjectSchema } from './point_logsUncheckedCreateWithoutUsersInput.schema';
import { point_logsCreateOrConnectWithoutUsersInputObjectSchema as point_logsCreateOrConnectWithoutUsersInputObjectSchema } from './point_logsCreateOrConnectWithoutUsersInput.schema';
import { point_logsCreateManyUsersInputEnvelopeObjectSchema as point_logsCreateManyUsersInputEnvelopeObjectSchema } from './point_logsCreateManyUsersInputEnvelope.schema';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './point_logsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => point_logsCreateWithoutUsersInputObjectSchema), z.lazy(() => point_logsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => point_logsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => point_logsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => point_logsCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => point_logsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => point_logsCreateManyUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => point_logsWhereUniqueInputObjectSchema), z.lazy(() => point_logsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const point_logsUncheckedCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.point_logsUncheckedCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsUncheckedCreateNestedManyWithoutUsersInput>;
export const point_logsUncheckedCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
