import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsCreateManyFiles_materials_texture_file_idTofilesInputObjectSchema as materialsCreateManyFiles_materials_texture_file_idTofilesInputObjectSchema } from './materialsCreateManyFiles_materials_texture_file_idTofilesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => materialsCreateManyFiles_materials_texture_file_idTofilesInputObjectSchema), z.lazy(() => materialsCreateManyFiles_materials_texture_file_idTofilesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const materialsCreateManyFiles_materials_texture_file_idTofilesInputEnvelopeObjectSchema: z.ZodType<Prisma.materialsCreateManyFiles_materials_texture_file_idTofilesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.materialsCreateManyFiles_materials_texture_file_idTofilesInputEnvelope>;
export const materialsCreateManyFiles_materials_texture_file_idTofilesInputEnvelopeObjectZodSchema = makeSchema();
