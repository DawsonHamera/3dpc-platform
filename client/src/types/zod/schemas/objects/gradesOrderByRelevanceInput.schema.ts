import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GradesOrderByRelevanceFieldEnumSchema as gradesOrderByRelevanceFieldEnumSchema } from '../enums/GradesOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([gradesOrderByRelevanceFieldEnumSchema, gradesOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const gradesOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.gradesOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesOrderByRelevanceInput>;
export const gradesOrderByRelevanceInputObjectZodSchema = makeSchema();
