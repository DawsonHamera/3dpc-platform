import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestsOrderByRelevanceFieldEnumSchema as requestsOrderByRelevanceFieldEnumSchema } from '../enums/RequestsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([requestsOrderByRelevanceFieldEnumSchema, requestsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const requestsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.requestsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsOrderByRelevanceInput>;
export const requestsOrderByRelevanceInputObjectZodSchema = makeSchema();
