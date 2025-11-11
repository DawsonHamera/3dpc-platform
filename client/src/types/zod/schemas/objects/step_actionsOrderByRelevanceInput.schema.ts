import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StepActionsOrderByRelevanceFieldEnumSchema as step_actionsOrderByRelevanceFieldEnumSchema } from '../enums/StepActionsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([step_actionsOrderByRelevanceFieldEnumSchema, step_actionsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const step_actionsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.step_actionsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsOrderByRelevanceInput>;
export const step_actionsOrderByRelevanceInputObjectZodSchema = makeSchema();
