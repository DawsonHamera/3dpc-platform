import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateNestedOneWithoutError_reportsInputObjectSchema as stepsCreateNestedOneWithoutError_reportsInputObjectSchema } from './stepsCreateNestedOneWithoutError_reportsInput.schema';
import { tasksCreateNestedOneWithoutError_reportsInputObjectSchema as tasksCreateNestedOneWithoutError_reportsInputObjectSchema } from './tasksCreateNestedOneWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  description: z.string().optional().nullable(),
  image_url: z.string().max(255).optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  steps: z.lazy(() => stepsCreateNestedOneWithoutError_reportsInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksCreateNestedOneWithoutError_reportsInputObjectSchema)
}).strict();
export const error_reportsCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.error_reportsCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateWithoutUsersInput>;
export const error_reportsCreateWithoutUsersInputObjectZodSchema = makeSchema();
