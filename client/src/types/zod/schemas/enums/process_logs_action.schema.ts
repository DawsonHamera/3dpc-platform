import * as z from 'zod';

export const process_logs_actionSchema = z.enum(['process_started', 'process_completed', 'process_failed', 'process_paused', 'process_resumed', 'process_cancelled', 'step_started', 'step_completed', 'step_failed', 'step_assigned', 'step_unassigned'])

export type process_logs_action = z.infer<typeof process_logs_actionSchema>;