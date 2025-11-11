import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateManyTasksInputObjectSchema as error_reportsCreateManyTasksInputObjectSchema } from './error_reportsCreateManyTasksInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => error_reportsCreateManyTasksInputObjectSchema), z.lazy(() => error_reportsCreateManyTasksInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const error_reportsCreateManyTasksInputEnvelopeObjectSchema: z.ZodType<Prisma.error_reportsCreateManyTasksInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateManyTasksInputEnvelope>;
export const error_reportsCreateManyTasksInputEnvelopeObjectZodSchema = makeSchema();
