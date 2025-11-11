import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesSelectObjectSchema as process_templatesSelectObjectSchema } from './process_templatesSelect.schema';
import { process_templatesIncludeObjectSchema as process_templatesIncludeObjectSchema } from './process_templatesInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => process_templatesSelectObjectSchema).optional(),
  include: z.lazy(() => process_templatesIncludeObjectSchema).optional()
}).strict();
export const process_templatesArgsObjectSchema = makeSchema();
export const process_templatesArgsObjectZodSchema = makeSchema();
