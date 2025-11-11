import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './requestsWhereUniqueInput.schema';
import { requestsUpdateWithoutRequest_statusesInputObjectSchema as requestsUpdateWithoutRequest_statusesInputObjectSchema } from './requestsUpdateWithoutRequest_statusesInput.schema';
import { requestsUncheckedUpdateWithoutRequest_statusesInputObjectSchema as requestsUncheckedUpdateWithoutRequest_statusesInputObjectSchema } from './requestsUncheckedUpdateWithoutRequest_statusesInput.schema';
import { requestsCreateWithoutRequest_statusesInputObjectSchema as requestsCreateWithoutRequest_statusesInputObjectSchema } from './requestsCreateWithoutRequest_statusesInput.schema';
import { requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema as requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema } from './requestsUncheckedCreateWithoutRequest_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => requestsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => requestsUpdateWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsUncheckedUpdateWithoutRequest_statusesInputObjectSchema)]),
  create: z.union([z.lazy(() => requestsCreateWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsUncheckedCreateWithoutRequest_statusesInputObjectSchema)])
}).strict();
export const requestsUpsertWithWhereUniqueWithoutRequest_statusesInputObjectSchema: z.ZodType<Prisma.requestsUpsertWithWhereUniqueWithoutRequest_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUpsertWithWhereUniqueWithoutRequest_statusesInput>;
export const requestsUpsertWithWhereUniqueWithoutRequest_statusesInputObjectZodSchema = makeSchema();
