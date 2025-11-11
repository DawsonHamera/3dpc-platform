import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrdersOrderByRelevanceFieldEnumSchema as ordersOrderByRelevanceFieldEnumSchema } from '../enums/OrdersOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([ordersOrderByRelevanceFieldEnumSchema, ordersOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const ordersOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.ordersOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersOrderByRelevanceInput>;
export const ordersOrderByRelevanceInputObjectZodSchema = makeSchema();
