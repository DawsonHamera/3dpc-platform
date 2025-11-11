import * as z from 'zod';
// prettier-ignore
export const printer_statusesModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    description: z.string().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    printers: z.array(z.unknown())
}).strict();

export type printer_statusesPureType = z.infer<typeof printer_statusesModelSchema>;
