import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersSelectObjectSchema as ordersSelectObjectSchema } from './objects/ordersSelect.schema';
import { ordersIncludeObjectSchema as ordersIncludeObjectSchema } from './objects/ordersInclude.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './objects/ordersWhereUniqueInput.schema';

export const ordersFindUniqueSchema: z.ZodType<Prisma.ordersFindUniqueArgs> = z.object({ select: ordersSelectObjectSchema.optional(), include: ordersIncludeObjectSchema.optional(), where: ordersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ordersFindUniqueArgs>;

export const ordersFindUniqueZodSchema = z.object({ select: ordersSelectObjectSchema.optional(), include: ordersIncludeObjectSchema.optional(), where: ordersWhereUniqueInputObjectSchema }).strict();