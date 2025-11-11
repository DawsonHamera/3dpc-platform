import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { stepsOrderByWithRelationInputObjectSchema as stepsOrderByWithRelationInputObjectSchema } from './stepsOrderByWithRelationInput.schema';
import { step_triggersOrderByRelationAggregateInputObjectSchema as step_triggersOrderByRelationAggregateInputObjectSchema } from './step_triggersOrderByRelationAggregateInput.schema';
import { step_actionsOrderByRelevanceInputObjectSchema as step_actionsOrderByRelevanceInputObjectSchema } from './step_actionsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  action_order: SortOrderSchema.optional(),
  label: SortOrderSchema.optional(),
  action_type: SortOrderSchema.optional(),
  action_config: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  button_style: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  icon: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_enabled: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  confirmation_message: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  steps: z.lazy(() => stepsOrderByWithRelationInputObjectSchema).optional(),
  step_triggers: z.lazy(() => step_triggersOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => step_actionsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const step_actionsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.step_actionsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsOrderByWithRelationInput>;
export const step_actionsOrderByWithRelationInputObjectZodSchema = makeSchema();
