import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const printer_statusesSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.printer_statusesSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesSumOrderByAggregateInput>;
export const printer_statusesSumOrderByAggregateInputObjectZodSchema = makeSchema();
