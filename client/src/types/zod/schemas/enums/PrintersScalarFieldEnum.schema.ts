import * as z from 'zod';

export const PrintersScalarFieldEnumSchema = z.enum(['id', 'status_id', 'name', 'location', 'owner', 'details', 'image_id', 'material_id', 'process_template_id', 'created_at', 'updated_at', 'deleted_at'])

export type PrintersScalarFieldEnum = z.infer<typeof PrintersScalarFieldEnumSchema>;