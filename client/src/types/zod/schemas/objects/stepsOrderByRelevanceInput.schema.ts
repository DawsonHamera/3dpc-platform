import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StepsOrderByRelevanceFieldEnumSchema as stepsOrderByRelevanceFieldEnumSchema } from '../enums/StepsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([stepsOrderByRelevanceFieldEnumSchema, stepsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const stepsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.stepsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsOrderByRelevanceInput>;
export const stepsOrderByRelevanceInputObjectZodSchema = makeSchema();
