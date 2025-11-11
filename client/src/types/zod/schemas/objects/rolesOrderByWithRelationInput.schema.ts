import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { usersOrderByRelationAggregateInputObjectSchema as usersOrderByRelationAggregateInputObjectSchema } from './usersOrderByRelationAggregateInput.schema';
import { rolesOrderByRelevanceInputObjectSchema as rolesOrderByRelevanceInputObjectSchema } from './rolesOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  users: z.lazy(() => usersOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => rolesOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const rolesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.rolesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesOrderByWithRelationInput>;
export const rolesOrderByWithRelationInputObjectZodSchema = makeSchema();
