import * as z from 'zod';

export const FilesOrderByRelevanceFieldEnumSchema = z.enum(['original_name', 'stored_name', 'mime_type', 'path', 'description'])

export type FilesOrderByRelevanceFieldEnum = z.infer<typeof FilesOrderByRelevanceFieldEnumSchema>;