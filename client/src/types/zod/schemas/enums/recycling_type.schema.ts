import * as z from 'zod';

export const recycling_typeSchema = z.enum(['bottle', 'filament_created', 'filament_used'])

export type recycling_type = z.infer<typeof recycling_typeSchema>;