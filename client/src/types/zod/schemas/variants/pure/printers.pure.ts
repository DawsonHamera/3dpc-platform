import * as z from 'zod';
// prettier-ignore
export const printersModelSchema = z.object({
    id: z.number().int(),
    status_id: z.number().int(),
    name: z.string(),
    location: z.string().nullable(),
    owner: z.string().nullable(),
    details: z.string().nullable(),
    image_id: z.number().int().nullable(),
    material_id: z.number().int().nullable(),
    process_template_id: z.number().int().nullable(),
    created_at: z.date().nullable(),
    updated_at: z.date().nullable(),
    deleted_at: z.date().nullable(),
    process_templates: z.unknown().nullable(),
    files: z.unknown().nullable(),
    materials: z.unknown().nullable(),
    printer_statuses: z.unknown(),
    tasks: z.array(z.unknown())
}).strict();

export type printersPureType = z.infer<typeof printersModelSchema>;
