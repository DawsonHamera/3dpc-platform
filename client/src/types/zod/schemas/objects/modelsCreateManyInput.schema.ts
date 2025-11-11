import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  image_file_id: z.number().int(),
  model_file_id: z.number().int(),
  material_slots: z.string(),
  estimated_duration: z.number().int().optional().nullable(),
  estimated_filament: z.number().optional().nullable(),
  description: z.string().optional().nullable(),
  tags: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();
export const modelsCreateManyInputObjectSchema: z.ZodType<Prisma.modelsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsCreateManyInput>;
export const modelsCreateManyInputObjectZodSchema = makeSchema();
