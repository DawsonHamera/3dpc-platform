import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printer_statusesWhereInputObjectSchema as printer_statusesWhereInputObjectSchema } from './objects/printer_statusesWhereInput.schema';

export const printer_statusesDeleteManySchema: z.ZodType<Prisma.printer_statusesDeleteManyArgs> = z.object({ where: printer_statusesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.printer_statusesDeleteManyArgs>;

export const printer_statusesDeleteManyZodSchema = z.object({ where: printer_statusesWhereInputObjectSchema.optional() }).strict();