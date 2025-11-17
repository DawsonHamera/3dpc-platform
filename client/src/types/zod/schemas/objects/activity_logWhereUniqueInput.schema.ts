import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const activity_logWhereUniqueInputObjectSchema: z.ZodType<Prisma.activity_logWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logWhereUniqueInput>;
export const activity_logWhereUniqueInputObjectZodSchema = makeSchema();
