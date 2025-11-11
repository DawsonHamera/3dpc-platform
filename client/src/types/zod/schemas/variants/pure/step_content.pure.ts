import * as z from 'zod';
import { step_content_content_typeSchema } from '../../enums/step_content_content_type.schema';
// prettier-ignore
export const step_contentModelSchema = z.object({
    id: z.number().int(),
    step_id: z.number().int(),
    content_order: z.number().int(),
    content_type: step_content_content_typeSchema,
    content_data: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    steps: z.unknown()
}).strict();

export type step_contentPureType = z.infer<typeof step_contentModelSchema>;
