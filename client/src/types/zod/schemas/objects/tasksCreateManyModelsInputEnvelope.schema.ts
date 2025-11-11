import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateManyModelsInputObjectSchema as tasksCreateManyModelsInputObjectSchema } from './tasksCreateManyModelsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tasksCreateManyModelsInputObjectSchema), z.lazy(() => tasksCreateManyModelsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const tasksCreateManyModelsInputEnvelopeObjectSchema: z.ZodType<Prisma.tasksCreateManyModelsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateManyModelsInputEnvelope>;
export const tasksCreateManyModelsInputEnvelopeObjectZodSchema = makeSchema();
