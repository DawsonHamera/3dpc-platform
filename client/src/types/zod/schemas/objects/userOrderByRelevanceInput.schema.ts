import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserOrderByRelevanceFieldEnumSchema as userOrderByRelevanceFieldEnumSchema } from '../enums/UserOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([userOrderByRelevanceFieldEnumSchema, userOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const userOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.userOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.userOrderByRelevanceInput>;
export const userOrderByRelevanceInputObjectZodSchema = makeSchema();
