import * as z from 'zod';

export const OrderItemsOrderByRelevanceFieldEnumSchema = z.enum(['status'])

export type OrderItemsOrderByRelevanceFieldEnum = z.infer<typeof OrderItemsOrderByRelevanceFieldEnumSchema>;