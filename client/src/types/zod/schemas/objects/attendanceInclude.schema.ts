import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventArgsObjectSchema as eventArgsObjectSchema } from './eventArgs.schema';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema'

const makeSchema = () => z.object({
  event: z.union([z.boolean(), z.lazy(() => eventArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional()
}).strict();
export const attendanceIncludeObjectSchema: z.ZodType<Prisma.attendanceInclude> = makeSchema() as unknown as z.ZodType<Prisma.attendanceInclude>;
export const attendanceIncludeObjectZodSchema = makeSchema();
