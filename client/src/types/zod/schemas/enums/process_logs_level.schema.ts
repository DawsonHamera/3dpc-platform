import * as z from 'zod';

export const process_logs_levelSchema = z.enum(['debug', 'info', 'warn', 'error'])

export type process_logs_level = z.infer<typeof process_logs_levelSchema>;