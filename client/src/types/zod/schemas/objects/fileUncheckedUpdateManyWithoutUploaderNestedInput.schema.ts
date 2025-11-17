import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileCreateWithoutUploaderInputObjectSchema as fileCreateWithoutUploaderInputObjectSchema } from './fileCreateWithoutUploaderInput.schema';
import { fileUncheckedCreateWithoutUploaderInputObjectSchema as fileUncheckedCreateWithoutUploaderInputObjectSchema } from './fileUncheckedCreateWithoutUploaderInput.schema';
import { fileCreateOrConnectWithoutUploaderInputObjectSchema as fileCreateOrConnectWithoutUploaderInputObjectSchema } from './fileCreateOrConnectWithoutUploaderInput.schema';
import { fileUpsertWithWhereUniqueWithoutUploaderInputObjectSchema as fileUpsertWithWhereUniqueWithoutUploaderInputObjectSchema } from './fileUpsertWithWhereUniqueWithoutUploaderInput.schema';
import { fileCreateManyUploaderInputEnvelopeObjectSchema as fileCreateManyUploaderInputEnvelopeObjectSchema } from './fileCreateManyUploaderInputEnvelope.schema';
import { fileWhereUniqueInputObjectSchema as fileWhereUniqueInputObjectSchema } from './fileWhereUniqueInput.schema';
import { fileUpdateWithWhereUniqueWithoutUploaderInputObjectSchema as fileUpdateWithWhereUniqueWithoutUploaderInputObjectSchema } from './fileUpdateWithWhereUniqueWithoutUploaderInput.schema';
import { fileUpdateManyWithWhereWithoutUploaderInputObjectSchema as fileUpdateManyWithWhereWithoutUploaderInputObjectSchema } from './fileUpdateManyWithWhereWithoutUploaderInput.schema';
import { fileScalarWhereInputObjectSchema as fileScalarWhereInputObjectSchema } from './fileScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => fileCreateWithoutUploaderInputObjectSchema), z.lazy(() => fileCreateWithoutUploaderInputObjectSchema).array(), z.lazy(() => fileUncheckedCreateWithoutUploaderInputObjectSchema), z.lazy(() => fileUncheckedCreateWithoutUploaderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => fileCreateOrConnectWithoutUploaderInputObjectSchema), z.lazy(() => fileCreateOrConnectWithoutUploaderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => fileUpsertWithWhereUniqueWithoutUploaderInputObjectSchema), z.lazy(() => fileUpsertWithWhereUniqueWithoutUploaderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => fileCreateManyUploaderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => fileWhereUniqueInputObjectSchema), z.lazy(() => fileWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => fileWhereUniqueInputObjectSchema), z.lazy(() => fileWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => fileWhereUniqueInputObjectSchema), z.lazy(() => fileWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => fileWhereUniqueInputObjectSchema), z.lazy(() => fileWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => fileUpdateWithWhereUniqueWithoutUploaderInputObjectSchema), z.lazy(() => fileUpdateWithWhereUniqueWithoutUploaderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => fileUpdateManyWithWhereWithoutUploaderInputObjectSchema), z.lazy(() => fileUpdateManyWithWhereWithoutUploaderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => fileScalarWhereInputObjectSchema), z.lazy(() => fileScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const fileUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema: z.ZodType<Prisma.fileUncheckedUpdateManyWithoutUploaderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.fileUncheckedUpdateManyWithoutUploaderNestedInput>;
export const fileUncheckedUpdateManyWithoutUploaderNestedInputObjectZodSchema = makeSchema();
