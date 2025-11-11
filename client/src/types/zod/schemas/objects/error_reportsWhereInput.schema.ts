import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { StepsNullableScalarRelationFilterObjectSchema as StepsNullableScalarRelationFilterObjectSchema } from './StepsNullableScalarRelationFilter.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema';
import { UsersScalarRelationFilterObjectSchema as UsersScalarRelationFilterObjectSchema } from './UsersScalarRelationFilter.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { TasksScalarRelationFilterObjectSchema as TasksScalarRelationFilterObjectSchema } from './TasksScalarRelationFilter.schema';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './tasksWhereInput.schema'

const error_reportswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => error_reportsWhereInputObjectSchema), z.lazy(() => error_reportsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => error_reportsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => error_reportsWhereInputObjectSchema), z.lazy(() => error_reportsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  task_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  submitted_by: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  image_url: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  steps: z.union([z.lazy(() => StepsNullableScalarRelationFilterObjectSchema), z.lazy(() => stepsWhereInputObjectSchema)]).optional(),
  users: z.union([z.lazy(() => UsersScalarRelationFilterObjectSchema), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  tasks: z.union([z.lazy(() => TasksScalarRelationFilterObjectSchema), z.lazy(() => tasksWhereInputObjectSchema)]).optional()
}).strict();
export const error_reportsWhereInputObjectSchema: z.ZodType<Prisma.error_reportsWhereInput> = error_reportswhereinputSchema as unknown as z.ZodType<Prisma.error_reportsWhereInput>;
export const error_reportsWhereInputObjectZodSchema = error_reportswhereinputSchema;
