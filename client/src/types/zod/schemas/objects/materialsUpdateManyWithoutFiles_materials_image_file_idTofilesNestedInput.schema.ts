import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsCreateWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsUpsertWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsUpsertWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsUpsertWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsCreateManyFiles_materials_image_file_idTofilesInputEnvelopeObjectSchema as materialsCreateManyFiles_materials_image_file_idTofilesInputEnvelopeObjectSchema } from './materialsCreateManyFiles_materials_image_file_idTofilesInputEnvelope.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './materialsWhereUniqueInput.schema';
import { materialsUpdateWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsUpdateWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsUpdateWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsUpdateManyWithWhereWithoutFiles_materials_image_file_idTofilesInputObjectSchema as materialsUpdateManyWithWhereWithoutFiles_materials_image_file_idTofilesInputObjectSchema } from './materialsUpdateManyWithWhereWithoutFiles_materials_image_file_idTofilesInput.schema';
import { materialsScalarWhereInputObjectSchema as materialsScalarWhereInputObjectSchema } from './materialsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => materialsCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema).array(), z.lazy(() => materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsUncheckedCreateWithoutFiles_materials_image_file_idTofilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsCreateOrConnectWithoutFiles_materials_image_file_idTofilesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => materialsUpsertWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsUpsertWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => materialsCreateManyFiles_materials_image_file_idTofilesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => materialsWhereUniqueInputObjectSchema), z.lazy(() => materialsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => materialsWhereUniqueInputObjectSchema), z.lazy(() => materialsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => materialsWhereUniqueInputObjectSchema), z.lazy(() => materialsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => materialsWhereUniqueInputObjectSchema), z.lazy(() => materialsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => materialsUpdateWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsUpdateWithWhereUniqueWithoutFiles_materials_image_file_idTofilesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => materialsUpdateManyWithWhereWithoutFiles_materials_image_file_idTofilesInputObjectSchema), z.lazy(() => materialsUpdateManyWithWhereWithoutFiles_materials_image_file_idTofilesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => materialsScalarWhereInputObjectSchema), z.lazy(() => materialsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const materialsUpdateManyWithoutFiles_materials_image_file_idTofilesNestedInputObjectSchema: z.ZodType<Prisma.materialsUpdateManyWithoutFiles_materials_image_file_idTofilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsUpdateManyWithoutFiles_materials_image_file_idTofilesNestedInput>;
export const materialsUpdateManyWithoutFiles_materials_image_file_idTofilesNestedInputObjectZodSchema = makeSchema();
