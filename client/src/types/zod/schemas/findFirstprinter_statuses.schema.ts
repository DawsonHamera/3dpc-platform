import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printer_statusesIncludeObjectSchema as printer_statusesIncludeObjectSchema } from './objects/printer_statusesInclude.schema';
import { printer_statusesOrderByWithRelationInputObjectSchema as printer_statusesOrderByWithRelationInputObjectSchema } from './objects/printer_statusesOrderByWithRelationInput.schema';
import { printer_statusesWhereInputObjectSchema as printer_statusesWhereInputObjectSchema } from './objects/printer_statusesWhereInput.schema';
import { printer_statusesWhereUniqueInputObjectSchema as printer_statusesWhereUniqueInputObjectSchema } from './objects/printer_statusesWhereUniqueInput.schema';
import { PrinterStatusesScalarFieldEnumSchema } from './enums/PrinterStatusesScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const printer_statusesFindFirstSelectSchema: z.ZodType<Prisma.printer_statusesSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    printers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.printer_statusesSelect>;

export const printer_statusesFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    printers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const printer_statusesFindFirstSchema: z.ZodType<Prisma.printer_statusesFindFirstArgs> = z.object({ select: printer_statusesFindFirstSelectSchema.optional(), include: z.lazy(() => printer_statusesIncludeObjectSchema.optional()), orderBy: z.union([printer_statusesOrderByWithRelationInputObjectSchema, printer_statusesOrderByWithRelationInputObjectSchema.array()]).optional(), where: printer_statusesWhereInputObjectSchema.optional(), cursor: printer_statusesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PrinterStatusesScalarFieldEnumSchema, PrinterStatusesScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.printer_statusesFindFirstArgs>;

export const printer_statusesFindFirstZodSchema = z.object({ select: printer_statusesFindFirstSelectSchema.optional(), include: z.lazy(() => printer_statusesIncludeObjectSchema.optional()), orderBy: z.union([printer_statusesOrderByWithRelationInputObjectSchema, printer_statusesOrderByWithRelationInputObjectSchema.array()]).optional(), where: printer_statusesWhereInputObjectSchema.optional(), cursor: printer_statusesWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PrinterStatusesScalarFieldEnumSchema, PrinterStatusesScalarFieldEnumSchema.array()]).optional() }).strict();