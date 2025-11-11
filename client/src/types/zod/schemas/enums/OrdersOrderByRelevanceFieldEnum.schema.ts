import * as z from 'zod';

export const OrdersOrderByRelevanceFieldEnumSchema = z.enum(['order_status', 'payment_status', 'shipping_method', 'shipping_address'])

export type OrdersOrderByRelevanceFieldEnum = z.infer<typeof OrdersOrderByRelevanceFieldEnumSchema>;