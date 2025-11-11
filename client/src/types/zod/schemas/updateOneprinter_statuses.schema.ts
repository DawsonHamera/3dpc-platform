import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printer_statusesSelectObjectSchema as printer_statusesSelectObjectSchema } from './objects/printer_statusesSelect.schema';
import { printer_statusesIncludeObjectSchema as printer_statusesIncludeObjectSchema } from './objects/printer_statusesInclude.schema';
import { printer_statusesUpdateInputObjectSchema as printer_statusesUpdateInputObjectSchema } from './objects/printer_statusesUpdateInput.schema';
import { printer_statusesUncheckedUpdateInputObjectSchema as printer_statusesUncheckedUpdateInputObjectSchema } from './objects/printer_statusesUncheckedUpdateInput.schema';
import { printer_statusesWhereUniqueInputObjectSchema as printer_statusesWhereUniqueInputObjectSchema } from './objects/printer_statusesWhereUniqueInput.schema';

export const printer_statusesUpdateOneSchema: z.ZodType<Prisma.printer_statusesUpdateArgs> = z.object({ select: printer_statusesSelectObjectSchema.optional(), include: printer_statusesIncludeObjectSchema.optional(), data: z.union([printer_statusesUpdateInputObjectSchema, printer_statusesUncheckedUpdateInputObjectSchema]), where: printer_statusesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.printer_statusesUpdateArgs>;

export const printer_statusesUpdateOneZodSchema = z.object({ select: printer_statusesSelectObjectSchema.optional(), include: printer_statusesIncludeObjectSchema.optional(), data: z.union([printer_statusesUpdateInputObjectSchema, printer_statusesUncheckedUpdateInputObjectSchema]), where: printer_statusesWhereUniqueInputObjectSchema }).strict();