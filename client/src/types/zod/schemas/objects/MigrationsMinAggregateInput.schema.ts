import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  version: z.literal(true).optional(),
  class: z.literal(true).optional(),
  group: z.literal(true).optional(),
  namespace: z.literal(true).optional(),
  time: z.literal(true).optional(),
  batch: z.literal(true).optional()
}).strict();
export const MigrationsMinAggregateInputObjectSchema: z.ZodType<Prisma.MigrationsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MigrationsMinAggregateInputType>;
export const MigrationsMinAggregateInputObjectZodSchema = makeSchema();
