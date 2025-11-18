import * as z from 'zod';
import { recycling_typeSchema } from '../../enums/recycling_type.schema';
// prettier-ignore
export const recycling_logResultSchema = z.object({
    id: z.number().int(),
    type: recycling_typeSchema,
    amount: z.number().int(),
    created_at: z.date(),
    user_id: z.number().int(),
    created_by: z.unknown()
}).strict();

export type recycling_logResultType = z.infer<typeof recycling_logResultSchema>;
