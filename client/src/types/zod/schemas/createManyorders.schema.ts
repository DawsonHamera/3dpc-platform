import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersCreateManyInputObjectSchema as ordersCreateManyInputObjectSchema } from './objects/ordersCreateManyInput.schema';

export const ordersCreateManySchema: z.ZodType<Prisma.ordersCreateManyArgs> = z.object({ data: z.union([ ordersCreateManyInputObjectSchema, z.array(ordersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ordersCreateManyArgs>;

export const ordersCreateManyZodSchema = z.object({ data: z.union([ ordersCreateManyInputObjectSchema, z.array(ordersCreateManyInputObjectSchema) ]),  }).strict();