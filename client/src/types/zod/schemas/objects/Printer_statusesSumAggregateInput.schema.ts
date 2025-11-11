import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Printer_statusesSumAggregateInputObjectSchema: z.ZodType<Prisma.Printer_statusesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Printer_statusesSumAggregateInputType>;
export const Printer_statusesSumAggregateInputObjectZodSchema = makeSchema();
