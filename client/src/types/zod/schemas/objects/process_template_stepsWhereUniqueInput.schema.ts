import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const process_template_stepsWhereUniqueInputObjectSchema: z.ZodType<Prisma.process_template_stepsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsWhereUniqueInput>;
export const process_template_stepsWhereUniqueInputObjectZodSchema = makeSchema();
