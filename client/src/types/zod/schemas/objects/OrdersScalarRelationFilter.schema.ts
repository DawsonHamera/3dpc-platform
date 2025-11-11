import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './ordersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ordersWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ordersWhereInputObjectSchema).optional()
}).strict();
export const OrdersScalarRelationFilterObjectSchema: z.ZodType<Prisma.OrdersScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OrdersScalarRelationFilter>;
export const OrdersScalarRelationFilterObjectZodSchema = makeSchema();
