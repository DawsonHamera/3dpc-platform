import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { userOrderByWithRelationInputObjectSchema as userOrderByWithRelationInputObjectSchema } from './userOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  amount: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_by: z.lazy(() => userOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const recycling_logOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.recycling_logOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logOrderByWithRelationInput>;
export const recycling_logOrderByWithRelationInputObjectZodSchema = makeSchema();
