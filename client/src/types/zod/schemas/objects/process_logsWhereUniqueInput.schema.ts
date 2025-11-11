import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const process_logsWhereUniqueInputObjectSchema: z.ZodType<Prisma.process_logsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsWhereUniqueInput>;
export const process_logsWhereUniqueInputObjectZodSchema = makeSchema();
