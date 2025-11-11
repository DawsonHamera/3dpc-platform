import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateManyUsersInputObjectSchema as error_reportsCreateManyUsersInputObjectSchema } from './error_reportsCreateManyUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => error_reportsCreateManyUsersInputObjectSchema), z.lazy(() => error_reportsCreateManyUsersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const error_reportsCreateManyUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.error_reportsCreateManyUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsCreateManyUsersInputEnvelope>;
export const error_reportsCreateManyUsersInputEnvelopeObjectZodSchema = makeSchema();
