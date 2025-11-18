import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutCreated_byInputObjectSchema as eventCreateWithoutCreated_byInputObjectSchema } from './eventCreateWithoutCreated_byInput.schema';
import { eventUncheckedCreateWithoutCreated_byInputObjectSchema as eventUncheckedCreateWithoutCreated_byInputObjectSchema } from './eventUncheckedCreateWithoutCreated_byInput.schema';
import { eventCreateOrConnectWithoutCreated_byInputObjectSchema as eventCreateOrConnectWithoutCreated_byInputObjectSchema } from './eventCreateOrConnectWithoutCreated_byInput.schema';
import { eventUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema as eventUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema } from './eventUpsertWithWhereUniqueWithoutCreated_byInput.schema';
import { eventCreateManyCreated_byInputEnvelopeObjectSchema as eventCreateManyCreated_byInputEnvelopeObjectSchema } from './eventCreateManyCreated_byInputEnvelope.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema as eventUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema } from './eventUpdateWithWhereUniqueWithoutCreated_byInput.schema';
import { eventUpdateManyWithWhereWithoutCreated_byInputObjectSchema as eventUpdateManyWithWhereWithoutCreated_byInputObjectSchema } from './eventUpdateManyWithWhereWithoutCreated_byInput.schema';
import { eventScalarWhereInputObjectSchema as eventScalarWhereInputObjectSchema } from './eventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutCreated_byInputObjectSchema), z.lazy(() => eventCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => eventUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => eventCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => eventUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => eventUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => eventUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => eventUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => eventUpdateManyWithWhereWithoutCreated_byInputObjectSchema), z.lazy(() => eventUpdateManyWithWhereWithoutCreated_byInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => eventScalarWhereInputObjectSchema), z.lazy(() => eventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const eventUpdateManyWithoutCreated_byNestedInputObjectSchema: z.ZodType<Prisma.eventUpdateManyWithoutCreated_byNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateManyWithoutCreated_byNestedInput>;
export const eventUpdateManyWithoutCreated_byNestedInputObjectZodSchema = makeSchema();
