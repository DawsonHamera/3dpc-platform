import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const activity_logsWhereUniqueInputObjectSchema: z.ZodType<Prisma.activity_logsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsWhereUniqueInput>;
export const activity_logsWhereUniqueInputObjectZodSchema = makeSchema();
