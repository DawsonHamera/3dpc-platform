import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendancesSelectObjectSchema as attendancesSelectObjectSchema } from './objects/attendancesSelect.schema';
import { attendancesIncludeObjectSchema as attendancesIncludeObjectSchema } from './objects/attendancesInclude.schema';
import { attendancesWhereUniqueInputObjectSchema as attendancesWhereUniqueInputObjectSchema } from './objects/attendancesWhereUniqueInput.schema';

export const attendancesFindUniqueOrThrowSchema: z.ZodType<Prisma.attendancesFindUniqueOrThrowArgs> = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), where: attendancesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.attendancesFindUniqueOrThrowArgs>;

export const attendancesFindUniqueOrThrowZodSchema = z.object({ select: attendancesSelectObjectSchema.optional(), include: attendancesIncludeObjectSchema.optional(), where: attendancesWhereUniqueInputObjectSchema }).strict();