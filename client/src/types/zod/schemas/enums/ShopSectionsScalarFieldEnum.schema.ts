import * as z from 'zod';

export const ShopSectionsScalarFieldEnumSchema = z.enum(['id', 'name', 'label', 'order_index'])

export type ShopSectionsScalarFieldEnum = z.infer<typeof ShopSectionsScalarFieldEnumSchema>;