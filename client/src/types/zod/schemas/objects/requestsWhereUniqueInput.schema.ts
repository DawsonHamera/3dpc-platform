import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const requestsWhereUniqueInputObjectSchema: z.ZodType<Prisma.requestsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsWhereUniqueInput>;
export const requestsWhereUniqueInputObjectZodSchema = makeSchema();
