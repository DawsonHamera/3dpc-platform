import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateManyUsersInputObjectSchema as eventCreateManyUsersInputObjectSchema } from './eventCreateManyUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => eventCreateManyUsersInputObjectSchema), z.lazy(() => eventCreateManyUsersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const eventCreateManyUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.eventCreateManyUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateManyUsersInputEnvelope>;
export const eventCreateManyUsersInputEnvelopeObjectZodSchema = makeSchema();
