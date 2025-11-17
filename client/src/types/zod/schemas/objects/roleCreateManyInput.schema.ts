import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const roleCreateManyInputObjectSchema: z.ZodType<Prisma.roleCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.roleCreateManyInput>;
export const roleCreateManyInputObjectZodSchema = makeSchema();
