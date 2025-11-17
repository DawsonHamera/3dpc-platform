import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema';
import { attendanceUpdateWithoutEventInputObjectSchema as attendanceUpdateWithoutEventInputObjectSchema } from './attendanceUpdateWithoutEventInput.schema';
import { attendanceUncheckedUpdateWithoutEventInputObjectSchema as attendanceUncheckedUpdateWithoutEventInputObjectSchema } from './attendanceUncheckedUpdateWithoutEventInput.schema';
import { attendanceCreateWithoutEventInputObjectSchema as attendanceCreateWithoutEventInputObjectSchema } from './attendanceCreateWithoutEventInput.schema';
import { attendanceUncheckedCreateWithoutEventInputObjectSchema as attendanceUncheckedCreateWithoutEventInputObjectSchema } from './attendanceUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendanceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => attendanceUpdateWithoutEventInputObjectSchema), z.lazy(() => attendanceUncheckedUpdateWithoutEventInputObjectSchema)]),
  create: z.union([z.lazy(() => attendanceCreateWithoutEventInputObjectSchema), z.lazy(() => attendanceUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const attendanceUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.attendanceUpsertWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceUpsertWithWhereUniqueWithoutEventInput>;
export const attendanceUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
