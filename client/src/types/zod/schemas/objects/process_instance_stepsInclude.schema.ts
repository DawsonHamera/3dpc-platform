import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesArgsObjectSchema as process_instancesArgsObjectSchema } from './process_instancesArgs.schema';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  process_instances: z.union([z.boolean(), z.lazy(() => process_instancesArgsObjectSchema)]).optional(),
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const process_instance_stepsIncludeObjectSchema: z.ZodType<Prisma.process_instance_stepsInclude> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsInclude>;
export const process_instance_stepsIncludeObjectZodSchema = makeSchema();
