import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema';
import { Enumprocess_logs_levelFieldUpdateOperationsInputObjectSchema as Enumprocess_logs_levelFieldUpdateOperationsInputObjectSchema } from './Enumprocess_logs_levelFieldUpdateOperationsInput.schema';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema';
import { Enumprocess_logs_actionFieldUpdateOperationsInputObjectSchema as Enumprocess_logs_actionFieldUpdateOperationsInputObjectSchema } from './Enumprocess_logs_actionFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  process_instance_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  step_order: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  level: z.union([process_logs_levelSchema, z.lazy(() => Enumprocess_logs_levelFieldUpdateOperationsInputObjectSchema)]).optional(),
  action: z.union([process_logs_actionSchema, z.lazy(() => Enumprocess_logs_actionFieldUpdateOperationsInputObjectSchema)]).optional(),
  message: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  deleted_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const process_logsUncheckedUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_logsUncheckedUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsUncheckedUpdateWithoutUsersInput>;
export const process_logsUncheckedUpdateWithoutUsersInputObjectZodSchema = makeSchema();
