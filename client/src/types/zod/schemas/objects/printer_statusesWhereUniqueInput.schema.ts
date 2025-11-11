import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const printer_statusesWhereUniqueInputObjectSchema: z.ZodType<Prisma.printer_statusesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesWhereUniqueInput>;
export const printer_statusesWhereUniqueInputObjectZodSchema = makeSchema();
