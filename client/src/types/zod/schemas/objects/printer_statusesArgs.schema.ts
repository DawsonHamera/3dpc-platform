import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printer_statusesSelectObjectSchema as printer_statusesSelectObjectSchema } from './printer_statusesSelect.schema';
import { printer_statusesIncludeObjectSchema as printer_statusesIncludeObjectSchema } from './printer_statusesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => printer_statusesSelectObjectSchema).optional(),
  include: z.lazy(() => printer_statusesIncludeObjectSchema).optional()
}).strict();
export const printer_statusesArgsObjectSchema = makeSchema();
export const printer_statusesArgsObjectZodSchema = makeSchema();
