import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_template_id: SortOrderSchema.optional(),
  assigned_user_id: SortOrderSchema.optional(),
  current_step_order: SortOrderSchema.optional(),
  estimated_duration: SortOrderSchema.optional(),
  actual_duration: SortOrderSchema.optional()
}).strict();
export const process_instancesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_instancesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesAvgOrderByAggregateInput>;
export const process_instancesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
