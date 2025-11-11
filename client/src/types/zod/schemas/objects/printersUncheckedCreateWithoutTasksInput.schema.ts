import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status_id: z.number().int(),
  name: z.string(),
  location: z.string().optional().nullable(),
  owner: z.string().optional().nullable(),
  details: z.string().optional().nullable(),
  image_id: z.number().int().optional().nullable(),
  material_id: z.number().int().optional().nullable(),
  process_template_id: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();
export const printersUncheckedCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.printersUncheckedCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUncheckedCreateWithoutTasksInput>;
export const printersUncheckedCreateWithoutTasksInputObjectZodSchema = makeSchema();
