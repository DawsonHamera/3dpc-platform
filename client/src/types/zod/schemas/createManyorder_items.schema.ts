import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_itemsCreateManyInputObjectSchema as order_itemsCreateManyInputObjectSchema } from './objects/order_itemsCreateManyInput.schema';

export const order_itemsCreateManySchema: z.ZodType<Prisma.order_itemsCreateManyArgs> = z.object({ data: z.union([ order_itemsCreateManyInputObjectSchema, z.array(order_itemsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.order_itemsCreateManyArgs>;

export const order_itemsCreateManyZodSchema = z.object({ data: z.union([ order_itemsCreateManyInputObjectSchema, z.array(order_itemsCreateManyInputObjectSchema) ]),  }).strict();