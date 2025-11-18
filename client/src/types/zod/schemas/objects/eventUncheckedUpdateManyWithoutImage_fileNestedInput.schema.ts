import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutImage_fileInputObjectSchema as eventCreateWithoutImage_fileInputObjectSchema } from './eventCreateWithoutImage_fileInput.schema';
import { eventUncheckedCreateWithoutImage_fileInputObjectSchema as eventUncheckedCreateWithoutImage_fileInputObjectSchema } from './eventUncheckedCreateWithoutImage_fileInput.schema';
import { eventCreateOrConnectWithoutImage_fileInputObjectSchema as eventCreateOrConnectWithoutImage_fileInputObjectSchema } from './eventCreateOrConnectWithoutImage_fileInput.schema';
import { eventUpsertWithWhereUniqueWithoutImage_fileInputObjectSchema as eventUpsertWithWhereUniqueWithoutImage_fileInputObjectSchema } from './eventUpsertWithWhereUniqueWithoutImage_fileInput.schema';
import { eventCreateManyImage_fileInputEnvelopeObjectSchema as eventCreateManyImage_fileInputEnvelopeObjectSchema } from './eventCreateManyImage_fileInputEnvelope.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithWhereUniqueWithoutImage_fileInputObjectSchema as eventUpdateWithWhereUniqueWithoutImage_fileInputObjectSchema } from './eventUpdateWithWhereUniqueWithoutImage_fileInput.schema';
import { eventUpdateManyWithWhereWithoutImage_fileInputObjectSchema as eventUpdateManyWithWhereWithoutImage_fileInputObjectSchema } from './eventUpdateManyWithWhereWithoutImage_fileInput.schema';
import { eventScalarWhereInputObjectSchema as eventScalarWhereInputObjectSchema } from './eventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutImage_fileInputObjectSchema), z.lazy(() => eventCreateWithoutImage_fileInputObjectSchema).array(), z.lazy(() => eventUncheckedCreateWithoutImage_fileInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutImage_fileInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventCreateOrConnectWithoutImage_fileInputObjectSchema), z.lazy(() => eventCreateOrConnectWithoutImage_fileInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => eventUpsertWithWhereUniqueWithoutImage_fileInputObjectSchema), z.lazy(() => eventUpsertWithWhereUniqueWithoutImage_fileInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventCreateManyImage_fileInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => eventUpdateWithWhereUniqueWithoutImage_fileInputObjectSchema), z.lazy(() => eventUpdateWithWhereUniqueWithoutImage_fileInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => eventUpdateManyWithWhereWithoutImage_fileInputObjectSchema), z.lazy(() => eventUpdateManyWithWhereWithoutImage_fileInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => eventScalarWhereInputObjectSchema), z.lazy(() => eventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const eventUncheckedUpdateManyWithoutImage_fileNestedInputObjectSchema: z.ZodType<Prisma.eventUncheckedUpdateManyWithoutImage_fileNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUncheckedUpdateManyWithoutImage_fileNestedInput>;
export const eventUncheckedUpdateManyWithoutImage_fileNestedInputObjectZodSchema = makeSchema();
