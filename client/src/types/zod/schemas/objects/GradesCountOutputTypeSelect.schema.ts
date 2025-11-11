import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  users: z.boolean().optional()
}).strict();
export const GradesCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GradesCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GradesCountOutputTypeSelect>;
export const GradesCountOutputTypeSelectObjectZodSchema = makeSchema();
