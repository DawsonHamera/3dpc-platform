import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema';
import { attendanceUpdateWithoutUserInputObjectSchema as attendanceUpdateWithoutUserInputObjectSchema } from './attendanceUpdateWithoutUserInput.schema';
import { attendanceUncheckedUpdateWithoutUserInputObjectSchema as attendanceUncheckedUpdateWithoutUserInputObjectSchema } from './attendanceUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendanceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => attendanceUpdateWithoutUserInputObjectSchema), z.lazy(() => attendanceUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const attendanceUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.attendanceUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpdateWithWhereUniqueWithoutUserInput>;
export const attendanceUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
