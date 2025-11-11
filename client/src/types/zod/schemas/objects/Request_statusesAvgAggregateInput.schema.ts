import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Request_statusesAvgAggregateInputObjectSchema: z.ZodType<Prisma.Request_statusesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Request_statusesAvgAggregateInputType>;
export const Request_statusesAvgAggregateInputObjectZodSchema = makeSchema();
