import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const step_triggersWhereUniqueInputObjectSchema: z.ZodType<Prisma.step_triggersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersWhereUniqueInput>;
export const step_triggersWhereUniqueInputObjectZodSchema = makeSchema();
