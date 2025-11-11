import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersUpdateManyMutationInputObjectSchema as ordersUpdateManyMutationInputObjectSchema } from './objects/ordersUpdateManyMutationInput.schema';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './objects/ordersWhereInput.schema';

export const ordersUpdateManySchema: z.ZodType<Prisma.ordersUpdateManyArgs> = z.object({ data: ordersUpdateManyMutationInputObjectSchema, where: ordersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ordersUpdateManyArgs>;

export const ordersUpdateManyZodSchema = z.object({ data: ordersUpdateManyMutationInputObjectSchema, where: ordersWhereInputObjectSchema.optional() }).strict();