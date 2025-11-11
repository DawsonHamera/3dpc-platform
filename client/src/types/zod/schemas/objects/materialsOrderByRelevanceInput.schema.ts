import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MaterialsOrderByRelevanceFieldEnumSchema as materialsOrderByRelevanceFieldEnumSchema } from '../enums/MaterialsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([materialsOrderByRelevanceFieldEnumSchema, materialsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const materialsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.materialsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsOrderByRelevanceInput>;
export const materialsOrderByRelevanceInputObjectZodSchema = makeSchema();
