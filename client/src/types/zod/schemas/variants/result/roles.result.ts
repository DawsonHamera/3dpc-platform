import * as z from 'zod';
// prettier-ignore
export const rolesResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    users: z.array(z.unknown())
}).strict();

export type rolesResultType = z.infer<typeof rolesResultSchema>;
