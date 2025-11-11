import * as z from 'zod';

export const ProcessInstancesOrderByRelevanceFieldEnumSchema = z.enum(['name', 'description', 'metadata'])

export type ProcessInstancesOrderByRelevanceFieldEnum = z.infer<typeof ProcessInstancesOrderByRelevanceFieldEnumSchema>;