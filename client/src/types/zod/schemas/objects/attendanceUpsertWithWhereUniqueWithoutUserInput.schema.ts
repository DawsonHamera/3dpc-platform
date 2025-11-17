import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema';
import { attendanceUpdateWithoutUserInputObjectSchema as attendanceUpdateWithoutUserInputObjectSchema } from './attendanceUpdateWithoutUserInput.schema';
import { attendanceUncheckedUpdateWithoutUserInputObjectSchema as attendanceUncheckedUpdateWithoutUserInputObjectSchema } from './attendanceUncheckedUpdateWithoutUserInput.schema';
import { attendanceCreateWithoutUserInputObjectSchema as attendanceCreateWithoutUserInputObjectSchema } from './attendanceCreateWithoutUserInput.schema';
import { attendanceUncheckedCreateWithoutUserInputObjectSchema as attendanceUncheckedCreateWithoutUserInputObjectSchema } from './attendanceUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendanceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => attendanceUpdateWithoutUserInputObjectSchema), z.lazy(() => attendanceUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => attendanceCreateWithoutUserInputObjectSchema), z.lazy(() => attendanceUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const attendanceUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.attendanceUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpsertWithWhereUniqueWithoutUserInput>;
export const attendanceUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
