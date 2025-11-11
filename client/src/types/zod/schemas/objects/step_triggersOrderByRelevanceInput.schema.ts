import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StepTriggersOrderByRelevanceFieldEnumSchema as step_triggersOrderByRelevanceFieldEnumSchema } from '../enums/StepTriggersOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([step_triggersOrderByRelevanceFieldEnumSchema, step_triggersOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const step_triggersOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.step_triggersOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersOrderByRelevanceInput>;
export const step_triggersOrderByRelevanceInputObjectZodSchema = makeSchema();
