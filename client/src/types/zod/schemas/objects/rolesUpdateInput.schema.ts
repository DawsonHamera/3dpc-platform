import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { usersUpdateManyWithoutRoleNestedInputObjectSchema as usersUpdateManyWithoutRoleNestedInputObjectSchema } from './usersUpdateManyWithoutRoleNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  users: z.lazy(() => usersUpdateManyWithoutRoleNestedInputObjectSchema).optional()
}).strict();
export const rolesUpdateInputObjectSchema: z.ZodType<Prisma.rolesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesUpdateInput>;
export const rolesUpdateInputObjectZodSchema = makeSchema();
