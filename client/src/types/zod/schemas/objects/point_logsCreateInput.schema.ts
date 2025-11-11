import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateNestedOneWithoutPoint_logsInputObjectSchema as usersCreateNestedOneWithoutPoint_logsInputObjectSchema } from './usersCreateNestedOneWithoutPoint_logsInput.schema'

const makeSchema = () => z.object({
  change: z.number().int(),
  reason: z.string().max(255),
  details: z.string().optional().nullable(),
  logged_at: z.coerce.date().optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutPoint_logsInputObjectSchema)
}).strict();
export const point_logsCreateInputObjectSchema: z.ZodType<Prisma.point_logsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsCreateInput>;
export const point_logsCreateInputObjectZodSchema = makeSchema();
