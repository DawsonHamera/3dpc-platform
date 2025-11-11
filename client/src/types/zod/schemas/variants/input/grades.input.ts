import * as z from 'zod';
import { grades_gradeSchema } from '../../enums/grades_grade.schema';
// prettier-ignore
export const gradesInputSchema = z.object({
    id: z.number().int(),
    grade: grades_gradeSchema,
    description: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    users: z.array(z.unknown())
}).strict();

export type gradesInputType = z.infer<typeof gradesInputSchema>;
