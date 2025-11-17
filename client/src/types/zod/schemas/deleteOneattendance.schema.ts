import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendanceSelectObjectSchema as attendanceSelectObjectSchema } from './objects/attendanceSelect.schema';
import { attendanceIncludeObjectSchema as attendanceIncludeObjectSchema } from './objects/attendanceInclude.schema';
import { attendanceWhereUniqueInputObjectSchema as attendanceWhereUniqueInputObjectSchema } from './objects/attendanceWhereUniqueInput.schema';

export const attendanceDeleteOneSchema: z.ZodType<Prisma.attendanceDeleteArgs> = z.object({ select: attendanceSelectObjectSchema.optional(), include: attendanceIncludeObjectSchema.optional(), where: attendanceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.attendanceDeleteArgs>;

export const attendanceDeleteOneZodSchema = z.object({ select: attendanceSelectObjectSchema.optional(), include: attendanceIncludeObjectSchema.optional(), where: attendanceWhereUniqueInputObjectSchema }).strict();