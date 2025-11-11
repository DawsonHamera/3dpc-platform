import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesSelectObjectSchema as attendancesSelectObjectSchema } from './attendancesSelect.schema';
import { attendancesIncludeObjectSchema as attendancesIncludeObjectSchema } from './attendancesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => attendancesSelectObjectSchema).optional(),
  include: z.lazy(() => attendancesIncludeObjectSchema).optional()
}).strict();
export const attendancesArgsObjectSchema = makeSchema();
export const attendancesArgsObjectZodSchema = makeSchema();
