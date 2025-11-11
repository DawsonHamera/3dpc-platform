import * as z from 'zod';
// prettier-ignore
export const printer_statusesInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    printers: z.array(z.unknown())
}).strict();

export type printer_statusesInputType = z.infer<typeof printer_statusesInputSchema>;
