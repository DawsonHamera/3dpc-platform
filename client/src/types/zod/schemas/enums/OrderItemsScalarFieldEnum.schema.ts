import * as z from 'zod';

export const OrderItemsScalarFieldEnumSchema = z.enum(['id', 'order_id', 'product_id', 'quantity', 'unit_price', 'status', 'total_price'])

export type OrderItemsScalarFieldEnum = z.infer<typeof OrderItemsScalarFieldEnumSchema>;