import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logCreateManyUserInputObjectSchema as activity_logCreateManyUserInputObjectSchema } from './activity_logCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => activity_logCreateManyUserInputObjectSchema), z.lazy(() => activity_logCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const activity_logCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.activity_logCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.activity_logCreateManyUserInputEnvelope>;
export const activity_logCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
