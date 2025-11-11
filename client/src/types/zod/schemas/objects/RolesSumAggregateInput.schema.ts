import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const RolesSumAggregateInputObjectSchema: z.ZodType<Prisma.RolesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RolesSumAggregateInputType>;
export const RolesSumAggregateInputObjectZodSchema = makeSchema();
