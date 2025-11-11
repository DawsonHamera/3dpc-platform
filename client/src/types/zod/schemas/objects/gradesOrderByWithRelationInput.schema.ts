import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { usersOrderByRelationAggregateInputObjectSchema as usersOrderByRelationAggregateInputObjectSchema } from './usersOrderByRelationAggregateInput.schema';
import { gradesOrderByRelevanceInputObjectSchema as gradesOrderByRelevanceInputObjectSchema } from './gradesOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  grade: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  users: z.lazy(() => usersOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => gradesOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const gradesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.gradesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesOrderByWithRelationInput>;
export const gradesOrderByWithRelationInputObjectZodSchema = makeSchema();
