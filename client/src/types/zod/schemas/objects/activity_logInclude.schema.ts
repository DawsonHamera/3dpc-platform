import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional()
}).strict();
export const activity_logIncludeObjectSchema: z.ZodType<Prisma.activity_logInclude> = makeSchema() as unknown as z.ZodType<Prisma.activity_logInclude>;
export const activity_logIncludeObjectZodSchema = makeSchema();
