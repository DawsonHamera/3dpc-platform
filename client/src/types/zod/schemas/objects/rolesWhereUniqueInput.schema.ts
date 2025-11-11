import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const rolesWhereUniqueInputObjectSchema: z.ZodType<Prisma.rolesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesWhereUniqueInput>;
export const rolesWhereUniqueInputObjectZodSchema = makeSchema();
