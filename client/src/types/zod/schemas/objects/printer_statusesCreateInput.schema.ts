import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateNestedManyWithoutPrinter_statusesInputObjectSchema as printersCreateNestedManyWithoutPrinter_statusesInputObjectSchema } from './printersCreateNestedManyWithoutPrinter_statusesInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  printers: z.lazy(() => printersCreateNestedManyWithoutPrinter_statusesInputObjectSchema)
}).strict();
export const printer_statusesCreateInputObjectSchema: z.ZodType<Prisma.printer_statusesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesCreateInput>;
export const printer_statusesCreateInputObjectZodSchema = makeSchema();
