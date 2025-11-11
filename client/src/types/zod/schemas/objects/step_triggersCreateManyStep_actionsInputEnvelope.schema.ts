import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggersCreateManyStep_actionsInputObjectSchema as step_triggersCreateManyStep_actionsInputObjectSchema } from './step_triggersCreateManyStep_actionsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => step_triggersCreateManyStep_actionsInputObjectSchema), z.lazy(() => step_triggersCreateManyStep_actionsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const step_triggersCreateManyStep_actionsInputEnvelopeObjectSchema: z.ZodType<Prisma.step_triggersCreateManyStep_actionsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersCreateManyStep_actionsInputEnvelope>;
export const step_triggersCreateManyStep_actionsInputEnvelopeObjectZodSchema = makeSchema();
