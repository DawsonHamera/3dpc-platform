import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsWhereInputObjectSchema as order_logsWhereInputObjectSchema } from './order_logsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => order_logsWhereInputObjectSchema).optional(),
  some: z.lazy(() => order_logsWhereInputObjectSchema).optional(),
  none: z.lazy(() => order_logsWhereInputObjectSchema).optional()
}).strict();
export const Order_logsListRelationFilterObjectSchema: z.ZodType<Prisma.Order_logsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Order_logsListRelationFilter>;
export const Order_logsListRelationFilterObjectZodSchema = makeSchema();
