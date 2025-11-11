import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsCreateManyOrdersInputObjectSchema as order_logsCreateManyOrdersInputObjectSchema } from './order_logsCreateManyOrdersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => order_logsCreateManyOrdersInputObjectSchema), z.lazy(() => order_logsCreateManyOrdersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const order_logsCreateManyOrdersInputEnvelopeObjectSchema: z.ZodType<Prisma.order_logsCreateManyOrdersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.order_logsCreateManyOrdersInputEnvelope>;
export const order_logsCreateManyOrdersInputEnvelopeObjectZodSchema = makeSchema();
