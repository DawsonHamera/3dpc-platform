import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StepContentOrderByRelevanceFieldEnumSchema as step_contentOrderByRelevanceFieldEnumSchema } from '../enums/StepContentOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([step_contentOrderByRelevanceFieldEnumSchema, step_contentOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const step_contentOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.step_contentOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentOrderByRelevanceInput>;
export const step_contentOrderByRelevanceInputObjectZodSchema = makeSchema();
