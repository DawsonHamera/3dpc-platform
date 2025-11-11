import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_template_stepsCreateManyStepsInputObjectSchema as process_template_stepsCreateManyStepsInputObjectSchema } from './process_template_stepsCreateManyStepsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => process_template_stepsCreateManyStepsInputObjectSchema), z.lazy(() => process_template_stepsCreateManyStepsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const process_template_stepsCreateManyStepsInputEnvelopeObjectSchema: z.ZodType<Prisma.process_template_stepsCreateManyStepsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsCreateManyStepsInputEnvelope>;
export const process_template_stepsCreateManyStepsInputEnvelopeObjectZodSchema = makeSchema();
