import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductVariantsOrderByRelevanceFieldEnumSchema as product_variantsOrderByRelevanceFieldEnumSchema } from '../enums/ProductVariantsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([product_variantsOrderByRelevanceFieldEnumSchema, product_variantsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const product_variantsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.product_variantsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsOrderByRelevanceInput>;
export const product_variantsOrderByRelevanceInputObjectZodSchema = makeSchema();
