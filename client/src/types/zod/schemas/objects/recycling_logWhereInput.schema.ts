import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { Enumrecycling_typeFilterObjectSchema as Enumrecycling_typeFilterObjectSchema } from './Enumrecycling_typeFilter.schema';
import { recycling_typeSchema } from '../enums/recycling_type.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const recycling_logwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => recycling_logWhereInputObjectSchema), z.lazy(() => recycling_logWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => recycling_logWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => recycling_logWhereInputObjectSchema), z.lazy(() => recycling_logWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => Enumrecycling_typeFilterObjectSchema), recycling_typeSchema]).optional(),
  amount: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  created_by: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => userWhereInputObjectSchema)]).optional()
}).strict();
export const recycling_logWhereInputObjectSchema: z.ZodType<Prisma.recycling_logWhereInput> = recycling_logwhereinputSchema as unknown as z.ZodType<Prisma.recycling_logWhereInput>;
export const recycling_logWhereInputObjectZodSchema = recycling_logwhereinputSchema;
