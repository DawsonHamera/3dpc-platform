import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceSelectObjectSchema as attendanceSelectObjectSchema } from './attendanceSelect.schema';
import { attendanceIncludeObjectSchema as attendanceIncludeObjectSchema } from './attendanceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => attendanceSelectObjectSchema).optional(),
  include: z.lazy(() => attendanceIncludeObjectSchema).optional()
}).strict();
export const attendanceArgsObjectSchema = makeSchema();
export const attendanceArgsObjectZodSchema = makeSchema();
