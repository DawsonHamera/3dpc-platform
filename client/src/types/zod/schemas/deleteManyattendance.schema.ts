import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { attendanceWhereInputObjectSchema as attendanceWhereInputObjectSchema } from './objects/attendanceWhereInput.schema';

export const attendanceDeleteManySchema: z.ZodType<Prisma.attendanceDeleteManyArgs> = z.object({ where: attendanceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.attendanceDeleteManyArgs>;

export const attendanceDeleteManyZodSchema = z.object({ where: attendanceWhereInputObjectSchema.optional() }).strict();