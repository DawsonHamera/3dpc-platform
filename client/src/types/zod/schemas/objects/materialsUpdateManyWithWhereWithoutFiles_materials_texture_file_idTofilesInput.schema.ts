import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsScalarWhereInputObjectSchema as materialsScalarWhereInputObjectSchema } from './materialsScalarWhereInput.schema';
import { materialsUpdateManyMutationInputObjectSchema as materialsUpdateManyMutationInputObjectSchema } from './materialsUpdateManyMutationInput.schema';
import { materialsUncheckedUpdateManyWithoutFiles_materials_texture_file_idTofilesInputObjectSchema as materialsUncheckedUpdateManyWithoutFiles_materials_texture_file_idTofilesInputObjectSchema } from './materialsUncheckedUpdateManyWithoutFiles_materials_texture_file_idTofilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => materialsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => materialsUpdateManyMutationInputObjectSchema), z.lazy(() => materialsUncheckedUpdateManyWithoutFiles_materials_texture_file_idTofilesInputObjectSchema)])
}).strict();
export const materialsUpdateManyWithWhereWithoutFiles_materials_texture_file_idTofilesInputObjectSchema: z.ZodType<Prisma.materialsUpdateManyWithWhereWithoutFiles_materials_texture_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsUpdateManyWithWhereWithoutFiles_materials_texture_file_idTofilesInput>;
export const materialsUpdateManyWithWhereWithoutFiles_materials_texture_file_idTofilesInputObjectZodSchema = makeSchema();
