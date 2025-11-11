import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  model_file_id: SortOrderSchema.optional(),
  estimated_duration: SortOrderSchema.optional(),
  estimated_filament: SortOrderSchema.optional()
}).strict();
export const modelsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.modelsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsAvgOrderByAggregateInput>;
export const modelsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
