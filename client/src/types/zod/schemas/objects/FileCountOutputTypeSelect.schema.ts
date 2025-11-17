import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  events: z.boolean().optional()
}).strict();
export const FileCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.FileCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.FileCountOutputTypeSelect>;
export const FileCountOutputTypeSelectObjectZodSchema = makeSchema();
