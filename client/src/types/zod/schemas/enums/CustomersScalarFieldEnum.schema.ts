import * as z from 'zod';

export const CustomersScalarFieldEnumSchema = z.enum(['id', 'first_name', 'last_name', 'email_address', 'ip_address', 'session_id', 'first_seen', 'last_seen', 'preferred_shipping_address', 'preferred_shipping_method'])

export type CustomersScalarFieldEnum = z.infer<typeof CustomersScalarFieldEnumSchema>;