import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema'

const makeSchema = () => z.object({
  created_by: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional()
}).strict();
export const recycling_logIncludeObjectSchema: z.ZodType<Prisma.recycling_logInclude> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logInclude>;
export const recycling_logIncludeObjectZodSchema = makeSchema();
