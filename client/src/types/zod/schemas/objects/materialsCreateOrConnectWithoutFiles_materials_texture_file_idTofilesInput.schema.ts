import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './materialsWhereUniqueInput.schema';
import { materialsCreateWithoutFiles_materials_texture_file_idTofilesInputObjectSchema as materialsCreateWithoutFiles_materials_texture_file_idTofilesInputObjectSchema } from './materialsCreateWithoutFiles_materials_texture_file_idTofilesInput.schema';
import { materialsUncheckedCreateWithoutFiles_materials_texture_file_idTofilesInputObjectSchema as materialsUncheckedCreateWithoutFiles_materials_texture_file_idTofilesInputObjectSchema } from './materialsUncheckedCreateWithoutFiles_materials_texture_file_idTofilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => materialsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => materialsCreateWithoutFiles_materials_texture_file_idTofilesInputObjectSchema), z.lazy(() => materialsUncheckedCreateWithoutFiles_materials_texture_file_idTofilesInputObjectSchema)])
}).strict();
export const materialsCreateOrConnectWithoutFiles_materials_texture_file_idTofilesInputObjectSchema: z.ZodType<Prisma.materialsCreateOrConnectWithoutFiles_materials_texture_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsCreateOrConnectWithoutFiles_materials_texture_file_idTofilesInput>;
export const materialsCreateOrConnectWithoutFiles_materials_texture_file_idTofilesInputObjectZodSchema = makeSchema();
