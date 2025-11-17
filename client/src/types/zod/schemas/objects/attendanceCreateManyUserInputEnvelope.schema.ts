import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceCreateManyUserInputObjectSchema as attendanceCreateManyUserInputObjectSchema } from './attendanceCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => attendanceCreateManyUserInputObjectSchema), z.lazy(() => attendanceCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const attendanceCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.attendanceCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.attendanceCreateManyUserInputEnvelope>;
export const attendanceCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
