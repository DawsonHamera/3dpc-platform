import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendancesCreateManyEventInputObjectSchema as attendancesCreateManyEventInputObjectSchema } from './attendancesCreateManyEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => attendancesCreateManyEventInputObjectSchema), z.lazy(() => attendancesCreateManyEventInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const attendancesCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.attendancesCreateManyEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.attendancesCreateManyEventInputEnvelope>;
export const attendancesCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
