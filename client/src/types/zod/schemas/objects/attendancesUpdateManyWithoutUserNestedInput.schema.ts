import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesCreateWithoutUserInputObjectSchema as attendancesCreateWithoutUserInputObjectSchema } from './attendancesCreateWithoutUserInput.schema';
import { attendancesUncheckedCreateWithoutUserInputObjectSchema as attendancesUncheckedCreateWithoutUserInputObjectSchema } from './attendancesUncheckedCreateWithoutUserInput.schema';
import { attendancesCreateOrConnectWithoutUserInputObjectSchema as attendancesCreateOrConnectWithoutUserInputObjectSchema } from './attendancesCreateOrConnectWithoutUserInput.schema';
import { attendancesUpsertWithWhereUniqueWithoutUserInputObjectSchema as attendancesUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './attendancesUpsertWithWhereUniqueWithoutUserInput.schema';
import { attendancesCreateManyUserInputEnvelopeObjectSchema as attendancesCreateManyUserInputEnvelopeObjectSchema } from './attendancesCreateManyUserInputEnvelope.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './attendancesWhereUniqueInput.schema';
import { attendancesUpdateWithWhereUniqueWithoutUserInputObjectSchema as attendancesUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './attendancesUpdateWithWhereUniqueWithoutUserInput.schema';
import { attendancesUpdateManyWithWhereWithoutUserInputObjectSchema as attendancesUpdateManyWithWhereWithoutUserInputObjectSchema } from './attendancesUpdateManyWithWhereWithoutUserInput.schema';
import { attendancesScalarWhereInputObjectSchema as attendancesScalarWhereInputObjectSchema } from './attendancesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendancesCreateWithoutUserInputObjectSchema), z.lazy(() => attendancesCreateWithoutUserInputObjectSchema).array(), z.lazy(() => attendancesUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => attendancesUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendancesCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => attendancesCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => attendancesUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => attendancesUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendancesCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => attendancesUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => attendancesUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => attendancesUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => attendancesUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => attendancesScalarWhereInputObjectSchema), z.lazy(() => attendancesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const attendancesUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.attendancesUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpdateManyWithoutUserNestedInput>;
export const attendancesUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
