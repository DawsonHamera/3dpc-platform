import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RequestStatusesOrderByRelevanceFieldEnumSchema as request_statusesOrderByRelevanceFieldEnumSchema } from '../enums/RequestStatusesOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([request_statusesOrderByRelevanceFieldEnumSchema, request_statusesOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const request_statusesOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.request_statusesOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesOrderByRelevanceInput>;
export const request_statusesOrderByRelevanceInputObjectZodSchema = makeSchema();
