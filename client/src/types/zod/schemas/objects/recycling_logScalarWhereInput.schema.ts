import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { Enumrecycling_typeFilterObjectSchema as Enumrecycling_typeFilterObjectSchema } from './Enumrecycling_typeFilter.schema';
import { recycling_typeSchema } from '../enums/recycling_type.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const recycling_logscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => recycling_logScalarWhereInputObjectSchema), z.lazy(() => recycling_logScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => recycling_logScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => recycling_logScalarWhereInputObjectSchema), z.lazy(() => recycling_logScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => Enumrecycling_typeFilterObjectSchema), recycling_typeSchema]).optional(),
  amount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const recycling_logScalarWhereInputObjectSchema: z.ZodType<Prisma.recycling_logScalarWhereInput> = recycling_logscalarwhereinputSchema as unknown as z.ZodType<Prisma.recycling_logScalarWhereInput>;
export const recycling_logScalarWhereInputObjectZodSchema = recycling_logscalarwhereinputSchema;
