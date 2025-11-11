import * as z from 'zod';
export const stepsFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  title: z.string(),
  description: z.string().optional(),
  is_critical: z.boolean().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
  step_type: z.unknown().optional(),
  is_required: z.boolean().optional(),
  deleted_at: z.date().optional(),
  error_reports: z.array(z.unknown()),
  process_instance_steps: z.array(z.unknown()),
  process_template_steps: z.array(z.unknown()),
  step_actions: z.array(z.unknown()),
  step_content: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});