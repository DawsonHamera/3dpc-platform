import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { EventsOrderByRelevanceFieldEnumSchema as eventsOrderByRelevanceFieldEnumSchema } from '../enums/EventsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([eventsOrderByRelevanceFieldEnumSchema, eventsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const eventsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.eventsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsOrderByRelevanceInput>;
export const eventsOrderByRelevanceInputObjectZodSchema = makeSchema();
