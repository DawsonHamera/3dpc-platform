import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateWithoutFilesInputObjectSchema as eventsCreateWithoutFilesInputObjectSchema } from './eventsCreateWithoutFilesInput.schema';
import { eventsUncheckedCreateWithoutFilesInputObjectSchema as eventsUncheckedCreateWithoutFilesInputObjectSchema } from './eventsUncheckedCreateWithoutFilesInput.schema';
import { eventsCreateOrConnectWithoutFilesInputObjectSchema as eventsCreateOrConnectWithoutFilesInputObjectSchema } from './eventsCreateOrConnectWithoutFilesInput.schema';
import { eventsUpsertWithWhereUniqueWithoutFilesInputObjectSchema as eventsUpsertWithWhereUniqueWithoutFilesInputObjectSchema } from './eventsUpsertWithWhereUniqueWithoutFilesInput.schema';
import { eventsCreateManyFilesInputEnvelopeObjectSchema as eventsCreateManyFilesInputEnvelopeObjectSchema } from './eventsCreateManyFilesInputEnvelope.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsUpdateWithWhereUniqueWithoutFilesInputObjectSchema as eventsUpdateWithWhereUniqueWithoutFilesInputObjectSchema } from './eventsUpdateWithWhereUniqueWithoutFilesInput.schema';
import { eventsUpdateManyWithWhereWithoutFilesInputObjectSchema as eventsUpdateManyWithWhereWithoutFilesInputObjectSchema } from './eventsUpdateManyWithWhereWithoutFilesInput.schema';
import { eventsScalarWhereInputObjectSchema as eventsScalarWhereInputObjectSchema } from './eventsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventsCreateWithoutFilesInputObjectSchema), z.lazy(() => eventsCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => eventsUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventsCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => eventsCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => eventsUpsertWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => eventsUpsertWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventsCreateManyFilesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => eventsUpdateWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => eventsUpdateWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => eventsUpdateManyWithWhereWithoutFilesInputObjectSchema), z.lazy(() => eventsUpdateManyWithWhereWithoutFilesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => eventsScalarWhereInputObjectSchema), z.lazy(() => eventsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const eventsUpdateManyWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.eventsUpdateManyWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUpdateManyWithoutFilesNestedInput>;
export const eventsUpdateManyWithoutFilesNestedInputObjectZodSchema = makeSchema();
