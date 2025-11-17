import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { userOrderByWithRelationInputObjectSchema as userOrderByWithRelationInputObjectSchema } from './userOrderByWithRelationInput.schema';
import { activity_logOrderByRelevanceInputObjectSchema as activity_logOrderByRelevanceInputObjectSchema } from './activity_logOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  action_type: SortOrderSchema.optional(),
  table_name: SortOrderSchema.optional(),
  record_id: SortOrderSchema.optional(),
  result: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user: z.lazy(() => userOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => activity_logOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const activity_logOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.activity_logOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logOrderByWithRelationInput>;
export const activity_logOrderByWithRelationInputObjectZodSchema = makeSchema();
