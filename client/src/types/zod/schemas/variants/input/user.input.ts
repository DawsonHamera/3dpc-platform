import * as z from 'zod';
import { gradeSchema } from '../../enums/grade.schema';
// prettier-ignore
export const userInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string(),
    password_hash: z.string(),
    role_id: z.number().int(),
    grade: gradeSchema,
    score: z.number().int(),
    last_active: z.date().optional().nullable(),
    attendances: z.array(z.unknown()),
    events: z.array(z.unknown()),
    files: z.array(z.unknown()),
    role: z.unknown(),
    activity_logs: z.array(z.unknown()),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    deleted_at: z.date().optional().nullable()
}).strict();

export type userInputType = z.infer<typeof userInputSchema>;
