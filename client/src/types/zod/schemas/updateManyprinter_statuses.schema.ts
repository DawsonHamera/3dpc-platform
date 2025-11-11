import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printer_statusesUpdateManyMutationInputObjectSchema as printer_statusesUpdateManyMutationInputObjectSchema } from './objects/printer_statusesUpdateManyMutationInput.schema';
import { printer_statusesWhereInputObjectSchema as printer_statusesWhereInputObjectSchema } from './objects/printer_statusesWhereInput.schema';

export const printer_statusesUpdateManySchema: z.ZodType<Prisma.printer_statusesUpdateManyArgs> = z.object({ data: printer_statusesUpdateManyMutationInputObjectSchema, where: printer_statusesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.printer_statusesUpdateManyArgs>;

export const printer_statusesUpdateManyZodSchema = z.object({ data: printer_statusesUpdateManyMutationInputObjectSchema, where: printer_statusesWhereInputObjectSchema.optional() }).strict();