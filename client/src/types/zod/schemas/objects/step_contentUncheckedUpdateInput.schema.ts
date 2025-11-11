import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { step_content_content_typeSchema } from '../enums/step_content_content_type.schema';
import { Enumstep_content_content_typeFieldUpdateOperationsInputObjectSchema as Enumstep_content_content_typeFieldUpdateOperationsInputObjectSchema } from './Enumstep_content_content_typeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  step_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_type: z.union([step_content_content_typeSchema, z.lazy(() => Enumstep_content_content_typeFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_data: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const step_contentUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.step_contentUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentUncheckedUpdateInput>;
export const step_contentUncheckedUpdateInputObjectZodSchema = makeSchema();
