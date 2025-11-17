import * as z from 'zod';
// prettier-ignore
export const roleInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    users: z.array(z.unknown())
}).strict();

export type roleInputType = z.infer<typeof roleInputSchema>;
