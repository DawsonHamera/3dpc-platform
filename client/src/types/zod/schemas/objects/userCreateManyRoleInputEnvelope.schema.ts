import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateManyRoleInputObjectSchema as userCreateManyRoleInputObjectSchema } from './userCreateManyRoleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => userCreateManyRoleInputObjectSchema), z.lazy(() => userCreateManyRoleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const userCreateManyRoleInputEnvelopeObjectSchema: z.ZodType<Prisma.userCreateManyRoleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.userCreateManyRoleInputEnvelope>;
export const userCreateManyRoleInputEnvelopeObjectZodSchema = makeSchema();
