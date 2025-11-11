import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsCreateManyProcess_instancesInputObjectSchema as process_instance_stepsCreateManyProcess_instancesInputObjectSchema } from './process_instance_stepsCreateManyProcess_instancesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => process_instance_stepsCreateManyProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsCreateManyProcess_instancesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const process_instance_stepsCreateManyProcess_instancesInputEnvelopeObjectSchema: z.ZodType<Prisma.process_instance_stepsCreateManyProcess_instancesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsCreateManyProcess_instancesInputEnvelope>;
export const process_instance_stepsCreateManyProcess_instancesInputEnvelopeObjectZodSchema = makeSchema();
