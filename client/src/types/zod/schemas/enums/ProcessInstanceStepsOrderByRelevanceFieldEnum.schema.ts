import * as z from 'zod';

export const ProcessInstanceStepsOrderByRelevanceFieldEnumSchema = z.enum(['input_data', 'output_data', 'metadata', 'notes'])

export type ProcessInstanceStepsOrderByRelevanceFieldEnum = z.infer<typeof ProcessInstanceStepsOrderByRelevanceFieldEnumSchema>;