import * as z from 'zod';

export const OrderLogsScalarFieldEnumSchema = z.enum(['id', 'order_id', 'log_timestamp', 'log_message', 'log_details'])

export type OrderLogsScalarFieldEnum = z.infer<typeof OrderLogsScalarFieldEnumSchema>;