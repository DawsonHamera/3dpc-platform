import * as z from 'zod';

export const ModelsScalarFieldEnumSchema = z.enum(['id', 'name', 'image_file_id', 'model_file_id', 'material_slots', 'estimated_duration', 'estimated_filament', 'description', 'tags', 'created_at', 'updated_at', 'deleted_at'])

export type ModelsScalarFieldEnum = z.infer<typeof ModelsScalarFieldEnumSchema>;