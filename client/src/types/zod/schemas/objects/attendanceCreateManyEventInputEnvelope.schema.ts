import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendanceCreateManyEventInputObjectSchema as attendanceCreateManyEventInputObjectSchema } from './attendanceCreateManyEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => attendanceCreateManyEventInputObjectSchema), z.lazy(() => attendanceCreateManyEventInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const attendanceCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.attendanceCreateManyEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.attendanceCreateManyEventInputEnvelope>;
export const attendanceCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
