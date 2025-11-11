import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tasks: z.boolean().optional()
}).strict();
export const PrintersCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.PrintersCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.PrintersCountOutputTypeSelect>;
export const PrintersCountOutputTypeSelectObjectZodSchema = makeSchema();
