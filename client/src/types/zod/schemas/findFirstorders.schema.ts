import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ordersIncludeObjectSchema as ordersIncludeObjectSchema } from './objects/ordersInclude.schema';
import { ordersOrderByWithRelationInputObjectSchema as ordersOrderByWithRelationInputObjectSchema } from './objects/ordersOrderByWithRelationInput.schema';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './objects/ordersWhereInput.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './objects/ordersWhereUniqueInput.schema';
import { OrdersScalarFieldEnumSchema } from './enums/OrdersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ordersFindFirstSelectSchema: z.ZodType<Prisma.ordersSelect> = z.object({
    id: z.boolean().optional(),
    customer_id: z.boolean().optional(),
    order_date: z.boolean().optional(),
    requested_by_date: z.boolean().optional(),
    order_status: z.boolean().optional(),
    payment_status: z.boolean().optional(),
    shipping_method: z.boolean().optional(),
    shipping_address: z.boolean().optional(),
    total_price: z.boolean().optional(),
    order_items: z.boolean().optional(),
    order_logs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ordersSelect>;

export const ordersFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    customer_id: z.boolean().optional(),
    order_date: z.boolean().optional(),
    requested_by_date: z.boolean().optional(),
    order_status: z.boolean().optional(),
    payment_status: z.boolean().optional(),
    shipping_method: z.boolean().optional(),
    shipping_address: z.boolean().optional(),
    total_price: z.boolean().optional(),
    order_items: z.boolean().optional(),
    order_logs: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ordersFindFirstSchema: z.ZodType<Prisma.ordersFindFirstArgs> = z.object({ select: ordersFindFirstSelectSchema.optional(), include: z.lazy(() => ordersIncludeObjectSchema.optional()), orderBy: z.union([ordersOrderByWithRelationInputObjectSchema, ordersOrderByWithRelationInputObjectSchema.array()]).optional(), where: ordersWhereInputObjectSchema.optional(), cursor: ordersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrdersScalarFieldEnumSchema, OrdersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ordersFindFirstArgs>;

export const ordersFindFirstZodSchema = z.object({ select: ordersFindFirstSelectSchema.optional(), include: z.lazy(() => ordersIncludeObjectSchema.optional()), orderBy: z.union([ordersOrderByWithRelationInputObjectSchema, ordersOrderByWithRelationInputObjectSchema.array()]).optional(), where: ordersWhereInputObjectSchema.optional(), cursor: ordersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrdersScalarFieldEnumSchema, OrdersScalarFieldEnumSchema.array()]).optional() }).strict();