import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceCreateWithoutUserInputObjectSchema as attendanceCreateWithoutUserInputObjectSchema } from './attendanceCreateWithoutUserInput.schema';
import { attendanceUncheckedCreateWithoutUserInputObjectSchema as attendanceUncheckedCreateWithoutUserInputObjectSchema } from './attendanceUncheckedCreateWithoutUserInput.schema';
import { attendanceCreateOrConnectWithoutUserInputObjectSchema as attendanceCreateOrConnectWithoutUserInputObjectSchema } from './attendanceCreateOrConnectWithoutUserInput.schema';
import { attendanceCreateManyUserInputEnvelopeObjectSchema as attendanceCreateManyUserInputEnvelopeObjectSchema } from './attendanceCreateManyUserInputEnvelope.schema';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => attendanceCreateWithoutUserInputObjectSchema), z.lazy(() => attendanceCreateWithoutUserInputObjectSchema).array(), z.lazy(() => attendanceUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => attendanceUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => attendanceCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => attendanceCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => attendanceCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => attendanceWhereUniqueInputObjectSchema), z.lazy(() => attendanceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const attendanceUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.attendanceUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUncheckedCreateNestedManyWithoutUserInput>;
export const attendanceUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
