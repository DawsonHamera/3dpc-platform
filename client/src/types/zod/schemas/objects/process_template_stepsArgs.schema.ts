import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsSelectObjectSchema as process_template_stepsSelectObjectSchema } from './process_template_stepsSelect.schema';
import { process_template_stepsIncludeObjectSchema as process_template_stepsIncludeObjectSchema } from './process_template_stepsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => process_template_stepsSelectObjectSchema).optional(),
  include: z.lazy(() => process_template_stepsIncludeObjectSchema).optional()
}).strict();
export const process_template_stepsArgsObjectSchema = makeSchema();
export const process_template_stepsArgsObjectZodSchema = makeSchema();
