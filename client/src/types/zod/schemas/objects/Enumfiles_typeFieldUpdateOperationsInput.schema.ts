import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { files_typeSchema } from '../enums/files_type.schema'

const makeSchema = () => z.object({
  set: files_typeSchema.optional()
}).strict();
export const Enumfiles_typeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumfiles_typeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumfiles_typeFieldUpdateOperationsInput>;
export const Enumfiles_typeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
