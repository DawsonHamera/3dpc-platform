import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityLogOrderByRelevanceFieldEnumSchema as activity_logOrderByRelevanceFieldEnumSchema } from '../enums/ActivityLogOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([activity_logOrderByRelevanceFieldEnumSchema, activity_logOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const activity_logOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.activity_logOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logOrderByRelevanceInput>;
export const activity_logOrderByRelevanceInputObjectZodSchema = makeSchema();
