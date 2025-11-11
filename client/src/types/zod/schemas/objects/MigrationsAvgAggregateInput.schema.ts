import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  time: z.literal(true).optional(),
  batch: z.literal(true).optional()
}).strict();
export const MigrationsAvgAggregateInputObjectSchema: z.ZodType<Prisma.MigrationsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MigrationsAvgAggregateInputType>;
export const MigrationsAvgAggregateInputObjectZodSchema = makeSchema();
