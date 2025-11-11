import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsSelectObjectSchema as process_instance_stepsSelectObjectSchema } from './process_instance_stepsSelect.schema';
import { process_instance_stepsIncludeObjectSchema as process_instance_stepsIncludeObjectSchema } from './process_instance_stepsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => process_instance_stepsSelectObjectSchema).optional(),
  include: z.lazy(() => process_instance_stepsIncludeObjectSchema).optional()
}).strict();
export const process_instance_stepsArgsObjectSchema = makeSchema();
export const process_instance_stepsArgsObjectZodSchema = makeSchema();
