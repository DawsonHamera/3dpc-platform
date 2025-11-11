import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logsCreateManyUserInputObjectSchema as activity_logsCreateManyUserInputObjectSchema } from './activity_logsCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => activity_logsCreateManyUserInputObjectSchema), z.lazy(() => activity_logsCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const activity_logsCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.activity_logsCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsCreateManyUserInputEnvelope>;
export const activity_logsCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
