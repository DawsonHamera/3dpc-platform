import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesArgsObjectSchema as process_templatesArgsObjectSchema } from './process_templatesArgs.schema';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema'

const makeSchema = () => z.object({
  process_templates: z.union([z.boolean(), z.lazy(() => process_templatesArgsObjectSchema)]).optional(),
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional()
}).strict();
export const process_template_stepsIncludeObjectSchema: z.ZodType<Prisma.process_template_stepsInclude> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsInclude>;
export const process_template_stepsIncludeObjectZodSchema = makeSchema();
