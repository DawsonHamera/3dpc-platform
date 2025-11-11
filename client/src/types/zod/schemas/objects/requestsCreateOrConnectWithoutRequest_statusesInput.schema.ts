import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './requestsWhereUniqueInput.schema';
import { requestsCreateWithoutRequest_statusesInputObjectSchema as requestsCreateWithoutRequest_statusesInputObjectSchema } from './requestsCreateWithoutRequest_statusesInput.schema';
import { requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema as requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema } from './requestsUncheckedCreateWithoutRequest_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => requestsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => requestsCreateWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema)])
}).strict();
export const requestsCreateOrConnectWithoutRequest_statusesInputObjectSchema: z.ZodType<Prisma.requestsCreateOrConnectWithoutRequest_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsCreateOrConnectWithoutRequest_statusesInput>;
export const requestsCreateOrConnectWithoutRequest_statusesInputObjectZodSchema = makeSchema();
