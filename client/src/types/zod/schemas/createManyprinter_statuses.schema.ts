import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printer_statusesCreateManyInputObjectSchema as printer_statusesCreateManyInputObjectSchema } from './objects/printer_statusesCreateManyInput.schema';

export const printer_statusesCreateManySchema: z.ZodType<Prisma.printer_statusesCreateManyArgs> = z.object({ data: z.union([ printer_statusesCreateManyInputObjectSchema, z.array(printer_statusesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.printer_statusesCreateManyArgs>;

export const printer_statusesCreateManyZodSchema = z.object({ data: z.union([ printer_statusesCreateManyInputObjectSchema, z.array(printer_statusesCreateManyInputObjectSchema) ]),  }).strict();