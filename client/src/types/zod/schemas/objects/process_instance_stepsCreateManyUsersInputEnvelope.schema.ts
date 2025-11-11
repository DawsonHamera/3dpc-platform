import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsCreateManyUsersInputObjectSchema as process_instance_stepsCreateManyUsersInputObjectSchema } from './process_instance_stepsCreateManyUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => process_instance_stepsCreateManyUsersInputObjectSchema), z.lazy(() => process_instance_stepsCreateManyUsersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const process_instance_stepsCreateManyUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.process_instance_stepsCreateManyUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsCreateManyUsersInputEnvelope>;
export const process_instance_stepsCreateManyUsersInputEnvelopeObjectZodSchema = makeSchema();
