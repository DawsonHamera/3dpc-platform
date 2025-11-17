import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendanceSelectObjectSchema as attendanceSelectObjectSchema } from './objects/attendanceSelect.schema';
import { attendanceIncludeObjectSchema as attendanceIncludeObjectSchema } from './objects/attendanceInclude.schema';
import { attendanceUpdateInputObjectSchema as attendanceUpdateInputObjectSchema } from './objects/attendanceUpdateInput.schema';
import { attendanceUncheckedUpdateInputObjectSchema as attendanceUncheckedUpdateInputObjectSchema } from './objects/attendanceUncheckedUpdateInput.schema';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './objects/attendanceWhereUniqueInput.schema';

export const attendanceUpdateOneSchema: z.ZodType<Prisma.attendanceUpdateArgs> = z.object({ select: attendanceSelectObjectSchema.optional(), include: attendanceIncludeObjectSchema.optional(), data: z.union([attendanceUpdateInputObjectSchema, attendanceUncheckedUpdateInputObjectSchema]), where: attendanceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.attendanceUpdateArgs>;

export const attendanceUpdateOneZodSchema = z.object({ select: attendanceSelectObjectSchema.optional(), include: attendanceIncludeObjectSchema.optional(), data: z.union([attendanceUpdateInputObjectSchema, attendanceUncheckedUpdateInputObjectSchema]), where: attendanceWhereUniqueInputObjectSchema }).strict();