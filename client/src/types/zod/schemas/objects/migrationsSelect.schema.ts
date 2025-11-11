import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  version: z.boolean().optional(),
  class: z.boolean().optional(),
  group: z.boolean().optional(),
  namespace: z.boolean().optional(),
  time: z.boolean().optional(),
  batch: z.boolean().optional()
}).strict();
export const migrationsSelectObjectSchema: z.ZodType<Prisma.migrationsSelect> = makeSchema() as unknown as z.ZodType<Prisma.migrationsSelect>;
export const migrationsSelectObjectZodSchema = makeSchema();
