import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { point_logsOrderByRelevanceInputObjectSchema as point_logsOrderByRelevanceInputObjectSchema } from './point_logsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  change: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logged_at: SortOrderSchema.optional(),
  users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => point_logsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const point_logsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.point_logsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsOrderByWithRelationInput>;
export const point_logsOrderByWithRelationInputObjectZodSchema = makeSchema();
