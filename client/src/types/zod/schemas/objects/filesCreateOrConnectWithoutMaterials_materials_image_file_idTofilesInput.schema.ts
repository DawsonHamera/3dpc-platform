import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema as filesCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema } from './filesCreateWithoutMaterials_materials_image_file_idTofilesInput.schema';
import { filesUncheckedCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema as filesUncheckedCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema } from './filesUncheckedCreateWithoutMaterials_materials_image_file_idTofilesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => filesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => filesCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema)])
}).strict();
export const filesCreateOrConnectWithoutMaterials_materials_image_file_idTofilesInputObjectSchema: z.ZodType<Prisma.filesCreateOrConnectWithoutMaterials_materials_image_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateOrConnectWithoutMaterials_materials_image_file_idTofilesInput>;
export const filesCreateOrConnectWithoutMaterials_materials_image_file_idTofilesInputObjectZodSchema = makeSchema();
