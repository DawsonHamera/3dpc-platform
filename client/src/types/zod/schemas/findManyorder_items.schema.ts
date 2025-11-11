import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { order_itemsIncludeObjectSchema as order_itemsIncludeObjectSchema } from './objects/order_itemsInclude.schema';
import { order_itemsOrderByWithRelationInputObjectSchema as order_itemsOrderByWithRelationInputObjectSchema } from './objects/order_itemsOrderByWithRelationInput.schema';
import { order_itemsWhereInputObjectSchema as order_itemsWhereInputObjectSchema } from './objects/order_itemsWhereInput.schema';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './objects/order_itemsWhereUniqueInput.schema';
import { OrderItemsScalarFieldEnumSchema } from './enums/OrderItemsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const order_itemsFindManySelectSchema: z.ZodType<Prisma.order_itemsSelect> = z.object({
    id: z.boolean().optional(),
    order_id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    quantity: z.boolean().optional(),
    unit_price: z.boolean().optional(),
    status: z.boolean().optional(),
    total_price: z.boolean().optional(),
    orders: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.order_itemsSelect>;

export const order_itemsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    order_id: z.boolean().optional(),
    product_id: z.boolean().optional(),
    quantity: z.boolean().optional(),
    unit_price: z.boolean().optional(),
    status: z.boolean().optional(),
    total_price: z.boolean().optional(),
    orders: z.boolean().optional()
  }).strict();

export const order_itemsFindManySchema: z.ZodType<Prisma.order_itemsFindManyArgs> = z.object({ select: order_itemsFindManySelectSchema.optional(), include: z.lazy(() => order_itemsIncludeObjectSchema.optional()), orderBy: z.union([order_itemsOrderByWithRelationInputObjectSchema, order_itemsOrderByWithRelationInputObjectSchema.array()]).optional(), where: order_itemsWhereInputObjectSchema.optional(), cursor: order_itemsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderItemsScalarFieldEnumSchema, OrderItemsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.order_itemsFindManyArgs>;

export const order_itemsFindManyZodSchema = z.object({ select: order_itemsFindManySelectSchema.optional(), include: z.lazy(() => order_itemsIncludeObjectSchema.optional()), orderBy: z.union([order_itemsOrderByWithRelationInputObjectSchema, order_itemsOrderByWithRelationInputObjectSchema.array()]).optional(), where: order_itemsWhereInputObjectSchema.optional(), cursor: order_itemsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderItemsScalarFieldEnumSchema, OrderItemsScalarFieldEnumSchema.array()]).optional() }).strict();