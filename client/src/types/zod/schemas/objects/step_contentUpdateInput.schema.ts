import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { step_content_content_typeSchema } from '../enums/step_content_content_type.schema';
import { Enumstep_content_content_typeFieldUpdateOperationsInputObjectSchema as Enumstep_content_content_typeFieldUpdateOperationsInputObjectSchema } from './Enumstep_content_content_typeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { stepsUpdateOneRequiredWithoutStep_contentNestedInputObjectSchema as stepsUpdateOneRequiredWithoutStep_contentNestedInputObjectSchema } from './stepsUpdateOneRequiredWithoutStep_contentNestedInput.schema'

const makeSchema = () => z.object({
  content_order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_type: z.union([step_content_content_typeSchema, z.lazy(() => Enumstep_content_content_typeFieldUpdateOperationsInputObjectSchema)]).optional(),
  content_data: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  steps: z.lazy(() => stepsUpdateOneRequiredWithoutStep_contentNestedInputObjectSchema).optional()
}).strict();
export const step_contentUpdateInputObjectSchema: z.ZodType<Prisma.step_contentUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentUpdateInput>;
export const step_contentUpdateInputObjectZodSchema = makeSchema();
