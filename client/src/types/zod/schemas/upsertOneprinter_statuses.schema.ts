import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printer_statusesSelectObjectSchema as printer_statusesSelectObjectSchema } from './objects/printer_statusesSelect.schema';
import { printer_statusesIncludeObjectSchema as printer_statusesIncludeObjectSchema } from './objects/printer_statusesInclude.schema';
import { printer_statusesWhereUniqueInputObjectSchema as printer_statusesWhereUniqueInputObjectSchema } from './objects/printer_statusesWhereUniqueInput.schema';
import { printer_statusesCreateInputObjectSchema as printer_statusesCreateInputObjectSchema } from './objects/printer_statusesCreateInput.schema';
import { printer_statusesUncheckedCreateInputObjectSchema as printer_statusesUncheckedCreateInputObjectSchema } from './objects/printer_statusesUncheckedCreateInput.schema';
import { printer_statusesUpdateInputObjectSchema as printer_statusesUpdateInputObjectSchema } from './objects/printer_statusesUpdateInput.schema';
import { printer_statusesUncheckedUpdateInputObjectSchema as printer_statusesUncheckedUpdateInputObjectSchema } from './objects/printer_statusesUncheckedUpdateInput.schema';

export const printer_statusesUpsertOneSchema: z.ZodType<Prisma.printer_statusesUpsertArgs> = z.object({ select: printer_statusesSelectObjectSchema.optional(), include: printer_statusesIncludeObjectSchema.optional(), where: printer_statusesWhereUniqueInputObjectSchema, create: z.union([ printer_statusesCreateInputObjectSchema, printer_statusesUncheckedCreateInputObjectSchema ]), update: z.union([ printer_statusesUpdateInputObjectSchema, printer_statusesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.printer_statusesUpsertArgs>;

export const printer_statusesUpsertOneZodSchema = z.object({ select: printer_statusesSelectObjectSchema.optional(), include: printer_statusesIncludeObjectSchema.optional(), where: printer_statusesWhereUniqueInputObjectSchema, create: z.union([ printer_statusesCreateInputObjectSchema, printer_statusesUncheckedCreateInputObjectSchema ]), update: z.union([ printer_statusesUpdateInputObjectSchema, printer_statusesUncheckedUpdateInputObjectSchema ]) }).strict();