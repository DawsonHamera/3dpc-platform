import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateManyPrintersInputObjectSchema as tasksCreateManyPrintersInputObjectSchema } from './tasksCreateManyPrintersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tasksCreateManyPrintersInputObjectSchema), z.lazy(() => tasksCreateManyPrintersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const tasksCreateManyPrintersInputEnvelopeObjectSchema: z.ZodType<Prisma.tasksCreateManyPrintersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateManyPrintersInputEnvelope>;
export const tasksCreateManyPrintersInputEnvelopeObjectZodSchema = makeSchema();
