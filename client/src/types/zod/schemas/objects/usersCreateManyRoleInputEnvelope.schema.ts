import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateManyRoleInputObjectSchema as usersCreateManyRoleInputObjectSchema } from './usersCreateManyRoleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => usersCreateManyRoleInputObjectSchema), z.lazy(() => usersCreateManyRoleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const usersCreateManyRoleInputEnvelopeObjectSchema: z.ZodType<Prisma.usersCreateManyRoleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateManyRoleInputEnvelope>;
export const usersCreateManyRoleInputEnvelopeObjectZodSchema = makeSchema();
