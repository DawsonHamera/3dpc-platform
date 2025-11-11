import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  products: z.boolean().optional(),
  tasks: z.boolean().optional()
}).strict();
export const ModelsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ModelsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ModelsCountOutputTypeSelect>;
export const ModelsCountOutputTypeSelectObjectZodSchema = makeSchema();
