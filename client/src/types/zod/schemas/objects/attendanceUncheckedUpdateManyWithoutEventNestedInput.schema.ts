import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceCreateWithoutEventInputObjectSchema as attendanceCreateWithoutEventInputObjectSchema } from './attendanceCreateWithoutEventInput.schema';
import { attendanceUncheckedCreateWithoutEventInputObjectSchema as attendanceUncheckedCreateWithoutEventInputObjectSchema } from './attendanceUncheckedCreateWithoutEventInput.schema';
import { attendanceCreateOrConnectWithoutEventInputObjectSchema as attendanceCreateOrConnectWithoutEventInputObjectSchema } from './attendanceCreateOrConnectWithoutEventInput.schema';
import { attendanceUpsertWithWhereUniqueWithoutEventInputObjectSchema as attendanceUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './attendanceUpsertWithWhereUniqueWithoutEventInput.schema';
import { attendanceCreateManyEventInputEnvelopeObjectSchema as attendanceCreateManyEventInputEnvelopeObjectSchema } from './attendanceCreateManyEventInputEnvelope.schema';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema';
import { attendanceUpdateWithWhereUniqueWithoutEventInputObjectSchema as attendanceUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './attendanceUpdateWithWhereUniqueWithoutEventInput.schema';
import { attendanceUpdateManyWithWhereWithoutEventInputObjectSchema as attendanceUpdateManyWithWhereWithoutEventInputObjectSchema } from './attendanceUpdateManyWithWhereWithoutEventInput.schema';
import { attendanceScalarWhereInputObjectSchema as attendanceScalarWhereInputObjectSchema } from './attendanceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendanceCreateWithoutEventInputObjectSchema), z.lazy(() => attendanceCreateWithoutEventInputObjectSchema).array(), z.lazy(() => attendanceUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => attendanceUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendanceCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => attendanceCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => attendanceUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => attendanceUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendanceCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => attendanceUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => attendanceUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => attendanceUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => attendanceUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => attendanceScalarWhereInputObjectSchema), z.lazy(() => attendanceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const attendanceUncheckedUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.attendanceUncheckedUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUncheckedUpdateManyWithoutEventNestedInput>;
export const attendanceUncheckedUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
