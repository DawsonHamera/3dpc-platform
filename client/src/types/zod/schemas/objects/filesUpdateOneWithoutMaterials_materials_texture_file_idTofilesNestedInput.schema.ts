import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesCreateWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesUncheckedCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesUncheckedCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesUncheckedCreateWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesCreateOrConnectWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesCreateOrConnectWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesCreateOrConnectWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesUpsertWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesUpsertWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesUpsertWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesUpdateToOneWithWhereWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesUpdateToOneWithWhereWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesUpdateToOneWithWhereWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesUpdateWithoutMaterials_materials_texture_file_idTofilesInput.schema';
import { filesUncheckedUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema as filesUncheckedUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema } from './filesUncheckedUpdateWithoutMaterials_materials_texture_file_idTofilesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => filesCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => filesCreateOrConnectWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema).optional(),
  upsert: z.lazy(() => filesUpsertWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => filesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => filesUpdateToOneWithWhereWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema), z.lazy(() => filesUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema), z.lazy(() => filesUncheckedUpdateWithoutMaterials_materials_texture_file_idTofilesInputObjectSchema)]).optional()
}).strict();
export const filesUpdateOneWithoutMaterials_materials_texture_file_idTofilesNestedInputObjectSchema: z.ZodType<Prisma.filesUpdateOneWithoutMaterials_materials_texture_file_idTofilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUpdateOneWithoutMaterials_materials_texture_file_idTofilesNestedInput>;
export const filesUpdateOneWithoutMaterials_materials_texture_file_idTofilesNestedInputObjectZodSchema = makeSchema();
