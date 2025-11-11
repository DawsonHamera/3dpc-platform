import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  version: z.string().max(255),
  class: z.string().max(255),
  group: z.string().max(255),
  namespace: z.string().max(255),
  time: z.number().int(),
  batch: z.number().int()
}).strict();
export const migrationsCreateManyInputObjectSchema: z.ZodType<Prisma.migrationsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.migrationsCreateManyInput>;
export const migrationsCreateManyInputObjectZodSchema = makeSchema();
