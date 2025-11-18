import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateNestedOneWithoutPointLogsInputObjectSchema as userCreateNestedOneWithoutPointLogsInputObjectSchema } from './userCreateNestedOneWithoutPointLogsInput.schema'

const makeSchema = () => z.object({
  change: z.number().int(),
  reason: z.string().max(255),
  details: z.string().optional().nullable(),
  logged_at: z.coerce.date().optional(),
  user: z.lazy(() => userCreateNestedOneWithoutPointLogsInputObjectSchema)
}).strict();
export const point_logCreateInputObjectSchema: z.ZodType<Prisma.point_logCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logCreateInput>;
export const point_logCreateInputObjectZodSchema = makeSchema();
