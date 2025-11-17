import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FileOrderByRelevanceFieldEnumSchema as fileOrderByRelevanceFieldEnumSchema } from '../enums/FileOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([fileOrderByRelevanceFieldEnumSchema, fileOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const fileOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.fileOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.fileOrderByRelevanceInput>;
export const fileOrderByRelevanceInputObjectZodSchema = makeSchema();
