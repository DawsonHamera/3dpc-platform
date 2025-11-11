import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const tasksWhereUniqueInputObjectSchema: z.ZodType<Prisma.tasksWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksWhereUniqueInput>;
export const tasksWhereUniqueInputObjectZodSchema = makeSchema();
