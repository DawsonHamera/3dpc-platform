import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceCreateWithoutEventInputObjectSchema as attendanceCreateWithoutEventInputObjectSchema } from './attendanceCreateWithoutEventInput.schema';
import { attendanceUncheckedCreateWithoutEventInputObjectSchema as attendanceUncheckedCreateWithoutEventInputObjectSchema } from './attendanceUncheckedCreateWithoutEventInput.schema';
import { attendanceCreateOrConnectWithoutEventInputObjectSchema as attendanceCreateOrConnectWithoutEventInputObjectSchema } from './attendanceCreateOrConnectWithoutEventInput.schema';
import { attendanceCreateManyEventInputEnvelopeObjectSchema as attendanceCreateManyEventInputEnvelopeObjectSchema } from './attendanceCreateManyEventInputEnvelope.schema';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendanceCreateWithoutEventInputObjectSchema), z.lazy(() => attendanceCreateWithoutEventInputObjectSchema).array(), z.lazy(() => attendanceUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => attendanceUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendanceCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => attendanceCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendanceCreateManyEventInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const attendanceUncheckedCreateNestedManyWithoutEventInputObjectSchema: z.ZodType<Prisma.attendanceUncheckedCreateNestedManyWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUncheckedCreateNestedManyWithoutEventInput>;
export const attendanceUncheckedCreateNestedManyWithoutEventInputObjectZodSchema = makeSchema();
