import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductsOrderByRelevanceFieldEnumSchema as productsOrderByRelevanceFieldEnumSchema } from '../enums/ProductsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([productsOrderByRelevanceFieldEnumSchema, productsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const productsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.productsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.productsOrderByRelevanceInput>;
export const productsOrderByRelevanceInputObjectZodSchema = makeSchema();
