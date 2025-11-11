import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_action_id: SortOrderSchema.optional(),
  trigger_order: SortOrderSchema.optional(),
  trigger_type: SortOrderSchema.optional(),
  trigger_config: SortOrderSchema.optional(),
  condition_rules: SortOrderSchema.optional(),
  is_enabled: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const step_triggersMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.step_triggersMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersMaxOrderByAggregateInput>;
export const step_triggersMaxOrderByAggregateInputObjectZodSchema = makeSchema();
