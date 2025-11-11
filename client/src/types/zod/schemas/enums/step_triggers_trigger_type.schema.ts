import * as z from 'zod';

export const step_triggers_trigger_typeSchema = z.enum(['update_task_status', 'update_printer_status', 'send_notification', 'schedule_timer', 'create_subtask', 'log_event'])

export type step_triggers_trigger_type = z.infer<typeof step_triggers_trigger_typeSchema>;