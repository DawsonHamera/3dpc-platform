import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  printers: z.boolean().optional()
}).strict();
export const MaterialsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.MaterialsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.MaterialsCountOutputTypeSelect>;
export const MaterialsCountOutputTypeSelectObjectZodSchema = makeSchema();
