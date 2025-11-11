import * as z from 'zod';

export const ProcessTemplatesOrderByRelevanceFieldEnumSchema = z.enum(['name', 'description', 'version'])

export type ProcessTemplatesOrderByRelevanceFieldEnum = z.infer<typeof ProcessTemplatesOrderByRelevanceFieldEnumSchema>;