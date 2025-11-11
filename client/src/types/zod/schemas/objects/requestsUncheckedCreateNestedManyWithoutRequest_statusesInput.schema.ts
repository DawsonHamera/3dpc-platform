import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsCreateWithoutRequest_statusesInputObjectSchema as requestsCreateWithoutRequest_statusesInputObjectSchema } from './requestsCreateWithoutRequest_statusesInput.schema';
import { requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema as requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema } from './requestsUncheckedCreateWithoutRequest_statusesInput.schema';
import { requestsCreateOrConnectWithoutRequest_statusesInputObjectSchema as requestsCreateOrConnectWithoutRequest_statusesInputObjectSchema } from './requestsCreateOrConnectWithoutRequest_statusesInput.schema';
import { requestsCreateManyRequest_statusesInputEnvelopeObjectSchema as requestsCreateManyRequest_statusesInputEnvelopeObjectSchema } from './requestsCreateManyRequest_statusesInputEnvelope.schema';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './requestsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => requestsCreateWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsCreateWithoutRequest_statusesInputObjectSchema).array(), z.lazy(() => requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => requestsCreateOrConnectWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsCreateOrConnectWithoutRequest_statusesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => requestsCreateManyRequest_statusesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => requestsWhereUniqueInputObjectSchema), z.lazy(() => requestsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const requestsUncheckedCreateNestedManyWithoutRequest_statusesInputObjectSchema: z.ZodType<Prisma.requestsUncheckedCreateNestedManyWithoutRequest_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUncheckedCreateNestedManyWithoutRequest_statusesInput>;
export const requestsUncheckedCreateNestedManyWithoutRequest_statusesInputObjectZodSchema = makeSchema();
