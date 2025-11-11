import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  action_order: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  action_type: SortOrderSchema.optional(),
  action_config: SortOrderSchema.optional(),
  button_style: SortOrderSchema.optional(),
  icon: SortOrderSchema.optional(),
  is_enabled: SortOrderSchema.optional(),
  confirmation_message: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional()
}).strict();
export const step_actionsMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.step_actionsMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsMaxOrderByAggregateInput>;
export const step_actionsMaxOrderByAggregateInputObjectZodSchema = makeSchema();
