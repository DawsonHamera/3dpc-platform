import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateNestedOneWithoutError_reportsInputObjectSchema as usersCreateNestedOneWithoutError_reportsInputObjectSchema } from './usersCreateNestedOneWithoutError_reportsInput.schema';
import { tasksCreateNestedOneWithoutError_reportsInputObjectSchema as tasksCreateNestedOneWithoutError_reportsInputObjectSchema } from './tasksCreateNestedOneWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  description: z.string().optional().nullable(),
  image_url: z.string().max(255).optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  users: z.lazy(() => usersCreateNestedOneWithoutError_reportsInputObjectSchema),
  tasks: z.lazy(() => tasksCreateNestedOneWithoutError_reportsInputObjectSchema)
}).strict();
export const error_reportsCreateWithoutStepsInputObjectSchema: z.ZodType<Prisma.error_reportsCreateWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateWithoutStepsInput>;
export const error_reportsCreateWithoutStepsInputObjectZodSchema = makeSchema();
