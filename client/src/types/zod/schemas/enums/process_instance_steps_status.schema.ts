import * as z from 'zod';

export const process_instance_steps_statusSchema = z.enum(['pending', 'running', 'waiting_user', 'waiting_condition', 'waiting_timer', 'completed', 'skipped', 'failed'])

export type process_instance_steps_status = z.infer<typeof process_instance_steps_statusSchema>;