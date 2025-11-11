import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema'

const makeSchema = () => z.object({
  set: process_templates_categorySchema.optional()
}).strict();
export const NullableEnumprocess_templates_categoryFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumprocess_templates_categoryFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumprocess_templates_categoryFieldUpdateOperationsInput>;
export const NullableEnumprocess_templates_categoryFieldUpdateOperationsInputObjectZodSchema = makeSchema();
