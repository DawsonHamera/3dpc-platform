import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  email: z.string().max(255).optional()
}).strict();
export const userWhereUniqueInputObjectSchema: z.ZodType<Prisma.userWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.userWhereUniqueInput>;
export const userWhereUniqueInputObjectZodSchema = makeSchema();
