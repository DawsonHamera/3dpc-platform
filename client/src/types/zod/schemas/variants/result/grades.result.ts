import * as z from 'zod';
import { grades_gradeSchema } from '../../enums/grades_grade.schema';
// prettier-ignore
export const gradesResultSchema = z.object({
    id: z.number().int(),
    grade: grades_gradeSchema,
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    users: z.array(z.unknown())
}).strict();

export type gradesResultType = z.infer<typeof gradesResultSchema>;
