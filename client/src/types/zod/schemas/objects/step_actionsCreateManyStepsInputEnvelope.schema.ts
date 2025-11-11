import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actionsCreateManyStepsInputObjectSchema as step_actionsCreateManyStepsInputObjectSchema } from './step_actionsCreateManyStepsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => step_actionsCreateManyStepsInputObjectSchema), z.lazy(() => step_actionsCreateManyStepsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const step_actionsCreateManyStepsInputEnvelopeObjectSchema: z.ZodType<Prisma.step_actionsCreateManyStepsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.step_actionsCreateManyStepsInputEnvelope>;
export const step_actionsCreateManyStepsInputEnvelopeObjectZodSchema = makeSchema();
