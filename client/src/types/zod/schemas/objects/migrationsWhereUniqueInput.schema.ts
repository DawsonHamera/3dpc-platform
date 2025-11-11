import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const migrationsWhereUniqueInputObjectSchema: z.ZodType<Prisma.migrationsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.migrationsWhereUniqueInput>;
export const migrationsWhereUniqueInputObjectZodSchema = makeSchema();
