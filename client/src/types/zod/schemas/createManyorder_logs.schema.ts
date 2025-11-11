import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_logsCreateManyInputObjectSchema as order_logsCreateManyInputObjectSchema } from './objects/order_logsCreateManyInput.schema';

export const order_logsCreateManySchema: z.ZodType<Prisma.order_logsCreateManyArgs> = z.object({ data: z.union([ order_logsCreateManyInputObjectSchema, z.array(order_logsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.order_logsCreateManyArgs>;

export const order_logsCreateManyZodSchema = z.object({ data: z.union([ order_logsCreateManyInputObjectSchema, z.array(order_logsCreateManyInputObjectSchema) ]),  }).strict();