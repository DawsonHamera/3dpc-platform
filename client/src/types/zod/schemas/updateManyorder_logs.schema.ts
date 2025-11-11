import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_logsUpdateManyMutationInputObjectSchema as order_logsUpdateManyMutationInputObjectSchema } from './objects/order_logsUpdateManyMutationInput.schema';
import { order_logsWhereInputObjectSchema as order_logsWhereInputObjectSchema } from './objects/order_logsWhereInput.schema';

export const order_logsUpdateManySchema: z.ZodType<Prisma.order_logsUpdateManyArgs> = z.object({ data: order_logsUpdateManyMutationInputObjectSchema, where: order_logsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.order_logsUpdateManyArgs>;

export const order_logsUpdateManyZodSchema = z.object({ data: order_logsUpdateManyMutationInputObjectSchema, where: order_logsWhereInputObjectSchema.optional() }).strict();