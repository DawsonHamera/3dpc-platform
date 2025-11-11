import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logsCreateWithoutUsersInputObjectSchema as point_logsCreateWithoutUsersInputObjectSchema } from './point_logsCreateWithoutUsersInput.schema';
import { point_logsUncheckedCreateWithoutUsersInputObjectSchema as point_logsUncheckedCreateWithoutUsersInputObjectSchema } from './point_logsUncheckedCreateWithoutUsersInput.schema';
import { point_logsCreateOrConnectWithoutUsersInputObjectSchema as point_logsCreateOrConnectWithoutUsersInputObjectSchema } from './point_logsCreateOrConnectWithoutUsersInput.schema';
import { point_logsUpsertWithWhereUniqueWithoutUsersInputObjectSchema as point_logsUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './point_logsUpsertWithWhereUniqueWithoutUsersInput.schema';
import { point_logsCreateManyUsersInputEnvelopeObjectSchema as point_logsCreateManyUsersInputEnvelopeObjectSchema } from './point_logsCreateManyUsersInputEnvelope.schema';
import { point_logsWhereUniqueInputObjectSchema as point_logsWhereUniqueInputObjectSchema } from './point_logsWhereUniqueInput.schema';
import { point_logsUpdateWithWhereUniqueWithoutUsersInputObjectSchema as point_logsUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './point_logsUpdateWithWhereUniqueWithoutUsersInput.schema';
import { point_logsUpdateManyWithWhereWithoutUsersInputObjectSchema as point_logsUpdateManyWithWhereWithoutUsersInputObjectSchema } from './point_logsUpdateManyWithWhereWithoutUsersInput.schema';
import { point_logsScalarWhereInputObjectSchema as point_logsScalarWhereInputObjectSchema } from './point_logsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => point_logsCreateWithoutUsersInputObjectSchema), z.lazy(() => point_logsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => point_logsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => point_logsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => point_logsCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => point_logsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => point_logsUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => point_logsUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => point_logsCreateManyUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => point_logsWhereUniqueInputObjectSchema), z.lazy(() => point_logsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => point_logsWhereUniqueInputObjectSchema), z.lazy(() => point_logsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => point_logsWhereUniqueInputObjectSchema), z.lazy(() => point_logsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => point_logsWhereUniqueInputObjectSchema), z.lazy(() => point_logsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => point_logsUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => point_logsUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => point_logsUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => point_logsUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => point_logsScalarWhereInputObjectSchema), z.lazy(() => point_logsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const point_logsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.point_logsUncheckedUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsUncheckedUpdateManyWithoutUsersNestedInput>;
export const point_logsUncheckedUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
