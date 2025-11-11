import * as z from 'zod';

export const OrdersScalarFieldEnumSchema = z.enum(['id', 'customer_id', 'order_date', 'requested_by_date', 'order_status', 'payment_status', 'shipping_method', 'shipping_address', 'total_price'])

export type OrdersScalarFieldEnum = z.infer<typeof OrdersScalarFieldEnumSchema>;