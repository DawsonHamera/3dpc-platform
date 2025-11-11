import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersFindManySchema as printersFindManySchema } from '../findManyprinters.schema';
import { Printer_statusesCountOutputTypeArgsObjectSchema as Printer_statusesCountOutputTypeArgsObjectSchema } from './Printer_statusesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  printers: z.union([z.boolean(), z.lazy(() => printersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Printer_statusesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const printer_statusesSelectObjectSchema: z.ZodType<Prisma.printer_statusesSelect> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesSelect>;
export const printer_statusesSelectObjectZodSchema = makeSchema();
