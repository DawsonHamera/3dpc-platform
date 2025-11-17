import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const roleWhereUniqueInputObjectSchema: z.ZodType<Prisma.roleWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.roleWhereUniqueInput>;
export const roleWhereUniqueInputObjectZodSchema = makeSchema();
