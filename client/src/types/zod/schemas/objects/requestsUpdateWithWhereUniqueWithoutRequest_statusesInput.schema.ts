import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsWhereUniqueInputObjectSchema as requestsWhereUniqueInputObjectSchema } from './requestsWhereUniqueInput.schema';
import { requestsUpdateWithoutRequest_statusesInputObjectSchema as requestsUpdateWithoutRequest_statusesInputObjectSchema } from './requestsUpdateWithoutRequest_statusesInput.schema';
import { requestsUncheckedUpdateWithoutRequest_statusesInputObjectSchema as requestsUncheckedUpdateWithoutRequest_statusesInputObjectSchema } from './requestsUncheckedUpdateWithoutRequest_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => requestsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => requestsUpdateWithoutRequest_statusesInputObjectSchema), z.lazy(() => requestsUncheckedUpdateWithoutRequest_statusesInputObjectSchema)])
}).strict();
export const requestsUpdateWithWhereUniqueWithoutRequest_statusesInputObjectSchema: z.ZodType<Prisma.requestsUpdateWithWhereUniqueWithoutRequest_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.requestsUpdateWithWhereUniqueWithoutRequest_statusesInput>;
export const requestsUpdateWithWhereUniqueWithoutRequest_statusesInputObjectZodSchema = makeSchema();
