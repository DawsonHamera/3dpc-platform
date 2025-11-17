import * as z from 'zod';

export const gradeSchema = z.enum(['freshman', 'sophomore', 'junior', 'senior', 'other'])

export type grade = z.infer<typeof gradeSchema>;