import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateManyRequestsInputObjectSchema as tasksCreateManyRequestsInputObjectSchema } from './tasksCreateManyRequestsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tasksCreateManyRequestsInputObjectSchema), z.lazy(() => tasksCreateManyRequestsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const tasksCreateManyRequestsInputEnvelopeObjectSchema: z.ZodType<Prisma.tasksCreateManyRequestsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateManyRequestsInputEnvelope>;
export const tasksCreateManyRequestsInputEnvelopeObjectZodSchema = makeSchema();
