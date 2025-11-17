import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { userOrderByRelationAggregateInputObjectSchema as userOrderByRelationAggregateInputObjectSchema } from './userOrderByRelationAggregateInput.schema';
import { roleOrderByRelevanceInputObjectSchema as roleOrderByRelevanceInputObjectSchema } from './roleOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  users: z.lazy(() => userOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => roleOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const roleOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.roleOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.roleOrderByWithRelationInput>;
export const roleOrderByWithRelationInputObjectZodSchema = makeSchema();
