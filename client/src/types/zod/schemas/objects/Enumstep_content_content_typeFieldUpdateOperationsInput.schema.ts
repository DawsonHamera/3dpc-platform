import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_content_content_typeSchema } from '../enums/step_content_content_type.schema'

const makeSchema = () => z.object({
  set: step_content_content_typeSchema.optional()
}).strict();
export const Enumstep_content_content_typeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumstep_content_content_typeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumstep_content_content_typeFieldUpdateOperationsInput>;
export const Enumstep_content_content_typeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
