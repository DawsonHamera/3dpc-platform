import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const Request_statusesSumAggregateInputObjectSchema: z.ZodType<Prisma.Request_statusesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Request_statusesSumAggregateInputType>;
export const Request_statusesSumAggregateInputObjectZodSchema = makeSchema();
