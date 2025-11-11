import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { Enumstep_content_content_typeFilterObjectSchema as Enumstep_content_content_typeFilterObjectSchema } from './Enumstep_content_content_typeFilter.schema';
import { step_content_content_typeSchema } from '../enums/step_content_content_type.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const step_contentscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => step_contentScalarWhereInputObjectSchema), z.lazy(() => step_contentScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => step_contentScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => step_contentScalarWhereInputObjectSchema), z.lazy(() => step_contentScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  content_order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  content_type: z.union([z.lazy(() => Enumstep_content_content_typeFilterObjectSchema), step_content_content_typeSchema]).optional(),
  content_data: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const step_contentScalarWhereInputObjectSchema: z.ZodType<Prisma.step_contentScalarWhereInput> = step_contentscalarwhereinputSchema as unknown as z.ZodType<Prisma.step_contentScalarWhereInput>;
export const step_contentScalarWhereInputObjectZodSchema = step_contentscalarwhereinputSchema;
