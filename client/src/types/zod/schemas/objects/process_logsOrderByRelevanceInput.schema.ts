import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProcessLogsOrderByRelevanceFieldEnumSchema as process_logsOrderByRelevanceFieldEnumSchema } from '../enums/ProcessLogsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([process_logsOrderByRelevanceFieldEnumSchema, process_logsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const process_logsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.process_logsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsOrderByRelevanceInput>;
export const process_logsOrderByRelevanceInputObjectZodSchema = makeSchema();
