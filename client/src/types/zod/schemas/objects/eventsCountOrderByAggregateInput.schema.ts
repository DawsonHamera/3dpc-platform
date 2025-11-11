import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  start_time: SortOrderSchema.optional(),
  end_time: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  is_featured: SortOrderSchema.optional(),
  event_type: SortOrderSchema.optional(),
  created_by: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: SortOrderSchema.optional(),
  verification_code: SortOrderSchema.optional()
}).strict();
export const eventsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.eventsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsCountOrderByAggregateInput>;
export const eventsCountOrderByAggregateInputObjectZodSchema = makeSchema();
