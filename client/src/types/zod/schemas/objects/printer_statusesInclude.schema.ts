import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersFindManySchema as printersFindManySchema } from '../findManyprinters.schema';
import { Printer_statusesCountOutputTypeArgsObjectSchema as Printer_statusesCountOutputTypeArgsObjectSchema } from './Printer_statusesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  printers: z.union([z.boolean(), z.lazy(() => printersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Printer_statusesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const printer_statusesIncludeObjectSchema: z.ZodType<Prisma.printer_statusesInclude> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesInclude>;
export const printer_statusesIncludeObjectZodSchema = makeSchema();
