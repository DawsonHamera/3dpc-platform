import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const point_logsIncludeObjectSchema: z.ZodType<Prisma.point_logsInclude> = makeSchema() as unknown as z.ZodType<Prisma.point_logsInclude>;
export const point_logsIncludeObjectZodSchema = makeSchema();
