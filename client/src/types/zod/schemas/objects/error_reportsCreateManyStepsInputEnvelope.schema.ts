import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateManyStepsInputObjectSchema as error_reportsCreateManyStepsInputObjectSchema } from './error_reportsCreateManyStepsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => error_reportsCreateManyStepsInputObjectSchema), z.lazy(() => error_reportsCreateManyStepsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const error_reportsCreateManyStepsInputEnvelopeObjectSchema: z.ZodType<Prisma.error_reportsCreateManyStepsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateManyStepsInputEnvelope>;
export const error_reportsCreateManyStepsInputEnvelopeObjectZodSchema = makeSchema();
