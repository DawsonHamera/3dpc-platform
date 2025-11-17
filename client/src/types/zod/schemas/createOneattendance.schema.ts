import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendanceSelectObjectSchema as attendanceSelectObjectSchema } from './objects/attendanceSelect.schema';
import { attendanceIncludeObjectSchema as attendanceIncludeObjectSchema } from './objects/attendanceInclude.schema';
import { attendanceCreateInputObjectSchema as attendanceCreateInputObjectSchema } from './objects/attendanceCreateInput.schema';
import { attendanceUncheckedCreateInputObjectSchema as attendanceUncheckedCreateInputObjectSchema } from './objects/attendanceUncheckedCreateInput.schema';

export const attendanceCreateOneSchema: z.ZodType<Prisma.attendanceCreateArgs> = z.object({ select: attendanceSelectObjectSchema.optional(), include: attendanceIncludeObjectSchema.optional(), data: z.union([attendanceCreateInputObjectSchema, attendanceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.attendanceCreateArgs>;

export const attendanceCreateOneZodSchema = z.object({ select: attendanceSelectObjectSchema.optional(), include: attendanceIncludeObjectSchema.optional(), data: z.union([attendanceCreateInputObjectSchema, attendanceUncheckedCreateInputObjectSchema]) }).strict();