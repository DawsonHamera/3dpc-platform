import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema';
import { printersUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema as printersUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema } from './printersUncheckedCreateNestedManyWithoutProcess_templatesInput.schema';
import { process_instancesUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema as process_instancesUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema } from './process_instancesUncheckedCreateNestedManyWithoutProcess_templatesInput.schema';
import { process_template_stepsUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema as process_template_stepsUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema } from './process_template_stepsUncheckedCreateNestedManyWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  version: z.string().max(50).optional().nullable(),
  category: process_templates_categorySchema.optional().nullable(),
  estimated_duration: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable(),
  printers: z.lazy(() => printersUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema),
  process_instances: z.lazy(() => process_instancesUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema),
  process_template_steps: z.lazy(() => process_template_stepsUncheckedCreateNestedManyWithoutProcess_templatesInputObjectSchema)
}).strict();
export const process_templatesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.process_templatesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesUncheckedCreateInput>;
export const process_templatesUncheckedCreateInputObjectZodSchema = makeSchema();
