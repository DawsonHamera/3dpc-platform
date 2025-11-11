import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateManyGradeInputObjectSchema as usersCreateManyGradeInputObjectSchema } from './usersCreateManyGradeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => usersCreateManyGradeInputObjectSchema), z.lazy(() => usersCreateManyGradeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const usersCreateManyGradeInputEnvelopeObjectSchema: z.ZodType<Prisma.usersCreateManyGradeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateManyGradeInputEnvelope>;
export const usersCreateManyGradeInputEnvelopeObjectZodSchema = makeSchema();
