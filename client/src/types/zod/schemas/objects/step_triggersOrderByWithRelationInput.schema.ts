import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { step_actionsOrderByWithRelationInputObjectSchema as step_actionsOrderByWithRelationInputObjectSchema } from './step_actionsOrderByWithRelationInput.schema';
import { step_triggersOrderByRelevanceInputObjectSchema as step_triggersOrderByRelevanceInputObjectSchema } from './step_triggersOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_action_id: SortOrderSchema.optional(),
  trigger_order: SortOrderSchema.optional(),
  trigger_type: SortOrderSchema.optional(),
  trigger_config: SortOrderSchema.optional(),
  condition_rules: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_enabled: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  step_actions: z.lazy(() => step_actionsOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => step_triggersOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const step_triggersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.step_triggersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersOrderByWithRelationInput>;
export const step_triggersOrderByWithRelationInputObjectZodSchema = makeSchema();
