import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceWhereInputObjectSchema as attendanceWhereInputObjectSchema } from './attendanceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => attendanceWhereInputObjectSchema).optional(),
  some: z.lazy(() => attendanceWhereInputObjectSchema).optional(),
  none: z.lazy(() => attendanceWhereInputObjectSchema).optional()
}).strict();
export const AttendanceListRelationFilterObjectSchema: z.ZodType<Prisma.AttendanceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AttendanceListRelationFilter>;
export const AttendanceListRelationFilterObjectZodSchema = makeSchema();
