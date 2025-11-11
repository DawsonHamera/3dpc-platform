import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ErrorReportsOrderByRelevanceFieldEnumSchema as error_reportsOrderByRelevanceFieldEnumSchema } from '../enums/ErrorReportsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([error_reportsOrderByRelevanceFieldEnumSchema, error_reportsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const error_reportsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.error_reportsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsOrderByRelevanceInput>;
export const error_reportsOrderByRelevanceInputObjectZodSchema = makeSchema();
