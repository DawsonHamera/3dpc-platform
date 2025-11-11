import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const step_actionsWhereUniqueInputObjectSchema: z.ZodType<Prisma.step_actionsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsWhereUniqueInput>;
export const step_actionsWhereUniqueInputObjectZodSchema = makeSchema();
