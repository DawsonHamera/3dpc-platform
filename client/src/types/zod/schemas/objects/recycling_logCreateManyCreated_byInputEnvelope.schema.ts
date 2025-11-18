import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_logCreateManyCreated_byInputObjectSchema as recycling_logCreateManyCreated_byInputObjectSchema } from './recycling_logCreateManyCreated_byInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => recycling_logCreateManyCreated_byInputObjectSchema), z.lazy(() => recycling_logCreateManyCreated_byInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const recycling_logCreateManyCreated_byInputEnvelopeObjectSchema: z.ZodType<Prisma.recycling_logCreateManyCreated_byInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logCreateManyCreated_byInputEnvelope>;
export const recycling_logCreateManyCreated_byInputEnvelopeObjectZodSchema = makeSchema();
