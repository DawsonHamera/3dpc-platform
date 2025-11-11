import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsCreateManyStepsInputObjectSchema as process_instance_stepsCreateManyStepsInputObjectSchema } from './process_instance_stepsCreateManyStepsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => process_instance_stepsCreateManyStepsInputObjectSchema), z.lazy(() => process_instance_stepsCreateManyStepsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const process_instance_stepsCreateManyStepsInputEnvelopeObjectSchema: z.ZodType<Prisma.process_instance_stepsCreateManyStepsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsCreateManyStepsInputEnvelope>;
export const process_instance_stepsCreateManyStepsInputEnvelopeObjectZodSchema = makeSchema();
