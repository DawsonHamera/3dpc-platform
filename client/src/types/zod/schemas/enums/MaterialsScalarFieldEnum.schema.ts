import * as z from 'zod';

export const MaterialsScalarFieldEnumSchema = z.enum(['id', 'name', 'hex', 'texture_file_id', 'image_file_id', 'type', 'vendor', 'min_temp', 'max_temp', 'details', 'created_at', 'updated_at', 'deleted_at', 'texture_url', 'cost', 'cost_unit', 'supplier', 'safety_data', 'density'])

export type MaterialsScalarFieldEnum = z.infer<typeof MaterialsScalarFieldEnumSchema>;