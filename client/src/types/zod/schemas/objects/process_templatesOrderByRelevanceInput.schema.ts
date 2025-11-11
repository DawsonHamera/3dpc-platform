import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProcessTemplatesOrderByRelevanceFieldEnumSchema as process_templatesOrderByRelevanceFieldEnumSchema } from '../enums/ProcessTemplatesOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([process_templatesOrderByRelevanceFieldEnumSchema, process_templatesOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const process_templatesOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.process_templatesOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesOrderByRelevanceInput>;
export const process_templatesOrderByRelevanceInputObjectZodSchema = makeSchema();
