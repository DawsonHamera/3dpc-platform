import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_content_content_typeSchema } from '../enums/step_content_content_type.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  content_order: z.number().int(),
  content_type: step_content_content_typeSchema,
  content_data: z.string(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const step_contentUncheckedCreateWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_contentUncheckedCreateWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentUncheckedCreateWithoutStepsInput>;
export const step_contentUncheckedCreateWithoutStepsInputObjectZodSchema = makeSchema();
