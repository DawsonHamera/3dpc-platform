import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const step_contentWhereUniqueInputObjectSchema: z.ZodType<Prisma.step_contentWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentWhereUniqueInput>;
export const step_contentWhereUniqueInputObjectZodSchema = makeSchema();
