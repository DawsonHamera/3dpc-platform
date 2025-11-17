import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceCreateWithoutUserInputObjectSchema as attendanceCreateWithoutUserInputObjectSchema } from './attendanceCreateWithoutUserInput.schema';
import { attendanceUncheckedCreateWithoutUserInputObjectSchema as attendanceUncheckedCreateWithoutUserInputObjectSchema } from './attendanceUncheckedCreateWithoutUserInput.schema';
import { attendanceCreateOrConnectWithoutUserInputObjectSchema as attendanceCreateOrConnectWithoutUserInputObjectSchema } from './attendanceCreateOrConnectWithoutUserInput.schema';
import { attendanceUpsertWithWhereUniqueWithoutUserInputObjectSchema as attendanceUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './attendanceUpsertWithWhereUniqueWithoutUserInput.schema';
import { attendanceCreateManyUserInputEnvelopeObjectSchema as attendanceCreateManyUserInputEnvelopeObjectSchema } from './attendanceCreateManyUserInputEnvelope.schema';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema';
import { attendanceUpdateWithWhereUniqueWithoutUserInputObjectSchema as attendanceUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './attendanceUpdateWithWhereUniqueWithoutUserInput.schema';
import { attendanceUpdateManyWithWhereWithoutUserInputObjectSchema as attendanceUpdateManyWithWhereWithoutUserInputObjectSchema } from './attendanceUpdateManyWithWhereWithoutUserInput.schema';
import { attendanceScalarWhereInputObjectSchema as attendanceScalarWhereInputObjectSchema } from './attendanceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendanceCreateWithoutUserInputObjectSchema), z.lazy(() => attendanceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => attendanceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => attendanceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendanceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => attendanceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => attendanceUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => attendanceUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendanceCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => attendanceUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => attendanceUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => attendanceUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => attendanceUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => attendanceScalarWhereInputObjectSchema), z.lazy(() => attendanceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const attendanceUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.attendanceUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpdateManyWithoutUserNestedInput>;
export const attendanceUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
