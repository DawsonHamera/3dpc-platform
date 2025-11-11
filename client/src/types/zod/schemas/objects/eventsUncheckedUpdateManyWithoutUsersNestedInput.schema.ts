import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateWithoutUsersInputObjectSchema as eventsCreateWithoutUsersInputObjectSchema } from './eventsCreateWithoutUsersInput.schema';
import { eventsUncheckedCreateWithoutUsersInputObjectSchema as eventsUncheckedCreateWithoutUsersInputObjectSchema } from './eventsUncheckedCreateWithoutUsersInput.schema';
import { eventsCreateOrConnectWithoutUsersInputObjectSchema as eventsCreateOrConnectWithoutUsersInputObjectSchema } from './eventsCreateOrConnectWithoutUsersInput.schema';
import { eventsUpsertWithWhereUniqueWithoutUsersInputObjectSchema as eventsUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './eventsUpsertWithWhereUniqueWithoutUsersInput.schema';
import { eventsCreateManyUsersInputEnvelopeObjectSchema as eventsCreateManyUsersInputEnvelopeObjectSchema } from './eventsCreateManyUsersInputEnvelope.schema';
import { eventsWhereUniqueInputObjectSchema as eventsWhereUniqueInputObjectSchema } from './eventsWhereUniqueInput.schema';
import { eventsUpdateWithWhereUniqueWithoutUsersInputObjectSchema as eventsUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './eventsUpdateWithWhereUniqueWithoutUsersInput.schema';
import { eventsUpdateManyWithWhereWithoutUsersInputObjectSchema as eventsUpdateManyWithWhereWithoutUsersInputObjectSchema } from './eventsUpdateManyWithWhereWithoutUsersInput.schema';
import { eventsScalarWhereInputObjectSchema as eventsScalarWhereInputObjectSchema } from './eventsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => eventsCreateWithoutUsersInputObjectSchema), z.lazy(() => eventsCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => eventsUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => eventsUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => eventsCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => eventsCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => eventsUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => eventsUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => eventsCreateManyUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => eventsWhereUniqueInputObjectSchema), z.lazy(() => eventsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => eventsUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => eventsUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => eventsUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => eventsUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => eventsScalarWhereInputObjectSchema), z.lazy(() => eventsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const eventsUncheckedUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.eventsUncheckedUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsUncheckedUpdateManyWithoutUsersNestedInput>;
export const eventsUncheckedUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
