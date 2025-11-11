import * as z from 'zod';

export const ShopSectionsOrderByRelevanceFieldEnumSchema = z.enum(['name', 'label'])

export type ShopSectionsOrderByRelevanceFieldEnum = z.infer<typeof ShopSectionsOrderByRelevanceFieldEnumSchema>;