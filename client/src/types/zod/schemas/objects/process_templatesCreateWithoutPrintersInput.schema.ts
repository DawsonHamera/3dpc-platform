import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema';
import { process_instancesCreateNestedManyWithoutProcess_templatesInputObjectSchema as process_instancesCreateNestedManyWithoutProcess_templatesInputObjectSchema } from './process_instancesCreateNestedManyWithoutProcess_templatesInput.schema';
import { process_template_stepsCreateNestedManyWithoutProcess_templatesInputObjectSchema as process_template_stepsCreateNestedManyWithoutProcess_templatesInputObjectSchema } from './process_template_stepsCreateNestedManyWithoutProcess_templatesInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  version: z.string().max(50).optional().nullable(),
  category: process_templates_categorySchema.optional().nullable(),
  estimated_duration: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable(),
  process_instances: z.lazy(() => process_instancesCreateNestedManyWithoutProcess_templatesInputObjectSchema).optional(),
  process_template_steps: z.lazy(() => process_template_stepsCreateNestedManyWithoutProcess_templatesInputObjectSchema).optional()
}).strict();
export const process_templatesCreateWithoutPrintersInputObjectSchema: z.ZodType<Prisma.process_templatesCreateWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesCreateWithoutPrintersInput>;
export const process_templatesCreateWithoutPrintersInputObjectZodSchema = makeSchema();
