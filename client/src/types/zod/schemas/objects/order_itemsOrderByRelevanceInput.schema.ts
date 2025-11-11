import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderItemsOrderByRelevanceFieldEnumSchema as order_itemsOrderByRelevanceFieldEnumSchema } from '../enums/OrderItemsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([order_itemsOrderByRelevanceFieldEnumSchema, order_itemsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const order_itemsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.order_itemsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsOrderByRelevanceInput>;
export const order_itemsOrderByRelevanceInputObjectZodSchema = makeSchema();
