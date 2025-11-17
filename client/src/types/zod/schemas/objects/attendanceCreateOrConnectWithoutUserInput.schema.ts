import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema';
import { attendanceCreateWithoutUserInputObjectSchema as attendanceCreateWithoutUserInputObjectSchema } from './attendanceCreateWithoutUserInput.schema';
import { attendanceUncheckedCreateWithoutUserInputObjectSchema as attendanceUncheckedCreateWithoutUserInputObjectSchema } from './attendanceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendanceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => attendanceCreateWithoutUserInputObjectSchema), z.lazy(() => attendanceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const attendanceCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.attendanceCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceCreateOrConnectWithoutUserInput>;
export const attendanceCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
