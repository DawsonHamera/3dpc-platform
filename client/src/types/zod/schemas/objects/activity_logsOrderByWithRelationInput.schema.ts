import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { activity_logsOrderByRelevanceInputObjectSchema as activity_logsOrderByRelevanceInputObjectSchema } from './activity_logsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  action_type: SortOrderSchema.optional(),
  table_name: SortOrderSchema.optional(),
  record_id: SortOrderSchema.optional(),
  result: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => activity_logsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const activity_logsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.activity_logsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsOrderByWithRelationInput>;
export const activity_logsOrderByWithRelationInputObjectZodSchema = makeSchema();
