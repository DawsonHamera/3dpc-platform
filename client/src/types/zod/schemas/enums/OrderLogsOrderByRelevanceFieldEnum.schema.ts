import * as z from 'zod';

export const OrderLogsOrderByRelevanceFieldEnumSchema = z.enum(['log_message', 'log_details'])

export type OrderLogsOrderByRelevanceFieldEnum = z.infer<typeof OrderLogsOrderByRelevanceFieldEnumSchema>;