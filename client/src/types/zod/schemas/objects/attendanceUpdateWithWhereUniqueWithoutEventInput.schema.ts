import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema';
import { attendanceUpdateWithoutEventInputObjectSchema as attendanceUpdateWithoutEventInputObjectSchema } from './attendanceUpdateWithoutEventInput.schema';
import { attendanceUncheckedUpdateWithoutEventInputObjectSchema as attendanceUncheckedUpdateWithoutEventInputObjectSchema } from './attendanceUncheckedUpdateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendanceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => attendanceUpdateWithoutEventInputObjectSchema), z.lazy(() => attendanceUncheckedUpdateWithoutEventInputObjectSchema)])
}).strict();
export const attendanceUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.attendanceUpdateWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpdateWithWhereUniqueWithoutEventInput>;
export const attendanceUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
