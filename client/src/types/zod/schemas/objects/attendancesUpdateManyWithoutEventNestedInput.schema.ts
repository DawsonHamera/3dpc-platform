import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesCreateWithoutEventInputObjectSchema as attendancesCreateWithoutEventInputObjectSchema } from './attendancesCreateWithoutEventInput.schema';
import { attendancesUncheckedCreateWithoutEventInputObjectSchema as attendancesUncheckedCreateWithoutEventInputObjectSchema } from './attendancesUncheckedCreateWithoutEventInput.schema';
import { attendancesCreateOrConnectWithoutEventInputObjectSchema as attendancesCreateOrConnectWithoutEventInputObjectSchema } from './attendancesCreateOrConnectWithoutEventInput.schema';
import { attendancesUpsertWithWhereUniqueWithoutEventInputObjectSchema as attendancesUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './attendancesUpsertWithWhereUniqueWithoutEventInput.schema';
import { attendancesCreateManyEventInputEnvelopeObjectSchema as attendancesCreateManyEventInputEnvelopeObjectSchema } from './attendancesCreateManyEventInputEnvelope.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './attendancesWhereUniqueInput.schema';
import { attendancesUpdateWithWhereUniqueWithoutEventInputObjectSchema as attendancesUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './attendancesUpdateWithWhereUniqueWithoutEventInput.schema';
import { attendancesUpdateManyWithWhereWithoutEventInputObjectSchema as attendancesUpdateManyWithWhereWithoutEventInputObjectSchema } from './attendancesUpdateManyWithWhereWithoutEventInput.schema';
import { attendancesScalarWhereInputObjectSchema as attendancesScalarWhereInputObjectSchema } from './attendancesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendancesCreateWithoutEventInputObjectSchema), z.lazy(() => attendancesCreateWithoutEventInputObjectSchema).array(), z.lazy(() => attendancesUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => attendancesUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendancesCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => attendancesCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => attendancesUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => attendancesUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendancesCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => attendancesWhereUniqueInputObjectSchema), z.lazy(() => attendancesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => attendancesUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => attendancesUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => attendancesUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => attendancesUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => attendancesScalarWhereInputObjectSchema), z.lazy(() => attendancesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const attendancesUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.attendancesUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesUpdateManyWithoutEventNestedInput>;
export const attendancesUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
