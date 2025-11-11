import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesCreateManyUserInputObjectSchema as attendancesCreateManyUserInputObjectSchema } from './attendancesCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => attendancesCreateManyUserInputObjectSchema), z.lazy(() => attendancesCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const attendancesCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.attendancesCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.attendancesCreateManyUserInputEnvelope>;
export const attendancesCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
