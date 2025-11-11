import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ShopSectionsOrderByRelevanceFieldEnumSchema as shop_sectionsOrderByRelevanceFieldEnumSchema } from '../enums/ShopSectionsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([shop_sectionsOrderByRelevanceFieldEnumSchema, shop_sectionsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const shop_sectionsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.shop_sectionsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsOrderByRelevanceInput>;
export const shop_sectionsOrderByRelevanceInputObjectZodSchema = makeSchema();
