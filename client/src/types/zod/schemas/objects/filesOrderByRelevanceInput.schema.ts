import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FilesOrderByRelevanceFieldEnumSchema as filesOrderByRelevanceFieldEnumSchema } from '../enums/FilesOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([filesOrderByRelevanceFieldEnumSchema, filesOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const filesOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.filesOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.filesOrderByRelevanceInput>;
export const filesOrderByRelevanceInputObjectZodSchema = makeSchema();
