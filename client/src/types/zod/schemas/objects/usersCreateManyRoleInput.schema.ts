import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  email: z.string().max(255),
  password_hash: z.string().max(255),
  grade_id: z.number().int().optional().nullable(),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();
export const usersCreateManyRoleInputObjectSchema: z.ZodType<Prisma.usersCreateManyRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateManyRoleInput>;
export const usersCreateManyRoleInputObjectZodSchema = makeSchema();
