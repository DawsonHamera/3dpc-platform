import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableBoolFieldUpdateOperationsInputObjectSchema as NullableBoolFieldUpdateOperationsInputObjectSchema } from './NullableBoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { process_templatesUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectSchema as process_templatesUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectSchema } from './process_templatesUpdateOneRequiredWithoutProcess_template_stepsNestedInput.schema';
import { stepsUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectSchema as stepsUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectSchema } from './stepsUpdateOneRequiredWithoutProcess_template_stepsNestedInput.schema'

const makeSchema = () => z.object({
  step_order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  is_required: z.union([z.boolean(), z.lazy(() => NullableBoolFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  process_templates: z.lazy(() => process_templatesUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectSchema).optional(),
  steps: z.lazy(() => stepsUpdateOneRequiredWithoutProcess_template_stepsNestedInputObjectSchema).optional()
}).strict();
export const process_template_stepsUpdateInputObjectSchema: z.ZodType<Prisma.process_template_stepsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUpdateInput>;
export const process_template_stepsUpdateInputObjectZodSchema = makeSchema();
