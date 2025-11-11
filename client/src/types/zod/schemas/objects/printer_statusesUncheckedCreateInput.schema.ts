import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersUncheckedCreateNestedManyWithoutPrinter_statusesInputObjectSchema as printersUncheckedCreateNestedManyWithoutPrinter_statusesInputObjectSchema } from './printersUncheckedCreateNestedManyWithoutPrinter_statusesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  printers: z.lazy(() => printersUncheckedCreateNestedManyWithoutPrinter_statusesInputObjectSchema)
}).strict();
export const printer_statusesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.printer_statusesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesUncheckedCreateInput>;
export const printer_statusesUncheckedCreateInputObjectZodSchema = makeSchema();
