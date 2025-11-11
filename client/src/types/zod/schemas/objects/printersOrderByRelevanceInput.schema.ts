import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrintersOrderByRelevanceFieldEnumSchema as printersOrderByRelevanceFieldEnumSchema } from '../enums/PrintersOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([printersOrderByRelevanceFieldEnumSchema, printersOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const printersOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.printersOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.printersOrderByRelevanceInput>;
export const printersOrderByRelevanceInputObjectZodSchema = makeSchema();
