import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const attendancesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => attendancesScalarWhereInputObjectSchema), z.lazy(() => attendancesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => attendancesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => attendancesScalarWhereInputObjectSchema), z.lazy(() => attendancesScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  event_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  arrival_time: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const attendancesScalarWhereInputObjectSchema: z.ZodType<Prisma.attendancesScalarWhereInput> = attendancesscalarwhereinputSchema as unknown as z.ZodType<Prisma.attendancesScalarWhereInput>;
export const attendancesScalarWhereInputObjectZodSchema = attendancesscalarwhereinputSchema;
