import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsCreateManyOrdersInputObjectSchema as order_itemsCreateManyOrdersInputObjectSchema } from './order_itemsCreateManyOrdersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => order_itemsCreateManyOrdersInputObjectSchema), z.lazy(() => order_itemsCreateManyOrdersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const order_itemsCreateManyOrdersInputEnvelopeObjectSchema: z.ZodType<Prisma.order_itemsCreateManyOrdersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsCreateManyOrdersInputEnvelope>;
export const order_itemsCreateManyOrdersInputEnvelopeObjectZodSchema = makeSchema();
