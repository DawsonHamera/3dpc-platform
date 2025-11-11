import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesCreateNestedOneWithoutPrintersInputObjectSchema as process_templatesCreateNestedOneWithoutPrintersInputObjectSchema } from './process_templatesCreateNestedOneWithoutPrintersInput.schema';
import { filesCreateNestedOneWithoutPrintersInputObjectSchema as filesCreateNestedOneWithoutPrintersInputObjectSchema } from './filesCreateNestedOneWithoutPrintersInput.schema';
import { materialsCreateNestedOneWithoutPrintersInputObjectSchema as materialsCreateNestedOneWithoutPrintersInputObjectSchema } from './materialsCreateNestedOneWithoutPrintersInput.schema';
import { tasksCreateNestedManyWithoutPrintersInputObjectSchema as tasksCreateNestedManyWithoutPrintersInputObjectSchema } from './tasksCreateNestedManyWithoutPrintersInput.schema'

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
  tasks: z.lazy(() => tasksCreateNestedManyWithoutPrintersInputObjectSchema).optional()
}).strict();
export const printersCreateWithoutPrinter_statusesInputObjectSchema: z.ZodType<Prisma.printersCreateWithoutPrinter_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateWithoutPrinter_statusesInput>;
export const printersCreateWithoutPrinter_statusesInputObjectZodSchema = makeSchema();
