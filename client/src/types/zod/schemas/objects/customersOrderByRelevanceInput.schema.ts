import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CustomersOrderByRelevanceFieldEnumSchema as customersOrderByRelevanceFieldEnumSchema } from '../enums/CustomersOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([customersOrderByRelevanceFieldEnumSchema, customersOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const customersOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.customersOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.customersOrderByRelevanceInput>;
export const customersOrderByRelevanceInputObjectZodSchema = makeSchema();
