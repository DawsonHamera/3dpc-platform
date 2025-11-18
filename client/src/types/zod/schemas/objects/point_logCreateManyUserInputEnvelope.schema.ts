import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logCreateManyUserInputObjectSchema as point_logCreateManyUserInputObjectSchema } from './point_logCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => point_logCreateManyUserInputObjectSchema), z.lazy(() => point_logCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const point_logCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.point_logCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.point_logCreateManyUserInputEnvelope>;
export const point_logCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
