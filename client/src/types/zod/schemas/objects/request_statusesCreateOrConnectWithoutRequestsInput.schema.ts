import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesWhereUniqueInputObjectSchema as request_statusesWhereUniqueInputObjectSchema } from './request_statusesWhereUniqueInput.schema';
import { request_statusesCreateWithoutRequestsInputObjectSchema as request_statusesCreateWithoutRequestsInputObjectSchema } from './request_statusesCreateWithoutRequestsInput.schema';
import { request_statusesUncheckedCreateWithoutRequestsInputObjectSchema as request_statusesUncheckedCreateWithoutRequestsInputObjectSchema } from './request_statusesUncheckedCreateWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => request_statusesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => request_statusesCreateWithoutRequestsInputObjectSchema), z.lazy(() => request_statusesUncheckedCreateWithoutRequestsInputObjectSchema)])
}).strict();
export const request_statusesCreateOrConnectWithoutRequestsInputObjectSchema: z.ZodType<Prisma.request_statusesCreateOrConnectWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesCreateOrConnectWithoutRequestsInput>;
export const request_statusesCreateOrConnectWithoutRequestsInputObjectZodSchema = makeSchema();
