import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateWithoutUsersInputObjectSchema as error_reportsCreateWithoutUsersInputObjectSchema } from './error_reportsCreateWithoutUsersInput.schema';
import { error_reportsUncheckedCreateWithoutUsersInputObjectSchema as error_reportsUncheckedCreateWithoutUsersInputObjectSchema } from './error_reportsUncheckedCreateWithoutUsersInput.schema';
import { error_reportsCreateOrConnectWithoutUsersInputObjectSchema as error_reportsCreateOrConnectWithoutUsersInputObjectSchema } from './error_reportsCreateOrConnectWithoutUsersInput.schema';
import { error_reportsUpsertWithWhereUniqueWithoutUsersInputObjectSchema as error_reportsUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './error_reportsUpsertWithWhereUniqueWithoutUsersInput.schema';
import { error_reportsCreateManyUsersInputEnvelopeObjectSchema as error_reportsCreateManyUsersInputEnvelopeObjectSchema } from './error_reportsCreateManyUsersInputEnvelope.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsUpdateWithWhereUniqueWithoutUsersInputObjectSchema as error_reportsUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './error_reportsUpdateWithWhereUniqueWithoutUsersInput.schema';
import { error_reportsUpdateManyWithWhereWithoutUsersInputObjectSchema as error_reportsUpdateManyWithWhereWithoutUsersInputObjectSchema } from './error_reportsUpdateManyWithWhereWithoutUsersInput.schema';
import { error_reportsScalarWhereInputObjectSchema as error_reportsScalarWhereInputObjectSchema } from './error_reportsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => error_reportsCreateWithoutUsersInputObjectSchema), z.lazy(() => error_reportsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => error_reportsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => error_reportsCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => error_reportsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => error_reportsUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => error_reportsUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => error_reportsCreateManyUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => error_reportsUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => error_reportsUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => error_reportsUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => error_reportsUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => error_reportsScalarWhereInputObjectSchema), z.lazy(() => error_reportsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const error_reportsUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.error_reportsUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpdateManyWithoutUsersNestedInput>;
export const error_reportsUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
