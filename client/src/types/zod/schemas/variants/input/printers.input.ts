import * as z from 'zod';
// prettier-ignore
export const printersInputSchema = z.object({
    id: z.number().int(),
    status_id: z.number().int(),
    name: z.string(),
    location: z.string().optional().nullable(),
    owner: z.string().optional().nullable(),
    details: z.string().optional().nullable(),
    image_id: z.number().int().optional().nullable(),
    material_id: z.number().int().optional().nullable(),
    process_template_id: z.number().int().optional().nullable(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
    deleted_at: z.date().optional().nullable(),
    process_templates: z.unknown().optional().nullable(),
    files: z.unknown().optional().nullable(),
    materials: z.unknown().optional().nullable(),
    printer_statuses: z.unknown(),
    tasks: z.array(z.unknown())
}).strict();

export type printersInputType = z.infer<typeof printersInputSchema>;
