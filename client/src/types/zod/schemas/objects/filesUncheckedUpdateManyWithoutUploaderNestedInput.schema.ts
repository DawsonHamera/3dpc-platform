import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateWithoutUploaderInputObjectSchema as filesCreateWithoutUploaderInputObjectSchema } from './filesCreateWithoutUploaderInput.schema';
import { filesUncheckedCreateWithoutUploaderInputObjectSchema as filesUncheckedCreateWithoutUploaderInputObjectSchema } from './filesUncheckedCreateWithoutUploaderInput.schema';
import { filesCreateOrConnectWithoutUploaderInputObjectSchema as filesCreateOrConnectWithoutUploaderInputObjectSchema } from './filesCreateOrConnectWithoutUploaderInput.schema';
import { filesUpsertWithWhereUniqueWithoutUploaderInputObjectSchema as filesUpsertWithWhereUniqueWithoutUploaderInputObjectSchema } from './filesUpsertWithWhereUniqueWithoutUploaderInput.schema';
import { filesCreateManyUploaderInputEnvelopeObjectSchema as filesCreateManyUploaderInputEnvelopeObjectSchema } from './filesCreateManyUploaderInputEnvelope.schema';
import { filesWhereUniqueInputObjectSchema as filesWhereUniqueInputObjectSchema } from './filesWhereUniqueInput.schema';
import { filesUpdateWithWhereUniqueWithoutUploaderInputObjectSchema as filesUpdateWithWhereUniqueWithoutUploaderInputObjectSchema } from './filesUpdateWithWhereUniqueWithoutUploaderInput.schema';
import { filesUpdateManyWithWhereWithoutUploaderInputObjectSchema as filesUpdateManyWithWhereWithoutUploaderInputObjectSchema } from './filesUpdateManyWithWhereWithoutUploaderInput.schema';
import { filesScalarWhereInputObjectSchema as filesScalarWhereInputObjectSchema } from './filesScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => filesCreateWithoutUploaderInputObjectSchema), z.lazy(() => filesCreateWithoutUploaderInputObjectSchema).array(), z.lazy(() => filesUncheckedCreateWithoutUploaderInputObjectSchema), z.lazy(() => filesUncheckedCreateWithoutUploaderInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => filesCreateOrConnectWithoutUploaderInputObjectSchema), z.lazy(() => filesCreateOrConnectWithoutUploaderInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => filesUpsertWithWhereUniqueWithoutUploaderInputObjectSchema), z.lazy(() => filesUpsertWithWhereUniqueWithoutUploaderInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => filesCreateManyUploaderInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => filesWhereUniqueInputObjectSchema), z.lazy(() => filesWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => filesWhereUniqueInputObjectSchema), z.lazy(() => filesWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => filesWhereUniqueInputObjectSchema), z.lazy(() => filesWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => filesWhereUniqueInputObjectSchema), z.lazy(() => filesWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => filesUpdateWithWhereUniqueWithoutUploaderInputObjectSchema), z.lazy(() => filesUpdateWithWhereUniqueWithoutUploaderInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => filesUpdateManyWithWhereWithoutUploaderInputObjectSchema), z.lazy(() => filesUpdateManyWithWhereWithoutUploaderInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => filesScalarWhereInputObjectSchema), z.lazy(() => filesScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const filesUncheckedUpdateManyWithoutUploaderNestedInputObjectSchema: z.ZodType<Prisma.filesUncheckedUpdateManyWithoutUploaderNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.filesUncheckedUpdateManyWithoutUploaderNestedInput>;
export const filesUncheckedUpdateManyWithoutUploaderNestedInputObjectZodSchema = makeSchema();
