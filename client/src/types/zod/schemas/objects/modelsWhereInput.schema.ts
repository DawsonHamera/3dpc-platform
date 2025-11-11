import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { ProductsListRelationFilterObjectSchema as ProductsListRelationFilterObjectSchema } from './ProductsListRelationFilter.schema';
import { TasksListRelationFilterObjectSchema as TasksListRelationFilterObjectSchema } from './TasksListRelationFilter.schema'

const modelswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => modelsWhereInputObjectSchema), z.lazy(() => modelsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => modelsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => modelsWhereInputObjectSchema), z.lazy(() => modelsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  image_file_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  model_file_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  material_slots: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  estimated_duration: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  estimated_filament: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  tags: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  products: z.lazy(() => ProductsListRelationFilterObjectSchema).optional(),
  tasks: z.lazy(() => TasksListRelationFilterObjectSchema).optional()
}).strict();
export const modelsWhereInputObjectSchema: z.ZodType<Prisma.modelsWhereInput> = modelswhereinputSchema as unknown as z.ZodType<Prisma.modelsWhereInput>;
export const modelsWhereInputObjectZodSchema = modelswhereinputSchema;
