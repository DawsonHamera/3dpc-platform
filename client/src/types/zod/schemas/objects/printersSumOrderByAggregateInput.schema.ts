import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status_id: SortOrderSchema.optional(),
  image_id: SortOrderSchema.optional(),
  material_id: SortOrderSchema.optional(),
  process_template_id: SortOrderSchema.optional()
}).strict();
export const printersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.printersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.printersSumOrderByAggregateInput>;
export const printersSumOrderByAggregateInputObjectZodSchema = makeSchema();
