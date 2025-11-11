import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { stepsOrderByWithRelationInputObjectSchema as stepsOrderByWithRelationInputObjectSchema } from './stepsOrderByWithRelationInput.schema';
import { step_contentOrderByRelevanceInputObjectSchema as step_contentOrderByRelevanceInputObjectSchema } from './step_contentOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  content_order: SortOrderSchema.optional(),
  content_type: SortOrderSchema.optional(),
  content_data: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  steps: z.lazy(() => stepsOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => step_contentOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const step_contentOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.step_contentOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentOrderByWithRelationInput>;
export const step_contentOrderByWithRelationInputObjectZodSchema = makeSchema();
