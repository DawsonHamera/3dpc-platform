import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateWithoutUsersInputObjectSchema as eventCreateWithoutUsersInputObjectSchema } from './eventCreateWithoutUsersInput.schema';
import { eventUncheckedCreateWithoutUsersInputObjectSchema as eventUncheckedCreateWithoutUsersInputObjectSchema } from './eventUncheckedCreateWithoutUsersInput.schema';
import { eventCreateOrConnectWithoutUsersInputObjectSchema as eventCreateOrConnectWithoutUsersInputObjectSchema } from './eventCreateOrConnectWithoutUsersInput.schema';
import { eventUpsertWithWhereUniqueWithoutUsersInputObjectSchema as eventUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './eventUpsertWithWhereUniqueWithoutUsersInput.schema';
import { eventCreateManyUsersInputEnvelopeObjectSchema as eventCreateManyUsersInputEnvelopeObjectSchema } from './eventCreateManyUsersInputEnvelope.schema';
import { eventWhereUniqueInputObjectSchema as eventWhereUniqueInputObjectSchema } from './eventWhereUniqueInput.schema';
import { eventUpdateWithWhereUniqueWithoutUsersInputObjectSchema as eventUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './eventUpdateWithWhereUniqueWithoutUsersInput.schema';
import { eventUpdateManyWithWhereWithoutUsersInputObjectSchema as eventUpdateManyWithWhereWithoutUsersInputObjectSchema } from './eventUpdateManyWithWhereWithoutUsersInput.schema';
import { eventScalarWhereInputObjectSchema as eventScalarWhereInputObjectSchema } from './eventScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventCreateWithoutUsersInputObjectSchema), z.lazy(() => eventCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => eventUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => eventUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => eventCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => eventUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => eventUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventCreateManyUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => eventWhereUniqueInputObjectSchema), z.lazy(() => eventWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => eventUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => eventUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => eventUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => eventUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => eventScalarWhereInputObjectSchema), z.lazy(() => eventScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const eventUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.eventUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.eventUpdateManyWithoutUsersNestedInput>;
export const eventUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
