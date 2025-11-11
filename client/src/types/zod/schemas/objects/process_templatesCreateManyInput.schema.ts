import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  version: z.string().max(50).optional().nullable(),
  category: process_templates_categorySchema.optional().nullable(),
  estimated_duration: z.number().int().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();
export const process_templatesCreateManyInputObjectSchema: z.ZodType<Prisma.process_templatesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesCreateManyInput>;
export const process_templatesCreateManyInputObjectZodSchema = makeSchema();
