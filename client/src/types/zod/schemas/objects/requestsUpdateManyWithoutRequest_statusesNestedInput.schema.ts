import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsCreateWithoutRequest_statusesInputObjectSchema as requestsCreateWithoutRequest_statusesInputObjectSchema } from './requestsCreateWithoutRequest_statusesInput.schema';
import { requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema as requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema } from './requestsUncheckedCreateWithoutRequest_statusesInput.schema';
import { requestsCreateOrConnectWithoutRequest_statusesInputObjectSchema as requestsCreateOrConnectWithoutRequest_statusesInputObjectSchema } from './requestsCreateOrConnectWithoutRequest_statusesInput.schema';
import { requestsUpsertWithWhereUniqueWithoutRequest_statusesInputObjectSchema as requestsUpsertWithWhereUniqueWithoutRequest_statusesInputObjectSchema } from './requestsUpsertWithWhereUniqueWithoutRequest_statusesInput.schema';
import { requestsCreateManyRequest_statusesInputEnvelopeObjectSchema as requestsCreateManyRequest_statusesInputEnvelopeObjectSchema } from './requestsCreateManyRequest_statusesInputEnvelope.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './requestsWhereUniqueInput.schema';
import { requestsUpdateWithWhereUniqueWithoutRequest_statusesInputObjectSchema as requestsUpdateWithWhereUniqueWithoutRequest_statusesInputObjectSchema } from './requestsUpdateWithWhereUniqueWithoutRequest_statusesInput.schema';
import { requestsUpdateManyWithWhereWithoutRequest_statusesInputObjectSchema as requestsUpdateManyWithWhereWithoutRequest_statusesInputObjectSchema } from './requestsUpdateManyWithWhereWithoutRequest_statusesInput.schema';
import { requestsScalarWhereInputObjectSchema as requestsScalarWhereInputObjectSchema } from './requestsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => requestsCreateWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsCreateWithoutRequest_statusesInputObjectSchema).array(), z.lazy(() => requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => requestsCreateOrConnectWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsCreateOrConnectWithoutRequest_statusesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => requestsUpsertWithWhereUniqueWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsUpsertWithWhereUniqueWithoutRequest_statusesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => requestsCreateManyRequest_statusesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => requestsWhereUniqueInputObjectSchema), z.lazy(() => requestsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => requestsWhereUniqueInputObjectSchema), z.lazy(() => requestsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => requestsWhereUniqueInputObjectSchema), z.lazy(() => requestsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => requestsWhereUniqueInputObjectSchema), z.lazy(() => requestsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => requestsUpdateWithWhereUniqueWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsUpdateWithWhereUniqueWithoutRequest_statusesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => requestsUpdateManyWithWhereWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsUpdateManyWithWhereWithoutRequest_statusesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => requestsScalarWhereInputObjectSchema), z.lazy(() => requestsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const requestsUpdateManyWithoutRequest_statusesNestedInputObjectSchema: z.ZodType<Prisma.requestsUpdateManyWithoutRequest_statusesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUpdateManyWithoutRequest_statusesNestedInput>;
export const requestsUpdateManyWithoutRequest_statusesNestedInputObjectZodSchema = makeSchema();
