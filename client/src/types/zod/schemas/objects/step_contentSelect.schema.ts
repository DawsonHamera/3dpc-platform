import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  step_id: z.boolean().optional(),
  content_order: z.boolean().optional(),
  content_type: z.boolean().optional(),
  content_data: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional()
}).strict();
export const step_contentSelectObjectSchema: z.ZodType<Prisma.step_contentSelect> = makeSchema() as unknown as z.ZodType<Prisma.step_contentSelect>;
export const step_contentSelectObjectZodSchema = makeSchema();
