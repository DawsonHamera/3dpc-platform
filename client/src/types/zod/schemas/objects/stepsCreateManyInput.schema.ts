import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string().max(255),
  description: z.string().optional().nullable(),
  is_critical: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  step_type: steps_step_typeSchema.optional().nullable(),
  is_required: z.boolean().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();
export const stepsCreateManyInputObjectSchema: z.ZodType<Prisma.stepsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateManyInput>;
export const stepsCreateManyInputObjectZodSchema = makeSchema();
