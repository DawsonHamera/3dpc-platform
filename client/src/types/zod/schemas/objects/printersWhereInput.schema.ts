import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Process_templatesNullableScalarRelationFilterObjectSchema as Process_templatesNullableScalarRelationFilterObjectSchema } from './Process_templatesNullableScalarRelationFilter.schema';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema';
import { FilesNullableScalarRelationFilterObjectSchema as FilesNullableScalarRelationFilterObjectSchema } from './FilesNullableScalarRelationFilter.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema';
import { MaterialsNullableScalarRelationFilterObjectSchema as MaterialsNullableScalarRelationFilterObjectSchema } from './MaterialsNullableScalarRelationFilter.schema';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './materialsWhereInput.schema';
import { Printer_statusesScalarRelationFilterObjectSchema as Printer_statusesScalarRelationFilterObjectSchema } from './Printer_statusesScalarRelationFilter.schema';
import { printer_statusesWhereInputObjectSchema as printer_statusesWhereInputObjectSchema } from './printer_statusesWhereInput.schema';
import { TasksListRelationFilterObjectSchema as TasksListRelationFilterObjectSchema } from './TasksListRelationFilter.schema'

const printerswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => printersWhereInputObjectSchema), z.lazy(() => printersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => printersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => printersWhereInputObjectSchema), z.lazy(() => printersWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  location: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  owner: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  image_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  material_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  process_template_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  process_templates: z.union([z.lazy(() => Process_templatesNullableScalarRelationFilterObjectSchema), z.lazy(() => process_templatesWhereInputObjectSchema)]).optional(),
  files: z.union([z.lazy(() => FilesNullableScalarRelationFilterObjectSchema), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  materials: z.union([z.lazy(() => MaterialsNullableScalarRelationFilterObjectSchema), z.lazy(() => materialsWhereInputObjectSchema)]).optional(),
  printer_statuses: z.union([z.lazy(() => Printer_statusesScalarRelationFilterObjectSchema), z.lazy(() => printer_statusesWhereInputObjectSchema)]).optional(),
  tasks: z.lazy(() => TasksListRelationFilterObjectSchema).optional()
}).strict();
export const printersWhereInputObjectSchema: z.ZodType<Prisma.printersWhereInput> = printerswhereinputSchema as unknown as z.ZodType<Prisma.printersWhereInput>;
export const printersWhereInputObjectZodSchema = printerswhereinputSchema;
