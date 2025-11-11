import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesUpdateWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesUncheckedUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesUncheckedUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesUncheckedUpdateWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesCreateWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesUncheckedCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesUncheckedCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesUncheckedCreateWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => filesUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema)]),
  create: z.union([z.lazy(() => filesCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema)]),
  where: z.lazy(() => filesWhereInputObjectSchema).optional()
}).strict();
export const filesUpsertWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema: z.ZodType<Prisma.filesUpsertWithoutMaterials_materials_texture_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpsertWithoutMaterials_materials_texture_file_idTofilesInput>;
export const filesUpsertWithoutMaterials_materials_texture_file_idTofilesInputObjectZodSchema = makeSchema();
