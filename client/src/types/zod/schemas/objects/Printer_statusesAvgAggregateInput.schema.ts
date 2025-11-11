import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Printer_statusesAvgAggregateInputObjectSchema: z.ZodType<Prisma.Printer_statusesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Printer_statusesAvgAggregateInputType>;
export const Printer_statusesAvgAggregateInputObjectZodSchema = makeSchema();
