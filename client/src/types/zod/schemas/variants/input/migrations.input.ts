import * as z from 'zod';
// prettier-ignore
export const migrationsInputSchema = z.object({
    id: z.number().int(),
    version: z.string(),
    class: z.string(),
    group: z.string(),
    namespace: z.string(),
    time: z.number().int(),
    batch: z.number().int()
}).strict();

export type migrationsInputType = z.infer<typeof migrationsInputSchema>;
