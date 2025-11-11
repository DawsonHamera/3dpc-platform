import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const task_statusesWhereUniqueInputObjectSchema: z.ZodType<Prisma.task_statusesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesWhereUniqueInput>;
export const task_statusesWhereUniqueInputObjectZodSchema = makeSchema();
