import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const RolesAvgAggregateInputObjectSchema: z.ZodType<Prisma.RolesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RolesAvgAggregateInputType>;
export const RolesAvgAggregateInputObjectZodSchema = makeSchema();
