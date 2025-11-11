import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesArgsObjectSchema as process_templatesArgsObjectSchema } from './process_templatesArgs.schema';
import { filesArgsObjectSchema as filesArgsObjectSchema } from './filesArgs.schema';
import { materialsArgsObjectSchema as materialsArgsObjectSchema } from './materialsArgs.schema';
import { printer_statusesArgsObjectSchema as printer_statusesArgsObjectSchema } from './printer_statusesArgs.schema';
import { tasksFindManySchema as tasksFindManySchema } from '../findManytasks.schema';
import { PrintersCountOutputTypeArgsObjectSchema as PrintersCountOutputTypeArgsObjectSchema } from './PrintersCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  status_id: z.boolean().optional(),
  name: z.boolean().optional(),
  location: z.boolean().optional(),
  owner: z.boolean().optional(),
  details: z.boolean().optional(),
  image_id: z.boolean().optional(),
  material_id: z.boolean().optional(),
  process_template_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  process_templates: z.union([z.boolean(), z.lazy(() => process_templatesArgsObjectSchema)]).optional(),
  files: z.union([z.boolean(), z.lazy(() => filesArgsObjectSchema)]).optional(),
  materials: z.union([z.boolean(), z.lazy(() => materialsArgsObjectSchema)]).optional(),
  printer_statuses: z.union([z.boolean(), z.lazy(() => printer_statusesArgsObjectSchema)]).optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => PrintersCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const printersSelectObjectSchema: z.ZodType<Prisma.printersSelect> = makeSchema() as unknown as z.ZodType<Prisma.printersSelect>;
export const printersSelectObjectZodSchema = makeSchema();
