import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutFilesInputObjectSchema as eventCreateWithoutFilesInputObjectSchema } from './eventCreateWithoutFilesInput.schema';
import { eventUncheckedCreateWithoutFilesInputObjectSchema as eventUncheckedCreateWithoutFilesInputObjectSchema } from './eventUncheckedCreateWithoutFilesInput.schema';
import { eventCreateOrConnectWithoutFilesInputObjectSchema as eventCreateOrConnectWithoutFilesInputObjectSchema } from './eventCreateOrConnectWithoutFilesInput.schema';
import { eventUpsertWithWhereUniqueWithoutFilesInputObjectSchema as eventUpsertWithWhereUniqueWithoutFilesInputObjectSchema } from './eventUpsertWithWhereUniqueWithoutFilesInput.schema';
import { eventCreateManyFilesInputEnvelopeObjectSchema as eventCreateManyFilesInputEnvelopeObjectSchema } from './eventCreateManyFilesInputEnvelope.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithWhereUniqueWithoutFilesInputObjectSchema as eventUpdateWithWhereUniqueWithoutFilesInputObjectSchema } from './eventUpdateWithWhereUniqueWithoutFilesInput.schema';
import { eventUpdateManyWithWhereWithoutFilesInputObjectSchema as eventUpdateManyWithWhereWithoutFilesInputObjectSchema } from './eventUpdateManyWithWhereWithoutFilesInput.schema';
import { eventScalarWhereInputObjectSchema as eventScalarWhereInputObjectSchema } from './eventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutFilesInputObjectSchema), z.lazy(() => eventCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => eventUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => eventCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => eventUpsertWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => eventUpsertWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventCreateManyFilesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => eventUpdateWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => eventUpdateWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => eventUpdateManyWithWhereWithoutFilesInputObjectSchema), z.lazy(() => eventUpdateManyWithWhereWithoutFilesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => eventScalarWhereInputObjectSchema), z.lazy(() => eventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const eventUpdateManyWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.eventUpdateManyWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateManyWithoutFilesNestedInput>;
export const eventUpdateManyWithoutFilesNestedInputObjectZodSchema = makeSchema();
