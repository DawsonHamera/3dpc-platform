import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  printers: z.boolean().optional()
}).strict();
export const Printer_statusesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.Printer_statusesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.Printer_statusesCountOutputTypeSelect>;
export const Printer_statusesCountOutputTypeSelectObjectZodSchema = makeSchema();
