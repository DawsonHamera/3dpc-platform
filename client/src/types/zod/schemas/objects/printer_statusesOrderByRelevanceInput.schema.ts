import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrinterStatusesOrderByRelevanceFieldEnumSchema as printer_statusesOrderByRelevanceFieldEnumSchema } from '../enums/PrinterStatusesOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([printer_statusesOrderByRelevanceFieldEnumSchema, printer_statusesOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const printer_statusesOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.printer_statusesOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesOrderByRelevanceInput>;
export const printer_statusesOrderByRelevanceInputObjectZodSchema = makeSchema();
