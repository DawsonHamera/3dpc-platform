import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema as filesCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema } from './filesCreateWithoutMaterials_materials_image_file_idTofilesInput.schema';
import { filesUncheckedCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema as filesUncheckedCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema } from './filesUncheckedCreateWithoutMaterials_materials_image_file_idTofilesInput.schema';
import { filesCreateOrConnectWithoutMaterials_materials_image_file_idTofilesInputObjectSchema as filesCreateOrConnectWithoutMaterials_materials_image_file_idTofilesInputObjectSchema } from './filesCreateOrConnectWithoutMaterials_materials_image_file_idTofilesInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => filesCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutMaterials_materials_image_file_idTofilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutMaterials_materials_image_file_idTofilesInputObjectSchema).optional(),
  connect: z.lazy(() => filesWhereUniqueInputObjectSchema).optional()
}).strict();
export const filesCreateNestedOneWithoutMaterials_materials_image_file_idTofilesInputObjectSchema: z.ZodType<Prisma.filesCreateNestedOneWithoutMaterials_materials_image_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateNestedOneWithoutMaterials_materials_image_file_idTofilesInput>;
export const filesCreateNestedOneWithoutMaterials_materials_image_file_idTofilesInputObjectZodSchema = makeSchema();
