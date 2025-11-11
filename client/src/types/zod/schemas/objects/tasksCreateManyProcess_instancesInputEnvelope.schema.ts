import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateManyProcess_instancesInputObjectSchema as tasksCreateManyProcess_instancesInputObjectSchema } from './tasksCreateManyProcess_instancesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tasksCreateManyProcess_instancesInputObjectSchema), z.lazy(() => tasksCreateManyProcess_instancesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const tasksCreateManyProcess_instancesInputEnvelopeObjectSchema: z.ZodType<Prisma.tasksCreateManyProcess_instancesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateManyProcess_instancesInputEnvelope>;
export const tasksCreateManyProcess_instancesInputEnvelopeObjectZodSchema = makeSchema();
