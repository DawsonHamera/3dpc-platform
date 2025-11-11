import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printer_statusesSelectObjectSchema as printer_statusesSelectObjectSchema } from './objects/printer_statusesSelect.schema';
import { printer_statusesIncludeObjectSchema as printer_statusesIncludeObjectSchema } from './objects/printer_statusesInclude.schema';
import { printer_statusesWhereUniqueInputObjectSchema as printer_statusesWhereUniqueInputObjectSchema } from './objects/printer_statusesWhereUniqueInput.schema';

export const printer_statusesFindUniqueSchema: z.ZodType<Prisma.printer_statusesFindUniqueArgs> = z.object({ select: printer_statusesSelectObjectSchema.optional(), include: printer_statusesIncludeObjectSchema.optional(), where: printer_statusesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.printer_statusesFindUniqueArgs>;

export const printer_statusesFindUniqueZodSchema = z.object({ select: printer_statusesSelectObjectSchema.optional(), include: printer_statusesIncludeObjectSchema.optional(), where: printer_statusesWhereUniqueInputObjectSchema }).strict();