import * as z from 'zod';

export const grades_gradeSchema = z.enum(['freshman', 'sophomore', 'junior', 'senior'])

export type grades_grade = z.infer<typeof grades_gradeSchema>;