import * as z from 'zod';
export const requestsGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  submitted_by: z.string(),
  email: z.string(),
  comments: z.string(),
  status_id: z.number().int(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date(),
  requested_date: z.date(),
  due_date: z.date(),
  priority: z.number().int(),
  _count: z.object({
    id: z.number(),
    submitted_by: z.number(),
    email: z.number(),
    comments: z.number(),
    status_id: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    deleted_at: z.number(),
    requested_date: z.number(),
    due_date: z.number(),
    priority: z.number(),
    request_statuses: z.number(),
    tasks: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    status_id: z.number().nullable(),
    priority: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    status_id: z.number().nullable(),
    priority: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    submitted_by: z.string().nullable(),
    email: z.string().nullable(),
    comments: z.string().nullable(),
    status_id: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    requested_date: z.date().nullable(),
    due_date: z.date().nullable(),
    priority: z.number().int().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    submitted_by: z.string().nullable(),
    email: z.string().nullable(),
    comments: z.string().nullable(),
    status_id: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    requested_date: z.date().nullable(),
    due_date: z.date().nullable(),
    priority: z.number().int().nullable()
  }).nullable().optional()
}));