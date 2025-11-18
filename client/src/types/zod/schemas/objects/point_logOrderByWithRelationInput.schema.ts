import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { userOrderByWithRelationInputObjectSchema as userOrderByWithRelationInputObjectSchema } from './userOrderByWithRelationInput.schema';
import { point_logOrderByRelevanceInputObjectSchema as point_logOrderByRelevanceInputObjectSchema } from './point_logOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  change: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  logged_at: SortOrderSchema.optional(),
  user: z.lazy(() => userOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => point_logOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const point_logOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.point_logOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logOrderByWithRelationInput>;
export const point_logOrderByWithRelationInputObjectZodSchema = makeSchema();
