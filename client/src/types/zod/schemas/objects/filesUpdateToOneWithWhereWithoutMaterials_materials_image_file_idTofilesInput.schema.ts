import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema';
import { filesUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema as filesUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema } from './filesUpdateWithoutMaterials_materials_image_file_idTofilesInput.schema';
import { filesUncheckedUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema as filesUncheckedUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema } from './filesUncheckedUpdateWithoutMaterials_materials_image_file_idTofilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => filesUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema)])
}).strict();
export const filesUpdateToOneWithWhereWithoutMaterials_materials_image_file_idTofilesInputObjectSchema: z.ZodType<Prisma.filesUpdateToOneWithWhereWithoutMaterials_materials_image_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpdateToOneWithWhereWithoutMaterials_materials_image_file_idTofilesInput>;
export const filesUpdateToOneWithWhereWithoutMaterials_materials_image_file_idTofilesInputObjectZodSchema = makeSchema();
