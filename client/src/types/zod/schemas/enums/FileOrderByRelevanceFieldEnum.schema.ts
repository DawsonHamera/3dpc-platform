import * as z from 'zod';

export const FileOrderByRelevanceFieldEnumSchema = z.enum(['original_name', 'stored_name', 'mime_type', 'path', 'description'])

export type FileOrderByRelevanceFieldEnum = z.infer<typeof FileOrderByRelevanceFieldEnumSchema>;