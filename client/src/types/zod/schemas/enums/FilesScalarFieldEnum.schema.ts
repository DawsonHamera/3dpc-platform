import * as z from 'zod';

export const FilesScalarFieldEnumSchema = z.enum(['id', 'original_name', 'stored_name', 'mime_type', 'size', 'path', 'uploaded_by', 'created_at', 'updated_at', 'deleted_at', 'description', 'type'])

export type FilesScalarFieldEnum = z.infer<typeof FilesScalarFieldEnumSchema>;