import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateManyUsersInputObjectSchema as process_instancesCreateManyUsersInputObjectSchema } from './process_instancesCreateManyUsersInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => process_instancesCreateManyUsersInputObjectSchema), z.lazy(() => process_instancesCreateManyUsersInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const process_instancesCreateManyUsersInputEnvelopeObjectSchema: z.ZodType<Prisma.process_instancesCreateManyUsersInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateManyUsersInputEnvelope>;
export const process_instancesCreateManyUsersInputEnvelopeObjectZodSchema = makeSchema();
