import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { migrationsOrderByRelevanceInputObjectSchema as migrationsOrderByRelevanceInputObjectSchema } from './migrationsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  version: SortOrderSchema.optional(),
  class: SortOrderSchema.optional(),
  group: SortOrderSchema.optional(),
  namespace: SortOrderSchema.optional(),
  time: SortOrderSchema.optional(),
  batch: SortOrderSchema.optional(),
  _relevance: z.lazy(() => migrationsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const migrationsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.migrationsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.migrationsOrderByWithRelationInput>;
export const migrationsOrderByWithRelationInputObjectZodSchema = makeSchema();
