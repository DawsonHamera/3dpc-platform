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
export const printersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.printersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.printersAvgOrderByAggregateInput>;
export const printersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
