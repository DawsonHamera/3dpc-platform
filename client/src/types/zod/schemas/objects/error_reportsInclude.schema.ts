import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema';
import { tasksArgsObjectSchema as tasksArgsObjectSchema } from './tasksArgs.schema'

const makeSchema = () => z.object({
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksArgsObjectSchema)]).optional()
}).strict();
export const error_reportsIncludeObjectSchema: z.ZodType<Prisma.error_reportsInclude> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsInclude>;
export const error_reportsIncludeObjectZodSchema = makeSchema();
