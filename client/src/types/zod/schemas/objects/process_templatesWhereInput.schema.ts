import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { Enumprocess_templates_categoryNullableFilterObjectSchema as Enumprocess_templates_categoryNullableFilterObjectSchema } from './Enumprocess_templates_categoryNullableFilter.schema';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { PrintersListRelationFilterObjectSchema as PrintersListRelationFilterObjectSchema } from './PrintersListRelationFilter.schema';
import { Process_instancesListRelationFilterObjectSchema as Process_instancesListRelationFilterObjectSchema } from './Process_instancesListRelationFilter.schema';
import { Process_template_stepsListRelationFilterObjectSchema as Process_template_stepsListRelationFilterObjectSchema } from './Process_template_stepsListRelationFilter.schema'

const process_templateswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => process_templatesWhereInputObjectSchema), z.lazy(() => process_templatesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_templatesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_templatesWhereInputObjectSchema), z.lazy(() => process_templatesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  version: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  category: z.union([z.lazy(() => Enumprocess_templates_categoryNullableFilterObjectSchema), process_templates_categorySchema]).optional().nullable(),
  estimated_duration: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  printers: z.lazy(() => PrintersListRelationFilterObjectSchema).optional(),
  process_instances: z.lazy(() => Process_instancesListRelationFilterObjectSchema).optional(),
  process_template_steps: z.lazy(() => Process_template_stepsListRelationFilterObjectSchema).optional()
}).strict();
export const process_templatesWhereInputObjectSchema: z.ZodType<Prisma.process_templatesWhereInput> = process_templateswhereinputSchema as unknown as z.ZodType<Prisma.process_templatesWhereInput>;
export const process_templatesWhereInputObjectZodSchema = process_templateswhereinputSchema;
