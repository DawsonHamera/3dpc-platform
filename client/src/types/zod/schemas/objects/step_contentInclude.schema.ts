import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema'

const makeSchema = () => z.object({
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional()
}).strict();
export const step_contentIncludeObjectSchema: z.ZodType<Prisma.step_contentInclude> = makeSchema() as unknown as z.ZodType<Prisma.step_contentInclude>;
export const step_contentIncludeObjectZodSchema = makeSchema();
