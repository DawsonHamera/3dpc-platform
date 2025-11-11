import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logsCreateManyUsersInputObjectSchema as point_logsCreateManyUsersInputObjectSchema } from './point_logsCreateManyUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => point_logsCreateManyUsersInputObjectSchema), z.lazy(() => point_logsCreateManyUsersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const point_logsCreateManyUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.point_logsCreateManyUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.point_logsCreateManyUsersInputEnvelope>;
export const point_logsCreateManyUsersInputEnvelopeObjectZodSchema = makeSchema();
