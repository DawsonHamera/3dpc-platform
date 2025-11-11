import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ActivityLogsOrderByRelevanceFieldEnumSchema as activity_logsOrderByRelevanceFieldEnumSchema } from '../enums/ActivityLogsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([activity_logsOrderByRelevanceFieldEnumSchema, activity_logsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const activity_logsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.activity_logsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsOrderByRelevanceInput>;
export const activity_logsOrderByRelevanceInputObjectZodSchema = makeSchema();
