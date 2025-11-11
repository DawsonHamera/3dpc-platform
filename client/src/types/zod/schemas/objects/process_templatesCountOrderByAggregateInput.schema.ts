import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  category: SortOrderSchema.optional(),
  estimated_duration: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional()
}).strict();
export const process_templatesCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_templatesCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesCountOrderByAggregateInput>;
export const process_templatesCountOrderByAggregateInputObjectZodSchema = makeSchema();
