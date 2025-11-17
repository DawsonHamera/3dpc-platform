import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { eventOrderByRelationAggregateInputObjectSchema as eventOrderByRelationAggregateInputObjectSchema } from './eventOrderByRelationAggregateInput.schema';
import { userOrderByWithRelationInputObjectSchema as userOrderByWithRelationInputObjectSchema } from './userOrderByWithRelationInput.schema';
import { fileOrderByRelevanceInputObjectSchema as fileOrderByRelevanceInputObjectSchema } from './fileOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  original_name: SortOrderSchema.optional(),
  stored_name: SortOrderSchema.optional(),
  mime_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  size: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  uploaded_by: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  events: z.lazy(() => eventOrderByRelationAggregateInputObjectSchema).optional(),
  uploader: z.lazy(() => userOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => fileOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const fileOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.fileOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.fileOrderByWithRelationInput>;
export const fileOrderByWithRelationInputObjectZodSchema = makeSchema();
