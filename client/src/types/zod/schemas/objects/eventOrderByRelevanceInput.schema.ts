import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventOrderByRelevanceFieldEnumSchema as eventOrderByRelevanceFieldEnumSchema } from '../enums/EventOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([eventOrderByRelevanceFieldEnumSchema, eventOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const eventOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.eventOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.eventOrderByRelevanceInput>;
export const eventOrderByRelevanceInputObjectZodSchema = makeSchema();
