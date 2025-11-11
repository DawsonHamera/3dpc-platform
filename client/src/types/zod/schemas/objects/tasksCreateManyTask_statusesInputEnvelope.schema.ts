import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateManyTask_statusesInputObjectSchema as tasksCreateManyTask_statusesInputObjectSchema } from './tasksCreateManyTask_statusesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tasksCreateManyTask_statusesInputObjectSchema), z.lazy(() => tasksCreateManyTask_statusesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const tasksCreateManyTask_statusesInputEnvelopeObjectSchema: z.ZodType<Prisma.tasksCreateManyTask_statusesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateManyTask_statusesInputEnvelope>;
export const tasksCreateManyTask_statusesInputEnvelopeObjectZodSchema = makeSchema();
