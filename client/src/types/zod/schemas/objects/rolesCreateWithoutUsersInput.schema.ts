import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const rolesCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.rolesCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesCreateWithoutUsersInput>;
export const rolesCreateWithoutUsersInputObjectZodSchema = makeSchema();
