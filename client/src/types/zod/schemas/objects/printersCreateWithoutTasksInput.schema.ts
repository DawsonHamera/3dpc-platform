import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesCreateNestedOneWithoutPrintersInputObjectSchema as process_templatesCreateNestedOneWithoutPrintersInputObjectSchema } from './process_templatesCreateNestedOneWithoutPrintersInput.schema';
import { filesCreateNestedOneWithoutPrintersInputObjectSchema as filesCreateNestedOneWithoutPrintersInputObjectSchema } from './filesCreateNestedOneWithoutPrintersInput.schema';
import { materialsCreateNestedOneWithoutPrintersInputObjectSchema as materialsCreateNestedOneWithoutPrintersInputObjectSchema } from './materialsCreateNestedOneWithoutPrintersInput.schema';
import { printer_statusesCreateNestedOneWithoutPrintersInputObjectSchema as printer_statusesCreateNestedOneWithoutPrintersInputObjectSchema } from './printer_statusesCreateNestedOneWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  location: z.string().max(255).optional().nullable(),
  owner: z.string().max(255).optional().nullable(),
  details: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  process_templates: z.lazy(() => process_templatesCreateNestedOneWithoutPrintersInputObjectSchema).optional(),
  files: z.lazy(() => filesCreateNestedOneWithoutPrintersInputObjectSchema).optional(),
  materials: z.lazy(() => materialsCreateNestedOneWithoutPrintersInputObjectSchema).optional(),
  printer_statuses: z.lazy(() => printer_statusesCreateNestedOneWithoutPrintersInputObjectSchema)
}).strict();
export const printersCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.printersCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateWithoutTasksInput>;
export const printersCreateWithoutTasksInputObjectZodSchema = makeSchema();
