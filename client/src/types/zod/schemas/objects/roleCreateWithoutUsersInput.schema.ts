import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const roleCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.roleCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.roleCreateWithoutUsersInput>;
export const roleCreateWithoutUsersInputObjectZodSchema = makeSchema();
