import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printer_statusesWhereInputObjectSchema as printer_statusesWhereInputObjectSchema } from './printer_statusesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => printer_statusesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => printer_statusesWhereInputObjectSchema).optional()
}).strict();
export const Printer_statusesScalarRelationFilterObjectSchema: z.ZodType<Prisma.Printer_statusesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Printer_statusesScalarRelationFilter>;
export const Printer_statusesScalarRelationFilterObjectZodSchema = makeSchema();
