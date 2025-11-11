import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './materialsWhereUniqueInput.schema';
import { materialsUpdateWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsUpdateWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsUpdateWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsUncheckedUpdateWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsUncheckedUpdateWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsUncheckedUpdateWithoutFiles_materials_image_file_idTofilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => materialsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => materialsUpdateWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsUncheckedUpdateWithoutFiles_materials_image_file_idTofilesInputObjectSchema)])
}).strict();
export const materialsUpdateWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectSchema: z.ZodType<Prisma.materialsUpdateWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsUpdateWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInput>;
export const materialsUpdateWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectZodSchema = makeSchema();
