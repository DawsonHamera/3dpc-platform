import * as z from 'zod';
import { gradeSchema } from '../../enums/grade.schema';
// prettier-ignore
export const userModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string(),
    password_hash: z.string(),
    role_id: z.number().int(),
    grade: gradeSchema,
    points: z.number().int(),
    last_active: z.date().nullable(),
    attendances: z.array(z.unknown()),
    events: z.array(z.unknown()),
    files: z.array(z.unknown()),
    role: z.unknown(),
    activity_logs: z.array(z.unknown()),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    pointLogs: z.array(z.unknown()),
    recycling_logs: z.array(z.unknown())
}).strict();

export type userPureType = z.infer<typeof userModelSchema>;
