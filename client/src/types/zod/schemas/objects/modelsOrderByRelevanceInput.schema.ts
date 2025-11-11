import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ModelsOrderByRelevanceFieldEnumSchema as modelsOrderByRelevanceFieldEnumSchema } from '../enums/ModelsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([modelsOrderByRelevanceFieldEnumSchema, modelsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const modelsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.modelsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsOrderByRelevanceInput>;
export const modelsOrderByRelevanceInputObjectZodSchema = makeSchema();
