import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string().max(255).optional()
}).strict();
export const usersWhereUniqueInputObjectSchema: z.ZodType<Prisma.usersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.usersWhereUniqueInput>;
export const usersWhereUniqueInputObjectZodSchema = makeSchema();
