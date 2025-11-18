import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateManyCreated_byInputObjectSchema as eventCreateManyCreated_byInputObjectSchema } from './eventCreateManyCreated_byInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => eventCreateManyCreated_byInputObjectSchema), z.lazy(() => eventCreateManyCreated_byInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const eventCreateManyCreated_byInputEnvelopeObjectSchema: z.ZodType<Prisma.eventCreateManyCreated_byInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateManyCreated_byInputEnvelope>;
export const eventCreateManyCreated_byInputEnvelopeObjectZodSchema = makeSchema();
