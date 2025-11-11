import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesArgsObjectSchema as process_instancesArgsObjectSchema } from './process_instancesArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  process_instances: z.union([z.boolean(), z.lazy(() => process_instancesArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const process_logsIncludeObjectSchema: z.ZodType<Prisma.process_logsInclude> = makeSchema() as unknown as z.ZodType<Prisma.process_logsInclude>;
export const process_logsIncludeObjectZodSchema = makeSchema();
