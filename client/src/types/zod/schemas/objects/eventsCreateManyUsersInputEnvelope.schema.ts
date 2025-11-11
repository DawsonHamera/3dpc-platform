import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateManyUsersInputObjectSchema as eventsCreateManyUsersInputObjectSchema } from './eventsCreateManyUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => eventsCreateManyUsersInputObjectSchema), z.lazy(() => eventsCreateManyUsersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const eventsCreateManyUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.eventsCreateManyUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.eventsCreateManyUsersInputEnvelope>;
export const eventsCreateManyUsersInputEnvelopeObjectZodSchema = makeSchema();
