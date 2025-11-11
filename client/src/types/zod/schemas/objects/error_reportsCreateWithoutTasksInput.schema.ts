import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateNestedOneWithoutError_reportsInputObjectSchema as stepsCreateNestedOneWithoutError_reportsInputObjectSchema } from './stepsCreateNestedOneWithoutError_reportsInput.schema';
import { usersCreateNestedOneWithoutError_reportsInputObjectSchema as usersCreateNestedOneWithoutError_reportsInputObjectSchema } from './usersCreateNestedOneWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  description: z.string().optional().nullable(),
  image_url: z.string().max(255).optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  steps: z.lazy(() => stepsCreateNestedOneWithoutError_reportsInputObjectSchema).optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutError_reportsInputObjectSchema)
}).strict();
export const error_reportsCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.error_reportsCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateWithoutTasksInput>;
export const error_reportsCreateWithoutTasksInputObjectZodSchema = makeSchema();
