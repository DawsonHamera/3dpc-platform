import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printer_statusesSelectObjectSchema as printer_statusesSelectObjectSchema } from './objects/printer_statusesSelect.schema';
import { printer_statusesIncludeObjectSchema as printer_statusesIncludeObjectSchema } from './objects/printer_statusesInclude.schema';
import { printer_statusesCreateInputObjectSchema as printer_statusesCreateInputObjectSchema } from './objects/printer_statusesCreateInput.schema';
import { printer_statusesUncheckedCreateInputObjectSchema as printer_statusesUncheckedCreateInputObjectSchema } from './objects/printer_statusesUncheckedCreateInput.schema';

export const printer_statusesCreateOneSchema: z.ZodType<Prisma.printer_statusesCreateArgs> = z.object({ select: printer_statusesSelectObjectSchema.optional(), include: printer_statusesIncludeObjectSchema.optional(), data: z.union([printer_statusesCreateInputObjectSchema, printer_statusesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.printer_statusesCreateArgs>;

export const printer_statusesCreateOneZodSchema = z.object({ select: printer_statusesSelectObjectSchema.optional(), include: printer_statusesIncludeObjectSchema.optional(), data: z.union([printer_statusesCreateInputObjectSchema, printer_statusesUncheckedCreateInputObjectSchema]) }).strict();