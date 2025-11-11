import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_contentCreateManyStepsInputObjectSchema as step_contentCreateManyStepsInputObjectSchema } from './step_contentCreateManyStepsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => step_contentCreateManyStepsInputObjectSchema), z.lazy(() => step_contentCreateManyStepsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const step_contentCreateManyStepsInputEnvelopeObjectSchema: z.ZodType<Prisma.step_contentCreateManyStepsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.step_contentCreateManyStepsInputEnvelope>;
export const step_contentCreateManyStepsInputEnvelopeObjectZodSchema = makeSchema();
