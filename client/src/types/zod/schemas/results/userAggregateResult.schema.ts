import * as z from 'zod';
export const userAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    name: z.number(),
    email: z.number(),
    password_hash: z.number(),
    role_id: z.number(),
    grade: z.number(),
    score: z.number(),
    last_active: z.number(),
    attendances: z.number(),
    events: z.number(),
    files: z.number(),
    role: z.number(),
    activity_logs: z.number(),
    created_at: z.number(),
    updated_at: z.number(),
    deleted_at: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    role_id: z.number().nullable(),
    score: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    role_id: z.number().nullable(),
    score: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    password_hash: z.string().nullable(),
    role_id: z.number().int().nullable(),
    score: z.number().int().nullable(),
    last_active: z.date().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    password_hash: z.string().nullable(),
    role_id: z.number().int().nullable(),
    score: z.number().int().nullable(),
    last_active: z.date().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable()
  }).nullable().optional()});