import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './objects/ordersWhereInput.schema';

export const ordersDeleteManySchema: z.ZodType<Prisma.ordersDeleteManyArgs> = z.object({ where: ordersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ordersDeleteManyArgs>;

export const ordersDeleteManyZodSchema = z.object({ where: ordersWhereInputObjectSchema.optional() }).strict();