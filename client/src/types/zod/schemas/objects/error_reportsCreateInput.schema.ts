import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateNestedOneWithoutError_reportsInputObjectSchema as stepsCreateNestedOneWithoutError_reportsInputObjectSchema } from './stepsCreateNestedOneWithoutError_reportsInput.schema';
import { usersCreateNestedOneWithoutError_reportsInputObjectSchema as usersCreateNestedOneWithoutError_reportsInputObjectSchema } from './usersCreateNestedOneWithoutError_reportsInput.schema';
import { tasksCreateNestedOneWithoutError_reportsInputObjectSchema as tasksCreateNestedOneWithoutError_reportsInputObjectSchema } from './tasksCreateNestedOneWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  description: z.string().optional().nullable(),
  image_url: z.string().max(255).optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  steps: z.lazy(() => stepsCreateNestedOneWithoutError_reportsInputObjectSchema).optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutError_reportsInputObjectSchema),
  tasks: z.lazy(() => tasksCreateNestedOneWithoutError_reportsInputObjectSchema)
}).strict();
export const error_reportsCreateInputObjectSchema: z.ZodType<Prisma.error_reportsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateInput>;
export const error_reportsCreateInputObjectZodSchema = makeSchema();
