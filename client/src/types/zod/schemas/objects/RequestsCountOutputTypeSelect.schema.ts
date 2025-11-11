import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tasks: z.boolean().optional()
}).strict();
export const RequestsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.RequestsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCountOutputTypeSelect>;
export const RequestsCountOutputTypeSelectObjectZodSchema = makeSchema();
