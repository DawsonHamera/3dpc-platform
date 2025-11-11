import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksUncheckedCreateNestedManyWithoutPrintersInputObjectSchema as tasksUncheckedCreateNestedManyWithoutPrintersInputObjectSchema } from './tasksUncheckedCreateNestedManyWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  status_id: z.number().int(),
  name: z.string(),
  location: z.string().optional().nullable(),
  owner: z.string().optional().nullable(),
  details: z.string().optional().nullable(),
  image_id: z.number().int().optional().nullable(),
  process_template_id: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  tasks: z.lazy(() => tasksUncheckedCreateNestedManyWithoutPrintersInputObjectSchema).optional()
}).strict();
export const printersUncheckedCreateWithoutMaterialsInputObjectSchema: z.ZodType<Prisma.printersUncheckedCreateWithoutMaterialsInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUncheckedCreateWithoutMaterialsInput>;
export const printersUncheckedCreateWithoutMaterialsInputObjectZodSchema = makeSchema();
