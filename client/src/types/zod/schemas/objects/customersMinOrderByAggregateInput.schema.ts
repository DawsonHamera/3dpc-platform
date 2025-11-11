import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  first_name: SortOrderSchema.optional(),
  last_name: SortOrderSchema.optional(),
  email_address: SortOrderSchema.optional(),
  ip_address: SortOrderSchema.optional(),
  session_id: SortOrderSchema.optional(),
  first_seen: SortOrderSchema.optional(),
  last_seen: SortOrderSchema.optional(),
  preferred_shipping_address: SortOrderSchema.optional(),
  preferred_shipping_method: SortOrderSchema.optional()
}).strict();
export const customersMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.customersMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.customersMinOrderByAggregateInput>;
export const customersMinOrderByAggregateInputObjectZodSchema = makeSchema();
