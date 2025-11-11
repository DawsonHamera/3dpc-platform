import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status_id: z.literal(true).optional(),
  image_id: z.literal(true).optional(),
  material_id: z.literal(true).optional(),
  process_template_id: z.literal(true).optional()
}).strict();
export const PrintersSumAggregateInputObjectSchema: z.ZodType<Prisma.PrintersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PrintersSumAggregateInputType>;
export const PrintersSumAggregateInputObjectZodSchema = makeSchema();
