import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { Printer_statusesCountOutputTypeSelectObjectSchema as Printer_statusesCountOutputTypeSelectObjectSchema } from './Printer_statusesCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => Printer_statusesCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const Printer_statusesCountOutputTypeArgsObjectSchema = makeSchema();
export const Printer_statusesCountOutputTypeArgsObjectZodSchema = makeSchema();
