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
export const migrationsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.migrationsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.migrationsUncheckedCreateInput>;
export const migrationsUncheckedCreateInputObjectZodSchema = makeSchema();
