import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksUncheckedCreateNestedManyWithoutPrintersInputObjectSchema as tasksUncheckedCreateNestedManyWithoutPrintersInputObjectSchema } from './tasksUncheckedCreateNestedManyWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status_id: z.number().int(),
  name: z.string().max(255),
  location: z.string().max(255).optional().nullable(),
  owner: z.string().max(255).optional().nullable(),
  details: z.string().optional().nullable(),
  image_id: z.number().int().optional().nullable(),
  material_id: z.number().int().optional().nullable(),
  process_template_id: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  tasks: z.lazy(() => tasksUncheckedCreateNestedManyWithoutPrintersInputObjectSchema)
}).strict();
export const printersUncheckedCreateInputObjectSchema: z.ZodType<Prisma.printersUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUncheckedCreateInput>;
export const printersUncheckedCreateInputObjectZodSchema = makeSchema();
