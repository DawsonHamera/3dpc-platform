import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const activity_logsIncludeObjectSchema: z.ZodType<Prisma.activity_logsInclude> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsInclude>;
export const activity_logsIncludeObjectZodSchema = makeSchema();
