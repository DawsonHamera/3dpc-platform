import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsWhereInputObjectSchema as order_itemsWhereInputObjectSchema } from './order_itemsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => order_itemsWhereInputObjectSchema).optional(),
  some: z.lazy(() => order_itemsWhereInputObjectSchema).optional(),
  none: z.lazy(() => order_itemsWhereInputObjectSchema).optional()
}).strict();
export const Order_itemsListRelationFilterObjectSchema: z.ZodType<Prisma.Order_itemsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Order_itemsListRelationFilter>;
export const Order_itemsListRelationFilterObjectZodSchema = makeSchema();
