import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsCreateManyUsersInputObjectSchema as process_logsCreateManyUsersInputObjectSchema } from './process_logsCreateManyUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => process_logsCreateManyUsersInputObjectSchema), z.lazy(() => process_logsCreateManyUsersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const process_logsCreateManyUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.process_logsCreateManyUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.process_logsCreateManyUsersInputEnvelope>;
export const process_logsCreateManyUsersInputEnvelopeObjectZodSchema = makeSchema();
