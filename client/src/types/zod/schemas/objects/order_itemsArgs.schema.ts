import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsSelectObjectSchema as order_itemsSelectObjectSchema } from './order_itemsSelect.schema';
import { order_itemsIncludeObjectSchema as order_itemsIncludeObjectSchema } from './order_itemsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => order_itemsSelectObjectSchema).optional(),
  include: z.lazy(() => order_itemsIncludeObjectSchema).optional()
}).strict();
export const order_itemsArgsObjectSchema = makeSchema();
export const order_itemsArgsObjectZodSchema = makeSchema();
