import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsCreateManyProcess_instancesInputObjectSchema as process_logsCreateManyProcess_instancesInputObjectSchema } from './process_logsCreateManyProcess_instancesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => process_logsCreateManyProcess_instancesInputObjectSchema), z.lazy(() => process_logsCreateManyProcess_instancesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const process_logsCreateManyProcess_instancesInputEnvelopeObjectSchema: z.ZodType<Prisma.process_logsCreateManyProcess_instancesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.process_logsCreateManyProcess_instancesInputEnvelope>;
export const process_logsCreateManyProcess_instancesInputEnvelopeObjectZodSchema = makeSchema();
