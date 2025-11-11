import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsCreateWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsCreateManyFiles_materials_image_file_idTofilesInputEnvelopeObjectSchema as materialsCreateManyFiles_materials_image_file_idTofilesInputEnvelopeObjectSchema } from './materialsCreateManyFiles_materials_image_file_idTofilesInputEnvelope.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './materialsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => materialsCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema).array(), z.lazy(() => materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => materialsCreateManyFiles_materials_image_file_idTofilesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => materialsWhereUniqueInputObjectSchema), z.lazy(() => materialsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const materialsUncheckedCreateNestedManyWithoutFiles_materials_image_file_idTofilesInputObjectSchema: z.ZodType<Prisma.materialsUncheckedCreateNestedManyWithoutFiles_materials_image_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsUncheckedCreateNestedManyWithoutFiles_materials_image_file_idTofilesInput>;
export const materialsUncheckedCreateNestedManyWithoutFiles_materials_image_file_idTofilesInputObjectZodSchema = makeSchema();
