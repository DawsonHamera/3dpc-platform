import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OrderLogsOrderByRelevanceFieldEnumSchema as order_logsOrderByRelevanceFieldEnumSchema } from '../enums/OrderLogsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([order_logsOrderByRelevanceFieldEnumSchema, order_logsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const order_logsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.order_logsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsOrderByRelevanceInput>;
export const order_logsOrderByRelevanceInputObjectZodSchema = makeSchema();
