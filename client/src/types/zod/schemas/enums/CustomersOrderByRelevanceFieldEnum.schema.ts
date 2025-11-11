import * as z from 'zod';

export const CustomersOrderByRelevanceFieldEnumSchema = z.enum(['first_name', 'last_name', 'email_address', 'ip_address', 'preferred_shipping_address', 'preferred_shipping_method'])

export type CustomersOrderByRelevanceFieldEnum = z.infer<typeof CustomersOrderByRelevanceFieldEnumSchema>;