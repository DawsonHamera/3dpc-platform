import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './attendanceWhereUniqueInput.schema';
import { attendanceCreateWithoutEventInputObjectSchema as attendanceCreateWithoutEventInputObjectSchema } from './attendanceCreateWithoutEventInput.schema';
import { attendanceUncheckedCreateWithoutEventInputObjectSchema as attendanceUncheckedCreateWithoutEventInputObjectSchema } from './attendanceUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => attendanceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => attendanceCreateWithoutEventInputObjectSchema), z.lazy(() => attendanceUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const attendanceCreateOrConnectWithoutEventInputObjectSchema: z.ZodType<Prisma.attendanceCreateOrConnectWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceCreateOrConnectWithoutEventInput>;
export const attendanceCreateOrConnectWithoutEventInputObjectZodSchema = makeSchema();
