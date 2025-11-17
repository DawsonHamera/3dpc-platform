import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  email: z.string().max(255),
  password_hash: z.string().max(255),
  role_id: z.number().int().optional(),
  grade: gradeSchema.optional(),
  score: z.number().int().optional(),
  last_active: z.coerce.date().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();
export const userCreateManyInputObjectSchema: z.ZodType<Prisma.userCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateManyInput>;
export const userCreateManyInputObjectZodSchema = makeSchema();
