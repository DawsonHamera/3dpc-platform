import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { productsOrderByRelationAggregateInputObjectSchema as productsOrderByRelationAggregateInputObjectSchema } from './productsOrderByRelationAggregateInput.schema';
import { tasksOrderByRelationAggregateInputObjectSchema as tasksOrderByRelationAggregateInputObjectSchema } from './tasksOrderByRelationAggregateInput.schema';
import { modelsOrderByRelevanceInputObjectSchema as modelsOrderByRelevanceInputObjectSchema } from './modelsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  image_file_id: SortOrderSchema.optional(),
  model_file_id: SortOrderSchema.optional(),
  material_slots: SortOrderSchema.optional(),
  estimated_duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  estimated_filament: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tags: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  products: z.lazy(() => productsOrderByRelationAggregateInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => modelsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const modelsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.modelsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsOrderByWithRelationInput>;
export const modelsOrderByWithRelationInputObjectZodSchema = makeSchema();
