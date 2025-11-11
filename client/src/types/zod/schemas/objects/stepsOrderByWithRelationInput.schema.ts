import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { error_reportsOrderByRelationAggregateInputObjectSchema as error_reportsOrderByRelationAggregateInputObjectSchema } from './error_reportsOrderByRelationAggregateInput.schema';
import { process_instance_stepsOrderByRelationAggregateInputObjectSchema as process_instance_stepsOrderByRelationAggregateInputObjectSchema } from './process_instance_stepsOrderByRelationAggregateInput.schema';
import { process_template_stepsOrderByRelationAggregateInputObjectSchema as process_template_stepsOrderByRelationAggregateInputObjectSchema } from './process_template_stepsOrderByRelationAggregateInput.schema';
import { step_actionsOrderByRelationAggregateInputObjectSchema as step_actionsOrderByRelationAggregateInputObjectSchema } from './step_actionsOrderByRelationAggregateInput.schema';
import { step_contentOrderByRelationAggregateInputObjectSchema as step_contentOrderByRelationAggregateInputObjectSchema } from './step_contentOrderByRelationAggregateInput.schema';
import { stepsOrderByRelevanceInputObjectSchema as stepsOrderByRelevanceInputObjectSchema } from './stepsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_critical: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  step_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_required: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  error_reports: z.lazy(() => error_reportsOrderByRelationAggregateInputObjectSchema).optional(),
  process_instance_steps: z.lazy(() => process_instance_stepsOrderByRelationAggregateInputObjectSchema).optional(),
  process_template_steps: z.lazy(() => process_template_stepsOrderByRelationAggregateInputObjectSchema).optional(),
  step_actions: z.lazy(() => step_actionsOrderByRelationAggregateInputObjectSchema).optional(),
  step_content: z.lazy(() => step_contentOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => stepsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const stepsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.stepsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsOrderByWithRelationInput>;
export const stepsOrderByWithRelationInputObjectZodSchema = makeSchema();
