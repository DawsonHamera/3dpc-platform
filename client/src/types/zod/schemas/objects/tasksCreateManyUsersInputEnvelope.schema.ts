import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateManyUsersInputObjectSchema as tasksCreateManyUsersInputObjectSchema } from './tasksCreateManyUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => tasksCreateManyUsersInputObjectSchema), z.lazy(() => tasksCreateManyUsersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const tasksCreateManyUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.tasksCreateManyUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateManyUsersInputEnvelope>;
export const tasksCreateManyUsersInputEnvelopeObjectZodSchema = makeSchema();
