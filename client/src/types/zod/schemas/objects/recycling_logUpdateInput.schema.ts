import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema';
import { Enumrecycling_typeFieldUpdateOperationsInputObjectSchema as Enumrecycling_typeFieldUpdateOperationsInputObjectSchema } from './Enumrecycling_typeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { userUpdateOneRequiredWithoutRecycling_logsNestedInputObjectSchema as userUpdateOneRequiredWithoutRecycling_logsNestedInputObjectSchema } from './userUpdateOneRequiredWithoutRecycling_logsNestedInput.schema'

const makeSchema = () => z.object({
  type: z.union([recycling_typeSchema, z.lazy(() => Enumrecycling_typeFieldUpdateOperationsInputObjectSchema)]).optional(),
  amount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_by: z.lazy(() => userUpdateOneRequiredWithoutRecycling_logsNestedInputObjectSchema).optional()
}).strict();
export const recycling_logUpdateInputObjectSchema: z.ZodType<Prisma.recycling_logUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logUpdateInput>;
export const recycling_logUpdateInputObjectZodSchema = makeSchema();
